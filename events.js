var instance = null;
var accounts = null;
var s_resultbox = null;
var p_resultbox = null;
var a_resultbox = null;

var addr = null;
var bal = null;

var user_address = "";
var user_balance = 0;

window.addEventListener('load', init);

async function init() {
  addr = document.getElementById("span_addr");
  bal = document.getElementById("span_balance");
  if (window.ethereum) {
    window.web3 = new Web3(window.ethereum);
    user_address = await ethereum.request({ method: 'eth_requestAccounts' });
    user_address = user_address.toString();
    user_balance = await window.web3.eth.getBalance(user_address);
    addr.innerHTML = user_address;
    bal.innerHTML = user_balance  + " wei";

    getContractInstance();
  } else if (window.web3) {
    window.web3 = new Web3(web3.currentProvider);
    addr.innerHTML = "injected";
  } else {
    addr.innerHTML = "Install metamask";
    window.web3 = null;
  }
}

async function getContractInstance() {
  try {
    instance = await new window.web3.eth.Contract(abi, address);
    instance.handelRevert = true;
    handler();
  } catch (err) {
    window.alert("getContractInstance " + err);
  }
}

async function handler() {
  let btn = document.getElementById("btn_reg");
  btn.addEventListener('click', register);
  btn = document.getElementById("btn_post");
  btn.addEventListener('click', post);
  btn = document.getElementById("btn_is_paid");
  btn.addEventListener('click', check_paid);

  btn = document.getElementById("btn_paying");
  btn.addEventListener('click', paying);
  btn = document.getElementById("btn_is_posted");
  btn.addEventListener('click', check_posted);
  btn = document.getElementById("btn_confilm");
  btn.addEventListener('click', confilm);
  btn = document.getElementById("btn_search");
  btn.addEventListener('click', search);

  btn = document.getElementById("btn_getAll");
  btn.addEventListener('click', getAll);

  btn = document.getElementById("btn_check_date");
  btn.addEventListener('click', check_date);

  s_resultbox = document.getElementById("tb_sresult");
  p_resultbox = document.getElementById("tb_presult");
  a_resultbox = document.getElementById("tb_aresult");
}

async function register() {
  if (instance != null) {
    try {
      var params = document.getElementById("tb_reg").value.split(',');
      if (params[0] != "" && params[1] != "") {
        instance.methods.add_t(params[0], Number(params[1])).send({from: user_address})
        .then(function(receipt) {
          s_resultbox.innerHTML = "This Transaction's tid : " + receipt["events"]["return_tid"]["returnValues"]["0"];
        });

      } else {
        s_resultbox.innerHTML = "Please insert not null value."
      }
    } catch (err) {
      window.alert("Register // " + err);
    }
  } else {
    window.alert("instance is null");
  }
  document.getElementById("tb_reg").value = "";
}

async function post() {
  if (instance != null) {
    try {
      var params = document.getElementById("tb_post").value.split(',');
      if (params[0] != "" && params[1] != "") {
        instance.methods.post_alert(params[0], params[1]).send({from: user_address})
        .then(function(receipt) {
          s_resultbox.innerHTML = "Entering post id status : " + receipt["events"]["post_status"]["returnValues"]["0"];
        })
        .catch(rvt => s_resultbox.innerHTML = "Entering Post id is Reverted.");
      } else {
        s_resultbox.innerHTML = "Please insert not null value.";
      }
    } catch (err) {
      window.alert("Post // " + err);
    }
  }
  document.getElementById("tb_post").value = "";
}

async function check_paid() {
  if (instance != null) {
    try {
      var param = document.getElementById("tb_is_paid").value;
      var res = await instance.methods.is_paid(param).call();

      if (res == true) {
        s_resultbox.innerHTML = "This Transaction is paid.";
      } else {
        s_resultbox.innerHTML = "This Transaction is not paid.";
      }
    } catch (err) {
      window.alert("Search // " + err);
    }
  }
  document.getElementById("tb_is_paid").value = "";
}

async function paying() {
  if (instance != null) {
    try {
      var params = document.getElementById("tb_paying").value.split(',');
      if (params[0] != "" && params[1] != "") {
        instance.methods.paying(params[0]).send({from: user_address, value: params[1]})
        .then(function(receipt) {
          p_resultbox.innerHTML = "Successfully paid.";
        })
        .catch (function (error) {
          p_resultbox.innerHTML = "Paying Reverted.";
        });
      } else {
        p_resultbox.innerHTML = "Please insert not null value.";
      }
    } catch (err) {
      window.alert("Paying // " + err);
    }
  }
  document.getElementById("tb_paying").value = "";
}

async function check_posted() {
  if (instance != null) {
    try {
      var param = document.getElementById("tb_is_posted").value;
      var res = await instance.methods.is_posted(param).call({from: user_address});
      p_resultbox.innerHTML = "Your Product's post id : " + res;
    } catch (err) {
      window.alert("Is Posted // " + err);
    }
  }
  document.getElementById("tb_is_posted").value = "";
}

async function confilm() {
  if (instance != null) {
    try {
      var param = document.getElementById("tb_confilm").value;
      if (param != null) {
        instance.methods.confilm(Number(param)).send({from: user_address})
        .then(function(receipt) {
          p_resultbox.innerHTML = "Confilm status : " + receipt["events"]["confilm_status"]["returnValues"]["0"];
        })
        .catch(rvt => p_resultbox.innerHTML = "Confilm is Reverted.");
      } else {
        p_resultbox.innerHTML = "Please insert not null value.";
      }
    } catch (err) {
      window.alert("Confilm // " + err);
    }
  }
  document.getElementById("tb_confilm").value = "";
}

async function search() {
  if (instance != null) {
    try {
      var param = document.getElementById("tb_search").value;
      var res = await instance.methods.getTransInfo(param).call();
      if (res[0] == "" ) {
        p_resultbox.innerHTML = "Wrong tid. please insert right tid."
      } else {
        p_resultbox.innerHTML =  "tid(" + param + ") => Name: " + res[0] + " & Value: " + res[1] + " wei";
      }
    } catch (err) {
      window.alert("Search // " + err);
    }
  }
  document.getElementById("tb_search").value = "";
}

async function getAll() {
  if (instance != null) {
    try {
      var param = document.getElementById("tb_getAll").value;
      if (param != null) {
        var res = await instance.methods.getAll(Number(param)).call({from: user_address});
        a_resultbox.innerHTML = "[tid] [Seller's Addr] [Register Date] [Posted Date] [Comlimed Date] [Purchaser's Addr] [Product ID] [Post ID] [Product's Value] [Is Paid?] [Is Posted?] [Is Confilmed?] [Is Ended?]\n" + res;
      }
    } catch (err) {
      window.alert("GetAll // " + err);
    }
  }
  document.getElementById("tb_getAll").value = "";
}

async function check_date() {
  if (instance != null) {
    try {
      await instance.methods.check_overdue().send({from: user_address});
      window.alert("Refreshed.");

      user_balance = await window.web3.eth.getBalance(user_address);
      bal.innerHTML = user_balance  + " wei";
    } catch (err) {
      window.alert("Check Date // " + err);
    }
  }
}
