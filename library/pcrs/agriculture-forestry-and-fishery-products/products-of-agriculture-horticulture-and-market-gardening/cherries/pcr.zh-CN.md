---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.cherries
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 果园或包装场门的新鲜樱桃

## 1. 范围与适用性

本 PCR 覆盖新鲜、未经加工的樱桃，从果园建立或声明的生产周期开始，经田间管理、采收、可选的初步分级或冷却，到声明的果园门或包装场门交付。范围包括果园投入、灌溉、养分和土壤改良剂管理、作物保护、采收、门前调理、初级包装以及门前有记录的残余物或次品去向。范围不包括苗圃生产、干制、冷冻、罐装、榨汁或其他加工樱桃，零售、消费者、下游运输、无关土地转化和基础设施建设。数据包应声明物种或品种、地理位置、果园树龄、作物周期、边界、成熟度、等级、处理状态、灌溉、养分基准、包装状态和残余物去向。

## 2. 产品类别识别

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.cherries |
| classification_refs | CPC 3.0:01344 Cherries; mapping relation: exact |
| covered_products | 声明果园门或包装场门的新鲜、完整、未经加工樱桃 |
| excluded_products | 苗圃生产；干制、冷冻、罐装、榨汁、发酵或其他加工樱桃；零售、消费者、下游运输、无关土地转化和基础设施 |
| representative_product | 声明成熟度、等级和边界的可销售新鲜完整樱桃 |
| production_route | 果园建立或更新；树体和果实生产管理；灌溉、养分、土壤改良剂和作物保护管理；采收；可选分级、冷却和初级包装 |
| market_state | 果园门或包装场门以散装或声明初级包装交付的新鲜完整樱桃 |

## 3. 参考流

| Field | Value |
| --- | --- |
| What | 声明果园门或包装场门的可销售新鲜樱桃 |
| How much | 1,000 kg |
| How well | 新鲜且未经加工；声明物种或品种、成熟度、尺寸或等级、果梗状态、清洁度、冷却或清洗状态以及包装状态 |
| How long or cycle | 一个声明的生产年度或果园作物周期，包括归属于该周期的全部采收批次 |
| reference_flow_link | marketable_cherry_output |

| Field | Value |
| --- | --- |
| Reference amount | 1000 |
| Reference product flow | 声明边界的新鲜樱桃 |
| Reference flow property | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | 地理位置；物种和品种；果园路线和树龄；周期日期；声明边界；成熟度、等级、果梗和冷却状态；灌溉；养分和作物保护基准；包装；残余物、次品和废水去向 |


构建前景数据包时，所有必需限定信息都应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中声明。缺失必需限定信息的数据包，其参考流定义视为不完整。

## 4. 计量与单位规则
| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_product_mass` | 采收批次和边界输出 | 质量 | kg | 将采收水果、可销售产出、次品、修剪物、残余物和有记录损失分别核算并进行平衡。 |
| `orchard_cycle_normalization` | 果园和作物周期记录 | 面积、时间和质量 | ha, year, kg | 按果园区块记录，并归一化到同一声明周期归属的可销售产出。 |
| `nutrient_product_basis` | 肥料和土壤改良剂 | 产品质量和养分 | kg product, kg N, kg P2O5, kg K2O | 每种实际肥料或改良剂产品单独列卡，保留实物质量、配方、养分组成和施用记录；养分量不是同一产品的另一次投入，不使用集合或分组标识代替具体流身份。 |
| `water_energy_basis` | 灌溉、冷却、电力和燃料 | 体积、能量或燃料 | m3, kWh, MJ, L | 分开记录水、电和燃料，并披露每项换算或共享设备分配。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 已整备的果园单元接收樱桃种植材料，或进入声明的生产周期；披露既有土地利用和排除的基础设施 |
| starting_condition_role | 果园建立、生产年度或生产作物周期核算的起点 |
| product_classification_scope | CPC 3.0:01344 下的新鲜樱桃，直到声明的果园门或包装场门 |
| recursive_input_rule | 购入种植材料只链接一次；除非提供单独上游数据集，否则苗圃和繁育留在本 PCR 之外。没有证据时不得递归展开同类产品投入。 |
| upstream_dataset_requirement | 使用时为种植材料、养分和改良剂、作物保护、灌溉水、电力、燃料、包装、运输或处理服务提供上游数据集。 |
| disclosure | 声明地理位置、品种、路线、树龄、周期、灌溉、养分和作物保护计划、采收批次、边界、产出平衡、处理、包装、残余物和废水去向。 |

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_declared_orchard_cycle` | 建立和果园管理 | 纳入产生新鲜产出的声明建立或生产周期更新、管理活动和投入；排除无关基础设施。 | `fao-gap-framework-2003`; `globalgap-ifa-fruit-vegetables-v6` |
| `boundary_farm_gate_conditioning` | 采收和初步调理 | 终止于声明的果园门或包装场门；仅在其发生于该边界之前时纳入分级、冷却、清洗和初级包装。 | `fao-postharvest-handling-ae075e`; `globalgap-ifa-fruit-vegetables-v6` |
| `boundary_soil_residue_pathway` | 养分、土壤、残余物和次品 | 使用一种声明的氮和残余物方法；不得重复计算路径，也不得在没有去向和功能证据时主张残余物抵扣。 | `ipcc-2019-refinement-afolu`; `fao-gap-framework-2003` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `cherry_orchard_establishment` | 樱桃果园建立 | required | 有代表性的种植、补植或果园单元建立 | 前景果园建立 | 建立面积和归属产出 |
| `managed_cherry_orchard_cycle` | 管理型樱桃果园周期 | required | 每个代表性生产年度或生产周期 | 前景生物生产 | 管理面积和采收量 |
| `cherry_harvest_and_gate_handling` | 樱桃采收和边界处理 | required | 有代表性的采收和声明边界 | 前景采收、调理和边界交付 | 1,000 kg 边界产出 |
| `cherry_residue_and_reject_routing` | 樱桃残余物和次品去向 | conditional | 边界前发生残余物、次品、回收或处理 | 前景残余物和次品去向 | 有称量的去向质量 |

### 过程：樱桃果园建立（`cherry_orchard_establishment`）

#### 输入
##### 产品流

###### 樱桃种植材料（`planting_material_input`）
樱桃树、砧木或嫁接苗以购入或转移材料跨越建立过程边界。

- 选定流：樱桃种植材料
- 流属性/单位：数量或质量 / plant or kg
- 数量规则：按果园区块记录购入、种植和补植数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
原始活动或阶段基准：每 1,000 kg 可销售边界产出.

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_orchard_establishment_records`
- 来源：`fao-gap-framework-2003`; `globalgap-ifa-fruit-vegetables-v6`

###### 尿素肥料（`cherry_orchard_establishment_agricultural_nutrient_inputs_urea`）

**cherry_orchard_establishment_agricultural_nutrient_inputs 的采集范围与适用性。** 下列具体身份分别列卡，仅在原有过程范围内有实际使用或产生记录时启用；不是必用材料清单或默认配方。未发生须有依据，缺少记录不得记为零。其他实际材料必须另建具体身份卡，不能套用以下名称或 UUID。保留原有归属和边界，避免与包含这些投入的外包服务双计。

逐一采集每种肥料产品。保留每种实际产品的身份、数量、配方、养分组成、施用事件和分配关系；复合产品不得重复计数。
原始活动或阶段基准：每 1,000 kg 可销售边界产出.

用设备、供应商及同期计量记录确认身份、等级、状态和单位；UUID 尚未确认。 按产品实物质量计一次，并保留含水率、N/P/K 配方及施用事件；养分量是计算属性，不得另计同一产品。未列出的复合肥和有机肥须按配方或原料单独建卡。

- 选定流：尿素 `3f8850c0-f718-4c4b-8fcb-8fd42e03aa8e`
- 流属性 / 单位：质量 / kg
- 数量规则：依 `cp_nutrient_and_amendment_records` 采集本卡身份的原始数量，按原有归属规则计算每声明参考流的交换量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_nutrient_and_amendment_records`
- 来源：`fao-gap-framework-2003`；`globalgap-ifa-fruit-vegetables-v6`；`fao-fertilizer-identities`

仅当实际配方及等级兼容时使用此产品身份。保留供应商组成及质量记录，不以养分质量、稀释溶液质量或服务活动替代产品质量。UUID本身不提供剂量或排放因子。

###### 硫酸铵肥料（`cherry_orchard_establishment_agricultural_nutrient_inputs_ammonium_sulfate`）

用设备、供应商及同期计量记录确认身份、等级、状态和单位；UUID 尚未确认。 按产品实物质量计一次，并保留含水率、N/P/K 配方及施用事件；养分量是计算属性，不得另计同一产品。未列出的复合肥和有机肥须按配方或原料单独建卡。

- 选定流：硫酸铵 `8c6f0cbb-16d7-4dc9-8d55-e8dea17d7faf`
- 流属性 / 单位：质量 / kg
- 数量规则：依 `cp_nutrient_and_amendment_records` 采集本卡身份的原始数量，按原有归属规则计算每声明参考流的交换量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_nutrient_and_amendment_records`
- 来源：`fao-gap-framework-2003`；`globalgap-ifa-fruit-vegetables-v6`；`fao-fertilizer-identities`

仅当实际配方及等级兼容时使用此产品身份。保留供应商组成及质量记录，不以养分质量、稀释溶液质量或服务活动替代产品质量。UUID本身不提供剂量或排放因子。

###### 重过磷酸钙肥料（`cherry_orchard_establishment_agricultural_nutrient_inputs_triple_superphosphate`）

用设备、供应商及同期计量记录确认身份、等级、状态和单位；UUID 尚未确认。 按产品实物质量计一次，并保留含水率、N/P/K 配方及施用事件；养分量是计算属性，不得另计同一产品。未列出的复合肥和有机肥须按配方或原料单独建卡。

- 选定流：重过磷酸钙肥料
- 流属性 / 单位：质量 / kg
- 数量规则：依 `cp_nutrient_and_amendment_records` 采集本卡身份的原始数量，按原有归属规则计算每声明参考流的交换量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_nutrient_and_amendment_records`
- 来源：`fao-gap-framework-2003`；`globalgap-ifa-fruit-vegetables-v6`；`fao-fertilizer-identities`

###### 氯化钾肥料（`cherry_orchard_establishment_agricultural_nutrient_inputs_potassium_chloride`）

用设备、供应商及同期计量记录确认身份、等级、状态和单位；UUID 尚未确认。 按产品实物质量计一次，并保留含水率、N/P/K 配方及施用事件；养分量是计算属性，不得另计同一产品。未列出的复合肥和有机肥须按配方或原料单独建卡。

- 选定流：氯化钾肥料
- 流属性 / 单位：质量 / kg
- 数量规则：依 `cp_nutrient_and_amendment_records` 采集本卡身份的原始数量，按原有归属规则计算每声明参考流的交换量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_nutrient_and_amendment_records`
- 来源：`fao-gap-framework-2003`；`globalgap-ifa-fruit-vegetables-v6`；`fao-fertilizer-identities`

###### 作为肥料施用的牛粪（`cherry_orchard_establishment_agricultural_nutrient_inputs_cattle_manure`）

用设备、供应商及同期计量记录确认身份、等级、状态和单位；UUID 尚未确认。 按产品实物质量计一次，并保留含水率、N/P/K 配方及施用事件；养分量是计算属性，不得另计同一产品。未列出的复合肥和有机肥须按配方或原料单独建卡。

- 选定流：作为肥料施用的牛粪
- 流属性 / 单位：质量 / kg
- 数量规则：依 `cp_nutrient_and_amendment_records` 采集本卡身份的原始数量，按原有归属规则计算每声明参考流的交换量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_nutrient_and_amendment_records`
- 来源：`fao-gap-framework-2003`；`globalgap-ifa-fruit-vegetables-v6`；`fao-organic-nutrients`

###### 施入土壤的植物残体堆肥（`cherry_orchard_establishment_agricultural_nutrient_inputs_plant_compost`）

用设备、供应商及同期计量记录确认身份、等级、状态和单位；UUID 尚未确认。 按产品实物质量计一次，并保留含水率、N/P/K 配方及施用事件；养分量是计算属性，不得另计同一产品。未列出的复合肥和有机肥须按配方或原料单独建卡。

- 选定流：施入土壤的植物残体堆肥
- 流属性 / 单位：质量 / kg
- 数量规则：依 `cp_nutrient_and_amendment_records` 采集本卡身份的原始数量，按原有归属规则计算每声明参考流的交换量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_nutrient_and_amendment_records`
- 来源：`fao-gap-framework-2003`；`globalgap-ifa-fruit-vegetables-v6`；`fao-organic-nutrients`

##### 废物流

##### 基本流

###### 果园土地占用（`establishment_land_occupation`）
果园区块在建立期间占用土地，该负担分配到生产周期。

- 选定流：土地占用
- 流属性/单位：面积时间 / ha year
- 数量规则：果园面积乘以有记录的建立期分配时长。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1,000 kg 可销售边界产出.

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：依据采集计算（`calculated_from_collection`）
- 采集协议：`cp_orchard_establishment_records`
- 来源：`fao-gap-framework-2003`

#### 输出
##### 产品流
##### 废物流
##### 基本流

### 过程：管理型樱桃果园周期（`managed_cherry_orchard_cycle`）

#### 输入
##### 产品流

###### 灌溉水（`irrigation_water_input`）
灌溉水在输送到代表性樱桃区块时跨越果园边界。

- 选定流：灌溉水
- 流属性/单位：体积 / m3
- 数量规则：按区块分配计量或供应商记录的体积。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1,000 kg 可销售边界产出.

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_irrigation_records`
- 来源：`fao-gap-framework-2003`; `globalgap-ifa-fruit-vegetables-v6`

###### 灌溉和冷却用电（`orchard_electricity_input`）
记录代表性周期中泵、冷却设备或果园设备使用的购入电力。

- 选定流：电力供应
- 流属性/单位：能量 / kWh
- 数量规则：按区块和周期分配计量或发票记录的电量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1,000 kg 可销售边界产出.

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_and_fuel_records`
- 来源：`globalgap-ifa-fruit-vegetables-v6`

###### 柴油 (`orchard_fuel_input_diesel`)

仅适用于本作业有记录的柴油机械。保留燃料牌号及配方，体积按实测或供应商支持的密度换算。其他动力系统按实际载能体记录，不用柴油当量替代。执行`orchard_fuel_input_specific_input`，本示例不是必用投入。不重复计入机械服务包含项，也不对现场发电内部转移的电力再计外购供电；实际燃料燃烧及发电排放仍须单独核算。

- 选定流：柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性 / 单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按`cp_energy_and_fuel_records`采集`managed_cherry_orchard_cycle`的该载能体用量。共用量仅归属一次，归属原始量乘声明参考数量，再除以相同产品单位下匹配的最终合格产出数量；保留实测阶段吞吐及原有分配规则，不对已归一化量再次归一化。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：per declared reference flow
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_energy_and_fuel_records`
- 来源：`route-energy-fao`

###### 尿素肥料（`managed_cherry_orchard_cycle_agricultural_nutrient_inputs_urea`）

**managed_cherry_orchard_cycle_agricultural_nutrient_inputs 的采集范围与适用性。** 下列具体身份分别列卡，仅在原有过程范围内有实际使用或产生记录时启用；不是必用材料清单或默认配方。未发生须有依据，缺少记录不得记为零。其他实际材料必须另建具体身份卡，不能套用以下名称或 UUID。保留原有归属和边界，避免与包含这些投入的外包服务双计。

逐一采集每种肥料产品。保留每种实际产品的身份、数量、配方、养分组成、施用事件和分配关系；复合产品不得重复计数。
原始活动或阶段基准：每 1,000 kg 可销售边界产出.

用设备、供应商及同期计量记录确认身份、等级、状态和单位；UUID 尚未确认。 按产品实物质量计一次，并保留含水率、N/P/K 配方及施用事件；养分量是计算属性，不得另计同一产品。未列出的复合肥和有机肥须按配方或原料单独建卡。

- 选定流：尿素 `3f8850c0-f718-4c4b-8fcb-8fd42e03aa8e`
- 流属性 / 单位：质量 / kg
- 数量规则：依 `cp_nutrient_and_amendment_records` 采集本卡身份的原始数量，按原有归属规则计算每声明参考流的交换量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_nutrient_and_amendment_records`
- 来源：`fao-gap-framework-2003`；`globalgap-ifa-fruit-vegetables-v6`；`fao-fertilizer-identities`

仅当实际配方及等级兼容时使用此产品身份。保留供应商组成及质量记录，不以养分质量、稀释溶液质量或服务活动替代产品质量。UUID本身不提供剂量或排放因子。

###### 硫酸铵肥料（`managed_cherry_orchard_cycle_agricultural_nutrient_inputs_ammonium_sulfate`）

用设备、供应商及同期计量记录确认身份、等级、状态和单位；UUID 尚未确认。 按产品实物质量计一次，并保留含水率、N/P/K 配方及施用事件；养分量是计算属性，不得另计同一产品。未列出的复合肥和有机肥须按配方或原料单独建卡。

- 选定流：硫酸铵 `8c6f0cbb-16d7-4dc9-8d55-e8dea17d7faf`
- 流属性 / 单位：质量 / kg
- 数量规则：依 `cp_nutrient_and_amendment_records` 采集本卡身份的原始数量，按原有归属规则计算每声明参考流的交换量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_nutrient_and_amendment_records`
- 来源：`fao-gap-framework-2003`；`globalgap-ifa-fruit-vegetables-v6`；`fao-fertilizer-identities`

仅当实际配方及等级兼容时使用此产品身份。保留供应商组成及质量记录，不以养分质量、稀释溶液质量或服务活动替代产品质量。UUID本身不提供剂量或排放因子。

###### 重过磷酸钙肥料（`managed_cherry_orchard_cycle_agricultural_nutrient_inputs_triple_superphosphate`）

用设备、供应商及同期计量记录确认身份、等级、状态和单位；UUID 尚未确认。 按产品实物质量计一次，并保留含水率、N/P/K 配方及施用事件；养分量是计算属性，不得另计同一产品。未列出的复合肥和有机肥须按配方或原料单独建卡。

- 选定流：重过磷酸钙肥料
- 流属性 / 单位：质量 / kg
- 数量规则：依 `cp_nutrient_and_amendment_records` 采集本卡身份的原始数量，按原有归属规则计算每声明参考流的交换量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_nutrient_and_amendment_records`
- 来源：`fao-gap-framework-2003`；`globalgap-ifa-fruit-vegetables-v6`；`fao-fertilizer-identities`

###### 氯化钾肥料（`managed_cherry_orchard_cycle_agricultural_nutrient_inputs_potassium_chloride`）

用设备、供应商及同期计量记录确认身份、等级、状态和单位；UUID 尚未确认。 按产品实物质量计一次，并保留含水率、N/P/K 配方及施用事件；养分量是计算属性，不得另计同一产品。未列出的复合肥和有机肥须按配方或原料单独建卡。

- 选定流：氯化钾肥料
- 流属性 / 单位：质量 / kg
- 数量规则：依 `cp_nutrient_and_amendment_records` 采集本卡身份的原始数量，按原有归属规则计算每声明参考流的交换量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_nutrient_and_amendment_records`
- 来源：`fao-gap-framework-2003`；`globalgap-ifa-fruit-vegetables-v6`；`fao-fertilizer-identities`

###### 作为肥料施用的牛粪（`managed_cherry_orchard_cycle_agricultural_nutrient_inputs_cattle_manure`）

用设备、供应商及同期计量记录确认身份、等级、状态和单位；UUID 尚未确认。 按产品实物质量计一次，并保留含水率、N/P/K 配方及施用事件；养分量是计算属性，不得另计同一产品。未列出的复合肥和有机肥须按配方或原料单独建卡。

- 选定流：作为肥料施用的牛粪
- 流属性 / 单位：质量 / kg
- 数量规则：依 `cp_nutrient_and_amendment_records` 采集本卡身份的原始数量，按原有归属规则计算每声明参考流的交换量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_nutrient_and_amendment_records`
- 来源：`fao-gap-framework-2003`；`globalgap-ifa-fruit-vegetables-v6`；`fao-organic-nutrients`

###### 施入土壤的植物残体堆肥（`managed_cherry_orchard_cycle_agricultural_nutrient_inputs_plant_compost`）

用设备、供应商及同期计量记录确认身份、等级、状态和单位；UUID 尚未确认。 按产品实物质量计一次，并保留含水率、N/P/K 配方及施用事件；养分量是计算属性，不得另计同一产品。未列出的复合肥和有机肥须按配方或原料单独建卡。

- 选定流：施入土壤的植物残体堆肥
- 流属性 / 单位：质量 / kg
- 数量规则：依 `cp_nutrient_and_amendment_records` 采集本卡身份的原始数量，按原有归属规则计算每声明参考流的交换量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_nutrient_and_amendment_records`
- 来源：`fao-gap-framework-2003`；`globalgap-ifa-fruit-vegetables-v6`；`fao-organic-nutrients`

##### 废物流
##### 基本流

###### 生产性果园土地占用（`productive_land_occupation`）
生产性樱桃面积在声明周期内被占用，并归一化到可销售边界产出。

- 选定流：土地占用
- 流属性/单位：面积时间 / ha year
- 数量规则：生产性果园面积乘以周期时长，再除以可销售边界产出。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1,000 kg 可销售边界产出.

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：依据采集计算（`calculated_from_collection`）
- 采集协议：`cp_orchard_cycle_records`
- 来源：`fao-gap-framework-2003`

###### 灌溉水取用（`water_withdrawal`）
水源特定的取水量与输送的灌溉水分开记录，以避免重复计算。

- 选定流：水资源取用
- 流属性/单位：质量或体积 / kg or m3
- 数量规则：根据水源计量取水量计算，并披露水源和回流水。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1,000 kg 可销售边界产出.

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：依据采集计算（`calculated_from_collection`）
- 采集协议：`cp_irrigation_records`
- 来源：`globalgap-ifa-fruit-vegetables-v6`

#### 输出
##### 产品流
##### 废物流
##### 基本流

###### 管理土壤氧化亚氮排放（`soil_n2o_emission`）
仅在养分基准和选定方法已声明后表示直接和间接土壤氮排放。

- 选定流：排放到空气的氧化亚氮
- 流属性/单位：质量 / kg N2O
- 数量规则：对有记录的氮投入使用一种选定方法，并披露因子和换算。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1,000 kg 可销售边界产出.

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：方法公式（`method_formula`）
- 采集协议：`cp_nutrient_and_amendment_records`
- 来源：`ipcc-2019-refinement-afolu`

### 过程：樱桃采收和边界处理（`cherry_harvest_and_gate_handling`）

#### 输入
##### 产品流

###### 木制板条箱（`primary_packaging_input_wood_crate`）

**primary_packaging_input 的采集范围与适用性。** 下列具体身份分别列卡，仅在原有过程范围内有实际使用或产生记录时启用；不是必用材料清单或默认配方。未发生须有依据，缺少记录不得记为零。其他实际材料必须另建具体身份卡，不能套用以下名称或 UUID。保留原有归属和边界，避免与包含这些投入的外包服务双计。

在声明包装场门之前使用时，箱、纸箱、小盒或其他初级包装跨越边界。
原始活动或阶段基准：每 1,000 kg 可销售边界产出.

用设备、供应商及同期计量记录确认身份、等级、状态和单位；UUID 尚未确认。 记录组成、净质量、使用次数和归还损耗；可重复使用品按实际周转归属，包装与产品质量分开。不同处理去向分别建交换，不假定回收抵扣。

- 选定流：木制板条箱
- 流属性 / 单位：质量 / kg
- 数量规则：依 `cp_conditioning_and_packaging_records` 采集本卡身份的原始数量，按原有归属规则计算每声明参考流的交换量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_and_packaging_records`
- 来源：`fao-postharvest-handling-ae075e`；`fao-package-identities`

###### 瓦楞纸板箱（`primary_packaging_input_corrugated_box`）

用设备、供应商及同期计量记录确认身份、等级、状态和单位；UUID 尚未确认。 记录组成、净质量、使用次数和归还损耗；可重复使用品按实际周转归属，包装与产品质量分开。不同处理去向分别建交换，不假定回收抵扣。

- 选定流：瓦楞纸板箱
- 流属性 / 单位：质量 / kg
- 数量规则：依 `cp_conditioning_and_packaging_records` 采集本卡身份的原始数量，按原有归属规则计算每声明参考流的交换量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_and_packaging_records`
- 来源：`fao-postharvest-handling-ae075e`；`fao-package-identities`

###### 聚乙烯包装薄膜（`primary_packaging_input_pe_film`）

用设备、供应商及同期计量记录确认身份、等级、状态和单位；UUID 尚未确认。 记录组成、净质量、使用次数和归还损耗；可重复使用品按实际周转归属，包装与产品质量分开。不同处理去向分别建交换，不假定回收抵扣。

- 选定流：聚乙烯包装薄膜
- 流属性 / 单位：质量 / kg
- 数量规则：依 `cp_conditioning_and_packaging_records` 采集本卡身份的原始数量，按原有归属规则计算每声明参考流的交换量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_and_packaging_records`
- 来源：`fao-postharvest-handling-ae075e`；`fao-package-identities`

###### 边界前冷却能耗（`pre_gate_cooling_energy`）
当冷却或冷库属于所选路线且发生在声明包装场门之前时，将其电力纳入。

- 选定流：电力供应
- 流属性/单位：能量 / kWh
- 数量规则：按樱桃批次计量或分配冷却电量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1,000 kg 可销售边界产出.

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_and_packaging_records`
- 来源：`fao-postharvest-handling-ae075e`

##### 废物流
##### 基本流

#### 输出
##### 产品流

###### 可销售新鲜樱桃（`marketable_cherry_output`）
可销售樱桃在声明果园门或包装场门离开前景系统，作为参考产品。

- 选定流：声明边界的新鲜樱桃
- 流属性/单位：质量 / kg
原始产出计量与核对要求：记录声明分级和边界前处理后的称量可销售产出。

- 数量规则：1000 千克
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
原始活动或阶段基准：1,000 kg 参考流.

- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest_lot_records`
- 来源：`fao-postharvest-handling-ae075e`

##### 废物流
##### 基本流

### 过程：樱桃残余物和次品去向（`cherry_residue_and_reject_routing`）

#### 输入
##### 产品流

###### 拒收或降级樱桃（`reject_cherry_input`）
当拒收或降级水果在边界前被送往回收、处理或处置时，进入该条件性过程。

- 选定流：拒收或降级樱桃
- 流属性/单位：质量 / kg wet fruit
- 数量规则：按批次记录称量的次品质量和去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1,000 kg 可销售边界产出.

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residue_and_reject_records`
- 来源：`fao-postharvest-handling-ae075e`

##### 废物流

#### 输出
##### 产品流

###### 回收有机物料（`recovered_organic_output`）
仅在有称量去向和接收方功能记录时记录回收有机物料。

- 选定流：回收有机物料
- 流属性/单位：质量 / kg wet or dry matter
- 数量规则：记录回收质量、含水基准和去向；没有功能证据时不得主张替代。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
原始活动或阶段基准：每 1,000 kg 可销售边界产出.

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residue_and_reject_records`
- 来源：`fao-postharvest-handling-ae075e`

##### 废物流

###### 送处理或处置的残余废物（`residual_waste_output`）
当没有有记录的回收功能时，残余废物离开该条件性去向过程。

- 选定流：残余有机废物
- 流属性/单位：质量 / kg wet matter
- 数量规则：记录质量和去向；没有功能证据时不得主张回收抵扣。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1,000 kg 可销售边界产出.

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residue_and_reject_records`
- 来源：`fao-postharvest-handling-ae075e`; `globalgap-ifa-fruit-vegetables-v6`


##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_shared_orchard_cycles` | 建立和多个周期 | 按有记录的面积时间、树年或其他有依据的物理基础分配共享果园负担，并披露该基础。 | `fao-gap-framework-2003` |
| `allocation_marketable_and_reject_outputs` | 采收和边界处理 | 将可销售樱桃作为参考输出；分别记录降级水果、次品、修剪物和回收物料，只有在存在真实共产品功能时才进行分配。 | `fao-postharvest-handling-ae075e`; `globalgap-ifa-fruit-vegetables-v6` |
| `allocation_recovered_residue_claim` | 回收残余物 | 除非记录去向、功能、数量和接收系统证据，否则不得主张避免生产。 | `fao-gap-framework-2003` |

具体身份卡不继承原集合卡的数量范围。实际数量由原始记录、库存/计量对账及声明参考流计算；在取得对应身份、单位、期间和边界一致的证据前，不提供默认量或数值筛查范围。缺少范围是质量披露项，并非零投入或完整性证明。


| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_residual_precedence` | 未规定主方法分支的剩余共同负担 | 本 PCR 要求研究作联产品分配决策但未规定主方法的地方，统一执行以下优先顺序；已明确规定的类别专属主方法保持有效。先直接归属可分开的产出专属作业。剩余共同负担 B 只有在实测作业或生物服务记录证明驱动量 d_i 代表因果消耗时，才采用该物理驱动。产品可称量、有价值或等级较低本身均不构成因果依据，不能在面积、时间、质量和收入间任意切换。可比等级接受相同共同搬运服务时，仅在服务需求、状态及水分基准可比且有据时采用实测处理质量。份额 a_i=d_i/sum(d_j)，B_i=B*a_i。该共同作业没有可辩护的因果物理驱动时，采用同交接点、同期间经济份额 a_i=(q_i*p_i)/sum(q_j*p_j)，纳入全部独立预期产出，匹配数量/价格单位、币种和代表性价格，使用产出专属下游加工之前的价值。缺价格或分母证据使分配结果不完整，不能把产品价格记零或改称单一产出系统。披露合计为一的份额和重要替代方法敏感性；敏感性方法不是可任意替换的主结果。废物、留存残余和内部转移不获得联产品份额，其应归属的生产/处理负担仍保留在产出可售产品的路线中。未分配物理数量和质量平衡另行保留。本分支不自动给予替代信用；单独界定的替代情景须保留总清单及实际被替代功能证据。 | `ghg-protocol-product-standard-2011` |

## 8. 前景数据采集、计算与质量规则

### 完成数据集前确认具体投入身份

依据供应商规格、设备及原始记录确认本作业的实际投入。这是必需的采集要求，不是一条交换。完成数据集前，每种实际材料、配方产品、载能体或独立外购服务须分别建立物理身份具体的卡片，并记录原生数量及属性；核验兼容UUID，或明确保留未解析身份且不得宣称数据集已完整链接。不以条件式示例替代未知实际投入，不编造配方，不漏掉必需用量，不由缺失记录推定零消耗。共用投入、复用资产及服务包含项仅归属一次，保留原有阶段、期间及衔接最终参考产出的实测吞吐。原集合范围不作为单项投入上限或用量默认值。

| requirement_id | collection_protocol_id | 保留的采集范围 |
| --- | --- | --- |
| `orchard_fuel_input_specific_input` | `cp_energy_and_fuel_records` | 作业 managed_cherry_orchard_cycle：拖拉机、喷雾机和采收设备消耗的燃料在使用时跨越边界。 原数量方法：按果园作业分配燃料领用记录、罐量测量或发票。 |
| `crop_protection_input_specific_input` | `cp_crop_protection_records` | 作业 managed_cherry_orchard_cycle：记录果园使用的命名产品和有效成分，不将不同产品合并为一个通用流。 原数量方法：按区块和施用事件记录每种配方及有效成分。 |


先按各采集协议保留原始场址、批次、周期及阶段数量与分母，并完成库存、损失、含水率和共产品归属核对；随后按实际归属的验收交付产品量归一化：归一化交换量 = 归属原始交换量 × 声明参考数量 / 同一边界和计量基准的验收产品量。多年生建植和共享作业先执行各自分摊规则，不得把内部转移数量设为最终参考数量。每声明的参考流指第 3 节的数量、单位和产品状态；数据包必须声明实际路线和门。


### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_orchard_establishment_records` | `cherry_orchard_establishment` | planting material and area | orchard register and planting log | block_id; cultivar; plants; date; area; tree density | document review and field reconciliation；原始汇总与分配：reconcile purchased, planted and failed plants | plant, ha, date | each event | establishment and allocated cycles | each block | 每声明的参考流 | supplier lot and field register |
| `cp_orchard_cycle_records` | `managed_cherry_orchard_cycle` | orchard area and cycle | block register and farm log | block_id; area; dates; age; yield; weather; operations | record review and block reconciliation；原始汇总与分配：aggregate by block and declared cycle | ha, year, kg | monthly and cycle close | full cycle | each block | 每声明的参考流 | block register and signed farm log |
| `cp_irrigation_records` | `managed_cherry_orchard_cycle` | irrigation and withdrawal | meter and pump log | block_id; source; volume; dates; method; allocation | meter readout and allocation review；原始汇总与分配：sum measured volume and allocate shared meters | m3 | event or monthly | full cycle | block and source | 每声明的参考流 | calibrated meter |
| `cp_energy_and_fuel_records` | `managed_cherry_orchard_cycle` | electricity and fuel | utility bill and equipment log | equipment; type; quantity; hours; allocation | invoice and log review；原始汇总与分配：allocate by hours, area or throughput `orchard_fuel_input_specific_input`: 作业 managed_cherry_orchard_cycle：拖拉机、喷雾机和采收设备消耗的燃料在使用时跨越边界。 原数量方法：按果园作业分配燃料领用记录、罐量测量或发票。 依据供应商规格、设备及原始记录确认本作业的实际投入。这是必需的采集要求，不是一条交换。完成数据集前，每种实际材料、配方产品、载能体或独立外购服务须分别建立物理身份具体的卡片，并记录原生数量及属性；核验兼容UUID，或明确保留未解析身份且不得宣称数据集已完整链接。不以条件式示例替代未知实际投入，不编造配方，不漏掉必需用量，不由缺失记录推定零消耗。共用投入、复用资产及服务包含项仅归属一次，保留原有阶段、期间及衔接最终参考产出的实测吞吐。原集合范围不作为单项投入上限或用量默认值。 | kWh, MJ, L | monthly and issue | full cycle | orchard and gate equipment | 每声明的参考流 | invoice or meter |
| `cp_nutrient_and_amendment_records` | `cherry_orchard_establishment`, `managed_cherry_orchard_cycle` | fertilizer and amendments | purchase, application, label and plan | product; mass; N; P2O5; K2O; date; block; area | record review and nutrient balance；原始汇总与分配：sum actual products and nutrients | kg product and nutrient | application | full cycle | each block | 每声明的参考流 | label or laboratory result |
| `cp_crop_protection_records` | `managed_cherry_orchard_cycle` | crop protection | spray log and purchase record | product; formulation; active substance; quantity; date; area | record reconciliation；原始汇总与分配：sum product and disclose active substance `crop_protection_input_specific_input`: 作业 managed_cherry_orchard_cycle：记录果园使用的命名产品和有效成分，不将不同产品合并为一个通用流。 原数量方法：按区块和施用事件记录每种配方及有效成分。 依据供应商规格、设备及原始记录确认本作业的实际投入。这是必需的采集要求，不是一条交换。完成数据集前，每种实际材料、配方产品、载能体或独立外购服务须分别建立物理身份具体的卡片，并记录原生数量及属性；核验兼容UUID，或明确保留未解析身份且不得宣称数据集已完整链接。不以条件式示例替代未知实际投入，不编造配方，不漏掉必需用量，不由缺失记录推定零消耗。共用投入、复用资产及服务包含项仅归属一次，保留原有阶段、期间及衔接最终参考产出的实测吞吐。原集合范围不作为单项投入上限或用量默认值。 | kg or L | application | full cycle | each block | 每声明的参考流 | label and signed log |
| `cp_harvest_lot_records` | `managed_cherry_orchard_cycle`, `cherry_harvest_and_gate_handling` | harvest and gate output | harvest ticket and scale record | block_id; lot_id; date; cultivar; harvested; marketable; grade; rejects | scale reconciliation；原始汇总与分配：reconcile harvest, output, rejects and loss | kg | each lot | all harvests | block and gate | 每声明的参考流 | scale and traceability |
| `cp_conditioning_and_packaging_records` | `cherry_harvest_and_gate_handling` | cooling, packaging and wastewater | pack-house log and invoices | lot_id; water; electricity; material; quantity; cooling; destination | mass balance and document review；原始汇总与分配：allocate utilities and packaging to output | m3, kWh, kg | lot or shift | gate period | each gate | 每声明的参考流 | meter and invoice |
| `cp_residue_and_reject_records` | `managed_cherry_orchard_cycle`, `cherry_harvest_and_gate_handling`, `cherry_residue_and_reject_routing` | residues, culls and waste | residue log and destination receipt | source; mass; moisture; destination; treatment; function; date | weighing and destination review；原始汇总与分配：reconcile source to recovery and residuals | kg wet or dry matter | event or monthly | full cycle | orchard and gate | 每声明的参考流 | scale and receipt |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_cycle_normalization` | all process rows | `normalized amount = recorded amount / marketable gate output * 1,000 kg`. | block records; dates; gate output | normalized amount | `fao-gap-framework-2003` |
| `calc_nutrient_basis` | fertilizer and amendment rows | 保持产品质量以及 N、P2O5、K2O 质量分开；仅依据声明证据计算。 | product mass; nutrient fractions or result | product and nutrient amount | `globalgap-ifa-fruit-vegetables-v6` |
| `calc_soil_emissions` | soil emission rows | 对有记录的投入氮使用一种兼容 IPCC 的氮方法，并披露因子和换算。 | N input; factors; qualifiers | elementary-flow amount | `ipcc-2019-refinement-afolu` |
| `calc_mass_reconciliation` | harvest, gate and residue rows | 平衡采收量、可销售产出、次品、残余物、回收物料和有记录损失。 | lot records; scale; destination records | mass balance | `fao-postharvest-handling-ae075e` |
| `chemical_species_mass_accounting` | `elementary_nutrient_emissions` | 最终基本交换使用已识别物质的质量和一个实际接收环境，养分／活动台账另存：该物种的 N2O-N × 44/28 为 N2O，NH3-N × 17/14 为 NH3，硝酸盐氮 × 62/14 为硝酸盐，磷酸盐磷 × 95/31 为磷酸盐。若选定流为元素磷，则报告 kg P，仅在物种口径有据时将磷酸盐质量乘 31/95。只有方法输出按元素计时才换算一次，实测化合物质量不得再换算。总养分损失不得无据归于单一物种，土壤残余／留存养分不是排放。保留直接／间接路径台账，不重复所选方法或上游清单已经包含的路径。因子不确定性范围只按其声明基准检查因子，不是最终化合物数量或场址排放的允许界限。用合格参考数量和匹配实测产出，将可归属化合物质量归一化一次。活动量、身份或接收环境未知时保留证据缺口，不得宣称完整。 | `cp_nutrient_and_amendment_records`; 物种特定活动量台账、方法路径和因子基准、匹配合格产出 | 按身份区分的交换和对账活动记录 |  |

### 数据质量要求

| requirement_id | 适用对象 | Requirement | Evidence |
| --- | --- | --- | --- |
| `quality_identity_and_scope` | all datasets | 声明物种、品种、地理位置、区块、路线、树龄、边界和周期日期。 | orchard and lot registers |
| `quality_measurement_traceability` | measured inputs and outputs | 优先使用校准计量器、秤、发票、施用记录和去向收据；记录共享记录分配。 | primary records and worksheet |
| `quality_temporal_completeness` | full cycle | 覆盖全部采收和施用事件，并识别缺失月份、区块或批次。 | cycle completeness checklist |
| `quality_mass_balance` | harvest and handling | 平衡采收、可销售、拒收、修剪、回收、残余和有记录损失质量。 | lot mass balance |
| `quality_factor_disclosure` | calculated soil and residue pathways | 披露所选因子方法、养分基准、换算和任何排除路径。 | calculation worksheet and source reference |

### 物质特定释放要求

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `residue_pathway_emission_specific_emission` | cherry_residue_and_reject_routing | 针对实际 cherry_residue_and_reject_routing 活动，保留原 cp_residue_and_reject_records 采集职责和活动/状态/期间基准。按实际测量或兼容路径方法逐一核算该职责涉及的释放，保留活动与因子单位。这是强制身份识别及核算要求，不是一个集合基本交换。逐一列出实际排放物质及接收环境，分别建具体卡或复用现有匹配卡一次，采用已核实UUID或明确未决身份。泛称污染物/挥发物/残体、总质量损失或合计筛查区间不能证明化合物或单项排放量。保留元素、分子或报告口径，原始数量归属后按合格参考产出归一化一次。不适用须有据；身份、方法或活动缺失会阻止完整性。已含于完整服务或上游数据的同一释放不得重复。 | cp_residue_and_reject_records | 独立有据物质/接收环境交换 | `ipcc-2019-refinement-afolu` |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference_qualifiers` | reference flow and dataset | 当必需物种、地理位置、路线、周期、边界、成熟度、等级、果梗或处理限定信息缺失时拒绝。 | `fao-gap-framework-2003`; `globalgap-ifa-fruit-vegetables-v6` |
| `validate_cycle_and_output_reconciliation` | cycle and gate output | 检查投入属于声明区块和期间，并检查产出、次品、残余物和损失与采收量相符。 | `fao-postharvest-handling-ae075e` |
| `validate_nutrient_and_emission_basis` | nutrient and emission rows | 检查产品质量、养分基准、因子方法和限定信息；防止氮路径重复计算。 | `ipcc-2019-refinement-afolu` |
| `validate_gate_and_downstream_exclusion` | boundary and use | 检查边界明确，并排除零售、消费者、下游运输和加工樱桃。 | `globalgap-ifa-fruit-vegetables-v6` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset after review and release controls |
| downstream_use | 声明果园门或包装场门新鲜樱桃的前景农业建模 |
| allowed_use | 保留产品、地理位置、路线、周期、边界、投入基准、残余物去向和质量限定信息后使用 |
| excluded_use | 加工樱桃、零售或消费者阶段、无限定的区域替代，或缺失边界和周期范围的使用 |
| required_metadata | PCR id; CPC reference; product identity; geography; orchard scope; route; age; cycle dates; gate; grade; inputs; irrigation; residue fate; reference amount and unit |
| required_quality_disclosure | 时间和场址覆盖、完整性、原始记录比例、分配、质量平衡、因子和 identity 证据缺口s |
| update_trigger | 路线、灌溉、养分方法、周期分配、边界处理、包装或排放方法发生变化 |

证据适用性：引用的一般农场记录和采后框架不提供作物特定的产量、寿命、交接截止点或 LCA 分配默认值。这些属于本 PCR 的方法选择，应按实际物种、路线和期间限定，取得兼容的农艺证据后才能声称完整。作者暂定范围仅为筛查辅助，不是经验验收限值，也不能替代实测。

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `globalgap-ifa-fruit-vegetables-v6` | standard | GLOBALG.A.P. Integrated Farm Assurance fruit and vegetables requirements | 可追溯性、投入、水、养分、作物保护和质量证据 |
| `ipcc-2019-refinement-afolu` | method_factor | 2019 IPCC Refinement, AFOLU | 管理土壤氮方法和排放路径披露 |
| `fao-gap-framework-2003` | official_guidance | FAO Committee on Agriculture, COAG/2003/6, Development of a Framework for Good Agricultural Practices, section IV paragraphs 24–26 and Annex, https://www.fao.org/4/y8704e/y8704e.htm | 仅为一般监测和农场记录背景；作物特定路线、寿命、数量范围及 LCA 分配属于 PCR 选择，须补充适用证据。 |
| `fao-postharvest-handling-ae075e` | official_guidance | Kitinoja and Kader, Small-Scale Postharvest Handling Practices: A Manual for Horticultural Crops, 4th edition (2002), FAO-hosted original, https://www.fao.org/4/ae075e/ae075e00.htm | 仅为一般采后处理、冷却和损失记录背景；作物特定参数及本 PCR 截止点和归属须另行证据支持。 |
| `fao-fertilizer-identities` | official_guidance | FAO Fertilizer Specifications, https://www.fao.org/agriculture/crops/thematic-sitemap/theme/spi/plantnutrition/fertspecs/en/ | 条件性具体身份和方法依据；不证明场址使用，也不设定用量 |
| `fao-organic-nutrients` | official_guidance | FAO How to Make and Use Compost, https://www.fao.org/4/i2230e/i2230e.pdf | 条件性具体身份和方法依据；不证明场址使用，也不设定用量 |
| `fao-package-identities` | official_guidance | FAO Packaging for fruits, vegetables and root crops, section 4, https://www.fao.org/4/x5016e/X5016E04.htm | 条件性具体身份和方法依据；不证明场址使用，也不设定用量 |
| `route-energy-fao` | official_guidance | FAO, Energy-smart food for people and climate (2011), Annex 2; and Energy use in agriculture and industry, Annex IV. https://www.fao.org/4/i2454e/i2454e00.pdf ; https://www.fao.org/4/Q1085e/q1085e0d.htm | 仅支持设备及载能体可能性，适用性由现场记录确定；不采用能耗强度、燃料比例或默认组合。 |
| `ghg-protocol-product-standard-2011` | standard | WRI/WBCSD, Product Life Cycle Accounting and Reporting Standard (2011), Chapter 9, https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf | 一般分配优先顺序及可比交接点经济价值基准。适用条件和明确的剩余分支是本 PCR 的方法约定；该来源不规定本产品因果系数、价格或产出数量。 |
