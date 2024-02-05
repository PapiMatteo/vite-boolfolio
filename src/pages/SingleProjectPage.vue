<script>
import axios from "axios";

export default {
    data() {
        return {
            baseUrl: 'http://127.0.0.1:8000',
            project: null,
            loading: false,
        };
    },
    created() {
        console.log(this.$route.params.slug);
        this.loading = true;
        axios
            .get(`${this.baseUrl}/api/projects/${this.$route.params.slug}`)
            .then((resp) => {
                if(resp.success){
                    this.project = resp.data.results;
                } else {
                    // Con $router posso spostare programmaticamente a una rotta scelta 
                    this.$router.push({name: 'not-found'})
                }
                
            })
            .finally(() => {
                this.loading = false;
            });
    },
};
</script>

<template>
    <div class="container mt-4">
        <div v-if="loading">
            <h3>Loading...</h3>
        </div>
        <div v-else>
            <h1 class="mb-3">{{ project.title }}</h1>
            <div class="mb-3">Tecnologie:
                <span v-for="technology in project.technologies">{{ technology.name }}</span> 
            </div>
            <div class="mb-3">Tipologia: {{ project.type.name }}</div>
            <div class="mb-3">Descrizione: {{ project.description }}</div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>