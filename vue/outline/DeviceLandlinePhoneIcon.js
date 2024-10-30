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
    _createElementVNode("path", { d: "M20 3h-2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2M16 4H5a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h11" }),
    _createElementVNode("path", { d: "M12 8H6v3h6zM12 14v.01M9 14v.01M6 14v.01M12 17v.01M9 17v.01M6 17v.01" })
  ]))
}