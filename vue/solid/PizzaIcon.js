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
    _createElementVNode("path", { d: "m12.89 2.542 8.5 16.517a1 1 0 0 1-.446 1.354 20.1 20.1 0 0 1-8.945 2.087l-.522-.007a20.1 20.1 0 0 1-8.423-2.08 1 1 0 0 1-.443-1.354l8.5-16.517a1 1 0 0 1 1.778 0m-7.064 14.64-.96 1.865.409.17a18.2 18.2 0 0 0 6.226 1.276l.5.007a18.1 18.1 0 0 0 6.708-1.279l.424-.176-.89-1.728a15.9 15.9 0 0 1-6.046 1.183 15.9 15.9 0 0 1-6.37-1.318M11 12.99a1 1 0 0 0-1 1l.007.127A1 1 0 0 0 12 14l-.007-.127A1 1 0 0 0 11 12.99M13 10a1 1 0 0 0-1 1l.007.127A1 1 0 0 0 14 11.01l-.007-.127A1 1 0 0 0 13 10" })
  ]))
}