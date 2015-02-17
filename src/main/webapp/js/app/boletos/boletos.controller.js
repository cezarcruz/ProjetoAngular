meuApp.controller('BoletoCtrl', [ '$scope', function($scope) {

	/**
	 * Valida o código de barros.
	 */
	$scope.validar = function(barcode) {

		var bloco1 = barcode.substring(0, 11);
		var dv1 = barcode.substring(11, 12);
		var bloco2 = barcode.substring(12, 23);
		var dv2 = barcode.substring(23, 24);
		var bloco3 = barcode.substring(24, 35);
		var dv3 = barcode.substring(35, 36);
		var bloco4 = barcode.substring(36, 47);
		var dv4 = barcode.substring(47, 48);

		if (bloco1.charAt(2) == "6" || bloco1.charAt(2) == "7") { // dac10
			if (validarPorBlocoDac10(bloco1, dv1)) {
				if (validarPorBlocoDac10(bloco2, dv2)) {
					if (validarPorBlocoDac10(bloco3, dv3)) {
						if (validarPorBlocoDac10(bloco4, dv4)) {
							alert("Código por bloco é valido")
						} else {
							alert("Bloco 4 invalido");
						}
					} else {
						alert("Bloco 3 invalido");
					}
				} else {
					alert("Bloco 2 invalido");
				}
			} else {
				alert("Bloco 1 invalido");
			}
		} else {// dac11
			if (validarPorBlocoDac11(bloco1, dv1)) {
				if (validarPorBlocoDac11(bloco2, dv2)) {
					if (validarPorBlocoDac11(bloco3, dv3)) {
						if (validarPorBlocoDac11(bloco4, dv4)) {
							alert("Código por bloco é valido")
						} else {
							alert("Bloco 4 invalido");
						}
					} else {
						alert("Bloco 3 invalido");
					}
				} else {
					alert("Bloco 2 invalido");
				}
			} else {
				alert("Bloco 1 invalido");
			}
		}

		// validarPorBlocoDac11(barcode.substring(0, 11), barcode.substring(11,
		// 12));
	}
	
	/**
	 * Valida bloco dac10
	 */
	function validarPorBlocoDac10(bloco, dv) {
		blocoArr = bloco.split(""); // transformo o bloco em array.
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
			// arrSoma1Digito.push(arrSoma[i].split(""));
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
		return dac10 == dv;
	}

	/**
	 * Valida bloco dac10
	 */
	function validarPorBlocoDac11(bloco, dv) {
		var blocoArr = bloco.split("");// transforma o bloco em array.
		var total = 0;
		total += (blocoArr[0] * 4);
		total += (blocoArr[1] * 3);
		total += (blocoArr[2] * 2);
		total += (blocoArr[3] * 9);
		total += (blocoArr[4] * 8);
		total += (blocoArr[5] * 7);
		total += (blocoArr[6] * 6);
		total += (blocoArr[7] * 5);
		total += (blocoArr[8] * 4);
		total += (blocoArr[9] * 3);
		total += (blocoArr[10] * 2);

		var dac11 = total % 11;
		return dac11 == dv;
	}

} ]);