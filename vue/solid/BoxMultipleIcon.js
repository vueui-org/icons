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
    _createElementVNode("path", { d: "M6 5.667A3.667 3.667 0 0 1 9.667 2h8.666A3.667 3.667 0 0 1 22 5.667v8.666A3.667 3.667 0 0 1 18.333 18H9.667A3.667 3.667 0 0 1 6 14.333z" }),
    _createElementVNode("path", { d: "M2 9c0-1.094.533-1.828 1.514-2.374a1 1 0 1 1 .972 1.748C4.088 8.595 4 8.716 4 9v10c0 .548.452 1 1 1h9.998c.32 0 .618-.154.805-.407l.065-.1a1 1 0 1 1 1.738.99A3 3 0 0 1 15 22H5c-1.652 0-3-1.348-3-3z" })
  ]))
}