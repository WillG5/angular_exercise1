"use strict";
{
    angular.module('app')
    .controller('MainController', function(){
        const $ctrl = this;

        $ctrl.familyMembers = [
            {name: 'Miranda', relation: 'Mother', age: '130'},
            {name: 'Bradley', relation: 'Brother', age: '80'},
            {name: 'Frank', relation: 'Father', age: '10'}
        ];

    
    

    });
}