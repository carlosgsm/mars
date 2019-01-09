//Object

var rover = {
  direction: "N",
  x: 0,
  y: 0,
  travelLog: [],
}
// Funciones movimiento
function turnLeft(rover) {
  switch (rover.direction) {
    case "N":
      rover.direction = "W"
      break;
    case "W":
      rover.direction = "S"
      break;
    case "S":
      rover.direction = "E"
      break;
    case "E":
      rover.direction = "N"
      break;
  };
  console.log("turnLeft was called!");
  console.log("The new direction is " + rover.direction);

}

function turnRight(rover) {
  switch (rover.direction) {
    case "N":
      rover.direction = "E"
      break;
    case "E":
      rover.direction = "S"
      break;
    case "S":
      rover.direction = "W"
      break;
    case "W":
      rover.direction = "N"
      break;
  };
  console.log("turnRight was called!");
  console.log("The new direction is " + rover.direction);
}

function moveForward(rover) {
  if (rover.direction == "N") {
    rover.y--
  } else if (rover.direction == "W") {
    rover.x--
  } else if (rover.direction == "S") {
    rover.y++
  } else if (rover.direction == "E") {
    rover.x++
  };
  rover.travelLog.push([rover.x, rover.y]);
  limits();
  console.log("moveForward was called");
  console.log("coordenadas actuales" + " x " + rover.x + " y " + rover.y);
}

function moveBackwards(rover) {
  if (rover.direction == "N") {
    rover.y++
  } else if (rover.direction == "W") {
    rover.x++
  } else if (rover.direction == "S") {
    rover.y--
  } else if (rover.direction == "E") {
    rover.x--
  };
  rover.travelLog.push([rover.x, rover.y]);
  limits();
  console.log("moveBackwards was called");
  console.log("coordenadas actuales" + " x " + rover.x + " y " + rover.y);
}
// Otro tipo de funciones
var moves = "";

function move(moves) {
  if (moves.value = RegExp(["f", "b", "r", "l"])) {
    console.log("instrucción valida")
    for (var i = 0; i < moves.length; i++) {
      switch (moves[i]) {
        case "f":
          moveForward(rover)
          break;
        case "b":
          moveBackwards(rover)
          break;
        case "r":
          turnRight(rover)
          break;
        case "l":
          turnLeft(rover)
          break;
        default:
          console.log("no valido");
      }
    };
  } else {
    console.log("NO JODER");
  }
}

function limits() {
  if (rover.x > 10) {
    rover.x = 10;
    alert("Cambia de direccion o tira para atrás que te avias")
  } else if (rover.x < 0) {
    rover.x = 0;
    alert("Cambia de direccion o tira para atrás que te avias")
  }
  if (rover.y > 10) {
    rover.y = 10;
    alert("Cambia de direccion o tira para atrás que te avias")
  } else if (rover.y < 0) {
    rover.y = 0;
    alert("Cambia de direccion o tira para atrás que te avias")
  }
}