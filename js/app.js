// var likeCount = document.querySelector('#likeCount');
// var dislikeCount = document.querySelector('#dislikeCount');

// function count(){
// 	likeCount.value = parseInt(likeCount.value) + 1;
// }

// function count1(){
// 	dislikeCount.value = parseInt(dislikeCount.value) + 1;
// }

let isLiked = false;
let isDisliked = false;

const A = () => {
    const likeBtn = document.getElementById("likeBtn");
    const likeCount = document.getElementById("likeCount");

    if(isLiked){
        isLiked = false;
        likeCount.textContent = parseInt(likeCount.textContent) - 1;
        likeBtn.classList.remove("fa-solid");
        likeBtn.classList.add("fa-regular");
    }else{
        isLiked = true;
        if(isDisliked){
            isDisliked = false;
            const dislikeCount = document.getElementById("dislikeCount");
            dislikeCount.textContent = parseInt(dislikeCount.textContent) - 1;
            const dislikeBtn = document.getElementById("dislikeBtn");
            dislikeBtn.classList.remove("fa-solid");
            dislikeBtn.classList.add("fa-regular");
       }
       likeCount.textContent = parseInt(likeCount.textContent) + 1;
       likeBtn.classList.remove("fa-regular");
       likeBtn.classList.add("fa-solid");
    }
}


const a = () => {
    const dislikeBtn = document.getElementById("dislikeBtn");
    const dislikeCount = document.getElementById("dislikeCount");

    if(isDisliked){
        isDisliked = false;
        dislikeCount.textContent = parseInt(dislikeCount.textContent) - 1;
        dislikeBtn.classList.remove("fa-solid");
        dislikeBtn.classList.add("fa-regular");
    }else{
        isDisliked = true;
        if(isLiked){
            isLiked = false;
            const likeCount = document.getElementById("likeCount");
            likeCount.textContent = parseInt(likeCount.textContent) - 1;
            const likeBtn = document.getElementById("likeBtn");
            likeBtn.classList.remove("fa-solid");
            likeBtn.classList.add("fa-regular");
       }
       dislikeCount.textContent = parseInt(dislikeCount.textContent) + 1;
       dislikeBtn.classList.remove("fa-regular");
       dislikeBtn.classList.add("fa-solid");
    }
}

const B = () => {
    const dimBtn = document.getElementById("dimBtn");
    const dimCount = document.getElementById("dimCount");

    if(isLiked){
        isLiked = false;
        dimCount.textContent = parseInt(dimCount.textContent) - 1;
        dimBtn.classList.remove("fa-solid");
        dimBtn.classList.add("fa-regular");
    }else{
        isLiked = true;
        if(isDisliked){
            isDisliked = false;
            const disCount = document.getElementById("disCount");
            disCount.textContent = parseInt(disCount.textContent) - 1;
            const disBtn = document.getElementById("disBtn");
            disBtn.classList.remove("fa-solid");
            disBtn.classList.add("fa-regular");
       }
       dimCount.textContent = parseInt(dimCount.textContent) + 1;
       dimBtn.classList.remove("fa-regular");
       dimBtn.classList.add("fa-solid");
    }
}

const b = () => {
    const disBtn = document.getElementById("disBtn");
    const disCount = document.getElementById("disCount");

    if(isDisliked){
        isDisliked = false;
        disCount.textContent = parseInt(disCount.textContent) - 1;
        disBtn.classList.remove("fa-solid");
        disBtn.classList.add("fa-regular");
    }else{
        isDisliked = true;
        if(isLiked){
            isLiked = false;
            const dimCount = document.getElementById("dimCount");
            dimCount.textContent = parseInt(dimCount.textContent) - 1;
            const dimBtn = document.getElementById("dimBtn");
            dimBtn.classList.remove("fa-solid");
            dimBtn.classList.add("fa-regular");
       }
       disCount.textContent = parseInt(disCount.textContent) + 1;
       disBtn.classList.remove("fa-regular");
       disBtn.classList.add("fa-solid");
    }
}

const C = () => {
    const KBtn = document.getElementById("KBtn");
    const KCount = document.getElementById("KCount");

    if(isLiked){
        isLiked = false;
        KCount.textContent = parseInt(KCount.textContent) - 1;
        KBtn.classList.remove("fa-solid");
        KBtn.classList.add("fa-regular");
    }else{
        isLiked = true;
        if(isDisliked){
            isDisliked = false;
            const diskCount = document.getElementById("diskCount");
            diskCount.textContent = parseInt(diskCount.textContent) - 1;
            const diskBtn = document.getElementById("diskBtn");
            diskBtn.classList.remove("fa-solid");
            diskBtn.classList.add("fa-regular");
       }
       KCount.textContent = parseInt(KCount.textContent) + 1;
       KBtn.classList.remove("fa-regular");
       KBtn.classList.add("fa-solid");
    }
}

const c = () => {
    const diskBtn = document.getElementById("diskBtn");
    const diskCount = document.getElementById("diskCount");

    if(isDisliked){
        isDisliked = false;
        diskCount.textContent = parseInt(diskCount.textContent) - 1;
        diskBtn.classList.remove("fa-solid");
        diskBtn.classList.add("fa-regular");
    }else{
        isDisliked = true;
        if(isLiked){
            isLiked = false;
            const KCount = document.getElementById("KCount");
            KCount.textContent = parseInt(KCount.textContent) - 1;
            const KBtn = document.getElementById("KBtn");
            KBtn.classList.remove("fa-solid");
            KBtn.classList.add("fa-regular");
       }
       diskCount.textContent = parseInt(diskCount.textContent) + 1;
       diskBtn.classList.remove("fa-regular");
       diskBtn.classList.add("fa-solid");
    }
}

const D = () => {
    const TBtn = document.getElementById("TBtn");
    const TCount = document.getElementById("TCount");

    if(isLiked){
        isLiked = false;
        TCount.textContent = parseInt(TCount.textContent) - 1;
        TBtn.classList.remove("fa-solid");
        TBtn.classList.add("fa-regular");
    }else{
        isLiked = true;
        if(isDisliked){
            isDisliked = false;
            const distCount = document.getElementById("distCount");
            distCount.textContent = parseInt(distCount.textContent) - 1;
            const distBtn = document.getElementById("distBtn");
            distBtn.classList.remove("fa-solid");
            distBtn.classList.add("fa-regular");
       }
       TCount.textContent = parseInt(TCount.textContent) + 1;
       TBtn.classList.remove("fa-regular");
       TBtn.classList.add("fa-solid");
    }
}

const d = () => {
    const TBtn = document.getElementById("TBtn");
    const TCount = document.getElementById("TCount");

    if(isDisliked){
        isDisliked = false;
        distCount.textContent = parseInt(distCount.textContent) - 1;
        distBtn.classList.remove("fa-solid");
        distBtn.classList.add("fa-regular");
    }else{
        isDisliked = true;
        if(isLiked){
            isLiked = false;
            const TCount = document.getElementById("TCount");
            TCount.textContent = parseInt(TCount.textContent) - 1;
            const TBtn = document.getElementById("TBtn");
            TBtn.classList.remove("fa-solid");
            TBtn.classList.add("fa-regular");
       }
       distCount.textContent = parseInt(distCount.textContent) + 1;
       distBtn.classList.remove("fa-regular");
       distBtn.classList.add("fa-solid");
    }
}