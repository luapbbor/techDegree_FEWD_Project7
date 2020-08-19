// ---------------------------------------------
// This is the notifications that pop-up
// ---------------------------------------------

const modal = document.getElementById("notificationsModal");
const dot = document.querySelector(".dot");
const closeModal = document.querySelector(".close");
const notifications = document.querySelector("#notifications");

// Get the button that opens the modal
const btn = document.querySelector(".notification");

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
// Also changes the background colour of the dot notifcation to match the header colour. So, it looks like no new notications.
btn.onclick = function() {
  modal.style.display = "block";
  dot.style.background = "#a09bff";
}

// When the user clicks on <span> (x), close the modal

closeModal.addEventListener('click', () => {
  modal.style.display = "none";
});

// span.onclick = function() {
//   modal.style.display = "none";
// }

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// ---------------------------------------------
// This is the alert banner on the page
// ---------------------------------------------

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
    


// ---------------------------------------------
// Traffic line chart
// ---------------------------------------------

const lineChartOptions = document.querySelectorAll(".traffic-nav-link");
const hourly = document.querySelector("#hourly");
const daily = document.querySelector("#daily");
const weekly = document.querySelector("#weekly");
const monthly = document.querySelector("#monthly");

let trafficCanvas = document.getElementById('traffic-chart');
let trafficData = {};
let trafficOptions = {};
Chart.defaults.global.elements.line.tension = 0;

// Shows the weekly data by default

trafficData = {
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

trafficOptions = {
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


// When the chart option "hourly" is clicked
hourly.addEventListener('click', () => {
  for (let i = 0; i < lineChartOptions.length; i++) {
    const lineOptionsText = lineChartOptions[i].textContent;
     
    if (lineOptionsText === "Hourly") {
      // adds the class "active" to the hourly div
      hourly.className += " " + "active";
      // Set the line chart data to the hourly data
    trafficData = {
        labels: ["08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00",
        "15:00", "16:00", "17:00", "18:00"],
        datasets: [{
        data: [5, 8, 14, 15, 13,
         17, 19, 20, 16, 14,
        8],
        backgroundColor: 'rgba(116, 119, 191, .3)',
        borderWidth: 1,
        }]
        };
    
        trafficOptions = {
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

    } else {
    // removes the class from the hourly div
      lineChartOptions[i].classList.remove("active");


    }
  }
})

// When the chart option "daily" is clicked
daily.addEventListener('click', () => {
  for (let i = 0; i < lineChartOptions.length; i++) {
    const lineOptionsText = lineChartOptions[i].textContent;
   
    
    if (lineOptionsText === "Daily") {
      // adds the class "active" to the hourly div
      daily.className += " " + "active";
      // Set the line chart data to the hourly data
    trafficData = {
        labels: ["S", "M", "T", "W", "T", "F", "S"],
        datasets: [{
        data: [110, 180, 140, 150, 175,
         145, 155, 165, 185, 200,
        185],
        backgroundColor: 'rgba(116, 119, 191, .3)',
        borderWidth: 1,
        }]
        };
    
        trafficOptions = {
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

    } else {
    // removes the class "active" from the "non-selected" elements
      lineChartOptions[i].classList.remove("active");

      
    }
  }
})

// When the chart option "weekly" is clicked
weekly.addEventListener('click', () => {
  for (let i = 0; i < lineChartOptions.length; i++) {
    const lineOptionsText = lineChartOptions[i].textContent;
    
    if (lineOptionsText === "Weekly") {
      // adds the class "active" to the hourly div
      weekly.className += " " + "active";
      // Set the line chart data to the hourly data
      trafficData = {
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
    
        trafficOptions = {
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

    } else {
    // removes the class "active" from the "non-selected" elements
      lineChartOptions[i].classList.remove("active");

      
    }
  }
})

// When the chart option "monthly" is clicked
monthly.addEventListener('click', () => {
  for (let i = 0; i < lineChartOptions.length; i++) {
    const lineOptionsText = lineChartOptions[i].textContent;
    
    
    if (lineOptionsText === "Monthly") {
      // adds the class "active" to the hourly div
      monthly.className += " " + "active";
      // Set the line chart data to the hourly data
    trafficData = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
        datasets: [{
        data: [2000, 2225, 2750, 3000, 2650,
         2400, 2200, 1800,],
        backgroundColor: 'rgba(116, 119, 191, .3)',
        borderWidth: 1,
        }]
        };
    
        trafficOptions = {
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

    } else {
    // removes the class "active" from the "non-selected" elements
      lineChartOptions[i].classList.remove("active");

      
    }
  }
})










// ---------------------------------------------
// Daily traffic bar chart
// ---------------------------------------------

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


// ---------------------------------------------
// Mobile users donut chart
// ---------------------------------------------

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


// ---------------------------------------------
// This is the form validator
// ---------------------------------------------

const user = document.getElementById("userField");
const message = document.getElementById("messageField");
const send = document.getElementById("send");

send.addEventListener('click', () => {
    // ensure user and message fields are filled out
    if (user.value === "" && message.value === "") {
    alert("Please fill out user and message fields before sending");
    } else if (user.value === "" ) {
    alert("Please fill out user field before sending");
    } else if (message.value === "" ) {
    alert("Please fill out message field before sending");
    } else {
    alert(`Message successfully sent to: ${user.value}`);
    }
});



// ---------------------------------------------
//  Save settings to local storage
// ---------------------------------------------
const sendEmailCheckbox = document.querySelector("#sendEmailCheckbox");
const saveProfileCheckbox = document.querySelector("#saveProfileCheckbox");
const saveButton = document.querySelector("#save");
const cancelButton = document.querySelector("#cancel");
const timezone = document.querySelector("#timezone");
const eastern = document.querySelector("#eastern");





// loads the settings from local storage when the page loads
window.onload = () => {
  loadSettings();
};


// When the save button is clicked
saveButton.addEventListener('click', () => {
  // Check if local storage is available on users browser
if (typeof(Storage) !== "undefined") {
  
  // saves the setting to local storage
  localStorage.setItem("sendEmails", sendEmailCheckbox.checked);
    
     // saves the setting to local storage
   localStorage.setItem("saveProfile", saveProfileCheckbox.checked);
   // saves the selected timezone
   localStorage.setItem("savedTimezone", timezone.value);
  } else {
  alert("The settings cannot be saved due to the javascript options set in your browser")
}
});


// This function loads the settings from local storage
function loadSettings () {
  let checkEmail = localStorage.getItem("sendEmails");
  if (checkEmail == "true") {
    sendEmailCheckbox.checked = true;
  } else {
    sendEmailCheckbox.checked = false;
  }
  
  let saveProfile = localStorage.getItem("saveProfile");
  if(saveProfile == "true") {
    saveProfileCheckbox.checked = true;
  } else {
    saveProfileCheckbox.checked = false;
  }
  timezone.value = localStorage.getItem('savedTimezone');
}

// When clicking the cancel button this removes all the local storage 
cancelButton.addEventListener('click', () => {
  localStorage.removeItem("sendEmails");
  localStorage.removeItem("saveProfile");
  localStorage.removeItem("savedTimezone");
  })


 

