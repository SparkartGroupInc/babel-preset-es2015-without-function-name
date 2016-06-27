# babel-preset-es2015-no-function-name-loose

> Babel preset for all es2015 plugins in loose mode without transform-es2015-function-name.

Excluded plugin causes next transformation:
```js
var b = {
    a: function() {
        return 1;
    }
};
```
to:
```js
var b = {
    a: function a() {
        return 1;
    }
};
```
In angular2 beta 7 it lead to infinity loop with crash. Excluding this plugin
may help.

## Install

```sh
$ npm install --save-dev babel-preset-es2015-no-function-name-loose
```

## Usage

### Via `.babelrc` (Recommended)

**.babelrc**

```json
{
  "presets": ["es2015-no-function-name-loose"]
}
```

### Via CLI

```sh
$ babel script.js --presets es2015-no-function-name-loose
```

### Via Node API

```javascript
require("babel-core").transform("code", {
  presets: ["es2015-no-function-name-loose"]
});
```
