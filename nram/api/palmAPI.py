import pprint
import google.generativeai as palm

palm.configure(api_key='AIzaSyCcrKRaX4Lx5RjcjEaY7IYN1dA7UUTFm1M')

models = [m for m in palm.list_models() if 'generateText' in m.supported_generation_methods]
model = models[0].name
print(model)

prompt = """
Should i invest in gold bond or in stock market?
"""

completion = palm.generate_text(
    model=model,
    prompt=prompt,
    temperature=0,
    # The maximum length of the response
    max_output_tokens=100,
)

print(completion.result)