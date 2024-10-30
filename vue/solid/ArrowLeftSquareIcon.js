const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "M6.707 8.293a1 1 0 0 1 0 1.414L5.415 11H16v-1a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-1H5.415l1.292 1.293a1 1 0 0 1 .083 1.32l-.083.094a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1-.097-.112l-.071-.11-.054-.114-.035-.105-.025-.118-.007-.058L2 12l.003-.075.017-.126.03-.111.044-.111.052-.098.067-.096.08-.09 3-3a1 1 0 0 1 1.414 0" })
  ]))
}