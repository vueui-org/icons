const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    height: "16px",
    width: "16px"
  }, [
    _createElementVNode("path", { d: "M8 3a1 1 0 1 1 0 2H6.743l-2.4 8H10a1 1 0 0 1 1 1v1h2v-1a1 1 0 0 1 1-1h5.656l-2.4-8H16a1 1 0 0 1-.993-.883L15 4a1 1 0 0 1 1-1h2a1 1 0 0 1 .958.713l3.01 10.036.022.112.008.08L22 16.5a4.5 4.5 0 0 1-8.972.5h-2.056A4.5 4.5 0 0 1 2 16.5v-2.518l.004-.071.014-.103.018-.076 3.006-10.02A1 1 0 0 1 6 3z" })
  ]))
}