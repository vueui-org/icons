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
    _createElementVNode("path", { d: "M21.648 6.808q-3.702 6.421-7.408 12.836c-.397.777-1.366 1.301-2.24 1.356-.962.102-1.7-.402-2.154-1.254-1.563-2.684-3.106-5.374-4.66-8.064-.943-1.633-1.891-3.266-2.83-4.905a2.47 2.47 0 0 1-.06-2.45A2.49 2.49 0 0 1 4.381 3.02a2.39 2.39 0 0 1 2.287 1.281c.697 1.19 2.043 3.83 2.55 4.682A3.92 3.92 0 0 0 12.5 11c2.126.133 3.974-.95 4.21-3.058 0-.164.228-3.178.846-3.962.619-.784 1.64-1.155 2.606-.893a2.48 2.48 0 0 1 1.814 2.062 2.57 2.57 0 0 1-.343 1.674" })
  ]))
}