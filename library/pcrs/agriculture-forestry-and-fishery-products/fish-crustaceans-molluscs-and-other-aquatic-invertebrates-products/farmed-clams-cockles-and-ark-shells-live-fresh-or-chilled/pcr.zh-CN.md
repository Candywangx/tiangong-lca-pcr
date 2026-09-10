---
pcr_id: pcr.agriculture-forestry-and-fishery-products.fish-crustaceans-molluscs-and-other-aquatic-invertebrates-products.farmed-clams-cockles-and-ark-shells-live-fresh-or-chilled
language: zh-CN
status: candidate
translation_status: aligned
sync_with: pcr.en-US.md
---

# 养殖蛤蜊、鸟蛤和魁蛤，活、鲜或冷藏

## 1. 范围与适用性

本 PCR 指导以活、鲜或冷藏形式供应的养殖蛤蜊、鸟蛤和魁蛤的前景生命周期清单数据集生产。它涵盖蛤蜊、鸟蛤和魁蛤类带壳双壳贝类的养成养殖、采收以及产品在离开上岸点大门之前的上岸点处理。参考产品状态为活、鲜或冷藏；产品未经冷冻、干燥、盐渍、烟熏、卤水浸泡或其他加工。

本 PCR 适用于由养殖场运营者或利用养殖记录的从业者生产的前景数据包。它不涵盖野生捕捞的蛤蜊、鸟蛤和魁蛤，不涵盖作为前景产品的育苗场或中间培育场内的苗种生产，不涵盖加工或保藏的蛤蜊产品，也不涵盖下游的流通、零售和消费环节。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.fish-crustaceans-molluscs-and-other-aquatic-invertebrates-products.farmed-clams-cockles-and-ark-shells-live-fresh-or-chilled |
| classification_refs | CPC 3.0 代码 04452（exact） |
| covered_products | 养殖的蛤蜊、鸟蛤和魁蛤，带壳，以活、鲜或冷藏形式供应；典型物种包括菲律宾蛤仔（Ruditapes philippinarum）、泥蚶（Tegillarca granosa）和硬壳蛤（Mercenaria mercenaria） |
| excluded_products | 野生捕捞的蛤蜊、鸟蛤和魁蛤（CPC 04451）；冷冻、烟熏、干燥、盐渍或卤水浸泡的蛤蜊产品；罐装或其他加工的蛤蜊肉；作为苗种、饵料或观赏用途供应的活蛤蜊 |
| representative_product | 菲律宾蛤仔（Ruditapes philippinarum），活体带壳，滩涂养殖，在上岸点以鲜活形式供应 |
| production_route | 以蛤苗（稚贝）供应为上游起始条件，经滩涂、池塘或悬浮系统养成，采收之后按声明的路线在上岸点进行清洗、净化、分级和冷藏 |
| market_state | 上岸点生产混合；大规模商业双壳贝类养殖以亚洲生产者为主，中国为最大生产国 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 养殖蛤蜊、鸟蛤和魁蛤，活、鲜或冷藏，带壳，在上岸点大门 |
| How much | 1 kg 带壳沥水活体重量 |
| How well | 可上市规格等级；按声明的活、鲜或冷藏状态；死亡率和拒收比例在声明限值内 |
| How long or cycle | 从投苗到发货的一个养成生产周期，包含上岸点处理 |
| reference_flow_link | 过程 `landing_site_handling`，输出，产品流，行 `reference_product_output` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 养殖的蛤蜊、蚶和蚶壳，活的、新鲜的或冷藏的 `4a6625c6-2c26-4618-aaab-4ea8949e5635` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 物种；养殖系统（滩涂、池塘或悬浮）；产品状态（活、鲜或冷藏）；带壳沥水活体重量；生产区域与场址；养成周期时段 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品流 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 参考流以 kg 带壳沥水活体重量计量；以个数或筐数记录的，必须用声明的、经校准的质量换算记录换算。 |
| `live_weight_state` | 蛤蜊产品及生物量数值 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 所有蛤蜊生物量数值（苗种、采收、发货、拒收、死亡个体）均以 kg 带壳沥水活体重量记录；不得用去壳净肉得率替代。 |
| `electricity_energy` | 电力输入 | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | kWh | 电力以 kWh 从电表或电费单采集；当宿主数据集按能量基准存储电力时，按 1 kWh 等于 3.6 MJ 换算。 |
| `water_volume` | 工艺用水输入 | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | 清洗与净化用水以 m3 记录；需要质量属性时，采用每 m3 1,000 kg 的筛选换算。 |
| `seed_dual_record` | 蛤苗输入 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 蛤苗同时以 kg 投苗质量和带规格等级的苗种数量记录，以便核对成活率与生长。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 蛤苗（稚贝）到达养成场大门、备投状态；生产该苗种的育苗场、中间培育场或天然采苗环节位于前景边界上游 |
| starting_condition_role | boundary_start |
| product_classification_scope | CPC 3.0 代码 04452，养殖蛤蜊、鸟蛤和魁蛤，活、鲜或冷藏 |
| recursive_input_rule | 从其他养殖场接收的同类产品蛤苗或活蛤，记录为携带按本 PCR 生产的上游数据集的产品输入；接收方数据包不向更早的生产周期递归展开 |
| upstream_dataset_requirement | 苗种供应、肥料、石灰、电力、柴油、网具材料、工艺用水和冰由供应商特定前景数据集或次级背景数据集提供 |
| disclosure | 数据包声明养殖系统、场址与水体、投苗密度与周期长度、施肥与塘底准备做法、采收方式、净化做法、成活率、分配键和截断选择 |

### 边界规则

| 规则编号 | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `sb_starting_condition` | 前景系统边界 | 前景边界始于送达养成场的蛤苗；苗种生产的负荷仅通过苗种输入流的上游数据集进入。 | `fao-cultured-aquatic-species-ruditapes-philippinarum` |
| `sb_recursive_input` | 同类产品输入 | 在养殖场之间转移的本类别活蛤或蛤苗，建模为携带按本 PCR 生产的上游数据集的产品输入，绝不作为接收方数据集的递归展开。 |  |
| `sb_cut_off` | 前景输入 | 某输入仅当其质量份额低于产品总输入的 1% 且累计截断低于 5% 时方可截断；跨周期服役的设备网具按年化处理而非截断；所有截断均应披露。 |  |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `grow_out_culture` | 滩涂、池塘或悬浮系统养成 | required |  | 前景核心 | 每周期转入采收的可上市活蛤 kg 数 |
| `harvesting` | 可上市规格蛤蜊的采收 | required |  | 前景 | 每周期采收上岸的活蛤 kg 数 |
| `landing_site_handling` | 上岸点清洗、净化、分级与冷藏 | conditional | 当声明的路线在上岸设施进行清洗、净化、分级或冷藏时纳入；产品声明为冷藏或经净化时为必需 | 前景 | 上岸点大门 1 kg 活、鲜或冷藏蛤蜊 |

### 过程：滩涂、池塘或悬浮系统养成（`grow_out_culture`）

#### 输入

##### 产品流

###### 投入养殖系统的蛤苗（稚贝）（`clam_seed`）

来自育苗场、中间培育场或天然采苗的蛤苗在投苗时跨越前景边界，开始养成周期。数量取自投苗记录和供应商送货单。

- 选定流：Clam seed (spat), live, at farm gate
- 流属性/单位：Mass / kg
- 数量规则：每生产周期的投苗质量，同时记录苗种数量与规格等级
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 转入采收的可上市活蛤
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_seed_stocking_records`

- 数量范围：投苗强度校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.02
  - 上限：0.6
  - 单位：kg
  - 基准：每 kg 转入采收的可上市活蛤对应的投苗 kg 数
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 池塘施肥施用的氮肥（`nitrogen_fertilizer`）

当采用池塘施肥以维持浮游植物时，记录尿素等氮肥。数量取自购买发票和田间施用记录。

- 选定流：Nitrogen fertilizer (urea or equivalent)
- 流属性/单位：Mass / kg
- 数量规则：每生产周期的肥料施用质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 转入采收的可上市活蛤
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fertilizer_records`

- 数量范围：氮肥强度校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.05
  - 单位：kg
  - 基准：每 kg 转入采收的可上市活蛤对应的氮肥 kg 数
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 池塘施肥施用的磷肥（`phosphate_fertilizer`）

当采用池塘施肥时，记录磷肥。数量取自购买发票和田间施用记录。

- 选定流：过磷酸钙 `8c9749b5-e19f-4480-a575-3058aff804b3`
- 流属性/单位：Mass / kg
- 数量规则：每生产周期的肥料施用质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 转入采收的可上市活蛤
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fertilizer_records`

- 数量范围：磷肥强度校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.05
  - 单位：kg
  - 基准：每 kg 转入采收的可上市活蛤对应的磷肥 kg 数
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 塘底或池底准备施用的石灰（`lime`）

当投苗前对池塘或养殖底质进行消毒或调质时，记录石灰。数量取自塘底准备记录和购买发票。

- 选定流：干透的熟石灰 `88c10493-a480-431e-9ea2-372d3a99318d`
- 流属性/单位：Mass / kg
- 数量规则：每生产周期的石灰施用质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 转入采收的可上市活蛤
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pond_preparation_records`

- 数量范围：石灰施用强度校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.15
  - 单位：kg
  - 基准：每 kg 转入采收的可上市活蛤对应的石灰 kg 数
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 增氧与换水泵送电力（`growout_electricity`）

养成期间电力驱动增氧机和换水泵。数量取自电表读数或电费单并分摊至养成过程。

- 选定流：Electricity, medium voltage `2eb3b2fd-6511-4a22-9018-768024a5b5a6`
- 流属性/单位：Net calorific value / kWh
- 数量规则：每生产周期分摊至养成的计量电量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 转入采收的可上市活蛤
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_electricity_records`

- 数量范围：养成电耗强度校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.5
  - 单位：kWh
  - 基准：每 kg 转入采收的可上市活蛤对应的 kWh 数
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 养殖船只与机械用柴油（`growout_diesel`）

柴油驱动养成期间用于巡查、维护和现场作业的养殖船只与机械。数量取自燃油购买记录和设备台账。

- 选定流：柴油 `9fc9d30c-0229-459c-a7f5-8f55d6533225`
- 流属性/单位：Mass / kg
- 数量规则：每生产周期养成作业消耗的柴油
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 转入采收的可上市活蛤
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fuel_records`

- 数量范围：养成柴油强度校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.1
  - 单位：kg
  - 基准：每 kg 转入采收的可上市活蛤对应的柴油 kg 数
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 消耗的塑料网具材料（`gear_plastics`）

网衣、网袋、绳索等塑料养殖网具在其服役期内消耗。数量取自库存记录和更换记录，按周期年化。

- 选定流：低密度聚乙烯粒料（PE-LD） `4f19f116-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Mass / kg
- 数量规则：每生产周期塑料网具的年化消耗量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 转入采收的可上市活蛤
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_consumption_records`

- 数量范围：塑料网具消耗校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.05
  - 单位：kg
  - 基准：每 kg 转入采收的可上市活蛤对应的塑料网具 kg 数
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 消耗的竹桩与支撑材（`bamboo_stakes`）

当滩涂或池塘养殖使用竹制结构时，记录竹桩与支撑材。数量取自库存记录，按周期年化。

- 选定流：竹材、藤条 `b5a65214-5930-42b6-994f-02fbcf42798b`
- 流属性/单位：Volume / m3
- 数量规则：每生产周期竹材的年化消耗量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 转入采收的可上市活蛤
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_consumption_records`

- 数量范围：竹材消耗校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.005
  - 单位：m3
  - 基准：每 kg 转入采收的可上市活蛤对应的竹材 m3 数
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 转入采收的可上市规格活蛤（`marketable_clams_growout`）

养成结束时养殖系统中达到可上市规格的活蛤转入采收。数量等于与采收记录核对的采收产量。

- 选定流：养殖的蛤蜊、蚶和蚶壳，活的、新鲜的或冷藏的 `4a6625c6-2c26-4618-aaab-4ea8949e5635`
- 流属性/单位：Mass / kg
- 数量规则：每生产周期与采收产量记录核对的可上市活体重量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每生产周期输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest_yield_records`

- 数量范围：投苗收获倍数校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：2
  - 上限：20
  - 单位：kg
  - 基准：每 kg 投苗对应的可上市活蛤 kg 数
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 报废塑料养殖网具（`culture_gear_waste`）

报废的网衣、绳索等塑料网具在更换时作为废物离开过程。数量取自废物转移联单或称重处置记录。

- 选定流：塑料垃圾 `3fd9ff2b-455a-4ed6-a52d-e2cb5a1484f3`
- 流属性/单位：Mass / kg
- 数量规则：每生产周期处置的塑料网具质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 转入采收的可上市活蛤
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`

- 数量范围：塑料网具废物校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.05
  - 单位：kg
  - 基准：每 kg 转入采收的可上市活蛤对应的塑料废物 kg 数
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 死亡个体与壳体残余（`mortality_shell_residue`）

养成期间死亡的蛤蜊及其壳体残余被收集或留于养殖底质。数量根据定期死亡率巡查估算。

- 选定流：Dead stock and shell residues from bivalve culture
- 流属性/单位：Mass / kg
- 数量规则：每生产周期估算的死亡个体质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 转入采收的可上市活蛤
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_mortality_records`

- 数量范围：死亡残余校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.5
  - 单位：kg
  - 基准：每 kg 转入采收的可上市活蛤对应的死亡个体 kg 数
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 与近岸水体的净氮交换（`nutrient_n_exchange`）

养殖系统与近岸水体之间的净氮交换综合肥料输入、进流水氮、收获生物量带出和底质滞留；负值表示蛤蜊对氮的净移除。数量按规则 `cr_nutrient_balance` 计算。

- 选定流：总氮（不含N₂） `e1716164-e906-48e4-ad77-8f2ec4a9a4c5`
- 流属性/单位：Mass / kg
- 数量规则：每生产周期由营养平衡计算得出的净氮交换量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 转入采收的可上市活蛤
- 基准类型：过程输出（`process_output`）
- 证据类型：依据采集计算（`calculated_from_collection`）
- 采集协议：`cp_nutrient_balance_records`

- 数量范围：净氮交换校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：-0.05
  - 上限：0.02
  - 单位：kg
  - 基准：每 kg 转入采收的可上市活蛤对应的氮 kg 数；负值表示净移除
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 与近岸水体的净磷交换（`nutrient_p_exchange`）

养殖系统与近岸水体之间的净磷交换与氮遵循同一平衡；负值表示净移除。数量按规则 `cr_nutrient_balance` 计算。

- 选定流：总磷 `f9df3107-6b59-4067-b920-3c61cf3630c7`
- 流属性/单位：Mass / kg
- 数量规则：每生产周期由营养平衡计算得出的净磷交换量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 转入采收的可上市活蛤
- 基准类型：过程输出（`process_output`）
- 证据类型：依据采集计算（`calculated_from_collection`）
- 采集协议：`cp_nutrient_balance_records`

- 数量范围：净磷交换校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：-0.01
  - 上限：0.005
  - 单位：kg
  - 基准：每 kg 转入采收的可上市活蛤对应的磷 kg 数；负值表示净移除
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 生物沉积与再悬浮产生的悬浮物（`growout_suspended_solids`）

生物沉积物和维护作业改变与周边水体的悬浮物交换。无法直接测量时，数量经建模获得。

- 选定流：悬浮物（未指定） `618d3d9a-9f85-417d-b0c4-e87942a9e345`
- 流属性/单位：Mass / kg
- 数量规则：每生产周期建模的净悬浮物量
- 数值来源模式：建模估算（`modelled_estimate`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 转入采收的可上市活蛤
- 基准类型：过程输出（`process_output`）
- 证据类型：推理估算（`reasoned_estimate`）

- 数量范围：悬浮物筛选估算
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：2
  - 单位：kg
  - 基准：每 kg 转入采收的可上市活蛤对应的悬浮物 kg 数
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程：可上市规格蛤蜊的采收（`harvesting`）

#### 输入

##### 产品流

###### 采收船只与耙吸或泵送机械用柴油（`harvest_diesel`）

柴油驱动采收船只、耙具和泵送系统。数量取自燃油购买记录和分摊至采收的设备台账。

- 选定流：柴油 `9fc9d30c-0229-459c-a7f5-8f55d6533225`
- 流属性/单位：Mass / kg
- 数量规则：每生产周期采收消耗的柴油
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 采收上岸活蛤
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fuel_records_harvest`

- 数量范围：采收柴油强度校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.15
  - 单位：kg
  - 基准：每 kg 采收上岸活蛤对应的柴油 kg 数
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 水力采收泵电力（`harvest_electricity`）

使用水力采收时，电力驱动采收泵和绞车。数量取自分摊至采收的电表读数。

- 选定流：Electricity, medium voltage `2eb3b2fd-6511-4a22-9018-768024a5b5a6`
- 流属性/单位：Net calorific value / kWh
- 数量规则：每生产周期分摊至采收的计量电量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 采收上岸活蛤
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_electricity_records_harvest`

- 数量范围：采收电耗强度校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.3
  - 单位：kWh
  - 基准：每 kg 采收上岸活蛤对应的 kWh 数
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 采收上岸的活蛤（`harvested_clams`）

采收的活蛤上岸并转交上岸点处理。数量取自上岸称重记录。

- 选定流：养殖的蛤蜊、蚶和蚶壳，活的、新鲜的或冷藏的 `4a6625c6-2c26-4618-aaab-4ea8949e5635`
- 流属性/单位：Mass / kg
- 数量规则：每生产周期经校准称重的上岸活体重量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每生产周期输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest_yield_records_harvest`

- 数量范围：可上市存量采收率校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.8
  - 上限：1
  - 单位：kg
  - 基准：每 kg 养成转出的可上市活蛤对应的采收上岸活蛤 kg 数
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 放回的不足规格蛤与附带渔获（`undersized_bycatch_return`）

采收分拣出的不足规格蛤蜊和附带渔获放回养殖水体。数量根据上岸分拣记录估算。

- 选定流：Undersized clams and incidental by-catch returned alive
- 流属性/单位：Mass / kg
- 数量规则：每生产周期估算的放回质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 采收上岸活蛤
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest_yield_records_harvest`

- 数量范围：放回不足规格与附带渔获校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.3
  - 单位：kg
  - 基准：每 kg 采收上岸活蛤对应的放回 kg 数
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 采收扰动底质产生的悬浮物（`harvest_suspended_solids`）

耙吸、耙采或水力采收扰动底质并释放悬浮物。无法直接测量时，数量经建模获得。

- 选定流：悬浮物（未指定） `618d3d9a-9f85-417d-b0c4-e87942a9e345`
- 流属性/单位：Mass / kg
- 数量规则：每生产周期建模的悬浮物释放量
- 数值来源模式：建模估算（`modelled_estimate`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 采收上岸活蛤
- 基准类型：过程输出（`process_output`）
- 证据类型：推理估算（`reasoned_estimate`）

- 数量范围：采收底质扰动筛选估算
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：5
  - 单位：kg
  - 基准：每 kg 采收上岸活蛤对应的悬浮物 kg 数
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程：上岸点清洗、净化、分级与冷藏（`landing_site_handling`）

#### 输入

##### 产品流

###### 清洗与净化工艺用水（`process_water`）

清洗与净化所用的清洁水在上岸设施跨越边界；可以海水替代自来水，按水体积记录并声明水源。数量取自水表或泵送记录。

- 选定流：自来水 `3a8411b6-e476-4f98-9d77-0d492661a07f`
- 流属性/单位：Volume / m3
- 数量规则：每处理季节的计量水体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 发货的活、鲜或冷藏蛤蜊
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_records`

- 数量范围：工艺用水强度校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.05
  - 单位：m3
  - 基准：每 kg 发货的活、鲜或冷藏蛤蜊对应的 m3 数
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 净化、增氧与制冷电力（`handling_electricity`）

电力驱动上岸设施的净化泵、增氧、制冰和冷库。数量取自分摊至处理环节的电表读数。

- 选定流：Electricity, medium voltage `2eb3b2fd-6511-4a22-9018-768024a5b5a6`
- 流属性/单位：Net calorific value / kWh
- 数量规则：每季节分摊至处理环节的计量电量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 发货的活、鲜或冷藏蛤蜊
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_electricity_records`

- 数量范围：处理环节电耗强度校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.5
  - 单位：kWh
  - 基准：每 kg 发货的活、鲜或冷藏蛤蜊对应的 kWh 数
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 冷藏用冰（`ice`）

产品冷藏发货时记录用冰。数量取自购买发票或制冰机记录。

- 选定流：冰雪 `1ff2c05e-4b5d-4971-9883-65f2a6b0007f`
- 流属性/单位：Mass / kg
- 数量规则：每处理季节的用冰量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 发货的活、鲜或冷藏蛤蜊
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_ice_records`

- 数量范围：用冰量校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.5
  - 单位：kg
  - 基准：每 kg 发货的活、鲜或冷藏蛤蜊对应的冰 kg 数
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 上岸点大门的活、鲜或冷藏养殖蛤蜊（`reference_product_output`）

参考产品以活、鲜或冷藏状态离开上岸点大门进入首次销售。数量取自发货称重记录，在归一化数据包中等于 1 kg 参考流量。

- 选定流：养殖的蛤蜊、蚶和蚶壳，活的、新鲜的或冷藏的 `4a6625c6-2c26-4618-aaab-4ea8949e5635`
- 流属性/单位：Mass / kg
- 数量规则：每处理季节的发货活体重量；归一化为 1 kg 参考流
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：1 kg 发货产品的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_product_dispatch_records`

- 数量范围：上岸质量发货比例校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.8
  - 上限：1
  - 单位：kg
  - 基准：每 kg 采收上岸活蛤对应的发货活、鲜或冷藏蛤蜊 kg 数
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 分级拒收的死亡或破损蛤蜊（`grading_rejects`）

分级过程中拒收的死亡或破损蛤蜊作为有机废物离开过程。数量取自分级线记录。

- 选定流：Rejected dead or broken clams from grading
- 流属性/单位：Mass / kg
- 数量规则：每处理季节的拒收质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 发货的活、鲜或冷藏蛤蜊
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_reject_records`

- 数量范围：分级拒收校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.15
  - 单位：kg
  - 基准：每 kg 发货的活、鲜或冷藏蛤蜊对应的拒收 kg 数
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 净化与清洗废水的化学需氧量（`effluent_cod`）

净化与清洗废水携带以化学需氧量计量的有机物。数量根据废水量和声明的废水水质建模，或直接测量。

- 选定流：化学需氧量 `e57fc631-2c77-457a-aa30-be79e357792b`
- 流属性/单位：Mass / kg
- 数量规则：每处理季节建模或测量的 COD 负荷
- 数值来源模式：建模估算（`modelled_estimate`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 发货的活、鲜或冷藏蛤蜊
- 基准类型：过程输出（`process_output`）
- 证据类型：推理估算（`reasoned_estimate`）

- 数量范围：废水 COD 筛选估算
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：0.02
  - 单位：kg
  - 基准：每 kg 发货的活、鲜或冷藏蛤蜊对应的 COD kg 数
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 清洗废水的悬浮物（`effluent_suspended_solids`）

清洗废水携带泥沙和壳屑等悬浮物。数量根据废水量和声明的废水水质建模，或直接测量。

- 选定流：悬浮物（未指定） `618d3d9a-9f85-417d-b0c4-e87942a9e345`
- 流属性/单位：Mass / kg
- 数量规则：每处理季节建模或测量的悬浮物负荷
- 数值来源模式：建模估算（`modelled_estimate`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 发货的活、鲜或冷藏蛤蜊
- 基准类型：过程输出（`process_output`）
- 证据类型：推理估算（`reasoned_estimate`）

- 数量范围：废水悬浮物筛选估算
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：0.05
  - 单位：kg
  - 基准：每 kg 发货的活、鲜或冷藏蛤蜊对应的悬浮物 kg 数
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

## 7. 分配与共产品处理

| 规则编号 | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `al_shell_part_of_product` | 参考产品 | 壳体是活体带壳参考产品的组成部分；不在贝肉与壳体之间进行分配。 |  |
| `al_polyculture_shared_inputs` | 多品种混养中共用的池塘或滩涂投入 | 当蛤蜊与其他品种共用池塘、滩涂或设备时，共用投入按周期内各收获产出的经济价值分配至蛤蜊产出；仅在缺乏价值数据时采用实物质量分配，并披露所采用的分配键。 | `iso-14044-2006` |
| `al_mortality_no_coproduct` | 死亡个体、拒收品和放回的不足规格蛤 | 死亡个体、分级拒收品和放回的不足规格蛤不具有经济价值，不分摊负荷；全部前景负荷保留在发货的参考产品上。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_seed_stocking_records` | `grow_out_culture` | 蛤苗输入 | 投苗记录 | 苗种批次号；投苗质量；苗种数量；规格等级；投苗日期 | 养殖场投苗记录结合供应商送货单 | kg | 每次投苗 | 完整养成周期 | 每个池塘或养殖区块 | 按周期汇总投苗质量 | 供应商发票；签字的投苗记录 |
| `cp_fertilizer_records` | `grow_out_culture` | 肥料输入 | 购买与施用记录 | 产品名称；养分含量；施用质量；施用日期 | 购买发票和田间施用记录 | kg | 每次施用 | 完整养成周期 | 每个池塘 | 按周期分肥料品种汇总 | 发票；肥料标签或说明书 |
| `cp_pond_preparation_records` | `grow_out_culture` | 石灰输入 | 塘底准备记录 | 石灰产品；施用质量；日期；池塘面积 | 塘底准备记录结合购买发票 | kg | 每次塘底准备 | 每生产周期一次准备 | 每个池塘 | 按周期汇总 | 准备记录；购买发票 |
| `cp_electricity_records` | `grow_out_culture` | 电力输入 | 计量用电记录 | 电表读数；时段；分摊设备 | 电表读数或电费单，共用时按设备工时分摊 | kWh | 每月 | 至少一个完整生产周期 | 全场分摊至各过程 | 按时段汇总并分摊至各过程 | 电费单；电表读数记录 |
| `cp_fuel_records` | `grow_out_culture` | 柴油输入 | 燃油记录 | 燃油类型；质量或体积；日期；设备 | 燃油购买记录和设备台账 | kg | 每次购买或每月 | 完整生产周期 | 场内船机分摊至各过程 | 按周期汇总并分摊至各过程 | 燃油发票；设备工时记录 |
| `cp_material_consumption_records` | `grow_out_culture` | 网具材料输入 | 消耗记录 | 材料类型；质量或体积；服役年限；更换比例 | 库存记录和更换记录，按服役年限年化 | kg 或 m3 | 每次更换 | 完整生产周期 | 每个养殖区块 | 年化消耗按周期汇总 | 购买发票；盘点记录 |
| `cp_harvest_yield_records` | `grow_out_culture` | 采收产出 | 采收记录 | 采收日期；区块；上岸活体重量 | 经校准衡器的上岸称重 | kg | 每次采收 | 本周期的采收季 | 每个采收区块 | 按周期汇总 | 称重记录；销售单据 |
| `cp_mortality_records` | `grow_out_culture` | 死亡个体输出 | 死亡率记录 | 事件日期；估算质量；原因；处置途径 | 养殖巡查中的定期死亡率估算 | kg | 每月或每事件 | 完整生产周期 | 每个养殖区块 | 按周期汇总 | 巡查记录；处置记录 |
| `cp_waste_records` | `grow_out_culture` | 废网具输出 | 废物转移记录 | 废物类型；质量；处置途径 | 废物转移联单或称重处置记录 | kg | 每次处置 | 完整生产周期 | 全场 | 按周期汇总 | 废物承包商收据 |
| `cp_nutrient_balance_records` | `grow_out_culture` | 营养平衡输入 | 水质与生物量检测记录 | 肥料养分输入；进流水养分浓度；收获生物量养分含量 | 水样和生物量样品实验室分析，结合肥料说明书 | kg | 投苗、中期和采收时采水样；采收时测生物量 | 完整生产周期 | 每个池塘或换水区域 | 周期营养平衡按 kg 产出归一化 | 实验室报告；采样记录 |
| `cp_water_records` | `landing_site_handling` | 工艺用水输入 | 水表记录 | 水源类型；体积；时段 | 水表读数或泵送记录 | m3 | 每月 | 本周期的处理季节 | 上岸设施 | 按季节汇总 | 水表读数；水费单 |
| `cp_ice_records` | `landing_site_handling` | 冰输入 | 用冰记录 | 冰质量；日期；来源 | 购买发票或制冰机记录 | kg | 每个发货日 | 本周期的处理季节 | 上岸设施 | 按季节汇总 | 发票；制冰机记录 |
| `cp_product_dispatch_records` | `landing_site_handling` | 参考产品输出 | 发货记录 | 发货日期；产品状态；质量；等级 | 发货时经校准衡器称重 | kg | 每次发货 | 本周期的处理季节 | 上岸设施 | 按季节汇总 | 发货单；销售记录 |
| `cp_reject_records` | `landing_site_handling` | 分级拒收输出 | 分级记录 | 拒收质量；原因；处置途径 | 分级线记录 | kg | 每个分级批次 | 本周期的处理季节 | 上岸设施 | 按季节汇总 | 分级记录；处置记录 |
| `cp_electricity_records_harvest` | `harvesting` | 电力输入 | 计量用电记录 | 电表读数；时段；分摊设备 | 电表读数或电费单，分摊至采收设备 | kWh | 每月 | 本周期的采收季 | 全场分摊至采收 | 按采收季汇总并分摊至本过程 | 电费单；电表读数记录 |
| `cp_fuel_records_harvest` | `harvesting` | 柴油输入 | 燃油记录 | 燃油类型；质量或体积；日期；设备 | 燃油购买记录和设备台账，分摊至采收 | kg | 每次购买或每月 | 本周期的采收季 | 场内船机分摊至采收 | 按采收季汇总并分摊至本过程 | 燃油发票；设备工时记录 |
| `cp_harvest_yield_records_harvest` | `harvesting` | 采收产出与放回不足规格 | 采收与分拣记录 | 采收日期；区块；上岸活体重量；放回不足规格与附带渔获估算 | 经校准衡器的上岸称重结合分拣估算 | kg | 每次采收 | 本周期的采收季 | 每个采收区块 | 按周期汇总 | 称重记录；分拣记录 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `cr_output_normalization` | 全部前景清单行 | 每 kg 数值 = 周期记录量 / 发货参考产品 kg 数 | 周期记录量；发货参考产品质量 | 归一化到 1 kg 参考产品的清单数值 |  |
| `cr_electricity_unit_conversion` | 电力行 | 电力 MJ = 电力 kWh x 3.6 | 以 kWh 计量的电量 | 数据集需要能量基准时的电量 |  |
| `cr_nutrient_balance` | `nutrient_n_exchange`；`nutrient_p_exchange` | 净养分交换 = 肥料养分输入 + 进流水养分 - 收获生物量养分 - 声明的底质滞留；结果为负表示从水体净移除，并须连同计算输入一并披露 | 肥料记录；进流水养分检测；收获生物量养分检测 | 每 kg 参考产品的净氮或净磷交换量 |  |
| `cr_harvest_mass_closure` | `harvesting`；`landing_site_handling` | 采收质量 = 发货质量 + 分级拒收质量 + 处理环节死亡质量；偏差超过 10% 须在数据包中说明 | 采收产量记录；发货记录；拒收记录 | 核对一致的采收至发货质量闭合 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | 参考流和携带 UUID 的行 | 选定的 Tiangong 流、流属性和单位组 UUID 与本 PCR 声明的名称一致，并在发布前经查询确认。 | 留存于 PCR 内容之外的查询确认记录 |
| `dq_measurement` | 采集的前景数值 | 数值来自经校准的仪表、衡器、发票或实验室分析；任何估算方法均应声明。 | 校准记录；发票；实验室证书 |
| `dq_temporal_coverage` | 前景数据集 | 记录覆盖至少一个完整养成生产周期，包括其采收和处理季节。 | 贯穿周期的投苗、采收和发货记录 |
| `dq_completeness` | 过程清单 | 每个必需过程和流行均已填写，或按声明的路线明确说明不适用。 | 对照过程图的完整性核对表 |
| `dq_disclosure` | 数据集元数据 | 披露养殖系统、场址、施肥做法、净化做法、成活率、分配键和截断选择。 | 数据集元数据字段 |

## 9. 校验规则

| 规则编号 | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `vr_reference_flow_identity` | 参考流定义 | 数据包参考流携带第 3 节声明的产品流、流属性和单位组 UUID，参考数量为 1，单位为 kg。 |  |
| `vr_required_qualifiers` | 数据集元数据和参考流备注 | 第 3 节每项必需限定信息均已声明；缺失任一限定信息的数据包视为校验不通过。 |  |
| `vr_mass_closure` | 采收与处理质量平衡 | 采收质量与发货质量加拒收和处理环节死亡质量在 10% 以内闭合，且闭合计算有据可查。 |  |
| `vr_unit_consistency` | 清单行 | 数值使用流行和第 4 节声明的单位；电力统一以 kWh 或 MJ 存储并记录换算。 |  |
| `vr_range_conformance` | 采集的前景数值 | 超出 QA 校验范围的采集数值须标记并说明原因或更正，否则数据包不得视为符合。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | foreground_product_dataset |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 以活、鲜或冷藏形式供应的养殖蛤蜊、鸟蛤和魁蛤的生命周期建模；按本 PCR 在养殖场之间转移同类产品的上游数据集 |
| excluded_use | 代表野生捕捞产品；代表加工、冷冻或保藏的蛤蜊产品；超出声明的养殖系统、区域和周期且未经重新建模的使用 |
| required_metadata | 第 3 节必需限定信息；第 8 节数据质量披露；分配键；截断披露 |
| required_quality_disclosure | 计量基础、时间覆盖、对照过程图的完整性以及校验范围标记 |
| update_trigger | 新生产周期数据；养殖系统、施肥或净化做法变更；所引用 Tiangong UUID 的更正；本 PCR 的方法学更新 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-ver-3-0` | 标准（`standard`） | 联合国中央产品分类第 3.0 版，代码 04452 | 产品类别识别与分类范围 |
| `fao-cultured-aquatic-species-ruditapes-philippinarum` | 官方指南（`official_guidance`） | FAO 养殖水生物种信息计划，Ruditapes philippinarum 物种资料 | 过程分解、养殖系统、代表产品和边界起始条件 |
| `fao-fishstat-aquaculture-production` | 数据集（`dataset`） | FAO FishStat 全球水产养殖产量统计 | 市场状态与生产规模 |
| `iso-14044-2006` | 标准（`standard`） | ISO 14044:2006 环境管理 - 生命周期评价 - 要求与指南 | 共用投入的分配层级 |
