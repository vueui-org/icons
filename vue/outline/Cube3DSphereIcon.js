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
    _createElementVNode("path", { d: "m6 17.6-2-1.1V14M4 10V7.5l2-1.1M10 4.1 12 3l2 1.1M18 6.4l2 1.1V10M20 14v2.5l-2 1.12M14 19.9 12 21l-2-1.1M12 12l2-1.1M18 8.6l2-1.1M12 12v2.5M12 18.5V21M12 12l-2-1.12M6 8.6 4 7.5" })
  ]))
}