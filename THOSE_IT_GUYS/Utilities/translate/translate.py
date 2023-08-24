from llama_cpp import Llama

llm = Llama(model_path="./a.bin")


def translate(sentence):
    output = llm(f"USER: Convert '{sentence}' to english. ASSISTANT: ", max_tokens=1028, echo=True)
    output = output['choices'][0]['text']
    output = output[41+len(sentence):].replace('"','')
    return output


