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
    _createElementVNode("path", { d: "M14 8a2 2 0 0 0-2-2" }),
    _createElementVNode("path", { d: "M7.762 3.753A6 6 0 0 1 18 8c0 1.847-.37 3.564-1.007 4.993m-1.59 2.42C14.436 16.413 13.263 17 12 17c-3.314 0-6-4.03-6-9 0-.593.086-1.166.246-1.707M12 17v1a2 2 0 0 1-2 2H7a2 2 0 0 0-2 2M3 3l18 18" })
  ]))
}