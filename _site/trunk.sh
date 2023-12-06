#! /bin/bash
#!/bin/sh
# @author xi_feng  
# @Email xi_feng@hunliji.com
# @createBy 2020-03-12
# Shell脚本提交git代码 简单,快速,高效
# 

echo ' >>>>>> start push <<<<<< '
echo " ====== 当前分支 ====== "
branch=$(git symbolic-ref --short -q HEAD)
echo $branch

# 判断参数1是否包含参数2
contains_str(){
  contains_result=$(echo $1 | grep "${2}")
  if [[ -n $contains_result  ]] ; then
    return 1
  else
    return 0
  fi
}

# 检查本地状态
echo ">>>>>> 执行 git add 之前,本地文件状态如下 <<<<<<"
git status
statusResult=$(git status)
no_change="nothing to commit"
contains_str "$statusResult" "$no_change"
if [[ $? == 1 ]]; then
  echo "==== 当前没有新增或者修改的文件 ===="
  exit
fi

git add .

# 判断是否有填写推送消息
# 没有就自动填写一个
msg="$1"
if [ ! -n "$msg" ]; then
  author=$(git config user.name)
  msg="git commit by $author"
fi
echo $msg

git commit -m "${msg}"

git pull
git push
git status

echo echo "==== 推送成功 ===="
