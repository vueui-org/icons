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
    _createElementVNode("circle", {
      cx: "12",
      cy: "12",
      r: ".5",
      fill: "currentColor"
    }),
    _createElementVNode("path", { d: "M5 12a7 7 0 1 0 14 0 7 7 0 1 0-14 0M12 3v2M3 12h2M12 19v2M19 12h2" })
  ]))
}