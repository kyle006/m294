const taskList = document.getElementById("taskList");
    const taskTitleInput = document.getElementById("taskTitle");
    const addTaskButton = document.getElementById("addTask");
    const taskIdToDeleteInput = document.getElementById("taskIdToDelete");
    const deleteTaskButton = document.getElementById("deleteTask");
    const taskIdToFindInput = document.getElementById("taskIdToFind");
    const findTaskButton = document.getElementById("findTask");
    const listTasksButton = document.getElementById("listTasks");


    function addTaskToList(task) {
      const taskList = document.getElementById('taskList');
      const listItem = document.createElement('li');
      listItem.textContent = `ID: ${task.id}, Title: ${task.title}, Completed: ${task.completed}`;
      taskList.appendChild(listItem);
    }
  

    async function deleteTask() {
      const taskIdToDelete = taskIdToDeleteInput.value;
      try {
        const response = await fetch(`http://localhost:8080/task/${taskIdToDelete}`, {
          method: 'DELETE',
        });
        if (response.status === 200) {
          listAllTasks();
        } else {
          console.error('Failed to delete task:', response.statusText);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }

    

    function listAllTasks() {
      const taskList = document.getElementById('taskList');
      taskList.innerHTML = ''; 
  
      fetch('http://localhost:8080/tasks')
        .then(response => response.json())
        .then(data => {
          data.forEach(task => {
            addTaskToList(task);
          });
        })
        .catch(error => {
          console.error('Error fetching tasks:', error);
        });
    }

    function handleAddTask() {
        const taskTitle = taskTitleInput.value;
      
        const task = {
          id: Math.floor(Math.random() * 100),  
          title: taskTitle,
          completed: false
        };

      
        addTaskToList(task);
      }
    addTaskButton.addEventListener("click", handleAddTask);
    deleteTaskButton.addEventListener("click", deleteTask);
    findTaskButton.addEventListener("click", findTask);
    listTasksButton.addEventListener("click", listAllTasks);