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
    _createElementVNode("path", { d: "M3.6 15h10.55M5.641 5.631A9 9 0 1 0 18.36 18.369m1.68-2.318A9 9 0 0 0 7.966 3.953M7.395 7.534l2.416 7.438M17.032 4.636 12.18 8.162M9.846 9.857l-1.349.98M20.559 14.51l-8.535-6.201M12.257 20.916l2.123-6.533m.984-3.028.154-.473M3 3l18 18" })
  ]))
}