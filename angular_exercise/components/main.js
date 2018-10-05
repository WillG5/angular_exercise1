"use strict";
{
    angular.module('app')
    .component('main', {
        controller: 'MainController',/*this is a file that is going to be called from the components folder manipulating data, it also needs to match what is being called in main controller*/
        templateUrl: 'components/main.html'//all pages should have file of components + full path of the html that is being updated
    })
}