const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "M19 4a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3zm-3.5 4H14a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1l.117-.007A1 1 0 0 0 15 15v-1.196l1.168 1.75a1 1 0 0 0 1.387.278l.093-.07a1 1 0 0 0 .184-1.317l-1.159-1.738.044-.023A2.5 2.5 0 0 0 15.5 8m-4.184.051a1 1 0 0 0-1.265.633L9 11.838 7.949 8.684a1 1 0 0 0-1.898.632l2 6c.304.912 1.594.912 1.898 0l2-6a1 1 0 0 0-.633-1.265M15.5 10a.5.5 0 1 1 0 1H15v-1z" })
  ]))
}