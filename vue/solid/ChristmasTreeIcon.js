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
    _createElementVNode("path", { d: "M15 19v1a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-1zM5 18c-.89 0-1.337-1.077-.707-1.707l2.855-2.857-1.464-.487a1 1 0 0 1-.472-1.565l.08-.091 3.019-3.02-.758-.379a1 1 0 0 1-.343-1.507l.083-.094 4-4a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1-.26 1.601l-.759.379 3.02 3.02a1 1 0 0 1-.279 1.61l-.113.046-1.465.487 2.856 2.857c.603.602.22 1.614-.593 1.701L19 18z" })
  ]))
}