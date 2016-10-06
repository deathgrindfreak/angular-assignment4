(function() {
    'use strict';

    angular.module('MenuApp')
        .controller('MenuCategoryController', MenuCategoryController);

    MenuCategoryController.$inject = ['allCategories'];
    function MenuCategoryController(allCategories) {
        var cat = this;
        cat.cats = allCategories.data;
    }
})();
