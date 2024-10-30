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
    _createElementVNode("path", { d: "m13.883 5.007.058-.005h.118l.058.005.06.009.052.01.108.032.067.027.132.07.09.065.081.073.083.094.054.077.054.096.017.036.027.067.032.108.01.053.01.06.004.057L15 6v12c0 .852-.986 1.297-1.623.783l-.084-.076-6-6a1 1 0 0 1-.083-1.32l.083-.094 6-6 .094-.083.077-.054.096-.054.036-.017.067-.027.108-.032.053-.01.06-.01z" })
  ]))
}