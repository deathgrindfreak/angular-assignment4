(function() {
    'use strict';

    angular.module('MenuApp')
        .component('categoryDetail', {
            templateUrl: '../templates/category-detail.html',
            bindings: {
                details: '<',
                shortName: '@'
            }
        });
})();
