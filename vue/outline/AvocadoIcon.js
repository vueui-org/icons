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
    _createElementVNode("path", { d: "M17.8 14.04a3.9 3.9 0 0 1 1.337-2.075Q20.929 10.488 21 8.063q-.071-2.145-1.477-3.586Q18.083 3.07 15.938 3q-2.426.07-3.903 1.863-.843 1.02-2.074 1.336-1.406.281-2.672.88-1.266.597-2.144 1.44Q3 10.771 3 13.688q0 2.919 2.145 5.168Q7.395 21 10.313 21q2.917 0 5.167-2.145.844-.878 1.477-2.144.597-1.266.844-2.637v-.035z" }),
    _createElementVNode("path", { d: "M10.87 10.036q-1.413.168-2.556 1.278-1.11 1.143-1.278 2.556-.202 1.38.74 2.354.975.942 2.354.74 1.413-.168 2.556-1.278 1.11-1.143 1.278-2.556.202-1.38-.74-2.354-.975-.942-2.354-.74" })
  ]))
}