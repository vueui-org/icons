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
    _createElementVNode("path", { d: "M19.993 9.108c.383.4.687.863.893 1.368a4.2 4.2 0 0 1 .006 3.166 4.4 4.4 0 0 1-.887 1.372 20 20 0 0 1-2.208 2 20.6 20.6 0 0 1-2.495 1.669 21.3 21.3 0 0 1-5.622 2.202 4.2 4.2 0 0 1-3.002-.404 4 4 0 0 1-1.163-.967 3.8 3.8 0 0 1-.695-1.312C3.621 14.3 3.798 9.89 4.954 5.972c.609-2.057 2.643-3.349 4.737-2.874 3.88.88 7.52 3.147 10.302 6.01" }),
    _createElementVNode("path", { d: "M14.044 13.034c.67-.505.67-1.489 0-2.01a15 15 0 0 0-1.498-1.044 16 16 0 0 0-1.62-.865c-.77-.35-1.63.139-1.753.973a15.4 15.4 0 0 0-.1 3.786 1.232 1.232 0 0 0 1.715 1.027 15 15 0 0 0 1.694-.827 14.5 14.5 0 0 0 1.562-1.035z" })
  ]))
}