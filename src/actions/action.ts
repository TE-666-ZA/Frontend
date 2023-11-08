export const toggleTheme = (value : boolean) => {
    return{
        type: 'TOGGLE_THEME',
        payload: value
    } as const;
}