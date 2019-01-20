FROM python:3.7-alpine

RUN adduser -D kstatus
RUN pip install virtualenv --upgrade

WORKDIR /home/kstatus/app

COPY . /home/kstatus/app
COPY kubeconfig /home/kstatus/.kube/config
	
RUN set -e; \
	apk add --no-cache --virtual .build-deps \
		gcc \
		libc-dev \
		linux-headers \
        libffi-dev \
        openssl-dev \
	; \
	pip install -r requirements.txt; \
	apk del .build-deps;

RUN chown -R kstatus:kstatus ./
USER kstatus

EXPOSE 5000
ENV FLASK_APP kstatus.py

CMD ["flask", "run", "--host=0.0.0.0"]