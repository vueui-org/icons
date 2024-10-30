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
    _createElementVNode("path", { d: "M7 6a1 1 0 0 0-1-1H4l-.5 2H6a1 1 0 0 0 1-1M6 12a1 1 0 0 0-1-1H3l-.5 2H5a1 1 0 0 0 1-1M13 12a1 1 0 0 0-1-1h-2l-.5 2H12a1 1 0 0 0 1-1M14 6a1 1 0 0 0-1-1h-2l-.5 2H13a1 1 0 0 0 1-1M12 18a1 1 0 0 0-1-1H9l-.5 2H11a1 1 0 0 0 1-1M20 15a1 1 0 0 0-1-1h-2l-.5 2H19a1 1 0 0 0 1-1M21 9a1 1 0 0 0-1-1h-2l-.5 2H20a1 1 0 0 0 1-1" })
  ]))
}