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
    _createElementVNode("path", { d: "M6.583 6.608c-1.206 1.058-2.07 2.626-2.933 5.449q-.63 2.055-.648 4.775c-.012 1.675 1.261 3.054 2.877 3.161l.203.007C7.693 20 9 18.665 9 17.02V9M15 11V7.257C15 6.563 15.552 6 16.233 6c.204 0 .405.052.584.15l.13.083c1.46 1.059 2.432 2.647 3.405 5.824q.63 2.055.648 4.775v.187m-1.455 2.51c-.417.265-.9.43-1.419.464l-.202.007c-1.613 0-2.92-1.335-2.92-2.98V15M9 12a3 3 0 0 0 2.132-.89M12 4v4M3 3l18 18" })
  ]))
}