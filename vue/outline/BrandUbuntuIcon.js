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
    _createElementVNode("path", { d: "M10 5a2 2 0 1 0 4 0 2 2 0 1 0-4 0" }),
    _createElementVNode("path", { d: "M17.723 7.41a8 8 0 0 0-3.74-2.162m-3.971 0a8 8 0 0 0-3.789 2.216m-1.881 3.215A8 8 0 0 0 4 12.999c0 .738.1 1.453.287 2.132m1.96 3.428a8 8 0 0 0 3.759 2.19m4 0a8 8 0 0 0 3.747-2.186m1.962-3.43a8 8 0 0 0 .287-2.131c0-.764-.107-1.503-.307-2.203" }),
    _createElementVNode("path", { d: "M3 17a2 2 0 1 0 4 0 2 2 0 1 0-4 0M17 17a2 2 0 1 0 4 0 2 2 0 1 0-4 0" })
  ]))
}