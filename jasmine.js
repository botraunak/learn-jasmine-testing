var Jasmine = require('jasmine');
var jasmine = new Jasmine();
var SpecReporter = require('jasmine-spec-reporter').SpecReporter;

jasmine.loadConfigFile('./jasmine.json');

jasmine.clearReporters();               // remove default reporter logs
jasmine.addReporter(new SpecReporter({  // add jasmine-spec-reporter
  spec: {
    displayPending: true,
    displaySuccessful: true
  },
  summary: {
    displaySuccessful: true
  }
}));

jasmine.execute();