.PHONY: test test-watch

test:
	./node_modules/mocha/bin/mocha --recursive

test-watch:
	./node_modules/mocha/bin/mocha --recursive -w
	
test_outside:
	curl -X POST --data '{"arabic":3999}'  -H "Content-Type: application/json"  localhost:3002/toroman
	
run:
	node ./src/main.js
