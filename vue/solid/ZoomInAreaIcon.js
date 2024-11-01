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
    _createElementVNode("path", { d: "M15 9a6 6 0 0 1 4.891 9.476l2.816 2.817a1 1 0 0 1-1.32 1.497l-.094-.083-2.817-2.816a6 6 0 0 1-9.472-4.666L9 15l.004-.225A6 6 0 0 1 15 9m0 3a1 1 0 0 0-.993.883L14 13v1h-1l-.117.007a1 1 0 0 0 0 1.986L13 16h1v1l.007.117a1 1 0 0 0 1.986 0L16 17v-1h1l.117-.007a1 1 0 0 0 0-1.986L17 14h-1v-1l-.007-.117A1 1 0 0 0 15 12M3 14a1 1 0 0 1 .993.883L4 15v1a1 1 0 0 0 .883.993L5 17h1a1 1 0 0 1 .117 1.993L6 19H5a3 3 0 0 1-2.995-2.824L2 16v-1a1 1 0 0 1 1-1M3 9a1 1 0 0 1 .993.883L4 10v1a1 1 0 0 1-1.993.117L2 11v-1a1 1 0 0 1 1-1M6 2a1 1 0 0 1 .117 1.993L6 4H5a1 1 0 0 0-.993.883L4 5v1a1 1 0 0 1-1.993.117L2 6V5a3 3 0 0 1 2.824-2.995L5 2zM11 2a1 1 0 0 1 .117 1.993L11 4h-1a1 1 0 0 1-.117-1.993L10 2zM16 2a3 3 0 0 1 2.995 2.824L19 5v1a1 1 0 0 1-1.993.117L17 6V5a1 1 0 0 0-.883-.993L16 4h-1a1 1 0 0 1-.117-1.993L15 2z" })
  ]))
}