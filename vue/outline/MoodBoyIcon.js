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
    _createElementVNode("path", { d: "M17 4.5a9 9 0 0 1 3.864 5.89 2.5 2.5 0 0 1-.29 4.36 9 9 0 0 1-17.137 0 2.5 2.5 0 0 1-.29-4.36 9 9 0 0 1 3.746-5.81" }),
    _createElementVNode("path", { d: "M9.5 16a3.5 3.5 0 0 0 5 0M8.5 2C10 3 11 5.5 11 7M12.5 2c1.5 2 2 3.5 2 5M9 12h.01M15 12h.01" })
  ]))
}