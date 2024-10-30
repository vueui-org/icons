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
    _createElementVNode("path", { d: "m12.363 2.068 4.912 1.914a2.7 2.7 0 0 1 .68 4.646l-3.045 2.371L21 11a1 1 0 0 1 .932 1.363l-1.914 4.912a2.7 2.7 0 0 1-4.646.68L13 14.908V21a1 1 0 0 1-1.363.932l-4.912-1.914a2.7 2.7 0 0 1-.68-4.646L9.09 13H3a1 1 0 0 1-.932-1.363l1.914-4.912a2.7 2.7 0 0 1 4.646-.68l2.371 3.044L11 3a1 1 0 0 1 1.363-.932" })
  ]))
}