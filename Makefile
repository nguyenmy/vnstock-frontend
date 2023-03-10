up:
	docker build . -t vnstock-fe:1.0
	docker tag vnstock-fe:1.0 09111987/vnstock:1.0
	docker push 09111987/vnstock:1.0

run:
	docker run -p 4000:80 -d vnstock-fe