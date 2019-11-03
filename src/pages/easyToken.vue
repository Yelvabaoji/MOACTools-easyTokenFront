<template>
  <q-page padding>
    <q-form @submit="onSubmit" class="q-gutter-md">
      <q-input class='q-mt-xs q-mb-none' filled v-model="privateKey"
        placeholder="输入66位0x开头的私钥"
        stack-label dense hide-bottom-space
        clearable clear-icon="close"
        counter maxlength="66"
        lazy-rules
        :type="isPwd ? 'password' : 'text'"
        :rules="[ val => val != null && val.length == 66 || '请输入66位0x开头的私钥.']"
      >
        <template v-slot:append>
          <q-icon
            :name="isPwd ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="isPwd = !isPwd"
          />
        </template>
        <template v-slot:after>
          <q-btn round dense flat icon="search" v-on:click="getWalletInfo()" />
        </template>
      </q-input>

      <div class='q-mt-none q-mb-none'>
        <p>钱包：{{address}}，数量：{{String(balance.toString()).replace(/^(-?)(\d+)((\.\d+)?)$/,
          function (s, s1, s2, s3) {return s1 + s2.replace(/\d{1,3}(?=(\d{3})+$)/g, '$&,') + s3})
        }}</p>
      </div>

      <q-separator color="orange" inset />

      <q-input class='q-mt-xs q-mb-none' filled v-model="name"
        placeholder="代币名称，如Bitcoin，最多20个字符"
        stack-label dense hide-bottom-space
        clearable clear-icon="close"
        counter maxlength="20"
        lazy-rules
        :rules="[ val => val && val.length > 0 || '请输入代币名称']"
      />
      <q-input class='q-mt-xs q-mb-none' filled v-model="symbol"
        placeholder="代币标记符号，如BTC，最多6个字符"
        stack-label dense hide-bottom-space
        clearable clear-icon="close"
        counter maxlength="6"
        lazy-rules
        :rules="[ val => val && val.length > 0 || '请输入代币符号']"
      />
      <q-input class='q-mt-xs q-mb-none' filled type="number" v-model="quantity"
        placeholder="发行数量，最多1,000,000,000,000"
        stack-label dense hide-bottom-space
        clearable clear-icon="close"
        counter maxlength="13"
        lazy-rules
        :rules="[
          val => val !== null && val !== '' || '请输入发行数量',
          val => val > 0 && val <= 1000000000000 || '最多1,000,000,000,000'
        ]"
      />
      <q-input class='q-mt-xs q-mb-none' filled type="number" v-model="decimals"
        placeholder="精确度，0-18，默认18"
        stack-label dense hide-bottom-space
        clearable clear-icon="close"
        counter maxlength="2"
        lazy-rules
        :rules="[
          val => val !== null && val !== '' || '请输入精确度',
          val => val >= 0 && val <= 18 || '0-18之间'
        ]"
      />
      <div>
        <q-btn class="full-width q-mt-md" label="提交发行" type="submit" color="primary"/>
      </div>
    </q-form>

    <div v-if="coinCreated" class='q-mt-md q-mb-none'>
      <p>生成代币信息</p>
      <p>合约地址：{{contractHash}}</p>
      <p>名字：{{name}}, 符号：{{symbol}}</p>
      <p>数量：{{quantity}}，精确度：{{decimals}}</p>
    </div>

  </q-page>
</template>

<style>
</style>

<script>
import secp256k1 from 'secp256k1'
import keccak from 'keccak'
import myTokenByteCode from './myTokenByteCode.js'
export default {
  data () {
    return {
      chain3: this.GLOBAL.chain3,
      privateKey: '',
      isPwd: true,
      address: '',
      balance: 0,
      name: '',
      symbol: '',
      quantity: '',
      decimals: '18',
      contractHash: '',
      coinCreated: false
    }
  },

  methods: {
    // ****************************************************
    // here we get the wallet information
    // ****************************************************
    getWalletInfo () {
      if (!this.chain3.isConnected()) {
        this.$q.dialog({ title: '<span class="text-red">警告</span>', message: 'Chain3没有连接', html: true })
        return
      }

      var privateKey = this.privateKey
      if (privateKey === null) return
      if (privateKey.length !== 66) {
        this.$q.dialog({ title: '警告', message: '私钥长度不对' })
        return
      }
      // 去除私钥的0x
      if (privateKey.substr(0, 2) === '0x') {
        privateKey = privateKey.substr(2, privateKey.length)
      }

      // 从私钥产生公钥
      var publicKey = secp256k1.publicKeyCreate(Buffer.from(privateKey, 'hex'), false).slice(1)
      var addrBuffer = keccak('keccak256').update(publicKey).digest().slice(-20)
      this.address = '0x' + addrBuffer.toString('hex')

      // get moac balance in the wallet, convert to moac.
      this.balance = this.GLOBAL.getMoacBalance(this.chain3, this.address).toFixed(2)
    },

    // ****************************************************
    // here creat a new token
    // ****************************************************
    onSubmit () {
      if (!this.chain3.isConnected()) {
        this.$q.dialog({ title: '<span class="text-red">警告</span>', message: 'Chain3没有连接', html: true })
        return
      }

      var privateKey = this.privateKey
      if (privateKey === null) return
      if (privateKey.length !== 66) {
        this.$q.dialog({ title: '警告', message: '私钥长度不对' })
        return
      }
      // 去除私钥的0x
      if (privateKey.substr(0, 2) === '0x') {
        privateKey = privateKey.substr(2, privateKey.length)
      }
      // 从私钥产生公钥
      var publicKey = secp256k1.publicKeyCreate(Buffer.from(privateKey, 'hex'), false).slice(1)
      var addrBuffer = keccak('keccak256').update(publicKey).digest().slice(-20)
      this.address = '0x' + addrBuffer.toString('hex')

      // 获得账户里墨客余额，如果不够，则报告并且退出
      this.balance = this.GLOBAL.getMoacBalance(this.chain3, this.address)
      if (this.balance <= 0.025) {
        this.$q.dialog({ title: '警告', message: '账户里墨客不够.' })
        return
      }

      // 是否要发币？
      this.$q.dialog({ title: '确定',
        message: '确定要发币吗？',
        cancel: '取消',
        ok: '确定',
        persistent: false
      }).onOk(() => {
        // 等吧
        this.$q.loading.show({
          message: '代币正在创建中，请等待。。。'
        })

        // this 会改变
        var that = this
        var chain3 = this.chain3

        // 这是ERC20的参数
        var types = ['address', 'string', 'string', 'uint', 'uint256']
        var args = [this.address, this.name, this.symbol, this.decimals, this.quantity]
        var parameter = chain3.encodeParams(types, args)

        // 准备签名
        var rawTx = {
          from: this.address,
          nonce: chain3.intToHex(chain3.mc.getTransactionCount(this.address)),
          gasPrice: chain3.intToHex(50000000000),
          gasLimit: chain3.intToHex(4000000),
          data: '0x' + myTokenByteCode.myTokenByteCode + parameter,
          chainId: chain3.version.network
        }
        var signedTx = chain3.signTransaction(rawTx, this.privateKey)

        // 创建代币
        chain3.mc.sendRawTransaction(signedTx, function (error, txHash) {
          if (error) {
            console.log(error)
            that.$q.loading.hide()
            that.$q.dialog({ title: '警告', message: '发币错误\n.' + error })
            return
          }
          // console.log('txHash', txHash)

          // 等待打包完成交易
          var filter = chain3.mc.filter('latest')
          filter.watch(function (err, result) {
            var receipt = chain3.mc.getTransactionReceipt(txHash)
            if (!err && receipt && receipt.blockNumber != null) {
              console.log(receipt)

              filter.stopWatching()
              that.$q.loading.hide()
              that.$q.dialog({ title: '发币成功', message: '交易hash：\n' + txHash + '合约地址：\n' + receipt.contractAddress })
              process.exit(0)
            }
          })
        })
      })
    }
  }
}
</script>
