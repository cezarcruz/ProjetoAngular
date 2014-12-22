controllers.SimpleController = function($scope) {
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
	$scope.showOverlay = true;
};

meuApp.controller(controllers);