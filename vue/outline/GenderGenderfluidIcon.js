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
    _createElementVNode("path", { d: "M10 15.464a4 4 0 1 0 4-6.928 4 4 0 0 0-4 6.928M15.464 14l3-5.196M5.536 15.195l3-5.196M12 12h.01M9 9 3 3M5.5 8.5l3-3M21 21l-6-6M17 20l3-3M3 7V3h4" })
  ]))
}