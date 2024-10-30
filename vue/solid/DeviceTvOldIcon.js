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
    _createElementVNode("path", { d: "M8.707 2.293 12 5.585l3.293-3.292a1 1 0 0 1 1.32-.083l.094.083a1 1 0 0 1 0 1.414L14.414 6H19a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3h4.585L7.293 3.707a1 1 0 0 1 1.414-1.414M19 8h-2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1" }),
    _createElementVNode("path", { d: "M18 14a1 1 0 0 1 .993.883l.007.127a1 1 0 0 1-1.993.117L17 15a1 1 0 0 1 1-1M18 11a1 1 0 0 1 .993.883l.007.127a1 1 0 0 1-1.993.117L17 12a1 1 0 0 1 1-1" })
  ]))
}