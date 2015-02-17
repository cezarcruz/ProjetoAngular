meuApp.controller('BoletoCtrl', ['$scope', function($scope){
	
	$scope.validar = function(barcode) {
		validarPorBloco(barcode.substring(0, 11), barcode.substring(11, 12));
	}
	
	//dac10
	function validarPorBloco(bloco, dv) {		
		blocoArr = bloco.split(""); //transformo o bloco em array.
		var arrSoma = [];
		for (i = 0; i < blocoArr.length; i++) {
			if (i % 2 == 0) {
				arrSoma[i] = blocoArr[i] * 2;
			} else {
				arrSoma[i] = blocoArr[i] * 1;
			}
		}
		arrSoma1Digito = [];
		for (i = 0; i < arrSoma.length; i++) {
			//arrSoma1Digito.push(arrSoma[i].split(""));
			var verifyDigits = arrSoma[i].toString().split("");
			
			if (verifyDigits.toString().split("").length > 1) {
				arrSoma1Digito.push(verifyDigits[0]);
				arrSoma1Digito.push(verifyDigits[1]);
			} else {
				arrSoma1Digito.push(verifyDigits[0]);
			}
		}
		var total = 0;
		for (i = 0; i < arrSoma1Digito.length; i++) {
			total += parseInt(arrSoma1Digito[i]);
		}
		var dac10 = 10 - (total % 10);
		alert(dac10);
		//alert(total);
		//_.each(arrSoma1Digito, alert);
	}
	
}]);