const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "M11.676 2.001 12 2c7.752 0 10 2.248 10 10l-.005.642C21.869 19.877 19.534 22 12 22l-.642-.005C4.228 21.87 2.063 19.6 2 12.325V12c0-7.643 2.185-9.936 9.676-9.999M12 7h-2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1l.117-.007A1 1 0 0 0 11 16v-2.332l2.2 2.932a1 1 0 0 0 1.4.2l.096-.081A1 1 0 0 0 14.8 15.4l-1.903-2.538.115-.037A3.001 3.001 0 0 0 12 7m0 2a1 1 0 0 1 0 2h-1V9z" })
  ]))
}