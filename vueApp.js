const url = "https://jsonplaceholder.typicode.com/posts";

const vm = new Vue({
    el: '#app',
    data: {
        results: []
    },
    mounted() {
      axios.get(url).then(response => {
        this.results = response.data
      })
    }
  });