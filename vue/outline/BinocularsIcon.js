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
    _createElementVNode("path", { d: "M4 16a3 3 0 1 0 6 0 3 3 0 1 0-6 0M14 16a3 3 0 1 0 6 0 3 3 0 1 0-6 0M16.346 9.17l-.729-1.261c-.16-.248-1.056-.203-1.117.091l-.177 1.38" }),
    _createElementVNode("path", { d: "m19.761 14.813-2.84-5.133C16.732 9.37 16.329 9 15.5 9c-.828 0-1.5.448-1.5 1v6M7.654 9.17l.729-1.261C8.543 7.66 9.439 7.706 9.5 8l.177 1.38" }),
    _createElementVNode("path", { d: "m4.239 14.813 2.84-5.133C7.268 9.37 7.671 9 8.5 9c.828 0 1.5.448 1.5 1v6M10 12h4v2h-4z" })
  ]))
}