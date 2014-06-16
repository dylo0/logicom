'use strict';

/**
 * @ngdoc function
 * @name adminPanelApp.controller:CompanyCtrl
 * @description
 * # CompanyCtrl
 * Controller of the adminPanelApp
 */
angular.module('adminPanelApp')
  .controller('CompanyCtrl', function ($scope, $modal) {
    $scope.itemsPerPage = 2;
    $scope.companies = [
      {
        name: "Logicom",
        logicomId: "12312312312",
        adress: "Rybnicka 32A/2",
        zip: "44-200",
        city: "Gliwice",
        tax: "635-12-53-11",
        phone: "32 123 456",
        fax: "32 123 457",
        email: "biuro@logicom.pl",
        www: "www.logicom.pl",
        users: [{}]
      },
      {
        name: "Inna firma",
        adress: "wodzislawska 15",
        zip: "41-300",
        city: "Rybnik",
        tax: "63-22-54-111",
        phone: "32 432 432",
        fax: "32 432 123",
        email: "me@another.pl",
        www: "www.another.pl",
        users: [{}]
      },
      {
        name: "eurotrans",
        adress: "Lokietka 2",
        zip: "44-223",
        city: "Poznan",
        tax: "123-321-12",
        phone: "22 221 242",
        fax: "22 221 421",
        email: "biuro@eurotrans.com",
        www: "eurotrans.com",
        users: [{}]
      }
    ];

    var openModal = function (company) {
      var modalInstance = $modal.open({
        templateUrl: 'views/new_company.html',
        controller: 'NewCompanyCtrl',
        size: "lg",
        resolve: {
          company: function () {
            return company;
          }
        }
      });

      modalInstance.result.then(function (editedCompany) {
        console.log(editedCompany);
        // post edited company, get it with assigned id, and push to scope companies
        // $http.post('admin/companies', editedCompany).
        //   success(function (data) {
        //     
        //   }).
        //   error(function (data) {
        //     // body...
        //   });

        // TODO add searching for company already in scope - for edit
        $scope.companies.push(editedCompany);
      })
    }

    $scope.newCompany = function () {
      console.log('opening new company')
      // initializes first user for modal so modal will show her
      var company = {
        users: [{
          id: 0
        }]
      };
      openModal(company);
    }

    $scope.editCompany = function (company) {
      // To be implemented
      // gets userList for a company from server 
      // $http.get('admin/companies/company.id').
      //   success(function (data) {
      //     company.users = data.users;
      //     openModal(company);
      //   }).
      //   error(function (data) {
      //     // body...
      //   });

      openModal(company);
    }

    $scope.setPaginationSize = function (size) {
      $scope.itemsPerPage = size;
    }

  });