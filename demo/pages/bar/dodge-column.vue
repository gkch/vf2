<template>
  <vf2-chart :data="data">
    <vf2-interval position="月份*月均降雨量" color="name" :adjust="{
      type: 'dodge',
      marginRatio: 0.05
    }"/>
    <vf2-tooltip link-legend/>
  </vf2-chart>
</template>

<script>
export default {
  data() {
    return {
      data: [{
        name: 'London',
        月份: 'Jan.',
        月均降雨量: 18.9,
      }, {
        name: 'London',
        月份: 'Feb.',
        月均降雨量: 28.8,
      }, {
        name: 'London',
        月份: 'Mar.',
        月均降雨量: 39.3,
      }, {
        name: 'London',
        月份: 'Apr.',
        月均降雨量: 81.4,
      }, {
        name: 'London',
        月份: 'May.',
        月均降雨量: 47,
      }, {
        name: 'London',
        月份: 'Jun.',
        月均降雨量: 20.3,
      }, {
        name: 'London',
        月份: 'Jul.',
        月均降雨量: 24,
      }, {
        name: 'London',
        月份: 'Aug.',
        月均降雨量: 35.6,
      }, {
        name: 'Berlin',
        月份: 'Jan.',
        月均降雨量: 12.4,
      }, {
        name: 'Berlin',
        月份: 'Feb.',
        月均降雨量: 23.2,
      }, {
        name: 'Berlin',
        月份: 'Mar.',
        月均降雨量: 34.5,
      }, {
        name: 'Berlin',
        月份: 'Apr.',
        月均降雨量: 99.7,
      }, {
        name: 'Berlin',
        月份: 'May.',
        月均降雨量: 52.6,
      }, {
        name: 'Berlin',
        月份: 'Jun.',
        月均降雨量: 35.5,
      }, {
        name: 'Berlin',
        月份: 'Jul.',
        月均降雨量: 37.4,
      }, {
        name: 'Berlin',
        月份: 'Aug.',
        月均降雨量: 42.4,
      }],
    };
  },
  methods: {
    handleShow(ev) {
      const items = ev.items;
      items[0].name = null;
      items[0].name = items[0].title;
      items[0].value = `¥ ${items[0].value}`;
    },
  },
};
</script>
