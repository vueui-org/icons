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
    _createElementVNode("path", { d: "M21 12a9 9 0 1 0-9.972 8.948q.48.051.972.052" }),
    _createElementVNode("path", { d: "M12 7v5l2 2M18.42 15.61a2.1 2.1 0 0 1 2.97 2.97L18 22h-3v-3z" })
  ]))
}