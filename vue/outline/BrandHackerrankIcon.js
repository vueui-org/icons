const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    height: "16px",
    width: "16px"
  }, [
    _createElementVNode("path", { d: "M19.484 5.667c-1.146-.904-3.35-2.394-6.497-3.429-.484-.159-.725-.238-1.04-.238-.314 0-.556.08-1.04.238-3.147 1.035-5.35 2.525-6.496 3.43-.402.317-.604.476-.797.816-.194.341-.233.62-.309 1.178A33 33 0 0 0 3 12c0 1.742.165 3.317.305 4.338.076.558.115.837.309 1.178.193.34.395.5.797.817 1.146.904 3.35 2.394 6.497 3.429.483.159.725.238 1.04.238.314 0 .555-.08 1.04-.238 3.146-1.035 5.35-2.525 6.496-3.43.402-.317.603-.476.797-.816.194-.341.232-.62.309-1.178.14-1.021.305-2.596.305-4.338s-.165-3.317-.305-4.338c-.077-.558-.115-.837-.309-1.178s-.395-.5-.797-.817M9 8v7M9 12h6" }),
    _createElementVNode("path", { d: "M16 16h-2l1 1zM8 8h2L9 7zM15 9v7" })
  ]))
}