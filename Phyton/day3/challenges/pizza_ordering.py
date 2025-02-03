print ("Welcome to python Pizza Deliveries!")
size = input("What sixe pizza do you want? S , M or L = ")
add_pepperoni = input("Do you want pepperoni ? Y or N = ")
extra_cheese= input("Do you want extra cheese ? Y or N = ")
bill = 0

if size=="S":
    bill= 15
    
    if add_pepperoni=="Y":
        bill+=2
      
        if extra_cheese=="Y":
            bill+=1
            print(f" your final bill is : {bill}$")
        else:
            print(f"  your final bill is: {bill}$") 

elif size=="M":
    bill= 20
    # print("Medium Pizza : 20$") 
    if add_pepperoni=="Y":
        bill+=3
        # print(f" final bill Pizza : {bill}$")  
        if extra_cheese=="Y":
            bill+=1
            print(f"  your final bill is: {bill}$")
        else:
            print(f"  your final bill is : {bill}$")    

elif size=="L":
    bill= 25
    
    if add_pepperoni=="Y":
        bill+=3
       
        if extra_cheese=="Y":
            bill+=1
            print(f"  your final bill is: {bill}$")
        else:
            print(f" your final bill is: {bill}$")    

   


