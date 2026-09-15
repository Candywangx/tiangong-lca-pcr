# Prepared-report 验收与恢复实施交接

本次实现位于 `.worktrees/prepared-review-recovery-impl`，分支 `codex/prepared-review-recovery-20260914`。开发与验证使用该工作树、独立验证工作树及临时合成仓库；没有执行生产切换、Goal 恢复或作者派发。

## 基线与分阶段提交

| 阶段 | 提交 | 结果 |
| --- | --- | --- |
| 0 | `61d8fc44002ed9bb4baaa149e5d074af1a93e96c` | 三方合流 prepared-report 与旧运行树的试验／恢复改动 |
| 1a | `017a53c027828cdb39aecf168e036d2a63b6f071` | 逐项归因、独立预算、稳定恢复事件和启动对账 |
| 1b | `bcc09880afd0ceaafbf0d70f08ba1c73f467bf77` | 显式成功判定、完整检查范围、可独立读取的准备失败、实际执行窗口 |
| 2 | 本记录所在提交 | 稀疏草稿 v2、完整报告 v1、首次契约固定与历史只读解释 |

合流父提交为 `85e8b986de0dc04b29659604698cc011eb8c6406` 与 `1c4ab051284501b066fc1d3f46c975c1192b06c2`，共同祖先为 `29b7956b9679f119e2d39d9983033daee69c8768`。使用 Git 三方合流逐冲突块处理，没有以整文件或目录覆盖解决差异。保留模型试验、冻结指纹、恢复计量与流式事件读取；没有导入合成运行树中的生产 PCR、ADR 或共享索引变更。详细选择记录见 `2026-09-14-prepared-review-recovery-baseline.md`。

## 根因对应的实际改动

| 文件（仓库相对路径） | 改动及原因 |
| --- | --- |
| `builder/goal-harness/errors.mjs`、`orchestrator.mjs` | 按观测来源／子类型统一选择整组恢复动作。内容、基础设施和执行窗口分别计数；恢复事件不会因换错误码、续 turn 或重新读取状态而刷新预算。 |
| `builder/goal-harness/app-server.mjs`、`event-store.mjs` | 持久启动意图、稳定 client message id 与可见 turn 对账，崩溃恢复不盲目再创建作者。适配器连接和读取服从剩余执行时间。 |
| `builder/goal-harness/review-assessment.mjs`、`author-review.mjs`、`author-gates.mjs` | 由验证代码及实际 PCR 生成必需检查集合；按 phase/check/subject 验收。聚合独立问题，记录真实依赖缺失；空数组、缺项、`valid:false` 或必需项 skipped 均不能成功。 |
| `builder/goal-harness/report-preparation.mjs`、`author-submission.mjs` | 接入现有准备链路与不可变绑定；失败单独保存 draft/failure/manifest，调度器重验当前来源后直接读取。准备成功只表示准备范围通过，harvest 仍做最终验收。 |
| `builder/goal-harness/evidence-audit.mjs`、`uuid-search-receipts.mjs` | 逐 UUID／凭据／来源收集结果，成功数组只含合格数据；真实子进程、网络和重试等待有上限。403 缓存回退与自动重试分开，429 服从 Retry-After；缓存 blob、原文身份与内容资格不能以 HTTP 200 或 PDF 文件头替代。 |
| `builder/goal-harness/scheduler.mjs` | 构建普通／部分集成快照时再次验证保存的完整成功证明，拒绝 held、失败、缺证明或提交不匹配的任务。 |
| `builder/lib/markdown-projection.mjs` | 修复已有中文参考流字段未被识别、导致实际参考产品审查缺输入的根因；只补现有中文标签。2,878 个英文投影在变更前后字节一致，未更新任何 PCR 内容或生成投影。 |
| `builder/goal-harness/report-assembler.mjs`、`author-contract.mjs`、`prompt-compiler.mjs`、`builder/schemas/goal-author-draft.schema.json` | v2 草稿每 UUID 只必填选择、凭据和语义判断；从已验证 adopted direct read 派生完整 v1 身份。显式冲突拒绝，任务／turn／prepared manifest 固定版本。旧任务和普通续跑保留原组合。 |
| `builder/cli/goal-prepare-report.mjs`、`builder/docs/tools/goal-harness.md` | 根据实际恢复类别给出下一步，不自动恢复；同步版本矩阵、验收范围、失败证据、预算和交接规则。 |

`goal-author-report.schema.json` 与 `goal-author-submission.schema.json` 的既有版本和完整形状保持不变。边界、计量及模型试验手工审查继续生效。新增两个小模块分别集中成功判定与固定版本，assembler 从原 preparation 中抽出；没有另建报告通道、调度状态机或生产配置项。

执行窗口总上限为每次 preparation／harvest 60 秒，每项外部操作最多 30 秒并受剩余时间约束。窗口不足保留未完成原因，按任务、subject 和独立 UUID／来源范围轮换；当前轮仍需全部通过，不能合并陈旧部分身份放行。若总工作持续无法在窗口内完成，会达到独立续跑上限并保留处理，不能承诺所有复杂 PCR 都自动完成。

## 测试证据与范围

各阶段先加入对应失败回归，再实现。工作树 `.worktrees/verification/` 保存 red、green、定向和完整日志；相邻 `2026-09-14-prepared-review-recovery-verification.json` 记录最终结果、日志 SHA-256 与受保护输入校验。

| 验证版本 | 总数 | 通过 | 失败 | 跳过 |
| --- | --- | --- | --- | --- |
| stage0 | 1092 | 1088 | 0 | 4 |
| stage1a | 1110 | 1106 | 0 | 4 |
| stage1b | 1203 | 1199 | 0 | 4 |
| final_targeted | 647 | 647 | 0 | 0 |
| final_full | 1243 | 1239 | 0 | 4 |

一次与其他验证同时执行的 stage1b 完整运行有 3 项计时／并发锁测试失败。相关代码和断言没有修改；3 组共 35 项测试单独复查通过，同一冻结 tree 的标准完整验证随后通过。失败日志及复查结果均已保留，没有把具体环境原因当作已证实结论。

阶段 1a 和 1b 分别用冻结的 Git index tree 创建独立验证快照，验证内容与随后提交的 tree 相同，避免后续阶段文件混入该阶段的验证：1a tree 为 `b4198522b69713f9fc7e003a188a6820974aa5b0`；1b tree 为 `c6f442b438bf0edb9c77d1062435333660713b5b`。

必测场景包含：返回失败对象不抛异常、遗漏检查、实际参考产品与库存声明不一致、多错误一次汇总、手工审查优先级、403/429/登录页/坏缓存、窗口类别与跨范围公平执行、最终发布前剩余时间、准备失败独立读取、部分成功不入池／不共享、预算已满但其他类别可恢复、启动后崩溃不重复作者、旧报告及 turn 不升级、稀疏准备／引用／保存复查，以及既有 enrichment 消费完整报告。

完整验证保留 4 项既有环境跳过：1 项临时目录没有不同的 lexical/realpath 别名，3 项需要大小写不敏感文件系统，而本环境区分大小写。没有通过跳过验收测试来获得通过。原仓库历史 PCR 警告继续出现在 lint 输出中；本次没有批量“修正”历史方法学数据。

合成回放说明、机器结果和可重跑程序见同目录 `2026-09-14-prepared-review-recovery-synthetic-replay.{md,json,mjs}`。程序实际执行阶段 0 基线和当前代码，使用相同合成输入比较错误预算与作者调用；不会把人工操作次数或真实生产通过率当成已测量指标。真实网络、真实 app-server 和生产事故回放均未执行，外部 I/O 使用测试适配器。

## 生产保护与正式采用前检查

`2026-09-14-protected-inputs.json` 记录主工作树 index、生产 Goal state、events 及运行配置的初始 SHA-256；最终逐项复核。开发没有写入既有 Goal 状态、历史报告／凭据／事件／哈希或历史计数，没有自动恢复 held／failed，没有改写 runtime 或试验控制指纹。

以下为正式采用任务的交接检查项，本开发任务未执行：

- 确认最终分支提交与完整验证结果；重新核对真实入口进程、活跃作者 turn、工作树脏差异及生产 runtime/source commit，不能把 stopped 标记当作进程已停止。
- 按现有 runtime 与模型试验交接流程核对当前代码、policy、工具及试验指纹。新模块改变 Harness 指纹，应走原有合法交接，禁止直接修改冻结值绕过门禁。
- 对待处理任务确认 authoring/draft/report 版本和原始 turn／commit／prepared 来源绑定。既有缺字段按历史组合解释，不补写历史 manifest 或重算旧哈希。
- 逐项审查 held／failed 与历史已验收但缺新证明的结果；保留历史状态，通过现有明确恢复／复查流程处置，不批量自动重启或授予成功证明。
- 选择一个自然空出的作者槽位，验证准备、完整 harvest、串行集成、落盘及共享索引 CAS；确认没有重复作者、错扣预算或失败证据入池，再恢复原并发策略。
- 核查真实服务的结构化错误、网络与原文识别效果；无法识别的原文和持续超窗保留处理，不能以放宽验收代替解决。

正式采用另行执行。本分支及上述交接材料是可审查的开发结果，不表示生产运行已恢复。
