<!--  -->
<template>
<div>用户中心
  <scroll class="content" :probe-type="3">
      <ul>
        <li>userdata1</li>
        <li>userdata2</li>
        <li>userdata3</li>
        <li>userdata4</li>
        <li>userdata5</li>
        <li>userdata6</li>
        <li>userdata7</li>
        <li>userdata8</li>
        <li>userdata9</li>
        <li>userdata10</li>
        <li>userdata11</li>
        <li>userdata12</li>
        <li>userdata13</li>
        <li>userdata14</li>
        <li>userdata15</li>
        <li>userdata16</li>
        <li>userdata17</li>
        <li>userdata18</li>
        <li>userdata19</li>
        <li>userdata20</li>
        <li>userdata21</li>
        <li>userdata22</li>
        <li>userdata23</li>
        <li>userdata24</li>
        <li>userdata25</li>
        <li>userdata26</li>
        <li>userdata27</li>
        <li>userdata28</li>
        <li>userdata29</li>
        <li>userdata30</li>
        <li>userdata31</li>
        <li>userdata32</li>
        <li>userdata33</li>
        <li>userdata34</li>
        <li>userdata35</li>
        <li>userdata36</li>
        <li>userdata37</li>
        <li>userdata38</li>
        <li>userdata39</li>
        <li>userdata40</li>
        <li>userdata41</li>
        <li>userdata42</li>
        <li>userdata43</li>
        <li>userdata44</li>
        <li>userdata45</li>
        <li>userdata46</li>
        <li>userdata47</li>
        <li>userdata48</li>
        <li>userdata49</li>
        <li>userdata50</li>
      </ul>
  </scroll>


</div>

</template>

<script>
  import Scroll from 'components/common/scroll/Scroll'
export default {
data() {
return {

}
},
    components:{
    Scroll
    },
//生命周期 - 创建完成（访问当前this实例）
created() {

},
//生命周期 - 挂载完成（访问DOM元素）
mounted() {

}
}
</script>
<style scoped>
/* @import url(); 引入css类 */
.content{
  height: 400px;
  background-color: green;
  overflow-y: auto;
}
</style>
