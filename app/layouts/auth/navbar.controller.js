(function () {
    'use strict';
    angular
        .module('myApp')
        .controller('NavbarController', NavbarController);

    NavbarController.$inject = ['TokenStorage', 'toastr'];
    function NavbarController(TokenStorage, toastr) {
        var vm = this;
        
        vm.isAuthenticated = TokenStorage.isAuthenticated();
        vm.logoutFunction = logoutFunction;

        function logoutFunction() {
            toastr.success("See you, " + TokenStorage.decode(TokenStorage.retrieve()).username);
            TokenStorage.clear();
        }

    }

})();