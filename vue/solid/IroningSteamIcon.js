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
    _createElementVNode("path", { d: "M12 18a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0v-2a1 1 0 0 1 1-1M16.459 3a4 4 0 0 1 3.945 3.343l.577 3.464.81 4.865A2 2 0 0 1 19.82 17H3a1 1 0 0 1-1-1 8 8 0 0 1 8-8h8.652l-.22-1.329a2 2 0 0 0-1.811-1.665L16.459 5H9a1 1 0 1 1 0-2zM7.106 18.553a1 1 0 0 1 1.788.894l-1 2a1 1 0 0 1-1.788-.894zM15.553 18.106a1 1 0 0 1 1.341.447l1 2a1 1 0 0 1-1.788.894l-1-2a1 1 0 0 1 .447-1.341" })
  ]))
}