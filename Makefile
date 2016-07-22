.PHONY: test test-watch

test:
	mocha --recursive

test-watch:
	mocha --recursive -w
