const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "m12.665 2.174 7.4 2.612a2 2 0 0 1 1.316 2.156l-1.323 9.703a2 2 0 0 1-.99 1.468l-6.076 3.471a2 2 0 0 1-1.984 0l-6.076-3.47a2 2 0 0 1-.96-1.3l-.03-.167L2.62 6.943a2 2 0 0 1 1.316-2.156l7.4-2.613a2 2 0 0 1 1.33 0m.271 4.475c-.324-.865-1.548-.865-1.872 0l-3 8a1 1 0 0 0 .585 1.287l.111.035a1 1 0 0 0 1.176-.62L10.443 14h3.113l.508 1.352a1 1 0 0 0 1.176.62l.111-.035a1 1 0 0 0 .585-1.287zM12 9.848l.807 2.151h-1.614z" })
  ]))
}