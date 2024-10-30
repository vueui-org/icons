const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "2",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "M12 15H5.5a2.5 2.5 0 1 1 0-5H6M15 12v6.5a2.5 2.5 0 1 1-5 0V18M12 9h6.5a2.5 2.5 0 1 1 0 5H18M9 12V5.5a2.5 2.5 0 0 1 5 0V6" })
  ]))
}