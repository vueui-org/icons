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
    _createElementVNode("path", { d: "M20.985 12.52a9 9 0 1 0-7.52 8.36M3.6 9h16.8M3.6 15h10.9" }),
    _createElementVNode("path", { d: "M11.5 3a17 17 0 0 0 0 18M12.5 3c2.313 3.706 3.07 7.856 2.27 12M19 16l-2 3h4l-2 3" })
  ]))
}