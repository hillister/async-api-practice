async function data(){
    try {
        const getUser = await fetch('https://jsonplaceholder.typicode.com/users/1')
        const userData = await getUser.json()
        console.log('User:', userData.name)
        
        const getPosts = await fetch('https://jsonplaceholder.typicode.com/posts?userId=1')
        const userPosts = await getPosts.json()

        console.log('Posts:')
        userPosts.forEach(userPost => {
            console.log(userPost.title);
        })

    } catch(err){
        console.error(err);
    }  
}

data()