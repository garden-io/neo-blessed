/**
 * widget.js - high-level interface for blessed
 * Copyright (c) 2013-2015, Christopher Jeffrey and contributors (MIT License).
 * https://github.com/chjj/blessed
 */

var widgets = {
  'Node': require('./widgets/node'),
  'Screen': require('./widgets/screen'),
  'Element': require('./widgets/element'),
  'Box': require('./widgets/box'),
  'Text': require('./widgets/text'),
  'Line': require('./widgets/line'),
  'ScrollableBox': require('./widgets/scrollablebox'),
  'ScrollableText': require('./widgets/scrollabletext'),
  'BigText': require('./widgets/bigtext'),
  'List': require('./widgets/list'),
  'Form': require('./widgets/form'),
  'Input': require('./widgets/input'),
  'Textarea': require('./widgets/textarea'),
  'Textbox': require('./widgets/textbox'),
  'Button': require('./widgets/button'),
  'ProgressBar': require('./widgets/progressbar'),
  'FileManager': require('./widgets/filemanager'),
  'Checkbox': require('./widgets/checkbox'),
  'RadioSet': require('./widgets/radioset'),
  'RadioButton': require('./widgets/radiobutton'),
  'Prompt': require('./widgets/prompt'),
  'Question': require('./widgets/question'),
  'Message': require('./widgets/message'),
  'Loading': require('./widgets/loading'),
  'Listbar': require('./widgets/listbar'),
  'Log': require('./widgets/log'),
  'Table': require('./widgets/table'),
  'ListTable': require('./widgets/listtable'),
  'Terminal': require('./widgets/terminal'),
  'Image': require('./widgets/image'),
  'ANSIImage': require('./widgets/ansiimage'),
  'OverlayImage': require('./widgets/overlayimage'),
  'Video': require('./widgets/video'),
  'Layout': require('./widgets/layout'),
};

exports.classes = Object.keys(widgets);

exports.classes.forEach(function (name) {
  exports[name] = exports[name.toLowerCase()] = widgets[name];
});

widgets.aliases = {
  'ListBar': 'Listbar',
  'PNG': 'ANSIImage'
};

Object.keys(widgets.aliases).forEach(function (key) {
  var name = widgets.aliases[key];
  exports[key] = exports[key.toLowerCase()] = widgets[name];
});
