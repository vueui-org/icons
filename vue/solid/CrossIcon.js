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
    _createElementVNode("path", { d: "m10 2-.117.007A1 1 0 0 0 9 3v4H5a1 1 0 0 0-1 1v4l.007.117A1 1 0 0 0 5 13h4v8a1 1 0 0 0 1 1h4l.117-.007A1 1 0 0 0 15 21v-8h4a1 1 0 0 0 1-1V8l-.007-.117A1 1 0 0 0 19 7h-4V3a1 1 0 0 0-1-1z" })
  ]))
}