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
    _createElementVNode("path", { d: "M12 12H6a3 3 0 0 1-3-3V7c0-1.083.574-2.033 1.435-2.56M8 4h10a3 3 0 0 1 3 3v2a3 3 0 0 1-3 3h-2M16 12h2a3 3 0 0 1 3 3v2m-1.448 2.568A3 3 0 0 1 18 20H6a3 3 0 0 1-3-3v-2a3 3 0 0 1 3-3h6M7 8v.01M7 16v.01M3 3l18 18" })
  ]))
}