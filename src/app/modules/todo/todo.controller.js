(function () {
  'use strict';
  /**
  * I put all the controllers together because of the little
  * complexity of the exercise
  * in real world you should create a file controller
  */
  angular.module('app.todo').controller('TodoList', TodoList);
  TodoList.$inject = ['TodoModel'];
  function TodoList(TodoModel) {
    var vm = this;
    vm.todoList = TodoModel.getAll();
  }

  angular.module('app.todo').controller('TodoView', TodoView);
  TodoView.$inject = ['$stateParams','TodoModel'];
  function TodoView($stateParams, TodoModel) {
    var vm = this;
    vm.todo = TodoModel.getById(parseInt($stateParams.todoId,10));
  }

  angular.module('app.todo').controller('TodoEdit', TodoEdit);
  TodoEdit.$inject = ['$stateParams','TodoModel'];
  function TodoEdit ($stateParams, TodoModel) {
    var vm = this;
    vm.todo = TodoModel.getById(parseInt($stateParams.todoId,10));

    vm.edit = function () {
      TodoModel.edit(parseInt($stateParams.todoId, 10), vm.todo);
    };
  }
})();
