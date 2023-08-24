from transformers import pipeline
import gradio as gr
#tnc=input("Enter Terms and Conditions:")
title='Terms of Service Summarizer'
description='Paste in the T&C, if the Terms are too long paste them in parts for better results'
summerizer=pipeline("summarization")

tncTry='''These Terms of Service reflect the way Google’s business works, the laws that apply to our company, and certain things we’ve always believed to be true. As a result, these Terms of Service help define Google’s relationship with you as you interact with our services. For example, these terms include the following topic headings:

What you can expect from us, which describes how we provide and develop our services
What we expect from you, which establishes certain rules for using our services
Content in Google services, which describes the intellectual property rights to the content you find in our services — whether that content belongs to you, Google, or others
In case of problems or disagreements, which describes other legal rights you have, and what to expect in case someone violates these terms
Understanding these terms is important because, by using our services, you’re agreeing to these terms.

Besides these terms, we also publish a Privacy Policy. Although it’s not part of these terms, we encourage you to read it to better understand how you can update, manage, export, and delete your information.

Terms
Service provider
Google services are provided by, and you’re contracting with:

Google LLC
organized under the laws of the State of Delaware, USA, and operating under the laws of the USA

1600 Amphitheatre Parkway
Mountain View, California 94043
USA

Age requirements
If you’re under the age required to manage your own Google Account, you must have your parent or legal guardian’s permission to use a Google Account. Please have your parent or legal guardian read these terms with you.

If you’re a parent or legal guardian, and you allow your child to use the services, then these terms apply to you and you’re responsible for your child’s activity on the services.

Some Google services have additional age requirements as described in their service-specific additional terms and policies.

'''
def summarizer(tncTry):
    l=summerizer(tncTry)
    return l[0]['summary_text']

theme='HaleyCH/HaleyCH_Theme'


with gr.Blocks(theme = 'HaleyCH/HaleyCH_Theme') as demo:
    with gr.Row():
        with gr.Column(scale=1, min_width=1000):
            inp = gr.Textbox(placeholder="Paste your Terms of Service text here!")
            btn = gr.Button("Run")
            out = gr.Textbox()
            #btn1.click(lambda x: gr.update(value=''), [], [inp])
            btn.click(fn=summarizer, inputs=inp, outputs=out)

demo.launch(server_port=8080, share=True)
