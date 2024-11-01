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
    _createElementVNode("path", { d: "M3 3c0 2 1 3 4 3q3 0 3 3M21 3c0 2-1 3-4 3-2 0-3 .333-3 3M12 18c-1 0-4-3-4-6q0-3 4-3c4 0 4 1 4 3 0 3-3 6-4 6" }),
    _createElementVNode("path", { d: "m15.185 14.889.095-.18a4 4 0 1 1-6.56 0M17 3q0 2-1 3M7 3q0 2 1 3M7 6Q3 7 2 9M17 6q4 1 5 3M8.5 10 7 9M15.5 10 17 9M12 15h.01" })
  ]))
}