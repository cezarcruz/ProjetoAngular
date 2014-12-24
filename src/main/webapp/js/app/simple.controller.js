controllers.SimpleController = function($scope, $http) {
	
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
		var retorno;
		var estado;
		$http.get('/angular/oi').success(function(data, status) {
			$scope.personagens.push(data);
			console.log(status);
		}).error(function(data, status) {
			retorno = data;
			estado = status;
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

meuApp.factory('simpleFactory', function(){
	var factory = {};
	var personagens = [{name: 'Jhon', type : 'Ninja'}, {name: 'Fusco', type : 'Cop'}];
	factory.getPersonagens = function() {
		return personagens;
	}
	
	return factory;
})