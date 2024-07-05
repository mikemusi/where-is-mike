document.addEventListener('DOMContentLoaded', function() {
    
    // // //Block password
    // initializeCalendar();
    // document.getElementById('passwordProtection').style.display = 'none';
    // document.getElementById('calendar').style.display = 'block';
    // // //Block password end

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
            headerToolbar: {
                left: 'prev',
                center: 'title',
                right: 'today,next'
            },
            events: [
                {
                    title: 'Boston',
                    start: '2024-07-01',
                    end: '2024-07-04'
                },
                {
                    title: 'Vancouver',
                    start: '2024-07-05',
                    end: '2024-07-14'
                },
                {
                    title: 'Boston',
                    start: '2024-07-15',
                    end: '2024-08-01'
                },
                {
                    title: 'Cozumel',
                    start: '2024-08-02',
                    end: '2024-08-09'
                },
                {
                    title: 'Boston',
                    start: '2024-08-10',
                    end: '2024-09-04'
                },
                {
                    title: 'Palm Springs, CA',
                    start: '2024-09-05',
                    end: '2024-09-08'
                },
                {
                    title: 'Boston',
                    start: '2024-09-09',
                    end: '2024-09-13'
                },
                {
                    title: 'Boston/Zurich',
                    start: '2024-09-14',
                    end: '2024-11-03'
                },
                {
                    title: 'Honduras',
                    start: '2024-11-04',
                    end: '2025-01-02'
                },
                // Add more events here as needed
            ],
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