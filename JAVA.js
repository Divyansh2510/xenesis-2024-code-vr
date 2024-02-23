const quizData = [
    {
        question: " 1) What will be the output of following code?\n class array_output\n{\npublic static void main(String args[])\n{int array_variable[]=new int[10];\nfor(int i=0;i<10;++i)\n{\narray_variable[i]=i;\nSystem.out.print(array_variable[i]+ );\ni++;}}} ",
        options: ["0 2 4 6 8", "1 3 5 7 ", "0 1 2 3 4 5 6 7 8 9 ", "1 2 3 4 5 6 7 8 9 10"],
        answer: "0 2 4 6 8"
    },
    {
        question: "2) What will be the output of the following Java code?\nclass multidimention_array \n{\npublic static void main(String args[])\n{\nint arr[][] = new int[3][];\narr[0] = new int[1];\narr[1] = new int[2];\narr[2] = new int[3];\nint sum = 0;\nfor (int i = 0; i < 3; ++i)\nfor (int j = 0; j < i + 1; ++j)\narr[i][j] = j + 1;\nfor (int i = 0; i < 3; ++i)\nfor (int j = 0; j < i + 1; ++j)\nsum += arr[i][j];\nSystem.out.print(sum);\n}\n}",
        options: ["11", "10", "13", "14"],
        answer: "10"
    },
    {
        question: "3) What will be the output of the following Java code?\nclass evaluate \n{\npublic static void main(String args[]) \n{\nint arr[] = new int[] {0 , 1, 2, 3, 4, 5, 6, 7, 8, 9};\nint n = 6;\nn = arr[arr[n] / 2];\nSystem.out.println(arr[n] / 2);\n}\n}",
        options: ["3", "0", "6", "1"],
        answer: "3"
    },
    {
        question: "4) What will be the output of the following Java code?\nclass array_output \n{\npublic static void main(String args[]) \n{\nchar array_variable [] = new char[10];\nfor (int i = 0; i < 10; ++i) \n{\narray_variable[i] = 'i';\nSystem.out.print(array_variable[i] + \"\");\n}\n}\n}",
        options: ["1 2 3 4 5 6 7 8 9 10", "0 1 2 3 4 5 6 7 8 9 10", "i j k l m n o p q r", "i i i i i i i i i i"],
        answer: "i i i i i i i i i i"
    },
    {
        question: "5) What will be the output of the following Java code?\nclass array_output \n{\npublic static void main(String args[]) \n{\nint array_variable[][] = {{ 1, 2, 3}, { 4 , 5, 6}, { 7, 8, 9}};\nint sum = 0;\nfor (int i = 0; i < 3; ++i)\nfor (int j = 0; j <  3 ; ++j)\nsum = sum + array_variable[i][j];\nSystem.out.print(sum / 5);\n}\n}",
        options: ["8", "9", "10", "11"],
        answer: "9"
    },
    {
        question: "6) What will be the output of the following code snippet?\nint[] arr = new int[3];\nSystem.out.println(arr[0]);",
        options: ["null", "0", "Compilation error", "Runtime error"],
        answer: "0"
    },
    {
        question: "7) What is the output of the following code snippet?\nint[] numbers = {1, 2, 3, 4, 5};\nSystem.out.println(numbers[6]);",
        options: ["0", "6", "Compilation error", "Runtime error"],
        answer: "Runtime error"
    },
    {
        question: "8) What will be the output of the following code snippet?\nint[] arr = new int[5];\nSystem.out.println(arr[2]);",
        options: ["0", "null", "Compilation error", "Runtime error"],
        answer: "0"
    },
    {
        question: "9) What does the following code snippet print?\nint[] numbers = new int[3];\nSystem.out.println(numbers.length);",
        options: ["3", "0", "Compilation error", "Runtime error"],
        answer: "3"
    },
    {
        question: "10) What is the output of the following code?\nint[] arr = {1, 2, 3, 4, 5};\nSystem.out.println(arr[arr.length - 1]);",
        options: ["1", "5", "0", "Compilation error"],
        answer: "5"
    },
    {
        question: "11) What will be printed by the following code?\nint[] arr = {1, 2, 3, 4, 5};\nfor (int i = 0; i < arr.length; i++) {\n    System.out.print(arr[i] + \" \");\n}",
        options: ["1 2 3 4 5", "0 1 2 3 4", "1 3 5", "Compilation error"],
        answer: "1 2 3 4 5"
    },
    {
        question: "12) What is the output of the following code snippet?\nint[] arr = new int[5];\nSystem.out.println(arr[4]);",
        options: ["null", "0", "Compilation error", "Runtime error"],
        answer: "0"
    },
    {
        question: "13) What will be the output of the following code snippet?\nint[] arr = {1, 2, 3};\narr[1] = arr[2];\nSystem.out.println(arr[1]);",
        options: ["1", "2", "3", "Compilation error"],
        answer: "3"
    },
    {
        question: "14) What is the result of executing the following code?\nint[][] matrix = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}};\nSystem.out.println(matrix[1][2]);",
        options: ["2", "4", "6", "8"],
        answer: "6"
    },
    {
        question: "15) What will be the output of the following code snippet?\nint[] arr = {3, 1, 4, 1, 5, 9};\nArrays.sort(arr);\nSystem.out.println(arr[2]);",
        options: ["1", "3", "4", "5"],
        answer: "3"
    },
    {
        question: "16) Consider the following code:\nint[][] grid = new int[3][];\ngrid[0] = new int[]{1, 2, 3};\ngrid[1] = new int[]{4, 5};\ngrid[2] = new int[]{6, 7, 8, 9};\nSystem.out.println(grid[1][1]);\nWhat will be printed?",
        options: ["1", "4", "5", "Compilation error"],
        answer: "5"
    },
    {
        question: "17) What will be the output of the following Java program?\nclass equality \n{\nint x;\nint y;\nboolean isequal()\n{\nreturn(x == y);  \n}\n}    \nclass Output \n{\npublic static void main(String args[])\n{\nequality obj = new equality();\nobj.x = 5;\nobj.y = 5;\nSystem.out.println(obj.isequal());\n} \n}",
        options: ["false", "true", "0", "1"],
        answer: "true"
    },
    {
        question: " 18) What will be the output of the following Java program?\nclass box \n{\nint width;\nint height;\nint length;\nint volume;\nvoid volume() \n{\n     volume = width*height*length;\n} \n}    \nclass Output \n{ \npublic static void main(String args[])\n{\nbox obj = new box();\nobj.height = 1;\nobj.length = 5;\nobj.width = 5;\nobj.volume();\nSystem.out.println(obj.volume);        \n} \n}",
        options: ["0", "1", "25", "26"],
        answer: "25"
    },
    {
        question: " 19) In the following Java code, which call to sum() method is appropriate?\nclass Output \n{\npublic static int sum(int ...x)\n{\nreturn; \n}\nstatic void main(String args[]) \n{    \n     sum(10);\n     sum(10,20);\n     sum(10,20,30);\n     sum(10,20,30,40);\n} \n}",
        options: ["only sum(10)", "only sum(10,20)", "only sum(10) & sum(10,20)", "all of the mentioned"],
        answer: "only sum(10,20) & sum(10,20,30,40)"
    },
    {
        question: " 20) class Output {\n\n    public static void display(String message) {\n        System.out.println('Message: ' + message);\n    }\n    \n    public static void main(String args[]) {    \n        display('Hello');\n        display('Hello', 'World');\n        display('Hello', 'World', '!');\n    } \n}\n\nWhat will be the output of the following Java code?",
        options: [
            "a) Message: Hello",
            "b) Compilation error",
            "c) Runtime error",
            "d) Message: Hello Message: Hello, World Message: Hello, World, !"
        ],
        answer: "d) Message: Hello Message: Hello, World Message: Hello, World, !"
    },
    {
        question: "21) class Output {\n\n    public static int add(int a, int b) {\n        return a + b;\n    }\n    \n    public static void main(String args[]) {    \n        add(10);\n        add(10, 20);\n        add(10, 20, 30);\n    } \n}\n\nWhat will be the output of the following Java code?",
        options: [
            "a) 10",
            "b) Compilation error",
            "c) Runtime error",
            "d) 30"
        ],
        answer: "b) Compilation error"
    },
    {
        question: "22) class Output {\n\n    public static void printNumbers(int... numbers) {\n        for (int num : numbers) {\n            System.out.print(num + ' ');\n        }\n        System.out.println();\n    }\n    \n    public static void main(String args[]) {    \n        printNumbers();\n        printNumbers(1, 2, 3);\n        printNumbers(4, 5, 6, 7);\n    } \n}\n\nWhat will be the output of the following Java code?",
        options: [
            "a) ",
            "b) 1 2 3 ",
            "c) 4 5 6 7 ",
            "d) Compilation error"
        ],
        answer: "a) "
    },
    {
        question: "23) class Output {\n\n    public static double calculateAverage(double... numbers) {\n        double sum = 0;\n        for (double num : numbers) {\n            sum += num;\n        }\n        return sum / numbers.length;\n    }\n    \n    public static void main(String args[]) {    \n        calculateAverage(10.0, 20.0, 30.0);\n        calculateAverage(5.0, 15.0);\n        calculateAverage();\n    } \n}\n\nWhat will be the output of the following Java code?",
        options: [
            "a) 20.0",
            "b) 12.5",
            "c) Compilation error",
            "d) Runtime error"
        ],
        answer: "c) Compilation error"
    },
    {
        question: " 24) class Output {\n\n    public static void printValues(int value1, int value2) {\n        System.out.println('Value1: ' + value1 + ', Value2: ' + value2);\n    }\n    \n    public static void main(String args[]) {    \n        printValues(10, 20);\n        printValues(30);\n        printValues(40, 50, 60);\n    } \n}\n\nWhat will be the output of the following Java code?",
        options: [
            "a) Value1: 10, Value2: 20",
            "b) Value1: 30, Value2: 0",
            "c) Value1: 40, Value2: 50",
            "d) Compilation error"
        ],
        answer: "d) Compilation error"
    },
     {
         question: " 25) What does the following Java program print?\n\npublic class PatternExample {\n    public static void main(String[] args) {\n        int n = 5;\n        for (int i = 0; i < n; i++) {\n            for (int j = n - i; j > 1; j--) {\n                System.out.print(' ');\n            }\n            for (int j = 0; j <= i; j++) {\n                System.out.print('* ');\n            }\n            System.out.println();\n        }\n    }\n}",
         options: [
           " a) A pyramid of asterisks with increasing width",
  
          "b) A pyramid of asterisks with decreasing width",

         "c) A triangle of asterisks with increasing width",

           "d) A triangle of asterisks with decreasing width"

         ],
        answer: "c) A triangle of asterisks with increasing width"
       }
    // {
    //     question: "26) class Output {\n\n    public static void displayInfo(String name, int age) {\n        System.out.println('Name: ' + name + ', Age: ' + age);\n    }\n    \n    public static void main(String args[]) {    \n        displayInfo('Alice', 25);\n        displayInfo(age=30, name='Bob');\n        displayInfo('Charlie');\n    } \n}\n\nWhat will be the output of the following Java code?",
    //     options: [
    //         "a) Name: Alice, Age: 25\n   Compilation error\n   Compilation error",
    //         "b) Name: Alice, Age: 25\n   Name: Bob, Age: 30\n   Compilation error",
    //         "c) Name: Alice, Age: 25\n   Compilation error\n   Name: Charlie, Age: 0",
    //         "d) Compilation error\n   Name: Bob, Age: 30\n   Name: Charlie, Age: 0"
    //     ],
    //     answer: "c) Name: Alice, Age: 25\n   Compilation error\n   Name: Charlie, Age: 0"
    // },
    // {
    //     question: "27) What does the following Java program print?\n\npublic class PatternExample {\n    public static void main(String[] args) {\n        int n = 5;\n        for (int i = 0; i < n; i++) {\n            for (int j = 2 * (n - i); j >= 0; j--) {\n                System.out.print(' ');\n            }\n            for (int j = 0; j <= i; j++) {\n                System.out.print('* ');\n            }\n            System.out.println();\n        }\n    }\n}\n",
    //     options: [
    //         "a) A triangle of asterisks with increasing width",
    //         "b) A pyramid of asterisks with decreasing width",
    //         "c) A triangle of asterisks with decreasing width",
    //         "d) A pyramid of asterisks with increasing width"
    //     ],
    //     answer: "b) A pyramid of asterisks with increasing width"
    // },
    // {
    //     question: "28) What does the following Java program print?\n\npublic class PatternExample {\n    public static void main(String[] args) {\n        int n = 5;\n        for (int i = 0; i < n; i++) {\n            for (int j = 0; j <= i; j++) {\n                System.out.print('* ');\n            }\n            System.out.println();\n        }\n    }\n}\n",
    //     options: [
    //         "a) A pyramid of asterisks with increasing width",
    //         "b) A pyramid of asterisks with decreasing width",
    //         "c) A triangle of asterisks with increasing width",
    //         "d) A triangle of asterisks with decreasing width"
    //     ],
    //     answer: "a) A pyramid of asterisks with increasing width"
    // },
    // {
    //     question: "29) What does the following Java program print?\n\npublic class PatternExample {\n    public static void main(String[] args) {\n        int n = 5;\n        for (int i = 1; i <= n; i++) {\n            for (int j = 1; j <= i; j++) {\n                System.out.print(j + ' ');\n            }\n            System.out.println();\n        }\n    }\n}\n",
    //     options: [
    //         "a) A triangle of numbers with increasing width",
    //         "b) A pyramid of numbers with decreasing width",
    //         "c) A pyramid of numbers with increasing width",
    //         "d) A triangle of numbers with decreasing width"
    //     ],
    //     answer: "c) A triangle of numbers with increasing width"
    // },
    // {
    //     question: "30) What does the following Java program print?\n\npublic class PatternExample {\n    public static void main(String[] args) {\n        int n = 5;\n        for (int i = 0; i < n; i++) {\n            for (int j = n - i; j > 1; j--) {\n                System.out.print(' ');\n            }\n            for (int j = 0; j <= i; j++) {\n                System.out.print((char)('A' + j) + ' ');\n            }\n            System.out.println();\n        }\n    }\n}\n",
    //     options: [
    //         "a) A triangle of letters with increasing width",
    //         "b) A pyramid of letters with decreasing width",
    //         "c) A triangle of letters with decreasing width",
    //         "d) A pyramid of letters with increasing width"
    //     ],
    //     answer: "d) A triangle of letters with increasing width"
    // },
    // {
    //     question: "31) What does the following Java program print?\n\npublic class PatternExample {\n    public static void main(String[] args) {\n        int n = 5;\n        for (int i = 0; i < n; i++) {\n            for (int j = 2 * (n - i); j >= 0; j--) {\n                System.out.print(' ');\n            }\n            for (int j = 0; j <= i; j++) {\n                System.out.print('* ');\n            }\n            System.out.println();\n        }\n    }\n}\n",
    //     options: [
    //         "a) A triangle of asterisks with increasing width",
    //         "b) A pyramid of asterisks with decreasing width",
    //         "c) A triangle of asterisks with decreasing width",
    //         "d) A pyramid of asterisks with increasing width"
    //     ],
    //     answer: "b) A pyramid of asterisks with decreasing width"
    // },
    // {
    //     question: "32) What does the following Java program print?\n\npublic class PatternExample {\n    public static void main(String[] args) {\n        int n = 5;\n        for (int i = 0; i < n; i++) {\n            for (int j = 0; j <= i; j++) {\n                System.out.print('* ');\n            }\n            System.out.println();\n        }\n    }\n}\n",
    //     options: [
    //         "a) A pyramid of asterisks with increasing width",
    //         "b) A pyramid of asterisks with decreasing width",
    //         "c) A triangle of asterisks with increasing width",
    //         "d) A triangle of asterisks with decreasing width"
    //     ],
    //     answer: "a) A pyramid of asterisks with increasing width"
    // },
    // {
    //     question: "33) What does the following Java program print?\n\npublic class PatternExample {\n    public static void main(String[] args) {\n        int n = 5;\n        for (int i = 0; i < n; i++) {\n            for (int j = n - i; j > 1; j--) {\n                System.out.print(' ');\n            }\n            for (int j = 0; j <= i; j++) {\n                System.out.print((char)('A' + i) + ' ');\n            }\n            System.out.println();\n        }\n        for (int i = n - 1; i > 0; i--) {\n            for (int j = 0; j < i; j++) {\n                System.out.print((char)('A' + i - 1) + ' ');\n            }\n            System.out.println();\n        }\n    }\n}\n",
    //     options: [
    //         "a) A diamond shape of letters",
    //         "b) A reversed pyramid of letters",
    //         "c) A combination of pyramid and triangle of letters",
    //         "d) A mirror image of a pyramid of letters"
    //     ],
    //     answer: "c) A combination of pyramid and triangle of letters"
    // },
    // {
    //     question: "34)What does the following Java program print?\n\npublic class PatternExample {\n    public static void main(String[] args) {\n        int n = 5;\n        for (int i = 1; i <= n; i++) {\n            for (int j = 1; j <= n - i; j++) {\n                System.out.print(' ');\n            }\n            for (int j = 1; j <= i; j++) {\n                System.out.print(j + ' ');\n            }\n            System.out.println();\n        }\n    }\n}\n",
    //     options: [
    //         "a) A right triangle of numbers",
    //         "b) A left triangle of numbers",
    //         "c) A pyramid of numbers with increasing width",
    //         "d) A diamond shape of numbers"
    //     ],
    //     answer: "a) A right triangle of numbers"
    // },
    // {
    //     question: "35) What does the following Java program print?\n\npublic class PatternExample {\n    public static void main(String[] args) {\n        int n = 5;\n        for (int i = 1; i <= n; i++) {\n            for (int j = 1; j <= i; j++) {\n                System.out.print(i + ' ');\n            }\n            System.out.println();\n        }\n    }\n}\n",
    //     options: [
    //         "a) A pyramid of numbers with increasing width",
    //         "b) A pyramid of numbers with decreasing width",
    //         "c) A triangle of numbers with increasing width",
    //         "d) A triangle of numbers with decreasing width"
    //     ],
    //     answer: "a) A pyramid of numbers with increasing width"
    // },
    // {
    //     question: "36)What does the following program print?\n\npublic class Edureka {\n    public static void main(String[] args) {\n        int rows = 5;\n        for (int i = rows; i >= 1; i--) {\n            for (int j = rows; j >= i; j--) {\n                System.out.print(j + ' ');\n            }\n            System.out.println();\n        }\n    }\n}\n",
    //     options: [
    //         "a) A descending order pattern of numbers",
    //         "b) An ascending order pattern of numbers",
    //         "c) A right triangle numeric pattern",
    //         "d) A binary number pattern"
    //     ],
    //     answer: "a) A descending order pattern of numbers"
    // },
    // {
    //     question: "37) What does the following program print?\n\npublic class Edureka {\n    public static void main(String[] args) {\n        int rows = 5;\n        for (int i = 1; i <= rows; i++) {\n            for (int j = i; j >= 1; j--) {\n                System.out.print(j + ' ');\n            }\n            System.out.println();\n        }\n    }\n}\n",
    //     options: [
    //         "a) A descending order pattern of numbers",
    //         "b) An ascending order pattern of numbers",
    //         "c) A right triangle numeric pattern",
    //         "d) A binary number pattern"
    //     ],
    //     answer: "c) A right triangle numeric pattern"
    // },
    // {
    //     question: "38) What does the following program print?\n\npublic class Edureka {\n    public static void main(String[] args) {\n        int rows = 5;\n        for (int i = 1; i <= rows; i++) {\n            int num;\n            if (i % 2 == 0) {\n                num = 0;\n                for (int j = 1; j <= rows; j++) {\n                    System.out.print(num);\n                    num = (num == 0) ? 1 : 0;\n                }\n            } else {\n                num = 1;\n                for (int j = 1; j <= rows; j++) {\n                    System.out.print(num);\n                    num = (num == 0) ? 1 : 0;\n                }\n            }\n            System.out.println();\n        }\n    }\n}\n",
    //     options: [
    //         "a) A descending order pattern of numbers",
    //         "b) An ascending order pattern of numbers",
    //         "c) A right triangle numeric pattern",
    //         "d) A binary number pattern"
    //     ],
    //     answer: "d) A binary number pattern"
    // },
    // {
    //     question: "39) What does the following program print?\n\npublic class Edureka {\n    public static void main(String[] args) {\n        int rows = 5;\n        for (int i = 1; i <= rows; i++) {\n            for (int j = 1; j <= i; j++) {\n                if (j % 2 == 0) {\n                    System.out.print(0);\n                } else {\n                    System.out.print(1);\n                }\n            }\n            System.out.println();\n        }\n    }\n}\n",
    //     options: [
    //         "a) A descending order pattern of numbers",
    //         "b) An ascending order pattern of numbers",
    //         "c) A zeros/ones pattern",
    //         "d) A right triangle numeric pattern"
    //     ],
    //     answer: "c) A zeros/ones pattern"
    // },
    // {
    //     question: "40) What does the following program print?\n\npublic class Edureka {\n    public static void main(String[] args) {\n        int n = 5;\n        for (int i = 0; i <= n; i++) {\n            int alphabet = 65;\n            for (int j = 0; j <= i; j++) {\n                System.out.print(String.fromCharCode(alphabet + j) + ' ');\n            }\n            System.out.println();\n        }\n    }\n}\n",
    //     options: [
    //         "a) A descending order pattern of alphabets",
    //         "b) An ascending order pattern of alphabets",
    //         "c) A right alphabetic triangle",
    //         "d) A left alphabetic triangle"
    //     ],
    //     answer: "c) A right alphabetic triangle"
    // },
    // {
    //     question: "41) What will be the output of the following Java program?\n\nclass box {\n    int width;\n    int height;\n    int length;\n    int volume;\n    void volume(int height, int length, int width) {\n         volume = width*height*length;\n    } \n}    \nclass Prameterized_method\n{\n    public static void main(String args[])\n    {\n        box obj = new box();\n        obj.height = 1;\n        obj.length = 5;\n        obj.width = 5;\n        obj.volume(3,2,1);\n        System.out.println(obj.volume);        \n    } \n }\n",
    //     options: [
    //         "a) 0",
    //         "b) 1",
    //         "c) 6",
    //         "d) 25"
    //     ],
    //     answer: "a) 0"
    // },
    // {
    //     question: "42) What will be the output of the following Java program?\n\nclass area {\n    int width;\n    int length;\n    int volume;\n    area() {\n       width=5;\n       length=6;\n    }\n    void volume() {\n         volume = width*length*height;\n    } \n}    \nclass cons_method \n{\n    public static void main(String args[])\n    {\n        area obj = new area();\n        obj.volume();\n        System.out.println(obj.volume);        \n    } \n}\n",
    //     options: [
    //         "a) 0",
    //         "b) 1",
    //         "c) 30",
    //         "d) error"
    //     ],
    //     answer: "d) error"
    // },
    //     {
    //         question: " 43) What will be the output of the following Java program?\n\npublic class Main {\n    public static void main(String[] args) {\n        String text = 'code_vr';\n        int count = 0;\n\n        for (int i = 0; i < text.length(); i++) {\n            count++;\n        }\n\n        System.out.println('Solution is ' + count);\n    }\n}",
    //         options: [
    //             "a) Solution is 7",
    //             "b) Solution is 6",
    //             "c) Solution is 8",
    //             "d) Compilation error"
    //         ],
    //         answer: "b) Solution is 6"
    //     },
    //     {
    //         question: " 44) What will be the output of the following Java program?\n\npublic class Main {\n    public static void main(String[] args) {\n        String str = 'code_vr';\n\n        char[] charArray = str.toCharArray();\n        for (int i = 0; i < charArray.length; i++) {\n            if (Character.isUpperCase(charArray[i])) {\n                charArray[i] = Character.toLowerCase(charArray[i]);\n            }\n        }\n\n        System.out.println('SOLUTION IS : ' + new String(charArray));\n    }\n}",
    //         options: [
    //             "a) SOLUTION IS : CODE_VR",
    //             "b) SOLUTION IS : code_vr",
    //             "c) Solution is : CODE_VR",
    //             "d) Compilation error"
    //         ],
    //         answer: "b) SOLUTION IS : code_vr"
    //     },
        
    //         {
    //             question: " 45) What will be the output of the following Java program?\n\npublic class Main {\n    public static void main(String[] args) {\n        String text = 'code_vr';\n        int count = 0;\n\n        for (int i = 0; i < text.length(); i++) {\n            count++;\n        }\n\n        System.out.println('Solution is ' + count);\n    }\n}",
    //             options: [
    //                 "a) Solution is code_vr",
    //                 "b) Solution is 7",
    //                 "c) Solution is 8",
    //                 "d) Compilation error"
    //             ],
    //             answer: "c) Solution is 8"
    //         },
    //         {
    //             question: " 46)What will be the output of the following Java program?\n\npublic class Main {\n    public static void main(String[] args) {\n        String str = 'code_vr';\n\n        char[] charArray = str.toCharArray();\n        for (int i = 0; i < charArray.length; i++) {\n            if (Character.isUpperCase(charArray[i])) {\n                charArray[i] = Character.toLowerCase(charArray[i]);\n            }\n        }\n\n        System.out.println('SOLUTION IS : ' + new String(charArray));\n    }\n}",
    //             options: [
    //                 "a) SOLUTION IS : code_vr",
    //                 "b) SOLUTION IS : code vr",
    //                 "c) solution is : code_vr",
    //                 "d) Compilation error"
    //             ],
    //             answer: "a) SOLUTION IS : code_vr"
    //         },
    //         {
    //             question: " 47)What will be the output of the following Java program?\n\npublic class Main {\n    public static void main(String[] args) {\n        String str1 = 'code';\n        String str2 = 'vr';\n        int i = 0;\n\n        while (str1.charAt(i) != '\\0') {\n            i++;\n        }\n        while (str2.charAt(i) != '\\0') {\n            str1 += str2.charAt(i);\n            i++;\n        }\n\n        System.out.println('Concatenated string = ' + str1);\n    }\n}",
    //             options: [
    //                 "a) codevr",
    //                 "b) code\\0vr",
    //                 "c) codevr\\0",
    //                 "d) Compilation error"
    //             ],
    //             answer: "a) codevr"
    //         },
    //         {
    //             question: "48)What will be the output of the following Java program?\n\npublic class Main {\n    public static void main(String[] args) {\n        String str = 'code_vr';\n        int alphabets = 0, digits = 0, others = 0;\n\n        for (char c : str.toCharArray()) {\n            if (Character.isLetter(c)) {\n                alphabets++;\n            } else if (Character.isDigit(c)) {\n                digits++;\n            } else {\n                others++;\n            }\n        }\n\n        System.out.println(alphabets);\n        System.out.println(digits);\n        System.out.println(others);\n    }\n}",
    //             options: [
    //                 "a) 7 0 1",
    //                 "b) 6 0 2",
    //                 "c) 4 0 2",
    //                 "d) Compilation error"
    //             ],
    //             answer: "c) 4 0 2"
    //         },
    //         {
    //             question: " 49) What will be the output of the following Java program?\n\npublic class Main {\n    public static void main(String[] args) {\n        char[] str = 'Hello'.toCharArray();\n        System.out.println(str[2]);\n    }\n}",
    //             options: [
    //                 "a) H",
    //                 "b) e",
    //                 "c) l",
    //                 "d) l"
    //             ],
    //             answer: "c) l"
    //         },
    //         {
    //             question: "50) What will be the output of the following Java program?\n\npublic class Main {\n    public static void main(String[] args) {\n        int i = 0;\n        while (i < 5) {\n            if (i % 2 == 0) {\n                System.out.print(i + ' ');\n            }\n            i++;\n        }\n    }\n}",
    //             options: [
    //                 "a) 0 1 2 3 4",
    //                 "b) 0 2 4",
    //                 "c) 1 3",
    //                 "d) 1 3 5"
    //             ],
    //             answer: "b) 0 2 4"
    //         },
    //         {
    //             question: " 51) What will be the output of the following Java program?\n\npublic class Main {\n    public static void main(String[] args) {\n        int i = 10;\n        while (i > 0) {\n            System.out.print(i + ' ');\n            i--;\n        }\n    }\n}",
    //             options: [
    //                 "a) 10 9 8 7 6 5 4 3 2 1",
    //                 "b) 10 9 8 7 6 5 4 3 2",
    //                 "c) 9 8 7 6 5 4 3 2 1",
    //                 "d) 10 9 8 7 6 5 4 3"
    //             ],
    //             answer: "a) 10 9 8 7 6 5 4 3 2 1"
    //         },
    //         {
    //             question: "52) What will be the output of the following Java program?\n\npublic class Main {\n    public static void main(String[] args) {\n        for (int i = 0; i <= 5; i += 2) {\n            System.out.print(i + ' ');\n        }\n    }\n}",
    //             options: [
    //                 "a) 0 2 4 6",
    //                 "b) 0 2 4",
    //                 "c) 1 3 5",
    //                 "d) 1 3 5 7"
    //             ],
    //             answer: "b) 0 2 4"
    //         },
    //         {
    //             question: " 53) What will be the output of the following Java program?\n\npublic class Main {\n    public static void main(String[] args) {\n        for (int i = 0; i < 5; i++) {\n            if (i == 3) {\n                break;\n            }\n            System.out.print(i + ' ');\n        }\n    }\n}",
    //             options: [
    //                 "a) 0 1 2 3",
    //                 "b) 0 1 2",
    //                 "c) 1 2 3",
    //                 "d) 1 2"
    //             ],
    //             answer: "b) 0 1 2"
    //         },
    //         {
    //             question: " 54 ) What will be the output of the following Java program?\n\npublic class Main {\n    public static void main(String[] args) {\n        for (int i = 0; i < 5; i++) {\n            if (i == 2) {\n                continue;\n            }\n            System.out.print(i + ' ');\n        }\n    }\n}",
    //             options: [
    //                 "a) 0 1 2 3 4",
    //                 "b) 0 1 3 4",
    //                 "c) 1 2 3 4",
    //                 "d) 1 2 4"
    //             ],
    //             answer: "b) 0 1 3 4"
    //         },
            
    //             {
    //                 question: " 55) What will be the output of the following Java program?\n\npublic class Main {\n    public static void main(String[] args) {\n        int num = 5;\n        changeValue(num);\n        System.out.println(num);\n    }\n    \n    static void changeValue(int x) {\n        x = 10;\n    }\n}",
    //                 options: [
    //                     "a) 5",
    //                     "b) 10",
    //                     "c) Compilation error",
    //                     "d) Runtime error"
    //                 ],
    //                 answer: "a) 5"
    //             },
    //             {
    //                 question: " 56) What will be the output of the following Java program?\n\npublic class Main {\n    static int CALL(int[] arr, int size) {\n        int total = 0;\n        for (int i = 0; i < size; i++) {\n            total += arr[i];\n        }\n        return total;\n    }\n\n    public static void main(String[] args) {\n        int[] arr = {1, 2, 3, 4, 5};\n        System.out.println(CALL(arr, 5));\n    }\n}",
    //                 options: [
    //                     "a) 15",
    //                     "b) 10",
    //                     "c) Compilation error",
    //                     "d) Runtime error"
    //                 ],
    //                 answer: "a) 15"
    //             },
    //             {
    //                 question: " 57)What will be the output of the following Java program?\n\npublic class Main {\n    static int call(int n) {\n        if (n == 0 || n == 1) {\n            return 1;\n        } else {\n            return n * call(n - 1);\n        }\n    }\n\n    public static void main(String[] args) {\n        System.out.println(call(5));\n    }\n}",
    //                 options: [
    //                     "a) 15",
    //                     "b) 120",
    //                     "c) 5",
    //                     "d) Compilation error"
    //                 ],
    //                 answer: "b) 120"
    //             },
    //             {
    //                 question: "58) What will be the output of the following Java program?\n\npublic class Main {\n    public static void main(String[] args) {\n        int[][] arr = { {1, 2, 3}, {4, 5, 6}, {7, 8, 9} };\n        System.out.println(arr[1][2]);\n    }\n}",
    //                 options: [
    //                     "a) 2",
    //                     "b) 6",
    //                     "c) 8",
    //                     "d) Compilation error"
    //                 ],
    //                 answer: "b) 6"
    //             },
    //             {
    //                 question: " 59) What will be the output of the following Java program?\n\npublic class Main {\n    public static void main(String[] args) {\n        int i = 0;\n        while (i < 5) {\n            System.out.print(++i + ' ');\n        }\n    }\n}",
    //                 options: [
    //                     "a) 1 2 3 4 5 ",
    //                     "b) 2 3 4 5 6 ",
    //                     "c) 1 2 3 4 5 6 ",
    //                     "d) Compilation error"
    //                 ],
    //                 answer: "c) 1 2 3 4 5 6 "
    //             },
    //             {
    //                 question: "60) What will be the output of the following Java program?\n\npublic class Main {\n    public static void main(String[] args) {\n        for (int i = 0; i < 3; i++) {\n            for (int j = 0; j < 2; j++) {\n                System.out.print('(' + i + ', ' + j + ') ');\n            }\n        }\n    }\n}",
    //                 options: [
    //                     "a) (0, 0) (0, 1) (1, 0) (1, 1) (2, 0) (2, 1) ",
    //                     "b) (0, 0) (1, 0) (2, 0) (0, 1) (1, 1) (2, 1) ",
    //                     "c) (0, 0) (1, 1) (2, 2) (0, 1) (1, 2) (2, 3) ",
    //                     "d) Compilation error"
    //                 ],
    //                 answer: "b) (0, 0) (0, 1) (1, 0) (1, 1) (2, 0) (2, 1) "
    //             },
    //             {
    //                 question: " 61) What will be the output of the following Java program?\n\npublic class Main {\n    public static void main(String[] args) {\n        int[] arr = {1, 2, 3, 4, 5};\n        int v = 0;\n\n        for (int i = 0; i < 5; i++) {\n            v += arr[i];\n        }\n        \n        System.out.println(v);\n    }\n}",
    //                 options: [
    //                     "a) 10",
    //                     "b) 15",
    //                     "c) 20",
    //                     "d) Compilation error"
    //                 ],
    //                 answer: "a) 10"
    //             },
    //             {
    //                 question: " 62) What will be the output of the following Java program?\n\npublic class Main {\n    public static void main(String[] args) {\n        int[] arr = {1, 2, 3, 4, 5};\n        int v = 0;\n\n        for (int i = 0; i < 5; i++) {\n            v += arr[i];\n        }\n        \n        System.out.println(v);\n    }\n}",
    //                 options: [
    //                     "a) 10",
    //                     "b) 15",
    //                     "c) 20",
    //                     "d) Compilation error"
    //                 ],
    //                 answer: "a) 10"
    //             },
    //             {
    //                 question: "63) What will be the output of the following Java program?\n\npublic class Main {\n    public static void main(String[] args) {\n        int[] arr = {1, 2, 3, 4, 5};\n        int size = 5;\n        for (int i = size - 1; i >= 0; i--) {\n            System.out.println(arr[i]);\n        }\n    }\n}",
    //                 options: [
    //                     "a) 5 4 3 2 1",
    //                     "b) 1 2 3 4 5",
    //                     "c) Compilation error",
    //                     "d) Runtime error"
    //                 ],
    //                 answer: "a) 5 4 3 2 1"
    //             }
];