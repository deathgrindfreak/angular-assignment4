(function() {
    'use strict';

    angular.module('Data')
        .service('MenuDataService', MenuDataService)
        .constant('UriBase', 'https://davids-restaurant.herokuapp.com');

    MenuDataService.$inject = ['$http', 'UriBase'];
    function MenuDataService($http, UriBase) {
        var data = this;

        data.getAllCategories = function() {
            return $http({
                method: "GET",
                url: (UriBase + "/categories.json")
            });
        };
        
        data.getItemsForCategory = function(shortName) {
            return $http({
                method: "GET",
                url: (UriBase + "/menu_items.json?category=" + shortName)
            });
        };
    }
})();
