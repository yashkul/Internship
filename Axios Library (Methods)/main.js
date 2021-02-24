function performGetRequest1() {
    var resultElement = document.getElementById('getResult1');
    resultElement.innerHTML = '';
    
    axios.get('http://jsonplaceholder.typicode.com/todos')
      .then(function (response) {
        resultElement.innerHTML = generateSuccessHTMLOutput(response);
      })
      .catch(function (error) {
        resultElement.innerHTML = generateErrorHTMLOutput(error);
      });   
  }

  function performGetRequest2() {
    var resultElement = document.getElementById('getResult2');
    var todoId = document.getElementById('todoId').value;
    resultElement.innerHTML = '';
    
    axios.get('http://jsonplaceholder.typicode.com/todos', {
      params: {
        id: todoId
      }
    })
    .then(function (response) {
      console.log(response);
      resultElement.innerHTML = generateSuccessHTMLOutput(response);
    })
    .catch(function (error) {
        resultElement.innerHTML = generateErrorHTMLOutput(error);
    });
  }

  
  function performPostRequest() {
    var resultElement = document.getElementById('postResult');
    var todoTitle = document.getElementById('todoTitle').value;
    resultElement.innerHTML = '';
    axios.post('http://jsonplaceholder.typicode.com/todos', {
      userId: '1',
      title: todoTitle,
      completed: false
    })
    .then(function (response) {
      resultElement.innerHTML = generateSuccessHTMLOutput(response);
    })
    .catch(function (error) {
      resultElement.innerHTML = generateErrorHTMLOutput(error);
    });
    
  }

  function performPutRequest() {
    var resultElement = document.getElementById('putResult');
    var Puttodo = document.getElementById('PutId').value;
    resultElement.innerHTML = '';
    axios.put('http://jsonplaceholder.typicode.com/todos/1', {
      userId: '1',
      title: Puttodo,
      //headers: {"Content-Type": "text/plain"},
      completed: false
    })
    .then(function (response) {
      resultElement.innerHTML = generateSuccessHTMLOutput(response);
    })
    .catch(function (error) {
      resultElement.innerHTML = generateErrorHTMLOutput(error);
    });
    
  }

  function performPatchRequest() {
    var resultElement = document.getElementById('patchResult');
    var Patchtodo = document.getElementById('PatchId').value;
    resultElement.innerHTML = '';
    axios.patch('http://jsonplaceholder.typicode.com/todos/5', {
      userId: '1',
      title: Patchtodo,
      //headers: {"Content-Type": "text/plain"},
      completed: false
    })
    .then(function (response) {
      resultElement.innerHTML = generateSuccessHTMLOutput(response);
    })
    .catch(function (error) {
      resultElement.innerHTML = generateErrorHTMLOutput(error);
    });
    
  }

  function performDeleteRequest() {
    var resultElement = document.getElementById('deleteResult');
    var Deletetodo = document.getElementById('DeleteId').value;
    resultElement.innerHTML = '';
    var url = 'http://jsonplaceholder.typicode.com/todos'+'/'+Deletetodo;
    axios.delete(url)
    .then(function (response) {
      resultElement.innerHTML = generateSuccessHTMLOutput(response);
    })
    .catch(function (error) {
      resultElement.innerHTML = generateErrorHTMLOutput(error);
    });
    
  }

  function generateSuccessHTMLOutput(response) {
    return  '<h4>Result</h4>' + 
            '<h5>Status:</h5> ' + 
            '<pre>' + response.status + ' ' + response.statusText + '</pre>' +
            '<h5>Headers:</h5>' + 
            '<pre>' + JSON.stringify(response.headers, null, '\t') + '</pre>' + 
            '<h5>Data:</h5>' + 
            '<pre>' + JSON.stringify(response.data, null, '\t') + '</pre>'; 
  }
  function generateErrorHTMLOutput(error) {
    return  '<h4>Result</h4>' + 
            '<h5>Message:</h5> ' + 
            '<pre>' + error.message + '</pre>' +
            '<h5>Status:</h5> ' + 
            '<pre>' + error.response.status + ' ' + error.response.statusText + '</pre>' +
            '<h5>Headers:</h5>' + 
            '<pre>' + JSON.stringify(error.response.headers, null, '\t') + '</pre>' + 
            '<h5>Data:</h5>' + 
            '<pre>' + JSON.stringify(error.response.data, null, '\t') + '</pre>'; 
  }

  function clearOutput() {
      var resultElement = document.getElementById('getResult1');
      resultElement.innerHTML = '';
      var resultElement = document.getElementById('getResult2');
      resultElement.innerHTML = '';
      var resultElement = document.getElementById('postResult1');
      resultElement.innerHTML = '';
      var resultElement = document.getElementById('putResult');
      resultElement.innerHTML = '';
      var resultElement = document.getElementById('patchResult');
      resultElement.innerHTML = '';
      var resultElement = document.getElementById('deleteResult');
      resultElement.innerHTML = '';
  }