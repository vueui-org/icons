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
    _createElementVNode("path", { d: "M13.5 3c5.187 0 9.5 3.044 9.5 7 0 3.017-2.508 5.503-6 6.514V20a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1v-4.046a21 21 0 0 1-2.66-1.411l-.13-.082-1.57 1.308a1 1 0 0 1-1.634-.656L3 15v-2.851l-.31-.25a47 47 0 0 1-.682-.568l-.67-.582a1 1 0 0 1 0-1.498A47 47 0 0 1 2.689 8.1L3 7.85V5a1 1 0 0 1 1.55-.836l.09.068 1.57 1.307.128-.08c2.504-1.553 4.784-2.378 6.853-2.453zm-2.499 13.657L11 19h4l.001-2.086Q14.266 17 13.5 17a9.6 9.6 0 0 1-2.13-.252z" })
  ]))
}