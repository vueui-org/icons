const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "M11.595 2.13a1 1 0 0 1 1.455-1.016c3.11 1.625 5.41 3.797 6.77 6.627l-.013-.024.01.019.115.232c2.751 5.7.088 12.587-5.913 13.76l-.267.049c-8.719 1.91-14.455-8.74-7.97-14.918.466-.46 1.28-1.196 1.636-1.45A1 1 0 0 1 9 6.222c0 .311.086 1.117.205 1.694q.046.215.093.383l.017.058.1-.02c1.562-.396 2.522-3.021 2.21-5.955z" })
  ]))
}