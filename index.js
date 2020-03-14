var app = angular.module("tableApp", []);

app.controller("dataController", function ($scope) {
    $scope.collection1 =
        [
            {index: "#",  netValue: "Wartość netto", vatRate: "Stawka VAT", vatValue: "Wartość VAT", grossValue: "Wartość brutto"},

        ];
    $scope.collection2 =
        [
            { netValue: 0, vatRate: 23, vatValue: 0, grossValue: 0 }


        ];

    $scope.addRow = function () {
        $scope.newRow ={index:"", addOrRemove: "", netValue: 0, vatRate: 23, vatValue: 0, grossValue: 0};
        $scope.collection2.push($scope.newRow);

    };
    $scope.removeRow = function (selectedRow) {

        $scope.collection2.splice((selectedRow),1);

    };


    $scope.getTotalNetValue = function(){
        var total = 0;
        for(var i = 0; i < $scope.collection2.length; i++){
            var sum = $scope.collection2[i];
            total += sum.netValue;
        }
        return total;
    };

    $scope.getTotalVatValue = function(){
        var total = 0;
        for(var i = 0; i < $scope.collection2.length; i++){
            var sum = $scope.collection2[i];
            total += sum.vatValue;
        }
        return total;
    };

    $scope.getTotalGrossValue = function(){
        var total = 0;
        for(var i = 0; i < $scope.collection2.length; i++){
            var sum = $scope.collection2[i];
            total += sum.grossValue;
        }
        return total;
    };









});
