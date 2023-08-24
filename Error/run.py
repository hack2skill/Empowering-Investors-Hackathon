import os


#os.system("command")

def execute_python_file(number):
    script_mapping = {
        1: "Error\Book-Recomendation\setup.py",
        2: "Error\Market_Insights\Market_Insights.py",
        3: "Error\\News-Fetcher\\news-fetcher.py",
        4: "Error\Q-A-Bot\main.py",
        5: "Error\T&C-Summarizer\TnC_Summary.py",
        # 6: "C:\\Users\\adama\\PycharmProjects\\Final_Sebi_Submission\\main.py"
    }
    filename = script_mapping[number]
    if not filename:
        print(f"Error: No corresponding script found for number {number}")
        return
    
    if not os.path.exists(filename):
        print(f"Error: {filename} not found")
        return
    if number==1:
        os.system(command=f"python {filename}")
    elif number==2:
        os.system(command=f"python {filename}")
    elif number==5:
        os.system(command=f"python -m streamlit run {filename}")
    elif number==6:
        os.system(command=f"python -m chainlit run {filename} -w")

    # try:
    #     with open(filename) as file:
    #         exec(file.read())
    # except Exception as e:
    #     print(f"An error occurred while executing {filename}: {e}")

if __name__ == "__main__":
    try:
        input_number = int(input("Enter a number (1-6) to execute the corresponding Python script: "))
        if 1 <= input_number <= 5:
            execute_python_file(input_number)
        else:
            print("Invalid input. Please enter a number between 1 and 5.")
    except ValueError:
        print("Invalid input. Please enter a valid number.")
