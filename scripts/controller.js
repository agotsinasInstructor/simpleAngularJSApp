app.controller('myGameController',['$scope',function($scope){
  
    $scope.tableColor = "mt-3 table table-dark";

    $scope.playerStatistics = [
        {'playername':'Antony','date':'1/2/2023','score':'5234'},
        {'playername':'John','date':'5/2/2023','score':'5244'},
        {'playername':'Mary','date':'3/2/2023','score':'3244'},
        {'playername':'Mike','date':'2/2/2023','score':'5220'},
        {'playername':'George','date':'4/2/2023','score':'5224'},
        {'playername':'Max','date':'6/2/2023','score':'4234'}
    ];

    $scope.showOptions = false;

    $scope.onButtonPressed = function() {
        $scope.playerStatistics[3].score =parseInt($scope.playerStatistics[3].score)+1;
        
    }
   
    $scope.onConfigButtonPressed=function(){
        if ($scope.showOptions == true)
            $scope.showOptions = false;
        else
            $scope.showOptions = true;
         
    }
  
}])