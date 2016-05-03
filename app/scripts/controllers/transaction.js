'use strict';

/**
 * @ngdoc function
 * @name fakeBankApp.controller:TransactionCtrl
 * @description
 * # TransactionCtrl
 * Controller of the fakeBankApp
 */
angular.module('fakeBankApp')
  .controller('TransactionCtrl', function ($scope, $mdDialog) {
    $scope.showModal = showModal;

    function showModal() {
      var confirm = $mdDialog.confirm({
        title: 'Transacción exitosa',
        textContent: 'Descargue su comprobante con el siguiente botón.',
        ok: 'Guardar Archivo',
        cancel: 'Cancelar'
      });

      $mdDialog.show(confirm);
    }
  });
