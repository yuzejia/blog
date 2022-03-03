# 确保脚本抛出遇到问题
set -e

#打包
echo '进行编译：yarn build'
yarn build

echo '编译完成'

# 进入生成文件夹
cd build

# 打印编译文件
ls

echo '进行git部署'
git init
git add -A
git commit -m 'deploy'

echo '上传服务器 git@github.com:yuzejia/blog.git master:gh-pages'

git push -f git@github.com:yuzejia/blog.git master:gh-pages

echo '服务器部署成功~'

cd -