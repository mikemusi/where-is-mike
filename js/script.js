document.addEventListener('DOMContentLoaded', function() {
    
    // //Block password - Uncomment to restore password page
    initializeCalendar();
    document.getElementById('passwordProtection').style.display = 'none';
    document.getElementById('calendar').style.display = 'block';
    // //End

    const passwordInput = document.getElementById('passwordInput');
    const submitButton = document.getElementById('submitPassword');
    const calendar = document.getElementById('calendar');
    const passwordProtection = document.getElementById('passwordProtection');
    const mainElement = document.querySelector('main');

    const correctPassword = 'seasons'; // Make sure this matches your chosen password

    submitButton.addEventListener('click', function() {
        if (passwordInput.value === correctPassword) {
            passwordProtection.style.display = 'none';
            calendar.style.display = 'block';
            mainElement.classList.add('calendar-visible');
            initializeCalendar();
        } else {
            alert('Incorrect password. Please try again.');
        }
    });

    function initializeCalendar() {
        var calendarEl = document.getElementById('calendar');
        var calendar = new FullCalendar.Calendar(calendarEl, {
            initialView: 'dayGridMonth',
            displayEventTime: false,
            firstDay: 1,
            headerToolbar: {
                right: 'prev,today,next'
            },
            events: eventData.map(event => ({
                ...event,
                end: extendEndDateByOneDay(event.end),
            })),
            eventClick: function(info) {
                alert('Location: ' + info.event.title);
            },
            dayCellDidMount: function(arg) {
                // Check if this cell represents today
                if (arg.date.toDateString() === new Date().toDateString()) {
                    arg.el.classList.add('fc-day-today');
                }
            }
        });
        calendar.render();
    }

    //Automatically extend the event end date by one day
    function extendEndDateByOneDay(endDate) {
        const date = new Date(endDate);
        date.setDate(date.getDate() + 1);
        return date.toISOString().split('T')[0]; // Return only the date part
    }

    // Optional: Add enter key support for password input
    passwordInput.addEventListener('keyup', function(event) {
        if (event.key === 'Enter') {
            submitButton.click();
        }
    });
});