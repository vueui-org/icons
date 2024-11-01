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
    _createElementVNode("path", { d: "M3 12a9 9 0 1 0 18 0 9 9 0 1 0-18 0" }),
    _createElementVNode("path", { d: "M12 10.523c2.46-.826 4-.826 4-2.155 0-1.366-1.347-1.366-2.735-1.366-1.91 0-3.352.49-4.537 1.748-.848.902-1.027 2.449-.153 3.307.973.956 3.206 1.789 2.884 3.493-.233 1.235-1.469 1.823-2.617 1.202-.782-.424-.454-1.746.626-2.512s2.822-.992 4.1-.24c.98.575 1.046 1.724.434 2.193" })
  ]))
}