var app = new Vue({
  el: "#app",
  data: {
      message: "Heflo Vue!",
      suka: "pizdec"
  },
});

var dubstep = new Vue({
  el: ".skotina",
  data: {
    first: "H!",
    first2: "mat",
    svinya: true
  },
});

var app2 = new Vue({
  el: "#anime",
  data: {
    message: "Вы загрузили эту страницу: " + new Date().toLocaleString(),
  },
});

var app3 = new Vue({
  el: "#app-3",
  data: {
    seen: true,
  },
});

var app4 = new Vue({
  el: "#app-4",
  data: {
      todos: [
          { text: "Изучить JavaScript" },
          { text: "Изучить Vue" },
          { text: "Создать что-нибудь классное" }
      ],
  },
});

var app5 = new Vue({
  el: "#app-5",
  data: {
    message: "Привет, Vue.js!",
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split("").reverse().join("");
    },
  },
});

var app6 = new Vue({
  el: "#app-6",
  data: {
    message: "Привет, Vue,sdfsd!",
  },
});


Vue.component("todo-item", {
  props: ["todo"],
  template: "<li>{{ todo.text }}</li>",
});

var app7 = new Vue({
  el: "#app-7",
  data: {
    groceryList: [
      { id: 0, text: "Овощи" },
      { id: 1, text: "Сыр" },
      { id: 2, text: "Что там ещё люди едят?" },
    ],
  },
});

var vm = new Vue({
  el: "#example",
  data: {
    message: "Аниме",
  },
  computed: {
    // геттер вычисляемого значения
    reversedMessage: function () {
      // `this` указывает на экземпляр vm
      return this.message.split("").reverse().join("");
    },
  },
  methods: {
    anime() {
      return this.message.split("").reverse().join("")
    },
    gigaAnime(){
      this.message = this.message.split("").reverse().join("");
    }
  }
});

var vm = new Vue({
  el: "#demo",
  data: {
    firstName: "Fo2o",
    lastName: "Bar1",
  },
  computed: {
    fullName: function () {
      return this.firstName + " " + this.lastName;
    },

     fullMeme: {
    // геттер:
    get: function () {
      return this.firstName + ' ' + this.lastName
    },
    // сеттер:
    set: function (newValue) {
      var names = newValue.split(' ')
      this.firstName = names[0]
      this.lastName = names[names.length - 1]
    }
  }
}
});


var watchExampleVM = new Vue({
  el: "#watch-example",
  data: {
    question: "",
    answer: "Пока вы не зададите вопрос, я не могу ответить!",
  },
  watch: {
    // эта функция запускается при любом изменении вопроса
    question: function (newQuestion, oldQuestion) {
      this.answer = "Ожидаю, когда вы закончите печатать...";
      this.debouncedGetAnswer();
    },
  },
  created: function () {
    // _.debounce — это функция lodash, позволяющая ограничить то,
    // насколько часто может выполняться определённая операция.
    // В данном случае мы ограничиваем частоту обращений к yesno.wtf/api,
    // дожидаясь завершения печати вопроса перед отправкой ajax-запроса.
    // Узнать больше о функции _.debounce (и её родственнице _.throttle),
    // можно в документации: https://lodash.com/docs#debounce
    this.debouncedGetAnswer = _.debounce(this.getAnswer, 500);
  },
  methods: {
    getAnswer: function () {
      if (this.question.indexOf("?") === -1) {
        this.answer = "Вопросы обычно заканчиваются вопросительным знаком. ;-)";
        return;
      }
      this.answer = "Думаю...";
      var vm = this;
      fetch("https://yesno.wtf/api")
        .then(function (response) {
          return response.json();
        })
        .then(function (response) {
          vm.answer = _.capitalize(response.answer);
        })
        .catch(function (error) {
          vm.answer = "Ошибка! Не могу связаться с API. " + error;
        });
    },
  },
});

var gay = new Vue({
  el: ".static",
  data: {
    isActive: true,
    hasError: false
}
});


var notgay = new Vue({
  el: "div:nth-child(13)",
  data: {
    styleObject: {
      color: "red",
      fontSize: "13px",
    },
  },
});

var piu = new Vue({
  el: "#suka",
  data: {},

  computed: {
    blyaa() {
      if (Math.random() > 0.5) {
        return 1
      } else {
        return 0
      }
    }
  },
});