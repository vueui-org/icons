const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    height: "16px",
    width: "16px"
  }, [
    _createElementVNode("path", { d: "M12.432 17.949c.863 1.544 2.589 1.976 4.13 1.112 1.54-.865 1.972-2.594 1.048-4.138-.185-.309-.309-.556-.494-.74.247.06.555.06.925.06 1.726 0 2.959-1.234 2.959-2.963s-1.233-2.965-3.02-2.965c-.37 0-.617 0-.925.062.185-.185.308-.432.493-.74.863-1.545.431-3.274-1.048-4.138-1.541-.865-3.205-.433-4.13 1.111-.185.309-.308.556-.432.803-.123-.247-.246-.494-.431-.803-.802-1.605-2.528-2.038-4.007-1.173-1.541.865-1.973 2.594-1.048 4.137.185.31.308.556.493.741-.246-.061-.555-.061-.924-.061C4.233 8.254 3 9.489 3 11.218s1.233 2.964 3.02 2.964" }),
    _createElementVNode("path", { d: "M4.073 21c4.286-2.756 5.9-5.254 7.927-9" })
  ]))
}