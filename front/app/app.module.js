/*global require*/
'use strict';
require([
    'angular',
    'uiRouter',
    'restangular',
    'ngMaterial',
    'mdtable',
    'angular-icons',
    'angular-messages'
], function (angular, uiRouter, restangular, ngMaterial, mdtable, ngMdIcons, ngMessages) {
    require([
        /*fd_moduleFile*/
		'app/testTest/testTest.module',
		'app/fondativeGen/fondativeGen.module',
        'app/main.routes',
        'app/app.config'
    ], function (/*fd_argumentModule*/testTest, fondativeGen, mainRoutes, config, uiRouter) {
        angular.module('app', [
/*fd_moduleName*/
						testTest,
						fondativeGen,
            mainRoutes,
            'ngMaterial',
            'restangular',
            'ui.router',
            'md.data.table',
            'ngMdIcons',
            'ngMessages'
        ])
        .config(function($mdThemingProvider) {
                    $mdThemingProvider.theme('default')
                      .primaryPalette('blue', {
                        'default': '700', // by default use shade 400 from the pink palette for primary intentions
                        'hue-1': '100', // use shade 100 for the <code>md-hue-1</code> class
                        'hue-2': '600', // use shade 600 for the <code>md-hue-2</code> class
                        'hue-3': 'A100' // use shade A100 for the <code>md-hue-3</code> class
                      })
                      .accentPalette('green');
                  })
                          .run(config);
        angular.bootstrap(document, ['app']);
    });
});