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
    _createElementVNode("path", { d: "M12 2a2 2 0 0 1 1.572 3.236l.793 1.983 1.702-1.702A2.003 2.003 0 0 1 18 3a2 2 0 0 1 .674 3.884l-1.69 9.295a1 1 0 0 1-.865.814L16 17H8a1 1 0 0 1-.956-.705l-.028-.116-1.69-9.295a2 2 0 1 1 2.607-1.367l1.701 1.702.794-1.983A2 2 0 0 1 12 2M18 18H6a1 1 0 0 0-1 1 2 2 0 0 0 2 2h10a2 2 0 0 0 1.987-1.768l.011-.174A1 1 0 0 0 18 18" })
  ]))
}