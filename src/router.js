import { createRouter, createWebHistory } from 'vue-router';

import HomePage from './pages/HomePage.vue';
import AboutPage from './pages/AboutPage.vue';
import SingleProjectPage from './pages/SingleProjectPage.vue';
import NotFoundPage from './pages/NotFoundPage.vue'

const router = createRouter({
    history: createWebHistory(),
    routes : [
        {
            path      : '/',
            name      : 'home',
            component : HomePage
        },
        {
            path      : '/about',
            name      : 'about',
            component : AboutPage
        },
        {
            path      : '/projects/:slug',
            name      : 'single-project',
            component : SingleProjectPage
        },
        // Not Found page inserita per ultima, SEMPRE
        {
            // Questo vuol dire tutto cio' che arriva dopo lo slash che non e' stato preso precedentemente
            path      : '/:pathMath(.*)*',
            name      : 'not-found',
            component : NotFoundPage
        }
    ]
});

export { router };