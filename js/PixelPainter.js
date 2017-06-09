// let mainBody = document.getElementById('pixelPainter');

class Element {
  constructor(type){
    this.type = type;
  }
  create(type){
    document.createElement(type);
  }
}
var container = new Element.create('div');
console.log(container);
mainBody.appendChild();