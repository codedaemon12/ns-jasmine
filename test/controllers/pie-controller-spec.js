describe('PieController',function(){
	var $rootScope,
		$scope,
		controller;

	beforeEach(function(){
		module('pie');

		inject(function($injector){
			$rootScope = $injector.get('$rootScope');
			$scope = $rootScope.$new();
			controller = $injector.get('$controller')('PieController',{$scope: $scope});
		});
	});

	describe('Action handlers',function(){
		describe('Eat sliec',function(){
			it('Should decrement the number of slices',function(){
				expect($scope.slices).toEqual(8);
				$scope.eatSlice();
				expect($scope.slices).toEqual(7);
			});
			it('Should do nothing when slice is 0',function(){
				$scope.slices=0;
				$scope.eatSlice();
				expect($scope.slices).toEqual(0);
			});
		})

	});

	describe('Initialization',function(){
		it('should initialize to 8',function(){
			//console.log('slices :'+$scope.slices);
			expect($scope.slices).toEqual(8);
		})
	});
});	