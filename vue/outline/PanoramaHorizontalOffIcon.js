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
    _createElementVNode("path", { d: "M10.95 6.952q4.352.225 8.705-1.42A1 1 0 0 1 21 6.466V17m-3.212.806q-6.724-1.922-13.449.622A.993.993 0 0 1 3 17.493V6.466a1 1 0 0 1 1.338-.935q.882.332 1.764.59M3 3l18 18" })
  ]))
}