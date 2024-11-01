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
    _createElementVNode("path", { d: "M15 2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 1 1v8a6 6 0 1 1-12 0V8a1 1 0 0 1 1-1h1V3a1 1 0 0 1 1-1zm-1 2h-4v3h4z" })
  ]))
}