.PHONY: build test

build:
	docker build -t my-test-app .

test: build
	docker run --rm my-test-app
