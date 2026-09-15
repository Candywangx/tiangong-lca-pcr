# 现有 prepared-report 链路上的验收与恢复最小修改方案

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 保留报告准备、不可变绑定和引用提交链路，减少重复输入、基础设施误归因及逐轮补查；验收门槛保持有效。

**Architecture:** 在现有 report-preparation、author-submission、author-review 和调度恢复路径上修改。先统一验收结果与恢复动作，再把 UUID 身份事实从作者草稿移交 preparation 生成；prepared 报告本体继续使用完整 v1，最终提交仍为引用。

**Tech Stack:** Node.js ESM、Ajv/JSON Schema、已有 Goal 事件、凭据与 prepared artifacts、Node test runner。

**Status:** 2026-09-14 已在独立实施分支完成阶段 0、1a、1b、2；实际提交与验证记录见 `../records/2026-09-14-prepared-review-recovery-implementation.md`。未修改生产运行配置、接管或恢复 Goal。本文取代此前“新增稀疏报告本体 v2、每个新 turn 自动升级”的设计。

## 1. 阶段 0：已经核实的基线差异

| 对象 | 现场证据 | prepared-report |
| --- | --- | --- |
| 当前主工作树 `/home/wangxuan/projects/tiangong-lca-pcr-0724` | HEAD `29b7956b9679f119e2d39d9983033daee69c8768`；所查 Harness/Schema/入口范围有 29 个修改或未跟踪文件 | 没有 preparation/submission 实现 |
| 旧入口工作树 `.worktrees/goal-harness-dev` | HEAD `1c4ab051284501b066fc1d3f46c975c1192b06c2`；所查范围干净 | 没有 |
| 该 Goal 记录的 runtime | commit `1d29a3106c1542becc5d5ce6fe0cf3b9e3d896d7`；source commit `68b4a004731b68e8c58c67db9ec25f5e836854c1` | 两个提交中均没有 |
| 本地已取回的 `origin/main`、`.worktrees/measurement-report-pr` | commit `85e8b986de0dc04b29659604698cc011eb8c6406` | 已有 |
| `.worktrees/sync-upstream-main-20260914` | HEAD `b7b8df3a0104ddff0cd7962ef9cf8030cc494062`，包含上述上游提交；所查范围干净 | 已有；本次核对的 preparation/submission/orchestrator/evidence-audit/author-review 与上述上游工作树字节相同 |

Goal 为 `metal-products-machinery-equipment-cpc3-20260902`。读取的持久状态更新时间是 `2026-09-14T10:34:25.616Z`，522 个任务均缺失 `authoring_contract_version`。其中 author_review 的 47171/47172、valid_result 的 44123、repair_requested 的 44142 都是旧任务记录，不能据此假定使用了新准备链路。记录中 `stopped=true` 仅是调度意图，本文没有据此宣称所有进程或 turn 已停止。

按现有试验模块算法（按文件名排序的非测试 `.mjs` 文件名/全文 JSON 的 SHA-256）计算：旧入口 Harness 指纹为 `9b32be75f0feb1f428c055d05ac45a5fa45df1a38483549cc2945078e9b001f7`；记录的 runtime commit 对应指纹为 `b4f809bf82a8473d7d38ac30c49d92b2dce2ebf8fc700c896553ff2e04ded879`。二者不同，不能把目录 HEAD、运行代码和持久 runtime 指针当成同一版本。

**修正诊断：** 旧链路确有拒绝理由重复输入问题；已取回的新版 `assembleAuthorReport()` 已解决拒绝清单和顶层凭据目录的生成。新版仍要求完整 UUID 身份草稿。实施基线应吸收已经存在的 preparation 改进，并明确保留旧运行树独有的模型试验/恢复改动，不能重新开发准备流程或整目录覆盖。

实施前重新记录入口进程、真实活跃 turn、任务契约、报告来源、commit、脏差异和代码指纹；当前快照不替代将来切换时的核查。新旧代码合流和测试在独立工作树完成，沿用现有 runtime 与试验控制交接，不在本方案中绕过基线门禁。

## 2. 版本和职责：采用更小的格式修改

| 层次 | 现有契约 | 本方案 |
| --- | --- | --- |
| 作者任务 | `authoring_contract_version`；新任务 2，旧任务 1 | 首次采用时固定；普通修复/续跑不升级 |
| 最终提交封装 | `goal-author-submission.schema.json`，版本 2；prepared 引用/边界转交/失败三选一 | 保持版本和封装，不接受裸报告作为新成功通道 |
| 作者草稿 | `goal-author-draft.schema.json`，版本 1，已可省略拒绝清单和顶层凭据目录 | 阶段 2 增加稀疏 UUID 输入的草稿版本 2，旧草稿照常校验 |
| prepared 报告本体 | `goal-author-report.schema.json`，完整版本 1 | 保持版本 1，程序生成完整身份和凭据字段 |

**与反馈中“报告本体 v2”建议的取舍：** 采用“稀疏草稿 v2 → 现有 preparation → 完整报告 v1 → prepared 引用”。作者负担同样减少，但无需改变报告本体、enrichment 或其他报告消费者的形状。完整报告是程序已经声明生成的派生物，与直接改写旧作者报告不同。已有显式身份声明若冲突仍报错，不能被覆盖。

新的草稿版本只对首次采用新输入契约的任务生效。任务固定任务契约及草稿/报告版本组合；各 turn 保存副本，报告准备 manifest 绑定该组合。旧 manifest 缺失新字段按历史组合解释，不能补写重算旧哈希。历史复查使用报告自己的来源绑定，当前 task 快照仍须合法；若当前 turn 已变化，不得伪造旧 task 来通过 resolver，须保留为历史证据并通过现有合法恢复路径处置。

表示决策：作者保留 UUID 选择、适用性解释、未匹配原因和来源语义判断；机器事实由已校验凭据、独立读取及 preparation 提供。草稿、报告和提交是严格契约，自然语言理由保持语义自由；已封存证据和历史产物只读。继续保留原 task、attempt、turn、工作树、commit、四文件内容、草稿、报告及凭据哈希绑定。

## 3. 具体文件修改范围

下列路径相对最终实施工作树；最新 prepared 实现可在 `.worktrees/measurement-report-pr` 或 `.worktrees/sync-upstream-main-20260914` 核对。表中“检查”不等于预先要求修改文件。

### 阶段 1：保留现有报告格式，先修验收与恢复

| 文件 | 修改函数与内容 |
| --- | --- |
| `builder/goal-harness/errors.mjs` | 增加一处共享决策：先逐项按稳定来源/子类型分类，再对整组结果选择动作。复用 `GoalHarnessError.details`，不建错误框架。 |
| `builder/goal-harness/evidence-audit.mjs` | 在 `runTiangongFlowGet()`、属性/单位组封装保留可判定工具错误、signal、退出状态及协议解析错误，给同步子进程加剩余时间约束。`auditReportedUuids()` 和 `verifySourceLocators()` 逐项保留结果；来源网络处理、缓存回退、原文识别与缓存写入分开。 |
| `builder/goal-harness/uuid-search-receipts.mjs` | 在实际错误发生点区分声明冲突、采用关系缺失、绑定/哈希损坏和直接读取不一致。复用 `loadReportReceiptEvidence()`；本地凭据检查与在线交叉核验分开，逐项保留结果。保留契约 2 任务绑定凭据规则，不重新开放旧公共 UUID 缓存的直接采用。 |
| `builder/goal-harness/author-review.mjs` | 保留安全前置，聚合可执行检查，显式传播依赖缺失。提供 preparation 和 harvest 共用的必需检查判定/断言；适用集合由验证代码生成，返回对象或空数组不能代表成功。 |
| `builder/goal-harness/author-gates.mjs` | 检查实际 PCR 的参考产品和库存 UUID 与采用声明是否覆盖且无冲突，再检查成功取得的身份。报告缺声明是真实内容/证据覆盖缺失；有引用但读取失败只阻断依赖身份的检查。失败解析不能用空数组代替。 |
| `builder/goal-harness/report-preparation.mjs` | `prepareAuthorReport()` 接入聚合结果和显式准备成功断言；未完成检查不封存为 ready。保留所有绑定及复验。准备失败输出保留完整机器 findings 和已验证身份；不把未准备完成的草稿伪装为可收取报告。 |
| `builder/goal-harness/orchestrator.mjs` | 在 `harvestGoalAuthors()` 中显式确认全部适用必需检查通过，之后才入池、创建快照或发布共享已验证 UUID。`dispatchGoalAuthors()`、`previewResumedState()` 和原报告复查先分类、再用对应预算；采用同一恢复事件和冷却计算。恢复不能因旧 `attempt` 过滤而提前被排除。保留计量和边界 manual_review 路径。 |
| `builder/goal-harness/author-submission.mjs` | `resolveAuthorSubmission()` 保留严格三选一和 `resolvePreparedReport()`。失败分支的 `author_reported:true` 始终是作者线索；与 Harness 独立观测分开，不从 message 猜可重试性。按已验证来源绑定继续处理旧报告复查。 |
| `builder/goal-harness/model-trial.mjs`（旧运行树独有） | 对齐统一分类与预算入口，基础设施恢复不因内容次数耗尽被误拦；保留模型、风险事件、手工审查与冻结指纹。合流时保留这层适配，不能直接覆盖或删除。 |

### 阶段 2：只缩减草稿里的 UUID 身份输入

| 文件 | 修改函数与内容 |
| --- | --- |
| `builder/schemas/goal-author-draft.schema.json` | 保留 v1，增加 v2 UUID 草稿字段 `{uuid, hybrid_search_receipt_id, semantic_review}`。其他判断字段及现有显式附加凭据引用能力不变。严格处理分支 `additionalProperties:false`，不启用删除额外字段、类型转换或自动填默认值。 |
| `builder/goal-harness/report-preparation.mjs` | `assembleAuthorReport()` 从已验证、已采用候选的 `direct_read` 生成 state_code、中英文名称、类型、classification、property、unit_group；使用确定性的原定义/ID投影，不臆测分类、属性或单位。生成完整 report v1，并保留原有独立在线核验、显式冲突拒绝和 manifest 绑定；草稿原字节原样保存。 |
| `builder/goal-harness/prompt-compiler.mjs` | 对固定草稿 v2 的任务说明只填写选择和语义理由；继续要求调用 `goal:prepare-report`，返回原有 submission Schema 的引用封装。不能把 `readAuthorReportSchema()` 当作契约 2 的最终输出入口。 |
| `builder/goal-harness/orchestrator.mjs`、`report-preparation.mjs` | 首次采用时固定版本组合、turn 副本与 prepared manifest 版本解释；普通内容修复/基础设施续跑继续原组合。必须同时测试旧任务和新的契约 2＋草稿 v2＋报告 v1。 |

### 必须审查、原则上保留形状的消费者

- `builder/schemas/goal-author-report.schema.json`：保持完整 v1；阶段 2 不新增报告本体 v2。
- `builder/schemas/goal-author-submission.schema.json`：保持 submission v2 三分支；边界 referral 内嵌旧报告形状仍有效，不额外扩张作者故障声明字段。
- `builder/goal-harness/uuid-enrichment-audit.mjs`：仍读取完整 report v1，无需因为稀疏草稿改变规则；补链路回归。
- `builder/goal-harness/boundary-review.mjs`、计量检查实现：保留原审查含义，仅因调用接口变化作必要适配。
- `builder/cli/goal-prepare-report.mjs`：复用现有入口，检查是否需 await/传递验收预算和结构化错误；不加新 CLI。
- `builder/goal-harness/app-server.mjs`、`event-store.mjs`：先验证现有启动标识及事件重放能否保证下述故障场景；仅在不能保证时补启动对账/现有事件语义，不预先重建调度器。
- `builder/goal-harness/goal-cache.mjs`、`artifact-io.mjs`：复用已有读取和哈希验证，不增加缓存诊断系统。
- `builder/docs/tools/goal-harness.md`：同步版本矩阵、准备/收取验收范围、恢复动作和预算。

## 4. 验收成功必须显式成立

所有准备成功和入池路径都调用同一判定原则：

1. 输入形状、任务/来源绑定、commit、工作树和授权安全前置成立。
2. 验证程序根据任务契约、实际 PCR 使用的 UUID、引用凭据及来源生成适用的必需检查集合。
3. 该集合每项都有完成且通过的结果；没有阻塞 finding，也没有应审未审的计量/边界/既有语义问题。

不要对“函数已经返回的检查数组”简单执行 every。空数组、少一个必需项、`valid:false` 或未识别的结果形状都不能通过。独立的准备预检与最终收取有各自固定检查范围：preparation ready 不等于最终作者验收完成。

继续使用 passed/failed/skipped；另记录由程序确定的适用性和跳过原因。依赖缺失导致必需项 skipped 阻止通过；真正不适用的项须明确说明。检查结果按 `(phase, check_id, subject_id)` 标识，防止同名多 UUID/多来源检查遗漏；内容 failed 不被之后的网络失败覆盖。

完整结果写入原 `validation_result`/findings。既有 `uuid_reads` 等成功数据数组只放已成功取得且形状有效的数据，failed/skipped 不混入；部分成功可用于继续本次独立检查，但共享“已验证”缓存仍须等到该结果通过完整适用验收及凭据交叉核验后才能发布。`valid_result`、集成快照、共享证据发布三处都受成功判定约束。

实际对应链必须覆盖参考产品和库存流：PCR 使用 UUID ↔ 作者采用声明 ↔ 凭据采用决定 ↔ 本轮公开身份。声明缺失、冲突/重复采用不能靠 Map 静默覆盖；在线读取缺失也不能冒充声明缺失或名称错误。审查集合只覆盖当前结论所依赖凭据，不声称审查全部历史查询，历史查询仍保留。

## 5. 逐项归因，再对整次验收选择动作

在故障产生边界复用 details 记录 `phase`、`origin`、`failure_kind`、`retryable`、`subject_id`；HTTP 情况另保留 `http_status`、`retry_after`、`cache_fallback_allowed`。只保存已观测信息，不记录密钥或原始敏感 stderr。

例：同一个 `GOAL_HYBRID_SEARCH_RECEIPT_MISMATCH`，作者旧声明转录冲突属于可修内容；任务绑定/凭据哈希损坏属于完整性问题；无法解释的在线身份变化保留处理。分类不能只看该大类错误码。底层无结构化详情的非零退出/无效 JSON 不能按 message 猜网络原因；未知协议故障先保留处理。

作者 submission.failure 仅是线索。Harness 可关联同任务/turn 的失败凭据或独立 preflight 观测来归因；缺少支持时保留不确定性，不自动授予网络重试。`retryable:false` 必须生效。

整组决策与 findings 顺序无关，优先级为：

1. 完整性、越权、配置或未知内部故障 → 现有 hold。
2. 已确认或显式请求且需审查的计量/边界问题 → 原有 `manual_review`，保留其他 findings；不让作者重写来猜审查结论。
3. 已确认、作者可修的内容问题 → 一次汇总 `repair_content`；仍保存在线未完成项。
4. 仅剩可恢复基础设施未完成 → 完整且来源绑定正确的 prepared/旧报告用 `recheck_report`；尚未形成合格准备报告、需补查询或重新准备时用原作者 `resume_author`。
5. 其余情况必须再通过第 4 节的显式判定，才能成功；无 finding 不自动代表完整。

已有 `GOAL_MEASUREMENT_REVIEW_REQUIRED` 和边界转交继续可见；没有新建并行状态机。

## 6. 恢复预算和派发幂等

harvest、dispatch、preview、模型试验入口必须先归因，再检查该动作预算。内容 attempt、内容 repair、基础设施恢复独立计数；基础设施上限暂取现有 `max_attempts` 数值，但不使用 task.attempt 判断基础设施是否还有额度。

恢复事件绑定任务、来源 turn、提交/草稿或 prepared-report 身份及恢复目标。继续该事件产生的新 turn 继承同一事件身份；改变错误码、重放状态或重复 resume 不生成新预算。若尚无草稿/commit，以原始故障 turn＋明确恢复目标固定事件。只在产生新的有效工作结果或明确结束后开启下一事件，不靠随意改写草稿来刷新额度。

复用 `evidence_recheck_history`、`infrastructure_resume_history` 和稳定事件标识，补足必要的来源绑定/结束结果。已有 `backoff_seconds` 计算最早执行时间，并服从 Retry-After。preview 纯读取，不触发网络或写历史。上限耗尽进入现有 hold，不回落为内容修复或新工作树。

内容次数只在一次实际内容修复启动被确认后计入一次。必须验证“适配器已启动 turn，但完成事件落盘前崩溃”：恢复利用稳定 clientUserMessageId、原启动意图和真实 turn 对账，禁止盲目再次 start。若现有实现没有持久化启动意图/可用对账能力，仅补这一处现有事件与适配器边界；观察不确定时 hold，不用重复派发来试探。

## 7. 来源缓存、原文资格和整次验收时间

- 缓存回退资格和自动重试资格分别判断。403 可以查同来源已验证原文缓存；没有缓存时不原样自动反复请求，等待访问条件变化。429 使用可解析的 Retry-After；超时、连接故障、明确可恢复服务错误按独立上限重试。
- 原文缓存须同 source_id/locator，真实 blob 存在，路径/凭据/内容指纹与 blob 哈希验证通过。通用缓存允许无 blob，不意味着来源原文缓存也允许。沿用现有缓存读取器过滤坏记录；不可用缓存不能提供成功证据。
- 网络获取的异常处理不包住后续缓存写入；磁盘失败、明确完整性异常或程序错误不得变成网络 fallback。
- HTTP 200、下载到字节并生成哈希不是原文合格证明。检测已知登录/验证码等非原文响应；核对来源身份及原文内容资格，无法可靠识别时标记未完成/待审查。内容与作者主张相关性继续经过已有语义审查，不以页面字节替代。
- 对每次验收设可测试内部上限：初始建议每项外部 I/O 最多 30 秒，单次 preparation 或 harvest 的整次验收总预算 60 秒。按各自入口创建一个绝对 deadline，逐任务、逐 UUID、逐来源及同步检查传递剩余时间；已有等待也服从剩余预算，不能只在 Promise 外层超时而让同步子进程继续阻塞。
- deadline 耗尽后保留已完成结果，其余适用必需项标记未完成并进入有界恢复，不生成内容错误、不入池。恢复从已保存的检查进度公平推进，避免每次重跑首个超时来源而饿死后续检查；已成功结果的复用须满足原任务/commit/证据绑定和该门禁原有新鲜度要求，不能用陈旧 UUID 状态放行。
- 本地解析/Builder/同步按真实依赖执行；同步子进程使用显式上限，超时不冒充 PCR 语义错误。不得把失败解析结果替换成空结构再运行下游检查。时间上限是内部常量和测试注入值，不增加配置 Schema。

## 8. 实施顺序和验收测试

阶段可在同一隔离分支分别提交，最后完整采用；不要求把半成品部署生产。

- [x] 阶段 0：刷新入口与 prepared 部署证据、脏差异、指纹、来源 turn/任务契约，确定保留现有改动的实施基线。
- [x] 阶段 1a：先加来源归因/缓存/恢复预算与幂等故障测试，再实现共享恢复决策和各入口预算顺序。
- [x] 阶段 1b：先加返回失败对象不抛错的入池负例，再统一准备与收取的完整性断言；实现依赖感知的结果聚合、成功数据消费者适配和整次预算。
- [x] 阶段 2：先加契约 2＋草稿 v2＋完整 report v1 的准备/引用/收取/历史复查回归，再精简草稿与扩展 assembler；固定首次采用的版本组合。
- [x] 更新 Harness 说明。执行下列定向测试及 `npm run validate`，不降低原校验规则。
- [x] 用已知失败类型构造脱敏回放；旧报告、凭据、事件与计数不改写。比较同门禁下无效修复和人工调度次数，而非通过率放宽。
- [ ] 正式采用前检查真实调度/作者状态及试验控制交接。旧任务、旧 turn 保留原契约，已 held/failed 不自动重启；单槽完成准备、完整验收、集成、落盘后再恢复原并发策略。

| 测试文件 | 必须证明 |
| --- | --- |
| `report-preparation.test.mjs`、`author-submission.test.mjs`、`builder/cli/goal-prepare-report.test.mjs` | 草稿稀疏化仍经 preparation 和引用提交；所有哈希/来源绑定有效；显式冲突不覆盖；旧产物不改写；准备预检返回失败/不完整对象也不能产生 ready 产物。 |
| `quality-gates.test.mjs`、`author-review.test.mjs` | 空/漏必需检查、valid:false、不适用与依赖缺失区分；部分在线失败不掩盖缺少采用声明；PCR 参考产品与库存 UUID 全覆盖；冲突采用声明不被去重；解析失败不制造次生错误。 |
| `evidence-audit.test.mjs`、`uuid-search-receipts.test.mjs` | 相同码不同来源正确归因；部分成功/失败/跳过隔离；坏凭据不通过；403缓存可用与不可用、429冷却、200登录/验证码/无关页面不成为合格原文；磁盘错误不被吞掉。 |
| `orchestrator.test.mjs` | 返回失败对象但不抛异常时不入池、不产生该任务集成快照、不发布该结果的共享证据；findings 任意排序决策相同；attempt/repair 已满但基础设施额度未满仍可合法恢复；事件重放/错误码改变不重置预算；preview无副作用；deadline耗尽保留结果且后续检查不饥饿。 |
| `app-server.test.mjs`、现有事件重放测试 | 启动 turn 后、写入完成事件前崩溃，恢复不重复作者、不重复计数；不确定启动状态保留处理。 |
| `boundary-review.test.mjs`、`builder/lib/measurement-consistency.test.mjs`、`orchestrator.test.mjs` | 两种 manual_review 路径继续有效，混合错误也不被转为猜测性内容修复。 |
| `prompt-compiler.test.mjs`、`uuid-enrichment-audit.test.mjs` | 版本不随普通新 turn 漂移，submission形状不变，完整报告仍被旧消费者正确读取；Schema分支严格且不删用户字段。 |
| `model-trial.test.mjs`（保留运行树适配后） | 基础设施恢复不消耗内容预算，模型分配与冻结指纹仍受约束。 |

以上未带目录的测试位于 `builder/goal-harness/`。在合流后的实施工作树执行：

```bash
node --test builder/goal-harness/*.test.mjs builder/cli/goal-prepare-report.test.mjs builder/lib/measurement-consistency.test.mjs
npm run validate
```

方案修订的文档校验与将来实施版本的测试须分别报告，不能用旧主树通过校验证明 prepared 方案已经实现。复杂机械的边界、工艺完整性和归一化判断仍需方法学审查；本次改进解决重复输入、误恢复、误放行和补查损耗。
