const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "M12 2.005c-.777 0-1.508.367-1.971.99L4.667 9.89c-.89 1.136-.89 3.083 0 4.227l5.375 6.911a2.457 2.457 0 0 0 3.93-.017l5.361-6.894c.89-1.136.89-3.083 0-4.227l-5.375-6.911A2.45 2.45 0 0 0 12 2.005" })
  ]))
}