const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "M10.425 1.414 3.65 5.41A3.21 3.21 0 0 0 2 8.217v7.285a3.23 3.23 0 0 0 1.678 2.826l6.695 4.237c1.034.57 2.22.57 3.2.032l6.804-4.302c.98-.537 1.623-1.618 1.623-2.793V8.218l-.005-.204a3.22 3.22 0 0 0-1.284-2.39l-.107-.075-.007-.007a1 1 0 0 0-.181-.133L13.64 1.414a3.33 3.33 0 0 0-3.216 0z" })
  ]))
}