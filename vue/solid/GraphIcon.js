const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "M18 3a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3zm-2.293 6.293a1 1 0 0 0-1.414 0L12 11.585l-1.293-1.292a1 1 0 0 0-1.414 0l-3 3a1 1 0 0 0 0 1.414l.094.083a1 1 0 0 0 1.32-.083L10 12.415l1.293 1.292.094.083a1 1 0 0 0 1.32-.083L15 11.415l1.293 1.292a1 1 0 0 0 1.414-1.414z" })
  ]))
}