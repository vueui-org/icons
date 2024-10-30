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
    _createElementVNode("path", { d: "M15.3 2H8.7c-.562 0-1.016.201-1.407.593l-4.7 4.7A1.9 1.9 0 0 0 2 8.7v6.6c0 .562.201 1.016.593 1.407l4.7 4.7c.391.392.845.593 1.407.593h6.6c.562 0 1.016-.201 1.407-.593l4.7-4.7c.392-.391.593-.845.593-1.407V8.7c0-.562-.201-1.016-.593-1.407l-4.7-4.7A1.9 1.9 0 0 0 15.3 2" })
  ]))
}