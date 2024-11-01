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
    _createElementVNode("path", { d: "M17 12V7a2 2 0 0 0-2-2h-.5c-.276 0-.5-.224-.5-.5s-.224-.5-.5-.5h-3c-.276 0-.5.224-.5.5s-.224.5-.5.5H9a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h6M19 16v3M19 22v.01" })
  ]))
}