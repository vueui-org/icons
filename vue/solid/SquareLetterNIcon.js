const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "M19 2a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3zm-8.106 5.553C10.423 6.609 9 6.945 9 8v8a1 1 0 0 0 1 1l.117-.007A1 1 0 0 0 11 16v-3.764l2.106 4.211c.471.944 1.894.608 1.894-.447V8a1 1 0 0 0-1-1l-.117.007A1 1 0 0 0 13 8v3.764z" })
  ]))
}