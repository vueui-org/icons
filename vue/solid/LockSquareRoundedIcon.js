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
    _createElementVNode("path", { d: "M12 2q-.327 0-.642.005l-.616.017-.299.013-.579.034-.553.046c-4.785.464-6.732 2.411-7.196 7.196l-.046.553-.034.579q-.008.147-.013.299l-.017.616-.004.318L2 12q0 .327.005.642l.017.616.013.299.034.579.046.553c.464 4.785 2.411 6.732 7.196 7.196l.553.046.579.034q.147.008.299.013l.616.017L12 22l.642-.005.616-.017.299-.013.579-.034.553-.046c4.785-.464 6.732-2.411 7.196-7.196l.046-.553.034-.579q.008-.147.013-.299l.017-.616L22 12l-.005-.642-.017-.616-.013-.299-.034-.579-.046-.553c-.464-4.785-2.411-6.732-7.196-7.196l-.553-.046-.579-.034-.299-.013-.616-.017-.318-.004zm0 4a3 3 0 0 1 2.995 2.824L15 9v1a2 2 0 0 1 1.995 1.85L17 12v3a2 2 0 0 1-1.85 1.995L15 17H9a2 2 0 0 1-1.995-1.85L7 15v-3a2 2 0 0 1 1.85-1.995L9 10V9a3 3 0 0 1 3-3m3 6H9v3h6zm-3-4a1 1 0 0 0-.993.883L11 9v1h2V9a1 1 0 0 0-1-1" })
  ]))
}