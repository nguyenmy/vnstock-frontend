up:
	docker build . -t vnstock-fe
	docker run -p 4000:3000 -d vnstock-fe