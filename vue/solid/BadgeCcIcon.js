const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "M19 4a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3zM8.5 8A2.5 2.5 0 0 0 6 10.5v3a2.5 2.5 0 1 0 5 0 1 1 0 0 0-2 0 .5.5 0 1 1-1 0v-3a.5.5 0 1 1 1 0 1 1 0 0 0 2 0A2.5 2.5 0 0 0 8.5 8m7 0a2.5 2.5 0 0 0-2.5 2.5v3a2.5 2.5 0 1 0 5 0 1 1 0 0 0-2 0 .5.5 0 1 1-1 0v-3a.5.5 0 1 1 1 0 1 1 0 0 0 2 0A2.5 2.5 0 0 0 15.5 8" })
  ]))
}