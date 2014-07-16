'use strict';

/**
 * @ngdoc function
 * @name adminPanelApp.controller:CompanyCtrl
 * @description
 * # CompanyCtrl
 * Controller of the adminPanelApp
 */
angular.module('adminPanelApp')
  .controller('CompanyCtrl', ['$scope', '$modal', '$http', 'Helpers', '$timeout', function ($scope, $modal, $http, Helpers, $timeout) {
    $scope.itemsPerPage = 2;

    $http.get('companyList').
      success(function (data, status) {
        $scope.companies = data;
      }).
      error(function (data, status) {
        var msg = "error: " + data;
        Helpers.displayMessage(msg, 'Cannot get company list', 'md', false);
      })

      // change logicomid into _id;
    // $scope.companies = [
    //   {
    //     name: 'Logicom',
    //     _id: '12312312312',
    //     adress: 'Rybnicka 32A/2',
    //     zip: '44-200',
    //     city: 'Gliwice',
    //     tax: '635-12-53-11',
    //     phone: '32 123 456',
    //     fax: '32 123 457',
    //     email: 'biuro@logicom.pl',
    //     www: 'www.logicom.pl',
    //     users: [{
    //       logicomId: 1235123,
    //       name: 'Tomasz',
    //       surname: 'Dyl',
    //       email: 'tomasz@mailinator.com',
    //       phone: '32 124 12 123',
    //       fax: '43 231 12312',
    //       func: '-',
    //       company: 'logicom'
    //     }]
    //   }
    // ];

    var openCompanyModal = function (company) {
      var modalInstance = $modal.open({
        templateUrl: 'views/new_company.html',
        controller: 'NewCompanyCtrl',
        size: 'lg',
        resolve: {
          company: function () {
            return company;
          }
        }
      });

      modalInstance.result.then(function (editedCompany) {
        $http.post('updateCompany', editedCompany).
          success(function (data) {
            console.log(data);
            for (var i=0; i<$scope.companies.length; i++) {
              if ($scope.companies[i]._id === data._id) {
                $timeout(function () {
                  $scope.companies[i] = data
                });
                return;
              }
            }

            $scope.companies.push(data);
          }).
          error(function (data) {
            console.log(data);
          });

        // TODO add searching for company already in scope - for edit
        // $scope.companies.push(editedCompany);
      });
    };

    $scope.showUsers = function (company) {
       $http.get('listCompanyUsers/' + company._id).
        success(function (data, status) {
          var users = data;

          $modal.open({
            templateUrl: 'views/show_users.html',
            controller: 'ShowusersCtrl',
            size: 'lg',
            resolve: {
              users: function () {
                return users;
              },
              company: function () {
                return company;
              }
            }
          });
        }).
        error(function (data, status) {
          var msg = "error: " + data;
          Helpers.displayMessage(msg, 'Cannot get user list', 'md', false);
        });
    };

    $scope.newCompany = function () {
      console.log('opening new company');
      // initializes first user for modal so modal will show her
      var company = {
        users: [{
          id: 0
        }]
      };
      openCompanyModal(company);
    };

    $scope.editCompany = function (company) {
      // To be implemented
      // gets userList for a company from server 
      // $http.get('admin/companies/company.id', {cache: true}).
      //   success(function (data) {
      //     company.users = data.users;
      //     openModal(company);
      //   }).
      //   error(function (data) {
      //     // body...
      //   });

      openCompanyModal(company);
    };

    $scope.setPaginationSize = function (size) {
      $scope.itemsPerPage = size;
    };

  }]);