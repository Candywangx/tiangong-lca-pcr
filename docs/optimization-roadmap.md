---
title: PCR Library Optimization Roadmap
docType: plan
scope: repo
status: active
authoritative: false
owner: tiangong-lca-pcr
language: zh-CN
whenToUse:
  - when prioritizing PCR library architecture and reliability work
  - when deciding whether a change belongs to trust, identity, compilation, validation, or scale
whenToUpdate:
  - when an optimization phase is completed
  - when baseline metrics or target architecture change
checkPaths:
  - docs/optimization-roadmap.md
  - AGENTS.md
  - README.md
  - builder/**
  - packages/**
  - classifications/**
  - library/modules/**
lastReviewedAt: 2026-07-14
lastReviewedCommit: 35080d8a47c5e66224b164442c98469014c0b848
---

# PCR 资料库优化路线图

## 目标

把本仓库从“分类驱动的大型 PCR scaffold 集合”逐步演进为可信的方法学编译与消费系统：

- PCR identity 与外部分类彻底解耦。
- Markdown 保持适合人和 Agent authoring 的表达空间。
- 进入机器消费、验证和发布的内容具有明确、可检查的契约。
- 未完成、未审核和未执行的部分始终显式，不用空结果表达成功。
- 大规模 classification coverage 不再迫使 canonical library 承担同等规模的空 PCR 文件。

## 当前基线

截至 2026-07-14，仓库包含 2,877 个 PCR 目录：

| 状态 | 数量 | 消费含义 |
| --- | ---: | --- |
| `candidate / authored_methodology` | 3 | `review_required`，可带警告进入 guidance |
| `scaffold / empty_scaffold` | 2,874 | `unavailable`，只能用于 mapping 与 authoring 定位 |

这个分布说明当前最重要的问题不是继续增加 scaffold，而是建立可信边界、减少结构性噪声，
并让少量 material PCR 能够可靠地编译、验证、审核和发布。

## 分阶段方案

### P0：消除假安全信号

状态：本轮实现。

- catalog、resolve、guidance 暴露统一 readiness；空 scaffold 禁止 guidance/validation。
- validation 区分结果与覆盖率，报告输入、performed/skipped checks、完整度和 findings。
- error finding 与 inconclusive validation 默认非零退出；report-only 必须显式选择。
- system boundary、allocation、validation 从 Markdown 确定性投影为可寻址规则。
- material PCR 的中英文关键规则保持相同的有序 rule id。
- material PCR lint 检查 structured freshness。
- lifecycle 使用合法状态矩阵；active 和 publish 具有实质 preflight。
- viewer 输出替换受 marker、protected path、symlink 与临时构建保护。
- pull request 和 main push 运行统一 `npm run validate`。

退出条件：不存在 scaffold guidance、stale material projection、无门禁发布或“零 finding 等于完整验证”的路径。

### P1：强化编译契约与运行时可信度

状态：已完成。第 7 项完成的是修订契约设计与现有不可变门禁；真正的 revision workflow 实现仍是后续工作。

1. 已实现：将 JSON Schema 接入 repo lint 和消费侧 contract tests，并为 readiness/validation report 增加跨字段语义断言；Schema 不再只是说明文件。
2. 已实现：为 material `structured.yaml` 增加确定性 projection metadata，包含 generator contract version、canonical Markdown SHA-256 和 generated-content SHA-256；可复现投影不包含时间戳。
3. 已实现：readiness 在运行时验证 material projection fingerprint、Schema 与独立的内容完整度语义门禁，不只检查文件存在，也不会把结构合法但方法学为空的 authored 投影判为可用。
4. 已实现：建立真实 material PCR 的跨层 fixture，连续验证 manifest、Markdown frontmatter、mapping、builder 重渲染、shared structured Schema、resolve、readiness、guidance 和 validation report，并锁定跨层 identity 与关键规则一致性。
5. 已实现：`builder/vocab/*.yaml` 成为唯一手写词表源，确定性生成共享 runtime constants 与 JSON Schema；validate 会拒绝 stale 生成物，material projection 和 mapping runtime 也会拒绝未知 token。
6. 已实现：公共消费 CLI 使用逐命令格式契约、受控 filter、严格参数校验、稳定错误 envelope、bounded tree 和分页 path-prefix down-drill；JSON 输出明确 filters、completeness 与下一命令。
7. 已实现（契约设计）：`builder/docs/contracts/published-revision-contract.md` 规定 published current、单一 revision workspace、不可变 release snapshot、append-only history 和可恢复目录事务；现有 `pcr:bump` 继续禁止直接修改 published/deprecated 记录。命令、Schema、lock/journal 与故障恢复是该契约的后续实现，在完成前禁止手工创建 revision/release artifacts。

退出条件：已达成。所有 material PCR 都通过可执行 Schema、内容完整度与 fingerprint 校验；公开 guidance/validation 输出具有自动 contract validation；词表生成、CLI 边界和 published revision 设计均已固化。实现 `pcr:revise`、发布快照写入、锁与恢复必须按已定义契约单独落地，不影响本阶段的契约设计完成判定。

### P2：拆分 classification coverage 与 canonical methodology catalog

状态：需要先写 ADR 和迁移计划。

1. 停止“每个 classification leaf 自动创建 canonical PCR 目录”。分类导入只生成 source、normalized data 和 coverage/mapping 状态。
2. 对尚无真实方法学的 leaf 使用明确的 `unmapped` / `manual_review` / candidate suggestion 表达，不预先宣称 canonical PCR identity。
3. 只有形成稳定语义边界时才创建 PCR record；多个 classification leaf 可以映射到同一个 record。
4. 将现有 2,874 个 empty scaffold 迁移为轻量 coverage index，并为已有外部引用设计 redirect 或 compatibility period。
5. catalog 和 viewer 默认 material-first，classification coverage 按需加载。

退出条件：canonical PCR 数量反映方法学实体数量，而不是外部分类叶子数量；新增分类体系不会复制 PCR 树。

### P3：模块组合与可执行验证

状态：P1 之后启动。

1. 为 `library/modules/**` 建立真实的 resolve、composition 和 conflict contract，guidance 显示每条规则的来源模块与覆盖关系。
2. 保留自由文本规则，同时为可执行规则增加可选 typed binding；不要强迫所有方法学语言伪装成代码。
3. 建立 validator registry，逐类实现 reference flow、measurement、inventory、allocation、data quality 和 validation checks。
4. coverage denominator 来自实际可执行 binding；未绑定规则继续明确列入 skipped，而不是被忽略。
5. 为规则 ID 的重命名、废弃和兼容建立版本策略。

退出条件：验证覆盖率可以按规则族和 rule id 精确解释，模块引用会真实改变 compiled guidance。

### P4：内容生产、审核与规模化发布

状态：在 P1/P2 稳定后推进。

1. 按产品重要度、数据生产需求和证据可得性管理 PCR authoring queue，不按 classification 顺序机械填充。
2. 标准化 evidence pack、UUID resolution、双语 diff、review finding 和 release evidence。
3. 生成轻量 catalog index 和按 PCR 拆分的 viewer artifacts，避免每次加载全部 Markdown/guidance。
4. 发布 bundle 记录 PCR version、projection fingerprint、source evidence snapshot 和 validation summary。
5. 建立 deprecated、superseded、mapping redirect 和 consumer compatibility 流程。

退出条件：从 authoring 到 reviewed publication 的证据链完整，可按需分发且不依赖私有 workspace 状态。

## 衡量指标

| 维度 | 指标 | 目标 |
| --- | --- | --- |
| Truthfulness | empty scaffold 可进入 guidance/validation | 0 |
| Projection | material PCR stale 或 schema-invalid | 0 |
| Publication | 未通过 preflight 的 published PCR | 0 |
| Validation | 未声明的 skipped requirement family | 0 |
| Identity | 仅因 classification leaf 新增的 PCR record | P2 后为 0 |
| Composition | 声明 module 但 compiled guidance 未解析 | P3 后为 0 |
| Scale | viewer 首屏必须加载的全库正文 | P4 后为 0 |
| Quality | published PCR 的 review、translation、source 与 fingerprint 证据 | 100% |

## 实施原则

- 先修正信号真实性，再提高内容吞吐量。
- Markdown 是 canonical authoring truth；结构化输出是确定性编译产物。
- 只把稳定、需要机器判断的部分提升为严格 Schema；未知性用显式状态、warning、blocker 和 skipped checks 表达。
- classification、methodology、compiled guidance、validation report 和 release evidence 各自只有一个明确职责。
- 每个阶段都先加入失败用例和迁移保护，再改变大规模数据形态。
