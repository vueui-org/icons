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
    _createElementVNode("path", { d: "M12 3q-2 1.5-2 4.5c0 3 2 4.5 2 4.5s2 1.5 2 4.5q0 3-2 4.5" }),
    _createElementVNode("path", { d: "M19.794 16.5q-.3-2.482-2.897-3.982C14.3 11.018 12 12 12 12s-2.299.982-4.897-.518Q4.505 9.982 4.206 7.5" }),
    _createElementVNode("path", { d: "M19.794 7.5q-2.299-.982-4.897.518C12.3 9.518 12 12 12 12s-.299 2.482-2.897 3.982q-2.598 1.5-4.897.518" })
  ]))
}