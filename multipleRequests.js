async function api(){
    const [getTodos,getPosts]=await Promise.all([
        fetch("https://jsonplaceholder.typicode.com/todos/1")
        .then((response)=>{
        return response.json()
    }),
        fetch("https://jsonplaceholder.typicode.com/posts/1")
        .then((response)=>{
            return response.json()
        })
        
    ])
    

    const combineObject={
        todos:getTodos,
        posts:getPosts
    }
    return combineObject
}

api().then((result)=>console.log(result))