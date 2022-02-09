import { 
    NewPair,
    TokenA,
    TokenB,
    NewPair__factory,
    TokenA__factory,
    TokenB__factory 
    } from "../typechain";

const { expect } = require("chai");
const { ethers } = require("hardhat");


describe("NewPair", async () => {
    let newpair: NewPair,
        tokenA: TokenA,
        tokenB: TokenB,
        factory = "0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f";
    let NEWPAIR: NewPair__factory,
        TOKENA: TokenA__factory,
        TOKENB: TokenB__factory;
    before(async () => {
        TOKENA = (await ethers.getContractFactory("TokenA")) as TokenA__factory;
        TOKENB = (await ethers.getContractFactory("TokenB")) as TokenB__factory;
        NEWPAIR = (await ethers.getContractFactory("NewPair")) as NewPair__factory;
        /*const TokenA = await ethers.getContractFactory("TokenA");
        const TokenB = await ethers.getContractFactory("TokenB");
        const NewPair = await ethers.getContractFactory("NewPair");

        const tokenA = await TokenA.deploy();
        const tokenB = await TokenB.deploy();
        const factory =  "0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f";
        const newpair = await NewPair.deploy(tokenA.address, tokenB.address, factory);*/
    });
    beforeEach(async () => {
        tokenA = await TOKENA.deploy();
        tokenB = await TOKENB.deploy();
        newpair = await NEWPAIR.deploy(tokenA.address, tokenB.address, factory);
    });
    describe("Create Pair", () => {
        it("creating a new pair", async () => {
            await expect(newpair.createpair(tokenA.address, tokenB.address)).to.emit(newpair, 'PairCreated');
            const pair1 = await newpair.getPair(tokenA.address, tokenB.address);
            console.log(pair1);
        })
    })
    
})