const btn = document.getElementById('btn');
const output = document.querySelector('.output');

let quote = [
    "The only limit to our realization of tomorrow is our doubts of today.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "The future belongs to those who believe in the beauty of their dreams.",
    "You must be the change you wish to see in the world.",
    "In the end, we will remember not the words of our enemies, but the silence of our friends.",
    "Life is what happens when you're busy making other plans.",
    "It does not matter how slowly you go as long as you do not stop.",
    "The only way to do great work is to love what you do.",
    "Don't watch the clock; do what it does. Keep going.",
    "The best way to predict your future is to create it.",
    "You only live once, but if you do it right, once is enough.",
    "In the middle of difficulty lies opportunity.",
    "The journey of a thousand miles begins with one step.",
    "Happiness is not something ready-made. It comes from your own actions.",
    "Believe you can and you're halfway there.",
    "Act as if what you do makes a difference. It does.",
    "It always seems impossible until it's done.",
    "The purpose of our lives is to be happy.",
    "Challenges are what make life interesting and overcoming them is what makes life meaningful.",
    "Success usually comes to those who are too busy to be looking for it.",
    "Your time is limited, don't waste it living someone else's life.",
    "Dream big and dare to fail.",
    "Don't be afraid to give up the good to go for the great.",
    "Everything you’ve ever wanted is on the other side of fear.",
    "The best revenge is massive success.",
    "Success is not how high you have climbed, but how you make a positive difference to the world.",
    "Do not let what you cannot do interfere with what you can do.",
    "Success is the sum of small efforts, repeated day in and day out.",
    "It’s not whether you get knocked down, it’s whether you get up.",
    "The only place where success comes before work is in the dictionary.",
    "Don’t wait. The time will never be just right.",
    "Go confidently in the direction of your dreams. Live the life you have imagined.",
    "Don’t be pushed around by the fears in your mind. Be led by the dreams in your heart.",
    "Whether you think you can, or you think you can’t, you’re right.",
    "It is never too late to be what you might have been.",
    "Life isn’t about finding yourself. Life is about creating yourself.",
    "The harder you work for something, the greater you’ll feel when you achieve it.",
    "Don’t count the days, make the days count.",
    "Your limitation—it’s only your imagination.",
    "Push yourself, because no one else is going to do it for you.",
    "Great things never come from comfort zones.",
    "Dream it. Wish it. Do it.",
    "The way to get started is to quit talking and begin doing.",
    "Little things make big days.",
    "It’s going to be hard, but hard does not mean impossible.",
    "Don’t stop when you’re tired. Stop when you’re done.",
    "Do something today that your future self will thank you for.",
    "Sometimes later becomes never. Do it now.",
    "Success doesn’t just find you. You have to go out and get it."
];

btn.addEventListener("click", () =>{
 let random = Math.floor(Math.random()*quote.length);
 output.textContent = quote[random];
});
