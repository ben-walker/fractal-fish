# Auth Service

This is the Auth service

Generated with

```bash
micro new auth --namespace=go.micro --type=srv --plugin=broker=grpc:registry=kubernetes:transport=grpc:store=redis
```

## Getting Started

- [Configuration](#configuration)
- [Dependencies](#dependencies)
- [Usage](#usage)

## Configuration

- FQDN: go.micro.srv.auth
- Type: srv
- Alias: auth

## Dependencies

Micro services depend on service discovery. The default is multicast DNS, a zeroconf system.

In the event you need a resilient multi-host setup we recommend etcd.

```bash
# install etcd
brew install etcd

# run etcd
etcd
```

## Usage

A Makefile is included for convenience

Build the binary

```bash
make build
```

Run the service

```bash
./auth-srv
```

Build a docker image

```bash
make docker
```
