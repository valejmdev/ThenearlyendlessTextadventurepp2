document.addEventListener('DOMContentLoaded', function () {
    // Page Load Function pasting username in H1
    if (document.title !== 'The nearly endless Text-Adventure Login') {
        const usernameSpan = document.getElementById('headline-username');
        const storedUsername = sessionStorage.getItem('username');
        usernameSpan.textContent = storedUsername;
    }

    // Theme Selector Page
    const themeForm = document.getElementById('theme-selector-form');
    if (themeForm) {
        themeForm.addEventListener('submit', function (event) {
            event.preventDefault();
            let themeSelection = document.getElementById('theme');
            console.log(themeSelection);
            let themeValue = themeSelection.value;
            console.log(themeValue);
            sessionStorage.setItem('theme', themeValue);
            themeForm.submit();
        });
    }
    const themeSpan = document.getElementById('headline-theme');
    const storedTheme = sessionStorage.getItem('theme');
    themeSpan.textContent = storedTheme;
});
const startForm = document.getElementById('username-form');
const usernameInput = document.getElementById('username');
document.getElementById('username-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const username = usernameInput.value;
    sessionStorage.setItem('username', username);
    startForm.submit();
});

//Gametext variable

const gameStorySelection = [
    {
        id: 1,
        text: 'You find yourself standing at the entrance of an enchanted forest. The path splits into four directions. Which way do you choose?',
        options: [
            {
                text:'Left Path',
                nextText: 2
            },
            {
                text:'Right Path',
                nextText: 3
            },
            {
                text:'Straight Ahead',
                nextText: 4
            },
            {
                text:'Turn Back',
                nextText: 5
            },
        ]        
    },
    {
        id: 2,
        text: 'You follow the left path and stumble upon a hidden cave. Inside, you find a treasure chest filled with gold coins and gems. However, as you reach for the treasure, you trigger a trap, and the cave collapses. You barely manage to escape, losing some health in the process. As you venture further into the forest, you encounter a mysterious figure standing in your path. How do you approach the situation?',
        options: [
            {
                text:'Approach with Caution',
                nextText: 6
            },
            {
                text:'Run Away',
                nextText: 7
            },
            {
                text:'Engage in Conversation',
                nextText: 8
            },
            {
                text:'Ignore and Continue',
                nextText: 9
            },
        ]        
    },
    {
        id: 3,
        text: 'You take the right path and encounter a group of friendly woodland creatures. They offer to guide you through the forest safely. Following their lead, you reach a magical clearing where you are granted a special charm that protects you from harm for a limited time. As you venture further into the forest, you encounter a mysterious figure standing in your path. How do you approach the situation?',
        options: [
            {
                text:'Approach with Caution',
                nextText: 6
            },
            {
                text:'Run Away',
                nextText: 7
            },
            {
                text:'Engage in Conversation',
                nextText: 8
            },
            {
                text:'Ignore and Continue',
                nextText: 9
            },
        ]        
    },
    {
        id: 4,
        text: 'You choose the path straight ahead and come across a mystical pond. As you approach, you see your reflection shimmering in the water. Suddenly, the reflection reaches out and pulls you into the pond. You find yourself in an underwater cavern, where you discover a hidden passage leading deeper into the forest. As you venture further into the forest, you encounter a mysterious figure standing in your path. How do you approach the situation?',
        options: [
            {
                text:'Approach with Caution',
                nextText: 6
            },
            {
                text:'Run Away',
                nextText: 7
            },
            {
                text:'Engage in Conversation',
                nextText: 8
            },
            {
                text:'Ignore and Continue',
                nextText: 9
            },
        ]        
    },
    {
        id: 5,
        text: 'Feeling uncertain, you decide to turn back and leave the forest. However, as you try to exit, you realize the path behind you has vanished. Trapped in the forest, you must now find a way to navigate through its enchantments. As you venture further into the forest, you encounter a mysterious figure standing in your path. How do you approach the situation?',
        options: [
            {
                text:'Approach with Caution',
                nextText: 6
            },
            {
                text:'Run Away',
                nextText: 7
            },
            {
                text:'Engage in Conversation',
                nextText: 8
            },
            {
                text:'Ignore and Continue',
                nextText: 9
            },
        ]        
    },
    {
        id: 6,
        text: 'You cautiously approach the figure and realize it is a friendly forest guardian. They offer you guidance and provide you with a map of the forest, marking safe routes and potential dangers. As you near the heart of the forest, you sense a powerful presence lurking ahead. How do you prepare for the final confrontation?',
        options: [
            {
                text:'Gather Resources',
                nextText: 10
            },
            {
                text:'Seek Allies',
                nextText: 11
            },
            {
                text:'Meditate and Reflect',
                nextText: 12
            },
            {
                text:'Ignore and Continue',
                nextText: 13
            },
        ]        
    },
    {
        id: 7,
        text: 'Fearing the unknown, you turn and run in the opposite direction. However, you soon find yourself lost in the labyrinthine pathways of the forest, making your journey even more perilous. As you near the heart of the forest, you sense a powerful presence lurking ahead. How do you prepare for the final confrontation?',
        options: [
            {
                text:'Gather Resources',
                nextText: 10
            },
            {
                text:'Seek Allies',
                nextText: 11
            },
            {
                text:'Meditate and Reflect',
                nextText: 12
            },
            {
                text:'Ignore and Continue',
                nextText: 13
            },
        ]        
    },
    {
        id: 8,
        text: 'You decide to strike up a conversation with the figure. Through the exchange, you learn valuable information about the forest secrets and receive a magical amulet that grants you the ability to communicate with animals. As you near the heart of the forest, you sense a powerful presence lurking ahead. How do you prepare for the final confrontation?',
        options: [
            {
                text:'Gather Resources',
                nextText: 10
            },
            {
                text:'Seek Allies',
                nextText: 11
            },
            {
                text:'Meditate and Reflect',
                nextText: 12
            },
            {
                text:'Ignore and Continue',
                nextText: 13
            },
        ]        
    },
    {
        id: 9,
        text: 'You choose to ignore the figure and continue on your path. As you walk away, you feel a strange sensation wash over you, as if you have missed out on an important opportunity. As you near the heart of the forest, you sense a powerful presence lurking ahead. How do you prepare for the final confrontation?',
        options: [
            {
                text:'Gather Resources',
                nextText: 10
            },
            {
                text:'Seek Allies',
                nextText: 11
            },
            {
                text:'Meditate and Reflect',
                nextText: 12
            },
            {
                text:'Ignore and Continue',
                nextText: 13
            },
        ]        
    }
    //Have to add a text, that has no next text and will be displayed on engame page. research
]