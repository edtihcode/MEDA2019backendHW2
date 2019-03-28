console.log("Hello World!");
class Vehicle {

  //constructor is a method for a class
  constructor(model, color, make, year, vehicle) {
    this.model = model;
    this.color = color;
    this.make = make;
    this.year = year;
    this.vehicle = vehicle;

  }
  showType() {
    console.log("This vehicle is a: " + this.vehicle);
  }
  showModel(){
    console.log("The model is "+this.model);
  }
  showColor(){
    console.log("The color is "+this.color);
  }
  showMake() {
    console.log("The make is "+this.make);
  }
  showYear() {
    console.log("The Year is "+this.year);
  }
}

let car1 = new Vehicle("Accord","Black","Honda","2008","car");
let car2 = new Vehicle("Camry","Red","Toyota","2017","car");
let car3 = new Vehicle("x6","Blue","BMW","2019","car");
let car4 = new Vehicle("SLR","Grey","Mercedes","2015","car");
let car5 = new Vehicle("model X","White","Tesla","2018","car");

car1.showYear();
car1.showMake();
car1.showType();
car5.showModel();
car5.showMake();
car5.showColor();
