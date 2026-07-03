document.addEventListener("DOMContentLoaded", () => {

    // Search

    const search = document.querySelector(".search-input input");

    const rows = document.querySelectorAll("tbody tr");

    if(search){

        search.addEventListener("keyup",()=>{

            const value = search.value.toLowerCase();

            rows.forEach(row=>{

                row.style.display =
                    row.innerText.toLowerCase().includes(value)
                    ? ""
                    : "none";

            });

        });

    }

    // Refresh

    const refreshBtn = document.querySelector(".btn-outline-primary");

    if(refreshBtn){

        refreshBtn.addEventListener("click",()=>{

            location.reload();

        });

    }

    // Delete

    document.querySelectorAll(".delete-btn").forEach(btn=>{

        btn.addEventListener("click",()=>{

            if(confirm("Delete this employee?")){

                btn.closest("tr").remove();

            }

        });

    });

    // View

    document.querySelectorAll(".view-btn").forEach(btn=>{

        btn.addEventListener("click",()=>{

            window.location.href="employee-profile.html";

        });

    });

    // Edit

    document.querySelectorAll(".edit-btn").forEach(btn=>{

        btn.addEventListener("click",()=>{

            const modal=new bootstrap.Modal(document.getElementById("employeeModal"));

            modal.show();

        });

    });

});