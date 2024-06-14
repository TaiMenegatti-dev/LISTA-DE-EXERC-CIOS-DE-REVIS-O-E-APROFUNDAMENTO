// Tainá Moreira Vieira Menegatti
var socket = io('http://127.0.0.1:5000');  // Especifica o endereço IP e a porta

        socket.on('connect', function() {
            console.log('Conectado ao servidor');
        });

        socket.on('message', function(msg) {
            var messages = document.getElementById('messages');
            var messageElement = document.createElement('div');
            messageElement.textContent = msg;
            messages.appendChild(messageElement);
            messages.scrollTop = messages.scrollHeight;  // Rolagem automática para a última mensagem
        });

        function sendMessage() {
            var input = document.getElementById('message');
            var message = input.value;
            if (message.trim()) {
                socket.send(message);
                input.value = '';
                var messages = document.getElementById('messages');
                var messageElement = document.createElement('div');
                messageElement.textContent = message;
                messages.appendChild(messageElement);
                messages.scrollTop = messages.scrollHeight;  // Rolagem automática para a última mensagem
            }
        }