(function () {

  'use strict';

  angular
    .module('myApp.view2')
    .controller('View2Ctrl', View2Ctrl);

  function View2Ctrl() {

    var vm = this;

    vm.sayHello = sayHello;

    function sayHello() {

      console.log('hello');
    }
  }
})();