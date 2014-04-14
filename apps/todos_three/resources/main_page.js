// ==========================================================================
// Project:   TodosThree - mainPage
// Copyright: @2014 My Company, Inc.
// ==========================================================================
/*globals TodosThree */

// This page describes the main user interface for your application.
TodosThree.mainPage = SC.Page.design({
  field: SC.outlet('mainPane.newTodoField.field'),
  // The main pane is made visible on screen as soon as your app is loaded.
  // Add childViews to this pane for views to display immediately on page
  // load.
  mainPane: SC.MainPane.design({
    childViews: ['header', 'newTodoField', 'todoList', 'footer'],

    defaultResponder: 'TodosThree.statechart',

    header: SC.ToolbarView.design({
      layout: { centerX: 0, width: 500, top: 0, height: 36 },
      childViews: ['title', 'completeAll'],
      completeAll: SC.CheckboxView.design(SC.AutoResize, {
        autoResizePadding: {width: 47},
        title: 'Mark all as done',
        valueBinding: 'TodosThree.completedTodosController.areAllCompleted'
      }),

      title: SC.LabelView.design({
        layout: {left: 0, right: 0, top: 0, bottom: 0},

        totalTodosBinding: SC.Binding.oneWay('TodosThree.todosController.length'),
        completedTodosBinding: SC.Binding.oneWay('TodosThree.completedTodosController.length'),

        value: function() {
          return 'TodosThree(' + (this.get('totalTodos') - this.get('completedTodos')) + ')';
        }.property('totalTodos', 'completedTodos').cacheable()
      })
    }),

    newTodoField: SC.View.design({
      classNames: ['new-todo'],
      layout: { centerX: 0, width: 500, top: 36, height: 36 },
      childViews: ['field', 'button'],
      field: SC.TextFieldView.design({
        hint: 'What needs to be done?'
      }),

      button: SC.ButtonView.design(SC.AutoResize, {
        controlSize: SC.HUGE_CONTROL_SIZE,
        layout: {centerY: 0, height: 30, right: 12, zIndex: 100},
        title: 'Add',
        action: 'addTodo',
        valueBinding: '.page.field.value',
        isDefaultBinding: '.page.field.focused'
      })
    }),

    todoList: SC.ScrollView.design({
      layout: {centerX: 0, width: 500, top: 72, bottom: 36},
      contentView: SC.ListView.design({
        contentBinding: SC.Binding.oneWay('TodosThree.todosController'),
        rowHeight: 36,
        exampleView: SC.CheckboxView.design({
          classNames: ['todo-item'],
          valueBinding: '.content.isCompleted',
          titleBinding: SC.Binding.oneWay('.content.title')
        })
      })
    }),

    footer: SC.ToolbarView.design({
      layout: {centerX: 0, width: 500, bottom: 0, height: 36},

      childViews: ['clearCompletedTodos'],
      clearCompletedTodos: SC.ButtonView.design(SC.AutoResize, {
        controlSize: SC.HUGE_CONTROL_SIZE,
        layout: {centerX: 0, height: 30, right: 12, zIndex: 100},
        isEnabledBinding: SC.Binding.oneWay('TodosThree.completedControllers.length').bool(),
        title: 'Clear completed todos',
        action: 'clearCompletedTodos'
      })
    })
  })
});
