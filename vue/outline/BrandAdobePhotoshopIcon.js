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
    _createElementVNode("path", { d: "M3 12c0-4.243 0-6.364 1.318-7.682S7.758 3 12 3s6.364 0 7.682 1.318S21 7.758 21 12s0 6.364-1.318 7.682S16.242 21 12 21s-6.364 0-7.682-1.318S3 16.242 3 12" }),
    _createElementVNode("path", { d: "M6.79 15.79V12m0 0V9.276c0-.11 0-.165.004-.211.044-.45.4-.806.85-.85.046-.004.101-.004.211-.004h1.303a1.895 1.895 0 1 1 0 3.789zM17.178 11.263c-.164-.659-.935-1.158-1.862-1.158-1.047 0-1.895.637-1.895 1.421 0 .785.848 1.421 1.895 1.421 1.046 0 1.895.637 1.895 1.421 0 .785-.849 1.421-1.895 1.421-.93 0-1.704-.502-1.864-1.165" })
  ]))
}