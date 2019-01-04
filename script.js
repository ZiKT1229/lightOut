const rooms = document.getElementsByClassName("room");
const input = document.getElementsByTagName("input");
let record = [];
let difficlut = 0;

function lightOn(room) {
  room.classList.remove("light-on");
  room.classList.add("light-out");
}

function lightOut(room) {
  room.classList.remove("light-out");
  room.classList.add("light-on");
}

function checkLight(room) {
  if (room.classList.contains("light-on") === true) {
    return true;
  } else if (room.classList.contains("light-out") === true) {
    return false;
  }
  return false;
}

function switchLight(room) {
  if (checkLight(room)) {
    lightOn(room);
  } else {
    lightOut(room);
  }
}

function around(index) {
  if (index % 5 !== 0) {
    switchLight(rooms[index - 1]);
  }
  if (index >= 5) {
    switchLight(rooms[index - 5]);
  }
  if (index % 5 !== 4) {
    switchLight(rooms[index + 1]);
  }
  if (index < 20) {
    switchLight(rooms[index + 5]);
  }
}

function setGame(count) {
  record = [];
  for (let i = 0; i < rooms.length; i++) {
    if (checkLight(rooms[i])) {
      lightOn(rooms[i]);
    }
  }
  for (let i = 0; i < count; i++) {
    let index = Math.floor(Math.random() * 25);
    record.push(index);
    switchLight(rooms[index]);
    around(index);
  }
}

for (let i = 0; i < rooms.length; i++) {
  rooms[i].addEventListener('click', function() {
    switchLight(rooms[i]);
    around(i);
  });
}

input[1].addEventListener('click', function() {
  if (!isNaN(input[0].value)) {
    difficlut = parseInt(input[0].value);
    setGame(difficlut);
  } else {
    alert('Please input number');
  }
  input[0].value = "";
});
