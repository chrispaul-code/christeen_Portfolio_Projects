print("Welcom to the tip calculator.")
bill = float(input("What was the total bill? $"))
percentage = int(input("What percentage tip would you like to give? 10,12, or 15 ?"))
split = int(input("How many people will split the bill?"))
percent = percentage/100
tip = percent*bill
total = bill+tip
per_person = ( total / split)
roundoff = round(per_person ,2)
print("Each peson should pay : " + str(roundoff))