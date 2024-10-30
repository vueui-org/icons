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
    _createElementVNode("path", { d: "M12 8h7l-.621 2.485A2 2 0 0 1 16.439 12H16m-4 0H7.561a2 2 0 0 1-1.94-1.515L5 8h3M7 8V7m.864-3.106A3 3 0 0 1 10 3M8 12l1 9M15.599 15.613 15 21M7 21h10M3 3l18 18" })
  ]))
}