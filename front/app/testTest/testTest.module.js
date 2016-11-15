/**
 * This file defines the list of controllers, directives and services of the testTest module
 * 
 * @param {controller} testTestControllers
 * @param {route} testTestRoutes
 * @param {directive} testTestDirectives
 * @returns {String}
 */
define([
    "./testTest.routes",
    "./testTest.controllers",
    "./testTest.services"
], function (testTestRoutes,testTestControllers,testTestServices) {
    'use strict';
    angular.module("testTest", [testTestRoutes,testTestControllers,testTestServices]);
    return "testTest";
});

