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
    _createElementVNode("path", { d: "M19.823 19.824A2 2 0 0 1 18 21H6a2 2 0 0 1-2-2V5c0-.295.064-.575.178-.827M7 3h11a2 2 0 0 1 2 2v11" }),
    _createElementVNode("path", { d: "M10 10H9a1 1 0 0 1-1-1V8m3-1h4a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-1M8 14v.01M12 14v.01M8 17v.01M12 17v.01M16 17v.01M3 3l18 18" })
  ]))
}