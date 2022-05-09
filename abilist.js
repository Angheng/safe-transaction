var abi = [
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"name": "confilm_status",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"name": "paying_status",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"name": "post_status",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "return_tid",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "p",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "v",
				"type": "uint256"
			}
		],
		"name": "add_t",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "check_overdue",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_tid",
				"type": "uint256"
			}
		],
		"name": "confilm",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_tid",
				"type": "uint256"
			}
		],
		"name": "getAll",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "tid",
						"type": "uint256"
					},
					{
						"internalType": "address",
						"name": "seller_addr",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "register_date",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "paying_date",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "post_date",
						"type": "uint256"
					},
					{
						"internalType": "address",
						"name": "purchaser_addr",
						"type": "address"
					},
					{
						"internalType": "string",
						"name": "product_name",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "post_id",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "val",
						"type": "uint256"
					},
					{
						"internalType": "bool",
						"name": "is_paid",
						"type": "bool"
					},
					{
						"internalType": "bool",
						"name": "is_posted",
						"type": "bool"
					},
					{
						"internalType": "bool",
						"name": "t_confilmed",
						"type": "bool"
					},
					{
						"internalType": "bool",
						"name": "is_completed",
						"type": "bool"
					}
				],
				"internalType": "struct Safe_transaction.Transaction",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_tid",
				"type": "uint256"
			}
		],
		"name": "getTransInfo",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_tid",
				"type": "uint256"
			}
		],
		"name": "is_confilmed",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_tid",
				"type": "uint256"
			}
		],
		"name": "is_paid",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_tid",
				"type": "uint256"
			}
		],
		"name": "is_posted",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_tid",
				"type": "uint256"
			}
		],
		"name": "paying",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_tid",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_pi",
				"type": "string"
			}
		],
		"name": "post_alert",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	}
];

var address = "0xa9D312F1fc6DdCa1d8907F00016c3c6E014755eF";
