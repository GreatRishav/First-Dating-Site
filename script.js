const heartIcon = document.querySelector('.fa-heart');
const heartCrackIcon = document.querySelector('.fa-heart-crack');

const profiles = document.querySelectorAll('.profile');

// Arrays of people for liked and disliked
const likedProfiles = [
    {
        imgSrc: "https://plus.unsplash.com/premium_photo-1670282393309-70fd7f8eb1ef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z2lybHxlbnwwfHwwfHx8MA%3D%3D",
        name: "Alice",
        age: "22",
        description: "A bookworm and coffee enthusiast."
    },
    {
        imgSrc: "https://images.unsplash.com/photo-1622861431942-b45f2b5b6564?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fHww",
        name: "Bob",
        age: "28",
        description: "Adventure seeker and nature lover."
    },
    {
        imgSrc: "https://plus.unsplash.com/premium_photo-1668319914124-57301e0a1850?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Z2lybHxlbnwwfHwwfHx8MA%3D%3D",
        name: "Carol",
        age: "30",
        description: "Fitness enthusiast and foodie."
    }
];

const dislikedProfiles = [
    {
        imgSrc: "https://plus.unsplash.com/premium_photo-1689977968861-9c91dbb16049?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFufGVufDB8fDB8fHww",
        name: "Dave",
        age: "26",
        description: "Prefers quiet evenings and simple joys."
    },
    {
        imgSrc: "https://images.unsplash.com/photo-1628015081036-0747ec8f077a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z2lybHxlbnwwfHwwfHx8MA%3D%3D",
        name: "Eve",
        age: "35",
        description: "Tech-savvy and a gamer."
    },
    {
        imgSrc: "https://images.unsplash.com/photo-1508341591423-4347099e1f19?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1hbnxlbnwwfHwwfHx8MA%3D%3D",
        name: "Frank",
        age: "40",
        description: "Music lover and aspiring chef."
    }
];

// Index trackers for liked and disliked arrays
let likedIndex = 0;
let dislikedIndex = 0;

// Function to add animations
function addAnimation(profile) {
    profile.classList.add("fade-out");
    setTimeout(() => {
        profile.classList.remove("fade-out");
        profile.classList.add("fade-in");
        setTimeout(() => {
            profile.classList.remove("fade-in");
        }, 500);
    }, 500);
}

// Function to update profiles with animations
function updateProfiles(data, isLiked) {
    profiles.forEach((profile) => {
        // Add animation
        addAnimation(profile);

        // Update content after animation delay
        setTimeout(() => {
            const img = profile.querySelector('.image-section img');
            img.src = data.imgSrc;

            const name = profile.querySelector('.person-name');
            name.textContent = data.name;

            const age = profile.querySelector('.person-age');
            age.textContent = data.age;

            const description = profile.querySelector('.person-desc');
            description.textContent = data.description;
        }, 500);
    });

    // Update index
    if (isLiked) {
        likedIndex = (likedIndex + 1) % likedProfiles.length;
    } else {
        dislikedIndex = (dislikedIndex + 1) % dislikedProfiles.length;
    }
}

// Add click event listeners
heartIcon.addEventListener('click', () => {
    updateProfiles(likedProfiles[likedIndex], true);
});

heartCrackIcon.addEventListener('click', () => {
    updateProfiles(dislikedProfiles[dislikedIndex], false);
});
