const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "2",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "M13 21c-1.427-1.026-3.59-3.854-4-6-.486.77-1.501 2-2 2-1.499-.888-.574-3.973 0-6-1.596-1.433-2.468-2.458-2.5-4C1.15 3.56 4.056 1.73 7 4h1c8.482.5 6.421 8.07 9 11.5 2.295.522 3.665 2.254 5 3.5-2.086-.2-2.784-.344-3.5 0 .478 1.64 2.123 2.2 3.5 3M9 7h.01" })
  ]))
}