const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "M17 2a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3zm.01 16H17a1 1 0 0 0-.117 1.993l.127.007a1 1 0 0 0 0-2M12.5 8H10a1 1 0 1 0 0 2h2.5a.5.5 0 0 1 .09.992L12.5 11H11c-1.287 0-1.332 1.864-.133 1.993L11 13h1.5a.5.5 0 1 1 0 1H10a1 1 0 0 0 0 2h2.5a2.5 2.5 0 0 0 2.5-2.5l-.005-.164a2.5 2.5 0 0 0-.477-1.312L14.499 12l.019-.024A2.5 2.5 0 0 0 12.5 8M7.01 4H7a1 1 0 0 0-.117 1.993L7.01 6a1 1 0 1 0 0-2" })
  ]))
}