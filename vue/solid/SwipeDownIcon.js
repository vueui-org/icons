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
    _createElementVNode("path", { d: "M12 3a5 5 0 0 1 1.001 9.9L13 17.584l1.293-1.291a1 1 0 0 1 1.32-.083l.094.083a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1-.112.097l-.11.071-.114.054-.105.035-.149.03L12 21l-.075-.003-.126-.017-.111-.03-.111-.044-.098-.052-.096-.067-.09-.08-3-3a1 1 0 0 1 1.414-1.414L11 17.585V12.9A5.002 5.002 0 0 1 12 3" })
  ]))
}