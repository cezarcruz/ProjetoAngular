controllers.SimpleController = function($scope) {
	
	//$scope.digits = 2;
	
	$scope.personagens = [ {
		name : 'Griffin',
		type : 'Human'
	}, {
		name : 'Nick',
		type : 'Grimm'
	}, {
		name : 'Rosalee',
		type : 'Fusbal'
	}, {
		name : 'Woo',
		type : 'Human'
	}, {
		name : 'Juliete',
		type : 'Exembiets'
	}, {
		name : 'Monroe',
		type : 'Butlbad'
	} ];

	$scope.addNovoNome = function () {		
		$scope.personagens.push({
			name : $scope.novoNome.name,
			type : $scope.novoNome.type
		});		
	};
	
	$scope.changeCampo = function () {
		var teste = 2;
		if ($scope.modelo.length > 2) {
			teste = 2;
		} else {
			teste = 4;
		}
		$scope.digits = teste;
	};
	$scope.showOverlay = true;
};

meuApp.controller(controllers);

meuApp.directive("alert", function() {
	return {
		templateUrl : 'partials/alert.html',
		replace: true,
		scope : {
			
		}
	};
}).directive("mascara", function() {
	
});