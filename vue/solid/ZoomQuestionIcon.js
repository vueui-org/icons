const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "M14 3.072a8 8 0 0 1 2.32 11.834l5.387 5.387a1 1 0 0 1-1.414 1.414l-5.388-5.387A8 8 0 0 1 2 10l.005-.285A8 8 0 0 1 14 3.072M10 12a1 1 0 0 0-.993.883L9 13.01a1 1 0 0 0 1.993.117L11 13a1 1 0 0 0-1-1M8.1 6.877a1 1 0 0 0 1.433 1.389l.088-.09A.5.5 0 1 1 10 9a1 1 0 0 0-.002 2 2.5 2.5 0 1 0-1.9-4.123" })
  ]))
}