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
    _createElementVNode("path", { d: "M4 10a2 2 0 1 0 4 0 2 2 0 0 0-4 0M6 4v4M6 12v8M13.577 14.77a2 2 0 1 0 .117 2.295M12 4v10M19 22v.01M19 19a2.003 2.003 0 0 0 .914-3.782 1.98 1.98 0 0 0-2.414.483M12 18v2M16 7a2 2 0 1 0 4 0 2 2 0 0 0-4 0M18 4v1M18 9v2" })
  ]))
}