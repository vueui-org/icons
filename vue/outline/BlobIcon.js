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
    _createElementVNode("path", { d: "M5.897 20.188C7.567 20.94 9.793 21 12 21s4.434-.059 6.104-.812c.868-.392 1.614-.982 2.133-1.856.514-.865.763-1.94.763-3.234 0-2.577-.983-5.315-2.557-7.416C16.873 5.588 14.61 4 12 4S7.127 5.588 5.557 7.682C3.983 9.783 3 12.522 3 15.098c0 1.295.249 2.369.763 3.234.519.874 1.265 1.464 2.134 1.856" })
  ]))
}