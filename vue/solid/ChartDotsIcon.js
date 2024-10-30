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
    _createElementVNode("path", { d: "M3 2a1 1 0 0 1 1 1v17h17a1 1 0 0 1 .993.883L22 21a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1" }),
    _createElementVNode("path", { d: "M19 4a3 3 0 1 1-.651 5.93l-2.002 3.202a3 3 0 1 1-4.927.337l-1.378-1.655a3 3 0 1 1 1.538-1.282l1.378 1.654a3 3 0 0 1 1.693-.115l2.002-3.203A3 3 0 0 1 19 4" })
  ]))
}