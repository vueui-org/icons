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
    _createElementVNode("path", { d: "M9 5h10a2 2 0 0 1 2 2v10m-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2" }),
    _createElementVNode("path", { d: "M14 14v1h1m2-2v-2a2 2 0 0 0-2-2h-1v1M7 15v-4.5a1.5 1.5 0 0 1 2.077-1.385m.788.762c.087.19.135.4.135.623V15M7 13h3M3 3l18 18" })
  ]))
}