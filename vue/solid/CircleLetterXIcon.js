const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2m2.447 5.106a1 1 0 0 0-1.341.447L12 9.763l-1.106-2.21a1 1 0 0 0-1.234-.494l-.107.047a1 1 0 0 0-.447 1.341L10.88 12l-1.775 3.553a1 1 0 0 0 .345 1.283l.102.058a1 1 0 0 0 1.341-.447L12 14.236l1.106 2.211a1 1 0 0 0 1.234.494l.107-.047a1 1 0 0 0 .447-1.341L13.118 12l1.776-3.553a1 1 0 0 0-.345-1.283z" })
  ]))
}