const rooms = document.getElementsByClassName("room");
const input = document.getElementsByTagName("input");
const p = document.getElementsByTagName("p");
let record = new Set();
let difficlut = 0;
let N = 5;
let setpCount = 0;

function lightOn(room) {
  room.classList.remove("light-on");
  room.classList.add("light-out");
}

function lightOut(room) {
  room.classList.remove("light-out");
  room.classList.add("light-on");
}

function checkLight(room) {
  if (room.classList.contains("light-on")) {
    return true;
  } else if (room.classList.contains("light-out")) {
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
  if (index % N !== 0) {
    switchLight(rooms[index - 1]);
  }
  if (index >= N) {
    switchLight(rooms[index - N]);
  }
  if (index % N !== N - 1) {
    switchLight(rooms[index + 1]);
  }
  if (index < N * (N - 1)) {
    switchLight(rooms[index + N]);
  }
}

function setGame(count) {
  setpCount = 0;
  record.clear();
  for (let i = 0; i < rooms.length; i++) {
    if (checkLight(rooms[i])) {
      lightOn(rooms[i]);
    }
  }
  for (let i = 0; i < count; i++) {
    let index = Math.floor(Math.random() * (N * N));
    if (record.has(index)) {
      record.delete(index);
    } else {
      record.add(index);
    }
    switchLight(rooms[index]);
    around(index);
  }
  p[0].textContent = `Min step : ${record.size}`;
  p[1].textContent = `Step count : ${setpCount}`;
}

for (let i = 0; i < rooms.length; i++) {
  rooms[i].addEventListener('click', function() {
    setpCount++;
    p[1].textContent = `Step count : ${setpCount}`;
    switchLight(rooms[i]);
    around(i);
    if (record.has(i)) {
      record.delete(i);
    } else {
      record.add(i);
    }
  });
}

input[1].addEventListener('click', function() {
  if (!isNaN(input[0].value)) {
    difficlut = parseInt(input[0].value);
    setGame(difficlut);
  } else {
    alert('Please input number');
  }
});
