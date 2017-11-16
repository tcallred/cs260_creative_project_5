angular.module('app', [])
    .controller('mainCtrl', ['$scope', '$http', mainCtrl]);

function mainCtrl($scope, $http) {

    $scope.images = [];
    $scope.canvas = {
        name: "Untitled",
        images: []
    };
    $scope.canvasArray = [{
            name: "Test 1",
            images: [{
                picName: 'Google',
                picUrl: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png',
                picWidth: 500,
                picIndex: 1,
                picLeft: 700,
                picTop: 200,
                picSelected: false
            }]
        },
        {
            name: "Test 2",
            images: [{
                picName: 'Google',
                picUrl: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png',
                picWidth: 500,
                picIndex: 1,
                picLeft: 700,
                picTop: 200,
                picSelected: false
            }]
        }
    ]

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
        $scope.canvasArray.push(c);
        // return $http.post('/canvases', c).success(function(data) {
        // $scope.loadAll();
        // });

    }
    $scope.loadCanvas = function(c) {
        $scope.canvas = c;
    }
    $scope.loadAll = function() {
        return $http.get('/canvases').success(function(data) {
            angular.copy(data, $scope.canvasArray);
        });
    }
}