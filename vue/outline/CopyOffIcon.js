const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    height: "16px",
    width: "16px"
  }, [
    _createElementVNode("path", { d: "M19.414 19.415A2 2 0 0 1 18 20h-8a2 2 0 0 1-2-2v-8c0-.554.225-1.055.589-1.417M12 8h6a2 2 0 0 1 2 2v6M16 8V6a2 2 0 0 0-2-2H8m-3.418.59C4.222 4.95 4 5.45 4 6v8a2 2 0 0 0 2 2h2M3 3l18 18" })
  ]))
}