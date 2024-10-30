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
    _createElementVNode("path", { d: "M9.974 21h8.052a.975.975 0 0 0 .81-1.517l-4.025-6.048a.973.973 0 0 0-1.622 0l-4.025 6.048A.977.977 0 0 0 9.974 21" }),
    _createElementVNode("path", { d: "M4.98 16h14.04c.542 0 .98-.443.98-.989a1 1 0 0 0-.156-.534l-7.02-11.023a.974.974 0 0 0-1.648 0l-7.02 11.023a1 1 0 0 0 .294 1.366.97.97 0 0 0 .53.157" })
  ]))
}