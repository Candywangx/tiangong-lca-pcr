---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.soya-beans-other
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 其他大豆

## 1. 范围与适用性

本PCR覆盖非播种用整粒大豆（*Glycine max*），从受控种植、收获、清理、条件性干燥、分级和储存至声明的农场或初级整理交接点。每个数据集仅代表一种食品级、饲料级或加工原料级层级。排除播种种子、豆粉、豆粕、油脂、蛋白制品和制造食品。

## 2. 产品类别身份

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.soya-beans-other |
| classification_refs | CPC 3.0: 01412 其他大豆; mapping relation: exact |
| covered_products | 用于食品、饲料或加工的收获后非播种用整粒大豆 |
| excluded_products | 播种种子；豆粉；豆粕；油；分离蛋白；饮料；豆腐；发酵及其他制造产品 |
| representative_product | 清理并稳定化的非播种用整粒大豆 |
| production_route | 受控雨养或灌溉种植、收获脱粒、清理、条件性干燥、分级、储存和条件性包装 |
| market_state | 声明农场、收集或整理交接点的整粒大豆；声明等级、用途、水分、质量分数和包装状态 |

雨养/灌溉、自然/加热干燥、散装/包装及食品/饲料/加工路线在透明加权前保持分开。每项技术差异必须有当前投入、损失和质量记录。

## 3. 参考流
| 字段 | 值 |
| --- | --- |
| What | 声明交接点的非播种用整粒大豆 |
| How much | 1,000 kg湿基 |
| How well | 声明食品、饲料或加工等级；水分；杂质；破损、受损和虫害分数 |
| How long or cycle | 一个作物周期及关联采后活动 |
| reference_flow_link | reference_soya_beans |

| 字段 | 值 |
| --- | --- |
| Reference amount | 1000 |
| Reference product flow | 其他大豆 |
| Reference flow property | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | 物种；非播种用途；食品/饲料/加工等级；水分及基准；质量分数；地理；作物年份；种植、干燥和储存路线；散装或包装状态；交接点 |

基准UUID未解析：现有精确CPC候选分别限于原生食品/原料工厂路线或饲料等级，不能代表完整类别。

## 4. 计量与单位规则
| rule_id | 适用对象 | 必需属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 基准和物料平衡 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 按湿基报告1,000 kg，并声明实测水分及基准。 |
| `area_normalization` | 作物记录 | 质量 | kg/ha及kg/1,000 kg | 归一化前保留面积、毛产量和合格质量。 |
| `moisture_balance` | 干燥与储存 | 质量 | kg | 用成对质量和水分测量守恒干物质。 |
| `quality_fraction` | 等级与损失 | 质量 | kg/kg | 杂质、破损、受损和废弃分数使用同一质量与水分基准。 |

## 5. 系统边界

### 边界抽象

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 已整备田地，并披露前茬、土壤状态、保留残体和结转改良剂 |
| starting_condition_role | 播种前起点 |
| product_classification_scope | CPC 01412内收获后的非播种用整粒大豆 |
| recursive_input_rule | 进入整理的外购整粒大豆是上游投入，不递归作为本前景作物周期产出 |
| upstream_dataset_requirement | 连接具体产品投入上游数据集，并将所有参数化具体流身份核验|
| disclosure | 地理、年份、面积、前茬、雨养/灌溉路线、固氮背景、投入、收获、干燥、等级、储存、包装、交接点、残体、废弃物和分配 |

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_crop` | 受控种植 | 纳入建植、田间作业、启用的灌溉、养分、田间直接排放、残体和至待收获状态的损失。 | `fao-soybean-production`; `ipcc-2019-managed-soils` |
| `boundary_harvest` | 收获 | 独立记录收集大豆、移出或保留残体、杂质和损失。 | `fao-soybean-production` |
| `boundary_conditioning` | 整理 | 纳入达到声明状态所需的清理、分级和干燥，并核对干物质。 | `fao-soybean-postharvest` |
| `boundary_storage` | 储存与包装 | 纳入交接点前通风、害虫控制、损失和包装；排除之后的分销。 | `fao-soybean-postharvest` |
| `boundary_exclusion` | 下游 | 排除种子认证、压榨、提油、制粉和制造。 | `fao-soybean-postharvest` |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `crop_production` | 受控大豆种植 | `required` | 一个作物周期 | 生物生产母过程；路线特定记录且共享田间资产仅分配一次 | 每面积及毛大豆产出 |
| `harvest_thresh` | 收获与脱粒 | `required` | 成熟作物被收集 | 独立的大豆、残体和损失交接 | 每收获批次 |
| `condition_grade_dry` | 清理、分级与条件性干燥 | `required` | 收获大豆进入整理 | 批次/连续处理，并区分合格、降级和废弃状态 | 每kg合格整理产出 |
| `storage_handoff` | 储存、包装与交接 | `required` | 整理后大豆等待交接 | 稳定化、条件性包装和共享仓储分配 | 每1,000 kg基准产品 |

投入、产出、清洗、换批和损失均关联田地、批次、运行或储存期。返工仅返回生产节点一次；降级、不合格和丢弃状态保持独立。

### 过程：受控大豆种植 (`crop_production`)

#### 输入
##### 产品流

###### 播种材料 (`planting_material`)

记录该流并保留批次、路线与去向证据。

- 选定流：大豆播种材料
- 流属性/单位：Mass / kg
- 数量规则：实测播种质量
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
原始活动或阶段基准：每1,000 kg基准产品或所声明内部交接.

- 归一化基准：每声明的参考流
- 基准类型：基准流（`reference_flow`）
- 证据类型：`collected_record`
- 采集协议：`cp_crop_cycle`
- 数量范围：QA校验范围
  - 范围角色：QA校验（`qa_guardrail`）
  - 下限：5
  - 上限：200
  - 单位：kg/1,000 kg reference product
  - 基准：每1,000 kg基准产品或所声明内部交接
  - 基准类型：基准流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）
###### 灌溉水 (`irrigation_water`)

记录该流并保留批次、路线与去向证据。

- 选定流：灌溉水
- 流属性/单位：Volume / m3
- 数量规则：计量毛供水量；雨养路线为零
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
原始活动或阶段基准：每1,000 kg基准产品或所声明内部交接.

- 归一化基准：每声明的参考流
- 基准类型：基准流（`reference_flow`）
- 证据类型：`collected_record`
- 采集协议：`cp_crop_cycle`
- 数量范围：QA校验范围
  - 范围角色：QA校验（`qa_guardrail`）
  - 下限：0
  - 上限：10000
  - 单位：m3/1,000 kg reference product
  - 基准：每1,000 kg基准产品或所声明内部交接
  - 基准类型：基准流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）
###### 柴油 (`field_energy_diesel`)

实际柴油田间机械建植及作物照护；灌溉泵动力另行确认，保留田块及作物周期归属。

仅在本节点设备及采购记录确认使用此燃料时启用。记录牌号、配方、供应商及实际质量，体积按有证据的密度换算，不用默认密度。UUID标识燃料产品，不是燃烧服务或排放因子；实际前景燃烧另行计入，避免重复已含燃烧的上游服务。

- 选定流：柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性 / 单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按`cp_crop_cycle`仅采集归属本节点的该载能体数量。包含能耗的服务及共用量仅对账归属一次；归属量乘声明参考数量，再除以相同产品单位下匹配的最终合格产出数量。保留过程原生吞吐记录，不对最终参考量再次归一化。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：per declared reference flow
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_crop_cycle`
- 来源：`route-energy-fao`

执行第8节`field_energy_identification`要求。不继承原集合卡的数值范围或默认值。

##### 废物流


##### 基本流


#### 输出
##### 产品流

###### 待收获成熟作物 (`mature_crop`)

记录该流并保留批次、路线与去向证据。

- 选定流：成熟大豆作物
- 流属性/单位：Mass / kg
- 数量规则：实测豆粒当量作物毛产出
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
原始活动或阶段基准：每1,000 kg基准产品或所声明内部交接.

- 归一化基准：每声明的参考流
- 基准类型：基准流（`reference_flow`）
- 证据类型：`collected_record`
- 采集协议：`cp_crop_cycle`
- 数量范围：QA校验范围
  - 范围角色：QA校验（`qa_guardrail`）
  - 下限：1000
  - 上限：5000
  - 单位：kg bean-equivalent/1,000 kg reference product
  - 基准：每1,000 kg基准产品或所声明内部交接
  - 基准类型：基准流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 未回收田间损失 (`field_loss`)

记录该流并保留批次、路线与去向证据。

- 选定流：未回收作物材料
- 流属性/单位：Mass / kg
- 数量规则：观察或质量平衡得到的田间损失
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
原始活动或阶段基准：每1,000 kg基准产品或所声明内部交接.

- 归一化基准：每声明的参考流
- 基准类型：基准流（`reference_flow`）
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_crop_cycle`
- 数量范围：QA校验范围
  - 范围角色：QA校验（`qa_guardrail`）
  - 下限：0
  - 上限：300
  - 单位：kg/1,000 kg reference product
  - 基准：每1,000 kg基准产品或所声明内部交接
  - 基准类型：基准流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 农田土壤氧化亚氮排放至空气 (`soil_n2o`)

记录该流并保留批次、路线与去向证据。

- 选定流：农田土壤氧化亚氮排放至空气
- 流属性/单位：Mass / kg N2O
- 数量规则：用声明方法计算所采集养分与残体数据
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
原始活动或阶段基准：每1,000 kg基准产品或所声明内部交接.

- 归一化基准：每声明的参考流
- 基准类型：基准流（`reference_flow`）
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_field_emissions`
- 数量范围：QA校验范围
  - 范围角色：QA校验（`qa_guardrail`）
  - 下限：0
  - 上限：20
  - 单位：kg N2O/1,000 kg reference product
  - 基准：每1,000 kg基准产品或所声明内部交接
  - 基准类型：基准流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程：收获与脱粒 (`harvest_thresh`)

#### 输入
##### 产品流

###### 成熟作物投入 (`mature_crop_input`)

记录该流并保留批次、路线与去向证据。

- 选定流：成熟大豆作物
- 流属性/单位：Mass / kg
- 数量规则：等于关联成熟作物产出
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
原始活动或阶段基准：每1,000 kg基准产品或所声明内部交接.

- 归一化基准：每声明的参考流
- 基准类型：基准流（`reference_flow`）
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_harvest_lot`
- 数量范围：QA校验范围
  - 范围角色：QA校验（`qa_guardrail`）
  - 下限：1
  - 上限：1
  - 单位：kg input/kg linked output
  - 基准：每1,000 kg基准产品或所声明内部交接
  - 基准类型：基准流（`reference_flow`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`mass-balance-identity`
###### 柴油 (`harvest_energy_diesel`)

实际柴油收获机械及出口前批次移动；人工或其他动力路线按自身证据处理，不套用本投入。

仅在本节点设备及采购记录确认使用此燃料时启用。记录牌号、配方、供应商及实际质量，体积按有证据的密度换算，不用默认密度。UUID标识燃料产品，不是燃烧服务或排放因子；实际前景燃烧另行计入，避免重复已含燃烧的上游服务。

- 选定流：柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性 / 单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按`cp_harvest_lot`仅采集归属本节点的该载能体数量。包含能耗的服务及共用量仅对账归属一次；归属量乘声明参考数量，再除以相同产品单位下匹配的最终合格产出数量。保留过程原生吞吐记录，不对最终参考量再次归一化。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：per declared reference flow
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_harvest_lot`
- 来源：`route-energy-fao`

执行第8节`harvest_energy_identification`要求。不继承原集合卡的数值范围或默认值。

##### 废物流


##### 基本流


#### 输出
##### 产品流

###### 收获后未整理大豆 (`harvested_beans`)

记录该流并保留批次、路线与去向证据。

- 选定流：收获后未整理大豆
- 流属性/单位：Mass / kg
- 数量规则：称量批次并测定水分和杂质
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
原始活动或阶段基准：每1,000 kg基准产品或所声明内部交接.

- 归一化基准：每声明的参考流
- 基准类型：基准流（`reference_flow`）
- 证据类型：`collected_record`
- 采集协议：`cp_harvest_lot`
- 数量范围：QA校验范围
  - 范围角色：QA校验（`qa_guardrail`）
  - 下限：1000
  - 上限：1800
  - 单位：kg/1,000 kg reference product
  - 基准：每1,000 kg基准产品或所声明内部交接
  - 基准类型：基准流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）
###### 移出田间的作物残体 (`removed_residue`)

记录该流并保留批次、路线与去向证据。

- 选定流：移出田间的大豆残体
- 流属性/单位：Mass / kg dry matter
- 数量规则：实测或计算移出的干物质
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
原始活动或阶段基准：每1,000 kg基准产品或所声明内部交接.

- 归一化基准：每声明的参考流
- 基准类型：基准流（`reference_flow`）
- 证据类型：`collected_record`
- 采集协议：`cp_harvest_lot`
- 数量范围：QA校验范围
  - 范围角色：QA校验（`qa_guardrail`）
  - 下限：0
  - 上限：4000
  - 单位：kg dry matter/1,000 kg reference product
  - 基准：每1,000 kg基准产品或所声明内部交接
  - 基准类型：基准流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 收获废弃物与损失 (`harvest_rejects`)

记录该流并保留批次、路线与去向证据。

- 选定流：收获废弃物与损失
- 流属性/单位：Mass / kg
- 数量规则：按去向实测废弃物或平衡差额
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
原始活动或阶段基准：每1,000 kg基准产品或所声明内部交接.

- 归一化基准：每声明的参考流
- 基准类型：基准流（`reference_flow`）
- 证据类型：`collected_record`
- 采集协议：`cp_harvest_lot`
- 数量范围：QA校验范围
  - 范围角色：QA校验（`qa_guardrail`）
  - 下限：0
  - 上限：300
  - 单位：kg/1,000 kg reference product
  - 基准：每1,000 kg基准产品或所声明内部交接
  - 基准类型：基准流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流


### 过程：清理、分级与条件性干燥 (`condition_grade_dry`)

#### 输入
##### 产品流

###### 收获大豆投入 (`harvested_beans_input`)

记录该流并保留批次、路线与去向证据。

- 选定流：收获后未整理大豆
- 流属性/单位：Mass / kg
- 数量规则：等于关联收获大豆产出
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
原始活动或阶段基准：每1,000 kg基准产品或所声明内部交接.

- 归一化基准：每声明的参考流
- 基准类型：基准流（`reference_flow`）
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_conditioning_lot`
- 数量范围：QA校验范围
  - 范围角色：QA校验（`qa_guardrail`）
  - 下限：1
  - 上限：1
  - 单位：kg input/kg linked output
  - 基准：每1,000 kg基准产品或所声明内部交接
  - 基准类型：基准流（`reference_flow`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`mass-balance-identity`
###### 交流电 (`conditioning_energy_electricity`)

实际电驱大豆清选、输送及干燥风机；干燥热源单独确认。

仅对本节点有记录的交流用电启用。该身份未特指电压、技术及供应方，须记录并选择兼容上游供应。保留实测kWh，按1 kWh = 3.6 MJ准确换算为MJ；不得将电能视为燃烧燃料或有效热。

- 选定流：交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性 / 单位：能量（数据库参考属性：净热值） `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：按`cp_conditioning_lot`仅采集归属本节点的该载能体数量。包含能耗的服务及共用量仅对账归属一次；归属量乘声明参考数量，再除以相同产品单位下匹配的最终合格产出数量。保留过程原生吞吐记录，不对最终参考量再次归一化。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：per declared reference flow
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_conditioning_lot`
- 来源：`route-energy-fao`

执行第8节`conditioning_energy_identification`要求。不继承原集合卡的数值范围或默认值。

###### 条件性工艺用水 (`conditioning_water`)

记录该流并保留批次、路线与去向证据。

- 选定流：工艺用水
- 流属性/单位：Volume / m3
- 数量规则：湿法整理时计量；否则为零
- 数值来源模式：`foreground_record`
- 适用范围：`technology_specific`
原始活动或阶段基准：每1,000 kg基准产品或所声明内部交接.

- 归一化基准：每声明的参考流
- 基准类型：基准流（`reference_flow`）
- 证据类型：`collected_record`
- 采集协议：`cp_conditioning_lot`
- 数量范围：QA校验范围
  - 范围角色：QA校验（`qa_guardrail`）
  - 下限：0
  - 上限：10
  - 单位：m3/1,000 kg reference product
  - 基准：每1,000 kg基准产品或所声明内部交接
  - 基准类型：基准流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流


##### 基本流


#### 输出
##### 产品流

###### 整理后合格大豆 (`conditioned_beans`)

记录该独立产品并保留批次、路线与去向证据。

- 选定流：整理后非播种用大豆
- 流属性/单位：Mass / kg
- 数量规则：按等级称量合格产出
- 数值来源模式：`foreground_record`
- 适用范围：`product_specific`
原始活动或阶段基准：每1,000 kg基准产品或所声明内部交接.

- 归一化基准：每声明的参考流
- 基准类型：基准流（`reference_flow`）
- 证据类型：`collected_record`
- 采集协议：`cp_conditioning_lot`
- 数量范围：QA校验范围
  - 范围角色：QA校验（`qa_guardrail`）
  - 下限：1000
  - 上限：1300
  - 单位：kg/1,000 kg reference product
  - 基准：每1,000 kg基准产品或所声明内部交接
  - 基准类型：基准流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）
###### 降级大豆 (`downgraded_beans`)

记录该独立产品并保留批次、路线与去向证据。

- 选定流：降级非播种用大豆
- 流属性/单位：Mass / kg
- 数量规则：称量可单独销售的低等级产出
- 数值来源模式：`foreground_record`
- 适用范围：`product_specific`
原始活动或阶段基准：每1,000 kg基准产品或所声明内部交接.

- 归一化基准：每声明的参考流
- 基准类型：基准流（`reference_flow`）
- 证据类型：`collected_record`
- 采集协议：`cp_conditioning_lot`
- 数量范围：QA校验范围
  - 范围角色：QA校验（`qa_guardrail`）
  - 下限：0
  - 上限：300
  - 单位：kg/1,000 kg reference product
  - 基准：每1,000 kg基准产品或所声明内部交接
  - 基准类型：基准流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 筛下物与废弃物 (`conditioning_rejects`)

记录该流并保留批次、路线与去向证据。

- 选定流：大豆筛下物与废弃物
- 流属性/单位：Mass / kg
- 数量规则：按去向称量分离质量
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
原始活动或阶段基准：每1,000 kg基准产品或所声明内部交接.

- 归一化基准：每声明的参考流
- 基准类型：基准流（`reference_flow`）
- 证据类型：`collected_record`
- 采集协议：`cp_conditioning_lot`
- 数量范围：QA校验范围
  - 范围角色：QA校验（`qa_guardrail`）
  - 下限：0
  - 上限：300
  - 单位：kg/1,000 kg reference product
  - 基准：每1,000 kg基准产品或所声明内部交接
  - 基准类型：基准流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 干燥移除水分 (`drying_water_removed`)

记录该流并保留批次、路线与去向证据。

- 选定流：大豆干燥水蒸气
- 流属性/单位：Mass / kg water
- 数量规则：干燥启用时按干物质守恒进行水分平衡
- 数值来源模式：`calculated_value`
- 适用范围：`technology_specific`
原始活动或阶段基准：每1,000 kg基准产品或所声明内部交接.

- 归一化基准：每声明的参考流
- 基准类型：基准流（`reference_flow`）
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_conditioning_lot`
- 数量范围：QA校验范围
  - 范围角色：QA校验（`qa_guardrail`）
  - 下限：0
  - 上限：500
  - 单位：kg water/1,000 kg reference product
  - 基准：每1,000 kg基准产品或所声明内部交接
  - 基准类型：基准流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程：储存、包装与交接 (`storage_handoff`)

#### 输入
##### 产品流

###### 整理后大豆投入 (`conditioned_beans_input`)

记录该流并保留批次、路线与去向证据。

- 选定流：整理后非播种用大豆
- 流属性/单位：Mass / kg
- 数量规则：等于关联整理后大豆产出
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
原始活动或阶段基准：每1,000 kg基准产品或所声明内部交接.

- 归一化基准：每声明的参考流
- 基准类型：基准流（`reference_flow`）
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_storage_handoff`
- 数量范围：QA校验范围
  - 范围角色：QA校验（`qa_guardrail`）
  - 下限：1
  - 上限：1
  - 单位：kg input/kg linked output
  - 基准：每1,000 kg基准产品或所声明内部交接
  - 基准类型：基准流（`reference_flow`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`mass-balance-identity`
###### 交流电 (`storage_energy_electricity`)

大豆批次储存期内实际电动通风、温控及搬运。

仅对本节点有记录的交流用电启用。该身份未特指电压、技术及供应方，须记录并选择兼容上游供应。保留实测kWh，按1 kWh = 3.6 MJ准确换算为MJ；不得将电能视为燃烧燃料或有效热。

- 选定流：交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性 / 单位：能量（数据库参考属性：净热值） `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：按`cp_storage_handoff`仅采集归属本节点的该载能体数量。包含能耗的服务及共用量仅对账归属一次；归属量乘声明参考数量，再除以相同产品单位下匹配的最终合格产出数量。保留过程原生吞吐记录，不对最终参考量再次归一化。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：per declared reference flow
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_storage_handoff`
- 来源：`route-energy-fao`

执行第8节`storage_energy_identification`要求。不继承原集合卡的数值范围或默认值。

##### 废物流


##### 基本流


#### 输出
##### 产品流

###### 基准大豆 (`reference_soya_beans`)

记录该流并保留批次、路线与去向证据。

- 选定流：其他大豆
- 流属性/单位：Mass / kg
原始产出计量与核对要求：恰好1,000 kg合格湿基产品

- 数量规则：1000 千克
- 数值来源模式：`fixed_value`
- 适用范围：`product_specific`
原始活动或阶段基准：每1,000 kg基准产品或所声明内部交接.

- 归一化基准：每声明的参考流
- 基准类型：基准流（`reference_flow`）
- 证据类型：`collected_record`
- 采集协议：`cp_storage_handoff`
- 数量范围：QA校验范围
  - 范围角色：QA校验（`qa_guardrail`）
  - 下限：1000
  - 上限：1000
  - 单位：kg
  - 基准：每1,000 kg基准产品或所声明内部交接
  - 基准类型：基准流（`reference_flow`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`mass-balance-identity`

##### 废物流

###### 储存损失与不合格大豆 (`storage_loss`)

记录该流并保留批次、路线与去向证据。

- 选定流：大豆储存损失与废弃物
- 流属性/单位：Mass / kg
- 数量规则：按批次和去向实测损失
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
原始活动或阶段基准：每1,000 kg基准产品或所声明内部交接.

- 归一化基准：每声明的参考流
- 基准类型：基准流（`reference_flow`）
- 证据类型：`collected_record`
- 采集协议：`cp_storage_handoff`
- 数量范围：QA校验范围
  - 范围角色：QA校验（`qa_guardrail`）
  - 下限：0
  - 上限：200
  - 单位：kg/1,000 kg reference product
  - 基准：每1,000 kg基准产品或所声明内部交接
  - 基准类型：基准流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流


## 7. 分配与联产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide` | 全部节点 | 分配前优先按田地、批次、运行和储存期细分并直接计量。 | `iso-14044` |
| `allocation_outputs` | 大豆、降级产出和残体 | 使用有记录的物理因果关系；无合理关系时采用经济分配并做敏感性分析。 | `iso-14044` |
| `allocation_shared` | 共享机械、干燥机和仓库 | 按实测时间、处理量或质量时间仅分配一次。 | `iso-14044` |
| `allocation_rework` | 返工 | 质量和负荷仅返回生产节点一次，不得同时计入合格与废弃产出。 |  |

## 8. 前景数据采集、计算与质量规则

### 完成数据集前确认具体投入身份

依据供应商规格、设备及原始记录确认本作业的实际投入。这是必需的采集要求，不是一条交换。完成数据集前，每种实际材料、配方产品、载能体或独立外购服务须分别建立物理身份具体的卡片，并记录原生数量及属性；核验兼容UUID，或明确保留未解析身份且不得宣称数据集已完整链接。不以条件式示例替代未知实际投入，不编造配方，不漏掉必需用量，不由缺失记录推定零消耗。共用投入、复用资产及服务包含项仅归属一次，保留原有阶段、期间及衔接最终参考产出的实测吞吐。原集合范围不作为单项投入上限或用量默认值。

| requirement_id | collection_protocol_id | 保留的采集范围 |
| --- | --- | --- |
| `nutrient_supply_specific_input` | `cp_crop_cycle` | 作业 crop_production：记录该流并保留批次、路线与去向证据。 原数量方法：汇总所有养分产品质量并保留组成 |
| `presentation_packaging_specific_input` | `cp_storage_handoff` | 作业 storage_handoff：记录该流并保留批次、路线与去向证据。 原数量方法：按核实复用次数调整净包装；散装为零 |


### 按实际路线确认能源身份

按实际产品状态、作业、设备及供能记录选择能源交换。下列条件式卡片不是必用或穷尽的燃料清单。逐项记录适用性、所用载能体、供应商、服务期间、原生数量及分配；对于尚未表示的实际投入，须另建物理身份具体的卡片并核验UUID。未识别投入仍是明确的完整性缺口，不得记为零或笼统能源交换。人工、环境干燥或绕过某节点的证据，仅能支持相应作业的未使用结论。即使未列示例卡，也须保留全部必需作业的调查。

区分外购供能与现场转换。自产电力通过内部连接衔接前景发电过程，其实际燃料及排放只在发电节点计入一次；同一内部转移不得再计外购电力供应。外购热亦不得重复计入供应商侧燃料。将共用电表、承包服务已含能耗与现有卡片对账，同一物理数量仅归属一次。保留原始量、输出吞吐、共用服务分配及出口后活动排除要求。逐载能体仅进行一次期间与输出归属，以相同产品单位下匹配的最终合格产出缩放至声明参考数量，不再次归一化已归一化数量。过程原生强度须通过实测吞吐衔接最终产出。这些要求不设用量默认值，也不证明数据集完整。

| requirement_id | collection_protocol_id | 必需作业及证据 |
| --- | --- | --- |
| `field_energy_identification` | `cp_crop_cycle` | 实际柴油田间机械建植及作物照护；灌溉泵动力另行确认，保留田块及作物周期归属。 原始活动或阶段基准：每1,000 kg基准产品或所声明内部交接. (`route-energy-fao`) |
| `harvest_energy_identification` | `cp_harvest_lot` | 实际柴油收获机械及出口前批次移动；人工或其他动力路线按自身证据处理，不套用本投入。 原始活动或阶段基准：每1,000 kg基准产品或所声明内部交接. (`route-energy-fao`) |
| `conditioning_energy_identification` | `cp_conditioning_lot` | 实际电驱大豆清选、输送及干燥风机；干燥热源单独确认。 原始活动或阶段基准：每1,000 kg基准产品或所声明内部交接. (`route-energy-fao`) |
| `storage_energy_identification` | `cp_storage_handoff` | 大豆批次储存期内实际电动通风、温控及搬运。 原始活动或阶段基准：每1,000 kg基准产品或所声明内部交接. (`route-energy-fao`) |


先按各采集协议保留原始场址、批次、周期及阶段数量与分母，并完成库存、损失、含水率和共产品归属核对；随后按实际归属的验收交付产品量归一化：归一化交换量 = 归属原始交换量 × 声明参考数量 / 同一边界和计量基准的验收产品量。多年生建植和共享作业先执行各自分摊规则，不得把内部转移数量设为最终参考数量。每声明的参考流指第 3 节的数量、单位和产品状态；数据包必须声明实际路线和门。


### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_crop_cycle` | `crop_production` | 投入、作物产出与损失 | 田间日志、发票、仪表、产量记录 | field_id; area; dates; prior_crop; seed; nutrients; irrigation; energy; yield; loss; residue_route | 核对记录和校准测量；原始汇总与分配：按田地汇总后按合格产出归一化 按路线确认要求：`field_energy_identification`: 实际柴油田间机械建植及作物照护；灌溉泵动力另行确认，保留田块及作物周期归属。 原始活动或阶段基准：每1,000 kg基准产品或所声明内部交接. (`route-energy-fao`) 对每项适用投入核验实际使用、设备及供能，完成数据集前须按每种实际载能体分别建立具体交换。身份或数量证据缺失仍为待补证，不记为零。区分外购供应、内部发电及承包服务包含项，仅计入一次能耗；不以条件式示例替代未核实路线。 `nutrient_supply_specific_input`: 作业 crop_production：记录该流并保留批次、路线与去向证据。 原数量方法：汇总所有养分产品质量并保留组成 依据供应商规格、设备及原始记录确认本作业的实际投入。这是必需的采集要求，不是一条交换。完成数据集前，每种实际材料、配方产品、载能体或独立外购服务须分别建立物理身份具体的卡片，并记录原生数量及属性；核验兼容UUID，或明确保留未解析身份且不得宣称数据集已完整链接。不以条件式示例替代未知实际投入，不编造配方，不漏掉必需用量，不由缺失记录推定零消耗。共用投入、复用资产及服务包含项仅归属一次，保留原有阶段、期间及衔接最终参考产出的实测吞吐。原集合范围不作为单项投入上限或用量默认值。 | ha; kg; m3; MJ | 每事件/周期 | 代表性作物年 | 每个纳入田地 | 每声明的参考流 | 文件、校准和平衡 |
| `cp_field_emissions` | `crop_production` | 农田土壤排放 | 计算表和活动记录 | N_inputs; residue_N; fixation_context; factors; method_version | 应用一种声明方法；原始汇总与分配：按物质和环境介质计算 | kg物质 | 每周期 | 与种植数据相同周期 | 每个田地 | 每声明的参考流 | 可复算公式和独立复核 |
| `cp_harvest_lot` | `harvest_thresh` | 能源、大豆、残体、废弃物 | 机械日志和称重单 | lot_id; field_id; energy; crop_mass; bean_mass; moisture; residues; rejects; destinations | 计量并称量每次交接；原始汇总与分配：按田地与路线核对 按路线确认要求：`harvest_energy_identification`: 实际柴油收获机械及出口前批次移动；人工或其他动力路线按自身证据处理，不套用本投入。 原始活动或阶段基准：每1,000 kg基准产品或所声明内部交接. (`route-energy-fao`) 对每项适用投入核验实际使用、设备及供能，完成数据集前须按每种实际载能体分别建立具体交换。身份或数量证据缺失仍为待补证，不记为零。区分外购供应、内部发电及承包服务包含项，仅计入一次能耗；不以条件式示例替代未核实路线。 | kg; MJ; % | 每批 | 完整活动 | 每项收获作业 | 每声明的参考流 | 票据、校准和批次关联 |
| `cp_conditioning_lot` | `condition_grade_dry` | 公用工程和物料平衡 | 运行表、仪表和实验结果 | lot_id; input_mass; moisture; energy; water; outputs; grade; rejects; route | 称量、计量和取样；原始汇总与分配：守恒干物质并按等级/技术汇总 按路线确认要求：`conditioning_energy_identification`: 实际电驱大豆清选、输送及干燥风机；干燥热源单独确认。 原始活动或阶段基准：每1,000 kg基准产品或所声明内部交接. (`route-energy-fao`) 对每项适用投入核验实际使用、设备及供能，完成数据集前须按每种实际载能体分别建立具体交换。身份或数量证据缺失仍为待补证，不记为零。区分外购供应、内部发电及承包服务包含项，仅计入一次能耗；不以条件式示例替代未核实路线。 | kg; MJ; m3; % | 每批/运行 | 完整活动 | 每条产线 | 每声明的参考流 | 校准、取样和闭合 |
| `cp_storage_handoff` | `storage_handoff` | 储存、包装、损失、发运 | 台账、仪表和发运记录 | lot_id; grade; masses; moisture; dates; energy; packaging; reuse; loss; gate | 关联占用、公用工程、包装和发运；原始汇总与分配：共享仓储按质量时间分配 按路线确认要求：`storage_energy_identification`: 大豆批次储存期内实际电动通风、温控及搬运。 原始活动或阶段基准：每1,000 kg基准产品或所声明内部交接. (`route-energy-fao`) 对每项适用投入核验实际使用、设备及供能，完成数据集前须按每种实际载能体分别建立具体交换。身份或数量证据缺失仍为待补证，不记为零。区分外购供应、内部发电及承包服务包含项，仅计入一次能耗；不以条件式示例替代未核实路线。 `presentation_packaging_specific_input`: 作业 storage_handoff：记录该流并保留批次、路线与去向证据。 原数量方法：按核实复用次数调整净包装；散装为零 依据供应商规格、设备及原始记录确认本作业的实际投入。这是必需的采集要求，不是一条交换。完成数据集前，每种实际材料、配方产品、载能体或独立外购服务须分别建立物理身份具体的卡片，并记录原生数量及属性；核验兼容UUID，或明确保留未解析身份且不得宣称数据集已完整链接。不以条件式示例替代未知实际投入，不编造配方，不漏掉必需用量，不由缺失记录推定零消耗。共用投入、复用资产及服务包含项仅归属一次，保留原有阶段、期间及衔接最终参考产出的实测吞吐。原集合范围不作为单项投入上限或用量默认值。 | kg; MJ; day; % | 每批/发运 | 完整声明期 | 每个仓库/场址 | 每声明的参考流 | 台账、仪表、检查和发运证据 |
| `cp_phase1_environment_coverage` | crop_production | 按实际节点的管理环境覆盖 | 场址活动方法台账 | 场址及实际管理节点；面积；有日期占用区间；共同使用者；建植/未产期历史；实际前后土地类别及转化日期/面积；碳核算覆盖；上游土地覆盖 | 按实际负责生产节点及匹配批次/期间采集原始记录，保留来源、方法适用性和不确定性。与现有协议及供应覆盖核对，不新增重复事件；不适用须明示有据，缺少证据属于缺口。 | 适用的原生活动单位、kg N或物质、面积/时间 | 事件及年度/批次核对 | 匹配生产/队列期间 | 全部实际管理生产节点 | 执行适用覆盖核算后最终归一化一次 | 原始记录、方法工作表及适用性证据 |

### 计算规则

| rule_id | 适用对象 | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize` | 全部行 | 数量/合格kg×1,000 | 数量；合格质量 | 每1,000 kg数量 | `mass-balance-identity` |
| `calc_dry_solids` | 干燥 | 投入干物质=产出干物质+实测干物质损失 | 成对质量和水分 | 移除水分与闭合 | `mass-balance-identity` |
| `calc_field_emissions` | 农田土壤 | 按物质和环境介质应用声明的现行方法 | 活动数据；因子 | kg排放 | `ipcc-2019-managed-soils` |
| `calc_storage_share` | 共享仓储 | 负荷×批次占用质量时间/总占用质量时间 | 负荷；kg；天 | 分配负荷 | `iso-14044` |
| `chemical_species_mass_accounting` | `elementary_nutrient_emissions` | 最终基本交换使用已识别物质的质量和一个实际接收环境，养分／活动台账另存：该物种的 N2O-N × 44/28 为 N2O，NH3-N × 17/14 为 NH3，硝酸盐氮 × 62/14 为硝酸盐，磷酸盐磷 × 95/31 为磷酸盐。若选定流为元素磷，则报告 kg P，仅在物种口径有据时将磷酸盐质量乘 31/95。只有方法输出按元素计时才换算一次，实测化合物质量不得再换算。总养分损失不得无据归于单一物种，土壤残余／留存养分不是排放。保留直接／间接路径台账，不重复所选方法或上游清单已经包含的路径。因子不确定性范围只按其声明基准检查因子，不是最终化合物数量或场址排放的允许界限。用合格参考数量和匹配实测产出，将可归属化合物质量归一化一次。活动量、身份或接收环境未知时保留证据缺口，不得宣称完整。 | `cp_field_emissions`; 物种特定活动量台账、方法路径和因子基准、匹配合格产出 | 按身份区分的交换和对账活动记录 |  |

### 环境覆盖计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_managed_land_coverage` | 实际管理生产节点 | 逐实际自主管理生产场址采集占用面积及有日期的占用区间，包括应归属的建植/未产期与生产期。占用量为面积乘实际时长，明确换为所选面积时间单位（1 ha=10,000 m2，时间按年）；只有每作物周期公顷数而无时长不能得到面积时间。建立、管理区间重叠时划分区间或取并集，同一面积时间只计一次，实际共同使用者份额合计为一。土地转化按声明土地利用方法，另记实际前/后土地类别、事件面积和日期；转化使用面积单位，不能与占用量相加。种植、持续占用或前土地资料缺失不能证明发生转化，也不能证明零转化。适用时保留历史事件归属及碳库/排放方法覆盖，不编造转化或通用固碳信用。分别建立兼容基本流身份，采用已核实UUID或明确未决身份，归属一次后按匹配最终参考产出归一化。外购已完成的生物投入承接兼容上游土地覆盖一次，不在本地重复。适用土地身份、面积、时长或前状态证据缺失属于完整性缺口；有据无转化可记录为不适用。 | cp_phase1_environment_coverage | 按匹配最终参考量的应归属原生环境数量 |  |

### 数据质量要求

| requirement_id | 适用对象 | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | 基准产品 | 声明非播种用途、等级、水分、状态、作物年、路线和交接点。 | 规格、检查和批次记录 |
| `dq_completeness` | 全部节点 | 覆盖至少95%实测质量及所有重要能源、水、养分、残体、损失和包装；解释其余部分。 | 核对结果 |
| `dq_temporal` | 系统 | 将一个代表性作物年与其采后批次关联，并披露平均或异常事件。 | 带日期记录 |
| `dq_route` | 替代路线 | 灌溉、干燥、等级和包装路线在透明加权前分开。 | 路线台账和权重 |
| `dq_traceability` | 交接 | 保留田地、批次、运行和储存身份。 | 关联标识符 |

## 9. 验证规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_scope` | 基准 | 拒绝播种种子和制造产品；要求一种整粒大豆等级和交接点。 |  |
| `validate_reference_uuid` | 绑定 | 仅在等级、用途、状态和交接点全部匹配时固定路线特定UUID；否则留空。 |  |
| `validate_balance` | 收获后节点 | 在测量不确定度内核对合格、降级、废弃和损失产出的干物质。 | `mass-balance-identity` |
| `validate_flow_identitys` | 产品投入 | 分别核验每种实际交换的具体流 UUID、物理状态、流属性和单位；未确认时明确保留未解析身份。 |  |
| `validate_routes` | 替代路线 | 无权重和完整路线记录时不得合并互斥路线。 |  |
| `validate_ranges` | 全部卡片 | range仅用于QA筛查，调查超限并保留有证据的前景值。 |  |

## 10. 发布数据集配置

| 字段 | 值 |
| --- | --- |
| dataset_role | 声明交接点的非播种用整粒大豆前景数据集 |
| downstream_use | 匹配食品、饲料或加工系统中的次级/背景用途 |
| allowed_use | 匹配地理、年份、路线、等级、水分、整理、储存、包装和交接点 |
| excluded_use | 播种种子、制造产品或不匹配等级/交接点 |
| required_metadata | 物种；用途；等级；地理；年份；面积；前茬；灌溉；固氮背景；投入；收获；水分；整理；储存；包装；分配；交接点；UUID状态 |
| required_quality_disclosure | 覆盖度、排除项、不确定度、记录时效、range异常、平衡闭合、分配和加权 |
| update_trigger | 路线、投入制度、产量、技术、等级、包装、分配或基准UUID可用性发生实质变化 |

## 11. 数据来源

| source_id | type | citation | reference | use |
| --- | --- | --- | --- | --- |
| `fao-soybean-production` | `official_guidance` | FAO大豆生产与收获指南 | https://www.fao.org/4/t0532e/t0532e02.htm | 种植与收获路线 |
| `fao-soybean-postharvest` | `official_guidance` | FAO《大豆采后处理汇编》 | https://www.fao.org/fileadmin/user_upload/inpho/docs/Post_Harvest_Compendium_-_SOYBEAN.pdf | 清理、干燥、分级和储存 |
| `ipcc-2019-managed-soils` | `method_factor` | IPCC 2019 Refinement, Volume 4 | https://www.ipcc-nggip.iges.or.jp/public/2019rf/vol4.html | 农田土壤排放 |
| `iso-14044` | `standard` | ISO 14044:2006 | ISO 14044:2006 | 分配 |
| `mass-balance-identity` | `method_factor` | 质量与干物质守恒 | 质量平衡恒等式 | 交接与闭合 |
| `route-energy-fao` | official_guidance | FAO, Energy-smart food for people and climate (2011), Annex 2; and Energy use in agriculture and industry, Annex IV | https://www.fao.org/4/i2454e/i2454e00.pdf ; https://www.fao.org/4/Q1085e/q1085e0d.htm | 仅支持设备及载能体可能性，适用性由现场记录确定；不采用能耗强度、燃料比例或默认组合。 |
