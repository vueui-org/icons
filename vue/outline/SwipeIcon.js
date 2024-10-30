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
    _createElementVNode("path", { d: "M15 16.572v2.42A2.01 2.01 0 0 1 12.991 21H5.01A2.01 2.01 0 0 1 3 18.991V11.01A2.01 2.01 0 0 1 5.009 9h2.954" }),
    _createElementVNode("path", { d: "M9.167 4.511a2.04 2.04 0 0 1 2.496-1.441l7.826 2.097a2.04 2.04 0 0 1 1.441 2.496l-2.097 7.826a2.04 2.04 0 0 1-2.496 1.441L8.51 14.833a2.04 2.04 0 0 1-1.441-2.496L9.167 4.51z" })
  ]))
}