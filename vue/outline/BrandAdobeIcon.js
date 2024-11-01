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
    _createElementVNode("path", { d: "m12.893 4.514 7.977 14a.993.993 0 0 1-.394 1.365 1.04 1.04 0 0 1-.5.127H16.5l-4.5-8-2.5 4H11l2 4H4.023c-.565 0-1.023-.45-1.023-1 0-.171.045-.34.13-.49l7.977-13.993a1.034 1.034 0 0 1 1.786 0z" })
  ]))
}