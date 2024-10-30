const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "M2 5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2 2 2 0 0 1-2 2H4a2 2 0 0 1-2-2M19 9c.513 0 .936.463.993 1.06l.007.14v7.2c0 1.917-1.249 3.484-2.824 3.594L17 21H7c-1.598 0-2.904-1.499-2.995-3.388L4 17.4v-7.2C4 9.537 4.448 9 5 9zm-5 2h-4l-.117.007a1 1 0 0 0 0 1.986L10 13h4l.117-.007a1 1 0 0 0 0-1.986z" })
  ]))
}