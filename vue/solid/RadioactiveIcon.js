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
    _createElementVNode("path", { d: "M21 11a1 1 0 0 1 1 1 10 10 0 0 1-5 8.656 1 1 0 0 1-1.302-.268l-.064-.098-3-5.19a1 1 0 0 1-.133-.542l.01-.11.023-.106.034-.106.046-.1.056-.094.067-.089a1 1 0 0 1 .165-.155l.098-.064a2 2 0 0 0 .993-1.57l.007-.163a1 1 0 0 1 .883-.994L15 11zM7 3.344a10 10 0 0 1 10 0 1 1 0 0 1 .418 1.262l-.052.104-3 5.19-.064.098a1 1 0 0 1-.155.165l-.089.067a1 1 0 0 1-.195.102l-.105.034-.107.022a1 1 0 0 1-.547-.07L13 10.266a2 2 0 0 0-1.842-.082l-.158.082a1 1 0 0 1-1.302-.268L9.634 9.9l-3-5.19A1 1 0 0 1 7 3.344M9 11a1 1 0 0 1 .993.884l.007.117a2 2 0 0 0 .861 1.645l.237.152a1 1 0 0 1 .165.155l.067.089.056.095.045.099q.021.053.035.106l.022.107.011.11a1 1 0 0 1-.08.437l-.053.104-3 5.19A1 1 0 0 1 7 20.656 10 10 0 0 1 2 12a1 1 0 0 1 .883-.993L3 11z" })
  ]))
}