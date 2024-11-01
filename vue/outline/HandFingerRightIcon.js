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
    _createElementVNode("path", { d: "M12 8h8.5a1.5 1.5 0 0 1 0 3H13M13.5 11h2a1.5 1.5 0 0 1 0 3H13M14.5 14a1.5 1.5 0 0 1 0 3H13" }),
    _createElementVNode("path", { d: "M13.5 17a1.5 1.5 0 1 1 0 3H9a6 6 0 0 1-6-6v-2 .208a6 6 0 0 1 2.7-5.012L6 7q.718-.468 5.728-3.286a1.5 1.5 0 0 1 2.022.536c.44.734.325 1.674-.28 2.28L12 8" })
  ]))
}