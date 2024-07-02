document.addEventListener('DOMContentLoaded', function() {
    const passwordInput = document.getElementById('passwordInput');
    const submitButton = document.getElementById('submitPassword');
    const calendar = document.getElementById('calendar');
    const passwordProtection = document.getElementById('passwordProtection');

    const correctPassword = 'seasons'; // Updated password

    submitButton.addEventListener('click', function() {
        if (passwordInput.value === correctPassword) {
            calendar.style.display = 'block';
            passwordProtection.style.display = 'none';
            initializeCalendar();
        } else {
            alert('Incorrect password. Please try again.');
        }
    });

    function initializeCalendar() {
        var calendarEl = document.getElementById('calendar');
        var calendar = new FullCalendar.Calendar(calendarEl, {
            initialView: 'dayGridMonth',
            events: [
                {
                    title: 'New York',
                    start: '2024-07-01',
                    end: '2024-07-05',
                        
                    title: 'New York',
                    start: '2024-07-06',
                    end: '2024-07-10'
                    
                }

                {
                    title: 'New York',
                    start: '2024-07-06',
                    end: '2024-07-10'
                }
                // Add more events here
            ]
        });
        calendar.render();
    }
});
