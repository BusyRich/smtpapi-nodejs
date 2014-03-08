var assert      = require('assert');
var should      = require('should');
var smtpapi     = require('../lib/main');
var t           = require('./smtpapi_test_strings.json');

describe('smtapi', function() {
  describe('.Header', function() {
    it('has a jsonString method', function() {
      var header = new smtpapi();

      header.jsonString().should.eql(t.json_string);
    });

    it('addTo', function() {
      var header = new smtpapi();

      header.addTo('addTo@mailinator.com');
      header.jsonString().should.eql(t.add_to);
    });

    it('setTos', function() {
      var header = new smtpapi();

      header.setTos(['setTos@mailinator.com']);
      header.jsonString().should.eql(t.set_tos);
    });

    it('addSubstitution', function() {
      var header = new smtpapi();

      header.addSubstitution('sub', 'val');
      header.jsonString().should.eql(t.add_substitution);
    });

    it('setSubstitutions', function() {
      var header = new smtpapi();

      header.setSubstitutions({'sub': ['val']});
      header.jsonString().should.eql(t.set_substitutions);
    });

    it('addUniqueArg', function() {
      var header = new smtpapi();

      header.addUniqueArg('add_unique_argument_key', 'add_unique_argument_value');
      header.addUniqueArg('add_unique_argument_key_2', 'add_unique_argument_value_2');
      header.jsonString().should.eql(t.add_unique_arg);
    });

    it('setUniqueArgs', function() {
      var header = new smtpapi();

      header.setUniqueArgs({set_unique_argument_key: 'set_unique_argument_value'});
      header.jsonString().should.eql(t.set_unique_args);
    });

    it('addCategory', function() {
      var header = new smtpapi();

      header.addCategory('addCategory');
      header.addCategory('addCategory2');
      header.jsonString().should.eql(t.add_category);
    });

    it('setCategories', function() {
      var header = new smtpapi();

      header.setCategories(['setCategories']);
      header.jsonString().should.eql(t.set_categories);
    });

    it('addSection', function() {
      var header = new smtpapi();

      header.addSection('set_section_key', 'set_section_value');
      header.addSection('set_section_key_2', 'set_section_value_2');
      header.jsonString().should.eql(t.add_section);
    });

    it('setSections', function() {
      var header = new smtpapi();

      header.setSections({'set_section_key': 'set_section_value'});
      header.jsonString().should.eql(t.set_sections);
    });

    it('addFilter', function() {
      var header = new smtpapi();

      header.addFilter('footer', 'text/html', '<strong>boo</strong>');
      header.jsonString().should.eql(t.add_filter);
    });

    it('setFilters', function() {
      var header = new smtpapi();

      var filter = {
        'footer': {
          'setting': {
            'enable': 1,
            'text/plain': 'You can haz footers!'
          }
        }
      }

      header.setFilters(filter);
      header.jsonString().should.eql(t.set_filters);
    });
  });
});
