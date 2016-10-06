(function() {
    'use strict';

    angular.module('MenuApp')
        .config(RoutesConfig);

    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function RoutesConfig($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: '../templates/home.html'
            })
            .state('categories', {
                url: '/categories',
                templateUrl: '../templates/categories-home.html',
                controller: 'MenuCategoryController as cat',
                resolve: {
                    allCategories: ['MenuDataService', function(MenuDataService) {
                        return MenuDataService.getAllCategories();
                    }]
                }
            })
            .state('categoryDetail', {
                url: '/category/{cat}',
                templateUrl: '../templates/category-detail-home.html',
                controller: 'CategoryDetailController as det',
                resolve: {
                    details: ['$stateParams', 'MenuDataService',
                              function($stateParams, MenuDataService) {
                                  return MenuDataService.getItemsForCategory($stateParams.cat);
                              }]
                }
            });
    }
})();
