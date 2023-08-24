import streamlit as st
import time
from Pipeline.main import trigger_pipeline

# st.header("FinClear :money_with_wings:", anchor=False)
st.markdown("<h1 style='text-align: center;'>FinClear</h1>",
            unsafe_allow_html=True)
st.markdown("<p style='text-align: center;'>Choose who you beleive rightly!</p>",
            unsafe_allow_html=True)


def processData(data):
    print(data)
    with st.spinner("Processing..."):
        time.sleep(5)
        st.success("Done!")
        st.balloons()


container = st.container()
form = container.form("url_input")


def checkUrl(url):
    if url.startswith("https://"):
        return True
    else:
        return False


with form:
    input = form.text_input("Enter the URL:", placeholder="https://...")
    submitted = form.form_submit_button("Check", use_container_width=True)

    if submitted:
        res = checkUrl(input)
        if not res:
            st.error("Enter a valid URL.")
        else:
            predicted = trigger_pipeline(input)
            if predicted == 0:
                st.success("The video is trustworthy.")
            else:
                st.error("The video is not trustworthy.")
            
            print("Done!")
            # processData(input)
