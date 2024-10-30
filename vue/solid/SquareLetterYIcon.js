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
    _createElementVNode("path", { d: "M19 2a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3zm-4.629 5.072a1 1 0 0 0-1.3.557L12 10.307l-1.072-2.678a1 1 0 0 0-1.856.742L11 13.194V16a1 1 0 0 0 .883.993L12 17a1 1 0 0 0 1-1v-2.809l1.928-4.82a1 1 0 0 0-.45-1.25z" })
  ]))
}