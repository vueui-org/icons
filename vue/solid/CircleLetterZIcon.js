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
    _createElementVNode("path", { d: "M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2m2 5h-4a1 1 0 0 0-1 1l.007.117A1 1 0 0 0 10 9h2.382l-3.276 6.553A1 1 0 0 0 10 17h4a1 1 0 0 0 1-1l-.007-.117A1 1 0 0 0 14 15h-2.382l3.276-6.553A1 1 0 0 0 14 7" })
  ]))
}