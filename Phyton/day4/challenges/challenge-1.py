import random
name_string= input("Give me everybody's name, sperated by a comma.")
name = name_string.split(",")
# print(random.choice(name))
random_num = random.randint (0,(len(name)-1))
person_pay = name[random_num]
print(f"{person_pay} is going to buy the meal")