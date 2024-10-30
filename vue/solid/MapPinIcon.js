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
    _createElementVNode("path", { d: "M18.364 4.636a9 9 0 0 1 .203 12.519l-.203.21-4.243 4.242a3 3 0 0 1-4.097.135l-.144-.135-4.244-4.243A9 9 0 0 1 18.364 4.636M12 8a3 3 0 1 0 0 6 3 3 0 0 0 0-6" })
  ]))
}