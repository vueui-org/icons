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
    _createElementVNode("path", { d: "M4.876 13.61A4 4 0 1 0 11 17h6" }),
    _createElementVNode("path", { d: "M15.066 20.502A4 4 0 1 0 17 13c-.706 0-1.424.179-2 .5L12 8" }),
    _createElementVNode("path", { d: "M16 8a4 4 0 1 0-8 0c0 1.506.77 2.818 2 3.5L7 17" })
  ]))
}