const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "m12 2 .07.003a2.41 2.41 0 0 1 1.825.907l.108.148 4.92 7.306c1.952 3.267 1.191 7.42-1.796 9.836-2.968 2.402-7.285 2.402-10.254 0-2.917-2.36-3.711-6.376-1.901-9.65l.134-.232 4.893-7.26c.185-.275.426-.509.709-.686a2.4 2.4 0 0 1 1.066-.36zm-1 3.149-4.206 6.24c-1.44 2.41-.88 5.463 1.337 7.257A6.1 6.1 0 0 0 11 19.922z" })
  ]))
}