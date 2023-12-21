# PLANET B v1

Multiplayer Game WebGL / Canvas
SocketIO, Node, React, PIXIjs,

![Image of a galaxy and planet](https://github.com/jjwallace/planetb/blob/main/notes/pictures/galaxy.jpg)

## Install

```bash
git clone <this repository>
cd planetb
npm install

```

### Client
```bash
cd planetb
npm install

```

### Server
```bash
cd server
npm install

```

## Running

### Client
```bash
cd planetb
npm start
```

### Server
```bash
cd server
npm start
```

# Troubleshooting : Running Node 14

User node version 14
```
nvm use 14
```

### [Install & Update Script](https://github.com/nvm-sh/nvm#install--update-script)

To **install** or **update** nvm, you should run the [install script](https://github.com/nvm-sh/nvm/blob/v0.39.5/install.sh). To do that, you may either download and run the script manually, or use the following cURL or Wget command:

```shell
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash
```

```shell
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash
```

Running either of the above commands downloads a script and runs it. The script clones the nvm repository to `~/.nvm`, and attempts to add the source lines from the snippet below to the correct profile file (`~/.bash_profile`, `~/.zshrc`, `~/.profile`, or `~/.bashrc`).

```shell
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
```

Now Install NVM 14

```
nvm install 14
```

Then you are free to run node 14
```
nvm use 14
```


# Play instructions

Click on planets to focus them, mouse wheel zoom in and out.
1 satelight is controllable with arrow keys if you have the ability / luck to click on it lol
