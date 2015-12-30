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
