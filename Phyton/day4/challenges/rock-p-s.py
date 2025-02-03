rock = '''
    _______
---'   ____)
      (_____)
      (_____)
      (____)
---.__(___)
'''

paper = '''
    _______
---'   ____)____
          ______)
          _______)
         _______)
---.__________)
'''

scissors = '''
    _______
---'   ____)____
          ______)
       __________)
      (____)
---.__(___)
'''

#Write your code below this line 👇
import random
you_choose = int(input("what do you choose? type 0 for rock, 1 for paper or 2 for scissors."))
game= [rock, paper, scissors]

print(game[you_choose])

print(you_choose)

comp_int = random.randint(0,2)

coputer_choose = game[comp_int]



print(f"computer chose: {coputer_choose}")

print(comp_int)


if you_choose == 0 and comp_int == 2 :
    print("you wins")
elif you_choose> comp_int:
    print("you win")    
elif comp_int > you_choose :
    print("you  lose!")
elif comp_int ==0 and you_choose ==2:
    print("you lose")    
elif comp_int == you_choose:
    print("draw")    
else:
    print("invalid num")    





