const gameData = {
	"1": {
		"text": "It’s finally the day of the big mission. Are you ready?",
        //"image" : "smaller_images/snackies.png",
"choices": {
			"I’ve planned everything out for this moment": [2,["INTJ", "ENTJ", "INFJ", "ENFJ", "ISTJ", "ISFJ", "ESTJ", "ESFJ"]],
			"I trust myself, I’ll be fine": [2,["INTP", "ENTP", "INFP", "ENFP", "ISTP", "ISFP", "ESTP", "ESFP"]]
		}
	};

	"2": {
		"text": "Perfect. There’s some downtime before launch, what would you like to do?",
        //"image" : "smaller_images/snackies.png",
"choices": {
			"Meet my team in the mess hall": [3,["ENTJ", "ENFJ", "ESTJ", "ESFJ", "ENTP", "ENFP", "ESTP", "ESFP"]],
			"Spend the morning alone": [4,["INTJ", "INFJ", "ISTJ", "ISFJ", "INTP", "INFP", "ISTP", "ISFP"]]
		}
	};

	"3": {
		"text": "Your team is chatting and laughing about… something. You see they’re crowded around a picture of what appears to be a fish superimposed on a picture of you. You…",
		//"image" : "smaller_images/snackies.png",
"choices": {
			"Are upset they’d make fun of you behind your back": [5,["INTJ", "ENTJ", "ISTJ", "ESTJ", "INTP", "ENTP", "ISTP", "ESTP"]],
			"Laugh heartily at the picture, pleased that they’ve been thinking of you": [5,["INFJ", "ENFJ", "ISFJ", "ESFJ", "INFP", "ENFP", "ISFP", "ESFP"]]
		}
	};

	"5": {
		"text": "You chat the morning away, and discover that one of your teammates had been up all night superimposing pictures of fish over everyone. It’s strange, but you have fun in the end. You feel…",
		//"image" : "smaller_images/snackies.png",
"choices": {
			"A little drained from interacting with so many people for so long": [6,["INTJ", "INFJ", "ISTJ", "ISFJ", "INTP", "INFP", "ISTP", "ISFP"]],
			"Energized from having fun": [6,["ENTJ", "ENFJ", "ESTJ", "ESFJ", "ENTP", "ENFP", "ESTP", "ESFP"]]
		}
	};

	"4": {
		"text": "Before you can relax, a knock sounds on the door. It’s a teammate, and they’re crying. They tell you they’re nervous about today. You…",
		//"image" : "smaller_images/snackies.png",
"choices": {
			"Help them work through the problem": [7,["INTJ", "ENTJ", "ISTJ", "ESTJ", "INTP", "ENTP", "ISTP", "ESTP"]],
			"Listen and empathize with them": [7,["INFJ", "ENFJ", "ISFJ", "ESFJ", "INFP", "ENFP", "ISFP", "ESFP"]]
		}
	};

	"7": {
		"text": "Finally, everything’s settled down, and you’re ready to set off. You are…",
		//"image" : "smaller_images/snackies.png",
"choices": {
			"Happy you could help a teammate in need": [6,["ENTJ", "ENFJ", "ESTJ", "ESFJ", "ENTP", "ENFP", "ESTP", "ESFP"]],
			"A little tired, you wish you’d had the morning to yourself": [6,["INTJ", "INFJ", "ISTJ", "ISFJ", "INTP", "INFP", "ISTP", "ISFP"]]
		}
	};

	"6": {
		"text": "Your team is going over the breach plan once more, to iron everything out. You…",
		//"image" : "smaller_images/snackies.png",
"choices": {
			"Review the plan and make certain you have it down": [8,["ISTJ", "ISFJ", "ISTP", "ISFP", "ESFJ", "ESTP", "ESFP", "ESTJ"]],
			"Contribute ideas and theories for unpredictable situations": [8,["ENTJ", "ENFJ", "ENTP", "ENFP", "INTJ", "INFJ", "INTP", "INFP"]]
		}
	};

	"8": {
		"text": "You’ve arrived, and you’re ready to breach! Which group are you a part of?",
		//"image" : "smaller_images/snackies.png",
"choices": {
			"We’re storming the front!": [9,["INTP", "ENTP", "INFP", "ENFP", "ISTP", "ISFP", "ESTP", "ESFP"]],
			"We're sneaking through the back.": [10,["INTJ", "ENTJ", "INFJ", "ENFJ", "ISTJ", "ISFJ", "ESTJ", "ESFJ"]]
		}
	};

	"9": {
		"text": "You’re due up front; your team’s goal is to provide a diversion for the team sneaking through the back! How do you enter?",
		//"image" : "smaller_images/snackies.png",
"choices": {
			"I’ve planned an itinerary, and I’ll act it out to the last detail": [11,["ISTJ", "ISFJ", "ISTP", "ISFP", "ESFJ", "ESTP", "ESFP", "ESTJ"]],
			"I’ll ad-lib– it’s not that hard to cause a ruckus": [11,["ENTJ", "ENFJ", "ENTP", "ENFP", "INTJ", "INFJ", "INTP", "INFP"]]
		}
	};

	"11": {
		"text": "You’ve entered the front– messily indeed– and one of your team members appears to be struggling. What do you do?",
		//"image" : "smaller_images/snackies.png",
"choices": {
			"Assist them, they can’t compromise our mission": [12,["INTJ", "ENTJ", "ISTJ", "ESTJ", "INTP", "ENTP", "ISTP", "ESTP"]],
			"Lend them an ear, you want to understand how they’re feeling so you can help": [12,["INFJ", "ENFJ", "ISFJ", "ESFJ", "INFP", "ENFP", "ISFP", "ESFP"]]
		}
	};

	"12": {
		"text": "They appear to be having a hard time talking. You’re on standby for the time being, and have time to decide how to make them talk. You...",
		//"image" : "smaller_images/snackies.png",
"choices": {
			"Sit by them quietly. They’ll talk when they need to": [13,["INTJ", "INFJ", "ISTJ", "ISFJ", "INTP", "INFP", "ISTP", "ISFP"]],
			"Chat about things you know will relax them": [13,["ENTJ", "ENFJ", "ESTJ", "ESFJ", "ENTP", "ENFP", "ESTP", "ESFP"]]
		}
	};

	"13": {
		"text": "When the truth gets out, it’s nastier than you ever expected. There’s a traitor! It seems this person caught them sneaking a message to the enemy as your team entered the building. There’s only one problem– everyone had their masks on, and they don’t know who it was. You...",
		//"image" : "smaller_images/snackies.png",
"choices": {
			"Spend time gathering information from all your teammates": [14,["INTP", "ENTP", "INFP", "ENFP", "ISTP", "ISFP", "ESTP", "ESFP"]],
			"Gather all the important parts quickly– the faster you implement a plan, the better": [14,["INTJ", "ENTJ", "INFJ", "ENFJ", "ISTJ", "ISFJ", "ESTJ", "ESFJ"]]
		}
	};

	"14": {
		"text": "How do you figure out who the traitor is?",
		//"image" : "smaller_images/snackies.png",
"choices": {
			"Analyze the past information you have about your teammates and come to the most practical conclusion": [15,["ISTJ", "ISFJ", "ISTP", "ISFP", "ESFJ", "ESTP", "ESFP", "ESTJ"]],
			"Branch your thoughts out, think outside of what you know": [15,["ENTJ", "ENFJ", "ENTP", "ENFP", "INTJ", "INFJ", "INTP", "INFP"]]
		}
	};

	"15": {
		"text": "You’ve cracked the code! After apprehending the traitor, you consider how the traitor’s actions may have impacted the mission.",
		//"image" : "smaller_images/snackies.png",
"choices": {
			"You must change all immediate plans to ensure the safety of the rear team! The faster we act, the safer.": [16,["ISTJ", "ISFJ", "ISTP", "ISFP", "ESFJ", "ESTP", "ESFP", "ESTJ"]],
			"The plan might have a butterfly effect– changing too much about our current actions gives us less power. Anticipate the future, and move based on that.": [16,["ENTJ", "ENFJ", "ENTP", "ENFP", "INTJ", "INFJ", "INTP", "INFP"]]
		}
	};

	"16": {
		"text": "It’s about time the rear group finds the target– and you’ve ensured they’ve made it there safely. Now, it’s time to deal with the traitor. You…",
		//"image" : "smaller_images/snackies.png",
"choices": {
			"Kill them– death is the price of betrayal in your organization": [17,["INTJ", "ENTJ", "ISTJ", "ESTJ", "INTP", "ENTP", "ISTP", "ESTP"]],
			"Spare them– first, you need to listen to why they did it. You can take your time interrogating them, later": [17,["INFJ", "ENFJ", "ISFJ", "ESFJ", "INFP", "ENFP", "ISFP", "ESFP"]]
		}
	};

	"10": {
		"text": "Your group has split into two teams, and your team is storming the back. All of a sudden, you notice that there’s a trap! You recognize it immediately, as you’ve dealt with a similar situation before. How will you handle it?",
		//"image" : "smaller_images/snackies.png",
"choices": {
			"Think with my team members– three heads is better than one!": [18,["ENTJ", "ENFJ", "ESTJ", "ESFJ", "ENTP", "ENFP", "ESTP", "ESFP"]],
			"Come up with an idea by myself, and then pitch it.": [18,["INTJ", "INFJ", "ISTJ", "ISFJ", "INTP", "INFP", "ISTP", "ISFP"]]
		}
	};

	"18": {
		"text": "What ideas do you pitch?",
		//"image" : "smaller_images/snackies.png",
"choices": {
			"Use your past experience to mitigate the issue safely": [19,["ISTJ", "ISFJ", "ISTP", "ISFP", "ESFJ", "ESTP", "ESFP", "ESTJ"]],
			"Come up with a new solution based on the unique situation you’re in": [19,["ENTJ", "ENFJ", "ENTP", "ENFP", "INTJ", "INFJ", "INTP", "INFP"]]
		}
	};

	"19": {
		"text": "Your idea is…",
		//"image" : "smaller_images/snackies.png",
"choices": {
			"Logical and effective": [20,["ISTJ", "ISFJ", "ISTP", "ISFP", "ESFJ", "ESTP", "ESFP", "ESTJ"]],
			"Creative and out-of-the-box": [20,["ENTJ", "ENFJ", "ENTP", "ENFP", "INTJ", "INFJ", "INTP", "INFP"]]
		}
	};

	"20": {
		"text": "Due to the trap, your entrance changes, and the specific route you’d memorized isn’t helpful here. Luckily, you’re not worried, because",
		//"image" : "smaller_images/snackies.png",
"choices": {
			"you memorized everything to prepare for every unexpected turn": [21,["INTJ", "ENTJ", "INFJ", "ENFJ", "ISTJ", "ISFJ", "ESTJ", "ESFJ"]],
			"you’re used to unexpected changes and good at adapting": [21,["INTP", "ENTP", "INFP", "ENFP", "ISTP", "ISFP", "ESTP", "ESFP"]]
		}
	};

	"21": {
		"text": "As you rush through the building, your mind spins. What are you thinking about?",
		//"image" : "smaller_images/snackies.png",
"choices": {
			"The present– what I’m doing, and how I’m doing it": [22,["ISTJ", "ISFJ", "ISTP", "ISFP", "ESFJ", "ESTP", "ESFP", "ESTJ"]],
			"The future– what I need to accomplish, and how I’ll do it": [22,[ "ENTJ", "ENFJ", "ENTP", "ENFP", "INTJ", "INFJ", "INTP", "INFP"]]
		}
	};

	"22": {
		"text": "Uh oh– you’re faced with a blockade you hadn’t anticipated. Your teammates, behind you, appear to be panicking. What do you do?",
		//"image" : "smaller_images/snackies.png",
"choices": {
			"Consider the most practical way around the blockade, tell your teammates to follow– it’s faster": [23,["INTJ", "ENTJ", "ISTJ", "ESTJ", "INTP", "ENTP", "ISTP", "ESTP"]],
			"Anticipate how your team dynamic works and instruct based on their individual feelings and skills": [23,["INFJ", "ENFJ", "ISFJ", "ESFJ", "INFP", "ENFP", "ISFP", "ESFP"]]
		}
	};

	"23": {
		"text": "Bingo, you found your target! As soon as they see you, they drop to their knees and start begging for their life. You…",
		//"image" : "smaller_images/snackies.png",
"choices": {
			"Kill them. It’s your mission.": [17,["INTJ", "ENTJ", "ISTJ", "ESTJ", "INTP", "ENTP", "ISTP", "ESTP"]],
			"Spare them. They’ve surrendered, maybe you can work around this.": [17,["INFJ", "ENFJ", "ISFJ", "ESFJ", "INFP", "ENFP", "ISFP", "ESFP"]]
		}
	};

	"17": {
		"text": "Your teammate has a conflicting view, what do you do?",
		//"image" : "smaller_images/snackies.png",
"choices": {
			"Give them a rundown of why your idea is the best due to the disadvantages and advantages of each decision": [24,["INTJ", "ENTJ", "INFJ", "ENFJ", "ISTJ", "ISFJ", "ESTJ", "ESFJ"]],
			"Keep your options open and gather their thoughts": [24,["INTP", "ENTP", "INFP", "ENFP", "ISTP", "ISFP", "ESTP", "ESFP"]]
		}
	};

	"24": {
		"text": "In the end, it’s your choice, as the highest-ranking member. Will you…",
		//"image" : "smaller_images/snackies.png",
"choices": {
			"Use their input to finalize your decision": [25,["ENTJ", "ENFJ", "ESTJ", "ESFJ", "ENTP", "ENFP", "ESTP", "ESFP"]],
			"Rely on your instincts and go with your original idea": [25,["INTJ", "INFJ", "ISTJ", "ISFJ", "INTP", "INFP", "ISTP", "ISFP"]]
		}
	};

	"25": {
		"text": "Mission complete! It’s debrief time! You’ve been asked to give a round of feedback. You…",
		//"image" : "smaller_images/snackies.png",
"choices": {
			"Give an objective analysis of the mission": [26,["INTJ", "ENTJ", "ISTJ", "ESTJ", "INTP", "ENTP", "ISTP", "ESTP"]],
			"Think about how each of your teammates handles feedback, and tailor your response for them": [26,["INFJ", "ENFJ", "ISFJ", "ESFJ", "INFP", "ENFP", "ISFP", "ESFP"]]
		}
	};

	"26": {
		"text": "You did well– and your superiors certainly seem to agree. They’ve offered you the position of team leader. What do you do?",
		//"image" : "smaller_images/snackies.png",
"choices": {
			"Consider the advantages and disadvantages carefully.": [27,["INTJ", "ENTJ", "INFJ", "ENFJ", "ISTJ", "ISFJ", "ESTJ", "ESFJ"]],
			"Take it! Why not?": [27,["INTP", "ENTP", "INFP", "ENFP", "ISTP", "ISFP", "ESTP", "ESFP"]]
		}
	};

	"27": {
		"text": "It’s celebration time– do you spend it with your team or alone? You…",
		//"image" : "smaller_images/snackies.png",
"choices": {
			"Go back to your room to rest.": [28,["INTJ", "INFJ", "ISTJ", "ISFJ", "INTP", "INFP", "ISTP", "ISFP"]],
			"Meet with your team to chat and let the steam off!": [29,["ENTJ", "ENFJ", "ESTJ", "ESFJ", "ENTP", "ENFP", "ESTP", "ESFP"]]
		}
	};

	"28": {
		"text": "You remember the issues you encountered during the mission. You…",
		//"image" : "smaller_images/snackies.png",
"choices": {
			"Make an plan to implement changes so it never happens again": [30,["INTJ", "ENTJ", "INFJ", "ENFJ", "ISTJ", "ISFJ", "ESTJ", "ESFJ"]],
			"Consider that it may never happen again the same way, but you’ve experienced it once, so you’re more prepared for next time!": [30,["INTP", "ENTP", "INFP", "ENFP", "ISTP", "ISFP", "ESTP", "ESFP"]]
		}
	};

	"30": {
		"text": "As always, the mission was stressful. To help yourself feel better you…",
		//"image" : "smaller_images/snackies.png",
"choices": {
			"Replay every moment in your mind, internalizing every part to help you learn": [31,["INTJ", "ENTJ", "ISTJ", "ESTJ", "INTP", "ENTP", "ISTP", "ESTP"]],
			"Knock on the door of a close friend you know will be in their room to talk": [32,["INFJ", "ENFJ", "ISFJ", "ESFJ", "INFP", "ENFP", "ISFP", "ESFP"]]
		}
	};

	"31": {
		"text": "While you’re reviewing, you help yourself digest the information in the best way you know. You…",
		//"image" : "smaller_images/snackies.png",
"choices": {
			"Act the scenes out, because what you learn hands-on sticks better": [33,["ISTJ", "ISFJ", "ISTP", "ISFP", "ESFJ", "ESTP", "ESFP", "ESTJ", "ESTJ"]],
			"Theorize and connect your experiences to other situations, so they might be applicable there": [33,["ENTJ", "ENFJ", "ENTP", "ENFP", "INTJ", "INFJ", "INTP", "INFP"]]
		}
	};

	"32": {
		"text": "Your friend is home, and they smile at you when they open the door. You sit in relative silence for a while, before they ask you a question. Do you think the problem that happened today had a deeper meaning?",
		//"image" : "smaller_images/snackies.png",
"choices": {
			"Based on your knowledge of the situation, there were a variety of factors which influenced the event's outcome.": [33,["ISTJ", "ISFJ", "ISTP", "ISFP", "ESFJ", "ESTP", "ESFP", "ESTJ"]],
			"Everything has a deeper meaning– you know that there are things you’re missing, and you envision how they might all connect.": [33,["ENTJ", "ENFJ", "ENTP", "ENFP", "INTJ", "INFJ", "INTP", "INFP"]]
		}
	};

	"29": {
		"text": "Your team is crowded around a massive table of food– as expected of them, really. They’re talking about the successes and failures of the mission. You give your input by…",
		//"image" : "smaller_images/snackies.png",
"choices": {
			"Relating the objective results of the mission– by learning together we grow.": [34,["INTJ", "ENTJ", "ISTJ", "ESTJ", "INTP", "ENTP", "ISTP", "ESTP"]],
			"Gathering morale– right now, it’s important for everyone to feel encouraged and happy.": [34,["INFJ", "ENFJ", "ISFJ", "ESFJ", "INFP", "ENFP", "ISFP", "ESFP"]]
		}
	};

	"34": {
		"text": "Abruptly, the party decides to move to another place! Everyone wants to play pool downstairs. You…",
		//"image" : "smaller_images/snackies.png",
"choices": {
			"Feel a bit disgruntled at the sudden plan change, but go.": [35,["INTJ", "ENTJ", "INFJ", "ENFJ", "ISTJ", "ISFJ", "ESTJ", "ESFJ"]],
			"Jump at the idea! That sounds like fun!": [35,["INTP", "ENTP", "INFP", "ENFP", "ISTP", "ISFP", "ESTP", "ESFP"]]
		}
	};

	"35": {
		"text": "At pool, you find yourself in a conversation with a teammate. They’re asking you how you thought the mission went. You…",
		//"image" : "smaller_images/snackies.png",
"choices": {
			"Tell them your overall impression of the events that played out, as well as your theories for why certain things may have happened": [33,["ISTJ", "ISFJ", "ISTP", "ISFP", "ESFJ", "ESTP", "ESFP", "ESTJ"]],
			"Talk in detail about the most important events": [33,["ENTJ", "ENFJ", "ENTP", "ENFP", "INTJ", "INFJ", "INTP", "INFP"]]
		}
	};

	"33": {
		"text": "Finally, everything is over, and it’s time to sleep.",
		//"image" : "smaller_images/snackies.png",
"choices": {
			// finish test here!! woooooooooo
			// ??
			"Good work, babe!": [0,["ISTJ", "ISFJ", "ISTP", "ISFP", "ESFJ", "ESTP", "ESFP", "ESTJ", "ENTJ", "ENFJ", "ENTP", "ENFP", "INTJ", "INFJ", "INTP", "INFP"]]
		}
	};

};

const personalities = {
    "INTJ": 0, // The Tactician
    "INTP": 0, // The Mad Scientist
    "ENTJ": 0, // The Leader
    "ENTP": 0, // The Rebel
    "INFJ": 0, // The Oracle
    "INFP": 0, // The Creator
    "ENFJ": 0, // The Heroine
    "ENFP": 0, // The Magician
    "ISTJ": 0, // The Veteran
    "ISFJ": 0, // The Knight
    "ESTJ": 0, // The Order
    "ESFJ": 0, // The Mentor
    "ISTP": 0, // The Engineer
    "ISFP": 0, // The Assassin
    "ESTP": 0, // The Warrior
    "ESFP": 0 // The Bard
};

// Everything below is taken from veggie game and Im honestly not too sure what it does
// ??

let currentState = 1;

function renderState(state) {
    const storyText = document.getElementById('story-text');
    const storyImage = document.getElementById('story-image');
    const choicesContainer = document.getElementById('choices');

    const img = new Image();
    img.src = gameData[state].image;

    img.onload = () => {
        storyImage.src = img.src;
        storyText.textContent = gameData[state].text;
        choicesContainer.innerHTML = '';

        for (const [choice, info] of Object.entries(gameData[state].choices)) {
            const button = document.createElement('button');
            button.textContent = choice;
            button.className = 'choice-button';
            let nextState = info[0];
            button.onclick = () => changeState(nextState, info[1]); //each time you change state you update the personalities dictionary
            choicesContainer.appendChild(button);
        }
    };
}


function changeState(newState, selectedPersonalities) { 
    // console.log(personalities); 
    selectedPersonalities.forEach(personality => {
        personalities[personality]++;
    });

    currentState = newState;

    if (currentState === 0) {
        revealMostSelectedVegetable();
    } else {
        renderState(currentState);
    }
}
function revealMostSelectedVegetable() {
    let maxCount = 0;
    let maxVeggie = '';

    for (const [vegetable, count] of Object.entries(personalities)) {
        if (count > maxCount) {
            maxCount = count;
            maxVeggie = vegetable;
        }
    }

    const storyImage = document.getElementById('story-image');
    const text = document.getElementById('story-text');
    const choicesContainer = document.getElementById('choices');
    const veggieImagePath = `smaller_images/id_cards/${maxVeggie}.png`;

    // Preload the image
    const img = new Image();
    img.src = veggieImagePath;
    img.className = 'responsive-image'; 

    // Create the share button
    const shareButton = document.createElement('button');
    shareButton.textContent = 'Share the game with Friends';
    shareButton.className = 'choice-button';

    // Once the image is loaded, update the DOM
    img.onload = () => {
        storyImage.style.display = 'none';
        choicesContainer.style.display = 'none';
    
        text.textContent = "Drumroll... here is your Veggie ID! Don't lose it! (Right click or hold the image to save)";
        text.appendChild(img);

        // Share button functionality
        shareButton.onclick = () => {
            const shareMessage = `Check out my Veggie ID! You can create yours at https://sophie006liu.github.io/vegetal/`;
            navigator.clipboard.writeText(shareMessage).then(() => {
                alert('Link copied to clipboard!');
            }).catch(err => {
                alert('Failed to copy link. Please try again.');
            });
        };

        text.appendChild(shareButton);
    };
}


function startGame() {
    document.querySelector('.title').style.display = 'none';
    document.getElementById('homescreen').style.display = 'none';
    document.querySelector('.start-button').style.display = 'none';
    document.getElementById('game-container').style.display = 'block';
    renderState(currentState);
}

window.onload = () => {
    renderState(currentState);
}
