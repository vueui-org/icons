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
    _createElementVNode("path", { d: "M15 7H9a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2M4 7a1 1 0 0 1 .117 1.993L4 9H3a1 1 0 0 1-.117-1.993L3 7zM4 15a1 1 0 0 1 .117 1.993L4 17H3a1 1 0 0 1-.117-1.993L3 15zM8 2a1 1 0 0 1 .993.883L9 3v1a1 1 0 0 1-1.993.117L7 4V3a1 1 0 0 1 1-1M16 2a1 1 0 0 1 .993.883L17 3v1a1 1 0 0 1-1.993.117L15 4V3a1 1 0 0 1 1-1M21 7a1 1 0 0 1 .117 1.993L21 9h-1a1 1 0 0 1-.117-1.993L20 7zM21 15a1 1 0 0 1 .117 1.993L21 17h-1a1 1 0 0 1-.117-1.993L20 15zM8 19a1 1 0 0 1 .993.883L9 20v1a1 1 0 0 1-1.993.117L7 21v-1a1 1 0 0 1 1-1M16 19a1 1 0 0 1 .993.883L17 20v1a1 1 0 0 1-1.993.117L15 21v-1a1 1 0 0 1 1-1" })
  ]))
}