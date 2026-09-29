---
pcr_id: pcr.metal-products-machinery-and-equipment.radio-television-and-communication-equipment-and-apparatus.other-application-software-packaged
language: zh-CN
sync_with: pcr.en-US.md
status: candidate
---

# 其他应用软件（实体包装版）

## 1. 范围与适用性

本规则适用于 CPC 47829“其他应用软件，成品包装”的实体已发布产品供应。联合国 CPC 3.0 解释性说明列入跨行业业务应用、垂直行业应用、实用工具和其他未另分类的应用软件。代表性路线是已发布软件版本记录在光盘上，并置于纸质零售盒中。其他实体配置须分别列出具体材料流并声明物料清单。纯下载交付、托管软件服务、通用生产力及家庭用途应用、计算机游戏、操作系统和网络软件不在本产品边界内。声明的评价范围为合格实体包装产品从摇篮到生产者出厂；使用和寿命终止情景另行建模。`unsd-cpc-3-2025`

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.radio-television-and-communication-equipment-and-apparatus.other-application-software-packaged |
| classification_refs | CPC 3.0:47829（分类背景，非 PCR 身份） |
| covered_products | 以实体介质包装的已发布跨行业、垂直行业、实用工具及其他剩余类别应用软件 |
| excluded_products | CPC 47821 通用生产力及家庭用途应用；CPC 47822 游戏；CPC 84342 下载；托管服务；操作系统和网络软件 |
| representative_product | 纸质零售盒内的合格已刻录应用软件光盘 |
| production_route | 软件设计、构建和发布；采购已刻录光盘与纸盒；包装组装和验收 |
| market_state | 生产者出厂边界的合格实体零售包装成品 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 供应通过实体介质包装的已发布剩余类别应用软件 |
| How much | 1 千克合格完整实体包装软件，并报告每千克的包装件数和许可数 |
| How well | 声明版本、应用功能、经检验可读取的介质和完整的声明零售包装 |
| How long or cycle | 生产者出厂时的一次发布；披露预期支持使用期，但不纳入本出厂清单 |
| reference_flow_link | `finished_packaged_software` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 其他套装应用软件 `48738ce4-0cb1-4fca-8a2e-c77dcf9450e6` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 应用功能与目标行业；软件版本及每千克许可数和包装件数；实体介质及包装配置；验收出厂边界、地域和生产期 |

质量基准计量包括已刻录光盘和零售盒的合格完整实体包装，并不表示软件功能随质量成比例变化。比较应用软件时须披露功能和许可数。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `accepted_mass` | 参考产品及 `finished_packaged_software` | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 用经校准的秤称量合格完整零售包装，排除运输包装；仅汇总声明版本和配置。 |
| `inventory_basis` | 所有清单行 | 各行声明的质量或能量属性 | kg 或 MJ | 将每批交换归属于声明发布版本，并除以该批合格完整包装产品质量，表示为每 1 kg 参考流；保留原始批次记录。 |
| `electricity_unit` | `development_electricity`、`assembly_electricity` | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 按 1 kWh = 3.6 MJ 将计量电量换算为 MJ；保留原始电表单位和分配记录。 |

## 5. 系统边界

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `gate_boundary` | 前景系统 | 纳入可归属所售版本的发布开发活动、已刻录介质及纸盒采购、实体包装组装、验收及至生产者出厂的废品。另行建模的配送、使用或寿命终止情景须披露。 | `itu-l1410-2024` |
| `software_electricity` | 开发活动 | 采集可归属设计、构建及发布的 ICT 设备和办公室电力，并记录共享办公室分配及发布销量。 | `itu-l1410-2024` |

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 已验收发布的应用版本，以及在声明组装厂采购的已刻录光盘和纸盒 |
| starting_condition_role | 软件发布及组件采购后的实体包装供应 |
| product_classification_scope | CPC 47829 剩余类别实体包装应用软件；独立记录功能与配置 |
| recursive_input_rule | 若采购投入本身属于 CPC 47829，应以其上游数据集表示且仅计一次；披露递归依赖，避免重复计算开发活动。 |
| upstream_dataset_requirement | 使用可追溯供应商或背景数据集涵盖上游发电、已刻录光盘制造和刻录，以及纸盒生产。 |
| disclosure | 声明出厂边界、发布期、包装配置、许可数、供应商覆盖率、共享办公室分配及未纳入的使用或寿命终止阶段。 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `software_development` | 软件开发与发布 | `required` | 所有声明的实体版本 | 前景发布活动及已分配的办公室电力 | 每 1 kg 合格包装成品 |
| `package_assembly` | 实体包装组装与验收 | `required` | 已刻录光盘与纸盒路线 | 前景包装、检验、合格产出及废品 | 每 1 kg 合格包装成品 |

### 过程：软件开发与发布（`software_development`）

#### 输入

##### 产品流

###### 软件开发用电（`development_electricity`）

该电力是在声明前景边界上的一项交换；应保留批次证据及包装配置。

- 选定流：电力 `b989a649-ca09-44b8-abab-a069148d0b1e`
- 流属性/单位：Net calorific value / MJ
- 数量规则：计量开发、构建及发布工作归属的电力。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_development_electricity`
- 来源：`itu-l1410-2024`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

### 过程：实体包装组装与验收（`package_assembly`）

#### 输入

##### 产品流

###### 包装组装用电（`assembly_electricity`）

该电力是在声明前景边界上的一项交换；应保留批次证据及包装配置。

- 选定流：电力 `b989a649-ca09-44b8-abab-a069148d0b1e`
- 流属性/单位：Net calorific value / MJ
- 数量规则：计量所声明实体包装产线的电力。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_electricity`
- 来源：

###### 已刻录软件光盘（`recorded_disc_input`）

该带反射层和保护层的已刻录光盘是在声明前景边界上的一项交换；应保留批次证据及包装配置。

- 选定流：带反射层和保护层的已刻录光盘 `6ce243c6-bc3c-483d-b91f-5c1da87e6928`
- 流属性/单位：Mass / kg
- 数量规则：送入实体包装组装的合格已刻录光盘质量；采购光盘数据集应包含上游刻录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_disc_mass`
- 来源：

###### 零售纸盒（`paper_box_input`）

该纸盒是在声明前景边界上的一项交换；应保留批次证据及包装配置。

- 选定流：纸盒 `12d5d744-7725-4dbc-b102-43c80547f777`
- 流属性/单位：Mass / kg
- 数量规则：送入同一包装配置的纸盒质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_box_mass`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 合格实体包装软件（`finished_packaged_software`）

该其他套装应用软件是在声明前景边界上的一项交换；应保留批次证据及包装配置。

- 选定流：其他套装应用软件 `48738ce4-0cb1-4fca-8a2e-c77dcf9450e6`
- 流属性/单位：Mass / kg
- 数量规则：1 千克
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_accepted_product_mass`
- 来源：

##### 废物流

###### 报废已刻录光盘（`waste_recorded_disc`）

该废弃的带反射层和保护层的已刻录光盘是在声明前景边界上的一项交换；应保留批次证据及包装配置。

- 选定流：废弃的带反射层和保护层的已刻录光盘
- 流属性/单位：Mass / kg
- 数量规则：发生报废时计量已刻录光盘；仅凭有记录的零报废批次填报零。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_disc_reject`
- 来源：

###### 报废纸板盒（`waste_cardboard_box`）

该包装废弃物，纸板是在声明前景边界上的一项交换；应保留批次证据及包装配置。

- 选定流：包装废弃物，纸板 `72270223-04b1-4986-a546-94e5a0821317`
- 流属性/单位：Mass / kg
- 数量规则：发生报废时计量零售纸板盒；仅凭有记录的零报废批次填报零。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_box_reject`
- 来源：

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `release_allocation` | 共享的软件设计和办公室活动 | 优先拆分单独计量的发布版本工作。真正共享的工作按有记录的员工工时、计算资源使用量或其他因果物理驱动分配给所售版本；若不可得，采用并披露组织或经济分配，并对重要结果作敏感性检验。将发布版本总量除以报告期合格实体包装产品质量。 | `itu-l1410-2024` |
| `component_allocation` | 采购介质和纸盒 | 尽可能使用供应商特定组件数据集；共享包装操作按记录的机器时间或合格批次产出质量分配，并单独记录报废产出。 | `itu-l1410-2024` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_development_electricity` | `software_development` | 开发用电 | 项目电表及分配记录 | 发布版本编号；电表 kWh；项目份额；合格产品质量 | 读取经校准的电表或账单，并按有记录的方法将开发设备及办公室用电分配给发布版本。 | MJ | 每次发布 | 声明发布期 | 开发办公室 | per 1 kg reference flow | 电表记录；分配记录 |
| `cp_assembly_electricity` | `package_assembly` | 包装组装用电 | 产线电表 | 批次编号；电表 kWh；合格产品质量 | 读取包装产线电表或可归属分表。 | MJ | 每批 | 声明生产期 | 包装工厂 | per 1 kg reference flow | 电表及批次记录 |
| `cp_disc_mass` | `package_assembly` | 已刻录光盘投入 | 供应商交货及称重 | 批次编号；合格光盘质量；合格产品质量 | 称量跨越组装投入边界的已刻录光盘，或采用经核验的供应商质量记录。 | kg | 每批 | 声明生产期 | 包装工厂 | per 1 kg reference flow | 秤检定证书；供应商记录 |
| `cp_box_mass` | `package_assembly` | 纸盒投入 | 物料清单及称重 | 批次编号；纸盒质量；合格产品质量 | 称量声明的纸盒组件，或核对供应商和物料清单的质量。 | kg | 每批 | 声明生产期 | 包装工厂 | per 1 kg reference flow | 秤检定证书；物料清单 |
| `cp_accepted_product_mass` | `package_assembly` | 合格实体包装软件 | 合格批次称重 | 批次编号；版本；配置；包装件数；许可数；合格净质量 | 使用经校准的秤称量不含运输包装的合格完整零售包装。 | kg | 每批 | 声明生产期 | 包装工厂 | per 1 kg reference flow | 秤检定证书；验收记录 |
| `cp_disc_reject` | `package_assembly` | 报废已刻录光盘 | 报废及称重记录 | 批次编号；报废已刻录光盘质量；合格产品质量 | 称量报废已刻录光盘，并核对领用、退回和合格件数。 | kg | 每批 | 声明生产期 | 包装工厂 | per 1 kg reference flow | 报废及称重记录 |
| `cp_box_reject` | `package_assembly` | 报废纸板盒 | 报废及称重记录 | 批次编号；报废纸盒质量；合格产品质量 | 称量报废零售纸板盒，并核对领用、退回和合格件数。 | kg | 每批 | 声明生产期 | 包装工厂 | per 1 kg reference flow | 报废及称重记录 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `batch_basis` | 所有清单行 | 将可归属的批次交换量除以合格完整实体包装产品质量（kg）；合格参考产出按定义等于 1 kg。 | 可归属交换量；合格完整实体包装产品质量；相应采集协议 | 每 1 kg 参考流的交换量 | `itu-l1410-2024` |
| `electricity_conversion` | 电力投入 | 计量的 kWh 乘以 3.6 得 MJ，再归一化。 | 计量 kWh；分配记录 | MJ 电力 | |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `release_traceability` | 开发及产出 | 所有记录的版本、发布期、实体配置、许可数及合格质量一致。 | 发布说明；验收及称重记录 |
| `mass_reconciliation` | 包装组装 | 核对投入的已刻录光盘和纸盒质量、合格包装、记录的报废品及库存变化，并解释残差。 | 物料清单；库存及报废记录 |
| `source_coverage` | 上游和共享活动 | 报告供应商数据集覆盖率、分配驱动、地域、技术、时期及遗漏。 | 供应商记录；分配工作表 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `identity_check` | 参考产出 | 确认 CPC 47829 范围、声明版本和实体配置、精确公开产品 UUID，以及 1 kg 合格完整包装质量。 | `unsd-cpc-3-2025` |
| `inventory_check` | 所有清单行 | 确认原子流身份、采集协议和每 1 kg 基准；废弃光盘 UUID 未解决时，不得自动建立流链接。 | |
| `balance_check` | 包装组装 | 对照合格包装质量核查合格投入、报废和库存变化；披露无法解释的差异及共享活动分配。 | `itu-l1410-2024` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 实体包装应用软件的前景出厂数据集 |
| downstream_use | `secondary_dataset`；产品范围及配置一致时可作 `background_dataset` |
| allowed_use | 声明实体包装版本的从摇篮到出厂建模；功能和许可数相当时开展透明比较 |
| excluded_use | 纯下载交付、托管软件服务，或未增补使用和处置情景的全生命周期比较 |
| required_metadata | 版本；功能；地域；报告期；每千克许可数和包装件数；介质；零售盒；设施；分配驱动 |
| required_quality_disclosure | 一手数据覆盖率；供应商数据集；电量计量与称重；报废；共享办公室分配；未解决的流身份和范围证据缺口 |
| update_trigger | 版本、包装配置、组装技术、供应商、地域或共享活动分配发生重大变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-2025` | `official_guidance` | 联合国统计司《CPC 3.0 解释性说明》，2025 年 6 月 30 日，第 263 页，47829 小类；https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 类别纳入与排除 |
| `itu-l1410-2024` | `standard` | ITU-T 建议 L.1410（2024 年 11 月），附录 A 及第 7.3.3.1–7.3.3.4 节；https://www.itu.int/rec/dologin_pub.asp?id=T-REC-L.1410-202411-I%21%21PDF-E&lang=s&type=items | 软件开发活动、一手数据、共享办公室分配及披露 |
