---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.pumpkins-squash-and-gourds
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 南瓜、笋瓜和葫芦

## 1. 范围与适用性

本 PCR 用于指导新鲜、未经加工的南瓜、笋瓜和葫芦在声明种植周期内生产并于农场门交接时转移的前景数据包构建。默认边界从种植材料接收并接受建植开始，至收获以及在农场门交接前完成的初级处理结束。每个产品批次都应声明产品身份、品种或类型、生产地理范围、种植周期、收获状态、等级和去向。

默认路线包括田地准备、作物建植、栽培、灌溉、养分施用、作物保护、收获、田间处理、分级，以及交接前可选的农场内清洗、冷却或初级包装。种子繁育、种植材料接收前的育苗、土地利用变化、配送、零售、烹饪、罐藏、冷冻、干燥、腌制、发酵及其他加工不在默认边界内。只有在明确描述场地基础设施和能耗时，保护地或高度控制的栽培路线才纳入。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.pumpkins-squash-and-gourds |
| classification_refs | CPC 3.0: 01235 Pumpkins, squash and gourds; mapping relation: exact |
| covered_products | 在声明农场门交接处转移的新鲜、适销南瓜、笋瓜和葫芦 |
| excluded_products | 用于繁育的种子和种植材料；叶、蔓及其他非产品生物质；加工、烹饪、冷冻、干燥、腌制、发酵、罐藏或零售预制产品；下游运输和配送 |
| representative_product | 农场门的新鲜适销南瓜、笋瓜或葫芦 |
| production_route | 土壤栽培或声明的保护地建植、田间管理、收获、分级，以及农场门交接前的可选初级处理 |
| market_state | 具有声明品种或类型、成熟度、等级、修整、清洗、冷却和包装状态的新鲜未加工产品 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 声明农场门交接处的新鲜适销南瓜、笋瓜或葫芦 |
| How much | 1,000 kg |
| How well | 产品新鲜、未经加工并可销售，同时声明产品类型、品种或变种、成熟度、等级、不合格容许度、水分状态、修整状态和包装状态 |
| How long or cycle | 一个声明的种植周期和收获年度；若农场门交接前发生储存，还应声明储存时长 |
| reference_flow_link | conditioned_product_output |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1000 |
| 参考产品流 | 南瓜、南瓜和葫芦 `3a4e98fe-5b66-4d67-bee1-78dfe01b672f` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 产品类型；品种或变种；生产地理范围；种植年度和周期日期；栽培系统；灌溉或雨养状态；收获成熟度；等级和尺寸；水分基准；修整和清洗状态；冷却和储存时长；包装状态；农场门交接 |

构建前景数据包时，应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中声明`必需限定信息`列出的信息。参考产品身份已按 CPC 3.0 01235 完成平台核验。

本参考 UUID 表示新鲜、未加工的农场门产品。使用该绑定前须核对实际物种、产品状态及交接门；独立包装站、进一步加工或不兼容状态的输出必须单独核实身份，不得直接继承此 UUID。身份核实不改变本 PCR 的实际系统边界或数量归一化要求。

## 4. 计量与单位规则
| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_product_mass` | 适销产品以及所有产品、拒收品、修整物和损失质量行 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 按声明的农场门状态称量产品。在归一化前分别保留收获质量、适销输出、拒收品、修整物和田间损失。 |
| `crop_identity_separation` | 南瓜、笋瓜和葫芦记录 | 产品身份 | 声明的产品类型 | 分别记录每种产品类型及品种或变种。只有每个批次完成种植周期库存核对并有书面聚合规则后，才可聚合不同类型。 |
| `nutrient_product_basis` | 肥料和有机改良剂投入 | 质量和养分含量 | kg 产品和 kg 养分 | 每种实际肥料或改良剂产品单独列卡，保留实物质量、配方、养分组成和施用记录；养分量不是同一产品的另一次投入，不使用集合或分组标识代替具体流身份。 |
| `water_delivery_basis` | 灌溉和天然水取用 | 体积 | m3 | 将按水源的取水量与输送到田水量分开记录，并说明水源、计量或估算依据、施用方式和种植周期。 |
| `land_occupation_basis` | 占用的种植面积 | 面积-时间 | ha·种植周期 | 在按作物周期和参考产出归一化土地占用前，记录田地面积和占用时段。 |
| `moisture_and_conditioning_basis` | 收获、清洗、冷却、储存和包装 | 质量和水分 | kg 和百分比 | 保留原始质量及测得的水分或增减水量。没有书面核对时，不得把清洗或冷却造成的质量变化当作产品产量。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 在声明生产田中接受用于建植的种子、移栽苗或其他种植材料，并披露此前土地利用及任何育苗阶段 |
| starting_condition_role | 声明的南瓜、笋瓜或葫芦种植周期起点 |
| product_classification_scope | CPC 3.0 01235 所涵盖的新鲜南瓜、笋瓜和葫芦，直至农场门交接 |
| recursive_input_rule | 产品类别材料作为种植或市场投入时，按其实际交接状态记录并链接到上游数据集；不在本记录内重建上游作物边界。 |
| upstream_dataset_requirement | 当种植材料、养分产品、作物保护产品、供水、燃料、电力、包装、运输服务和废物处理跨越边界时，使用具有代表性的上游数据集。 |
| disclosure | 声明产品类型、品种或变种、田地和生产地理范围、种植年度、种植时长、种植材料、灌溉水源和方式、养分基准、作物保护方案、栽培系统、收获和分级方式、清洗或冷却、储存、包装、产量、残余物和拒收品去向以及农场门状态。 |

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_crop_cycle` | 田地准备和作物生产 | 纳入从种植材料接收至收获的声明种植周期相关投入和排放；披露此前土地利用并排除无关的历史田地负荷。 | `fao-crop-evapotranspiration-56`; `ipcc-2019-managed-soils-n2o` |
| `boundary_farm_gate` | 收获和初级处理 | 默认边界止于新鲜适销产品在声明农场门的转移。只有在转移前发生时，才纳入修整、分选、清洗、冷却、储存和初级包装。 | `usda-ams-pumpkins-standard`; `fao-fruit-vegetable-preparation-2004` |
| `boundary_input_completeness` | 所有前景生产 | 对种植材料、养分、作物保护、灌溉、土地占用、田间和收获能耗、初级处理公用工程、包装及田间直接排放，提供数值、合理为零或书面排除。 | `fao-fruit-vegetable-preparation-2004`; `ipcc-2019-managed-soils-n2o` |
| `boundary_residue_fate` | 田间残余物、拒收品、修整物和清洗残余物 | 说明每种残余物流是还田、留田、饲用、堆肥、处理、运输、销售还是弃置。没有明确说明时，不得把残余物视为联产品。 | `iso-14044-2006`; `fao-fruit-vegetable-preparation-2004` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `field_establishment_and_cultivation` | 田间建植与栽培 | required | 每个所代表的田地和种植年度 | 前景受管理生物生产 | 田地面积、种植周期、投入记录和收获作物输出 |
| `harvest_and_field_handling` | 收获与田间处理 | required | 每个所代表的收获批次 | 前景收获、田间处理、分级和产量核对 | 1,000 kg 适销新鲜产品 |
| `on_farm_primary_conditioning` | 农场内初级处理 | conditional | 农场门交接前发生清洗、冷却、储存或包装时 | 前景初级处理 | 声明交接状态的处理后输出 |

### 过程：田间建植与栽培（`field_establishment_and_cultivation`）

#### 输入
##### 产品流

###### 尿素肥料（`field_establishment_and_cultivation_agricultural_nutrient_inputs_urea`）

**field_establishment_and_cultivation_agricultural_nutrient_inputs 的采集范围与适用性。** 下列具体身份分别列卡，仅在原有过程范围内有实际使用或产生记录时启用；不是必用材料清单或默认配方。未发生须有依据，缺少记录不得记为零。其他实际材料必须另建具体身份卡，不能套用以下名称或 UUID。保留原有归属和边界，避免与包含这些投入的外包服务双计。

逐一采集每种肥料产品。保留每种实际产品的身份、数量、配方、养分组成、施用事件和分配关系；复合产品不得重复计数。
原始活动或阶段基准：每 1,000 kg 适销农场门产品.

用设备、供应商及同期计量记录确认身份、等级、状态和单位；UUID 尚未确认。 按产品实物质量计一次，并保留含水率、N/P/K 配方及施用事件；养分量是计算属性，不得另计同一产品。未列出的复合肥和有机肥须按配方或原料单独建卡。

- 选定流：尿素 `3f8850c0-f718-4c4b-8fcb-8fd42e03aa8e`
- 流属性 / 单位：质量 / kg
- 数量规则：依 `cp_nutrient_application_records` 采集本卡身份的原始数量，按原有归属规则计算每声明参考流的交换量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_nutrient_application_records`
- 来源：`ipcc-2019-managed-soils-n2o`；`fao-fruit-vegetable-preparation-2004`；`fao-fertilizer-identities`

仅当实际配方及等级兼容时使用此产品身份。保留供应商组成及质量记录，不以养分质量、稀释溶液质量或服务活动替代产品质量。UUID本身不提供剂量或排放因子。

###### 硫酸铵肥料（`field_establishment_and_cultivation_agricultural_nutrient_inputs_ammonium_sulfate`）

用设备、供应商及同期计量记录确认身份、等级、状态和单位；UUID 尚未确认。 按产品实物质量计一次，并保留含水率、N/P/K 配方及施用事件；养分量是计算属性，不得另计同一产品。未列出的复合肥和有机肥须按配方或原料单独建卡。

- 选定流：硫酸铵 `8c6f0cbb-16d7-4dc9-8d55-e8dea17d7faf`
- 流属性 / 单位：质量 / kg
- 数量规则：依 `cp_nutrient_application_records` 采集本卡身份的原始数量，按原有归属规则计算每声明参考流的交换量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_nutrient_application_records`
- 来源：`ipcc-2019-managed-soils-n2o`；`fao-fruit-vegetable-preparation-2004`；`fao-fertilizer-identities`

仅当实际配方及等级兼容时使用此产品身份。保留供应商组成及质量记录，不以养分质量、稀释溶液质量或服务活动替代产品质量。UUID本身不提供剂量或排放因子。

###### 重过磷酸钙肥料（`field_establishment_and_cultivation_agricultural_nutrient_inputs_triple_superphosphate`）

用设备、供应商及同期计量记录确认身份、等级、状态和单位；UUID 尚未确认。 按产品实物质量计一次，并保留含水率、N/P/K 配方及施用事件；养分量是计算属性，不得另计同一产品。未列出的复合肥和有机肥须按配方或原料单独建卡。

- 选定流：重过磷酸钙肥料
- 流属性 / 单位：质量 / kg
- 数量规则：依 `cp_nutrient_application_records` 采集本卡身份的原始数量，按原有归属规则计算每声明参考流的交换量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_nutrient_application_records`
- 来源：`ipcc-2019-managed-soils-n2o`；`fao-fruit-vegetable-preparation-2004`；`fao-fertilizer-identities`

###### 氯化钾肥料（`field_establishment_and_cultivation_agricultural_nutrient_inputs_potassium_chloride`）

用设备、供应商及同期计量记录确认身份、等级、状态和单位；UUID 尚未确认。 按产品实物质量计一次，并保留含水率、N/P/K 配方及施用事件；养分量是计算属性，不得另计同一产品。未列出的复合肥和有机肥须按配方或原料单独建卡。

- 选定流：氯化钾肥料
- 流属性 / 单位：质量 / kg
- 数量规则：依 `cp_nutrient_application_records` 采集本卡身份的原始数量，按原有归属规则计算每声明参考流的交换量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_nutrient_application_records`
- 来源：`ipcc-2019-managed-soils-n2o`；`fao-fruit-vegetable-preparation-2004`；`fao-fertilizer-identities`

###### 作为肥料施用的牛粪（`field_establishment_and_cultivation_agricultural_nutrient_inputs_cattle_manure`）

用设备、供应商及同期计量记录确认身份、等级、状态和单位；UUID 尚未确认。 按产品实物质量计一次，并保留含水率、N/P/K 配方及施用事件；养分量是计算属性，不得另计同一产品。未列出的复合肥和有机肥须按配方或原料单独建卡。

- 选定流：作为肥料施用的牛粪
- 流属性 / 单位：质量 / kg
- 数量规则：依 `cp_nutrient_application_records` 采集本卡身份的原始数量，按原有归属规则计算每声明参考流的交换量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_nutrient_application_records`
- 来源：`ipcc-2019-managed-soils-n2o`；`fao-fruit-vegetable-preparation-2004`；`fao-organic-nutrients`

###### 施入土壤的植物残体堆肥（`field_establishment_and_cultivation_agricultural_nutrient_inputs_plant_compost`）

用设备、供应商及同期计量记录确认身份、等级、状态和单位；UUID 尚未确认。 按产品实物质量计一次，并保留含水率、N/P/K 配方及施用事件；养分量是计算属性，不得另计同一产品。未列出的复合肥和有机肥须按配方或原料单独建卡。

- 选定流：施入土壤的植物残体堆肥
- 流属性 / 单位：质量 / kg
- 数量规则：依 `cp_nutrient_application_records` 采集本卡身份的原始数量，按原有归属规则计算每声明参考流的交换量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_nutrient_application_records`
- 来源：`ipcc-2019-managed-soils-n2o`；`fao-fruit-vegetable-preparation-2004`；`fao-organic-nutrients`

###### 灌溉水（`irrigation_water_input`）

按水源记录输送到作物的水，并与降雨及供应该水量的水源取水分开。

- 选定流：输送到作物的灌溉水
- 流属性/单位：体积 / m3
- 流集分组：`irrigation-water`
- 数量规则：按田地和种植周期汇总计量或有记录依据的输送量；抽水能耗单独记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1,000 kg 适销农场门产品.

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_irrigation_and_water_records`
- 来源：`fao-crop-evapotranspiration-56`
- 数量范围：灌溉水筛选区间
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：2000
  - 单位：m3/ha
  - 基准：所代表田地和种植周期
  - 基准类型：种植周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 田间电力（`field_electricity_input`）

当灌溉泵、风机或其他田间设备用电跨越前景边界时，电力与燃料分开记录。

- 选定流：田间作业电力供应
- 流属性/单位：能量 / kWh
- 流集分组：`electricity-supply`
- 数量规则：汇总所代表田地和种植周期的电表读数或供应商记录；一个电表服务多块田地时说明分配方法。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1,000 kg 适销农场门产品.

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_field_energy_records`
- 来源：`fao-fruit-vegetable-preparation-2004`
- 数量范围：田间电力筛选区间
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：800
  - 单位：kWh/ha
  - 基准：所代表田地和种植周期
  - 基准类型：种植周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

###### 栽培土地占用（`cultivated_land_occupation`）

作物在声明种植周期内占用田地，并与田地面积和周期日期相连。

- 选定流：栽培土地占用
- 流属性/单位：面积-时间 / ha·种植周期
- 数量规则：田地面积乘以声明的作物占用时段，并分配给所代表的种植周期。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1,000 kg 适销农场门产品.

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_land_area_and_cycle_records`
- 来源：`fao-crop-evapotranspiration-56`
- 数量范围：栽培面积筛选区间
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.02
  - 上限：10
  - 单位：每 1,000 kg 产品的 ha
  - 基准：适销作物产出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 灌溉水源取水（`irrigation_source_withdrawal`）

当水源取水跨越环境边界时，将来自天然或供水水源的取水作为基本流输入记录。

- 选定流：灌溉取用的水资源
- 流属性/单位：体积 / m3
- 数量规则：记录按水源的取水，并与输送灌溉水和测得的输配损失进行核对。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1,000 kg 适销农场门产品.

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_irrigation_and_water_records`
- 来源：`fao-crop-evapotranspiration-56`
- 数量范围：天然水取水筛选区间
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：2500
  - 单位：m3/ha
  - 基准：所代表田地和种植周期
  - 基准类型：种植周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### 输出
##### 基本流

###### 直接氧化亚氮排放（`direct_n2o_emission`）

与养分添加相关的土壤直接氧化亚氮排放，依据有记录的养分投入和选定方法计算。

- 选定流：排放到环境空气的氧化亚氮
- 流属性/单位: Mass / kg N2O
- 数量规则：依据养分投入和场址条件，采用声明的土壤排放方法；保留 N2O 与 N2O-N 基准的差异。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1,000 kg 适销农场门产品.

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_nutrient_application_records`
- 来源：`ipcc-2019-managed-soils-n2o`
- 数量范围：作者暂定筛查估计；端点不是 IPCC 限值
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：80
  - 单位：kg N2O-N/ha
  - 基准：有记录的养分投入和种植周期
  - 基准类型：种植周期（`crop_cycle`）
  - 证据类型：推理估计 (`reasoned_estimate`)

最终交换为 kg N2O。该物种的元素氮活动量以及按氮计的因子／范围保留在独立计算台账。归一化前将该物种的氮质量乘 44/28，仅换算一次；化合物质量不得再次换算，按氮计的范围不得直接校验化合物质量。未经有据拆分，不得将总氮损失作为该物种。保留实际接收环境与方法边界；未知身份或活动量不等于零。

###### 氨挥发（`ammonia_emission`）

在选定方法包含挥发时，对养分施用产生的氨排放进行计算或测量。

- 选定流：排放到环境空气的氨
- 流属性/单位：质量 / kg NH3
- 数量规则：依据养分施用记录和场址条件，采用声明的挥发方法。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1,000 kg 适销农场门产品.

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_nutrient_application_records`
- 来源：`ipcc-2019-managed-soils-n2o`
- 数量范围：作者暂定筛查估计；端点不是 IPCC 限值
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：60
  - 单位：kg NH3-N/ha
  - 基准：有记录的养分投入和种植周期
  - 基准类型：种植周期（`crop_cycle`）
  - 证据类型：推理估计 (`reasoned_estimate`)

###### 硝酸盐淋失或径流（`nitrate_water_emission`）

当表示水分运移和养分损失时，记录或计算从栽培土壤进入水体的硝酸盐。

- 选定流：排放到水体的硝酸盐
- 流属性/单位: Mass / kg NO3-
- 数量规则：依据养分投入、排水、土壤检测和选定场址方法计算或测量硝酸盐损失；保留硝酸盐与 N 基准。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1,000 kg 适销农场门产品.

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_nutrient_application_records`
- 来源：`ipcc-2019-managed-soils-n2o`
- 数量范围：硝酸盐损失筛选区间
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg nitrate-N/ha
  - 基准：有记录的养分投入和种植周期
  - 基准类型：种植周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

最终交换为 kg NO3-。该物种的元素氮活动量以及按氮计的因子／范围保留在独立计算台账。归一化前将该物种的氮质量乘 62/14，仅换算一次；化合物质量不得再次换算，按氮计的范围不得直接校验化合物质量。未经有据拆分，不得将总氮损失作为该物种。保留实际接收环境与方法边界；未知身份或活动量不等于零。

###### 磷酸盐径流（`phosphate_water_emission`）

当径流或排水路径具有相关性时，记录或计算从作物土壤进入水体的磷酸盐。

- 选定流：排放到水体的磷酸盐
- 流属性/单位: Mass / kg PO4
- 数量规则：依据养分投入、径流观察、土壤检测和选定场址方法计算或测量磷酸盐损失。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1,000 kg 适销农场门产品.

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_nutrient_application_records`
- 来源：`fao-fruit-vegetable-preparation-2004`
- 数量范围：磷酸盐损失筛选区间
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：25
  - 单位：kg P/ha
  - 基准：有记录的养分投入和种植周期
  - 基准类型：种植周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

最终交换质量为 kg PO4；按 P 计的活动量、因子和筛查保留在独立台账。仅对归属于该化学物种的 P 质量乘 95/31，换算一次后按合格参考产出归一化一次。不得将养分总平衡、土壤留存或不明差额当作该排放。各实际接收环境分别记录；气体体积记录须有实测温压及有据质量换算，不能与化合物质量互换。

###### 田间能耗产生的化石二氧化碳（`field_co2_emission`）
仅计算本前景作业边界内燃料燃烧实际释放的化石 CO2。对每种实际燃烧燃料，用实测质量或体积，并按有据密度和低位热值换算到兼容的仅燃烧 kg CO2 因子活动单位；逐燃料汇总排放，分配一次后按匹配的最终合格产出归一化一次。区分化石碳与生物源碳。外购电、外购热和包含能源与排放的运输或机械服务生命周期因子属于上游负担，不得记为本地 CO2 基本排放；关联相应供应或服务数据集一次。明确拆出燃烧时，须从关联数据集边界中排除同一燃烧。不得把供应链 CO2 或 CO2 当量总结果填入该物质质量卡。有据确认不存在本地化石燃烧时该卡不适用；缺少记录不能表示零。

- 选定流：排放到环境空气的化石二氧化碳
- 流属性/单位：质量 / kg CO2
- 数量规则： 仅计算本前景作业边界内燃料燃烧实际释放的化石 CO2。对每种实际燃烧燃料，用实测质量或体积，并按有据密度和低位热值换算到兼容的仅燃烧 kg CO2 因子活动单位；逐燃料汇总排放，分配一次后按匹配的最终合格产出归一化一次。区分化石碳与生物源碳。外购电、外购热和包含能源与排放的运输或机械服务生命周期因子属于上游负担，不得记为本地 CO2 基本排放；关联相应供应或服务数据集一次。明确拆出燃烧时，须从关联数据集边界中排除同一燃烧。不得把供应链 CO2 或 CO2 当量总结果填入该物质质量卡。有据确认不存在本地化石燃烧时该卡不适用；缺少记录不能表示零。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1,000 kg 适销农场门产品.

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_field_energy_records`
- 来源：`ipcc-2006-volume-4-crops`; `ipcc-2006-energy-combustion-boundary`
- 数量范围：田间能耗 CO2 筛选区间
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：2500
  - 单位：kg CO2/ha
  - 基准：记录的田间能耗和种植周期
  - 基准类型：种植周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）


##### 废物流

###### 种植材料损失（`planting_material_loss`）

当失败、变质或拒收的种植材料离开作物建植活动时，记录其数量并说明去向。

- 选定流：种植材料损失
- 流属性/单位：质量或数量 / kg 或有效植株
- 数量规则：称量或计数拒收种植材料，并记录还田、堆肥、处理或处置去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1,000 kg 适销农场门产品.

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_planting_material_records`
- 来源：`fao-fruit-vegetable-preparation-2004`
- 数量范围：种植材料损失筛选区间
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：25
  - 单位：占供应种植材料的百分比
  - 基准：种植材料投入
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程：收获与田间处理（`harvest_and_field_handling`）

#### 输入
##### 产品流

###### 收获作物生物质（`harvested_crop_input`）

收获的南瓜、笋瓜和葫芦进入田间处理，以便在农场门交接前称量、分级并核对产量。

- 选定流：收获的南瓜、笋瓜和葫芦，未分级
- 流属性/单位：质量 / kg
- 数量规则：在分级前称量收获批次，并记录产品类型、成熟度、田地和收获日期。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1,000 kg 适销农场门产品.

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest_and_yield_records`
- 来源：`usda-ams-pumpkins-standard`
- 数量范围：收获量到适销量筛选区间
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1000
  - 上限：3000
  - 单位：每 1,000 kg 适销产品的 kg 收获作物
  - 基准：核对后的作物产出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

#### 输出
##### 基本流

###### 收获粉尘排放（`harvest_dust_emission`）

当收获和田间处理形成重要空气排放路径时，记录或估算其产生的粉尘或颗粒物。

- 选定流：排放到环境空气的颗粒物
- 流属性/单位：质量 / kg 颗粒物
- 数量规则：有测量时使用测量排放，否则记录选定的估算方法和活动基准。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1,000 kg 适销农场门产品.

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_harvest_energy_records`
- 来源：`fao-fruit-vegetable-preparation-2004`
- 数量范围：收获颗粒物筛选区间
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10
  - 单位：kg 颗粒物/ha
  - 基准：收获和田间处理活动
  - 基准类型：种植周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）


##### 废物流


###### 田间残余物（`field_residue_output`）

收获或田间处理离开的藤蔓、叶、受损果实和其他作物残余物，连同其田间或下游去向一并记录。

- 选定流：南瓜、笋瓜或葫芦作物残余物
- 流属性/单位：质量 / kg 湿生物质
- 数量规则：按田地称量或估算残余物，并记录还田、移除、饲用、堆肥、处理或处置。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1,000 kg 适销农场门产品.

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residue_and_reject_fate_records`
- 来源：`iso-14044-2006`; `fao-fruit-vegetable-preparation-2004`
- 数量范围：田间残余物筛选区间
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：3000
  - 单位：每 1,000 kg 适销产品的 kg 湿残余物
  - 基准：种植周期收获产出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）


###### 收获拒收品（`harvest_reject_output`）

收获或田间分级时拒收的产品作为独立废物流记录，并链接到下游去向。

- 选定流：收获或田间分级拒收品
- 流属性/单位：质量 / kg
- 数量规则：尽可能按原因或等级称量拒收产品，并记录还田、饲用、堆肥、转入其他路线、处理或弃置去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1,000 kg 收获作物投入.

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest_and_yield_records`
- 来源：`usda-ams-pumpkins-standard`; `iso-14044-2006`
- 数量范围：收获拒收筛选区间
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：50
  - 单位：占收获作物投入的百分比
  - 基准：收获作物投入
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程：农场内初级处理（`on_farm_primary_conditioning`）

#### 输入
##### 产品流

###### 待处理收获产品（`conditioning_product_input`）

只有在农场门交接前进行清洗、冷却、储存或包装时，收获产品才进入初级处理。

- 选定流：用于初级处理的收获南瓜、笋瓜和葫芦
- 流属性/单位：质量 / kg
- 数量规则：在初级处理边界称量进入产品，并与收获和田间处理记录核对。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1,000 kg 适销农场门产品.

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_input_output_records`
- 来源：`usda-ams-pumpkins-standard`
- 数量范围：处理投入筛选区间
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1000
  - 上限：1200
  - 单位：每 1,000 kg 处理后产品的 kg
  - 基准：处理后输出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 处理用水（`conditioning_water_input`）

清洗或其他初级处理用水应与灌溉水和水源取水分开记录。

- 选定流：清洗或处理用工艺水
- 流属性/单位：体积 / m3
- 流集分组：`process-water`
- 数量规则：按批次和处理运行汇总计量或有记录依据的处理用水量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1,000 kg 处理后农场门产品.

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_water_records`
- 来源：`fao-fruit-vegetable-preparation-2004`
- 数量范围：处理用水筛选区间
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：20
  - 单位：每 1,000 kg 处理后产品的 m3
  - 基准：处理后输出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 处理用电（`conditioning_electricity_input`）

当清洗泵、冷却、分选或储存发生在转移前时，记录其电力使用。

- 选定流：初级处理电力供应
- 流属性/单位：能量 / kWh
- 流集分组：`electricity-supply`
- 数量规则：汇总处理运行的电表读数或供应商记录；共享设备按运行时间或批次质量分配。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1,000 kg 处理后农场门产品.

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_energy_records`
- 来源：`fao-fruit-vegetable-preparation-2004`
- 数量范围：处理用电筛选区间
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：200
  - 单位：每 1,000 kg 处理后产品的 kWh
  - 基准：处理后输出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 木制板条箱（`primary_packaging_input_wood_crate`）

**primary_packaging_input 的采集范围与适用性。** 下列具体身份分别列卡，仅在原有过程范围内有实际使用或产生记录时启用；不是必用材料清单或默认配方。未发生须有依据，缺少记录不得记为零。其他实际材料必须另建具体身份卡，不能套用以下名称或 UUID。保留原有归属和边界，避免与包含这些投入的外包服务双计。

农场门交接前用于保护或呈现产品的包装，按材料和包装形式记录。
原始活动或阶段基准：每 1,000 kg 包装后农场门产品.

用设备、供应商及同期计量记录确认身份、等级、状态和单位；UUID 尚未确认。 记录组成、净质量、使用次数和归还损耗；可重复使用品按实际周转归属，包装与产品质量分开。不同处理去向分别建交换，不假定回收抵扣。

- 选定流：木制板条箱
- 流属性 / 单位：质量 / kg
- 数量规则：依 `cp_primary_packaging_records` 采集本卡身份的原始数量，按原有归属规则计算每声明参考流的交换量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_primary_packaging_records`
- 来源：`fao-fruit-vegetable-preparation-2004`；`fao-package-identities`

###### 瓦楞纸板箱（`primary_packaging_input_corrugated_box`）

用设备、供应商及同期计量记录确认身份、等级、状态和单位；UUID 尚未确认。 记录组成、净质量、使用次数和归还损耗；可重复使用品按实际周转归属，包装与产品质量分开。不同处理去向分别建交换，不假定回收抵扣。

- 选定流：瓦楞纸板箱
- 流属性 / 单位：质量 / kg
- 数量规则：依 `cp_primary_packaging_records` 采集本卡身份的原始数量，按原有归属规则计算每声明参考流的交换量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_primary_packaging_records`
- 来源：`fao-fruit-vegetable-preparation-2004`；`fao-package-identities`

###### 聚乙烯包装薄膜（`primary_packaging_input_pe_film`）

用设备、供应商及同期计量记录确认身份、等级、状态和单位；UUID 尚未确认。 记录组成、净质量、使用次数和归还损耗；可重复使用品按实际周转归属，包装与产品质量分开。不同处理去向分别建交换，不假定回收抵扣。

- 选定流：聚乙烯包装薄膜
- 流属性 / 单位：质量 / kg
- 数量规则：依 `cp_primary_packaging_records` 采集本卡身份的原始数量，按原有归属规则计算每声明参考流的交换量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_primary_packaging_records`
- 来源：`fao-fruit-vegetable-preparation-2004`；`fao-package-identities`

##### 废物流

#### 输出
##### 产品流

###### 处理后的农场门产品（`conditioned_product_output`）

当初级处理纳入边界时，合格产品以声明的新鲜未加工农场门状态离开初级处理。

- 选定流：南瓜、南瓜和葫芦 `3a4e98fe-5b66-4d67-bee1-78dfe01b672f`
- 流属性/单位：质量 / kg
原始产出计量与核对要求：称量包含清洗、冷却、储存、分级和包装步骤后的合格产品，并与所有处理投入和拒收品进行核对。

- 数量规则：1000 千克
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1,000 kg 适销农场门产品.

- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_input_output_records`
- 来源：`usda-ams-pumpkins-standard`
- 数量范围：处理后输出筛选区间
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1000
  - 上限：1000
  - 单位：每 1,000 kg 参考产品的 kg
  - 基准：PCR 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`mass-balance-identity`

##### 废物流




###### 处理废水（`conditioning_wastewater_output`）

当清洗或处理废水跨越前景边界时，作为废物记录；可获得时同时记录悬浮固体和处理去向。

- 选定流：处理废水
- 流属性/单位：体积或质量 / m3 或 kg
- 数量规则：记录排放或转移的废水量，并识别现场处理、下水道、土地施用或其他去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1,000 kg 处理后农场门产品.

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_water_records`
- 来源：`fao-fruit-vegetable-preparation-2004`
- 数量范围：处理废水筛选区间
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：25
  - 单位：每 1,000 kg 处理后产品的 m3
  - 基准：处理后输出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）


###### 处理拒收品（`conditioning_reject_output`）

清洗、冷却、储存或最终分级中拒收的产品应单独称量，并链接至下游去向。

- 选定流：初级处理或最终分级拒收品
- 流属性/单位：质量 / kg
- 数量规则：按批次称量拒收产品，并记录返工、降级、转入其他路线销售、堆肥、处理或处置。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1,000 kg 处理后农场门产品.

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_input_output_records`
- 来源：`usda-ams-pumpkins-standard`; `iso-14044-2006`
- 数量范围：处理拒收筛选区间
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：20
  - 单位：占处理投入的百分比
  - 基准：处理投入
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）


##### 基本流

###### 处理颗粒物排放（`conditioning_particulate_emission`）

当干式处理、分级或包装形成重要排放路径时，记录其释放的颗粒物。

- 选定流：排放到环境空气的颗粒物
- 流属性/单位：质量 / kg 颗粒物
- 数量规则：有测量时使用测量排放，否则记录选定的估算方法和活动基准。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1,000 kg 处理后农场门产品.

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_conditioning_energy_records`
- 来源：`fao-fruit-vegetable-preparation-2004`
- 数量范围：处理颗粒物筛选区间
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：2
  - 单位：每 1,000 kg 处理后产品的 kg 颗粒物
  - 基准：处理后输出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_single_product` | 单一产品作物批次 | 当没有单独销售的共产品离开声明边界时，将所有负荷保留在所代表的南瓜、笋瓜或葫芦产品上。 | `iso-14044-2006` |
| `allocation_marketed_coproduct` | 单独销售的种子、果实或其他输出 | 识别每个单独销售的共产品，按交接状态量化每个输出，并在所代表批次内一致采用研究所书面的物理或经济分配方法。 | `iso-14044-2006` |
| `allocation_residue_and_reject` | 残余物、拒收品、修整物和损失 | 除非有书面的下游市场和共产品决定支持其他处理，否则将残余物、拒收品、修整物和损失保留为废物或残余物流。同一质量不得同时计作适销产品和共产品。 | `iso-14044-2006` |

具体身份卡不继承原集合卡的数量范围。实际数量由原始记录、库存/计量对账及声明参考流计算；在取得对应身份、单位、期间和边界一致的证据前，不提供默认量或数值筛查范围。缺少范围是质量披露项，并非零投入或完整性证明。

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_residual_precedence` | 未规定主方法分支的剩余共同负担 | 本 PCR 要求研究作联产品分配决策但未规定主方法的地方，统一执行以下优先顺序；已明确规定的类别专属主方法保持有效。先直接归属可分开的产出专属作业。剩余共同负担 B 只有在实测作业或生物服务记录证明驱动量 d_i 代表因果消耗时，才采用该物理驱动。产品可称量、有价值或等级较低本身均不构成因果依据，不能在面积、时间、质量和收入间任意切换。可比等级接受相同共同搬运服务时，仅在服务需求、状态及水分基准可比且有据时采用实测处理质量。份额 a_i=d_i/sum(d_j)，B_i=B*a_i。该共同作业没有可辩护的因果物理驱动时，采用同交接点、同期间经济份额 a_i=(q_i*p_i)/sum(q_j*p_j)，纳入全部独立预期产出，匹配数量/价格单位、币种和代表性价格，使用产出专属下游加工之前的价值。缺价格或分母证据使分配结果不完整，不能把产品价格记零或改称单一产出系统。披露合计为一的份额和重要替代方法敏感性；敏感性方法不是可任意替换的主结果。废物、留存残余和内部转移不获得联产品份额，其应归属的生产/处理负担仍保留在产出可售产品的路线中。未分配物理数量和质量平衡另行保留。本分支不自动给予替代信用；单独界定的替代情景须保留总清单及实际被替代功能证据。 | `ghg-protocol-product-standard-2011` |

## 8. 前景数据采集、计算与质量规则

### 完成数据集前确认具体投入身份

依据供应商规格、设备及原始记录确认本作业的实际投入。这是必需的采集要求，不是一条交换。完成数据集前，每种实际材料、配方产品、载能体或独立外购服务须分别建立物理身份具体的卡片，并记录原生数量及属性；核验兼容UUID，或明确保留未解析身份且不得宣称数据集已完整链接。不以条件式示例替代未知实际投入，不编造配方，不漏掉必需用量，不由缺失记录推定零消耗。共用投入、复用资产及服务包含项仅归属一次，保留原有阶段、期间及衔接最终参考产出的实测吞吐。原集合范围不作为单项投入上限或用量默认值。

| requirement_id | collection_protocol_id | 保留的采集范围 |
| --- | --- | --- |
| `crop_protection_input_specific_input` | `cp_crop_protection_records` | 作业 field_establishment_and_cultivation：按配方、有效成分、施用率和可得的处理面积记录每种除草剂、杀虫剂、杀菌剂、生物防治剂或助剂产品。 原数量方法：记录每种产品和施用事件，并保留配方、有效成分、处理面积和有记录依据的施用率。 |


先按各采集协议保留原始场址、批次、周期及阶段数量与分母，并完成库存、损失、含水率和共产品归属核对；随后按实际归属的验收交付产品量归一化：归一化交换量 = 归属原始交换量 × 声明参考数量 / 同一边界和计量基准的验收产品量。多年生建植和共享作业先执行各自分摊规则，不得把内部转移数量设为最终参考数量。每声明的参考流指第 3 节的数量、单位和产品状态；数据包必须声明实际路线和门。


### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_planting_material_records` | `field_establishment_and_cultivation` | 种植材料和种植材料损失 | 种子发票、移栽苗收货单、种植日志 | 产品类型；品种；供应商或来源；数量；有效单位数量；处理；田地；日期；损失和去向 | 收集发票和田间种植日志；核对供应、种植和拒收数量；原始汇总与分配：按田地、产品类型和种植周期汇总 | kg 或有效植株 | 每次交付和种植事件 | 声明的种植周期 | 每块所代表田地 | 每声明的参考流 | 发票或转移记录及种植日志 |
| `cp_nutrient_application_records` | `field_establishment_and_cultivation` | 养分投入及养分衍生排放 | 投入发票、产品标签、施用日志、土壤或排放记录 | 产品；养分分析；数量；田地；日期；施用方法；土壤或排水观察 | 收集供应商记录和田间日志；计算养分量及基于方法的排放；原始汇总与分配：按养分、田地和种植周期求和 | kg 产品、kg 养分或 kg 排放 | 每次施用和种植周期 | 声明的种植周期及方法时段 | 每块所代表田地 | 每声明的参考流 | 产品分析和施用记录 |
| `cp_irrigation_and_water_records` | `field_establishment_and_cultivation` | 灌溉水和水源取水 | 水表日志、供水记录、水泵日志、水源记录 | 水源；取水量；输送量；计量器；施用方式；田地；日期；输配损失 | 收集水表或供水记录，分别核对水源取水和输送量；原始汇总与分配：按水源和田地求和并分别保留取水和输送量 | m3 | 每次灌溉事件或计量支持时按月 | 声明的种植周期 | 每个水源和田地 | 每声明的参考流 | 水表记录或书面估算依据 |
| `cp_field_energy_records` | `field_establishment_and_cultivation` | 田间燃料和电力 | 燃料日志、发票、设备日志、电表 | 载体；数量；设备；田地；运行小时；日期；电表；分配依据 ；实际本地燃烧燃料、数量和单位、密度和低位热值、化石/生物源比例、仅燃烧因子及单位、供应或服务边界、已有燃烧覆盖 | 收集直接记录，并按运行时间、面积或测量使用量分配共享设备；原始汇总与分配：分配后按载体和田地汇总 `field_fuel_input_specific_input`: 拖拉机、水泵、喷雾器和其他移动田间设备使用的燃料，按田地和种植周期从燃料日志、发票或设备记录中采集。 汇总分配到所代表田地和种植周期的燃料交付量或设备特定消耗量。 这是必需的具体投入采集要求，不是选定交换。按原始记录识别每种实际配方产品、载能体或独立供应服务，保留物理身份、状态、原生数量及供应商规格。完成数据集前，每种实际投入须单独建立具体卡片，核验兼容UUID或明确保留未解析身份。产品质量与所含有效成分质量是不同台账，仅凭有记录的组成换算，不将两者重复作为两次采购。成品饲料和另加组分不得重复核算成品配方。区分燃料采购、外购电力或热量及包含用能的机械服务，各按实际边界仅计一次。保留原作业、期间、归属及最终产出归一化规则。身份或记录缺失不等于零用量，不提供通用组分范围或编造配方。 `fao-fruit-vegetable-preparation-2004` ；执行能源排放计算规则的仅燃烧边界；外购电和含排放服务保留为独立上游负担。 | L、kg、MJ 或 kWh | 每次交付或按月 | 声明的种植周期 | 所代表田地或共享农场资产 | 每声明的参考流 | 发票、电表或设备记录 |
| `cp_crop_protection_records` | `field_establishment_and_cultivation` | 作物保护产品 | 产品库存和施用日志 | 配方；有效成分；数量；施用率；处理面积；田地；日期；天气或方法备注 | 收集每次施用事件的产品和施用记录；原始汇总与分配：按配方和有效成分求和 `crop_protection_input_specific_input`: 作业 field_establishment_and_cultivation：按配方、有效成分、施用率和可得的处理面积记录每种除草剂、杀虫剂、杀菌剂、生物防治剂或助剂产品。 原数量方法：记录每种产品和施用事件，并保留配方、有效成分、处理面积和有记录依据的施用率。 依据供应商规格、设备及原始记录确认本作业的实际投入。这是必需的采集要求，不是一条交换。完成数据集前，每种实际材料、配方产品、载能体或独立外购服务须分别建立物理身份具体的卡片，并记录原生数量及属性；核验兼容UUID，或明确保留未解析身份且不得宣称数据集已完整链接。不以条件式示例替代未知实际投入，不编造配方，不漏掉必需用量，不由缺失记录推定零消耗。共用投入、复用资产及服务包含项仅归属一次，保留原有阶段、期间及衔接最终参考产出的实测吞吐。原集合范围不作为单项投入上限或用量默认值。 | kg 产品或 kg 有效成分 | 每次施用事件 | 声明的种植周期 | 每块所代表田地 | 每声明的参考流 | 产品标签和施用记录 |
| `cp_land_area_and_cycle_records` | `field_establishment_and_cultivation` | 土地占用 | 田地登记和作物日历 | 田地面积；种植日期；收获日期；种植周期；保护地或露地状态 | 收集田地边界和日历记录；计算面积-时间占用；原始汇总与分配：在产出归一化前计算占用面积-时间 | ha·种植周期 | 每块田地和种植周期 | 声明的种植周期 | 每块所代表田地 | 每声明的参考流 | 田地登记和作物日历 |
| `cp_harvest_and_yield_records` | `harvest_and_field_handling` | 收获作物、拒收品和残余物 | 收获单、地磅记录、等级日志 | 田地；批次；产品类型；日期；收获质量；等级；拒收品；残余物；去向 | 称量或记录每个收获批次，并核对等级和去向；原始汇总与分配：按产品类型、田地和种植周期汇总 | kg | 每个收获批次 | 声明的收获期间 | 每块所代表田地和批次 | 每声明的参考流 | 秤记录及等级或去向日志 |
| `cp_harvest_energy_records` | `harvest_and_field_handling` | 收获燃料和颗粒物活动 | 燃料日志、设备记录、排放观察 | 载体；数量；设备；收获批次；运行小时；方法；日期 | 收集直接能耗记录并记录任何排放估算方法；原始汇总与分配：按运行时间或批次质量分配共享使用量 `harvest_fuel_input_specific_input`: 当收获设备和田间处理在农场门交接前使用燃料时，应记录该燃料。 汇总分配到声明交接前收获批次和田间处理活动的燃料使用量。 这是必需的具体投入采集要求，不是选定交换。按原始记录识别每种实际配方产品、载能体或独立供应服务，保留物理身份、状态、原生数量及供应商规格。完成数据集前，每种实际投入须单独建立具体卡片，核验兼容UUID或明确保留未解析身份。产品质量与所含有效成分质量是不同台账，仅凭有记录的组成换算，不将两者重复作为两次采购。成品饲料和另加组分不得重复核算成品配方。区分燃料采购、外购电力或热量及包含用能的机械服务，各按实际边界仅计一次。保留原作业、期间、归属及最终产出归一化规则。身份或记录缺失不等于零用量，不提供通用组分范围或编造配方。 `fao-fruit-vegetable-preparation-2004` | L、kg、MJ 或 kg 颗粒物 | 每次收获事件或按月 | 声明的收获期间 | 所代表的收获设备 | 每声明的参考流 | 燃料记录和设备日志 |
| `cp_residue_and_reject_fate_records` | `harvest_and_field_handling` | 田间残余物和拒收品去向 | 去向日志、转移凭证、田间观察 | 物流；质量；水分；去向；目的地；日期；田地；批次 | 称量或估算每种物流并保留声明的目的地；原始汇总与分配：按物流和去向汇总且不重复计算 | kg 湿生物质 | 每个收获批次或去向事件 | 声明的收获期间 | 每块所代表田地 | 每声明的参考流 | 去向记录或书面田间观察 |
| `cp_conditioning_input_output_records` | `on_farm_primary_conditioning` | 处理产品、拒收品和合格输出 | 批次单、称量记录、等级日志 | 批次；投入质量；输出质量；拒收质量；处理日期；产品状态；等级；去向 | 称量每个处理批次并核对所有输出；原始汇总与分配：核对质量后按批次和产品类型汇总 | kg | 每个处理批次 | 声明的处理期间 | 每条所代表处理线 | 每声明的参考流 | 秤记录和批次单 |
| `cp_conditioning_water_records` | `on_farm_primary_conditioning` | 处理用水和废水 | 水表、排放日志、处理记录 | 用水投入；废水输出；水源；计量器；处理；日期；批次 | 收集用水和排放记录，并核对输入与输出体积；原始汇总与分配：按批次和去向求和 | m3 | 每批或按计量报告周期 | 声明的处理期间 | 每条处理线 | 每声明的参考流 | 水表及排放或处理记录 |
| `cp_conditioning_energy_records` | `on_farm_primary_conditioning` | 处理用电和颗粒物活动 | 电表、设备日志、排放观察 | 载体；数量；设备；批次；运行小时；日期；分配依据 | 收集直接能耗记录，并按运行时间或批次质量分配共享设备使用量；原始汇总与分配：按载体和产品批次汇总 | kWh、MJ 或 kg 颗粒物 | 每批或按计量报告周期 | 声明的处理期间 | 每条处理线 | 每声明的参考流 | 电表或设备记录 |
| `cp_primary_packaging_records` | `on_farm_primary_conditioning` | 初级包装和包装废物 | 包装发票、领用日志、废物日志 | 材料；形式；数量；质量；重复使用次数；批次；损坏质量；去向 | 收集材料和领用记录，并核对供应、使用和弃置包装；原始汇总与分配：按材料和产品批次汇总 `packaging_waste_output_specific_output`: 处理活动产生的包装损耗和废弃一次性包装，与产品输出分开记录。 记录所代表处理运行中损坏或废弃的包装材料，并识别其下游废物路线。 这是必需的具体产出采集要求，不是选定交换。保留本作业全部实际废物、残余物、拒收物及联产品的核算责任。完成数据集前，物理上不同的物流须分别成卡，记录实际材料、组成或状态、数量、接收路线及产品或废物角色，并核验兼容UUID或明确保留未解析身份。真正混合的物流可按有组成记录支持的一条物理混合物流记录，不编造分离，也不重复计入组分。液体与固体处理数量分别记录。保留原期间、产出平衡、参考流归一化和分配规则，缺失记录不等于零数量或可排除。 `iso-14044-2006` | kg 包装或件数 | 每次交付和处理批次 | 声明的处理期间 | 每条处理线 | 每声明的参考流 | 供应商规格及领用或废物记录 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_to_reference_flow` | 所有库存行 | 将核对后的过程数量除以合格适销农场门产品质量，再乘以 1,000 kg。 | 过程数量；合格产品质量 | 每 1,000 kg 参考产品的数量 | `mass-balance-identity` |
| `calculate_nutrient_quantity` | 养分投入 | 将配方产品质量乘以声明的养分比例，并保留 N、P 或 P2O5、K 或 K2O 基准。 | 产品质量；养分分析 | 养分质量 | `fao-fruit-vegetable-preparation-2004` |
| `calculate_nutrient_emissions` | 直接 N2O、NH3、硝酸盐和磷酸盐行 | 对采集的养分投入和场址条件应用选定的排放或损失方法；场址已声明方法时不得使用无限定的默认值。 | 养分投入；场址方法输入 | 排放或损失数量 | `ipcc-2019-managed-soils-n2o` |
| `calculate_fossil_energy_emissions` | 田间和处理能耗 | 仅计算本前景作业边界内燃料燃烧实际释放的化石 CO2。对每种实际燃烧燃料，用实测质量或体积，并按有据密度和低位热值换算到兼容的仅燃烧 kg CO2 因子活动单位；逐燃料汇总排放，分配一次后按匹配的最终合格产出归一化一次。区分化石碳与生物源碳。外购电、外购热和包含能源与排放的运输或机械服务生命周期因子属于上游负担，不得记为本地 CO2 基本排放；关联相应供应或服务数据集一次。明确拆出燃烧时，须从关联数据集边界中排除同一燃烧。不得把供应链 CO2 或 CO2 当量总结果填入该物质质量卡。有据确认不存在本地化石燃烧时该卡不适用；缺少记录不能表示零。 | 化石能源记录；因子 | 化石 CO2 数量 | `ipcc-2006-energy-combustion-boundary` |
| `reconcile_harvest_outputs` | 收获和处理输出 | 求和合格产品、拒收品、残余物、修整物和书面损失，并在声明的计量容差内与相应投入质量比较。 | 投入质量；输出质量组成 | 核对后的输出和损失记录 | `mass-balance-identity` |
| `calculate_land_occupation` | 栽培土地占用 | 将所代表田地面积乘以声明的作物占用时段，再按合格产品质量归一化。 | 田地面积；作物日期；合格产品质量 | 每 1,000 kg 产品的面积-时间 | `fao-crop-evapotranspiration-56` |
| `planting_material_input_identity_and_fate` | `field_establishment_and_cultivation` | 对于本作业原有 planting_material_input 采集角色，建立交换前须确定实际物理形态、物种／材料、组成、状态及供给／处理边界。与该角色相关且实际使用／产生的各种种子批次、移栽苗、根冠、插条、幼虫阶段、配方、包衣、保藏剂或分离残余物须各有具体卡片；这些例子是备选，不是必需配方。保留原采集记录和路线特定来源证据。计数种植记录匹配按质量的供应数据时，须使用实测或供应商支持的单位质量；计数与质量是关联属性，不是两次采购。不得合并独立果壳／外皮或不同药剂；真实混合物流须有组成与接收者证据且只计一次。完整性通过前，记录每项适用数量和原生单位、链接相容的已核验 UUID 或明确未解析身份，保留库存／退回归属，并将可归属原始数量按合格参考产出归一化一次。缺失记录不是零，原聚合范围不是单项投入默认值。 | `cp_planting_material_records` | 按身份区分的交换和对账活动记录 | `fao-fruit-vegetable-preparation-2004` |
| `chemical_species_mass_accounting` | `elementary_nutrient_emissions` | 最终基本交换使用已识别物质的质量和一个实际接收环境，养分／活动台账另存：该物种的 N2O-N × 44/28 为 N2O，NH3-N × 17/14 为 NH3，硝酸盐氮 × 62/14 为硝酸盐，磷酸盐磷 × 95/31 为磷酸盐。若选定流为元素磷，则报告 kg P，仅在物种口径有据时将磷酸盐质量乘 31/95。只有方法输出按元素计时才换算一次，实测化合物质量不得再换算。总养分损失不得无据归于单一物种，土壤残余／留存养分不是排放。保留直接／间接路径台账，不重复所选方法或上游清单已经包含的路径。因子不确定性范围只按其声明基准检查因子，不是最终化合物数量或场址排放的允许界限。用合格参考数量和匹配实测产出，将可归属化合物质量归一化一次。活动量、身份或接收环境未知时保留证据缺口，不得宣称完整。 | `cp_nutrient_application_records`; 物种特定活动量台账、方法路径和因子基准、匹配合格产出 | 按身份区分的交换和对账活动记录 |  |

### 数据质量要求

| requirement_id | 适用对象 | Requirement | Evidence |
| --- | --- | --- | --- |
| `quality_product_identity` | 所有产品流 | 声明南瓜、笋瓜或葫芦类型、品种或变种、批次、等级、成熟度和农场门状态；核对前不得合并不同产品状态。 | 产品规格和批次记录 |
| `quality_mass_reconciliation` | 收获和处理 | 在每个过程交接处核对田间收获、合格输出、拒收品、残余物、修整物、适用的废水、包装和书面损失。 | 地磅、秤、批次和去向记录 |
| `quality_input_completeness` | 田间和处理投入 | 对种植材料、养分、作物保护、水、土地、能源和包装提供直接记录、合理为零或书面排除。 | 田地登记、发票、计量器、日志和排除说明 |
| `quality_temporal_geographic_scope` | 所有流 | 识别每条记录所代表的田地、场址、生产地理范围、种植周期、收获期间以及储存或处理期间。 | 田地和作物日历及批次记录 |
| `quality_method_and_factor_disclosure` | 计算排放和转换 | 记录用于推导数值的方法、因子基准、养分基准、水分基准及任何分配或共享计量器计算。 | 计算表和所引方法来源 |
| `quality_uncertainty_and_estimate_label` | 估算或模型化行 | 标明估计、假设和范围为暂定，并在可得时用测量或经过审查的记录替代。 | 数据质量说明及支撑记录状态 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validation_product_identity` | 参考产品和所有产品流 | 确认产品类型、品种或变种、种植周期、地理范围、成熟度、等级、水分和农场门状态已声明，并在相连记录中一致。 | `usda-ams-pumpkins-standard` |
| `validation_mass_balance` | 田间收获和初级处理 | 确认每个过程交接将投入质量与合格产品、拒收品、残余物、修整物、适用的废水、包装和书面损失核对，且不重复计算。 | `mass-balance-identity` |
| `validation_reference_normalization` | 所有归一化数量 | 确认每个归一化数量均以合格适销农场门产品为分母，并以每 1,000 kg 参考产品表示。 | `mass-balance-identity` |
| `validation_boundary_disclosure` | 数据集元数据和过程说明 | 确认起始状态、纳入作业、农场门交接、此前土地利用、储存或处理、残余物去向和排除项均已披露。 | `fao-fruit-vegetable-preparation-2004`; `iso-14044-2006` |
| `validation_calculated_emissions` | 养分和能源排放 | 确认每项计算排放均标明活动投入、方法或因子来源、单位基准和计算记录；不得静默替换基准。 | `ipcc-2019-managed-soils-n2o`; `ipcc-2006-volume-4-crops` |
| `validation_parameterized_identity_resolution` | 所有参数化行和参考流 | 在前景数据生成时将每个参数化流集行解析为经核验的 UUID，并保留所选属性、单位、地理范围和预期用途检查。 | `mass-balance-identity` |
| `validation_local_combustion_boundary` | 能源和化石 CO2 | 核对每项本地 CO2 与边界内实际燃料燃烧及兼容的仅燃烧因子一致；核对上游电、热、燃料供应及含排放服务覆盖，同一释放仅计一次。 | `ipcc-2006-energy-combustion-boundary` |


## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | 用于新鲜南瓜、笋瓜和葫芦的前景作物库存构建，以及下游过程或生命周期模型投影 |
| allowed_use | 保留产品身份、种植周期范围、测量或计算投入、直接排放、输出核对及声明处理或包装状态的农场门数据集 |
| excluded_use | 加工食品产品；种子或育苗数据集；配送、零售、烹饪或报废研究；产品状态证据缺口或缺少输出核对的数据集 |
| required_metadata | canonical PCR id；CPC 参考；产品类型和品种；田地和生产地理范围；种植周期和收获期间；栽培系统；种植材料；灌溉水源和方式；养分和作物保护记录；能源；产量；拒收品和残余物去向；处理；包装；农场门状态 |
| required_quality_disclosure | 数据来源和测量方法；时间和地理代表性；估算或缺失值；养分、水分和排放因子基准；分配决定；参数化流 UUID 解析状态；不确定性和范围处理 |
| update_trigger | 产品边界、作物路线、分类范围、流集分类、排放方法、计量约定或产量、投入、残余物和处理方面的重要证据发生变化 |

## 11. 数据源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| `fao-crop-evapotranspiration-56` | official_guidance | FAO Irrigation and drainage paper 56, Crop evapotranspiration: guidelines for computing crop water requirements, https://www.fao.org/4/x0490e/x0490e00.htm | 种植周期用水核算、灌溉背景以及土地或作物日历解释 |
| `fao-fruit-vegetable-preparation-2004` | handbook | A. F. Lopez Camelo, FAO Agricultural Services Bulletin 151, Manual for the preparation and sale of fruits and vegetables: From field to market, 2004, https://www.fao.org/4/y4893e/y4893e00.htm | general harvest, fresh-market preparation and storage context; not a crop-specific agronomic or quantitative LCA source |
| `ipcc-2019-managed-soils-n2o` | method_factor | 2019 Refinement to the 2006 IPCC Guidelines for National Greenhouse Gas Inventories, Volume 4, Chapter 11 N2O emissions from managed soils, https://www.ipcc-nggip.iges.or.jp/public/2019rf/vol4.html | 养分衍生 N2O 及相关氮损失方法选择 |
| `ipcc-2006-volume-4-crops` | method_factor | 2006 IPCC Guidelines for National Greenhouse Gas Inventories, Volume 4 Agriculture, Forestry and Other Land Use, https://www.ipcc-nggip.iges.or.jp/public/2006gl/vol4.html | 农业能源和作物排放因子方法背景 |
| `usda-ams-pumpkins-standard` | official_guidance | USDA Agricultural Marketing Service, United States Standards for Grades of Pumpkins, https://www.ams.usda.gov/grades-standards/pumpkins-grades-standards | 产品等级、成熟度、不合格项和农场门产品状态描述 |
| `iso-14044-2006` | standard | ISO 14044:2006 Environmental management — Life cycle assessment — Requirements and guidelines | 分配、共产品、截断、质量核对和报告原则 |
| `mass-balance-identity` | method_factor | Conservation-of-mass method identity for process-input and product-output reconciliation | 归一化、输出核对和参考流质量平衡 |
| `fao-fertilizer-identities` | official_guidance | FAO Fertilizer Specifications, https://www.fao.org/agriculture/crops/thematic-sitemap/theme/spi/plantnutrition/fertspecs/en/ | 条件性具体身份和方法依据；不证明场址使用，也不设定用量 |
| `fao-organic-nutrients` | official_guidance | FAO How to Make and Use Compost, https://www.fao.org/4/i2230e/i2230e.pdf | 条件性具体身份和方法依据；不证明场址使用，也不设定用量 |
| `fao-package-identities` | official_guidance | FAO Packaging for fruits, vegetables and root crops, section 4, https://www.fao.org/4/x5016e/X5016E04.htm | 条件性具体身份和方法依据；不证明场址使用，也不设定用量 |
| `ipcc-2006-energy-combustion-boundary` | method_factor | IPCC 2006 Guidelines, Volume 2 Energy, Chapters 2 and 3 (stationary and mobile combustion), https://www.ipcc-nggip.iges.or.jp/public/2006gl/vol2.html | 燃烧活动量、兼容的逐燃料因子及化石/生物源区分；不采用通用场址因子。 |
| `ghg-protocol-product-standard-2011` | standard | WRI/WBCSD, Product Life Cycle Accounting and Reporting Standard (2011), Chapter 9, https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf | 一般分配优先顺序及可比交接点经济价值基准。适用条件和明确的剩余分支是本 PCR 的方法约定；该来源不规定本产品因果系数、价格或产出数量。 |
