const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "2",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "M7 7H4a1 1 0 0 1-1-1V4c0-.275.11-.523.29-.704M7 3h13a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-9M10.36 10.35a4 4 0 1 0 5.285 5.3" }),
    _createElementVNode("path", { d: "M19 7v7q0 .482-.064.947m-1.095 2.913A7 7 0 0 1 5 14V7M12 14h.01M3 3l18 18" })
  ]))
}