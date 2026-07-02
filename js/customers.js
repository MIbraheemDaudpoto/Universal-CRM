const name = document.getElementById("customerName").value;
const email = document.getElementById("customerEmail").value;
const phone = document.getElementById("customerPhone").value;
const company = document.getElementById("customerCompany").value;
const status = document.getElementById("customerStatus").value;
const address = document.getElementById("customerAddress").value;

/* ==========================================
   Universal CRM - Customers
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    initializeCustomers();

});

function initializeCustomers(){

    setupSearch();

    setupStatusFilter();

    setupCompanyFilter();

}

/* ==========================================
   Live Search
========================================== */

function setupSearch(){

    const searchInput = document.getElementById("searchCustomer");

    const rows = document.querySelectorAll("#customerTableBody tr");

    searchInput.addEventListener("keyup", function(){

        const keyword = this.value.toLowerCase();

        rows.forEach(row=>{

            row.style.display = row.innerText.toLowerCase().includes(keyword)

                ? ""

                : "none";

        });

    });

}
/* ==========================================
   Status Filter
========================================== */

function setupStatusFilter(){

    const filter = document.getElementById("statusFilter");

    const rows = document.querySelectorAll("#customerTableBody tr");

    filter.addEventListener("change", function(){

        const value = this.value.toLowerCase();

        rows.forEach(row=>{

            const status = row.children[3].innerText.toLowerCase();

            if(value==="status"){

                row.style.display="";

            }

            else{

                row.style.display=status.includes(value)

                    ? ""

                    : "none";

            }

        });

    });

}
/* ==========================================
   Company Filter
========================================== */

function setupCompanyFilter(){

    const filter = document.getElementById("companyFilter");

    const rows = document.querySelectorAll("#customerTableBody tr");

    filter.addEventListener("change", function(){

        const value=this.value.toLowerCase();

        rows.forEach(row=>{

            const company=row.children[1].innerText.toLowerCase();

            if(value==="company"){

                row.style.display="";

            }

            else{

                row.style.display=company.includes(value)

                    ? ""

                    : "none";

            }

        });

    });

}