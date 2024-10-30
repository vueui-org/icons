const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "2",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "M5.63 5.643a9 9 0 0 0 12.742 12.715m1.674-2.29A9 9 0 0 0 20.8 14a1 1 0 0 0-1-1H17m-4 0a2 2 0 0 1-2-2m0-4V4a.9.9 0 0 0-1-.8 9 9 0 0 0-2.057.749M15 3.5A9 9 0 0 1 20.5 9H16a1 1 0 0 1-1-1zM3 3l18 18" })
  ]))
}