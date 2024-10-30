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
    _createElementVNode("path", { d: "M11.412 7.407a6.03 6.03 0 0 0-2.82-2.82M4 4H3v2a6 6 0 0 0 6 6h3M12 14a6 6 0 0 1 .255-1.736m1.51-2.514A5.98 5.98 0 0 1 18 8h3v1c0 2.158-1.14 4.05-2.85 5.107M15 15h-3M12 20v-8M3 3l18 18" })
  ]))
}