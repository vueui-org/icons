const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "M12 2c3.292 0 6 2.435 6 5.5 0 1.337-.515 2.554-1.369 3.5H21a1 1 0 0 1 1 1c0 3.292-2.435 6-5.5 6-1.336 0-2.553-.515-3.5-1.368V21a1 1 0 0 1-1 1c-3.292 0-6-2.435-6-5.5 0-1.336.515-2.553 1.368-3.5H3a1 1 0 0 1-1-1c0-3.292 2.435-6 5.5-6 1.337 0 2.554.515 3.5 1.369V3a1 1 0 0 1 1-1" })
  ]))
}