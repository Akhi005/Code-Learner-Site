const quiz = [
    {
        q: 'To generate a random secure Universally unique ID which method should I use',
        options: ['uuid.uuid4()', 'uuid.uuid1()','uuid.uuid3()','random.uuid()'],
        answer: 0
    },
    {
        q: 'Which method should i use to capture and change the current state of the random generator',
        options: ['random.getstate() random.setstate(state)', 'random.currentstate() random.setcurrentstate(state)'],
        answer: 0
    },
    {
        q: 'random.seed() method is used to initialize the pseudorandom number generator. The random module uses the seed value as a base to generate a random number. If seed value is not present, it takes the system’s current time.',
        options: ['True', 'False'],
        answer: 0
    },
    {
        q: 'str = “PYnative”. Choose the correct function to pick a single character from a given string randomly. ',
        options: ['random.choice(str)', 'random.sample(str)', 'random.get(str, 1)'],
        answer: 0
    },
    {
        q: ' Choose the correct function from the following list to get the random integer between 99 to 200, which is divisible by 3.',
        options: ['random.randrange(99, 200, 3)', 'random.randint(99, 200, 3)', 'random.random(99, 200, 3)'],
        answer: 0
    },
    {
        q: 'To Generate a random secure integer number, select  the correct options.',
        options: ['random.SystemRandom().randint()', 'random.System.randint()'],
        answer: 0
    },
    {
        q: 'Which method should I use to get 4 elements from the following list randomly? samplelist = [20, 40, 60, 80, 100, 120, 140, 160, 180, 200]',
        options: ['random.sample(samplelist, 4)', 'random.choice(samplelist, 4)'],
        answer: 0
    },
    {
        q: 'To generate a random float number between 20.5 to 50.5, which function of a random module I need to use',
        options: ['random.uniform(20.5, 50.5)', 'random.randrange(20.5, 50.5)'],
        answer: 0
    },
    {
        q: 'numberList = [100, 200, 300, 400, 500]  Choose the correct function to get 3 elements from the list randomly in such a way that each element of the list has a different probability of being selected. ',
        options: ['random.choices(numberList, weights=(10, 5, 15, 20, 50), k=3)', 'random.choice(numberList, weights=(10, 5, 15, 20, 50), k=3)', 'random.sample(numberList, weights=(10, 5, 15, 20, 50), k=3)'],
        answer: 0
    },
    {
        q: 'I want to generate a random secure hex token of 32 bytes to reset the password, which method should I use',
        options: ['secrets.token_hex(32)', 'secrets.tokenHex(32)', 'secrets.hex_token(32)', 'secrets.hexToken(32)'],
        answer: 0
    }
    
]