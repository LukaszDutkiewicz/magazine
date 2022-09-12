<template>
    <v-app>
        <v-footer class="grey">
            <router-link to="/items/list">
                <v-btn class="primary ml-2">Przedmioty</v-btn>
            </router-link>
            <router-link to="/categories/list">
                <v-btn class="primary  ml-2">Kategorie</v-btn>
            </router-link>
            <v-spacer></v-spacer>
            <v-btn class="primary  ml-2" @click="logout">Wyloguj</v-btn>

        </v-footer>
        <v-main>
            <router-view></router-view>
        </v-main>

    </v-app>
</template>

<script>
export default {
    methods: {
        async logout() {
            await this.$http.post("/logout")
                .then(response => {
                    console.log(response);
                })
            window.location.reload();
        }
    },
    mounted() {
        console.log('MainVue component mounted.')
    }
}
</script>

<style>
a {
    text-decoration: none;
}
</style>
