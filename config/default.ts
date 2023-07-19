const dbHost = process.env.DATABASE_HOST || "localhost";

// generate keys: https://travistidwell.com/jsencrypt/demo/
const publicRsa2048Key = `-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAljkWd+ltC0QOggfIVO/0
izjQtRTSs831/PogjL+zE5giSN2AGAmCaOe03y1Kowe04AyQaJB9My1UtKcQd+IB
br49Z4Kg/Nnjq/OpdjoS3ji18XSD6PzYJbCsd5lc4DyYOWwC8rRCZ3ClWLzeTS3o
vqIGT8K5ofYowucB++7+mkedPDRk9EPm0lL94It/ZopuKXw/cqQQuff0LBaop5P4
eAGSW74oT7n8Epbn3ZtcZ1Kg2Qo0mYaKB+VYfYtXWBdqxLFm6chpF0tCkLmH0li4
h1+aqa7o+5R3QLkcx26OsZbBqpZ6AuY2Epwgy7iHK1WaGGl8cKme8LaZvsStXjok
6wIDAQAB
-----END PUBLIC KEY-----`;

const privateRsa2048Key = `-----BEGIN RSA PRIVATE KEY-----
MIIEogIBAAKCAQEAljkWd+ltC0QOggfIVO/0izjQtRTSs831/PogjL+zE5giSN2A
GAmCaOe03y1Kowe04AyQaJB9My1UtKcQd+IBbr49Z4Kg/Nnjq/OpdjoS3ji18XSD
6PzYJbCsd5lc4DyYOWwC8rRCZ3ClWLzeTS3ovqIGT8K5ofYowucB++7+mkedPDRk
9EPm0lL94It/ZopuKXw/cqQQuff0LBaop5P4eAGSW74oT7n8Epbn3ZtcZ1Kg2Qo0
mYaKB+VYfYtXWBdqxLFm6chpF0tCkLmH0li4h1+aqa7o+5R3QLkcx26OsZbBqpZ6
AuY2Epwgy7iHK1WaGGl8cKme8LaZvsStXjok6wIDAQABAoIBAHEM9UO4fz+DMAfb
I4AINNixIR+lVAvMa9q9wdEqUvHkA6kiSEvOnD2mYg+yXgDiw9P4oJSQaCgjbSOm
tlYB12In+L31KIIg152H+XfnrFtgAkx7iunDnkZ+9svqtmJqN4S/LFjKH08JDuYA
/KrIaedMt8M+n8SrI3HJt0yJR0GCicpoAMYsx+cP2XeLbBWoxGFO7EpM2M+/bg5m
YEGl3WP2uv6ne/DLmfPBenlxrOQIn7Ei7BUerxIxF95c1bZmlNRLj/a57eTx+3WH
yUDRqTVbUIVjeugA0I0QYUJForA63klspDWmWLEyBkBL3p+/gWPFdHKWG7pPO89q
KLUgJEECgYEA3xxYDyGhplAHCcDHILUUQmYFdWyEx5Jn0I3yhPEtGmqZcMHHu//h
mWU56FKjuiSfPlP9zTi3oFXpYwkQd0dZnmYD4Sp2EqgrJNH44fERGGHBqDQKFdW4
rr6WfsTF+luQ56aILvMcesiEfgr47SBdsXTBB0DTIi3qw9DcSaiIRj0CgYEArF4j
c1s4qiDBocifb4FPKyvhr7Dds7mFb+jyG/J/dHyr8lF9Muxat6PguU8xEjkfFKbW
BVaJi3iYnvY4ah5MNh5P/JRKzDQ+d/sc1tWjQpjIer11+72x9wbtLwBBfUJk83K+
3mEpyXOk/SPmBIj20r0eYwpT5pr1aWQDwO+98kcCgYBvLr3HVJgsvAa12oahCvv8
lsCzoo+MsK3hZUts6o7ychri8P5q9nnjKmmwF7aVpXhh5BM/eLsxQH7cpoC5ICpN
4EKgq7tJUtqlL6naVnqRbu3Ft6Eq/mVZV4rBw6dxOr48YmXNF8OigFheQ3OHH7Dx
JOCoj6pnhwBN8sBESKMYdQKBgHTiLVX3QNiU99kWa484d5AF5Le3zs8l+edmZm8v
JOC//fWG7shOYEHxPd1LZzI9S+c8LxtVkFXkhFIfEyhavUFhksnrYUFSGB5SST8h
heEOK7yXp177RqgFqWba3I3tLPmtEONJrgVuhy4lXsAqhH1pQybUBQr2f35lFOqL
aBnXAoGAQgHR6jv0et2cpG0xTD7aRG8UeUiVl+TzTT6geEHzxXy0LaO4t0lB8lUs
jPV7cCkeOg9pmFkc7ecZm3m0yqrPKm8DUCQW0eLucnBy4emKakTq1sc+GPKc5YME
/WhgkKE5A+++ILIGDXKBgmk4CDR0ecK5vWwQTXTdxceGn4/cDKw=
-----END RSA PRIVATE KEY-----`;

export default {
  port: 1337,
  dbUri: `mongodb://${dbHost}:27017/rest-api-tutorial`,
  saltWorkFactor: 10,
  accessTokenTtl: "15m",
  refreshTokenTtl: "1y",
  publicKey: publicRsa2048Key,
  privateKey: privateRsa2048Key,
};
