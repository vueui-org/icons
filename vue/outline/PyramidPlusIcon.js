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
    _createElementVNode("path", { d: "M18.719 11.985 12.83 2.446a1 1 0 0 0-1.664 0l-8.54 13.836a1.005 1.005 0 0 0 .386 1.452l8.092 4.054a2 2 0 0 0 1.789 0l.149-.074M12 2v20M16 19h6M19 16v6" })
  ]))
}