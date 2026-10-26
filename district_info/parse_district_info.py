#!/usr/bin/env python3
#
# parse_district_info.py
#

import csv, json


input_filename = "district_info.csv"
output_filename = "district_info.js"


data = {}
with open(input_filename, newline="") as f:
    for row in csv.DictReader(f):
        state = row.pop("State")
        district = row.pop("District")
        data.setdefault(state, {})[district] = row

with open(output_filename, "w") as f:
    f.write("const data = " + json.dumps(data, indent=2) + ";\n")


