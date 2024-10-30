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
    _createElementVNode("path", { d: "M12 2c3.205 0 5.894 1.05 5.997 2.89l.99 5.946L19 11c0 3.226-2.56 5.564-6 5.945V20h3a1 1 0 0 1 0 2H8a1 1 0 0 1 0-2h3v-3.055c-3.44-.38-6-2.719-6-5.945l.014-.164.991-5.955.001-.038C6.152 3.033 8.823 2 12 2m0 2c-1.224 0-2.359.192-3.164.514C8.242 4.752 8 4.981 8 5c0 .02.242.248.836.486C9.64 5.808 10.776 6 12 6s2.359-.192 3.164-.514C15.758 5.248 16 5.019 16 5l-.02-.026c-.07-.07-.321-.262-.816-.46C14.36 4.192 13.224 4 12 4" })
  ]))
}