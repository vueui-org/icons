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
    _createElementVNode("path", { d: "M3 17a1 1 0 1 0 2 0 1 1 0 1 0-2 0M3 7a1 1 0 1 0 2 0 1 1 0 1 0-2 0M19 17a1 1 0 1 0 2 0 1 1 0 1 0-2 0M19 7a1 1 0 1 0 2 0 1 1 0 1 0-2 0M11 3a1 1 0 1 0 2 0 1 1 0 1 0-2 0M11 21a1 1 0 1 0 2 0 1 1 0 1 0-2 0" }),
    _createElementVNode("path", { d: "m12 21-8-4V7l8-4 8 4v10z" }),
    _createElementVNode("path", { d: "M9.1 15a2.1 2.1 0 0 1-.648-4.098C8.734 9.254 9.771 8 11.5 8c1.694 0 2.906 1.203 3.23 2.8h.17a2.1 2.1 0 0 1 .202 4.19L14.9 15zM4 7l4.323 2.702M16.413 14.758 20 17M4 17l3.529-2.206M14.609 10.37 20 7M12 3v5M12 15v6" })
  ]))
}