var app = angular.module("tableApp", []);

app.controller("dataController", function ($scope) {

    $scope.collection =
        [
            { netValue: 0, vatRate: 23, vatValue: 0, grossValue: 0 }
        ];

    $scope.addRow = function () {
        $scope.newRow ={ netValue: 0, vatRate: 23, vatValue: 0, grossValue: 0};
        $scope.collection.push($scope.newRow);
    };

    $scope.removeRow = function (selectedRow) {
        $scope.collection.splice((selectedRow),1);
    };


    $scope.getTotalNetValue = function(){
        var total = 0;
        for(var i = 0; i < $scope.collection.length; i++){
            var sum = $scope.collection[i];
            if(angular.isNumber(sum.netValue) && sum.netValue>=0) {
                total += sum.netValue;
            }
        }
        total = total.toFixed(2);
        return total;
    };

    $scope.getTotalVatValue = function(){
        var total = 0;
        for(var i = 0; i < $scope.collection.length; i++){
            var sum = $scope.collection[i];
            if(angular.isNumber(sum.vatValue) && sum.vatValue>=0) {
                total += sum.vatValue;
            }
        }
        total = total.toFixed(2);
        return total;
    };

    $scope.getTotalGrossValue = function(){
        var total = 0;
        for(var i = 0; i < $scope.collection.length; i++){
            var sum = $scope.collection[i];
            if(angular.isNumber(sum.grossValue) && sum.grossValue>=0) {
                total += sum.grossValue;
            }
        }
        total = total.toFixed(2);
        return total;
    };
});
