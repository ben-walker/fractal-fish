# Hashit Service

This is the Hashit service

Generated with

```
micro new hashit --namespace=go.micro --type=srv --plugin=broker=grpc:registry=kubernetes:transport=grpc:store=redis
```

## Getting Started

- [Configuration](#configuration)
- [Dependencies](#dependencies)
- [Usage](#usage)

## Configuration

- FQDN: go.micro.srv.hashit
- Type: srv
- Alias: hashit

## Dependencies

Micro services depend on service discovery. The default is multicast DNS, a zeroconf system.

In the event you need a resilient multi-host setup we recommend etcd.

```
# install etcd
brew install etcd

# run etcd
etcd
```

## Usage

A Makefile is included for convenience

Build the binary

```
make build
```

Run the service
```
./hashit-srv
```

Build a docker image
```
make docker
```