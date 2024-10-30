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
    _createElementVNode("path", { d: "M18.963 14.938a6.54 6.54 0 0 0-.899-4.06l-4.89-7.26c-.42-.626-1.287-.804-1.936-.398a1.4 1.4 0 0 0-.41.397l-1.282 1.9M7.921 7.932l-1.986 2.946c-1.695 2.837-1.035 6.44 1.567 8.545s6.395 2.105 8.996 0a6.8 6.8 0 0 0 1.376-1.499M3 3l18 18" })
  ]))
}