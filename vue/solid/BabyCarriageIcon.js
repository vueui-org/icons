const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    height: "16px",
    width: "16px"
  }, [
    _createElementVNode("path", { d: "M14.5 2a6.5 6.5 0 0 1 6.49 6.858 1.04 1.04 0 0 1-.04.456 6.51 6.51 0 0 1-3.757 5.103l.532 1.595Q17.86 16 18 16a3 3 0 1 1-3 3l.005-.176a3 3 0 0 1 .894-1.966l-.634-1.903Q14.888 15 14.5 15h-2.675q-.547 0-1.076-.083l-.648 1.941A3 3 0 1 1 5 19l.004-.176a3 3 0 0 1 3.27-2.812l.56-1.682a7 7 0 0 1-3.652-4.117L3.78 6H2a1 1 0 0 1-.993-.883L1 5a1 1 0 0 1 1-1h2.5a1 1 0 0 1 .949.684L6.553 8H13V3a1 1 0 0 1 1-1zM8 18a1 1 0 1 0 0 2 1 1 0 0 0 0-2m10 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2" })
  ]))
}