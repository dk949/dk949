def processBlock(block: list):
    out = ""
    out += f"<a {block[0][0]} target=\"_blank\"><img {block[0][1]} {block[0][2]} {block[0][3]}/></a>\n"
    if(len(block) > 1):
        out += "&nbsp;&nbsp;&nbsp; &nbsp; &nbsp;\n"
        for fw in block[1]:
            out += f"<a {fw[0]} target=\"_blank\"><img {fw[1]} {fw[0][2]} {fw[3]}/></a>\n"
    out +='\n'
    return out


open("README.md", "w").write(open("template-intro.md", "r").read() + ''.join([processBlock(l) for l in [[[k for k in j.split('\n') if k != ""] if c == 0 else [k.split('\n') for k in j.split("-"*32 + '\n') if k != ""] for c, j in enumerate(i.split("-" * 32 + '\n' + "-" * 32 + '\n'))] for i in open("frameworks", "r").read().split("\n\n\n")]]) + open("template-outro.md", "r").read())
