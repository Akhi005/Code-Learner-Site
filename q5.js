const quiz = [
    {
        q: 'What is the output of the add() function call def add(a, b): return a+5, b+5 result = add(3, 2) print(result)',
        options: ['15', '8','(8, 7)', 'Syntax Error'],
        answer: 0
    },
    {
        q: 'Given the following function fun1() Please select the correct function calls def fun1(name, age): print(name, age)',
        options: ['fun1(name=’Emma’, age=23)', 'fun1(name=’Emma’, 23)', 'fun2(‘Emma’, 23)', 'None'],
        answer: 0
    },
    {
        q: ' What is the output of the following function call? def fun1(name, age=20): print(name, age) fun1("Emma", 25)',
        options: ['Emma 25', 'Emma 20'],
        answer: 0
    },
    {
        q: 'What is the output of the following function call? def fun1(num): return num + 25 fun1(5) print(num) ',
        options: ['25', '5', 'NameError', 'None'],
        answer: 2
    },
    {
        q: 'Python function always returns a value',
        options: ['True', 'False'],
        answer: 0
    },
    {
        q: ' What is the output of the following displayPerson() function call? def displayPerson(*args): for i in args: print(i) displayPerson(name="Emma", age="25")',
        options: ['TypeError', 'Emma 25', 'name age', 'None'],
        answer: 0
    },
    {
        q: 'What is the output of the following function call? def outerFun(a, b): def innerFun(c, d): return c + d  return innerFun(a, b)  return a result = outerFun(5, 10) print(result)',
        options: ['5', '15','(15, 5)','Syntax Error'],
        answer: 1
    },
    {
        q: ' Choose the correct function declaration of  fun1() so that we can execute the following function call successfully? fun1(25, 75, 55) fun1(10, 20)',
        options: ['def fun1(**kwargs)', 'No, it is not possible in Python','def fun1(args*)', 'def fun1(*data)'],
        answer: 3
    },
    {
        q: ' Select which false for Python function?',
        options: ['A function is a code block that only executes when it is called.', 'Python function always returns a value.', 'A function only executes when it is called and we can reuse it in a program', 'Python doesn’t support nested function'],
        answer: 3
    },
    {
        q: 'What is the output of the following display() function call?  def display(**kwargs): for i in kwargs: print(i) display(emp="Kelly", salary=9000)',
        options: ['TypeError', 'Kelly 9000', 'emp salary', 'None'],
        answer: 2
    }
]