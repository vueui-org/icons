const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    height: "16px",
    width: "16px"
  }, [
    _createElementVNode("path", { d: "M13.031 7.007C15.5 7 16.326 8.3 17 10c4 0 4.994 3.825 5 6H2c-.001-1.64 1.36-2.954 3-3 0-1.5 1-3 3-3 .66-1.942 2.562-2.986 5.031-2.993M12 13h6M17 10l-2.5 6" })
  ]))
}