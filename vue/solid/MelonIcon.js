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
    _createElementVNode("path", { d: "M16.77 2.62a1 1 0 0 1 1.436.055A10.96 10.96 0 0 1 21 10.001C21 16.075 16.075 21 10.001 21a10.97 10.97 0 0 1-7.684-3.127 1 1 0 0 1 .008-1.438l4.343-4.153a1 1 0 0 1 1.352-.027 3 3 0 0 0 4.32-4.133 1 1 0 0 1 .088-1.35z" })
  ]))
}