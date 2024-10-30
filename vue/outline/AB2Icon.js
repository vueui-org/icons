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
    _createElementVNode("path", { d: "M16 21h3c.81 0 1.48-.67 1.48-1.48l.02-.02c0-.82-.69-1.5-1.5-1.5h-3zM16 15h2.5c.84-.01 1.5.66 1.5 1.5s-.66 1.5-1.5 1.5H16zM4 9V5c0-1.036.895-2 2-2s2 .964 2 2v4M2.99 11.98a9 9 0 0 0 9 9m9-9a9 9 0 0 0-9-9M8 7H4" })
  ]))
}