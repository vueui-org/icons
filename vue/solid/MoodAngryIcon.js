const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10a10 10 0 1 1 0-20m0 12a4.5 4.5 0 0 0-3.214 1.35 1 1 0 1 0 1.428 1.4 2.5 2.5 0 0 1 3.572 0 1 1 0 0 0 1.428-1.4A4.5 4.5 0 0 0 12 14M8.447 8.105a1 1 0 0 0-.894 1.788l2 1a1 1 0 0 0 .894-1.788zm8.447.447a1 1 0 0 0-1.341-.447l-2 1a1 1 0 0 0 .894 1.788l2-1a1 1 0 0 0 .447-1.341" })
  ]))
}