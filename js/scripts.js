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
class Helicopter extends Vehicle{
    constructor(model, make, color, year, typeOfHeli, maxTakeOffWeight,maxRange, maxSpeed, power){
      super(model, make, color, year, typeOfHeli, maxTakeOffWeight,maxRange, maxSpeed, power);// Must type this to inherits
      this.typeOfHeli= typeOfHeli;        this.maxTakeOffWeight=maxTakeOffWeight;
      this.maxRange=maxRange;
      this.maxSpeed=maxSpeed;
      this.power=power;
      }
  }


let car1 = new Vehicle("Accord","Honda","Black","2008","car");
let car2 = new Vehicle("Camry","Toyota","Red","2017","car");
let car3 = new Vehicle("x6","BMW","Blue","2019","car");
let car4 = new Vehicle("SLR","Mercedes","Grey","2015","car");
let car5 = new Vehicle("model X","Tesla","White","2018","car");

let legitCar1 = new Car("Volkswagen", "Golf","Silver",2001,"1ASDAS",4,8,50000,"DIESEL");
let legitCar2 = new Car("Elio", "One","Red",2019,"3S0DJAS",3,2,1000,"gasoline");
let bike1 = new Bike("Specialized", "Model1","Silver",2020,"Mountain",12,"18\"","Aluminium");
let heli1 = new Helicopter("Apache", "AH1", "grey", 2004, "military", "21000lb","331miles", "182mph", "2270hp");
car1.showYear();
car1.showMake();
car5.showModel();
car5.showMake();
car5.showColor();
legitCar1.showYear();
legitCar2.showMake();
console.log(bike1.material);
console.log(bike1.wheelSize);
console.log(heli1.power);
