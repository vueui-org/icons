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
    _createElementVNode("path", { d: "M15.695 14.305c1.061 1.06 2.953.888 4.226-.384 1.272-1.273 1.444-3.165.384-4.226s-2.953-.888-4.226.384c-1.272 1.273-1.444 3.165-.384 4.226M12.68 9.233c-1.084-.497-2.545-.191-3.591.846-1.284 1.273-1.457 3.165-.388 4.226 1.07 1.06 2.978.888 4.261-.384A3.67 3.67 0 0 0 14 12h-2.427M5.5 15H4M6 9H4M5 12H2" })
  ]))
}