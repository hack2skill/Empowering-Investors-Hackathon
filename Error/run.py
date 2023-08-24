import os


def execute_python_file(number):
    script_mapping = {
        1: "D:\Projects\Empowering-Investors-Hackathon-Team-Error\Error\TnC_Summary.py",
        2: "D://Projects//Empowering-Investors-Hackathon-Team-Error//Error//News-Fetcher//news-fetcher.py",
        3: "script_3.py",
        4: "script_4.py",
        5: "script_5.py",
    }

    filename = script_mapping.get(number)

    if not filename:
        print(f"Error: No corresponding script found for number {number}")
        return

    if not os.path.exists(filename):
        print(f"Error: {filename} not found")
        return

    try:
        with open(filename, "r") as file:
            code = file.read()
            exec(code)
    except Exception as e:
        print(f"An error occurred while executing {filename}: {e}")


if __name__ == "__main__":
    try:
        input_number = int(
            input("Enter a number (1-5) to execute the corresponding Python script: ")
        )
        if 1 <= input_number <= 5:
            execute_python_file(input_number)
        else:
            print("Invalid input. Please enter a number between 1 and 5.")
    except ValueError:
        print("Invalid input. Please enter a valid number.")
