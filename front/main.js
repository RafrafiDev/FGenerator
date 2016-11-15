/*global require*/
'use strict';

require.config({
	paths: {
		       'angular': 'bower_components/angular/angular',
		       'uiRouter': "bower_components/angular-ui-router/release/angular-ui-router",
		       'restangular': 'bower_components/restangular/src/restangular',
           'ngMaterial':'bower_components/angular-material/angular-material',
		       'angular-animate':'bower_components/angular-animate/angular-animate',
        	 'angular-aria':'bower_components/angular-aria/angular-aria',
           'angular-messages': 'bower_components/angular-messages/angular-messages',
           'angular-icons':'bower_components/angular-material-icons/angular-material-icons',
           'mdtable':'bower_components/angular-material-data-table/dist/md-data-table',
           'lodash':'bower_components/lodash/lodash',
           'jquery':"bower_components/jquery/dist/jquery"
	},
	shim: {
		angular: {
			exports: 'angular'
		},
        'uiRouter':{
            deps: ['angular']
        },
        'restangular' :{
            deps: [ "angular","lodash"],
            exports : 'restangular'
        },
        'jquery' :{
            deps: [],
            exports : 'jquery'
        },
        'angular-animate' :{
           // exports: "angularAnimate",
            deps: ['angular']
        },
        'angular-icons' :{
           // exports: "angularAnimate",
            deps: ['angular']
        },
        'angular-aria':{
           // exports: "angularAria",
            deps: [ "angular" ]
        },
        'angular-messages':{
         //   exports: "angularMessages",
            deps: [ "angular" ]
        },
        'ngMaterial':{
            deps: [ "angular", "angular-messages","angular-aria","angular-animate",]
        },
        'mdtable' :{
            deps: ["angular","ngMaterial"],
         //   exports : 'mdtable'
        },
        'angular-icons' :{
            deps: ["angular"],
         //   exports : 'mdtable'
        }
        },
	deps: ['app/app.module']
});
