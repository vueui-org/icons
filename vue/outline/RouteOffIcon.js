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
    _createElementVNode("path", { d: "M4 19a2 2 0 1 0 4 0 2 2 0 1 0-4 0M16 5a2 2 0 1 0 4 0 2 2 0 1 0-4 0M12 19h4.5c.71 0 1.372-.212 1.924-.576m1.545-2.459A3.5 3.5 0 0 0 16.5 12h-.499m-4 0H8.5a3.5 3.5 0 0 1-2.477-5.972M8.5 5H12M3 3l18 18" })
  ]))
}