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
    _createElementVNode("path", { d: "M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10c-5.43 0-9.848-4.327-9.996-9.72L2 12l.004-.28C2.152 6.327 6.57 2 12 2M8.5 8a2.5 2.5 0 0 0-2.495 2.336L6 10.5V15l.007.117a1 1 0 0 0 1.986 0L8 15v-1h1v1l.007.117a1 1 0 0 0 1.986 0L11 15v-4.5l-.005-.164A2.5 2.5 0 0 0 8.5 8M15 8h-1a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h1a3 3 0 0 0 3-3v-2a3 3 0 0 0-3-3m0 2a1 1 0 0 1 1 1v2a1 1 0 0 1-.883.993L15 14zm-6.5 0a.5.5 0 0 1 .492.41L9 10.5V12H8v-1.5l.008-.09A.5.5 0 0 1 8.5 10" })
  ]))
}