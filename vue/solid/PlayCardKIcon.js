const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "M17 2a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3zm.01 16H17a1 1 0 0 0-.117 1.993l.127.007a1 1 0 0 0 0-2M10 8a1 1 0 0 0-1 1v6a1 1 0 0 0 2 0v-1.585l2.293 2.292a1 1 0 0 0 1.32.083l.094-.083.083-.094a1 1 0 0 0-.083-1.32L12.415 12l2.292-2.293a1 1 0 1 0-1.414-1.414L11 10.584V9a1 1 0 0 0-.883-.993zM7.01 4H7a1 1 0 0 0-.117 1.993L7.01 6a1 1 0 1 0 0-2" })
  ]))
}