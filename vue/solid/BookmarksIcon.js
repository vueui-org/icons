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
    _createElementVNode("path", { d: "M12 6a4 4 0 0 1 4 4v11a1 1 0 0 1-1.514.857L10 19.166l-4.486 2.691a1 1 0 0 1-1.508-.743L4 21V10a4 4 0 0 1 4-4z" }),
    _createElementVNode("path", { d: "M16 2a4 4 0 0 1 4 4v11a1 1 0 0 1-2 0V6a2 2 0 0 0-2-2h-5a1 1 0 0 1 0-2z" })
  ]))
}