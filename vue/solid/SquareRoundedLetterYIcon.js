const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "M11.676 2.001 12 2c7.752 0 10 2.248 10 10l-.005.642C21.869 19.877 19.534 22 12 22l-.642-.005C4.228 21.87 2.063 19.6 2 12.325V12c0-7.643 2.185-9.936 9.676-9.999m2.695 5.07a1 1 0 0 0-1.3.558L12 10.307l-1.072-2.678a1 1 0 0 0-1.856.742L11 13.194V16a1 1 0 0 0 .883.993L12 17a1 1 0 0 0 1-1v-2.809l1.928-4.82a1 1 0 0 0-.45-1.25z" })
  ]))
}