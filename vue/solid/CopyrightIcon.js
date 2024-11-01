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
    _createElementVNode("path", { d: "M17 3.34a10 10 0 1 1-14.995 8.984L2 12l.005-.324A10 10 0 0 1 17 3.34m-2.34 5.659a4.016 4.016 0 0 0-5.543.23 3.993 3.993 0 0 0 0 5.542 4.016 4.016 0 0 0 5.543.23 1 1 0 0 0-1.32-1.502c-.81.711-2.035.66-2.783-.116a1.993 1.993 0 0 1 0-2.766 2.016 2.016 0 0 1 2.783-.116A1 1 0 0 0 14.66 9z" })
  ]))
}