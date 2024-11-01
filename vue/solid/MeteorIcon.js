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
    _createElementVNode("path", { d: "M21.874 3.486 17.7 11H21c.846 0 1.293.973.791 1.612l-.074.085-6.9 7.095A7.5 7.5 0 1 1 4.607 8.818l7.746-6.58c.722-.614 1.814.028 1.628.958l-.577 2.879 7.11-3.95c.88-.488 1.849.481 1.36 1.36M9.5 11a3.5 3.5 0 0 0-3.495 3.308L6 14.5A3.5 3.5 0 1 0 9.5 11" })
  ]))
}