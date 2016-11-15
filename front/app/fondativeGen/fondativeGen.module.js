/**
 * This file defines the list of controllers, directives and services of the fondativeGen module
 * 
 * @param {controller} fondativeGenControllers
 * @param {route} fondativeGenRoutes
 * @param {directive} fondativeGenDirectives
 * @returns {String}
 */
define([
    "./fondativeGen.routes",
    "./fondativeGen.controllers",
    "./fondativeGen.services"
], function (fondativeGenRoutes,fondativeGenControllers,fondativeGenServices) {
    'use strict';
    angular.module("fondativeGen", [fondativeGenRoutes,fondativeGenControllers,fondativeGenServices]);
    return "fondativeGen";
});

