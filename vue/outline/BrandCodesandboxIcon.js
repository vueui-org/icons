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
    _createElementVNode("path", { d: "M20 7.5v9l-4 2.25L12 21l-4-2.25-4-2.25v-9l4-2.25L12 3l4 2.25zM12 12l4-2.25 4-2.25M12 12v9M12 12 8 9.75 4 7.5" }),
    _createElementVNode("path", { d: "m20 12-4 2v4.75M4 12l4 2v4.75M8 5.25l4 2.25 4-2.25" })
  ]))
}