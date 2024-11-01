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
    _createElementVNode("path", { d: "m15 8-5 3 .821-.495c1.86-1.15 4.412-.49 5.574 1.352a3.91 3.91 0 0 1-1.264 5.42l-5.053 3.126c-1.86 1.151-4.312.591-5.474-1.251a3.91 3.91 0 0 1 1.263-5.42l.26-.16" }),
    _createElementVNode("path", { d: "m8 17 5-3-.822.496c-1.86 1.151-4.411.491-5.574-1.351a3.91 3.91 0 0 1 1.264-5.42l5.054-3.127c1.86-1.15 4.311-.59 5.474 1.252a3.91 3.91 0 0 1-1.264 5.42l-.26.16" })
  ]))
}