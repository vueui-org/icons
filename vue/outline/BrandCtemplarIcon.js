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
    _createElementVNode("path", { d: "M6.04 14.831 10.5 10.5M12.555 20.82c4.55-3.456 7.582-8.639 8.426-14.405a1.67 1.67 0 0 0-.934-1.767A19.65 19.65 0 0 0 12 3a19.65 19.65 0 0 0-8.047 1.647 1.67 1.67 0 0 0-.934 1.767c.844 5.766 3.875 10.95 8.426 14.406a.95.95 0 0 0 1.11 0" }),
    _createElementVNode("path", { d: "M20 5c-2 0-4.37 3.304-8 6.644C8.37 8.304 6 5 4 5M17.738 15 13.5 10.5" })
  ]))
}