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
    _createElementVNode("path", { d: "M6 12a4 4 0 1 1-3.995 4.2L2 16l.005-.2A4 4 0 0 1 6 12M16 16a3 3 0 1 1-2.995 3.176L13 19l.005-.176A3 3 0 0 1 16 16M14.5 2a5.5 5.5 0 1 1-5.496 5.721L9 7.5l.004-.221A5.5 5.5 0 0 1 14.5 2" })
  ]))
}