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
    _createElementVNode("path", { d: "M14 6a2 2 0 1 0-4 0 2 2 0 0 0 4 0M7 14a2 2 0 1 0-4 0 2 2 0 0 0 4 0M21 14a2 2 0 1 0-4 0 2 2 0 0 0 4 0M14 18a2 2 0 1 0-4 0 2 2 0 0 0 4 0M12 8v8M6.316 12.496l4.368-4.992M17.684 12.496l-4.366-4.99" })
  ]))
}