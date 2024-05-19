import { create } from "zustand"

const store = (set) => ({

  tasks: [{title: "TestTask", state: "ONGOING"}], //array of tasks

  addTask: (title, state) => set((store) => ({tasks: [...store.tasks, {title, state}]})), //adds a task to the tasks array

});

export const useStore = create(store); 


