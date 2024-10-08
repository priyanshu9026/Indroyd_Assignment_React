const initialState = {
  players: [],
  currentQuestionIndex: 0,
  questions: [
    {
      question: "What is the primary purpose of React?",
      options: [
        "A: To manipulate the DOM directly",
        "B: To build user interfaces efficiently",
        "C: To enhance security of web applications",
        "D: To manage databases",
      ],
      correctAnswer: "B",
    },
    {
      question:
        "Which of the following is used to pass data to components in React?",
      options: ["A: setState", "B: props", "C: useEffect", "D: state"],
      correctAnswer: "B",
    },
    {
      question: "Which method is used to create components in React?",
      options: [
        "A: createComponent",
        "B: renderComponent",
        "C: useComponent",
        "D: render",
      ],
      correctAnswer: "D",
    },
    {
      question: "What is the use of 'useState' in React?",
      options: [
        "A: To handle lifecycle methods",
        "B: To store component data",
        "C: To fetch API data",
        "D: To perform conditional rendering",
      ],
      correctAnswer: "B",
    },
    {
      question: "Which of the following is true about JSX?",
      options: [
        "A: It is a syntax extension for JavaScript",
        "B: It is a full-fledged programming language",
        "C: It is used to write server-side code",
        "D: It must be written inside strings",
      ],
      correctAnswer: "A",
    },
  ],
};

export const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_PLAYER":
      return {
        ...state,
        players: [...state.players, action.payload],
      };
    case "SET_WINNER":
      return {
        ...state,
        winner: action.payload,
      };
    case "NEXT_QUESTION":
      return {
        ...state,
        currentQuestionIndex: state.currentQuestionIndex + 1,
        winner: null,
      };
    case "RESET_GAME":
      return {
        ...initialState,
      };
    default:
      return state;
  }
};
