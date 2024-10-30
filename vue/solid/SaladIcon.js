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
    _createElementVNode("path", { d: "m9.53 3.152 3.742 2.339Q14.764 5 16.744 5H19a1 1 0 0 1 1 1l-.001 1.336-.05.895-.042.585c-.037.457-.08.84-.134 1.185L20 10a2 2 0 0 1 2 2v.5c0 1.694-2.247 5.49-3.983 6.983l-.017.013V20a2 2 0 0 1-1.85 1.995L16 22H8a2 2 0 0 1-2-2v-.496l-.065-.053c-1.76-1.496-3.794-4.965-3.928-6.77L2 12.5V12a2 2 0 0 1 2-2h.078A14 14 0 0 1 4 9V8a1 1 0 0 1 1-1h1.755c.138 0 .287.034.44.092l.835-3.335a1 1 0 0 1 1.5-.605M7.337 8.999 6.002 9l.027.42q.025.292.064.58h.942q.078-.533.302-1.001M18 7h-1.256c-1.712 0-3.003.31-3.922.88A3.5 3.5 0 0 1 13.965 10h3.774c.127-.615.194-1.4.261-2.714zm-7.5 2a1.5 1.5 0 0 0-1.414 1h2.828a1.5 1.5 0 0 0-.845-.888l-.166-.056A1.5 1.5 0 0 0 10.5 9m-.864-3.424-.415 1.665a3.5 3.5 0 0 1 1.502-.234 6 6 0 0 1 .497-.442z" })
  ]))
}