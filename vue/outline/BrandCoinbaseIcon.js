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
    _createElementVNode("path", { d: "M12.95 22c-4.503 0-8.445-3.04-9.61-7.413s.737-8.988 4.638-11.25a9.906 9.906 0 0 1 12.008 1.598l-3.335 3.367a5.185 5.185 0 0 0-7.354.013 5.25 5.25 0 0 0 0 7.393 5.185 5.185 0 0 0 7.354.013L20 19.088A9.89 9.89 0 0 1 12.95 22" })
  ]))
}