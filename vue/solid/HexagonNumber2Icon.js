const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "M10.425 1.414a3.33 3.33 0 0 1 3.216 0l6.775 3.995q.1.06.18.133l.008.007.107.076a3.22 3.22 0 0 1 1.284 2.39l.005.203v7.284c0 1.175-.643 2.256-1.623 2.793l-6.804 4.302c-.98.538-2.166.538-3.2-.032l-6.695-4.237A3.23 3.23 0 0 1 2 15.502V8.217a3.21 3.21 0 0 1 1.65-2.808zM13 7h-3l-.117.007a1 1 0 0 0 0 1.986L10 9h3v2h-2l-.15.005a2 2 0 0 0-1.844 1.838L9 13v2l.005.15a2 2 0 0 0 1.838 1.844L11 17h3l.117-.007a1 1 0 0 0 0-1.986L14 15h-3v-2h2l.15-.005a2 2 0 0 0 1.844-1.838L15 11V9l-.005-.15a2 2 0 0 0-1.838-1.844z" })
  ]))
}