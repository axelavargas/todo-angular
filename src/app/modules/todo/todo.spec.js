/*jshint expr:true */
describe('TodoModule', function () {
  /**
  * I put all the test together because of the little complexity of the exercise
  * in real world you should create a file spec per each controller
  * or service
  */
  'use strict';

  beforeEach(module('app'));

  describe('TodoModel service', function () {
    it('should allow to get a todolist', inject(function (TodoModel) {
      var todoList = [
        {
          'id': 1,
          'title' : 'buy a bike'
        },
        {
          'id': 2,
          'title' : 'eat bitterballens'
        },
        {
          'id': 3,
          'title' : 'visit Van Gogh'
        },
                {
          'id': 4,
          'title' : 'buy a winter jacket '
        }
      ];
      expect(TodoModel.getAll()).be.deep.equal(todoList);
    }));

    it('should allow update one todo by id', inject(function (TodoModel) {
      TodoModel.edit(1,{'title':'eat icecream'});
      expect(TodoModel.getById(1).title).to.equals('eat icecream');
    }));

    it('should allow to get one todo by id', inject(function (TodoModel) {
      expect(TodoModel.getById(1))
        .be.deep.equal({'id': 1, 'title' : 'buy a bike'});
    }));
  });

  describe('Todo Edit controller', function () {
    it('check if TodoModel.edit is called', inject(
      function ($controller, TodoModel) {
      var todoEditCtrl = $controller('TodoEdit',{
        $stateParams: {todoId: 1},
        TodoModel: TodoModel
      });
      var spy = sinon.spy(TodoModel, 'edit');
      todoEditCtrl.edit();
      expect(spy.calledWith(1, todoEditCtrl.todo)).to.be.true;

    }));
  });

  describe('TodoView controller', function () {
    it('check if TodoModel.getById is called', inject(
      function ($controller, TodoModel) {
      var spy = sinon.spy(TodoModel, 'getById');
      var todoViewCtrl = $controller('TodoView', {
        $stateParams: 1,
        TodoModel: TodoModel
      });
      expect(spy.called).to.be.true;
    }));
  });

  describe.only('TodoList controller', function () {
    it('check if TodoModel.getAll is called', inject(
      function ($controller, TodoModel) {
      var spy = sinon.spy(TodoModel, 'getAll');
      var todoViewCtrl = $controller('TodoList', {
        TodoModel: TodoModel
      });
      expect(spy.called).to.be.true;
    }));
  });
});
