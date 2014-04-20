sc_require('core');

Picklist.Item = SC.Record.extend({
  timestamp: SC.Record.attr(SC.DateTime),
  isSelected: SC.Record.attr(Boolean),
  title: SC.Record.attr(String)
});