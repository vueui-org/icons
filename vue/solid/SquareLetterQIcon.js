const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "M19 2a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3zm-7 5a3 3 0 0 0-3 3v4a3 3 0 0 0 4.168 2.764l.125-.057a1 1 0 0 0 1.414-1.414l.057-.125A3 3 0 0 0 15 14v-4a3 3 0 0 0-3-3m1 7.001h-.059a.996.996 0 0 0-.941 1A1 1 0 0 1 11 14v-4a1 1 0 0 1 2 0z" })
  ]))
}