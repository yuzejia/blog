# mysql 安装 
（windows）

## 下载地址：[https://dev.mysql.com/downloads/mysql/](https://dev.mysql.com/downloads/mysql/)

下载完后将zip 解压到响应的目录；我给放到了c 盘下：C:\Users\yuzejia\mysql-8.0.27 。

接下来需要配置下 mysql 的配置文件：my.ini

在刚解压的文件目录下 **C:\Users\yuzejia\mysql-8.0.27 在该文件夹下创建 my.ini 配置文件，并编译文件内容为以下基本 信息：**

```jsx
[client]
# 设置mysql客户端默认字符集
default-character-set=utf8mb4
 
[mysqld]
# 设置3306端口
port = 3306
# 设置mysql的安装目录
basedir=C:\\Users\\yuzejia\\mysql-8.0.27
# 设置 mysql数据库的数据的存放目录，MySQL 8+ 不需要以下配置，系统自己生成即可，否则有可能报错
# datadir=C:\\Users\\yuzejia\\mysql-8.0.27\\data
# 允许最大连接数
max_connections=20
# 服务端使用的字符集默认为8比特编码的latin1字符集
character-set-server=utf8mb4
# 创建新表时将使用的默认存储引擎
default-storage-engine=INNODB
```

**注意：**

**basedir** 和 **datadir** 路径是你自己的文件目录路径！

### 启动 mysql 数据库

```jsx
cd C:\Users\yuzejia\mysql-8.0.27\bin
```

### 初始化数据库

```jsx
mysqld --initialize --console
```

### 执行完成后，会输出 root 用户的初始默认密码，如

```jsx
...
2018-04-20T02:35:05.464644Z 5 [Note] [MY-010454] [Server] A temporary password is generated for root@localhost: Ykt%st?Xx7_s
...
```

**Ykt%st?Xx7_s** 就是初始密码，后续登录需要用到请保存好，你也可以在登陆后修改密码。

### 输入安装命令

```jsx
mysql install
```

### 启动输入以下命令即可

```jsx
net start mysql
```

### 登录 mysql

```jsx
mysql -u root -p
```

### 版本查看

```jsx
select version();
```

```jsx
mysql> select version();
+-----------+
| version() |
+-----------+
| 8.0.27    |
+-----------+
1 row in set (0.01 sec)

mysql>
```