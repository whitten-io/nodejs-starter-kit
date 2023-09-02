.PHONY: nodejs/install

## Install NVM
nvm/install:
	@curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash


.PHONY nvm/install

## Install NodeJS
nodejs/install:
	@curl -sL https://deb.nodesource.com/setup_16.x -o /tmp/nodesource_setup.sh
	@sudo bash /tmp/nodesource_setup.sh
	@sudo apt-get update
	@sudo apt-get install --yes nodejs
