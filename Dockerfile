FROM node:current-alpine3.13

RUN apk add --no-cache \
    bash bash-completion supervisor \
    autoconf automake build-base libtool nasm

# Environments
ENV TARGET_UID=1000
ENV TARGET_GID=1000
ENV AUTO_UPDATE='true'
ENV WEBSITE_NAME='technifuturlab-docusaurus'
ENV TEMPLATE='bootstrap'
ENV RUN_MODE='development'

# Create Docusaurus directory and change working directory to that
RUN mkdir /docusaurus
WORKDIR /docusaurus


# Copy configuration files
ADD config/init.sh /
ADD config/auto_update_crontab.txt /
ADD config/auto_update_job.sh /
COPY config/supervisord.conf /etc/supervisor/conf.d/supervisord.conf

# Set files permission
RUN chmod a+x /init.sh /auto_update_job.sh

EXPOSE 80
VOLUME [ "/docusaurus" ]
ENTRYPOINT [ "/init.sh" ]

COPY . /docusaurus/technifuturlab-docusaurus


