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
    _createElementVNode("path", { d: "M14 14a3 2 0 1 0 6 0 3 2 0 1 0-6 0" }),
    _createElementVNode("path", { d: "M4.526 17.666q-1.7-1.158-2.291-3.456-.596-2.31.32-4.19.915-1.883 2.938-3.254 2.021-1.371 4.749-2.132 2.715-.756 5.12-.61 2.412.15 4.112 1.31c1.7 1.16 1.897 1.924 2.291 3.456q.596 2.311-.32 4.192-.916 1.88-2.938 3.252-2.021 1.372-4.749 2.133-2.715.755-5.12.61-2.412-.153-4.112-1.31z" }),
    _createElementVNode("path", { d: "M11 12.508C10.47 12.192 9.77 12 9 12c-1.657 0-3 .895-3 2s1.343 2 3 2c.767 0 1.467-.192 2-.508" })
  ]))
}