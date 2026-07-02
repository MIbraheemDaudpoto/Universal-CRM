/* ==========================================
   Dashboard JavaScript
========================================== */

const menuToggle = document.getElementById("menuToggle");

const sidebar = document.querySelector(".sidebar");

if(menuToggle){

    menuToggle.addEventListener("click",()=>{

        sidebar.classList.toggle("show");

    });

}



// dashboard

/* ==========================================
   Counter Animation
========================================== */

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    const target = +counter.dataset.target;

    let count = 0;

    const speed = target / 80;

    function updateCounter(){

        count += speed;

        if(count < target){

            counter.innerText = Math.ceil(count).toLocaleString();

            requestAnimationFrame(updateCounter);

        }

        else{

            counter.innerText = target.toLocaleString();

        }

    }

    updateCounter();

});