app.controller('MenuCtrl', function($scope, $mdSidenav) {
		$scope.toggleSidenav = function(menuId) {
			$mdSidenav(menuId).toggle();
		};
	}
);