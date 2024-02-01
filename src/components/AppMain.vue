<script>
import axios from 'axios';
import ProjectCard from './ProjectCard.vue';

export default {
    data() {
        return {
            baseUrl: 'http://127.0.0.1:8000',
            projects: []
        };
    },
    created() {
        axios.get(`${this.baseUrl}/api/projects`)
            .then((resp) => {
                console.log(resp);
            this.projects = resp.data.results.data;
        });
    },
    components: { ProjectCard }
}
</script>

<template>

    <div class="container">
        <h2>La lista dei progetti</h2>

        <div class="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-3">
            <div class="col" v-for="project in projects" :key="project.id">
                <ProjectCard :project="project"/>
            </div>
        </div>
    </div>

</template>

<style lang="scss" scoped>
</style>