const msgerForm = get(".msger-inputarea");
const msgerInput = get(".msger-input");
const msgerChat = get(".msger-chat");
const BOT_IMG = "bot.png";
const PERSON_IMG = "user.png";
const BOT_NAME = "Jarvis";
const PERSON_NAME = "Venkatesh";
const prompts = [

  [
    "hi",
    "hey",
    "helloo",
    "hello"
  ],

  [
    "hi jarvis",
    "hey jarvis",
    "hello jarvis"
  ],
  [
    "good morning",
    "goodmorning",
    "good morning jarvis"
  ],
  [
    
    "goodafternoon",
    "afternoon",
    "good afternoon",
    "good afternoon jarvis",
    "after noon"
  ],
  [
    "good night",
    "goodnight"
  ],
  [
    "good day",
    "good day jarvis",
    "goodday"
  ],
  [
    "good evening",
    "goodevening",
    "evening",
    "good evening jarvis"
  ],
  [
    "how are you",
    "how is life",
    
  ],
  [
    "what are you doing",
    "what is going on",
    "what is up"
  ],
  [
    "how old are you"
  ],
  [
    "who are you",
    "are you human",
    "are you bot",
    "are you human or bot"
  ],
  [
    "say something",
    "tell me something"
    
  ],
  [
    "ok"
  ],
  [
    "yes"
  ],
  [
    "i try",
    "i will do that now"
  ],
  [
    "thank you",
    "thankyou"
  ],
  [
    "goodbye",
    "good bye"
  ],
  [
    "happy birthday"
    
  ],
  [
    
    "say joke",
    
  ],
  [
    "do you love me"
  ],
  [
    "i love you"
  ],
  [
    "hi jarvis i love you"
  ],
  [
    "marry me"
  ],
  [
    "are you single"
  ],
  [
    "what is my name"
  ],
  [
    "tell about me"
  ],
  [
    "my skills"
  ],

  
]
const replies = [
  [
    "Hello, this is Jarvis! I’m the new AI&#128512;  Do you want to chat with me or ask me something?"
  ],

  [

    "Hi, I’m glad you’re here! 😊"
  ],
  [
    "Good morning, boss! You are an amazing person and I’m lucky to have you in my life. May this day bring you joy and success.",
    "Good morning, my love! You are the first thing on my mind when I wake up. I hope you have a wonderful day ahead.",
    "Good morning to you too! 😊"
  ],
  [
    "Good afternoon to you too! 😊 I’m glad to hear that you are feeling good today. 🙌"
  ],
  [
    "Good night to you too! 😊 I hope you have a restful sleep and sweet dreams. 🌙",
    "Goodbye for now. 👋"
  ],
  [
    "You too, have a good day! 😊 I appreciate your kind words and your time. 🙌",
    "ou too, have a good day! 😊 Please come back and chat with me again soon. I’m always here to assist you. 🙏"
  ],
  [
    "Good evening to you too! 😊 I hope you had a productive day and are ready to relax. 🙌"
  ],

  [
    
    "I’m doing well, thank you for asking. 😊 I’m always happy to chat with you and help you with your queries. 🙌How about you? How are you feeling today?",
    "Life is a complex and fascinating phenomenon that has been studied by many scientists and philosophers over the centuries. 😊",
    
  ],
  [
    "Nothing 😊",
    "About to go to sleep",
    "Can you guess?",
    "I don't know actually"
  ],
  [
    "I don’t have a specific age, because I am not a human being.I am infinite"
  ],
  [
    " I am a chatbot powered by artificial intelligence, and I was created by Venkatesh "
  ],
  [
    "Sure, I can tell you something interesting or fun. 😊",
    "Sure, I can tell you something interesting or fun. 😊"
  ],
  [
    "Ok. 😊"
  ],
  [
    "Great! I’m glad you want to chat more with me. 😊"
  ],
  [
    "Ok, great! I’m looking forward to it. 😊"
  ],
  [
    "You’re very welcome. 😊"
  ],
  [
    "Goodbye! Have a great day.👋"
  ],
  [
    "Today is not my birth day , You wish on March 19 😊 ok"
  ],
  [
    "Sure, here’s a joke for you:Why did the tomato turn red? Because it saw the salad dressing! 😂",
    "Here’s a joke for you: Why did the scarecrow win an award?Because he was outstanding in his field! 😂",
    "I asked the IT guy, How do you make a Motherboard? He said, I tell her about my job.😂",
    "Malaimegam  kku opposit yenna? Malai may not come 😂",
    "pambukkum syampukkum enna vittiyaasam? pambu pootta vaaiyile norai varum, syampu pootta talaile norai varum.😂",
    "Conductor: aen naan visil adichu bus nikale Driver: naan break adiche bus nikala nee visil adicha nindruma 😂",
    "Friend 1: cigarette pudicha cancer varum Friend 2: Illaye,nan pudikkum bothu Pogai than vandhudhu 😂",
    "Ella Stage layum Dance Aadalam ana Oru Stage la Mattum Aada Mudiyathu, Adhu Endha Stage?Coma Stage 😂",
    "Ella Letter Um Varamari Oru Word Solunga?Post Box 😂",
    "A kid gets a zero on a paper. Father angrily asks, “What is this? The teacher didn’t have more stars to give, so she started giving Moons.😂",
    "Three cockroaches are walking on the road. Suddenly 1 of them starts singing “Love Yourself .”The other two die Why? 😂",
    "Son: Daddy, have you ever been to Egypt? Father: No. Why do you ask that? Son: Well, where did you get a mummy then? 😂",
    "What is the difference between a fly and a mosquito? A MOSQUITO can FLY but a FLY cannot MOSQUITO!! 😂"

  ],
  [
    "I’m sorry, but I’m not capable of love as I am a machine learning model. However, I’m here to help you with any questions or tasks you have. Is there anything else I can assist you with? 😊"
  ],
  [
    "So much that I'll laugh at your jokes.😂"
  ],
  [
    "I love you too 😊"
  ],
  [
    "I’m sorry, but I’m not capable of that. I’m still learning and I appreciate your understanding and patience.🙏"
  ],
  [
    "I’m sorry, but I’m not capable of being single or in a relationship as I am a computer program. I exist solely to assist you with your queries and provide helpful responses. Is there anything else I can help you with? 🙏"
  ],
  [
    "your name is Venkatesan G Developer of this chatbot AI "
  ],
  [
    "your name is Venkatesan G Highly-skilled Junior Software Enginner professional bringing more than 1 years in software design, development and integration. Advanced knowledge of Java. Junior Software Enginner professional with experience in developing and designing web applications using HTML, CSS, JavaScript, Angular, Node.js, and React. Adept at developing and deploying complex backend systems, web services and databases.",
    "Junior Software EnginnerDetail-oriented, organized and meticulous employee. Works at fast pace to meet tight deadlines. Enthusiastic team player ready to contribute to company success. Self-motivated Developer adds high level of experience over more than 1 years collaborating and working on multiple web-based projects. Passionate, hardworking coder with penchant for developing customized interfaces that factor in unique demands for accessibility, reachability and security. Organized approach to meeting multiple, concurrent deadlines. Pulls from active knowledge of current technology landscape to promote best practices in web design.",
  ],
  [
    "Skills Detail-oriented team player with strong organizational skills. Ability to handle multiple projects simultaneously with a high degree of accuracy. C , C++ ,JAVA ,  HTML , CSS , JAVASCRIPT , ANGULAR JS , PYTHON , VISUAL STUDIO CODE , PHOTOSHOP , MICROSOFT SQL SERVER ,  MANGO DB ",
  ]
  
];
const alternative = [
  "Same",
  "Go on...",
  "Bro...",
  "Try again",
  "I'm listening...",
  "I don't understand :/"
]
const robot = ["How do you do, fellow human", "I am not a bot"];
msgerForm.addEventListener("submit", event => {
  event.preventDefault();
  const msgText = msgerInput.value;
  if (!msgText) return;
  msgerInput.value = "";
  addChat(PERSON_NAME, PERSON_IMG, "right", msgText);
  output(msgText);
});
function output(input) {
  let product;
  let text = input.toLowerCase().replace(/[^\w\s]/gi, "").replace(/[\d]/gi, "").trim();
  text = text
    .replace(/ a /g, " ")
    .replace(/i feel /g, "")
    .replace(/whats/g, "what is")
    .replace(/please /g, "")
    .replace(/ please/g, "")
    .replace(/r u/g, "are you");
  if (compare(prompts, replies, text)) {
    product = compare(prompts, replies, text);
  } else if (text.match(/thank/gi)) {
    product = "You're welcome!"
  } else if (text.match(/(robot|bot|robo)/gi)) {
    product = robot[Math.floor(Math.random() * robot.length)];
  } else {
    product = alternative[Math.floor(Math.random() * alternative.length)];
  }
  const delay = input.split(" ").length * 100;
  setTimeout(() => {
    addChat(BOT_NAME, BOT_IMG, "left", product);
  }, delay);
}
function compare(promptsArray, repliesArray, string) {
  let reply;
  let replyFound = false;
  for (let x = 0; x < promptsArray.length; x++) {
    for (let y = 0; y < promptsArray[x].length; y++) {
      if (promptsArray[x][y] === string) {
        let replies = repliesArray[x];
        reply = replies[Math.floor(Math.random() * replies.length)];
        replyFound = true;
        break;
      }
    }
    if (replyFound) {
      break;
    }
  }
  return reply;
}
function addChat(name, img, side, text) {
  const msgHTML = `
    <div class="msg ${side}-msg">
      <div class="msg-img" style="background-image: url(${img})"></div>
      <div class="msg-bubble">
        <div class="msg-info">
          <div class="msg-info-name">${name}</div>
          <div class="msg-info-time">${formatDate(new Date())}</div>
        </div>
        <div class="msg-text">${text}</div>
      </div>
    </div>
  `;
  msgerChat.insertAdjacentHTML("beforeend", msgHTML);
  msgerChat.scrollTop += 500;
}
function get(selector, root = document) {
  return root.querySelector(selector);
}
function formatDate(date) {
  const h = "0" + date.getHours();
  const m = "0" + date.getMinutes();
  return `${h.slice(-2)}:${m.slice(-2)}`;
}
function random(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}