# [Choice] Ubuntu version (use ubuntu-22.04 or ubuntu-18.04 on local arm64/Apple Silicon): ubuntu-22.04, ubuntu-20.04, ubuntu-18.04
ARG TAG=latest
ARG USERNAME=vscode
FROM whittenio/devcontainer-base-node:${TAG}

COPY ./meta.env ~/meta.env
RUN source ~/meta.env

COPY ./ansible ~/ansible
COPY ./scripts ~/scripts

RUN mkdir -p /home/vscode/.vscode-server/extensions \
    /home/vscode/.vscode-server-insiders/extensions \
    && chown -R vscode \
    /home/vscode/.vscode-server \
    /home/vscode/.vscode-server-insiders

#
# powershell modules
RUN pwsh -Command "if (!(Get-Module -Name Pester -ListAvailable)) { Install-Module -Name Pester -Scope CurrentUser -Force }"
RUN pwsh -Command "if (!(Get-Module -Name psake -ListAvailable)) { Install-Module -Name psake -Scope CurrentUser -Force }"
RUN pwsh -Command "if (!(Get-Module -Name PSDeploy -ListAvailable)) { Install-Module -Name PSDeploy -Scope CurrentUser -Force }"

#
# global npm modules
#

#
# cloud/platform modules + cli 
#