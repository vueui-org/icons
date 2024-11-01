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
    _createElementVNode("path", { d: "M11 17a2.5 2.5 0 0 0 2 0" }),
    _createElementVNode("path", { d: "M12 3C7.336 3 4.604 5.331 4.138 8.595a11.82 11.82 0 0 0 2 8.592 10.8 10.8 0 0 0 3.199 3.064c1.666 1 3.664 1 5.33 0a10.8 10.8 0 0 0 3.199-3.064 11.9 11.9 0 0 0 2-8.592C19.4 5.33 16.668 3 12.004 3zM8 11l2 2M16 11l-2 2" })
  ]))
}