Picklist.SHOWING_APP = SC.State.design({
  enterState: function () {
    Picklist.mainPage.get('mainPane').append();
  },

  exitState: function () {}
});