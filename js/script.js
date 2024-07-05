document.addEventListener('DOMContentLoaded', function() {
    
    // //Block password
    initializeCalendar();
    document.getElementById('passwordProtection').style.display = 'none';
    document.getElementById('calendar').style.display = 'block';
    // //Block password end

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
            timeZone: 'UTC',
            displayEventTime: false,
            headerToolbar: {
                left: 'prev',
                center: 'title',
                right: 'today,next'
            },
            //Automatically add 1 second to the end date so the event visual occurs on the end date
            events: eventData.map(event => ({
                ...event,
                end: event.end.includes('T') ? event.end : event.end + 'T00:00:01'
            })),
            eventClick: function(info) {
                alert('Location: ' + info.event.title);
            }
        });
        calendar.render();
    }

    // Optional: Add enter key support for password input
    passwordInput.addEventListener('keyup', function(event) {
        if (event.key === 'Enter') {
            submitButton.click();
        }
    });
});