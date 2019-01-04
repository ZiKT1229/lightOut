const rooms = document.getElementsByClassName("room");

function setGame(seed) {
  for (let i = 0; i < rooms.length; i++) {
    if (Math.floor(Math.random() * 100) + 1 <= seed) {
      rooms[i].classList.add("light-on");
    } else {
      rooms[i].classList.add("light-out");
    }
  }
}

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

for (let i = 0; i < rooms.length; i++) {
  rooms[i].addEventListener('click', function() {
    switchLight(rooms[i]);
    around(i);
  });
}
setGame(25);