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
    _createElementVNode("path", { d: "m12 13-2-2M12 12l2-2M12 21V8M9.824 16a3 3 0 0 1-2.743-3.69 3 3 0 0 1 .304-4.833A3 3 0 0 1 12 3.77a3 3 0 0 1 4.614 3.707 3 3 0 0 1 .305 4.833A3 3 0 0 1 14 16.005h-4z" })
  ]))
}