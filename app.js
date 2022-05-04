const app = Vue.createApp({
    data() {
        return {
            firstname: 'Kent',
            lastname: 'Marshall',
            email: '1fake@gmail.com',
            gender: 'male',
            picture: 'https://randomuser.me/api/portraits/men/83.jpg'
        }, {
            firstname: 'Lyia',
            lastname: 'Marshall',
            email: '2fake@gmail.com',
            gender: 'female',
            picture: 'https://randomuser.me/api/portraits/women/89.jpg'
        }
    }
})

app.mount('#app')