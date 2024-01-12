from typing import Any
from pyvis.network import Network
import json
from pathlib import Path
from typing import TypedDict
from urllib.parse import quote
from math import sqrt
from statistics import mean


class LangProp(TypedDict):
    parents: list[str] | None
    img: str | None
    id: int
    x: int
    y: int
    size: float


with open("list.json") as f:
    j: dict[str, Any] = json.load(f)
    langs: dict[str, LangProp] = {}
    numlangs = len(j.keys())
    sqsize = int(sqrt(numlangs) + 0.5)
    for i, (lang, props) in enumerate(j.items()):
        langs[lang] = {
            "parents": props["parents"],
            "img": props["img"],
            "size": props.get("size") or 1.0,
            "id": i,
            "x": i // sqsize,
            "y": i % sqsize,
        }

with open("opts.json") as f:
    opts = f.read()

net = Network(height="800px", width="800px", bgcolor='#22272e')
net.set_options(opts)

base_size = 25

for lang, props in langs.items():
    node_props: dict[str, Any]
    if props["img"]:
        ext = Path(props["img"]).suffix
        img = Path("dl")/f"{lang}{ext}"
        node_props = {"shape": "image", "image": quote(str(img))}
    else:
        node_props = {"shape": "text", "label": lang}
    if props["parents"]:
        node_props["x"] = mean(langs[p]["x"] for p in props["parents"])
        node_props["y"] = mean(langs[p]["y"] for p in props["parents"])
    else:
        node_props["x"] = props["x"]
        node_props["y"] = props["y"]

    # net.add_node(n_id=props["id"], label=lang, **node_props)
    net.add_node(n_id=props["id"], size=base_size * props["size"], **node_props)
    if props["parents"]:
        for parent in props["parents"]:
            net.add_edge(langs[parent]["id"], props["id"])

net.save_graph("graph.html")
