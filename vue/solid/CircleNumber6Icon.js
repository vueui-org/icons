const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2m1 5h-2l-.15.005a2 2 0 0 0-1.844 1.838L9 9v6l.005.15a2 2 0 0 0 1.838 1.844L11 17h2l.15-.005a2 2 0 0 0 1.844-1.838L15 15v-2l-.005-.15a2 2 0 0 0-1.838-1.844L13 11h-2V9h2l.007.117A1 1 0 0 0 15 9a2 2 0 0 0-1.85-1.995zm0 6v2h-2v-2z" })
  ]))
}