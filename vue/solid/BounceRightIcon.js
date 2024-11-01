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
    _createElementVNode("path", { d: "M14.143 11.486a1 1 0 0 1 1.714 1.028c-1.502 2.505-2.41 4.89-2.87 7.65-.16.956-1.448 1.15-1.881.283-2.06-4.12-3.858-4.976-6.79-3.998a1 1 0 1 1-.632-1.898c3.2-1.067 5.656-.373 7.803 2.623l.091.13.011-.04c.522-1.828 1.267-3.55 2.273-5.3l.28-.478zM18 4a3 3 0 1 0 0 6 3 3 0 0 0 0-6" })
  ]))
}