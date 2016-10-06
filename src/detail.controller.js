(function() {
    'use strict';

    angular.module('MenuApp')
        .controller('CategoryDetailController', CategoryDetailController);

    CategoryDetailController.$inject = ['details'];
    function CategoryDetailController(details) {
        var cat = this;
        cat.shortName = details.data.category.short_name;
        cat.details = details.data.menu_items;
    }
})();
