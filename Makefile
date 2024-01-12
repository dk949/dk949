
WITH_VENV = . ./venv/bin/activate &&

all: graph.html get_icons

opts.json: opts.js
	node $< > $@

graph.html: make_graph.py opts.json list.json get_icons venv
	$(WITH_VENV) python $<

clean:
	rm -f opts.json graph.html

get_icons:
	sh dl/dl.sh

venv:
	python -m venv venv && $(WITH_VENV) python -m pip install -r requirements.txt
