//Time
const myLabel = document.getElementById("myLabel");

update();
setInterval(update, 1000);
function update() {


    let date = new Date();
    myLabel.innerHTML= formatTime(date);

    function formatTime(date) {
        let month = date.getMonth();
        let day = date.getDate();
        let year = date.getFullYear();

        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        let amOrpm = hours>= 12? "pm" : "am";

        month = month + 1;
        hours = (hours % 12 )|| 12;

        hours = formatZeroes(hours);
        minutes = formatZeroes(minutes);
        seconds = formatZeroes(seconds);


        return`${month}/${day}/${year}
        ${hours}:${minutes}:${seconds} ${amOrpm}`
    }

    function formatZeroes(time){
        time = time.toString();
        return time.length < 2 ? "0" + time : time;
    }

}

//Today

const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

const d = new Date();
let dayOfWeek = days[d.getDay()];
document.getElementById("today").innerHTML = dayOfWeek;


//TODO
const form = document.getElementById('form')
const input = document.getElementById('input')
const todosUL = document.getElementById('todos')

const todos = JSON.parse(localStorage.getItem('todos'))

if(todos) {
    todos.forEach(todo => addTodo(todo))
}

form.addEventListener('submit', (e) => {
    e.preventDefault()

    addTodo()
})

function addTodo(todo) {
    let todoText = input.value

    if(todo) {
        todoText = todo.text
    }

    if(todoText) {
        const todoEl = document.createElement('li')
        if(todo && todo.completed) {
            todoEl.classList.add('completed')
        }

        todoEl.innerText = todoText

        todoEl.addEventListener('click', () => {
            todoEl.classList.toggle('completed')
            updateLS()
        })

        todoEl.addEventListener('dblclick', (e) => {
            e.preventDefault()

            todoEl.remove()
            updateLS()
        })

        todosUL.appendChild(todoEl)

        input.value = ''

        updateLS()
    }
}

function updateLS() {
    todosEl = document.querySelectorAll('li')

    const todos = []

    todosEl.forEach(todoEl => {
        todos.push({
            text: todoEl.innerText,
            completed: todoEl.classList.contains('completed')
        })
    })

    localStorage.setItem('todos', JSON.stringify(todos))
}




//Schedule
//workoutSchedule

var modal = document.getElementById("myModal");


var workoutBtn = document.getElementById("workoutBtn");


var span = document.getElementsByClassName("close")[0];


workoutBtn.onclick = function() {
  modal.style.display = "block";
}


span.onclick = function() {
  modal.style.display = "none";
}


window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }


} 

//StudySchedule
var smodal = document.getElementById("smyModal");


var studyBtn = document.getElementById("studyBtn");


var span = document.getElementsByClassName("close")[1];


studyBtn.onclick = function() {
  smodal.style.display = "block";
}


span.onclick = function() {
  smodal.style.display = "none";
}


window.onclick = function(event) {
  if (event.target == smodal) {
    smodal.style.display = "none";
  }


} 



//AudioPLayer



const myAudio = document.getElementById('myAudio')
const spin = document.getElementById('spin')



var isPlaying = false;


function togglePlay() {
  isPlaying ? myAudio.pause() : myAudio.play();
};

myAudio.onplaying = function() {
  isPlaying = true;
  spin.classList.add("play");
};
myAudio.onpause = function() {
  isPlaying = false;
  spin.classList.remove("play");
};
    


//Dark Mode
const watch = document.getElementById('watch');
const small = document.getElementById('small');
function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
  watch.classList.toggle("watch-color");
  small.classList.toggle("small-color");
} 