import _ from 'lodash'
import React, { Component } from 'react';
import { Button, Container, Dropdown, Grid, Header, Image, Input, Menu, Segment } from 'semantic-ui-react';
import './App.css';

// import { coinOptions } from './coinOptions.json'

const marginTop = {
  marginTop: 30,
}

var apiURL = 'https://api.coinmarketcap.com/v1/ticker/?limit=200';
var xhr = new XMLHttpRequest();
xhr.open('GET', apiURL, false);
xhr.send();
var data = JSON.parse(xhr.responseText);
console.log(xhr.status);

const coinOptions = [
{key: 'Choose...', text: 'Choose...', value: 'CUSTOM'},
{key: 'BTC', text: 'Bitcoin', value: 'BTC'},
{key: 'ETH', text: 'Ethereum', value: 'ETH'},
{key: 'XRP', text: 'Ripple', value: 'XRP'},
{key: 'BCH', text: 'Bitcoin Cash', value: 'BCH'},
{key: 'ADA', text: 'Cardano', value: 'ADA'},
{key: 'LTC', text: 'Litecoin', value: 'LTC'},
{key: 'XEM', text: 'NEM', value: 'XEM'},
{key: 'EOS', text: 'EOS', value: 'EOS'},
{key: 'XLM', text: 'Stellar', value: 'XLM'},
{key: 'NEO', text: 'NEO', value: 'NEO'},
{key: 'MIOTA', text: 'IOTA', value: 'MIOTA'},
{key: 'DASH', text: 'Dash', value: 'DASH'},
{key: 'XMR', text: 'Monero', value: 'XMR'},
{key: 'TRX', text: 'TRON', value: 'TRX'},
{key: 'BTG', text: 'Bitcoin Gold', value: 'BTG'},
{key: 'ICX', text: 'ICON', value: 'ICX'},
{key: 'QTUM', text: 'Qtum', value: 'QTUM'},
{key: 'ETC', text: 'Ethereum Classic', value: 'ETC'},
{key: 'LSK', text: 'Lisk', value: 'LSK'},
{key: 'VEN', text: 'VeChain', value: 'VEN'},
{key: 'XRB', text: 'RaiBlocks', value: 'XRB'},
{key: 'USDT', text: 'Tether', value: 'USDT'},
{key: 'OMG', text: 'OmiseGO', value: 'OMG'},
{key: 'PPT', text: 'Populous', value: 'PPT'},
{key: 'ZEC', text: 'Zcash', value: 'ZEC'},
{key: 'XVG', text: 'Verge', value: 'XVG'},
{key: 'BNB', text: 'Binance Coin', value: 'BNB'},
{key: 'SC', text: 'Siacoin', value: 'SC'},
{key: 'BCN', text: 'Bytecoin', value: 'BCN'},
{key: 'STRAT', text: 'Stratis', value: 'STRAT'},
{key: 'STEEM', text: 'Steem', value: 'STEEM'},
{key: 'ARDR', text: 'Ardor', value: 'ARDR'},
{key: 'SNT', text: 'Status', value: 'SNT'},
{key: 'MKR', text: 'Maker', value: 'MKR'},
{key: 'REP', text: 'Augur', value: 'REP'},
{key: 'BTS', text: 'BitShares', value: 'BTS'},
{key: 'ZRX', text: '0x', value: 'ZRX'},
{key: 'WAVES', text: 'Waves', value: 'WAVES'},
{key: 'DOGE', text: 'Dogecoin', value: 'DOGE'},
{key: 'KCS', text: 'KuCoin Shares', value: 'KCS'},
{key: 'VERI', text: 'Veritaseum', value: 'VERI'},
{key: 'ETN', text: 'Electroneum', value: 'ETN'},
{key: 'DCR', text: 'Decred', value: 'DCR'},
{key: 'KMD', text: 'Komodo', value: 'KMD'},
{key: 'WTC', text: 'Walton', value: 'WTC'},
{key: 'DRGN', text: 'Dragonchain', value: 'DRGN'},
{key: 'DCN', text: 'Dentacoin', value: 'DCN'},
{key: 'LRC', text: 'Loopring', value: 'LRC'},
{key: 'ARK', text: 'Ark', value: 'ARK'},
{key: 'SALT', text: 'SALT', value: 'SALT'},
{key: 'QASH', text: 'QASH', value: 'QASH'},
{key: 'DGB', text: 'DigiByte', value: 'DGB'},
{key: 'BAT', text: 'Basic Attention Token', value: 'BAT'},
{key: 'GNT', text: 'Golem', value: 'GNT'},
{key: 'PIVX', text: 'PIVX', value: 'PIVX'},
{key: 'HSR', text: 'Hshare', value: 'HSR'},
{key: 'WAX', text: 'WAX', value: 'WAX'},
{key: 'KNC', text: 'Kyber Network', value: 'KNC'},
{key: 'ETHOS', text: 'Ethos', value: 'ETHOS'},
{key: 'RHOC', text: 'RChain', value: 'RHOC'},
{key: 'GAS', text: 'Gas', value: 'GAS'},
{key: 'FUN', text: 'FunFair', value: 'FUN'},
{key: 'GBYTE', text: 'Byteball Bytes', value: 'GBYTE'},
{key: 'SMART', text: 'SmartCash', value: 'SMART'},
{key: 'FCT', text: 'Factom', value: 'FCT'},
{key: 'CND', text: 'Cindicator', value: 'CND'},
{key: 'AION', text: 'Aion', value: 'AION'},
{key: 'DENT', text: 'Dent', value: 'DENT'},
{key: 'MONA', text: 'MonaCoin', value: 'MONA'},
{key: 'ELF', text: 'aelf', value: 'ELF'},
{key: 'DGD', text: 'DigixDAO', value: 'DGD'},
{key: 'POWR', text: 'Power Ledger', value: 'POWR'},
{key: 'AE', text: 'Aeternity', value: 'AE'},
{key: 'NXT', text: 'Nxt', value: 'NXT'},
{key: 'BTM', text: 'Bytom', value: 'BTM'},
{key: 'SYS', text: 'Syscoin', value: 'SYS'},
{key: 'KIN', text: 'Kin', value: 'KIN'},
{key: 'NAS', text: 'Nebulas', value: 'NAS'},
{key: 'ZCL', text: 'ZClassic', value: 'ZCL'},
{key: 'MAID', text: 'MaidSafeCoin', value: 'MAID'},
{key: 'RDD', text: 'ReddCoin', value: 'RDD'},
{key: 'NXS', text: 'Nexus', value: 'NXS'},
{key: 'GXS', text: 'GXShares', value: 'GXS'},
{key: 'REQ', text: 'Request Network', value: 'REQ'},
{key: 'SRN', text: 'SIRIN LABS Token', value: 'SRN'},
{key: 'LINK', text: 'ChainLink', value: 'LINK'},
{key: 'ENG', text: 'Enigma', value: 'ENG'},
{key: 'XZC', text: 'ZCoin', value: 'XZC'},
{key: 'EMC', text: 'Emercoin', value: 'EMC'},
{key: 'NEBL', text: 'Neblio', value: 'NEBL'},
{key: 'CNX', text: 'Cryptonex', value: 'CNX'},
{key: 'XP', text: 'Experience Points', value: 'XP'},
{key: 'BNT', text: 'Bancor', value: 'BNT'},
{key: 'SUB', text: 'Substratum', value: 'SUB'},
{key: 'MED', text: 'MediBloc', value: 'MED'},
{key: 'QSP', text: 'Quantstamp', value: 'QSP'},
{key: 'BTX', text: 'Bitcore', value: 'BTX'},
{key: 'PAY', text: 'TenX', value: 'PAY'},
{key: 'XPA', text: 'XPlay', value: 'XPA'},
{key: 'GAME', text: 'GameCredits', value: 'GAME'},
{key: 'GNO', text: 'Gnosis', value: 'GNO'},
{key: 'CVC', text: 'Civic', value: 'CVC'},
{key: 'PAC', text: 'PACcoin', value: 'PAC'},
{key: 'BTCD', text: 'BitcoinDark', value: 'BTCD'},
{key: 'ICN', text: 'Iconomi', value: 'ICN'},
{key: 'SKY', text: 'Skycoin', value: 'SKY'},
{key: 'PART', text: 'Particl', value: 'PART'},
{key: 'XDN', text: 'DigitalNote', value: 'XDN'},
{key: 'PLR', text: 'Pillar', value: 'PLR'},
{key: 'POE', text: 'Po.et', value: 'POE'},
{key: 'RDN', text: 'Raiden Network Token', value: 'RDN'},
{key: 'DEW', text: 'DEW', value: 'DEW'},
{key: 'VIBE', text: 'VIBE', value: 'VIBE'},
{key: 'SPHTX', text: 'SophiaTX', value: 'SPHTX'},
{key: 'VEE', text: 'BLOCKv', value: 'VEE'},
{key: 'BCO', text: 'BridgeCoin', value: 'BCO'},
{key: 'STORJ', text: 'Storj', value: 'STORJ'},
{key: 'VTC', text: 'Vertcoin', value: 'VTC'},
{key: 'RLC', text: 'iExec RLC', value: 'RLC'},
{key: 'NAV', text: 'NAV Coin', value: 'NAV'},
{key: 'TNB', text: 'Time New Bank', value: 'TNB'},
{key: 'SAN', text: 'Santiment Network Token', value: 'SAN'},
{key: 'BLOCK', text: 'Blocknet', value: 'BLOCK'},
{key: 'UBQ', text: 'Ubiq', value: 'UBQ'},
{key: 'PPP', text: 'PayPie', value: 'PPP'},
{key: 'TEL', text: 'Telcoin', value: 'TEL'},
{key: 'BCC', text: 'BitConnect', value: 'BCC'},
{key: 'LEND', text: 'ETHLend', value: 'LEND'},
{key: 'XCP', text: 'Counterparty', value: 'XCP'},
{key: 'ENJ', text: 'Enjin Coin', value: 'ENJ'},
{key: 'COB', text: 'Cobinhood', value: 'COB'},
{key: 'DTR', text: 'Dynamic Trading Rights', value: 'DTR'},
{key: 'ACT', text: 'Achain', value: 'ACT'},
{key: 'STORM', text: 'Storm', value: 'STORM'},
{key: 'MCO', text: 'Monaco', value: 'MCO'},
{key: 'AST', text: 'AirSwap', value: 'AST'},
{key: 'SNGLS', text: 'SingularDTV', value: 'SNGLS'},
{key: 'HPB', text: 'High Performance Blockchain', value: 'HPB'},
{key: 'OST', text: 'Simple Token', value: 'OST'},
{key: 'R', text: 'Revain', value: 'R'},
{key: 'HTML', text: 'HTMLCOIN', value: 'HTML'},
{key: 'RPX', text: 'Red Pulse', value: 'RPX'},
{key: 'INS', text: 'INS Ecosystem', value: 'INS'},
{key: 'WABI', text: 'WaBi', value: 'WABI'},
{key: 'APPC', text: 'AppCoins', value: 'APPC'},
{key: 'DBC', text: 'DeepBrain Chain', value: 'DBC'},
{key: 'XBY', text: 'XTRABYTES', value: 'XBY'},
{key: 'BAY', text: 'BitBay', value: 'BAY'},
{key: 'SPANK', text: 'SpankChain', value: 'SPANK'},
{key: 'PPC', text: 'Peercoin', value: 'PPC'},
{key: 'MANA', text: 'Decentraland', value: 'MANA'},
{key: 'BIX', text: 'Bibox Token', value: 'BIX'},
{key: 'EMC2', text: 'Einsteinium', value: 'EMC2'},
{key: 'UNITY', text: 'SuperNET', value: 'UNITY'},
{key: 'RCN', text: 'Ripio Credit Network', value: 'RCN'},
{key: 'EDG', text: 'Edgeless', value: 'EDG'},
{key: 'ITC', text: 'IoT Chain', value: 'ITC'},
{key: 'ANT', text: 'Aragon', value: 'ANT'},
{key: 'CMT', text: 'CyberMiles', value: 'CMT'},
{key: 'DATA', text: 'Streamr DATAcoin', value: 'DATA'},
{key: 'SNM', text: 'SONM', value: 'SNM'},
{key: 'INT', text: 'Internet Node Token', value: 'INT'},
{key: 'ZEN', text: 'ZenCash', value: 'ZEN'},
{key: 'CTR', text: 'Centra', value: 'CTR'},
{key: 'ADX', text: 'AdEx', value: 'ADX'},
{key: 'MLN', text: 'Melon', value: 'MLN'},
{key: 'MOD', text: 'Modum', value: 'MOD'},
{key: 'NLG', text: 'Gulden', value: 'NLG'},
{key: 'TNT', text: 'Tierion', value: 'TNT'},
{key: 'AMB', text: 'Ambrosus', value: 'AMB'},
{key: 'MTL', text: 'Metal', value: 'MTL'},
{key: 'NGC', text: 'NAGA', value: 'NGC'},
{key: 'UTK', text: 'UTRUST', value: 'UTK'},
{key: 'NULS', text: 'Nuls', value: 'NULS'},
{key: 'QRL', text: 'Quantum Resistant Ledger', value: 'QRL'},
{key: 'ATM', text: 'ATMChain', value: 'ATM'},
{key: 'FUEL', text: 'Etherparty', value: 'FUEL'},
{key: 'MDS', text: 'MediShares', value: 'MDS'},
{key: 'DNT', text: 'district0x', value: 'DNT'},
{key: 'ETP', text: 'Metaverse ETP', value: 'ETP'},
{key: 'QLC', text: 'QLINK', value: 'QLC'},
{key: 'UKG', text: 'Unikoin Gold', value: 'UKG'},
{key: 'LBC', text: 'LBRY Credits', value: 'LBC'},
{key: 'RISE', text: 'Rise', value: 'RISE'},
{key: 'ECA', text: 'Electra', value: 'ECA'},
{key: 'AGRS', text: 'Agoras Tokens', value: 'AGRS'},
{key: 'WINGS', text: 'Wings', value: 'WINGS'},
{key: 'VIA', text: 'Viacoin', value: 'VIA'},
{key: 'ION', text: 'ION', value: 'ION'},
{key: 'TRIG', text: 'Triggers', value: 'TRIG'},
{key: 'XAS', text: 'Asch', value: 'XAS'},
{key: 'PRL', text: 'Oyster', value: 'PRL'},
{key: 'BURST', text: 'Burst', value: 'BURST'},
{key: 'BRD', text: 'Bread', value: 'BRD'},
{key: 'MGO', text: 'MobileGo', value: 'MGO'},
{key: 'THC', text: 'HempCoin', value: 'THC'},
{key: 'CLOAK', text: 'CloakCoin', value: 'CLOAK'},
{key: 'IOC', text: 'I/O Coin', value: 'IOC'},
{key: 'CDT', text: 'CoinDash', value: 'CDT'},
{key: 'BDG', text: 'BitDegree', value: 'BDG'},
{key: 'WGR', text: 'Wagerr', value: 'WGR'},
{key: 'EDO', text: 'Eidoo', value: 'EDO'},
{key: 'MNX', text: 'MinexCoin', value: 'MNX'},
{key: 'CAPP', text: 'Cappasity', value: 'CAPP'},
{key: 'HVN', text: 'Hive', value: 'HVN'},
{key: 'LKK', text: 'Lykke', value: 'LKK'},
{key: 'DCT', text: 'DECENT', value: 'DCT'},
{key: 'HST', text: 'Decision Token', value: 'HST'},
{key: 'GTO', text: 'Gifto', value: 'GTO'},
{key: '1ST', text: 'FirstBlood', value: '1ST'},
{key: 'LUN', text: 'Lunyr', value: 'LUN'},
{key: 'GVT', text: 'Genesis Vision', value: 'GVT'},
{key: 'TAU', text: 'Lamden', value: 'TAU'},
{key: 'GRID', text: 'Grid+', value: 'GRID'},
{key: 'AEON', text: 'Aeon', value: 'AEON'},
{key: 'SLS', text: 'SaluS', value: 'SLS'},
{key: 'VOX', text: 'Voxels', value: 'VOX'},
{key: 'ECC', text: 'ECC', value: 'ECC'},
{key: 'ADT', text: 'adToken', value: 'ADT'},
{key: 'GRS', text: 'Groestlcoin', value: 'GRS'},
{key: 'TAAS', text: 'TaaS', value: 'TAAS'},
{key: 'SAFEX', text: 'Safe Exchange Coin', value: 'SAFEX'},
{key: 'JINN', text: 'Jinn', value: 'JINN'},
{key: 'KRM', text: 'Karma', value: 'KRM'},
{key: 'CFI', text: 'Cofound.it', value: 'CFI'},
{key: 'CAT', text: 'BitClave', value: 'CAT'},
{key: 'MOON', text: 'Mooncoin', value: 'MOON'},
{key: 'NMC', text: 'Namecoin', value: 'NMC'},
{key: 'PAYX', text: 'Paypex', value: 'PAYX'},
{key: 'SHIFT', text: 'Shift', value: 'SHIFT'},
{key: 'EVX', text: 'Everex', value: 'EVX'},
{key: 'IXT', text: 'iXledger', value: 'IXT'},
{key: 'MER', text: 'Mercury', value: 'MER'},
{key: 'DLT', text: 'Agrello', value: 'DLT'},
{key: 'TRST', text: 'WeTrust', value: 'TRST'},
{key: 'PURA', text: 'Pura', value: 'PURA'},
{key: 'INK', text: 'Ink', value: 'INK'},
{key: 'TKN', text: 'TokenCard', value: 'TKN'},
{key: 'HGT', text: 'HelloGold', value: 'HGT'},
{key: 'CRW', text: 'Crown', value: 'CRW'},
{key: 'PEPECASH', text: 'Pepe Cash', value: 'PEPECASH'},
{key: 'DIME', text: 'Dimecoin', value: 'DIME'},
{key: 'FTC', text: 'Feathercoin', value: 'FTC'},
{key: 'XSPEC', text: 'Spectrecoin', value: 'XSPEC'},
{key: 'BITCNY', text: 'bitCNY', value: 'BITCNY'},
{key: 'MTH', text: 'Monetha', value: 'MTH'},
{key: 'VIB', text: 'Viberate', value: 'VIB'},
{key: 'NVST', text: 'NVO', value: 'NVST'},
{key: 'WRC', text: 'Worldcore', value: 'WRC'},
{key: 'LA', text: 'LAToken', value: 'LA'},
{key: 'XSH', text: 'SHIELD', value: 'XSH'},
{key: 'DPY', text: 'Delphy', value: 'DPY'},
{key: 'PRS', text: 'Presearch', value: 'PRS'},
{key: 'YOYOW', text: 'YOYOW', value: 'YOYOW'},
{key: 'VOISE', text: 'Voise', value: 'VOISE'},
{key: 'TIO', text: 'Trade Token', value: 'TIO'},
{key: 'NET', text: 'Nimiq', value: 'NET'},
{key: 'POT', text: 'PotCoin', value: 'POT'},
{key: 'HMQ', text: 'Humaniq', value: 'HMQ'},
{key: 'DAT', text: 'Datum', value: 'DAT'},
{key: 'COSS', text: 'COSS', value: 'COSS'},
{key: 'FLASH', text: 'Flash', value: 'FLASH'},
{key: 'NSR', text: 'NuShares', value: 'NSR'},
{key: 'SBD', text: 'Steem Dollars', value: 'SBD'},
{key: 'XWC', text: 'WhiteCoin', value: 'XWC'},
{key: 'NEU', text: 'Neumark', value: 'NEU'},
{key: 'PPY', text: 'Peerplays', value: 'PPY'},
{key: 'DNA', text: 'EncrypGen', value: 'DNA'},
{key: 'XEL', text: 'Elastic', value: 'XEL'},
{key: 'DMD', text: 'Diamond', value: 'DMD'},
{key: 'TIX', text: 'Blocktix', value: 'TIX'},
{key: 'AMP', text: 'Synereo', value: 'AMP'},
{key: 'GUP', text: 'Matchpool', value: 'GUP'},
{key: 'SIB', text: 'SIBCoin', value: 'SIB'},
{key: 'FAIR', text: 'FairCoin', value: 'FAIR'},
{key: 'ZSC', text: 'Zeusshield', value: 'ZSC'},
{key: 'PASC', text: 'Pascal Coin', value: 'PASC'},
{key: 'RVT', text: 'Rivetz', value: 'RVT'},
{key: 'DIVX', text: 'Divi', value: 'DIVX'},
{key: 'SNOV', text: 'Snovio', value: 'SNOV'},
{key: 'MSP', text: 'Mothership', value: 'MSP'},
{key: 'BLT', text: 'Bloom', value: 'BLT'},
{key: 'MDA', text: 'Moeda Loyalty Points', value: 'MDA'},
{key: 'VRC', text: 'VeriCoin', value: 'VRC'},
{key: 'ONION', text: 'DeepOnion', value: 'ONION'},
{key: 'ORME', text: 'Ormeus Coin', value: 'ORME'},
{key: 'BLK', text: 'BlackCoin', value: 'BLK'},
{key: 'SLR', text: 'SolarCoin', value: 'SLR'},
{key: 'GTC', text: 'Game.com', value: 'GTC'},
{key: 'BCPT', text: 'BlockMason Credit Protocol', value: 'BCPT'},
{key: 'EXP', text: 'Expanse', value: 'EXP'},
{key: 'AURA', text: 'Aurora DAO', value: 'AURA'},
{key: 'PHR', text: 'Phore', value: 'PHR'},
{key: 'GRC', text: 'GridCoin', value: 'GRC'},
{key: 'DRT', text: 'DomRaider', value: 'DRT'},
{key: 'XNN', text: 'Xenon', value: 'XNN'},
{key: 'STX', text: 'Stox', value: 'STX'},
{key: 'NMR', text: 'Numeraire', value: 'NMR'},
{key: 'SNC', text: 'SunContract', value: 'SNC'},
{key: 'PRO', text: 'Propy', value: 'PRO'}
]


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amountCustom1: '0',
      amountCustom2: '0',
      amountCustom3: '0',
      amountCustom4: '0',
      amountCustom5: '0',
      amountCustom6: '0',
      selection1: 'CUSTOM',
      selection2: 'CUSTOM',
      selection3: 'CUSTOM',
      selection4: 'CUSTOM',
      selection5: 'CUSTOM',
      selection6: 'CUSTOM',
      rateCustom1: '',
      rateCustom2: '',
      rateCustom3: '',
      rateCustom4: '',
      rateCustom5: '',
      rateCustom6: '',
      rateCustomPrint1: '',
      rateCustomPrint2: '',
      rateCustomPrint3: '',
      rateCustomPrint4: '',
      rateCustomPrint5: '',
      rateCustomPrint6: '',
      valueCustom1: '0',
      valueCustom2: '0',
      valueCustom3: '0',
      valueCustom4: '0',
      valueCustom5: '0',
      valueCustom6: '0',
      valueAll: '0',
      Coin1: true,
      Coin2: false,
      Coin3: false,
      Coin4: false,
      Coin5: false,
      Coin6: false,
      counter: 1
    };

    this.handleChangeCustomAmount1 = this.handleChangeCustomAmount1.bind(this);
    this.handleChangeCustomAmount2 = this.handleChangeCustomAmount2.bind(this);
    this.handleChangeCustomAmount3 = this.handleChangeCustomAmount3.bind(this);
    this.handleChangeCustomAmount4 = this.handleChangeCustomAmount4.bind(this);
    this.handleChangeCustomAmount5 = this.handleChangeCustomAmount5.bind(this);
    this.handleChangeCustomAmount6 = this.handleChangeCustomAmount6.bind(this);

    this.handleChangeSelection1 = this.handleChangeSelection1.bind(this);
    this.handleChangeSelection2 = this.handleChangeSelection2.bind(this);
    this.handleChangeSelection3 = this.handleChangeSelection3.bind(this);
    this.handleChangeSelection4 = this.handleChangeSelection4.bind(this);
    this.handleChangeSelection5 = this.handleChangeSelection5.bind(this);
    this.handleChangeSelection5 = this.handleChangeSelection5.bind(this);

    this.handleAddCoin1 = this.handleAddCoin1.bind(this);
    this.handleAddCoin2 = this.handleAddCoin2.bind(this);
    this.handleAddCoin3 = this.handleAddCoin3.bind(this);
    this.handleAddCoin4 = this.handleAddCoin4.bind(this);
    this.handleAddCoin5 = this.handleAddCoin5.bind(this);

    this.handleRemoveCoin2 = this.handleRemoveCoin2.bind(this);
    this.handleRemoveCoin3 = this.handleRemoveCoin3.bind(this);
    this.handleRemoveCoin4 = this.handleRemoveCoin4.bind(this);
    this.handleRemoveCoin5 = this.handleRemoveCoin5.bind(this);
    this.handleRemoveCoin6 = this.handleRemoveCoin6.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeCustomAmount1(event) {
    if (event.target.value == '') {
      event.target.value = 0
    }
    this.setState({amountCustom1: event.target.value});
  }

  handleChangeCustomAmount2(event) {
    if(event.target.value == '') {
      event.target.value = 0
    }
    this.setState({amountCustom2: event.target.value});
  }

  handleChangeCustomAmount3(event){
    if(event.target.value == '') {
      event.target.value = 0
    }
    this.setState({amountCustom3: event.target.value});
  }

  handleChangeCustomAmount4(event){
    if(event.target.value == '') {
      event.target.value = 0
    }
    this.setState({amountCustom4: event.target.value});
  }

  handleChangeCustomAmount5(event){
    if(event.target.value == '') {
      event.target.value = 0
    }
    this.setState({amountCustom5: event.target.value});
  }

  handleChangeCustomAmount6(event){
    if(event.target.value == '') {
      event.target.value = 0
    }
    this.setState({amountCustom6: event.target.value});
  }

  handleChangeSelection1(e, {value}) {
    this.setState({selection1: value});
    console.log('this.state.selection is: ' + this.state.selection1);
  }

  handleChangeSelection2(e, {value}) {
    this.setState({selection2: value});
    console.log('this.state.selection2 is: ' + this.state.selection2);
  }

  handleChangeSelection3(e, {value}){
    this.setState({selection3: value});
    console.log('this.state.selection3 is: ' + this.state.selection3);
  }

  handleChangeSelection4(e, {value}){
    this.setState({selection4: value});
  }

  handleChangeSelection5(e, {value}){
    this.setState({selection5: value});
  }

  handleChangeSelection6(e, {value}){
    this.setState({selection6: value});
  }

  handleAddCoin1() {
    this.setState(prevState => ({
      counter: this.state.counter + 1,
      Coin2: true,
    }));
    console.log('the counter is: ' + this.state.counter);
  }

  handleAddCoin2() {
    this.setState(prevState => ({
      counter: this.state.counter + 1,
      Coin3: true
    }));
  }

  handleAddCoin3() {
    this.setState(prevState => ({
      counter: this.state.counter + 1,
      Coin4: true
    }));
  }

  handleAddCoin4() {
    this.setState(prevState => ({
      counter: this.state.counter + 1,
      Coin5: true
    }));
  }

  handleAddCoin5() {
    this.setState(prevState => ({
      counter: this.state.counter + 1,
      Coin6: true
    }));
  }

  handleRemoveCoin2() {
    this.setState(prevState => ({
      counter: prevState.counter -1,
      Coin2: false
    }));
  }

  handleRemoveCoin3() {
    this.setState(prevState => ({
      counter: prevState.counter -1,
      Coin3: false
    }));
  }

  handleRemoveCoin4() {
    this.setState(prevState => ({
      counter: prevState.counter -1,
      Coin4: false
    }));
  }

  handleRemoveCoin5() {
    this.setState(prevState => ({
      counter: prevState.counter -1,
      Coin5: false
    }));
  }

  handleRemoveCoin6() {
    this.setState(prevState => ({
      counter: prevState.counter -1,
      Coin6: false
    }));
  }

  handleSubmit(event) {
    //calculate Custom1
    for(var i = 0; i < data.length; i++) {
      if(data[i].symbol == this.state.selection1) {
        var rateCustom1 = data[i].price_usd;
        var rateCustomPrint1 = ('($' + rateCustom1 + ')');
        const resultCalcRawCustom1 = parseFloat(rateCustom1) * parseFloat(this.state.amountCustom1);
        const resultCalcCustom1 = resultCalcRawCustom1.toFixed(2);
        console.log('Custom choice is ' + this.state.selection1 + " | Rate: " + rateCustom1 + " | " + resultCalcRawCustom1 + " | You have " + this.state.selection1 + " in worth of " + resultCalcCustom1 + "Dollar");
        this.setState({
          rateCustom1: rateCustom1,
          rateCustomPrint1: rateCustomPrint1,
          valueCustom1: resultCalcCustom1
        });
      }
    };
    //calculate Custom2
    for(var i = 0; i < data.length; i++) {
      if(data[i].symbol == this.state.selection2) {
        var rateCustom2 = data[i].price_usd;
        var rateCustomPrint2 = ('($' + rateCustom2 + ')');
        const resultCalcRawCustom2 = parseFloat(rateCustom2) * parseFloat(this.state.amountCustom2);
        const resultCalcCustom2 = resultCalcRawCustom2.toFixed(2);
        console.log('Custom choice is ' + this.state.selection2 + " | Rate: " + rateCustom2 + " | " + resultCalcRawCustom2 + " | You have " + this.state.selection2 + " in worth of " + resultCalcCustom2 + "Dollar");
        this.setState({
          rateCustom2: rateCustom2,
          rateCustomPrint2: rateCustomPrint2,
          valueCustom2: resultCalcCustom2
        });
      }
    };
    //calculate Custom3
    for(var i = 0; i < data.length; i++) {
      if(data[i].symbol == this.state.selection3) {
        var rateCustom3 = data[i].price_usd;
        var rateCustomPrint3 = ('($' + rateCustom3 + ')');
        const resultCalcRawCustom3 = parseFloat(rateCustom3) * parseFloat(this.state.amountCustom3);
        const resultCalcCustom3 = resultCalcRawCustom3.toFixed(2);
        console.log('Custom choice is ' + this.state.selection3 + " | Rate: " + rateCustom3 + " | " + resultCalcRawCustom3 + " | You have " + this.state.selection3 + " in worth of " + resultCalcCustom3 + "Dollar");
        this.setState({
          rateCustom3: rateCustom3,
          rateCustomPrint3: rateCustomPrint3,
          valueCustom3: resultCalcCustom3
        });
      }
    };
    //calculate Custom4
    for(var i = 0; i < data.length; i++) {
      if(data[i].symbol == this.state.selection4) {
        var rateCustom4 = data[i].price_usd;
        var rateCustomPrint4 = ('($' + rateCustom4 + ')');
        const resultCalcRawCustom4 = parseFloat(rateCustom4) * parseFloat(this.state.amountCustom4);
        const resultCalcCustom4 = resultCalcRawCustom4.toFixed(2);
        console.log('Custom choice is ' + this.state.selection4 + " | Rate: " + rateCustom4 + " | " + resultCalcRawCustom4 + " | You have " + this.state.selection4 + " in worth of " + resultCalcCustom4 + "Dollar");
        this.setState({
          rateCustom4: rateCustom4,
          rateCustomPrint4: rateCustomPrint4,
          valueCustom4: resultCalcCustom4
        });
      }
    };
    //calculate Custom5
    for(var i = 0; i < data.length; i++) {
      if(data[i].symbol == this.state.selection4) {
        var rateCustom5 = data[i].price_usd;
        var rateCustomPrint5 = ('($' + rateCustom5 + ')');
        const resultCalcRawCustom5 = parseFloat(rateCustom5) * parseFloat(this.state.amountCustom5);
        const resultCalcCustom5 = resultCalcRawCustom5.toFixed(2);
        console.log('Custom choice is ' + this.state.selection5 + " | Rate: " + rateCustom5 + " | " + resultCalcRawCustom5 + " | You have " + this.state.selection5 + " in worth of " + resultCalcCustom5 + "Dollar");
        this.setState({
          rateCustom5: rateCustom5,
          rateCustomPrint5: rateCustomPrint5,
          valueCustom5: resultCalcCustom5
        });
      }
    };
    //calculate Custom6
    for(var i = 0; i < data.length; i++) {
      if(data[i].symbol == this.state.selection4) {
        var rateCustom6 = data[i].price_usd;
        var rateCustomPrint6 = ('($' + rateCustom6 + ')');
        const resultCalcRawCustom6 = parseFloat(rateCustom6) * parseFloat(this.state.amountCustom6);
        const resultCalcCustom6 = resultCalcRawCustom6.toFixed(2);
        console.log('Custom choice is ' + this.state.selection6 + " | Rate: " + rateCustom6 + " | " + resultCalcRawCustom6 + " | You have " + this.state.selection6 + " in worth of " + resultCalcCustom6 + "Dollar");
        this.setState({
          rateCustom6: rateCustom6,
          rateCustomPrint6: rateCustomPrint6,
          valueCustom6: resultCalcCustom6
        });
      }
    };

    console.log(this.state.valueAll);
    console.log(this.props.children);

    event.preventDefault();
  }

  render() {
    var calcAll = (
      Number(this.state.valueCustom1) +
      Number(this.state.valueCustom2) +
      Number(this.state.valueCustom3) +
      Number(this.state.valueCustom4) +
      Number(this.state.valueCustom5) +
      Number(this.state.valueCustom6)).toFixed(2);
    return (
      <div className="App">
      <Menu pointing>
        <Menu.Item>
          <Header as='h1'>Crypto Calculator</Header>
        </Menu.Item>
      </Menu>
      <Container>
        <form onSubmit={this.handleSubmit}>
          <Grid stackable columns={3}>
            <Grid.Row>
            {
              this.state.Coin1?
                <Grid.Column>
                  <Segment.Group horizontal>
                    <Segment>
                      <Image
                        src={require('./icons/' + this.state.selection1 + '@2X.PNG')}
                        centered
                      />
                      <Header as='h4'>
                        <Dropdown inline options={coinOptions} value={this.state.value} onChange={this.handleChangeSelection1} defaultValue={coinOptions[0].value} />
                      </Header>
                      {this.state.rateCustomPrint1}
                    </Segment>
                    <Segment>
                      <Input type="number" step="0.001" value={this.state.value} onChange={this.handleChangeCustomAmount1} className="form-control"  placeholder="Enter amount"/>
                      <Header as='h3'>$ {this.state.valueCustom1}</Header>
                    </Segment>
                  </Segment.Group>
                  {
                    !this.state.Coin2?
                      <Button primary circular icon='plus' floated='right' onClick={this.handleAddCoin1}/>
                      :
                      <div></div>
                    }
                </Grid.Column>
              :
              <div></div>
            }
            {
              this.state.Coin2?
                <Grid.Column>
                  <Segment.Group horizontal>
                    <Segment>
                      <Image
                        src={require('./icons/' + this.state.selection2 + '@2X.PNG')}
                        centered
                      />
                      <Header as='h4'>
                        <Dropdown inline options={coinOptions} value={this.state.value} onChange={this.handleChangeSelection2} defaultValue={coinOptions[0].value} />
                      </Header>
                      {this.state.rateCustomPrint2}
                    </Segment>
                    <Segment>
                      <Input type="number" step="0.001" value={this.state.value} onChange={this.handleChangeCustomAmount2} className="form-control"  placeholder="Enter amount"/>
                      <Header as='h3'>$ {this.state.valueCustom2}</Header>
                    </Segment>
                  </Segment.Group>
                  {
                    !this.state.Coin3?
                      <Button primary circular icon='plus' floated='right' onClick={this.handleAddCoin2}/>
                      :
                      <div></div>
                  }
                  {
                    !this.state.Coin3?
                      <Button primary circular icon='minus' floated='right' onClick={this.handleRemoveCoin2}/>
                      :
                      <div></div>
                  }
                </Grid.Column>
              :
              <div></div>
            }
            {
              this.state.Coin3?
                <Grid.Column>
                  <Segment.Group horizontal>
                    <Segment>
                      <Image
                        src={require('./icons/' + this.state.selection3 + '@2X.PNG')}
                        centered
                      />
                      <Header as='h4'>
                        <Dropdown inline options={coinOptions} value={this.state.value} onChange={this.handleChangeSelection3} defaultValue={coinOptions[0].value} />
                      </Header>
                      {this.state.rateCustomPrint3}
                    </Segment>
                    <Segment>
                      <Input type="number" step="0.001" value={this.state.value} onChange={this.handleChangeCustomAmount3} className="form-control"  placeholder="Enter amount"/>
                      <Header as='h3'>$ {this.state.valueCustom3}</Header>
                    </Segment>
                  </Segment.Group>
                  {
                    !this.state.Coin4?
                      <Button primary circular icon='plus' floated='right' onClick={this.handleAddCoin3}/>
                      :
                      <div></div>
                  }
                  {
                    !this.state.Coin4?
                      <Button primary circular icon='minus' floated='right' onClick={this.handleRemoveCoin3}/>
                      :
                      <div></div>
                  }
                </Grid.Column>
              :
              <div></div>
              }
              {
                this.state.Coin4?
                  <Grid.Column>
                    <Segment.Group horizontal>
                      <Segment>
                        <Image
                          src={require('./icons/' + this.state.selection4 + '@2X.PNG')}
                          centered
                        />
                        <Header as='h4'>
                          <Dropdown inline options={coinOptions} value={this.state.value} onChange={this.handleChangeSelection4} defaultValue={coinOptions[0].value} />
                        </Header>
                        {this.state.rateCustomPrint4}
                      </Segment>
                      <Segment>
                        <Input type="number" step="0.001" value={this.state.value} onChange={this.handleChangeCustomAmount4} className="form-control"  placeholder="Enter amount"/>
                        <Header as='h3'>$ {this.state.valueCustom4}</Header>
                      </Segment>
                    </Segment.Group>
                    {
                      !this.state.Coin5?
                        <Button primary circular icon='plus' floated='right' onClick={this.handleAddCoin4}/>
                        :
                        <div></div>
                    }
                    {
                      !this.state.Coin5?
                        <Button primary circular icon='minus' floated='right' onClick={this.handleRemoveCoin4}/>
                        :
                        <div></div>
                    }
                  </Grid.Column>
                :
                <div></div>
              }
              {
                this.state.Coin5?
                  <Grid.Column>
                    <Segment.Group horizontal>
                      <Segment>
                        <Image
                          src={require('./icons/' + this.state.selection5 + '@2X.PNG')}
                          centered
                        />
                        <Header as='h4'>
                          <Dropdown inline options={coinOptions} value={this.state.value} onChange={this.handleChangeSelection5} defaultValue={coinOptions[0].value} />
                        </Header>
                        {this.state.rateCustomPrint5}
                      </Segment>
                      <Segment>
                        <Input type="number" step="0.001" value={this.state.value} onChange={this.handleChangeCustomAmount5} className="form-control"  placeholder="Enter amount"/>
                        <Header as='h3'>$ {this.state.valueCustom5}</Header>
                      </Segment>
                    </Segment.Group>
                    {
                      !this.state.Coin6?
                        <Button primary circular icon='plus' floated='right' onClick={this.handleAddCoin5}/>
                        :
                        <div></div>
                    }
                    {
                      !this.state.Coin6?
                        <Button primary circular icon='minus' floated='right' onClick={this.handleRemoveCoin5}/>
                        :
                        <div></div>
                    }
                  </Grid.Column>
                :
                <div></div>
              }
              {
                this.state.Coin6?
                  <Grid.Column>
                    <Segment.Group horizontal>
                      <Segment>
                        <Image
                          src={require('./icons/' + this.state.selection6 + '@2X.PNG')}
                          centered
                        />
                        <Header as='h4'>
                          <Dropdown inline options={coinOptions} value={this.state.value} onChange={this.handleChangeSelection6} defaultValue={coinOptions[0].value} />
                        </Header>
                        {this.state.rateCustomPrint6}
                      </Segment>
                      <Segment>
                        <Input type="number" step="0.001" value={this.state.value} onChange={this.handleChangeCustomAmount6} className="form-control"  placeholder="Enter amount"/>
                        <Header as='h3'>$ {this.state.valueCustom6}</Header>
                      </Segment>
                    </Segment.Group>
                    {
                      this.state.Coin6?
                        <Button primary circular icon='minus' floated='right' onClick={this.handleRemoveCoin6}/>
                        :
                        <div></div>
                    }
                  </Grid.Column>
                :
                <div></div>
              }
            </Grid.Row>
          </Grid>
          <Grid>
            <Grid.Row>
               <Grid.Column floated='right'>

              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>
                <Header as='h3'>All coins together: $ {calcAll}</Header>
                <input type="submit" value="Calculate" className="ui primary button"/>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </form>
      </Container>
    </div>
    );
  }
}

export default App;
