const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    height: "16px",
    width: "16px"
  }, [
    _createElementVNode("path", { d: "M16.882 7.842a4.882 4.882 0 0 0-9.764 0c0 4.273-.213 6.409-4.118 8.118 2 .882 2 .882 3 3 3 0 4 2 6 2s3-2 6-2c1-2.118 1-2.118 3-3-3.906-1.709-4.118-3.845-4.118-8.118M3 15.961c4-2.118 4-4.118 1-7.118m17 7.118c-4-2.118-4-4.118-1-7.118" })
  ]))
}