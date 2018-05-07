#!/usr/bin/env python
# -*- coding: utf-8 -*-

import json
import csv

data = json.load(open('people.json'))
writer = csv.writer(open('names.csv', 'wb'))

for person in data:
	writer.writerow([person['name'].encode('utf-8')])
	print(person['name'])
	
