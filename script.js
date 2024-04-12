var users = [
    {
        profilePic :"https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1522&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        displayPic:"qw.jpg",
        PendingMessage:4,
        location:"Delhi, India",
        name:"Harshita",
        age:20,
        int:[{
            icon:`<i class="fa-solid fa-music"></i>`,
            interest:"Music"
        },{
            icon:`<i class="fa-solid fa-pen"></i>`,
            interest:"writing   "
        }],
        bio:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi dolorum fugiat voluptate laboriosam, nostrum totam.",
        isFriend:null
    },
    {
        profilePic :"https://images.unsplash.com/photo-1557555187-23d685287bc3?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        displayPic:"rr.jpg",
        PendingMessage:4,
        location:"Bhopal, India",
        name:"Akshita",
        age:21,
        int:[{
            icon:`<i class="fa-solid fa-music"></i>`,
            interest:"Music"
        },{
            icon:`<i class="fa-solid fa-pen"></i>`,
            interest:"writing   "
        }],
        bio:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi dolorum fugiat voluptate laboriosam, nostrum totam.",
        isFriend:null
    },
    {
        profilePic :"https://images.unsplash.com/photo-1450297350677-623de575f31c?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        displayPic:"11.png",
        PendingMessage:4,
        location:"Indore, India",
        name:"Anushka",
        age:20,
        int:[{
            icon:`<i class="fa-solid fa-music"></i>`,
            interest:"Music"
        },{
            icon:`<i class="fa-solid fa-pen"></i>`,
            interest:"writing   "
        }],
        bio:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi dolorum fugiat voluptate laboriosam, nostrum totam.",
        isFriend:null
    },
    {
        profilePic :"https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        displayPic:"https://images.unsplash.com/photo-1496440737103-cd596325d314?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        PendingMessage:4,
        location:"Ujjain, India",
        name:"Samiksha",
        age:20,
        int:[{
            icon:`<i class="fa-solid fa-music"></i>`,
            interest:"Music"
        },{
            icon:`<i class="fa-solid fa-pen"></i>`,
            interest:"writing   "
        }],
        bio:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi dolorum fugiat voluptate laboriosam, nostrum totam.",
        isFriend:null
    },
    {
        profilePic :"https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1522&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        displayPic:"https://images.unsplash.com/photo-1557555187-23d685287bc3?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        PendingMessage:4,
        location:"Mumbai, India",
        name:"Shreya",
        age:20,
        int:[{
            icon:`<i class="fa-solid fa-music"></i>`,
            interest:"Music"
        },{
            icon:`<i class="fa-solid fa-pen"></i>`,
            interest:"writing   "
        }],
        bio:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi dolorum fugiat voluptate laboriosam, nostrum totam.",
        isFriend:null
    },
    {
        profilePic :"https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1522&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        displayPic:"https://images.unsplash.com/photo-1491349174775-aaafddd81942?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        PendingMessage:4,
        location:"Banglore, India",
        name:"Shruti",
        age:22,
        int:[{
            icon:`<i class="fa-solid fa-music"></i>`,
            interest:"Music"
        },{
            icon:`<i class="fa-solid fa-pen"></i>`,
            interest:"writing   "
        }],
        bio:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi dolorum fugiat voluptate laboriosam, nostrum totam.",
        isFriend:null
    }
];

let curr=0;
let isAnimating = false;

function select(elem){
    return document.querySelector(elem);
}


(function setInitial(){
    select(".maincard img").src = users[curr].displayPic;
    select(".incoming img").src = users[curr+1]?.displayPic;
    setData(curr);
    curr=2;
})();

function ImageChange(){
    if(!isAnimating){
        isAnimating = true;
        var tl = gsap.timeline({
            onComplete:function(){
                isAnimating=false;
                let main = select(".maincard");
                let incoming = select(".incoming");
                incoming.classList.remove("z-[2]");
                main.classList.add("z-[3]");
                incoming.classList.remove("incoming");
                main.classList.remove("z-[3]");
                main.classList.remove("z-[2]");
                gsap.set(main,{
                    scale:1,
                    opacity:1
                })
            if(curr===users.length) curr = 0;
            select(".maincard img").src = users[curr].displayPic;
            curr++;
            main.classList.remove("maincard");
            incoming.classList.add("maincard");
            main.classList.add("incoming");
        }
    });
    tl.to(".maincard",{
        scale:1.1,
        opacity:0,
        ease:Circ,
        duration:.9
    },'a')
    .from(".incoming",{
        scale:.9,
        opacity:1,
        ease:Circ,
        duration:1.1
    },'a')
}
}

let deny = select(".deny");
let accept = select(".accept");
deny.addEventListener("click",function (){
    ImageChange();
    setData(curr-1);
    gsap.from(".details .element",{
        y:"100%",
        stagger:.06,
        ease:Power4.easeInOut,
        duration:1.5
    
    })
});

accept.addEventListener("click",function (){
    ImageChange();
    setData(curr-1);
    gsap.from(".details .element",{
        y:"100%",
        stagger:.06,
        ease:Power4.easeInOut,
        duration:1.5
    
    })
});

function setData(curr){
    select(".primg img").src = users[curr].profilePic;
    select(".badge h5").textContent = users[curr].PendingMessage;
    select(".location h2").textContent = users[curr].location;
    select(".name h2:nth-child(1)").textContent = users[curr].name;
    select(".name h2:nth-child(2)").textContent = users[curr].age;
    var clutter = "";
    var use = users[curr].int;
    use.forEach(function(interest){
        clutter += `<div class="tag flex items-center justify-center bg-white/30 px-3 py-1 rounded full gap-3">
        ${interest.icon}<h3 class="text-sm tracking-tighter capitalize">${interest.interest}</h3>
    </div>`
    });
    select(".tags").innerHTML = clutter;

    select(".bio p").textContent = users[curr].bio;


}

function containerCreator(){
    document.querySelectorAll(".element")
    .forEach(function(element){
        let div = document.createElement("div");
        div.classList.add(`${element.classList[1]}container`,'overflow-hidden')
        div.appendChild(element)
        select(".details").appendChild(div);
    })
}

