<template>
  <q-page padding>
    <q-form @submit="onSubmit" class="q-gutter-md">
      <q-input class='q-mt-xs q-mb-none' filled v-model="address"
        placeholder="输入42位0x开头的钱包地址"
        stack-label dense hide-bottom-space
        clearable clear-icon="close"
        counter maxlength="42"
        lazy-rules
        :rules="[ val => val != null && val.length == 42 || '请输入42位0x开头的钱包地址.']"
      >
        <template v-slot:after>
          <q-btn round dense flat icon="search" v-on:click="getWalletInfo()" />
        </template>
      </q-input>

      <div class='q-mt-none q-mb-none'>
        <p>余额：{{String(balance.toString()).replace(/^(-?)(\d+)((\.\d+)?)$/,
          function (s, s1, s2, s3) {return s1 + s2.replace(/\d{1,3}(?=(\d{3})+$)/g, '$&,') + s3})}}
          （moac），发行的代币数：{{totalTokens}}
        </p>
      </div>

      <q-separator color="orange" inset />

      <div>
        <q-btn class="full-width q-mt-md" label="提交查询" type="submit" color="primary"/>
      </div>
    </q-form>

    <q-table
      :data="data"
      :columns="columns"
      row-key="name"
      dense
      :pagination.sync="pagination"
      no-data-label="没有数据"
      rows-per-page-label="每页行数："
      :rows-per-page-options="[25,50,100,0]"
    >
      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td key="num" :props="props"> {{ props.row.name }} </q-td>
          <q-td key="desc" :props="props"> {{ props.row.desc }} </q-td>
          <q-td key="symbol" :props="props"> {{ props.row.symbol }} </q-td>
          <q-td key="decimals" :props="props"> {{ props.row.decimals }} </q-td>
          <q-td key="quantity" :props="props"> {{ props.row.quantity }} </q-td>
          <q-td key="time" :props="props"> {{ props.row.time }} </q-td>
          <q-td key="addr" :props="props"> {{ props.row.addr }} </q-td>
        </q-tr>
      </template>
    </q-table>

  </q-page>
</template>

<style>
</style>

<script>
// import moacERC20ABI from './moacERC20ABI.js'
export default {
  data () {
    return {
      chain3: this.GLOBAL.chain3,
      address: '',
      balance: 0,
      totalTokens: 0,
      pagination: {
        sortBy: 'name',
        descending: false,
        // page: 2,
        rowsPerPage: 25
        // rowsNumber: xx if getting data from a server
      },
      columns: [
        { name: 'num', align: 'left', label: '编号', field: row => row.name, sortable: true },
        { name: 'desc', align: 'left', label: '名字', field: 'desc', sortable: true },
        { name: 'symbol', align: 'left', label: '符号', field: 'symbol', sortable: true },
        { name: 'decimals', align: 'left', label: '精确度', field: 'decimals', sortable: true },
        { name: 'quantity', align: 'left', label: '数量', field: 'quantity', sortable: true },
        { name: 'time', align: 'left', label: '时间', field: 'time', sortable: true },
        { name: 'addr', align: 'left', label: '合约地址', field: 'addr', sortable: true }
      ],
      data: []
    }
  },

  methods: {
    getWalletInfo () {
      if (!this.GLOBAL.isChain3Ready(this)) return
      // if (!this.chain3.isConnected()) {
      //   this.$q.dialog({ title: '<span class="text-red">警告</span>', message: 'Chain3没有连接', html: true })
      //   return
      // }
      var address = this.address
      if (address === null) return
      if (address.length !== 42) {
        this.$q.dialog({ title: '警告', message: '地址长度不对' })
        return
      }
      if (address.substr(0, 2) !== '0x') {
        this.$q.dialog({ title: '警告', message: '地址不以0x开头' })
        return
      }

      // get moac balance in the wallet, convert to moac.
      this.balance = this.GLOBAL.getMoacBalance(this.chain3, this.address).toFixed(2)
    },
    // ****************************************************
    // ****************************************************
    onSubmit () {
      if (!this.chain3.isConnected()) {
        this.$q.dialog({ title: '<span class="text-red">警告</span>', message: 'Chain3没有连接', html: true })
        return
      }

      var address = this.address
      if (address === null) return
      if (address.length !== 42) {
        this.$q.dialog({ title: '警告', message: '地址长度不对' })
        return
      }
      if (address.substr(0, 2) !== '0x') {
        this.$q.dialog({ title: '警告', message: '地址不以0x开头' })
        return
      }

      this.$q.loading.show({
        message: '正在查询，请等待。。。'
      })

      var chain3 = this.chain3
      var that = this

      var filter = chain3.mc.filter(
        {
          fromBlock: 1,
          toBlock: 'latest',
          topics: [
            '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef', // 这是ERC20的 第一个参数
            null, // 这是token amount
            '0x' + chain3.padLeft(address.substring(2, address.length).toString('hex'), 64) // 这是地址
          ]
        }
      )
      filter.get(function (error, result) {
        if (!error) {
          // console.log(result)
          that.data = []
          that.totalTokens = result.length
          for (var i = 0; i < result.length; i++) {
            // console.log(result[i])
            var timestamp = chain3.mc.getBlock(result[i].blockNumber).timestamp
            var unixTimestamp = new Date(timestamp * 1000)
            var blockTime = unixTimestamp.toLocaleString()
            // console.log(commonTime)

            var token = that.GLOBAL.getTokenInfo(chain3, result[i].address)

            that.data.push({
              name: i,
              desc: token.name,
              symbol: token.symbol,
              decimals: token.decimals,
              quantity: token.totalSupply,
              time: blockTime,
              addr: result[i].address
            })
          }
        }
        that.$q.loading.hide()
      })
    }
  }
}
</script>
