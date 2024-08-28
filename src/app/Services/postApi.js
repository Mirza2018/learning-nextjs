export const getData=async()=>{
    const posts=await fetch("https://jsonplaceholder.typicode.com/posts");
    const data=await posts.json()
    return data
}

export const getSingleData=async(id)=>{
const post=await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
const data=await post.json()
return data
}

export const mealsData=async(search,setMeals) =>{
    const data=await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${search}`);
    const mdata=await data.json()
       setMeals(mdata)
}


