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
    _createElementVNode("path", { d: "M14 2a1 1 0 0 1 .993.883L15 3v2h3a1 1 0 0 1 .993.883L19 6v5a1 1 0 0 1-.883.993L18 12h-3v8h1a1 1 0 0 1 .117 1.993L16 22h-4a1 1 0 0 1-.117-1.993L12 20h1v-8H8a1 1 0 0 1-.694-.28l-.087-.095-2-2.5a1 1 0 0 1-.072-1.147l.072-.103 2-2.5a1 1 0 0 1 .652-.367L8 5h5V3a1 1 0 0 1 1-1" })
  ]))
}