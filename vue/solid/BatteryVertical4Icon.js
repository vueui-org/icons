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
    _createElementVNode("path", { d: "M13.5 3a1.5 1.5 0 0 1 1.395.948l.018.052H15a3 3 0 0 1 2.995 2.824L18 7v11a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h.086l.019-.052a1.5 1.5 0 0 1 1.25-.941L10.5 3zm.5 13h-4a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2m0-3h-4a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2m0-3h-4a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2m0-3h-4a1 1 0 1 0 0 2h4a1 1 0 0 0 0-2" })
  ]))
}