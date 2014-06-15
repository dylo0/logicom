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
        function: "-",
        company: "logicom"
      },
      {
        logicomId: 1235123,
        name: "Lukasz",
        surname: "Maciejewski",
        email: "lukasz@mailinator.com",
        phone: "32 543 15 21",
        fax: "33 654 45 44",
        function: "Spedytor",
        company: "mailinator"
      },
      {
        logicomId: 1235123,
        name: "Patryk",
        surname: "Stefanik",
        email: "biuro@asd.com",
        phone: "11 22 242 12 54",
        fax: "11 23 423 23 12",
        function: "Wlasciciel",
        company: "asd"
      }
    ];

    var openModal = function (user) {
      var modalInstance = $modal.open({
        templateUrl: 'views/edit_user.html',
        controller: 'EditUserCtrl',
        size: "lg",
        resolve: {
          user: function () {
            return user;
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

    $scope.editUser = function (user) {
      console.log(user);
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

      openModal(user);
    }

  });