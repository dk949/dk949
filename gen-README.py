def processBlock(l: list):
    return ''.join([f"<a {l[0][0]} target=\"_blank\"><img {l[0][1]} {l[0][2]} {l[0][3]}/></a>\n",''.join(''.join(["&nbsp;&nbsp;&nbsp; &nbsp; &nbsp;\n", ''.join([f"<a {m[0]} target=\"_blank\"><img {m[1]} {m[0][2]} {m[3]}/></a>\n" for m in l[1]])])if len(l) > 1 else [])]) + '\n'


open("README.md", "w").write(open("template-intro.md", "r").read() + ''.join([processBlock(l) for l in [[[k for k in j.split('\n') if k != ""] if c == 0 else [k.split('\n') for k in j.split("-"*32 + '\n') if k != ""] for c, j in enumerate(i.split("-" * 32 + '\n' + "-" * 32 + '\n'))] for i in open("frameworks", "r").read().split("\n\n\n")]]) + open("template-outro.md", "r").read())
