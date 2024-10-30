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
    _createElementVNode("path", { d: "M17.333 3A3.667 3.667 0 0 1 21 6.667v10.666A3.667 3.667 0 0 1 17.333 21H6.667A3.667 3.667 0 0 1 3 17.333V6.667A3.667 3.667 0 0 1 6.667 3zM13.75 6a2.38 2.38 0 0 0-2.37 2.145L11.095 11H9l-.117.007A1 1 0 0 0 9 13h1.894l-.265 2.656-.014.071a.38.38 0 0 1-.365.273.25.25 0 0 1-.25-.25v-.25l-.007-.117A1 1 0 0 0 8 15.5v.25l.005.154A2.25 2.25 0 0 0 10.25 18a2.38 2.38 0 0 0 2.37-2.145L12.904 13H15l.117-.007A1 1 0 0 0 15 11h-1.895l.266-2.656.014-.071A.38.38 0 0 1 13.75 8a.25.25 0 0 1 .25.25v.25l.007.117A1 1 0 0 0 16 8.5v-.25l-.005-.154A2.25 2.25 0 0 0 13.75 6" })
  ]))
}