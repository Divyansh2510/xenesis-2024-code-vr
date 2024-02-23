const quizData = [
    {
        question: "1) What will be the output of the following C++ code?\n#include <iostream>\nusing namespace std;\nint main() {\n    int x = 10;\n    if (x++ == 10) {\n        cout << \"Hello\";\n    }\n    return 0;\n}",
        options: [
            "a) Hello",
            "b) No output",
            "c) Compiler error",
            "d) Runtime error"
        ],
        answer: "a) Hello"
    },
    {
        question: "2) What will be the output of the following C++ code?\n#include <iostream>\nusing namespace std;\nint main() {\n    int x = 10;\n    if (++x == 10) {\n        cout << \"Hello\";\n    }\n    return 0;\n}",
        options: [
            "a) Hello",
            "b) No output",
            "c) Compiler error",
            "d) Runtime error"
        ],
        answer: "b) No output"
    },
    {
        question: "3) What will be the output of the following C++ code?\n#include <iostream>\nusing namespace std;\nint main() {\n    int x = 10;\n    cout << (x >= 10 ? \"Yes\" : \"No\");\n    return 0;\n}",
        options: [
            "a) Yes",
            "b) No",
            "c) Compiler error",
            "d) Runtime error"
        ],
        answer: "a) Yes"
    },
    {
        question: "4) What will be the output of the following C++ code?\n#include <iostream>\nusing namespace std;\nint main() {\n    int x = 10;\n    cout << (x == 10 ? \"Yes\" : \"No\");\n    return 0;\n}",
        options: [
            "a) Yes",
            "b) No",
            "c) Compiler error",
            "d) Runtime error"
        ],
        answer: "a) Yes"
    },
    {
        question: "5) What will be the output of the following C++ code?\n#include <iostream>\nusing namespace std;\nint main() {\n    int x = 10;\n    cout << (x != 10 ? \"Yes\" : \"No\");\n    return 0;\n}",
        options: [
            "a) Yes",
            "b) No",
            "c) Compiler error",
            "d) Runtime error"
        ],
        answer: "b) No"
    },
    {
        question: "6) What will be the output of the following C++ code?\n#include <iostream>\nusing namespace std;\nint main() {\n    int x = 10;\n    cout << (x > 10 ? \"Yes\" : \"No\");\n    return 0;\n}",
        options: [
            "a) Yes",
            "b) No",
            "c) Compiler error",
            "d) Runtime error"
        ],
        answer: "b) No"
    },
    {
        question: "7) What will be the output of the following C++ code?\n#include <iostream>\nusing namespace std;\nint main() {\n    int x = 10;\n    cout << (x < 10 ? \"Yes\" : \"No\");\n    return 0;\n}",
        options: [
            "a) Yes",
            "b) No",
            "c) Compiler error",
            "d) Runtime error"
        ],
        answer: "b) No"
    },
    {
        question: "8) What will be the output of the following C++ code?\n#include <iostream>\nusing namespace std;\nint main() {\n    int x = 10;\n    cout << (x <= 10 ? \"Yes\" : \"No\");\n    return 0;\n}",
        options: [
            "a) Yes",
            "b) No",
            "c) Compiler error",
            "d) Runtime error"
        ],
        answer: "a) Yes"
    },
    {
        question: "9) What will be the output of the following C++ code?\n#include <iostream>\nusing namespace std;\nint main() {\n    int x = 10;\n    cout << (x >= 11 ? \"Yes\" : \"No\");\n    return 0;\n}",
        options: [
            "a) Yes",
            "b) No",
            "c) Compiler error",
            "d) Runtime error"
        ],
        answer: "b) No"
    },
    {
        question: "10) What will be the output of the following C++ code?\n#include <iostream>\nusing namespace std;\nint main() {\n    int x = 10;\n    cout << (x <= 9 ? \"Yes\" : \"No\");\n    return 0;\n}",
        options: [
            "a) Yes",
            "b) No",
            "c) Compiler error",
            "d) Runtime error"
        ],
        answer: "b) No"
    },
        {
            question: "11) What is the output of the following C++ code?\n#include <iostream>\nusing namespace std;\nint main() {\n    int x = 5;\n    int y = 10;\n    int *ptr = &x;\n    *ptr += 10;\n    ptr = &y;\n    (*ptr)++; \n    cout << x << endl;\n    return 0;\n}",
            options: [
                "a) 6",
                "b) 15",
                "c) 10",
                "d) 11"
            ],
            answer: "a) 6"
        },
        {
            question: "12) What is the output of the following C++ code?\n#include <iostream>\nusing namespace std;\nint main() {\n    int arr[5] = {1, 2, 3, 4, 5};\n    int *ptr = arr + 3;\n    cout << *ptr << endl;\n    return 0;\n}",
            options: [
                "a) 1",
                "b) 2",
                "c) 3",
                "d) 4"
            ],
            answer: "d) 4"
        },
        {
            question: "13) What is the output of the following C++ code?\n#include <iostream>\nusing namespace std;\nint main() {\n    int arr[5] = {1, 2, 3, 4, 5};\n    int *ptr = arr;\n    cout << *(ptr + 2) << endl;\n    return 0;\n}",
            options: [
                "a) 1",
                "b) 2",
                "c) 3",
                "d) 4"
            ],
            answer: "c) 3"
        },
        {
            question: "14) What is the output of the following C++ code?\n#include <iostream>\nusing namespace std;\nint main() {\n    int arr[5] = {1, 2, 3, 4, 5};\n    int *ptr = arr;\n    cout << *ptr++ << endl;\n    return 0;\n}",
            options: [
                "a) 1",
                "b) 2",
                "c) 3",
                "d) 4"
            ],
            answer: "a) 1"
        },
        {
            question: "15) What is the output of the following C++ code?\n#include <iostream>\nusing namespace std;\nint main() {\n    int arr[5] = {1, 2, 3, 4, 5};\n    int *ptr = arr + 3;\n    cout << ptr[-2] << endl;\n    return 0;\n}",
            options: [
                "a) 1",
                "b) 2",
                "c) 3",
                "d) 4"
            ],
            answer: "b) 2"
        },
        {
            question: "16) What is the output of the following C++ code?\n#include <iostream>\nusing namespace std;\nint main() {\n    int arr[5] = {1, 2, 3, 4, 5};\n    int *ptr = arr;\n    cout << *(ptr--) << endl;\n    return 0;\n}",
            options: [
                "a) 1",
                "b) 2",
                "c) 3",
                "d) 4"
            ],
            answer: "a) 1"
        },
        {
            question: "17) What is the output of the following C++ code?\n#include <iostream>\nusing namespace std;\nint main() {\n    int arr[5] = {1, 2, 3, 4, 5};\n    int *ptr = arr;\n    cout << *(--ptr) << endl;\n    return 0;\n}",
            options: [
                "a) 1",
                "b) 2",
                "c) 3",
                "d) 4"
            ],
            answer: "Runtime error"
        },
        {
            question: "18) What is the output of the following C++ code?\n#include <iostream>\nusing namespace std;\nint main() {\n    int arr[5] = {1, 2, 3, 4, 5};\n    int *ptr = &arr[5];\n    cout << *ptr << endl;\n    return 0;\n}",
            options: [
                "a) 1",
                "b) 2",
                "c) 3",
                "d) Runtime error"
            ],
            answer: "Runtime error"
        },
        {
            question: "19) What is the output of the following C++ code?\n#include <iostream>\nusing namespace std;\nint main() {\n    int arr[5] = {1, 2, 3, 4, 5};\n    int *ptr = arr;\n    cout << *(ptr + 5) << endl;\n    return 0;\n}",
            options: [
                "a) 1",
                "b) 2",
                "c) 3",
                "d) Runtime error"
            ],
            answer: "Runtime error"
        },
        {
            question: "20) What is the output of the following C++ code?\n#include <iostream>\nusing namespace std;\nint main() {\n    int arr[5] = {1, 2, 3, 4, 5};\n    int *ptr = &arr[2];\n    cout << *(ptr - 2) << endl;\n    return 0;\n}",
            options: [
                "a) 1",
                "b) 2",
                "c) 3",
                "d) 4"
            ],
            answer: "a) 1"
        },
        {
            question: "21) What is the output of the following C++ code?\n#include <iostream>\nusing namespace std;\nint main() {\n    int arr[] = {10, 20, 30, 40, 50};\n    int *ptr1 = arr;\n    int *ptr2 = ptr1 + 3;\n    cout << (*ptr1 + *ptr2) << endl;\n    return 0;\n}",
            options: [
                "a) 10",
                "b) 20",
                "c) 70",
                "d) 90"
            ],
            answer: "c) 70"
        },
        {
            question: "22) What is the output of the following C++ code?\n#include <iostream>\nusing namespace std;\nint main() {\n    int arr[] = {1, 2, 3, 4, 5};\n    int *ptr = arr + 2;\n    cout << *(ptr++) << endl;\n    return 0;\n}",
            options: [
                "a) 1",
                "b) 2",
                "c) 3",
                "d) 4"
            ],
            answer: "c) 3"
        },
        {
            question: "23) What is the output of the following C++ code?\n#include <iostream>\nusing namespace std;\nint main() {\n    int arr[] = {1, 2, 3, 4, 5};\n    int *ptr = arr + 2;\n    cout << *(--ptr) << endl;\n    return 0;\n}",
            options: [
                "a) 1",
                "b) 2",
                "c) 3",
                "d) 4"
            ],
            answer: "b) 2"
        },
        {
            question: "24) What is the output of the following C++ code?\n#include <iostream>\nusing namespace std;\nint main() {\n    int arr[] = {1, 2, 3, 4, 5};\n    int *ptr1 = arr;\n    int *ptr2 = arr + 2;\n    cout << *ptr2 - *ptr1 << endl;\n    return 0;\n}",
            options: [
                "a) 1",
                "b) 2",
                "c) 3",
                "d) 4"
            ],
            answer: "c) 3"
        },
        {
            question: "25) What is the output of the following C++ code?\n#include <iostream>\nusing namespace std;\nint main() {\n    int arr[] = {1, 2, 3, 4, 5};\n    int *ptr1 = arr;\n    int *ptr2 = arr + 4;\n    cout << ptr2 - ptr1 << endl;\n    return 0;\n}",
            options: [
                "a) 1",
                "b) 2",
                "c) 3",
                "d) 4"
            ],
            answer: "d) 4"
        }
];
