const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "M19 2a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3zm-7 5a3 3 0 0 0-3 3v6a1 1 0 0 0 2 0v-2h2v2a1 1 0 0 0 .883.993L14 17a1 1 0 0 0 1-1v-6a3 3 0 0 0-3-3m0 2a1 1 0 0 1 1 1v2h-2v-2a1 1 0 0 1 .883-.993z" })
  ]))
}