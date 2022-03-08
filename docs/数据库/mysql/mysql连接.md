# mysql 连接

### node 连接mysql 的时候出错，连接不上

```jsx
D:\YUZEJIA\boke\vuepress-blog\node_modules\_mysql@2.18.1@mysql\lib\protocol\Parser.js:437
      throw err; // Rethrow non-MySQL errors
      ^

Error: ER_NOT_SUPPORTED_AUTH_MODE: Client does not support authentication protocol requested by server; consider upgrading MySQL client
    at Handshake.Sequence._packetToError (D:\YUZEJIA\boke\vuepress-blog\node_modules\_mysql@2.18.1@mysql\lib\protocol\sequences\Sequence.js:47:14)   
    at Handshake.ErrorPacket (D:\YUZEJIA\boke\vuepress-blog\node_modules\_mysql@2.18.1@mysql\lib\protocol\sequences\Handshake.js:123:18)
    at Protocol._parsePacket (D:\YUZEJIA\boke\vuepress-blog\node_modules\_mysql@2.18.1@mysql\lib\protocol\Protocol.js:291:23)
    at Parser._parsePacket (D:\YUZEJIA\boke\vuepress-blog\node_modules\_mysql@2.18.1@mysql\lib\protocol\Parser.js:433:10)
    at Parser.write (D:\YUZEJIA\boke\vuepress-blog\node_modules\_mysql@2.18.1@mysql\lib\protocol\Parser.js:43:10)
    at Protocol.write (D:\YUZEJIA\boke\vuepress-blog\node_modules\_mysql@2.18.1@mysql\lib\protocol\Protocol.js:38:16)
    at Socket.<anonymous> (D:\YUZEJIA\boke\vuepress-blog\node_modules\_mysql@2.18.1@mysql\lib\Connection.js:88:28)
    at Socket.<anonymous> (D:\YUZEJIA\boke\vuepress-blog\node_modules\_mysql@2.18.1@mysql\lib\Connection.js:526:10)
    at Socket.emit (events.js:315:20)
    at addChunk (_stream_readable.js:309:12)
```

### 下载了个 navicat 去链接也出错😵

<img src={require('@site/static/img/mysql/Untitled.png').default} />

### 连接信息：

<img src={require('@site/static/img/mysql/Untitled1.png').default} />

好家伙 只能去百度了，果然面向百度编程这项技能是多么的重要。**要修改数据胡用户名密码**

参考：[https://www.cnblogs.com/ya-qiang/p/9094008.html](https://www.cnblogs.com/ya-qiang/p/9094008.html)

### 设置用户配置项

(1) 查看用户信息

```jsx
select host,user,plugin,authentication_string from mysql.user;
```

```jsx
mysql> select host,user,plugin,authentication_string from mysql.user;
+-----------+------------------+-----------------------+------------------------------------------------------------------------+
| host      | user             | plugin                | authentication_string                                                  |
+-----------+------------------+-----------------------+------------------------------------------------------------------------+
| localhost | mysql.infoschema | caching_sha2_password | $A$005$THISISACOMBINATIONOFINVALIDSALTANDPASSWORDTHATMUSTNEVERBRBEUSED |
| localhost | mysql.session    | caching_sha2_password | $A$005$THISISACOMBINATIONOFINVALIDSALTANDPASSWORDTHATMUSTNEVERBRBEUSED |
| localhost | mysql.sys        | caching_sha2_password | $A$005$THISISACOMBINATIONOFINVALIDSALTANDPASSWORDTHATMUSTNEVERBRBEUSED |
| localhost | root             | caching_sha2_password | $A$005$'J;qgSR0C"+E+'YH`Qe/2QE7R2KtuDXkablVctBGfEtDonPQxOb7iGwKcK03. |
+-----------+------------------+-----------------------+------------------------------------------------------------------------+
4 rows in set (0.01 sec)
```

**备注**：host为 % 表示不限制ip   localhost表示本机使用    plugin非mysql_native_password 则需要修改密码

**修改用户密码**

1.如果想要设置远程这样设置：ALTER USER 'root'@'%' IDENTIFIED WITH mysql_native_password BY 'newpassword'; #更新一下用户的密码 root用户密码为newpassword

2.如果要设置本地plugin为mysql_native_password这样设置：

ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'newpassword'; #更新一下用户的密码 root用户密码为newpassword

flush privileges;

```jsx
ALTER USER 'root'@'%' IDENTIFIED WITH mysql_native_password BY 'newpassword';
```

```jsx
mysql> ALTER USER 'root'@'%' IDENTIFIED WITH mysql_native_password BY 'newpassword';
ERROR 1396 (HY000): Operation ALTER USER failed for 'root'@'%'
mysql> ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'newpassword';
Query OK, 0 rows affected (0.02 sec)
```

查询修改后 root 的 plugin 已经变成了  mysql_native_password 

```jsx
mysql> select host,user,plugin,authentication_string from mysql.user;
+-----------+------------------+-----------------------+------------------------------------------------------------------------+
| host      | user             | plugin                | authentication_string                                                  |
+-----------+------------------+-----------------------+------------------------------------------------------------------------+
| localhost | mysql.infoschema | caching_sha2_password | $A$005$THISISACOMBINATIONOFINVALIDSALTANDPASSWORDTHATMUSTNEVERBRBEUSED |
| localhost | mysql.session    | caching_sha2_password | $A$005$THISISACOMBINATIONOFINVALIDSALTANDPASSWORDTHATMUSTNEVERBRBEUSED |
| localhost | mysql.sys        | caching_sha2_password | $A$005$THISISACOMBINATIONOFINVALIDSALTANDPASSWORDTHATMUSTNEVERBRBEUSED |
| localhost | root             | mysql_native_password | *FE4F2D624C07AAEBB979DA5C980D0250C37D8F63                              |
+-----------+------------------+-----------------------+------------------------------------------------------------------------+
4 rows in set (0.00 sec)

mysql>
```

这时候再去 navicat 连接  成功~

<img src={require('@site/static/img/mysql/Untitled2.png').default} />

### 这时候去node 中连接

```jsx
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'newpassword',
  port: '3306',
  database: 'test',
  connectTimeout: 5000, //连接超时
});

connection.connect((err) => {
  if (err) {
    console.log('error')
  }
  console.log('connect success!')
});
```

<img src={require('@site/static/img/mysql/Untitled3.png').default} />

连接成功！