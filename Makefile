up:
	docker build . -t vnstock-fe:1.5
	docker tag vnstock-fe:1.5 09111987/vnstock:1.5
	docker push 09111987/vnstock:1.5

run:
	docker run -p 4000:80 -d vnstock-fe