(function () {

  'use strict';

  angular.module('app.todo').factory('TodoModel', TodoModel);

  function TodoModel () {
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

    function getAll () {
      return todoList;
    }

    function getById (id) {
      var todo = {};
      for (var i = todoList.length - 1; i >= 0; i--) {
        if (todoList[i].id === id) {
          todo = todoList[i];
          break;
        }
      }
      //create a copy to avoid same reference object
      return angular.copy(todo);
    }

    function edit (id, data) {
      var todo = getById(id);
      todo.title = data.title;
      updateCollection(todo);
      return todo;
    }

    function updateCollection (todo) {
      for (var i = todoList.length - 1; i >= 0; i--) {
        if (todoList[i].id === todo.id) {
          todoList[i].title = todo.title;
          break;
        }
      }
    }

    return {
      getAll: getAll,
      getById: getById,
      edit: edit,
      updateCollection: updateCollection
    };
  }
})();
