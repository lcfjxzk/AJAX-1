# 部署方式
## 每次改完代码必须在命令行运行以下代码才能正确请求JS和CSS
```
parcel build public/index.html --public-url .
git init
gst
git add .
git commit -v
git push
```