// SPDX-License-Identifier: UNLICENSED

pragma solidity >=0.5.0;

import '@uniswap/v2-core/contracts/interfaces/IUniswapV2Factory.sol';
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/utils/Address.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import './test/TokenA.sol';
import './test/TokenB.sol';

contract NewPair {
    using Address for address;
    address public tokenA;
    address public tokenB;
    IUniswapV2Factory factory;
    
    constructor(address _tokenA, address _tokenB, address _factoryAddress) {
        require(_tokenA.isContract(),"_tokenA must be a contract");
        require(_tokenB.isContract(),"_tokenB must be a contract");
        tokenA = _tokenA;
        tokenB = _tokenB;
        factory = IUniswapV2Factory(_factoryAddress);
    }


    function getPair(address _tokenA, address _tokenB) external view returns (address) {
        address pair = factory.getPair(_tokenA, _tokenB);
        return pair;
    }

    function createpair(address _tokenA, address _tokenB) external {
        address pair = factory.createPair(_tokenA, _tokenB);
        emit PairCreated(_tokenA, _tokenB, pair);
    }
    event PairCreated(address indexed token0, address indexed token1, address pair);
}


