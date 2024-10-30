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
    _createElementVNode("path", { d: "M17 2a4 4 0 0 1 4 4v7a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1v-1h-2v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a4 4 0 0 1 8 0v1h2V6a4 4 0 0 1 4-4m-4 8V9h-2v1zm-4 5a1 1 0 0 1 1 1c0 2.623-.787 4.59-2.4 5.8a1 1 0 0 1-1.2 0C4.787 20.59 4 18.623 4 16a1 1 0 0 1 2 0c0 1.532.308 2.684.906 3.498l.094.119.094-.12c.558-.759.864-1.813.902-3.196L8 16a1 1 0 0 1 1-1m10 0a1 1 0 0 1 1 1c0 2.623-.787 4.59-2.4 5.8a1 1 0 0 1-1.2 0C14.787 20.59 14 18.623 14 16a1 1 0 0 1 2 0c0 1.532.308 2.684.906 3.498l.094.119.094-.12c.558-.759.864-1.813.902-3.196L18 16a1 1 0 0 1 1-1" })
  ]))
}