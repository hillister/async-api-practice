async function data(){
    try {
        const getUser = await fetch('https://jsonplaceholder.typicode.com/users/1')
        const userData = await getUser.json();

        const h1 = document.querySelector('h1');
        h1.innerHTML = 'User: ' + userData.name;
        
        const getPosts = await fetch('https://jsonplaceholder.typicode.com/posts?userId=1')
        const userPosts = await getPosts.json();

        let p = document.querySelector('p')
        userPosts.forEach(userPost => {
            p.innerHTML += userPost.title + '<br>';
        })

    } catch(err){
        console.error(err);
    }  
}

data()
