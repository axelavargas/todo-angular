(function () {
  'use strict';

  angular.module('app.todo').config(TodoRoute);

  TodoRoute.$inject = ['$stateProvider', '$urlRouterProvider'];

  function TodoRoute($stateProvider, $urlRouteProvider) {
    $stateProvider

    .state('todolist', {
      controller: 'TodoList',
      controllerAs: 'vm',
      templateUrl: 'app/modules/todo/todo-list.html',
      url: '/',
    })

    .state('todolist.view', {
      controller: 'TodoView',
      controllerAs: 'vm',
      templateUrl: 'app/modules/todo/todo-view.html',
      url: 'todo-id:todoId/view'
    })

    .state('todolist.edit', {
      controller: 'TodoEdit',
      controllerAs: 'vm',
      templateUrl: 'app/modules/todo/todo-edit.html',
      url: 'todo-id:todoId/edit'
    });
  }
})();
