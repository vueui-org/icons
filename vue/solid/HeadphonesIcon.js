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
    _createElementVNode("path", { d: "M21 18a3 3 0 0 1-2.824 2.995L18 21h-1a3 3 0 0 1-2.995-2.824L14 18v-3a3 3 0 0 1 2.824-2.995L17 12h1c.351 0 .688.06 1 .171V12a7 7 0 0 0-13.996-.24L5 12v.17q.377-.133.791-.163L6 12h1a3 3 0 0 1 2.995 2.824L10 15v3a3 3 0 0 1-2.824 2.995L7 21H6a3 3 0 0 1-2.995-2.824L3 18v-6a9 9 0 0 1 17.996-.265L21 12z" })
  ]))
}