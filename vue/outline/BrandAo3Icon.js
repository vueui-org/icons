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
    _createElementVNode("path", { d: "M2 5c7.109 4.1 10.956 10.131 12 14 1.074-4.67 4.49-8.94 8-11" }),
    _createElementVNode("path", { d: "M12 8a2 2 0 1 0 4 0 2 2 0 1 0-4 0M7 9c-.278 5.494-2.337 7.33-4 10 4.013-2 6.02-5 15.05-5 4.012 0 3.51 2.5 1 3 2 .5 2.508 5-2.007 2" })
  ]))
}