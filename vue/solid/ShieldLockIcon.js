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
    _createElementVNode("path", { d: "m11.998 2 .118.007.059.008.061.013.111.034a1 1 0 0 1 .217.112l.104.082.255.218a11 11 0 0 0 7.189 2.537l.342-.01a1 1 0 0 1 1.005.717 13 13 0 0 1-9.208 16.25 1 1 0 0 1-.502 0A13 13 0 0 1 2.54 5.718a1 1 0 0 1 1.005-.717 11 11 0 0 0 7.531-2.527l.263-.225.096-.075a1 1 0 0 1 .217-.112l.112-.034a1 1 0 0 1 .119-.021zM12 9a2 2 0 0 0-1.995 1.85L10 11l.005.15A2 2 0 0 0 11 12.731V14.5l.007.117A1 1 0 0 0 13 14.5l.001-1.768A2 2 0 0 0 12 9" })
  ]))
}