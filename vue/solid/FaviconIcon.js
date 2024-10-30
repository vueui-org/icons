const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "M19 4a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H5a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4zM6 9a1 1 0 0 0-1 1v4a1 1 0 0 0 2 0v-4a1 1 0 0 0-1-1m5 0a3 3 0 0 0 0 6 1 1 0 0 0 .117-1.993L11 13a1 1 0 0 1-.117-1.993L11 11a1 1 0 0 0 0-2m5 0a3 3 0 0 0-2.995 2.824L13 12a3 3 0 1 0 3-3" }),
    _createElementVNode("path", { d: "M16 11a1 1 0 1 0 0 2 1 1 0 0 0 0-2" })
  ]))
}