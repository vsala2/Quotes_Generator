const btn = document.querySelector('#new-quote');

let quote = document.querySelector('.quote');

let person = document.querySelector('.person');

const quotes = [{
    quote: `"It's not what you look at that matters, it's what you see."`,
    person: `Henry David Thoreau`
},{
    quote: `"You don't have to be great to start, but you have to start to be great."`,
    person: `Zig Zigiar`
},{
    quote: `"The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart."`,
    person: `Helen Keller`
},{
    quote: `"We're all going to die, all of us; what a circus! That alone should make us love each other, but it doesn't. We are terrorized and flattened by trivialities. We are eaten up by nothing."`,
    person: `Charles Bukowski`
},{
    quote: `"One of the most sincere forms of respect is actually listening to what another has to say."`,
    person: `Bryant H. Mc.Gill`
},{
    quote: `"The trust of the innocent is the liar's most useful tool."`,
    person: `Stephen King`
},{
    quote: `"We must let go of the life we have planned, so as to accept the one that is waiting for us."`,
    person: `Joseph Campbell`
},{
    quote: `"People sleep peaceably in their beds at night only because rough men stand ready to do violence on their behalf."`,
    person: `George Orwell`
},{
    quote: `"Never be afraid to trust an unknown future to a known God."`,
    person: `Corrie Ten Boom`
},{
    quote: `"One cannot think well, love well, sleep well, if one has not dined well."`,
    person: `Virginia Woolf`
},];


btn.addEventListener('click', function(){

    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;

})



