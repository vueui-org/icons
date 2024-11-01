const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    height: "16px",
    width: "16px"
  }, [
    _createElementVNode("path", { d: "M18 16a3 3 0 0 1 0 6h-1a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1zm0 4 .117-.007A1 1 0 0 0 18 18zm.5-13a2.5 2.5 0 1 1 0 5H18v1a1 1 0 0 1-.883.993L17 14a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1zm-.5 3h.5a.5.5 0 1 0 0-1H18zm-5 0a1 1 0 0 1 0 2h-3v6h3a1 1 0 0 1 0 2h-3a2 2 0 0 1-2-2v-6H6a2 2 0 0 1-1.995-1.85L4 10V7.83A3 3 0 0 1 2 5l.005-.176a3 3 0 1 1 3.996 3.005L6 10z" })
  ]))
}