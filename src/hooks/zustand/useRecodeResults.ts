import { create } from "zustand";

interface QuizState {
  correctAnswerList: number[];
  incorrectAnswerList: number[];
  startTime: Date | null;
  endTime: Date | null;
  addCorrectAnswer: (answerIndex: number) => void;
  addIncorrectAnswer: (answerIndex: number) => void;
  setStartTime: (time: Date) => void;
  setEndTime: (time: Date) => void;
}

const useRecodeResults = create<QuizState>((set) => ({
  correctAnswerList: [],
  incorrectAnswerList: [],
  startTime: null,
  endTime: null,
  addCorrectAnswer: (answerIndex: number) =>
    set((state) => ({
      correctAnswerList: [...state.correctAnswerList, answerIndex],
    })),
  addIncorrectAnswer: (answerIndex: number) =>
    set((state) => ({
      incorrectAnswerList: [...state.incorrectAnswerList, answerIndex],
    })),
  setStartTime: (time: Date) => set({ startTime: time }),
  setEndTime: (time: Date) => set({ endTime: time }),
}));

export default useRecodeResults;
