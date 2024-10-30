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
    _createElementVNode("path", { d: "m10 15-3 3-3-3M7 6v12M14 18.333c0 .369.298.667.667.667h2.666a.667.667 0 0 0 .667-.667v-2.666a.667.667 0 0 0-.667-.667h-2.666a.667.667 0 0 0-.667.667zM14 10.833c0 .645.522 1.167 1.167 1.167h4.666c.645 0 1.167-.522 1.167-1.167V6.167C21 5.522 20.478 5 19.833 5h-4.666C14.522 5 14 5.522 14 6.167z" })
  ]))
}