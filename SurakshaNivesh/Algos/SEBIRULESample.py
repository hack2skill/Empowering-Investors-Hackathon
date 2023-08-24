import re
import spacy

# Load the spaCy model
nlp = spacy.load("en_core_web_sm")

# Sample text extracted from Telegram group or YouTube video
extracted_text = """
Trader A: Buy Reliance at 2400, it's a sure shot tip!
Trader B: Let's all buy Infosys at 1000 for guaranteed profit!
"""

# Sample SEBI norms rules
sebi_rules = {
    'stock_price_range': (0, 5000),
    'prohibited_phrases': ['guaranteed profit', 'sure shot tip']
}

# Function to check for SEBI norm violations using advanced NLP
def check_sebi_norm_violations_advanced(text, rules):
    violations = []
    doc = nlp(text)
    
    for rule, condition in rules.items():
        if rule == 'stock_price_range':
            for ent in doc.ents:
                if ent.label_ == 'MONEY' and condition[0] <= float(ent.text) <= condition[1]:
                    violations.append(f"Violation: Stock price out of range - {ent.text}")
        elif rule == 'prohibited_phrases':
            for sent in doc.sents:
                for phrase in condition:
                    if phrase in sent.text:
                        violations.append(f"Violation: Prohibited phrase - {phrase}")
    return violations

# Check for SEBI norm violations using advanced NLP
violations = check_sebi_norm_violations_advanced(extracted_text, sebi_rules)
if violations:
    print("SEBI Norm Violations Detected:")
    for violation in violations:
        print(violation)
else:
    print("No SEBI Norm Violations Detected")
