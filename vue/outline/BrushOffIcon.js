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
    _createElementVNode("path", { d: "M3 17a4 4 0 1 1 4 4H3z" }),
    _createElementVNode("path", { d: "M21 3a16 16 0 0 0-9.309 4.704M9.896 9.916A16 16 0 0 0 8.2 13.2M21 3a16 16 0 0 1-4.697 9.302m-2.195 1.786A16 16 0 0 1 10.8 15.8M3 3l18 18" })
  ]))
}