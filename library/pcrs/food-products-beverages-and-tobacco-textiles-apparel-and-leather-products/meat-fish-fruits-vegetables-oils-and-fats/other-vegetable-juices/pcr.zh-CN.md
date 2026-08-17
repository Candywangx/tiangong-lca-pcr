---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.other-vegetable-juices
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 其他蔬菜汁

## 1. 范围与适用性

本 PCR 覆盖以番茄以外的一种或多种食用蔬菜为特征的蔬菜汁制造，包括胡萝卜汁、芹菜汁、黄瓜汁、菠菜汁、红甘蓝汁、甜菜根汁、大黄汁及类似蔬菜汁。只要产品仍属于蔬菜汁，直接压榨、含果肉、澄清、混合、浓缩汁复原、冷藏、冷冻、无菌包装和常温货架稳定路线均在范围内。

默认前景边界从制造场址接收蔬菜、蔬菜汁中间品或蔬菜汁浓缩物开始，到合格成品汁在工厂门口交付为止。边界包括接收、分选、清洗、破碎、榨汁、分离、调配、可选浓缩或复原、稳定化、灌装、包装操作、清洁、受控储存、直接控制的公用工程、残余物和废水。农业生产、外购配料和包装制造、场外能源供应、分销、零售、消费者使用及包装寿命终止通过相连的上游或下游数据集表示，不在前景重复建模。

不包括番茄汁、果汁、不以果汁名义销售的蔬菜果肉饮料或饮料、主要功能并非蔬菜汁的冰沙、汤、酱、发酵酒精饮料以及分离的蔬菜副产品。果蔬混合产品只有在所声明产品身份和适用分类均将其归为其他蔬菜汁时才适用本 PCR；否则应采用更具体的 PCR。

本文件为候选方法学。必须声明场址特定配方、技术、适用食品安全法域、病原控制验证、产品密度、可溶性固形物基准和包装状态。引用的美国食品安全法规和指南只在该法域适用时约束数据生产者；其他法域必须识别并记录主管机构的等效要求。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.other-vegetable-juices |
| classification_refs | CPC 3.0: 21329 Other vegetable juices |
| covered_products | 由番茄以外食用蔬菜制成的直接压榨、含果肉、澄清、混合、复原、冷藏、冷冻、无菌或常温货架稳定蔬菜汁 |
| excluded_products | 番茄汁；果汁；非果汁蔬菜饮料和果肉饮料；冰沙、汤和酱；发酵酒精饮料；分离的蔬菜副产品 |
| representative_product | 制造工厂门口的包装并稳定化的其他蔬菜汁 |
| production_route | 接收与准备；榨汁与分离；可选调配、浓缩或复原；稳定化；灌装、包装操作和受控储存 |
| market_state | 成品液态蔬菜汁，声明为冷藏、冷冻、无菌常温或其他常温货架稳定状态，并披露包装状态 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 满足所声明配方、安全处理、质量规格和市场状态的其他蔬菜汁 |
| How much | 1 kg 净成品汁，不含销售包装和运输包装质量 |
| How well | 合格可售蔬菜汁，声明蔬菜种类或混合比例、可溶性固形物或组成规格、含果肉或澄清状态、浓缩或复原路线、病原控制状态及储存类别 |
| How long or cycle | 一个生产批次在工厂门口；所声明货架期和储存温度属于产品限定信息，不延长参考数量 |
| reference_flow_link | 由下列天工产品流表示的 1 kg 所声明其他蔬菜汁成品 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg 净成品汁 |
| 参考产品流 | Other vegetable juices `641392fd-b293-4355-affa-b1b8c936698c` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 蔬菜种类和混合比例；直接压榨或浓缩汁复原路线；浓缩倍数或复原比例；可溶性固形物或所声明组成基准；含果肉或澄清状态；热处理、紫外线、高压或其他病原控制路线；冷藏、冷冻、无菌或常温货架稳定市场状态；包装形式及包装是否纳入系统范围；生产地域和参考期 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 成品参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 将所有前景数量归一化至 1 kg 净成品汁。参考数量不含包装质量；包装在范围内时作为独立产品投入报告。 |
| `volume_to_mass` | 以体积记录的蔬菜汁 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 使用在指定温度下测得的批次或产品特定密度将体积换算为质量，并保留体积、密度、温度和计算记录。不得假设水的密度。 |
| `concentrate_reconstitution` | 浓缩或复原路线 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 分别记录浓缩物质量、加水量、回收香气或果肉、可溶性固形物基准以及浓缩或复原比例；不得将加水计作蔬菜投入。 |
| `energy_carrier_separation` | 电力、燃料、蒸汽、热力和制冷 | 各载能体特定能量属性 | kWh、MJ 或 kg 燃料 | 各外购能源载体必须作为独立投入保留。只有报告场址总能耗强度时才可换算，并应保留原始载能体数量和换算因子。 |
| `wastewater_volume` | 过程废水 | Volume | m3 | 在废水离开前景过程或进入场内处理时报告。单独排放的非接触冷却水和雨水必须区分。 |

## 5. 系统边界

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_gate_to_gate` | 前景制造 | 纳入从接收蔬菜或蔬菜汁中间品至合格成品汁在工厂门口的全部直接控制操作，包括清洁、公用工程、损失、废水和受控储存。 | `eu-fdm-bat-2019`; `codex-cxc-1-1969` |
| `boundary_upstream_links` | 外购投入 | 将蔬菜、浓缩物、配料、包装、电力、燃料、蒸汽、供水、清洁化学品和场外废物处理连接至适当上游数据集，不在前景内重建供应商过程。 | `iso-14044-2006` |
| `boundary_conditional_routes` | 浓缩、复原、病原控制、冷藏和场内废水处理 | 报告场址实施时纳入各条件过程，并披露转移至其他设施的排除操作。 | `ecfr-21-cfr-120`; `fda-juice-haccp-guidance`; `eu-fdm-bat-2019` |
| `boundary_food_safety_controls` | 蔬菜汁安全控制 | 记录对投入、能源消耗或损失有实质影响的卫生、危害控制、监测和经验证稳定化操作。采用法域特定法律要求并识别适用制度。 | `ecfr-21-cfr-120`; `codex-cxc-1-1969` |
| `boundary_exclusions` | 分销及下游生命周期 | 默认前景数据集排除分销、零售制冷、消费者使用和包装寿命终止；只有在单独声明的下游生命周期模型中才纳入。 | `iso-14044-2006` |

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 制造场址接收蔬菜、直接蔬菜汁、作为蔬菜汁使用的泥浆或蔬菜汁浓缩物，并记录供应商身份、质量、组成或可溶性固形物基准和验收状态 |
| starting_condition_role | 前景制造入口；种植和外购蔬菜汁中间品制造保留为上游过程 |
| product_classification_scope | 其他蔬菜汁，不包括番茄汁和果汁；混合产品需要明确分类和主要产品身份 |
| recursive_input_rule | 外购其他蔬菜汁或浓缩物保留为可见的同类别产品投入，记录数量和供应商数据集引用。不得递归展开为报告场址自行制造。 |
| upstream_dataset_requirement | 为蔬菜、外购蔬菜汁或浓缩物、水、包装、能源载体、加工助剂、清洁化学品和场外处理使用地域与技术具有代表性的上游数据集 |
| disclosure | 披露蔬菜种类和混合比例、来源、接收形态、浓缩或复原路线、可溶性固形物或组成规格、得率基准、稳定化方法、储存类别、包装范围、分配方法、场址覆盖、参考期和重要排除项 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `receiving_preparation` | 接收、分选、清洗和准备 | required | 始终纳入 | 前景原料验收与准备 | 验收蔬菜或接收蔬菜汁中间品的质量 |
| `extraction_formulation_stabilization` | 榨汁、分离、调配和稳定化 | required | 始终纳入；具体单元操作取决于所声明路线 | 前景转换为稳定化蔬菜汁 | 最终灌装前稳定化蔬菜汁质量 |
| `filling_storage` | 灌装、包装操作和受控储存 | required | 始终纳入；包装在范围内时其生产属于上游 | 前景形成可售产品 | 1 kg 净成品汁 |
| `onsite_wastewater_treatment` | 场内废水处理 | conditional | 废水处理处于报告场址运营控制时纳入 | 前景环境控制 | 进入处理的废水体积 |

### 过程：接收、分选、清洗和准备（`receiving_preparation`）

#### 输入

##### 产品流

###### 接收的蔬菜或蔬菜汁中间品（`received_vegetable_material`）

分别记录每种蔬菜、直接蔬菜汁、作为蔬菜汁使用的泥浆或浓缩物，以保持来源、接收形态、组成和上游数据集可追溯。

- 选定流：Vegetable raw material or vegetable juice intermediate
- 流属性/单位：Mass / kg
- 数量规则：称量验收投入量并单独记录拒收量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 其他蔬菜汁净成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_receipts`
- 数量范围：暂定原料筛选估算
  - 范围角色：默认估计（`default_estimate`）
  - 下限：1
  - 上限：20
  - 单位：kg/kg 净成品汁
  - 基准：覆盖高得率和低得率路线的每 kg 净成品汁接收蔬菜原料
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 清洗和准备用水（`preparation_water`）

记录进入清洗、水力输送、修整和准备操作的计量水。内部循环水与新鲜补充水应分开。

- 选定流：Process water
- 流属性/单位：Volume / m3
- 数量规则：在准备过程边界计量的新鲜补充水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 hl 净成品汁
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_and_wastewater`
- 数量范围：暂定准备用水筛选估算
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：1
  - 单位：m3/hl 净成品汁
  - 基准：每百升成品汁的新鲜准备用水
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 已准备蔬菜原料（`prepared_vegetable_material`）

根据接收量和准备拒收量计算转入榨汁的验收准备原料。

- 选定流：Prepared vegetable material
- 流属性/单位：Mass / kg
- 数量规则：验收接收原料减去计量准备拒收量和库存变化
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净成品汁
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_batch_mass_balance`
- 来源：`iso-14044-2006`

##### 废物流

###### 分选和准备拒收物（`preparation_rejects`）

按去向和副产品或废物状态记录带土拒收物、腐败蔬菜、修整残余物和异物。

- 选定流：Vegetable preparation residues
- 流属性/单位：Mass / kg
- 数量规则：按去向称量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净成品汁
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residues_and_wastes`
- 数量范围：暂定准备拒收筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：19
  - 单位：kg/kg 净成品汁
  - 基准：每 kg 净成品汁的准备拒收物
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 准备废水（`preparation_wastewater`）

记录离开准备过程并进入下水道、场外处理、过程外再利用或场内废水处理的水。

- 选定流：Process wastewater
- 流属性/单位：Volume / m3
- 数量规则：按去向计量排放或通过水量平衡计算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 hl 净成品汁
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_and_wastewater`

##### 基本流

### 过程：榨汁、分离、调配和稳定化（`extraction_formulation_stabilization`）

#### 输入

##### 产品流

###### 已准备蔬菜投入（`prepared_material_input`）

从前一过程转入已准备蔬菜原料，不重复添加上游负荷。

- 选定流：Prepared vegetable material
- 流属性/单位：Mass / kg
- 数量规则：与 `prepared_vegetable_material` 匹配的转移量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净成品汁
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_batch_mass_balance`

###### 外购蔬菜汁、泥浆或浓缩物（`purchased_juice_intermediate`）

路线使用外购蔬菜汁、作为蔬菜汁使用的泥浆或浓缩物时纳入。记录蔬菜身份、供应商、可溶性固形物基准以及中间品是否已经过验证的安全处理。

- 选定流：Vegetable juice intermediate
- 流属性/单位：Mass / kg
- 数量规则：进入批次的外购中间品称量质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净成品汁
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_receipts`

###### 调配或复原用水（`formulation_water`）

将加入产品或用于复原的水与清洁、清洗用水分开纳入。

- 选定流：Process water
- 流属性/单位：Mass / kg
- 数量规则：计量或称量加入批次的水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净成品汁
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_formulation_records`
- 数量范围：暂定调配用水筛选估算
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：1
  - 单位：kg/kg 净成品汁
  - 基准：加入成品汁的水
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 加工助剂和允许配料（`processing_aids`）

使用时分别记录酶、澄清剂或过滤助剂、酸、盐、防腐剂、回收香气或果肉及其他配料；披露其是否留在产品中、回收或排放。

- 选定流：Processing aid or permitted ingredient
- 流属性/单位：Mass / kg
- 数量规则：按物质统计领用记录或批次配方量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净成品汁
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_formulation_records`
- 数量范围：暂定加工助剂筛选估算
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：0.1
  - 单位：kg/kg 净成品汁
  - 基准：每 kg 净成品汁的加工助剂和添加配料总量
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 外购电力（`processing_electricity`）

记录榨汁、泵送、分离、均质、浓缩、稳定化、清洁及直接控制辅助设备的计量电力。共享电表按有记录的运行小时或分表规则分配。

- 选定流：Electricity supply
- 流属性/单位：Energy / MWh
- 数量规则：分配至前景生产批次的计量电力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 hl 净成品汁
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`
- 数量范围：暂定电力筛选估算
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0.001
  - 上限：0.035
  - 单位：MWh/hl 净成品汁
  - 基准：与热能合并前的外购电力
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 燃料、蒸汽或外购热力（`processing_thermal_energy`）

分别记录各热能载体，并保留交付能量、燃料质量、低位或高位热值约定、锅炉效率处理和供应商数据集。

- 选定流：Fuel, steam, or purchased heat by carrier
- 流属性/单位：Energy / MWh
- 数量规则：分配至批次的计量或计算交付热能
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 hl 净成品汁
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_energy_records`
- 数量范围：暂定热能筛选估算
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：0.035
  - 单位：MWh/hl 净成品汁
  - 基准：与电力合并前的交付热能
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 转入灌装的稳定化蔬菜汁（`stabilized_juice`）

根据经校准的罐体或灌装机记录计算转入灌装的质量，并保留所声明稳定化路线、关键参数、偏差和返工记录。

- 选定流：Stabilized other vegetable juice
- 流属性/单位：Mass / kg
- 数量规则：调配和稳定化后经校准的转移质量，调整返工和库存变化
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净成品汁
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_batch_mass_balance`
- 来源：`ecfr-21-cfr-120`; `fda-juice-haccp-guidance`

##### 废物流

###### 榨汁果渣和分离残余物（`extraction_residues`）

按去向和经济状态分别记录果渣、去除果肉、滤饼、废过滤介质和不合格蔬菜汁。

- 选定流：Vegetable juice extraction residue
- 流属性/单位：Mass / kg
- 数量规则：按去向称量或通过质量平衡计算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净成品汁
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residues_and_wastes`
- 数量范围：暂定榨汁残余物筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：19
  - 单位：kg/kg 净成品汁
  - 基准：每 kg 净成品汁的榨汁和分离残余物
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 加工和清洁废水（`processing_wastewater`）

记录离开过程的榨汁、调配、稳定化、原位清洗和非产品用水。内部再利用水和单独排放的非接触冷却水必须区分。

- 选定流：Process wastewater
- 流属性/单位：Volume / m3
- 数量规则：按去向计量排放或通过完整水量平衡计算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 hl 净成品汁
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_and_wastewater`
- 数量范围：BAT 背景废水排放筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.08
  - 上限：0.20
  - 单位：m3/hl products
  - 基准：由加工果蔬制成的软饮料及果肉饮料或果蔬汁的年度平均单位废水排放；仅在路线和设施可比时作为背景比较
  - 基准类型：过程输出（`process_output`）
  - 证据类型：外部来源（`external_source`）
  - 来源：`eu-fdm-bat-2019`

##### 基本流

###### 直接过程大气排放（`direct_air_emissions`）

只有在直接燃烧排放、制冷剂损失及其他场址排放跨越环境边界且未在外购能源数据集中表示时才记录。

- 选定流：Substance-specific elementary flow to air
- 流属性/单位：Mass / kg
- 数量规则：实测释放量或根据前景燃料和设备记录采用有来源因子计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净成品汁
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emissions`
- 来源：`eu-fdm-bat-2019`

### 过程：灌装、包装操作和受控储存（`filling_storage`）

#### 输入

##### 产品流

###### 稳定化蔬菜汁投入（`stabilized_juice_input`）

从前一过程转入稳定化蔬菜汁，并明确记录灌装损失和返工。

- 选定流：Stabilized other vegetable juice
- 流属性/单位：Mass / kg
- 数量规则：与 `stabilized_juice` 匹配的转移量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净成品汁
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_batch_mass_balance`

###### 初级、二级和运输包装（`packaging_inputs`）

包装处于系统范围时纳入包装材料，但其质量不得计入 1 kg 参考产品。各材料及再生含量规格应分开记录。

- 选定流：Packaging material by material and format
- 流属性/单位：Mass / kg
- 数量规则：领用包装减去退回未用包装，再除以合格净蔬菜汁质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净成品汁
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_records`
- 数量范围：暂定包装筛选估算
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：1
  - 单位：kg/kg 净成品汁
  - 基准：范围内每 kg 净成品汁的全部包装材料
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 合格其他蔬菜汁（`reference_product_output`）

本行是定量参考。产品质量仅为净蔬菜汁；包装保留为独立投入。

- 选定流：Other vegetable juices `641392fd-b293-4355-affa-b1b8c936698c`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：准确 1 kg 合格净成品汁
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）

##### 废物流

###### 灌装损失、不合格蔬菜汁和包装废料（`filling_and_packaging_waste`）

按回收、返工、副产品、再循环或处置去向分别记录蔬菜汁损失、拒收灌装单元、开停机损失和包装废料。

- 选定流：Filling loss or packaging waste by material
- 流属性/单位：Mass / kg
- 数量规则：称量损失量，或使用实测单件质量换算计数
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净成品汁
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residues_and_wastes`
- 数量范围：暂定灌装损失筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.5
  - 单位：kg/kg 净成品汁
  - 基准：每 kg 净成品汁的灌装损失、不合格产品和包装废料
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

### 过程：场内废水处理（`onsite_wastewater_treatment`）

#### 输入

##### 产品流

###### 废水处理化学品和能源（`wastewater_treatment_inputs`）

场内处理由报告设施控制时纳入化学品、电力、燃料和其他外购投入。在数据集实现中按载能体或物质分别记录。

- 选定流：Wastewater-treatment input by substance or energy carrier
- 流属性/单位：Carrier-specific property and unit
- 数量规则：分配至所处理前景废水的计量或领用记录数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 m3 所处理前景废水
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_treatment`
- 来源：`eu-fdm-bat-2019`

##### 废物流

###### 接收处理的前景废水（`wastewater_to_treatment`）

从准备和加工过程转入废水体积及特性，不重复计数。

- 选定流：Process wastewater
- 流属性/单位：Volume / m3
- 数量规则：与准备和加工废水行匹配的转移量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净成品汁
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_water_and_wastewater`

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 废水处理污泥和筛渣（`wastewater_treatment_residues`）

按质量、可得时的干物质和去向记录污泥、筛渣和回收物料。

- 选定流：Wastewater-treatment residue
- 流属性/单位：Mass / kg
- 数量规则：称量湿质量，相关时测定干物质
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 m3 所处理前景废水
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_treatment`

##### 基本流

###### 排向受纳环境的处理后出水（`treated_effluent`）

在实际排放点记录处理后出水体积和各物质负荷；不得将排入下水道的废水表示为基本流。

- 选定流：Substance-specific elementary flow to water
- 流属性/单位：Volume / m3 and pollutant mass / kg
- 数量规则：流量比例实测排放量及监测浓度或负荷
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净成品汁
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_treatment`
- 来源：`eu-fdm-bat-2019`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | 可独立计量的产品、批次和单元操作 | 首先通过过程细分、使用批次特定记录或扩展计量来避免分配，使独立产生的负荷留在相应产品。 | `iso-14044-2006` |
| `allocation_residues` | 果渣、回收果肉、浓缩物及其他有价值输出 | 根据所声明市场和法规环境将各输出分类为产品、副产品或废物。细分后仍有共享负荷时，使用反映因果关系且有记录的物理关系；只有无法建立合理物理关系时才采用经济分配。 | `iso-14044-2006` |
| `allocation_treatment` | 废物处理、再循环和能源回收 | 场址控制的处理负荷保留在前景边界。再循环、回收或替代产品抵扣只可在下游生命周期模型中按披露的方法应用；不得从前景清单扣除无记录抵扣。 | `iso-14044-2006` |
| `allocation_rework` | 内部蔬菜汁返工和内部水循环 | 将内部返工和循环视为内部转移。只计外部净投入、最终输出、损失和排放，同时保留证明质量与水量平衡所需的总记录。 | `eu-fdm-bat-2019` |
| `allocation_shared_utilities` | 共享仪表、清洁、储存和废水系统 | 优先按分表用量分配共享公用工程；否则采用有记录的运行时间、产量或其他因果工程驱动因子，并披露驱动因子和敏感性。 | `iso-14044-2006`; `eu-fdm-bat-2019` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_receipts` | `receiving_preparation` | 蔬菜和蔬菜汁中间品 | 地磅、接收、供应商和验收记录 | 种类或混合、供应商、来源、接收形态、批次号、毛重、皮重、验收质量、拒收质量、可溶性固形物或组成、处理状态 | 经校准秤具加接收检验和供应商文件 | kg | 每次接收 | 至少 12 个代表性月份或完整季节生产期 | 数据集范围内全部场址和接收批次 | 按物料和批次汇总验收与拒收质量，并核对期初期末库存 | 校准记录、供应商规格、验收记录和库存核对 |
| `cp_water_and_wastewater` | `receiving_preparation` | 新鲜水、回用水和废水 | 水表、批次日志和排放记录 | 仪表编号、期初期末读数、水源、使用区域、回用转移、排放去向、流量、pH、温度 | 经校准仪表；采用计算时使用完整水量平衡并记录不确定性 | m3 | 连续或逐批，并按月核对 | 与生产期一致 | 前景范围内全部用水和排放 | 新鲜流入减产品净带入、蒸发、库存变化和单独计量转移；各流分别报告 | 仪表校准、核对残差和排放监测记录 |
| `cp_formulation_records` | `extraction_formulation_stabilization` | 调配水、配料和加工助剂 | 批准配方、领用记录和批次表 | 批次号、物料号、批号、领用质量、退回质量、水质量、浓缩倍数、可溶性固形物、回收香气或果肉 | 与批准配方相连的称量领用和退回记录 | kg | 每批 | 完整数据集参考期 | 产品范围内全部配方 | 净领用数量除以合格净蔬菜汁质量 | 秤具校准、配方批准、批号追溯和偏差记录 |
| `cp_energy_records` | `extraction_formulation_stabilization` | 电力和热能 | 公用工程仪表、燃料发票、蒸汽或热量计及设备日志 | 载能体、仪表号、读数、燃料质量或体积、热值约定、蒸汽或热量、运行小时、批次分配驱动因子 | 优先分表；否则将场址仪表或发票核对至批次分配 | kWh、MJ、MWh 或 kg 燃料 | 连续、每班或每月并分配至批次 | 至少 12 个代表性月份或完整季节生产期 | 范围内全部直接控制制造、清洁和储存用能 | 各载能体分开保留；仅为场址总量比较器汇总换算后的交付能量 | 仪表校准、发票核对、换算因子和分配敏感性 |
| `cp_batch_mass_balance` | `extraction_formulation_stabilization` | 产品转移、得率、返工和损失 | 罐体、灌装机、秤具、批次和库存记录 | 批次号、投入质量、罐体液位、体积记录时的密度和温度、输出质量、返工、损失、期初库存、期末库存 | 经校准质量测量，或采用实测批次密度换算体积 | kg | 每批 | 完整数据集参考期 | 范围内全部产品线和场址 | 投入加期初库存等于输出加期末库存、残余物、废水产品损失和所披露无法解释差异 | 仪器校准、签字批次记录、密度试验和闭合报告 |
| `cp_residues_and_wastes` | `filling_storage` | 拒收物、果渣、不合格汁、污泥和包装废料 | 秤单、料箱计数、废物联单和去向记录 | 物料、湿质量、相关时干物质、容器数、去向、产品或废物状态、经济分配时收入 | 直接称量；只有实测单件质量时才用计数换算 | kg | 每批或每次发运 | 完整数据集参考期 | 范围内全部残余物和废物去向 | 按物料、状态和去向汇总；只扣除有记录的内部返工 | 秤具校准、联单、去向接收和副产品分类理由 |
| `cp_packaging_records` | `filling_storage` | 包装投入 | 物料清单、领退记录和成品单元计数 | 材料、规格、单件质量、领用数、退回数、拒收数、灌装单元数、再生含量 | 计数乘以定期验证单件质量，或直接称量 | kg | 每个包装批次和生产批次 | 完整数据集参考期 | 范围内全部包装规格 | 净领用包装除以合格净蔬菜汁质量 | 供应商规格、单件质量检查、计数核对和废料记录 |
| `cp_direct_emissions` | `extraction_formulation_stabilization` | 直接大气排放 | 燃料、设备、制冷剂、烟道和维护记录 | 来源、物质、实测浓度或损失、流量、运行时间、燃料量、因子、制冷剂充注和补充 | 优先直接监测；否则根据前景活动和有记录因子计算 | kg | 每次监测及相关维护或燃料周期 | 与生产期一致 | 前景范围内全部直接排放源 | 汇总各物质释放量并归一化至净成品汁 | 校准、实验室结果、因子引用、维护日志和重复计算检查 |
| `cp_wastewater_treatment` | `onsite_wastewater_treatment` | 处理投入、出水和污泥 | 进出水仪表、实验室数据、化学品领用、能源仪表和污泥单据 | 流量、pH、温度、COD 或 TOC、BOD、总氮、总磷、总悬浮固体、化学品、能源、污泥质量、去向 | 在规定处理和排放点进行流量比例监测 | m3、kg、mg/L 和能量单位 | 条件允许时连续监测流量；分析物按适用许可或 BAT 频率 | 完整数据集参考期 | 接收前景废水的整个场内处理系统 | 污染物负荷等于浓度乘流量；核对进水、出水、污泥和旁路 | 仪表校准、认可实验室结果、许可报告和处理日志 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 全部前景行 | 归一化数量等于周期或批次数量除以合格净成品汁质量，单位 kg | 采集数量；合格净蔬菜汁质量 | 每 1 kg 参考产品的数量 | `iso-14044-2006` |
| `calc_volume_to_mass` | 以体积记录的产品 | 产品质量等于实测体积乘以记录温度下的产品特定密度 | 体积；密度；温度 | kg 蔬菜汁 |  |
| `calc_mass_balance` | 各批次和数据集周期 | 物料投入总量加期初库存等于产品、残余物、废水中产品损失、直接损失、期末库存和所披露无法解释差异之和 | 全部批次物料记录；库存变化；残余物；废水损失 | 质量平衡闭合和残差 | `iso-14044-2006` |
| `calc_total_energy_intensity` | 场址电力和热能 | 采用有记录因子将各载能体换算为 MWh，汇总交付电力和热能，再除以以 hl 表示的成品体积。仅当设施和路线可比于引用的软饮料及加工果蔬果肉饮料或果蔬汁范围时才比较 0.01 至 0.035 MWh/hl；否则披露不可比性。 | 载能体数量；换算因子；成品汁体积 | MWh/hl 成品汁 | `eu-fdm-bat-2019` |
| `calc_specific_wastewater` | 离开前景制造的废水 | 废水体积除以以 hl 表示的成品体积，不含单独排放的冷却水和雨水 | 各流废水体积；成品汁体积 | m3/hl 成品汁 | `eu-fdm-bat-2019` |
| `calc_pollutant_load` | 场内处理后出水 | 各物质负荷等于流量比例浓度乘排放体积并进行单位换算 | 分析物浓度；出水体积 | 每参考产品的 kg 物质 | `eu-fdm-bat-2019` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | 产品和参考流 | 将产品匹配至其他蔬菜汁，并声明全部必需限定信息、产品流 UUID、净质量基准和包装范围。 | 产品规格、标签或销售说明、批次代码和数据集元数据 |
| `dq_temporal` | 前景活动数据 | 覆盖至少 12 个代表性月份或完整季节生产期，并披露停机、异常批次和季节权重。 | 生产日历、批次清单、公用工程周期和代表性声明 |
| `dq_measurement` | 质量、体积、能源、水和排放 | 使用经校准仪器或经核对记录；保留体积转质量所需密度和温度，以及能源的载能体特定换算因子。 | 校准证书、仪表核对、实验室结果和计算工作簿 |
| `dq_completeness` | 过程和流覆盖 | 覆盖每个必需过程，以及所声明截断以上的全部物料投入、产品、残余物、废水流、直接排放和共享公用工程；量化并说明排除项。 | 过程流程图、清单完整性检查表、质量平衡、水量平衡和能源核对 |
| `dq_food_safety` | 稳定化和卫生控制 | 识别适用食品安全制度，保留危害分析和经验证关键参数，并记录偏差和纠正措施。21 CFR Part 120 适用时，保留适用病原减少控制及监测记录。 | HACCP 或等效计划、验证报告、时间温度或其他关键参数记录、SSOP 记录和纠正措施日志 |
| `dq_allocation` | 多产品和共享系统 | 记录细分尝试、残余物分类、分配驱动因子、数量和敏感性；不得隐藏抵扣或内部转移。 | 分配工作表、市场或去向证据和敏感性结果 |
| `dq_source_currency` | 外部基准和法律控制 | 数据集更新时核查引用法律、指南和 BAT 文件的适用性与当前状态；不得将背景 BAT 范围视为通用允许范围。 | 来源复核记录和适用性声明 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | 参考产品 | 定量参考必须准确为 1 kg 合格其他蔬菜汁净成品，使用产品流 `641392fd-b293-4355-affa-b1b8c936698c`、Mass 属性 `93a60a56-a3c8-11da-a746-0800200b9a66`、单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` 和 kg；不得计入包装质量。 |  |
| `validate_product_scope` | 产品身份 | 缺少蔬菜种类或混合比例、蔬菜汁路线、组成或可溶性固形物基准、稳定化方法、储存类别或包装范围时拒绝数据集；产品为番茄汁、果汁或非果汁饮料时同样拒绝。 | `ecfr-21-cfr-120` |
| `validate_process_coverage` | 前景边界 | 每个必需过程必须有活动数据；每个条件过程必须纳入，或有证据表明其发生在报告场址控制之外并明确标记为不适用。 | `eu-fdm-bat-2019`; `codex-cxc-1-1969` |
| `validate_mass_balance` | 批次和周期清单 | 必须记录质量平衡闭合。调查并披露残差；不得通过改变固定参考输出或隐藏损失来强行闭合。 | `iso-14044-2006` |
| `validate_water_energy` | 水、废水和能源 | 要求各流用水和废水记录及各载能体能源记录。可比时计算所引用背景能源和废水指标；超出范围时说明，不得自动拒绝有效但不可比路线。 | `eu-fdm-bat-2019` |
| `validate_safety_controls` | 稳定化和卫生 | 要求适用危害控制制度、验证证据、关键限值、实际监测值、偏差和纠正措施。21 CFR Part 120 适用时，病原控制过程必须满足适用的经验证减少要求；不得未经产品特定验证就移用其他果蔬汁的时间温度程序。 | `ecfr-21-cfr-120`; `fda-juice-haccp-guidance`; `codex-cxc-1-1969` |
| `validate_allocation` | 共产品、残余物和共享公用工程 | 要求过程细分或有记录的因果分配方法、完整残余物去向，并单独披露任何下游再循环或回收抵扣。 | `iso-14044-2006` |
| `validate_uuid_resolution` | 天工引用 | 参考产品、质量属性和单位组 UUID 必须与所选天工记录相符。发布前必须选择并核验全部其他清单 UUID；未解析语义流标签保留为评审阻塞项。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 其他蔬菜汁在工厂门口的场址特定或代表性前景制造数据集 |
| downstream_use | `secondary_dataset`；满足代表性、评审和发布要求后可作为 `background_dataset` |
| allowed_use | 与所声明蔬菜组成、加工路线、地域、技术、包装范围、储存类别、分配方法和参考期一致的产品碳足迹及 LCA 研究 |
| excluded_use | 未连接上游数据集的农业种植；番茄汁或果汁；非果汁饮料；消费者健康比较；营养声称；食品安全法律认证；未经调整的实质不同浓缩、保藏、包装或储存路线 |
| required_metadata | PCR id 和状态；参考产品 UUID；蔬菜种类和混合比例；供应商或来源覆盖；直接压榨或浓缩汁复原路线；可溶性固形物或组成基准；含果肉或澄清状态；稳定化方法和适用安全制度；市场和储存状态；包装格式和范围；地域；技术；场址覆盖；参考期；分配方法；数据所有者和评审状态 |
| required_quality_disclosure | 原始数据占比；时间、地域和技术代表性；仪器和记录基础；质量、水量和能源平衡残差；BAT 背景比较及适用性；保留的暂定估算；未解析 UUID；排除项；分配敏感性；食品安全验证证据；不确定性和评审局限 |
| update_trigger | 蔬菜混合、供应商形态、浓缩或复原路线、得率、配方、稳定化技术或关键参数、包装格式、储存制度、场址或能源结构、废水处理、分配方法、法律要求发生变化，或任何重要流变化超过 10%；否则至少每三年复核一次 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `eu-fdm-bat-2019` | 官方指南（`official_guidance`） | 欧盟委员会实施决定 (EU) 2019/2031，食品、饮料和乳品行业 BAT 结论，https://eur-lex.europa.eu/eli/dec_impl/2019/2031/oj，检索日期 2026-08-11 | 过程和排放清单要求；水、能源、原料、残余物和废水监测；可比加工果蔬果肉饮料或果蔬汁路线的背景 0.01-0.035 MWh/hl 能源及 0.08-0.20 m3/hl 废水指标 |
| `ecfr-21-cfr-120` | 标准（`standard`） | 美国 eCFR，Title 21 Part 120，危害分析与关键控制点系统，https://www.ecfr.gov/current/title-21/chapter-I/subchapter-B/part-120，检索日期 2026-08-11 | 覆盖果蔬的蔬菜汁定义；法规适用时的卫生、危害分析、监测、验证、核查和记录 |
| `fda-juice-haccp-guidance` | 官方指南（`official_guidance`） | 美国 FDA，Juice HACCP Hazards and Controls Guidance，第一版，Docket 02D-0333，https://www.fda.gov/regulatory-information/search-fda-guidance-documents/guidance-industry-juice-hazard-analysis-critical-control-point-hazards-and-controls-guidance-first，检索日期 2026-08-11 | 产品特定过程验证、病原控制监测，以及不得在不同蔬菜汁间直接移用处理参数的要求 |
| `codex-cxc-1-1969` | 标准（`standard`） | FAO 和 WHO，General Principles of Food Hygiene，CXC 1-1969，Rome 2023，https://www.fao.org/fao-who-codexalimentarius/publications/en/，检索日期 2026-08-11 | 通用食品卫生、HACCP、过程控制、防止交叉污染、监测、核查和文件记录 |
| `iso-14044-2006` | 标准（`standard`） | ISO 14044:2006，环境管理 生命周期评价 要求与指南，https://www.iso.org/standard/38498.html，检索日期 2026-08-11 | LCA 和 LCI 目标与范围、清单、报告、评审、分配层级和解释框架 |
