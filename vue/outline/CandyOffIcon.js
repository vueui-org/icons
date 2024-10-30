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
    _createElementVNode("path", { d: "m11.174 7.17.119-.12a2 2 0 0 1 2.828 0l2.829 2.83a2 2 0 0 1 0 2.828l-.124.124m-2 2-2.123 2.123a2 2 0 0 1-2.828 0l-2.829-2.831a2 2 0 0 1 0-2.828l2.113-2.112M16.243 9.172l3.086-.772a1.5 1.5 0 0 0 .697-2.516L17.81 3.667a1.5 1.5 0 0 0-2.44.47L14.122 7.05" }),
    _createElementVNode("path", { d: "M9.172 16.243 8.4 19.329a1.5 1.5 0 0 1-2.516.697L3.667 17.81a1.5 1.5 0 0 1 .47-2.44l2.913-1.248M3 3l18 18" })
  ]))
}