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
    _createElementVNode("path", { d: "M18.1 6q-1.65 4.37-2.4 6c-1.879 4.088-3.713 6-6 6-2.4 0-4.8-2.4-4.8-6s2.4-6 4.8-6c2.267 0 4.135 1.986 6 6q.768 1.653 2.4 6" })
  ]))
}