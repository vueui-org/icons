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
    _createElementVNode("path", { d: "M20 13H4a1 1 0 0 0-1 1v5a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a1 1 0 0 0-1-1M4 8a1 1 0 0 1 .993.883L5 9.01a1 1 0 0 1-1.993.117L3 9a1 1 0 0 1 1-1M4 3a1 1 0 0 1 .993.883L5 4.01a1 1 0 0 1-1.993.117L3 4a1 1 0 0 1 1-1M9 3a1 1 0 0 1 .993.883L10 4.01a1 1 0 0 1-1.993.117L8 4a1 1 0 0 1 1-1M15 3a1 1 0 0 1 .993.883L16 4.01a1 1 0 0 1-1.993.117L14 4a1 1 0 0 1 1-1M20 3a1 1 0 0 1 .993.883L21 4.01a1 1 0 0 1-1.993.117L19 4a1 1 0 0 1 1-1M20 8a1 1 0 0 1 .993.883L21 9.01a1 1 0 0 1-1.993.117L19 9a1 1 0 0 1 1-1" })
  ]))
}