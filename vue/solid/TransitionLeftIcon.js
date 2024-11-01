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
    _createElementVNode("path", { d: "M6 2a1 1 0 1 1 0 2 2 2 0 0 0-2 2v12a2 2 0 0 0 1.85 1.995L6 20a1 1 0 0 1 0 2 4 4 0 0 1-4-4V6a4 4 0 0 1 4-4m12 0a4 4 0 0 1 4 4v12a4 4 0 1 1-8 0v-5H9.415l1.292 1.293a1 1 0 0 1 .083 1.32l-.083.094a1 1 0 0 1-1.414 0l-3-3-.097-.112-.071-.11-.031-.062-.034-.081-.024-.076-.025-.118-.007-.058L6 11.982l.003-.064.017-.119.03-.111.044-.111.052-.098.067-.096.08-.09 3-3a1 1 0 0 1 1.414 1.414L9.415 11H14V6a4 4 0 0 1 4-4" })
  ]))
}