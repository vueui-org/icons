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
    _createElementVNode("path", { d: "M19 2a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3zm-4.992 5.876-.52 4.153-.56-1.4c-.319-.799-1.41-.837-1.803-.114l-.053.114-.561 1.4-.519-4.153a1 1 0 0 0-1-.876l-.116.008a1 1 0 0 0-.868 1.116l1 8c.128 1.025 1.537 1.207 1.92.247L12 13.693l1.072 2.678c.383.96 1.792.778 1.92-.247l1-8a1 1 0 0 0-1.984-.248" })
  ]))
}