/* global angular */
'use strict';

// Declare app level module which depends on filters, and services
var invoiceApp = angular.module('invoiceApp', [
    'invoiceApp.filters', 'invoiceApp.services',
    'invoiceApp.directives'
  ]).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    // remove # from url
    $locationProvider.html5Mode(true);

    $routeProvider.when('/', {templateUrl: 'partials/index', controller: 'HomeCtrl'});
    $routeProvider.when('/list', {templateUrl: 'partials/list', controller: 'InvoiceListCtrl'});
    $routeProvider.otherwise({redirectTo: '/'});
  }]);

$(document).on("keydown","[contenteditable=true]",function(e) {
  if(e.which===13) {
    var lineBreak = "<br>";
    document.execCommand("insertHTML",false,lineBreak);
    return false;
  }
});
