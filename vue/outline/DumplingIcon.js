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
    _createElementVNode("path", { d: "M5.532 5.532a2.53 2.53 0 0 1 2.56-.623 2.532 2.532 0 0 1 4.604-.717q.146-.24.356-.45a2.532 2.532 0 0 1 4.318 1.637 2.53 2.53 0 0 1 2.844.511l.358.358c1.384 1.385-.7 5.713-4.655 9.669-3.956 3.955-8.284 6.04-9.669 4.655l-.358-.358-.114-.122a2.53 2.53 0 0 1-.398-2.724 2.532 2.532 0 0 1-1.186-4.675A2.532 2.532 0 0 1 4.91 8.09a2.53 2.53 0 0 1 .622-2.558" })
  ]))
}