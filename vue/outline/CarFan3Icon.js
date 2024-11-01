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
    _createElementVNode("path", { d: "M12 12V3l4.912 1.914a1.7 1.7 0 0 1 .428 2.925zM14.044 14.624 12 12h4M12 12H3l1.914-4.912a1.7 1.7 0 0 1 2.925-.428zM12 12v9l-4.912-1.914a1.7 1.7 0 0 1-.428-2.925zM18 15.5a.5.5 0 0 1 .5-.5h1a1.5 1.5 0 0 1 0 3H19h.5a1.5 1.5 0 0 1 0 3h-1a.5.5 0 0 1-.5-.5" })
  ]))
}