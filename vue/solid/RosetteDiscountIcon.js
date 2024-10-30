const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "M12.01 2.011c.852 0 1.668.34 2.267.942l.698.698A1.2 1.2 0 0 0 15.82 4h1a3.2 3.2 0 0 1 3.2 3.2v1c0 .316.126.62.347.843l.698.698a3.2 3.2 0 0 1 .002 4.536l-.698.698a1.2 1.2 0 0 0-.349.845v1a3.2 3.2 0 0 1-3.2 3.2h-1a1.2 1.2 0 0 0-.843.347l-.698.698a3.2 3.2 0 0 1-4.536.002l-.698-.698a1.2 1.2 0 0 0-.845-.349h-1a3.2 3.2 0 0 1-3.2-3.2v-1a1.2 1.2 0 0 0-.347-.843l-.698-.698a3.2 3.2 0 0 1-.002-4.536l.698-.698A1.2 1.2 0 0 0 4 8.2v-1l.005-.182A3.2 3.2 0 0 1 7.2 4h1a1.2 1.2 0 0 0 .843-.347l.698-.698a3.2 3.2 0 0 1 2.269-.944M14.5 13a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m1.207-4.707a1 1 0 0 0-1.414 0l-6 6a1 1 0 0 0 1.414 1.414l6-6a1 1 0 0 0 0-1.414M9.5 8a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" })
  ]))
}