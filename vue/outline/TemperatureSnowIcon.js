const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    height: "16px",
    width: "16px"
  }, [
    _createElementVNode("path", { d: "M4 13.5a4 4 0 1 0 4 0V5a2 2 0 1 0-4 0zM4 9h4M14.75 4l1 2H18" }),
    _createElementVNode("path", { d: "m17 4-3 5 2 3M20.25 10 19 12l1.25 2" }),
    _createElementVNode("path", { d: "M22 12h-6l-2 3M18 18h-2.25l-1 2" }),
    _createElementVNode("path", { d: "m17 20-3-5h-1M12 9l2.088.008" })
  ]))
}