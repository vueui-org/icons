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
    _createElementVNode("path", { d: "M17 2a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3zm.01 16H17a1 1 0 0 0-.117 1.993l.127.007a1 1 0 0 0 0-2M13 8h-2a2 2 0 0 0-2 2v1c0 .365.098.707.268 1.001-.17.293-.268.635-.268.999v1a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-1a2 2 0 0 0-.268-1c.17-.293.268-.635.268-1v-1a2 2 0 0 0-2-2m0 5v1h-2v-1zm0-3v1h-2v-1zM7.01 4H7a1 1 0 0 0-.117 1.993L7.01 6a1 1 0 1 0 0-2" })
  ]))
}