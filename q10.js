const quiz = [
    {
        q: 'The symmetric_difference() method returns a set that contains all items from both sets, but not the items that are present in both sets.',
        options: ['True', 'False'],
        answer: 0
    },
    {
        q: ' What is the output of the following?  set1 = {10, 20, 30, 40, 50}  set2 = {60, 70, 10, 30, 40, 80, 20, 50} print(set1.issubset(set2)) print(set2.issuperset(set1))',
        options: ['False True', 'True False', 'False False', 'True True'],
        answer: 3
    },
    {
        q: ' What is the output of the following set operation?  set1 = {"Yellow", "Orange", "Black"} set2 = {"Orange", "Blue", "Pink"} set3 = set2.difference(set1) print(set3) ',
        options: ['{‘Pink’, ‘Blue’}', '{‘Yellow’, ”Black’}'],
        answer: 0
    },
    {
        q: 'What is the output of the following set operation?  sampleSet = {"Yellow", "Orange", "Black"} sampleSet.update(["Blue", "Green", "Red"]) print(sampleSet) ',
        options: ['{‘Yellow’, ‘Orange’, ‘Black’, [“Blue”, “Green”, “Red”]}', 'TypeError: update() doesn’t allow list as a argument.', '{‘Yellow’, ‘Orange’, ‘Red’, ‘Black’, ‘Green’, ‘Blue’}'],
        answer: 2
    },
    {
        q: 'What is the output of the following? sampleSet = {"Yellow", "Orange", "Black"} sampleSet.discard("Blue") print(sampleSet)',
        options: ['{‘Yellow’, ‘Orange’, ‘Black’}', 'KeyError: ‘Blue’'],
        answer: 0
    },
    {
        q: 'What is the output of the following code? sampleSet = {"Yellow", "Orange", "Black"} print(sampleSet[1]) ',
        options: ['Syntax Error', 'Yellow', 'Orange'],
        answer: 0
    },
    {
        q: ' What is the output of the following code? aSet = {1, "PYnative", ("abc", "xyz"), True} print(aSet)',
        options: ['TypeError', '{‘PYnative’, 1, (‘abc’, ‘xyz’)}','{‘PYnative’, 1, (‘abc’, ‘xyz’), True}'],
        answer: 1
    },
    {
        q: ' What is the output of the following? sampleSet = {"Yellow", "Orange", "Black"} sampleSet.add("Blue") sampleSet.add("Orange") print(sampleSet) ',
        options: ['{‘Blue’, ‘Orange’, ‘Yellow’, ‘Black’}', '{‘Blue’, ‘Orange’, ‘Yellow’, ‘Orange’, ‘Black’}'],
        answer: 0
    },
    {
        q: 'Select  the wrong option to remove “Orange” from the set. sampleSet = {"Yellow", "Orange", "Black"} ',
        options: ['sampleSet.pop(“Orange”)', 'sampleSet.discard(“Orange”)', 'sampleSet.discard(“Orange”)'],
        answer: 0
    },
    {
        q: ' The isdisjoint() method returns True if none of the items are present in both sets, otherwise, it returns False.',
        options: ['True', 'False'],
        answer: 0
    }
]