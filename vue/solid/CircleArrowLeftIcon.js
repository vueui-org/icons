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
    _createElementVNode("path", { d: "M12 2a10 10 0 0 1 .324 19.995L12 22l-.324-.005A10 10 0 0 1 12 2m.707 5.293a1 1 0 0 0-1.414 0l-4 4a1 1 0 0 0-.083.094l-.064.092-.052.098-.044.11-.03.112-.017.126L7 12l.004.09.007.058.025.118.035.105.054.113.043.07.071.095.054.058 4 4 .094.083a1 1 0 0 0 1.32-1.497L10.415 13H16l.117-.007A1 1 0 0 0 16 11h-5.586l2.293-2.293.083-.094a1 1 0 0 0-.083-1.32" })
  ]))
}