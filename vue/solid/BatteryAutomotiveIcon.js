const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "M18 2a1 1 0 0 1 1 1v1a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3V3a1 1 0 1 1 2 0v1h10V3a1 1 0 0 1 1-1m-2 7.5a1 1 0 0 0-1 1v.5h-.5a1 1 0 0 0 0 2h.5v.5a1 1 0 0 0 2 0V13h.5a1 1 0 0 0 0-2H17v-.5a1 1 0 0 0-1-1M9.5 11h-3a1 1 0 0 0 0 2h3a1 1 0 0 0 0-2" })
  ]))
}