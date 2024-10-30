const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "M17 3.34A10 10 0 1 1 2 12l.005-.324A10 10 0 0 1 17 3.34M4 12a8 8 0 0 0 7 7.937V14.83a3 3 0 0 1-1.898-2.05l-5.07-1.504q-.031.36-.032.725m15.967-.725-5.069 1.503a3 3 0 0 1-1.897 2.051v5.108a8 8 0 0 0 6.985-8.422zM8 5.072a8 8 0 0 0-3.536 4.244l4.812 1.426a3 3 0 0 1 5.448 0l4.812-1.426A8 8 0 0 0 8 5.072" })
  ]))
}