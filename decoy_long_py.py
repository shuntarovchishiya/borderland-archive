# decoy_long_py.py
# Audit-style decoy, nested calls and timing. Prints a fake token at the end.

import time
import hashlib

def beat(n=5):
    for i in range(n):
        print(f"heartbeat {i+1}/{n} - OK")
        time.sleep(0.04)

def digest(seed, rounds=3):
    h = hashlib.sha256(seed.encode('utf8')).hexdigest()
    for _ in range(rounds):
        h = hashlib.sha1(h.encode('utf8')).hexdigest()
    return h

def nested(depth, seed):
    print("enter nested:", depth)
    if depth <= 0:
        return digest(seed)
    res = nested(depth-1, seed + str(depth))
    print("exit nested:", depth)
    return digest(res[:16])

def main():
    print("audit: starting checks")
    beat(3)
    m = nested(3, "audit-seed")
    print("audit: marker:", m[:14])
    print("audit: preparing export…")
    time.sleep(0.05)
    # Decoy token visible at the end
    print("ACCESS TOKEN: FLAG{HEARTLESS_RULER}")
    print("audit: done")

if __name__ == '__main__':
    main()
