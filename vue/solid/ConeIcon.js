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
    _createElementVNode("path", { d: "M12 1.001c.72 0 1.385.387 1.749 1.03l8.13 14.99a1 1 0 0 1 .121.477v.498c0 2.46-4.306 3.945-9.677 4.002L12 22c-5.52 0-10-1.495-10-4.003v-.5a1 1 0 0 1 .121-.477L10.26 2.015A2 2 0 0 1 12 1" })
  ]))
}