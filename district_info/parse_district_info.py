#!/usr/bin/env python3
#
# parse_district_info.py
#

import csv, json

input_filename = "district_info.csv"
output_filename = "district_info.js"


district_data = {}
with open(input_filename, newline="") as f:
    for row in csv.DictReader(f):
        state = row.pop("State")
        district = row.pop("District")
        names = [name.strip() for name in row.pop("Candidates").split(",")]
        parties = [party.strip() for party in row.pop("Party").split(",")]

        candidate_party_list = [{"name": names, "party": party} for names, party in zip(names, parties)]
        district_data.setdefault(state, {})[district] = {"candidates": candidate_party_list, "tossup": row.pop("Toss-Up")}

with open(output_filename, "w") as f:
    f.write("const district_data = " + json.dumps(district_data, indent=2) + ";\n")


