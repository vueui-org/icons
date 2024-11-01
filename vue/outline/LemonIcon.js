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
    _createElementVNode("path", { d: "M17.536 3.393c3.905 3.906 3.905 10.237 0 14.143-3.906 3.905-10.237 3.905-14.143 0z" }),
    _createElementVNode("path", { d: "M5.868 15.06a6.5 6.5 0 0 0 9.193-9.192M10.464 10.464l4.597 4.597M10.464 10.464v6.364M10.464 10.464h6.364" })
  ]))
}