const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "M17 2a2 2 0 0 1 1.995 1.85L19 4v4c0 1.335-.229 2.386-.774 3.692l-.157.363-.31.701a8.9 8.9 0 0 0-.751 3.242l-.008.377V20a2 2 0 0 1-1.85 1.995L15 22H9a2 2 0 0 1-1.995-1.85L7 20v-3.625c0-1.132-.21-2.25-.617-3.28l-.142-.34-.31-.699c-.604-1.358-.883-2.41-.925-3.698L5 8V4a2 2 0 0 1 1.85-1.995L7 2zm0 2H7v3h10z" })
  ]))
}