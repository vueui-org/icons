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
    _createElementVNode("path", { d: "M4 12a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zM7 10V8.138C7 5.3 9.239 3 12 3s5 2.3 5 5.138V10" }),
    _createElementVNode("path", { d: "M10.485 17.577c.337.29.7.423 1.515.423h.413c.323 0 .633-.133.862-.368a1.27 1.27 0 0 0 .356-.886c0-.332-.128-.65-.356-.886a1.2 1.2 0 0 0-.862-.368h-.826a1.2 1.2 0 0 1-.861-.367 1.27 1.27 0 0 1-.356-.886c0-.332.128-.651.356-.886a1.2 1.2 0 0 1 .861-.368H12c.816 0 1.178.133 1.515.423" })
  ]))
}