/* global angular */
(function() {
'use strict';

angular
    .module('maPiggybank', ['ngMaterial', 'maPiggybox'])
    .directive('maPiggybank', piggybank);
    
function piggybank() {

    var directive = {
        restrict: 'E',
        templateUrl: 'angular-piggybank.template.html',
        scope: {},
        bindToController: {
            rw: "=",
            boxes: "="
        },
        controller: ctrl,
        controllerAs : 'ctrl'
    };
    
    return directive;
    
    function ctrl() {
    }
}

})();