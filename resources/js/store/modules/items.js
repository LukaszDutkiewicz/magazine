const urlItems = "/main-api/items/";
const state = {
    items: [],
    item: {
        id: 0,
        name: "",
        price: 0,
        category_id: 0,
        user_id: 0
    }
}

const getters = {
    getItems: state => state.items,
    getItem: state => state.item,
    getItemId: state => state.item.id,
}

const mutations = {
    setItems(state, data) {
        state.items = data;
    },
    setItem(state, data) {
        state.item = data;
    },
    setItemId(state, data) {
        state.item.id = data;
    }
}

const actions = {
    listItems(state, VueComponent) {
        VueComponent.$http.get(urlItems + "list")
            .then(response => {
                state.commit("setItems", response.body.items);
            })
    },
    async createItem(state, VueComponent) {
        var item = state.getters.getItem;
        await VueComponent.$http.post(urlItems + "create", { item: item })
            .then(response => {
                console.log(response);
            })
    },
    async destroyItem(state, VueComponent) {
        var id = state.getters.getItemId;
        await VueComponent.$http.delete(urlItems + "destroy/" + id)
            .then(response => {
                console.log(response);
            })
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}