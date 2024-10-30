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
    _createElementVNode("path", { d: "M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0" }),
    _createElementVNode("path", { d: "M12 3c-3.263 3.212-3 7.654-3 12 4.59.244 8.814-.282 12-3" }),
    _createElementVNode("path", { d: "M9.5 9a4.494 4.494 0 0 1 5.5 5.5" })
  ]))
}