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
    _createElementVNode("path", { d: "M14.118 14.127q-.275.273-.618.473l3 5.19a9 9 0 0 0 1.856-1.423m1.68-2.32A9 9 0 0 0 21 12h-5M13.5 9.4l3-5.19a9 9 0 0 0-8.536-.25M10.5 14.6l-3 5.19A9 9 0 0 1 3 12h6a3 3 0 0 0 1.5 2.6M3 3l18 18" })
  ]))
}