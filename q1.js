const quiz = [
    {
        q: 'What is the output of the following code? for i in range(10, 15, 1):',
        options: ['10, 11, 12, 13, 14,', '10, 11, 12, 13, 14,15,', '10, 11, 12, 13, 16,', '10, 11, 12, 13, 13,'],
        answer: 1
    },
    {
        q: 'What is the output of the following code?var1 = 1 var2 = 2 var3 = "3"print (var + var2 + var3)',
        options: ['6', '33', '123', 'Error'],
        answer: 3
    },
    {
        q: 'What is the output of the following code? var="James Bond" print(var[2::-1])',
        options: ['Jam', 'dno', 'maJ', 'dnoB semaJ'],
        answer: 2
    },
    {
        q: 'What is the output of the following code?var = "James" * 2  * 3 print(var)',
        options: ['JamesJamesJamesJamesJamesJames', 'JamesJamesJamesJamesJames', 'JamesJamesJames', 'Error: invalid syntax'],
        answer: 0
    },
    {
        q: 'What is the output of the following code?for x in range(0.5, 5.5, 0.5): print(x)',
        options: ['[0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5]', '[0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5]', '[0.5, 1, 1.5, 2,  3.5, 4, 4.5, 5]', 'The Program executed with errors'],
        answer: 3
    },
    {
        q: 'What is the output of the following code?x = 36 / 4 * (3 +  2) * 4 + 2 print(x)',
        options: ['182.0', '37', '117', 'The Program executed with errors'],
        answer: 0
    },
    {
        q: 'What is the output of the following code?',
        options: ['py', 'yn', 'pyn', 'yna'],
        answer: 1
    },
    {
        q: 'A string is immutable in Python?Every time when we modify the string, Python Always create a new String and assign a new string to that variable.',
        options: ['True', 'False'],
        answer: 0
    },
    {
        q: 'Which operator has higher precedence in the following list',
        options: ['% Modulus', '& BitWise AND', '** Exponent', '> Comparison'],
        answer: 2
    },
    {
        q: 'What is the output of the following code?salary = 8000 def printSalary(): salary = 12000 print("Salary:", salary) printSalary() print("Salary:", salary)',
        options: ['Salary: 12000 Salary: 8000', 'Salary: 8000 Salary: 12000', 'Salary: 8000 Salary: 4000', 'The program failed with errors'],
        answer: 0
    }
]