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
    _createElementVNode("path", { d: "M10.002 3.003h-5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h5a1 1 0 0 0 1-1v-16a1 1 0 0 0-1-1M15.002 19.003a1 1 0 0 1 .117 1.993l-.127.007a1 1 0 0 1-.117-1.993zM20.003 19.003a1 1 0 0 1 .117 1.993l-.128.007a1 1 0 0 1-.117-1.993zM20.003 14.002a1 1 0 0 1 .117 1.993l-.128.007a1 1 0 0 1-.117-1.993zM20.003 8.002a1 1 0 0 1 .117 1.993l-.128.007a1 1 0 0 1-.117-1.993zM20.003 3.002a1 1 0 0 1 .117 1.993l-.128.007a1 1 0 0 1-.117-1.993zM15.002 3.002a1 1 0 0 1 .117 1.993l-.127.007a1 1 0 0 1-.117-1.993z" })
  ]))
}