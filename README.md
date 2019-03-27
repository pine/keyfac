keyfac
------

[![NPM](https://nodei.co/npm/keyfac.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/keyfac/)

[![npm](https://img.shields.io/npm/v/keyfac.svg)](https://www.npmjs.org/package/keyfac)
[![Build Status](https://travis-ci.org/pine/keyfac.svg?branch=master)](https://travis-ci.org/pine/keyfac)
[![Build status](https://ci.appveyor.com/api/projects/status/d8r804nxa3chewt8/branch/master?svg=true)](https://ci.appveyor.com/project/pine/keyfac/branch/master)
[![Dependency Status](https://img.shields.io/david/pine/keyfac.svg)](https://david-dm.org/pine/keyfac)
[![devDependency Status](https://img.shields.io/david/dev/pine/keyfac.svg)](https://david-dm.org/pine/keyfac#info=devDependencies) [![Greenkeeper badge](https://badges.greenkeeper.io/pine/keyfac.svg)](https://greenkeeper.io/)

:key: Declare cache key generator inspired by [Cache::Keys::DSL](https://github.com/karupanerura/Cache-Keys-DSL).

## Requirements

- Node v4 or later

## Getting started

```
$ yarn add keyfac
```

or

```
$ npm install --save keyfac
```

## Usage

```javascript
const { key, keygen } = requure('keyfac')

// Simple key
const userCountKey = key('user_count')
console.log(userCountKey) // => key_for_user_count

// Key with User ID
const userNameKey = keygen('user_name')
console.log(userNameKey(1)) // => gen_key_for_user_name_1
```

See also [test.js](test.js).

## References
### `key(... items)`
Create simple key.

### `keygen(... items)`
Create key generator function with base arguments.

## License
MIT &copy; Pine Mizune
