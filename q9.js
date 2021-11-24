const quiz = [
    {
        q: ' What is the output of the following? aList = [1, 2, 3, 4, 5, 6, 7]  pow2 =  [2 * x for x in aList] print(pow2)',
        options: ['[2, 4, 6, 8, 10, 12, 14]', '[2, 4, 8, 16, 32, 64, 128]'],
        answer: 0
    },
    {
        q: 'What is the output of the following? aList = [5, 10, 15, 25]  print(aList[::-2])',
        options: ['[10, 5,10]', '[10, 5]', '[15, 10, 5]', '[25, 10]'],
        answer: 3
    },
    {
        q: ' In Python, list is mutable',
        options: ['True', 'False'],
        answer: 0
    },
    {
        q: ' What is the output of the following code?  my_list = ["Hello", "Python"] print("-".join(my_list))',
        options: ['HelloPython-', '-HelloPython', 'Hello-Python', 'None'],
        answer: 2
    },
    {
        q: 'What is the output of the following list assignment? aList = [4, 8, 12, 16] aList[1:4] = [20, 24, 28] print(aList)',
        options: ['[4, 20, 24, 28]', '[ 20, 24, 28, 8, 12, 16]', '[4, 20, 24,  8, 12, 16]', '[4, 20, 24, 28, 8]'],
        answer: 0
    },
    {
        q: 'What is the output of the following list operation? sampleList = [10, 20, 30, 40, 50]  print(sampleList[-2]) print(sampleList[-4:-1]) ',
        options: ['40  [20, 30, 40]', 'IndexError: list index out of range', '40  [40, 30, 40]', '40  [30, 30, 40]'],
        answer: 0
    },
    {
        q: 'Select  the wrong options to copy a list? aList = ["a", "b", "c", "d"]',
        options: ['newList = aList.copy()', 'newList.copy(aList)','newList = list(aList)'],
        answer: 1
    },
    {
        q: 'What is the output of the following code?  list1 = ["xyz", "zara", "PYnative"]  print (max(list1))',
        options: ['xyz', 'PYnative','zara', 'None'],
        answer: 2
    },
    {
        q: 'What is the output of the following code? sampleList = [10, 20, 30, 40] del sampleList[0:6] print(sampleList) ',
        options: ['[10, 20,40]', '[10, 20]', '[]', 'list index out of range'],
        answer: 2
    },
    {
        q: ' What is the output of the following? l = [None] * 10  print(len(l))',
        options: ['10', '0', 'Syntax Error', 'None'],
        answer: 0
    }
]