# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN

# --------------------1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.

# num1 = 7
# # Expected output: '7 is odd'
# num2 = 42
# # Expected output: '42 is even'
# num3 = 221
# # Expected output: '221 is odd'


def num_check num
    if num.even? == true
        "#{num} is an even number"
    else
        "#{num} is an odd number"
    end
end

p num_check(7)
p num_check(42)
p num_check(221)

# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
album3 = 'Abbey Road'
# Expected output: 'bby Rd'

def no_vowels str
    str.delete "AEIOUaeiou"
end

p no_vowels('Rubber Soul') 
p no_vowels('Sgt Pepper') 
p no_vowels('Abbey Road') 



# -------------------3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forward or backward. Use the test variables provided.

palindrome_tester1 = 'Racecar'
# Expected output: 'Racecar is a palindrome'
palindrome_tester2 = 'LEARN'
# Expected output: 'LEARN is not a palindrome'
palindrome_tester3 = 'Rotator'
# Expected output: 'Rotator is a palindrome'


def palindrome str
    if str.reverse.downcase == str.downcase
        "#{str} is a palindrome"
    else
        "#{str} is not a palindrome"
    end
end

p palindrome(palindrome_tester1)
p palindrome(palindrome_tester2)
p palindrome(palindrome_tester3)

