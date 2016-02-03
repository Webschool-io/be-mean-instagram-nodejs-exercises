"use strict";

const assert = require('assert')
  , log = require('./log')
  ;

assert.equal('hello world', log('hello world'));
assert.equal('hello world!', log('hello world!'));
