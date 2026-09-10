---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.coke-oven-products-refined-petroleum-products-nuclear-fuel.gas-oil
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 瓦斯油

## 1. 范围与适用性

本 PCR 覆盖 CPC 3.0 石油中间馏分产品类别中的瓦斯油/柴油生产，包括化石瓦斯油，以及以柴油馏分为基础组分的混合产品。它用于构建柴油燃料、工业或供热燃料、发电燃料以及其他已声明中间馏分用途的瓦斯油前景数据包。数据包必须声明原油及其他原料来源、炼厂配置、常压与减压馏分贡献、转化与加氢处理路线、硫含量、密度及参考温度、是否含生物组分及其计量基准、炼厂分配方法和终端交付状态。

本类别不允许用单一地区车用柴油牌号、船用瓦斯油牌号、供应商配方或纯生物柴油数据集代表全部瓦斯油。纯生物柴油不在本 PCR 范围内。混合产品只有在化石瓦斯油基料、生物组分身份及比例、目标市场、适用产品规范和各组分上游数据集均被声明时才可使用本 PCR。默认边界终点为炼厂或相连终端装载完毕的产品；该交付点以外的分销、储存和燃烧仅在研究明确增加独立过程时纳入。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.coke-oven-products-refined-petroleum-products-nuclear-fuel.gas-oil |
| classification_refs | CPC 3.0 `33360`，Gas oil |
| covered_products | 瓦斯油/柴油中间馏分；直馏、裂化、加氢处理或调合瓦斯油；含已声明生物柴油或其他生物调合组分的瓦斯油 |
| excluded_products | 原油；煤油和航空燃料；残余燃料油；未声明匹配瓦斯油牌号的船用燃料；纯生物柴油；超出已声明规范与市场范围外推的地区柴油牌号 |
| representative_product | 满足已声明目标市场规范的通用石油炼厂瓦斯油/柴油生产组合 |
| production_route | 原油或其他炼厂原料接收与预处理；常压和/或减压蒸馏；适用的转化和加氢处理；调合与产品精制；储存与装载 |
| market_state | 在已声明炼厂或相连终端交付点的成品液体燃料，批次或生产周期的质量和组成均已声明 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 符合已声明目标市场产品规范与交付状态的瓦斯油/柴油 |
| How much | 1 kg 净交付产品 |
| How well | 按实测交付质量计量，并声明产品牌号和用途、来源与炼厂路线、硫含量、密度和参考温度、生物组分身份及比例、交付点 |
| How long or cycle | 一个代表性生产批次或报告期，且原料、产量、库存变化和交付记录已协调一致 |
| reference_flow_link | 参考流是 `storage_and_terminal_delivery` 过程装载的瓦斯油产品输出 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 柴油 `9d258d75-6792-4f1c-9856-81602ed8f816` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 目标市场和产品牌号；适用规范和地理范围；化石原料和原油来源基准；炼厂配置；常压与减压馏分贡献；转化路线；加氢处理状态；硫含量及检测基准；密度和参考温度；生物组分身份及按声明质量或体积基准计量的比例；重要添加剂含量；炼厂分配方法；交付点和装载状态；报告期 |

所选天工流是精确归类到 CPC 3.0 `33360` 的公开通用产品身份，并明确描述为炼厂生产组合。数据库名称“Diesel oil”在此按 CPC 中瓦斯油/柴油同义关系使用，不能据此替代地区特定车用柴油数据集。缺少任何必需限定信息都使前景数据包不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品与产品中间流 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 报告净质量，并将全部清单结果归一化到已声明交付点装载的 1 kg 瓦斯油。 |
| `volume_to_mass` | 按体积记录的原料、调合、库存或交付数据 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 仅使用同一批次且参考温度已声明的实测或规范支持密度将体积换算为质量；不得使用未声明的通用柴油密度。 |
| `sulphur_measurement` | 原料流、处理后物流、调合组分和成品瓦斯油 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | mg/kg 或已声明质量分数 | 记录采样点、分析方法、报告基准和实测硫含量；地区法规限值只能作为限定条件，不得作为全类别默认值。 |
| `biogenic_share` | 含生物柴油或其他生物组分的瓦斯油 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg/kg 或明确声明的体积分数 | 声明组分身份、可再生原料路线、实测调入量以及比例为质量或体积基准；化石和生物组分的上游负荷必须分别可追溯。 |
| `energy_conversion` | 可选的能量基准报告 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | MJ/kg | 使用批次、牌号或供应商特定的净热值，并声明来源与测量基准；质量仍为 PCR 参考属性。 |

## 5. 系统边界

| rule_id | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `boundary_refinery_operations` | 炼厂前景生产 | 纳入原料接收与预处理、适用的常压和减压蒸馏、对所代表物流有贡献的转化与加氢处理、调合与精制、储存、库存变化以及已声明终端的装载。 | `eu-refining-bat-2014-738` |
| `boundary_upstream_links` | 外购原油、二次原料、氢气、电力、燃料、蒸汽、水、添加剂和调合组分 | 将每项外购投入记录为明确的产品流，并链接与其来源、技术和交付状态匹配的上游数据集；不得用无来源的基本流代替上游供应。 | `eu-refining-bat-2014-738` |
| `boundary_direct_releases` | 受控炼厂装置与储存设施 | 纳入归属于所代表操作的实测或协调后的直接大气和水体排放、过程尾气、含硫污水、废水、废催化剂、污泥和其他废物。 | `eu-refining-bat-2014-738` |
| `boundary_delivery_gate` | 参考产品 | 默认前景边界终止于炼厂或相连终端的瓦斯油净装载质量；研究需要时，将下游分销和燃烧作为独立过程建模。 | `eu-refining-bat-2014-738` |
| `boundary_category_integrity` | 数据集适用性 | 不得用单一地区车用柴油、船用瓦斯油、供应商产品或纯生物柴油数据集代表完整类别；必须声明目标市场和调合组成，并只选择匹配数据集。 | `unsd-cpc-3-33360`, `eu-fuel-quality-98-70-consolidated-2023` |

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 在所代表炼厂边界接收的炼厂原料 |
| starting_condition_role | 已声明来源、分析或牌号及交付状态，并链接上游的数据产品投入 |
| product_classification_scope | CPC 3.0 `33360`，瓦斯油/柴油中间馏分及已声明的柴油基混合物 |
| recursive_input_rule | 同一类别的外购或转移瓦斯油继续作为明确产品投入并链接自身上游数据集，不在此前景数据包内递归重建 |
| upstream_dataset_requirement | 匹配原油或二次原料的来源、生产路线、地理、质量和交付状态；并分别匹配氢气、公用工程、添加剂和生物组分 |
| disclosure | 声明原油/原料来源、炼厂配置、常压和减压物流贡献、转化与加氢路线、硫、密度、调合组成、分配、库存变化和交付点 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `feedstock_receipt_and_preparation` | 原料接收与预处理 | required | 始终纳入；运行脱盐或等效预处理时一并纳入 | 前景 | 预处理后的炼厂进料 |
| `primary_distillation` | 常压与减压蒸馏 | required | 常压蒸馏必须纳入；当减压馏分进入所代表瓦斯油或其转化原料时纳入减压蒸馏 | 前景 | 离开蒸馏的瓦斯油馏程物流 |
| `conversion_and_hydrotreating` | 转化与加氢处理 | conditional | 纳入所有对成品瓦斯油有物流贡献的裂化、加氢裂化、加氢处理、脱臭或其他处理装置 | 前景 | 处理后的瓦斯油调合组分 |
| `blending_and_product_finishing` | 调合与产品精制 | required | 始终纳入；包括全部化石和生物调合组分及添加剂 | 前景 | 送入储存的成品瓦斯油 |
| `storage_and_terminal_delivery` | 储存与终端交付 | required | 始终纳入到已声明的装载产品交付点 | 前景 | 净装载参考产品 |

### 过程：原料接收与预处理（`feedstock_receipt_and_preparation`）

#### 输入

##### 产品流

###### 接收的原油和其他炼厂原料（`received_refinery_feedstocks`）

记录跨越炼厂边界的每项原油组分、凝析油、二次原料和外购中间品，并保留供应商或来源、分析或牌号、化石或生物属性、交付质量、密度基准和上游供应方。

- 选定流：选择来源与牌号特定的原油或炼厂原料产品流
- 流属性/单位：Mass / kg
- 数量规则：采用一致基准，对转移、水、沉积物和库存变化修正后的实测接收质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 预处理后的炼厂进料
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_feedstock_receipt`
- 来源：

###### 原料预处理公用工程与材料（`feedstock_preparation_inputs`）

记录接收、加热、脱盐和预处理所用电力、蒸汽、燃料、水、化学品及其他材料。

- 选定流：选择具体公用工程和材料产品流
- 流属性/单位：原生流属性和单位，并换算到已声明过程基准
- 数量规则：归属于原料预处理的计量量或采购协调量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 预处理后的炼厂进料
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_unit_utilities`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 预处理后的炼厂进料（`prepared_refinery_feed`）

记录送往初级蒸馏的质量和已实施的预处理步骤。

- 选定流：预处理后的炼厂进料，炼厂内部转移
- 流属性/单位：Mass / kg
- 数量规则：与原料接收、回收烃、水去除和库存变化协调的实测转移质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：过程输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_feedstock_receipt`
- 来源：

##### 废物流

###### 脱盐污泥与预处理废物（`preparation_waste`）

按去向和处理路线记录污泥、固体和其他预处理废物。

- 选定流：选择具体废物流
- 流属性/单位：Mass / kg
- 数量规则：实测或运输单据协调后的废物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 预处理后的炼厂进料
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_and_water_records`
- 来源：

##### 基本流

### 过程：常压与减压蒸馏（`primary_distillation`）

#### 输入

##### 产品流

###### 进入蒸馏的预处理炼厂进料（`distillation_feed`）

分别记录常压和减压装置进料，以保持各瓦斯油馏程馏分来源可追溯。

- 选定流：预处理后的炼厂进料，炼厂内部转移
- 流属性/单位：Mass / kg
- 数量规则：按常压或减压列计量的装置进料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 离开蒸馏的瓦斯油馏程物流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_distillation_streams`
- 来源：`eu-refining-bat-2014-738`

###### 蒸馏公用工程（`distillation_utilities`）

记录分配给常压和减压蒸馏的加热炉燃料、电力、蒸汽、冷却水和其他公用工程。

- 选定流：选择具体公用工程产品流
- 流属性/单位：原生流属性和单位
- 数量规则：装置计量消耗或有文件依据的装置级工程平衡量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 离开蒸馏的瓦斯油馏程物流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_unit_utilities`
- 来源：`eu-refining-bat-2014-738`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 常压与减压瓦斯油馏程物流（`distilled_gas_oil_streams`）

分别记录各常压或减压馏分的实测质量、蒸馏身份、去向、硫含量和密度基准。

- 选定流：瓦斯油馏程中间品，炼厂内部转移
- 流属性/单位：Mass / kg
- 数量规则：与装置进料及全部蒸馏输出协调的实测物流质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：过程输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_distillation_streams`
- 来源：`unsd-cpc-3-33360`, `eu-refining-bat-2014-738`

###### 其他蒸馏产品（`other_distillation_products`）

记录关闭装置质量平衡和支持分配所需的气体、石脑油、煤油、残余物及其他共产品。

- 选定流：选择具体共产品流
- 流属性/单位：Mass / kg
- 数量规则：按物流实测的共产品质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：过程输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_refinery_yield_balance`
- 来源：

##### 废物流

###### 含硫污水与蒸馏废物流（`distillation_waste_streams`）

记录送往处理或处置的含硫污水及其他废物流。

- 选定流：选择具体废物流
- 流属性/单位：Mass / kg
- 数量规则：实测转移量或与处理系统协调后的数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 离开蒸馏的瓦斯油馏程物流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_and_water_records`
- 来源：`eu-refining-bat-2014-738`

##### 基本流

###### 蒸馏直接大气排放（`distillation_air_emissions`）

记录经处理后排入大气的燃烧和过程排放，包括适用的监测污染物和报告基准。

- 选定流：选择具体大气污染物基本流
- 流属性/单位：Mass / kg
- 数量规则：监测或质量平衡得到并归属于蒸馏装置的排放
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 离开蒸馏的瓦斯油馏程物流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_direct_emissions`
- 来源：`eu-refining-bat-2014-738`

### 过程：转化与加氢处理（`conversion_and_hydrotreating`）

#### 输入

##### 产品流

###### 送往转化或处理的瓦斯油物流（`treatment_feed_streams`）

记录进入转化、加氢处理、脱臭或其他产品处理的每项直馏、裂化、减压或外购瓦斯油物流。

- 选定流：瓦斯油馏程中间品，内部或外购产品流
- 流属性/单位：Mass / kg
- 数量规则：按处理装置和物流来源实测的进料质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 处理后瓦斯油组分
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_treatment_operation`
- 来源：`eu-refining-bat-2014-738`

###### 氢气与处理投入（`hydrogen_and_treatment_inputs`）

记录各纳入装置使用的外购或炼厂自产氢气、催化剂、化学品、电力、燃料、蒸汽和水。

- 选定流：选择具体氢气、催化剂、化学品和公用工程产品流
- 流属性/单位：原生流属性和单位
- 数量规则：按处理装置计量、领用或库存协调后的数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 处理后瓦斯油组分
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_treatment_operation`
- 来源：`eu-refining-bat-2014-738`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 处理后瓦斯油调合组分（`treated_gas_oil_components`）

按装置记录处理后输出的质量、硫含量、密度基准及其调合去向。

- 选定流：处理后的瓦斯油组分，炼厂内部转移
- 流属性/单位：Mass / kg
- 数量规则：按贡献物流实测的处理后产品质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：过程输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_treatment_operation`
- 来源：`eu-refining-bat-2014-738`

###### 回收硫及其他处理共产品（`treatment_coproducts`）

仅在产品状态与去向有文件证明时，将回收硫和其他可销售输出记录为共产品，否则归类为废物。

- 选定流：选择具体共产品流
- 流属性/单位：Mass / kg
- 数量规则：离开处理系统的实测共产品质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：过程输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_treatment_operation`
- 来源：

##### 废物流

###### 废催化剂、废碱液与处理废物（`treatment_wastes`）

记录每项废物的质量、适用时的危险属性和处理去向。

- 选定流：选择具体废物流
- 流属性/单位：Mass / kg
- 数量规则：分配到报告期的实测领用、替换或运输质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 处理后瓦斯油组分
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_and_water_records`
- 来源：`eu-refining-bat-2014-738`

##### 基本流

###### 处理装置直接排放与水体排放（`treatment_direct_releases`）

记录尾气和废水处理后的具体污染物排放，不重复计算内部送往处理的物流。

- 选定流：选择具体大气或水体污染物基本流
- 流属性/单位：Mass / kg
- 数量规则：监测、采样或协调得到并归属于纳入处理装置的排放
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 处理后瓦斯油组分
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_direct_emissions`
- 来源：`eu-refining-bat-2014-738`

### 过程：调合与产品精制（`blending_and_product_finishing`）

#### 输入

##### 产品流

###### 化石瓦斯油调合组分（`fossil_blend_components`）

按来源、过程路线、质量、密度基准和硫含量记录每项化石中间馏分组分。

- 选定流：选择具体组分瓦斯油产品流或内部流
- 流属性/单位：Mass / kg
- 数量规则：实测批次或连续调合组分质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 送入储存的成品瓦斯油
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_blending_and_quality`
- 来源：

###### 生物组分与添加剂（`biogenic_components_and_additives`）

分别记录生物柴油或其他生物组分和添加剂，包括身份、上游路线、质量或体积、密度基准和调合比例基准。只有记录证明未使用时才可填零。

- 选定流：选择具体生物柴油、其他生物组分和添加剂产品流
- 流属性/单位：Mass / kg；保留原始体积并用组分特定密度换算
- 数量规则：按批次或报告期实测的组分加入量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 送入储存的成品瓦斯油
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_blending_and_quality`
- 来源：`unsd-cpc-3-33360`, `eu-fuel-quality-98-70-consolidated-2023`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 终端库存调整前的成品瓦斯油（`finished_gas_oil`）

按批次或生产期记录成品质量和质量指标，包括目标市场、牌号、规范、硫含量、密度及温度、生物比例和添加剂披露。

- 选定流：柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性/单位：Mass / kg
- 数量规则：通过已声明质量放行的实测调合输出
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：过程输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_blending_and_quality`
- 来源：`unsd-cpc-3-33360`, `eu-fuel-quality-98-70-consolidated-2023`

##### 废物流

###### 不合格产品和调合废物（`blending_waste`）

根据实际去向将不合格物料记录为内部返工流、可销售降级产品或废物；不得重复计算同一质量。

- 选定流：选择与去向匹配的产品流或废物流
- 流属性/单位：Mass / kg
- 数量规则：按处置方式实测的不合格数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 送入储存的成品瓦斯油
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_blending_and_quality`
- 来源：

##### 基本流

### 过程：储存与终端交付（`storage_and_terminal_delivery`）

#### 输入

##### 产品流

###### 进入储存的成品瓦斯油（`gas_oil_to_storage`）

记录进入所代表储罐系统的产品，并保留批次身份和质量状态。

- 选定流：柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性/单位：Mass / kg
- 数量规则：进入储存的实测转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 净装载瓦斯油
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_storage_and_delivery`
- 来源：

###### 储存与装载公用工程（`storage_loading_utilities`）

记录储罐运行、循环、泵送和装载使用的电力、燃料及其他公用工程。

- 选定流：选择具体公用工程产品流
- 流属性/单位：原生流属性和单位
- 数量规则：归属于所代表储存和装载的计量量或设备记录量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 净装载瓦斯油
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_unit_utilities`
- 来源：`eu-refining-bat-2014-738`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 已声明终端交付点净装载瓦斯油（`loaded_gas_oil_reference_product`）

此流为参考产品。对同一报告期的装载质量、储罐库存变化、转移、退货、不合格品去向和实测损失进行协调。

- 选定流：柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性/单位：Mass / kg
- 数量规则：已声明交付点的净交接计量装载质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_storage_and_delivery`
- 来源：`unsd-cpc-3-33360`

##### 废物流

###### 罐底物与终端废物（`terminal_wastes`）

按去向记录罐底物、污染水和其他终端废物。

- 选定流：选择具体废物流
- 流属性/单位：Mass / kg
- 数量规则：分配到报告期的实测移出或运输数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 净装载瓦斯油
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_and_water_records`
- 来源：

##### 基本流

###### 储存与装载大气排放（`terminal_air_releases`）

记录储罐和装载经回收或控制后的实测或工程协调污染物排放。

- 选定流：选择具体大气污染物基本流
- 流属性/单位：Mass / kg
- 数量规则：使用场址特定吞吐量、储罐、控制和产品数据得到的监测量或有文件依据的损失模型结果
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 净装载瓦斯油
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emissions`
- 来源：`eu-refining-bat-2014-738`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `allocation_subdivision_first` | 单元过程和独立计量物流 | 首先将炼厂细分为原料预处理、蒸馏、转化/处理、调合和终端操作；存在因果记录时直接分配实测投入与排放，以避免分配。 | `eu-pef-2021-2279` |
| `allocation_physical_relationship` | 不可分的多功能操作 | 无法细分或系统扩展时，使用与所提供功能相关且可量化的物理关系，并解释该关系为何代表负荷驱动因素。 | `eu-pef-2021-2279` |
| `allocation_refinery_shared_burdens` | 炼厂共享公用工程、共享处理和上游原油负荷 | 声明炼厂模型、共产品集合、分配基准、时期、适用时的价格或物理数据、负值或零价值输出处理，以及重要选择的敏感性情景；不得隐式采用质量、能量或经济分配。 | `jrc-refinery-allocation-2017`, `eu-pef-2021-2279` |
| `allocation_product_or_waste_status` | 回收硫、不合格物料、污泥、废催化剂和其他次级输出 | 根据有文件证明的法律和市场去向确定每项输出的产品或废物身份；一致应用所选分配或废物处理规则，并防止重复计算返工或回收产品。 | `eu-pef-2021-2279` |
| `allocation_biogenic_components` | 含生物物料的调合瓦斯油 | 先按实测化石和生物组分数量附加各组分上游负荷，再分配共享调合和终端负荷；披露质量或体积比例换算。 | `unsd-cpc-3-33360`, `eu-fuel-quality-98-70-consolidated-2023` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_feedstock_receipt` | `feedstock_receipt_and_preparation` | 接收和预处理炼厂进料 | 交接计量、分析和库存记录 | 供应商；来源；原油或原料牌号；化石或生物属性；质量；体积；密度；温度；水与沉积物；接收日期；储罐；库存变化 | 校准交接计量表、地磅、实验室分析和储罐协调 | kg; m3; kg/m3 | 每次接收及每日罐平衡 | 完整报告期及期初期末库存 | 所代表炼厂原料系统 | 协调接收、转移、移出和库存变化；仅在密度和温度匹配时换算体积 | 校准；分析报告；供应商文件；签署库存协调表 |
| `cp_distillation_streams` | `primary_distillation` | 常压与减压进料及产品流 | 装置运行和实验室记录 | 装置；物流 id；常压或减压来源；质量流量；密度；温度；蒸馏特征；硫；去向；运行小时 | 校准流量计、实验室采样和数据历史库 | kg; kg/h; kg/m3; mg/kg | 连续记录并按批次或班次采样 | 完整报告期 | 所有贡献瓦斯油的常压和减压列 | 时间积分物流并协调全部装置投入、产品、内部循环、水和损失 | 仪表校准；样品链；历史库完整性；装置平衡签署 |
| `cp_treatment_operation` | `conversion_and_hydrotreating` | 处理进料、氢气、催化剂、公用工程、处理产品和共产品 | 装置运行、领用和质量记录 | 装置；技术；进料流；输出流；质量；氢气；催化剂；能源；水；进出口硫；密度；共产品去向；运行小时 | 仪表、实验室结果、催化剂库存和装置历史库 | kg; kg/h; kWh; MJ; m3; mg/kg | 连续或按批次，并进行周期库存协调 | 完整报告期 | 每个有贡献的转化或处理装置 | 按装置积分，协调进料和输出，并保持到调合的物流路线 | 仪表校准；实验室 QA；催化剂领用记录；签署装置平衡 |
| `cp_blending_and_quality` | `blending_and_product_finishing` | 化石组分、生物组分、添加剂、成品瓦斯油和不合格物料 | 调合配方、仪表、储罐和质量证明记录 | 批次；组分身份和来源；质量；体积；密度与温度；化石或生物属性；比例基准；添加剂；硫；牌号；目标市场；适用规范；处置 | 校准组分仪表、储罐协调和认可或受控实验室分析 | kg; m3; kg/m3; mg/kg; 质量或体积百分比 | 每个调合批次或连续调合周期 | 报告期内全部放行和不合格生产 | 所有贡献参考产品的调合系统 | 协调组分投入与成品、返工、降级、废物和库存输出；按声明基准计算比例 | 仪表校准；配方授权；质量证明；批次放行 |
| `cp_storage_and_delivery` | `storage_and_terminal_delivery` | 储存投入、库存变化、退货、损失和装载参考产品 | 储罐计量和交接记录 | 储罐；批次；期初期末库存；转移；退货；装载质量和体积；密度；温度；装载点；交付方式；时间；牌号 | 校准储罐计量和交接计量表 | kg; m3; kg/m3 | 每次转移和装载；每日库存 | 完整报告期及期初期末库存 | 所代表炼厂或相连终端 | 在一致质量基准上使装载输出等于投入加库存净取出并扣除退货、返工、废物和损失 | 仪表校准；罐容表；交付单；签署库存平衡 |
| `cp_unit_utilities` | 所有纳入过程 | 电力、燃料、蒸汽、水和材料公用工程 | 仪表、发票和工程平衡 | 装置；公用工程身份；数量；仪表；分配标签；运行小时；供应方；交付状态 | 优先专用仪表，否则用有文件依据的工程平衡或发票协调 | 原生流单位 | 连续或发票周期 | 完整报告期 | 所有纳入装置和共享系统 | 直接分配专用消耗；共享消耗仅按第 7 节有文件依据的方法分配 | 仪表校准；发票；平衡责任人；分配工作表 |
| `cp_direct_emissions` | 所有纳入过程 | 直接大气和水体排放 | 连续监测、采样、火炬、放空和损失模型记录 | 排放源；污染物；浓度；流量；持续时间；控制状态；检出限；计算方法；排放环境介质 | 连续监测、代表性采样或有文件依据的场址特定工程计算 | kg; mg/Nm3; mg/L 及支持活动单位 | 连续或许可证/采样频率；火炬和事故按事件 | 完整报告期并包括异常事件 | 所有纳入装置、储罐、装载点和最终排放口 | 积分控制后的污染物质量，并避免重复计算内部送处理物流 | 监测仪校准；认可分析；事件日志；计算复核 |
| `cp_waste_and_water_records` | 所有纳入过程 | 废水、污泥、废催化剂、罐底物和其他废物 | 转移、处理和运输记录 | 来源装置；物料身份；质量或体积；组成；危险属性；去向；回收或处置路线；日期 | 仪表、秤、联单和处理厂协调 | kg; m3 | 每次转移或运输 | 完整报告期 | 所有纳入装置和厂内处理接口 | 按来源、物料和去向求和；协调内部转移与最终处理输出 | 秤校准；废物联单；处理接收；质量平衡 |
| `cp_refinery_yield_balance` | 所有纳入过程 | 炼厂产品、共产品、内部转移和库存 | 生产核算记录 | 物流；来源装置；去向；质量；密度；库存变化；产品或废物状态；使用时的价格或物理分配变量 | 经协调的炼厂生产核算 | kg; 已声明分配变量 | 每日或核算期 | 完整报告期 | 所代表炼厂和产品组合 | 在归一化和分配前关闭炼厂整体质量与收率平衡 | 签署生产平衡；分配数据集；差异解释 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_to_reference_mass` | 全部清单行 | 归一化数量 = 报告期数量除以净装载参考瓦斯油 kg | 相应采集协议；`cp_storage_and_delivery` | 每 1 kg 装载瓦斯油的数量 |  |
| `convert_volume_with_density` | 按体积记录的原料、组分、库存和交付 | 质量 = 观测体积乘以在同一声明参考温度下校正或测量的密度 | `cp_feedstock_receipt`; `cp_blending_and_quality`; `cp_storage_and_delivery` | 一致温度基准的 kg |  |
| `reconcile_process_mass` | 每个纳入装置及炼厂整体平衡 | 投入质量加期初库存 = 产品、共产品、废物、直接质量排放和期末库存；超过设施 QA 标准的残差必须解释 | 所有过程采集协议；`cp_refinery_yield_balance` | 签署的装置和炼厂质量平衡结果 |  |
| `calculate_biogenic_share` | 调合成品瓦斯油 | 生物比例 = 实测生物组分数量除以同一声明质量或体积基准的成品总量；不同基准换算前使用组分特定密度 | `cp_blending_and_quality` | 生物组分比例和按组分拆分的上游清单 | `unsd-cpc-3-33360`, `eu-fuel-quality-98-70-consolidated-2023` |
| `calculate_sulphur_balance` | 蒸馏、处理、调合与成品 | 使用实测含量和质量，协调进料及组分中的硫与产品、回收硫、废物、水体和大气排放中的硫 | `cp_distillation_streams`; `cp_treatment_operation`; `cp_blending_and_quality`; `cp_direct_emissions`; `cp_waste_and_water_records` | 硫平衡与未解释残差 | `eu-refining-bat-2014-738` |
| `apply_allocation` | 多功能炼厂操作 | 分配负荷 = 直接分配后未分配共享负荷乘以有文件依据的分配因子；已声明共产品集合的因子之和必须为一 | `cp_refinery_yield_balance`; `cp_unit_utilities`; `cp_direct_emissions` | 每项产品的分配清单和敏感性结果 | `eu-pef-2021-2279`, `jrc-refinery-allocation-2017` |
| `calculate_net_loaded_output` | 储存与终端交付 | 净装载质量 = 交接计量装载量减去有文件记录的退货，并协调同一时期的储罐库存变化、返工、废物和损失 | `cp_storage_and_delivery` | 已声明交付点的 kg 参考产品 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | 参考产品和调合组分 | 产品牌号、目标市场、规范、来源、路线、硫、密度和温度、生物比例基准及交付点必须完整且相互一致。 | 批次放行、质量证明、调合配方和交付单 |
| `dq_refinery_configuration` | 过程图 | 列出每个贡献装置、技术、物流连接、运行期和旁路，并说明每项条件性排除。 | 当前过程流程图、装置清单、历史库标签和签署适用性复核 |
| `dq_measurement` | 质量、体积、密度、质量指标、公用工程和排放记录 | 使用校准仪器或受控分析方法；记录检出限、缺失时段、替代和修正。 | 校准证书、实验室 QA、数据完整性报告和修正日志 |
| `dq_temporal_reconciliation` | 生产期 | 原料、生产、公用工程、排放、废物、库存和交付数据必须覆盖同一时期，并包括期初期末库存。 | 期末协调表和时间戳覆盖报告 |
| `dq_allocation` | 多产出炼厂负荷 | 在可审核工作表中保留直接分配、共产品集合、分配因子与变量、数据时期和敏感性结果。 | 分配工作簿、生产平衡、价格或物理变量来源及复核签字 |
| `dq_upstream_matching` | 外购产品流 | 每个供应方数据集必须匹配已声明来源、技术、质量和交付状态，或者披露不匹配及敏感性。 | 供应方元数据和适用性评估 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `validate_reference_identity` | 参考流 | 确认所选流 UUID、Mass 属性 UUID、Units of mass UUID、1 kg 参考数量和全部必需限定信息均已提供。 | `unsd-cpc-3-33360` |
| `validate_category_scope` | 数据集适用性 | 当数据包仅代表单一地区柴油牌号、船用牌号、供应商配方或纯生物柴油且未明确缩窄范围时，拒绝将其用作全类别数据集。 | `unsd-cpc-3-33360`, `eu-fuel-quality-98-70-consolidated-2023` |
| `validate_route_and_boundary` | 过程覆盖 | 确认原料来源、炼厂配置、常压和减压贡献、转化与加氢状态、调合、储存和装载交付点；每个省略的条件性装置必须有不适用说明。 | `eu-refining-bat-2014-738` |
| `validate_quality_measurements` | 成品与贡献物流 | 确认硫和密度值具有样品或记录标识、方法、单位、适用时的参考温度，并与清单使用同一产品和时期基准。 | `eu-fuel-quality-98-70-consolidated-2023` |
| `validate_biogenic_content` | 调合瓦斯油 | 确认组分身份、可再生原料路线、实测数量、质量或体积基准、使用时的密度换算和独立上游供应方；禁止未声明的零假设。 | `unsd-cpc-3-33360`, `eu-fuel-quality-98-70-consolidated-2023` |
| `validate_mass_and_sulphur_balance` | 装置与炼厂平衡 | 归一化前必须有协调后的质量和硫平衡、残差说明及一致的库存变化。 | `eu-refining-bat-2014-738` |
| `validate_allocation` | 多产出负荷 | 确认先直接分配后再分配，共产品集合与因子可协调，所选关系有依据，且重要分配选择具有敏感性结果。 | `eu-pef-2021-2279`, `jrc-refinery-allocation-2017` |
| `validate_releases_and_wastes` | 前景清单完整性 | 确认直接大气和水体排放、内部处理转移、最终排放、废催化剂、污泥和终端损失均已覆盖且未重复计算。 | `eu-refining-bat-2014-738` |
| `validate_upstream_providers` | 外购投入 | 确认原油、二次原料、氢气、公用工程、添加剂和生物组分具有匹配的供应方数据集，或明确记录数据缺口。 | `eu-refining-bat-2014-738` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 单元过程，或过程与分配细节透明的炼厂门聚合生产数据集 |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 原料来源、炼厂路线、产品牌号、目标市场、调合组成、地理、时期、分配和终端交付点与数据集匹配的瓦斯油生产和供应研究 |
| excluded_use | 无限定的全球瓦斯油代理；替代纯生物柴油；自动替代地区车用柴油或船用燃料牌号；未作为独立阶段建模的燃烧或下游分销 |
| required_metadata | 参考流 UUID；CPC 范围；炼厂和终端地理；报告期；原料来源；炼厂配置；常压和减压贡献；处理路线；硫；密度和温度；生物比例基准；规范；目标市场；分配；交付点 |
| required_quality_disclosure | 计量覆盖和校准；质量与硫协调；库存处理；排放与废物覆盖；供应方匹配；分配因子与敏感性；数据缺口和替代 |
| update_trigger | 原油组合、炼厂配置、贡献物流路线、加氢处理、产品规范、硫或调合配方、分配方法、终端交付点、供应方数据集或报告期代表性发生重要变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-33360` | `official_guidance` | 联合国统计司，CPC Version 3.0 Explanatory Notes，子类 33360，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf（检索于 2026-08-09） | 类别身份；中间馏分范围；瓦斯油/柴油术语；柴油与生物柴油混合物的归类 |
| `eu-refining-bat-2014-738` | `standard` | 欧盟委员会实施决定 2014/738/EU，矿物油与天然气炼制 BAT 结论，http://data.europa.eu/eli/dec_impl/2014/738/2014-10-28（检索于 2026-08-09） | 炼厂过程拆分；常压和减压蒸馏；耗氢过程；产品处理；储存、调合、装载；排放与废物覆盖 |
| `eu-fuel-quality-98-70-consolidated-2023` | `standard` | Directive 98/70/EC，2023-11-20 合并文本，https://eur-lex.europa.eu/eli/dir/1998/70/2023-11-20/eng/pdf（检索于 2026-08-09） | 目标市场和规范限定；硫与 FAME 披露背景；禁止将单一司法辖区规范视为通用要求 |
| `eu-pef-2021-2279` | `official_guidance` | 欧盟委员会建议 (EU) 2021/2279，产品环境足迹方法，http://data.europa.eu/eli/reco/2021/2279/2021-12-30（检索于 2026-08-09） | 分配层级；细分、系统扩展、物理关系及后备关系要求 |
| `jrc-refinery-allocation-2017` | `literature` | Moretti 等，Analysis of standard and innovative methods for allocating upstream and refinery GHG emissions to oil products，JRC105041，DOI 10.1016/j.apenergy.2017.08.183，https://publications.jrc.ec.europa.eu/repository/handle/JRC105041（检索于 2026-08-09） | 炼油产品分配方案、透明度和敏感性要求 |
