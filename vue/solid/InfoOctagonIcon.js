const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "M14.897 1a4 4 0 0 1 2.664 1.016l.165.156 4.1 4.1a4 4 0 0 1 1.168 2.605l.006.227v5.794a4 4 0 0 1-1.016 2.664l-.156.165-4.1 4.1a4 4 0 0 1-2.603 1.168l-.227.006H9.103a4 4 0 0 1-2.664-1.017l-.165-.156-4.1-4.1a4 4 0 0 1-1.168-2.604L1 14.897V9.103a4 4 0 0 1 1.016-2.664l.156-.165 4.1-4.1a4 4 0 0 1 2.605-1.168L9.104 1zM12 11h-1l-.117.007a1 1 0 0 0 0 1.986L11 13v3l.007.117a1 1 0 0 0 .876.876L12 17h1l.117-.007a1 1 0 0 0 .876-.876L14 16l-.007-.117a1 1 0 0 0-.764-.857l-.112-.02L13 15v-3l-.007-.117a1 1 0 0 0-.876-.876zm.01-3-.127.007a1 1 0 0 0 0 1.986L12 10l.127-.007a1 1 0 0 0 0-1.986z" })
  ]))
}