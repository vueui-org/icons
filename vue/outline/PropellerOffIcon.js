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
    _createElementVNode("path", { d: "M10.448 10.432a3 3 0 1 0 4.106 4.143M14.272 10.272q.989-2.189 1.198-4.286C15.69 4.356 14.708 3 12 3c-1.94 0-3 .696-3.355 1.69m.697 4.653q.218.576.491 1.157M13.169 16.751q1.456 2.092 3.257 3.386c1.02.789 2.265.853 3.408-.288m1.479-2.493c.492-1.634-.19-2.726-1.416-3.229a12.8 12.8 0 0 0-2.65-.852" }),
    _createElementVNode("path", { d: "M8.664 13q-2.54.215-4.56 1.128c-1.522.623-2.206 2.153-.852 4.498s3.02 2.517 4.321 1.512q1.8-1.294 3.258-3.386M3 3l18 18" })
  ]))
}