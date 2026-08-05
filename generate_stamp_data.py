import base64
import json
import os

STAMP_DIR = os.path.join(os.path.dirname(os.path.abspath(__file__)), "stamp")
OUT_DIR = os.path.join(os.path.dirname(os.path.abspath(__file__)), "stamp-data")
os.makedirs(OUT_DIR, exist_ok=True)

count = 0
total = 0
for name in sorted(os.listdir(STAMP_DIR)):
    if not name.lower().endswith(".png"):
        continue
    path = os.path.join(STAMP_DIR, name)
    with open(path, "rb") as f:
        data = f.read()
    b64 = base64.b64encode(data).decode("ascii")
    key = json.dumps("stamp/" + name)
    js = "window.STAMP_DATA_URLS = Object.assign(window.STAMP_DATA_URLS || {}, {" + key + ":\"data:image/png;base64," + b64 + "\"});\n"
    out_name = os.path.splitext(name)[0] + ".js"
    with open(os.path.join(OUT_DIR, out_name), "w", encoding="ascii") as f:
        f.write(js)
    count += 1
    total += len(data)

print("generated", count, "files, total png bytes", total, "-> base64", total * 4 // 3)
