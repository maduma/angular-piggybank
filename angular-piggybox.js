/* global angular */
(function() {
'use strict';

angular
    .module('maPiggybank', ['ngMaterial'])
    .directive('maPiggybank', piggybank);
    
function piggybank() {

    var directive = {
        restrict: 'E',
        templateUrl: 'angular-piggybox.template.html',
        scope: {},
        bindToController: {
            rw: "=",
            box: "="
        },
        controller: ctrl,
        controllerAs : 'ctrl'
    };
    
    return directive;
    
    function ctrl() {
        var self = this;
        self.inc = function() {
            if (self.rw) {
                self.box.amount++;
            } 
        };
        self.dec = function() {
            if (self.rw) {
                self.box.amount--;
            }
        };
    }
}

})();