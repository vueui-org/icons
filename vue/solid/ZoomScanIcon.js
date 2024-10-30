const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    height: "16px",
    width: "16px"
  }, [
    _createElementVNode("path", { d: "M4 15a1 1 0 0 1 1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 1 0 2H6a3 3 0 0 1-3-3v-2a1 1 0 0 1 1-1M20 15a1 1 0 0 1 1 1v2a3 3 0 0 1-3 3h-2a1 1 0 0 1 0-2h2a1 1 0 0 0 1-1v-2a1 1 0 0 1 1-1M11 7a4 4 0 0 1 3.446 6.031l2.261 2.262a1 1 0 0 1-1.414 1.414l-2.262-2.26-.031.017A4 4 0 0 1 7 11l.005-.2A4 4 0 0 1 11 7M8 3a1 1 0 1 1 0 2H6a1 1 0 0 0-1 1v2a1 1 0 1 1-2 0V6a3 3 0 0 1 3-3zM18 3a3 3 0 0 1 3 3v2a1 1 0 0 1-2 0V6a1 1 0 0 0-1-1h-2a1 1 0 0 1 0-2z" })
  ]))
}