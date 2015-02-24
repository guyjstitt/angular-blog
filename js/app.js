(function() {
	var app = angular.module('blog', [ 'ngRoute']);
	
	app.config(function($routeProvider){
	  $routeProvider.when('/home', {
	    controller: 'ListController',
	    templateUrl: 'templates/list.html'
	  })
	  .when('/blog', {
	    controller: 'BlogController',
	    templateUrl: 'templates/blog.html'
	  })
	  .when('/node', {
	    controller: 'NodeController',
	    templateUrl: 'templates/node.html'
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

		$("a[path="+index+"]").parent().addClass('active');

		console.log($("a[path="+index+"]"));

	}]);

	app.controller('BlogController', ['$scope', function($scope) {
		var $scope = this;
	}]);

	app.controller('NodeController', ['$scope', function($scope) {
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