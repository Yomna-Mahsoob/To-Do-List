// Load Lucide Icons
lucide.createIcons();

const task = document.getElementById("task-input");
const toggle_btn = document.getElementById("toggleBtn");
const addTask_btn = document.getElementById("addTask");
const tasksList = document.getElementById("taskList");
const html = document.documentElement;

// Add Task
addTask_btn.onclick = () => {
  const text = task.value.trim();
  if (text === "") {
     alert("Please Enter Task!")
    return;
  }
  const li = document.createElement('li');
  li.className =
    "flex items-center justify-between bg-white dark:bg-gray-700 p-3 rounded-lg shadow";
  li.innerHTML = `
    <div class="flex items-center gap-2">
      <span class="task-text text-gray-800 dark:text-white">${text}</span>
    </div>
    <button class="delete-btn text-red-500 hover:text-red-700">
      <i data-lucide="trash-2" class="w-5 h-5"></i>
    </button> `;

  tasksList.appendChild(li);
  lucide.createIcons();
  task.value = ""; // clear input

  // Delete Task
  li.querySelector(".delete-btn").onclick = () => li.remove();
};

// Toggle Dark/Light Mode
toggle_btn.onclick = () => {
  html.classList.toggle("dark");

  toggle_btn.innerHTML = html.classList.contains("dark")
    ? `<i data-lucide="moon" class="w-6 h-6"></i>`
    : `<i data-lucide="sun" class="w-6 h-6"></i>`;

  lucide.createIcons();
};

