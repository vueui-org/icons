const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "M17 3.34a10 10 0 0 1-8.512 18.023l2.364-5.315A3.5 3.5 0 0 0 13.25 17c2.708 0 4.75-2.089 4.75-5a6 6 0 1 0-11.64 2.041 1 1 0 1 0 1.88-.682 4 4 0 1 1 7.76-1.36C16 13.817 14.844 15 13.25 15c-.609 0-1.153-.361-1.478-1.022l1.142-2.572a1 1 0 0 0-1.828-.812l-4.392 9.882A10 10 0 0 1 2 12l.005-.324A10 10 0 0 1 17 3.34" })
  ]))
}