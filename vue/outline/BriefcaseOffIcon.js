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
    _createElementVNode("path", { d: "M11 7h8a2 2 0 0 1 2 2v8m-1.166 2.818A2 2 0 0 1 19 20H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h2M8.185 4.158A2 2 0 0 1 10 3h4a2 2 0 0 1 2 2v2M12 12v.01" }),
    _createElementVNode("path", { d: "M3 13a20 20 0 0 0 11.905 1.928m3.263-.763A20 20 0 0 0 21 13M3 3l18 18" })
  ]))
}