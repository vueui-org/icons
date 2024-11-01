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
    _createElementVNode("path", { d: "M7.462 7.493a7 7 0 0 0 9.06 9.039m2.416-1.57a7 7 0 1 0-9.884-9.915" }),
    _createElementVNode("path", { d: "M21 10a3.5 3.5 0 0 0-7 0M12.71 12.715A3.5 3.5 0 0 1 7 10M14 17c.838 0 1.607-.294 2.209-.785M17.5 13.5A3.5 3.5 0 0 0 14 10M14 3a3.5 3.5 0 0 0-3.5 3.5M3 21l6-6M3 3l18 18" })
  ]))
}