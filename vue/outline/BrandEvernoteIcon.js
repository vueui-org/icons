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
    _createElementVNode("path", { d: "M4 8h5V3" }),
    _createElementVNode("path", { d: "M17.9 19c.6-2.5 1.1-5.471 1.1-9 0-4.5-2-5-3-5-1.906 0-3-.5-3.5-1-.354-.354-.5-1-1.5-1H9L4 8c0 6 2.5 8 5 8 1 0 1.5-.5 2-1.5s1.414-.326 2.5 0c1.044.313 2.01.255 2.5.5 1 .5 2 1.5 2 3 0 .5 0 3-3 3s-3-3-1-3M15 10h1" })
  ]))
}