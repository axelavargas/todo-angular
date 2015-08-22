(function () {
  'use strict';

  angular.module('templates', []);
  var dependencies = ['ngSanitize', 'templates', 'ui.router','ngAnimate'];
  angular.module('app.core', dependencies);
})();
