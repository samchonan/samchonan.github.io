//NOTICE: This is a modified version of sophie006liu's mainGame.js file. Story has been completely changed to follow the new logic tree, and file paths and variable names have been changed. Output was changed, with additional text displayed. 
//Logic was added to print the proper names and descriptions, display everything correctly, and modifications were made to the display along with addiitonal logic to properly print the quiz results
//Changes were made to homescreen to include game description text and credits, game was changed to work without dynamic image paths

const gameData = {
	"1": {
		"text": "It\'s finally the day of the big mission. Are you ready?",
        //"image" : "img.png",
"choices": {
			"I\’ve planned everything out for this moment": [2,["tactician", "leader", "oracle", "heroine", "veteran", "knight", "order", "mentor"]],
			"I trust myself, I\’ll be fine": [2,["scientist", "rebel", "creator", "magician", "engineer", "assassin", "warrior", "bard"]]
		}
	},

	"2": {
		"text": "Perfect. There\’s some downtime before launch, what would you like to do?",
        //"image" : "img.png",
"choices": {
			"Meet my team in the mess hall": [3,["leader", "heroine", "order", "mentor", "rebel", "magician", "warrior", "bard"]],
			"Spend the morning alone": [4,["tactician", "oracle", "veteran", "knight", "scientist", "creator", "engineer", "assassin"]]
		}
	},

	"3": {
		"text": "Your team is chatting and laughing about… something. You see they\’re crowded around a picture of what appears to be a fish superimposed on a picture of you. You…",
		//"image" : "img.png",
"choices": {
			"Are upset they\’d make fun of you behind your back": [5,["tactician", "leader", "veteran", "order", "scientist", "rebel", "engineer", "warrior"]],
			"Laugh heartily at the picture, pleased that they\’ve been thinking of you": [5,["oracle", "heroine", "knight", "mentor", "creator", "magician", "assassin", "bard"]]
		}
	},

	"5": {
		"text": "You chat the morning away, and discover that one of your teammates had been up all night superimposing pictures of fish over everyone. It\’s strange, but you have fun in the end. You feel…",
		//"image" : "img.png",
"choices": {
			"A little drained from interacting with so many people for so long": [6,["tactician", "oracle", "veteran", "knight", "scientist", "creator", "engineer", "assassin"]],
			"Energized from having fun": [6,["leader", "heroine", "order", "mentor", "rebel", "magician", "warrior", "bard"]]
		}
	},

	"4": {
		"text": "Before you can relax, a knock sounds on the door. It\’s a teammate, and they\’re crying. They tell you they\’re nervous about today. You…",
		//"image" : "img.png",
"choices": {
			"Help them work through the problem": [7,["tactician", "leader", "veteran", "order", "scientist", "rebel", "engineer", "warrior"]],
			"Listen and empathize with them": [7,["oracle", "heroine", "knight", "mentor", "creator", "magician", "assassin", "bard"]]
		}
	},

	"7": {
		"text": "Finally, everything\’s settled down, and you\’re ready to set off. You are…",
		//"image" : "img.png",
"choices": {
			"Happy you could help a teammate in need": [6,["leader", "heroine", "order", "mentor", "rebel", "magician", "warrior", "bard"]],
			"A little tired, you wish you\’d had the morning to yourself": [6,["tactician", "oracle", "veteran", "knight", "scientist", "creator", "engineer", "assassin"]]
		}
	},

	"6": {
		"text": "Your team is going over the breach plan once more, to iron everything out. You…",
		//"image" : "img.png",
"choices": {
			"Review the plan and make certain you have it down": [8,["veteran", "knight", "engineer", "assassin", "mentor", "warrior", "bard", "order"]],
			"Contribute ideas and theories for unpredictable situations": [8,["leader", "heroine", "rebel", "magician", "tactician", "oracle", "scientist", "creator"]]
		}
	},

	"8": {
		"text": "You\’ve arrived, and you\’re ready to breach! Which group are you a part of?",
		//"image" : "img.png",
"choices": {
			"We\’re storming the front!": [9,["scientist", "rebel", "creator", "magician", "engineer", "assassin", "warrior", "bard"]],
			"We\'re sneaking through the back.": [10,["tactician", "leader", "oracle", "heroine", "veteran", "knight", "order", "mentor"]]
		}
	},

	"9": {
		"text": "You\’re due up front; your team\’s goal is to provide a diversion for the team sneaking through the back! How do you enter?",
		//"image" : "img.png",
"choices": {
			"I\’ve planned an itinerary, and I\’ll act it out to the last detail": [11,["veteran", "knight", "engineer", "assassin", "mentor", "warrior", "bard", "order"]],
			"I\’ll ad-lib\– it\’s not that hard to cause a ruckus": [11,["leader", "heroine", "rebel", "magician", "tactician", "oracle", "scientist", "creator"]]
		}
	},

	"11": {
		"text": "You\’ve entered the front\– messily indeed\– and one of your team members appears to be struggling. What do you do?",
		//"image" : "img.png",
"choices": {
			"Assist them, they can\’t compromise our mission": [12,["tactician", "leader", "veteran", "order", "scientist", "rebel", "engineer", "warrior"]],
			"Lend them an ear, you want to understand how they\’re feeling so you can help": [12,["oracle", "heroine", "knight", "mentor", "creator", "magician", "assassin", "bard"]]
		}
	},

	"12": {
		"text": "They appear to be having a hard time talking. You\’re on standby for the time being, and have time to decide how to make them talk. You...",
		//"image" : "img.png",
"choices": {
			"Sit by them quietly. They\’ll talk when they need to": [13,["tactician", "oracle", "veteran", "knight", "scientist", "creator", "engineer", "assassin"]],
			"Chat about things you know will relax them": [13,["leader", "heroine", "order", "mentor", "rebel", "magician", "warrior", "bard"]]
		}
	},

	"13": {
		"text": "When the truth gets out, it\’s nastier than you ever expected. There\’s a traitor! It seems this person caught them sneaking a message to the enemy as your team entered the building. There\’s only one problem\– everyone had their masks on, and they don\’t know who it was. You...",
		//"image" : "img.png",
"choices": {
			"Spend time gathering information from all your teammates": [14,["scientist", "rebel", "creator", "magician", "engineer", "assassin", "warrior", "bard"]],
			"Gather all the important parts quickly\– the faster you implement a plan, the better": [14,["tactician", "leader", "oracle", "heroine", "veteran", "knight", "order", "mentor"]]
		}
	},

	"14": {
		"text": "How do you figure out who the traitor is?",
		//"image" : "img.png",
"choices": {
			"Analyze the past information you have about your teammates and come to the most practical conclusion": [15,["veteran", "knight", "engineer", "assassin", "mentor", "warrior", "bard", "order"]],
			"Branch your thoughts out, think outside of what you know": [15,["leader", "heroine", "rebel", "magician", "tactician", "oracle", "scientist", "creator"]]
		}
	},

	"15": {
		"text": "You\’ve cracked the code! After apprehending the traitor, you consider how the traitor\’s actions may have impacted the mission.",
		//"image" : "img.png",
"choices": {
			"You must change all immediate plans to ensure the safety of the rear team! The faster we act, the safer.": [16,["veteran", "knight", "engineer", "assassin", "mentor", "warrior", "bard", "order"]],
			"The plan might have a butterfly effect\– changing too much about our current actions gives us less power. Anticipate the future, and move based on that.": [16,["leader", "heroine", "rebel", "magician", "tactician", "oracle", "scientist", "creator"]]
		}
	},

	"16": {
		"text": "It\’s about time the rear group finds the target\– and you\’ve ensured they\’ve made it there safely. Now, it\’s time to deal with the traitor. You…",
		//"image" : "img.png",
"choices": {
			"Kill them\– death is the price of betrayal in your organization": [17,["tactician", "leader", "veteran", "order", "scientist", "rebel", "engineer", "warrior"]],
			"Spare them\– first, you need to listen to why they did it. You can take your time interrogating them, later": [17,["oracle", "heroine", "knight", "mentor", "creator", "magician", "assassin", "bard"]]
		}
	},

	"10": {
		"text": "Your group has split into two teams, and your team is storming the back. All of a sudden, you notice that there\’s a trap! You recognize it immediately, as you\’ve dealt with a similar situation before. How will you handle it?",
		//"image" : "img.png",
"choices": {
			"Think with my team members\– three heads is better than one!": [18,["leader", "heroine", "order", "mentor", "rebel", "magician", "warrior", "bard"]],
			"Come up with an idea by myself, and then pitch it.": [18,["tactician", "oracle", "veteran", "knight", "scientist", "creator", "engineer", "assassin"]]
		}
	},

	"18": {
		"text": "What ideas do you pitch?",
		//"image" : "img.png",
"choices": {
			"Use your past experience to mitigate the issue safely": [19,["veteran", "knight", "engineer", "assassin", "mentor", "warrior", "bard", "order"]],
			"Come up with a new solution based on the unique situation you\’re in": [19,["leader", "heroine", "rebel", "magician", "tactician", "oracle", "scientist", "creator"]]
		}
	},

	"19": {
		"text": "Your idea is…",
		//"image" : "img.png",
"choices": {
			"Logical and effective": [20,["veteran", "knight", "engineer", "assassin", "mentor", "warrior", "bard", "order"]],
			"Creative and out-of-the-box": [20,["leader", "heroine", "rebel", "magician", "tactician", "oracle", "scientist", "creator"]]
		}
	},

	"20": {
		"text": "Due to the trap, your entrance changes, and the specific route you\’d memorized isn\’t helpful here. Luckily, you’re not worried, because",
		//"image" : "img.png",
"choices": {
			"you memorized everything to prepare for every unexpected turn": [21,["tactician", "leader", "oracle", "heroine", "veteran", "knight", "order", "mentor"]],
			"you\’re used to unexpected changes and good at adapting": [21,["scientist", "rebel", "creator", "magician", "engineer", "assassin", "warrior", "bard"]]
		}
	},

	"21": {
		"text": "As you rush through the building, your mind spins. What are you thinking about?",
		//"image" : "img.png",
"choices": {
			"The present\– what I\’m doing, and how I\’m doing it": [22,["veteran", "knight", "engineer", "assassin", "mentor", "warrior", "bard", "order"]],
			"The future\– what I need to accomplish, and how I\’ll do it": [22,[ "leader", "heroine", "rebel", "magician", "tactician", "oracle", "scientist", "creator"]]
		}
	},

	"22": {
		"text": "Uh oh\– you\’re faced with a blockade you hadn\’t anticipated. Your teammates, behind you, appear to be panicking. What do you do?",
		//"image" : "img.png",
"choices": {
			"Consider the most practical way around the blockade, tell your teammates to follow\– it\’s faster": [23,["tactician", "leader", "veteran", "order", "scientist", "rebel", "engineer", "warrior"]],
			"Anticipate how your team dynamic works and instruct based on their individual feelings and skills": [23,["oracle", "heroine", "knight", "mentor", "creator", "magician", "assassin", "bard"]]
		}
	},

	"23": {
		"text": "Bingo, you found your target! As soon as they see you, they drop to their knees and start begging for their life. You…",
		//"image" : "img.png",
"choices": {
			"Kill them. It\’s your mission.": [17,["tactician", "leader", "veteran", "order", "scientist", "rebel", "engineer", "warrior"]],
			"Spare them. They\’ve surrendered, maybe you can work around this.": [17,["oracle", "heroine", "knight", "mentor", "creator", "magician", "assassin", "bard"]]
		}
	},

	"17": {
		"text": "Your teammate has a conflicting view, what do you do?",
		//"image" : "img.png",
"choices": {
			"Give them a rundown of why your idea is the best due to the disadvantages and advantages of each decision": [24,["tactician", "leader", "oracle", "heroine", "veteran", "knight", "order", "mentor"]],
			"Keep your options open and gather their thoughts": [24,["scientist", "rebel", "creator", "magician", "engineer", "assassin", "warrior", "bard"]]
		}
	},

	"24": {
		"text": "In the end, it\’s your choice, as the highest-ranking member. Will you…",
		//"image" : "img.png",
"choices": {
			"Use their input to finalize your decision": [25,["leader", "heroine", "order", "mentor", "rebel", "magician", "warrior", "bard"]],
			"Rely on your instincts and go with your original idea": [25,["tactician", "oracle", "veteran", "knight", "scientist", "creator", "engineer", "assassin"]]
		}
	},

	"25": {
		"text": "Mission complete! It\’s debrief time! You\’ve been asked to give a round of feedback. You…",
		//"image" : "img.png",
"choices": {
			"Give an objective analysis of the mission": [26,["tactician", "leader", "veteran", "order", "scientist", "rebel", "engineer", "warrior"]],
			"Think about how each of your teammates handles feedback, and tailor your response for them": [26,["oracle", "heroine", "knight", "mentor", "creator", "magician", "assassin", "bard"]]
		}
	},

	"26": {
		"text": "You did well\– and your superiors certainly seem to agree. They\’ve offered you the position of team leader. What do you do?",
		//"image" : "img.png",
"choices": {
			"Consider the advantages and disadvantages carefully.": [27,["tactician", "leader", "oracle", "heroine", "veteran", "knight", "order", "mentor"]],
			"Take it! Why not?": [27,["scientist", "rebel", "creator", "magician", "engineer", "assassin", "warrior", "bard"]]
		}
	},

	"27": {
		"text": "It\’s celebration time\– do you spend it with your team or alone? You…",
		//"image" : "img.png",
"choices": {
			"Go back to your room to rest.": [28,["tactician", "oracle", "veteran", "knight", "scientist", "creator", "engineer", "assassin"]],
			"Meet with your team to chat and let the steam off!": [29,["leader", "heroine", "order", "mentor", "rebel", "magician", "warrior", "bard"]]
		}
	},

	"28": {
		"text": "You remember the issues you encountered during the mission. You…",
		//"image" : "img.png",
"choices": {
			"Make a plan to implement changes so it never happens again": [30,["tactician", "leader", "oracle", "heroine", "veteran", "knight", "order", "mentor"]],
			"Consider that it may never happen again the same way, but you\’ve experienced it once, so you\’re more prepared for next time!": [30,["scientist", "rebel", "creator", "magician", "engineer", "assassin", "warrior", "bard"]]
		}
	},

	"30": {
		"text": "As always, the mission was stressful. To help yourself feel better you…",
		//"image" : "img.png",
"choices": {
			"Replay every moment in your mind, internalizing every part to help you learn": [31,["tactician", "leader", "veteran", "order", "scientist", "rebel", "engineer", "warrior"]],
			"Knock on the door of a close friend you know will be in their room to talk": [32,["oracle", "heroine", "knight", "mentor", "creator", "magician", "assassin", "bard"]]
		}
	},

	"31": {
		"text": "While you\’re reviewing, you help yourself digest the information in the best way you know. You…",
		//"image" : "img.png",
"choices": {
			"Act the scenes out, because what you learn hands-on sticks better": [33,["veteran", "knight", "engineer", "assassin", "mentor", "warrior", "bard", "order"]],
			"Theorize and connect your experiences to other situations, so they might be applicable there": [33,["leader", "heroine", "rebel", "magician", "tactician", "oracle", "scientist", "creator"]]
		}
	},

	"32": {
		"text": "Your friend is home, and they smile at you when they open the door. You sit in relative silence for a while, before they ask you a question. Do you think the problem that happened today had a deeper meaning?",
		//"image" : "img.png",
"choices": {
			"Based on your knowledge of the situation, there were a variety of factors which influenced the event\'s outcome.": [33,["veteran", "knight", "engineer", "assassin", "mentor", "warrior", "bard", "order"]],
			"Everything has a deeper meaning\– you know that there are things you\’re missing, and you envision how they might all connect.": [33,["leader", "heroine", "rebel", "magician", "tactician", "oracle", "scientist", "creator"]]
		}
	},

	"29": {
		"text": "Your team is crowded around a massive table of food\– as expected of them, really. They\’re talking about the successes and failures of the mission. You give your input by…",
		//"image" : "img.png",
"choices": {
			"Relating the objective results of the mission\– by learning together we grow.": [34,["tactician", "leader", "veteran", "order", "scientist", "rebel", "engineer", "warrior"]],
			"Gathering morale\– right now, it\’s important for everyone to feel encouraged and happy.": [34,["oracle", "heroine", "knight", "mentor", "creator", "magician", "assassin", "bard"]]
		}
	},

	"34": {
		"text": "Abruptly, the party decides to move to another place! Everyone wants to play pool downstairs. You…",
		//"image" : "img.png",
"choices": {
			"Feel a bit disgruntled at the sudden plan change, but go.": [35,["tactician", "leader", "oracle", "heroine", "veteran", "knight", "order", "mentor"]],
			"Jump at the idea! That sounds like fun!": [35,["scientist", "rebel", "creator", "magician", "engineer", "assassin", "warrior", "bard"]]
		}
	},

	"35": {
		"text": "At pool, you find yourself in a conversation with a teammate. They\’re asking you how you thought the mission went. You…",
		//"image" : "img.png",
"choices": {
			"Tell them your overall impression of the events that played out, as well as your theories for why certain things may have happened": [33,["veteran", "knight", "engineer", "assassin", "mentor", "warrior", "bard", "order"]],
			"Talk in detail about the most important events": [33,["leader", "heroine", "rebel", "magician", "tactician", "oracle", "scientist", "creator"]]
		}
	},

	"33": {
		"text": "Finally, everything is over, and it\’s time to sleep.",
		//"image" : "img.png",
"choices": {
			// finished!! woooooooooo
			"Good work, babe!": [0,["veteran", "knight", "engineer", "assassin", "mentor", "warrior", "bard", "order", "leader", "heroine", "rebel", "magician", "tactician", "oracle", "scientist", "creator"]]
		}
	},

};

const personalities = {
    "tactician": 0, // The Tactician
    "scientist": 0, // The Mad Scientist
    "leader": 0, // The Leader
    "rebel": 0, // The Rebel
    "oracle": 0, // The Oracle
    "creator": 0, // The Creator
    "heroine": 0, // The Heroine
    "magician": 0, // The Magician
    "veteran": 0, // The Veteran
    "knight": 0, // The Knight
    "order": 0, // The Order
    "mentor": 0, // The Mentor
    "engineer": 0, // The Engineer
    "assassin": 0, // The Assassin
    "warrior": 0, // The Warrior
    "bard": 0 // The Bard
};

let currentState = 1;

function renderState(state) {
    const storyText = document.getElementById('story-text');
    const storyImage = document.getElementById('story-image');
    const choicesContainer = document.getElementById('choices');

	// Placeholder in case of later inspiration to add story images
	const img = new Image();
	img.src = "babeimages/transtest1.png";
	//img.style.border = '2px solid #b4c6dc'; //b4c6dc

    // const img = new Image();
	// img.src = gameData[state].image;

	// Debugging code to log gameData and state
	console.log('gameData:', gameData);
	console.log('state:', state);
	console.log(img);
	console.log('img.src:', img.src);


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
    console.log(personalities); 
    selectedPersonalities.forEach(personality => {
        personalities[personality]++;
    });

    currentState = newState;

    if (currentState === 0) {
        revealMostSelectedBabe();
    } else {
        renderState(currentState);
    }
}
function revealMostSelectedBabe() {
    let maxCount = 0;
    let maxBabe = '';

    for (const [babe, count] of Object.entries(personalities)) {
        if (count > maxCount) {
            maxCount = count;
            maxBabe = babe;
        }
    }

    const storyImage = document.getElementById('story-image');
    const text = document.getElementById('story-text');
    const choicesContainer = document.getElementById('choices');
    const babeImagePath = `babeimages/${maxBabe}.png`;

    // Preload the image
    const img = new Image();
    img.src = babeImagePath;
    img.className = 'responsive-image'; 

    // Create the share button
    const shareButton = document.createElement('button');
    shareButton.textContent = 'Share with friends!';
    shareButton.className = 'choice-button';

	// Once the image is loaded, update the DOM
	img.onload = () => {
		storyImage.style.display = 'none';
		choicesContainer.style.display = 'none';
		
		text.textContent = "";
		
		// Additional text
		const additionalText = document.createElement('div');
		additionalText.textContent = "Refresh the page to play again!";
		
		// Apend the new line to the text element
        text.appendChild(additionalText);
        additionalText.className = 'story-text';

		// Append the image to the text element
        const storyImageDiv = document.createElement('div');
        storyImageDiv.appendChild(img);
        storyImageDiv.className = 'image-containerDiv';
        text.appendChild(storyImageDiv);

        // Create a new div for the description
		const descriptionTitle = document.createElement('div');
		if (maxBabe === "scientist") {
			descriptionTitle.textContent = `You are the Mad ${maxBabe.charAt(0).toUpperCase() + maxBabe.slice(1)}!`;
		} else {
			descriptionTitle.textContent = `You are the ${maxBabe.charAt(0).toUpperCase() + maxBabe.slice(1)}!`;
		}
		text.appendChild(descriptionTitle);
		text.appendChild(descriptionTitle);
        descriptionTitle.className = 'story-text';
        descriptionTitle.style.fontSize = '27px';
        descriptionTitle.style.fontWeight = 'bold';
		
		// Personality descriptions to be printed with result image
		const personalityDescriptions = {
			"tactician": "The Tactician is strategic, insightful, and never short of ideas. She is inward-thinking and deeply reflective of her own intellectual landscape. She wishes to know everything, and others look to her for knowledge.",
			"scientist": "The Mad Scientist is plagued by her own imagination and creativity\– and caters to its beck and call. Her insight is widely sought after, and it never falls short of its mark.",
			"leader": "The Leader is a rational, ruthless decision-maker. She is intelligent and hard-working, and others look to her for wisdom and direction.",
			"rebel": "The Rebel is a playful contrarian, one who follows the dangerous path of individuality of thought. She loves to doubt, and her charismatic words and quick thinking get her what she wants when she wants it.",
			"oracle": "The Oracle is driven by a sense of purpose bigger than herself; she is the mentor behind growth and the mysterious instigator behind change.",
			"creator": "The Creator is the lonely truthseer. And with what she sees, she creates\– beautiful works which inspire and uplift.",
			"heroine": "The Heroine is a charismatic leader who flawlessly stands up for what she believes in. Others regard her insight as borderline telepathic. Her voice is powerful\– and when it isn\’t, she makes it so.",
			"magician": "The Magician is filled with a free-spirited and open-hearted warmth. Her imagination is as bright as her magic, and her sense of wonder inspires connection within the souls of many.",
			"veteran": "The Veteran is as reliable and honest as she is strong. She has a sense for her own abilities, and she uses them tactfully and with unshakable integrity. She is the foundation by which everything grows.",
			"knight": "The Knight is a loyal and altruistic protector. She does the work that no one sees and commits herself to a level beyond the comprehension of most.",
			"order": "The Order is the embodiment of right and wrong; it is she who determines the order of the world. She is the representation of a greater purpose and commits to the responsibility with grace.",
			"mentor": "The Mentor is the backbone of the community. She is the listening ear and the gentle guidance, and has a deep sense of justice.",
			"engineer": "The Engineer uses her creativity and intelligence\– and her desire to destroy and create\– to invent marvels as unpredictable as they are incredible. She chases her inspiration and craves the freedom to do as she wishes.",
			"assassin": "The Assassin is a shrouded free-thinker. She does not buy in much to the thoughts of others\– including her superiors\– and often does not realize how revolutionary and exceptional her actions are. To her, life is a quiet place of self-expression, and she has free reign over it.",
			"warrior": "The Warrior is upfront and spontaneous. Her hair-trigger decisions are matched evenly by strength and intelligence, and she does not allow herself to be ruled by the dichotomy of others.",
			"bard": "The Bard is a fun-lover and always the center of attention. Her natural style and magnetic personality accompany her desire to live in the moment\– and to help others to feel the excitement of it all."
		};
		
		// Get the description based on maxBabe
		const description = personalityDescriptions[maxBabe.toLowerCase()];
		
		const descriptionText = document.createElement('div');
		descriptionText.textContent = description;
		text.appendChild(descriptionText);
		descriptionText.className = 'story-text';
		
		// Share button functionality
		shareButton.onclick = () => {
			const shareMessage = `https://samchonan.github.io`;
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
	document.querySelector('.intro-text').style.display = 'none';
	document.querySelector('.credit-text').style.display = 'none';
    document.getElementById('homescreen').style.display = 'none';
    document.querySelector('.start-button').style.display = 'none';
    document.getElementById('game-container').style.display = 'block';
    renderState(currentState);
}

window.onload = () => {
    renderState(currentState);
}
