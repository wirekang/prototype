# memo

github environments
	production
		AWS_ACCESS_KEY_ID
		AWS_SECRET_ACCESS_KEY
			 AWS ECR 인증 때문에 필요. 추후 다른 AWS 서비스 사용 가능성도 있음
		KEY
		REMOTE_HOST
		REMOTE_USER
			DOCKER_HOST에 필요.
	development

`env:` 를 소문자로 쓰는 이유: 이름이 겹치는 환경변수가 덮어씌워지는 것 방지(예: DOCKER_REGISTRY)

development 관련 부분 작성 하다 만 상태

# todo
local,dev,prod 명확히 분리
	현상황: dev랑 local이 혼동됨

RDS 사용 해야되나?
		당분간 그냥 sqlite만 사용해도 될 것 같다. 왜냐면 서비스를 이용하는 사람이 거의 없기 때문.
			sqlite의 한계가 명확하고, ec2에 데이터를 저장하는 순간 docker의 의미가 없어진다.
			로컬/개발 서버만 sqlite로 쓴다.

샘플 데이터를 로컬/개발서버가 서로 공유해야되나?
csv 파일을 처리해야 하는 상황이 자주 나올텐데 로컬 /개발서버에서 일을 두 번 씩 해야되나?
	csv파일을 로컬에서 처리하려고 하는 것이 문제다.
		csv 파일을 쓰는게 문제다. 지속적인 요청을 보내는 식으로 어드민 페이지용 API를 설계를 하자.


비즈니스 로직에 필요한 config 파일 설정하기 (.env 대체, Dockerfile에서 copy)
config.local.json
config.dev.json
config.prod.json

Mikro ORM 설정하기

NestJS 설정하기
Vercel 빌드 설정하기
OpenAPI 설정하기