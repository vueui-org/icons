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
    _createElementVNode("path", { d: "M5 21c.475-4.27 2.3-7.64 6.331-9.683" }),
    _createElementVNode("path", { d: "M6.618 6.623C4.744 8.248 3.993 10.5 3.986 13c0 1 0 3 2 5H9c2.733 0 5.092-.635 6.92-2.087m1.899-2.099C19.043 11.942 19.806 9.38 20 6V4h-4.014c-2.863 0-5.118.405-6.861 1.118M3 3l18 18" })
  ]))
}