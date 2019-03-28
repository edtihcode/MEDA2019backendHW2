console.log("Hello World!");
class Vehicle {

  //constructor is a method for a class
  constructor(model, make, color, year) {
    this.model = model;
    this.color = color;
    this.make = make;
    this.year = year;


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
class Car extends Vehicle{
  constructor(model, make, color, year, licensePlate,wheelCount,cylinders,miles,fuelType){
    super(model, make, color, year);// Must type this to inherits
    this.licensePlate= licensePlate;
    this.wheelCount=wheelCount;
    this.cylinders=cylinders;
    this.miles=miles;
    this.fuelType=fuelType;
  }
}
class Bike extends Vehicle{
    constructor(model, make, color, year, bikeType,numberOfGears, wheelSize, material){
      super(model, make, color, year, bikeType,numberOfGears, wheelSize, material);// Must type this to inherits
      this.bikeType= bikeType;
      this.numberOfGears=numberOfGears;
      this.wheelSize=wheelSize;
      this.material=material;

    }
  }

let car1 = new Vehicle("Accord","Black","Honda","2008","car");
let car2 = new Vehicle("Camry","Red","Toyota","2017","car");
let car3 = new Vehicle("x6","Blue","BMW","2019","car");
let car4 = new Vehicle("SLR","Grey","Mercedes","2015","car");
let car5 = new Vehicle("model X","White","Tesla","2018","car");

let legitCar1 = new Car("Volkswagen", "Golf",2001,"Silver","1ASDAS",4,8,50000,"DIESEL");
let legitCar2 = new Car("Elio", "One",2019,"Red","3S0DJAS",3,2,1000,"gasoline");
let bike1 = new Bike("Specialized", "Model1",2020,"Silver","Mountain",12,"18\"","Aluminium");

car1.showYear();
car1.showMake();
car5.showModel();
car5.showMake();
car5.showColor();
legitCar1.showYear();
legitCar2.showMake();
console.log(bike1.material);
console.log(bike1.wheelSize);
