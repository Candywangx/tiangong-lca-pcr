---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.groundnut-oil-refined
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 精炼花生油

## 1. 范围与适用性

本 PCR 适用于以花生（落花生，*Arachis hypogaea*）种子所得毛花生油为原料生产的散装食用精炼花生油。前景范围从炼油厂接收毛花生油开始，包括脱胶、与实际路线相符的碱炼或物理精炼分支、脱色与过滤、脱臭、后处理及散装储存。代表路线为化学精炼。采用物理精炼时，必须采集实际工序、预处理、物料投入、收率、排放及共产品数据，不得直接套用代表路线的数据。

前景边界始于炼油厂门口的毛花生油。油料种植、花生预处理、压榨或溶剂浸出以及毛油运至炼油厂属于上游，必须连接相应数据集。零售包装、炼油厂门外分销、烹调使用和生命周期终结不在前景边界内。调和油、氢化或酯交换产品、生物柴油原料，以及未精炼即销售的毛花生油均不适用。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.groundnut-oil-refined |
| classification_refs | CPC 3.0：21622，精炼花生油 |
| covered_products | 主要由花生油料制得的散装精炼食用油，包括声明实际路线的化学精炼或物理精炼等级 |
| excluded_products | 毛花生油；食用调和油；氢化或酯交换油脂；调味消费品；生物柴油或其他非食品衍生物 |
| representative_product | 零售包装前、炼油厂门口的精炼花生油 |
| production_route | 毛油接收、脱胶及与路线相符的中和、脱色与过滤、脱臭与后处理 |
| market_state | 符合 Codex CXS 210-1999 或所声明适用市场规范的散装食用精炼油 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 炼油厂门口的精炼食用花生油 |
| How much | 1 kg |
| How well | 符合 Codex CXS 210-1999 或所声明的等效适用规范，并记录精炼路线和质量依据 |
| How long or cycle | 一个有代表性的连续或批次炼油生产期，按可销售产品归一化 |
| reference_flow_link | 功能单位由下列天工产品流及 Mass 属性表示 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 花生油，精炼 `f3a626d9-6e6e-42c2-9542-4824ab538765` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 纯花生油或已声明的调和状态；化学或物理精炼路线；食用品质规范；炼油厂地理位置；技术和基准年；散装状态；毛油起始条件 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品及质量清单流 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 所有前景数量按 1 kg 可销售散装精炼花生油归一化；保留未舍入的生产记录并报告换算因子。 |
| `energy_measurement` | 电力与热能 | 与所选天工流相符的能量属性 | 电力用 kWh；热量用 MJ | 用有记录的场址特定参数将燃料或蒸汽计量值转换为交付过程热量，不得混用燃料投入与交付热量。 |
| `water_measurement` | 工艺水和废水 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 使用实测质量，或用已声明密度和温度基准将实测体积换算为质量。 |
| `concentration_correction` | 氢氧化钠和酸溶液 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg 活性物质及 kg 溶液 | 记录溶液质量及浓度后计算活性物质；连接与实际采购浓度相符的背景流。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 炼油厂门口接收的毛花生油；已知时包括其水分、胶质、游离脂肪酸和杂质状态 |
| starting_condition_role | 前景精炼系统的上游产品投入 |
| product_classification_scope | 参考输出为 CPC 3.0 代码 21622；毛花生油为 CPC 3.0 代码 21621 |
| recursive_input_rule | 外购精炼花生油或经外部处理后进入系统的返工油作为单独产品投入记录并连接供应商数据集，不在本 PCR 内递归重建 |
| upstream_dataset_requirement | 毛花生油、化学品、水、电力、热能、厂内使用的包装以及外部处理服务应连接与地理和技术相符的上游数据集 |
| disclosure | 声明精炼路线、纳入工序、场址与期间、毛油来源与状态、产品收率、返工比例、共产品去向、外部处理及任何省略工序 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `system_boundary_rule_1` | 炼油核心前景 | 纳入毛油接收和储存损失、脱胶、与路线相符的中和或物理精炼预处理、脱色与过滤、脱臭、后处理、可直接归属于精炼的厂内公用工程以及至炼油厂门口的散装产品储存。 | `jrc-fdm-bref-2019`; `list-pattee-2020-peanut-oil` |
| `system_boundary_rule_2` | 上下游划分 | 油料种植、压榨或溶剂浸出和毛油进厂运输不计入前景，但须连接上游数据集；零售包装、分销、使用和生命周期终结不计入。 | `codex-cxs-210-1999` |
| `system_boundary_rule_3` | 条件工序与递归投入 | 若皂脚酸化、冷凝物或洗涤器处理以及废水处理在场址内运行，则纳入前景；否则记录外送共产品、废物、排放和处理服务。外购精炼油或外部返工油按所声明的递归投入规则处理。 | `jrc-fdm-bref-2019` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `degumming_neutralisation` | 脱胶及与路线相符的中和 | required | 脱胶为必需工序；氢氧化钠中和仅适用于化学精炼路线，物理精炼路线须以实测的物理精炼预处理替代 | 去除磷脂、游离脂肪酸及相关杂质 | 1 kg 转入脱色的中间油 |
| `bleaching_filtration` | 脱色与过滤 | required | 纳入吸附剂制备、接触、过滤和废白土处理 | 去除色素、氧化产物、痕量污染物和残皂 | 1 kg 转入脱臭的脱色油 |
| `deodorisation_finishing` | 脱臭、后处理与散装储存 | required | 纳入真空水蒸气汽提、冷凝或洗涤、冷却、精滤和可销售散装储存 | 生产符合规范的精炼油 | 1 kg 可销售散装精炼花生油 |
| `soapstock_splitting` | 皂脚酸化 | conditional | 仅当报告场址内进行酸化时纳入 | 将皂脚转化为酸化油和水相残余物 | 实测处理皂脚量 |

### 过程：脱胶及与路线相符的中和（`degumming_neutralisation`）

#### 输入

##### 产品流

###### 毛花生油（`crude_groundnut_oil`）

毛花生油进入炼油厂边界并携带全部上游生产负荷。记录经库存变化、取样和装卸损失修正的储罐接收量。

- 选定流：粗花生油 `4becfdba-2a4c-4c6f-a503-75db987fdc16`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测毛油接收量减去属于报告期的库存增加
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 可销售精炼花生油
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_crude_oil_receipts`
- 来源：
- 数量范围：暂定炼油收率 QA 校验范围
  - 范围角色：默认估计（`default_estimate`）
  - 下限：1.00
  - 上限：1.15
  - 单位：kg
  - 基准：每 1 kg 可销售精炼花生油
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 工艺水（`degumming_water`）

记录水化、洗涤、化学品稀释和离心机清洗中可归属于该过程的用水。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：脱胶与中和的计量或批次表供水量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 中间油输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_degumming_water`
- 来源：
- 数量范围：暂定用水筛选范围
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：5
  - 单位：kg
  - 基准：每 1 kg 中间油输出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 磷酸（`degumming_acid`）

记录酸法脱胶所用磷酸。如实际使用柠檬酸或其他经批准的试剂，应以准确的采购物质替换选定流，并保留活性物质计算。

- 选定流：磷酸 `9396269a-cf0d-4b38-ae6d-ab6b91e1dc87`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg 活性酸
- 数量规则：采购溶液质量乘以记录的活性酸浓度
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 中间油输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_degumming_chemicals`
- 来源：`jrc-fdm-bref-2019`
- 数量范围：植物油炼制磷酸用量
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.0001
  - 上限：0.002
  - 单位：kg 活性酸
  - 基准：每 1 kg 中间油输出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：外部来源（`external_source`）
  - 来源：`jrc-fdm-bref-2019`

###### 氢氧化钠（`neutralisation_alkali`）

记录化学精炼路线使用的氢氧化钠。对于有记录的物理精炼路线，将本行标记为不适用；不得在未记录路线的情况下直接填零。

- 选定流：氢氧化钠 `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg 活性 NaOH
- 数量规则：采购溶液质量乘以记录的 NaOH 浓度
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 中间油输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_degumming_chemicals`
- 来源：`jrc-fdm-bref-2019`
- 数量范围：植物油炼制 NaOH 用量
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.001
  - 上限：0.006
  - 单位：kg 活性 NaOH
  - 基准：每 1 kg 中间油输出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：外部来源（`external_source`）
  - 来源：`jrc-fdm-bref-2019`

###### 电力（`degumming_electricity`）

记录泵送、混合、辅助加热、离心和过程控制的计量电力。应选择与场址地理和供电电压相符的天工电力流。

- 选定流：交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / kWh
- 数量规则：分表读数，或依据炼油厂总电表的工程分摊
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 中间油输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_degumming_energy`
- 来源：
- 数量范围：暂定电力筛选范围
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0.001
  - 上限：1
  - 单位：kWh
  - 基准：每 1 kg 中间油输出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 脱胶或中和油（`degummed_neutralised_oil`）

用储罐转移或质量平衡记录计量转入脱色的中间油。

- 选定流：脱胶或中和花生油；前景中间流
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测转移量，或由投入、分别实测的分离物流和库存变化计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 可销售精炼花生油
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_intermediate_balance`
- 来源：`mass-balance-identity`

###### 皂脚或分离胶质（`soapstock_gums`）

仅在有明确有益用途和经济价值时，将分离胶质、皂脚或酸化油记录为产品输出；否则按废物记录同一实测质量及去向。

- 选定流：皂脚、胶质或酸化油；路线特定前景输出
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测分离物流质量；商业基准要求时按水分修正
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 中间油输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coproduct_waste`
- 来源：`jrc-fdm-bref-2019`
- 数量范围：暂定分离物流筛选范围
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：0.15
  - 单位：kg
  - 基准：每 1 kg 中间油输出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 脱胶和中和废水（`degumming_wastewater`）

记录离开过程并送往厂内或外部处理的水相废液，包括选择处理数据集所需的实测污染物特征。

- 选定流：植物油炼制废水；须按场址选择处理特定流
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量排放量或水量平衡，不含循环水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 中间油输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coproduct_waste`
- 来源：`jrc-fdm-bref-2019`
- 数量范围：暂定废水筛选范围
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：5
  - 单位：kg
  - 基准：每 1 kg 中间油输出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

### 过程：脱色与过滤（`bleaching_filtration`）

#### 输入

##### 产品流

###### 脱胶或中和油（`bleaching_feed_oil`）

记录从上一过程接收的前景中间流，不得重复计入毛油上游负荷。

- 选定流：脱胶或中和花生油；前景中间流
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测转移量或经核对的中间流质量平衡
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 脱色油输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_intermediate_balance`
- 来源：`mass-balance-identity`

###### 脱色白土（`bleaching_earth`）

记录实际投加的新鲜脱色白土或其他吸附剂。除非珍珠岩或助滤剂单独消耗并记录，不得以其代替脱色白土。

- 选定流：脱色白土 `a49e60f4-17c1-45c4-95db-4c0c6e593a85`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：过磅单、采购库存平衡或批次投料记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 脱色油输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bleaching_materials`
- 来源：`jrc-fdm-bref-2019`
- 数量范围：植物油炼制脱色白土用量
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.001
  - 上限：0.03
  - 单位：kg
  - 基准：每 1 kg 脱色油输出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：外部来源（`external_source`）
  - 来源：`jrc-fdm-bref-2019`

###### 电力（`bleaching_electricity`）

使用与场址相符的电力流记录真空、搅拌、泵送和过滤用电。

- 选定流：交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / kWh
- 数量规则：分表读数或有记录的工程分摊
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 脱色油输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bleaching_energy`
- 来源：
- 数量范围：暂定电力筛选范围
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0.001
  - 上限：1
  - 单位：kWh
  - 基准：每 1 kg 脱色油输出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 脱色花生油（`bleached_oil`）

记录过滤后转入脱臭的油。

- 选定流：脱色花生油；前景中间流
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测转移量，或投入油减去实测滞留油和其他损失并按库存变化修正
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 可销售精炼花生油
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_intermediate_balance`
- 来源：`mass-balance-identity`

##### 废物流

###### 废脱色白土（`spent_bleaching_earth`）

记录湿废吸附剂、含油率、回收做法和最终去向。应选择与地理及处理方式相符的废物流，不得假设现有中国特定天工流可普遍适用。

- 选定流：废脱色白土；待选择场址和处理特定废物流
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg 湿废物
- 数量规则：实测外运质量；与新鲜白土、滞留油和水分核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 脱色油输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coproduct_waste`
- 来源：`jrc-fdm-bref-2019`
- 数量范围：暂定废白土筛选范围
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0.001
  - 上限：0.06
  - 单位：kg 湿废物
  - 基准：每 1 kg 脱色油输出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

### 过程：脱臭、后处理与散装储存（`deodorisation_finishing`）

#### 输入

##### 产品流

###### 脱色花生油（`deodorisation_feed_oil`）

记录从脱色过程接收的前景中间流，避免重复计入其上游清单。

- 选定流：脱色花生油；前景中间流
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测转移量或经核对的中间流质量平衡
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 可销售精炼花生油
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_intermediate_balance`
- 来源：`mass-balance-identity`

###### 蒸汽过程热（`deodorisation_heat`）

记录水蒸气汽提、油品加热和真空系统运行的交付过程热。仅计量蒸汽质量时，应根据实测压力、冷凝物状态和有记录的焓值方法计算交付热量。

- 选定流：蒸汽工艺热 `fcf9e128-688f-42f0-9dca-85d2319cfac5`
- 流属性/单位：Gross calorific value `93a60a56-a3c8-14da-a746-0800200c9a66` / MJ
- 数量规则：实测交付热量，或蒸汽质量乘以有记录的可用焓差
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 可销售精炼花生油
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_deodorisation_energy`
- 来源：`jrc-fdm-bref-2019`
- 数量范围：暂定过程热筛选范围
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0.1
  - 上限：10
  - 单位：MJ
  - 基准：每 1 kg 可销售精炼花生油
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 电力（`deodorisation_electricity`）

使用与场址供电相符的流记录真空泵、循环、冷却辅助设备、精滤和散装储存用电。

- 选定流：交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / kWh
- 数量规则：分表读数或有记录的工程分摊
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 可销售精炼花生油
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_deodorisation_energy`
- 来源：
- 数量范围：暂定电力筛选范围
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0.001
  - 上限：1
  - 单位：kWh
  - 基准：每 1 kg 可销售精炼花生油
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 精炼花生油（`refined_groundnut_oil`）

本流为定量参考输出。仅计入满足所声明规范的可销售散装油；返回过程的不合格油为内部返工。

- 选定流：花生油，精炼 `f3a626d9-6e6e-42c2-9542-4824ab538765`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：根据实测可销售输出归一化后的固定参考数量 1 kg
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：不适用（`not_applicable`）
- 归一化基准：参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：方法公式（`method_formula`）
- 来源：`mass-balance-identity`

###### 脱臭馏出物（`deodoriser_distillate`）

仅在具有经核实的有益用途和经济价值时，将冷凝物或脱臭馏出物记录为产品；否则记录实际废物或处理路线。不得将棕榈油特定的天工流用于花生油馏出物。

- 选定流：花生油脱臭馏出物；待选择路线特定前景输出数据集
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按库存变化修正的实测收集质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 可销售精炼花生油
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coproduct_waste`
- 来源：`jrc-fdm-bref-2019`
- 数量范围：暂定馏出物筛选范围
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：0.1
  - 单位：kg
  - 基准：每 1 kg 可销售精炼花生油
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 脱臭冷凝物及洗涤废水（`deodorisation_wastewater`）

记录送往处理的受污染冷凝物或洗涤液。闭路循环清洁冷却水不作为消耗投入报告，但须报告补充水和排放水。

- 选定流：植物油炼制废水；须按场址选择处理特定流
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量排放量或冷凝物平衡，不含清洁循环水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 可销售精炼花生油
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coproduct_waste`
- 来源：`jrc-fdm-bref-2019`
- 数量范围：暂定废水筛选范围
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：5
  - 单位：kg
  - 基准：每 1 kg 可销售精炼花生油
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 脱臭器直接排气（`deodoriser_vent_emissions`）

用准确的天工基本流报告冷凝器和洗涤器后的实测有机物排放。若有实测物质谱，不得使用通用 VOC 流替代。

- 选定流：根据场址实测选择物质特定空气排放；无默认 UUID
- 流属性/单位：Mass / kg
- 数量规则：实测烟气浓度乘以干烟气流量和运行时间，不扣除无文件依据的抵扣
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 可销售精炼花生油
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_direct_air_emissions`
- 来源：`jrc-fdm-bref-2019`
- 数量范围：暂定直接排放筛选范围
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：0.01
  - 单位：kg
  - 基准：每 1 kg 可销售精炼花生油
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_rule_1` | 多输出炼油工序 | 在技术可行时，通过过程细分并直接计量脱胶、脱色、脱臭、公用工程、废物和回收物流来避免分配。 | `iso-14044-2006` |
| `allocation_rule_2` | 皂脚、酸化油、胶质和脱臭馏出物 | 根据有记录的去向和经济价值分类各物流。细分后仍有可销售共产品时，用代表期内场址特定经济份额分配不可分离的剩余负荷，并报告质量分配敏感性。若物流为废物，则分配处理负荷而不进行共产品分配。 | `iso-14044-2006`; `jrc-fdm-bref-2019` |
| `allocation_rule_3` | 回收、再利用与避免产品 | 不得仅因物流具有回收可能性就给予避免产品抵扣。替代情景须记录接收市场、被替代产品、质量关系并单独报告；同一物流不得同时计为共产品、废物和避免产品抵扣。 | `iso-14044-2006` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_crude_oil_receipts` | `degumming_neutralisation` | 毛油投入 | 储罐和地磅记录 | 接收质量、罐位、密度基准、库存变化、供应商、批次 | 校准衡器或经核对的储罐库存 | kg | 每次接收及每月结账 | 代表性 12 个月，或有理由的生产期 | 报告炼油厂 | 接收量减库存增加和非过程转移 | 校准、发票、库存核对 |
| `cp_degumming_water` | `degumming_neutralisation` | 工艺水及水相排放 | 水表和批次记录 | 表计起止值、批次体积、循环量、排放量 | 校准流量计或批次合计 | kg 或按密度换算的 m3 | 每批或每日 | 与产品输出同一期间 | 生产线 | 净新水和净排放量 | 仪表校准、水量平衡 |
| `cp_degumming_chemicals` | `degumming_neutralisation` | 酸和碱 | 批次表及采购库存记录 | 溶液质量、浓度、批号、库存变化、路线 | 称量和库存核对 | kg 溶液及质量分数 | 每批 | 与产品输出同一期间 | 生产线 | 活性物质等于溶液质量乘浓度 | 分析证书、衡器校准、库存核对 |
| `cp_degumming_energy` | `degumming_neutralisation` | 电力 | 分表或工程分摊 | 表计读数、运行时数、额定负荷、分摊因子 | 优先分表；否则采用有记录的负荷小时法 | kWh | 每日或每批 | 与产品输出同一期间 | 生产线 | 表计求和；共享负荷按实测运行因子分摊 | 仪表校准、设备日志 |
| `cp_bleaching_materials` | `bleaching_filtration` | 脱色白土 | 批次和库存记录 | 投料质量、接收量、库存变化、吸附剂品级 | 校准批次衡器和库存核对 | kg | 每批 | 与产品输出同一期间 | 生产线 | 投料量与采购和库存移动核对 | 衡器校准、发票、批次表 |
| `cp_bleaching_energy` | `bleaching_filtration` | 电力 | 分表或工程分摊 | 表计读数、运行时数、额定负荷、分摊因子 | 优先分表；否则采用有记录的负荷小时法 | kWh | 每日或每批 | 与产品输出同一期间 | 生产线 | 表计求和；共享负荷按实测运行因子分摊 | 仪表校准、设备日志 |
| `cp_deodorisation_energy` | `deodorisation_finishing` | 蒸汽热和电力 | 蒸汽及电表 | 蒸汽质量、压力、温度、冷凝状态、电表读数、运行时间 | 校准仪表和热力学换算 | kg 蒸汽、MJ、kWh | 每小时或每批 | 与产品输出同一期间 | 生产线 | 交付热按实测焓差计算；电力取分表值 | 仪表校准、蒸汽性质方法、运行日志 |
| `cp_intermediate_balance` | 所有必需过程 | 中间油 | 储罐和转移记录 | 期初期末库存、转移质量、返工、取样、实测分离物流 | 校准质量流量或经核对的储罐 | kg | 每次转移及每月结账 | 与产品输出同一期间 | 报告炼油厂 | 相邻过程转移核对且不重复计算 | 校准、签字转移记录、平衡闭合 |
| `cp_coproduct_waste` | 所有必需过程 | 共产品和废物 | 过磅单及去向记录 | 质量、水分或含油率、分类、去向、收入、处理 | 校准衡器及运输文件 | kg | 每次外运 | 与产品输出同一期间 | 报告炼油厂 | 按物流和去向汇总，仅按声明的商业基准修正 | 过磅单、发票、废物联单、分析 |
| `cp_direct_air_emissions` | `deodorisation_finishing` | 直接空气排放 | 烟气测试或连续监测 | 物质、浓度、干烟气流量、温度、压力、运行时间 | 认可的烟气方法或校准连续监测仪 | kg 物质 | 法规测试或连续 | 报告期内代表性运行状态 | 排放口 | 浓度乘标准化烟气流量和运行时间 | 实验室报告、方法、检出限、校准 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calculation_rule_1` | 所有前景交换 | 归一化量等于报告期交换总量除以可销售精炼油输出；保留未归一化总量和单位换算 | 交换总量、可销售输出 | 每 1 kg 参考产品的数量 | `mass-balance-identity` |
| `calculation_rule_2` | 毛油收率 | 精炼收率等于经一致库存修正的可销售精炼油质量除以毛油投入 | 毛油接收、毛油库存变化、精炼油输出、精炼油库存变化 | 质量收率和每 kg 产品毛油投入 | `mass-balance-identity` |
| `calculation_rule_3` | 酸和碱 | 活性物质等于溶液质量乘以实测或证书浓度 | 溶液质量、质量分数 | kg 活性化学品 | `jrc-fdm-bref-2019` |
| `calculation_rule_4` | 过程和场址质量平衡 | 质量平衡差等于投入加库存减少，减产品、共产品、废物、排放和库存增加；报告闭合率和经调查的残差 | 所有实测质量物流及库存变化 | 质量平衡残差和闭合率 | `mass-balance-identity` |
| `calculation_rule_5` | 经济分配 | 共产品份额等于代表期内该共产品净销售价值除以全部分配输出的总净销售价值；价格基准须一致并报告质量敏感性 | 输出质量、净价格、期间 | 分配份额 | `iso-14044-2006` |
| `calculation_rule_6` | 直接空气排放 | 排放质量等于实测浓度乘标准化干烟气流量和运行时间，并记录单位及低于检出限的处理 | 烟气浓度、气体流量、时间 | 每 kg 产品的 kg 物质 | `jrc-fdm-bref-2019` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `data_quality_1` | 时间代表性 | 使用包括正常停机和产品切换的代表性 12 个月；若用较短生产期，应说明理由并披露季节性。 | 有日期的生产、表计和库存记录 |
| `data_quality_2` | 地理和技术代表性 | 电力、热、水、毛油、化学品和处理数据集须与场址及实际精炼路线匹配；披露代理数据。 | 供应商、地理、技术和路线元数据 |
| `data_quality_3` | 完整性 | 纳入所有必需过程以及重要投入、输出、废物和直接排放；解释排除项和检出限。 | 过程图、质量平衡、废物联单、排放报告 |
| `data_quality_4` | 测量质量 | 优先采用校准仪表和衡器；记录共享公用工程分摊及计算记录的不确定性。 | 校准证书、分摊工作表、核对记录 |
| `data_quality_5` | 来源及估算透明度 | 将有来源的范围与前景数量分开；在转为 active 前替换所有推理估算，除非评审者明确接受并记录。 | 来源 ID、评审记录、替代的前景证据 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validation_rule_1` | 产品身份及参考流 | 确认 CPC 3.0 代码 21622、精炼花生油流 UUID、Mass 流属性 UUID、Units of mass 单位组 UUID、1 kg 参考数量、食用品质依据和全部必需限定信息。 | `codex-cxs-210-1999` |
| `validation_rule_2` | 路线及边界完整性 | 核实脱胶、所声明化学或物理路线分支、脱色、脱臭、后处理、公用工程和条件性厂内处理均已体现，毛油生产作为上游连接而非精炼前景。 | `jrc-fdm-bref-2019`; `list-pattee-2020-peanut-oil` |
| `validation_rule_3` | 质量及中间流平衡 | 按报告期核对毛油、化学品、水和中间转移量与精炼油、共产品、废物、排放及库存变化；调查并披露残差，不得强制闭合。 | `mass-balance-identity` |
| `validation_rule_4` | 化学品与能源 | 校验溶液浓度修正、路线适用性、活性物质单位、电力地理与电压及蒸汽热换算；拒绝将溶液质量静默替代活性物质质量，或将蒸汽质量替代交付热量。 | `jrc-fdm-bref-2019` |
| `validation_rule_5` | 输出、废物与分配 | 核实胶质、皂脚、酸化油、废白土和馏出物的去向及经济状态；确保同一物流不同时计为共产品、废物和避免产品抵扣，并可复算分配份额和敏感性。 | `iso-14044-2006`; `jrc-fdm-bref-2019` |
| `validation_rule_6` | 质量、来源与估算 | 确认可销售输出符合所声明 Codex 或市场规范，来源 ID 可解析，有来源范围保留其基准，所有剩余推理估算均被标记为待替换或经评审接受。 | `codex-cxs-210-1999` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 炼油厂门口散装精炼花生油的次级或背景单元过程数据集 |
| downstream_use | 使用散装精炼花生油的食品产品 LCI、配料供应链模型、过程数据集及生命周期模型 |
| allowed_use | 与采集数据一致的已声明炼油厂地理、期间、精炼路线、质量规范及散装市场状态 |
| excluded_use | 毛花生油、调和或改性油脂、消费包装、种植或浸出，以及未经限定的其他地理、路线或期间主张 |
| required_metadata | PCR id 与版本；CPC 21622；参考流 UUID、Mass 属性和 Units of mass 单位组；地理；基准年；技术及路线；毛油来源；分配方法；数据所有者和评审状态 |
| required_quality_disclosure | 覆盖范围与质量平衡闭合；前景实测比例；共享公用工程分摊；代理数据集；推理估算；共产品去向与价格；不确定性及评审发现 |
| update_trigger | 路线、场址、毛油采购、收率、能源系统、污染控制、共产品去向或分配发生重大变化；出现新评审证据；Codex 产品要求修订；天工支持实体或流身份发生变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `codex-cxs-210-1999` | standard | FAO/WHO Codex Alimentarius，CXS 210-1999，Standard for Named Vegetable Oils，2024 年最后修订。https://www.fao.org/fao-who-codexalimentarius/codex-texts/standards/en/ 检索日期 2026-08-10。 | 花生油身份、食用市场状态和质量符合性声明 |
| `jrc-fdm-bref-2019` | official_guidance | European Commission Joint Research Centre，Best Available Techniques Reference Document for the Food, Drink and Milk Industries，2019，第 11 章。https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2020-01/JRC118627_FDM_Bref_2019_published.pdf 检索日期 2026-08-10。 | 植物油精炼顺序、过程条件、化学品用量范围、输出、废物及排放控制 |
| `list-pattee-2020-peanut-oil` | literature | List, G. R. and Pattee, H. E.，Production, Processing, and Food Uses of Peanut Oilseed, Oil, and Protein，2020。DOI: 10.1002/047167849X.bio014.pub2。https://doi.org/10.1002/047167849X.bio014.pub2 检索日期 2026-08-10。 | 花生特定的上游浸出以及常规碱炼、脱色和脱臭路线佐证 |
| `iso-14044-2006` | standard | International Organization for Standardization，ISO 14044:2006，Environmental management — Life cycle assessment — Requirements and guidelines。https://www.iso.org/standard/38498.html 检索日期 2026-08-10。 | 分配层级、一致性、透明度和敏感性要求 |
| `mass-balance-identity` | method_factor | 应用于实测炼油投入、输出及库存变化的质量守恒恒等式。 | 归一化、收率、中间流核对和质量平衡校验 |
