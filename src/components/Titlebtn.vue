<template>
    <div class="titlebtn" :style="style" @click="click"/>
  </template>
  <script lang="ts">
    import { ipcRenderer } from 'electron';
      const style = {
          min: {
            //   backgroundColor: 'green',
              right: '100px'
          },
          max: {
            //   backgroundColor: 'yellow',
              right: '60px'
          },
          close: {
            //   backgroundColor: 'black',
              right: '20px'
          }
      };
      export default {
          name: 'Titlebtn',
          props: ['type'],
          computed: {
              style: function () {
                  return style[this.type];
              }
          },
          methods: {
              click: function () {
                ipcRenderer.send(this.type);
              }
          }
      }
  </script>

  <style scoped>
  .titlebtn {
      position: absolute;
      width: 20px;
      height: 20px;
      top: 20px;
      -webkit-app-region: no-drag;
      background-color: black;
  }
  </style>