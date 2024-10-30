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
    _createElementVNode("path", { d: "M9.172 5a3 3 0 0 1 2.121.879l5.71 5.71a3.41 3.41 0 0 1 0 4.822l-3.592 3.592a3.41 3.41 0 0 1-4.822 0l-5.71-5.71A3 3 0 0 1 2 12.172V8a3 3 0 0 1 3-3zM7 9h-.01A1 1 0 1 0 7 11a1 1 0 0 0 0-2" }),
    _createElementVNode("path", { d: "M14.293 5.293a1 1 0 0 1 1.414 0L20.3 9.885a5.82 5.82 0 0 1 0 8.23l-1.592 1.592a1 1 0 0 1-1.414-1.414l1.592-1.592a3.82 3.82 0 0 0 0-5.402l-4.592-4.592a1 1 0 0 1 0-1.414" })
  ]))
}