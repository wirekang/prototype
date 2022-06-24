debug:
	bash -c "trap \
	 'docker-compose -f docker-compose-dev.yml down' EXIT; \
	 docker-compose -f docker-compose-dev.yml up"

compose-pro:
	bash -c "trap \
	 'docker-compose -f docker-compose-pro.yml down' EXIT; \
	 docker-compose -f docker-compose-pro.yml up --build"

rm-image:
	docker rmi $$(docker images 'my-backend-dev' -a -q)
	
.PHONY: debug compose-pro rm-image