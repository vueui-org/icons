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
    _createElementVNode("path", { d: "m9.199 9.623.108.098 3.986 3.986.094.083a1 1 0 0 0 1.403-1.403l-.083-.094-.292-.293 1.292-1.293.106-.095c.457-.38.918-.38 1.386.011l.108.098 4.502 4.503a4 4 0 0 1-3.596 2.77L18 18H6a4 4 0 0 1-3.809-2.775l5.516-5.518.106-.095c.457-.38.918-.38 1.386.011M18 2a4 4 0 0 1 3.995 3.8L22 6v6.585l-3.293-3.292-.15-.137c-1.256-1.095-2.85-1.097-4.096-.017l-.154.14L13 10.585l-2.293-2.292-.15-.137c-1.256-1.095-2.85-1.097-4.096-.017l-.154.14L2 12.585V6a4 4 0 0 1 3.8-3.995L6 2zm-2.99 3-.127.007a1 1 0 0 0 0 1.986L15 7l.127-.007a1 1 0 0 0 0-1.986zM8.01 20a1 1 0 0 1 .117 1.993L8 22a1 1 0 0 1-.117-1.993zM12.01 20a1 1 0 0 1 .117 1.993L12 22a1 1 0 0 1-.117-1.993zM16.01 20a1 1 0 0 1 .117 1.993L16 22a1 1 0 0 1-.117-1.993z" })
  ]))
}