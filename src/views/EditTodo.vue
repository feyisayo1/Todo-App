<template>
    <form @submit.prevent="handleSubmit">
        <label>Title:</label>
        <input type="text" v-model="title" required>
        <label>Details</label>
        <textarea v-model="details" required></textarea>
        <button>Update Project</button>
  </form>
</template>

add a submit handler to update the project 
make a fecth (PATCH) request to the uri to update the project 
redirect to the homepage when done 


<script>
export default {
    props: ['id'],
    data(){
        return{
            title:'',
            details: '',
            uri: 'http://localhost:3000/projects/' + this.id
        }
    },

    methods:{
        handleSubmit(){
            fetch(this.uri, {
                method: 'PATCH',
                headers: {'content-type': 'application/json'},
                body: JSON.stringify(
                    {
                        // title: this.project = this.title,
                        title: this.title,
                        // details: this.project = this.details
                        details: this.details
                    }
                )
            })
            .then(() => {
                this.$router.push({name: 'Home'})
            }).catch(err => console.log(err.message))
        }
    },

    mounted(){
        fetch(this.uri)
            .then(res => res.json())
            .then(data => {
                this.title = data.title
                this.details = data.details
            })
    }
}
</script>

<style>
button{
    cursor: pointer;
}
</style>