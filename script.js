async function data(){
    const getUser = await fetch('https://jsonplaceholder.typicode.com/users/1')
    const userData = await getUser.json()
    const getPosts = await fetch('https://jsonplaceholder.typicode.com/posts?userId=1')
    const userPosts = await getPosts.json()
    console.log(userData, userPosts)
}

data()