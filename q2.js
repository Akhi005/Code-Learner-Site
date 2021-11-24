const quiz = [
    {
        q: 'What is the output of the following variable assignment? x = 75 def myfunc(): x = x + 1 print(x) myfunc() print(x)',
        options: ['Error', '76', '1', 'None'],
        answer: 0
    },
    {
        q: 'What is the data type of the following code?aTuple = (1,"Jhon", 1+3j) print(type(aTuple[2:3]))',
        options: ['list', 'complex', 'None', 'tuple'],
        answer: 3
    },
    {
        q: 'What is the result of print(type([]) is list)',
        options: ['False', 'True'],
        answer: 1
    },
    {
        q: 'What is the data type of print(type(10))',
        options: ['float', 'integer', 'int', 'None'],
        answer: 2
    },
    {
        q: 'What is the output of the following code?x = 50 def fun1(): x = 25 print(x) fun1() print(x)',
        options: ['NameError', '25 25', '25 50', 'None'],
        answer: 2
    },
    {
        q: 'What is the data type of print(type(0xFF))',
        options: ['number', 'hexint', 'hex', 'int'],
        answer: 3
    },
    {
        q: 'What is the result of print(type({}) is set)',
        options: ['True', 'False'],
        answer: 1
    },
    {
        q: 'What is the output of the following code?def func1(): x = 50 return x func1() print(x',
        options: ['NameError', '50','25', 'None'],
        answer: 0
    },
    {
        q: ' In Python 3, what is the type of type(range(5))',
        options: ['int', 'list', 'range', 'None'],
        answer: 2
    },
    {
        q: 'What is the output of the following code ?print(bool(0), bool(3.14159), bool(-3), bool(1.0+1j)) ',
        options: ['False True False True', 'True True False True', 'True True False True', 'False True True True'],
        answer: 3
    }
]