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
    _createElementVNode("path", { d: "M3.9 7.205a17.8 17.8 0 0 0 4.008 2.753 7.9 7.9 0 0 0 4.57.567c1.5-.33 2.907-1 4.121-1.956a12.1 12.1 0 0 0 2.892-2.903c.603-.94.745-1.766.484-2.231s-.927-.568-1.72-.257a7.6 7.6 0 0 0-2.608 2.034 18.4 18.4 0 0 0-2.588 3.884 35 35 0 0 0-2.093 5.073 13 13 0 0 0-.677 3.515c-.07.752.07 1.51.405 2.184.323.562 1.06 1.132 2.343 1.132 3.474 0 5.093-3.53 5.463-5.62.24-1.365-.085-3.197-1.182-4.01" })
  ]))
}