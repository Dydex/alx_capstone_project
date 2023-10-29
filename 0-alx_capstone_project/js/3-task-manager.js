const breakTask = document.getElementById('Break');
const gymTask = document.getElementById('gym');
const studyTask = document.getElementById('study');
const tvTask = document.getElementById('Tv');
const friendsTask = document.getElementById('friends');
const workTask = document.getElementById('work');
const deselectBtn = document.getElementById('deselect');
const taskContainer = document.querySelector('.task_container');
const scheduleContainer = document.querySelector('.schedule_container');
const resetBtn = document.querySelector('.deleteBtn');
const popUp = document.querySelector('.pop-up_container');
const noBtn = document.getElementById('btn_no');
const yesBtn = document.getElementById('btn_yes');

let selectedColor, active

// Event Listeners
taskContainer.addEventListener('click', selectTask);
scheduleContainer.addEventListener('click', setColors);
deselectBtn.addEventListener('click', resetTasks);
resetBtn.addEventListener('click', openPopup);
noBtn.addEventListener('click', closePopup);
yesBtn.addEventListener('click', deleteTasks)

// Task click
function selectTask(e) {
    resetTasks();

    taskColor = e.target.style.backgroundColor;

    switch (e.target.id) {
        case 'Break':
            activeTask(breakTask, taskColor);
            icon = '<i class="fa-solid fa-couch"></i>'
            break
        case 'gym':
            activeTask(gymTask, taskColor);
            icon = '<i class="fa-solid fa-dumbbell"></i>'
            break
        case 'study':
            activeTask(studyTask, taskColor);
            icon = '<i class="fa-solid fa-book-open"></i>'
            break
        case 'Tv':
            activeTask(tvTask, taskColor);
            icon = '<i class="fa-solid fa-tv"></i>'
            break
        case 'friends':
            activeTask(friendsTask, taskColor);
            icon = '<i class="fa-solid fa-champagne-glasses"></i>'
            break
        case 'work':
            activeTask(workTask, taskColor);
            icon = '<i class="fa-solid fa-briefcase"></i>'
            break

    }
}

//Set colors for schedule
function setColors(e) {
    if (e.target.classList.contains('task') && active === true) {
        e.target.style.backgroundColor = selectedColor;
        e.target.innerHTML = icon;
    }
}

// Select task
function activeTask(task, color) {
    task.classList.toggle('selected');

    if (task.classList.contains('selected')) {
        active = true;
        selectedColor = color;
        return selectedColor;
    } else {
        active = false;
    }
}

// Reset tasks
function resetTasks() {
    const allTasks = document.querySelectorAll('.task_name');

    allTasks.forEach((item) => {
        item.className = 'task_name';
    })
}

// Delete Tasks
function deleteTasks() {
    const tasks = document.querySelectorAll('.task');

    tasks.forEach((item) => {
        item.innerHTML = '',
            item.style.backgroundColor = 'white'
    })

    closePopup();
}

// Open pop-up
function openPopup() {
    popUp.style.display = 'flex';
}

// Close pop-up
function closePopup() {
    popUp.style.display = 'none'
}

