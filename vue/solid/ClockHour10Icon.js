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
    _createElementVNode("path", { d: "M17 3.34A10 10 0 1 1 2 12l.005-.324A10 10 0 0 1 17 3.34m-5.401 9.576.052.021.08.026.08.019.072.011L12 13l.076-.003.135-.02.082-.02.103-.039.073-.035.078-.046.06-.042.08-.069.083-.088.062-.083.053-.09.031-.064.032-.081.03-.109.015-.094L13 12V7a1 1 0 0 0-2 0v3.131l-1.445-.963a1 1 0 0 0-1.317.184l-.07.093a1 1 0 0 0 .277 1.387l3.038 2.024z" })
  ]))
}