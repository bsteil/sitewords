/*!
* Start Bootstrap - Bare v4.3.0 (https://startbootstrap.com/template/bare)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-bare/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project
var app = new Vue({
    el: '#app',
    data: {
      complete: false,
      enabled: true,
      currentWord: "",
        wordList: ["again","and","be","both","come","could","does","for","from","get","good","have","her","here","his","home","isn't","like","little","look","make","many","me","my","of","out","people","put","said","say","says","should","so","some","there","they","very","want","was","water","were","what","where","would","yes","your"],
        workingList: ["again","and","be","both","come","could","does","for","from","get","good","have","her","here","his","home","isn't","like","little","look","make","many","me","my","of","out","people","put","said","say","says","should","so","some","there","they","very","want","was","water","were","what","where","would","yes","your"],
    },
    methods: {
      speak: function () {

        let vm = this;
        if (vm.enabled) {
          let utter = new SpeechSynthesisUtterance();
          vm.enabled = false;
          utter.lang = 'en-US';
          utter.text = vm.currentWord;
          utter.volume = 0.5;
          utter.onend = function (e) {
            vm.remove(vm.currentWord);
            if (vm.workingList.length == 0) {
              vm.complete = true;
              vm.currentWord = "";
            } else {
              vm.getNext();
            }
            vm.enabled = true;
          };

          window.speechSynthesis.speak(utter);
        }
      },
          remove(text) {
            let vm = this;
            let index = this.workingList.indexOf(text);
            vm.workingList.splice(index, 1);
           
          },
          getNext(){
            let vm = this;
            if(vm.workingList.length == 0){
                vm.workingList = vm.wordList;
                vm.complete = false;
            } 
            const random = Math.floor(Math.random() * vm.workingList.length);
            vm.currentWord = vm.workingList[random];
          }
    },
    mounted(){
        this.getNext();
    }
  });