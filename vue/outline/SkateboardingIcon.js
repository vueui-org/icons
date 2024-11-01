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
    _createElementVNode("path", { d: "M16 4a1 1 0 1 0 2 0 1 1 0 0 0-2 0M5.5 15H9l.75-1.5M14 19v-5l-2.5-3L14 7" }),
    _createElementVNode("path", { d: "m8 8 3-1h4l1 3h3" }),
    _createElementVNode("path", {
      fill: "currentColor",
      d: "M17.5 21a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1"
    }),
    _createElementVNode("path", { d: "M3 18c0 .552.895 1 2 1h14c1.105 0 2-.448 2-1" }),
    _createElementVNode("path", {
      fill: "currentColor",
      d: "M6.5 21a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1"
    })
  ]))
}