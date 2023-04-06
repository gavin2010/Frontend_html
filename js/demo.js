//bodyOnload 和 window.onload 同时生效时，前者会覆盖后者
function bodyOnload() {
  console.log("body onload方法执行……");
}

window.onload = function () {
  console.log("window.onload方法执行……");
};
function init(a, b) {
  console.log("init方法执行……");
  /**@types {BigNumber} */
  // var a = new BigNumber(1.335);
}

function myclick() {
  alert("hello js!");
}

function add() {
  var count = 0;
  return function (data) {
    count++;
    console.log(count);
    data[0] = count;
  };
}
let Runoob11 = class ABCD {
  constructor(name, url) {
    this.name = name;
    this.url = url;
  }
};

function popbind() {
  console.log("开始执行绑定方法……");
  var parent = document.getElementById("parent");
  var child = document.getElementById("child");
  document.body.addEventListener(
    "click",
    function (e) {
      console.log("click-body");
    },
    false
  );
  document.body.addEventListener(
    "click",
    function (e) {
      e.stopPropagation();
      console.log("click-body -- 事件捕获");
      return false;
    },
    true
  );

  parent.addEventListener(
    "click",
    function (e) {
      console.log("click-parent");
      return false;
    },
    false
  ); 
  parent.addEventListener(
    "click",
    function (e) {
      console.log("click-parent--事件捕获");
    },
    true
  );

  child.addEventListener(
    "click",
    function (e) {
      console.log("click-child");
    },
    false
  );
  child.addEventListener(
    "click",
    function (e) {
      console.log("click-child --事件捕获");
    },
    true
  );
}
window.onload = popbind;

//alert(Runoob11.name);
// output: "Runoob"
