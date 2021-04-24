"""
When you physically exercise to strengthen your heart, you
should maintain your heart rate within a range for at least 20
minutes. To find that range, subtract your age from 220. This
difference is your maximum heart rate per minute. Your heart
simply will not beat faster than this maximum (220 - age).
When exercising to strengthen your heart, you should keep your
heart rate between 65% and 85% of your heart's maximum.
"""

age = int(input('What is your age? \n'))
max_rate = 220 - age
print(f'Your maximum heart rate is: {max_rate}')

your_slow = round(max_rate * 0.65)
your_fast = round(max_rate * 0.85)
print(f'To strengthen your heart, keep your heart rate between {your_slow} and {your_fast} during exercise.')
