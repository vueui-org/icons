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
    _createElementVNode("path", { d: "M8.595 4.577A2 2 0 0 1 10 4h4a2 2 0 0 1 2 2v2M12 8h6a2 2 0 0 1 2 2v6m-.576 3.405A2 2 0 0 1 18 20H6a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2M10 14h4M12 12v4M3 3l18 18" })
  ]))
}