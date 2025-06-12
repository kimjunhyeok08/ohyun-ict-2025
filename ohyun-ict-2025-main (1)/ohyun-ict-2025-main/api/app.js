//https://crudcrud.com/api/de38a51c3d724718938a333e22a17f82

// fetch("https://crudcrud.com/api/de38a51c3d724718938a333e22a17f82/post").then((res)=>{
// return res.json()
// }).then((json)=>{
//     console.log(json)
// })

// async function init(){}
const post_url = "https://crudcrud.com/api/1325d1397534481c90631aad07c53e89/post"
const init = async ()=>{
    const res = await fetch(post_url);
    const json = await res.json();
    console.log(json);
    json.forEach(post =>{
        const postLi = document.createElement("li");
        postLi.innerText = post.title;
        document.querySelector("#board").appendChild(postLi);
        const contentDiv = document.createElement("div")
        contentDiv.innerText = post.content;
        postLi.appendChild(contentDiv);
        contentDiv.style.display = 'none';
        postLi.addEventListener('click',() =>{
            if (contentDiv.style.display ==' block') {
            contentDiv.style.display = 'none';
        }else{
            contentDiv.style.display = 'block';
        }
    });

    });
}
const write = async (data)=>{
    const res = await fetch(post_url,{
        method:"POST",
        headers:{
            "Content-Type": "application/json",
        },
        body:JSON.stringify(data)
    })
}

const submit = ()=>{
    const title = document.querySelector("#title").value;
    const content = document.querySelector("#content").value;
    const data = {
        title:title,
        content:content
    }
    console.log(data)
    write(data);
}

document.querySelector("#post-form").addEventListener("submit",(e)=>{
    e.preventDefault()
    submit();
})

document.querySelector("#toggle_write").addEventListener("click",()=>{
    if(document.querySelector("#post-form").style.display == 'block'){
        document.querySelector("#post-form").style.display = 'none'
    }else{
        document.querySelector("#post-form").style.display = 'block'
    }
})

init()