---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.abalone-frozen-smoked-dried-salted-or-in-brine
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 鲍鱼，冷冻、烟熏、干制、盐腌或盐水浸泡

## 1. 范围与适用性

本 PCR 适用于食品级鲍属（*Haliotis* spp.）鲍鱼经冷冻、烟熏、干燥、盐腌或盐水浸泡后，在加工厂门口供应的前景数据包。范围包括带壳或去壳产品；以所列保藏路线制得、供人食用的鲍鱼粉、鲍鱼粗粉或颗粒也在范围内。一个数据集应代表已声明的物种或物种组合、野生或养殖原料来源、带壳状态、保藏路线、包装系统和储存条件。

前景边界始于加工企业接收活、鲜、冷藏、冷冻或已声明的同类别中间鲍鱼，止于符合销售要求并处于声明储存状态的包装产品离开工厂。养殖、育苗、养成、野生捕捞和卸港属于上游，应链接供应商数据集；分销、零售、消费者加工、食用及包装报废属于下游，除非研究明确扩展边界并单独报告。

本 PCR 不包括未采用所列保藏路线的活、鲜或冷藏鲍鱼；仅通过罐藏、调味汁、烹煮、调味等其他方式制备或保藏的鲍鱼；不可食用鲍鱼粉、粗粉或颗粒；不适合人食用的死亡鲍鱼；以及复合即食餐。下列官方鱼类加工资料仅作为工艺和控制基准；适用辖区的水产品安全要求优先。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.abalone-frozen-smoked-dried-salted-or-in-brine |
| classification_refs | CPC 3.0：21261，鲍鱼，冷冻、烟熏、干制、盐腌或盐水浸泡 |
| covered_products | 食品级鲍属产品，无论带壳与否，经冷冻、干燥、盐腌或盐水浸泡；烟熏鲍鱼，无论烟熏前或烟熏中是否烹煮；通过所覆盖路线生产、供人食用的鲍鱼粉、粗粉和颗粒 |
| excluded_products | 未采用覆盖保藏路线的活、鲜或冷藏鲍鱼；其他方式制备或保藏的鲍鱼；不可食用粉、粗粉或颗粒；不适合人食用的产品；完整菜肴或餐食 |
| representative_product | 采用一种已声明冷冻、烟熏、干燥、盐腌或盐水浸泡路线生产的包装整只或去壳鲍属产品 |
| production_route | 原料接收和预处理；一种或多种实际采用的保藏操作；包装；受控成品储存 |
| market_state | 工厂门口可销售产品，已声明物种/来源、带壳状态、保藏路线、净质量基准、包装气氛和要求的储存条件 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 在加工厂门口提供处于声明冷冻、烟熏、干制、盐腌或盐水浸泡状态的可销售食品级鲍鱼 |
| How much | 1 kg 可销售产品净质量，不含包装；应声明质量是否包括壳或覆盖盐水，存在盐水时报告沥干鲍鱼质量 |
| How well | 符合声明的物种/来源、带壳状态、保藏路线、适用时的水分或水活度规格、包装系统和储存条件 |
| How long or cycle | 一个生产批次归一化到工厂门口参考产出；应声明截至工厂门口的储存时长 |
| reference_flow_link | Abalone, frozen, smoked, dried, salted or in brine `61e83c4f-6657-4762-9a2b-9423a54b7bd5` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 工厂门口 1 kg 可销售鲍鱼产品净质量 |
| 参考产品流 | 鲍鱼，冷冻、烟熏、干制、盐腌或盐水浸泡 `61e83c4f-6657-4762-9a2b-9423a54b7bd5` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 学名或商业物种识别；野生或养殖来源及供应商地理；带壳、去壳、切片、粉、粗粉或颗粒形态；冷冻、热熏、冷熏、烟熏干燥、干燥、干盐腌、湿盐腌或盐水浸泡路线；烟熏前或烟熏中烹煮状态；净质量约定；壳计入情况；盐水产品的沥干质量和覆盖液质量；受控时的水分和水活度；包装材料及有氧、真空或气调条件；成品储存温度和时长 |

构建前景数据包时，`必需限定信息` 中适用于产品的每一项均应在数据集元数据、过程说明、参考流备注、产品说明或等效字段中声明。采用不同壳或覆盖液质量约定的产品，在换算到同一声明基准前不可直接比较。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品和全部质量归一化清单行 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 计量不含包装的产品净质量。壳和覆盖液是否计入应分别记录；盐水产品还应报告沥干鲍鱼质量。 |
| `energy_conversion` | 电力和热能投入 | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 保留计量原单位和换算因子；3.6 MJ/kWh 仅作为精确单位换算，不得作为能耗估计。 |
| `water_and_brine_mass` | 工艺水、盐水和废水 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 优先计量质量；按体积计量时应记录密度、温度和换算方法。食盐、加水、产品保留盐水和排放盐水应分开。 |
| `moisture_and_aw` | 干制和烟熏干制产品 | 产品特定的水分或水活度测量 | 质量分数或无量纲 aw | 记录分析方法、取样位置、批次、结果和适用限值；没有经验证的产品特定关系时，不得将水分含量换算为水活度。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 鲍鱼在加工设施接收时，物种/来源、带壳状态、温度、质量和供应商数据集引用均已声明 |
| starting_condition_role | 进入前景接收与预处理过程的上游产品投入 |
| product_classification_scope | 进入 CPC 3.0 类别 21261 产品生产路线的食品级鲍属产品 |
| recursive_input_rule | 当投入已是本类别内冷冻、烟熏、干制、盐腌或盐水浸泡鲍鱼时，将其记录为带供应商数据集的同类别中间品，并从本次接收/再加工开始当前前景边界；不得重建或重复计算其既有保藏负荷。 |
| upstream_dataset_requirement | 将野生捕捞或养殖生产、卸港、既有保藏、配料、包装材料、能源供应、供水和废物处理链接到地理和技术适宜的上游数据集。 |
| disclosure | 声明原料来源、投入状态、纳入过程、保藏路线、烹煮状态、包装气氛、储存条件、时间覆盖、排除操作和任何同类别中间品。 |

### 规范性边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_gate_to_gate` | foreground_system_boundary | 纳入接收、检验、清洗与预处理、声明的保藏操作、包装，以及截至工厂门口的受控成品储存。 | `codex-cac-rcp-52-2003`; `iso-14044-2006` |
| `boundary_route_specificity` | preservation_route | 仅实例化并披露实际采用的冷冻、烟熏、干燥、盐腌或盐水浸泡操作；不得把互斥路线建模为全部发生。 | `codex-cac-rcp-52-2003`; `codex-cxs-311-2013` |
| `boundary_cold_chain` | chilled_and_frozen_storage | 纳入从接收到工厂门口期间由企业控制的冷藏/冷冻用能和制冷剂损失；冷冻储存应记录时间和温度。 | `codex-cac-rcp-52-2003`; `fda-seafood-hazards-controls-2022` |
| `boundary_sanitation` | sanitation_and_wastewater | 纳入工艺和清洁用水、具有实质性的获准清洁剂、废水或废盐水排放及现场处理；产品接触操作使用饮用水或法律认可的适用水。 | `codex-cac-rcp-52-2003` |
| `boundary_capital_goods` | infrastructure | 默认门到门数据集不含建筑物和资本设备，除非适用研究、PCR 计划或重要性审查明确要求；任何纳入均应披露。 | `iso-14044-2006` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `receipt_and_preparation` | 原料接收与预处理 | `required` | 始终要求 | 前景接收、检验、清洗，以及按声明去壳或修整 | 离开预处理的鲍鱼中间品 kg |
| `preservation_route` | 路线特定保藏 | `required` | 只实例化实际采用的冷冻、烟熏、干燥、盐腌或盐水浸泡操作；实际序列可连接多项操作 | 前景保藏 | 保藏鲍鱼中间品 kg |
| `packaging_and_storage` | 最终包装与工厂门口储存 | `required` | 始终要求；储存条件遵循声明产品规格 | 前景包装和受控储存 | 1 kg 可销售参考产品净质量 |

### 过程：原料接收与预处理（`receipt_and_preparation`）

#### 输入

##### 产品流

###### 接收的野生鲍鱼原料（`wild_raw_abalone`）

原料来自野生捕捞时，记录从卸港或供应商数据集接收的鲍属产品。本行不得用于养殖鲍鱼。

- 选定流：野生鲍鱼，活的，新鲜的或冷藏的 `477d146c-cb2f-457d-a1a6-5d065dcbdca5`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量验收合格的野生原料质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 可销售参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receiving_batch`
- 数量范围：暂定原料到产品筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：10
  - 单位：kg/kg 参考产品
  - 基准：每 1 kg 可销售参考产品的合格鲍鱼原料质量
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 接收的养殖鲍鱼原料（`farmed_raw_abalone`）

记录从养殖供应商数据集接收的鲍属产品。应选择经核验的供应商特定 Tiangong 流，不得以水产苗种流替代。

- 选定流：Farmed abalone, live, fresh or chilled
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量验收合格的养殖原料质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 可销售参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receiving_batch`
- 数量范围：暂定原料到产品筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：10
  - 单位：kg/kg 参考产品
  - 基准：每 1 kg 可销售参考产品的合格鲍鱼原料质量
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 产品接触水（`preparation_water`）

记录清洗、适用时解冻、去壳辅助及产品接触预处理用水。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量或按批次核算的产品接触用水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 可销售参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_utilities`
- 来源：`codex-cac-rcp-52-2003`
- 数量范围：暂定预处理用水筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.1
  - 上限：100
  - 单位：kg/kg 参考产品
  - 基准：每 1 kg 可销售参考产品的接收和预处理供水
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 预处理电力（`preparation_electricity`）

记录泵、输送、清洗、去壳、切割、冰处理及其他预处理设备用电。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：计量并分配到接收与预处理的电力
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 可销售参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_preparation_utilities`
- 数量范围：暂定预处理用电筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.01
  - 上限：20
  - 单位：MJ/kg 参考产品
  - 基准：每 1 kg 可销售参考产品分配的接收与预处理电力
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 预处理鲍鱼中间品（`prepared_abalone`）

记录转入保藏的鲍鱼质量和状态，并保持与接收批次的可追溯性。

- 选定流：Prepared abalone intermediate, facility-specific
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量转入保藏的预处理鲍鱼质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 可销售参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_yield`
- 数量范围：暂定预处理出成率筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.05
  - 上限：1.2
  - 单位：kg/kg 合格鲍鱼原料
  - 基准：每 kg 合格鲍鱼原料的预处理鲍鱼质量
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 壳和预处理残余物（`shells_and_residues`）

壳、内脏、破损产品及其他预处理残余物在处理方式或共产品状态不同时应分别记录。

- 选定流：鲍鱼壳 `8caae24b-92f0-4ece-b1de-730bfbe4d9da`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按处理去向计量残余物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格鲍鱼原料，并换算报告到参考产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_yield`
- 数量范围：暂定残余物筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.95
  - 单位：kg/kg 合格鲍鱼原料
  - 基准：每 kg 合格鲍鱼原料的壳和残余物
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 预处理废水（`preparation_wastewater`）

记录离开预处理的产品接触水和清洁水，包括去向和现场处理。

- 选定流：未处理市政污水进水 `41eb8873-6852-40fe-8b5d-b792fe4d4754`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量或质量平衡计算送往处理的废水
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 可销售参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_preparation_utilities`
- 数量范围：暂定预处理废水筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg/kg 参考产品
  - 基准：每 1 kg 可销售参考产品的预处理废水
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

### 过程：路线特定保藏（`preservation_route`）

#### 输入

##### 产品流

###### 预处理或同类别鲍鱼投入（`preservation_abalone_input`）

记录上一步的预处理鲍鱼或供应商提供的已声明同类别中间品。保留路线顺序，不得重复计算既有保藏。

- 选定流：Prepared or same-category abalone intermediate
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量进入每项保藏操作的质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 可销售参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preservation_batch`
- 数量范围：暂定保藏投入筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.1
  - 上限：10
  - 单位：kg/kg 参考产品
  - 基准：每 1 kg 可销售参考产品进入保藏的鲍鱼
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 食品级食盐（`preservation_salt`）

仅在干盐腌、湿盐腌、盐水浸泡、渗透预处理或已声明烟熏/干燥配方中记录食盐。

- 选定流：食盐 `3a5fa711-4648-4d58-b94d-67b79e7476c7`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：称量批次投盐量，扣除有记录的回收再用食盐
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 可销售参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preservation_materials`
- 来源：`codex-cac-rcp-52-2003`; `codex-cxs-311-2013`; `lemus-mondaca-2018-abalone-drying`
- 数量范围：暂定食盐投入筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：5
  - 单位：kg/kg 参考产品
  - 基准：每 1 kg 可销售参考产品投加的食品级食盐
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 保藏用水（`preservation_water`）

记录配制盐水、湿盐腌、解冻、与烟熏相关的烹煮或路线特定清洗用水。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量加入保藏批次的水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 可销售参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preservation_materials`
- 来源：`codex-cac-rcp-52-2003`
- 数量范围：暂定保藏用水筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg/kg 参考产品
  - 基准：每 1 kg 可销售参考产品的保藏用水
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 保藏电力（`preservation_electricity`）

记录冷冻、制冷、风机、泵、干燥机、烟发生器、控制及路线操作用电。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：计量并分配到声明保藏操作的电力
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 可销售参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_preservation_energy`
- 数量范围：暂定保藏用电筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：200
  - 单位：MJ/kg 参考产品
  - 基准：每 1 kg 可销售参考产品的保藏电力
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 热燃料或烟熏介质（`thermal_fuel_or_smoke_medium`）

仅在实际使用时记录燃料、蒸汽、烟熏木材、烟液或其他热/烟熏介质。选择经核验的场址特定 Tiangong 流，并保留组成或燃料质量记录。

- 选定流：Declared thermal fuel or smoke medium, facility-specific
- 流属性/单位：按适用情况采用质量或净热值 / kg 或 MJ
- 数量规则：采购计量、批次投料或热能计量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 可销售参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preservation_energy`
- 来源：`codex-cac-rcp-52-2003`; `codex-cxs-311-2013`
- 数量范围：暂定热量投入筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：200
  - 单位：MJ/kg 参考产品
  - 基准：每 1 kg 可销售参考产品的交付热能或燃料能量
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 保藏鲍鱼中间品（`preserved_abalone_intermediate`）

记录实际保藏路线后的产品质量、带壳状态、食盐或覆盖液状态、受控时的水分和水活度及温度。

- 选定流：鲍鱼，冷冻、烟熏、干制、盐腌或盐水浸泡 `61e83c4f-6657-4762-9a2b-9423a54b7bd5`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量转入包装的保藏产品质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每个保藏批次，并换算报告到参考产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preservation_batch`
- 来源：`codex-cac-rcp-52-2003`; `codex-cxs-311-2013`; `lemus-mondaca-2018-abalone-drying`
- 数量范围：暂定保藏出成率筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.05
  - 上限：1.2
  - 单位：kg/kg 进入保藏的鲍鱼
  - 基准：每 kg 进入保藏鲍鱼的保藏产品
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 废盐水和保藏废水（`spent_brine_and_wastewater`）

按去向记录废盐水、解冻水、冷凝水和清洁废水，并区分回用和排放。

- 选定流：浓水 `76ab69b6-6fa7-461c-be07-bc54e581a699`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量排放，或根据水、盐、保留盐水和回用记录进行质量平衡计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 可销售参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_preservation_waste`
- 数量范围：暂定废盐水和废水筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg/kg 参考产品
  - 基准：每 1 kg 可销售参考产品的废盐水和保藏废水
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 排入空气的移除水分（`water_to_air`）

对干燥、烟熏干燥和其他除湿路线，根据实测投入/产出质量和水分结果计算移除水分；无实质除湿的路线不适用。

- 选定流：Water, emitted to air, facility-specific elementary flow
- 流属性/单位：Mass / kg
- 数量规则：由路线特定质量和水分平衡计算水分损失
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 可销售参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_preservation_quality`
- 来源：`lemus-mondaca-2018-abalone-drying`
- 数量范围：暂定移除水分筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：20
  - 单位：kg/kg 参考产品
  - 基准：每 1 kg 可销售参考产品在保藏期间移除的水
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 保藏过程直接排气（`preservation_air_emissions`）

按物质记录跨越前景环境边界的燃烧、制冷剂和烟熏直接排放；仅依据实测燃料/制冷剂活动量和有来源的因子或直接测量计算。

- 选定流：Substance-specific elementary flow to air
- 流属性/单位：Mass / kg
- 数量规则：按物质实测排放或计算排放
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 可销售参考产品净质量
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_preservation_energy`
- 来源：`codex-cxs-311-2013`
- 数量范围：暂定的按物质保藏直接排放筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10
  - 单位：kg/kg 参考产品
  - 基准：每 1 kg 可销售参考产品中每种已声明的直接排放物质
  - 基准类型：燃料清单（`fuel_inventory`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程：最终包装与工厂门口储存（`packaging_and_storage`）

#### 输入

##### 产品流

###### 进入包装的保藏鲍鱼（`packout_abalone`）

记录从声明路线转入最终包装的保藏鲍鱼，并保持批次和路线身份。

- 选定流：鲍鱼，冷冻、烟熏、干制、盐腌或盐水浸泡 `61e83c4f-6657-4762-9a2b-9423a54b7bd5`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量进入最终包装的产品质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 可销售参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_final_product_mass`
- 数量范围：暂定包装投入筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：1.2
  - 单位：kg/kg 参考产品
  - 基准：每 1 kg 可销售参考产品进入包装的保藏产品
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 初级塑料包装（`primary_packaging`）

按实际材料记录食品接触树脂、复合材料、托盘、袋或膜；仅在与采购包装匹配时使用所选通用薄膜。

- 选定流：塑料薄膜 `b01e4bd9-5ada-4676-8a90-be5f167c00fc`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：发放至合格包装的采购包装，扣除有记录的未用退料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 可销售参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_materials`
- 数量范围：暂定初级包装筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.001
  - 上限：0.2
  - 单位：kg/kg 参考产品
  - 基准：每 1 kg 可销售参考产品的初级包装
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 次级瓦楞包装（`secondary_packaging`）

按实际采购规格和经核验流记录瓦楞纸板或其他次级材料。

- 选定流：瓦楞纸板 `8bde297e-98df-463f-bcb4-0db52bf6e0b5`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：分配给合格产品的采购次级包装
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 可销售参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_materials`
- 数量范围：暂定次级包装筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.5
  - 单位：kg/kg 参考产品
  - 基准：每 1 kg 可销售参考产品的次级包装
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 包装和储存电力（`packaging_storage_electricity`）

记录密封、真空或气调设备、输送、最终冷冻/冷却及截至工厂门口的成品冷库用电。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：按有记录的设备、批次、储存体积和储存时间驱动分配计量电力
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 可销售参考产品净质量
- 基准类型：储存时长（`storage_duration`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_storage_energy`
- 来源：`codex-cac-rcp-52-2003`; `fda-seafood-hazards-controls-2022`
- 数量范围：暂定包装和储存用电筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.01
  - 上限：100
  - 单位：MJ/kg 参考产品
  - 基准：每 1 kg 可销售参考产品的包装和工厂门口储存电力
  - 基准类型：储存时长（`storage_duration`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 包装可销售鲍鱼参考产品（`reference_product_output`）

本行为定量参考产出。净产品、包装、壳、覆盖液和沥干质量应分别记录，以便复现 1 kg 归一化。

- 选定流：鲍鱼，冷冻、烟熏、干制、盐腌或盐水浸泡 `61e83c4f-6657-4762-9a2b-9423a54b7bd5`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：根据实测合格产品质量归一化后恰为 1 kg
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 kg 可销售参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_final_product_mass`
- 数量范围：参考流恒等校验
  - 范围角色：允许范围（`allowed_range`）
  - 下限：1
  - 上限：1
  - 单位：kg
  - 基准：归一化参考产出
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`iso-14044-2006`

##### 废物流

###### 包装不合格品和边角料（`packaging_scrap`）

按材料和处理去向记录不合格包装、裁边、薄膜、纸板和破损包装。

- 选定流：Packaging waste, material-specific
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按材料和去向计量包装废物
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 可销售参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_materials`
- 数量范围：暂定包装废物筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.2
  - 单位：kg/kg 参考产品
  - 基准：每 1 kg 可销售参考产品的包装不合格品和边角料
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 排入空气的制冷剂（`refrigerant_emissions`）

按物质记录加工企业控制的冷冻和冷库设备制冷剂损失。

- 选定流：Refrigerant-specific elementary flow to air
- 流属性/单位：Mass / kg
- 数量规则：按有记录的制冷负荷和储存驱动，将年度补充量或检漏损失分配到产品
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 可销售参考产品净质量
- 基准类型：储存时长（`storage_duration`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_storage_energy`
- 数量范围：暂定制冷剂损失筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg/kg 参考产品
  - 基准：每 1 kg 可销售参考产品中每种已声明的制冷剂排放
  - 基准类型：储存时长（`storage_duration`）
  - 证据类型：推理估算（`reasoned_estimate`）

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_by_subdivision` | route_and_batch_operations | 通过分别计量或过程拆分，避免在野生/养殖来源、保藏路线、产品形态以及具有实质差异的包装或储存条件之间进行分配。 | `iso-14044-2006`; `eu-pef-method-2021` |
| `allocation_shared_utilities` | shared_water_energy_and_storage | 共享公用工程采用反映因果关系的物理驱动分配，例如设备实测用量、运行时间、制冷负荷乘储存时长；没有更好驱动时才用产品质量。 | `iso-14044-2006`; `eu-pef-method-2021` |
| `allocation_shells_and_residues` | shells_offal_and_other_outputs | 首先记录各产出是废物还是共产品。共产品优先拆分；无法拆分时采用相关物理关系并披露。仅当无法建立物理关系时才采用经济分配，并报告敏感性结果。 | `iso-14044-2006` |
| `allocation_reuse_and_recycling` | reused_brine_packaging_and_residues | 除非适用研究明确要求系统扩展或回收方法，否则门到门数据集内不得计入避免负荷抵扣；回收物及其接收处理或产品系统应分别记录。 | `iso-14044-2006`; `eu-pef-method-2021` |
| `allocation_mass_balance` | foreground_mass_reconciliation | 在一致的湿基或干基上核对鲍鱼原料、水、盐、包装、产品、残余物、废水、覆盖液和移除水分；报告无法解释的不平衡，不得强行归入共产品。 | `codex-cac-rcp-52-2003`; `lemus-mondaca-2018-abalone-drying` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_receiving_batch` | `receipt_and_preparation` | 野生和养殖鲍鱼原料 | 接收批记录 | lot_id; species; wild_or_farmed; supplier; harvest_or_farm_geography; shell_state; receipt_time; receipt_temperature; gross_mass; rejected_mass; accepted_mass; supplier_dataset_ref | 经校准秤、接收检验和供应商追溯记录 | kg; 摄氏度 | 每批 | 报告期全部批次 | 每个纳入设施 | 按来源和产品路线汇总合格质量；不合格质量单列 | 秤校准；批次单；供应商证书；物种和来源核验 |
| `cp_preparation_utilities` | `receipt_and_preparation` | 预处理水、电力和废水 | 仪表和生产日志 | meter_start; meter_end; submeter_id; batch_id; water_source; wastewater_destination; operating_time; allocation_driver | 优先直接分表；否则以有记录物理驱动核对总表 | kg 水；kWh 或 MJ 电力；kg 废水 | 每批或班次 | 完整报告期 | 每条纳入预处理线 | 扣除有记录非过程用量；仅对剩余共享用量采用声明驱动 | 仪表校准；发票；班次日志；水质适用记录 |
| `cp_preparation_yield` | `receipt_and_preparation` | 预处理产品、壳和残余物 | 批次质量平衡 | accepted_raw_mass; prepared_mass; shell_mass; viscera_mass; other_residue_mass; retained_product_mass; destinations | 转移点和废物收集点经校准秤 | kg | 每批 | 完整报告期 | 每条纳入线 | 按批次和路线汇总各质量；报告未解释差额 | 秤校准；批次表；废物转移记录 |
| `cp_preservation_batch` | `preservation_route` | 保藏投入和产出 | 路线批次记录 | batch_id; route_sequence; input_mass; output_mass; species; shell_state; cook_status; time; temperature; pressure_if_any; storage_transition | 经校准秤及经验证路线控制日志 | kg；分钟或小时；摄氏度 | 每批 | 完整报告期 | 每条路线和设备链 | 仅汇总路线和产品限定信息等同的批次 | 校准；HACCP 或过程控制记录；批次放行结果 |
| `cp_preservation_materials` | `preservation_route` | 盐、水、盐水和路线配料 | 批次配方记录 | batch_id; salt_mass; water_mass; reused_brine_mass; discharged_brine_mass; ingredient_identity; food_grade_status; concentration_measurement | 称量单、流量计和配方日志 | kg；质量分数 | 每批 | 完整报告期 | 每条路线和设施 | 原生、回用、保留和排放量分列 | 秤或仪表校准；配料规格；配方批准 |
| `cp_preservation_energy` | `preservation_route` | 电力、热燃料、烟熏介质和直接排放 | 仪表、燃料和维护记录 | batch_id; electricity_kWh; fuel_quantity; fuel_LHV; steam_quantity; equipment_time; smoke_medium; refrigerant_top_up; emission_factor_id; direct_measurement | 分表和采购记录；直接测量或引用因子计算排放 | kWh；MJ；kg | 批次、班次或按月分配到批次 | 完整报告期 | 每套保藏设备 | 显式换算能源单位；按因果驱动分配共享能源；各物质排放分别计算 | 仪表校准；发票；燃料证书；因子引用；泄漏和烟气记录 |
| `cp_preservation_quality` | `preservation_route` | 水分、水活度、盐、温度和产品状态 | 实验室和过程控制记录 | batch_id; sample_id; sampling_location; moisture_result; moisture_method; aw_result; aw_method; salt_result; core_temperature; storage_requirement; specification_limit | 经验证实验室或校准在线方法 | 质量分数；aw；摄氏度 | 每批或经验证抽样计划 | 完整报告期 | 每项声明产品规格 | 保留批次结果并报告产量加权汇总，不替代规格限值 | 方法标识；校准；实验室结果；放行决定 |
| `cp_preservation_waste` | `preservation_route` | 废盐水、废水、冷凝水和路线残余物 | 排放和废物记录 | batch_id; stream_identity; mass_or_volume; density; salt_concentration; destination; treatment; reuse_quantity | 流量计、罐液位、称量单或有记录质量平衡 | kg；m3；质量分数 | 每次排放或批次 | 完整报告期 | 每个排放点 | 以记录密度换算体积；回用、现场处理和场外处理分列 | 仪表校准；转移联单；处理收据；质量平衡审查 |
| `cp_packaging_materials` | `packaging_and_storage` | 初级/次级包装和边角料 | 包材发放和废物记录 | material_id; supplier; mass_per_item; items_issued; conforming_packs; unused_returns; reject_mass; destination | 以称重核验物料清单并核对库存 | kg；件 | 每次包装运行 | 完整报告期 | 每种纳入包装形式 | 由核验单件质量计算用量，并核对发放、退料和边角料 | 供应商规格；称重检查；库存和废物记录 |
| `cp_packaging_storage_energy` | `packaging_and_storage` | 包装电力、冷库和制冷剂 | 仪表和制冷日志 | equipment_id; electricity_kWh; storage_temperature; entry_time; exit_time; storage_mass; refrigerant_type; top_up_mass; leak_event | 设备分表或总表分配；温度记录仪；维护记录 | kWh；摄氏度；kg*h；kg 制冷剂 | 连续或班次计量；每个储存批次 | 包括工厂门口储存在内的完整报告期 | 每条包装线和冷库 | 按制冷负荷代理和质量-时间分配冷库电力；制冷剂按物质报告 | 仪表校准；连续温度记录；维护发票；分配工作表 |
| `cp_final_product_mass` | `packaging_and_storage` | 参考产品和净质量约定 | 包装和批次放行记录 | batch_id; gross_pack_mass; packaging_mass; covering_liquid_mass; drained_abalone_mass; shell_included; conforming_product_mass; route; expiry_or_storage_instruction | 经校准秤和声明的净/沥干质量程序 | kg | 每批或统计受控包装检查 | 完整报告期 | 每种纳入产品和包装形式 | 按声明净质量约定归一化到实测合格质量 | 秤校准；法定计量检查；标签；批次放行证书 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | all inventory rows | 归一化数量 = 报告期流量 / 报告期合格参考产品质量 | 流量；合格参考产品质量 | 每 1 kg 参考产品数量 | `iso-14044-2006` |
| `calc_net_product_mass` | brined and packaged product | 参考净质量 = 包装总质量 - 包装材料质量；覆盖液质量和沥干鲍鱼质量分列，并声明哪一项是可销售产品基准 | 包装总质量；包装质量；覆盖液质量；沥干质量 | 产品净质量和沥干质量限定信息 | `codex-cxs-311-2013` |
| `calc_energy_conversion` | electricity | MJ = kWh x 3.6；保留原始 kWh 记录，不得把换算作为能耗估计 | 计量 kWh | MJ | `iso-14044-2006` |
| `calc_route_yield` | preparation and preservation | 出成率 = 实测合格产出质量 / 实测鲍鱼投入质量，壳、覆盖液和水分基准保持一致 | 投入质量；产出质量；带壳状态；水分基准 | 路线特定质量出成率 | `lemus-mondaca-2018-abalone-drying` |
| `calc_brine_composition` | salting and brining | 初始盐水盐分数 = 盐质量 /（盐质量 + 水质量）；回用盐水和最终实测浓度分列 | 盐质量；水质量；回用记录；实测浓度 | 配制盐水分数和最终浓度 | `codex-cac-rcp-52-2003`; `codex-cxs-311-2013` |
| `calc_removed_water` | drying and smoke-drying | 移除水 = 投入水质量 + 加水 - 产出产品水质量 - 液体废物水质量；各项均以实测质量和水分为基础 | 投入/产出质量；水分结果；加水；液体废物 | 排入空气的水和质量平衡残差 | `lemus-mondaca-2018-abalone-drying` |
| `calc_shared_utilities` | shared meters | 采用有记录因果驱动分配共享用量；分配总和回算到实测总量并报告未分配残差 | 仪表总量；排除用量；设备时间；制冷负荷；质量-时间 | 分配公用工程量和残差 | `iso-14044-2006`; `eu-pef-method-2021` |
| `calc_mass_balance` | each process and reporting period | 质量平衡残差 = 实测质量投入总和 - 实测质量产出总和；调查并披露水分变化、蒸发、取样、库存变化和测量不确定性 | 全部质量投入；全部质量产出；库存变化 | 质量残差和说明 | `iso-14044-2006`; `codex-cac-rcp-52-2003` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | product and raw material | 识别鲍属物种或有依据的组合、野生/养殖来源、供应商地理、带壳状态、保藏路线、烹煮状态、包装形式和储存条件。 | 批次追溯；供应商声明；产品规格；标签 |
| `dq_temporal` | foreground activity data | 覆盖包含季节和储存负荷变化的完整代表性报告期；较短时披露期间、生产活动背景和代表性限制。 | 带日期批次、仪表、采购和生产记录；`eu-pef-method-2021` |
| `dq_technological` | preservation and packaging | 采集数据与实际设备链、保藏顺序、包装气氛和冷库运行相匹配。 | 设备清单；工艺流程；批次控制；`eu-pef-method-2021` |
| `dq_geographical` | utilities and upstream links | 使用场址特定公用工程和地理适宜的上游数据集，或说明代理选择。 | 场址地址；公用事业供应商；数据集元数据；`eu-pef-method-2021` |
| `dq_completeness` | inventory | 纳入每个必需过程和全部实测原料、水、盐、能源、包装、产品、废物、废水和直接排放；零值、不适用和缺失记录分列。 | 核对台账；仪表覆盖图；质量和能源检查 |
| `dq_measurement` | mass, energy, temperature, moisture, and aw | 使用经校准仪器或经核验发票，保留方法、校准、取样和换算证据。 | 校准证书；实验室方法；发票；记录仪数据 |
| `dq_route_separation` | multi-product facilities | 以直接记录或有记录因果分配驱动区分路线及具有实质差异的产品形态。 | 分表；批次计划；分配工作表；`iso-14044-2006` |
| `dq_estimate_status` | provisional ranges | 所有 `reasoned_estimate` 范围仅用于 QA 筛查；数据集正常发布前以采集值和有来源因子替代。 | 数据集审查记录；已完成采集协议 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_identity_and_scope` | product_identity | 确认鲍属身份、一个声明原料来源、覆盖保藏路线、带壳/形态状态、包装和储存条件；拒绝其他方式制备产品和未声明路线混合。 | `environdec-fish-and-fish-products-pcr-v1`; `codex-cac-rcp-52-2003` |
| `validate_reference_flow` | reference_flow | 确认产品流 `61e83c4f-6657-4762-9a2b-9423a54b7bd5`、Mass 属性 `93a60a56-a3c8-11da-a746-0800200b9a66`、Units of mass 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`、kg 单位及可复现净质量约定。 | `iso-14044-2006` |
| `validate_process_completeness` | process_inventory | 确认接收与预处理、实际保藏操作、包装和工厂门口储存均存在；未发生的保藏路线应不存在或明确不适用。 | `codex-cac-rcp-52-2003` |
| `validate_mass_balance` | mass_inventory | 对每个过程核对实测投入、产品、残余物、废水、覆盖液、移除水分和库存变化，并披露未解决残差。 | `iso-14044-2006`; `codex-cac-rcp-52-2003` |
| `validate_frozen_route` | frozen_product | 冷冻产品保留冷冻和储存时间-温度记录；以不高于 -18 摄氏度作为 Codex 基准，除非适用产品或辖区规格要求其他经验证限值。 | `codex-cac-rcp-52-2003` |
| `validate_smoked_dried_route` | smoked_dried_product | 记录烟熏、干燥、食盐、包装、储存、水分和水活度控制。若采用 CXS 311 烟熏干制基准声称常温稳定，应证明 aw 不高于 0.75 或水分不高于 10%；否则保留经验证的产品特定限值和储存要求。 | `codex-cxs-311-2013`; `fda-seafood-hazards-controls-2022` |
| `validate_brine_and_salt` | salted_or_brined_product | 核对食品级食盐、水、回用盐水、产品保留覆盖液和废盐水；记录实测配方或最终浓度，不得假定盐吸收。 | `codex-cac-rcp-52-2003`; `codex-cxs-311-2013` |
| `validate_packaging_and_label` | packaged_product | 确认包装材料和气氛、净质量或沥干质量约定、批次身份及储存/操作说明与所建模产品一致。 | `codex-cxs-311-2013`; `fda-seafood-hazards-controls-2022` |
| `validate_data_quality` | dataset_release | 确认时间、技术、地理、完整性和精度证据，并披露代理数据集、分配、排除项和不确定性。 | `eu-pef-method-2021`; `iso-14044-2006` |
| `validate_no_estimate_as_observation` | quantitative_inventory | 若把暂定 `reasoned_estimate` 当作实测值复制进前景清单，则发布失败；发布前景数量只能来自采集值或透明计算值。 | `eu-pef-method-2021` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | `secondary_dataset`；仅在方法学审查、汇总和不确定性披露完成后可作为 `background_dataset` |
| downstream_use | 用于加工鲍鱼工厂门口供应的前景 `process` 数据集及下游 `lifecyclemodel` 投影 |
| allowed_use | 带明确野生捕捞或养殖上游链接的门到门产品建模；路线特定供应链研究；清单开发和经审查汇总 |
| excluded_use | 未换算时直接比较不同带壳、沥干质量、路线或储存约定；把养殖或捕捞负荷归入本门到门数据集；作为法定食品安全认证；把暂定范围作为实测数据 |
| required_metadata | PCR id 和版本状态；物种/来源；供应商地理；壳和产品形态；路线顺序；烹煮状态；净/沥干/覆盖液质量基准；适用时水分和 aw；包装和气氛；储存温度及时长；报告期；场址地理；分配；上游数据集引用 |
| required_quality_disclosure | 仪表和批次覆盖；校准和实验室方法；数据缺口和代理；仍作为 QA 筛查的推理估算；质量平衡残差；共享公用工程分配；共产品决定；不确定性和代表性限制 |
| update_trigger | 原料来源、物种组合、保藏设备或顺序、配方、货架稳定规格、包装气氛或材料、制冷系统、储存时长、分配方法发生变化，或出现会实质改变规则/QA 范围的新证据 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `codex-cac-rcp-52-2003` | `standard` | Codex Alimentarius，CAC/RCP 52-2003，《鱼和鱼制品操作规范》第二版，https://www.fao.org/4/i2382e/i2382e.pdf，检索于 2026-08-07 | 工艺分解；原料接收；饮用水；冷冻和冷冻储存；盐腌、干燥、烟熏、包装、储存和卫生控制 |
| `codex-cxs-311-2013` | `standard` | Codex Alimentarius，CXS 311-2013，《烟熏鱼、烟熏香味鱼和烟熏干制鱼标准》，https://www.fao.org/input/download/standards/13292/CXS_311e.pdf，检索于 2026-08-07 | 条件性烟熏/烟熏干制路线定义；食盐、水分、水活度、包装、储存、净质量和标签基准 |
| `fda-seafood-hazards-controls-2022` | `official_guidance` | 美国食品药品监督管理局，《鱼和鱼制品危害与控制指南》，2022 年 6 月版，https://www.fda.gov/media/80637/download，检索于 2026-08-07 | 冷冻、冷藏、干燥、食盐、低氧包装、标签和水产品加工危害的批次记录与控制 |
| `environdec-fish-and-fish-products-pcr-v1` | `standard` | EPD International，Fish and fish products PCR 1.0，https://environdec.com/pcr-library/pcr_7313bb4a-e17b-48f9-85ad-72347b9de578，检索于 2026-08-07 | 冷冻、干燥、盐腌、盐水浸泡和烟熏水产品的外部 PCR 类别背景 |
| `iso-14044-2006` | `standard` | ISO 14044:2006 及修正案 1:2017、2:2020，《环境管理 生命周期评价 要求与指南》，https://www.iso.org/standard/38498.html，检索于 2026-08-07 | 功能单位一致性；清单计算；分配层级；报告、解释和审查 |
| `eu-pef-method-2021` | `official_guidance` | 欧盟委员会建议 C(2021) 9332，附件一《产品环境足迹方法》，https://environment.ec.europa.eu/system/files/2021-12/Annexes%201%20to%202.pdf，检索于 2026-08-07 | 数据质量维度；代表性、完整性、精度、多功能性和透明数据集文档 |
| `lemus-mondaca-2018-abalone-drying` | `literature` | Lemus-Mondaca 等，Convective Drying of Osmo-Treated Abalone (*Haliotis rufescens*) Slices: Diffusion, Modeling, and Quality Features，Journal of Food Quality，2018，DOI: 10.1155/2018/6317943 | 鲍鱼干燥记录应包含预处理食盐、时间、温度、水分迁移和产品质量变量；不作为通用运行范围 |
