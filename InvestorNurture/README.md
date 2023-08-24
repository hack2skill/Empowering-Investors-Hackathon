Team Name - InvestorNurture
Problem Statement - Personalized Investment Recommendation Engine for     Diverse Portfolios
Team Leader Email - anuheaven2@gmail.com
A Brief of the Prototype:
 A web app that offers :
1) Personalized investment recommendation engine.
2) Diverse asset allocation, blending traditional and alternative investments.
3) AI-driven profiling for tailored strategies.
4) User-friendly interface and risk-return visualization.
5) Filter options include price range and high market cap.
6) Generates top cryptocurrency recommendations based on user preferences.
7) Seamlessly integrates Flask web app with data science techniques.

"I've uploaded the use case diagram to Google Drive. You can access it using the following link: https://drive.google.com/file/d/1sQr4KjeMM9vcMDEVneQBlYnkJXMxmm7B/view?usp=sharing  . Please let me know if you have any questions or need further information.https://drive.google.com/file/d/1sQr4KjeMM9vcMDEVneQBlYnkJXMxmm7B/view?usp=sharing

Tech Stack:
1) Backend: Python with Flask framework
2) Data Analysis: Pandas, Scikit-learn
3) Frontend: HTML, CSS
4) Visualization: Matplotlib, Seaborn
5) Hosting: Local development server
6) Data Storage: CSV files
7) Data Processing: Data cleaning, profiling, clustering

Step-by-Step Code Execution Instructions:
1) Clone the Repository:

-> Open your command-line interface.
-> Navigate to the directory where you want to store the project.
-> Run: git clone <repository_url>
-> Replace <repository_url> with the actual URL of the repository.

2) Set Up Virtual Environment:

-> Navigate into the cloned directory: cd InvestorNurture.
-> Create a virtual environment: python -m venv venv.
-> Activate the virtual environment:
-> On Windows: venv\Scripts\activate
-> On macOS and Linux: source venv/bin/activate

3)Install Dependencies:

-> While the virtual environment is active, install the required packages:
-> Copy code
pip install -r requirements.txt

4) Data Setup:

-> Make sure your CSV data files are placed in the appropriate directory, e.g., data/CRYPTOCURRENCY.csv.

5) Run the Flask App:

-> Ensure you're still in the project root directory.
-> Run the Flask app: python app.py.
-> Your local development server will start, usually at http://127.0.0.1:5000/.

6) Access the Web Application:

-> Open your web browser and enter the URL http://127.0.0.1:5000/.
-> The homepage of the web application should be displayed.

7) Input Criteria:

-> On the homepage, enter your desired minimum and maximum price in USD.
-> Optionally, check the 'High Market Cap' checkbox if desired.

8) Submit and View Recommendations:

-> Click the 'Get Recommendations' button.
-> You will be redirected to the recommendation results page.
-> A table will display the recommended cryptocurrencies based on your input criteria.

9) Exploring Recommendations:

-> Observe the recommendations displayed in the table.
-> Each row represents a recommended cryptocurrency with its details.

10) Further Testing:

-> Experiment with different input criteria to see how the recommendations change.
-> Analyze the recommendations based on different user scenarios.

11) Exiting the Application:
-> To stop the Flask app, press Ctrl + C in the command-line interface.
-> To deactivate the virtual environment, run: deactivate.

What I Learned:
During the development of the InvestorNurture prototype, my most significant learning was the practical integration of data science techniques with web development. Understanding how to seamlessly combine backend Python coding with frontend HTML and CSS allowed me to create an interactive and user-friendly platform. The integration of Pandas for data processing, Flask for web routing, and Matplotlib for visualization provided me insights into bridging the gap between data analysis and user experience. This experience deepened my comprehension of how diverse technologies can collaborate to deliver a cohesive and functional solution, enriching my skill set for future projects.
