TodosThree.READY = SC.State.extend({
  
  enterState: function() {
    // Original code
    // TodosThree.getPath('mainPage.mainPane').append();

    if (SC.instanceOf(TodosThree.store.dataSource, SC.FixturesDataSource)) {
      TodosThree.todosController.set('content',
        TodosThree.store.find(SC.Query.local(TodosThree.Todo, {orderBy: 'timestamp DESC'})));
      TodosThree.completedTodosController.set('content',
        TodosThree.store.find(SC.Query.local(TodosThree.Todo, {conditions: 'isCompleted = true'})));
    } else {
      this.gotoState('LOGGED_IN');
    }
  },

  didLoad: function () {
    if (TodosThree.todosController.get('status') === SC.Record.READY_CLEAN) {
      this.gotoState('SHOWING_APP');
    }
  }.stateObserves('TodosThree.todosController.status'),

  exitState: function() {
    // Original code
    // TodosThree.getPath('mainPage.mainPane').remove();
  }

});

