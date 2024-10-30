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
    _createElementVNode("path", { d: "M19.42 19.41A2 2 0 0 1 18 20H6a2 2 0 0 1-2-2V6c0-.554.225-1.055.588-1.417M8 4h10a2 2 0 0 1 2 2v10" }),
    _createElementVNode("path", { d: "M9.885 9.872a3 3 0 1 0 4.245 4.24m.582-3.396a3 3 0 0 0-1.438-1.433M3 3l18 18" })
  ]))
}