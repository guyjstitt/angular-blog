(function() {
	var app = angular.module('blog', []);
	

	app.controller('ListController',[ '$scope','$http', function($scope,$http) {
		var $scope = this;

		$scope.items = [];

		$http.get('tutorials.json').success(function(data) {
			$scope.items = data;
		});

		$scope.predicate = '-author';
	}]);

})();