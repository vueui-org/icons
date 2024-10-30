const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "M21 3a1 1 0 0 1 0 2v9a3 3 0 0 1-3 3h-5v2h2a1 1 0 0 1 0 2H9a1 1 0 0 1 0-2h2v-2H6a3 3 0 0 1-3-3V5a1 1 0 1 1 0-2zm-4.293 4.293a1 1 0 0 0-1.414 0L13 9.585l-1.293-1.292a1 1 0 0 0-1.414 0l-3 3a1 1 0 0 0 0 1.414l.094.083a1 1 0 0 0 1.32-.083L11 10.415l1.293 1.292a1 1 0 0 0 1.414 0l3-3a1 1 0 0 0 0-1.414" })
  ]))
}