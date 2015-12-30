# :computer: My Local Development Environment
Local development example using Vagrant, Docker, and DNSMasq on a Mac

## Table of Contents

1. [Quickstart](#quickstart)
2. [Requirements](#ballot_box_with_check-requirements)
3. [Setup Steps](#information_source-setup-steps)

## Quickstart

This assumes you have all requirements installed.

### :one: Setup local version of repository

```sh
git clone git@github.com:makethingsstudio/local-dev.git
cd local-dev
```

### :two: Start Vagrant

```sh
vagrant up
```

### :three: Start example project containers

```sh
cd example-project; docker-compose up;
```

### :four: Checkout your example site.

Visit [http://example.dev](http://example.dev).

- - -

## :ballot_box_with_check: Requirements

- [Mac](http://apple.com/mac)
- [Homebrew](http://brew.sh)
- Virtualization Tools
 - [VirtualBox](https://www.virtualbox.org)
 - [Parallels](http://www.parallels.com/products/desktop/)
 - [VMWare](http://www.vmware.com/products/fusion-pro/features.html), **requires [VMWare adapter for Vagrant](https://www.vagrantup.com/vmware)**
- [Vagrant](https://www.vagrantup.com)
 - [Getting Started](https://docs.vagrantup.com/v2/getting-started/index.html)
 - [Mac Download](http://www.vagrantup.com/downloads)
- [Docker](https://www.docker.com)
 - [Mac Getting Started Guide](https://docs.docker.com/mac/)
 - [Mac Download](https://www.docker.com/toolbox)
- [DNSMasq](http://www.thekelleys.org.uk/dnsmasq/doc.html), installed via homebrew `brew install dnsmasq`

- - -

## :information_source: Setup Steps

### :one: Install Homebrew

Homebrew makes installing command line tools easier. If you don’t have it installed already, installing is easy.

```bash
ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

### :two: Install Virtualization Tool

For the purpose of this demo, we’ll use VirtualBox. Personally, I’m using VMWare, since I also use it for [local development testing of Internet Explorer.](https://modern.ie)

### :three: Install Vagrant and configure Vagrantfile.

#### WIP

#### `Vagrantfile` location

I keep the Vagrantfile in my `~/Documents` folder, so that all of my projects (also stored in `~/Documents` can make use of it. [Vagrant searches your current folder, or all parent folders until it finds a Vagrantfile](https://docs.vagrantup.com/v2/vagrantfile/index.html).)

### :four: Install Docker and setup `docker-compose`

#### WIP

#### Using `docker-compose` multi-container, multi-project development

[`docker-compose`](https://www.docker.com/docker-compose) allows you to tie multiple containers together, and configure important environmental variables.

The nginx-proxy container that we load in our Vagrantfile looks for the `VIRTUAL_HOST` environmental variable. It uses that with its nginx proxy to route our local development urls (like `example.dev`) to the correct container.

### :five: Configure DNSMasq to work with Docker

See these two articles, particularly the first one.

- [Using DNSMasq for Local Development on OSX](https://passingcuriosity.com/2013/dnsmasq-dev-osx/)
- [Running DNSMasq on OS X and routing to virtual machines](http://jakegoulding.com/blog/2014/04/26/running-dnsmasq-on-os-x-and-routing-to-virtual-machines/)

Configuration to add to your `/usr/local/etc/dnsmasq.conf`

```dnsmasq
local=/dev/
expand-hosts
domain=dev
address=/.dev/192.168.30.100
```

Configuration to add to your `/etc/resolver/dev`

```
nameserver 127.0.0.1
```
