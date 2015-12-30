# ====================================================================
# Vagrantfile for local development with docker
# ====================================================================





# --------------------------------------------------------------------
# Set Vagrant Docker Options
#
# By setting Vagrant 'guest' docker to use specific port,
# your mac (host) version of docker can communicate and load
# containers into the version running on the 'guest'
#
# This sets up the defaults into vagrant host so that docker gets
# configured correctly.
# --------------------------------------------------------------------
scriptDockerDaemon = <<SCRIPT
#!/bin/bash -e
if [ ! -f /etc/default/docker ]; then
  echo "/etc/default/docker not found -- is docker installed?" >&2
  echo 'DOCKER_OPTS="-H tcp://0.0.0.0:2375 -H unix:///var/run/docker.sock ${DOCKER_OPTS}"' > /etc/default/docker
fi


if (source /etc/default/docker && [[ $DOCKER_OPTS != *tcp://0.0.0.0:2375* ]]); then
  echo '#Adjusting Port and Socket locations' >&2
  echo 'DOCKER_OPTS="-H tcp://0.0.0.0:2375 -H unix:///var/run/docker.sock ${DOCKER_OPTS}"' >> /etc/default/docker
fi
SCRIPT




# --------------------------------------------------------------------
# Set Vagrant Options
#
# This sets up the vagrant machine. See comments below as to what
# each item does.
# --------------------------------------------------------------------
Vagrant.configure("2") do |config|

  # Set name of vagrant box.
  config.vm.define "docker-guest"

  # Set Box file to use,
  # from:https://atlas.hashicorp.com/ubuntu/boxes/trusty64
  config.vm.box = "ubuntu/trusty64"

  # Set IP address for vagrant box. This allows your mac to
  # consistently connect to your vagrant box on the same IP.
  # Important for DNS
  config.vm.network "private_network",
    ip: "192.168.30.100"

  # This connects the local (host) port 2375 to forward to the same
  # port on vagrant (guest).
  config.vm.network "forwarded_port", guest: 2375, host: 2375

  config.vm.provider :virtualbox do |vb|
    # If I remember, this eases up some networking limitations
    vb.customize ["modifyvm", :id, "--nicpromisc2", "allow-all"]

    # Update memory size of vagrant box.
    vb.memory = 4096
  end


  # By default, Vagrant’s setup mounts the folder
  # holding the Vagrantfile. You can change this behavior by
  # uncommenting the configurations below, and syncing a new location.
  #
  # In the example below, I mount my home folder `~/`.
  #
  # config.vm.synced_folder ".", "/vagrant", disabled: true
  # config.vm.synced_folder ENV['HOME'], "/vagrant"


  # Runs the configuration shell script above for docker
  config.vm.provision "shell", inline: scriptDockerDaemon


  # Vagrant has a docker provisioner, which installs docker, and can
  # install other docker containers.
  # https://docs.vagrantup.com/v2/provisioning/docker.html
  config.vm.provision "docker" do |d|
    # Loads Docker UI, a visual interface that shows what containers
    # I have loaded, and gives some manual controls.
    # https://hub.docker.com/r/dockerui/dockerui/
    d.run "dockerui/dockerui",
      args: "-p 9000:9000 --privileged -v /var/run/docker.sock:/var/run/docker.sock --name docker-ui",
      daemonize: true

    # NGINX Proxy proxies connections coming into Vagrant on ports 80
    # and 443, and routes them to the appropriate container.
    # This creates the magic.
    # https://hub.docker.com/r/jwilder/nginx-proxy/
    d.run "jwilder/nginx-proxy",
      args: "-p 80:80 -v /var/run/docker.sock:/tmp/docker.sock --name docker-proxy",
      daemonize: true
  end

end
