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
    _createElementVNode("path", { d: "M4 5h1m4 0h2M9 3v2m-.508 3.517C7.678 11.172 5.972 13 4 13" }),
    _createElementVNode("path", { d: "M5 9c0 2.144 2.952 3.908 6.7 4M12 20l2.463-5.541m1.228-2.764L16 11l.8 1.8M18 18h-5.1M3 3l18 18" })
  ]))
}