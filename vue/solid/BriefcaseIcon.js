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
    _createElementVNode("path", { d: "M22 13.478V18a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-4.522l.553.277a21 21 0 0 0 18.897-.002zM14 2a3 3 0 0 1 3 3v1h2a3 3 0 0 1 3 3v2.242l-1.447.724a19 19 0 0 1-16.726.186l-.647-.32-1.18-.59V9a3 3 0 0 1 3-3h2V5a3 3 0 0 1 3-3zm-2 8a1 1 0 0 0-1 1 1 1 0 1 0 2 .01c0-.562-.448-1.01-1-1.01m2-6h-4a1 1 0 0 0-1 1v1h6V5a1 1 0 0 0-1-1" })
  ]))
}