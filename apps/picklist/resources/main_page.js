// ==========================================================================
// Project:   Picklist - mainPage
// Copyright: @2014 My Company, Inc.
// ==========================================================================
/*globals Picklist */

// This page describes the main user interface for your application.
Picklist.mainPage = SC.Page.design({

  // The main pane is made visible on screen as soon as your app is loaded.
  // Add childViews to this pane for views to display immediately on page
  // load.
  mainPane: SC.MainPane.design({
    childViews: ['availableItemsView', 'selectedItemsView'],
    defaultResponder: 'Picklist.statechart',
    availableItemsView: SC.ScrollView.design({
      layout: {centerX: 0, width: 100, top: 72, bottom: 36},
      contentView: SC.ListView.design({
        contentBinding: 'Picklist.availableItemsController',
        selectionBinding: 'Picklist.availableItemsController.selection',
        action: 'removeItem',
        exampleView: SC.LabelView.design({
          valueBinding: SC.Binding.oneWay('.content.title')
        }),
        removeItem: function () {
          Picklist.selectedItemController.set('isSelected', YES);
        }
      })
    }),
    selectedItemsView: SC.ScrollView.design({
      layout: {centerX: 100, width: 100, top: 72, bottom: 36},
      contentView: SC.ListView.design({
        contentBinding: SC.Binding.oneWay('Picklist.selectedItemsController'),
        exampleView: SC.LabelView.design({
          valueBinding: SC.Binding.oneWay('.content.title'),
          selectedBinding: '.content.isSelected'
        })
      })
    })
  })
});