require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give narrow frown ski stove deny ranch column install hat army gasp'; 
let testAccounts = [
"0x2eacb9669aeecd940e2d8110408d82e9d1fa18e49cc03eded16c5f15eba97b6b",
"0xc27c87076da2c75118bc59a6b6d4b8e5b1e43abedb70f5e72305dc7bfba5722c",
"0x2f50831171e2063175c489d1e3fb86aed0ee6207b1ebbc6468a42a2307a35c14",
"0xf10034361d333ed876cb82e8225f99aa469ea19c8db043994a52b9b9a6daccef",
"0xf40b9cc0b9cb135666bf8bc368b7c6b1483557df5b1ba96dcd9b89d5f06362ee",
"0x3bbb39f32b0b8398147402d31fcf57aef7b8776e69b3b79f90d3a3168a6c8aa4",
"0xc9cbfe035d380fa19478390c96f4fdde5902fbc250a8bea3b7a7ed2cadd1b8dc",
"0x8d14bac3c35492803d61824169af698c9eaf8254239b62601815fae204c29b6c",
"0x276fb3ab1644b32196715f51950758bbfa8a6bdf535f9e1caf9ca2d8a51a8cbe",
"0xaa6079a64ec2351dc001d4bda41a0dd5f382c6ea2a256dbaf9e2b595f5cc0c82"
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
            version: '^0.8.0'
        }
    }
};

