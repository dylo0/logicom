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

    $scope.companies = [
      {
        name: "Logicom",
        adress: "Rybnicka 32A/2",
        zip: "44-200",
        city: "Gliwice",
        tax: "635-12-53-11",
        phone: "32 123 456",
        fax: "32 123 457",
        email: "biuro@logicom.pl",
        www: "www.logicom.pl"
      },
      {
        name: "Logicom",
        adress: "Rybnicka 32A/2",
        zip: "44-200",
        city: "Gliwice",
        tax: "635-12-53-11",
        phone: "32 123 456",
        fax: "32 123 457",
        email: "biuro@logicom.pl",
        www: "www.logicom.pl"
      },
      {
        name: "Logicom",
        adress: "Rybnicka 32A/2",
        zip: "44-200",
        city: "Gliwice",
        tax: "635-12-53-11",
        phone: "32 123 456",
        fax: "32 123 457",
        email: "biuro@logicom.pl",
        www: "www.logicom.pl"
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

  });