angular.module("myApp", [])
    // .controller("parentController", function ($scope) {
    //     $scope.data = 1
    // })
    .controller("sibblingController1", function ($scope, sharedService) {
        $scope.sharedService = sharedService
        $scope.shareValueToController2 = function () {
            sharedService.share = 'Hey u too take this value'
        }
    })
    .controller("sibblingController2", function ($scope, sharedService) {
        $scope.sharedService = sharedService
    })
    .factory("sharedService", function () {
        return {
            share: 'value'
        }
    })