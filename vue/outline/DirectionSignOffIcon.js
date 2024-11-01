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
    _createElementVNode("path", { d: "m18.73 14.724 1.949-1.95a1.095 1.095 0 0 0 0-1.548l-7.905-7.905a1.095 1.095 0 0 0-1.548 0l-1.95 1.95m-2.01 2.01-3.945 3.945a1.095 1.095 0 0 0 0 1.548l7.905 7.905c.427.428 1.12.428 1.548 0l3.95-3.95M8 12h4M13.748 13.752 12 15.5M3 3l18 18" })
  ]))
}