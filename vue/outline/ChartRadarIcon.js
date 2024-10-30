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
    _createElementVNode("path", { d: "m12 3 9.5 7L18 21H6L2.5 10z" }),
    _createElementVNode("path", { d: "m12 7.5 5.5 4L15 17H8.5l-2-5.5z" }),
    _createElementVNode("path", { d: "m2.5 10 9.5 3 9.5-3" }),
    _createElementVNode("path", { d: "M12 3v10l6 8M6 21l6-8" })
  ]))
}