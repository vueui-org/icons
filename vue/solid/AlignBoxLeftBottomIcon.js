const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "M18.333 2c1.96 0 3.56 1.537 3.662 3.472l.005.195v12.666c0 1.96-1.537 3.56-3.472 3.662l-.195.005H5.667a3.667 3.667 0 0 1-3.662-3.472L2 18.333V5.667c0-1.96 1.537-3.56 3.472-3.662L5.667 2zM8 17H6l-.117.007A1 1 0 0 0 6 19h2l.117-.007A1 1 0 0 0 8 17m4-3H6l-.117.007A1 1 0 0 0 6 16h6l.117-.007A1 1 0 0 0 12 14m-2-3H6l-.117.007A1 1 0 0 0 6 13h4l.117-.007A1 1 0 0 0 10 11" })
  ]))
}