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
    _createElementVNode("path", { d: "M11 20a1 1 0 1 0 2 0 1 1 0 1 0-2 0M3 11l5.5 5.5a5 5 0 0 1 7 0L21 11a12 12 0 0 0-18 0M12 20V6M4 6a4 4 0 0 1 .4-1.8M7 2.1a4 4 0 0 1 2 0" }),
    _createElementVNode("path", { d: "M12 6a4 4 0 0 0-.4-1.8" }),
    _createElementVNode("path", { d: "M12 6a4 4 0 0 1 .4-1.8M15 2.1a4 4 0 0 1 2 0M20 6a4 4 0 0 0-.4-1.8" })
  ]))
}