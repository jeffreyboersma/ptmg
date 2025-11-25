// Load individual team member data from JSON and populate the detail page
async function loadTeamMemberDetail() {
    try {
        // Get the name parameter from the URL
        const urlParams = new URLSearchParams(window.location.search);
        const memberName = urlParams.get('name');

        if (!memberName) {
            // No name provided, redirect to team page
            window.location.href = 'team.html';
            return;
        }

        const response = await fetch('/data/people.json');
        const peopleData = await response.json();

        // Find the person in the data
        const personArray = peopleData[memberName];

        if (!personArray || !personArray[0]) {
            // Person not found, redirect to team page
            window.location.href = 'team.html';
            return;
        }

        const person = personArray[0];

        // Update page title
        document.title = `${person.name} | PTMG`;

        // Get the detail container
        const detailContainer = document.getElementById('member-detail');
        if (!detailContainer) return;

        // Create the detail layout
        detailContainer.innerHTML = `
            <div class="member-profile-image">
                <img src="${person.image}" alt="${person.name}">
            </div>
            <div class="member-profile-info">
                <h1>${person.name}</h1>
                <span class="profile-title">${person.title}, ${person.position}</span>
                
                <div class="contact-info-block">
                    <h3>Contact Information</h3>
                    <div class="contact-item">
                        <span class="label">Phone:</span>
                        <a href="tel:${person.phone.replace(/[^0-9]/g, '')}">${person.phone}</a>
                    </div>
                    <div class="contact-item">
                        <span class="label">Email:</span>
                        <a href="mailto:${person.email}">${person.email}</a>
                    </div>
                </div>
                
                <div class="bio-section">
                    <h3>About ${person.name.split(' ')[0]}</h3>
                    <div class="bio-content">
                        ${person.bio.split('\\n').map(paragraph => `<p>${paragraph}</p>`).join('')}
                    </div>
                </div>
            </div>
        `;
    } catch (error) {
        console.error('Error loading team member:', error);
        // Redirect to team page on error
        window.location.href = 'team.html';
    }
}

// Load team member when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadTeamMemberDetail);
} else {
    loadTeamMemberDetail();
}
