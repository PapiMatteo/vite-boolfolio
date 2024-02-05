<script>
import axios from 'axios';
import ProjectCard from '../components/ProjectCard.vue';

export default {
    data() {
        return {
            baseUrl : 'http://127.0.0.1:8000',
            projects: [],
            curPage : 1,
            lastPage: 1,
            total   : 0
        };
    },
    created() {
        this.getProjects(1);
    },
    components: { ProjectCard },
    methods : {
        getProjects(pageNum) {
            this.curPage = pageNum;
            axios.get(`${this.baseUrl}/api/projects`, {
                params: {
                    page: pageNum
                },
            })
            .then((resp) => {
                this.projects = resp.data.results.data;
                this.lastPage = resp.data.results.last_page;
                this.total  = resp.data.results.total;
            })
        }
    }
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

        <div class="my-4">
            <button class="btn btn-primary me-2" :disabled="curPage === 1" href="" @click.prevent="getProjects(curPage - 1)">Prev</button>
            <button class="btn btn-primary" :disabled="curPage === lastPage" href="" @click.prevent="getProjects(curPage + 1)">Next</button>
        </div>
    </div>

</template>

<style lang="scss" scoped>
</style>