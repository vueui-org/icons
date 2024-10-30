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
    _createElementVNode("path", { d: "M14.685 10.661c-.3-.6-.795-1.086-1.402-1.374m-3.397.584a3 3 0 1 0 4.24 4.245" }),
    _createElementVNode("path", { d: "M6.357 6.33a8 8 0 1 0 11.301 11.326m1.642-2.378A8 8 0 0 0 8.703 4.709M12 2v2M12 20v2M20 12h2M2 12h2M3 3l18 18" })
  ]))
}