document.addEventListener('DOMContentLoaded', function () {
    //Theme display in sidebar
    const themeSpan = document.getElementById('headline-theme');
    const storedTheme = sessionStorage.getItem('theme');
    themeSpan.textContent = storedTheme;

    // Page Load Function pasting username in sidebar
    const usernameSpan = document.getElementById('headline-username');
    const storedUsername = sessionStorage.getItem('username');
    usernameSpan.textContent = storedUsername;

    //variables to use in the function that updates the story
    const username = sessionStorage.getItem('username');
    const theme = sessionStorage.getItem('theme');
    let history = "Start of the adventure";
    let currentPart = 0;

    //Function that updates the story
    async function updateStory(choice) {
        try {
            const result = await apiCall(username, theme, history, choice, currentPart >= 6);
            const story = result.story;
            const options = result.options;

            //Counting the Part of the story
            history = history + " " + choice;
            currentPart = currentPart + 1;

            //if statement, checking if part 7 is reached, then redirecting to the endgame page storing the text the ai created in session storage.
            if (currentPart >= 7) {
                sessionStorage.setItem('endgameText', story);
                window.location.href = 'endgame.html';
                return;
            }

            //pasting the Text into the game text div
            const gameTextDiv = document.getElementById('game-text');
            gameTextDiv.innerHTML = story;

            //Updating the Text in the buttons for the text adventure 
            const optionButtons = document.querySelectorAll('.option-button');
            let optionIndex = 0;
            for (const key in options) {
                if (options.hasOwnProperty(key)) {
                    optionButtons[optionIndex].style.display = 'inline-block';
                    optionButtons[optionIndex].innerHTML = options[key];
                    optionButtons[optionIndex].onclick = function () {
                        updateStory(options[key]);
                    };
                    optionIndex = optionIndex + 1;
                }
            }

            //Check for empty buttons and hiding them
            for (let i = optionIndex; i < optionButtons.length; i++) {
                optionButtons[i].style.display = 'none';
            }

            //Error handling if the story can't be updated
        } catch (error) {
            console.log('Error fetching story:', error);
        }
    }

    updateStory("nothing");

    // function for API of groq.com's llama3 AI Model that writes the story 
    async function apiCall(username, theme, history, lastChoice, requestHappyEnding) {

        //API Key is temporary on purpose, as safe storage has to be discussed
        const apiKey = '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';
        let prompt;
        let systemMessage;

        //On part 7 the requestHappyEnding is triggered, creating a longer more defined prompt to end the story, without any more options
        if (requestHappyEnding) {
            prompt = `Theme: ${theme}
    Username: ${username}
    The last user input was: ${lastChoice}`;
            systemMessage = `You are a writer for a text-based adventure game. Please conclude the story with a happy ending, considering the following history and user inputs. The conclusion should be more than 1000 characters.
    Answer in this Format (json):
    """
    {
        "story": "(happy ending of the story, max 2000 characters)",
        "options": {}
    }
    """ 
    What happened before: ${history}`;
        }
        //Prompt for the textadventure, that takes username, theme, last choice and history of the story to create a full expierience
        else {

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
                messages: [{
                        role: 'system',
                        content: systemMessage
                    },
                    {
                        role: 'user',
                        content: prompt
                    }
                ],
                model: 'llama3-8b-8192',
                temperature: 1,
                max_tokens: requestHappyEnding ? 4096 : 1024,
                top_p: 1,
                stream: false,
                stop: null
            })
        });

        //response check for error handling, if there is no value
        if (response.ok) {
            const data = await response.json();
            return JSON.parse(data.choices[0].message?.content);
        } else {
            const errorData = await response.json();
            console.log('Error:', errorData);
        }

    }
});