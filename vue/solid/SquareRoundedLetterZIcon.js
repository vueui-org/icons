const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "M11.676 2.001 12 2c7.752 0 10 2.248 10 10l-.005.642C21.869 19.877 19.534 22 12 22l-.642-.005C4.228 21.87 2.063 19.6 2 12.325V12c0-7.643 2.185-9.936 9.676-9.999M14 7h-4a1 1 0 0 0-1 1l.007.117A1 1 0 0 0 10 9h2.382l-3.276 6.553A1 1 0 0 0 10 17h4a1 1 0 0 0 1-1l-.007-.117A1 1 0 0 0 14 15h-2.382l3.276-6.553A1 1 0 0 0 14 7" })
  ]))
}