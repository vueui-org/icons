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
    _createElementVNode("path", { d: "M8 4h11a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-4m-3.713.299A1 1 0 0 0 11 12v7a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5c0-.284.118-.54.308-.722M4 8h2M4 12h3M4 16h2M12 4v3M16 4v2M3 3l18 18" })
  ]))
}