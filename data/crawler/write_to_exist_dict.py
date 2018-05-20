import csv
import json

itemliste = []
data = {}
counter = 0

file = open("people_fractions.csv", "r")
csv_reader = csv.reader(file, delimiter = ",")

for row in csv_reader:
	itemliste.append(row)
file.close()

with open('people.json', 'r') as jsFile:
	data = json.load(jsFile)
	
for item in data:
	data[counter]['fraction'] = itemliste[counter][1]
	counter+=1
	
with open('people.json', 'w') as f:
	json.dump(data, f)
		
print "Done!!!"