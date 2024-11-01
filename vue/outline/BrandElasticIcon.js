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
    _createElementVNode("path", { d: "M14 2a5 5 0 0 1 5 5c0 .712-.232 1.387-.5 2 1.894.042 3.5 1.595 3.5 3.5 0 1.869-1.656 3.4-3.5 3.5q.5.938.5 1.5a2.5 2.5 0 0 1-2.5 2.5c-.787 0-1.542-.432-2-1-.786 1.73-2.476 3-4.5 3a5 5 0 0 1-4.583-7 3.5 3.5 0 0 1-.11-6.992h.195a2.5 2.5 0 0 1 2-4c.787 0 1.542.432 2 1 .786-1.73 2.476-3 4.5-3zM8.5 9l-3-1" }),
    _createElementVNode("path", { d: "m9.5 5-1 4 1 2 5 2 4-4M18.499 16l-3-.5-1-2.5M14.5 19l1-3.5M5.417 15 9.5 11" })
  ]))
}