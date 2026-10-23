---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.palm-nuts-and-kernels
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 油棕果核和棕榈仁

## 1. 范围与适用性

本 PCR 覆盖从多年生油棕种植、鲜果串（FFB）收获、初级油厂灭菌和捣碎、纤维—果核分离、可选破核与仁壳分离，到果核或棕榈仁干燥、分级并在榨油前交接的路线。参考状态必须声明为油棕果核或分离后的棕榈仁。FFB、棕榈仁壳、粗棕榈油、精炼油、棕榈仁油及棕榈仁榨油不属于参考产品身份。凡这些流跨越所含过程边界，仍须在清单中显式记录。

受管理生产父活动为多年生油棕种植。不同种植制度只有在土地历史、作物周期、管理投入与产量分别记录时方可共存。油厂的批次、半连续和连续路线必须按运行或期间分别索引；对于同一物料批次，果核交接路线与破核路线互斥。

## 2. 产品类别身份

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.palm-nuts-and-kernels |
| classification_refs | CPC 3.0 01491; mapping relation: narrower |
| covered_products | 油棕果实的果核；分离后的油棕仁；按声明可完整或破碎，且尚未榨油 |
| excluded_products | FFB；棕榈仁壳；棕榈油；棕榈仁油；精炼油；非油棕食用树坚果；棕榈仁榨油产品 |
| representative_product | 初级油厂交接处经干燥和分级的油棕果核或分离棕榈仁 |
| production_route | 多年生种植与 FFB 收获；油厂灭菌/捣碎和压榨；纤维—果核分离；可选破核/仁壳分离；干燥与分级 |
| market_state | 工厂内生产混合；经干燥和分级、尚未榨油；声明果核/棕榈仁以及完整/破碎状态 |

种植路线按棕榈年龄阶段、土地历史、管理制度与作物周期改变清单和验证要求。油厂技术路线改变过程拓扑、用水/能源类别、运行索引、产出和质量平衡检查；所有差异均须以当前种植园或油厂记录证明。

## 3. 参考流

| Field | Value |
| --- | --- |
| What | 榨油前交付的油棕果核或分离棕榈仁 |
| How much | 在声明含水率下的 1 kg 收到态质量 |
| How well | 声明产品状态、完整/破碎状态、含水率或试验基准、等级、来源和交接门 |
| How long or cycle | 覆盖多年生作物周期的代表性年度；油厂数据采用相同或已对账的报告期 |
| reference_flow_link | accepted_reference_product |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | 声明实际状态的油棕果核或分离棕榈仁 |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | 油棕物种或声明的杂交种；果核或分离棕榈仁状态；完整或破碎；榨油前；含水率及基准；等级；地理来源；生产期间；初级油厂交接；明确排除 FFB 和棕榈仁壳 |

按所选实际物种/器官、播种或商品用途、鲜/调制/干燥及带壳状态、等级、供应方和声明交接点核对具体身份及Mass/kg支持。本PCR保留语义路线和计量定义，但不宣称一个固定UUID覆盖全部替代状态。鲜态流不能自动绑定调制/干燥产物，含义不清的果核/果仁流不能证明两种状态，商品籽不能证明播种种子身份。已有核验绑定仅用于其有据状态，否则明确保持UUID未决，直至详情确认。不得为强制匹配而改变产品边界、数量或路线。

## 4. 计量与单位规则
| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 报告收到态质量和实测含水率；仅按批次特定的含水基准换算干物质数值。 |
| `mass_balance` | mill and conditioning nodes | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 按每次运行或期间对账投入、预期产出、内部中间流、残余物、拒收物及水分变化。 |
| `period_alignment` | plantation and mill records | declared property | declared unit | 对齐建园期、未成熟期、生产期、年度作物产出、油厂运行和储存期间；披露所有时间缩放。 |

## 5. 系统边界

边界始于声明的种植园起始条件，包括多年生受管理生产、收获、FFB 交接、初级油厂调理和处理、纤维—果核分离、可选破核、干燥、分级及交接。棕榈仁榨油与下游精炼排除。共享苗圃、道路、灌溉、蒸汽/电力资产及油厂公用工程按实测使用量纳入，并仅在消费节点和期间之间归属一次。

收获独立建模，因为它从受管理棕榈中移除成熟 FFB 并形成至油厂的计量交接。灭菌/捣碎将收到的 FFB 转变为压榨产出；纤维—果核分离生成果核和纤维状态；破核生成棕榈仁和壳；干燥把可用湿物料转变为稳定状态；分级生成合格、降级/返工与拒收去向。

### 边界抽象

| Field | Value |
| --- | --- |
| declared_starting_condition | 种植园建园状态、前期土地覆盖/利用、棕榈年龄分布、种植材料、土壤/泥炭状态、地理边界和期初清单 |
| starting_condition_role | 多年生受管理生物生产和跨期归属的进入条件 |
| product_classification_scope | 属于已接受 CPC 3.0 01491 较窄映射范围的油棕果核或分离棕榈仁；本规则排除 FFB 和壳作为参考产品 |
| recursive_input_rule | 同一产品类别的外购果核或棕榈仁投入使用单独识别的上游数据集，不得在本前景数据包中递归生成 |
| upstream_dataset_requirement | 具有产品状态、含水率、来源、期间和交接信息的供应商特定数据集；须披露通用代理 |
| disclosure | 声明种植园阶段、土地历史、路线、油厂模式、果核/棕榈仁分支、破核决策、含水基准、等级、地点、期间及所有上游代理选择 |

### 边界规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_route` | all foreground nodes | 包括从种植园起始条件至干燥分级果核/棕榈仁交接的完整路线；排除棕榈仁榨油。 | `fao-palm-oil-processing` |
| `boundary_reference_exclusions` | reference identity | FFB 和棕榈仁壳可作为路线流出现，但不得满足参考流。 | `unsd-cpc-3-01491` |
| `boundary_periods` | perennial plantation | 当投入、资产或产出不同时，分开建园期、未成熟期和生产期，然后按声明的生产基准归属。 | `rspo-ghg-procedure-v4` |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| cultivation | 多年生油棕种植 | required | Always included | Managed biological production | kg standing FFB ready for harvest |
| harvest | 鲜果串收获与田间交接 | required | Always included | Independent harvest/capture | kg harvested FFB |
| mill_treatment | 初级油厂灭菌、捣碎与压榨 | required | Always included | Primary conditioning and material treatment | kg treated FFB |
| fibre_nut_separation | 纤维—果核分离 | required | Always included | Material separation | kg press cake or fibre-nut mixture |
| cracking | 破核与棕榈仁—壳分离 | conditional | Include when separated kernel is the declared reference product | Alternative treatment route | kg palm nut input |
| drying | 果核或棕榈仁干燥稳定化 | required | Always included for the declared nut or kernel state | Preservation and stabilization | kg wet nut or kernel input |
| grading | 果核或棕榈仁分级与初级油厂交接 | required | Always included | Grading and sorting | kg dried nut or kernel input |

油厂运行须识别为批次、半连续或连续。清洁、启动、停机和换产记录仅一次关联至相应运行或运行期间。返工回路仅返回实际产生节点，且不得重复计入合格产品。

### 过程：多年生油棕种植 (`cultivation`)

#### 输入
##### 产品流

###### 尿素肥料投入（`cultivation_nutrients`）

仅当声明的过程实际使用尿素肥料时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：尿素肥料
- 流属性/单位：质量 / kg 产品
- 数量规则：记录该过程和期间实际使用的尿素肥料数量；只有路线记录证明未使用时，才填零或不适用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：per kg standing FFB ready for harvest.

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cultivation_records`

###### 磷酸一铵肥料投入（`cultivation_nutrients_monoammonium_phosphate`）

仅当声明的过程实际使用磷酸一铵肥料时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：磷酸一铵肥料
- 流属性/单位：质量 / kg 产品
- 数量规则：记录该过程和期间实际使用的磷酸一铵肥料数量；只有路线记录证明未使用时，才填零或不适用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：per kg standing FFB ready for harvest.

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cultivation_records`

###### 氯化钾肥料投入（`cultivation_nutrients_potassium_chloride`）

仅当声明的过程实际使用氯化钾肥料时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：氯化钾肥料
- 流属性/单位：质量 / kg 产品
- 数量规则：记录该过程和期间实际使用的氯化钾肥料数量；只有路线记录证明未使用时，才填零或不适用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：per kg standing FFB ready for harvest.

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cultivation_records`

###### 施用的牛粪肥投入（`cultivation_nutrients_cattle_manure`）

仅当声明的过程实际使用施用的牛粪肥时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：施用的牛粪肥
- 流属性/单位：质量 / kg 产品
- 数量规则：记录该过程和期间实际使用的施用的牛粪肥数量；只有路线记录证明未使用时，才填零或不适用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：per kg standing FFB ready for harvest.

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cultivation_records`

###### 农业石灰石投入（`cultivation_nutrients_agricultural_limestone`）

仅当声明的过程实际使用农业石灰石时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：农业石灰石
- 流属性/单位：质量 / kg 产品
- 数量规则：记录该过程和期间实际使用的农业石灰石数量；只有路线记录证明未使用时，才填零或不适用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：per kg standing FFB ready for harvest.

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cultivation_records`

###### 种植灌溉用水供应（`cultivation_water`）

记录跨越种植园边界的灌溉用水；降雨不属于本产品流卡。

- 选定流：灌溉水
- 流属性/单位：Volume / m3
- 数量规则：measured delivered irrigation water
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：per kg standing FFB ready for harvest.

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cultivation_records`
- 数量范围：暂定物理 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：2
  - 单位：m3/kg standing FFB
  - 基准：per kg standing FFB ready for harvest
  - 基准类型：过程输出（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`)

###### 中压电力投入（`cultivation_energy`）

仅当声明的过程实际使用中压电力时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：中压电力
- 流属性/单位：能量 / kWh
- 数量规则：记录该过程和期间实际使用的中压电力数量；只有路线记录证明未使用时，才填零或不适用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：per kg standing FFB ready for harvest.

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cultivation_records`

###### 柴油投入（`cultivation_energy_diesel`）

仅当声明的过程实际使用柴油时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：柴油
- 流属性/单位：质量 / kg
- 数量规则：记录该过程和期间实际使用的柴油数量；只有路线记录证明未使用时，才填零或不适用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：per kg standing FFB ready for harvest.

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cultivation_records`

##### 废物流

##### 基本流

#### 输出
##### 产品流

###### 待收获的树上鲜果串（`standing_ffb`）

受管理的多年生油棕将成熟 FFB 交接至独立收获节点；这是前景系统内部中间流。

- 选定流：田间待采收的油棕鲜果串
- 流属性/单位：Mass / kg
- 数量规则：measured harvestable FFB mass
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：per kg standing FFB ready for harvest.

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cultivation_records`
- 数量范围：暂定物理 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：1
  - 单位：kg/kg standing FFB
  - 基准：per kg standing FFB ready for harvest
  - 基准类型：过程输出（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`)

##### 废物流

###### 种植园残余物与生物损失（`cultivation_residues`）

按实际去向将修剪物、未成商品果和其他非产品生物质分类为田间保留物、回收物或废物。

- 选定流：种植园残余物及损失
- 流属性/单位：Mass / kg
- 数量规则：measured or estimated dry/wet mass by declared basis
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：per kg standing FFB ready for harvest.

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cultivation_records`
- 数量范围：暂定物理 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：3
  - 单位：kg/kg standing FFB
  - 基准：per kg standing FFB ready for harvest
  - 基准类型：过程输出（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`)

##### 基本流

### 过程：鲜果串收获与田间交接 (`harvest`)

#### 输入
##### 产品流

###### 中压电力（`harvest_energy`）

仅在本过程实际使用中压电力时纳入本交换；其他实际载能体各自独立记录。采购作业服务时保留供应商边界，服务中已包含的燃料或电力不得再次计入。
原始活动或阶段基准：per kg harvested FFB。

- 选定流：中压电力
- 流属性/单位：能量 / kWh
- 数量规则：计量本过程和期间实际使用的中压电力，仅归一到声明参考输出一次；必要时使用有记录的密度、热值或仪表约定换算载能体原始单位。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_harvest_records`

###### 柴油（`harvest_energy_diesel`）

仅在本过程实际使用柴油时纳入本交换；其他实际载能体各自独立记录。采购作业服务时保留供应商边界，服务中已包含的燃料或电力不得再次计入。
原始活动或阶段基准：per kg harvested FFB。

- 选定流：柴油
- 流属性/单位：质量 / kg
- 数量规则：计量本过程和期间实际使用的柴油，仅归一到声明参考输出一次；必要时使用有记录的密度、热值或仪表约定换算载能体原始单位。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_harvest_records`

###### 来自受管理油棕的待收获 FFB（`harvestable_ffb_input`）

该内部前景中间流连接受管理生产和收获，不绑定数据库身份。

- 选定流：田间待采收的油棕鲜果串
- 流属性/单位：Mass / kg
- 数量规则：mass accepted for harvesting
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：per kg harvested FFB.

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest_records`
- 数量范围：暂定物理 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：2
  - 单位：kg/kg harvested FFB
  - 基准：per kg harvested FFB
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`)

##### 废物流

##### 基本流

#### 输出
##### 产品流

###### 交付初级油厂的已收获 FFB（`harvested_ffb`）

已收获鲜果串及时交接至油厂接收；FFB 是路线内部中间流，不是参考产品。

- 选定流：已采收的油棕鲜果串
- 流属性/单位：Mass / kg
- 数量规则：weighbridge or calibrated field-scale mass
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：per kg harvested FFB.

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest_records`
- 数量范围：暂定物理 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：1
  - 单位：kg/kg harvested FFB
  - 基准：per kg harvested FFB
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`)

##### 废物流

###### 收获损失与伴随生物质（`harvest_losses`）

按实际回收、留田或处置去向区分落果、割下的叶片和拒收果串。

- 选定流：采收损失及伴生生物质
- 流属性/单位：Mass / kg
- 数量规则：measured or sampled mass
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：per kg harvested FFB.

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest_records`
- 数量范围：暂定物理 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg/kg harvested FFB
  - 基准：per kg harvested FFB
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`)

##### 基本流

### 过程：初级油厂灭菌、捣碎与压榨 (`mill_treatment`)

#### 输入
##### 产品流

###### 油厂接收的已收获 FFB（`received_ffb`）

油厂接收内部已收获 FFB 中间流；因 FFB 明确排除为本 PCR 参考产品，所以不绑定其 UUID。

- 选定流：已采收的油棕鲜果串
- 流属性/单位：Mass / kg
- 数量规则：weighbridge mass accepted at mill
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：per kg treated FFB.

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_mill_records`
- 数量范围：暂定物理 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：1.2
  - 单位：kg/kg treated FFB
  - 基准：per kg treated FFB
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`)

###### 油厂工艺用水（`mill_water`）

按实际用量记录湿热、清洗和加工用水。

- 选定流：过程水
- 流属性/单位：Mass or volume / kg or m3
- 数量规则：metered or balance-derived water use
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：per kg treated FFB.

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_mill_records`
- 数量范围：暂定物理 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：2
  - 单位：kg/kg treated FFB
  - 基准：per kg treated FFB
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`)

###### 中压电力投入（`mill_energy`）

仅当声明的过程实际使用中压电力时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：中压电力
- 流属性/单位：能量 / kWh
- 数量规则：记录该过程和期间实际使用的中压电力数量；只有路线记录证明未使用时，才填零或不适用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：per kg treated FFB.

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_mill_records`

###### 柴油投入（`mill_energy_diesel`）

仅当声明的过程实际使用柴油时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：柴油
- 流属性/单位：质量 / kg
- 数量规则：记录该过程和期间实际使用的柴油数量；只有路线记录证明未使用时，才填零或不适用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：per kg treated FFB.

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_mill_records`

##### 废物流

##### 基本流

#### 输出
##### 产品流

###### 粗棕榈油联产品（`crude_palm_oil`）

捣碎和压榨产生的粗棕榈油是必须明确归属的预期联产品。

- 选定流：粗棕榈油 `c25748fe-ebcf-4a0e-bcf9-544edb1645b1`
- 流属性/单位：Mass / kg
- 数量规则：measured crude palm oil mass at its hand-off
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：per kg treated FFB.

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_mill_records`
- 数量范围：暂定物理 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.4
  - 单位：kg/kg treated FFB
  - 基准：per kg treated FFB
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`)

###### 供分离的纤维—果核混合物（`fibre_nut_mix`）

该流是油厂处理节点的预期产出，也是交接至纤维—果核分离的内部压榨饼中间物。

- 选定流：纤维与果核混合物
- 流属性/单位：Mass / kg
- 数量规则：measured or mass-balance-derived mixture mass
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：per kg treated FFB.

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_mill_records`
- 数量范围：暂定物理 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.5
  - 单位：kg/kg treated FFB
  - 基准：per kg treated FFB
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`)

##### 废物流

###### 空果串与油厂拒收物（`mill_residues`）

按实际利用、回收或处置去向记录空果串和拒收物，不得默认赋予零负荷。

- 选定流：空果串及油厂拒收物
- 流属性/单位：Mass / kg
- 数量规则：measured residue mass by fate
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：per kg treated FFB.

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_mill_records`
- 数量范围：暂定物理 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.5
  - 单位：kg/kg treated FFB
  - 基准：per kg treated FFB
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`)

##### 基本流

### 过程：纤维—果核分离 (`fibre_nut_separation`)

#### 输入
##### 产品流

###### 接收的纤维—果核混合物（`separation_feed`）

内部压榨饼混合物由油厂处理节点交接至本节点。

- 选定流：纤维与果核混合物
- 流属性/单位：Mass / kg
- 数量规则：measured feed mass
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：per kg separation feed.

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_separation_records`
- 数量范围：暂定物理 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：1
  - 单位：kg/kg separation feed
  - 基准：per kg separation feed
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`)

###### 中压电力（`separation_energy`）

仅在本过程实际使用中压电力时纳入本交换；其他实际载能体各自独立记录。采购作业服务时保留供应商边界，服务中已包含的燃料或电力不得再次计入。
原始活动或阶段基准：per kg separation feed。

- 选定流：中压电力
- 流属性/单位：能量 / kWh
- 数量规则：计量本过程和期间实际使用的中压电力，仅归一到声明参考输出一次；必要时使用有记录的密度、热值或仪表约定换算载能体原始单位。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_separation_records`

###### 柴油（`separation_energy_diesel`）

仅在本过程实际使用柴油时纳入本交换；其他实际载能体各自独立记录。采购作业服务时保留供应商边界，服务中已包含的燃料或电力不得再次计入。
原始活动或阶段基准：per kg separation feed。

- 选定流：柴油
- 流属性/单位：质量 / kg
- 数量规则：计量本过程和期间实际使用的柴油，仅归一到声明参考输出一次；必要时使用有记录的密度、热值或仪表约定换算载能体原始单位。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_separation_records`

##### 废物流

##### 基本流

#### 输出
##### 产品流

###### 供干燥或破核的分离油棕果核（`separated_palm_nuts`）

分离果核作为内部产品中间流交接至果核干燥或条件性破核路线。

- 选定流：分离后的油棕果核
- 流属性/单位：Mass / kg
- 数量规则：measured separated nut mass
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：per kg separation feed.

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_separation_records`
- 数量范围：暂定物理 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg/kg separation feed
  - 基准：per kg separation feed
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`)

###### 果肉纤维联产品或回收燃料（`mesocarp_fibre`）

按实际预期用途与交接对分离纤维分类；用于外售或内部回收的纤维在归属中保持一致。

- 选定流：棕榈果肉纤维 `a9b37001-a69f-4d00-bf11-6ce763cac036`
- 流属性/单位：Mass / kg
- 数量规则：measured separated fibre mass
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：per kg separation feed.

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_separation_records`
- 数量范围：暂定物理 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg/kg separation feed
  - 基准：per kg separation feed
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`)

##### 废物流

##### 基本流

### 过程：破核与棕榈仁—壳分离 (`cracking`)

#### 输入
##### 产品流

###### 供破核的分离油棕果核（`nuts_for_cracking`）

仅当参考状态为棕榈仁时，内部果核中间流才进入破核。

- 选定流：分离后的油棕果核
- 流属性/单位：Mass / kg
- 数量规则：measured nut feed mass
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：per kg nut feed.

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cracking_records`
- 数量范围：暂定物理 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：1
  - 单位：kg/kg nut feed
  - 基准：per kg nut feed
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`)

###### 仁壳分离用水（`cracking_water`）

采用水力旋流器或黏土浴技术时，纳入其分离用水。

- 选定流：过程水
- 流属性/单位：Mass or volume / kg or m3
- 数量规则：metered water use
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`technology_specific`）
原始活动或阶段基准：per kg nut feed.

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cracking_records`
- 数量范围：暂定物理 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：5
  - 单位：kg/kg nut feed
  - 基准：per kg nut feed
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`)

###### 中压电力（`cracking_energy`）

仅在本过程实际使用中压电力时纳入本交换；其他实际载能体各自独立记录。采购作业服务时保留供应商边界，服务中已包含的燃料或电力不得再次计入。
原始活动或阶段基准：per kg nut feed。

- 选定流：中压电力
- 流属性/单位：能量 / kWh
- 数量规则：计量本过程和期间实际使用的中压电力，仅归一到声明参考输出一次；必要时使用有记录的密度、热值或仪表约定换算载能体原始单位。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_cracking_records`

###### 柴油（`cracking_energy_diesel`）

仅在本过程实际使用柴油时纳入本交换；其他实际载能体各自独立记录。采购作业服务时保留供应商边界，服务中已包含的燃料或电力不得再次计入。
原始活动或阶段基准：per kg nut feed。

- 选定流：柴油
- 流属性/单位：质量 / kg
- 数量规则：计量本过程和期间实际使用的柴油，仅归一到声明参考输出一次；必要时使用有记录的密度、热值或仪表约定换算载能体原始单位。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_cracking_records`

##### 废物流

##### 基本流

#### 输出
##### 产品流

###### 分离棕榈仁（`separated_kernels`）

分离棕榈仁作为内部中间流交接至干燥；棕榈仁榨油位于边界之外。

- 选定流：分离后的棕榈仁
- 流属性/单位：Mass / kg
- 数量规则：measured kernel mass
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：per kg nut feed.

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cracking_records`
- 数量范围：暂定物理 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg/kg nut feed
  - 基准：per kg nut feed
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`)

###### 棕榈仁壳联产品或残余物（`kernel_shell`）

按实际预期用途与交接对破核生成的壳分类，且绝不将其用作参考产品。

- 选定流：棕榈仁壳 `ac6ce69c-ddd1-400d-a603-901313253baa`
- 流属性/单位：Mass / kg
- 数量规则：measured shell mass
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：per kg nut feed.

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cracking_records`
- 数量范围：暂定物理 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg/kg nut feed
  - 基准：per kg nut feed
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`)

##### 废物流

##### 基本流

### 过程：果核或棕榈仁干燥稳定化 (`drying`)

#### 输入
##### 产品流

###### 湿果核或棕榈仁进料（`wet_nut_kernel`）

内部状态须明确选择为分离油棕果核或分离棕榈仁；未经对账不得混合。

- 选定流：湿油棕果核或棕榈仁
- 流属性/单位：Mass / kg
- 数量规则：measured wet feed mass
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`product_specific`）
原始活动或阶段基准：per kg wet nut or kernel feed.

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_drying_records`
- 数量范围：暂定物理 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：1
  - 单位：kg/kg wet feed
  - 基准：per kg wet nut or kernel feed
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`)

###### 中压电力（`drying_energy`）

仅在本过程实际使用中压电力时纳入本交换；其他实际载能体各自独立记录。采购作业服务时保留供应商边界，服务中已包含的燃料或电力不得再次计入。
原始活动或阶段基准：per kg wet nut or kernel feed。

- 选定流：中压电力
- 流属性/单位：能量 / kWh
- 数量规则：计量本过程和期间实际使用的中压电力，仅归一到声明参考输出一次；必要时使用有记录的密度、热值或仪表约定换算载能体原始单位。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_drying_records`

###### 柴油（`drying_energy_diesel`）

仅在本过程实际使用柴油时纳入本交换；其他实际载能体各自独立记录。采购作业服务时保留供应商边界，服务中已包含的燃料或电力不得再次计入。
原始活动或阶段基准：per kg wet nut or kernel feed。

- 选定流：柴油
- 流属性/单位：质量 / kg
- 数量规则：计量本过程和期间实际使用的柴油，仅归一到声明参考输出一次；必要时使用有记录的密度、热值或仪表约定换算载能体原始单位。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_drying_records`

###### 购入蒸汽（`drying_energy_steam`）

仅在本过程实际使用购入蒸汽时纳入本交换；其他实际载能体各自独立记录。采购作业服务时保留供应商边界，服务中已包含的燃料或电力不得再次计入。
原始活动或阶段基准：per kg wet nut or kernel feed。

- 选定流：购入蒸汽
- 流属性/单位：能量 / MJ
- 数量规则：计量本过程和期间实际使用的购入蒸汽，仅归一到声明参考输出一次；必要时使用有记录的密度、热值或仪表约定换算载能体原始单位。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_drying_records`

##### 废物流

##### 基本流

#### 输出
##### 产品流

###### 干燥稳定化的果核或棕榈仁（`dried_nut_kernel`）

干燥后的果核或棕榈仁交接至分级，并声明产品状态和含水基准。

- 选定流：干燥后的油棕果核或棕榈仁
- 流属性/单位：Mass / kg
- 数量规则：measured dry product mass
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`product_specific`）
原始活动或阶段基准：per kg wet nut or kernel feed.

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_drying_records`
- 数量范围：暂定物理 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg/kg wet feed
  - 基准：per kg wet nut or kernel feed
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`)

##### 废物流

##### 基本流

### 过程：果核或棕榈仁分级与初级油厂交接 (`grading`)

#### 输入
##### 产品流

###### 供分级的干燥果核或棕榈仁（`grading_feed`）

按产品状态和声明含水基准将干燥内部中间流送入分选。

- 选定流：干燥后的油棕果核或棕榈仁
- 流属性/单位：Mass / kg
- 数量规则：measured grading feed mass
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`product_specific`）
原始活动或阶段基准：per kg grading feed.

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_grading_records`
- 数量范围：暂定物理 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：1
  - 单位：kg/kg grading feed
  - 基准：per kg grading feed
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`)

###### 中压电力（`grading_energy`）

仅在本过程实际使用中压电力时纳入本交换；其他实际载能体各自独立记录。采购作业服务时保留供应商边界，服务中已包含的燃料或电力不得再次计入。
原始活动或阶段基准：per kg grading feed。

- 选定流：中压电力
- 流属性/单位：能量 / kWh
- 数量规则：计量本过程和期间实际使用的中压电力，仅归一到声明参考输出一次；必要时使用有记录的密度、热值或仪表约定换算载能体原始单位。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_grading_records`

###### 柴油（`grading_energy_diesel`）

仅在本过程实际使用柴油时纳入本交换；其他实际载能体各自独立记录。采购作业服务时保留供应商边界，服务中已包含的燃料或电力不得再次计入。
原始活动或阶段基准：per kg grading feed。

- 选定流：柴油
- 流属性/单位：质量 / kg
- 数量规则：计量本过程和期间实际使用的柴油，仅归一到声明参考输出一次；必要时使用有记录的密度、热值或仪表约定换算载能体原始单位。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_grading_records`

##### 废物流

##### 基本流

#### 输出
##### 产品流

###### 合格油棕果核或分离棕榈仁（`accepted_reference_product`）

合格分级物是唯一参考输出：榨油前的油棕果核或分离棕榈仁，绝非 FFB 或棕榈仁壳。

- 选定流：声明实际状态的油棕果核或分离棕榈仁
- 流属性/单位：Mass / kg
原始产出计量与核对要求：measured accepted product mass

- 数量规则：1 千克
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`product_specific`）
原始活动或阶段基准：per kg grading feed.

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_grading_records`
- 数量范围：暂定物理 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg/kg grading feed
  - 基准：per kg grading feed
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`)

身份适用性：按所选实际物种/器官、播种或商品用途、鲜/调制/干燥及带壳状态、等级、供应方和声明交接点核对具体身份及Mass/kg支持。本PCR保留语义路线和计量定义，但不宣称一个固定UUID覆盖全部替代状态。鲜态流不能自动绑定调制/干燥产物，含义不清的果核/果仁流不能证明两种状态，商品籽不能证明播种种子身份。已有核验绑定仅用于其有据状态，否则明确保持UUID未决，直至详情确认。不得为强制匹配而改变产品边界、数量或路线。

###### 降级或返工物料（`grading_downgrade`）

将送回再干燥、再分选或声明低等级去向的非合格物料与合格产出分开追踪。

- 选定流：降级或待返工的油棕果核或棕榈仁
- 流属性/单位：Mass / kg
- 数量规则：measured downgraded mass by destination
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：per kg grading feed.

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_grading_records`
- 数量范围：暂定物理 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg/kg grading feed
  - 基准：per kg grading feed
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`)

##### 废物流

###### 分级拒收物与杂质（`grading_rejects`）

按最终回收或处置去向记录离开产品路线的拒收物。

- 选定流：分级拒收物及杂质
- 流属性/单位：Mass / kg
- 数量规则：measured reject mass by fate
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：per kg grading feed.

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_grading_records`
- 数量范围：暂定物理 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg/kg grading feed
  - 基准：per kg grading feed
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`)

##### 基本流


## 7. 分配与联产品处理

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | plantation and mill | 首先细分可独立计量的种植区块、油厂节点、运行和产品路线；不得分配已经可分离的负荷。 | `iso-14044-2006` |
| `allocation_multi_output` | crude palm oil, nut/kernel, fibre, shell and other intended outputs | 列举所有预期产出与交接。无法通过细分避免分配时，使用有文件支持的物理因果关系；仅在无合理物理关系时使用经济分配，并披露价格、期间和敏感性。 | `iso-14044-2006`; `fao-palm-oil-processing` |
| `allocation_period` | perennial crop and shared assets | 按声明的生产产出或服务基准，仅一次归属建园期、未成熟期和共享基础设施负荷；记录分期决策并防止重复归属。 | `rspo-ghg-procedure-v4` |
| `allocation_rework` | downgraded and rejected material | 返工保留产生节点负荷，仅增加返工增量负荷；合格产出排除未回收拒收物。按实际去向一致地将回收残余物分类为预期产出、残余物或废物。 |  |
| `allocation_shared_runs` | batch and continuous mill operation | 清洁、启动、停机与共享公用工程仅一次归属至相应运行或运行期间，并记录驱动因子和对账。 |  |

## 8. 前景数据采集、计算与质量规则

清单完整性：具名条件卡是单项交换示例，不是穷尽配方，也不要求使用这些产品。完成前景数据包前，逐项列出所有实际种植材料、养分产品、作物保护制剂、资产材料、作业服务、载能体、包装材料、废物流及适用的基本物质，使用明确的物理身份、状态、原始属性/单位、来源或接收区室及实测或按方法计算的数量。身份或数量缺失属于完整性缺口，不得假定为零。保留实际批次和阶段基准；不得将中间转移累加为额外最终产出，也不得重复计入采购服务已包含的负荷。

先按各采集协议保留原始场址、批次、周期及阶段数量与分母，并完成库存、损失、含水率和共产品归属核对；随后按实际归属的验收交付产品量归一化：归一化交换量 = 归属原始交换量 × 声明参考数量 / 同一边界和计量基准的验收产品量。多年生建植和共享作业先执行各自分摊规则，不得把内部转移数量设为最终参考数量。每声明的参考流指第 3 节的数量、单位和产品状态；数据包必须声明实际路线和门。


### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_cultivation_records | cultivation | all linked flow roles | measurement/log | mass, carrier, time, lot, product state, moisture, destination | meter, weighbridge, invoice, batch log or reconciled mass balance；原始汇总与分配：sum by lot/run, reconcile inputs and outputs, then normalize to linked basis | declared card unit | per batch or operating day | representative annual period including crop cycle | all included estates and mill lines | 每声明的参考流 | calibration, invoice, lot id and reconciliation residual |
| cp_harvest_records | harvest | all linked flow roles | measurement/log | mass, carrier, time, lot, product state, moisture, destination | meter, weighbridge, invoice, batch log or reconciled mass balance；原始汇总与分配：sum by lot/run, reconcile inputs and outputs, then normalize to linked basis | declared card unit | per batch or operating day | representative annual period including crop cycle | all included estates and mill lines | 每声明的参考流 | calibration, invoice, lot id and reconciliation residual |
| cp_mill_records | mill_treatment | all linked flow roles | measurement/log | mass, carrier, time, lot, product state, moisture, destination | meter, weighbridge, invoice, batch log or reconciled mass balance；原始汇总与分配：sum by lot/run, reconcile inputs and outputs, then normalize to linked basis | declared card unit | per batch or operating day | representative annual period including crop cycle | all included estates and mill lines | 每声明的参考流 | calibration, invoice, lot id and reconciliation residual |
| cp_mill_calculation | mill_treatment | calculated or reconciled flows | calculated record | measured inputs, outputs, moisture change and residual | run-level reconciled mass balance；原始汇总与分配：calculate from linked run records and retain the residual | declared card unit | per run | representative annual period including crop cycle | all included mill lines | 每声明的参考流 | linked measurements and calculation record |
| cp_separation_records | fibre_nut_separation | all linked flow roles | measurement/log | mass, carrier, time, lot, product state, moisture, destination | meter, weighbridge, invoice, batch log or reconciled mass balance；原始汇总与分配：sum by lot/run, reconcile inputs and outputs, then normalize to linked basis | declared card unit | per batch or operating day | representative annual period including crop cycle | all included estates and mill lines | 每声明的参考流 | calibration, invoice, lot id and reconciliation residual |
| cp_cracking_records | cracking | all linked flow roles | measurement/log | mass, carrier, time, lot, product state, moisture, destination | meter, weighbridge, invoice, batch log or reconciled mass balance；原始汇总与分配：sum by lot/run, reconcile inputs and outputs, then normalize to linked basis | declared card unit | per batch or operating day | representative annual period including crop cycle | all included estates and mill lines | 每声明的参考流 | calibration, invoice, lot id and reconciliation residual |
| cp_drying_records | drying | all linked flow roles | measurement/log | mass, carrier, time, lot, product state, moisture, destination | meter, weighbridge, invoice, batch log or reconciled mass balance；原始汇总与分配：sum by lot/run, reconcile inputs and outputs, then normalize to linked basis | declared card unit | per batch or operating day | representative annual period including crop cycle | all included estates and mill lines | 每声明的参考流 | calibration, invoice, lot id and reconciliation residual |
| cp_grading_records | grading | all linked flow roles | measurement/log | mass, carrier, time, lot, product state, moisture, destination | meter, weighbridge, invoice, batch log or reconciled mass balance；原始汇总与分配：sum by lot/run, reconcile inputs and outputs, then normalize to linked basis | declared card unit | per batch or operating day | representative annual period including crop cycle | all included estates and mill lines | 每声明的参考流 | calibration, invoice, lot id and reconciliation residual |
| `cp_phase1_environment_coverage` | cultivation | 按实际节点的管理环境覆盖 | 场址活动方法台账 | 实际生产节点；土壤/介质路线；气候土壤；肥料产品量及组成；残体去向及氮；相关矿化/有机土/排泄活动；方法层级方程版本；路径因子及单位；石灰尿素；实际燃料；物质/环境；供应覆盖; 场址及实际管理节点；面积；有日期占用区间；共同使用者；建植/未产期历史；实际前后土地类别及转化日期/面积；碳核算覆盖；上游土地覆盖 | 按实际负责生产节点及匹配批次/期间采集原始记录，保留来源、方法适用性和不确定性。与现有协议及供应覆盖核对，不新增重复事件；不适用须明示有据，缺少证据属于缺口。 | 适用的原生活动单位、kg N或物质、面积/时间 | 事件及年度/批次核对 | 匹配生产/队列期间 | 全部实际管理生产节点 | 执行适用覆盖核算后最终归一化一次 | 原始记录、方法工作表及适用性证据 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_moisture_conversion` | nut/kernel mass | 干质量 = 收到态质量 ×（1 − 含水率）；反向换算使用目标含水率 | 收到态质量；含水率；试验基准 | 干质量或调整后的收到态质量 |  |
| `calc_mass_balance` | each mill node | 残差 = 投入质量 + 辅助材料质量 − 预期产出 − 残余物/废物 − 实测水分损失 | 按运行关联的质量记录 | 对账残差及百分比 | `fao-palm-oil-processing` |
| `calc_period_attribution` | plantation phases and shared infrastructure | 归属负荷 = 期间负荷 × 声明的分配份额 ÷ 合格参考产品质量 | 阶段/运行负荷；服务或产出驱动因子；合格质量 | 每 kg 参考产品负荷 | `rspo-ghg-procedure-v4` |

### 环境覆盖计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_managed_environment_coverage` | 实际管理生产节点 | 针对实际自主管理生产节点，逐项记录土壤直接 N2O、挥发/沉降间接 N2O、淋溶/径流间接 N2O、NH3/NOx 与养分损失，以及实际施石灰/尿素 CO2 的适用性。主核算依次采用有代表性的路径实测、经验证且适用于作物/土壤/管理的场址或国家方法；否则 N2O 与石灰/尿素 CO2 采用适用的2006 IPCC及2019修订管理土壤方程，按气候和投入类别选因子。保留确切版本、方程、层级、活动量及因子单位和气候/管理适用性，不规定通用剂量或因子。无土/设施路线须采用适用于实际介质的方法，不强套土壤因子。化肥、有机投入、残体、实际相关矿化/有机土和排泄物路径使用同一田块期间氮台账；路径不适用须证明，缺数不能填零。直接及各间接分量分别计算，逐项只分配到匹配的现有或新增具体卡一次，不将总量与组成重复相加。N2O-N 乘44/28转分子 N2O 一次。NH3、NOx及养分/农药损失采用适用实测或有据物质/去向模型；总N/P或未解释平衡差不等于某化合物释放。保留实际接收环境及分子、元素或报告口径，间接形成不能在来源台账再扣同一氮。实际本地燃烧另按燃料特定的燃烧方法记录；外购电、热和服务承接上游覆盖一次。有据释放按具体身份建卡，复用现有匹配卡，采用已核实UUID或明确未决身份。适用方法、活动量、因子或身份缺失会阻止完整性，不构成有据零值；原始活动/释放总量归属后按匹配合格参考产出归一化一次。 | cp_phase1_environment_coverage | 按匹配最终参考量的应归属原生环境数量 | `review-ipcc-soils-2019` |
| `calc_managed_land_coverage` | 实际管理生产节点 | 逐实际自主管理生产场址采集占用面积及有日期的占用区间，包括应归属的建植/未产期与生产期。占用量为面积乘实际时长，明确换为所选面积时间单位（1 ha=10,000 m2，时间按年）；只有每作物周期公顷数而无时长不能得到面积时间。建立、管理区间重叠时划分区间或取并集，同一面积时间只计一次，实际共同使用者份额合计为一。土地转化按声明土地利用方法，另记实际前/后土地类别、事件面积和日期；转化使用面积单位，不能与占用量相加。种植、持续占用或前土地资料缺失不能证明发生转化，也不能证明零转化。适用时保留历史事件归属及碳库/排放方法覆盖，不编造转化或通用固碳信用。分别建立兼容基本流身份，采用已核实UUID或明确未决身份，归属一次后按匹配最终参考产出归一化。外购已完成的生物投入承接兼容上游土地覆盖一次，不在本地重复。适用土地身份、面积、时长或前状态证据缺失属于完整性缺口；有据无转化可记录为不适用。 | cp_phase1_environment_coverage | 按匹配最终参考量的应归属原生环境数量 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | reference output | 保留物种/杂交种、果核/棕榈仁状态、完整/破碎状态、榨油前状态、含水率、等级、来源、期间和交接证据。 | 批次规格和分级记录 |
| `dq_completeness` | all processes | 覆盖所有纳入的种植园和油厂生产线；量化缺失数据并解释每项质量平衡残差和截断。 | 覆盖登记与对账 |
| `dq_temporal` | perennial and mill data | 使用代表性年度，并记录阶段缩放、跨期储存和运行期间对齐。 | 带日期的种植园和批次记录 |
| `dq_calibration` | measured flows | 保存秤、仪表和含水率实验室测试的校准状态或供应商发票证据。 | 校准和发票记录 |

## 9. 验证规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | reference flow | 按所选实际物种/器官、播种或商品用途、鲜/调制/干燥及带壳状态、等级、供应方和声明交接点核对具体身份及Mass/kg支持。本PCR保留语义路线和计量定义，但不宣称一个固定UUID覆盖全部替代状态。鲜态流不能自动绑定调制/干燥产物，含义不清的果核/果仁流不能证明两种状态，商品籽不能证明播种种子身份。已有核验绑定仅用于其有据状态，否则明确保持UUID未决，直至详情确认。不得为强制匹配而改变产品边界、数量或路线。 | `unsd-cpc-3-01491` |
| `validate_route` | process map | 要求种植、收获、油厂处理、纤维—果核分离、干燥和分级；仅分离棕榈仁分支要求破核，并禁止棕榈仁榨油。 | `fao-palm-oil-processing` |
| `validate_mass_balance` | every treatment/conditioning run | 检查投入与预期产出、中间流、残余物、拒收物及水分变化；调查超出流卡 QA 范围的值。 | `fao-palm-oil-processing` |
| `validate_multi_output` | intended outputs | 要求粗棕榈油、合格果核/棕榈仁、纤维、壳及任何其他预期产出具有列明的交接和一个明确归属决策。 | `iso-14044-2006` |
| `validate_period_and_assets` | plantation phases and shared infrastructure | 要求阶段/运行关联，并验证每项共享负荷仅归属一次。 | `rspo-ghg-procedure-v4` |
| `validate_mode_rework` | batch/continuous runs and grading | 要求运行索引、清洁/换产归属、返工去向，并从合格产出中排除拒收物。 |  |

## 10. 发布数据集配置

| Field | Value |
| --- | --- |
| dataset_role | 榨油前油棕果核或分离棕榈仁的前景生产数据集 |
| downstream_use | `secondary_dataset`；当地理、种植园阶段、油厂路线及产品状态相符时可作 `background_dataset` |
| allowed_use | 使用声明状态和交接门的油棕果核/棕榈仁供应及下游榨油 LCA |
| excluded_use | FFB 供应；棕榈仁壳供应；棕榈油或棕榈仁油生产；精炼油；遗漏声明限定词或纳入的上游种植负荷的路线 |
| required_metadata | 物种/杂交种；来源；种植园和油厂；土地历史；棕榈年龄/阶段；期间；油厂模式；果核/棕榈仁分支；破核路线；含水率及基准；等级；完整/破碎状态；分配方法；交接 |
| required_quality_disclosure | 覆盖率、原始数据占比、缺失数据、替代数据、质量平衡残差、时间缩放、分配敏感性及暂定范围替换情况 |
| update_trigger | 路线、技术、种植园阶段、土地历史、产出组合、分配、含水率/等级规格、来源或 UUID 身份发生实质变化 |

## 11. 数据来源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-01491` | official_guidance | https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | CPC 边界与油棕果核/棕榈仁身份 |
| `fao-palm-oil-processing` | handbook | https://www.fao.org/4/y4355e/y4355e04.htm | 初级油厂顺序、纤维—果核分离、破核、仁壳分离和干燥 |
| `iso-14044-2006` | standard | ISO 14044:2006, Environmental management — Life cycle assessment — Requirements and guidelines | 分配层级与透明度 |
| `rspo-ghg-procedure-v4` | official_guidance | https://rspo.org/endorsed-greenhouse-gas-ghg-assessment-procedure-v4/ | 种植园起始条件、土地/泥炭背景和期间披露 |
| `review-ipcc-soils-2019` | official_guidance | IPCC 2019 Refinement, Volume 4, Chapter 11, https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch11_Soils_N2O_CO2.pdf | 管理土壤直接/间接N2O及石灰/尿素CO2方法语境；因子须匹配实际适用性及场址活动，不是产品默认值。 |
