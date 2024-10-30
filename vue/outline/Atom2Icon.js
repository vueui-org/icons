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
    _createElementVNode("path", { d: "M9 12a3 3 0 1 0 6 0 3 3 0 1 0-6 0M12 21v.01M3 9v.01M21 9v.01M8 20.1A9 9 0 0 1 3 13M16 20.1a9 9 0 0 0 5-7.1M6.2 5a9 9 0 0 1 11.4 0" })
  ]))
}