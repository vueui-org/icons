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
    _createElementVNode("path", { d: "M8.486 11.143a1 1 0 0 1 1.371.343c1.045 1.74 1.83 3.443 2.392 5.237l.172.581.092-.13c2.093-2.921 4.48-3.653 7.565-2.7l.238.077a1 1 0 1 1-.632 1.898c-2.932-.978-4.73-.122-6.79 3.998-.433.866-1.721.673-1.88-.283-.46-2.76-1.369-5.145-2.871-7.65a1 1 0 0 1 .343-1.371M6 4a3 3 0 1 0 0 6 3 3 0 0 0 0-6" })
  ]))
}