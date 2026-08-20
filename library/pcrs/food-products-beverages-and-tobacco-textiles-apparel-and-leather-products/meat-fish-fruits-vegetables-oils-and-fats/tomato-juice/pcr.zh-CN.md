---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.tomato-juice
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 番茄汁

## 1. 范围与适用性

本 PCR 支持以成熟番茄或浓缩番茄汁生产番茄汁的前景数据包。产品以供直接消费的番茄汁或等效散装产品出厂时，直接提取路线和浓缩汁复原路线均在范围内。申报的产品规格应说明生产路线、保存状态、配方添加物、可溶性固形物基准、包装配置和出厂产品状态。

前景边界从番茄、浓缩番茄汁、水、配料、包装、能源载体和其他采购投入进入报告工厂开始。边界包括适用的接收、分选、清洗、破碎、加热、提取、精制、脱气、均质、调配或复原、保藏、灌装、包装、清洁、厂内残余物管理和直接排放。番茄种植、报告工厂外的浓缩汁生产、采购公用工程的生产、配送、零售、使用和包装生命末期在研究范围需要时通过链接数据集表示，不在前景工序中重复构建。

不包括番茄酱、作为浓缩产品销售的浓缩番茄汁、番茄调味汁、混合蔬菜汁、果蔬饮料、发酵番茄饮料以及仅以番茄汁为配料的饮料。浓缩汁复原产品只有在成品按照适用市场规格申报并作为番茄汁销售时才属于本范围。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.tomato-juice |
| classification_refs | CPC 3.0: 21321 Tomato juice |
| covered_products | 非浓缩番茄汁和由浓缩番茄汁复原的番茄汁，允许使用已申报配料和保藏路线 |
| excluded_products | 番茄酱；作为浓缩产品销售的浓缩番茄汁；番茄调味汁；混合蔬菜汁；果蔬饮料；发酵番茄饮料；以番茄汁为配料的饮料 |
| representative_product | 加工工厂门口、可供直接消费的番茄汁 |
| production_route | 由成熟番茄直接提取，或明确申报由浓缩番茄汁复原，随后采用路线特定的保藏和灌装 |
| market_state | 常温货架稳定、冷藏或冷冻；包装或散装；应申报保藏和包装状态 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 在加工工厂门口提供满足申报产品与市场规格的番茄汁 |
| How much | 1,000 kg 番茄汁净重，不含包装 |
| How well | 符合申报的直接提取或浓缩汁复原身份、配方、可溶性固形物基准、保藏路线、包装状态和适用市场要求 |
| How long or cycle | 以工厂门口放行为终点的一个代表性生产批次或生产期；保质期是必需产品限定信息而不是功能持续期 |
| reference_flow_link | 将实测合格产品净产出归一化到 1,000 kg 参考量 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1,000 kg 番茄汁净重 |
| 参考产品流 | 番茄汁 `0e1f9da3-8a58-4fab-a793-1edde8bead88` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 生产路线：直接提取或浓缩汁复原；来源物料规格；可溶性固形物或配方基准；添加的盐、酸或其他配料；保藏路线；包装或散装配置；产品净重；放行时产品温度；保质期或储存条件；地理范围；参考期；技术和工厂 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_product_mass` | 合格番茄汁产出 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 番茄汁净重应与包装分开计量，所有清单量归一化到 1,000 kg 合格净产出。 |
| `route_and_solids_declaration` | 直接提取和浓缩汁复原路线 | 质量和申报的可溶性固形物测量基准 | kg 和申报的实验室单位 | 记录路线和实测产品规格；不得用通用默认值推断浓缩或稀释系数。 |
| `packaging_count_to_mass` | 初级、次级和三级包装 | 质量 | kg | 使用批次特定或供应商支持的单件质量把包装件数换算为质量，并保留件数和换算证据。 |
| `energy_unit_conversion` | 电力、蒸汽、燃料、加热、冷却和压缩空气 | 能量 | kWh 或 MJ | 保留原始仪表单位和换算系数；电力以 kWh 报告，其他交付能源以 MJ 报告，不得使用无文件支持的效率或热值。 |
| `water_and_wastewater_volume_mass` | 工艺水和废水 | 体积或质量 | m3 或 kg | 记录实测属性和单位；在质量与体积之间换算时，保留实测或有依据的密度和换算规则。 |

## 5. 系统边界

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_facility_operations` | 前景工厂 | 纳入从来源物料接收到合格番茄汁放行的所有适用厂内操作，包括清洁、包装、厂内公用工程使用、残余物处理和直接排放。 | `fao-fruit-vegetable-processing-1995`; `us-ecfr-21-cfr-156-145` |
| `boundary_upstream_inputs` | 采购投入 | 链接番茄、浓缩汁、配料、包装、供水、燃料、电力和其他采购投入的上游数据集；不得把工厂外生产重复构建为前景操作。 | `iso-14044-2006` |
| `boundary_concentrate_route` | 浓缩汁复原生产 | 只有浓缩发生在申报的前景工厂边界内时才纳入浓缩；否则把采购浓缩番茄汁记录为投入并披露其上游数据集。 | `us-ecfr-21-cfr-156-145` |
| `boundary_preservation_route` | 保藏和灌装 | 纳入实际热加工、冷藏或冷冻保藏路线及其监测操作；不得用通用热加工曲线代替经验证的场址工艺。 | `fda-juice-haccp-2004`; `us-ecfr-21-cfr-156-145` |
| `boundary_residual_treatment` | 废水和固体残余物 | 将厂内处理和回收纳入前景过程。把厂外处理或回收记录为链接适用外部数据集的废物流或产品流。 | `iso-14044-2006` |

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 番茄、浓缩番茄汁、配料、包装、水和能源载体到达报告工厂时的状态 |
| starting_condition_role | 工厂门口前景投入状态，上游负荷由链接数据集提供 |
| product_classification_scope | 仅番茄汁；CPC 3.0 21321 是分类语境，不定义 canonical PCR 身份 |
| recursive_input_rule | 作为投入采购的番茄汁或浓缩番茄汁只记录一次产品投入及其上游数据集；不得在同一前景过程中递归重建其上游番茄汁生产 |
| upstream_dataset_requirement | 番茄、浓缩汁、配料、包装、公用工程、纳入范围的运输和厂外处理应使用时间、地理、技术和物料具有代表性的上游数据集 |
| disclosure | 申报来源物料形态、直接提取或浓缩汁复原路线、工厂操作、保藏方式、包装状态、分配、排除项、数据缺口以及残余物是在厂内还是厂外处理 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `raw_receipt_preparation` | 原料接收与准备 | required | 对接收番茄或其他来源物料始终纳入 | 前景接收、检验、分选、清洗和准备 | 每 1,000 kg 参考产品的来源物料和准备后番茄质量 |
| `juice_extraction_finishing` | 汁液提取与精制 | required | 始终纳入；对仅以浓缩汁复原的工厂，可表示接收核验及调配前厂内精制 | 前景破碎、适用的加热、提取、筛分、脱气和均质 | 准备物料到提取汁和残余物的质量平衡 |
| `formulation_reconstitution` | 调配与复原 | conditional | 添加浓缩汁、水、盐、酸或其他申报配料，或用混配标准化产品时纳入 | 前景配方与复原控制 | 调理汁质量和申报配方或可溶性固形物基准 |
| `preservation_packaging` | 保藏、灌装与包装 | required | 始终纳入实际常温、冷藏或冷冻路线 | 前景保藏、灌装、封口、冷却或冷冻和包装 | 1,000 kg 合格番茄汁净产出 |
| `onsite_residuals_treatment` | 厂内残余物与废水处理 | conditional | 废水、果渣、拒收物、污泥或其他残余物在厂内处理或回收时纳入 | 前景处理、回收和直接排放控制 | 接收残余物质量或体积及处理产出 |

### 过程：原料接收与准备（`raw_receipt_preparation`）

#### 输入

##### 产品流

###### 番茄或申报的番茄来源物料（`source_tomatoes`）

记录直接提取路线接收的成熟番茄。仅以浓缩汁复原的工厂应在调配过程记录浓缩汁，并在此记录零值且披露路线。

- 选定流：Fresh tomatoes（Tiangong UUID 未解决）
- 流属性/单位：Mass / kg
- 数量规则：进入准备工序的实测合格质量，不含退货和另行记录的包装
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格番茄汁净重
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass`
- 来源：`fao-fruit-vegetable-processing-1995`; `us-ecfr-21-cfr-156-145`
- 数量范围：暂定来源物料筛选估算
  - 范围角色：默认估计（`default_estimate`）
  - 下限：1000
  - 上限：3000
  - 单位：kg
  - 基准：直接提取路线每 1,000 kg 合格番茄汁净重
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 清洗和准备水（`preparation_water`）

记录用于来源物料清洗和准备的供水，不重复计算闭路循环的内部转移水。

- 选定流：Process water（Tiangong UUID 未解决）
- 流属性/单位：Volume / m3
- 数量规则：进入准备工序的计量或以其他方式实测的水量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格番茄汁净重
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_use`
- 来源：`fao-fruit-vegetable-processing-1995`
- 数量范围：暂定用水 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：30
  - 单位：m3
  - 基准：每 1,000 kg 合格番茄汁净重
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 转移至提取工序的准备后番茄（`prepared_tomatoes`）

根据实测合格来源物料、分选拒收物、其他移除物料和库存变化计算准备后物料。

- 选定流：Prepared tomatoes, internal product flow（Tiangong UUID 未解决）
- 流属性/单位：Mass / kg
- 数量规则：合格来源物料质量减实测准备拒收物和其他移除物料，并按实测库存变化调整
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格番茄汁净重
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_material_mass`
- 来源：`mass-balance-identity`
- 数量范围：暂定准备物料平衡筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：3000
  - 单位：kg
  - 基准：每 1,000 kg 合格番茄汁净重
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 分选和准备拒收物（`preparation_rejects`）

按实际去向记录拒收番茄、异物和其他移除固体；不得把回收产品与处置废物合并。

- 选定流：Preparation rejects（Tiangong UUID 未解决）
- 流属性/单位：Mass / kg
- 数量规则：按去向实测拒收和移除质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格番茄汁净重
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 来源：`fao-fruit-vegetable-processing-1995`
- 数量范围：暂定拒收质量 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1000
  - 单位：kg
  - 基准：每 1,000 kg 合格番茄汁净重
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 准备废水（`preparation_wastewater`）

记录离开准备工序的废水及其去向，并说明进入厂内处理还是外部系统。

- 选定流：Preparation wastewater（Tiangong UUID 未解决）
- 流属性/单位：Volume / m3
- 数量规则：计量排放，或由用水记录和保留计算输入支持的平衡计算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格番茄汁净重
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 来源：`mass-balance-identity`
- 数量范围：暂定废水 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：30
  - 单位：m3
  - 基准：每 1,000 kg 合格番茄汁净重
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

### 过程：汁液提取与精制（`juice_extraction_finishing`）

#### 输入

##### 产品流

###### 准备后番茄或接收的汁液中间体（`extraction_feed`）

记录实测内部准备后番茄转移或接收的汁液中间体，不重复计算来源物料投入。

- 选定流：Prepared tomatoes or tomato juice intermediate（Tiangong UUID 未解决）
- 流属性/单位：Mass / kg
- 数量规则：进入提取与精制的实测转移量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格番茄汁净重
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_extraction_mass`
- 来源：`fao-fruit-vegetable-processing-1995`
- 数量范围：暂定提取进料筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：3000
  - 单位：kg
  - 基准：每 1,000 kg 合格番茄汁净重
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 提取与精制用电（`extraction_electricity`）

记录破碎、泵送、提取、精制、脱气、均质和相关产线运行的计量电力。

- 选定流：Electricity supply（Tiangong UUID 未解决）
- 流属性/单位：Energy / kWh
- 数量规则：分表电力，或用有文件支持的运行基准分配工厂总表电力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格番茄汁净重
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_metered_energy`
- 来源：
- 数量范围：暂定电力 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1000
  - 单位：kWh
  - 基准：每 1,000 kg 合格番茄汁净重
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 提取与精制交付热能（`extraction_thermal_energy`）

记录实际提取和精制路线使用的蒸汽、热水或燃料热，不嵌入无文件支持的锅炉效率。

- 选定流：Delivered thermal energy carrier（Tiangong UUID 未解决）
- 流属性/单位：Energy / MJ
- 数量规则：计量交付热量，或使用有文件支持的供应商或实验室热值换算的实测燃料量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格番茄汁净重
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_metered_energy`
- 来源：
- 数量范围：暂定热能 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10000
  - 单位：MJ
  - 基准：每 1,000 kg 合格番茄汁净重
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 提取并精制的番茄汁中间体（`extracted_juice`）

记录从提取与精制转移至调配或保藏的质量。

- 选定流：Extracted tomato juice intermediate（Tiangong UUID 未解决）
- 流属性/单位：Mass / kg
- 数量规则：实测中间产出，并与进料、果渣、其他残余物和库存变化核对
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格番茄汁净重
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_extraction_mass`
- 来源：`mass-balance-identity`
- 数量范围：暂定提取汁平衡筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：3000
  - 单位：kg
  - 基准：每 1,000 kg 合格番茄汁净重
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 果渣、皮、籽和提取残余物（`extraction_residuals`）

在记录允许时，按实际回收、饲料、处理或处置去向分别记录物质不同的残余物。

- 选定流：Tomato extraction residuals（Tiangong UUID 未解决）
- 流属性/单位：Mass / kg
- 数量规则：按去向实测残余物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格番茄汁净重
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 来源：`fao-fruit-vegetable-processing-1995`
- 数量范围：暂定提取残余物 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1000
  - 单位：kg
  - 基准：每 1,000 kg 合格番茄汁净重
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

### 过程：调配与复原（`formulation_reconstitution`）

#### 输入

##### 产品流

###### 提取汁或采购浓缩番茄汁（`formulation_tomato_input`）

同时使用提取汁和采购浓缩汁时，应在前景数据集中作为两个投入行记录；本 PCR 行只定义共同角色。

- 选定流：Extracted tomato juice or tomato juice concentrate（Tiangong UUID 未解决）
- 流属性/单位：Mass / kg
- 数量规则：按来源物料形态和供应商批次实测批次投入
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 合格番茄汁净重
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_recipe_inputs`
- 来源：`us-ecfr-21-cfr-156-145`
- 数量范围：暂定番茄投入筛选估算
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：3000
  - 单位：kg
  - 基准：直接提取和浓缩汁复原路线每 1,000 kg 合格番茄汁净重
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 复原和配方水（`reconstitution_water`）

将用于复原浓缩汁或实施申报配方的加水与清洁用水分开记录。

- 选定流：Potable process water（Tiangong UUID 未解决）
- 流属性/单位：Mass / kg
- 数量规则：计量或称量的批次添加量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 合格番茄汁净重
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_recipe_inputs`
- 来源：`us-ecfr-21-cfr-156-145`
- 数量范围：暂定复原水筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1000
  - 单位：kg
  - 基准：每 1,000 kg 合格番茄汁净重
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 申报的盐、酸和其他配料（`recipe_ingredients`）

按身份、批次和实测质量记录每种添加配料；未添加时零值有效。

- 选定流：Declared recipe ingredients（Tiangong UUID 未解决）
- 流属性/单位：Mass / kg
- 数量规则：按配料称量或供应商记录的添加量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 合格番茄汁净重
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_recipe_inputs`
- 来源：`us-ecfr-21-cfr-156-145`
- 数量范围：暂定配料质量 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：200
  - 单位：kg
  - 基准：每 1,000 kg 合格番茄汁净重
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 转移至保藏工序的调理番茄汁（`conditioned_juice`）

由实测配方投入、合格返回料、实测损失和库存变化计算调理汁，并核验申报产品规格。

- 选定流：Conditioned tomato juice intermediate（Tiangong UUID 未解决）
- 流属性/单位：Mass / kg
- 数量规则：实测配方投入和合格返回料之和减实测损失，并按库存变化调整
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 合格番茄汁净重
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_recipe_inputs`
- 来源：`mass-balance-identity`; `us-ecfr-21-cfr-156-145`
- 数量范围：暂定调理汁平衡筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：900
  - 上限：1500
  - 单位：kg
  - 基准：每 1,000 kg 合格番茄汁净重
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

### 过程：保藏、灌装与包装（`preservation_packaging`）

#### 输入

##### 产品流

###### 调理番茄汁进料（`preservation_feed`）

记录进入实际热加工、冷藏或冷冻保藏和灌装路线的实测产品。

- 选定流：Conditioned tomato juice intermediate（Tiangong UUID 未解决）
- 流属性/单位：Mass / kg
- 数量规则：进入保藏和灌装的实测转移量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格番茄汁净重
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_product_output`
- 来源：`fao-fruit-vegetable-processing-1995`
- 数量范围：暂定保藏进料平衡筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：900
  - 上限：1500
  - 单位：kg
  - 基准：每 1,000 kg 合格番茄汁净重
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 包装材料（`packaging_materials`）

在前景数据集中分别记录初级、次级和三级包装，并区分可重复使用包装和托盘。

- 选定流：Packaging materials by material and component（Tiangong UUID 未解决）
- 流属性/单位：Mass / kg
- 数量规则：包装件数乘以经核验单件质量，或直接实测领用质量减退回量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 合格番茄汁净重
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_mass`
- 来源：
- 数量范围：暂定包装质量 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：500
  - 单位：kg
  - 基准：每 1,000 kg 合格番茄汁净重
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 保藏和包装用电（`preservation_electricity`）

记录泵送、加热系统、冷却或冷冻、灌装、封口、输送和包装的计量电力。

- 选定流：Electricity supply（Tiangong UUID 未解决）
- 流属性/单位：Energy / kWh
- 数量规则：分表电力，或使用有文件支持的运行证据分配工厂总表电力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格番茄汁净重
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_metered_energy`
- 来源：
- 数量范围：暂定保藏用电 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1000
  - 单位：kWh
  - 基准：每 1,000 kg 合格番茄汁净重
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 保藏交付热能（`preservation_thermal_energy`）

记录实际验证保藏路线使用的交付热或燃料，并保留实测换算基准。

- 选定流：Delivered thermal energy carrier（Tiangong UUID 未解决）
- 流属性/单位：Energy / MJ
- 数量规则：计量交付热，或使用有文件支持热值换算的实测燃料量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格番茄汁净重
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_metered_energy`
- 来源：`fda-juice-haccp-2004`
- 数量范围：暂定保藏热能 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10000
  - 单位：MJ
  - 基准：每 1,000 kg 合格番茄汁净重
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 合格番茄汁参考产品（`tomato_juice_reference_output`）

这是唯一 UUID 已解决的参考产品行。计量合格净产出，排除包装质量，并归一化到 PCR 参考量。

- 选定流：番茄汁 `0e1f9da3-8a58-4fab-a793-1edde8bead88`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：将实测合格净产出归一化为恰好 1,000 kg
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1,000 kg 合格番茄汁净重
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_product_output`
- 来源：`mass-balance-identity`; `us-ecfr-21-cfr-156-145`
- 数量范围：参考产出归一化检查
  - 范围角色：允许范围（`allowed_range`）
  - 下限：1000
  - 上限：1000
  - 单位：kg
  - 基准：PCR 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`mass-balance-identity`

##### 废物流

###### 不合格产品和灌装损失（`offspec_product`）

按实际去向分别记录不合格产品、开停机损失、溢洒和保留返工料。

- 选定流：Off-specification tomato juice（Tiangong UUID 未解决）
- 流属性/单位：Mass / kg
- 数量规则：按去向实测质量；合格内部返工只有在核对后才从最终废物中排除
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格番茄汁净重
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 来源：`mass-balance-identity`
- 数量范围：暂定不合格产品 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：500
  - 单位：kg
  - 基准：每 1,000 kg 合格番茄汁净重
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 包装废料和拒收容器（`packaging_scrap`）

按材料和去向记录包装废料和拒收容器。

- 选定流：Packaging scrap by material（Tiangong UUID 未解决）
- 流属性/单位：Mass / kg
- 数量规则：实测废料质量，或拒收件数乘经核验单件质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格番茄汁净重
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_mass`
- 来源：
- 数量范围：暂定包装废料 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：200
  - 单位：kg
  - 基准：每 1,000 kg 合格番茄汁净重
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 清洁和灌装废水（`packaging_wastewater`）

按去向记录清洁、杀菌、冷却、灌装和包装操作产生的废水。

- 选定流：Process wastewater（Tiangong UUID 未解决）
- 流属性/单位：Volume / m3
- 数量规则：计量排放或保留的水平衡计算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格番茄汁净重
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 来源：`mass-balance-identity`
- 数量范围：暂定清洁废水 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：30
  - 单位：m3
  - 基准：每 1,000 kg 合格番茄汁净重
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 厂内冷却或冷冻的制冷剂释放（`refrigerant_release`）

只有所选路线使用厂内制冷且充注平衡、维修或泄漏记录支持直接释放时才纳入。

- 选定流：Refrigerant substance by actual identity（Tiangong UUID 未解决）
- 流属性/单位：Mass / kg
- 数量规则：使用有文件支持的设备维修和充注平衡记录分配年度或生产期制冷剂损失
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：按有文件支持的生产分配期，每 1,000 kg 合格番茄汁净重
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emissions`
- 来源：
- 数量范围：暂定制冷剂释放 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：20
  - 单位：kg
  - 基准：每 1,000 kg 合格番茄汁净重
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程：厂内残余物与废水处理（`onsite_residuals_treatment`）

#### 输入

##### 产品流

###### 电力和处理助剂（`treatment_inputs`）

在前景数据集中拆分电力和每种处理助剂；本共享行定义条件处理过程的采集角色。

- 选定流：Electricity and treatment aids by actual input（Tiangong UUID 未解决）
- 流属性/单位：电力为 Energy / kWh；处理助剂为 Mass / kg
- 数量规则：计量电力和实测处理助剂添加量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格番茄汁净重
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_treatment_records`
- 来源：
- 数量范围：暂定处理投入筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1000
  - 单位：kg or kWh as applicable to the disaggregated row
  - 基准：每 1,000 kg 合格番茄汁净重
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 接收供厂内处理的废水和有机残余物（`residuals_received`）

记录内部废水、果渣、拒收物和其他残余物，不重复计算其来源过程输出。

- 选定流：Residual received by actual waste identity（Tiangong UUID 未解决）
- 流属性/单位：Volume / m3 或 Mass / kg
- 数量规则：与来源过程记录核对的实测内部转移
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格番茄汁净重
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_treatment_records`
- 来源：`mass-balance-identity`
- 数量范围：暂定接收残余物 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：3000
  - 单位：kg or m3 as applicable to the disaggregated row
  - 基准：每 1,000 kg 合格番茄汁净重
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

#### 输出

##### 产品流

###### 回收材料或能源共产品（`recovered_coproduct`）

只有回收产出有明确接收方并替代指定产品或服务时才记录为产品，否则保留为废物流。

- 选定流：Recovered material or energy by actual product identity（Tiangong UUID 未解决）
- 流属性/单位：Mass / kg 或 Energy / MJ
- 数量规则：由接收方或销售记录支持的实测发运量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格番茄汁净重
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_treatment_records`
- 来源：
- 数量范围：暂定回收产出筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1000
  - 单位：kg or MJ as applicable to the disaggregated row
  - 基准：每 1,000 kg 合格番茄汁净重
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 处理污泥和残余废物（`treatment_residual_waste`）

按实测质量、需要时的组成和去向记录处理污泥及其他残余废物。

- 选定流：Treatment residual waste by actual identity（Tiangong UUID 未解决）
- 流属性/单位：Mass / kg
- 数量规则：实测发运或储存质量，并按库存变化调整
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格番茄汁净重
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_treatment_records`
- 来源：
- 数量范围：暂定处理残余物 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1000
  - 单位：kg
  - 基准：每 1,000 kg 合格番茄汁净重
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 处理后出水和直接处理排放（`treated_effluent_release`）

按实际接收环境介质，把处理后出水体积和每种实测直接污染物或气体拆分为基本流记录。

- 选定流：Treated effluent and measured direct release by actual identity（Tiangong UUID 未解决）
- 流属性/单位：出水为 Volume / m3；污染物释放为物质特定的 Mass / kg
- 数量规则：计量出水和基于实测或许可监测的直接排放，按物质和环境介质拆分
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格番茄汁净重
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_direct_emissions`
- 来源：
- 数量范围：暂定处理后出水 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：30
  - 单位：m3 for the effluent-volume row
  - 基准：每 1,000 kg 合格番茄汁净重
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

## 7. 分配与共产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_subdivide` | 多功能前景操作 | 首先寻求过程细分或扩展单独计量的操作，使番茄汁和回收产出承担可直接归属的投入与排放。 | `iso-14044-2006` |
| `allocation_physical_relation` | 无法避免的联合生产 | 无法实际细分且能论证物理因果关系时，按有文件支持的物理关系分配其余共享负荷，并报告因子和敏感性。 | `iso-14044-2006` |
| `allocation_other_relation` | 无可辩护的物理关系 | 没有可辩护物理关系时，使用符合研究目标的其他有文件支持关系，例如经济价值，并披露价格、参考期、计算和敏感性。 | `iso-14044-2006` |
| `allocation_residual_status` | 果渣、拒收物、污泥、回收材料和能源 | 不得仅为规避废物负荷而指定共产品状态。应用共产品分配或替代前，应记录实际去向和有用产品或服务证据。 | `iso-14044-2006` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_mass` | `raw_receipt_preparation` | 合格来源物料、准备后番茄和准备拒收物 | 地磅、校准秤、接收和库存记录 | timestamp; batch; supplier lot; gross; tare; net mass; acceptance status; stock change; destination | 核对合格来料、准备产出、拒收物、退货和库存 | kg | 每车或每批 | 至少一个代表性连续生产期，有条件时通常为 12 个月 | 报告工厂所有纳入产线和储存点 | 按产品和路线求和；扣除退货；核对期初期末库存；用 `calc_reference_normalization` 归一化 | 秤校准、交货单、批次记录、库存核对和异常日志 |
| `cp_water_use` | `raw_receipt_preparation`; `formulation_reconstitution`; `preservation_packaging` | 清洗、配方、清洁、冷却和其他用水 | 水表、批次表或有依据的水平衡 | meter id; opening and closing reading; batch; use area; recycled volume; discharge volume | 可行时计量每项实质用水，将配方水与清洁和公用工程水分开 | m3 或 kg | 每批或每日表计区间 | 与产品产出相同的代表期 | 所有纳入用水点 | 扣除有文件支持的内部循环水；按用途汇总并用 `calc_reference_normalization` 归一化 | 水表校准、表计图、批次表和水平衡核对 |
| `cp_extraction_mass` | `juice_extraction_finishing` | 提取进料、汁液中间体和提取残余物 | 流量计、罐位、校准秤和批次记录 | batch; input mass; intermediate output mass; residual mass; stock change; rework | 计量转移并核对提取质量平衡 | kg | 每批 | 与产品产出相同的代表期 | 所有纳入提取和精制产线 | 汇总合格转移；返工只核算一次；核对库存变化并归一化 | 仪器校准、批次表和签字的质量平衡复核 |
| `cp_recipe_inputs` | `formulation_reconstitution` | 浓缩汁、提取汁、水、盐、酸、其他配料和调理汁 | 配方系统、批次秤、实验室和供应商批次记录 | batch; ingredient identity; lot; quantity; soluble-solids result; recipe revision; output mass; loss; stock change | 记录每项添加，并按申报配方和产品规格核验成品 | kg 和申报实验室单位 | 每批 | 与产品产出相同的代表期 | 每个纳入的调配罐和产品变体 | 按产品变体汇总；用 `calc_reconstitution_balance` 计算；归一化 | 秤校准、配方授权、证书、实验室结果和偏差记录 |
| `cp_metered_energy` | `juice_extraction_finishing`; `preservation_packaging`; `onsite_residuals_treatment` | 电力、蒸汽、热水、燃料、制冷和压缩空气 | 分表、公用工程账单、燃料领用和运行小时记录 | meter id; opening and closing reading; fuel mass or volume; heating value; operating time; allocation driver | 优先使用分表；否则用有文件支持的运行或工程证据分配工厂总量 | kWh 或 MJ | 连续、每批、每班或账单区间 | 与产品产出相同的代表期 | 所有纳入设备和共享公用工程 | 用有文件支持系数换算；扣除输出；透明分配共享使用；归一化 | 表计校准、账单、燃料规格、设备日志和分配计算 |
| `cp_packaging_mass` | `preservation_packaging` | 领用、退回、拒收和进入产品的包装 | 物料清单、计数、供应商单件质量和称量记录 | component; material; count; unit mass; issued; returned; rejected; reuse cycles | 用经核验件数和单件质量或直接测量计算每个部件质量 | kg | 每个包装批次或产品批次 | 与产品产出相同的代表期 | 范围内初级、次级、三级和可重复使用包装 | 领用减退回库存；区分产品包装和废料；归一化 | 供应商规格、抽样单件质量检查、物料清单和库存记录 |
| `cp_product_output` | `preservation_packaging` | 保藏进料、合格番茄汁净重、不合格产品和返工 | 批次表、灌装计数、检重秤、罐记录和放行记录 | batch; product code; route; gross; tare; net mass; package count; released mass; off-spec mass; rework; stock change | 将合格产品净重与包装分开计量，并核对保藏和灌装产出 | kg | 每批 | 与所有清单投入相同的代表期 | 每个纳入产品和灌装线 | 汇总放行净重；排除包装；返工只核算一次；归一化到 1,000 kg | 仪器校准、质量放行、检重结果、批次记录和核对 |
| `cp_waste_records` | 所有前景过程 | 拒收物、果渣、不合格产品、包装废料、废水和其他废物 | 秤、废物联单、表计、发票和内部转移记录 | waste identity; origin; mass or volume; destination; date; carrier; recovery status; stock change | 计量或核对每种实质废物流及去向 | kg 或 m3 | 每次发运、每批或表计区间 | 与产品产出相同的代表期 | 所有纳入前景过程 | 按身份和去向汇总；防止内部转移重复；归一化 | 秤或表计校准、联单、发票、处理回执和库存记录 |
| `cp_thermal_process` | `preservation_packaging` | 实际保藏工艺和放行证据 | 验证工艺表、温度、时间、流量、压力和偏差记录 | process authority or validation reference; product; pH or relevant property; temperature; residence time; flow rate; hold; deviation; disposition | 保留所选工艺要求的场址和产品特定验证工艺表及连续或批次监测 | 申报工艺单位 | 每批，适用时连续记录 | 与产品产出和当前验证工艺相同的代表期 | 每个纳入保藏线和产品路线 | 不得跨越失效关键限值平均；每个放行批次链接有效监测和偏差处置 | 验证研究或工艺权威记录、校准传感器、监测图、偏差和放行记录 |
| `cp_treatment_records` | `onsite_residuals_treatment` | 接收残余物、处理投入、回收产出、污泥和储存物料 | 表计、秤、处理日志、实验室、发运和库存记录 | stream identity; input; chemical; electricity; output; quality; destination; stock change | 核对每个处理操作并保留回收产品状态证据 | kg、m3、kWh 或 MJ | 每批、每日或每次发运 | 与产品产出相同的代表期 | 所有厂内残余物处理和回收 | 汇总投入产出；核对库存和水分基准；归一化 | 表计和秤校准、实验室报告、处理日志、接收方证据和联单 |
| `cp_direct_emissions` | `preservation_packaging`; `onsite_residuals_treatment` | 制冷剂、处理后出水和实测直接排放 | 维修记录、充注平衡、烟气或出水监测和许可记录 | substance; compartment; measured value; method; detection limit; equipment; charge added or recovered; effluent volume; sampling period | 使用实测或许可监测证据分别记录每种物质和环境介质 | kg 或 m3 | 每事件和报告区间 | 与产品产出相同的代表期 | 所有纳入直接排放点 | 应用有文件支持的采样和分配方法；报告低于检出限的处理；归一化 | 适用时的实验室认可、校准、维修记录、许可和计算文件 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 每个清单量 | 归一化量 = 期间或批次数量 / 合格番茄汁净产出 × 1,000 kg | 采集数量；合格产品净重 | 每 1,000 kg 参考产品的数量 | `mass-balance-identity` |
| `calc_process_mass_balance` | 每个前景过程 | 实测投入 + 期初库存 = 实测产出 + 期末库存 + 量化损失；报告未解释差额，不得强制其为零 | 投入、产出、库存、返工和损失记录 | 核对质量平衡和未解释差额 | `mass-balance-identity` |
| `calc_reconstitution_balance` | 浓缩汁复原和调配路线 | 调理汁质量 = 实测番茄投入 + 实测配方水 + 实测配料 + 合格返回料 - 实测损失，并按库存变化调整；用实测实验室和配方记录核验申报产品规格 | 配方投入；返回料；损失；库存变化；实验室结果 | 调理汁质量和规格检查 | `mass-balance-identity`; `us-ecfr-21-cfr-156-145` |
| `calc_energy_conversion` | 能源记录 | 使用保留的供应商或实测换算数据把电力换算为 kWh、交付燃料或热换算为 MJ；不得假定效率或热值 | 表计读数；燃料量；热值；换算系数 | 按过程的 kWh 或 MJ |  |
| `calc_packaging_mass` | 包装材料和废料 | 部件质量 = 经核验部件数量 × 经核验单件质量；核对领用、退回、进入产品和拒收的部件 | 数量；抽样或供应商单件质量；库存移动 | 按材料的包装和包装废料质量 |  |
| `calc_allocation_factor` | 无法避免的共享负荷 | 从期间匹配记录计算所选物理或其他关系，并记录对合理替代方案的敏感性 | 可单独归属负荷；共产品数量；所选分配驱动 | 分配因子和敏感性结果 | `iso-14044-2006` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | 参考产品和来源物料 | 核验产品名称、参考流 UUID、生产路线、配方、产品规格、保藏状态和包装或散装状态。 | Tiangong 流回读、批次规格、标签或销售规格和放行记录 |
| `dq_representativeness` | 所有前景数据 | 说明地理、技术、工厂、参考期、季节覆盖、产能利用率和实质产品变体；论证任何代理期间或场址。 | 数据集元数据、生产计划、场址说明和差异复核 |
| `dq_completeness` | 过程图和清单 | 覆盖每个必需过程和每个适用条件过程；核对物料、水、能源、废物和直接排放记录，内部转移不得重复。 | 工艺流程图、表计图、质量与水平衡、清单核对和缺口日志 |
| `dq_measurement` | 采集值和计算值 | 保留仪器身份、校准或核验状态、原始单位、换算系数、汇总方法和数据负责人。 | 校准证书、原始导出、计算工作簿和签字复核 |
| `dq_thermal_validation` | 保藏和灌装 | 每个放行产品路线应链接当前验证工艺，并保留关键监测和偏差处置；通用时间温度值不能替代路线特定验证。 | 验证工艺表、工艺权威或等效证据、监测记录、偏差和放行批准 |
| `dq_provisional_ranges` | 每个 `reasoned_estimate` 范围 | 范围仅作为宽泛筛选或 QA 先验。用于发布关键用途前，用前景实测或经评审来源证据替换；应解释偏离而非裁剪数据。 | 范围替换日志、前景记录、经评审来源和评审处置 |
| `dq_unresolved_uuid` | 非参考清单流 | 需要数据库身份时，应在 active 使用前解决并核验 Tiangong UUID；不得把番茄汁参考 UUID 复制给其他流。 | Tiangong 身份回读和评审确认 |

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validation_reference_identity` | 参考流 | 参考产品必须为 Tomato juice `0e1f9da3-8a58-4fab-a793-1edde8bead88`，使用 Mass `93a60a56-a3c8-11da-a746-0800200b9a66`、Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` 和 kg；其他清单流不得类推继承此 UUID。 |  |
| `validation_reference_amount` | 归一化清单 | 归一化后，不含包装的合格番茄汁净产出必须恰好等于 1,000 kg，每个报告清单量必须说明基准。 | `mass-balance-identity` |
| `validation_required_qualifiers` | 数据集元数据 | 数据包必须声明每个必需限定信息，包括路线、来源物料、产品规格、配料、保藏、包装或散装状态、储存条件、地理、参考期、技术和工厂。 | `us-ecfr-21-cfr-156-145` |
| `validation_process_coverage` | 过程图 | 每个必需过程和每个适用条件过程必须有清单和采集证据；排除的条件过程必须提供理由。 | `fao-fruit-vegetable-processing-1995` |
| `validation_mass_balance` | 前景过程 | 每个过程必须报告实测投入、产出、库存变化、返工、量化损失和未解释平衡差额；实质差异必须调查并披露。 | `mass-balance-identity` |
| `validation_route_consistency` | 直接提取和浓缩汁复原路线 | 来源物料形态、配方水、浓缩汁投入、过程图、产品标签或规格和上游数据集必须描述同一条一致生产路线。 | `us-ecfr-21-cfr-156-145` |
| `validation_preservation_evidence` | 保藏产品放行 | 所选保藏路线必须有当前产品和过程特定验证、监测过程记录和偏差处置；不得只用通用指南数值验证数据集。 | `fda-juice-haccp-2004` |
| `validation_allocation_disclosure` | 多功能操作 | 分配仍存在时，报告细分尝试、共产品或废物状态证据、分配方法、因子、期间匹配投入和敏感性。 | `iso-14044-2006` |
| `validation_provisional_estimates` | 推理估算 | 数值超出暂定范围是评审触发项，不是自动失败。发布关键用途需要替换，或由评审员基于证据明确接受。 |  |
| `validation_uuid_resolution` | 非参考清单行 | 任何仍未解决的非参考 Tiangong 流 UUID 都会使身份覆盖不完整并必须披露；禁止虚构或未核验 UUID。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 归一化到 1,000 kg 合格产品净重的番茄汁生产前景数据包 |
| downstream_use | 方法学、身份、证据和评审要求满足后，可支持 `secondary_dataset` 或 `background_dataset` |
| allowed_use | 在申报地理、期间、技术、保藏和包装范围内，用于产品与路线匹配的 LCI 研究、供应链模型、过程改进和情景分析 |
| excluded_use | 不得无条件代理番茄酱、浓缩番茄汁、调味汁、混合汁、果蔬饮料、发酵饮料、种植、消费者使用或显著不同的生产与保藏路线 |
| required_metadata | canonical PCR id；参考流 UUID；必需限定信息；工厂和地理；参考期；技术；直接提取或浓缩汁复原路线；保藏；包装；过程覆盖；上游数据集身份；分配；数据负责人；评审状态 |
| required_quality_disclosure | 测量覆盖；数据缺口；未解决 UUID；推理估算；质量、水和能源核对；热工艺证据；分配敏感性；废物去向；直接排放测量；偏差和评审处置 |
| update_trigger | 产品规格、来源物料形态、配方、保藏或包装路线、工厂技术、供应商组合、分配、验证工艺、实质数据缺口、参考期或 Tiangong 身份发生变化 |

## 11. 数据源

| 来源 id | 类型 | 参考 | 用途 |
| --- | --- | --- | --- |
| `us-ecfr-21-cfr-156-145` | standard | U.S. Electronic Code of Federal Regulations, 21 CFR 156.145, Tomato juice, https://www.ecfr.gov/current/title-21/chapter-I/subchapter-B/part-156/subpart-B/section-156.145, retrieved 2026-08-11 | 番茄汁身份、直接提取和浓缩汁复原路线、允许工艺和申报配料以及保藏状态要求 |
| `fao-fruit-vegetable-processing-1995` | official_guidance | FAO Agricultural Services Bulletin No. 119, Fruit and vegetable processing, section 9.5.1.1 Tomato juice, https://www.fao.org/4/V5030E/V5030E0r.htm, retrieved 2026-08-11 | 从清洗和分选到提取、精制、保藏、灌装和冷却的候选过程分解；不作为强制数值工艺表 |
| `fda-juice-haccp-2004` | official_guidance | U.S. Food and Drug Administration, Guidance for Industry: Juice HACCP Hazards and Controls Guidance, First Edition, March 2004, https://www.fda.gov/regulatory-information/search-fda-guidance-documents/guidance-industry-juice-hazard-analysis-critical-control-point-hazards-and-controls-guidance-first, retrieved 2026-08-11 | 要求保留产品和过程特定危害分析、验证、监测、关键工艺记录和偏差处置；不用于规定通用番茄汁时间温度值 |
| `iso-14044-2006` | standard | ISO 14044:2006, Environmental management — Life cycle assessment — Requirements and guidelines, https://www.iso.org/standard/38498.html, confirmed current in 2022 and retrieved 2026-08-11 | LCI 要求、系统边界披露、分配层级、报告和评审框架 |
| `mass-balance-identity` | method_factor | 对每个前景过程应用质量守恒，明确库存变化、返工、量化损失和未解释平衡差额 | 过程核对、配方平衡、参考归一化和校验 |
