const { application } = require('express');
const express = require('express');
const http = require('http');
const app = express();

const server = http.createServer(app);

app.get('/', ( req, res)=>{
    console.log('user hit ther resource');
    res.status( 200).send('Home Page');
});
// an vao cai o tren nhe
app.get('/about', ( req, res, next)=>{
    console.log('about page 1');
    res.status(200).send("about page 1");
    // next();
});
app.get('/about', ( req, res)=>{
    console.log('about page 2');
    res.status(200).send("about page 2");
});
// dua * dai dien cho duong dan bat ki
app.get('/about/*', ( req, res)=>{
    res.status(404).send('<h1>Page chua duoc tao</h1>');
});

app.all('*', ( req, res)=>{
    res.status(404).send('<h1>Resource not found</h1>');
});


server.listen(3000, ()=>{
    console.log('listening on port 3000');
});




/** res.send
 * có lẽ là phương thức nổi tiếng nhât được sử dụng trên res
 * với res.send() bạn có thể trả lời các yêu cầu http với tất cả các loại dữ liệu
 */


/**res.json
 * phương thức này sẻ phản hồi về json
 */


/**res.status
 * chỉ định mã phản hồi, status thể hiện trạng thái phản hồi
 */



/**res.redirect
 * ban co the chuyen hướng khánh hành đến các router khác nhau trong ứng dụng hặc đến các trang web khác nhau
 */


/**res.render
 * sẻ phản hồi nội dụng của html trong file html chỉ định về client
 * nếu kết hợp với express với template engine như pug é thì phương thức này sẽ tự động biên dịch template này sang mã html thông thường và phàn hồi cho client
 */



// app.get
// app.put
// app.delete
// app.use
// app.all
// app.listen