const quizData = [
    {
        question: "1) What will be the output of given code ?\narr = [None] * 3\narr[0] = [0] * 1\narr[1] = [0] * 2\narr[2] = [0] * 3\nsum = 0\nfor i in range(3):\n    for j in range(i + 1):\n        arr[i][j] = j + 1\nfor i in range(3):\n    for j in range(i + 1):\n        sum += arr[i][j]\nprint(sum)",
        options: [
            "a) 6",
            "b) 15",
            "c) 21",
            "d) 10"
        ],
        answer: "c) 21"
    },
    {
        question: "2) What will be the output of given code ?\narr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]\nn = 6\nn = arr[arr[n] // 2]\nprint(arr[n] // 2)",
        options: [
            "a) 0",
            "b) 1",
            "c) 3",
            "d) 6"
        ],
        answer: "b) 1"
    },
        {
            question: " 3) What will be the output of given code ?\narray_variable = ['i'] * 10\nfor i in range(10):\n    print(array_variable[i], end=\"\")",
            options: [
                "a) iiiiiiiiii",
                "b) i",
                "c) 10",
                "d) ii"
            ],
            answer: "a) iiiiiiiiii"
        },
        {
            question: " 4) What will be the output of given code ?\narray_variable = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]\nsum = 0\nfor i in range(3):\n    for j in range(3):\n        sum += array_variable[i][j]\nprint(sum // 5)",
            options: [
                "a) 12",
                "b) 9",
                "c) 45",
                "d) 15"
            ],
            answer: "b) 9"
        },
        {
            question: " 5) What will be the output of given code ?\narr = [0] * 3\nprint(arr[0])",
            options: [
                "a) 1",
                "b) 3",
                "c) 0",
                "d) None"
            ],
            answer: "c) 0"
        },
        {
            question: " 6) What will be the output of given code ?\nThis will raise an IndexError in Python as the index 6 is out of bounds for the array.\nnumbers = [1, 2, 3, 4, 5]\nprint(numbers[6])   Uncommenting this line will cause an error.",
            options: [
                "a) IndexError",
                "b) 6",
                "c) 5",
                "d) None"
            ],
            answer: "a) IndexError"
        },
        {
            question: " 7) What will be the output of given code ?\narr = [0] * 5\nprint(arr[2])",
            options: [
                "a) 5",
                "b) 3",
                "c) 0",
                "d) 2"
            ],
            answer: "c) 0"
        },
        {
            question: " 8) What will be the output of given code ?\nnumbers = [0] * 3\nprint(len(numbers))",
            options: [
                "a) 3",
                "b) 0",
                "c) 1",
                "d) 2"
            ],
            answer: "a) 3"
        },
        {
            question: " 9) What will be the output of given code ?\narr = [1, 2, 3, 4, 5]\nprint(arr[len(arr) - 1])",
            options: [
                "a) 5",
                "b) 1",
                "c) 4",
                "d) None"
            ],
            answer: "a) 5"
        },
        {
            question: " 10) What will be the output of given code ?\narr = [1, 2, 3, 4, 5]\nfor i in range(len(arr)):\n    print(arr[i], end=\" \")",
            options: [
                "a) 1 2 3 4 5",
                "b) 5 4 3 2 1",
                "c) 1 3 5",
                "d) 2 4 6"
            ],
            answer: "a) 1 2 3 4 5"
        },
        {
            question: " 11) What will be the output of given code ?\narr = [0] * 5\nprint(arr[4])",
            options: [
                "a) 5",
                "b) 0",
                "c) 4",
                "d) None"
            ],
            answer: "b) 0"
        },
        {
            question: " 12) What will be the output of given code ?\narr = [1, 2, 3]\narr[1] = arr[2]\nprint(arr[1])",
            options: [
                "a) 1",
                "b) 2",
                "c) 3",
                "d) None"
            ],
            answer: "c) 3"
        },
            {
                question: "13) What will be the output of the following Python code?\ndef foo(i, x=[]):\n    x.append(i)\n    return x\n\nfor i in range(3):\n    print(foo(i))",
                options: [
                    "a) [0]", 
                    "b) [0, 1]", 
                    "c) [0, 1, 2]", 
                    "d) [1, 2, 3]"
                ],
                answer: "c) [0, 1, 2]"
            },
            {
                question: "14) What will be the output of the following Python code?\nprint(bool(-0.0))",
                options: [
                    "a) True",
                    "b) False",
                    "c) Error",
                    "d) None of the above"
                ],
                answer: "a) True"
            },
            {
                question: "15) What will be the output of the following Python code?\nprint(1 == True)",
                options: [
                    "a) True",
                    "b) False",
                    "c) Error",
                    "d) None of the above"
                ],
                answer: "a) True"
            },
            {
                question: "16) What will be the output of the following Python code?\nprint(0 == False)",
                options: [
                    "a) True",
                    "b) False",
                    "c) Error",
                    "d) None of the above"
                ],
                answer: "a) True"
            },
            {
                question: "17) What will be the output of the following Python code?\nprint(type(type(int)))",
                options: [
                    "a) int",
                    "b) type",
                    "c) Error",
                    "d) None of the above"
                ],
                answer: "b) type"
            },
            {
                question: "18) What will be the output of the following Python code?\nprint(3 * 3 ** 3)",
                options: [
                    "a) 9",
                    "b) 27",
                    "c) 81",
                    "d) 729"
                ],
                answer: "c) 81"
            },
            {
                question: "19) What will be the output of the following Python code?\nprint('abc'.encode('abc'))",
                options: [
                    "a) Error",
                    "b) b'abc'",
                    "c) abc",
                    "d) None of the above"
                ],
                answer: "a) Error"
            },
            {
                question: "20) What will be the output of the following Python code?\nprint(chr(ord('b') + 1))",
                options: [
                    "a) b",
                    "b) c",
                    "c) d",
                    "d) Error"
                ],
                answer: "b) c"
            },
            {
                question: "21) What will be the output of the following Python code?\nprint('abcdefcdghcd'.split('cd', 2))",
                options: [
                    "a) ['ab', 'ef', 'gh', '']",
                    "b) ['ab', 'ef']",
                    "c) Error",
                    "d) None of the above"
                ],
                answer: "a) ['ab', 'ef', 'gh', '']"
            },
            {
                question: "22) What will be the output of the following Python code?\nprint(all([i == i for i in range(10)]))",
                options: [
                    "a) True",
                    "b) False",
                    "c) Error",
                    "d) None of the above"
                ],
                answer: "a) True"
            },
            {
                question: "23) What will be the output of the following Python code?\nprint('I am ' + 'from ' * 2 + 'India')",
                options: [
                    "a) I am from from India",
                    "b) I am from India from",
                    "c) I am from from from India",
                    "d) Error"
                ],
                answer: "a) I am from from India"
            },
            {
                question: "24) What will be the output of the following Python code?\nprint(list(map(lambda x: x**x, [1, 2, 3])))",
                options: [
                    "a) [1, 4, 9]",
                    "b) [1, 2, 3]",
                    "c) Error",
                    "d) None of the above"
                ],
                answer: "a) [1, 4, 9]"
            },
            {
                question: "25) What will be the output of the following Python code?\nprint([i for i in range(5) if i % 2 == 0 else 'None'])",
                options: [
                    "a) [0, 2, 4]",
                    "b) [0, None, 2, None, 4]",
                    "c) Error",
                    "d) None of the above"
                ],
                answer: "c) Error"
            }
];
