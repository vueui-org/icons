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
    _createElementVNode("path", { d: "M21 12.8c-.523-.502-1.172-.8-1.875-.8C17.398 12 16 13.791 16 16s1.398 4 3.125 4c.703 0 1.352-.298 1.874-.8M15 16h4M3 5a2 2 0 1 0 4 0 2 2 0 1 0-4 0M15 5a2 2 0 1 0 4 0 2 2 0 1 0-4 0M7 5h8M7 5v8a3 3 0 0 0 3 3h1" })
  ]))
}