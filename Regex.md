# Regex Engines

# Literal Matchers
/cat/g

# Range
/[A-za-z]/g

# Specific Range
/[Azyuio]/g

# Negation
/[^abxgf]/g

# Escape characters
/[\-]/g

# ASCII Range
/[\ -~]/g

# Alterations
# Alterations try to match the left of the pipe
# If this fails then we match the right of the pipe
/cat|dog/g

# MetaCharacters
/./g  # Matches anything but newline
/\./g # Matches literal '.'
/\w/g # Shorthand of /[a-zA-z0-9_]/g
/\W/g # Adds negation flag /[^a-zA-z0-9_]/g
/\d/g # Shorthand of /[0-9]/g
/\D/g # Shorthand of /[^0-9]/g
\t # Matches tabs
\n # Matches line breaks
\s # Matches any space
\S # Matches anything that is not a space
\  # Matches space literal (escaped for safety with modes)
\[\] # Matches literal brackets

# Quantifiers
# Greedy by default, try to consume as much as possible.
+ # Match one or more times
* # Match zero or more times
? # None Greedy Marker

/[a-z]+/ # Match whole words
/<p>.*?<\/p>/g # Ungreedy match: <p>Hello World</p><p>Goodbye World</p><p>Aloha World</p>

/https?:\/\/.*/g # Optional Match

# Iterations
4{4} # Matches 4444
4{2, 4} # Matches Range of 2 to 4 times (greedy)
x{1,} # Matches 1 of infinite times

# Capture Groups
# Captures content and saves into a variable
# You are limited to 9 capture groups
# The variable can be back-referenced
/(cat)\1/g # Same as /catcat/g

# None capture groups
# Same as capture group but not captured to memory
(?:cat) # Creates a grouping but there is no variable to reference

 # Positive lookahead
/cool(?=\ cat)/g # Matches 'cool' so long as it is succeeded by ' cat'

# Negative lookahead
/cool(?!\ cat)/g # Matches 'cool' so long as it is NOT succeeded by ' cat'

# Positive Lookbehind
/(?<=cool\ )cat/g # Matches 'cat' so long as it is preceeded by 'cool '

# Negative Lookbehind
/(?<!cool\ )cat/g # Matches 'cat' so long as it is NOT preceeded by 'cool '

## Worth noting: in most engines lookarounds are fixed width, meaning
## it is not possible to use quantifiers unless it is a positive lookaround.

# Word Boundaries
# A meta character
\b # Matches instances where a word char transitions to a none word e.g. match: 'hello world'  
   # but not 'helloworld'

# Anchors
# Match the start or end of a string
/^/g # Match the start of the string
/$/g # Match the end of the string

# Modifiers
# Change the behaviour of the regex pattern
(?m) # Modifies the ^ to match each line
/(?m)^\w+/g # Matches any word on the start of each line
/(?m)\w+$/g # Matches any word at the end of each line

(?i) # Case insensitive modifier
/(?i)[a-z]+/g # Matches any word of any case

(?s) # Changes newline function
/(?s).+/g # Match anything including newlines

(?x) # Free space mode with comments, must escape spaces in this mode

- # Turns off modifiers e.g. (?-i)
