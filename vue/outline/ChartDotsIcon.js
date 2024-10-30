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
    _createElementVNode("path", { d: "M3 3v18h18" }),
    _createElementVNode("path", { d: "M7 9a2 2 0 1 0 4 0 2 2 0 1 0-4 0M17 7a2 2 0 1 0 4 0 2 2 0 1 0-4 0M12 15a2 2 0 1 0 4 0 2 2 0 1 0-4 0M10.16 10.62l2.34 2.88M15.088 13.328l2.837-4.586" })
  ]))
}