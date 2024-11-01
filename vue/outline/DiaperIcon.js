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
    _createElementVNode("path", { d: "M3 8.323c0-.579 0-.868.044-1.11a2.7 2.7 0 0 1 2.17-2.169C5.453 5 5.743 5 6.323 5h11.353c.579 0 .868 0 1.11.044a2.7 2.7 0 0 1 2.169 2.17c.044.24.044.53.044 1.11V11a9 9 0 0 1-18 0zM17 9h4M3 9h4" }),
    _createElementVNode("path", { d: "M14.25 19.7v-1.4a6.3 6.3 0 0 1 6.3-6.3M9.75 19.7v-1.4a6.3 6.3 0 0 0-6.3-6.3" })
  ]))
}