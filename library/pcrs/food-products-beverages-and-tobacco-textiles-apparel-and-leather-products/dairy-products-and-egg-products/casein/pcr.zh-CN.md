---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.dairy-products-and-egg-products.casein
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 酪蛋白

## 1. 范围与适用性

本 PCR 适用于以脱脂乳和/或其他乳源原料，经酸沉淀或凝乳酶/其他适用凝固酶凝固，再经凝块分离、洗涤、脱水、干燥和整理制得的干酪蛋白。产品作为食用酪蛋白投放市场时，本 PCR 覆盖食用酸酪蛋白和食用凝乳酶酪蛋白；以相同已声明路线生产并以酪蛋白销售的工业级产品也在范围内。

参考产品必须仍是酪蛋白。通过中和酪蛋白或酪蛋白凝块制得的酪蛋白酸盐、其他经化学或酶改性的酪蛋白衍生物、含酪蛋白的配方混合物，以及酪蛋白胶和其他胶黏剂均不在范围内。设施若继续把酪蛋白转化为酪蛋白酸盐、衍生物或胶黏剂，应在酪蛋白中间产品处终止本 PCR 的前景边界，后续转化采用另行适用的规则建模。Codex CXS 290-1995 的组成和质量条款可以用于证明食用产品声明，但不得作为通用清单数量或统一 LCI 限值。

前景边界为从酪蛋白设施接收已声明乳源原料起，到工厂门口产品形成。上游乳生产和供应商加工由上游数据集表示。配送、客户配方、使用和寿命终结不属于本前景生产边界，除非下游研究明确增加这些阶段。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.dairy-products-and-egg-products.casein |
| classification_refs | CPC 3.0 22260 酪蛋白 |
| covered_products | 干酸酪蛋白；干凝乳酶或其他酶凝固酪蛋白；以酪蛋白销售的食用级或工业级产品 |
| excluded_products | 酪蛋白酸盐；其他酪蛋白衍生物；酪蛋白胶和胶黏剂；酪蛋白只是配方成分而非声明产品的混合物 |
| representative_product | 制造厂门口的干酪蛋白粉末或颗粒 |
| production_route | 酸沉淀路线或凝乳酶/其他适用凝固酶路线；必须按实际运行路线分别声明和编制清单 |
| market_state | 工厂门口散装或包装干产品，并声明等级、路线、水分或干物质基准、乳动物来源、物理形态和包装状态 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 在制造厂门口供应的干乳蛋白产品——酪蛋白 |
| How much | 1 kg 净酪蛋白产品，不含包装 |
| How well | 识别为酸酪蛋白或凝乳酶/其他酶凝固酪蛋白，并声明食用级或工业级、水分或干物质基准、物理形态和适用产品规范 |
| How long or cycle | 一次工厂门口交付的生产输出；不适用服务期限 |
| reference_flow_link | rf_casein |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | Casein `53f7b47f-8d1a-4420-8e79-e931990656e6` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 凝固路线；食用级或工业级；水分或干物质基准及试验方法；乳动物来源；物理形态；产品规范；设施和地理范围；生产期间；包装状态 |

构建前景数据包时，每项必需限定信息都应在数据集元数据、过程说明、参考流备注、产品描述或等效字段中声明。缺失限定信息时，参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | 参考酪蛋白产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 报告酪蛋白产品净质量并排除包装。采用第 3 节中已核验的酪蛋白产品流和质量单位组标识。 |
| `moisture_basis` | 酪蛋白、湿凝块及中间得率 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 对每个质量声明其为接收态、湿基、干基或按已声明水分/干物质校正。不得把 Codex 组成限值当作换算因子，应使用批次或批号测量值。 |
| `route_separation` | 酸路线和酶路线记录 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 路线特定的投入、输出、得率、水和能源应分别记录。只有报告产品和期间确实包含两种路线，且披露按生产质量加权时，才可报告加权结果。 |
| `energy_units` | 电力和热能 | Energy | kWh 和 MJ | 保留计量单位和换算因子，不得把电力与热能合并为一个未限定数量。 |

## 5. 系统边界

| 规则编号 | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `boundary_factory_gate` | 前景生产 | 纳入已声明乳源原料接收、路线特定凝固、凝块分离、洗涤、脱水、干燥、整理、直接归属于生产的场内公用工程，以及前景废物处理，直至干酪蛋白在制造厂门口准备完毕。 | `codex-cxs-290-1995`; `eu-fdm-bat-2019-2031` |
| `boundary_route_actual` | 凝固路线 | 只有实际为酸路线时才纳入酸化剂或发酵剂操作，只有实际为酶路线时才纳入凝乳酶或其他凝固酶操作。除非报告产品和期间确实包含两种路线并披露权重，否则不得构造混合平均。 | `codex-cxs-290-1995` |
| `boundary_upstream_feed` | 乳源原料 | 设施声明接收点之前的乳生产和供应商加工应采用可追溯上游数据集表示，不得在酪蛋白前景内静默重建。 | `eu-pef-2021-2279` |
| `boundary_downstream` | 出厂后阶段 | 前景生产数据集排除配送、客户配方、使用和寿命终结；下游生命周期模型可在不改变本参考流的前提下增加这些阶段。 | `eu-pef-2021-2279` |
| `boundary_no_conversion` | 产品范围 | 酪蛋白前景应在中和生成酪蛋白酸盐或转化成其他衍生物、胶或胶黏剂之前终止。 | `un-cpc-3-0-casein`; `codex-cxs-290-1995` |

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 酪蛋白设施接收的乳源原料，通常为脱脂乳或另一项已声明乳制品 |
| starting_condition_role | 酪蛋白前景制造的上游产品投入 |
| product_classification_scope | CPC 3.0 22260 酪蛋白；前景输出保持为酪蛋白，排除酪蛋白酸盐、衍生物、胶和胶黏剂 |
| recursive_input_rule | 外购酪蛋白进入再加工时，应记录为具有上游数据集的同类投入，不得重建其上游生产；不跨越设施边界的内部返工应披露，并在批次平衡中只净计一次 |
| upstream_dataset_requirement | 供应商和路线具有代表性的乳源原料数据集，包括地理、技术、期间、产品状态、干物质或水分基准和分配状态 |
| disclosure | 声明原料、动物来源、食用级或工业级、凝固路线、设施地点、报告期间、干燥技术、废水场内或场外处理、包装状态和全部分配选择 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `casein_coagulation` | 路线特定酪蛋白凝固 | required |  | 按实际酸路线或酶路线，把已声明乳源原料转化为酪蛋白凝块和液体共产品 | 每 kg 干酪蛋白参考产品 |
| `curd_recovery_washing` | 凝块回收、洗涤和脱水 | required |  | 分离凝块、去除可溶组分、洗涤并脱水 | 每 kg 干酪蛋白参考产品 |
| `drying_finishing` | 干燥、粉碎、整理和包装 | required |  | 把酪蛋白干燥整理到已声明工厂门口状态 | 1 kg 净酪蛋白参考产品 |
| `onsite_wastewater_treatment` | 场内废水处理 | conditional | 酪蛋白生产废水在报告设施边界内处理时纳入 | 处理可归属废水并报告排放和处理残余物 | 每 kg 干酪蛋白参考产品 |

### 过程：路线特定酪蛋白凝固（`casein_coagulation`）

#### 输入

##### 产品流

###### 乳源原料（`milk_derived_feed`）

记录跨入凝固过程的合格脱脂乳或其他已声明乳源产品；接收前的供应商加工属于上游。

- 选定流：脱脂乳或其他已声明乳源原料
- 流属性/单位：Mass / kg
- 数量规则：计量归属于批次或报告期间的接收质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 干酪蛋白参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coagulation_batch_records`
- 数量范围：暂定原料投入筛查范围；以评审后的批次或报告期记录替换
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：10
  - 上限：100
  - 单位：kg/kg 干酪蛋白
  - 基准：每 kg 干酪蛋白乳源原料投入的临时宽范围；完整场址或批次记录可用或原料基准变化时替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 酸路线酸化剂或乳酸发酵剂（`acid_route_agent`）

仅在实际为酸沉淀路线时记录，并识别直接加无机酸、乳酸发酵或其他已声明酸化方法；酶路线应省略。

- 选定流：路线特定酸化剂或乳酸发酵剂
- 流属性/单位：Mass / kg
- 数量规则：计量归属于酸路线批次的购入或制备量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 干酸酪蛋白参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coagulation_batch_records`
- 来源：`codex-cxs-290-1995`
- 数量范围：暂定酸路线药剂筛查范围；以配方和批次记录替换
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：2
  - 单位：kg/kg 干酸酪蛋白
  - 基准：覆盖直接加酸或制备发酵剂的临时宽范围；路线记录可用或酸化方法变化时替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 酶路线凝乳酶或其他凝固酶（`enzyme_route_agent`）

仅在实际采用凝乳酶或其他适用凝固酶时记录；酸路线应省略。

- 选定流：凝乳酶或其他适用凝固酶
- 流属性/单位：Mass / kg
- 数量规则：计量归属于酶路线批次的商业制剂用量并披露制剂强度
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 干酶凝固酪蛋白参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coagulation_batch_records`
- 来源：`codex-cxs-290-1995`
- 数量范围：暂定酶制剂筛查范围；以配方和批次记录替换
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.1
  - 单位：kg/kg 干酶凝固酪蛋白
  - 基准：商业酶制剂的临时宽范围；路线记录可用或制剂强度变化时替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 凝固电力（`coagulation_electricity`）

记录原料操作、搅拌、泵送和凝固控制的计量或可辩护分配电力。

- 选定流：设施供应电力
- 流属性/单位：Energy / kWh
- 数量规则：电表计量，或由已核验分表和运行记录计算分配
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 干酪蛋白参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_resource_meter_records`
- 来源：`eu-pef-2021-2279`; `eu-fdm-bat-2019-2031`
- 数量范围：暂定凝固电力筛查范围；以分表记录替换
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10
  - 单位：kWh/kg 干酪蛋白
  - 基准：临时宽范围；路线特定计量完整或设备变化时替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 凝固热能（`coagulation_thermal_energy`）

记录凝固所用蒸汽、热水或燃料热能，不得与电力合并。

- 选定流：凝固过程供应热能
- 流属性/单位：Energy / MJ
- 数量规则：实测能源载体用量，以有记录因子换算并分配到实际路线
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 干酪蛋白参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_resource_meter_records`
- 来源：`eu-pef-2021-2279`; `eu-fdm-bat-2019-2031`
- 数量范围：暂定凝固热能筛查范围；以计量记录替换
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：MJ/kg 干酪蛋白
  - 基准：临时宽范围；路线特定能源记录完整或加热技术变化时替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### 输出

##### 产品流

###### 已凝固酪蛋白凝块（`coagulated_casein_curd`）

按实测转移质量和水分/干物质试验计算离开凝固的湿凝块，并保持酸路线与酶路线分开。

- 选定流：湿酪蛋白凝块
- 流属性/单位：Mass / kg
- 数量规则：按批次实测湿凝块质量并计算干物质当量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 干酪蛋白参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_coagulation_batch_records`
- 来源：`codex-cxs-290-1995`
- 数量范围：暂定湿凝块筛查范围；以凝块得率和水分记录替换
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：10
  - 单位：kg 湿凝块/kg 干酪蛋白
  - 基准：湿凝块转移临时宽范围；配对质量与水分记录覆盖声明期间时替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 液体乳清共产品（`coagulation_serum`）

凝固液体流离开设施用于有益用途时按共产品记录；否则按实际废物管理路线分类。

- 选定流：路线特定酸乳清或凝乳酶酪蛋白乳清
- 流属性/单位：Mass / kg
- 数量规则：计量转移质量，或用实测密度换算体积
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 干酪蛋白参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_coagulation_batch_records`
- 数量范围：暂定乳清输出筛查范围；以转移记录替换
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg/kg 干酪蛋白
  - 基准：液体共产品临时宽范围；路线转移和密度记录覆盖期间或去向变化时替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程：凝块回收、洗涤和脱水（`curd_recovery_washing`）

#### 输入

##### 产品流

###### 已凝固酪蛋白凝块投入（`curd_input`）

把路线特定湿凝块带入分离和洗涤，并与凝固输出核对，不重复上游乳源原料。

- 选定流：湿酪蛋白凝块
- 流属性/单位：Mass / kg
- 数量规则：实测内部转移并与凝固输出核对
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 干酪蛋白参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_washing_dewatering_records`
- 数量范围：暂定内部凝块核对范围；以配对转移记录替换
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：10
  - 单位：kg 湿凝块/kg 干酪蛋白
  - 基准：临时宽范围；凝固和洗涤转移记录覆盖期间时替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 凝块洗涤水（`curd_washing_water`）

记录进入凝块洗涤的饮用水或过程质量水；回用水只计一次并披露来源和质量控制。

- 选定流：酪蛋白凝块洗涤供水
- 流属性/单位：Mass / kg
- 数量规则：补充水加单独记录的回收水投入，过程内循环不得重复计数
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 干酪蛋白参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_washing_dewatering_records`
- 来源：`codex-cxs-290-1995`; `eu-fdm-bat-2019-2031`
- 数量范围：暂定洗涤用水筛查范围；以水量平衡和批次记录替换
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：200
  - 单位：kg/kg 干酪蛋白
  - 基准：补充水临时宽范围；过程级水量平衡覆盖期间或洗涤配置变化时替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 回收和脱水电力（`recovery_electricity`）

记录分离、洗涤、泵送和机械脱水电力。

- 选定流：设施供应电力
- 流属性/单位：Energy / kWh
- 数量规则：电表计量，或由已核验分表和运行记录计算分配
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 干酪蛋白参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_resource_meter_records`
- 来源：`eu-pef-2021-2279`; `eu-fdm-bat-2019-2031`
- 数量范围：暂定回收电力筛查范围；以分表记录替换
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10
  - 单位：kWh/kg 干酪蛋白
  - 基准：临时宽范围；设备级记录完整或脱水技术变化时替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### 输出

##### 产品流

###### 已洗涤脱水酪蛋白凝块（`dewatered_casein_curd`）

记录干燥前脱水凝块质量和水分/干物质，并保留实际路线标识。

- 选定流：已洗涤脱水酪蛋白凝块
- 流属性/单位：Mass / kg
- 数量规则：实测转移质量，只按实测水分或干物质校正
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 干酪蛋白参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_washing_dewatering_records`
- 数量范围：暂定脱水凝块筛查范围；以转移和水分记录替换
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：5
  - 单位：kg 湿凝块/kg 干酪蛋白
  - 基准：临时宽范围；配对转移和水分记录覆盖期间时替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 酪蛋白洗涤废水（`washing_wastewater`）

记录洗涤和脱水离开的净液体废物流，并声明去向及场内/场外处理。

- 选定流：酪蛋白生产废水
- 流属性/单位：Mass / kg
- 数量规则：实测排放/转移体积，以实测或有依据密度换算并与过程水量平衡核对
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 干酪蛋白参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_washing_dewatering_records`
- 来源：`eu-fdm-bat-2019-2031`
- 数量范围：暂定废水筛查范围；以流量计和水量平衡记录替换
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：300
  - 单位：kg/kg 干酪蛋白
  - 基准：临时宽范围；过程级废水监测覆盖期间或处理路线变化时替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程：干燥、粉碎、整理和包装（`drying_finishing`）

#### 输入

##### 产品流

###### 脱水酪蛋白凝块投入（`dewatered_curd_input`）

把实测脱水凝块带入干燥并与上游输出核对。

- 选定流：已洗涤脱水酪蛋白凝块
- 流属性/单位：Mass / kg
- 数量规则：实测内部转移，只按实测水分或干物质校正
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 干酪蛋白参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_drying_finishing_records`
- 数量范围：暂定干燥进料筛查范围；以转移和水分记录替换
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：5
  - 单位：kg 湿凝块/kg 干酪蛋白
  - 基准：临时宽范围；配对进料和产品记录覆盖期间或进料状态变化时替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 干燥和整理电力（`drying_electricity`）

记录干燥辅助、粉碎、输送、筛分、除尘和范围内包装的电力。

- 选定流：设施供应电力
- 流属性/单位：Energy / kWh
- 数量规则：电表计量，或由已核验分表和运行记录计算分配
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 干酪蛋白参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_resource_meter_records`
- 来源：`eu-pef-2021-2279`; `eu-fdm-bat-2019-2031`
- 数量范围：暂定干燥电力筛查范围；以分表记录替换
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10
  - 单位：kWh/kg 干酪蛋白
  - 基准：临时宽范围；干燥和整理计量完整或设备变化时替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 干燥热能（`drying_thermal_energy`）

记录干燥所用蒸汽、热空气或燃料热能，并披露能源载体和换算基准。

- 选定流：干燥过程供应热能
- 流属性/单位：Energy / MJ
- 数量规则：实测能源载体用量，以有记录因子换算并分配到干燥批次
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 干酪蛋白参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_resource_meter_records`
- 来源：`eu-pef-2021-2279`; `eu-fdm-bat-2019-2031`
- 数量范围：暂定干燥热能筛查范围；以计量记录替换
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：MJ/kg 干酪蛋白
  - 基准：临时宽范围；干燥能源记录完整或技术/进料水分变化时替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 初级包装材料（`primary_packaging`）

仅当声明工厂门口产品已包装时记录；声明为未包装散装产品时省略。

- 选定流：路线和产品特定的初级包装材料
- 流属性/单位：Mass / kg
- 数量规则：按包装类型记录发出量减已核验退回和未用材料
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净酪蛋白参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_drying_finishing_records`
- 来源：`eu-pef-2021-2279`
- 数量范围：暂定包装筛查范围；以物料清单和领用记录替换
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg/kg 净酪蛋白
  - 基准：临时宽范围；产品特定包装记录覆盖期间或包装形式变化时替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### 输出

##### 产品流

###### 酪蛋白参考产品（`casein_reference_product`）

报告制造厂门口净干酪蛋白。UUID、流属性、单位组和单位由第 3 节固定，产品质量值仍是实测前景限定信息。

- 选定流：Casein `53f7b47f-8d1a-4420-8e79-e931990656e6`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：归一化后恰为 1 kg 净参考产品
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：一个 PCR 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：来源规则（`source_rule`）
- 来源：`un-cpc-3-0-casein`; `codex-cxs-290-1995`
- 数量范围：参考流身份校验
  - 范围角色：允许范围（`allowed_range`）
  - 下限：1
  - 上限：1
  - 单位：kg
  - 基准：准确归一化净酪蛋白参考产品质量
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：来源规则（`source_rule`）
  - 来源：`un-cpc-3-0-casein`; `codex-cxs-290-1995`

##### 废物流

###### 不合格酪蛋白和整理残余物（`offspec_casein_waste`）

按实际去向记录不合格酪蛋白、未作为内部返工返回的收集细粉和其他产品残余物。

- 选定流：不合格酪蛋白和整理残余物
- 流属性/单位：Mass / kg
- 数量规则：计量废物转移，扣除有文件记录的内部返工
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 干酪蛋白参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_drying_finishing_records`
- 数量范围：暂定整理废物筛查范围；以称重处置记录替换
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg/kg 干酪蛋白
  - 基准：临时宽范围；废物和内部返工称重记录覆盖期间或产品规范变化时替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 干燥和整理有组织颗粒物排放（`drying_particulate_emission`）

只记录治理后的实测或计算空气排放，不得把 BAT 相关绩效水平换算为通用排放量。

- 选定流：排放到空气的颗粒物，并声明粒径级和环境区室
- 流属性/单位：Mass / kg
- 数量规则：实测浓度与废气流量按运行时间积分，或采用另一项有文件记录的场址方法
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 干酪蛋白参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_emission_and_wastewater_records`
- 来源：`eu-fdm-bat-2019-2031`
- 数量范围：暂定颗粒物筛查范围；以场址监测替换
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.1
  - 单位：kg/kg 干酪蛋白
  - 基准：仅作临时宽范围筛查；代表性浓度、流量、治理和运行时间记录可用或治理变化时替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程：场内废水处理（`onsite_wastewater_treatment`）

#### 输入

##### 废物流

###### 接收处理的酪蛋白生产废水（`wastewater_to_treatment`）

仅纳入报告设施内处理的废水；场外处理应采用可追溯废物处理数据集。

- 选定流：酪蛋白生产废水
- 流属性/单位：Mass / kg
- 数量规则：计量归属于酪蛋白生产的处理进水并与上游废水输出核对
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 干酪蛋白参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_emission_and_wastewater_records`
- 来源：`eu-fdm-bat-2019-2031`
- 数量范围：暂定处理进水筛查范围；以流量监测替换
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：300
  - 单位：kg/kg 干酪蛋白
  - 基准：临时宽范围；可归属处理进水记录覆盖期间或路线变化时替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 产品流

###### 废水处理电力和化学品（`wastewater_treatment_inputs`）

应把处理电力和化学品保留为分别的底层记录；数据包保留载体和化学品身份后方可在此聚合。

- 选定流：废水处理电力和化学品，在前景数据包中解聚
- 流属性/单位：Multiple properties / declared units
- 数量规则：计量可归属于酪蛋白废水的电力和化学品领用量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 干酪蛋白参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_emission_and_wastewater_records`
- 来源：`eu-fdm-bat-2019-2031`
- 数量范围：暂定处理投入筛查范围；以计量和领用记录替换
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10
  - 单位：kg-or-kWh/kg 干酪蛋白，使用前解聚
  - 基准：仅作临时存在性和数量级筛查；定量使用前用分别的电力和化学品记录替换，处理技术变化时也应替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### 输出

##### 废物流

###### 废水处理污泥（`wastewater_sludge`）

按实测质量、固形物基准和去向记录污泥及其他处理残余物。

- 选定流：废水处理污泥
- 流属性/单位：Mass / kg
- 数量规则：实测湿质量并声明干固体含量和去向
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 干酪蛋白参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_emission_and_wastewater_records`
- 来源：`eu-fdm-bat-2019-2031`
- 数量范围：暂定污泥筛查范围；以称重固体记录替换
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10
  - 单位：kg 湿污泥/kg 干酪蛋白
  - 基准：临时宽范围；污泥质量、干固体和去向记录覆盖期间或处理变化时替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 处理后废水排放（`treated_water_discharge`）

按受纳环境区室和相关监测参数记录实际水排放，不得把 BAT 绩效值作为清单。

- 选定流：处理后废水和排入受纳水环境的受监测相关物质
- 流属性/单位：Mass / kg
- 数量规则：实测流量与相关物质场址实测浓度/负荷结合
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 干酪蛋白参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_emission_and_wastewater_records`
- 来源：`eu-fdm-bat-2019-2031`
- 数量范围：暂定处理后水流筛查范围；以监测排放记录替换
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：300
  - 单位：kg 水/kg 干酪蛋白
  - 基准：仅作临时宽流量筛查；流量和相关参数监测覆盖期间或排放条件变化时替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

## 7. 分配与共产品处理

| 规则编号 | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `allocation_avoid` | 共享酪蛋白生产操作 | 首先采用过程细分、路线特定计量或其他有文件记录的分离方式避免分配，同时保持质量和能源平衡。 | `eu-pef-2021-2279` |
| `allocation_liquid_coproduct` | 酪蛋白和有益利用的液体乳清共产品 | 细分不能解决共享负担时，只有当物理关系反映资源使用因果关系时才采用并记录该关系。若无可辩护物理关系，则采用代表性声明期间的经济关系并报告敏感性结果。 | `eu-pef-2021-2279` |
| `allocation_cream_or_other_output` | 其他乳源共产品 | 若奶油分离或其他乳加工步骤在前景内，应披露全部共产品并采用同一层级。确认供应商分配的边界和产品状态与声明起点一致之前，不得直接导入该分配。 | `eu-pef-2021-2279` |
| `allocation_waste_and_rework` | 废物、残余物和内部返工 | 不得把内部返工作为第二项输出，净返工只计一次。只有有益用途和产品状态有证据时，液体或固体流才分类为共产品；否则按实际废物处理建模。 | `eu-fdm-bat-2019-2031` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_coagulation_batch_records` | `casein_coagulation` | 原料、路线药剂、凝块和乳清 | 批次生产记录 | 批次编号；路线；原料身份和质量；酸化剂、发酵剂或酶身份和用量；凝块质量；乳清质量或体积与密度；水分或干物质；时间戳 | 校准秤、罐液位、流量计、配方记录和实验室结果按批次核对 | kg；L；kg/L；质量分数 | 每批次，或具有明确切分点的连续生产活动 | 声明报告期间的全部批次或生产活动 | 每个生产设施和路线 | 汇总可归属记录，以实测密度换算体积，以实测水分计算干质量并归一化到净干酪蛋白输出 | 校准记录；批次单；实验室证书；平衡签核 |
| `cp_washing_dewatering_records` | `curd_recovery_washing` | 凝块转移、水、脱水凝块和废水 | 批次和仪表记录 | 批次编号；入口凝块质量和水分；补充水和回收水；出口凝块质量和水分；废水流量；循环量；去向 | 转移秤、水表和废水表、水分试验及批次质量平衡 | kg；L；质量分数 | 每批次并汇总每次生产活动仪表总量 | 声明报告期间的全部生产日 | 每条洗涤和脱水线 | 核对入口、出口、循环和废水，内部循环只计一次并归一化到净干酪蛋白 | 仪表校准；实验室结果；签核水量平衡；去向记录 |
| `cp_drying_finishing_records` | `drying_finishing` | 干燥进料、酪蛋白产品、包装、废物和内部返工 | 批次、库存和质量记录 | 生产活动编号；路线；湿进料质量和水分；净酪蛋白质量和水分；等级；产品规范；包装领用和退回；不合格质量；细粉；返工；去向 | 校准秤、水分试验、仓库领用、质量放行和废物联单 | kg；质量分数 | 每批次或干燥生产活动 | 声明报告期间的全部生产活动 | 每台干燥器和整理线 | 核对干固体，内部返工净计一次，从参考产品质量排除包装并归一化至 1 kg 净酪蛋白 | 秤校准；实验室证书；放行记录；库存核对；废物联单 |
| `cp_resource_meter_records` | `casein_coagulation`; `curd_recovery_washing`; `drying_finishing` | 电力和热能 | 仪表和公用工程记录 | 仪表编号；过程或生产线；时间戳；起止读数；能源载体；蒸汽或燃料量；换算因子；运行时间；分配驱动因子 | 优先采用校准分表；否则以总表和运行记录作有文件依据的工程分配 | kWh；MJ；载体特定单位 | 仪表间隔和每次生产活动 | 完整声明报告期间，包括可归属的停机和清洗 | 每个设施、路线和主要过程 | 扣除已核验非生产负荷，以有记录因果驱动分配共享用量，分别保留电力和热能并归一化到净酪蛋白 | 仪表校准；账单；换算因子来源；分配工作表；运行日志 |
| `cp_emission_and_wastewater_records` | `drying_finishing`; `onsite_wastewater_treatment` | 颗粒物排放、处理投入、污泥和处理后排放 | 监测和转移记录 | 排放源编号；流量；浓度；参数；采样时间；运行时间；处理电力和化学品；污泥质量和固体；受纳区室；去向 | 场址监测、实验室分析、流量计、排放计算、化学品领用和废物转移记录 | kg；kg/h；mg/Nm3；m3；mg/L；kWh；质量分数 | 按许可证和监测计划，并在每次重大运行变化时 | 代表性正常运行和声明报告期间 | 每个相关排放点和处理系统 | 对实测浓度与流量按可归属运行积分，计算负荷，归一化到净酪蛋白并保留未检出值处理方式 | 监测报告；实验室认可；校准；样品流转；许可证记录；计算工作表 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_dry_mass` | 凝块和酪蛋白质量 | 干质量 = 实测接收态质量 × 实测干物质分数；不得以 Codex 最大值或最小值替代批次测量 | 接收态质量；实测水分或干物质 | kg 干物质 | `codex-cxs-290-1995` |
| `calc_reference_normalisation` | 全部清单行 | 归一化数量 = 同一设施、路线和期间的可归属过程量 ÷ 净 kg 酪蛋白参考产品 | 可归属数量；净酪蛋白质量 | 每 1 kg 酪蛋白的数量 | `eu-pef-2021-2279` |
| `calc_route_weighting` | 同时包含酸路线和酶路线的结果 | 先分别计算各路线；合并量 = 各路线归一化量 × 该路线净酪蛋白质量占比之和，并披露占比和期间 | 路线特定归一化量；路线净酪蛋白质量 | 按生产质量加权的数量 | `codex-cxs-290-1995`; `eu-pef-2021-2279` |
| `calc_mass_balance` | 凝固、洗涤和干燥 | 在一致水分/干物质基准上核对实测投入与产品、共产品、废物、排放、库存变化和有文件记录的测量不确定性 | 实测质量；水分；循环；库存变化 | 签核过程质量平衡和未解释差异 | `eu-fdm-bat-2019-2031` |
| `calc_emission_load` | 受监测空气和水排放 | 排放负荷 = 代表性实测浓度 × 实测流量，并按可归属运行时间积分；记录单位换算和未检出处理 | 浓度；流量；时间；检出限规则 | 每 1 kg 酪蛋白的 kg 排放 | `eu-fdm-bat-2019-2031` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | 参考产品 | 证明输出是酪蛋白而非酪蛋白酸盐、其他衍生物、酪蛋白胶、胶黏剂或配方，并声明食用级/工业级和适用路线。 | 产品规范；销售描述；过程流程；食用产品的 CXS 290 声明 |
| `dq_route_specificity` | 生产清单 | 数据采集和计算全程保持酸路线与酶路线分开，只记录实际使用的路线药剂。 | 批次路线代码；配方记录；过程流程；路线特定质量和能源核对 |
| `dq_primary_data` | 前景过程 | 原料、路线药剂、水、能源、产品、共产品、废物和直接排放均采用设施和产品特定记录。推理估算不得作为最终前景值。 | 签核批次记录；校准仪表；账单；实验室和监测报告；计算工作表 |
| `dq_temporal_completeness` | 报告期间 | 覆盖声明期间每个生产批次/活动及可归属的停机、清洗、返工和处理事件，或逐项披露并论证缺口。 | 生产日历；完整性核对；缺失数据日志；缺口处理 |
| `dq_estimate_replacement` | 暂定范围 | 每项 `reasoned_estimate` 范围仅作临时编制或 QA 筛查。完整声明报告期间数据可用时应以评审后的场址/批次证据替换；路线、设备、等级、原料、包装或处理发生重大变化时立即替换。 | 批准的替换数据集；评审记录；变更控制记录 |
| `dq_source_limits` | Codex 和 BAT 来源 | Codex 仅用于食用产品身份和路线区分，BAT 仅用于过程和监测覆盖。不得把组成限值、质量因子、BAT-AEL 或指示性 BAT 绩效水平当作通用酪蛋白 LCI 值。 | 与 `codex-cxs-290-1995` 和 `eu-fdm-bat-2019-2031` 关联的来源用途评审 |
| `dq_representativeness` | 发布数据集 | 披露技术、地理、时间和精度代表性，包括实际干燥器、凝固路线、设施、期间和数据缺口。 | 数据质量评价；数据集元数据；核验记录 |

## 9. 校验规则

| 规则编号 | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `validate_identity_scope` | 产品身份 | 声明输出为酪蛋白酸盐、其他衍生物、酪蛋白胶、胶黏剂或配方而非酪蛋白时，校验失败。 | `un-cpc-3-0-casein`; `codex-cxs-290-1995`; `codex-cxs-206-1999` |
| `validate_reference_identity` | 参考流 | 必须使用产品流 UUID `53f7b47f-8d1a-4420-8e79-e931990656e6`、Mass 属性 UUID `93a60a56-a3c8-11da-a746-0800200b9a66`、Units of mass 单位组 UUID `93a60a57-a4c8-11da-a746-0800200c9a66`、单位 kg，并在归一化后恰为 1 kg 净酪蛋白。 | `un-cpc-3-0-casein` |
| `validate_route` | 凝固清单 | 每批次/生产活动必须采用实际声明路线。纯酶路线不得报告酸路线药剂，纯酸路线不得报告凝乳酶或其他酶药剂。 | `codex-cxs-290-1995` |
| `validate_boundary` | 过程覆盖 | 必须覆盖凝固、凝块回收和洗涤、干燥和整理、路线特定公用工程、废水路线、废物、直接排放、共产品去向和上游乳源原料数据集披露。 | `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279` |
| `validate_mass_basis` | 质量和得率 | 必须一致使用接收态、湿基、干基或校正基准；以 Codex 组成限值替代批次实测水分或干物质的换算应被拒绝。 | `codex-cxs-290-1995` |
| `validate_allocation` | 多输出过程 | 必须声明分配层级、所选关系、期间、因子、共产品分类，以及使用经济分配时的敏感性；因子在记录的舍入范围内合计为一。 | `eu-pef-2021-2279` |
| `validate_primary_records` | 前景数值 | 发布前景数据集不得以 `reasoned_estimate` 作为最终数量。每项重要前景行必须有可追溯场址或批次记录及已披露计算。 | `eu-pef-2021-2279`; `eu-fdm-bat-2019-2031` |
| `validate_source_use` | 来源约束 | 禁止把 Codex 组成/质量限值和 BAT 排放/绩效水平用作统一清单数量，LCI 应由场址监测和生产记录确定。 | `codex-cxs-290-1995`; `eu-fdm-bat-2019-2031` |
| `validate_bilingual_alignment` | PCR 双语文本 | 英文和中文文本必须具有相同顺序的系统边界、分配和校验规则标识。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 酪蛋白生产前景数据包和工厂门口单元过程数据集 |
| downstream_use | 经路线、地理、时间、技术、分配和数据质量评审后，可作为 `secondary_dataset` 或 `background_dataset` 使用 |
| allowed_use | 路线和等级匹配的酪蛋白生产建模，以及保留参考流限定信息的下游生命周期模型 |
| excluded_use | 直接替代酪蛋白酸盐、其他衍生物、酪蛋白胶或胶黏剂；未披露加权而替代酸/酶路线；把暂定范围作为最终 LCI |
| required_metadata | PCR id；酪蛋白流 UUID；设施和地理；报告期间；酸路线或酶路线；食用级或工业级；水分或干物质基准；动物来源；原料状态；干燥和处理技术；包装状态；分配；上游数据集 |
| required_quality_disclosure | 仪表和批次覆盖；实验室和监测方法；数据缺口；估算替换；质量平衡差异；分配敏感性；技术、地理、时间和精度代表性 |
| update_trigger | 新的评审后场址/批次证据替换暂定范围；原料、路线、设备、等级、干燥、包装、废水处理、治理、分配或产品规范发生重大变化；UUID 身份更正 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-casein` | 官方指南（`official_guidance`） | 联合国统计司，《Central Product Classification Version 3.0 Explanatory Notes》，子类 22260 Casein，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf，检索日期 2026-08-12 | 仅用于分类身份和产品范围锚定 |
| `codex-cxs-290-1995` | 标准（`standard`） | Codex Alimentarius，CXS 290-1995《Standard for Edible Casein Products》，2001 年修订并修正至 2023 年，https://workspace.fao.org/sites/codex/Standards/CXS%20290-1995/CXS_290e.pdf，检索日期 2026-08-12 | 食用酸酪蛋白、凝乳酶酪蛋白与酪蛋白酸盐的区分；路线分解；饮用质量洗涤水和食用产品身份；不作为通用 LCI 值 |
| `codex-cxs-206-1999` | 标准（`standard`） | Codex Alimentarius，CXS 206-1999《General Standard for the Use of Dairy Terms》，2022 年修正，https://workspace.fao.org/sites/codex/Standards/CXS%20206-1999/CXS_206e.pdf，检索日期 2026-08-12 | 乳制品术语和身份披露 |
| `eu-pef-2021-2279` | 官方指南（`official_guidance`） | Commission Recommendation (EU) 2021/2279 on Environmental Footprint methods，OJ L 471，https://eur-lex.europa.eu/eli/reco/2021/2279/oj/eng，检索日期 2026-08-12 | 产品特定前景数据、生命周期边界、分配层级、代表性、报告和核验 |
| `eu-fdm-bat-2019-2031` | 官方指南（`official_guidance`） | Commission Implementing Decision (EU) 2019/2031 establishing BAT conclusions for the food, drink and milk industries，OJ L 313，https://eur-lex.europa.eu/eli/dec_impl/2019/2031/oj/eng，检索日期 2026-08-12 | 水、能源、原料、废水、废气、残余物和处理的过程级清单与监测覆盖；BAT 值不是通用 LCI |
