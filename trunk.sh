#! /bin/bash
 
#获取podspec 中版本号
version= "1.0"
echo "version:"  ${version}
#git提交
git add .
read -t 600 -p "修改内容[默认为${version}]:" diff
if [ -z ${diff} ];then  
diff=${version}
fi 
git commit -m ${diff}
git push
read -t 600 -p "版本内容[默认为${version}]:" diff
if [ -z ${diff} ];then  
diff=${version}
fi
# 移除本地tag
git tag -d ${version}
# 移除远程tag
git push origin --delete tag ${version}
# 新建tag
git tag -a ${version} -m ${diff}
# 推送tag
git push origin ${version}
