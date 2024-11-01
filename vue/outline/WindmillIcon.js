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
    _createElementVNode("path", { d: "M12 12c2.76 0 5-2.01 5-4.5S14.76 3 12 3zM12 12c0 2.76 2.01 5 4.5 5s4.5-2.24 4.5-5zM12 12c-2.76 0-5 2.01-5 4.5S9.24 21 12 21zM12 12c0-2.76-2.01-5-4.5-5S3 9.24 3 12z" })
  ]))
}