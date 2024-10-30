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
    _createElementVNode("path", { d: "M7.097 7.125 5.06 8.71a2.67 2.67 0 0 0-1.029 2.105v7.2a2 2 0 0 0 2 2h12c.559 0 1.064-.229 1.427-.598M20.03 16v-5.185c0-.823-.38-1.6-1.03-2.105l-5.333-4.148a2.666 2.666 0 0 0-3.274 0l-1.029.8" }),
    _createElementVNode("path", { d: "M15.332 15.345c-2.213.976-5.335.86-7.332-.345M3 3l18 18" })
  ]))
}