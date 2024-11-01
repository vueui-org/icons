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
    _createElementVNode("path", { d: "M2 16.667A2.667 2.667 0 0 1 4.667 14h2.666A2.667 2.667 0 0 1 10 16.667v2.666A2.667 2.667 0 0 1 7.333 22H4.667A2.667 2.667 0 0 1 2 19.333zM14 16.667A2.667 2.667 0 0 1 16.667 14h2.666A2.667 2.667 0 0 1 22 16.667v2.666A2.667 2.667 0 0 1 19.333 22h-2.666A2.667 2.667 0 0 1 14 19.333zM8 4.667A2.667 2.667 0 0 1 10.667 2h2.666A2.667 2.667 0 0 1 16 4.667v2.666A2.667 2.667 0 0 1 13.333 10h-2.666A2.667 2.667 0 0 1 8 7.333z" }),
    _createElementVNode("path", { d: "M12 8a1 1 0 0 0-1 1v2H8c-1.645 0-3 1.355-3 3v1a1 1 0 0 0 1 1 1 1 0 0 0 1-1v-1c0-.564.436-1 1-1h8c.564 0 1 .436 1 1v1a1 1 0 0 0 1 1 1 1 0 0 0 1-1v-1c0-1.645-1.355-3-3-3h-3V9a1 1 0 0 0-1-1" })
  ]))
}