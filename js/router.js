app.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/home');
    
	$stateProvider
		.state('Home', {
			abstract: false,
			url: '/home',
			templateUrl: 'src/home/index.html'
		})
		.state('OptionAdd', {
			abstract: false,
			url: '/option-add',
			templateUrl: 'src/option-add/option-add-index.html'
		})
		.state('OptionList', {
			abstract: false,
			url: '/option-list',
			templateUrl: 'src/option-list/option-list-index.html'
		});
});