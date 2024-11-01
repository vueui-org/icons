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
    _createElementVNode("path", { d: "M21 15h-2.5a1.503 1.503 0 0 0-1.5 1.5 1.503 1.503 0 0 0 1.5 1.5h1a1.503 1.503 0 0 1 1.5 1.5 1.503 1.503 0 0 1-1.5 1.5H17M19 21v1m0-8v1M13 21H6a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h2m12 3.12V9a2 2 0 0 0-2-2h-2" }),
    _createElementVNode("path", { d: "M16 10V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v6m8 0H8m8 0h1m-9 0H7M8 14v.01M8 17v.01M12 13.99V14M12 17v.01" })
  ]))
}