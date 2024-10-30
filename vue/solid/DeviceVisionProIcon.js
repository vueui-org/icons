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
    _createElementVNode("path", { d: "M12 6q1.74 0 3.342.106 1.619.107 2.973.448 1.388.345 2.436 1.05a4.9 4.9 0 0 1 1.665 1.916c.397.801.584 1.769.584 2.91 0 1.156-.222 2.208-.673 3.14-.45.934-1.073 1.685-1.868 2.236a4.7 4.7 0 0 1-2.73.839q-.932.001-1.703-.263a7 7 0 0 1-1.374-.644 20 20 0 0 1-1.107-.736 8 8 0 0 0-.901-.567 1.4 1.4 0 0 0-.643-.174c-.209 0-.426.057-.658.18q-.42.226-.893.564a20 20 0 0 1-1.105.733 6.8 6.8 0 0 1-1.366.642 5.2 5.2 0 0 1-1.688.264 4.7 4.7 0 0 1-2.75-.838c-.794-.55-1.418-1.302-1.868-2.234Q.998 14.165 1 12.432c-.005-1.135.182-2.105.577-2.9A4.9 4.9 0 0 1 3.25 7.606c.699-.47 1.511-.816 2.442-1.049A17 17 0 0 1 8.66 6.11Q10.259 6 12 6" })
  ]))
}