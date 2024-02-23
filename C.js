const quizData = [
    {
        question: "1) What will be the output of given code ?\nint arr[3][3] = {{0}};\nint sum = 0;\nfor (int i = 0; i < 3; i++) {\n    for (int j = 0; j < i + 1; j++) {\n        arr[i][j] = j + 1;\n    }\n}\nfor (int i = 0; i < 3; i++) {\n    for (int j = 0; j < i + 1; j++) {\n        sum += arr[i][j];\n    }\n}\nprintf(\"%d\", sum);",
        options: [
            "a) 6",
            "b) 15",
            "c) 21",
            "d) 10"
        ],
        answer: "c) 21"
    },
    {
        question: "2) What will be the output of given code ?\nint arr[] = {0, 1, 2, 3, 4, 5, 6, 7, 8, 9};\nint n = 6;\nn = arr[arr[n] / 2];\nprintf(\"%d\", arr[n] / 2);",
        options: [
            "a) 0",
            "b) 1",
            "c) 3",
            "d) 6"
        ],
        answer: "b) 1"
    },
    {
        question: " 3) What will be the output of given code ?\nchar array_variable[10] = {'i'};\nfor (int i = 0; i < 10; i++) {\n    printf(\"%c\", array_variable[i]);\n}",
        options: [
            "a) iiiiiiiiii",
            "b) i",
            "c) 10",
            "d) ii"
        ],
        answer: "a) iiiiiiiiii"
    },
    {
        question: "4) What will be the output of given code ?\nint array_variable[3][3] = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}};\nint sum = 0;\nfor (int i = 0; i < 3; i++) {\n    for (int j = 0; j < 3; j++) {\n        sum += array_variable[i][j];\n    }\n}\nprintf(\"%d\", sum / 5);",
        options: [
            "a) 12",
            "b) 9",
            "c) 45",
            "d) 15"
        ],
        answer: "b) 9"
    },
    {
        question: "5) What will be the output of given code ?\nint arr[3] = {0};\nprintf(\"%d\", arr[0]);",
        options: [
            "a) 1",
            "b) 3",
            "c) 0",
            "d) None"
        ],
        answer: "c) 0"
    },
    {
        question: "6) What will be the output of given code ?\n// This will raise an IndexError in Python as the index 6 is out of bounds for the array.\n// int numbers[5] = {1, 2, 3, 4, 5};\n// printf(\"%d\", numbers[6]);\n// Uncommenting this line will cause an error.\nprintf(\"a) IndexError\");",
        options: [
            "a) IndexError",
            "b) 6",
            "c) 5",
            "d) None"
        ],
        answer: "a) IndexError"
    },
    {
        question: "7) What will be the output of given code ?\nint arr[5] = {0};\nprintf(\"%d\", arr[2]);",
        options: [
            "a) 5",
            "b) 3",
            "c) 0",
            "d) 2"
        ],
        answer: "c) 0"
    },
    {
        question: "8) What will be the output of given code ?\nint numbers[3] = {0};\nprintf(\"%d\", sizeof(numbers) / sizeof(numbers[0]));",
        options: [
            "a) 3",
            "b) 0",
            "c) 1",
            "d) 2"
        ],
        answer: "a) 3"
    },
    {
        question: "9) What will be the output of given code ?\nint arr[5] = {1, 2, 3, 4, 5};\nprintf(\"%d\", arr[sizeof(arr) / sizeof(arr[0]) - 1]);",
        options: [
            "a) 5",
            "b) 1",
            "c) 4",
            "d) None"
        ],
        answer: "a) 5"
    },
    {
        question: "10) What will be the output of given code ?\nint arr[5] = {1, 2, 3, 4, 5};\nfor (int i = 0; i < sizeof(arr) / sizeof(arr[0]); i++) {\n    printf(\"%d \", arr[i]);\n}",
        options: [
            "a) 1 2 3 4 5",
            "b) 5 4 3 2 1",
            "c) 1 3 5",
            "d) 2 4 6"
        ],
        answer: "a) 1 2 3 4 5"
    },
    {
        question: "11) What will be the output of given code ?\nint arr[5] = {0};\nprintf(\"%d\", arr[4]);",
        options: [
            "a) 5",
            "b) 0",
            "c) 4",
            "d) None"
        ],
        answer: "b) 0"
    },
    {
        question: "12) What will be the output of given code ?\nint arr[3] = {1, 2, 3};\narr[1] = arr[2];\nprintf(\"%d\", arr[1]);",
        options: [
            "a) 1",
            "b) 2",
            "c) 3",
            "d) None"
        ],
        answer: "c) 3"
    },
    {
        question: "13) Consider the following C code:\n\n```c\n#include <stdio.h>\nint main() {\n    int x = 10;\n    int *p = &x;\n    *p = 20;\n    printf(\"%d \", x);\n    return 0;\n}\n```\n\nWhat will be the output?",
        options: [
            "a) 10",
            "b) 20",
            "c) Compilation error",
            "d) Runtime error"
        ],
        answer: "b) 20"
    },
    {
        question: "14) What will be the output of the following C code snippet?\n\n```c\n#include <stdio.h>\nint main() {\n    char *str = \"Hello\";\n    *str = 'h';\n    printf(\"%s\", str);\n    return 0;\n}\n```",
        options: [
            "a) hello",
            "b) Hello",
            "c) Compilation error",
            "d) Runtime error"
        ],
        answer: "c) Compilation error"
    },
    {
        question: "15) Consider the following C code snippet:\n\n```c\n#include <stdio.h>\nint main() {\n    char str[] = \"Hello\";\n    printf(\"%c \", str[5]);\n    return 0;\n}\n```\n\nWhat will be the output?",
        options: [
            "a) Runtime error",
            "b) Compilation error",
            "c) Space",
            "d) NULL character"
        ],
        answer: "d) NULL character"
    },
    {
        question: "16) What will be the output of the following C code snippet?\n\n```c\n#include <stdio.h>\nint main() {\n    int x = 10;\n    int *p;\n    *p = x;\n    printf(\"%d\", *p);\n    return 0;\n}\n```",
        options: [
            "a) 10",
            "b) 0",
            "c) Compilation error",
            "d) Runtime error"
        ],
        answer: "d) Runtime error"
    },
    {
        question: "17) Consider the following C code:\n\n```c\n#include <stdio.h>\nint main() {\n    char *str = \"Hello\";\n    str[0] = 'h';\n    printf(\"%s\", str);\n    return 0;\n}\n```\n\nWhat will be the output?",
        options: [
            "a) hello",
            "b) Hello",
            "c) Compilation error",
            "d) Runtime error"
        ],
        answer: "c) Compilation error"
    },
    {
        question: "18) What will be the output of the following C code snippet?\n\n```c\n#include <stdio.h>\nint main() {\n    int arr[5] = {1, 2, 3, 4, 5};\n    int *ptr = arr;\n    printf(\"%d\", *ptr++);\n    return 0;\n}\n```",
        options: [
            "a) 1",
            "b) 2",
            "c) 5",
            "d) Compilation error"
        ],
        answer: "a) 1"
    },
    {
        question: "19) Consider the following C code snippet:\n\n```c\n#include <stdio.h>\nint main() {\n    int x = 10;\n    int *ptr;\n    ptr = &x;\n    printf(\"%d\", ptr);\n    return 0;\n}\n```\n\nWhat will be the output?",
        options: [
            "a) 10",
            "b) Address of x",
            "c) Compilation error",
            "d) Runtime error"
        ],
        answer: "b) Address of x"
    },
    {
        question: "20) What will be the output of the following C code snippet?\n\n```c\n#include <stdio.h>\nint main() {\n    char *ptr;\n    printf(\"%d\", sizeof(ptr));\n    return 0;\n}\n```",
        options: [
            "a) 1",
            "b) 2",
            "c) 4",
            "d) 8"
        ],
        answer: "c) 4"
    },
    {
        question: "21) Consider the following C code snippet:\n\n```c\n#include <stdio.h>\nint main() {\n    char *str = \"Hello\";\n    printf(\"%c\", str[5]);\n    return 0;\n}\n```\n\nWhat will be the output?",
        options: [
            "a) Runtime error",
            "b) Compilation error",
            "c) Space",
            "d) NULL character"
        ],
        answer: "d) NULL character"
    },
    {
        question: "22) What will be the output of the following C code snippet?\n\n```c\n#include <stdio.h>\nint main() {\n    char str[] = \"Hello\";\n    str[0] = 'h';\n    printf(\"%s\", str);\n    return 0;\n}\n```",
        options: [
            "a) hello",
            "b) Hello",
            "c) Compilation error",
            "d) Runtime error"
        ],
        answer: "a) hello"
    },
        {
            question: "23) What will be the output of the following C code snippet?\n\n```c\n#include <stdio.h>\nint main() {\n    int arr[5];\n    printf(\"%d\", arr[5]);\n    return 0;\n}\n```",
            options: [
                "a) 0",
                "b) Garbage value",
                "c) Compilation error",
                "d) Runtime error"
            ],
            answer: "d) Runtime error"
        },
        {
            question: "24) Consider the following C code snippet:\n\n```c\n#include <stdio.h>\nint main() {\n    char str[5] = \"Hello\";\n    printf(\"%s\", str);\n    return 0;\n}\n```\n\nWhat will be the output?",
            options: [
                "a) Hello",
                "b) Compilation error",
                "c) Runtime error",
                "d) Garbage value"
            ],
            answer: "b) Compilation error"
        },
        {
            question: "25) What will be the output of the following C code snippet?\n\n```c\n#include <stdio.h>\nint main() {\n    int a = 5;\n    printf(\"%d\", ++a++);\n    return 0;\n}\n```",
            options: [
                "a) 5",
                "b) 6",
                "c) Compilation error",
                "d) Runtime error"
            ],
            answer: "c) Compilation error"
        }    
];
