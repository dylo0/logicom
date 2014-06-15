'use strict';

/**
 * @ngdoc function
 * @name adminPanelApp.controller:UsersCtrl
 * @description
 * # UsersCtrl
 * Controller of the adminPanelApp
 */
angular.module('adminPanelApp')
  .controller('UsersCtrl', function ($scope, $modal) {

    $scope.users = [{
        logicomId: 1235123,
        name: "Tomasz",
        surname: "Dyl",
        email: "tomasz@mailinator.com",
        phone: "32 124 12 123",
        fax: "43 231 12312",
        function: "admin",
        company: "logicom"
      },
      {
        logicomId: 1235123,
        name: "Tomasz",
        surname: "Dyl",
        email: "tomasz@mailinator.com",
        phone: "32 124 12 123",
        fax: "43 231 12312",
        function: "admin",
        company: "logicom"
      },
      {
        logicomId: 1235123,
        name: "Tomasz",
        surname: "Dyl",
        email: "tomasz@mailinator.com",
        phone: "32 124 12 123",
        fax: "43 231 12312",
        function: "admin",
        company: "logicom"
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