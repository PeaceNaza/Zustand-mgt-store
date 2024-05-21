import { create } from "zustand"
import { devtools, persist } from "zustand/middleware"

const store = (set) => ({

  tasks: [], //array for tasks

  draggedTask: null,  //task being dragged

  addTask: (title, state) => set((store) => ({tasks: [...store.tasks, {title, state}]}), false, "addTask"), //adds a task to the tasks array

  deleteTask: (title) => set((store) => ({tasks: store.tasks.filter((task) => task.title !== title)})), //deletes a task from the tasks array

  setDraggedTask: (title) => set({draggedTask: title}), //sets the draggedTask to the title of the task being dragged

  moveTask: (title, state) => 
    set((store) => ({
      tasks: store.tasks.map((task) => 
        task.title === title ? {title, state} : task
    ),
  })), //moves the task to a different state
});



export const useStore = create(persist(devtools(store), {name: "store"})); //creates the store and persists it  to local storage

