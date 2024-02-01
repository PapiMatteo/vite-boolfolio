<script>
export default{
    props: {
        project: Object
    },

    data() {
        return {
    
        }
    },
    computed: {
        truncateText() {
            if (this.project.description && this.project.description.length > 150) {
                return this.project.description.substring(0, 150) + "...";
            }
            return this.project.description;
        },
    },
}
</script>

<template>
    <div class="card h-100">
    <div class="card-body">
      <h5>{{ project.title }}</h5>
      <span>Tecnologie: {{ project.technology ? project.technology.name : "Nessuna tecnologia" }}</span>
      <p>{{ truncateText }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>