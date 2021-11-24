const quiz = [
    {
        q: 'What is the output of the following code? aTuple = (100, 200, 300, 400, 500) print(aTuple[-2]) print(aTuple[-4:-1])',
        options: ['400 (200, 300, 400)', 'IndexError: tuple index out of range'],
        answer: 0
    },
    {
        q: 'What is the output of the following code? aTuple = (100, 200, 300, 400, 500) aTuple[1] = 800 print(aTuple)',
        options: ['TypeError', '(100, 800, 200, 300, 400, 500)', '(800, 100, 200, 300, 400, 500)'],
        answer: 0
    },
    {
        q: ' What is the type of the following variable? aTuple = ("Orange") print(type(aTuple))',
        options: ['str', 'array','tuple','list'],
        answer: 0
    },
    {
        q: 'What is the output of the following tuple operation? aTuple = (100, 200, 300, 400, 500) aTuple.pop(2)  print(aTuple) ',
        options: ['AttributeError', '(100, 300, 400, 500)', '(100, 200, 400, 500)'],
        answer: 0
    },
    {
        q: 'What is the output of the following? aTuple = "Yellow", 20, "Red" a, b, c = aTuple print(a)',
        options: ['Yellow', 'TyepeError', '(‘Yellow’, 20, ‘Red’)'],
        answer: 0
    },
    {
        q: 'What is the output of the following? tuple1 = (1120, "a") print(max(tuple1))',
        options: ['TypeError', '1120','‘a’'],
        answer: 0
    },
    {
        q: ' Select true statement regarding the Python tuple',
        options: ['We cannot remove the items from the tuple', 'We cannot delete the tuple', 'We can remove the item from tuple but we cannot update items of the tuple'],
        answer: 0
    },
    {
        q: ' A Python tuple can also be created without using parentheses',
        options: ['True', 'False'],
        answer: 0
    },
    {
        q: 'What is the output of the following? aTuple = (10, 20, 30, 40, 50, 60, 70, 80) print(aTuple[2:5], aTuple[:4], aTuple[3:]) ',
        options: ['(30, 40, 50) (10, 20, 30, 40) (40, 50, 60, 70, 80)', '(20, 30, 40, 50) (10, 20, 30, 40) (30, 40, 50, 60, 70, 80)'],
        answer: 0
    },
    {
        q: 'What is the output of the following tuple operation?  aTuple = (100,)  print(aTuple * 2)',
        options: ['(100, 100)', 'TypeError', '(200)'],
        answer: 0
    }
    
]