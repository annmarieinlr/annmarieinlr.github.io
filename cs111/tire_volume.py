import math
from datetime import date

"""
Get's tire information from a potential customer and asks if they'd like to order a tire.
All information is saved along with their contact information. 

"""

print("To calculate the volume of your tire, input the following:")

#Get input from user
customer_name = input('Enter your name: ')
customer_number = input('Enter your phone number: ')
width = float(input('Enter the width of your tire in millimeters: '))
aspect = float(input('Enter the aspect ration of your tire: '))
diameter = float(input('Enter the diameter of your wheel in inches: '))

#Calculate the volume:
#Start with inside the parenthesis 
paren = width * aspect + (2540 * diameter)
#complete the numerator 
numerator = math.pi * width**2 * aspect * paren

#compute volume
vol = numerator / 10000000


#print the result
print(f'Hi {customer_name}, the approximate volume of your tire is {vol:.1f} cubic cm.')
order = input('Would you like us to order a tire with the information you entered? (y or n) ')
# Gets the current date/tie
current_date = date.today()

# Open the volumes file in append mode and adds the new information
# Everything listed with a y needs to be ordered for the customer
with open('volumes.txt', mode='a+') as vol_file:
    if order =="y":
        print('Thank you for your order. We will call you when it arrives.')
        print(f'{current_date}, {width}, {aspect}, {diameter}, {vol:.1f}, {customer_name}, {customer_number}, {order}', file=vol_file)
    else:
        print('Have a great day. Let us know if you change your mind.')
        print(f'{current_date}, {width}, {aspect}, {diameter}, {vol:.1f}, {customer_name}, {customer_number}, {order}', file=vol_file)


