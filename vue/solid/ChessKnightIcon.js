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
    _createElementVNode("path", { d: "m8.959 1.99-.147.028-.115.029a1 1 0 0 0-.646 1.27L8.8 5.562 5.985 7.297a2 2 0 0 0-.655 2.751l.089.133A2 2 0 0 0 7.033 11l1.563-.001-1.614 4.674A1 1 0 0 0 7.927 17h7.961a1 1 0 0 0 1-.978l.112-5c0-3.827-1.555-6.878-4.67-7.966l-2.399-.83-.375-.121-.258-.074L9.163 2l-.101-.013-.055-.001-.048.003zM18 18H6a1 1 0 0 0-1 1 2 2 0 0 0 2 2h10a2 2 0 0 0 1.987-1.768l.011-.174A1 1 0 0 0 18 18" })
  ]))
}