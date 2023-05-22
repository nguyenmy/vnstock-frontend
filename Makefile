up:
	docker build . -t vnstock-fe:1.4
	docker tag vnstock-fe:1.4 09111987/vnstock:1.4
	docker push 09111987/vnstock:1.4

run:
	docker run -p 4000:80 -d vnstock-fe