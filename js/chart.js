/* ==========================================
   Revenue Chart
========================================== */

const chartCanvas = document.getElementById("revenueChart");

if (chartCanvas) {

    const ctx = chartCanvas.getContext("2d");

    new Chart(ctx, {

        type: "line",

        data: {

            labels: [
                "January",
                "February",
                "March",
                "April",
                "May",
                "June"
            ],

            datasets: [{

                label: "Revenue",

                data: [
                    12000,
                    18000,
                    21000,
                    17000,
                    25000,
                    34000
                ],

                borderColor: "#4F46E5",

                backgroundColor: "rgba(79,70,229,.12)",

                fill: true,

                tension: .4,

                pointRadius: 5,

                pointHoverRadius: 7,

                pointBackgroundColor: "#4F46E5"

            }]

        },

        options: {

            responsive: true,

            maintainAspectRatio: false,

            plugins: {

                legend: {
                    display: false
                }

            },

            scales: {

                y: {

                    beginAtZero: true,

                    grid: {
                        color: "#EEF2FF"
                    }

                },

                x: {

                    grid: {
                        display: false
                    }

                }

            }

        }

    });

}