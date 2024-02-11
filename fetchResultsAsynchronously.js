async function fetchResultsAsynchronously(){
   const fetchData= await fetch("https://jsonplaceholder.typicode.com/todos/1")
   const result=await fetchData.json()
   console.log(result);
}
fetchResultsAsynchronously()