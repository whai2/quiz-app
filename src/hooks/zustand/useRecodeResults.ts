import { create } from 'zustand';

interface QuizState {
  correctAnswers: number;
  incorrectAnswers: number;
  startTime: Date | null;
  endTime: Date | null;
  incrementCorrect: () => void;
  incrementIncorrect: () => void;
  setStartTime: (time: Date) => void;
  setEndTime: (time: Date) => void;
}

const useRecodeResults = create<QuizState>((set) => ({
  correctAnswers: 0,
  incorrectAnswers: 0,
  startTime: null,
  endTime: null,
  incrementCorrect: () => set((state) => ({ correctAnswers: state.correctAnswers + 1 })),
  incrementIncorrect: () => set((state) => ({ incorrectAnswers: state.incorrectAnswers + 1 })),
  setStartTime: (time: Date) => set({ startTime: time }),
  setEndTime: (time: Date) => set({ endTime: time }),
}));

export default useRecodeResults