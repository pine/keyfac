'use strict'

const test = require('ava')
const keyfac = require('./')

test('key', t => {
  t.is(keyfac.key('foo'), 'key_for_foo')
  t.is(keyfac.key('foo', 'bar'), 'key_for_foo_bar')
  t.is(keyfac.key('foo', 'bar', 1, 2), 'key_for_foo_bar_1_2')
  t.is(keyfac.key('foo', 'bar', null, 2), 'key_for_foo_bar_2')
})

test('key (fail)', t => {
  t.throws(() => keyfac.key(), Error)
  t.throws(() => keyfac.key([]), Error)
  t.throws(() => keyfac.key([[],[]]), Error)
})

test('keygen', t => {
  t.is(keyfac.keygen('foo')(), 'gen_key_for_foo')
  t.is(keyfac.keygen('foo')(1), 'gen_key_for_foo_1')
  t.is(keyfac.keygen('foo', 'bar')(), 'gen_key_for_foo_bar')
  t.is(keyfac.keygen('foo', 'bar', 1, 2)(3), 'gen_key_for_foo_bar_1_2_3')
  t.is(keyfac.keygen('foo', 'bar', null, 2)(null), 'gen_key_for_foo_bar_2')
})

test('keygen (fail)', t => {
  t.throws(() => keyfac.keygen()(), Error)
  t.throws(() => keyfac.keygeny([])(), Error)
  t.throws(() => keyfac.key([[],[]])(), Error)
  t.throws(() => keyfac.keygeny([[],[]])([]), Error)
})
