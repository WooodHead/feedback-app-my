
app.controller('HomeCtrl',['$scope',
function($scope){
  $scope.test="111";
}
])
.controller('QuestionsCtrl',['$scope',function($scope){
  
  $scope.questions=[{'text':'123123','type':'type1'}];
  $scope.test="111";
  
}]);