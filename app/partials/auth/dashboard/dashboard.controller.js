(function () {
    'use strict';
    angular
        .module('myApp')
        .controller('DashboardCtrl', DashboardController);

    DashboardController.$inject = ['Dashboard', '$state', 'TokenStorage'];
    function DashboardController(Dashboard, $state) {
        var vm = this;
        vm.ownerTournaments = [];
        vm.refereeTournaments = [];
        vm.participantTournaments = [];
        vm.loadAll = loadAll;
        vm.goToTournament = goToTournament;


        function loadAll() {
            Dashboard.loadAll().$promise.then(successCallback, failureCallback);


            function successCallback(data) {
                vm.ownerTournaments = data.organizedTournaments;
                vm.refereeTournaments = [];
                vm.participantTournaments = data.participatingTournaments;
            }

            function failureCallback(error) {
                console.log("BLAD PRZY WYCIAGANIU TURNIEJOW")
            }
        }

        function goToTournament(tournament) {
            $state.go('Tournament', {'tournamentId' : tournament.id})
        }

        vm.loadAll();
    }

})();






