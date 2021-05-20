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
      currentWord: "",
        wordList: [
            'and',
            'me',
            'get',
            'here',
            "isn't",
            'my',
            'they',
            'where',
            'yes',
            'come',
            'have ',
            'her',
            'his',
            'home',
            'like',
            'little',
            'of',
            'out',
            'put',
            'said',
            'say',
            'says',
            'so',
            'some',
            'was',
            'what',
            'again',
            'be',
            'both',
            'could',
            'does',
            'for',
            'from',
            'good',
            'look',
            'does',
            'for',
            'from',
            'good',
            'look',
            'make',
            'many',
            'people',
            'should',
            'there',
            'very',
            'want',
            'water ',
            'were',
            'would',
            'your',
        ],
        workingList: [
            'and',
            'me',
            'get',
            'here',
            "isn't",
            'my',
            'they',
            'where',
            'yes',
            'come',
            'have ',
            'her',
            'his',
            'home',
            'like',
            'little',
            'of',
            'out',
            'put',
            'said',
            'say',
            'says',
            'so',
            'some',
            'was',
            'what',
            'again',
            'be',
            'both',
            'could',
            'does',
            'for',
            'from',
            'good',
            'look',
            'does',
            'for',
            'from',
            'good',
            'look',
            'make',
            'many',
            'people',
            'should',
            'there',
            'very',
            'want',
            'water ',
            'were',
            'would',
            'your',
        ],
    },
    methods: {
        speak: function () {
            let vm = this;
            let utter = new SpeechSynthesisUtterance();
            utter.lang = 'en-US';
            utter.text = vm.currentWord;
            utter.volume = 0.5;
            utter.onend = function (e) {
              vm.remove(vm.currentWord);
              if(vm.workingList.length == 0){
                vm.complete = true;
                vm.currentWord = ""; 
             } else {
                vm.getNext();
             }
              
            };
            window.speechSynthesis.speak(utter);
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