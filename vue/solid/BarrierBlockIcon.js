const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "M15 21a1 1 0 0 1 0-2h1v-2H8v2h1a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2h1v-2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h1V5a1 1 0 1 1 2 0v1h8V5a1 1 0 0 1 2 0v1h1a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-1v2h1a1 1 0 0 1 0 2zM12.914 8l-7 7h4.17L17 8zM19 10.914 14.914 15H19zM8.084 8H5v3.084z" })
  ]))
}