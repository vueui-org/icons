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
    _createElementVNode("path", { d: "M17 3.34a10 10 0 1 1-14.995 8.984L2 12l.005-.324A10 10 0 0 1 17 3.34M15 8l-.117.007A1 1 0 0 0 14 9v3.585L9.707 8.293l-.094-.083a1 1 0 0 0-1.32 1.497L12.585 14H9l-.117.007A1 1 0 0 0 9 16l6.034.001a1 1 0 0 0 .186-.025l.053-.014.066-.02.13-.059.093-.055A.98.98 0 0 0 16 15V9l-.007-.117A1 1 0 0 0 15 8" })
  ]))
}