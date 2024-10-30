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
    _createElementVNode("path", { d: "M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2m0 5a3 3 0 0 0-2.995 2.824L9 10v4l.005.176a3 3 0 0 0 5.99 0L15 14v-4l-.005-.176A3 3 0 0 0 12 7m0 2a1 1 0 0 1 .993.883L13 10v4l-.007.117a1 1 0 0 1-1.986 0L11 14v-4l.007-.117A1 1 0 0 1 12 9" })
  ]))
}