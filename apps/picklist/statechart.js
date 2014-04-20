Picklist.statechart = SC.Statechart.create({
  trace: YES,

  rootState: SC.State.design({
    initialSubstate: "READY",
    READY: SC.State.plugin("Picklist.READY"),
    LOGGING_IN: SC.State.plugin("Picklist.LOGGING_IN"),
    SHOWING_APP: SC.State.plugin("Picklist.SHOWING_APP")
  })



});
