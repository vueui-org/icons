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
    _createElementVNode("path", { d: "M4 11.319c0 3.102.444 5.319 2.222 7.978 1.351 1.797 3.156 2.247 5.08.988.426-.268.97-.268 1.397 0 1.923 1.26 3.728.809 5.079-.988C19.556 16.637 20 14.421 20 11.32 20 8.659 18.01 6 15.556 6c-1.267 0-2.41.693-3.22 1.44a.5.5 0 0 1-.672 0C10.855 6.694 9.711 6 8.444 6 5.99 6 4 8.66 4 11.319" }),
    _createElementVNode("path", { d: "M7 12c0-1.47.454-2.34 1.5-3M12 7c0-1.2.867-4 3-4" })
  ]))
}