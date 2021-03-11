require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hope enroll sure trophy name response total huge grid knife army genius'; 
let testAccounts = [
"0xf46b0433323f4efc70ffd5296e98c06e629e22b65d0464d1e409f03be0086b8b",
"0xbe669b44e4f828aad4024af514f6ea3ac619856f19bc73adbffe17d428b6a284",
"0xdcacdfed50e0e59fc1c76cbc059c678a0c8f3a7eb8fbd5f19dd79508ad2cd3bf",
"0x73d7135d91efacfd3616567b8ad714aae75ea642d15b4ed8ed7ddcdc213de5b7",
"0xfe21f99db099a1cc13544570623b04eb0c4c710e9ab14173b66016f11ddaf2be",
"0xbe9ad85a8b2679e10f69d9871b38f7280b20c3a6d2039c915cf1d186c9ea880d",
"0xe0519cb4acaae60eba5c5d40969c1c716db64e5d2ddd7b8e222d5c9f5d9db1ee",
"0x690105839b55f889f55cdc0b6d9f39e6c6aea3c2239af5b12cba65c52bd2db31",
"0x03ad10ef4fe01f9a616c66cbeb62530f99ec1c55bbc21ab16339299a8295a7e7",
"0xabc9afc2dd759dbbd0d198b54a5673d862c0b2a0198add37f114cf0d4b441b4d"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
