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
    _createElementVNode("path", { d: "m10.205 2.6-6.96 5.238A3 3 0 0 0 2.2 11.176l2.896 8.765A3 3 0 0 0 7.946 22h8.12a3 3 0 0 0 2.841-2.037l2.973-8.764a3 3 0 0 0-1.05-3.37l-7.033-5.237-.091-.061-.018-.01-.106-.07a3 3 0 0 0-3.377.148z" })
  ]))
}