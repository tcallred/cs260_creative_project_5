angular.module('app', [])
    .controller('mainCtrl', ['$scope', '$http', mainCtrl]);

function mainCtrl($scope, $http) {

    $scope.images = [];
    $scope.canvas = {
        name: "Untitled",
        images: []
    };
    $scope.canvasArray = [];

    $scope.addImage = function(img) {
        $scope.canvas.images.push({
            picName: img.name,
            picUrl: img.url,
            picWidth: 500,
            picIndex: 1,
            picLeft: 700,
            picTop: 200,
            picSelected: false
        });
        img.name = '';
        img.url = '';
        console.log($scope.images);
    }
    $scope.selected = function(img) {
        img.picSelected = true;
    }
    $scope.unselected = function(img) {
        img.picSelected = false;
    }
    $scope.returnClass = function(img) {
        if (img.picSelected) {
            return 'selected';
        } else {
            return '';
        }
    }
    $scope.saveCanvas = function(c) {

        console.log(c);
        return $http.post('/canvases', c).success(function(data) {
            $scope.loadAll();
        });

    }
    $scope.loadCanvas = function(c) {
        $scope.canvas.name = angular.copy(c.name);
        $scope.canvas.images = angular.copy(c.images);
        console.log($scope.canvas);
    }
    $scope.loadAll = function() {
        return $http.get('/canvases').success(function(data) {
            angular.copy(data, $scope.canvasArray);
        });
    }
    $scope.loadAll();
}