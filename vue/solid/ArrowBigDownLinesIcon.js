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
    _createElementVNode("path", { d: "m9 8-.117.007A1 1 0 0 0 8 9v1.999L5.414 11A2 2 0 0 0 4 14.414L10.586 21a2 2 0 0 0 2.828 0L20 14.414a2 2 0 0 0 .434-2.18l-.068-.145A2 2 0 0 0 18.586 11L16 10.999V9a1 1 0 0 0-1-1zM15 2a1 1 0 0 1 .117 1.993L15 4H9a1 1 0 0 1-.117-1.993L9 2zM15 5a1 1 0 0 1 .117 1.993L15 7H9a1 1 0 0 1-.117-1.993L9 5z" })
  ]))
}