---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.coconut-oil-refined
language: zh-CN
sync_with: pcr.en-US.md
status: candidate
---

# 精炼椰子油

## 1. 范围与适用性

本 PCR 适用于采用已声明的化学精炼或物理精炼路线，在精炼厂出厂的散装精炼椰子油。前景范围从精炼厂接收粗椰子油开始，包括与实际路线相符的预处理、脱胶或碱炼、脱色与过滤、脱臭、精滤、冷却以及散装储存或装载。

本类别包括由 *Cocos nucifera* L. 椰仁制得、用于食用市场或已声明工业市场且数据集明确适用产品规范的精炼椰子油。不包括粗椰子油、初榨或冷榨椰子油、氢化或酯交换产品、椰子油分提产品、中链甘油三酯制品、调和油、配方消费品、零售包装、配送、使用及生命末期。椰子种植、椰干制备和粗油生产属于上游背景系统；除非声明的研究边界明确扩展，否则不纳入精炼厂前景过程。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.coconut-oil-refined |
| classification_refs | CPC 3.0：21662，精炼椰子油（精确映射语境） |
| covered_products | 采用已声明化学或物理精炼路线生产的散装精炼椰子油；符合所声明规范的食用级或已声明工业级物料 |
| excluded_products | 粗制、初榨、冷榨、氢化、酯交换、分提、调和、配方或零售包装椰子油产品；分离的中链甘油三酯制品 |
| representative_product | 精炼厂厂门处的散装精炼椰子油 |
| production_route | 接收粗椰子油；路线特定的预处理及脱胶或碱炼；脱色与过滤；脱臭；精滤、冷却及散装储存/装载 |
| market_state | 精炼厂厂门处的散装精炼成品油，须声明食用级或工业级及包装状态 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 在精炼厂厂门提供散装精炼椰子油 |
| How much | 1 kg 精炼椰子油净质量 |
| How well | 由椰仁制得，符合已声明的食用级或工业级规范及已声明污染物控制要求的精炼椰子油 |
| How long or cycle | 在精炼厂厂门交付的一个生产批次；不适用服务持续时间 |
| reference_flow_link | `deodorization_finishing` 输出的 1 kg 已声明精炼椰子油成品 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | Coconut oil, refined `570397b9-62ae-4576-b584-56691c7fed08` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 椰子来源；精炼状态；化学或物理精炼路线；食用级或工业级；适用产品规范；生产场址与地理；批次或平均期；散装或包装状态；回收油、皂脚、废白土和脱臭馏出物的分配处理 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 精炼椰子油成品参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 报告不含容器的产品净质量，并将全部清单结果归一化为精炼厂厂门处恰好 1 kg 合格精炼椰子油。 |
| `wet_mass_and_dry_matter` | 粗油、白土、皂脚、废白土及其他含水物料流 | Mass | kg | 记录接收态质量；当含水率实质影响平衡或分配时，保留水分或干物质比例及取样方法，不得混用湿基与干基。 |
| `energy_carrier_units` | 外购电力、燃料和蒸汽 | Energy or carrier-specific property | 按采集值使用 kWh、MJ 或 kg steam | 保留发票或仪表单位；声明燃料低位/高位热值约定，仅使用有明确因子和来源的换算。 |
| `water_accounting` | 工艺水、洗涤水、冷却水和锅炉给水 | Volume or Mass | m3 或 kg | 区分取水、循环、蒸发和废水排放；循环水每次循环不得重复计为新取水。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 精炼厂入口接收的粗椰子油；在可得时声明来源、供应商、水分、游离脂肪酸及相关前体信息 |
| starting_condition_role | 精炼厂前景系统的上游产品投入 |
| product_classification_scope | 仅限精炼椰子油；中间体保留为过程衔接产品流，不形成独立的精炼椰子油参考产品 |
| recursive_input_rule | 精炼椰子油在厂内返工时，将其记录为单独识别的返工投入，且不得重复计算其先前负荷；外购精炼椰子油必须采用上游数据集，不得表示为粗椰子油。 |
| upstream_dataset_requirement | 粗椰子油须采用地理、时间和技术均具有代表性的上游数据集，并声明是否包括种植、椰干制备、提油、运输及储存。 |
| disclosure | 声明精炼路线、批次或平均期、场址地理、粗油来源与质量、产品等级/规范、共产品与废物去向、处理系统、分配选择、循环回用及任何排除过程。 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_refinery_gate` | 精炼厂前景系统 | 纳入从粗油接收至与路线相符的脱胶或碱炼、脱色、脱臭、精滤、冷却以及散装储存/装载的全部物质和能源流；包装与下游配送默认排除，除非另行声明。 | `codex-cxc-79-2019`; `eu-fdm-bat-2019` |
| `boundary_route_disclosure` | 化学和物理精炼路线 | 按实际路线建模：化学精炼在实际执行时包括碱炼，物理精炼不含碱炼而依靠脱胶、脱色和脱臭；不同路线清单不得在没有产量加权计算时合并。 | `codex-cxc-79-2019` |
| `boundary_environmental_streams` | 资源与排放清单 | 在最合适的过程或装置层级纳入水、能源、原材料、废水、废气、残余物、回收物料及处理操作。 | `eu-fdm-bat-2019` |
| `boundary_contaminant_control` | 脱胶、脱色、脱臭及任何后精炼处理 | 记录实质影响 3-MCPDE 和 GE 形成的工艺条件与附加处理；不得假定不同油种或设备适用完全相同的减缓措施。 | `codex-cxc-79-2019` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `receipt_pretreatment` | 粗油接收与预处理 | `required` | 始终纳入 | 精炼前接收、储存、加热、洗涤或调理 | 转移的调理粗油 kg |
| `degumming_neutralization` | 脱胶与化学碱炼 | `conditional` | 纳入实际执行的各操作；物理精炼路线通常不含碱炼 | 去除磷脂、游离脂肪酸、皂及前体化合物 | 转移的处理油 kg |
| `bleaching_filtration` | 脱色与过滤 | `required` | 始终纳入；白土类型及任何活化后精炼白土须单独声明 | 吸附与固液分离 | 转移的脱色油 kg |
| `deodorization_finishing` | 脱臭与后处理 | `required` | 始终纳入；实际发生时纳入附加脱臭或后处理 | 蒸汽汽提、真空运行、精滤、冷却及成品油输出 | 1 kg 精炼椰子油 |

### 过程：粗油接收与预处理（`receipt_pretreatment`）

#### 输入

##### 产品流

###### 精炼厂入口粗椰子油（`crude_coconut_oil_input`）

记录跨越精炼厂前景边界的供应商交付粗椰子油，包括罐存变化及外部运营方返回的回收油。

- 选定流：Crude coconut oil
- 流属性/单位：Mass / kg
- 数量规则：批次或报告期实际消耗的粗椰子油净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 精炼椰子油输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass_records`
- 来源：`codex-cxs-210-1999`
- 数量范围：暂定粗油投入筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1.00
  - 上限：1.30
  - 单位：kg
  - 基准：每 1 kg 精炼椰子油输出
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 预处理水与添加物（`pretreatment_materials`）

记录在脱胶或脱色前实际消耗的水、柠檬酸、磷酸或其他已声明调理物料；实现数据集中应按物料拆分为独立交换。

- 选定流：Process water and declared pretreatment additives
- 流属性/单位：Mass / kg
- 数量规则：计量水量加按物料拆分的称量或发票添加物用量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 精炼椰子油输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass_records`
- 来源：`codex-cxc-79-2019`
- 数量范围：暂定预处理物料合计筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.25
  - 单位：kg
  - 基准：每 1 kg 精炼椰子油输出
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 调理粗椰子油（`conditioned_oil_output`）

根据罐存、转移及损失记录计算转入下一路线特定操作的油量。

- 选定流：Conditioned crude coconut oil intermediate
- 流属性/单位：Mass / kg
- 数量规则：期初库存加粗油投入，减期末库存、分离残余物、废水含油及已测损失
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 精炼椰子油输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集值计算（`calculated_from_collection`）
- 采集协议：`cp_intermediate_transfer_balance`
- 来源：`eu-fdm-bat-2019`

##### 废物流

###### 预处理残余物与废水（`pretreatment_residues`）

记录分离固体、罐底物、洗涤水以及各流中的回收或损失油；按实际去向将流归类为产品、废物或废水。

- 选定流：Pretreatment residues and wastewater
- 流属性/单位：Mass or Volume / kg or m3
- 数量规则：按去向拆分的计量排放、清运凭证、罐转移或质量平衡残差
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 精炼椰子油输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residue_wastewater_records`
- 来源：`eu-fdm-bat-2019`
- 数量范围：暂定预处理残余物筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.30
  - 单位：kg 或 m3，分别报告
  - 基准：每 1 kg 精炼椰子油输出
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

### 过程：脱胶与化学碱炼（`degumming_neutralization`）

#### 输入

##### 产品流

###### 调理油投入（`conditioned_oil_input`）

记录进入各路线适用脱胶或碱炼操作的调理油。

- 选定流：Conditioned crude coconut oil intermediate
- 流属性/单位：Mass / kg
- 数量规则：进入该操作的实测转移量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 处理油输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_intermediate_transfer_balance`
- 来源：`codex-cxc-79-2019`

###### 脱胶与碱炼物料（`degumming_neutralization_materials`）

分别记录水、酸、碱及其他加工助剂，且仅纳入实际执行操作所用物料。

- 选定流：Water, degumming acid, alkali, and declared processing aids
- 流属性/单位：Mass / kg
- 数量规则：按物料计量、称量或发票记录的用量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 处理油输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass_records`
- 来源：`codex-cxc-79-2019`
- 数量范围：暂定路线物料筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.20
  - 单位：kg
  - 基准：每 kg 处理油输出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 脱胶或碱炼油（`treated_oil_output`）

计算扣除路线特定分离损失后送至脱色的处理油。

- 选定流：Degummed or neutralized coconut oil intermediate
- 流属性/单位：Mass / kg
- 数量规则：采集的进料减去实测胶质、皂脚、废水含油及其他损失，并与转移仪表核对
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 处理油输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集值计算（`calculated_from_collection`）
- 采集协议：`cp_intermediate_transfer_balance`
- 来源：`codex-cxc-79-2019`

##### 废物流

###### 胶质、皂脚与碱炼废水（`gums_soapstock_wastewater`）

分别记录胶质、皂脚、酸化油、废水及回收油，包括去向及是否产生经济价值。

- 选定流：Gums, soapstock, acid oil, and wastewater
- 流属性/单位：Mass or Volume / kg or m3
- 数量规则：分离质量、废水流量及去向记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 处理油输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residue_wastewater_records`
- 来源：`codex-cxc-79-2019`; `eu-fdm-bat-2019`
- 数量范围：暂定分离输出筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.25
  - 单位：kg 或 m3，分别报告
  - 基准：每 kg 处理油输出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

### 过程：脱色与过滤（`bleaching_filtration`）

#### 输入

##### 产品流

###### 脱色进料油（`oil_feed_bleaching`）

记录进入脱色容器的实际路线特定油料。

- 选定流：Degummed, neutralized, or otherwise conditioned coconut oil intermediate
- 流属性/单位：Mass / kg
- 数量规则：进入脱色的实测转移量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 脱色油输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_intermediate_transfer_balance`
- 来源：`codex-cxc-79-2019`

###### 白土与助滤剂（`bleaching_media_input`）

按物料记录白土、活性炭和助滤剂；与污染物控制有关时声明含氯相关规格。

- 选定流：Bleaching earth and filter aids
- 流属性/单位：Mass / kg
- 数量规则：称量或发票用量，并按库存变化修正
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 脱色油输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass_records`
- 来源：`codex-cxc-79-2019`
- 数量范围：暂定脱色介质筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.001
  - 上限：0.10
  - 单位：kg
  - 基准：每 kg 脱色油输出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 脱色能源（`bleaching_energy`）

按载能体分别记录用于加热、真空、搅拌、泵送和过滤的电力、蒸汽或燃料。

- 选定流：Purchased electricity, steam, and fuels
- 流属性/单位：Energy or carrier-specific property / kWh, MJ, or kg
- 数量规则：过程计量用量或按因果驱动分配的场址公用工程记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 脱色油输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utility_records`
- 来源：`eu-fdm-bat-2019`
- 数量范围：暂定脱色能源筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：5
  - 单位：MJ
  - 基准：每 kg 脱色油输出，按有记录的因子换算并报告全部载能体
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 脱色油（`bleached_oil_output`）

计算转入脱臭的过滤后脱色油。

- 选定流：Bleached coconut oil intermediate
- 流属性/单位：Mass / kg
- 数量规则：实测转移量，并与进料、介质、废白土、回收油及其他损失核对
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 脱色油输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集值计算（`calculated_from_collection`）
- 采集协议：`cp_intermediate_transfer_balance`
- 来源：`codex-cxc-79-2019`

##### 废物流

###### 废白土与过滤残余物（`spent_bleaching_media`）

记录湿废白土、过滤残余物、回收油及去向；不得重复计算返回过程的回收油。

- 选定流：Spent bleaching earth and filtration residues
- 流属性/单位：Mass / kg
- 数量规则：实测清运质量及回收油转移记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 脱色油输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residue_wastewater_records`
- 来源：`codex-cxc-79-2019`; `eu-fdm-bat-2019`
- 数量范围：暂定废介质筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.001
  - 上限：0.20
  - 单位：kg
  - 基准：每 kg 脱色油输出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

### 过程：脱臭与后处理（`deodorization_finishing`）

#### 输入

##### 产品流

###### 脱色油进料（`bleached_oil_input`）

记录进入脱臭器的脱色油，并单独记录任何厂内返工投入。

- 选定流：Bleached coconut oil intermediate
- 流属性/单位：Mass / kg
- 数量规则：实测新鲜进料加单独实测返工进料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 精炼椰子油输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_intermediate_transfer_balance`
- 来源：`codex-cxc-79-2019`
- 数量范围：暂定脱臭进料筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1.00
  - 上限：1.15
  - 单位：kg
  - 基准：每 1 kg 精炼椰子油输出
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 汽提蒸汽与脱臭能源（`deodorization_utilities`）

按载能体分别记录汽提蒸汽、真空系统电力、加热燃料或蒸汽、泵送、精滤和冷却能源。

- 选定流：Stripping steam, electricity, and heating utilities
- 流属性/单位：Energy or carrier-specific property / kg steam, kWh, or MJ
- 数量规则：过程计量用量或采用已记录因子的场址公用工程分配记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 精炼椰子油输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utility_records`
- 来源：`codex-cxc-79-2019`; `eu-fdm-bat-2019`
- 数量范围：暂定脱臭能源筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.05
  - 上限：10
  - 单位：MJ
  - 基准：每 1 kg 精炼椰子油输出，按有记录的因子换算并报告全部载能体
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 冷却水与工艺水（`deodorization_water`）

分别记录淡水取用、循环冷却水、锅炉给水、冷凝水回收及补水。

- 选定流：Cooling and process water
- 流属性/单位：Volume / m3
- 数量规则：计量取水与回路补水，循环次数不得重复计入取水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 精炼椰子油输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_wastewater_records`
- 来源：`eu-fdm-bat-2019`
- 数量范围：暂定取水筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.05
  - 单位：m3
  - 基准：每 1 kg 精炼椰子油输出
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 精炼椰子油参考产品（`refined_coconut_oil_output`）

仅将精炼厂厂门处的合格精炼椰子油成品记录为定量参考输出。

- 选定流：Coconut oil, refined `570397b9-62ae-4576-b584-56691c7fed08`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：归一化后恰好 1 kg 合格产品
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：通用（`generic`）
- 归一化基准：PCR 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）
- 来源：`codex-cxs-210-1999`

###### 脱臭馏出物或回收脂肪物料（`deodorizer_distillate`）

将可凝结的游离脂肪酸和挥发性脂肪物料与未控制大气排放分开记录，并按去向声明其为共产品、回收物料或废物。

- 选定流：Coconut-oil deodorizer distillate or recovered fatty material
- 流属性/单位：Mass / kg
- 数量规则：按库存变化修正的接收器实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 精炼椰子油输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residue_wastewater_records`
- 来源：`codex-cxc-79-2019`
- 数量范围：暂定馏出物筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.10
  - 单位：kg
  - 基准：每 1 kg 精炼椰子油输出
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 精炼厂废水（`refinery_wastewater`）

记录扣除循环水后的净废水排放；说明处理路线，并在适用时表征油、有机物、营养物、氯化物、电导率、pH、温度和固体参数。

- 选定流：Refinery wastewater
- 流属性/单位：Volume / m3
- 数量规则：精炼厂系统边界的计量排放量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 精炼椰子油输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_wastewater_records`
- 来源：`eu-fdm-bat-2019`
- 数量范围：独立植物油精炼废水排放指示范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.00015
  - 上限：0.0009
  - 单位：m3
  - 基准：每 1 kg 油品产出，由每吨油品 0.15-0.9 m3 换算
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：外部来源（`external_source`）
  - 来源：`eu-fdm-bat-2019`

##### 基本流

###### 脱臭与储存的直接挥发排放（`direct_air_releases`）

记录实测或计算的未捕集挥发性有机物及其他直接大气排放；不得重复计入已作为馏出物捕集或送处理的物料。

- 选定流：Relevant direct emissions to air, reported as elementary flows
- 流属性/单位：Mass / kg
- 数量规则：烟道或通风口测量、经验证工程计算或污染物特定质量平衡
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 精炼椰子油输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集值计算（`calculated_from_collection`）
- 采集协议：`cp_emission_monitoring_records`
- 来源：`eu-fdm-bat-2019`
- 数量范围：暂定直接大气排放筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.01
  - 单位：kg
  - 基准：每 1 kg 精炼椰子油输出，仅在保留污染物身份区分后求和
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | 多输出精炼过程 | 首先通过过程细分和单独计量清单避免分配；仅当附加功能与被替代产品可证实且符合研究目标时采用系统扩展。 | `eu-pef-method-2021` |
| `allocation_physical` | 无法避免的共产品分配 | 无法细分或系统扩展时，采用反映因果关系的已记录物理关系；只有当质量确属相关物理关系时才可采用简单质量分配。 | `eu-pef-method-2021` |
| `allocation_other_relation` | 无可辩护物理关系的情形 | 仅在前述方法不可行后使用其他已记录关系（如经济价值）；采用有代表性的价格期，并披露价格来源、币种、地理和敏感性。 | `eu-pef-method-2021` |
| `allocation_waste_recovery` | 皂脚、酸化油、回收油、废白土、馏出物及其他残余物 | 按实际去向和经济功能分类各输出。没有被替代功能证据时不得给予废物流共产品抵扣；厂内回收油不得重复计入。 | `eu-pef-method-2021`; `eu-fdm-bat-2019` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_mass_records` | `receipt_pretreatment`; `degumming_neutralization`; `bleaching_filtration` | 粗油、水、酸、碱、脱色介质和助滤剂 | 地磅、校准罐、批记录、采购及库存记录 | material_id; supplier; batch_id; opening_stock; receipts; returns; closing_stock; measured_mass; moisture_or_concentration; timestamp | 按物料及批次或报告期核对校准测量与库存变动 | kg; concentration fraction | 每批，按月汇总 | 有代表性的生产期，通常为连续 12 个月 | 全部前景精炼单元与储罐 | Consumption = opening stock + receipts - returns - closing stock；仅在合格产品质量明确后归一化 | 校准记录；库存核对；供应商规格；批次授权 |
| `cp_intermediate_transfer_balance` | all foreground processes | 中间油进料与输出 | 罐计量、质量流量计、批次转移和损失记录 | process_id; batch_id; opening_inventory; input_transfer; output_transfer; closing_inventory; recovered_oil; residue_oil; timestamp | 核对相邻过程的每次转移并调查不匹配转移 | kg | 每批 | 与所代表生产相同的期间 | 全部中间油罐与转移点 | Intermediate output = opening + inputs - closing - separated outputs - documented losses | 仪表校准；罐容表；签署的批次核对 |
| `cp_utility_records` | all foreground processes | 电力、燃料、蒸汽与工艺热 | 分表、锅炉记录、发票及运行小时分配 | carrier; meter_start; meter_end; import; export; steam_mass; pressure; temperature; fuel_mass_or_volume; heating_value_basis; process_hours | 优先使用过程仪表；共享公用工程按因果驱动分配并披露 | kWh; MJ; kg steam; carrier unit | 连续或每批，按月汇总 | 与所代表生产相同的期间 | 前景精炼厂及其使用的共享公用工程 | 按载能体计算净用量；采用有记录因子换算；换算前不得合计异种单位 | 仪表校准；发票核对；锅炉效率与换算因子记录 |
| `cp_water_wastewater_records` | all foreground processes | 取水、循环水、冷凝水与废水 | 水表、回路平衡、排水表及实验室分析 | source; withdrawal; recirculation; makeup; condensate_return; discharge; pH; temperature; COD_or_TOC; TSS; chloride; conductivity; sample_time | 测量净取水和排放，保留路线特定水量平衡和采样结果 | m3; parameter-specific units | 可行时连续测流；按适用监管或管理频次取样 | 与所代表生产相同的期间，并保留采样日期 | 精炼厂水系统与排放点 | 净取水排除循环次数；排放量归一化到合格产品 | 仪表校准；实验室方法；样品交接；水量平衡闭合 |
| `cp_residue_wastewater_records` | all foreground processes | 残余物、共产品、回收物料与废物 | 接收器称重、清运凭证、实验室结果及去向记录 | stream_id; mass_or_volume; moisture; oil_content; destination; economic_value; waste_code_if_applicable; timestamp | 各去向单独记录，并将回收油与内部返回核对 | kg or m3 | 每批或每次发运 | 与所代表生产相同的期间 | 全部前景分离及废物处理点 | 按流身份与去向汇总；不得将销售与处置部分相互抵销 | 校准秤；承运凭证；处理或销售记录；实验室结果 |
| `cp_emission_monitoring_records` | `deodorization_finishing` | 直接大气排放 | 烟道/通风口测量或基于采集运行数据的工程计算 | pollutant; concentration; gas_flow; operating_time; capture_efficiency; calculation_inputs; method; timestamp | 在已识别排放点采用适用监测方法并保留原始结果 | kg pollutant; concentration and flow units | 按监测批次或适用监测频次 | 生产期内有代表性的运行监测批次 | 边界内脱臭器、真空、储存及处理通风口 | Emission = measured concentration x flow x time 或经验证质量平衡；捕集物料仅扣除一次 | 采样报告；仪器校准；计算复核；处理绩效记录 |
| `cp_product_quality_records` | `deodorization_finishing` | 合格精炼椰子油 | 分析证书、批次放行及规范记录 | batch_id; origin; grade; specification; fatty_acid_profile; acidity; peroxide_value; moisture_and_volatiles; contaminants_if_required; release_status | 采用适用方法检测或核验是否符合已声明市场规范 | parameter-specific units | 每个放行批次或有理据的批组 | 生产期所代表的全部放行批次 | 成品罐与装载点 | 仅已放行的合格质量进入参考输出 | 实验室认可或方法记录；签署的分析证书；放行决定 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 每一清单行 | normalized quantity = period or batch quantity / net conforming refined coconut oil output in kg | collected row quantity; conforming product mass | 每 1 kg 参考产品数量 | `eu-fdm-bat-2019` |
| `calc_oil_mass_balance` | 各油加工阶段及精炼厂整体 | opening oil inventory + oil-bearing inputs = closing oil inventory + intermediate/final oil outputs + measured oil in residues/wastewater + documented losses；残余不平衡须单独报告 | transfer, stock, residue oil, recovered oil, and product records | 阶段及精炼厂质量平衡闭合 | `eu-fdm-bat-2019` |
| `calc_water_balance` | 精炼厂水系统 | net withdrawal = gross withdrawal - returned water received from outside the reporting system；循环、蒸发、冷凝水回收和排放须分别报告 | water meter and loop records | 每参考流水清单 | `eu-fdm-bat-2019` |
| `calc_allocation_factor` | 无法避免的负荷分配 | output i allocation factor = documented physical or other relationship value for output i / sum of the same relationship values for all co-products；一致应用于共享投入与排放 | subdivision result; co-product quantities; physical relation or economic values | 已披露分配因子及分配清单 | `eu-pef-method-2021` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | 参考产品与上游粗油 | 核验椰子来源、精炼/粗制状态、路线、等级、规范及 Tiangong 参考流身份；防止被棕榈仁油、初榨椰子油或通用植物油替代。 | 产品规范；供应商记录；批次证书；flow UUID 核验 |
| `dq_temporal` | 前景数据 | 采用连续且有代表性的期间；非季节性运营通常不少于 12 个月，并披露停产、异常事件和较短期间。 | 有日期的仪表、批次、发票及生产记录 |
| `dq_technology` | 精炼路线 | 化学与物理精炼数据须分开，除非以有记录产量加权；识别脱胶化学品、碱炼状态、脱色介质、脱臭器配置、温度、压力/真空、停留时间及后处理。 | 工艺流程图；运行日志；产量加权计算；`codex-cxc-79-2019` |
| `dq_geography` | 场址及上游数据集 | 前景运营使用场址地理；粗油、电力、燃料、水、处理与运输使用有代表性的地理。 | 场址元数据；供应商来源；背景数据集元数据 |
| `dq_precision_completeness` | 物料、公用工程、残余物、废水及大气清单 | 核对油和水量平衡；量化数据缺口；记录测量不确定性、分配及重要排除；评价技术、地理、时间代表性和精度。 | 平衡报告；校准；缺口登记；DQR 记录；`eu-pef-method-2021`; `eu-fdm-bat-2019` |
| `dq_product_conformance` | 精炼椰子油成品 | 保留证明符合已声明产品规范的批次放行或证书；用于食品市场时，采用相关 Codex 或司法辖区的组成、污染物、卫生和分析要求。 | 分析证书；已声明标准；`codex-cxs-210-1999` |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | 参考流 | 数据集须恰有一个定量参考输出，使用 Coconut oil, refined `570397b9-62ae-4576-b584-56691c7fed08`、Mass `93a60a56-a3c8-11da-a746-0800200b9a66`、Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`，归一化后为 1 kg。 | `codex-cxs-210-1999` |
| `validate_required_qualifiers` | 数据集元数据 | 全部必需限定信息须存在且相互一致；粗制、初榨、冷榨、氢化、酯交换、分提、调和或分离 MCT 产品不符合类别身份。 | `codex-cxs-210-1999` |
| `validate_route_processes` | 过程图与清单 | 须表示接收/预处理、脱色/过滤和脱臭/后处理；脱胶与碱炼须符合已声明路线，全部排除或合并操作须有理据。 | `codex-cxc-79-2019` |
| `validate_inventory_coverage` | 前景交换 | 数据集须计入粗油、路线特定加工物料、电力与热力公用工程、水、精炼油、中间转移、残余物/共产品、废水、直接排放及处理去向，或明确说明某流不适用。 | `eu-fdm-bat-2019` |
| `validate_mass_balance` | 含油物流 | 油质量平衡须在已声明测量不确定性内闭合；残余不平衡须量化和调查，不得用分配或归一化隐藏。 | `eu-fdm-bat-2019` |
| `validate_water_range` | 精炼厂净废水 | 将净排放与 0.00015-0.0009 m3/kg 的独立精炼指示范围比较；超出范围触发复核，但不会自动使场址特定数据集失效。 | `eu-fdm-bat-2019` |
| `validate_contaminant_controls` | 精炼条件与产品放行 | 记录与 3-MCPDE 和 GE 控制相关的路线特定前体评价和脱臭条件，并保留减缓措施与所声明产品质量兼容的证据。 | `codex-cxc-79-2019`; `codex-cxs-210-1999` |
| `validate_allocation` | 多输出操作 | 确认细分/系统扩展、相关物理关系、其他关系的顺序；全部因子、数值、去向和敏感性须可复现，厂内回收油不得重复抵扣。 | `eu-pef-method-2021` |
| `validate_data_quality` | 前景与衔接背景数据 | 确认时间、技术、地理和精度证据、来源可追溯性、校准、批次/产品合规及缺口与暂定范围披露。 | `eu-pef-method-2021`; `eu-fdm-bat-2019` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 散装精炼椰子油的精炼厂厂门前景生产数据集 |
| downstream_use | `secondary_dataset`; 经评审和发布后可作 `background_dataset` |
| allowed_use | 使用精炼椰子油的产品归因型 LCA；在路线、边界、分配、产品等级、地理和数据质量一致时进行供应商或场址比较；衔接到更广泛的摇篮到厂门模型 |
| excluded_use | 初榨/冷榨油、棕榈仁油、分提产品或分离 MCT、未添加包装/配送的零售包装油、不含适当市场模型的后果型主张，或未经评审的公开比较主张 |
| required_metadata | PCR id/version；flow UUID；产品与等级；适用规范；化学/物理路线；场址/地理；参考期；技术；粗油来源与上游边界；分配；共产品/废物去向；产品质量放行；数据源 |
| required_quality_disclosure | 前景覆盖；仪表/校准状态；油和水量平衡；路线加权；数据缺口；暂定估算；不确定性；背景数据集代表性；分配敏感性；对本 PCR 的偏离 |
| update_trigger | 进料来源或质量、精炼路线、脱胶/碱炼方式、脱色介质、脱臭器条件、能源或水系统、污染物控制、共产品去向、分配基础、产品规范、场址地理发生变化，或出现可替代暂定范围的新证据 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `codex-cxs-210-1999` | `standard` | FAO 与 WHO，Codex Alimentarius，*Standard for Named Vegetable Oils*，CXS 210-1999，2024 年修订并含 2026 年勘误，https://www.fao.org/fao-who-codexalimentarius/sh-proxy/en/?lnk=1&url=https%3A%2F%2Fworkspace.fao.org%2Fsites%2Fcodex%2FStandards%2FCXS%2B210-1999%2FCXS_210e.pdf（检索于 2026-08-10） | 椰子油身份、食用市场规范、组成与质量符合性、污染物、卫生、标签及分析 |
| `codex-cxc-79-2019` | `official_guidance` | FAO 与 WHO，Codex Alimentarius，*Code of Practice for the Reduction of 3-MCPDEs and GEs in Refined Oils and Food Products Made with Refined Oils*，CXC 79-2019，https://www.fao.org/fao-who-codexalimentarius/sh-proxy/en/?lnk=1&url=https%3A%2F%2Fworkspace.fao.org%2Fsites%2Fcodex%2FStandards%2FCXC%2B79-2019%2FCXC_079e.pdf（检索于 2026-08-10） | 化学与物理精炼分解；脱胶、碱炼、脱色与脱臭规则；前体评价及污染物减缓 |
| `eu-fdm-bat-2019` | `official_guidance` | 欧盟委员会，Commission Implementing Decision (EU) 2019/2031 establishing BAT conclusions for the food, drink and milk industries，https://eur-lex.europa.eu/eli/dec_impl/2019/2031/oj（检索于 2026-08-10） | 水、能源、原材料、废水、废气和残余物清单；监测与资源效率规则；独立精炼废水指示范围 |
| `eu-pef-method-2021` | `official_guidance` | 欧盟委员会，Commission Recommendation (EU) 2021/2279 on Environmental Footprint methods，经整合与勘误文本，https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A02021H2279-20211230（检索于 2026-08-10） | 多功能层级、分配披露、生命周期数据质量、代表性、精度及验证 |
