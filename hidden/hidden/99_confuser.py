# hidden/99_confuser.py - big noisy confuser (no real flag)
import uuid, base64, random, textwrap

def random_hex(n=8):
    return ''.join(random.choice('0123456789abcdef') for _ in range(n))

def pseudos():
    out = []
    out += [
        "QUEEN_FAKE{maybe_this_one}",
        "QUEEN_FAKE{almost_flag_42}",
        "FLAG{not_real_seekelsewhere}"
    ]
    for _ in range(6):
        out.append(str(uuid.uuid4()))
    for _ in range(4):
        raw = ("decoy-"+str(random.randint(100,999))).encode()
        out.append(base64.b64encode(raw).decode())
    out.append("01001000011001010110110001101100")  # 'Hell' binary snippet
    out.append(random_hex(12))
    long_block = ''.join(random.choice('abcdef0123456789') for _ in range(256))
    out.append(textwrap.fill(long_block, width=64))
    return out

def main():
    print("="*72)
    print("NOISY LEDGER — dozens of echoes below. Most are lies.")
    print("-"*72)
    for p in pseudos():
        print(p)
    print("-"*72)
    print("Mini-base64 hints (for show):")
    for s in ["cmVkbmV4", "c2hvd3JvbGxz", "ZGVjb3k="]:
        try:
            print(s, "->", base64.b64decode(s).decode())
        except Exception:
            print(s, "-> <invalid>")
    print("-"*72)
    print("A fake decoder snippet (decorative):")
    print('''def decode_example(b):\\n    return ''.join(chr(int(b[i:i+8],2)) for i in range(0,len(b),8))''')
    print("="*72)

if __name__ == "__main__":
    main()
