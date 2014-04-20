Picklist.READY = SC.State.extend({
  enterState: function() {
    if (SC.instanceOf(Picklist.store.dataSource, SC.FixturesDataSource)) {
      Picklist.availableItemsController.set('content',
        Picklist.store.find(SC.Query.local(Picklist.Item, {conditions: 'isSelected = false', orderBy: 'timestamp DESC'}))
      );
      Picklist.selectedItemsController.set('content',
        Picklist.store.find(SC.Query.local(Picklist.Item, {conditions: 'isSelected = true', orderBy: 'timestamp DESC'}))
      );
      Picklist.getPath('mainPage.mainPane').append();
    } else {
      this.gotoState('LOGGING_IN');
    }
  },

  didLoad: function () {
    if (Picklist.availableItemsController.get('status') === SC.Record.READY_CLEAN) {
      this.gotoState('SHOWING_APP');
    }
  }.stateObserves('Picklist.availableItemsController.status'),

  exitState: function() {
    Picklist.getPath('mainPage.mainPane').remove();
  }
});