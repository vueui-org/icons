const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "M19 4a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3zM8.5 8H7a1 1 0 1 0 0 2h1.5a.5.5 0 0 1 .09.992L8.5 11H8c-1.287 0-1.332 1.864-.133 1.993L8 13h.5a.5.5 0 1 1 0 1H7a1 1 0 0 0 0 2h1.5a2.5 2.5 0 0 0 2.5-2.5l-.005-.164a2.5 2.5 0 0 0-.477-1.312L10.499 12l.019-.024A2.5 2.5 0 0 0 8.5 8M15 8h-1a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h1a3 3 0 0 0 3-3v-2a3 3 0 0 0-3-3m0 2a1 1 0 0 1 1 1v2a1 1 0 0 1-.883.993L15 14z" })
  ]))
}