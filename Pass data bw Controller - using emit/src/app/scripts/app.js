angular.module("myApp", [])
    .controller("parentController", function ($scope) {
        // event listener for 'emitEvent'
        $scope.$on("emitEvent", (event, data) => {
            // broadcast to all child controller
            $scope.$broadcast("broadcastEvent", data);
        })
    })
    .controller("sibblingController1", function ($scope) {
        // emiting value to parent controller
        $scope.emitValueToParentController = function (msg) {
           $scope.$emit("emitEvent",msg) 
        }
    })
    .controller("sibblingController2", function ($scope) {
        // event listener for 'emitEvent'
        $scope.$on("broadcastEvent", (event, msg) => {
            $scope.value = msg
        });
    })