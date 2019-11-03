const moacERC20ABI =
[
  {
    'constant': false,
    'inputs': [
      { 'name': 'tokenNum', 'type': 'uint256' }
    ],
    'name': 'redeemToken',
    'outputs': [],
    'payable': false,
    'type': 'function'
  },
  {
    'constant': true,
    'inputs': [],
    'name': 'name',
    'outputs': [
      { 'name': '', 'type': 'string' }
    ],
    'payable': false,
    'type': 'function'
  },
  {
    'constant': true,
    'inputs': [],
    'name': 'endBlock',
    'outputs': [ { 'name': '', 'type': 'uint256' } ],
    'payable': false,
    'type': 'function'
  },
  {
    'constant': false,
    'inputs': [ { 'name': '_spender', 'type': 'address' }, { 'name': '_value', 'type': 'uint256' } ],
    'name': 'approve',
    'outputs': [ { 'name': 'success', 'type': 'bool' } ],
    'payable': false,
    'type': 'function'
  },
  {
    'constant': true,
    'inputs': [],
    'name': 'totalSupply',
    'outputs': [ { 'name': '', 'type': 'uint256' } ],
    'payable': false,
    'type': 'function'
  },
  {
    'constant': false,
    'inputs': [ { 'name': '_to', 'type': 'address' }, { 'name': 'tokenNum', 'type': 'uint256' } ],
    'name': 'redeemRestore',
    'outputs': [],
    'payable': false,
    'type': 'function'
  },
  {
    'constant': true,
    'inputs': [],
    'name': 'signer',
    'outputs': [ { 'name': '', 'type': 'address' } ],
    'payable': false,
    'type': 'function'
  },
  {
    'constant': false,
    'inputs': [ { 'name': '_from', 'type': 'address' }, { 'name': '_to', 'type': 'address' }, { 'name': '_value', 'type': 'uint256' } ],
    'name': 'transferFrom',
    'outputs': [ { 'name': 'success', 'type': 'bool' } ],
    'payable': false,
    'type': 'function'
  },
  {
    'constant': true,
    'inputs': [ { 'name': '_owner', 'type': 'address' } ],
    'name': 'redeemBalanceOf',
    'outputs': [ { 'name': 'balance', 'type': 'uint256' } ],
    'payable': false,
    'type': 'function'
  },
  {
    'constant': true,
    'inputs': [{ 'name': 'currentSupply', 'type': 'uint256' }],
    'name': 'testPrice',
    'outputs': [{ 'name': '', 'type': 'uint256' }],
    'payable': false,
    'type': 'function'
  },
  {
    'constant': true,
    'inputs': [],
    'name': 'decimals',
    'outputs': [{ 'name': '', 'type': 'uint256' }],
    'payable': false,
    'type': 'function'
  },
  {
    'constant': false, 'inputs': [], 'name': 'kill', 'outputs': [], 'payable': false, 'type': 'function'
  },
  {
    'constant': true, 'inputs': [], 'name': 'startBlock', 'outputs': [{ 'name': '', 'type': 'uint256' }], 'payable': false, 'type': 'function'
  },
  {
    'constant': true, 'inputs': [], 'name': 'founder', 'outputs': [{ 'name': '', 'type': 'address' }], 'payable': false, 'type': 'function'
  },
  {
    'constant': true, 'inputs': [], 'name': 'levelThreeTokenNum', 'outputs': [{ 'name': '', 'type': 'uint256' }], 'payable': false, 'type': 'function'
  },
  {
    'constant': false, 'inputs': [], 'name': 'halt', 'outputs': [], 'payable': false, 'type': 'function'
  },
  {
    'constant': false,
    'inputs': [{ 'name': 'offlineTokenNum', 'type': 'uint256' }, { 'name': 'offlineEther', 'type': 'uint256' }],
    'name': 'offlineAdjust',
    'outputs': [],
    'payable': false,
    'type': 'function'
  },
  {
    'constant': true,
    'inputs': [{ 'name': '_owner', 'type': 'address' }],
    'name': 'balanceOf',
    'outputs': [{ 'name': 'balance', 'type': 'uint256' }],
    'payable': false,
    'type': 'function'
  },
  {
    'constant': true, 'inputs': [], 'name': 'etherCap', 'outputs': [{ 'name': '', 'type': 'uint256' }], 'payable': false, 'type': 'function'
  },
  {
    'constant': true, 'inputs': [], 'name': 'founderAllocation', 'outputs': [{ 'name': '', 'type': 'uint256' }], 'payable': false, 'type': 'function'
  },
  {
    'constant': true, 'inputs': [], 'name': 'founderLockup', 'outputs': [{ 'name': '', 'type': 'uint256' }], 'payable': false, 'type': 'function'
  },
  {
    'constant': true, 'inputs': [], 'name': 'owner', 'outputs': [{ 'name': '', 'type': 'address' }], 'payable': false, 'type': 'function'
  },
  {
    'constant': false, 'inputs': [{ 'name': 'newFounder', 'type': 'address' }], 'name': 'changeFounder', 'outputs': [], 'payable': false, 'type': 'function'
  },
  {
    'constant': true, 'inputs': [], 'name': 'symbol', 'outputs': [{ 'name': '', 'type': 'string' }], 'payable': false, 'type': 'function'
  },
  {
    'constant': false,
    'inputs': [{ 'name': 'offlineTokenNum', 'type': 'uint256' }, { 'name': 'offlineEther', 'type': 'uint256' }],
    'name': 'offlineDonate',
    'outputs': [],
    'payable': false,
    'type': 'function'
  },
  {
    'constant': true, 'inputs': [], 'name': 'founderAllocated', 'outputs': [{ 'name': '', 'type': 'bool' }], 'payable': false, 'type': 'function'
  },
  {
    'constant': true, 'inputs': [], 'name': 'price', 'outputs': [{ 'name': '', 'type': 'uint256' }], 'payable': false, 'type': 'function'
  },
  {
    'constant': false, 'inputs': [{ 'name': '_to', 'type': 'address' }, { 'name': '_value', 'type': 'uint256' }], 'name': 'transfer', 'outputs': [{ 'name': 'success', 'type': 'bool' }], 'payable': false, 'type': 'function'
  },
  {
    'constant': true, 'inputs': [], 'name': 'halted', 'outputs': [{ 'name': '', 'type': 'bool' }], 'payable': false, 'type': 'function'
  },
  {
    'constant': false, 'inputs': [], 'name': 'allocateFounderTokens', 'outputs': [], 'payable': false, 'type': 'function'
  },
  {
    'constant': true, 'inputs': [], 'name': 'saleTokenSupply', 'outputs': [{ 'name': '', 'type': 'uint256' }], 'payable': false, 'type': 'function'
  },
  {
    'constant': true, 'inputs': [], 'name': 'transferLockup', 'outputs': [{ 'name': '', 'type': 'uint256' }], 'payable': false, 'type': 'function'
  },
  {
    'constant': false, 'inputs': [{ 'name': 'hash', 'type': 'bytes32' }], 'name': 'donate', 'outputs': [], 'payable': true, 'type': 'function'
  },
  {
    'constant': true, 'inputs': [], 'name': 'levelOneTokenNum', 'outputs': [{ 'name': '', 'type': 'uint256' }], 'payable': false, 'type': 'function'
  },
  {
    'constant': true, 'inputs': [], 'name': 'levelFourTokenNum', 'outputs': [{ 'name': '', 'type': 'uint256' }], 'payable': false, 'type': 'function'
  },
  {
    'constant': false, 'inputs': [], 'name': 'unhalt', 'outputs': [], 'payable': false, 'type': 'function'
  },
  {
    'constant': true, 'inputs': [], 'name': 'levelTwoTokenNum', 'outputs': [{ 'name': '', 'type': 'uint256' }], 'payable': false, 'type': 'function'
  },
  {
    'constant': true, 'inputs': [], 'name': 'saleEtherRaised', 'outputs': [{ 'name': '', 'type': 'uint256' }], 'payable': false, 'type': 'function'
  },
  {
    'constant': true,
    'inputs': [{ 'name': '_owner', 'type': 'address' }, { 'name': '_spender', 'type': 'address' }],
    'name': 'allowance',
    'outputs': [{ 'name': 'remaining', 'type': 'uint256' }],
    'payable': false,
    'type': 'function'
  },
  {
    'inputs': [
      { 'name': 'founderInput', 'type': 'address' },
      { 'name': 'signerInput', 'type': 'address' },
      { 'name': 'startBlockInput', 'type': 'uint256' },
      { 'name': 'endBlockInput', 'type': 'uint256' }],
    'payable': false,
    'type': 'constructor'
  },
  {
    'payable': false, 'type': 'fallback'
  },
  {
    'anonymous': false,
    'inputs': [
      { 'indexed': false, 'name': 'eth', 'type': 'uint256' },
      { 'indexed': false, 'name': 'fbt', 'type': 'uint256' }
    ],
    'name': 'Donate',
    'type': 'event'
  },
  {
    'anonymous': false, 'inputs': [{ 'indexed': true, 'name': 'sender', 'type': 'address' }], 'name': 'AllocateFounderTokens', 'type': 'event'
  },
  {
    'anonymous': false, 'inputs': [{ 'indexed': true, 'name': '_from', 'type': 'address' }, { 'indexed': true, 'name': '_to', 'type': 'address' }, { 'indexed': false, 'name': '_value', 'type': 'uint256' }], 'name': 'Transfer', 'type': 'event'
  },
  {
    'anonymous': false, 'inputs': [{ 'indexed': true, 'name': '_owner', 'type': 'address' }, { 'indexed': true, 'name': '_spender', 'type': 'address' }, { 'indexed': false, 'name': '_value', 'type': 'uint256' }], 'name': 'Approval', 'type': 'event'
  },
  {
    'anonymous': false, 'inputs': [{ 'indexed': false, 'name': 'msg', 'type': 'bytes32' }], 'name': 'print', 'type': 'event'
  }
]

export default {
  moacERC20ABI
}
