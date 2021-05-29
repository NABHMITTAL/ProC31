const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var particles = []
var plinkos = []
var divisions = []
var divisionHeight = 300


  



function setup() {
  createCanvas(480,800);
  background(0,0,0);  
  for(var k = 5; k <=800;  k = k + 80){
    divisions.push(new Divisions(k , divisionHeight/2,10, divisionHeight));
  }

  



}

function draw() {

divisions.display()


}