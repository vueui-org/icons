const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "M19 3a3 3 0 0 1 1 5.829V10a3 3 0 0 1-3 3h-4v2.171A3.001 3.001 0 1 1 9 18l.005-.176A3 3 0 0 1 11 15.17V13H6v2.171A3.001 3.001 0 1 1 2 18l.005-.176A3 3 0 0 1 4 15.17V8.829A3 3 0 0 1 2 6l.005-.176a3 3 0 1 1 3.996 3.005L6 11h5V8.83A3 3 0 0 1 9 6l.005-.176a3 3 0 1 1 3.996 3.005L13 11h4a1 1 0 0 0 1-1V8.83A3 3 0 0 1 16 6l.005-.176A3 3 0 0 1 19 3" })
  ]))
}