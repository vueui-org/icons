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
    _createElementVNode("path", { d: "M3 7h10v10H3zM6 10h4M8 10v4" }),
    _createElementVNode("path", { d: "M8.104 17c.47 2.274 2.483 4 4.896 4a5 5 0 0 0 5-5V9h-5M18 18a4 4 0 0 0 4-4V9h-4" }),
    _createElementVNode("path", { d: "M13.003 8.83a3 3 0 1 0-1.833-1.833" }),
    _createElementVNode("path", { d: "M15.83 8.36a2.5 2.5 0 1 0 .594-4.117" })
  ]))
}