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
    _createElementVNode("path", { d: "M9 9v10a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V5M8 4a1 1 0 0 1 1 1M9 5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4M13 13v6a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V9M5 8h3M9 16h4" }),
    _createElementVNode("path", { d: "M14.254 10.244 13.036 5.82a1.02 1.02 0 0 1 .634-1.219l.133-.041 2.184-.53c.562-.135 1.133.19 1.282.732l3.236 11.75M19.585 19.589l-1.572.38c-.562.136-1.133-.19-1.282-.731l-.952-3.458M14 9l4-1M19.207 15.199l.716-.18M3 3l18 18" })
  ]))
}