# react-ipython-notebook

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

## Rationale

Rendering an iPython notebook should be reasonably simple: JSON in, html out. It could be pretty easily accomplished with a minimal templating library, but since React is a glorified templating library and opens the door to robust markdown/mathjax/editing/manipulation/etc., it seemed like a natural approach (absolutely open to critique/differing opinions on this). The goals are:

1) A notebook component that can be dropped into an existing interface. It receives json and renders the notebook.
2) A command line conversion untility that just uses ReactDOMServer.renderToString to create equivalent output as a command line utility.

## Notes

Incomplete and not fully functional. At the moment it just creates some basic cell markup and renders the markdown content. To see a simple example:

```bash
$ npm install
$ npm run build
$ node dist/bin/nbconvert.js test/fixtures/notebook1.ipynb.json 
```

The output (beautified and with react tags removed) is:

```html
<div class="ipynb">
  <div class="ipynbCell--text">
    <h1>test</h1>
    <p>$$y = x$$</p>
  </div>
  <div class="ipynbCell--code">
  </div>
  <div class="ipynbCell--code">
  </div>
  <div class="ipynbCell--code">
  </div>
  <div class="ipynbCell--code">
  </div>
  <div class="ipynbCell--code">
  </div>
  <div class="ipynbCell--raw">
  </div>
  <div class="ipynbCell--code">
  </div>
</div>
```

## Todo

- Add mathjax support and proper escaping of equations (escape with backtics and remove before insertion and mathjax rendering? Is there a better pattern for this?)
- Render code cells
- Figure out how images are bundled
- Figure out what raw nbconvert cells do
- Separate nbconvert into separate repo (i.e. avoid unnecessary dependencies in this repo)
- And more


## Testing

Tests are done with react [shallow rendering](https://facebook.github.io/react/docs/test-utils.html#shallow-rendering). Run with

```bash
$ npm run test
```
