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
    _createElementVNode("path", { d: "M3 19a9 9 0 0 1 9 0 9 9 0 0 1 5.899-1.096M3 6a9 9 0 0 1 2.114-.884m3.8-.21C9.984 5.076 11.03 5.44 12 6a9 9 0 0 1 9 0M3 6v13M12 6v2m0 4v7M21 6v11M3 3l18 18" })
  ]))
}