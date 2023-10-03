let myObject = {
  name: "Nabila",
  language: "javascript",
  run: () => {
    alert('auto play');
  }
};

console.log(myObject);


let proto = {
  run: () => {
    alert('run');
  }
}

proto.__proto__ = {
  name: "Niar"
};

myObject.__proto__ = proto;

myObject.run();
console.log(proto.name)