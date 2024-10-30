const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "M18.497 4.409a10 10 0 0 1-10.36 16.828l-.223-.098-4.759.849-.11.011a1 1 0 0 1-.11 0l-.102-.013-.108-.024-.105-.037-.099-.047-.093-.058-.014-.011-.012-.007-.086-.073-.077-.08-.067-.088-.056-.094-.034-.07-.04-.108-.028-.128-.012-.102a1 1 0 0 1 0-.125l.012-.1.024-.11.045-.122 1.433-3.304-.009-.014A10 10 0 0 1 5.056 4.83l.215-.203a10 10 0 0 1 13.226-.217M9.5 7.5A1.5 1.5 0 0 0 8 9v1a6 6 0 0 0 6 6h1a1.5 1.5 0 0 0 0-3h-1l-.144.007a1.5 1.5 0 0 0-1.128.697l-.042.074-.022-.007a4.01 4.01 0 0 1-2.435-2.435l-.008-.023.075-.041A1.5 1.5 0 0 0 11 10V9a1.5 1.5 0 0 0-1.5-1.5" })
  ]))
}