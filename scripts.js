document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    const options = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                observer.unobserve(entry.target);
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });

    createExperienceChart();
});

function fadeInAbout() {
    const aboutSection = document.querySelector('#about .old-paper');
    aboutSection.style.opacity = 1;
}

function animateParagraph() {
    const paragraph = document.querySelector('#about p');
    paragraph.classList.add('animate');
    setTimeout(() => {
        paragraph.classList.remove('animate');
    }, 1000); // Remove the class after 1 second
}

function createExperienceChart() {
    const ctx = document.getElementById('experienceChart').getContext('2d');
    const experienceChart = new Chart(ctx, {
        type: 'horizontalBar',
        data: {
            labels: [
                'Cybersecurity & Ethical Hacking (Innovate Intern) : Jan 2025-Feb 2025',
                'Cloud Computing and Big Data (YBI): Aug 2024-Sep 2024',
                'AIML Intern (YBI) : Jul 2024 -Aug 2024',
                'Machine Learning Intern (CodSoft) : Feb 2024-Mar 2024',
                'Data Science Intern (CodSoft) : Feb 2024-Mar 2024',
                'Web Development Intern (Prodigy InfoTech) : Feb 2024-Mar 2024',
                'Artificial Intelligence Intern (Codsoft) : Jan 2024-Feb 2024',
                'App Development Intern (Prodigy InfoTech) : Jan 2024-Feb 2024',
                'Web Development Intern (Bharat Intern) : Dec 2023-Jan 2024',
                'Machine Learning Intern (Bharat Intern) - Dec 2023-Jan 2024'
            ],
            datasets: [{
                label: 'Duration (months)',
                data: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                backgroundColor: [
                    '#ff6384',
                    '#36a2eb',
                    '#cc65fe',
                    '#ffce56',
                    '#ff9f40',
                    '#4bc0c0',
                    '#9966ff',
                    '#ff6384',
                    '#36a2eb',
                    '#cc65fe',
                    '#ffce56'
                ],
                borderColor: [
                    '#ff6384',
                    '#36a2eb',
                    '#cc65fe',
                    '#ffce56',
                    '#ff9f40',
                    '#4bc0c0',
                    '#9966ff',
                    '#ff6384',
                    '#36a2eb',
                    '#cc65fe',
                    '#ffce56'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                x: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Duration (months)'
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Internships'
                    }
                }
            },
            plugins: {
                legend: {
                    position: 'right'
                }
            }
        }
    });
    console.log('Chart created:', experienceChart);
}

async function sendMessage() {
    const userInput = document.getElementById('userInput').value;
    const chatbox = document.getElementById('chatbox');

    if (userInput.trim() === '') return;

    const userMessage = document.createElement('div');
    userMessage.className = 'user-message';
    userMessage.textContent = userInput;
    chatbox.appendChild(userMessage);

    const botMessage = document.createElement('div');
    botMessage.className = 'bot-message';
    botMessage.textContent = 'Typing...';
    chatbox.appendChild(botMessage);

    document.getElementById('userInput').value = '';
    chatbox.scrollTop = chatbox.scrollHeight;

    const response = await getBotResponse(userInput);
    botMessage.textContent = response;
    chatbox.scrollTop = chatbox.scrollHeight;
}

async function getBotResponse(input) {
    const response = await fetch('https://api.openai.com/v1/engines/davinci-codex/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer YOUR_API_KEY'
        },
        body: JSON.stringify({
            prompt: input,
            max_tokens: 150
        })
    });

    const data = await response.json();
    return data.choices[0].text.trim();
}
