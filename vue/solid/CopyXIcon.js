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
    _createElementVNode("path", { d: "M18.333 6A3.667 3.667 0 0 1 22 9.667v8.666A3.667 3.667 0 0 1 18.333 22H9.667A3.667 3.667 0 0 1 6 18.333V9.667A3.667 3.667 0 0 1 9.667 6zM15 2c1.094 0 1.828.533 2.374 1.514a1 1 0 1 1-1.748.972C15.405 4.088 15.284 4 15 4H5c-.548 0-1 .452-1 1v9.998c0 .32.154.618.407.805l.1.065a1 1 0 1 1-.99 1.738A3 3 0 0 1 2 15V5c0-1.652 1.348-3 3-3zm.8 8.786-1.837 1.799-1.749-1.785a1 1 0 0 0-1.319-.096l-.095.082a1 1 0 0 0-.014 1.414l1.749 1.785-1.835 1.8a1 1 0 0 0-.096 1.32l.082.095a1 1 0 0 0 1.414.014l1.836-1.8 1.75 1.786a1 1 0 0 0 1.319.096l.095-.082a1 1 0 0 0 .014-1.414l-1.75-1.786 1.836-1.8a1 1 0 0 0 .096-1.319l-.082-.095a1 1 0 0 0-1.414-.014" })
  ]))
}