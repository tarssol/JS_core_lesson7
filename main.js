//Функціональному стиль

// function Robot(vois){
//   this.vois = 'я просто працюю';

//   this.work = function(){
//     console.log(`Я ${this.constructor.name} - ${this.vois}`);
//   }
// }

// function CoffeeRobot(){
// Robot.call(this);

//   this.vois = 'я варю каву';
// }

// function RobotDancer(){
//   Robot.call(this);

//   this.vois = 'я просто танцюю';
// }

// function RobotCoocker(){
//   Robot.call(this);

//   this.vois = 'я просто готую';
// }

// let imRobot = new Robot();
// imRobot.work();

// let imCoffeeRobot = new CoffeeRobot();
// imCoffeeRobot.work();

// let imRobotDancer = new RobotDancer();
// imRobotDancer.work();

// let imRobotCoocker = new RobotCoocker();
// imRobotCoocker.work();

// let r = [imRobot, imCoffeeRobot, imRobotDancer, imRobotCoocker];
//   for(let i = 0; i<r.length; i++){
//     r[i].work;
//   }


//Прототипний стиль


function Robot(){
  this.vois = 'я просто працюю';
}

Robot.prototype.work = function(){
  console.log(`Я Robot - ${this.vois}`);
}

let imRobot = new Robot();



function CoffeeRobot(){
  this.vois = 'я варю каву';
}

CoffeeRobot.prototype = Object.create(Robot.prototype);
let imCoffeeRobot = new CoffeeRobot();



function RobotDancer(){
  this.vois = 'я просто танцюю';
}

RobotDancer.prototype = Object.create(Robot.prototype);
let imRobotDancer = new RobotDancer();



function RobotCoocker(){
  this.vois= 'я просто готую';
}

RobotCoocker.prototype = Object.create(Robot.prototype);
let imRobotCoocker = new RobotCoocker();



let r = [imRobot, imCoffeeRobot, imRobotDancer, imRobotCoocker];

for(let i = 0; i < r.length; i++){
  r[i].work();
}