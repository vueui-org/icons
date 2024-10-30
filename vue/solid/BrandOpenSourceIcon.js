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
    _createElementVNode("path", { d: "M12.283 2.004a10 10 0 0 1 3.736 19.155 1 1 0 0 1-1.332-.551l-2.193-5.602a1 1 0 0 1 .456-1.245 2 2 0 1 0-1.9 0 1 1 0 0 1 .457 1.244l-2.193 5.603a1 1 0 0 1-1.332.552A10 10 0 0 1 12 2z" })
  ]))
}