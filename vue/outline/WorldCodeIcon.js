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
    _createElementVNode("path", { d: "M20.942 13.02a9 9 0 1 0-9.47 7.964M3.6 9h16.8M3.6 15h9.9" }),
    _createElementVNode("path", { d: "M11.5 3a17 17 0 0 0 0 18M12.5 3c2 3.206 2.837 6.913 2.508 10.537M20 21l2-2-2-2M17 17l-2 2 2 2" })
  ]))
}