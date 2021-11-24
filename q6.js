const quiz = [
    {
        q: ' Select which is true for for loop?',
        options: ['Python’s for loop used to iterates over the items of list, tuple, dictionary, set, or string', 'else clause of for loop is executed when the loop terminates naturally','else clause of for loop is executed when the loop terminates abruptly', 'We use for loop when we want to perform a task indefinitely until a particular condition is met'],
        answer: 1
    },
    {
        q: 'What is the value of x?  x = 0  while (x < 100): x+=2 print(x)',
        options: ['101', '99', 'None of the above, this is an infinite loop', '100'],
        answer: 3
    },
    {
        q: 'What is the output of the following nested loop?  numbers = [10, 20]  items = ["Chair", "Table"] for x in numbers:  for y in items: print(x, y)',
        options: ['10 Chair  10 Table 20 Chair 20 Table', '10 Chair 10 Table'],
        answer: 0
    },
    {
        q: 'What is the output of the following for loop and  range() function?  for num in range(-2,-5,-1): print(num, end=", ") ',
        options: ['-2, -1, -3, -4', '-2, -1, 0, 1, 2, 3,', '-2, -1, 0', '-2, -3, -4'],
        answer: 3
    },
    {
        q: 'if -3 will evaluate to true',
        options: ['True', 'False'],
        answer: 0
    },
    {
        q: 'What is the output of the following if statement?  a, b = 12, 5  if a + b:  print("True")  else:  print("False") ',
        options: ['True', 'False'],
        answer: 0
    },
    {
        q: 'What is the value of x after the following nested for loop completes its execution?  x = 0  for i in range(10): for j in range(-1, -10, -1):  x += 1  print(x)',
        options: ['99', '90','100','None'],
        answer: 1
    },
    {
        q: 'What is the output of the following nested loop? for num in range(10, 14): for i in range(2, num):  if num%i == 1: print(num)  break ',
        options: ['10 11 12 13', '11 13'],
        answer: 0
    },
    {
        q: 'What is the output of the following loop? for l in "Jhon":  if l == "o":  pass  print(l, end=", ")',
        options: ['J, h, n', 'J, h, o, n,'],
        answer: 1
    },
    {
        q: ' Given the nested if-else below, what will be the value x when the code executed successfully? x = 0 a = 5  b = 5  if a > 0:  if b < 0:   x = x + 5   elif a > 5:  x = x + 4  else:  x = x + 3  else:  x = x + 2  print(x)',
        options: ['0', '4', '2', '3'],
        answer: 3
    }
]