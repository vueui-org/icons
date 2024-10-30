const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "2",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "M14 12a2 2 0 1 0-4 0 2 2 0 0 0 4 0" }),
    _createElementVNode("path", { d: "M12 21c-3.314 0-6-2.462-6-5.5S8.686 10 12 10" }),
    _createElementVNode("path", { d: "M21 12c0 3.314-2.462 6-5.5 6S10 15.314 10 12" }),
    _createElementVNode("path", { d: "M12 14c3.314 0 6-2.462 6-5.5S15.314 3 12 3" }),
    _createElementVNode("path", { d: "M14 12c0-3.314-2.462-6-5.5-6S3 8.686 3 12" })
  ]))
}