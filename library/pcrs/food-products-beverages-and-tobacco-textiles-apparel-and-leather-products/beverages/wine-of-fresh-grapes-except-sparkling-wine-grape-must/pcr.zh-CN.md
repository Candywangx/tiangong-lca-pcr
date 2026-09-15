---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.beverages.wine-of-fresh-grapes-except-sparkling-wine-grape-must
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 鲜葡萄酿制的葡萄酒，起泡的葡萄酒除外，发酵前或中的葡萄汁

## 1. 范围与适用性

本 PCR 适用于以鲜葡萄制成的葡萄汁和非起泡葡萄酒前景数据包。前景范围从酒厂接收酿酒鲜葡萄开始，经葡萄汁制备；对于葡萄酒路线，还包括酒精发酵、澄清、稳定、熟化，以及散装或按已声明包装形式在酒厂门交付。葡萄种植和运至酒厂的运输由上游数据集表示；下游分销、零售、消费和包装生命末期不在前景边界内，除非所声明研究明确扩展这些阶段。

起泡葡萄酒和加气葡萄酒、味美思及其他加香葡萄酒、水果酒、葡萄汁饮料、葡萄酒蒸馏产品、葡萄酒醋，以及完全以非葡萄原料为基础的酒厂过程均不适用。数据包必须声明参考产品是葡萄汁还是非起泡葡萄酒，并且只应用实际发生的路线特定过程和原子交换。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.beverages.wine-of-fresh-grapes-except-sparkling-wine-grape-must |
| classification_refs | CPC 3.0: 24212 |
| covered_products | 由鲜葡萄获得的葡萄汁；由鲜葡萄或葡萄汁经部分或完全酒精发酵获得的静止葡萄酒，可散装供应或采用已声明包装供应 |
| excluded_products | 起泡或加气葡萄酒；味美思和加香葡萄酒；水果酒；葡萄汁饮料；葡萄酒醋；葡萄酒蒸馏产品；非由鲜葡萄或葡萄汁制成的产品 |
| representative_product | 酒厂发运门处可供市场使用的非起泡葡萄酒或葡萄汁 |
| production_route | 鲜葡萄接收、分选、破碎和/或压榨；路线特定的葡萄汁处理；葡萄酒路线的酒精发酵；条件适用的澄清、稳定和熟化；散装发运或包装 |
| market_state | 散装液体或包装液体；声明产品形态、静止葡萄酒状态、酒精状态、包装配置、年份或生产期及质量标识 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 在酒厂发运门提供由鲜葡萄制成、可供市场使用的葡萄汁或非起泡葡萄酒 |
| How much | 1,000 kg 参考产品 |
| How well | 符合已声明产品形态及适用的成分、酿酒、食品安全和市场规范；葡萄酒不是起泡或加气产品 |
| How long or cycle | 完成一个生产批次或生产期，直至酒厂发运 |
| reference_flow_link | 扣除已记录过程损失后的可销售净产出，位于任何下游分销之前 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1,000 kg |
| 参考产品流 | 鲜葡萄酿制的葡萄酒，起泡的葡萄酒除外，发酵前或中的葡萄汁 `267f0e7f-b77b-4baf-8e0a-a4e4f180e3ec` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位组 `93a60a57-a3c8-11da-a746-0800200b9a66` |
| 参考单位 | kg |
| 必需限定信息 | product_form=grape_must or non_sparkling_wine; bulk_or_packaged; grape variety or blend; vintage or production campaign; actual alcohol content for wine; residual sugar class where relevant; still-wine confirmation; preservation or stabilisation route; packaging configuration and fill quantity where packaged; geography; technology route |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品和所有质量归一化交换 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 报告恰好 1,000 kg 可销售参考产品净质量，并将所有交换归一化到该质量。 |
| `liquid_mass_conversion` | 以液体体积计量的记录 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 使用与产品及温度对应的密度记录把实测体积换算为质量；保留原始体积、温度、密度和换算计算。 |
| `packaging_mass` | 每个包装组件 | 质量 | kg | 分别记录投放市场的每个组件质量；没有组件记录时不得使用合并包装质量。 |
| `energy_separation` | 外购电力、外购蒸汽及燃烧的每种燃料 | 能量 | kWh 或 MJ | 电力、蒸汽和每种燃料分别作为交换，并记录换算因子及热值基准。 |
| `wastewater_load` | 直接排放污染物指标 | 质量 | kg | 每个污染物负荷均按匹配的排放体积乘以对应浓度分别计算；保留采样和流量记录。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 酒厂门接收的酿酒鲜葡萄，或为递归加工明确披露的同类别葡萄汁或散装葡萄酒投入 |
| starting_condition_role | 酒厂作业的前景进入点 |
| product_classification_scope | 由鲜葡萄制成的葡萄汁和非起泡葡萄酒；不包括起泡、加香、蒸馏、制醋、葡萄汁饮料和非葡萄产品 |
| recursive_input_rule | 对属于本类别的外购葡萄汁或散装葡萄酒，只作为一个原子产品投入记录并链接上游数据集；不得在接收方前景过程中递归重建其酒厂生产。 |
| upstream_dataset_requirement | 鲜葡萄、同类别散装投入、电力、蒸汽、每种燃料、水、添加剂、加工助剂、包装组件和场外废物处理均须使用有代表性的上游数据集。 |
| disclosure | 披露纳入路线、散装或包装发运、外包作业、排除的生命周期阶段、葡萄来源、年份或生产期、产品损失、废水路线、废物和共产品去向及分配选择。 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_gate_to_gate` | 酒厂前景系统 | 纳入从接收鲜葡萄或已披露递归投入到可销售产品净发运的全部可归属酒厂作业；披露在建模完整生命周期时，葡萄生产、下游分销、零售、使用和生命末期需要链接数据集。 | `oiv-ghg-2025`; `ferrara-de-feo-2018` |
| `boundary_route_selection` | 葡萄汁和葡萄酒路线 | 两类产品均纳入葡萄汁制备；酒精发酵仅用于葡萄酒；仅在已声明产品确实实施时纳入澄清、稳定、熟化和包装。 | `oiv-code-2025`; `lbnl-best-winery-2005` |
| `boundary_complete_exchanges` | 每个纳入过程 | 将能源、水、原料、添加剂、加工助剂、包装组件、产品、共产品、每项废物、废水、制冷剂损失和每种直接排放分别列为交换。 | `oiv-ghg-2025`; `oiv-viti-641-2020` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `must_preparation` | 鲜葡萄接收和葡萄汁制备 | required | 所有已声明产品 | 将接收的鲜葡萄转化为葡萄汁和分离固体 | 1,000 kg 参考产品 |
| `alcoholic_fermentation` | 酒精发酵 | conditional | product_form=non_sparkling_wine | 将葡萄糖转化为乙醇、二氧化碳和新酒 | 1,000 kg 参考产品 |
| `wine_finishing` | 澄清、稳定、熟化和酒窖处理 | conditional | 已声明葡萄酒或经处理/保存的葡萄汁路线实施时 | 生产成品散装产品并记录酒窖公用工程、助剂、残余物和损失 | 1,000 kg 参考产品 |
| `packaging_dispatch` | 包装和发运准备 | conditional | 参考产品在酒厂门之前包装时 | 灌装并组装已声明的一级、二级和三级包装 | 1,000 kg 参考产品 |
| `wastewater_treatment` | 酒厂现场废水处理 | conditional | 酒厂废水在前景控制下处理或排放时 | 处理废水并分别量化排放指标 | 1,000 kg 参考产品 |

### 过程：鲜葡萄接收和葡萄汁制备（`must_preparation`）

#### 输入

##### 产品流

###### 接收的酿酒鲜葡萄（`fresh_wine_grapes`）

鲜葡萄在酒厂入库后、分选、破碎、除梗、沥汁或压榨前按批次称量。

- 选定流：酿酒鲜葡萄
- 流属性/单位：质量 / kg
- 数量规则：经校准入厂秤获得的净接收葡萄质量，并扣除已记录的拒收批次调整
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass_balance`
- 来源：`oiv-code-2025`; `lbnl-best-winery-2005`

###### 葡萄处理用电力（`must_preparation_electricity`）

计量电力用于接收、输送、破碎、除梗、压榨、泵送和控制。

- 选定流：中压电力
- 流属性/单位：能量 / kWh
- 数量规则：该过程的实测或可辩护分表电量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`
- 来源：`lbnl-best-winery-2005`

###### 接收和压榨清洗水（`must_preparation_water`）

破碎区、接收设备、压榨机和相关管线的清洗水与其他酒窖用水分开记录。

- 选定流：工艺水
- 流属性/单位：体积 / m3
- 数量规则：该过程的实测或按批次估算供水量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_records`
- 来源：`lbnl-best-winery-2005`; `oiv-viti-641-2020`

###### 发酵前使用的二氧化硫（`must_preparation_sulfur_dioxide`）

保护葡萄或葡萄汁时记录二氧化硫；按实际制剂和浓度计算纯活性物质量。

- 选定流：二氧化硫
- 流属性/单位：质量 / kg
- 数量规则：由称量的制剂添加量计算活性二氧化硫质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_additive_records`
- 来源：`oiv-code-2025`

#### 输出

##### 产品流

###### 转移或销售的葡萄汁（`grape_must_output`）

制备过程产出的葡萄汁通过称量，或由校准体积和密度换算；它可作为酿酒中间品，也可作为葡萄汁路线的可销售参考产品。

- 选定流：葡萄汁
- 流属性/单位：质量 / kg
- 数量规则：扣除滞留固体和已记录损失后的实测转移或发运质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_material_mass_balance`
- 来源：`oiv-code-2025`

##### 废物流

###### 分离的葡萄梗（`grape_stems`）

除梗产生的葡萄梗按湿质量和去向记录。

- 选定流：葡萄梗
- 流属性/单位：质量 / kg
- 数量规则：离开过程的实测湿质量或由容器重量推导的湿质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 来源：`oiv-viti-641-2020`; `lbnl-best-winery-2005`

###### 白葡萄酒或葡萄汁路线的葡萄果渣（`must_preparation_pomace`）

发酵前分离的果皮、籽和果肉作为葡萄果渣记录，并说明去向和市场状态。

- 选定流：葡萄果渣
- 流属性/单位：质量 / kg
- 数量规则：离开过程的实测湿质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 来源：`oiv-viti-641-2020`; `ferrara-de-feo-2018`

###### 葡萄汁制备酒厂废水（`must_preparation_wastewater`）

该过程的清洗水和含产品排水在处理前作为一个具体废水流记录。

- 选定流：葡萄接收和压榨酒厂废水
- 流属性/单位：体积 / m3
- 数量规则：归属于该过程的实测废水体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_records`
- 来源：`oiv-viti-641-2020`; `lbnl-best-winery-2005`

##### 基本流

### 过程：酒精发酵（`alcoholic_fermentation`）

#### 输入

##### 产品流

###### 进入发酵的葡萄汁（`fermentation_grape_must`）

葡萄酒路线中加入发酵罐的葡萄汁按质量记录。

- 选定流：葡萄汁
- 流属性/单位：质量 / kg
- 数量规则：发酵罐进料实测质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_material_mass_balance`
- 来源：`oiv-code-2025`

###### 活性干葡萄酒酵母（`wine_yeast`）

仅在实施接种时记录购买的酵母。

- 选定流：活性干葡萄酒酵母
- 流属性/单位：质量 / kg
- 数量规则：批次记录中的酵母称量添加量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_additive_records`
- 来源：`oiv-code-2025`

###### 磷酸氢二铵发酵营养剂（`diammonium_phosphate`）

作为发酵营养剂添加时，将磷酸氢二铵作为独立化学品记录。

- 选定流：磷酸氢二铵
- 流属性/单位：质量 / kg
- 数量规则：批次记录中的营养剂称量添加量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_additive_records`
- 来源：`oiv-code-2025`

###### 发酵控制用电力（`fermentation_electricity`）

记录泵送、搅拌、控制和冷却用电。

- 选定流：中压电力
- 流属性/单位：能量 / kWh
- 数量规则：发酵过程的实测或可辩护分表电量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`
- 来源：`lbnl-best-winery-2005`

###### 发酵罐清洗水（`fermentation_water`）

发酵罐及转移管线的清洗水单独记录。

- 选定流：工艺水
- 流属性/单位：体积 / m3
- 数量规则：发酵清洗的实测或按批次估算供水量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_records`
- 来源：`lbnl-best-winery-2005`

###### R134a 制冷剂补充量（`r134a_makeup`）

使用 R134a 时，记录为补偿发酵或酒窖冷却系统损失而购买的 R134a。

- 选定流：R134a 制冷剂
- 流属性/单位：质量 / kg
- 数量规则：分配给酒厂生产的经核实 R134a 充注质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_refrigerant_records`
- 来源：`oiv-ghg-2025`

###### R404A 制冷剂补充量（`r404a_makeup`）

使用 R404A 时，记录为补偿发酵或酒窖冷却系统损失而购买的 R404A 混合制冷剂。

- 选定流：R404A 制冷剂
- 流属性/单位：质量 / kg
- 数量规则：分配给酒厂生产的经核实 R404A 充注质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_refrigerant_records`
- 来源：`oiv-ghg-2025`

#### 输出

##### 产品流

###### 酒精发酵后的新酒（`young_wine`）

完成发酵后转出的新酒在后处理前按质量记录。

- 选定流：新酿非起泡葡萄酒
- 流属性/单位：质量 / kg
- 数量规则：扣除滞留固体和已记录洒漏后的实测转移质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_material_mass_balance`
- 来源：`oiv-code-2025`

##### 废物流

###### 红葡萄酒葡萄果渣（`fermentation_pomace`）

红葡萄酒发酵后分离的果皮、籽和果肉作为葡萄果渣记录。

- 选定流：葡萄果渣
- 流属性/单位：质量 / kg
- 数量规则：离开发酵或压榨过程的实测湿质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 来源：`oiv-viti-641-2020`; `ferrara-de-feo-2018`

###### 发酵粗酒泥（`fermentation_lees`）

首次转酒时除去的沉降酵母和固体与果渣分开记录。

- 选定流：葡萄酒酒泥
- 流属性/单位：质量 / kg
- 数量规则：离开发酵过程的实测湿酒泥质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 来源：`oiv-viti-641-2020`; `lbnl-best-winery-2005`

###### 发酵酒厂废水（`fermentation_wastewater`）

发酵罐和转移管线清洗水在处理前记录。

- 选定流：发酵酒厂废水
- 流属性/单位：体积 / m3
- 数量规则：归属于发酵过程的实测废水体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_records`
- 来源：`oiv-viti-641-2020`; `lbnl-best-winery-2005`

##### 基本流

###### 发酵产生的生物源二氧化碳（`fermentation_co2_biogenic`）

酒精发酵释放的二氧化碳根据采集的糖转化或尾气记录计算，并按生物源报告。

- 选定流：排放到空气的生物源二氧化碳
- 流属性/单位：质量 / kg
- 数量规则：实测尾气质量，或按已转化可发酵糖进行化学计量计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emission_records`
- 来源：`oiv-code-2025`; `lbnl-best-winery-2005`

###### 排放到空气的 R134a（`r134a_to_air`）

服务于前景过程的系统含 R134a 时，单独报告 R134a 泄漏。

- 选定流：排放到空气的 1,1,1,2-四氟乙烷（HFC-134a）
- 流属性/单位：质量 / kg
- 数量规则：分配给生产的制冷剂库存损失计算值
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_refrigerant_records`
- 来源：`oiv-ghg-2025`

###### 排放到空气的 R404A（`r404a_to_air`）

服务于前景过程的系统含 R404A 时，单独报告 R404A 泄漏。

- 选定流：排放到空气的 R404A 制冷剂
- 流属性/单位：质量 / kg
- 数量规则：分配给生产的制冷剂库存损失计算值
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_refrigerant_records`
- 来源：`oiv-ghg-2025`

### 过程：澄清、稳定、熟化和酒窖处理（`wine_finishing`）

#### 输入

##### 产品流

###### 进入后处理的新酒（`finishing_young_wine`）

进入澄清、稳定、熟化或储存前测量新酒。

- 选定流：新酿非起泡葡萄酒
- 流属性/单位：质量 / kg
- 数量规则：实测过程进料质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_material_mass_balance`
- 来源：`lbnl-best-winery-2005`

###### 酒窖作业用电力（`finishing_electricity`）

记录泵送、过滤、制冷、稳定和储存用电。

- 选定流：中压电力
- 流属性/单位：能量 / kWh
- 数量规则：后处理过程的实测或可辩护分表电量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`
- 来源：`lbnl-best-winery-2005`

###### 酒窖清洗水（`finishing_water`）

罐、桶、过滤器、地面和转移设备的清洗水单独记录。

- 选定流：工艺水
- 流属性/单位：体积 / m3
- 数量规则：后处理和酒窖清洗的实测或按批次估算供水量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_records`
- 来源：`lbnl-best-winery-2005`; `oiv-viti-641-2020`

###### 热清洗用外购蒸汽（`finishing_steam`）

桶、罐或设备清洗使用外购蒸汽时，将其作为独立交换。

- 选定流：工业设施用蒸汽
- 流属性/单位：能量 / MJ
- 数量规则：分配给后处理的实测外购蒸汽能量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`
- 来源：`lbnl-best-winery-2005`

###### 现场供热用天然气（`finishing_natural_gas`）

酒厂现场燃烧天然气生产热水或蒸汽时单独记录。

- 选定流：天然气
- 流属性/单位：能量 / MJ
- 数量规则：按已记录低位或高位热值基准计量燃料消耗
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`
- 来源：`lbnl-best-winery-2005`; `oiv-ghg-2025`

###### 后处理使用的二氧化硫（`finishing_sulfur_dioxide`）

发酵后添加的二氧化硫与发酵前添加量分开记录。

- 选定流：二氧化硫
- 流属性/单位：质量 / kg
- 数量规则：由称量的制剂添加量计算活性二氧化硫质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_additive_records`
- 来源：`oiv-code-2025`

###### 膨润土澄清剂（`bentonite`）

用于下胶或澄清时记录膨润土。

- 选定流：膨润土
- 流属性/单位：质量 / kg
- 数量规则：加入批次的干膨润土称量质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_additive_records`
- 来源：`oiv-code-2025`; `lbnl-best-winery-2005`

###### 硅藻土助滤剂（`diatomaceous_earth`）

深层过滤使用硅藻土时记录。

- 选定流：硅藻土
- 流属性/单位：质量 / kg
- 数量规则：加入过滤过程的干助滤剂称量质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_additive_records`
- 来源：`lbnl-best-winery-2005`

#### 输出

##### 产品流

###### 成品散装非起泡葡萄酒（`finished_bulk_wine`）

成品散装葡萄酒在后处理后、包装或散装发运前计量。

- 选定流：成品散装非起泡葡萄酒
- 流属性/单位：质量 / kg
- 数量规则：扣除滞留残余物和已记录酒窖损失后的实测转移或发运质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_material_mass_balance`
- 来源：`oiv-code-2025`; `lbnl-best-winery-2005`

##### 废物流

###### 后处理葡萄酒酒泥（`finishing_lees`）

倒罐、澄清、稳定或熟化过程中除去的酒泥单独记录。

- 选定流：葡萄酒酒泥
- 流属性/单位：质量 / kg
- 数量规则：离开后处理过程的实测湿酒泥质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 来源：`oiv-viti-641-2020`; `ferrara-de-feo-2018`

###### 废膨润土（`spent_bentonite`）

废膨润土及夹带葡萄酒固体作为独立废物流记录。

- 选定流：葡萄酒澄清废膨润土
- 流属性/单位：质量 / kg
- 数量规则：离开澄清过程的实测湿废物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 来源：`oiv-viti-641-2020`

###### 废硅藻土（`spent_diatomaceous_earth`）

用过的硅藻土及截留固体与其他澄清残余物分开记录。

- 选定流：葡萄酒过滤废硅藻土
- 流属性/单位：质量 / kg
- 数量规则：离开过滤过程的实测湿废物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 来源：`oiv-viti-641-2020`; `lbnl-best-winery-2005`

###### 后处理酒厂废水（`finishing_wastewater`）

罐、桶、过滤器和酒窖清洗水在处理前记录。

- 选定流：后处理和酒窖清洗酒厂废水
- 流属性/单位：体积 / m3
- 数量规则：归属于后处理的实测废水体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_records`
- 来源：`oiv-viti-641-2020`; `lbnl-best-winery-2005`

##### 基本流

###### 现场天然气燃烧产生的化石二氧化碳（`natural_gas_co2_fossil`）

根据已记录天然气使用量单独计算直接化石二氧化碳。

- 选定流：排放到空气的化石二氧化碳
- 流属性/单位：质量 / kg
- 数量规则：天然气活动量乘以适用且已记录的二氧化碳排放因子
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emission_records`
- 来源：`oiv-ghg-2025`

###### 现场天然气燃烧产生的甲烷（`natural_gas_ch4`）

现场天然气燃烧产生的直接甲烷作为独立交换计算。

- 选定流：排放到空气的化石甲烷
- 流属性/单位：质量 / kg
- 数量规则：天然气活动量乘以适用且已记录的甲烷排放因子
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emission_records`
- 来源：`oiv-ghg-2025`

###### 现场天然气燃烧产生的一氧化二氮（`natural_gas_n2o`）

现场天然气燃烧产生的直接一氧化二氮作为独立交换计算。

- 选定流：排放到空气的一氧化二氮
- 流属性/单位：质量 / kg
- 数量规则：天然气活动量乘以适用且已记录的一氧化二氮排放因子
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emission_records`
- 来源：`oiv-ghg-2025`

###### 现场天然气燃烧产生的氮氧化物（`natural_gas_nox`）

现场天然气燃烧产生的直接氮氧化物与温室气体分开报告。

- 选定流：排放到空气的氮氧化物
- 流属性/单位：质量 / kg
- 数量规则：天然气活动量乘以适用且已记录的氮氧化物排放因子
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emission_records`
- 来源：`oiv-ghg-2025`

### 过程：包装和发运准备（`packaging_dispatch`）

#### 输入

##### 产品流

###### 送往包装的成品葡萄酒（`packaging_wine_input`）

进入包装的成品葡萄酒与葡萄汁分开计量。

- 选定流：成品散装非起泡葡萄酒
- 流属性/单位：质量 / kg
- 数量规则：包装线进料的实测质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_material_mass_balance`
- 来源：`lbnl-best-winery-2005`

###### 送往包装的葡萄汁（`packaging_must_input`）

进入包装的葡萄汁作为独立的路线特定产品投入计量。

- 选定流：葡萄汁
- 流属性/单位：质量 / kg
- 数量规则：包装线进料的实测质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_material_mass_balance`
- 来源：`oiv-code-2025`

###### 包装用电力（`packaging_electricity`）

记录冲洗、灌装、封口、贴标、输送和托盘准备的电力。

- 选定流：中压电力
- 流属性/单位：能量 / kWh
- 数量规则：包装过程的实测或可辩护分表电量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`
- 来源：`lbnl-best-winery-2005`

###### 包装线清洗水（`packaging_water`）

包装容器冲洗和生产线清洗用水单独记录。

- 选定流：工艺水
- 流属性/单位：体积 / m3
- 数量规则：包装过程的实测或按批次估算供水量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_records`
- 来源：`lbnl-best-winery-2005`

###### 惰性保护用氮气（`packaging_nitrogen`）

用于罐或包装顶部空间惰性保护时记录氮气。

- 选定流：氮气
- 流属性/单位：质量 / kg
- 数量规则：气体实测用量或供应商钢瓶质量平衡
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_additive_records`
- 来源：`lbnl-best-winery-2005`

###### 玻璃瓶（`glass_bottle`）

按实际瓶型规格单独记录玻璃瓶质量。

- 选定流：玻璃瓶
- 流属性/单位：质量 / kg
- 数量规则：领用瓶数乘以核实单瓶质量，再扣除退回未使用瓶数
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_records`
- 来源：`ferrara-de-feo-2018`; `oiv-viti-641-2020`

###### 天然软木塞（`natural_cork_closure`）

仅对采用该封口的产品记录天然软木塞。

- 选定流：天然软木塞
- 流属性/单位：质量 / kg
- 数量规则：领用封口数乘以核实单件质量，再扣除退回未使用数量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_records`
- 来源：`ferrara-de-feo-2018`

###### 铝制螺旋盖（`aluminium_screw_cap`）

仅对采用该封口的产品记录铝制螺旋盖，绝不与软木塞质量合并。

- 选定流：铝制螺旋盖
- 流属性/单位：质量 / kg
- 数量规则：领用封口数乘以核实单件质量，再扣除退回未使用数量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_records`
- 来源：`oiv-viti-641-2020`

###### 纸标签（`paper_label`）

纸标签作为一个独立包装组件记录。

- 选定流：涂布纸标签
- 流属性/单位：质量 / kg
- 数量规则：使用标签数乘以核实单件质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_records`
- 来源：`ferrara-de-feo-2018`

###### 瓦楞纸板箱（`corrugated_board_carton`）

瓦楞纸板运输箱与标签和托盘分开记录。

- 选定流：瓦楞纸板箱
- 流属性/单位：质量 / kg
- 数量规则：使用纸箱数乘以核实单件质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_records`
- 来源：`oiv-viti-641-2020`

###### 低密度聚乙烯缠绕膜（`ldpe_stretch_film`）

用于固定托盘产品的缠绕膜作为独立聚合物组件记录。

- 选定流：低密度聚乙烯缠绕膜
- 流属性/单位：质量 / kg
- 数量规则：领用卷质量减核实余量，并分配到包装产品
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_records`
- 来源：`oiv-viti-641-2020`

###### 木托盘（`wood_pallet`）

单次使用木托盘或按寿命分配的可复用木托盘质量分别记录，并披露复用假设。

- 选定流：木托盘
- 流属性/单位：质量 / kg
- 数量规则：单次使用托盘质量，或分配到产出的经核实可复用托盘寿命质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：情景特定（`scenario_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_records`
- 来源：`oiv-viti-641-2020`

#### 输出

##### 产品流

###### 可供市场使用的包装参考产品（`packaged_reference_product`）

可销售净包装葡萄酒或葡萄汁是参考产出；产品质量不含包装质量。

- 选定流：鲜葡萄酿制的葡萄酒，起泡的葡萄酒除外，发酵前或中的葡萄汁 `267f0e7f-b77b-4baf-8e0a-a4e4f180e3ec`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：1,000 kg 可销售产品净质量，不含包装质量
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：通用（`generic`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份参考（`identity_reference`）

##### 废物流

###### 包装线酒厂废水（`packaging_wastewater`）

冲洗和生产线清洗水在处理前记录。

- 选定流：包装酒厂废水
- 流属性/单位：体积 / m3
- 数量规则：归属于包装过程的实测废水体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_records`
- 来源：`lbnl-best-winery-2005`

###### 破损玻璃瓶（`broken_glass`）

破损或拒收玻璃瓶与其他包装损失分开记录。

- 选定流：包装废玻璃
- 流属性/单位：质量 / kg
- 数量规则：实测质量，或拒收瓶数乘以核实单瓶质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_records`
- 来源：`oiv-viti-641-2020`

##### 基本流

### 过程：酒厂现场废水处理（`wastewater_treatment`）

#### 输入

##### 产品流

###### 废水处理用电力（`wastewater_treatment_electricity`）

记录现场处理的泵送、曝气、混合和控制用电。

- 选定流：中压电力
- 流属性/单位：能量 / kWh
- 数量规则：废水处理实测电量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`
- 来源：`oiv-viti-641-2020`

##### 废物流

###### 进入现场处理的合并酒厂废水（`winery_wastewater_treatment_input`）

进入现场处理的合并酒厂工艺废水按体积计量；除非明确披露，不与生活污水合并。

- 选定流：酒厂工艺废水
- 流属性/单位：体积 / m3
- 数量规则：分配到已声明产品系统的实测进水体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_records`
- 来源：`oiv-viti-641-2020`

#### 输出

##### 产品流

##### 废物流

###### 处理后的酒厂废水（`treated_winery_wastewater`）

送往回用、下水道或受控排放的处理出水按体积和去向记录。

- 选定流：处理后的酒厂废水
- 流属性/单位：体积 / m3
- 数量规则：按去向测量的处理出水体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_records`
- 来源：`oiv-viti-641-2020`

###### 废水处理污泥（`wastewater_sludge`）

酒厂废水处理去除的污泥作为独立废物流记录。

- 选定流：酒厂废水处理污泥
- 流属性/单位：质量 / kg
- 数量规则：实测湿质量，并保留干物质含量和去向
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 来源：`oiv-viti-641-2020`; `ferrara-de-feo-2018`

##### 基本流

###### 排放到水体的化学需氧量（`cod_to_water`）

处理出水在前景控制下排放时，将 COD 负荷作为独立排放指标报告。

- 选定流：排放到水体的化学需氧量
- 流属性/单位：质量 / kg
- 数量规则：匹配排放体积乘以实测 COD 浓度
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_monitoring`
- 来源：`oiv-viti-641-2020`

###### 排放到水体的五日生化需氧量（`bod5_to_water`）

BOD5 负荷与 COD 分开报告。

- 选定流：排放到水体的五日生化需氧量
- 流属性/单位：质量 / kg
- 数量规则：匹配排放体积乘以实测 BOD5 浓度
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_monitoring`
- 来源：`oiv-viti-641-2020`

###### 排放到水体的总悬浮固体（`tss_to_water`）

悬浮固体负荷作为独立水体排放报告。

- 选定流：排放到水体的总悬浮固体
- 流属性/单位：质量 / kg
- 数量规则：匹配排放体积乘以实测总悬浮固体浓度
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_monitoring`
- 来源：`oiv-viti-641-2020`

###### 排放到水体的总氮（`total_nitrogen_to_water`）

在监测或许可证要求时，将总氮负荷作为独立水体排放报告。

- 选定流：排放到水体的总氮
- 流属性/单位：质量 / kg
- 数量规则：匹配排放体积乘以实测总氮浓度
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_monitoring`
- 来源：`oiv-viti-641-2020`

###### 排放到水体的总磷（`total_phosphorus_to_water`）

在监测或许可证要求时，将总磷负荷作为独立水体排放报告。

- 选定流：排放到水体的总磷
- 流属性/单位：质量 / kg
- 数量规则：匹配排放体积乘以实测总磷浓度
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_monitoring`
- 来源：`oiv-viti-641-2020`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_avoidance` | 多产出酒厂过程 | 优先通过划分计量作业或扩展系统并单独建模回收过程来避免分配，但系统扩展必须有依据并保持一致。 | `oiv-ghg-2025` |
| `allocation_physical` | 葡萄酒、葡萄汁、果渣、酒泥及其他有价值共产品 | 无法划分且存在物理因果关系时，按已记录物理关系分配剩余共享投入和产出；不得仅因残余物具有质量就进行分配。 | `oiv-ghg-2025` |
| `allocation_economic_fallback` | 无可辩护物理关系的联合有价值产出 | 仅在回退情形采用经济分配，使用共产品离开共享过程时的同期价值，并在选择重要时进行敏感性分析。 | `oiv-ghg-2025`; `eu-pef-2021` |
| `waste_no_credit` | 作为废物管理的产出 | 除非明确纳入有记录的后果型或替代情景，否则不计避免产品收益；在所选废物路线中记录运输和处理。 | `oiv-viti-641-2020`; `eu-pef-2021` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_mass_balance` | all | 产品和中间品质量 | 秤、罐、密度和批次记录 | batch_id; timestamp; gross_mass; tare_mass; volume; temperature; density; product_form; transfer_loss | 校准秤，或用匹配密度换算校准体积 | kg | 每批、每次转移和每次发运 | 完整的已声明生产期 | 所有前景酒厂作业 | 按路线汇总接收或转移质量；归一化前协调投入、产出、库存和已记录损失 | 校准证书；罐容表；批次协调；签署的发运记录 |
| `cp_energy_records` | all | 电力、蒸汽和每种燃料 | 仪表、发票和设备分配记录 | meter_id; timestamp; energy_quantity; unit; fuel_identity; heating_value_basis; process_assignment | 优先直接分表，否则使用基于工厂总表的书面工程分配 | kWh; MJ | 连续或发票周期 | 至少一个有代表性的完整生产期 | 前景酒厂和现场处理 | 分别汇总每种能源载体，并用已记录运行驱动因子分配共享仪表 | 仪表校准；发票；分配工作表；完整性检查 |
| `cp_water_records` | all | 工艺水 | 水表和批次记录 | meter_id; timestamp; volume; source; process_assignment; reuse_flag | 直接计量或经验证的批次估算 | m3 | 连续或每次清洗事件 | 包括生产旺季的完整生产期 | 前景酒厂 | 按过程和水源汇总；回用水与新鲜取水分开 | 仪表校准；清洗日志；水平衡 |
| `cp_additive_records` | all | 每种添加剂、加工助剂、酵母、营养剂或惰性气体 | 称量、制剂、领用和批次记录 | material_identity; formulation; active_fraction; batch_id; issued_mass; returned_mass; gas_quantity | 称量领退平衡或校准加料记录 | kg | 每次添加 | 完整的已声明生产期 | 前景酒厂 | 必要时计算活性物质，并按原子物料和产品路线汇总 | 供应商规范；秤校准；批次表；库存协调 |
| `cp_refrigerant_records` | alcoholic_fermentation | 每种制冷剂及其损失 | 制冷资产登记和维护记录 | equipment_id; refrigerant_identity; opening_charge; added_mass; recovered_mass; closing_charge; service_date; process_assignment | 每种制冷剂的年度或生产期库存平衡 | kg | 每次维护及年度/生产期结束 | 与已声明生产重叠的期间 | 服务前景过程的制冷系统 | 分别计算每种制冷剂损失，并按维护或冷量驱动因子分配 | 技师记录；购买凭证；设备登记；库存协调 |
| `cp_packaging_records` | packaging_dispatch | 每个包装组件 | 物料清单、领用、计数、单件质量和废品记录 | component_identity; supplier; specification; unit_mass; issued_count; returned_count; reject_count; reuse_cycles | 数量乘以核实单件质量，或直接质量领用平衡 | kg | 每次包装运行 | 完整的已声明生产期 | 前景控制的包装作业 | 分别汇总每个组件；披露可复用托盘寿命分配 | 供应商规范；抽样单件质量检查；产线协调 |
| `cp_waste_records` | all | 每项固体或半固体废物和副产品 | 容器秤、收集和去向记录 | waste_identity; wet_mass; dry_matter; batch_id; destination; market_status; haulier | 校准秤，或容器数乘以核实净质量 | kg | 每次清运 | 完整的已声明生产期 | 所有前景过程 | 分别按废物身份和去向汇总；不得用已售共产品冲减投入 | 称重单；转移联单；相关干物质试验；去向证据 |
| `cp_wastewater_records` | all | 每股酒厂废水 | 流量计、罐、下水道和回用记录 | source_process; timestamp; volume; destination; sanitary_inclusion; product_loss | 计量流量或经验证罐容平衡 | m3 | 连续或每个排放批次 | 包括生产旺季的完整生产期 | 前景控制的酒厂废水 | 按来源过程和去向汇总；协调处理进水和出水 | 仪表校准；排水发票；罐记录；水平衡 |
| `cp_wastewater_monitoring` | wastewater_treatment | 每个废水污染物指标 | 匹配流量和实验室样品记录 | sample_id; start_time; end_time; discharge_volume; cod; bod5; tss; total_nitrogen; total_phosphorus; method; detection_limit | 有代表性的混合采样及经认可或有记录的实验室分析 | kg; mg/L; m3 | 按许可证要求且足以代表生产旺季 | 完整的已声明生产期 | 前景控制的直接排放 | 浓度与同一排放区间配对；分别计算每个污染物负荷 | 样品链；方法；实验室 QA/QC；流量计校准 |
| `cp_direct_emission_records` | all | 发酵和燃烧排放 | 糖平衡、尾气、燃料和因子记录 | batch_id; sugar_before; sugar_after; offgas_mass; fuel_quantity; factor_id; factor_value; factor_unit | 有条件时直接测量，否则以活动数据乘已记录因子或化学计量关系 | kg | 每批或每个燃料周期 | 完整的已声明生产期 | 直接前景排放源 | 分别计算每种排放物，并归一化到参考质量 | 分析记录；燃料发票；因子来源；计算工作表 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalisation` | 每个清单交换 | normalized_amount = campaign_amount / net_saleable_reference_product_mass × 1,000 kg | 生产期交换量；可销售参考产品净质量 | 每 1,000 kg 参考产品的交换 | `oiv-ghg-2025` |
| `calc_volume_to_mass` | 葡萄酒和葡萄汁体积记录 | mass = calibrated_volume × density measured or justified for the product and temperature | 体积；温度；密度 | 产品质量 | `oiv-code-2025` |
| `calc_active_sulfur_dioxide` | 亚硫酸化添加 | active_SO2_mass = formulation_mass × verified_SO2_mass_fraction | 制剂质量；供应商活性分数 | 二氧化硫质量 | `oiv-code-2025` |
| `calc_fermentation_co2` | 酒精发酵 | 可靠时使用实测尾气；否则 CO2_mass = fermentable_hexose_equivalent_consumed × 88/180，并披露不完全转化和溶解碳滞留 | 发酵前后糖量；批次质量；尾气或滞留记录 | 排放到空气的生物源二氧化碳 | `oiv-code-2025`; `lbnl-best-winery-2005` |
| `calc_refrigerant_loss` | 每个制冷回路 | loss = opening_charge + additions - recovered_mass - closing_charge；分别报告每种制冷剂 | 资产级制冷剂库存 | 排放到空气的制冷剂 | `oiv-ghg-2025` |
| `calc_combustion_emissions` | 每种直接燃烧排放 | emission_mass = fuel_activity × documented substance-specific emission_factor | 燃料数量；热值基准；因子身份 | 分开的 CO2、CH4、N2O 和 NOx 排放 | `oiv-ghg-2025` |
| `calc_wastewater_load` | 每个直接水体排放指标 | load_kg = matched_discharge_volume_m3 × concentration_mg_per_L / 1,000 | 排放体积；匹配浓度 | 分开的 COD、BOD5、TSS、总氮或总磷负荷 | `oiv-viti-641-2020` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | 产品和每个交换 | 在原子流层级保留产品形态、路线、物料身份、废物去向、包装规格和制冷剂身份。 | 批次表；供应商规范；废物联单；设备登记 |
| `dq_temporal` | 前景数据 | 覆盖一个有代表性的完整生产期，包括可归属于产品的生产旺季作业、后处理、储存、包装和废水处理；披露偏离。 | 带日期仪表导出；批次日历；库存期初期末记录 |
| `dq_measurement` | 质量、体积、能源、水和污染物记录 | 使用校准仪器或有记录的工程估算；保留单位、换算因子、检出限和分配驱动因子。 | 校准证书；计算工作表；实验室 QA/QC |
| `dq_completeness` | 所有纳入过程 | 协调产品质量、公用工程、添加剂、包装组件、每项废物、废水去向、制冷剂和直接排放；解释缺失或排除流。 | 生产期平衡和签署的完整性清单 |
| `dq_representativeness` | 前景和链接上游数据 | 表征时间、地理、技术、精度、完整性、一致性、可重复性、来源和不确定性；受控过程优先采用场址特定数据。 | 数据质量评价和数据集元数据 |
| `dq_uncertainty` | 重要的实测、计算或分配值 | 记录测量变异、估算不确定性和分配或二手数据选择的敏感性；不得把单个案例数值转换为经验范围。 | 不确定性登记；敏感性计算；来源比较 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | 参考流 | 确认 UUID、Product flow 类型、Mass 参考属性、kg 单位、product_form 限定信息和明确非起泡状态。 | `eu-regulation-1308-2013`; `oiv-code-2025` |
| `validate_route` | 过程图 | 每个数据集均须包含葡萄汁制备；未发酵葡萄汁不得包含发酵，除非已声明保存路线含部分发酵；葡萄酒必须包含发酵，并披露每个条件适用的后处理和包装过程。 | `oiv-code-2025`; `lbnl-best-winery-2005` |
| `validate_atomic_inventory` | 清单行 | 拒绝把电力与蒸汽或燃料、多个燃料、多个制冷剂、多个化学品、多个包装组件、多项废物、多个废水指标或多个空气排放合并在一行。 | `oiv-ghg-2025`; `oiv-viti-641-2020` |
| `validate_mass_balance` | 每个过程和生产期 | 检查期初库存加投入与产出、期末库存、实测排放、水分变化和已记录损失的平衡；发布前调查重要不平衡。 | `oiv-ghg-2025` |
| `validate_wastewater` | 废水处理和排放 | 要求来源过程体积和去向；排放在前景控制下时，在监测或许可证要求情况下分别计算 COD、BOD5、TSS、总氮和总磷。 | `oiv-viti-641-2020` |
| `validate_packaging` | 包装产品 | 协调灌装数量和产品净质量；要求分别记录实际使用的每个组件质量，并披露可复用组件分配。 | `ferrara-de-feo-2018`; `oiv-viti-641-2020` |
| `validate_sources_and_quality` | 前景数据包 | 外部约束规则必须有 source id，受控过程必须有场址特定记录，无法采用初级数据时须记录二手数据，并完整披露数据质量。 | `oiv-ghg-2025`; `eu-pef-2021` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 酒厂发运门处葡萄汁或非起泡葡萄酒的前景生产数据集 |
| downstream_use | `secondary_dataset`; `background_dataset` after review and publication |
| allowed_use | 与已声明路线、地理、年份或生产期、产品形态、包装和边界一致的产品与过程 LCA、供应链清单、环境足迹研究、热点分析和情景建模 |
| excluded_use | 起泡、加气、加香、蒸馏、制醋、葡萄汁饮料或非葡萄产品；未披露地在葡萄汁和葡萄酒之间替代；仅用本门到门数据集支持暗示从摇篮到坟墓覆盖的消费者声明 |
| required_metadata | PCR id 和版本；产品形态；葡萄品种或混合；年份或生产期；葡萄酒实际酒精度；静止葡萄酒确认；地理；技术路线；散装或包装状态；包装物料清单；参考质量；数据期间；废水路线；共产品和废物去向；分配方法；上游数据集身份 |
| required_quality_disclosure | 初级与二手数据占比；测量和换算方法；校准和实验室证据；时间、地理和技术代表性；完整性；不确定性；分配敏感性；缺失 UUID 或流；排除项 |
| update_trigger | 产品形态、葡萄来源或品种构成、年份代表性、发酵或稳定技术、能源系统、制冷剂、包装配置、废水路线、共产品处理、分配方法、适用法规发生变化，或出现重要数据质量发现 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `eu-regulation-1308-2013` | standard | Regulation (EU) No 1308/2013, Annex VII Part II, consolidated text: https://eur-lex.europa.eu/eli/reg/2013/1308 | 葡萄酒和葡萄汁法定产品定义及起泡产品路线排除；访问日期 2026-08-20 |
| `oiv-code-2025` | official_guidance | OIV, International Code of Oenological Practices, 2025 issue, ISBN 978-2-85038-106-5: https://www.oiv.int/sites/default/files/publication/2025-04/CPO%202025%20EN.pdf | 葡萄汁制备、发酵、澄清、稳定、添加剂和加工助剂的产品定义与过程分解；访问日期 2026-08-20 |
| `oiv-ghg-2025` | official_guidance | OIV, Methodological recommendations for GHG balance accounting in the vitivinicultural sector, Volume 1, July 2025: https://www.oiv.int/sites/default/files/2025-07/OIV-Expertise_document_Methodological_recommendations_for_accounting_for_GHG_balance.pdf | 功能单位解释、部分生命周期披露、过程图、前景数据采集、制冷剂、直接和间接能源、分配层级、数据质量与不确定性；访问日期 2026-08-20 |
| `oiv-viti-641-2020` | official_guidance | OIV Resolution OIV-VITI 641-2020, Guide for the implementation of principles of sustainable vitiviniculture: https://www.oiv.int/standards/oiv-guide-for-the-implementation-of-principles-of-sustainable-vitiviculture- | 分开的投入产出管理、废物和废水跟踪、共产品处理、包装可回收性及监测要求；访问日期 2026-08-20 |
| `eu-pef-2021` | official_guidance | Commission Recommendation (EU) 2021/2279 on Environmental Footprint methods, OJ L 471, 30.12.2021: https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32021H2279 | 生命周期数据质量、核查、类别规则使用和分配回退背景；访问日期 2026-08-20 |
| `lbnl-best-winery-2005` | handbook | Galitsky, C., Worrell, E., Radspieler, A., Healy, P., and Zechiel, S. BEST Winery Guidebook, LBNL/PUB-3184, California Energy Commission, 2005, DOI 10.2172/862318: https://escholarship.org/content/qt7qb4h9g0/qt7qb4h9g0.pdf | 酒厂过程顺序、制冷、泵送、热水、清洗、用水、澄清、储存和灌装作业 |
| `ferrara-de-feo-2018` | literature | Ferrara, C. and De Feo, G. Life Cycle Assessment Application to the Wine Sector: A Critical Review. Sustainability 10(2), 395. DOI: https://doi.org/10.3390/su10020395 | 对系统边界差异、场址特定清单需求、酒厂废物和包装组件重要性的独立同行评审支持 |
