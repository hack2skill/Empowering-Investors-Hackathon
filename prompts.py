financial_point_prompt= """\nOnly extract the strictly financial terms and not the name of any company or person from the above sentence. Only output the financial terms, your output should look like this: financial_statement_1,financial_statement_2, ...
                        Do not output any other sentence apart from bulleted points and any other measurable quantitty like "increased/less/more/decreased" etc. Not even the sentence like \"Sure, here are the financial terms extracted from the given sentence:\" Print output in a single line separated by commas and no new line."""


claim_prompt = """Verify the above statement misleading or not. The output should be like: \"The given statement is **MISLEADING** OR The given statement is **NOT MISLEADING**\". Then after line change output the correct information while including the following keywords: About the company, current financial news."""


sebi_rules_prompt = """Please provide me with information about five SEBI rules related to the above topic along with their relevant article numbers or rule numbers from the rulebook. For each rule, include the following details:

Rules related to (the given topic) :

1. Rule name:
   - Rule: 
   - Relevant Article/Rule: 

2. Rule name: 
   - Rule: 
   - Relevant Article/Rule: 

...

Please only output the bulleted rules and not sentences like "Please note that my information is based on data available up until September 2021, and I recommend referring to the official SEBI documents for the most current and accurate information." and also do not include sentences like "Absolutely, I understand your request. Here are five SEBI rules related to the stocks of a company, along with their relevant details:, also no thank you and nothing, just strictly output the bulleted points."""