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
    _createElementVNode("path", { d: "M16.69 7.44A6.97 6.97 0 0 0 15 12a6.97 6.97 0 0 0 1.699 4.571c1.914-.684 3.691-2.183 5.301-4.565-1.613-2.384-3.394-3.883-5.312-4.565M2 9.504a41 41 0 0 0 2.422 2.504A40 40 0 0 0 2 14.506M18 11v.01M4.422 12H15M7 10v4M11 8v8" })
  ]))
}