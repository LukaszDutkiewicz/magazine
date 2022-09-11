<template>
    <div class="text-center">
        <v-dialog v-model="dialog" width="500">
            <template v-slot:activator="{ on, attrs }">
                <v-btn color="red lighten-2" dark v-bind="attrs" v-on="on">
                    Dodaj kategorię
                </v-btn>
            </template>

            <v-card>
                <v-card-title class="text-h5 grey lighten-2">
                    Dodaj kategorię
                </v-card-title>

                <v-card-text>
                    {{category}}
                    <div class="my-2 mt-6">
                        <v-text-field label="Nazwa" outlined v-model="category.name">
                        </v-text-field>
                    </div>
                </v-card-text>

                <v-divider></v-divider>

                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="error" text @click="dialog=false">
                        Zamknij
                    </v-btn>
                    <v-spacer></v-spacer>
                    <v-btn color="primary" text @click="createCategory()">
                        Dodaj
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>


<script>
import store from '../../store/index';
export default {
    data() {
        return {
            dialog: false,
        }
    },
    computed: {
        category() {
            return store.getters.getCategory;
        },
    },
    methods: {
        async createCategory() {
            await store.dispatch("createCategory", this);
            this.dialog = false;
            this.$emit("createdCategory");
        }
    },
    created() {
    }

}
</script>