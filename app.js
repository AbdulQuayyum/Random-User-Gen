const app = Vue.createApp({
    data() {
        return {
            firstname: 'Kent',
            lastname: 'Marshall',
            email: '1fake@gmail.com',
            gender: 'male',
            picture: 'https://randomuser.me/api/portraits/men/83.jpg'
        }
    },
    methods: {
          async getUser() {
            const res = await fetch ('https://randomuser.me/api')
            const { results } = await res.json()
            
            this.firstname= results[0].name.first
            this.lastname= results[0].name.last
            this. email = results[0].email
            this.gender= results[0].gender
            this.picture = results[0].picture.large
        },
    }
})

app.mount('#app')