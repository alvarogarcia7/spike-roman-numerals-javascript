.PHONY: test test-watch

test:
	./node_modules/mocha/bin/mocha --recursive

test-watch:
	./node_modules/mocha/bin/mocha --recursive -w
