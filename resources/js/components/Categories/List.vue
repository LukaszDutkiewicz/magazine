<template>
    <div>
        <v-container>
            <create @createdCategory="listCategories" />
            <v-simple-table>
                <template v-slot:default>
                    <thead>
                        <tr>
                            <th>Lp</th>
                            <th>Nazwa</th>
                            <th>Użytkownik</th>
                            <th>Usuń</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(category,index) in categories" :key="category.name">
                            <td>{{ index+1 }}</td>
                            <td>{{ category.name }}</td>
                            <td>
                                <span v-if="category.user">
                                    {{ category.user.name }}
                                </span>
                            </td>
                            <td>
                                <v-btn @click="destroyCategory(category.id)" color="error" fab x-small>
                                    <v-icon>
                                        mdi-delete
                                    </v-icon>
                                </v-btn>
                            </td>
                        </tr>
                    </tbody>
                </template>
            </v-simple-table>
        </v-container>
    </div>

</template>

<script>
import store from "../../store/index"
import Create from "./Create"
export default {
    components: {
        Create
    },
    computed: {
        categories() {
            return store.getters.getCategories;
        }

    },
    methods: {
        listCategories() {
            store.dispatch("listCategories", this);
        },
        async destroyCategory(id) {
            store.commit("setCategoryId", id);
            await store.dispatch("destroyCategory", this);
            this.listCategories();
        }
    },
    created() {
        this.listCategories();
    }
}
</script>