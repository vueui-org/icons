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
    _createElementVNode("path", { d: "M6 3a1 1 0 0 1 .993.883L7 4v3.171a3.001 3.001 0 0 1 0 5.658V20a1 1 0 0 1-1.993.117L5 20v-7.17a3 3 0 0 1-1.995-2.654L3 10l.005-.176A3 3 0 0 1 5 7.17V4a1 1 0 0 1 1-1M12 3a1 1 0 0 1 .993.883L13 4v9.171a3.001 3.001 0 0 1 0 5.658V20a1 1 0 0 1-1.993.117L11 20v-1.17a3 3 0 0 1-1.995-2.654L9 16l.005-.176A3 3 0 0 1 11 13.17V4a1 1 0 0 1 1-1M18 3a1 1 0 0 1 .993.883L19 4v.171a3.001 3.001 0 0 1 0 5.658V20a1 1 0 0 1-1.993.117L17 20V9.83a3 3 0 0 1-1.995-2.654L15 7l.005-.176A3 3 0 0 1 17 4.17V4a1 1 0 0 1 1-1" })
  ]))
}