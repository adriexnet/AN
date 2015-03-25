app.controller('OptionListCtrl', function($scope) {
		$scope.users = [];
		$scope.users.push({id: 1, name: 'Abdi'});
		$scope.users.push({id: 2, name: 'TEST'});
		
		$scope.remove = function(index){
			$scope.users.splice(index, 1);
		};
	}
);