const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    height: "16px",
    width: "16px"
  }, [
    _createElementVNode("path", { d: "M19 4a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3zm-4 4h-1a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h1a3 3 0 0 0 3-3v-2a3 3 0 0 0-3-3M8.5 8A2.5 2.5 0 0 0 6 10.5V15a1 1 0 0 0 2 0v-1h1v1a1 1 0 0 0 .883.993L10 16a1 1 0 0 0 1-1v-4.5A2.5 2.5 0 0 0 8.5 8m6.5 2a1 1 0 0 1 1 1v2a1 1 0 0 1-.883.993L15 14zm-6.5 0a.5.5 0 0 1 .5.5V12H8v-1.5a.5.5 0 0 1 .41-.492z" })
  ]))
}