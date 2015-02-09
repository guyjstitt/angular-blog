(function() {
	var app = angular.module('blog', [ 'ngRoute']);
	
	app.config(function($routeProvider){
	  $routeProvider.when('/', {
	    controller: 'ListController',
	    templateUrl: 'templates/list.html'
	  })
	  .when('/blog', {
	    controller: 'BlogController',
	    templateUrl: 'templates/blog.html'
	  })
	})

	app.controller('BlogController', ['$scope', function($scope) {
		var $scope = this;
	}]);
	app.controller('ListController',[ '$scope','$http', function($scope,$http) {
		var $scope = this;

		$scope.items = [];

		$http.get('tutorials.json').success(function(data) {
			$scope.items = data;
		});

		$scope.predicate = '-author';
	}]);

})();