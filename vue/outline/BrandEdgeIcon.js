const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "2",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "M20.978 11.372a9 9 0 1 0-1.593 5.773" }),
    _createElementVNode("path", { d: "M20.978 11.372c.21 2.993-5.034 2.413-6.913 1.486 1.392-1.6.402-4.038-2.274-3.851-1.745.122-2.927 1.157-2.784 3.202.28 3.99 4.444 6.205 10.36 4.79" }),
    _createElementVNode("path", { d: "M3.022 12.628C2.739 8.585 11.739 5.4 14.27 9.94M12.628 20.978c-2.993.21-5.162-4.725-3.567-9.748" })
  ]))
}