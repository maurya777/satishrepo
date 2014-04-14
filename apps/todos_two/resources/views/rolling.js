TodosTwo.RollingView  = SC.LabelView.extend({
  layout: { centerX: 0, centerY: 15, width: 200, height: 18 },
  textAlign: SC.ALIGN_CENTER,
  tagName: "h1",
  value: "We are rolling!",

  mouseDown: function(evt) {
    var someParam = 'Woa!!';

    TodosTwo.statechart.sendAction('proveIt', someParam);
  }
});