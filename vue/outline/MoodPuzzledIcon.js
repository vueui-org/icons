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
    _createElementVNode("path", { d: "M14.986 3.51A9 9 0 1 0 16.5 19.794c2.489-1.437 4.181-3.978 4.5-6.794M10 10h.01M14 8h.01" }),
    _createElementVNode("path", { d: "M12 15q1.5-2 3-2M20 9v.01M20 6a2.003 2.003 0 0 0 .914-3.782 1.98 1.98 0 0 0-2.414.483" })
  ]))
}