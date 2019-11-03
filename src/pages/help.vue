<template>
  <div class="q-px-lg q-pb-md">
    <q-timeline color="secondary">
      <q-timeline-entry heading="">
        安全性
      </q-timeline-entry>

      <q-timeline-entry
        title="为什么需要输入私钥"
        color="orange"
        icon="vpn_key"
      >
        <div>
          发币操作是需要授权的。如果是通过钱包APP操作，则通过钱包APP获得授权。否则，需要输入私钥获得授权。
        </div>
      </q-timeline-entry>

      <q-timeline-entry
        title="私钥存放在哪里？"
        color="orange"
        icon="delete"
      >
        <div>
          <p><span class="text-red">答案是私钥不存放。</span></p>
          <p>本工具所有的操作都在浏览器端进行。转币所需要的签名操作是在浏览器端进行，加密的签名而不是私钥直接和区块链进行交互。</p>
          <p>私钥只存在于当前页面，切换到别的页面后，私钥被清空，再进入需要再输入私钥。</p>
        </div>
      </q-timeline-entry>

      <q-timeline-entry heading>
        操作注意事项
      </q-timeline-entry>

      <q-timeline-entry
        title="延迟性"
      >
        <div>
          注意区块链完成数据交易有一定的延迟性。而交易结果反映在区块浏览器中也有一定的延迟性。通常在提示操作完成以后，到浏览器显示交易记录也有一定的延迟。
        </div>
      </q-timeline-entry>

      <q-timeline-entry
        title="保持足够的墨客"
      >
        <div>
          <p>注意发币交易是需要有足够的墨客作为汽油费用的。</p>
          <p>系统会预估所需要的墨客数量，如果不足，则会提示</p>
        </div>
      </q-timeline-entry>

      <q-timeline-entry heading>
        功能
      </q-timeline-entry>

      <q-timeline-entry
        title="我发的币"
        avatar="statics/icons/mvg-logo.png"
      >
        <div>
          <p>我发的币是指通过我的钱包地址发出的所有ERC20代币。</p>
          <p>这些币会以列表的方式显示出来。通过左右移动列表可以完整显示。也可以复制合约地址。</p>
        </div>
      </q-timeline-entry>

      <q-timeline-entry
        title="一键发币"
        avatar="statics/icons/mvp-logo.png"
      >
        <div>
          <p>需要输入私钥，理由前面有说明。</p>
          <p>注意发出来的币，名字和符号可能有相同的，因此不具有唯一性。</p>
          <p>一个币是一个ERC20合约，只有合约地址具有唯一性，因此必须记住合约地址。</p>
        </div>
      </q-timeline-entry>

    </q-timeline>
  </div>
</template>
<script>
export default {
  name: 'batchTransferHelp'
}
</script>
