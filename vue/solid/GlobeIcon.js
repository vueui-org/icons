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
    _createElementVNode("path", { d: "M11 4a5 5 0 1 1-4.995 5.217L6 9l.005-.217A5 5 0 0 1 11 4" }),
    _createElementVNode("path", { d: "M14.133 1.502a1 1 0 0 1 1.365-.369A9.015 9.015 0 1 1 5.094 15.755a1 1 0 1 1 1.312-1.51 7.015 7.015 0 1 0 8.096-11.378 1 1 0 0 1-.369-1.365" }),
    _createElementVNode("path", { d: "M11 16a1 1 0 0 1 .993.883L12 17v4a1 1 0 0 1-1.993.117L10 21v-4a1 1 0 0 1 1-1" }),
    _createElementVNode("path", { d: "M15 20a1 1 0 0 1 .117 1.993L15 22H7a1 1 0 0 1-.117-1.993L7 20z" })
  ]))
}