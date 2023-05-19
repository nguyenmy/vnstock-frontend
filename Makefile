up:
	docker build . -t vnstock-fe:1.2
	docker tag vnstock-fe:1.2 09111987/vnstock:1.2
	docker push 09111987/vnstock:1.2

run:
	docker run -p 4000:80 -d vnstock-fe