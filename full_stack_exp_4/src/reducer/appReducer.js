export const initialState = {
  tasks: [],
  filter: "all"
}

export function appReducer(state, action) {
  switch (action.type) {

    case "ADD_TASK":
      return {
        ...state,
        tasks: [...state.tasks, action.payload]
      }

    case "TOGGLE_TASK":
      return {
        ...state,
        tasks: state.tasks.map(task =>
          task.id === action.payload
            ? { ...task, completed: !task.completed }
            : task
        )
      }

    case "DELETE_TASK":
      return {
        ...state,
        tasks: state.tasks.filter(task => task.id !== action.payload)
      }

    case "CLEAR_COMPLETED":
      return {
        ...state,
        tasks: state.tasks.filter(task => !task.completed)
      }

    case "SET_FILTER":
      return {
        ...state,
        filter: action.payload
      }

    default:
      return state
  }
}