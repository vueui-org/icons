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
    _createElementVNode("path", { d: "M19 2H5a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3M9.613 8.21l.094.083L12 10.585l2.293-2.292a1 1 0 0 1 1.497 1.32l-.083.094L13.415 12l2.292 2.293a1 1 0 0 1-1.32 1.497l-.094-.083L12 13.415l-2.293 2.292a1 1 0 0 1-1.497-1.32l.083-.094L10.585 12 8.293 9.707a1 1 0 0 1 1.32-1.497" })
  ]))
}