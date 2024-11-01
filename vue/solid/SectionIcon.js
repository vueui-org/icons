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
    _createElementVNode("path", { d: "M20.01 19a1 1 0 0 1 .117 1.993L20 21a1 1 0 0 1-.117-1.993zm-16 0a1 1 0 0 1 0 2 1 1 0 0 1-.127-1.993zm4 0a1 1 0 0 1 0 2 1 1 0 0 1-.127-1.993zm4 0a1 1 0 0 1 .117 1.993L12 21a1 1 0 0 1-.117-1.993zm4 0a1 1 0 0 1 .117 1.993L16 21a1 1 0 0 1-.117-1.993zm4-16a1 1 0 0 1 .117 1.993L20 5a1 1 0 0 1-.117-1.993zm-16 0a1 1 0 1 1 0 2 1 1 0 0 1-.127-1.993zm4 0a1 1 0 1 1 0 2 1 1 0 0 1-.127-1.993zm4 0a1 1 0 0 1 .117 1.993L12 5a1 1 0 0 1-.117-1.993zM16 3a1 1 0 0 1 1 1 1 1 0 1 1-2 .01c0-.562.448-1.01 1-1.01m3 4a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2z" })
  ]))
}