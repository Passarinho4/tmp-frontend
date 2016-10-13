/**
 * Created by mf57 on 02.10.2016.
 */
(function () {
    'use strict';
    angular
        .module('myApp')
        .factory('Dashboard', DashboardService);


    DashboardService.$inject = ['ApiUrls', '$resource'];
    function DashboardService(ApiUrls, $resource) {
        var resourceUrl = ApiUrls.enrollmentApi + "";
        var service = {
            loadAll: loadAll
        };

        function loadAll() {
            return ["Tournament1", "Tournament2", "Tournament3", "Tournament4"]
        }

        return service;

    }
    

})();