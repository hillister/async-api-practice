async function data(){
    try {
        const getUser = await fetch('https://jsonplaceholder.typicode.com/users/1')
        const userData = await getUser.json()
        const getPosts = await fetch('https://jsonplaceholder.typicode.com/posts?userId=1')
        const userPosts = await getPosts.json()
    } catch(err){
        console.error(err);
    }  
}

data()