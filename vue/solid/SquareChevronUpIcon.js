const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "M19 2a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3zm-6.387 7.21a1 1 0 0 0-1.32.083l-3 3-.083.094a1 1 0 0 0 .083 1.32l.094.083a1 1 0 0 0 1.32-.083L12 11.415l2.293 2.292.094.083a1 1 0 0 0 1.32-1.497l-3-3z" })
  ]))
}