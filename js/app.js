(function() {
	var app = angular.module('blog', [ 'ngRoute']);
	
	app.config(function($routeProvider){
	  $routeProvider.when('/projects', {
	    controller: 'ProjectsController',
	    templateUrl: 'templates/projects.html'
	  })
	  .when('/blog', {
	    controller: 'BlogController',
	    templateUrl: 'templates/blog.html'
	  })
	  .when('/reflection', {
	    controller: 'ReflectionController',
	    templateUrl: 'templates/reflection.html'
	  })
	})

	app.controller('MenuController',['$scope', function($scope) {
		var $scope = this; 
		var tabs = $('a');

		tabs.on('click', function() {
			tabs.parent().removeClass('active');
			$(this).parent().addClass('active');
		});

		var index = window.location.hash.substring(2);

		//$("a[path="+index+"]").parent().addClass('active');

		console.log($("a[path="+index+"]"));

	}]);

	app.controller('ReflectionController', ['$scope', function($scope) {
		var $scope = this;
	}]);

	app.controller('BlogController', ['$scope', function($scope) {
		var $scope = this;
	}]);

	app.controller('ProjectsController',[ '$scope','$http', function($scope,$http) {
		var $scope = this;

		$scope.items = [];

		$http.get('projects.json').success(function(data) {
			$scope.items = data;
		});

		$scope.predicate = '-title';
	}]);

})();