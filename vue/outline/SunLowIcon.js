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
    _createElementVNode("path", { d: "M8 12a4 4 0 1 0 8 0 4 4 0 1 0-8 0M4 12h.01M12 4v.01M20 12h.01M12 20v.01M6.31 6.31 6.3 6.3M17.71 6.31l-.01-.01M17.7 17.7l.01.01M6.3 17.7l.01.01" })
  ]))
}