document.getElementById("darkModeToggle").addEventListener("click", function () {
    document.documentElement.classList.toggle("dark");
    updateChartColors();
});

function getChartColors() {
    const isDarkMode = document.documentElement.classList.contains("dark");

    return {
        backgroundColor: "black",
        textColor: "white",
        gridColor: isDarkMode ? "rgba(255, 255, 255, 0.2)" : "rgba(0, 0, 0, 0.1)"
    };
}

function createUserGrowthChart() {
    const userGrowthCtx = document.getElementById('userGrowthChart').getContext('2d');
    return new Chart(userGrowthCtx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [{
                label: 'User Growth',
                data: [65, 59, 80, 81, 56, 55],
                fill: false,
                backgroundColor: 'rgba(75, 192, 192, 0.6)', // Line color
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 2,
                tension: 0.1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    ticks: { color: getChartColors().textColor },
                    grid: { color: getChartColors().gridColor }
                },
                y: {
                    beginAtZero: true,
                    ticks: { color: getChartColors().textColor },
                    grid: { color: getChartColors().gridColor }
                }
            },
            plugins: {
                legend: {
                    display: true,
                    position: 'bottom',
                    labels: { color: getChartColors().textColor }
                }
            }
        }
    });
}

function createRevenueChart() {
    const revenueCtx = document.getElementById('revenueChart').getContext('2d');
    return new Chart(revenueCtx, {
        type: 'pie',
        data: {
            labels: ['Mobile', 'Tablet', 'Laptop'],
            datasets: [{
                data: [300, 50, 100],
                backgroundColor: [
                    'rgb(255, 99, 132)',
                    'rgb(54, 162, 235)',
                    'rgb(255, 205, 86)'
                ]
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: { color: getChartColors().textColor }
                }
            }
        }
    });
}

let userGrowthChart = createUserGrowthChart();
let revenueChart = createRevenueChart();

function updateChartColors() {
    const colors = getChartColors();

    // Update User Growth Chart
    userGrowthChart.options.scales.x.ticks.color = colors.textColor;
    userGrowthChart.options.scales.x.grid.color = colors.gridColor;
    userGrowthChart.options.scales.y.ticks.color = colors.textColor;
    userGrowthChart.options.scales.y.grid.color = colors.gridColor;
    userGrowthChart.options.plugins.legend.labels.color = colors.textColor;
    userGrowthChart.update();

    // Update Revenue Chart
    revenueChart.options.plugins.legend.labels.color = colors.textColor;
    revenueChart.update();
}