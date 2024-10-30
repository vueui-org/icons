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
    _createElementVNode("path", { d: "m7.707 3.707 5.586 5.586M12 12l-1.293 1.293a1 1 0 0 1-1.414 0L3.707 7.707a1 1 0 0 1 0-1.414L5 5M6 10l-3 3 3 3 3-3M10 6l3-3 3 3-3 3M12 12l1.5 1.5M14.5 17c.69 0 1.316-.28 1.769-.733M15 21c1.654 0 3.151-.67 4.237-1.752m1.507-2.507A6 6 0 0 0 21 15M3 3l18 18" })
  ]))
}