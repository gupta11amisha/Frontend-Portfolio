document.addEventListener('DOMContentLoaded', () => {
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            document.querySelector('.main').style.backgroundImage = `url(${data.backgroundImage})`;
            document.getElementById('name').textContent = data.name;
            document.querySelector('.info h2').innerHTML = `<span>F</span>RONTEND <span>D</span>EVELOPER`;
            document.getElementById('hireMeButton').textContent = data.buttonText;
            document.getElementById('profileImage').src = data.image;
            document.getElementById('linkedin').href = data.socials.linkedin;
            document.getElementById('linkedin').title = `Visit my LinkedIn: ${data.socials.linkedin}`;
            document.getElementById('instagram').href = data.socials.instagram;
            document.getElementById('instagram').title = `Visit my Instagram: ${data.socials.instagram}`;
            document.getElementById('gmail').href = data.socials.gmail;
            document.getElementById('websiteURL').href = data.socials.websiteURL;
            document.getElementById('aboutText').textContent = data.about; // Set the about text
        })
        .catch(error => console.error('Error fetching the JSON data:', error));
});
