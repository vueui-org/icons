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
    _createElementVNode("path", { d: "M10 3H5a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h5a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2M15 3a1 1 0 0 1 .117 1.993L14.99 5a1 1 0 0 1-.117-1.993zM20 3a1 1 0 0 1 .117 1.993L19.99 5a1 1 0 0 1-.117-1.993zM20 8a1 1 0 0 1 .117 1.993L19.99 10a1 1 0 0 1-.117-1.993zM20 14a1 1 0 0 1 .117 1.993L19.99 16a1 1 0 0 1-.117-1.993zM4 14a1 1 0 0 1 .117 1.993L3.99 16a1 1 0 0 1-.117-1.993zM20 19a1 1 0 0 1 .117 1.993L19.99 21a1 1 0 0 1-.117-1.993zM15 19a1 1 0 0 1 .117 1.993L14.99 21a1 1 0 0 1-.117-1.993zM9 19a1 1 0 0 1 .117 1.993L8.99 21a1 1 0 0 1-.117-1.993zM4 19a1 1 0 0 1 .117 1.993L3.99 21a1 1 0 0 1-.117-1.993z" })
  ]))
}