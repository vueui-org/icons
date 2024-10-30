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
    _createElementVNode("path", { d: "M20.986 12.509a9 9 0 1 0-8.455 8.476M3.6 9h16.8M3.6 15h10.9" }),
    _createElementVNode("path", { d: "M11.5 3a17 17 0 0 0 0 18M12.5 3c2.313 3.706 3.07 7.857 2.27 12M19 16v6M22 19l-3 3-3-3" })
  ]))
}