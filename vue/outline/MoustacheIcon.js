const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "2",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "M15 9a3 3 0 0 1 2.599 1.5h0c.933 1.333 2.133 1.556 3.126 1.556h.291l.77-.044h.213q-1.444 2.888-6.6 3h-.565a3 3 0 0 1 .165-6z" }),
    _createElementVNode("path", { d: "M9 9a3 3 0 0 0-2.599 1.5h0c-.933 1.333-2.133 1.556-3.126 1.556h-.291l-.77-.044h-.213q1.445 2.888 6.6 3h.565a3 3 0 0 0-.165-6z" })
  ]))
}