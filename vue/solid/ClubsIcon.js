const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "M12 2a5 5 0 0 0-4.488 2.797l-.103.225a5 5 0 0 0-.334 2.837l.027.14a5 5 0 0 0-3.091 9.009l.198.14a5 5 0 0 0 4.42.58l.174-.066-.773 3.095A1 1 0 0 0 9 22h6l.113-.006a1 1 0 0 0 .857-1.237l-.774-3.095.174.065A5 5 0 1 0 16.897 8l.028-.14A4.997 4.997 0 0 0 12 2" })
  ]))
}