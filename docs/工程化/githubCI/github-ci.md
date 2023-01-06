
为帮助您了解如何使用 YAML 语法来创建工作流程文件，本节解释介绍示例的每一行：
 
 name: learn-github-actions  可选 - 工作流的名称，它将显示在 GitHub 存储库的“操作”选项卡中。

on: [push] 指定此工作流程的触发器。 此示例使用 push 事件，因此每当有人将更改推送到存储库或合并拉取请求时都会触发工作流运行。 这是由到每个分支的推送触发的；有关仅在推送到特定分支、路径或标记时运行的语法示例，请参阅“GitHub Actions 的工作流语法”。


## 多任务依次执行：
always
```yml
jobs-deploy:
    if: ${{always()}}
    needs: [jobs-build]
```