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
    _createElementVNode("path", { d: "M17 3.34A10 10 0 1 1 2 12l.005-.324A10 10 0 0 1 17 3.34m-4.007 8.777L13 12V7a1 1 0 0 0-2 0v4.696l-1.832 2.75a1 1 0 0 0 .184 1.316l.093.07a1 1 0 0 0 1.387-.277l2.024-3.038.06-.116.032-.081.03-.109z" })
  ]))
}