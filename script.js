let users = [
    {
        profilePic:
            "https://images.unsplash.com/photo-1592071544342-ace02ba7a5c1?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        displayPic:
            "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        pendingMessage: 4,
        location: "NewYork, USA",
        name: "Diana",
        age: 23,
        interests: [
            {
                icon: `<i class="ri-music-2-fill"></i>`,
                interest: "music",
            },
            {
                icon: `<i class="ri-brush-fill"></i>`,
                interest: "painting",
            },
        ],
        bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis architecto dolores autem, est quaerat perspiciatis?",
        isFriend: null,
    },
    {
        profilePic:
            "https://plus.unsplash.com/premium_photo-1673039393866-130d3d092b66?q=80&w=1948&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        displayPic:
            "https://images.unsplash.com/photo-1501943416256-08140ba03763?q=80&w=1985&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        pendingMessage: 5,
        location: "San Diego, California",
        name: "Selena",
        age: 24,
        interests: [
            {
                icon: `<i class="ri-brush-fill"></i>`,
                interest: "painting",
            },
            {
                icon: `<i class="ri-award-fill"></i>`,
                interest: `dancing`,
            },
        ],
        bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis architecto dolores autem, est quaerat perspiciatis?",
        isFriend: null,
    },
    {
        profilePic:
            "https://images.unsplash.com/photo-1514315384763-ba401779410f?q=80&w=1883&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        displayPic:
            "https://images.unsplash.com/photo-1557053908-4793c484d06f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        pendingMessage: 2,
        location: "Leicester, England",
        name: "Camila",
        age: 20,
        interests: [
            {
                icon: `<i class="ri-music-2-fill"></i>`,
                interest: "music",
            },
            {
                icon: `<i class="ri-brush-fill"></i>`,
                interest: "painting",
            },
        ],
        bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis architecto dolores autem, est quaerat perspiciatis?",
        isFriend: null,
    },
    {
        profilePic:
            "https://images.unsplash.com/photo-1621806420827-3814eb2184c9?q=80&w=1893&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        displayPic:
            "https://images.unsplash.com/photo-1496440737103-cd596325d314?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        pendingMessage: 1,
        location: "Ohio, USA",
        name: "Ellyse",
        age: 26,
        interests: [
            {
                icon: `<i class="ri-ping-pong-fill"></i>`,
                interest: "sports",
            },
            {
                icon: `<i class="ri-map-fill"></i>`,
                interest: "travelling",
            },
        ],
        bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis architecto dolores autem, est quaerat perspiciatis?",
        isFriend: null,
    },
];

function select(elem) {
    return document.querySelector(elem);
}

let curr = 0;
let isAnimating = false;

function setData(index) {
    select(".prflimg img").src = users[index].profilePic;
    select(".badge h5").textContent = users[index].pendingMessage;
    select(".location h3").textContent = users[index].location;
    select(".name h1:nth-child(1)").textContent = users[index].name;
    select(".name h1:nth-child(2)").textContent = users[index].age;

    let clutter = "";
    users[index].interests.forEach(function (interest) {
        clutter += `<div class="tag flex items-center bg-white/30 px-5 py-2 rounded-full gap-3">
                        ${interest.icon}
                        <h3 class="text-sm tracking-tight capitalize">${interest.interest}</h3>
                    </div>`;
    });
    select(".tags").innerHTML = clutter;

    select(".bio p").textContent = users[index].bio;
}

(function setInitial() {
    select(".maincard img").src = users[curr].displayPic;
    select(".incomingcard img").src = users[curr + 1]?.displayPic;

    setData(curr);

    curr = 2;
})();

function imageChange() {
    if (!isAnimating) {
        isAnimating = true;
        let tl = gsap.timeline({
            onComplete: function () {
                isAnimating = false;
                let main = select(".maincard");
                let incoming = select(".incomingcard");

                incoming.classList.remove("z-[2]");
                incoming.classList.add("z-[3]");
                incoming.classList.remove("incomingcard");

                main.classList.remove("z-[3]");
                main.classList.add("z-[2]");
                gsap.set(main, {
                    scale: 1,
                    opacity: 1,
                });

                if (curr === users.length) curr = 0;
                select(".maincard img").src = users[curr].displayPic;

                curr++;
                main.classList.remove("maincard");
                incoming.classList.add("maincard");
                main.classList.add("incomingcard");
            },
        });
        tl.to(
            ".maincard",
            {
                scale: 1.1,
                opacity: 0,
                ease: Circ,
                duration: 0.9,
            },
            "a"
        ).from(
            ".incomingcard",
            {
                scale: 0.9,
                opacity: 0,
                ease: Circ,
                duration: 1.1,
            },
            "a"
        );
    }
}

let deny = select(".deny");
let accept = select(".accept");

deny.addEventListener("click", function () {
    imageChange();
    setData(curr - 1);
    gsap.from(".details .element", {
        y: "100%",
        stagger: 0.06,
        ease: Power4.easeInOut,
        duration: 1.5,
    });
});

accept.addEventListener("click", function () {
    imageChange();
    setData(curr - 1);
    gsap.from(".details .element", {
        y: "100%",
        stagger: 0.06,
        ease: Power4.easeInOut,
        duration: 1.5,
    });
});

(function containerCreator() {
    document.querySelectorAll(".element").forEach(function (element) {
        let div = document.createElement("div");
        div.classList.add(
            `${element.classList[1]}container`,
            "overflow-hidden"
        );
        div.appendChild(element);
        select(".details").appendChild(div);
    });
})();
