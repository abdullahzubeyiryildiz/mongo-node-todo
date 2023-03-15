# Todo App

Todo App, Express.js, Mongoose ve MongoDB kullanarak oluşturulan basit bir Todo uygulamasıdır. Bu uygulama, kullanıcıların görev eklemesine, düzenlemesine ve silmesine olanak tanır.

## Kurulum

Projeyi klonladıktan veya indirdikten sonra, aşağıdaki adımları izleyerek projeyi çalıştırabilirsiniz:

1. Bağımlılıkları yükleyin: 
<b>npm install dotenv express mongoose</b>

2. Kök dizinde `.env` adlı bir dosya oluşturun ve gerekli yapılandırma bilgilerini ekleyin. Örnek:

DB_CONNECTION=mongodb://127.0.0.1:27017/tododb

3. Uygulamayı başlatın:
<b>npm run dev</b> 

Uygulama başarıyla başlatıldığında, tarayıcınızda [http://localhost:3000](http://localhost:3000) adresine giderek veya postman üzerinden uygulamayı kullanabilirsiniz.

## Postman
Get /api/todos <br>
Post /api/todos  <br>
PUT /api/todos/id_no  <br>
DELETE /api/todos/id_no  <br>
Get /api/todos/id_no  
## Lisans

MIT