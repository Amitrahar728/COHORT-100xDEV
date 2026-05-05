import {useEffect, useState} from 'react'



//  this is a custom hook 
export function usePostTitle(){
  const [post , setPost] = useState();

  async function getPosts(){
    const response = await fetch("https:jsonholder.typicode.com/posts/1");
    const json = await response.json();
    setPost(json);
  }

  useEffect(() =>{
      getPosts();
  },[])


      return post.title;
    
}


export function useFetch(url){
    
}