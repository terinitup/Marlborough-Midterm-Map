#!/usr/bin/env python3
#
# parse_senate_info.py
#

import csv, json

input_filename = "senate_info.csv"
output_filename = "senate_info.js"


senate_data = {}
with open(input_filename, newline="") as f:
    for row in csv.DictReader(f):
        state = row.pop("State")
        canidates = row.pop("Candidates")
        names = [name.strip() for name in canidates.split(",")]
        parties = [party.strip() for party in row.pop("Party").split(",")]

        candidate_party_list = [{"name": names, "party": party} for names, party in zip(names, parties)]
        senate_data.setdefault(state, {"candidates": candidate_party_list, "tossup": row.pop("Toss-Up")})

with open(output_filename, "w") as f:
    f.write("const senate_data = " + json.dumps(senate_data, indent=2) + ";\n")


