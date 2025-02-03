weight_as_int = input ("weight =")
height_as_float = input("height = ")

bmi = int (weight_as_int) / float(height_as_float)**2

bmi_as_int = int(bmi)

if bmi_as_int<18.5:
    print(" underweight")
elif 18.5<bmi_as_int<25:
    print("normal weight")
elif 25<bmi_as_int<30:
    print(f"tour BMI is {bmi_as_int} , you are slightly overweight")
elif 30<bmi_as_int<35:
    print("obese")
elif bmi_as_int>35:
    print("clinically obese")


    