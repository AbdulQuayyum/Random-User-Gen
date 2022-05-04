const app = Vue.createApp({
    data() {
        return {
            firstname: 'Kent',
            lastname: 'Marshall',
            email: '1fake@gmail.com',
            gender: 'male',
            picture: 'https://randomuser.me/api/portraits/men/83.jpg'
        }
    }
})

app.mount('#app')