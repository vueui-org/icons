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
    _createElementVNode("path", { d: "M11.676 2.001 12 2c7.752 0 10 2.248 10 10l-.005.642C21.869 19.877 19.534 22 12 22l-.642-.005C4.228 21.87 2.063 19.6 2 12.325V12c0-7.643 2.185-9.936 9.676-9.999M12 7h-2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h2a3 3 0 0 0 3-3v-4a3 3 0 0 0-3-3m0 2a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-1V9z" })
  ]))
}