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
    _createElementVNode("path", { d: "M2 7v1c0 1.087 1.078 2 2 2 1.107 0 2-.91 2-2 0 1.09.893 2 2 2s2-.91 2-2c0 1.09.893 2 2 2s2-.91 2-2c0 1.09.893 2 2 2s2-.91 2-2c0 1.09.893 2 2 2 .922 0 2-.913 2-2V7q-.013-.412-1.588-2.068A3 3 0 0 0 18.238 4H5.762a3 3 0 0 0-2.174.932Q2.012 6.588 2 7M4 10q-.176 9.42.814 10.456c1.534.367 4.355.535 7.186.536 2.83-.001 5.652-.169 7.186-.536.99-1.037.898-9.559.814-10.456" }),
    _createElementVNode("path", { d: "m10 16 2-2 2 2M12 14v4" })
  ]))
}