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
    _createElementVNode("path", { d: "M18.364 19.364A9 9 0 0 0 8.643 4.647M6.155 6.156a9 9 0 0 0-.519 13.208" }),
    _createElementVNode("path", { d: "M15.536 16.536A5 5 0 0 0 12 8M9 9a5 5 0 0 0-.535 7.536M12 12a1 1 0 1 0 1 1M3 3l18 18" })
  ]))
}