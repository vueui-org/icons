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
    _createElementVNode("path", { d: "M4 6c0-.556.227-1.059.593-1.421M9 4h1.5M13.5 4H15M18 4a2 2 0 0 1 2 2M20 9v1.5M20 13.5V15M19.402 19.426A2 2 0 0 1 18 20M15 20h-1.5M10.5 20H9M6 20a2 2 0 0 1-2-2M4 15v-1.5M4 10.5V9M3 3l18 18" })
  ]))
}