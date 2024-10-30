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
    _createElementVNode("path", { d: "M12 12V6a2 2 0 0 1 4 0v6m0-2a2 2 0 1 1 2 2h-6M12 12h6a2 2 0 0 1 0 4h-6m2 0a2 2 0 1 1-2 2v-6M12 12v6a2 2 0 0 1-4 0v-6m0 2a2 2 0 1 1-2-2h6M12 12H6a2 2 0 0 1 0-4h6m-2 0a2 2 0 1 1 2-2v6" })
  ]))
}