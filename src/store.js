import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useStore = create(
  persist(
    (set) => ({
      tasks: [],

      addTask: (title, description) => {
        const newTask = { id: Date.now(), title, description };
        set((state) => ({ tasks: [...state.tasks, newTask] }));
      },

      deleteTask: (taskId) => {
        set((state) => ({ tasks: state.tasks.filter((task) => task.id !== taskId) }));
      },
    }),
    {
      name: 'task-management-app',
      getStorage: () => localStorage,
    }
  )
);

export { useStore };
