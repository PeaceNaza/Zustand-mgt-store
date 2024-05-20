import { create } from "zustand"

const store = (set) => ({

  tasks: [{title: "TestingTask", state: "ONGOING"}], //array of tasks

  draggedTask: null,  //task being dragged

  addTask: (title, state) => set((store) => ({tasks: [...store.tasks, {title, state}]})), //adds a task to the tasks array

  deleteTask: (title) => set((store) => ({tasks: store.tasks.filter((task) => task.title !== title)})), //deletes a task from the tasks array

  setDraggedTask: (title) => set({draggedTask: title}), //sets the draggedTask to the title of the task being dragged

  moveTask: (title, state) => 
    set((store) => ({
      tasks: store.tasks.map((task) => 
        task.title === title ? {title, state} : task
    ),
  })), //moves the task to a different state
});

export const useStore = create(store); 

