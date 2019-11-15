export const state = () => ({
    links: []
})

export const mutations = {
    setLinks(state, links) {
        state.links = links
    }
}

export const actions = {
    async getLinks({ commit }) {
        const links = await this.$axios.$get(`${process.env.links}`)
        commit('setLinks', links)
    }
}
