---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.starches-inulin-wheat-gluten-dextrins-and-other-modified-starches
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 淀粉；菊粉；小麦面筋；糊精及其他改性淀粉

## 1. 范围与适用性

本 PCR 适用于 CPC 3.0 子类 23220 产品的前景生产数据包，包括植物来源的原淀粉、菊粉、小麦面筋、糊精以及经物理法、酶法或化学法改性的淀粉。边界覆盖制造厂接收已声明植物原料或中间体后，经过分离或提取、精制、可选改性、浓缩或干燥、产品整理以及现场废物和排放管理，直至散装或包装产品在工厂大门处放行。

该产品类别宽于当前可用的天工代表流。因此，`Starch` 仅作为本 PCR 的代表产品形态。数据生产者必须声明具体产品形态；只要存在更匹配的真实天工流，就必须替换代表流。不得把代表 Starch UUID 静默用于菊粉、小麦面筋、糊精、改性淀粉或更具体的淀粉身份。

本 PCR 不包括淀粉甜味剂、葡萄糖或果糖糖浆、多元醇、乙醇、成品食品、纸制品、胶黏剂、纺织品及其他下游制剂或制品。除非研究范围通过单独数据集明确扩展，也不包括已接收原料之前的农业生产以及下游分销、使用和生命末期。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.starches-inulin-wheat-gluten-dextrins-and-other-modified-starches |
| classification_refs | CPC 3.0:23220，范围完全对应 |
| covered_products | 植物原淀粉；菊粉；小麦面筋；糊精；经物理法、酶法或化学法改性的淀粉 |
| excluded_products | 淀粉甜味剂和糖浆；多元醇；乙醇；成品食品、纸品、胶黏剂、纺织、药用或其他下游制剂与制品 |
| representative_product | Starch，由天工流 `e5842f16-31b3-4ea4-b16a-f7b06beeb6c3` 表示；仅为代表产品形态，不是其他涵盖形态的默认身份 |
| production_route | 按具体路线进行植物组分分离或提取、精制、可选改性、浓缩或干燥以及厂内整理 |
| market_state | 在工厂大门处按已声明的散装或包装粉末、颗粒、湿滤饼、浆液、糊状物或其他指定商业状态 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供以指定商业形态交付的已声明 CPC 23220 淀粉、菊粉、小麦面筋、糊精或改性淀粉产品 |
| How much | 制造厂大门处 1 kg 按销售状态计的产品 |
| How well | 符合已声明的产品身份、植物原料、原生或改性状态、干物质或含水率、纯度或等级以及目标技术规格 |
| How long or cycle | 一个生产批次放行；与产品规格相关时声明保质期 |
| reference_flow_link | 1 kg 已声明产品；仅当产品确为淀粉且不存在更具体真实流时才使用代表 Starch 流 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 工厂大门处 1 kg 按销售状态计的产品 |
| 参考产品流 | Starch，仅为代表产品形态 `e5842f16-31b3-4ea4-b16a-f7b06beeb6c3` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 具体产品形态；产品专用天工流选择；植物原料；原淀粉、糊精、菊粉、小麦面筋或改性身份；适用时的改性方法及试剂；销售物理状态；干物质或含水率；纯度或等级；生产路线；工厂地域；参考期；包装状态；分配方法 |

构建前景数据包时，`必需限定信息` 中的每一项都必须在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中声明。缺失限定信息意味着参考流定义不完整。具体产品不是通用淀粉，或已有更具体真实淀粉流时，必须替换代表 UUID 并记录替换决定。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass_as_sold` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 按已声明销售状态报告参考数量并记录含水率或干物质；不得在没有明确换算的情况下混用干物质质量和销售状态质量。 |
| `dry_matter_conversion` | 原料、中间体、产品和共产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 比较湿物流与干物流时，保留实测湿质量和固形物分数，并单独计算干质量。 |
| `energy_carrier_separation` | 电力、蒸汽和燃料 | 已声明能量或燃料属性 | kWh、MJ、kg 或 m3，按计量单位 | 分别记录外购电、输入蒸汽和各类燃料；保留计量原单位并记录换算因子。 |
| `water_accounting` | 新鲜水、循环水和排放水 | 已声明质量或体积属性 | kg 或 m3 | 区分新鲜取水、内部循环工艺水、产品或共产品携带水、蒸发水和排放废水。 |
| `product_flow_identity` | 参考产品和产品输出 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 所选产品流 UUID 必须匹配已声明具体形态；`e5842f16-31b3-4ea4-b16a-f7b06beeb6c3` 仅可在不存在更匹配真实流时表示淀粉。 |

## 5. 系统边界

前景边界始于已声明植物原料或外购中间体跨越制造厂大门，止于合格产品以已声明散装或包装状态在工厂大门处放行。应纳入具体路线上的分离、提取、精制、改性、浓缩、干燥、整理、内部循环、可归属于生产的清洗、这些操作使用的现场公用工程，以及现场废物、废水和直接排放管理。

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 已接收的植物原料或外购中间体，具有实测质量、含水率或固形物、来源、供应商和产品身份 |
| starting_condition_role | 工厂大门处的前景制造投入 |
| product_classification_scope | 仅限 CPC 3.0:23220 产品；必须声明路线和具体产品形态 |
| recursive_input_rule | 外购原淀粉、菊粉、小麦面筋、糊精或改性淀粉作为上游产品投入记录一次并链接上游数据集；不得对该投入递归套用当前前景路线 |
| upstream_dataset_requirement | 对种植、初级生产和运至已声明起点的供应使用供应商特定或具代表性的上游数据集；披露地域、参考期、技术和数据质量 |
| disclosure | 声明产品形态、原料、路线、工厂地域、参考期、分配、所含包装、现场处理、排除阶段以及每个替换后的产品流 UUID |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_rule_1` | 前景制造 | 纳入从工厂大门起点到产品放行、可归属于已声明路线的全部物料、能量、水、产品、共产品、废物、废水和直接排放流。 | `ec-pef-recommendation-2021-2279`; `eu-fdm-bref-2019` |
| `boundary_rule_2` | 路线选择 | 仅纳入实际发生的路线过程，但对过程图中的每个条件过程记录有理由的“不适用”决定。 | `eu-fdm-bref-2019`; `us-epa-ap42-9-9-7` |
| `boundary_rule_3` | 外购同类别中间体 | 把外购同类别中间体作为带独立上游数据集的产品投入，防止递归。 | `ec-pef-recommendation-2021-2279` |
| `boundary_rule_4` | 代表产品流 | 不得把代表 Starch UUID 用于其他涵盖形态；只要存在更忠实的真实天工身份，就必须使用产品专用流替换。 | `un-cpc-3-0-23220` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `raw_material_receiving` | 原料接收与准备 | required | 始终 | 前景接收、清理、破碎和进料准备 | 每 1 kg 参考产品 |
| `starch_component_separation` | 淀粉或小麦组分分离与精制 | conditional | 原淀粉、糊精、改性淀粉或一体化小麦面筋路线 | 前景湿法或干法分离、洗涤、精制和中间体回收 | 每 1 kg 参考产品 |
| `inulin_extraction` | 菊粉提取与纯化 | conditional | 菊粉路线 | 前景根料准备、提取、分离、纯化和浓缩 | 每 1 kg 参考产品 |
| `wheat_gluten_finishing` | 小麦面筋分离与整理 | conditional | 小麦面筋为已声明产品或共产品 | 前景面筋分离、脱水和可选干燥 | 每 1 kg 参考产品 |
| `starch_modification` | 糊精化或淀粉改性 | conditional | 已声明产品为糊精或改性淀粉 | 前景物理、酶法或化学转化及后处理 | 每 1 kg 参考产品 |
| `product_finishing` | 产品整理与工厂大门放行 | required | 始终 | 前景浓缩或干燥、筛分、储存、包装和放行 | 1 kg 合格销售状态产品 |
| `onsite_residuals_management` | 现场残余物与排放管理 | conditional | 现场产生废水、捕集粉尘、有机残余物或直接排放 | 前景收集、处理、回收和排放 | 每 1 kg 参考产品 |

### 过程：原料接收与准备（`raw_material_receiving`）

#### 输入

##### 产品流

###### 已声明植物原料或外购中间体（`plant_raw_material_input`）

记录实际进厂原料，例如玉米、小麦、马铃薯、菊苣根、其他已声明淀粉原料、小麦粉或外购原淀粉。外购 CPC 23220 中间体必须链接自己的上游数据集，不能继承代表 Starch UUID。

- 选定流：按已声明原料解析产品专用天工流
- 流属性/单位：Mass / kg
- 数量规则：按批次实测接收质量，并记录含水率或固形物
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_materials_and_aids`
- 来源：`eu-fdm-bref-2019`; `us-epa-ap42-9-9-7`

##### 废物流

###### 去除的异物和准备废料（`preparation_reject_output`）

测量加工前去除的筛下物、土石、受损根料或谷物及其他废料。

- 选定流：待解析的场址特定废物流
- 流属性/单位：Mass / kg
- 数量规则：按去向实测废料质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coproducts_and_wastes`
- 来源：`us-epa-ap42-9-9-7`

##### 基本流

#### 输出

##### 产品流

###### 已准备工艺进料（`prepared_feed_output`）

以接收原料减去实测废料及有记录的储存或准备损失计算准备后进料。

- 选定流：内部中间体；除非跨越数据集边界，否则不需要外部流 UUID
- 流属性/单位：Mass / kg
- 数量规则：计算准备后湿质量和干质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_materials_and_aids`
- 来源：`eu-fdm-bref-2019`

##### 废物流

##### 基本流

### 过程：淀粉或小麦组分分离与精制（`starch_component_separation`）

#### 输入

##### 产品流

###### 已准备植物进料（`separation_feed_input`）

转入接收过程实测的准备后进料。按路线可包括干磨、湿磨或浸泡、粉碎、筛分、离心、洗涤和脱水。

- 选定流：与 `prepared_feed_output` 匹配的内部中间体
- 流属性/单位：Mass / kg
- 数量规则：转入的准备后湿质量和干质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_materials_and_aids`
- 来源：`eu-fdm-bref-2019`; `us-epa-ap42-9-9-7`

###### 新鲜工艺水（`process_water_input`）

测量用于浸泡、分离、洗涤和清洗的新鲜水，并单独保留内部循环水记录。

- 选定流：待解析的场址特定水流
- 流属性/单位：Volume / m3
- 数量规则：归属于本过程的计量新鲜水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utilities_and_water`
- 来源：`eu-fdm-bref-2019`

###### 分离助剂和 pH 调节剂（`processing_aids_input`）

使用时分别记录酸、含亚硫酸盐助剂、酶、盐、碱、助滤剂、纳入生产平衡的清洗化学品及其他工艺助剂。

- 选定流：待解析的产品专用化学品或酶流
- 流属性/单位：Mass / kg
- 数量规则：实测领用量减有记录的退回量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_materials_and_aids`
- 来源：`eu-fdm-bref-2019`; `us-epa-ap42-9-9-7`

###### 粉磨与分离用电（`electricity_input`）

测量输送、粉磨、筛分、离心、泵送和相关控制用电。

- 选定流：待解析的场址电力供应组合
- 流属性/单位：Energy / kWh
- 数量规则：分表计量，或依据实测设备负荷和运行时间分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utilities_and_water`
- 来源：`eu-fdm-bref-2019`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 精制淀粉浆或分离小麦组分（`separated_component_output`）

测量精制淀粉浆，并在小麦路线中测量整理前分离出的面筋、可溶物或纤维组分的质量和固形物。

- 选定流：内部路线特定中间体
- 流属性/单位：Mass / kg
- 数量规则：按组分实测湿质量并计算干质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_product_identity_and_output`
- 来源：`eu-fdm-bref-2019`

###### 可销售胚芽、纤维、蛋白或可溶物共产品（`coproduct_output`）

分别记录各共产品的去向、湿质量、固形物和商业状态；不得把可销售共产品并入废物。

- 选定流：待解析的产品专用共产品流
- 流属性/单位：Mass / kg
- 数量规则：按共产品实测发运或转移数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coproducts_and_wastes`
- 来源：`eu-fdm-bref-2019`; `us-epa-ap42-9-9-7`

##### 废物流

###### 分离废水或有机残余物（`wastewater_output`）

在废水离开本过程进入现场处理、场外处理或排放时，记录体积、负荷和去向。

- 选定流：待解析的场址特定废水流
- 流属性/单位：Volume / m3
- 数量规则：实测流量、采样负荷指标和去向
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_direct_emissions_and_wastewater`
- 来源：`eu-fdm-bref-2019`

##### 基本流

### 过程：菊粉提取与纯化（`inulin_extraction`）

#### 输入

##### 产品流

###### 已准备含菊粉原料（`inulin_feed_input`）

记录接收与准备后的菊苣根或其他明确声明的含菊粉原料。

- 选定流：待解析的原料专用流
- 流属性/单位：Mass / kg
- 数量规则：实测原料质量和干物质
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格菊粉产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_materials_and_aids`
- 来源：`eu-feed-materials-catalogue-68-2013`

###### 提取水和纯化助剂（`inulin_water_and_aids_input`）

测量提取水，并在使用时分别记录过滤、脱色、离子交换、消泡及其他助剂。

- 选定流：待解析的水和助剂专用流
- 流属性/单位：Volume or mass / m3 or kg
- 数量规则：按物料实测数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格菊粉产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_materials_and_aids`
- 来源：`eu-feed-materials-catalogue-68-2013`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 纯化或浓缩菊粉中间体（`inulin_intermediate_output`）

测量最终干燥或放行前回收菊粉流的质量及固形物或浓度。

- 选定流：待解析的产品专用菊粉流；不得使用代表 Starch UUID
- 流属性/单位：Mass / kg
- 数量规则：实测湿质量并计算干菊粉质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格菊粉产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_product_identity_and_output`
- 来源：`eu-feed-materials-catalogue-68-2013`

###### 菊苣浆、糖蜜或酒糟共产品（`inulin_coproduct_output`）

分别记录各可销售或回收共产品，包括菊苣浆为压榨或干燥状态，以及出售、回收、土地利用或处理去向。

- 选定流：待解析的产品专用共产品流
- 流属性/单位：Mass / kg
- 数量规则：实测数量、干物质和去向
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格菊粉产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coproducts_and_wastes`
- 来源：`eu-feed-materials-catalogue-68-2013`

##### 废物流

###### 菊粉路线废水和废纯化介质（`inulin_residual_output`）

按处理去向测量废水以及废过滤或离子交换介质。

- 选定流：待解析的场址特定废物或废水流
- 流属性/单位：Mass or volume / kg or m3
- 数量规则：按残余物类型实测数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格菊粉产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_direct_emissions_and_wastewater`
- 来源：`eu-feed-materials-catalogue-68-2013`

##### 基本流

### 过程：小麦面筋分离与整理（`wheat_gluten_finishing`）

#### 输入

##### 产品流

###### 分离湿面筋流（`wet_gluten_input`）

从小麦组分分离过程转入实测湿面筋流；如为外购，则链接其上游数据集。

- 选定流：内部湿面筋中间体或外购产品专用流
- 流属性/单位：Mass / kg
- 数量规则：实测湿质量和固形物分数
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格小麦面筋产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_product_identity_and_output`
- 来源：`eu-fdm-bref-2019`

###### 整理用电与热能（`gluten_finishing_energy_input`）

测量小麦面筋脱水、干燥、粉磨和筛分用能。

- 选定流：分别解析场址特定电力、蒸汽或燃料流
- 流属性/单位：Energy or fuel property / kWh, MJ, kg, or m3
- 数量规则：计量或设备特定实测用量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格小麦面筋产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utilities_and_water`
- 来源：`eu-fdm-bref-2019`; `us-epa-ap42-9-9-7`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 合格小麦面筋（`wheat_gluten_output`）

记录实际小麦面筋产品流、等级、含水率和蛋白规格。不得使用代表 Starch UUID。

- 选定流：待解析的产品专用小麦面筋天工流
- 流属性/单位：Mass / kg
- 数量规则：实测合格销售状态输出
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 kg 合格小麦面筋产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_product_identity_and_output`
- 来源：`eu-fdm-bref-2019`

##### 废物流

##### 基本流

###### 捕集及释放的干燥颗粒物（`particulate_emission_output`）

把捕集粉尘作为废物或回收产品测量，把实测烟囱颗粒物作为基本流记录；不得合并二者。

- 选定流：待解析的颗粒物专用流
- 流属性/单位：Mass / kg
- 数量规则：实测排放，或依据监测数据进行经验证计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格小麦面筋产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emissions_and_wastewater`
- 来源：`eu-fdm-bref-2019`; `us-epa-ap42-9-9-7`

### 过程：糊精化或淀粉改性（`starch_modification`）

#### 输入

##### 产品流

###### 已声明原淀粉进料（`native_starch_input`）

记录进入改性的原淀粉浆、湿滤饼或干淀粉及其植物来源和固形物。

- 选定流：产品专用原淀粉流；仅当不存在更匹配真实淀粉流时可使用代表 Starch UUID
- 流属性/单位：Mass / kg
- 数量规则：实测销售状态或湿质量，并计算干淀粉质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格糊精或改性淀粉产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_materials_and_aids`
- 来源：`eu-fdm-bref-2019`

###### 改性剂、酶、水和催化剂（`modification_agents_input`）

按已声明改性方法分别记录各化学品、酶、催化剂、水、调和剂、洗涤助剂和纯化材料。

- 选定流：待解析的产品专用投入流
- 流属性/单位：Mass or volume / kg or m3
- 数量规则：实测领用量减有记录的回收或退回量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格糊精或改性淀粉产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_materials_and_aids`
- 来源：`eu-fdm-bref-2019`; `us-epa-ap42-9-9-7`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 改性淀粉或糊精中间体（`modified_product_intermediate_output`）

记录反应及可选洗涤或脱水后的产品专用转化物流。具体改性身份为必填项。

- 选定流：待解析的产品专用糊精或改性淀粉流；不得默认使用代表 Starch UUID
- 流属性/单位：Mass / kg
- 数量规则：实测湿质量或干质量，并记录固形物和规格状态
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格糊精或改性淀粉产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_product_identity_and_output`
- 来源：`eu-fdm-bref-2019`; `us-epa-ap42-9-9-7`

##### 废物流

###### 改性废水和废介质（`modification_residual_output`）

按去向记录水性残余物、废介质、不合格物料和回收试剂。

- 选定流：待解析的场址特定废物或废水流
- 流属性/单位：Mass or volume / kg or m3
- 数量规则：按残余物类型和去向实测数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格糊精或改性淀粉产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_direct_emissions_and_wastewater`
- 来源：`eu-fdm-bref-2019`

##### 基本流

###### 改性和干燥直接大气排放（`modification_air_emission_output`）

适用时记录实测颗粒物、酸雾、挥发性有机物、二氧化硫或其他应报告直接排放；不得从流身份推断排放因子。

- 选定流：待解析的污染物专用基本流
- 流属性/单位：Mass / kg
- 数量规则：实测或依据前景监测进行许可认可的计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格糊精或改性淀粉产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emissions_and_wastewater`
- 来源：`eu-fdm-bref-2019`; `us-epa-ap42-9-9-7`

### 过程：产品整理与工厂大门放行（`product_finishing`）

#### 输入

##### 产品流

###### 路线特定产品中间体（`product_intermediate_input`）

把路线特定的纯化、分离、改性或浓缩中间体转入整理过程。

- 选定流：与已声明产品路线匹配的内部中间体
- 流属性/单位：Mass / kg
- 数量规则：实测转移质量和固形物
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_product_identity_and_output`
- 来源：`eu-fdm-bref-2019`

###### 整理用电与热能（`thermal_energy_input`）

分别测量浓缩、脱水、干燥、粉磨、筛分、输送和储存使用的电力、蒸汽和燃料。

- 选定流：分别解析场址特定电力、蒸汽和燃料流
- 流属性/单位：Energy or fuel property / kWh, MJ, kg, or m3
- 数量规则：分表计量或有记录的设备分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utilities_and_water`
- 来源：`eu-fdm-bref-2019`; `us-epa-ap42-9-9-7`

###### 包装材料（`packaging_material_input`）

仅当包装包含在已声明市场状态中时，按材料和实际质量分别记录初级、次级和三级包装。

- 选定流：待解析的包装材料专用流
- 流属性/单位：Mass / kg
- 数量规则：实测包装耗用量减有记录的退回量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging`
- 来源：`ec-pef-recommendation-2021-2279`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 工厂大门处合格已声明产品（`reference_product_output`）

记录实际产品专用天工流和限定信息。仅当已声明形态为淀粉且不存在更具体真实流时，才使用 `Starch` `e5842f16-31b3-4ea4-b16a-f7b06beeb6c3`。

- 选定流：淀粉 `e5842f16-31b3-4ea4-b16a-f7b06beeb6c3`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：归一化后恰为 1 kg 合格销售状态产品
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 kg 已声明参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：方法公式（`method_formula`）
- 来源：`ec-pef-recommendation-2021-2279`

##### 废物流

###### 不合格产品、捕集粉尘和包装废物（`organic_waste_output`）

分别测量各残余物，并区分返工、回收共产品、再生、处理和处置。

- 选定流：待解析的场址特定废物流
- 流属性/单位：Mass / kg
- 数量规则：按残余物和去向实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coproducts_and_wastes`
- 来源：`eu-fdm-bref-2019`; `us-epa-ap42-9-9-7`

##### 基本流

###### 整理颗粒物和燃烧排放（`finishing_air_emission_output`）

使用实测监测或有记录的计算，按污染物记录干燥器和现场燃烧直接排放；捕集物料仍作为废物或回收产品流。

- 选定流：待解析的污染物专用基本流
- 流属性/单位：Mass / kg
- 数量规则：实测，或依据前景监测和燃料记录计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emissions_and_wastewater`
- 来源：`eu-fdm-bref-2019`; `us-epa-ap42-9-9-7`

### 过程：现场残余物与排放管理（`onsite_residuals_management`）

#### 输入

##### 产品流

###### 处理化学品和外部处理用能（`residual_treatment_input`）

记录现场废水、大气排放或残余物处理使用的化学品、电力、蒸汽和燃料。

- 选定流：待解析的物料和能源专用流
- 流属性/单位：Declared property / kg, kWh, MJ, or m3
- 数量规则：实测可归属于产品系统的处理投入
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_direct_emissions_and_wastewater`
- 来源：`eu-fdm-bref-2019`

##### 废物流

###### 接收处理的工艺废水和捕集残余物（`residuals_received_input`）

把实测废水、捕集粉尘、污泥前体、废介质和有机残余物转入相应处理操作，不得重复计数。

- 选定流：与上游输出匹配的内部废物流
- 流属性/单位：Mass or volume / kg or m3
- 数量规则：按物流实测转移数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_direct_emissions_and_wastewater`
- 来源：`eu-fdm-bref-2019`

##### 基本流

#### 输出

##### 产品流

###### 回收沼气、水或物料（`recovered_treatment_output`）

仅在实测且确实内部再用或外供时记录回收输出；内部再用应链接消费过程。

- 选定流：待解析的产品专用回收流
- 流属性/单位：Declared property / kg, m3, kWh, or MJ
- 数量规则：实测回收数量和去向
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coproducts_and_wastes`
- 来源：`eu-fdm-bref-2019`

##### 废物流

###### 处理污泥和废介质（`treatment_waste_output`）

按处理或处置去向测量脱水污泥和废介质。

- 选定流：待解析的场址特定废物流
- 流属性/单位：Mass / kg
- 数量规则：按去向实测湿质量和干固形物
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_direct_emissions_and_wastewater`
- 来源：`eu-fdm-bref-2019`

##### 基本流

###### 处理后出水和残余直接排放（`treated_release_output`）

记录受纳环境、实测排水量、采样污染物负荷以及现场处理产生的其他残余大气排放。

- 选定流：待解析的受纳环境和污染物专用基本流
- 流属性/单位：Mass or volume / kg or m3
- 数量规则：由匹配的实测流量与浓度计算负荷，或直接实测质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emissions_and_wastewater`
- 来源：`eu-fdm-bref-2019`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_rule_1` | 多输出分离、提取和精制 | 首先细分过程和计量边界，使可直接归属于淀粉、面筋、胚芽、纤维、蛋白、浆料、可溶物、菊粉或其他输出的投入和输出保留在相应操作中。 | `ec-pef-recommendation-2021-2279`; `eu-fdm-bref-2019` |
| `allocation_rule_2` | 剩余多功能性 | 无法细分时，先研究系统扩展并记录增加的功能和数据集，然后再采用分配。 | `ec-pef-recommendation-2021-2279` |
| `allocation_rule_3` | 物理分配 | 细分和系统扩展均不可行时，采用反映过程因果关系且有记录的物理关系，例如分别计量的干质量、固形物或其他合理物理驱动；不得只为有利于参考产品而选择驱动。 | `ec-pef-recommendation-2021-2279` |
| `allocation_rule_4` | 经济分配后备方案 | 仅在无法论证相关物理关系时使用经济分配；采用有代表性的价格期，开展敏感性分析，并披露结果和理由。 | `ec-pef-recommendation-2021-2279` |
| `allocation_rule_5` | 共产品和残余物分类 | 不得给可销售共产品分配零负荷，也不得仅为规避分配而把物料归为废物；记录去向、商业状态、干物质和分配处理。 | `eu-fdm-bref-2019`; `eu-feed-materials-catalogue-68-2013` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_product_identity_and_output` | all production processes | 产品身份、中间体和合格输出 | 批次、实验室和生产记录 | product name; product-flow UUID decision; feedstock; modification identity; physical state; lot; wet mass; solids or moisture; purity or grade; release status | 校准秤、实验室方法和批次核对 | kg; mass fraction | 每批，按月汇总 | 有代表性的连续 12 个月或完整生产季 | 生产已声明产品的所有产线 | 汇总合格输出并计算加权组成；返工在放行前不计为产品 | 校准、检测方法、分析证书和放行记录 |
| `cp_materials_and_aids` | `raw_material_receiving`; route processes | 原料、工艺助剂、酶和化学品 | 地磅、发票、储罐、筒仓和领用记录 | material identity; supplier; origin; lot; quantity; unit; moisture or concentration; opening and closing stock; return; destination process | 核对采购、库存移动和过程领用 | kg; m3 | 每次交付或领用，按月汇总 | 与产品输出相同期间 | 所有相关仓储和生产线 | 期初库存 + 收货 - 期末库存 - 有记录退回量；仅按有记录过程驱动分配 | 供应商文件、计量或秤校准及库存核对 |
| `cp_utilities_and_water` | route processes; `product_finishing` | 电力、燃料、蒸汽、新鲜水、循环水和蒸发 | 仪表、公用工程发票、燃料库存和设备记录 | carrier; meter; quantity; unit; operating time; process; fresh or recycled water status; conversion factor | 优先分表；否则采用有记录设备或运行小时分配 | kWh; MJ; kg; m3 | 连续或每班，按月汇总 | 与产品输出相同期间 | 所有生产及相关现场公用工程系统 | 按载能体汇总实测用量；扣除内部转移；分配后归一化 | 仪表校准、发票核对和有记录换算因子 |
| `cp_coproducts_and_wastes` | all production processes | 共产品、返工、废料、捕集粉尘、污泥和废物 | 秤量、发运、转移和废物联单记录 | stream identity; commercial or waste status; wet mass; solids; destination; treatment; price where economic fallback is used | 转移或发运时测量并核对内部返工 | kg; mass fraction | 每次转移，按月汇总 | 与产品输出相同期间 | 所有路线和残余物管理过程 | 按物流和去向汇总；内部返工只在最终放行或废弃时计一次 | 秤校准、发运证据、合同和废物联单 |
| `cp_direct_emissions_and_wastewater` | route processes; `onsite_residuals_management` | 直接大气排放、废水和处理后排放 | 连续或定期监测、实验室、许可和流量记录 | source; pollutant; compartment; concentration; flow; sampling period; control status; wastewater destination; sludge; treatment input and output | 使用适用的经验证监测方法，并从匹配时段的流量和浓度计算负荷 | kg; m3; mg/L; mg/Nm3 | 按监测频次并汇总至生产期 | 与产品输出相同期间；披露采样缺口 | 所有可归属烟囱、排气口、排水口和现场处理 | 汇总实测负荷；有现场监测时不得用 AP-42 因子替代 | 实验室资质、校准、采样计划、许可和监测报告 |
| `cp_packaging` | `product_finishing` | 纳入的包装材料 | 包装领用和产品发运记录 | material; packaging level; issued mass; returned mass; packed product mass; format | 核对包装领用和包装产品输出 | kg | 每次包装运行，按月汇总 | 与包装产品输出相同期间 | 所有纳入的包装线 | 包装净领用量除以包装合格输出 | 供应商规格、库存核对和秤校准 |
| `cp_allocation_basis` | all multi-output processes | 分配决定和驱动 | 仪表、质量平衡、价格和决定记录 | process; outputs; subdivision status; system-expansion option; selected driver; dry mass; physical property; price period; price; sensitivity case | 按第 7 节层级执行并保留未选方案 | kg dry matter; declared driver; currency | 每个报告期及路线变化时 | 与清单相同期间 | 每个多功能过程 | 对全部共同归属投入和输出应用一个一致且有记录的基准 | 过程图、仪表边界、计算工作簿和审阅批准 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_rule_1` | 清单归一化 | 归一化数量 = 报告期流数量 / 报告期合格销售状态产品输出 | 采集的流数量；合格产品输出 | 每 1 kg 参考产品的数量 | `ec-pef-recommendation-2021-2279` |
| `calc_rule_2` | 干物质换算 | 干质量 = 湿质量 × 实测固形物质量分数；同时保留湿质量和干质量 | 湿质量；固形物或含水率结果 | kg 干物质和 kg 湿物流 | `eu-fdm-bref-2019` |
| `calc_rule_3` | 废水和烟气负荷 | 污染物质量 = 匹配浓度 × 实测体积流量，并明确单位及适用的标准状态换算 | 浓度；流量；持续时间；需要时的温度和压力 | 污染物专用质量 | `eu-fdm-bref-2019`; `us-epa-ap42-9-9-7` |
| `calc_rule_4` | 能量换算 | 仅使用有记录的物理换算因子；保留原始仪表读数和载能体身份 | 仪表读数；单位；换算因子 | 报告单位能量及原单位 | `eu-fdm-bref-2019` |
| `calc_rule_5` | 质量核对 | 把进料干物质与产品、共产品、废物、实测排放及有记录库存变化核对；调查而非抹除无法解释的残差 | 干质量投入与输出；库存变化 | 核对说明和未解决残差 | `eu-fdm-bref-2019` |
| `calc_rule_6` | 分配 | 在每个多功能过程执行第 7 节层级，仅在共同归属负荷划分后归一化 | 分表负荷；输出数量；所选驱动；敏感性数据 | 按输出分配的清单 | `ec-pef-recommendation-2021-2279` |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `dq_product_identity` | 参考产品 | 保留具体产品名称、产品流 UUID 决定、原料、路线、改性身份、物理状态、含水率或干物质、等级和包装状态；代表 Starch UUID 不能替代其他形态。 | 产品规格、放行记录、流查找决定和批次元数据 |
| `dq_temporal` | 前景清单 | 使用有代表性的连续 12 个月或完整生产季；披露停机、异常事件及分子与产量期间的任何不匹配。 | 带日期仪表、批次记录、运行日历和核对 |
| `dq_completeness` | 物料和排放 | 覆盖全部已映射过程、公用工程、水、助剂、产品、共产品、废物、废水和直接排放；记录不适用条件过程及未解决质量残差。 | 过程图、完整性检查表、干质量核对和监测清单 |
| `dq_measurement` | 定量记录 | 可用时使用校准仪表和秤；记录估算方法、换算因子、采样、检出限和数据缺口。 | 校准证书、实验室报告、计算文件和缺口登记 |
| `dq_allocation` | 多输出过程 | 保留分配层级决定、过程细分、驱动数据、适用时的价格期及敏感性结果。 | 分配工作簿、仪表图、价格证据和审阅批准 |
| `dq_upstream` | 外购投入 | 识别上游数据集的供应商、地域、技术、参考期和代表性，尤其是植物原料及外购 CPC 23220 中间体。 | 供应商记录、数据集元数据和数据质量评估 |
| `dq_source_provenance` | 全部计算值 | 把每个计算结果链接到原始记录、公式版本、作者和计算日期；不得把外部过程描述当作现场实测。 | 可追溯计算包和来源引用 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validation_rule_1` | 产品身份 | 具体产品形态或必需限定信息缺失时失败；代表 Starch UUID 用于菊粉、小麦面筋、糊精、改性淀粉或已有更具体真实流的产品时失败。 | `un-cpc-3-0-23220` |
| `validation_rule_2` | 参考数量 | 参考输出不是 1 kg 按已声明含水率或干物质基准计的销售状态产品，或没有换算而混用干质量和销售状态质量时失败。 | `ec-pef-recommendation-2021-2279` |
| `validation_rule_3` | 过程覆盖 | 必需过程缺少清单，或条件路线过程既未纳入也未以理由明确标为不适用时失败。 | `eu-fdm-bref-2019`; `us-epa-ap42-9-9-7` |
| `validation_rule_4` | 共产品与分配 | 可销售共产品被隐藏为废物、无理由分配零负荷，或未按分配层级及支撑数据处理时失败。 | `ec-pef-recommendation-2021-2279`; `eu-feed-materials-catalogue-68-2013` |
| `validation_rule_5` | 水、废物和直接排放 | 新鲜水与循环水混合、废水去向缺失、捕集粉尘作为基本排放报告，或遗漏相关实测直接排放时失败。 | `eu-fdm-bref-2019`; `us-epa-ap42-9-9-7` |
| `validation_rule_6` | 数据溯源 | 采集或计算数量无法追溯到采集协议和报告期，或外部过程描述被呈现为场址特定数量时失败。 | `ec-pef-recommendation-2021-2279` |
| `validation_rule_7` | 质量核对 | 要求提供产品、共产品、废物、排放及库存变化之间的干物质核对；未解决残差必须披露和审阅。 | `eu-fdm-bref-2019` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 面向一个已声明 CPC 23220 产品形态和路线的前景制造数据集 |
| downstream_use | `secondary_dataset`；在代表性和不确定性经审阅后可作 `background_dataset` |
| allowed_use | 与已声明产品、路线、地域、期间、分配和工厂大门边界一致的产品专用过程、生命周期模型、热点、供应商和情景研究 |
| excluded_use | 把代表 Starch UUID 自动用于其他形态；未披露地跨原料、改性化学、技术、地域、期间或销售状态替代；没有兼容审阅规则集的比较性声明 |
| required_metadata | 具体产品流 UUID 决定；CPC 引用；产品形态；原料；路线；改性方法和试剂；物理状态；含水率或干物质；等级；地域；期间；技术；包装；系统边界；分配；数据源 |
| required_quality_disclosure | 一手数据比例；仪表和采样覆盖；未解析 UUID；估算值；质量平衡残差；分配敏感性；上游数据集代表性；排除项和数据缺口 |
| update_trigger | 产品流身份变化；出现新的具体天工流；原料或路线变化；改性化学变化；重大过程或控制变化；分配变化；包装变化；重大数据质量提升；报告期更新 |

## 11. 数据源

| 来源 id | 类型 | 引用 | 用途 |
| --- | --- | --- | --- |
| `un-cpc-3-0-23220` | dataset | United Nations Statistics Division, Central Product Classification Version 3.0, subclass 23220, https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/23220（检索于 2026-08-10） | 官方类别范围和代表流限制 |
| `eu-fdm-bref-2019` | official_guidance | European Commission Joint Research Centre, Best Available Techniques Reference Document for the Food, Drink and Milk Industries, JRC118627, 2019, Chapter 14, https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2020-01/JRC118627_FDM_Bref_2019_published.pdf（检索于 2026-08-10） | 淀粉和小麦面筋路线分解、改性、水和能量核算、共产品、废水、干燥和直接排放监测 |
| `us-epa-ap42-9-9-7` | official_guidance | United States Environmental Protection Agency, AP-42 Section 9.9.7 Corn Wet Milling, January 1995, https://www.epa.gov/sites/default/files/2020-10/documents/c9s09-7.pdf（检索于 2026-08-10） | 湿磨过程分解、谷物处理、分离、干燥和候选大气排放源；仅限路线，不作为场址数值来源 |
| `ec-pef-recommendation-2021-2279` | standard | Commission Recommendation (EU) 2021/2279 on the use of the Environmental Footprint methods, corrected 23 May 2022, http://data.europa.eu/eli/reco/2021/2279/oj（检索于 2026-08-10） | 功能单位、参考流归一化、清单完整性、多功能过程层级、数据采集和质量披露 |
| `eu-feed-materials-catalogue-68-2013` | standard | Commission Regulation (EU) No 68/2013 on the Catalogue of feed materials, consolidated text, http://data.europa.eu/eli/reg/2013/68/oj（检索于 2026-08-10） | 菊粉生产共产品身份，包括压榨或干燥菊苣浆、菊苣糖蜜和菊苣酒糟 |
