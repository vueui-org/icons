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
    _createElementVNode("path", { d: "M12 3c2.779 0 5.349 1.556 7.243 4.082C20.971 9.388 22 12.341 22 15.098c0 1.47-.293 2.718-.903 3.745-.603 1.014-1.479 1.758-2.582 2.257-1.593.718-3.335.9-6.515.9-3.175 0-4.92-.183-6.514-.9-1.012-.457-1.833-1.12-2.426-2.01l-.157-.247C2.293 17.815 2 16.569 2 15.098c0-2.757 1.03-5.71 2.757-8.016C6.65 4.556 9.22 3 12 3" })
  ]))
}