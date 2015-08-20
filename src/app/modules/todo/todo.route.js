(function () {
  'use strict';

  angular.module('app.todo').config(TodoRoute);

  TodoRoute.$inject = ['$stateProvider', '$urlRouterProvider'];

  function TodoRoute($stateProvider, $urlRouteProvider) {
    $stateProvider.state('todo', {
      controller: 'Todo',
      controllerAs: 'vm',
      templateUrl: 'app/modules/todo/todo.html',
      url: '/todo',
    });
  }
})();
