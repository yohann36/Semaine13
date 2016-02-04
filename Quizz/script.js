var app = angular.module("myApp", []).controller('quizzCtrl', function($scope){
       
       
        $scope.quizz=[
           {
            "number":1,
            "question":"Do AngularJS provide reusable components?",
            "rep1":"true",
            "rep2":"false",
            "rep3":"",
            "rep4":"",
            "reponse":"rep1",
            "value":1    
            },{
            "number":2,
            "question":"AngularJS expressions are written using.",
            "rep1":"double braces like {{ expression}}",
            "rep2":"single braces like {expression}",
            "rep3":"small bracket like (expression)",
            "rep4":"capital bracket like [expression]",
            "reponse":"rep1",
            "value":1 
            },{
            "number":3,
            "question":"Which of the following is true about ng-disabled directive?",
            "rep1":"ng-disabled directive can enable a given control.",
            "rep2":"ng-disabled directive can disable a given control.",
            "rep3":"Both of the above.",
            "rep4":"None of the above.",
            "reponse":"rep3",
            "value":1   
            },{
            "number":4,
            "question":"$rootScope is the parent of all of the scope variables.",
            "rep1":"true",
            "rep2":"false",
            "rep3":"",
            "rep4":"",
            "reponse":"rep1",
            "value":1 
            },{
            "number":5,
            "question":"ng-init directive can be used to put values to the variables to be used in the application.",
            "rep1":"true",
            "rep2":"false",
            "rep3":"",
            "rep4":"",
            "reponse":"rep1",
            "value":1 
            },{
            "rep1":""
            }];
        $scope.startStyle   = 'block';
        $scope.questionStyle = 'none';
        $scope.final = 'none';
        $scope.index         = 0;
        
            
        $scope.start = function(){
            $scope.startStyle    = 'none';
            $scope.questionStyle = 'block';
            $scope.effet         = 'none';
            $scope.effetf        = 'block';
        };
        
        $scope.point=0;
        
        $scope.questionnaire = function(){
            
            $scope.effetf='block';
             
            if($scope.quizz[$scope.index].reponse==$scope.rep){
                $scope.point+=2;
            }
            
            if($scope.quizz[$scope.index].rep1!= ""){
                $scope.index+=1;
                 
                if($scope.quizz[$scope.index].rep3== ""){
                    $scope.effet="none";
                }else{
                    $scope.effet="block";
                }
            }
            if($scope.quizz[$scope.index].rep1== ""){
                $scope.finish();
                if($scope.point<3){
                    $scope.msg="Allez !! TRY IT AGAIN";
                }else if($scope.point>3){
                    $scope.msg="Bien Joué, GOOD!";
                }else{
                    $scope.msg="PILE AU MILIEU !!";
                }
                 
            }
        };
        
        $scope.finish = function(){
                $scope.questionStyle ='none';
                $scope.effetf        ='none';
                $scope.effet         ='none';
                $scope.final         ='block';
        };
        
        });
               

       