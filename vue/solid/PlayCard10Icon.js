const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "M17 2a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3zm.01 16H17a1 1 0 0 0-.117 1.993l.127.007a1 1 0 0 0 0-2M9 8a1 1 0 0 0-1 1v6a1 1 0 0 0 2 0V9a1 1 0 0 0-1-1m4.5 0C12.047 8 11 9.395 11 11v2c0 1.605 1.047 3 2.5 3s2.5-1.395 2.5-3v-2c0-1.605-1.047-3-2.5-3m0 2c.203 0 .5.395.5 1v2c0 .605-.297 1-.5 1s-.5-.395-.5-1v-2c0-.605.297-1 .5-1M7.01 4H7a1 1 0 0 0-.117 1.993L7.01 6a1 1 0 1 0 0-2" })
  ]))
}