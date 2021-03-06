export const state = () => ({
    locales: ['en', 'ch'],
    locale: 'ch'
})

export const mutations = {
    SET_LANG(state, locale) {
        if (state.locales.includes(locale)) {
            state.locale = locale
        }
    }
}