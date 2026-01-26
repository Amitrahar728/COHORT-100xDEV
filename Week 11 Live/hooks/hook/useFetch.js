import { useState , useEffect} from 'react';

export function usePosts(){
    const [post , setpost] =useState({});
    async function getPosts(){
        const response = await fetch("someurl ");
        const json = await response.json();
        setpost(json);
    }
    useEffect(() => {
        getPosts();
    }, [])
    return post.title;

}

export function useFetch(url, time){
    const [finalData , setFinalData] = useState({});
    const [loading , setloading] = useState(true);
    async function getdata(){
        setloading(true);
        const response = await fetch(url);
        const json = await response.json();
        setFinalData(json);
        setloading(false);
    }
    useEffect(()=>{
        getdata();
    }, [url])

    useEffect(()=>{
        setInterval(getdata, time*1000); //we have to add cleanup 
    },[])
    return {
        finalData,
        loading
    }
}
