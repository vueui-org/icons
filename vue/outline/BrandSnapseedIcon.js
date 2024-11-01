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
    _createElementVNode("path", { d: "M8.152 3.115a.46.46 0 0 0-.609 0C4.6 5.695 3.014 8.556 3 11.493c0 2.928 1.586 5.803 4.543 8.392a.46.46 0 0 0 .61 0c2.957-2.589 4.547-5.464 4.547-8.392s-1.6-5.799-4.548-8.378" }),
    _createElementVNode("path", { d: "m8 20 12.09-.011c.503 0 .91-.434.91-.969v-6.063c0-.535-.407-.968-.91-.968h-7.382" })
  ]))
}