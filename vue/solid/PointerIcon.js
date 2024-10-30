const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "M3.039 4.277 6.943 17.84c.185.837.92 1.516 1.831 1.642l.17.016a2.2 2.2 0 0 0 1.982-1.006l.045-.078 1.4-2.072 4.05 4.05a2.067 2.067 0 0 0 2.924 0l1.047-1.047c.388-.388.606-.913.606-1.461l-.008-.182a2.07 2.07 0 0 0-.598-1.28l-4.047-4.048 2.103-1.412c.726-.385 1.18-1.278 1.053-2.189A2.2 2.2 0 0 0 17.8 6.928L4.276 3.038a1 1 0 0 0-1.236 1.24z" })
  ]))
}