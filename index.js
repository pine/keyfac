'use strict'

const _ = require('lodash')

function key() {
  return keyImpl(['key_for'].concat([].slice.call(arguments)))
}

function keyImpl(args) {
  const items = _(args)
    .flattenDeep()
    .filter(item => !_.isNull(item) && !_.isUndefined(item))
    .map(_.toString)
    .value()

  if (items.length <= 1) throw new Error('Least 1 key items are required.')
  return items.join('_')
}

function keygen() {
  return keygenImpl.bind(null, ['gen_key_for'].concat([].slice.call(arguments)))
}

function keygenImpl() {
  return keyImpl([].slice.call(arguments))
}

module.exports = { key, keygen }
