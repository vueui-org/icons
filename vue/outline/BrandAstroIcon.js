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
    _createElementVNode("path", { d: "M14.972 3.483c.163.196.247.46.413.987L19.025 16a15.5 15.5 0 0 0-4.352-1.42l-2.37-7.723a.31.31 0 0 0-.296-.213.31.31 0 0 0-.295.214L9.37 14.576A15.5 15.5 0 0 0 5 15.998l3.657-11.53c.168-.527.251-.79.415-.986.144-.172.331-.306.544-.388C9.858 3 10.143 3 10.715 3h2.612c.572 0 .858 0 1.1.094.213.082.4.217.545.39M9 18c0 1.5 2 3 3 4 1-1 3-3 3-4q-3 1.5-6 0" })
  ]))
}