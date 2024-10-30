const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "M16 4H8a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2M22 6a1 1 0 0 1 .117 1.993L22 8h-1v8h1a1 1 0 0 1 .117 1.993L22 18h-1a2 2 0 0 1-1.995-1.85L19 16V8a2 2 0 0 1 1.85-1.995L21 6zM3 6a2 2 0 0 1 1.995 1.85L5 8v8a2 2 0 0 1-1.85 1.995L3 18H2a1 1 0 0 1-.117-1.993L2 16h1V8H2a1 1 0 0 1-.117-1.993L2 6z" })
  ]))
}