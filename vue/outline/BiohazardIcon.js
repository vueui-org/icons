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
    _createElementVNode("path", { d: "M10 12a2 2 0 1 0 4 0 2 2 0 1 0-4 0" }),
    _createElementVNode("path", { d: "M11.939 14c0 .173.048.351.056.533v.217a4.75 4.75 0 0 1-4.533 4.745h-.217m-4.75-4.75a4.75 4.75 0 0 1 7.737-3.693m6.513 8.443a4.75 4.75 0 0 1-4.69-5.503h-.06m1.764-2.944a4.75 4.75 0 0 1 7.731 3.477v.217m-11.195-3.813a4.75 4.75 0 0 1-1.828-7.624l.164-.172m6.718 0a4.75 4.75 0 0 1-1.665 7.798" })
  ]))
}