document.addEventListener("DOMContentLoaded", () => {

    const ctx = document.getElementById("customerRevenueChart");

    if (!ctx) return;

    new Chart(ctx, {

        type: "line",

        data: {

            labels: [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun"
            ],

            datasets: [

                {

                    label: "Revenue ($)",

                    data: [

                        4200,
                        5100,
                        6800,
                        7600,
                        9300,
                        11200

                    ],

                    borderColor: "#4F46E5",

                    backgroundColor: "rgba(79,70,229,.12)",

                    fill: true,

                    borderWidth: 3,

                    tension: .4,

                    pointRadius: 5,

                    pointBackgroundColor: "#4F46E5"

                }

            ]

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

});