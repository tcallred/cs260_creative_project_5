angular.module('app', [])
    .controller('mainCtrl', mainCtrl);

function mainCtrl($scope) {
    $scope.images = [];

    $scope.addImage = function(img) {
        $scope.images.push({
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
}