
export function taskReducer(state, action) {
    switch (action.type) {
        case "ADD_TASK":

            return [
                ...state,
                { id: Date.now(), text: action.payload, completed: false },
            ];

        case "EDIT_TASK":

            return state.map((t) => (t.id === action.payload.id ? { ...t, text: action.payload.text } : t));

        case "DELETE_TASK":

            return state.filter((task) => task.id !== action.payload);

        case "LOAD_TASKS":

            return action.payload ?? [];

        default:
            return state;
    }
}
