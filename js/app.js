const alertBanner = document.getElementById("alert");
// create the html for the banner
alertBanner.innerHTML =
`<div class="alert-banner">
<p class="alert-banner-text"><strong>Alert:</strong>&nbsp; You have <strong>&nbsp; 6 &nbsp;</strong> overdue tasks
to complete</p>
<p class="alert-banner-close">x</p>
</div>`

alertBanner.addEventListener('click', e => {
    const element = e.target;
    if (element.classList.contains("alert-banner-close")) {
    alertBanner.style.display = "none"
    }
});
    


// Traffic line chart

let trafficCanvas = document.getElementById('traffic-chart');
Chart.defaults.global.elements.line.tension = 0;
let trafficData = {
labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3",
"4-10", "11-17", "18-24", "25-31"],
datasets: [{
data: [750, 1250, 1000, 1500, 2000,
 1750, 1250, 1850, 2250, 1500,
2500],
backgroundColor: 'rgba(116, 119, 191, .3)',
borderWidth: 1,
}]
};

let trafficOptions = {
aspectRatio: 2.5,
animation: {
duration: 0
},
scales: {
yAxes: [{
ticks: {
beginAtZero:true
}
}]
},
legend : {
display: false
}
};

let trafficChart = new Chart(trafficCanvas, {
type: 'line',
data: trafficData,
options: trafficOptions
});



// Daily Traffic bar chart
let dailyTrafficCanvas = document.getElementById('daily-chart');

const dailyTrafficData = {
    labels: ["S", "M", "T", "W", "T", "F", "S"],
    datasets: [{
    label: '# of Hits',
    data: [75, 115, 175, 125, 225, 200, 100],
    backgroundColor: '#7477BF',
    borderWidth: 1
    }]
    };
    

const dailyTrafficOptions = {
    scales: {
    yAxes: [{
    ticks: {
    beginAtZero:true
    }
    }]
    },
    legend : {
    display: false
    }
}
        

let barChart = new Chart(dailyTrafficCanvas, {
    type: 'bar',
    data: dailyTrafficData,
    options: dailyTrafficOptions
});


// Mobile chart

const mobileCanvas = document.getElementById("mobileUsers-chart");

const mobileData = {
    labels: ["Desktop", "Tablet", "Phones"],
    datasets: [{
    label: '# of Users',
    data: [2000, 550, 500],
    borderWidth: 0,
    backgroundColor: [
    '#7477BF',
    '#78CF82',
    '#51B6C8'
    ]
    }]
    };
    
const mobileOptions = {
    legend: {
    position: 'right',
    labels: {
    boxWidth: 20,
    fontStyle: 'bold'
    }
    }
    }

let mobileChart = new Chart(mobileCanvas, {
    type: 'doughnut',
    data: mobileData,
    options: mobileOptions
    });
            
        