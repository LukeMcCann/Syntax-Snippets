# Python strict typing syntax examples

def add(x: int, y: int):
    return x + y


def concat(first: str, second: str):
    return first + second


def say_name(name: str):
    return 'My name is ' + name


unsorted = [2, 4, 5, 100, 20, 300, 33, 67, 90]

cars = ['Ford', 'Volvo', 'Suzuki']


cars_dict: dict = {'Model': 'Ford', 'Type': '4x4'}

name: str = 'Luke'

cars_model: str = cars_dict['Model']

brands = ['Ford', 'BMW', 'Volvo']

print(cars)

print(cars_model)

print(cars_dict)

print(say_name(name))

print(concat('hello ', 'world'))

print(add(100, 200))

print(str(7 + 1))

print(True is False)

print(True is not False)

print(False == True is not False is True)

print(abs(-100))

print(int("100"))

print(bool(1))

print(bool("Hello"))

print(bool(0))

print(sorted(unsorted))

brands.sort()
print(brands)

print("Hello", "This will print out all items even integers", "see: ", 6, 3, 5)
