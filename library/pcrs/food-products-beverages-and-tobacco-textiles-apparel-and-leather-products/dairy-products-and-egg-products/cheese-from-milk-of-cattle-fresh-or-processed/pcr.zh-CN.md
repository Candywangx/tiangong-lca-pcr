---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.dairy-products-and-egg-products.cheese-from-milk-of-cattle-fresh-or-processed
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 鲜制或加工的牛乳奶酪

## 1. 范围与适用性

本 PCR 支持为乳原料来自牛的鲜制、未熟成、熟成、霉菌熟成、磨碎、粉状或加工奶酪生产前景数据包。当所声明的产品规范和市场名称将牛乳凝乳和乳清奶酪识别为奶酪时，也属于本规则范围。前景边界始于奶酪工厂接收牛乳或已声明的牛乳奶酪投入，止于工厂门口可供发运的成品奶酪。巴氏杀菌、凝固、凝乳处理、盐渍、压制、熟成、研磨、混合、熔融、乳化、干燥、包装、冷藏、清洗和厂内废水处理等产品特定操作，在其属于所声明路线时纳入。

牛乳的牧场生产、外购配料和包装材料的生产、厂外运输、分销、零售、消费者使用及寿命终结不属于前景边界；研究范围包含这些阶段时，应链接上游或下游数据集。完全由水牛乳、绵羊乳、山羊乳或其他非牛乳制成的奶酪、植物基奶酪替代品、乳粉、黄油以及未作为奶酪销售的乳清配料均不纳入。混合动物乳产品原则上不适用本 PCR，除非能够分别计量牛乳投入与负荷，或实施并披露有明确依据的分配。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.dairy-products-and-egg-products.cheese-from-milk-of-cattle-fresh-or-processed |
| classification_refs | CPC 3.0 `22251`，鲜制或加工的牛乳奶酪 |
| covered_products | 牛乳鲜制/未熟成奶酪、熟成和霉菌熟成奶酪、奶酪凝乳、作为奶酪销售的乳清奶酪、磨碎或粉状奶酪及加工奶酪 |
| excluded_products | 完全由非牛乳制成的奶酪；植物基替代品；黄油；乳粉或乳清粉；未作为奶酪销售的乳清流；没有可分离牛乳清单的混合动物乳奶酪 |
| representative_product | 制造工厂门口的牛乳奶酪成品 |
| production_route | 路线特定的天然/鲜制奶酪制造或加工奶酪制造，包括适用的精加工、包装、冷藏、清洗和废水操作 |
| market_state | 已制造的成品，按声明为已包装或未包装，在工厂门口可供发运 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 按所声明鲜制、天然/熟成或加工奶酪路线生产的牛乳奶酪成品 |
| How much | 1 kg 净奶酪产品 |
| How well | 符合所声明奶酪规范、牛乳来源、产品形态、水分/干物质脂肪基准、熟成状态、配料组成和包装状态 |
| How long or cycle | 一个生产批次直至工厂门口；适用时包括完整声明的熟成或保持期 |
| reference_flow_link | `finished_cattle_milk_cheese` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 新鲜或加工的牛乳奶酪 `221efbce-690d-492b-9d15-79d0ac862e35` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 牛乳占比；鲜制/未熟成、熟成、霉菌熟成、磨碎、粉状、乳清奶酪或加工形态；乳的热处理状态；水分或干物质脂肪基准；熟成时间和条件；配料与添加剂配方；已包装/未包装状态；包装材料；制造地理范围；工厂门口状态 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 参考输出表示为所声明工厂门口的奶酪成品净质量；未随产品销售的运输包装不计入产品质量。 |
| `ingredient_mass_basis` | 乳、奶酪、乳清、配料、盐、清洗化学品、包装和固体废物 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 按接收状态记录湿质量；当干物质、脂肪、蛋白质或浓度基准影响收率、分配或可比性时予以披露。 |
| `energy_conversion` | 外购电力、燃料、蒸汽和热能 | Energy | kWh 或 MJ | 保留所计量的能源载体和单位；仅在报告换算时使用 1 kWh = 3.6 MJ，在链接载体特定上游数据集之前不得合并电力与热能。 |
| `water_volume_mass_conversion` | 工艺用水和废水 | Volume 或 Mass | m3 或 kg | 保留计量体积；换算为质量时声明密度和温度假设。年度 BAT 比较继续按每吨原料表示，不得改写为每吨奶酪。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 制造工厂接收的牛乳或牛乳奶酪，并声明质量、组成、温度、来源和上游数据集引用 |
| starting_condition_role | 外购乳品投入和前景工厂门口起始条件 |
| product_classification_scope | 符合 CPC 3.0 `22251` 和所声明奶酪规范的牛乳奶酪 |
| recursive_input_rule | 用于制造加工奶酪的牛乳奶酪投入保持为显式技术流投入并链接其自身上游数据集；不得在同一前景过程内部递归重用本 PCR |
| upstream_dataset_requirement | 为牛乳、天然奶酪、配料、包装、电力、燃料、供水和废物处理链接符合所声明地理与技术的代表性上游数据集 |
| disclosure | 声明路线、工厂位置、报告期、乳品投入来源和组成、产品形态、熟成/保持时间、包装状态、共产品去向、排除操作和替代数据集 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_route_operations` | 前景制造 | 纳入报告工厂从乳品投入接收到可发运奶酪的所有已执行单元操作，包括路线特定的乳准备、凝固、凝乳处理、排乳清、盐渍、压制、熟成、加工、干燥、包装、冷藏、清洗和厂内废水处理。 | `us-epa-ap42-9-6-1-cheese` |
| `boundary_product_identity` | 产品纳入 | 确认输出为由牛乳或牛乳制品制成的奶酪，并披露其为鲜制/未熟成、熟成、霉菌熟成、乳清奶酪、磨碎/粉状或加工产品。 | `codex-cxs-283-1978-2024` |
| `boundary_upstream_links` | 外购投入 | 牧场乳生产和外购物料制造位于前景边界之外，但应链接代表性上游数据集；不得将缺失的上游数据集视为零负荷。 | `eu-2021-2279-environmental-footprint` |
| `boundary_whey_recovery` | 乳清和酸乳清 | 记录分离乳清及其去向；若浓缩、干燥、再利用、饲料制备或废水处置在厂内进行，应纳入。 | `us-epa-ap42-9-6-1-cheese`; `eu-2019-2031-fdm-bat` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| natural_cheese_manufacture | 天然或鲜制奶酪制造 | conditional | 适用于通过凝固及凝乳/乳清分离由牛乳制造奶酪的路线 | 前景生产 | 1 kg 天然、鲜制、熟成、乳清、磨碎或粉状奶酪成品 |
| processed_cheese_manufacture | 加工奶酪制造 | conditional | 天然奶酪经过清理、混合、熔融、乳化或其他加工时纳入 | 前景生产 | 1 kg 加工奶酪成品 |
| site_utilities_cleaning_and_dispatch | 场址公用工程、清洗、包装、冷藏与发运 | required | 纳入可归属于声明产品和报告期的操作 | 前景支持与精加工 | 工厂门口 1 kg 奶酪成品 |

### 过程：天然或鲜制奶酪制造（`natural_cheese_manufacture`）

#### 输入

##### 产品流

###### 奶酪制造接收的牛乳（`cattle_milk_input`）

记录跨越工厂边界的牛乳，包括接收和拒收批次、组成、温度及上游数据集身份。

- 选定流：鲜牛奶 `aa8aebbb-724a-417b-8372-2dccd499ce71`
- 流属性/单位：Mass / kg
- 数量规则：计量的已接收牛乳质量，归一化到奶酪成品输出
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：天然/鲜制路线每 1 kg 奶酪成品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_natural_route_batch_balance`
- 来源：`codex-cxs-283-1978-2024`
- 数量范围：暂定乳到奶酪筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：5
  - 上限：20
  - 单位：kg 牛乳/kg 奶酪成品
  - 基准：天然/鲜制路线每 kg 奶酪成品
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 发酵剂、凝乳酶、盐和路线特定配料（`cheesemaking_ingredients`）

即使本 PCR 将其采集规则归为一组，数据包仍应逐项记录配料。产品规范决定适用的菌种、酶、盐、水和允许配料。

- 选定流：凝乳酶（凝乳蛋白酶，chymosin） `d71ffeab-e448-497c-9246-30967da0da78`；菌种、盐、水和其他配料使用各自独立选定流
- 流属性/单位：Mass / kg
- 数量规则：计量每批发料数量；相关时披露浓度和活性成分基准
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：天然/鲜制路线每 1 kg 奶酪成品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_natural_route_batch_balance`
- 来源：`codex-cxs-283-1978-2024`; `us-epa-ap42-9-6-1-cheese`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 牛乳奶酪成品（`finished_cattle_milk_cheese`）

记录完整声明路线后的合格产品净质量；若熟成、干燥或磨碎发生在工厂门口之前，应包含相应损失。

- 选定流：新鲜或加工的牛乳奶酪 `221efbce-690d-492b-9d15-79d0ac862e35`
- 流属性/单位：Mass / kg
- 数量规则：由实测批次收率支持的固定参考输出
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_natural_route_batch_balance`
- 来源：

###### 分离乳清或回收乳清产品（`whey_coproduct`）

记录湿乳清质量、固形物含量和去向，并声明其为销售、厂内加工、饲用、厌氧消化或废水处理。

- 选定流：乳清 `7ee9083e-5a51-476e-b96f-1501752e169a`
- 流属性/单位：Mass / kg
- 数量规则：从凝乳分离环节实测或通过质量平衡计算的乳清量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：天然/鲜制路线每 1 kg 奶酪成品
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_natural_route_batch_balance`
- 来源：`us-epa-ap42-9-6-1-cheese`; `eu-2019-2031-fdm-bat`
- 数量范围：暂定乳清质量平衡筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：20
  - 单位：kg 湿乳清/kg 奶酪成品
  - 基准：天然/鲜制路线每 kg 奶酪成品；仅在没有可分离乳清流时可为零
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 不合格凝乳、奶酪损失和未回收固形物（`natural_route_solid_loss`）

食品级共产品应与废物分开。仅在不作为产品回收时，记录不合格固形物及其去向。

- 选定流：路线和去向特定的废物流
- 流属性/单位：Mass / kg
- 数量规则：计量的拒收物、修边料、落地损失和未回收产品固形物
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：天然/鲜制路线每 1 kg 奶酪成品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_natural_route_batch_balance`
- 来源：
- 数量范围：暂定固体损失筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.2
  - 单位：kg/kg 奶酪成品
  - 基准：天然/鲜制路线每 kg 奶酪成品
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

### 过程：加工奶酪制造（`processed_cheese_manufacture`）

#### 输入

##### 产品流

###### 用于加工的天然牛乳奶酪（`natural_cheese_input`）

记录每种天然奶酪投入并链接其上游数据集，不得在加工奶酪前景过程内递归嵌入本 PCR。

- 选定流：新鲜或加工的牛乳奶酪 `221efbce-690d-492b-9d15-79d0ac862e35`
- 流属性/单位：Mass / kg
- 数量规则：计量加入加工奶酪批次的天然奶酪质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 加工奶酪成品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_processed_route_batch_balance`
- 来源：`us-epa-ap42-9-6-1-cheese`
- 数量范围：暂定加工奶酪投入筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.5
  - 上限：1.5
  - 单位：kg 天然奶酪/kg 加工奶酪成品
  - 基准：每 kg 加工奶酪成品
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 外加乳品原料、水、乳化盐和其他配料（`processed_cheese_ingredients`）

逐项记录配方组分及其浓度和干物质基准。不得由本 PCR 推断允许的配料，应采用适用产品规范和管辖要求。

- 选定流：每种配方组分对应的路线特定独立产品流
- 流属性/单位：Mass / kg
- 数量规则：每种组分的批次配方实测量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 加工奶酪成品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_processed_route_batch_balance`
- 来源：`us-epa-ap42-9-6-1-cheese`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 牛乳加工奶酪成品（`finished_processed_cheese`）

记录混合、熔融/乳化、成型、冷却以及路线内在线包装之后的合格加工奶酪净质量。

- 选定流：新鲜或加工的牛乳奶酪 `221efbce-690d-492b-9d15-79d0ac862e35`
- 流属性/单位：Mass / kg
- 数量规则：由实测批次收率支持的固定参考输出
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_processed_route_batch_balance`
- 来源：

##### 废物流

###### 加工奶酪修边料和不合格产品（`processed_route_solid_loss`）

按去向记录清理的奶酪皮、修边料、开机损失和不合格产品；内部返工物料不计为废物，并应披露返工。

- 选定流：路线和去向特定的废物流
- 流属性/单位：Mass / kg
- 数量规则：计量的非返工固体损失
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 加工奶酪成品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_processed_route_batch_balance`
- 来源：`us-epa-ap42-9-6-1-cheese`
- 数量范围：暂定加工路线固体损失筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.2
  - 单位：kg/kg 加工奶酪成品
  - 基准：每 kg 加工奶酪成品
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

### 过程：场址公用工程、清洗、包装、冷藏与发运（`site_utilities_cleaning_and_dispatch`）

#### 输入

##### 产品流

###### 外购电力与热能（`site_energy_input`）

将电力、燃料、外购蒸汽和回收热作为独立能源载体记录。共享场址公用工程按分项计量或有文件依据的因果驱动量分配。

- 选定流：地理和载体特定的电力、燃料或蒸汽流
- 流属性/单位：Energy / kWh 或 MJ
- 数量规则：可归属于所声明奶酪路线的分载体计量或发票核对用量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：工厂门口每 1 kg 奶酪成品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_site_utility_records`
- 来源：`eu-2019-2031-fdm-bat`
- 数量范围：暂定场址能源筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.01
  - 上限：5
  - 单位：kWh 当量/kg 奶酪成品
  - 基准：仅作为宽泛筛选范围；清单中电力与热能载体仍保持分开
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 工艺用水与清洗用水（`site_water_input`）

在仪表或工程平衡允许时，分别记录产品用水、盐水补水、冷却水补水、原位清洗用水和其他用水。

- 选定流：地理和水源特定的供水流
- 流属性/单位：Mass 或 Volume / kg 或 m3
- 数量规则：计量进水扣除经证明与本产品无关的场址用水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：工厂门口每 1 kg 奶酪成品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_water_wastewater_records`
- 来源：`eu-2019-2031-fdm-bat`
- 数量范围：暂定场址用水筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.1
  - 上限：20
  - 单位：kg 水/kg 奶酪成品
  - 基准：工厂门口每 kg 奶酪成品
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 工厂投入的包装材料（`packaging_material_input`）

按材料类型记录每种初级、二级和三级包装，并区分可重复使用的运输包装。

- 选定流：材料和地理特定的包装流
- 流属性/单位：Mass / kg
- 数量规则：包装物料清单与已包装产品输出核对
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 已包装奶酪成品；声明为未包装时为零
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_records`
- 来源：`us-epa-ap42-9-6-1-cheese`
- 数量范围：暂定包装质量筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.5
  - 单位：kg 包装/kg 奶酪成品
  - 基准：工厂门口每 kg 奶酪成品
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 送往处理的奶酪工厂废水（`site_wastewater_output`）

记录废水体积或质量、去向和实测污染物数据；回收乳清及可销售固形物不得并入废水。

- 选定流：处理方式和去向特定的废水流
- 流属性/单位：Volume 或 Mass / m3 或 kg
- 数量规则：计量排放量或经验证水量平衡，扣除单独再利用水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：工厂门口每 1 kg 奶酪成品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_water_wastewater_records`
- 来源：`eu-2019-2031-fdm-bat`
- 数量范围：暂定废水筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.1
  - 上限：20
  - 单位：kg 废水/kg 奶酪成品
  - 基准：工厂门口每 kg 奶酪成品
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 包装与清洗废物（`site_support_waste`）

按处理去向记录废弃包装、废过滤材料、清洗剂容器和污泥；不得与废水或产品损失合并。

- 选定流：材料和处理方式特定的废物流
- 流属性/单位：Mass / kg
- 数量规则：按废物类别计量或由废物承包商记录的质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：工厂门口每 1 kg 奶酪成品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_water_wastewater_records`
- 来源：
- 数量范围：暂定场址支持废物筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.5
  - 单位：kg/kg 奶酪成品
  - 基准：工厂门口每 kg 奶酪成品
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 制冷剂与现场燃烧直接排放（`direct_site_emissions`）

将制冷剂损失与现场燃烧的实测或计算排放分别记录为基本流，并选择制冷剂或燃料特定排放因子。

- 选定流：物质和环境介质特定的基本流
- 流属性/单位：Mass / kg
- 数量规则：制冷剂库存平衡以及燃料特定的监测或计算排放
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：工厂门口每 1 kg 奶酪成品
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_site_utility_records`
- 来源：
- 数量范围：暂定直接排放筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.1
  - 单位：kg 物质/kg 奶酪成品
  - 基准：需要以物质特定证据替换的宽泛筛选范围
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_first` | 多功能工厂与共享操作 | 在可能时通过单元过程细分、路线特定计量或系统扩展避免分配；可以细分时只采集直接归属于所声明奶酪的操作清单。 | `eu-2021-2279-environmental-footprint` |
| `allocation_physical_relation` | 不可分离的奶酪、乳清、奶油和其他共产品 | 无法避免分配时，采用与共产品功能相关且有文件依据的因果物理关系；不得仅因方便而选择湿质量。 | `eu-2021-2279-environmental-footprint` |
| `allocation_other_relation` | 没有可辩护物理关系的多功能输出 | 无法证明相关物理关系时，采用明确论证的其他关系（如经济分配），披露价格地理范围和平均期，并对重大共产品提供敏感性结果。 | `eu-2021-2279-environmental-footprint` |
| `allocation_whey_status` | 分离乳清和酸乳清 | 回收乳清有进一步用途或市场去向时归为共产品并记录数量与去向；仅在所声明条件下送往处理处置时归为废物。 | `eu-2019-2031-fdm-bat`; `us-epa-ap42-9-6-1-cheese` |
| `allocation_rework` | 内部返工 | 内部返工的奶酪或凝乳返回批次质量平衡，不产生共产品抵扣；披露返工量及附加公用工程。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_natural_route_batch_balance` | natural_cheese_manufacture | 乳品投入、配料、奶酪、乳清和固体损失 | 批次生产与实验室记录 | 批次编号；牛乳 kg；组成；配料 kg；奶酪 kg；乳清 kg；拒收物 kg；水分/FDM；时间戳 | 校准罐/秤，与批次单和实验室结果核对 | kg 和组成单位 | 每批 | 代表性连续 12 个月或所声明生产期的全部批次 | 所纳入天然/鲜制奶酪生产线 | 按产品汇总接收流，统一处理返工，并归一化到合格奶酪 kg | 仪表/秤校准、批次核对、实验室方法和签字收率复核 |
| `cp_processed_route_batch_balance` | processed_cheese_manufacture | 天然奶酪、配方配料、成品和损失 | 配方和批次记录 | 批次编号；投入奶酪 kg；组分 kg；返工 kg；输出 kg；拒收物 kg；配方；时间戳 | 校准秤和配方系统，与包装输出核对 | kg | 每批 | 代表性连续 12 个月或所声明生产期的全部批次 | 所纳入加工奶酪生产线 | 按产品汇总非返工投入和输出，并归一化到合格输出 kg | 秤校准、批准配方、批次核对和放行记录 |
| `cp_site_utility_records` | site_utilities_cleaning_and_dispatch | 电力、燃料、蒸汽、制冷和直接排放 | 仪表、发票、燃料和制冷剂记录 | 载体；仪表编号；数量；单位；期间；分配驱动量；制冷剂充注/补加/回收 | 优先采用校准分表，否则采用发票核对和有文件依据的工程分配 | kWh；MJ；kg | 每月并年度核对 | 与生产数据相同，通常连续 12 个月 | 纳入工厂及可归属共享服务 | 扣除无关负荷，按因果驱动量分配共享负荷，并按产品输出归一化 | 仪表校准、发票总量、燃料记录和制冷剂维护日志 |
| `cp_cleaning_water_wastewater_records` | site_utilities_cleaning_and_dispatch | 用水、清洗化学品、废水和支持废物 | 仪表、化学品领用、排放和废物承包商记录 | 水源；进水；再利用；排放；清洗化学品 kg；可用时 COD/BOD/TSS；废物类别；去向；期间 | 仪表和发票通过水量平衡核对；代表性排放采样 | m3；kg；mg/L | 日或批次采集并按月汇总 | 与生产数据相同，通常连续 12 个月 | 纳入工厂及可归属废水系统 | 进水 - 再利用/产品水 = 排放 + 蒸发/其他有文件依据损失；按原料和奶酪质量归一化 | 仪表校准、平衡闭合、采样计划、实验室认可和处置凭证 |
| `cp_packaging_records` | site_utilities_cleaning_and_dispatch | 初级、二级和三级包装 | 包装物料清单和领用记录 | 包装项目；材料；单位质量；领用数量；返还；产品 kg | 批准物料清单与仓库领用和包装输出核对 | kg | 每个包装规范并每月核对领用 | 与已包装生产相同期间 | 随声明产品供应或用于其发运的全部包装 | 包装净领用量减可重复使用返还量，除以已包装产品 kg | 供应商规范、单位质量检查和仓库核对 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_batch_flows` | 各路线特定清单行 | 归一化数量 = 纳入流数量 / 合格奶酪成品数量 | 批次或期间流记录；合格输出 kg | 每 1 kg 奶酪成品的流数量 |  |
| `close_dairy_mass_balance` | 天然和加工路线 | 将乳品及配料投入与奶酪、乳清、回收产品、废水固形物、废物、蒸发、样品和库存变化比较；发布前调查无法解释的不平衡 | 路线协议的全部质量记录 | 质量平衡闭合及无法解释差异 | `codex-cxs-283-1978-2024`; `us-epa-ap42-9-6-1-cheese` |
| `calculate_bat_energy_indicator` | 奶酪主产品工厂 | 年度载体能源换算为 MWh / 年度原料吨数；仅当奶酪占产量至少 80% 且满足 BAT 适用说明时，与 0.10-0.22 MWh/t 原料比较 | 分载体年度能源；年度原料吨数 | 背景性 BAT 能源指标及偏差说明 | `eu-2019-2031-fdm-bat` |
| `calculate_bat_wastewater_indicator` | 奶酪主产品工厂 | 年度废水排放 m3 / 年度原料吨数；仅当奶酪占产量至少 80% 时，与 0.75-2.5 m3/t 原料比较 | 年度废水排放；年度原料吨数 | 背景性 BAT 废水指标及偏差说明 | `eu-2019-2031-fdm-bat` |
| `calculate_allocation_factors` | 多功能操作 | 分配因子 = 各共产品所声明的因果物理量或其他有依据分配变量 / 所有共产品该变量之和 | 共产品数量；物理属性或价格证据 | 对所分配负荷合计为 1 的分配因子 | `eu-2021-2279-environmental-footprint` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | 参考产品与路线 | 保留产品规范、牛乳占比、配方、鲜制/熟成/加工状态、水分或 FDM 基准、熟成时间和包装状态。 | 批准规范、标签、配方和放行记录 |
| `dq_mass_balance` | 乳品投入、奶酪、乳清和废物 | 使用校准测量并在批次或报告期层面核对；解释重大库存变化、蒸发、返工和无法解释的损失。 | 校准记录、批次单、库存记录和签字核对表 |
| `dq_temporal_coverage` | 全部前景记录 | 投入、输出、公用工程和废物采用同一代表性期间；通常覆盖连续 12 个月，较短的完整生产期应披露季节性限制。 | 数据期间登记和生产日历 |
| `dq_shared_services` | 公用工程、清洗、冷藏和废水 | 优先使用分表；需要分配时保留因果驱动量以及不确定性或敏感性证据。 | 仪表图、工程计算和分配复核 |
| `dq_upstream_identity` | 外购物流与废物处理 | 为每个重大上游或处理链接记录供应商、地理、技术、数据集身份和替代依据。 | 供应商与数据集映射登记 |
| `dq_source_ranges` | 暂定范围 | 所有 `reasoned_estimate` 范围均为可替换 QA 筛选值，不得作为默认清单值或发布关键允许范围。 | 发布前显示已替换或明确接受的复核记录 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference_flow` | 参考产品 | 确认恰好 1 kg 净奶酪成品使用产品流 `221efbce-690d-492b-9d15-79d0ac862e35`、Mass 属性 `93a60a56-a3c8-11da-a746-0800200b9a66`、Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` 和 kg 单位。 |  |
| `validate_route_and_qualifiers` | 数据集身份 | 缺失牛乳占比、产品形态、路线、水分/FDM 基准、熟成条件、配方、包装状态、地理或工厂门口时，不得判为符合。 | `codex-cxs-283-1978-2024` |
| `validate_process_completeness` | 前景过程清单 | 必须包含一个适用奶酪制造路线以及场址公用工程/清洗/发运；所有已执行路线操作及重大投入、共产品、废物和直接排放均应表示或明确说明不适用。 | `us-epa-ap42-9-6-1-cheese` |
| `validate_whey_and_allocation` | 乳清和其他共产品 | 要求数量、组成基准、去向、产品/废物分类、分配决策和分配因子合计；不得接受零负荷回收乳清或无文件依据的经济分配。 | `eu-2019-2031-fdm-bat`; `eu-2021-2279-environmental-footprint` |
| `validate_bat_context` | 奶酪主产品工厂 | 满足适用条件时，按每吨原料报告而非暗中换算年度能源和废水指标，并分别解释超出 0.10-0.22 MWh/t 和 0.75-2.5 m3/t 的值；这些指示值是 QA 背景，而非产品输出限值。 | `eu-2019-2031-fdm-bat` |
| `validate_provisional_ranges` | 推理估算范围 | 标记每个暂定范围以供替换或明确方法学复核；不得用范围中点替代缺失前景数据。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 单元过程前景数据包 |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 对路线、地理、产品形态、组成、熟成条件和包装状态与数据集披露一致的牛乳奶酪制造进行建模 |
| excluded_use | 非牛乳奶酪；植物基替代品；牧场门口乳生产；零售或消费者阶段声明；未作功能和组成调整的不同奶酪形态比较性声明 |
| required_metadata | PCR id；参考流 UUID；产品和路线限定信息；工厂地理；报告期；原料来源；过程图；上游数据集链接；分配方法；共产品去向；包装状态；数据质量证据 |
| required_quality_disclosure | 时间和场址覆盖；测量与平衡闭合；共享服务分配；替代数据集；缺失流 UUID；暂定范围；BAT 指标适用性和偏差说明 |
| update_trigger | 配方、乳来源、产品形态、工艺技术、熟成/保持、包装、能源或用水系统、共产品去向、分配方法、地理或数据质量发生重大变化 |

## 11. 数据源

| 数据源 id | 类型 | 引用 | 用途 |
| --- | --- | --- | --- |
| `codex-cxs-283-1978-2024` | standard | FAO/WHO Codex Alimentarius, General Standard for Cheese, CXS 283-1978, amended 2024, https://www.fao.org/fao-who-codexalimentarius/sh-proxy/en/?lnk=1&url=https%3A%2F%2Fworkspace.fao.org%2Fsites%2Fcodex%2FStandards%2FCXS+283-1978%2FCXS_283e.pdf（检索日期 2026-08-10） | 产品身份、原料、允许配料、奶酪形态和质量平衡背景 |
| `us-epa-ap42-9-6-1-cheese` | official_guidance | United States Environmental Protection Agency, AP-42 Section 9.6.1 Natural and Processed Cheese, Supplement C, August 1997, https://www.epa.gov/sites/default/files/2020-10/documents/c9s06-1.pdf（检索日期 2026-08-10） | 天然和加工奶酪工序分解、乳清处理、包装和排放点 |
| `eu-2019-2031-fdm-bat` | standard | Commission Implementing Decision (EU) 2019/2031, BAT conclusions for the food, drink and milk industries, https://eur-lex.europa.eu/eli/dec_impl/2019/2031/oj（检索日期 2026-08-10） | 奶酪场址能源和废水背景指标及乳清回收规则 |
| `eu-2021-2279-environmental-footprint` | official_guidance | Commission Recommendation (EU) 2021/2279 on the use of the Environmental Footprint methods, https://eur-lex.europa.eu/eli/reco/2021/2279/oj（检索日期 2026-08-10） | 系统边界链接、分配层级和分配因子证据 |
