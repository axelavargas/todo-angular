describe('TodoController', function () {
  'use strict';

  beforeEach(module('app'));

  describe('todoList()', function () {
    it('get list todo correctly', inject(function ($controller) {
      var todoController = $controller('Todo');
    }));
  });
});
