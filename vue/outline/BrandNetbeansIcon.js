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
    _createElementVNode("path", { d: "M19.875 6.27A2.23 2.23 0 0 1 21 8.218v7.284c0 .809-.443 1.555-1.158 1.948l-6.75 4.27a2.27 2.27 0 0 1-2.184 0l-6.75-4.27A2.23 2.23 0 0 1 3 15.502V8.217c0-.809.443-1.554 1.158-1.947l6.75-3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98z" }),
    _createElementVNode("path", { d: "M15.5 9.43a1 1 0 0 1 .5.874v3.268a1 1 0 0 1-.515.874l-3 1.917a1 1 0 0 1-.97 0l-3-1.917A1 1 0 0 1 8 13.573v-3.269a1 1 0 0 1 .514-.874l3-1.786c.311-.173.69-.173 1 0l3 1.787H15.5z" }),
    _createElementVNode("path", { d: "M12 21v-9L4.5 7.5M12 12l7.5-4.5M12 3v4.5M19.5 16 16 14M8 14l-3.5 2" })
  ]))
}