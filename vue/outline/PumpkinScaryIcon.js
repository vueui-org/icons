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
    _createElementVNode("path", { d: "m9 15 1.5 1 1.5-1 1.5 1 1.5-1M10 11h.01M14 11h.01" }),
    _createElementVNode("path", { d: "M17 6.082c2.609.588 3.627 4.162 2.723 7.983s-2.75 6.44-5.359 5.853a3.4 3.4 0 0 1-.774-.279A3.7 3.7 0 0 1 12 20c-.556 0-1.09-.127-1.59-.362a3.3 3.3 0 0 1-.774.28c-2.609.588-4.456-2.033-5.36-5.853S4.391 6.67 7 6.082c1.085-.244 1.575.066 2.585.787C10.301 6.315 11.125 6 12 6c.876 0 1.699.315 2.415.87 1.01-.722 1.5-1.032 2.585-.788" }),
    _createElementVNode("path", { d: "M12 6c0-1.226.693-2.346 1.789-2.894L14 3" })
  ]))
}