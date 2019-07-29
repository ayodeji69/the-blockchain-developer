var helloworldcontractContract = web3.eth.contract([{"constant":true,"inputs":[],"name":"greet","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"}]);
var helloworldcontract = helloworldcontractContract.new(
    {
        from: web3.eth.accounts[0],
        data: '0x608060405234801561001057600080fd5b5060408051808201909152600b8082527f48656c6c6f20576f726c6400000000000000000000000000000000000000000060209092019182526100559160009161005b565b506100f6565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061009c57805160ff19168380011785556100c9565b828001600101855582156100c9579182015b828111156100c95782518255916020019190600101906100ae565b506100d59291506100d9565b5090565b6100f391905b808211156100d557600081556001016100df565b90565b61018b806101056000396000f3fe60806040526004361061003a577c01000000000000000000000000000000000000000000000000000000006000350463cfae3217811461003f575b600080fd5b34801561004b57600080fd5b506100546100c9565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561008e578181015183820152602001610076565b50505050905090810190601f1680156100bb5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b60008054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156101555780601f1061012a57610100808354040283529160200191610155565b820191906000526020600020905b81548152906001019060200180831161013857829003601f168201915b505050505090509056fea165627a7a723058201d9ec503ee0dc9dd2d5561a1b25e223da00992abf1b28652f9cb673ab2eaf1bf0029',
        gas: '4700000'
    }, function (e, contract){
        console.log(e, contract);
        if (typeof contract.address !== 'undefined') {
            console.log('Contract mined! address: ' + contract.address + ' transactionHash: ' + contract.transactionHash);
        }
    })