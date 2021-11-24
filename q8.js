const quiz = [
    {
        q: ' Which method should I use to convert String "welcome to the beautiful world of python" to "Welcome To The Beautiful World Of Python"',
        options: ['title()', 'capitalize()'],
        answer: 0
    },
    {
        q: 'Python does not support a character type; a single character is treated as strings of length one.',
        options: ['True', 'False'],
        answer: 0
    },
    {
        q: 'Strings are immutable in Python, which means a string cannot be modified.',
        options: ['True', 'False'],
        answer: 0
    },
    {
        q: 'Select the correct output of the following String operations?  myString = "pynative"  stringList = ["abc", "pynative", "xyz"]  print(stringList[1] == myString) print(stringList[1] is myString)',
        options: ['true true', 'true false'],
        answer: 0
    },
    {
        q: ' What is the output of the following code?  str1 = "My salary is 7000";  str2 = "7000"  print(str1.isdigit()) print(str2.isdigit())',
        options: ['False True', 'False False', 'True False', 'None'],
        answer: 0
    },
    {
        q: ' Select the correct output of the following String operations?  strOne = str("pynative")  strTwo = "pynative"  print(strOne == strTwo) print(strOne is strTwo) ',
        options: ['false false', 'true true', 'true false', 'false true'],
        answer: 1
    },
    {
        q: 'Guess the correct output of the following code? str1 = "PYnative" print(str1[1:4], str1[:5], str1[4:], str1[0:-1], str1[:-1])',
        options: ['PYn PYnat ive PYnativ vitanYP', 'Yna PYnat tive PYnativ PYnativ','Yna PYnat tive PYnativ vitanYP','None'],
        answer: 1
    },
    {
        q: 'Select the correct output of the following String operations?  str1 = "my isname isisis jameis isis bond"; sub = "is"; print(str1.count(sub, 4))',
        options: ['7', '5','6', 'None'],
        answer: 2
    },
    {
        q: 'Select the correct output of the following String operations?  str = "my name is James bond"; print (str.capitalize()) ',
        options: ['My Name Is James Bond', 'TypeError: unsupported operand type(s) for * or pow(): ‘str’ and ‘int’', 'My name is james bond'],
        answer: 2
    },
    {
        q: ' What is the output of the following string comparison?  print("John" > "Jhon") print("Emma" < "Emm")',
        options: ['True False', 'False False', 'True True', 'False True'],
        answer: 0
    }
]