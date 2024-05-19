document.addEventListener('DOMContentLoaded', function () {
    //Theme display in sidebar
    const themeSpan = document.getElementById('headline-theme');
    const storedTheme = sessionStorage.getItem('theme');
    themeSpan.textContent = storedTheme;

    // Page Load Function pasting username in sidebar
    const usernameSpan = document.getElementById('headline-username');
    const storedUsername = sessionStorage.getItem('username');
    usernameSpan.textContent = storedUsername;

    //Gametext variable
    /*const gameStorySelection = [{
            id: 1,
            text: 'You find yourself standing at the entrance of an enchanted forest. The path splits into four directions. Which way do you choose?',
            options: [{
                    text: 'Left Path',
                    nextText: 2
                },
                {
                    text: 'Right Path',
                    nextText: 3
                },
                {
                    text: 'Straight Ahead',
                    nextText: 4
                },
                {
                    text: 'Turn Back',
                    nextText: 5
                },
            ]
        },
        {
            id: 2,
            text: 'You follow the left path and stumble upon a hidden cave. Inside, you find a treasure chest filled with gold coins and gems. However, as you reach for the treasure, you trigger a trap, and the cave collapses. You barely manage to escape, losing some health in the process. As you venture further into the forest, you encounter a mysterious figure standing in your path. How do you approach the situation?',
            options: [{
                    text: 'Approach with Caution',
                    nextText: 6
                },
                {
                    text: 'Run Away',
                    nextText: 7
                },
                {
                    text: 'Engage in Conversation',
                    nextText: 8
                },
                {
                    text: 'Ignore and Continue',
                    nextText: 9
                },
            ]
        },
        {
            id: 3,
            text: 'You take the right path and encounter a group of friendly woodland creatures. They offer to guide you through the forest safely. Following their lead, you reach a magical clearing where you are granted a special charm that protects you from harm for a limited time. As you venture further into the forest, you encounter a mysterious figure standing in your path. How do you approach the situation?',
            options: [{
                    text: 'Approach with Caution',
                    nextText: 6
                },
                {
                    text: 'Run Away',
                    nextText: 7
                },
                {
                    text: 'Engage in Conversation',
                    nextText: 8
                },
                {
                    text: 'Ignore and Continue',
                    nextText: 9
                },
            ]
        },
        {
            id: 4,
            text: 'You choose the path straight ahead and come across a mystical pond. As you approach, you see your reflection shimmering in the water. Suddenly, the reflection reaches out and pulls you into the pond. You find yourself in an underwater cavern, where you discover a hidden passage leading deeper into the forest. As you venture further into the forest, you encounter a mysterious figure standing in your path. How do you approach the situation?',
            options: [{
                    text: 'Approach with Caution',
                    nextText: 6
                },
                {
                    text: 'Run Away',
                    nextText: 7
                },
                {
                    text: 'Engage in Conversation',
                    nextText: 8
                },
                {
                    text: 'Ignore and Continue',
                    nextText: 9
                },
            ]
        },
        {
            id: 5,
            text: 'Feeling uncertain, you decide to turn back and leave the forest. However, as you try to exit, you realize the path behind you has vanished. Trapped in the forest, you must now find a way to navigate through its enchantments. As you venture further into the forest, you encounter a mysterious figure standing in your path. How do you approach the situation?',
            options: [{
                    text: 'Approach with Caution',
                    nextText: 6
                },
                {
                    text: 'Run Away',
                    nextText: 7
                },
                {
                    text: 'Engage in Conversation',
                    nextText: 8
                },
                {
                    text: 'Ignore and Continue',
                    nextText: 9
                },
            ]
        },
        {
            id: 6,
            text: 'You cautiously approach the figure and realize it is a friendly forest guardian. They offer you guidance and provide you with a map of the forest, marking safe routes and potential dangers. As you near the heart of the forest, you sense a powerful presence lurking ahead. How do you prepare for the final confrontation?',
            options: [{
                    text: 'Gather Resources',
                    nextText: 10
                },
                {
                    text: 'Seek Allies',
                    nextText: 11
                },
                {
                    text: 'Meditate and Reflect',
                    nextText: 12
                },
                {
                    text: 'Ignore and Continue',
                    nextText: 13
                },
            ]
        },
        {
            id: 7,
            text: 'Fearing the unknown, you turn and run in the opposite direction. However, you soon find yourself lost in the labyrinthine pathways of the forest, making your journey even more perilous. As you near the heart of the forest, you sense a powerful presence lurking ahead. How do you prepare for the final confrontation?',
            options: [{
                    text: 'Gather Resources',
                    nextText: 10
                },
                {
                    text: 'Seek Allies',
                    nextText: 11
                },
                {
                    text: 'Meditate and Reflect',
                    nextText: 12
                },
                {
                    text: 'Ignore and Continue',
                    nextText: 13
                },
            ]
        },
        {
            id: 8,
            text: 'You decide to strike up a conversation with the figure. Through the exchange, you learn valuable information about the forest secrets and receive a magical amulet that grants you the ability to communicate with animals. As you near the heart of the forest, you sense a powerful presence lurking ahead. How do you prepare for the final confrontation?',
            options: [{
                    text: 'Gather Resources',
                    nextText: 10
                },
                {
                    text: 'Seek Allies',
                    nextText: 11
                },
                {
                    text: 'Meditate and Reflect',
                    nextText: 12
                },
                {
                    text: 'Ignore and Continue',
                    nextText: 13
                },
            ]
        },
        {
            id: 9,
            text: 'You choose to ignore the figure and continue on your path. As you walk away, you feel a strange sensation wash over you, as if you have missed out on an important opportunity. As you near the heart of the forest, you sense a powerful presence lurking ahead. How do you prepare for the final confrontation?',
            options: [{
                    text: 'Gather Resources',
                    nextText: 10
                },
                {
                    text: 'Seek Allies',
                    nextText: 11
                },
                {
                    text: 'Meditate and Reflect',
                    nextText: 12
                },
                {
                    text: 'Ignore and Continue',
                    nextText: 13
                },
            ]
        },
        {
            id: 10,
            text: "You take the time to gather herbs and materials from the forest, concocting potions and crafting weapons to aid you in the upcoming battle. Your preparation pays off as you enter the final showdown feeling well-equipped. With your arsenal of potions and weapons at the ready, you face the final confrontation with confidence. The creature stands before you, its imposing form casting a long shadow over the forest floor. But you refuse to back down, drawing upon the strength of your preparations as you launch into battle. Each potion you've brewed and every weapon you've crafted serves you well as you engage in a fierce struggle with the creature. With each blow you land, you feel a surge of triumph course through your veins, driving you forward with renewed determination. Finally, with a mighty roar, the creature falls, defeated at last. As the forest falls silent around you, you stand victorious, your courage and resourcefulness shining bright. Though your journey has been fraught with peril, you emerge from the depths of the enchanted forest stronger and more resilient than ever before.",
            options: [{
                    text: '',
                    nextText: 0
                },
                {
                    text: '',
                    nextText: 0
                },
                {
                    text: '',
                    nextText: 0
                },
                {
                    text: '',
                    nextText: 0
                },
            ]
        },
        {
            id: 11,
            text: "You seek out the help of the woodland creatures you encountered earlier, rallying them to your side for the impending battle. With their combined strength, you face the final challenge with courage and unity. United with your newfound allies, you stand shoulder to shoulder as you confront the creature that blocks your path. The woodland creatures stand firm beside you, their eyes blazing with determination as they prepare to fight by your side. With a primal roar, the creature charges forward, but you and your allies meet its onslaught with unwavering resolve. Together, you fight as one, each of you lending your strength to the others as you battle against the forces of darkness. In the end, it is your combined efforts that lead to victory. As the creature falls before you, defeated by your unity and determination, you share a moment of triumph with your allies. Though your journey through the enchanted forest has been perilous, you emerge from its depths stronger and closer than ever before, bound together by the bonds of friendship and shared adversity.",
            options: [{
                    text: '',
                    nextText: 0
                },
                {
                    text: '',
                    nextText: 0
                },
                {
                    text: '',
                    nextText: 0
                },
                {
                    text: '',
                    nextText: 0
                },
            ]
        },
        {
            id: 12,
            text: "Instead of rushing into battle, you take a moment to meditate and reflect on your journey so far. Through introspection, you uncover hidden strengths and unlock new powers within yourself, readying your spirit for the trials ahead. With a calm mind and a focused heart, you enter the final confrontation with a newfound sense of inner strength. The creature looms before you, its eyes gleaming with malice, but you stand your ground, knowing that you are more than capable of facing whatever challenges lie ahead. Drawing upon the power of your meditation, you unleash a torrent of energy against the creature, channeling your newfound strength into every strike. With each blow you land, you feel a deep sense of connection to the world around you, as if the very forest itself is lending you its strength. In the end, it is not just physical prowess that leads to victory, but the power of your spirit. As the creature falls before you, defeated by the strength of your inner resolve, you emerge from the enchanted forest with a newfound sense of purpose and self-assurance, ready to face whatever adventures lie ahead.",
            options: [{
                    text: '',
                    nextText: 0
                },
                {
                    text: '',
                    nextText: 0
                },
                {
                    text: '',
                    nextText: 0
                },
                {
                    text: '',
                    nextText: 0
                },
            ]

        },
        {
            id: 13,
            text: "Impatient to reach the end of your quest, you charge forward without any preparation. As a result, you find yourself facing the final confrontation under-equipped and vulnerable, making the battle much more difficult. With no potions to bolster your strength and no allies to aid you in battle, you face the creature alone, armed with nothing but your own courage and determination. The odds are stacked against you, but you refuse to back down, meeting the creature's onslaught head-on with unwavering resolve. The battle is long and arduous, each blow you land taking its toll on your weary body. But still, you press on, driven by sheer determination and a refusal to admit defeat. Though the creature's strength seems limitless, so too is your will to survive. Finally, with a final, desperate strike, you deliver the decisive blow that brings the creature crashing to the forest floor. As you stand victorious amidst the wreckage of the battle, you realize that true strength comes not from potions or weapons, but from the indomitable spirit that lies within. With this knowledge in your heart, you emerge from the enchanted forest, battered but unbroken, ready to face whatever challenges the future may hold.",
            options: [{
                    text: '',
                    nextText: 0
                },
                {
                    text: '',
                    nextText: 0
                },
                {
                    text: '',
                    nextText: 0
                },
                {
                    text: '',
                    nextText: 0
                },
            ]

        },
    ]*/
    // Initialize the game with the first story or from sessionStorage
    currentStoryId = parseInt(sessionStorage.getItem('currentStoryId')) || 1;
    updateStory(currentStoryId);

    //function to update the storyId
    function updateStory(storyId) {
        const story = gameStorySelection.find(story => story.id === storyId);
        if (!story) {
            console.error('Story not found for id:', storyId);
            return;
        }
        // If the story id is 10 or greater, redirect to endgame.html
        if (story.id >= 10) {
            sessionStorage.setItem('endgameText', story.text);
            window.location.href = 'endgame.html';
            return;
        }
        // Update the game text
        const gameTextDiv = document.getElementById('game-text');
        gameTextDiv.innerHTML = story.text;

        // Update the buttons
        const optionButtons = document.querySelectorAll('.option-button');
        story.options.forEach((option, index) => {
            optionButtons[index].innerHTML = option.text;
            optionButtons[index].addEventListener('click', (e) => {
                if (option.nextText >= 10) {
                    const nextStory = gameStorySelection.find(story => story.id === option.nextText);
                    sessionStorage.setItem('endgameText', nextStory.text);
                    window.location.href = 'endgame.html';
                } else {
                    sessionStorage.setItem('currentStoryId', option.nextText);
                    updateStory(option.nextText);
                }
            });
        });
        // Hide any extra buttons (in case some stories have fewer than 4 options)
        for (let i = story.options.length; i < optionButtons.length; i++) {
            optionButtons[i].style.display = 'none';
        }
    }


});

// function for API of groq.com's llama3 AI Model that writes the story 
async function apiCall(username, theme, history, lastChoice) {
    //API Key is empty on purpose on commit and push for now, as safe storage has to be discussed
    const apiKey = '';
    let prompt;
    let systemMessage;
    //Prompt for this textadventure, that takes username, theme, last choice and history of the story to create a full expierience
    prompt = 
        `Theme: ${theme}
        Username: ${username}
        The last user input was: ${lastChoice}`;
    systemMessage = `You are a writer for a text-based adventure game. You write a story while paying attention to the last user input, theme, and name!
        Answer in this Format (json):
        """
        {
        "story": "(short part of the story, max 400 characters)",
        "options": {
            "1": "(max 4 words to continue the story)",
            "2": "(max 4 words to continue the story)",
            "3": "(max 4 words to continue the story)",
            "4": "(max 4 words to continue the story)"
            }
        }
    """ 
    What happened before: ${history}`;
    }
    //fetch method of the response the AI gives, that gives the response in a JSON Format 
    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
            messages: [
                { role: 'system', content: systemMessage },
                { role: 'user', content: prompt }
            ],
            model: 'llama3-8b-8192',
            temperature: 1,
            max_tokens: requestHappyEnding ? 4096 : 1024,
            top_p: 1,
            stream: false,
            stop: null
        })
    });
