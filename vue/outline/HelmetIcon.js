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
    _createElementVNode("path", { d: "M12 4a9 9 0 0 1 5.656 16H6.344A9 9 0 0 1 12 4" }),
    _createElementVNode("path", { d: "M20 9h-8.8a1 1 0 0 0-.968 1.246q.76 3 3.268 4.254 3 1.5 7 1.5" })
  ]))
}