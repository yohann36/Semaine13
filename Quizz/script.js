var app = angular.module("Myapp", []).controller('GenderCtrl', function($scope){
       $scope.points=[];
       $scope.ute=" point."
       
        $scope.sex=[
           {
            "content":"male",
            "value":1    
            },{
            "content":"female",
            "value":2
            }],
        $scope.couleur=[
            {
            "content":"blonde",
            "value":1   
            },{
            "content":"brune",
            "value":2
            },{
            "content":"chatain",
            "value":3
            },{
            "content":"rousse",
            "value":4
            },{
            "content":"chauve",
            "value":5
            }],
        $scope.lieu=[
            {
            "content":"hyperville",
            "value":1  
            },{
            "content":"ville",
            "value":2
            },{
            "content":"banlieue",
            "value":3
            },{
            "content":"Campagne",
            "value":4
            }];
        $scope.addpoint = function(){
            for(var i=0;i<$scope.radio.length;i++){
                if($scope.radio.spellcheck==true){
                $scope.points.push($scope.radio[i].elementChild);
                }
            }
             
            }
        
        });
               

       