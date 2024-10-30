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
    _createElementVNode("path", { d: "M7.462 3.1c2.615-1.268 6.226-1.446 9.063-.503 2.568.853 4.471 3.175 4.475 5.81.004 3.061-1.942 5.492-4.896 6.243-1.693.43-2.338.75-2.942 1.582-.238.328-.45.745-.796 1.533l-.22.5C11 20.866 9.99 22.027 7.91 22c-2.232-.03-3.603-1.742-4.313-4.48-.458-1.768-.617-3.808-.594-5.876.044-3.993 1.42-7.072 4.46-8.545z" })
  ]))
}