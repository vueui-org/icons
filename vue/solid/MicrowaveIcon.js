const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "M20 5a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2zm-6 2H4v10h10zm4.01 7H18a1 1 0 0 0-.117 1.993l.127.007a1 1 0 0 0 0-2m0-3H18a1 1 0 0 0-.117 1.993l.127.007a1 1 0 0 0 0-2m0-3H18a1 1 0 0 0-.117 1.993l.127.007a1 1 0 0 0 0-2" }),
    _createElementVNode("path", { d: "M5.945 9.668c1.336-.891 2.274-.891 3.61 0l-.089-.056.04.017.146.064.095.044c.378.171.533.23.674.255.133.023.186.005.336-.16a1 1 0 1 1 1.486 1.337c-.613.681-1.358.934-2.164.794-.368-.064-.621-.161-1.158-.405a10 10 0 0 0-.306-.135l-.17-.091c-.664-.443-.726-.443-1.39 0a1 1 0 1 1-1.11-1.664M5.945 12.668c1.336-.891 2.274-.891 3.61 0l-.089-.056.04.017.146.064.095.044c.378.171.533.23.674.255.133.023.186.005.336-.16a1 1 0 0 1 1.486 1.337c-.613.681-1.358.934-2.164.794-.368-.064-.621-.161-1.158-.405a10 10 0 0 0-.306-.135l-.17-.091c-.664-.443-.726-.443-1.39 0a1 1 0 1 1-1.11-1.664" })
  ]))
}