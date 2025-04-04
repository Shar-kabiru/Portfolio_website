document.addEventListener('DOMContentLoaded', function() {
    // Set current year in footer
    document.getElementById('year').textContent = new Date().getFullYear();
    
    // Fetch and display all data
    fetchData('about_me', displayAbout);
    fetchData('education', displayEducation);
    fetchData('work_experience', displayExperience);
    fetchData('skills', displaySkills);
    fetchData('projects', displayProjects);
    fetchData('tools', displayTools);
    fetchData('contact', displayContact);
});

async function fetchData(endpoint, callback) {
    try {
        const response = await fetch(`http://localhost:5000/api/${endpoint}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        callback(data);
    } catch (error) {
        console.error(`Error fetching ${endpoint}:`, error);
     
        document.getElementById(containerId).innerHTML = 
            `<p class="error">Failed to load ${endpoint.replace('_', ' ')} data. Please try again later.</p>`;
    }
}

function displayAbout(data) {
    const aboutContent = document.getElementById('about-content');
    aboutContent.innerHTML = `
        <h3>${data.name}</h3>
        <p>${data.age} years old</p>
        <p>${data.description}</p>
        <div class="contact-buttons">
            <a href="mailto:${data.email}" class="contact-btn">
                <i class="fas fa-envelope"></i> Email Me
            </a>
            <a href="tel:${data.phone}" class="contact-btn">
                <i class="fas fa-phone"></i> Call Me
            </a>
        </div>
    `;
}

function displayEducation(data) {
    const container = document.getElementById('education-container');
    container.innerHTML = data.map(edu => `
        <div class="education-item">
            <h3>${edu.institution}</h3>
            <p><strong>${edu.degree}</strong></p>
            <p class="period">${edu.period}</p>
            ${edu.honors ? `<p><em>${edu.honors}</em></p>` : ''}
        </div>
    `).join('');
}

function displayExperience(data) {
    const container = document.getElementById('experience-container');
    container.innerHTML = data.map(exp => `
        <div class="experience-item">
            <h3>${exp.company}</h3>
            <p><strong>${exp.position}</strong></p>
            <p class="period">${exp.period}</p>
            ${exp.description ? `<p>${exp.description}</p>` : ''}
        </div>
    `).join('');
}

function displaySkills(data) {
    const container = document.getElementById('skills-container');
    container.innerHTML = data.map(skill => `
        <div class="skill-card">
            <p><strong>${skill.name}</strong></p>
            <small>${skill.category}</small>
        </div>
    `).join('');
}

function displayProjects(data) {
    const container = document.getElementById('projects-container');
    container.innerHTML = data.map(project => `
        <div class="project-item">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            ${project.category ? `<span class="project-category">${project.category}</span>` : ''}
        </div>
    `).join('');
}

function displayTools(data) {
    const container = document.getElementById('tools-container');
    container.innerHTML = data.map(tool => `
        <div class="tool-item">
            <i class="${tool.icon} tool-icon"></i>
            <span>${tool.name}</span>
        </div>
    `).join('');
}

function displayContact(data) {
    const contactInfo = document.getElementById('contact-info');
    contactInfo.innerHTML = `
        <p><i class="fas fa-phone"></i> ${data.phone}</p>
        <p><i class="fas fa-envelope"></i> <a href="mailto:${data.email}">${data.email}</a></p>
    `;
}