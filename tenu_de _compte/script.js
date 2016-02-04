var app = angular.module("myApp", [])
    .controller('compteCtrl', function($scope){
    
       $scope.totalCredit = 0;
       $scope.totalDebit  = 0;
       $scope.totalBilan  = 0;
       $scope.ute         =' euro(s).';
       $scope.effetl      ="none";
       $scope.effetlD     ='none';
       $scope.effetlC     ='none';
       $scope.effetm      ="inline-block";
       var num            = 0;
       
        $scope.credit     = [{"amount":1000 ,"content":"salaire"}];
        $scope.debit      = [{"amount":20   ,"content":"Mc DO" }];
        
/*----------function du controlller CompteCtrl------------*/        
            
        $scope.bilan = function(){
            $scope.totalCredit =0;
            $scope.totalDebit  =0;
            
            for(var i=0;i<$scope.credit.length;i++) {
                $scope.totalCredit += $scope.credit[i].amount;
            }
            for(var c=0;c<$scope.debit.length;c++) {
                $scope.totalDebit  += $scope.debit[c].amount;
            }
            $scope.totalBilan = $scope.totalCredit-$scope.totalDebit;
            
        };
        
       
        $scope.addMoney = function(){
            num                = parseInt($scope.montant,10);
            $scope.montant     = "";
            $scope.effetm      ='none';
            $scope.effetl      ='inline-block';
            $scope.effetlC     ='inline-block';
                if(isNaN(num)){
                    alert('Merci de d\'ajouter un montant !');
                    $scope.effetl      ='none';
                    $scope.effetlC     ='none';
                    $scope.effetm      ='inline-block';
                }
            };
        
        $scope.addMoneyLabel = function(){
                
            $scope.credit.push({'amount': num ,'content': $scope.libeller});
            $scope.libeller    = "";
            $scope.effetl      ='none';
            $scope.effetlC     ='none';
            $scope.effetm      ='inline-block';
            num                = 0;
            $scope.bilan();
            };
            
        $scope.removeMoney = function(){
            num                = parseInt($scope.montant,10);
            $scope.montant     = "";
            $scope.effetm      ='none';
            $scope.effetl      ='inline-block';
            $scope.effetlD     ='inline-block';
                if(isNaN(num)){
                    alert('Merci de d\'ajouter un montant !');
                    $scope.effetl      ='none';
                    $scope.effetlD     ='none';
                    $scope.effetm      ='inline-block';
                }
            };
            
        $scope.removeMoneyLabel = function(){
                
            $scope.debit.push({'amount': num ,'content': $scope.libeller});
            $scope.libeller    = "";
            $scope.effetl      ='none';
            $scope.effetlD     ='none';
            $scope.effetm      ='inline-block';
            num                = 0;
            $scope.bilan();
            };
        $scope.bilan();
        });


              