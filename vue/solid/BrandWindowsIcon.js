const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "M21 13v5c0 1.57-1.248 2.832-2.715 2.923l-.113.003-.042.018a1 1 0 0 1-.336.056l-.118-.008L13 20.407V13zm-10 0v7.157l-5.3-.662C4.186 19.344 3 18.112 3 16.6V13zm0-9.158V11H3V7.4c0-1.454 1.096-2.648 2.505-2.87zM21 5.9V11h-8V3.591l4.717-.589C19.476 2.857 21 4.191 21 5.9" })
  ]))
}