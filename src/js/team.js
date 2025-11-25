// Load team member data from JSON and populate the team grid
async function loadTeamMembers() {
    try {
        const response = await fetch('/data/people.json');
        const peopleData = await response.json();

        const teamGrid = document.getElementById('team-grid');
        if (!teamGrid) return;

        // Clear existing content
        teamGrid.innerHTML = '';

        // Iterate through each person in the JSON
        Object.values(peopleData).forEach(personArray => {
            const person = personArray[0]; // Each person is wrapped in an array

            // Truncate bio to 10 words
            const bioWords = person.bio.split(' ');
            const truncatedBio = bioWords.slice(0, 10).join(' ') + '...';

            // Create the team member card as a clickable link
            const card = document.createElement('a');
            card.href = `team-member.html?name=${encodeURIComponent(person.name)}`;
            card.className = 'team-member-card-link';

            card.innerHTML = `
                <div class="team-member-card">
                    <div class="member-image">
                        <img src="${person.image}" alt="${person.name}">
                    </div>
                    <div class="member-info">
                        <h3>${person.name}</h3>
                        <span class="job-title">${person.title}, ${person.position}</span>
                        <p class="bio">${truncatedBio}</p>
                        <span class="learn-more-btn">Learn More →</span>
                    </div>
                </div>
            `;

            teamGrid.appendChild(card);
        });
    } catch (error) {
        console.error('Error loading team members:', error);
    }
}

// Load team members when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadTeamMembers);
} else {
    loadTeamMembers();
}
