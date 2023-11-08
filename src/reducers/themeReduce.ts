import { toggleTheme } from "../actions/action";

interface ThemeState {
    toggled: boolean;
}

const savedTheme = localStorage.getItem('theme');
const initialState: ThemeState = {
    toggled: savedTheme ? JSON.parse(savedTheme) : false
};

type Action = ReturnType<typeof toggleTheme>;

const themeReducer = (state = initialState, action: Action): ThemeState => {
    switch (action.type) {
        case "TOGGLE_THEME":
            return {
                ...state,
                toggled: action.payload
            };
        default: return state;
    }
}

export default themeReducer;
