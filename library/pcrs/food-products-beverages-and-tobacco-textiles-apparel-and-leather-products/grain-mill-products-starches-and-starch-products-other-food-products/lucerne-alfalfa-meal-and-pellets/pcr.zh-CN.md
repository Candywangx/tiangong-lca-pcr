---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.lucerne-alfalfa-meal-and-pellets
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 苜蓿粗粉和团粒

## 1. 范围与适用性

本 PCR 适用于 CPC 23320 下的苜蓿粗粉和苜蓿团粒，产品作为动物饲料原料在生产场址门口放行。粗粉与团粒应建立彼此独立的前景数据包；一个数据包只能声明一种最终形态，不得平均粗粉与团粒路线。

前景边界始于一种已声明状态的苜蓿原料进入场址，止于净合格粗粉或团粒进入散装储存或初级销售包装。数据包应声明来料属于新鲜预萎切碎苜蓿、田间干燥苜蓿或外购脱水苜蓿；若使用人工干燥，应声明准确干燥技术和热源；还应声明粉碎与筛分配置、是否进行蒸汽或液态水调质与制粒，以及放行产品形态。不同原料状态、干燥或制粒技术应形成不同路线；只有前景记录始终可分开追溯且结果分别报告时，才可置于同一数据包中。

覆盖的场内作业包括原料接收、条件性人工干燥、粉碎和筛分、条件性调质与制粒、条件性颗粒冷却和筛分、包装或散装装料、储存与放行、设备清洁、粉尘及残余物管理，以及条件性场内工艺废水处理。种植、收获、田间预萎、田间切碎和入厂运输属于前景边界上游并需采用适当上游数据集；出厂配送、动物采食与消化、零售、包装寿命终止、使用阶段和粪肥管理影响属于下游并排除。

本 PCR 排除未加工成粗粉或团粒的苜蓿青饲料或干草、含非苜蓿饲料原料的混合或配合饲料、宠物食品、谷物粗粉和团粒、苜蓿叶蛋白浓缩物以及烘焙产品。远程天工参考流 `generalComment` 中的“234 Bakery products”被判定为元数据瑕疵，不为本 PCR 提供任何范围、方法、过程或清单内容。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.lucerne-alfalfa-meal-and-pellets |
| classification_refs | CPC 3.0: 23320, exact |
| covered_products | 由已声明状态的苜蓿原料制成的单一苜蓿原料粗粉和苜蓿团粒 |
| excluded_products | 未加工青饲料或干草；混合或配合饲料；宠物食品；谷物粗粉或团粒；叶蛋白浓缩物；烘焙产品 |
| representative_product | 生产场址门口的净可销售苜蓿粗粉或团粒 |
| production_route | 已声明接收状态；条件性人工干燥；粉碎与筛分；粗粉放行，或条件性水/蒸汽调质、制粒、冷却、筛分及放行 |
| market_state | 散装或包装饲料原料，以销售状态计，并声明最终形态、水分、等级、包装配置、场址和生产期 |

产品类别身份由 CPC 23320 的精确名称以及经核验的天工 Product 流、Mass 属性和 kilogram 单位支持共同锁定。冲突的远程 `generalComment` 不用于解释类别。

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 生产满足已声明饲料原料规格的苜蓿粗粉或团粒 |
| How much | 在生产场址门口放行的 1 kg 净合格产品 |
| How well | 满足已声明最终形态、水分、粒度或颗粒尺寸、饲料等级和质量放行规格 |
| How long or cycle | 一个生产批次，或具有路线特定记录的已声明代表性生产期 |
| reference_flow_link | 所有前景交换均以同一路线和期间放行的净粗粉或团粒产品质量归一化 |

| 字段 | 值 |
| --- | --- |
| reference_amount | 1 kg 净产品；不计包装质量 |
| reference_product_flow | Lucerne (alfalfa) meal and pellets `f984b084-e66e-4d11-8365-354ae0ad5a74` |
| reference_flow_property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| reference_unit_group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| reference_unit | kg |
| required_qualifiers | final_product_form; raw_alfalfa_state_at_receipt; drying_technology_or_none; dryer_heat_source_or_none; grinding_and_screen_specification; pelleting_route_or_none; conditioning_medium_or_none; binder_substance_and_mass_or_none; moisture_content_at_release; declared_feed_grade; bulk_or_packaged; packaging_configuration_or_none; production_site; production_period |

构建前景数据包时，应在数据集元数据、过程说明、参考流备注、产品说明或等效字段中声明 `必需限定信息` 的每一项。若实际使用或释放了本 PCR 未列出的粘结剂、清洁化学品、水处理药剂、燃料、包装组件、废物或排放，生产者应先新增一张只命名该单一准确物质或物理流的卡片，数据包方可符合要求；不得使用通用选择器。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 使用放行时经核验的净合格产品质量；排除袋、内衬、薄膜和托盘质量。 |
| `as_sold_moisture_basis` | 参考产品和苜蓿中间物料 | Mass | kg | 按销售状态质量报告参考产品，并单独记录水分及测试方法；不得静默换算为干物质。 |
| `route_separated_normalization` | 全部清单行 | 行对应属性 | 行对应单位 | 每项交换应归一化到相同来料状态、干燥、粉碎、最终形态和包装路线的净产出；不得平均不同技术或粗粉与团粒路线。 |
| `stage_energy_preservation` | 电力、热、蒸汽和燃料 | 按计量记录的 Energy 或 Mass | kWh, MJ, or kg | 在换算至参考千克前，保留阶段计量或发票单位、换算因子、低位或高位热值约定和分配依据。 |
| `water_steam_separation` | 调质水、外购蒸汽、外购热水和清洁水 | Mass or Energy | kg or MJ | 液态水、蒸汽和热水分别记录；冷凝水或循环水跨越过程边界时另行记录。 |
| `internal_recycle_identity` | 回收粉尘、粗筛下物和颗粒细粉 | Mass | kg | 每种回收物在返回前计量；内部回流不是可销售共产品，不得同时作为废物和产品重复计数。 |
| `pollutant_load_calculation` | 空气与水排放 | Mass | kg | 使用实测质量流量与浓度，或场址特定活动记录及适用因子计算污染物质量；保留测量/因子身份和环境介质。 |
| `mass_balance_check` | 每个过程和完整前景路线 | Mass | kg | 核对已测物料投入、产品和内部转移产出、水分变化、回收物、废物及释放；不得为使残差归零而强行调整。 |

本 PCR 中任何来源示例值均不是默认数量、允许区间或前景记录的替代品。

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 新鲜预萎切碎苜蓿、田间干燥苜蓿或外购脱水苜蓿到达场址门口，并记录状态、水分、来源、供应商和批次身份 |
| starting_condition_role | 路线特定粗粉或团粒生产数据包的前景进入点 |
| product_classification_scope | 仅 CPC 23320 苜蓿粗粉和团粒 |
| recursive_input_rule | 已符合 CPC 23320 的外购苜蓿粗粉或团粒不得隐藏在同一前景路线内；应披露数量和供应商数据集，并作为上游投入建模，或建立边界独立的来料加工数据包 |
| upstream_dataset_requirement | 苜蓿种植与田间作业、外购预干或脱水苜蓿、燃料、公用工程、准确添加物及包装材料均采用可追溯上游数据集 |
| disclosure | 声明苜蓿接收状态、人工干燥技术和热源、粉碎/筛网设置、粗粉或团粒形态、调质介质、每种实际粘结剂或无粘结剂、内部回流、散装或包装配置、场址、期间及全部边界排除项 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_identity` | 产品类别 | 只纳入精确 CPC 23320 产品；拒绝任何烘焙语义，不把类别扩大至混合饲料制品。 | `un-cpc-3-2025` |
| `boundary_foreground_start` | 原料供应 | 前景采集从场址接收开始；种植、收获、田间预萎/切碎和入厂运输属于上游，但需披露背景数据集。 | `us-epa-ap42-alfalfa-1996`; `eu-pef-2021-2279` |
| `boundary_route_lock` | 前景路线 | 锁定一种接收物料状态、人工干燥技术或无干燥、粉碎/筛分配置、制粒路线或无制粒及最终形态；实质不同路线分别报告。 | `us-epa-ap42-alfalfa-1996`; `eu-fdm-bat-2019`; `eu-pef-2021-2279` |
| `boundary_factory_operations` | 制造 | 纳入从接收到放行的全部场内作业，包括公用工程、粉尘回收、清洁、废物、直接排放及条件性场内废水处理。 | `eu-jrc-fdm-bref-2019`; `eu-fdm-bat-2019`; `fefac-pefcr-feed-data-2021` |
| `boundary_downstream_exclusion` | 下游阶段 | 将出厂配送、动物采食与消化、粪肥管理、零售、使用及包装寿命终止排除在前景结果外并披露。 | `fefac-pefcr-feed-data-2021`; `eu-pef-2021-2279` |
| `boundary_no_cutoff_by_label` | 清单完整性 | 不得因缺少天工 UUID 或数量较小而省略实际交换；保留一个准确语义流、UUID 留空，并记录未决身份。 | `eu-pef-2021-2279` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `raw_material_receiving` | 原料接收与检验 | required | 始终纳入；每批仅启用与实际接收苜蓿状态一致的卡片 | 前景原料接收和批次身份 | 按状态和批次计量的接收质量 |
| `thermal_drying` | 人工热干燥与一次粉尘回收 | conditional | 场址对新鲜、预萎、田间干燥或部分干燥苜蓿进行人工干燥时纳入 | 前景除水和干燥器排放 | 离开干燥系统的干苜蓿碎料质量 |
| `grinding_and_sieving` | 粉碎、气力输送与筛分 | required | 粗粉和团粒路线均始终纳入 | 前景粒度减小与分离 | 苜蓿粗粉产出质量 |
| `steam_conditioning_and_pelleting` | 调质与制粒 | conditional | 仅团粒路线纳入；只有实际使用的物质才新增准确粘结剂卡 | 前景颗粒成型 | 离开制粒机的热颗粒质量 |
| `pellet_cooling_and_screening` | 颗粒冷却与最终筛分 | conditional | 团粒在放行前进行冷却或筛分时纳入 | 前景颗粒稳定与细粉分离 | 冷却筛分颗粒质量 |
| `packaging_storage_and_release` | 包装或散装装料、储存与放行 | required | 始终纳入；只启用实际包装组件卡 | 前景最终产品放行 | 1 kg 净合格粗粉或团粒 |
| `cleaning_and_maintenance` | 设备清洁与过滤器维护 | required | 始终纳入干式清洁和维护记录；仅使用液体时适用湿式清洁卡 | 前景内务与残余物收集 | 与参考产出相同的路线和生产期 |
| `onsite_wastewater_treatment` | 场内工艺废水处理 | conditional | 苜蓿工艺废水在排放或转移前于场内处理时纳入 | 前景出水处理与释放 | 处理废水体积 |

### 过程：人工热干燥与一次粉尘回收（`thermal_drying`）

#### 输入

##### 产品流

###### 干燥：电网电力（`drying_electricity`）

记录人工热干燥与一次粉尘回收实际使用的单一输入“电网电力”。仅在声明路线实际使用该流时启用，不得与其他物质、能源或载体合并。

- 选定流：Electricity, grid
- 流属性/单位：Energy / kWh
- 数量规则：使用该阶段分表记录，或依据场址电表和有记录的设备负荷时间进行分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 离开已声明干燥器的干苜蓿碎料
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_drying_records`
- 来源：`us-epa-ap42-alfalfa-1996`; `eu-fdm-bat-2019`; `fefac-pefcr-feed-data-2021`

###### 干燥：外购蒸汽（`drying_purchased_steam`）

记录人工热干燥与一次粉尘回收实际使用的单一输入“外购蒸汽”。仅在声明路线实际使用该流时启用，不得与其他物质、能源或载体合并。

- 选定流：Purchased steam
- 流属性/单位：Energy / MJ
- 数量规则：以实测蒸汽质量、压力、焓及冷凝水返回状态计算交付蒸汽能量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 离开已声明干燥器的干苜蓿碎料
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_drying_records`
- 来源：`eu-jrc-fdm-bref-2019`; `eu-pef-2021-2279`

###### 干燥：外购热水（`drying_purchased_hot_water`）

记录人工热干燥与一次粉尘回收实际使用的单一输入“外购热水”。仅在声明路线实际使用该流时启用，不得与其他物质、能源或载体合并。

- 选定流：Purchased hot water
- 流属性/单位：Energy / MJ
- 数量规则：实测热水质量流量乘以有记录的入口至回水焓差
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 离开已声明干燥器的干苜蓿碎料
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_drying_records`
- 来源：`eu-jrc-fdm-bref-2019`; `eu-pef-2021-2279`

###### 干燥：天然气（`drying_natural_gas`）

记录人工热干燥与一次粉尘回收实际使用的单一输入“天然气”。仅在声明路线实际使用该流时启用，不得与其他物质、能源或载体合并。

- 选定流：Natural gas
- 流属性/单位：Net calorific energy / MJ
- 数量规则：使用供应商组分、压力、温度和声明低位热值约定换算实测燃气体积
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 离开已声明干燥器的干苜蓿碎料
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_drying_records`
- 来源：`us-epa-ap42-alfalfa-1996`; `eu-pef-2021-2279`

###### 干燥：柴油（`drying_diesel`）

记录人工热干燥与一次粉尘回收实际使用的单一输入“柴油”。仅在声明路线实际使用该流时启用，不得与其他物质、能源或载体合并。

- 选定流：Diesel fuel
- 流属性/单位：Mass / kg
- 数量规则：使用归属于该过程和期间的燃料表、校准储罐平衡、称量交付或采购与库存记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 离开已声明干燥器的干苜蓿碎料
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_drying_records`
- 来源：`eu-pef-2021-2279`

###### 干燥：液化石油气（`drying_lpg`）

记录人工热干燥与一次粉尘回收实际使用的单一输入“液化石油气”。仅在声明路线实际使用该流时启用，不得与其他物质、能源或载体合并。

- 选定流：Liquefied petroleum gas
- 流属性/单位：Mass / kg
- 数量规则：使用归属于该过程和期间的燃料表、校准储罐平衡、称量交付或采购与库存记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 离开已声明干燥器的干苜蓿碎料
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_drying_records`
- 来源：`eu-pef-2021-2279`

###### 干燥：硬煤（`drying_hard_coal`）

记录人工热干燥与一次粉尘回收实际使用的单一输入“硬煤”。仅在声明路线实际使用该流时启用，不得与其他物质、能源或载体合并。

- 选定流：Hard coal
- 流属性/单位：Mass / kg
- 数量规则：使用归属于该过程和期间的燃料表、校准储罐平衡、称量交付或采购与库存记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 离开已声明干燥器的干苜蓿碎料
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_drying_records`
- 来源：`us-epa-ap42-alfalfa-1996`; `eu-pef-2021-2279`

###### 干燥：木片（`drying_wood_chips`）

记录人工热干燥与一次粉尘回收实际使用的单一输入“木片”。仅在声明路线实际使用该流时启用，不得与其他物质、能源或载体合并。

- 选定流：Wood chips
- 流属性/单位：Mass / kg
- 数量规则：使用归属于该过程和期间的燃料表、校准储罐平衡、称量交付或采购与库存记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 离开已声明干燥器的干苜蓿碎料
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_drying_records`
- 来源：`us-epa-ap42-alfalfa-1996`; `eu-pef-2021-2279`

###### 干燥：回收苜蓿干燥器尾气热（`drying_recovered_exhaust_heat`）

记录人工热干燥与一次粉尘回收实际使用的单一输入“回收苜蓿干燥器尾气热”。仅在声明路线实际使用该流时启用，不得与其他物质、能源或载体合并。

- 选定流：Recovered alfalfa-dryer exhaust heat
- 流属性/单位：Energy / MJ
- 数量规则：根据实测气体或二次流体流量、入口与出口状态及有记录的热容计算回收热
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 离开已声明干燥器的干苜蓿碎料
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_drying_records`
- 来源：`eu-fdm-bat-2019`

##### 废物流

本过程不规定废物流输入。

##### 基本流

本过程不规定基本流输入。

#### 输出

##### 基本流

###### 干燥：向空气排放的化石二氧化碳（`drying_fossil_co2`）

记录人工热干燥与一次粉尘回收向空气释放的单一基本流“向空气排放的化石二氧化碳”。采用物种或粒径专属负荷，不得与其他污染物或粒径组分合并。

- 选定流：Carbon dioxide, fossil, to air
- 流属性/单位：Mass / kg
- 数量规则：根据实测化石燃料消耗、供应商碳含量或有记录的适用因子及氧化证据计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 离开已声明干燥器的干苜蓿碎料
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_drying_records`
- 来源：`eu-pef-2021-2279`

###### 干燥：向空气排放的生物源二氧化碳（`drying_biogenic_co2`）

记录人工热干燥与一次粉尘回收向空气释放的单一基本流“向空气排放的生物源二氧化碳”。采用物种或粒径专属负荷，不得与其他污染物或粒径组分合并。

- 选定流：Carbon dioxide, biogenic, to air
- 流属性/单位：Mass / kg
- 数量规则：根据实测木片消耗、有记录的干物质碳含量及氧化证据计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 离开已声明干燥器的干苜蓿碎料
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_drying_records`
- 来源：`eu-pef-2021-2279`

###### 干燥：向空气排放的化石甲烷（`drying_fossil_methane`）

记录人工热干燥与一次粉尘回收向空气释放的单一基本流“向空气排放的化石甲烷”。采用物种或粒径专属负荷，不得与其他污染物或粒径组分合并。

- 选定流：Methane, fossil, to air
- 流属性/单位：Mass / kg
- 数量规则：采用同一期间的实测排放负荷；无代表性实测值时，以实际活动数据和有记录的物种专属、技术专属因子计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 离开已声明干燥器的干苜蓿碎料
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_drying_records`
- 来源：`eu-pef-2021-2279`

###### 干燥：向空气排放的一氧化二氮（`drying_nitrous_oxide`）

记录人工热干燥与一次粉尘回收向空气释放的单一基本流“向空气排放的一氧化二氮”。采用物种或粒径专属负荷，不得与其他污染物或粒径组分合并。

- 选定流：Dinitrogen monoxide, to air
- 流属性/单位：Mass / kg
- 数量规则：采用同一期间的实测排放负荷；无代表性实测值时，以实际活动数据和有记录的物种专属、技术专属因子计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 离开已声明干燥器的干苜蓿碎料
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_drying_records`
- 来源：`eu-pef-2021-2279`

###### 干燥：向空气排放的一氧化碳（`drying_carbon_monoxide`）

记录人工热干燥与一次粉尘回收向空气释放的单一基本流“向空气排放的一氧化碳”。采用物种或粒径专属负荷，不得与其他污染物或粒径组分合并。

- 选定流：Carbon monoxide, to air
- 流属性/单位：Mass / kg
- 数量规则：采用同一期间的实测排放负荷；无代表性实测值时，以实际活动数据和有记录的物种专属、技术专属因子计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 离开已声明干燥器的干苜蓿碎料
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_drying_records`
- 来源：`eu-fdm-bat-2019`; `eu-pef-2021-2279`


###### 干燥：向空气排放的一氧化氮（`drying_nitric_oxide`）

记录人工热干燥与一次粉尘回收向空气释放的单一基本流“向空气排放的一氧化氮”。采用物种或粒径专属负荷，不得与其他污染物或粒径组分合并。

- 选定流：Nitric oxide, to air
- 流属性/单位：Mass / kg
- 数量规则：采用同一期间的实测排放负荷；无代表性实测值时，以实际活动数据和有记录的物种专属、技术专属因子计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 离开已声明干燥器的干苜蓿碎料
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_drying_records`
- 来源：`eu-fdm-bat-2019`; `eu-pef-2021-2279`

###### 干燥：向空气排放的二氧化氮（`drying_nitrogen_dioxide`）

记录人工热干燥与一次粉尘回收向空气释放的单一基本流“向空气排放的二氧化氮”。采用物种或粒径专属负荷，不得与其他污染物或粒径组分合并。

- 选定流：Nitrogen dioxide, to air
- 流属性/单位：Mass / kg
- 数量规则：采用同一期间的实测排放负荷；无代表性实测值时，以实际活动数据和有记录的物种专属、技术专属因子计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 离开已声明干燥器的干苜蓿碎料
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_drying_records`
- 来源：`eu-fdm-bat-2019`; `eu-pef-2021-2279`

###### 干燥：向空气排放的二氧化硫（`drying_sulfur_dioxide`）

记录人工热干燥与一次粉尘回收向空气释放的单一基本流“向空气排放的二氧化硫”。采用物种或粒径专属负荷，不得与其他污染物或粒径组分合并。

- 选定流：Sulfur dioxide, to air
- 流属性/单位：Mass / kg
- 数量规则：采用实测烟囱负荷，或由实测燃料质量、硫含量、保留率和有记录的氧化约定计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 离开已声明干燥器的干苜蓿碎料
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_drying_records`
- 来源：`eu-fdm-bat-2019`; `eu-pef-2021-2279`

###### 干燥：向空气排放的粒径低于 2.5 µm 颗粒物（`drying_pm25`）

记录人工热干燥与一次粉尘回收向空气释放的单一基本流“向空气排放的粒径低于 2.5 µm 颗粒物”。采用物种或粒径专属负荷，不得与其他污染物或粒径组分合并。

- 选定流：Particulate matter, diameter below 2.5 µm, to air
- 流属性/单位：Mass / kg
- 数量规则：根据该过程有组织排放与有记录的无组织排放实测数据计算该非重叠粒径组分质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 离开已声明干燥器的干苜蓿碎料
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_drying_records`
- 来源：`us-epa-ap42-alfalfa-1996`; `eu-fdm-bat-2019`

###### 干燥：向空气排放的粒径 2.5–10 µm 颗粒物（`drying_pm_coarse`）

记录人工热干燥与一次粉尘回收向空气释放的单一基本流“向空气排放的粒径 2.5–10 µm 颗粒物”。采用物种或粒径专属负荷，不得与其他污染物或粒径组分合并。

- 选定流：Particulate matter, diameter 2.5–10 µm, to air
- 流属性/单位：Mass / kg
- 数量规则：根据该过程有组织排放与有记录的无组织排放实测数据计算该非重叠粒径组分质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 离开已声明干燥器的干苜蓿碎料
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_drying_records`
- 来源：`us-epa-ap42-alfalfa-1996`; `eu-fdm-bat-2019`

#### 输出

##### 产品流

###### 干燥：干苜蓿碎料（`drying_dried_alfalfa_chops`）

记录人工热干燥与一次粉尘回收产生的单一产品或内部转移流“干苜蓿碎料”。按批次和实际去向分别计量，并与该过程投入、回收、废物和库存变化核对。

- 选定流：Dried lucerne (alfalfa) chops
- 流属性/单位：Mass / kg
- 数量规则：依据同一期间的实测活动数据和有记录的换算关系计算该单一交换，并保留全部输入参数
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 离开已声明干燥器的干苜蓿碎料
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_drying_records`
- 来源：`us-epa-ap42-alfalfa-1996`

###### 干燥：回收苜蓿干燥粉尘（`drying_recovered_alfalfa_dust`）

记录人工热干燥与一次粉尘回收产生的单一产品或内部转移流“回收苜蓿干燥粉尘”。按批次和实际去向分别计量，并与该过程投入、回收、废物和库存变化核对。

- 选定流：Recovered lucerne (alfalfa) dryer dust
- 流属性/单位：Mass / kg
- 数量规则：使用校准秤、流量计、批次记录或可核对的采购与库存记录实测该单一交换，并与同一过程质量平衡核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 离开已声明干燥器的干苜蓿碎料
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_drying_records`
- 来源：`us-epa-ap42-alfalfa-1996`; `eu-fdm-bat-2019`

##### 废物流

###### 干燥：废弃苜蓿干燥粉尘（`drying_discarded_alfalfa_dust`）

记录人工热干燥与一次粉尘回收产生的单一废物流“废弃苜蓿干燥粉尘”。按实际质量或体积、状态和去向分别计量，不得与其他废物合并。

- 选定流：Discarded lucerne (alfalfa) dryer dust
- 流属性/单位：Mass / kg
- 数量规则：按产生事件或批次实测该单一废物流质量或体积，并记录水分或固体分数（如适用）及实际去向
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 离开已声明干燥器的干苜蓿碎料
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_drying_records`
- 来源：`us-epa-ap42-alfalfa-1996`; `eu-pef-2021-2279`

###### 干燥：燃煤灰（`drying_coal_ash`）

记录人工热干燥与一次粉尘回收产生的单一废物流“燃煤灰”。按实际质量或体积、状态和去向分别计量，不得与其他废物合并。

- 选定流：Coal combustion ash
- 流属性/单位：Mass / kg
- 数量规则：按产生事件或批次实测该单一废物流质量或体积，并记录水分或固体分数（如适用）及实际去向
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 离开已声明干燥器的干苜蓿碎料
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_drying_records`
- 来源：`us-epa-ap42-alfalfa-1996`; `eu-pef-2021-2279`

###### 干燥：木材燃烧灰（`drying_wood_ash`）

记录人工热干燥与一次粉尘回收产生的单一废物流“木材燃烧灰”。按实际质量或体积、状态和去向分别计量，不得与其他废物合并。

- 选定流：Wood combustion ash
- 流属性/单位：Mass / kg
- 数量规则：按产生事件或批次实测该单一废物流质量或体积，并记录水分或固体分数（如适用）及实际去向
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 离开已声明干燥器的干苜蓿碎料
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_drying_records`
- 来源：`us-epa-ap42-alfalfa-1996`; `eu-pef-2021-2279`

##### 基本流

除上述按物种和粒径分别列示的基本流外，本过程不规定其他基本流输出。

### 过程：粉碎、气力输送与筛分（`grinding_and_sieving`）

#### 输入

##### 产品流

###### 粉碎筛分：电网电力（`grinding_electricity`）

记录粉碎、气力输送与筛分实际使用的单一输入“电网电力”。仅在声明路线实际使用该流时启用，不得与其他物质、能源或载体合并。

- 选定流：Electricity, grid
- 流属性/单位：Energy / kWh
- 数量规则：使用该阶段分表记录，或依据场址电表和有记录的设备负荷时间进行分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 离开粉碎筛分过程的苜蓿粗粉
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_grinding_records`
- 来源：`us-epa-ap42-alfalfa-1996`; `eu-fdm-bat-2019`; `fefac-pefcr-feed-data-2021`

###### 粉碎筛分：压缩空气（`grinding_compressed_air`）

记录粉碎、气力输送与筛分实际使用的单一输入“压缩空气”。仅在声明路线实际使用该流时启用，不得与其他物质、能源或载体合并。

- 选定流：Compressed air
- 流属性/单位：Volume / Nm3
- 数量规则：使用标准状态体积计量，或依据记录的压缩机输出与该阶段需求计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 离开粉碎筛分过程的苜蓿粗粉
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_grinding_records`
- 来源：`eu-jrc-fdm-bref-2019`; `eu-pef-2021-2279`

##### 废物流

本过程不规定废物流输入。

##### 基本流

本过程不规定基本流输入。

#### 输出

##### 产品流

###### 粉碎筛分：苜蓿粗粉（`grinding_alfalfa_meal`）

记录粉碎、气力输送与筛分产生的单一产品或内部转移流“苜蓿粗粉”。按批次和实际去向分别计量，并与该过程投入、回收、废物和库存变化核对。

- 选定流：Lucerne (alfalfa) meal
- 流属性/单位：Mass / kg
- 数量规则：依据同一期间的实测活动数据和有记录的换算关系计算该单一交换，并保留全部输入参数
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 离开粉碎筛分过程的苜蓿粗粉
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_grinding_records`
- 来源：`us-epa-ap42-alfalfa-1996`

###### 粉碎筛分：苜蓿粗筛物（`grinding_coarse_screenings`）

记录粉碎、气力输送与筛分产生的单一产品或内部转移流“苜蓿粗筛物”。按批次和实际去向分别计量，并与该过程投入、回收、废物和库存变化核对。

- 选定流：Coarse lucerne (alfalfa) screenings
- 流属性/单位：Mass / kg
- 数量规则：使用校准秤、流量计、批次记录或可核对的采购与库存记录实测该单一交换，并与同一过程质量平衡核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 离开粉碎筛分过程的苜蓿粗粉
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_grinding_records`
- 来源：`us-epa-ap42-alfalfa-1996`; `fao-feed-milling`

###### 粉碎筛分：回收苜蓿粉碎粉尘（`grinding_recovered_dust`）

记录粉碎、气力输送与筛分产生的单一产品或内部转移流“回收苜蓿粉碎粉尘”。按批次和实际去向分别计量，并与该过程投入、回收、废物和库存变化核对。

- 选定流：Recovered lucerne (alfalfa) grinding dust
- 流属性/单位：Mass / kg
- 数量规则：使用校准秤、流量计、批次记录或可核对的采购与库存记录实测该单一交换，并与同一过程质量平衡核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 离开粉碎筛分过程的苜蓿粗粉
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_grinding_records`
- 来源：`us-epa-ap42-alfalfa-1996`; `eu-fdm-bat-2019`

##### 废物流

###### 粉碎筛分：废弃苜蓿粉碎粉尘（`grinding_discarded_dust`）

记录粉碎、气力输送与筛分产生的单一废物流“废弃苜蓿粉碎粉尘”。按实际质量或体积、状态和去向分别计量，不得与其他废物合并。

- 选定流：Discarded lucerne (alfalfa) grinding dust
- 流属性/单位：Mass / kg
- 数量规则：按产生事件或批次实测该单一废物流质量或体积，并记录水分或固体分数（如适用）及实际去向
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 离开粉碎筛分过程的苜蓿粗粉
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_grinding_records`
- 来源：`us-epa-ap42-alfalfa-1996`; `eu-pef-2021-2279`

##### 基本流

###### 粉碎筛分：向空气排放的粒径低于 2.5 µm 颗粒物（`grinding_pm25`）

记录粉碎、气力输送与筛分向空气释放的单一基本流“向空气排放的粒径低于 2.5 µm 颗粒物”。采用物种或粒径专属负荷，不得与其他污染物或粒径组分合并。

- 选定流：Particulate matter, diameter below 2.5 µm, to air
- 流属性/单位：Mass / kg
- 数量规则：根据该过程有组织排放与有记录的无组织排放实测数据计算该非重叠粒径组分质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 离开粉碎筛分过程的苜蓿粗粉
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_grinding_records`
- 来源：`us-epa-ap42-alfalfa-1996`; `eu-fdm-bat-2019`

###### 粉碎筛分：向空气排放的粒径 2.5–10 µm 颗粒物（`grinding_pm_coarse`）

记录粉碎、气力输送与筛分向空气释放的单一基本流“向空气排放的粒径 2.5–10 µm 颗粒物”。采用物种或粒径专属负荷，不得与其他污染物或粒径组分合并。

- 选定流：Particulate matter, diameter 2.5–10 µm, to air
- 流属性/单位：Mass / kg
- 数量规则：根据该过程有组织排放与有记录的无组织排放实测数据计算该非重叠粒径组分质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 离开粉碎筛分过程的苜蓿粗粉
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_grinding_records`
- 来源：`us-epa-ap42-alfalfa-1996`; `eu-fdm-bat-2019`

### 过程：原料接收与检验（`raw_material_receiving`）

#### 输入

##### 产品流

###### 接收：新鲜预萎切碎苜蓿（`receiving_fresh_wilted_alfalfa`）

记录原料接收与检验实际使用的单一输入“新鲜预萎切碎苜蓿”。仅在声明路线实际使用该流时启用，不得与其他物质、能源或载体合并。

- 选定流：Fresh wilted lucerne (alfalfa), chopped
- 流属性/单位：Mass / kg
- 数量规则：使用校准秤、流量计、批次记录或可核对的采购与库存记录实测该单一交换，并与同一过程质量平衡核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：同一原料状态路线和期间每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receiving_records`
- 来源：`us-epa-ap42-alfalfa-1996`; `eu-pef-2021-2279`

###### 接收：田间干燥苜蓿（`receiving_field_dried_alfalfa`）

记录原料接收与检验实际使用的单一输入“田间干燥苜蓿”。仅在声明路线实际使用该流时启用，不得与其他物质、能源或载体合并。

- 选定流：Field-dried lucerne (alfalfa)
- 流属性/单位：Mass / kg
- 数量规则：使用校准秤、流量计、批次记录或可核对的采购与库存记录实测该单一交换，并与同一过程质量平衡核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：同一原料状态路线和期间每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receiving_records`
- 来源：`eu-fdm-bat-2019`; `eu-pef-2021-2279`

###### 接收：外购脱水苜蓿（`receiving_dehydrated_alfalfa`）

记录原料接收与检验实际使用的单一输入“外购脱水苜蓿”。仅在声明路线实际使用该流时启用，不得与其他物质、能源或载体合并。

- 选定流：Purchased dehydrated lucerne (alfalfa)
- 流属性/单位：Mass / kg
- 数量规则：使用校准秤、流量计、批次记录或可核对的采购与库存记录实测该单一交换，并与同一过程质量平衡核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：同一外购脱水苜蓿路线和期间每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receiving_records`
- 来源：`us-epa-ap42-alfalfa-1996`; `eu-pef-2021-2279`

###### 接收：电网电力（`receiving_electricity`）

记录原料接收与检验实际使用的单一输入“电网电力”。仅在声明路线实际使用该流时启用，不得与其他物质、能源或载体合并。

- 选定流：Electricity, grid
- 流属性/单位：Energy / kWh
- 数量规则：使用该阶段分表记录，或依据场址电表和有记录的设备负荷时间进行分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：同一路线和期间每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receiving_records`
- 来源：`fefac-pefcr-feed-data-2021`; `eu-pef-2021-2279`

###### 接收：柴油（`receiving_diesel`）

记录原料接收与检验实际使用的单一输入“柴油”。仅在声明路线实际使用该流时启用，不得与其他物质、能源或载体合并。

- 选定流：Diesel fuel
- 流属性/单位：Mass / kg
- 数量规则：使用归属于该过程和期间的燃料表、校准储罐平衡、称量交付或采购与库存记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：同一路线和期间每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receiving_records`
- 来源：`eu-pef-2021-2279`

##### 废物流

本过程不规定废物流输入。

##### 基本流

本过程不规定基本流输入。

#### 输出

##### 产品流

本过程不规定产品流输出。

##### 废物流

###### 接收：拒收新鲜苜蓿（`receiving_rejected_fresh_alfalfa`）

记录原料接收与检验产生的单一废物流“拒收新鲜苜蓿”。按实际质量或体积、状态和去向分别计量，不得与其他废物合并。

- 选定流：Rejected fresh lucerne (alfalfa)
- 流属性/单位：Mass / kg
- 数量规则：按产生事件或批次实测该单一废物流质量或体积，并记录水分或固体分数（如适用）及实际去向
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：同一原料状态路线和期间每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receiving_records`
- 来源：`eu-pef-2021-2279`

###### 接收：拒收干苜蓿（`receiving_rejected_dried_alfalfa`）

记录原料接收与检验产生的单一废物流“拒收干苜蓿”。按实际质量或体积、状态和去向分别计量，不得与其他废物合并。

- 选定流：Rejected dried lucerne (alfalfa)
- 流属性/单位：Mass / kg
- 数量规则：按产生事件或批次实测该单一废物流质量或体积，并记录水分或固体分数（如适用）及实际去向
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：同一原料状态路线和期间每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receiving_records`
- 来源：`eu-pef-2021-2279`

###### 接收：接收苜蓿中分离的土壤（`receiving_removed_soil`）

记录原料接收与检验产生的单一废物流“接收苜蓿中分离的土壤”。按实际质量或体积、状态和去向分别计量，不得与其他废物合并。

- 选定流：Soil removed from received lucerne (alfalfa)
- 流属性/单位：Mass / kg
- 数量规则：按产生事件或批次实测该单一废物流质量或体积，并记录水分或固体分数（如适用）及实际去向
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：同一路线和期间每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receiving_records`
- 来源：`eu-pef-2021-2279`

###### 接收：接收苜蓿中分离的石块（`receiving_removed_stones`）

记录原料接收与检验产生的单一废物流“接收苜蓿中分离的石块”。按实际质量或体积、状态和去向分别计量，不得与其他废物合并。

- 选定流：Stones removed from received lucerne (alfalfa)
- 流属性/单位：Mass / kg
- 数量规则：按产生事件或批次实测该单一废物流质量或体积，并记录水分或固体分数（如适用）及实际去向
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：同一路线和期间每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receiving_records`
- 来源：`eu-pef-2021-2279`

##### 基本流

###### 接收：向空气排放的粒径低于 2.5 µm 颗粒物（`receiving_pm25_to_air`）

记录原料接收与检验向空气释放的单一基本流“向空气排放的粒径低于 2.5 µm 颗粒物”。采用物种或粒径专属负荷，不得与其他污染物或粒径组分合并。

- 选定流：Particulate matter, diameter below 2.5 µm, to air
- 流属性/单位：Mass / kg
- 数量规则：根据该过程有组织排放与有记录的无组织排放实测数据计算该非重叠粒径组分质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：同一路线和期间每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_receiving_records`
- 来源：`us-epa-ap42-alfalfa-1996`; `eu-pef-2021-2279`

###### 接收：向空气排放的粒径 2.5–10 µm 颗粒物（`receiving_pm_coarse_to_air`）

记录原料接收与检验向空气释放的单一基本流“向空气排放的粒径 2.5–10 µm 颗粒物”。采用物种或粒径专属负荷，不得与其他污染物或粒径组分合并。

- 选定流：Particulate matter, diameter 2.5–10 µm, to air
- 流属性/单位：Mass / kg
- 数量规则：根据该过程有组织排放与有记录的无组织排放实测数据计算该非重叠粒径组分质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：同一路线和期间每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_receiving_records`
- 来源：`us-epa-ap42-alfalfa-1996`; `eu-pef-2021-2279`

### 过程：调质与制粒（`steam_conditioning_and_pelleting`）

#### 输入

##### 产品流

###### 调质制粒：苜蓿粗粉（`pelleting_alfalfa_meal`）

记录调质与制粒实际使用的单一输入“苜蓿粗粉”。仅在声明路线实际使用该流时启用，不得与其他物质、能源或载体合并。

- 选定流：Lucerne (alfalfa) meal
- 流属性/单位：Mass / kg
- 数量规则：使用校准秤、流量计、批次记录或可核对的采购与库存记录实测该单一交换，并与同一过程质量平衡核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 离开制粒机的热苜蓿团粒
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pelleting_records`
- 来源：`us-epa-ap42-alfalfa-1996`; `fao-feed-milling`

###### 调质制粒：调质水（`pelleting_conditioning_water`）

记录调质与制粒实际使用的单一输入“调质水”。仅在声明路线实际使用该流时启用，不得与其他物质、能源或载体合并。

- 选定流：Conditioning water
- 流属性/单位：Mass / kg
- 数量规则：使用校准水表或按事件和批次计量该单一液态水投入
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 离开制粒机的热苜蓿团粒
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pelleting_records`
- 来源：`fao-feed-milling`; `eu-pef-2021-2279`

###### 调质制粒：外购蒸汽（`pelleting_purchased_steam`）

记录调质与制粒实际使用的单一输入“外购蒸汽”。仅在声明路线实际使用该流时启用，不得与其他物质、能源或载体合并。

- 选定流：Purchased steam
- 流属性/单位：Energy / MJ
- 数量规则：根据实测蒸汽质量、压力、温度和冷凝水状态计算交付蒸汽能量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 离开制粒机的热苜蓿团粒
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_pelleting_records`
- 来源：`us-epa-ap42-alfalfa-1996`; `fao-feed-milling`

###### 调质制粒：电网电力（`pelleting_electricity`）

记录调质与制粒实际使用的单一输入“电网电力”。仅在声明路线实际使用该流时启用，不得与其他物质、能源或载体合并。

- 选定流：Electricity, grid
- 流属性/单位：Energy / kWh
- 数量规则：使用该阶段分表记录，或依据场址电表和有记录的设备负荷时间进行分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 离开制粒机的热苜蓿团粒
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pelleting_records`
- 来源：`fao-feed-milling`; `fefac-pefcr-feed-data-2021`

##### 废物流

本过程不规定废物流输入。

##### 基本流

本过程不规定基本流输入。

#### 输出

##### 产品流

###### 调质制粒：热苜蓿团粒（`pelleting_hot_alfalfa_pellets`）

记录调质与制粒产生的单一产品或内部转移流“热苜蓿团粒”。按批次和实际去向分别计量，并与该过程投入、回收、废物和库存变化核对。

- 选定流：Hot lucerne (alfalfa) pellets
- 流属性/单位：Mass / kg
- 数量规则：依据同一期间的实测活动数据和有记录的换算关系计算该单一交换，并保留全部输入参数
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 离开制粒机的热苜蓿团粒
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_pelleting_records`
- 来源：`us-epa-ap42-alfalfa-1996`; `fao-feed-milling`

##### 废物流

###### 调质制粒：苜蓿制粒机启动废料（`pelleting_startup_reject`）

记录调质与制粒产生的单一废物流“苜蓿制粒机启动废料”。按实际质量或体积、状态和去向分别计量，不得与其他废物合并。

- 选定流：Lucerne (alfalfa) pellet-mill start-up reject
- 流属性/单位：Mass / kg
- 数量规则：按产生事件或批次实测该单一废物流质量或体积，并记录水分或固体分数（如适用）及实际去向
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 离开制粒机的热苜蓿团粒
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pelleting_records`
- 来源：`eu-pef-2021-2279`

##### 基本流

###### 调质制粒：向空气排放的粒径低于 2.5 µm 颗粒物（`pelleting_pm25`）

记录调质与制粒向空气释放的单一基本流“向空气排放的粒径低于 2.5 µm 颗粒物”。采用物种或粒径专属负荷，不得与其他污染物或粒径组分合并。

- 选定流：Particulate matter, diameter below 2.5 µm, to air
- 流属性/单位：Mass / kg
- 数量规则：根据该过程有组织排放与有记录的无组织排放实测数据计算该非重叠粒径组分质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 离开制粒机的热苜蓿团粒
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_pelleting_records`
- 来源：`us-epa-ap42-alfalfa-1996`; `eu-fdm-bat-2019`

###### 调质制粒：向空气排放的粒径 2.5–10 µm 颗粒物（`pelleting_pm_coarse`）

记录调质与制粒向空气释放的单一基本流“向空气排放的粒径 2.5–10 µm 颗粒物”。采用物种或粒径专属负荷，不得与其他污染物或粒径组分合并。

- 选定流：Particulate matter, diameter 2.5–10 µm, to air
- 流属性/单位：Mass / kg
- 数量规则：根据该过程有组织排放与有记录的无组织排放实测数据计算该非重叠粒径组分质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 离开制粒机的热苜蓿团粒
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_pelleting_records`
- 来源：`us-epa-ap42-alfalfa-1996`; `eu-fdm-bat-2019`

### 过程：颗粒冷却与最终筛分（`pellet_cooling_and_screening`）

#### 输入

##### 产品流

###### 冷却筛分：热苜蓿团粒（`cooling_hot_alfalfa_pellets`）

记录颗粒冷却与最终筛分实际使用的单一输入“热苜蓿团粒”。仅在声明路线实际使用该流时启用，不得与其他物质、能源或载体合并。

- 选定流：Hot lucerne (alfalfa) pellets
- 流属性/单位：Mass / kg
- 数量规则：依据同一期间的实测活动数据和有记录的换算关系计算该单一交换，并保留全部输入参数
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 冷却筛分苜蓿团粒
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_cooling_records`
- 来源：`us-epa-ap42-alfalfa-1996`; `fao-feed-milling`

###### 冷却筛分：电网电力（`cooling_electricity`）

记录颗粒冷却与最终筛分实际使用的单一输入“电网电力”。仅在声明路线实际使用该流时启用，不得与其他物质、能源或载体合并。

- 选定流：Electricity, grid
- 流属性/单位：Energy / kWh
- 数量规则：使用该阶段分表记录，或依据场址电表和有记录的设备负荷时间进行分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 冷却筛分苜蓿团粒
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cooling_records`
- 来源：`us-epa-ap42-alfalfa-1996`; `eu-fdm-bat-2019`; `fefac-pefcr-feed-data-2021`

##### 废物流

本过程不规定废物流输入。

##### 基本流

本过程不规定基本流输入。

#### 输出

##### 产品流

###### 冷却筛分：冷却筛分苜蓿团粒（`cooling_screened_alfalfa_pellets`）

记录颗粒冷却与最终筛分产生的单一产品或内部转移流“冷却筛分苜蓿团粒”。按批次和实际去向分别计量，并与该过程投入、回收、废物和库存变化核对。

- 选定流：Cooled screened lucerne (alfalfa) pellets
- 流属性/单位：Mass / kg
- 数量规则：依据同一期间的实测活动数据和有记录的换算关系计算该单一交换，并保留全部输入参数
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 冷却筛分苜蓿团粒
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_cooling_records`
- 来源：`us-epa-ap42-alfalfa-1996`; `fao-feed-milling`

###### 冷却筛分：回收苜蓿颗粒细粉（`cooling_recovered_pellet_fines`）

记录颗粒冷却与最终筛分产生的单一产品或内部转移流“回收苜蓿颗粒细粉”。按批次和实际去向分别计量，并与该过程投入、回收、废物和库存变化核对。

- 选定流：Recovered lucerne (alfalfa) pellet fines
- 流属性/单位：Mass / kg
- 数量规则：使用校准秤、流量计、批次记录或可核对的采购与库存记录实测该单一交换，并与同一过程质量平衡核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 冷却筛分苜蓿团粒
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cooling_records`
- 来源：`us-epa-ap42-alfalfa-1996`; `fao-feed-milling`

##### 废物流

###### 冷却筛分：废弃苜蓿颗粒细粉（`cooling_discarded_pellet_fines`）

记录颗粒冷却与最终筛分产生的单一废物流“废弃苜蓿颗粒细粉”。按实际质量或体积、状态和去向分别计量，不得与其他废物合并。

- 选定流：Discarded lucerne (alfalfa) pellet fines
- 流属性/单位：Mass / kg
- 数量规则：按产生事件或批次实测该单一废物流质量或体积，并记录水分或固体分数（如适用）及实际去向
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 冷却筛分苜蓿团粒
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cooling_records`
- 来源：`us-epa-ap42-alfalfa-1996`; `eu-pef-2021-2279`

##### 基本流

###### 冷却筛分：向空气排放的粒径低于 2.5 µm 颗粒物（`cooling_pm25`）

记录颗粒冷却与最终筛分向空气释放的单一基本流“向空气排放的粒径低于 2.5 µm 颗粒物”。采用物种或粒径专属负荷，不得与其他污染物或粒径组分合并。

- 选定流：Particulate matter, diameter below 2.5 µm, to air
- 流属性/单位：Mass / kg
- 数量规则：根据该过程有组织排放与有记录的无组织排放实测数据计算该非重叠粒径组分质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 冷却筛分苜蓿团粒
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_cooling_records`
- 来源：`us-epa-ap42-alfalfa-1996`; `eu-fdm-bat-2019`

###### 冷却筛分：向空气排放的粒径 2.5–10 µm 颗粒物（`cooling_pm_coarse`）

记录颗粒冷却与最终筛分向空气释放的单一基本流“向空气排放的粒径 2.5–10 µm 颗粒物”。采用物种或粒径专属负荷，不得与其他污染物或粒径组分合并。

- 选定流：Particulate matter, diameter 2.5–10 µm, to air
- 流属性/单位：Mass / kg
- 数量规则：根据该过程有组织排放与有记录的无组织排放实测数据计算该非重叠粒径组分质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 冷却筛分苜蓿团粒
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_cooling_records`
- 来源：`us-epa-ap42-alfalfa-1996`; `eu-fdm-bat-2019`

### 过程：包装或散装装料、储存与放行（`packaging_storage_and_release`）

#### 输入

##### 产品流

###### 包装放行：苜蓿粗粉（`packaging_alfalfa_meal`）

记录包装或散装装料、储存与放行实际使用的单一输入“苜蓿粗粉”。仅在声明路线实际使用该流时启用，不得与其他物质、能源或载体合并。

- 选定流：Lucerne (alfalfa) meal
- 流属性/单位：Mass / kg
- 数量规则：使用校准秤、流量计、批次记录或可核对的采购与库存记录实测该单一交换，并与同一过程质量平衡核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 放行净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_release_records`
- 来源：`un-cpc-3-2025`; `eu-pef-2021-2279`

###### 包装放行：冷却筛分苜蓿团粒（`packaging_alfalfa_pellets`）

记录包装或散装装料、储存与放行实际使用的单一输入“冷却筛分苜蓿团粒”。仅在声明路线实际使用该流时启用，不得与其他物质、能源或载体合并。

- 选定流：Cooled screened lucerne (alfalfa) pellets
- 流属性/单位：Mass / kg
- 数量规则：使用校准秤、流量计、批次记录或可核对的采购与库存记录实测该单一交换，并与同一过程质量平衡核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 放行净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_release_records`
- 来源：`un-cpc-3-2025`; `eu-pef-2021-2279`

###### 包装放行：电网电力（`packaging_electricity`）

记录包装或散装装料、储存与放行实际使用的单一输入“电网电力”。仅在声明路线实际使用该流时启用，不得与其他物质、能源或载体合并。

- 选定流：Electricity, grid
- 流属性/单位：Energy / kWh
- 数量规则：使用该阶段分表记录，或依据场址电表和有记录的设备负荷时间进行分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 放行净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_release_records`
- 来源：`fefac-pefcr-feed-data-2021`; `eu-pef-2021-2279`

###### 包装放行：聚丙烯编织袋（`packaging_polypropylene_sack`）

记录包装或散装装料、储存与放行实际使用的单一输入“聚丙烯编织袋”。仅在声明路线实际使用该流时启用，不得与其他物质、能源或载体合并。

- 选定流：Polypropylene woven sack
- 流属性/单位：Mass / kg
- 数量规则：使用数量乘以核验的单件空包装质量，并与包装库存平衡核对
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_release_records`
- 来源：`fefac-pefcr-feed-data-2021`; `eu-pef-2021-2279`

###### 包装放行：牛皮纸袋（`packaging_kraft_paper_sack`）

记录包装或散装装料、储存与放行实际使用的单一输入“牛皮纸袋”。仅在声明路线实际使用该流时启用，不得与其他物质、能源或载体合并。

- 选定流：Kraft paper sack
- 流属性/单位：Mass / kg
- 数量规则：使用数量乘以核验的单件空包装质量，并与包装库存平衡核对
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_release_records`
- 来源：`fefac-pefcr-feed-data-2021`; `eu-pef-2021-2279`

###### 包装放行：低密度聚乙烯袋内衬（`packaging_ldpe_liner`）

记录包装或散装装料、储存与放行实际使用的单一输入“低密度聚乙烯袋内衬”。仅在声明路线实际使用该流时启用，不得与其他物质、能源或载体合并。

- 选定流：Low-density polyethylene sack liner
- 流属性/单位：Mass / kg
- 数量规则：使用数量乘以核验的单件空包装质量，并与包装库存平衡核对
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_release_records`
- 来源：`fefac-pefcr-feed-data-2021`; `eu-pef-2021-2279`

###### 包装放行：聚乙烯拉伸膜（`packaging_polyethylene_stretch_film`）

记录包装或散装装料、储存与放行实际使用的单一输入“聚乙烯拉伸膜”。仅在声明路线实际使用该流时启用，不得与其他物质、能源或载体合并。

- 选定流：Polyethylene stretch film
- 流属性/单位：Mass / kg
- 数量规则：实测膜卷消耗，并按声明产品装载期间的期初和期末库存修正
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_release_records`
- 来源：`fefac-pefcr-feed-data-2021`; `eu-pef-2021-2279`

###### 包装放行：木托盘（`packaging_wood_pallet`）

记录包装或散装装料、储存与放行实际使用的单一输入“木托盘”。仅在声明路线实际使用该流时启用，不得与其他物质、能源或载体合并。

- 选定流：Wood pallet
- 流属性/单位：Mass / kg
- 数量规则：托盘数量乘以核验的托盘质量；仅按有记录且归属于放行货物的前景重复使用次数分摊
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净托盘化参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_release_records`
- 来源：`fefac-pefcr-feed-data-2021`; `eu-pef-2021-2279`

##### 废物流

本过程不规定废物流输入。

##### 基本流

本过程不规定基本流输入。

#### 输出

##### 产品流

###### 包装放行：苜蓿粗粉和团粒（`reference_product_output`）

记录生产场址门口放行的声明最终形态净合格产品；粗粉与团粒路线必须分别建包，包装质量不得计入参考数量。

- 选定流：Lucerne (alfalfa) meal and pellets `f984b084-e66e-4d11-8365-354ae0ad5a74`
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- 数量规则：恰为 1 kg 净合格放行产品；不计包装质量
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：生产场址门口 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）
- 采集协议：`cp_packaging_release_records`
- 来源：`un-cpc-3-2025`

##### 废物流

###### 包装放行：不合格苜蓿粗粉（`packaging_offspec_alfalfa_meal`）

记录包装或散装装料、储存与放行产生的单一废物流“不合格苜蓿粗粉”。按实际质量或体积、状态和去向分别计量，不得与其他废物合并。

- 选定流：Off-specification lucerne (alfalfa) meal
- 流属性/单位：Mass / kg
- 数量规则：按产生事件或批次实测该单一废物流质量或体积，并记录水分或固体分数（如适用）及实际去向
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 放行净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_release_records`
- 来源：`eu-pef-2021-2279`

###### 包装放行：不合格苜蓿团粒（`packaging_offspec_alfalfa_pellets`）

记录包装或散装装料、储存与放行产生的单一废物流“不合格苜蓿团粒”。按实际质量或体积、状态和去向分别计量，不得与其他废物合并。

- 选定流：Off-specification lucerne (alfalfa) pellets
- 流属性/单位：Mass / kg
- 数量规则：按产生事件或批次实测该单一废物流质量或体积，并记录水分或固体分数（如适用）及实际去向
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 放行净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_release_records`
- 来源：`eu-pef-2021-2279`

###### 包装放行：废聚丙烯编织袋（`packaging_waste_polypropylene`）

记录包装或散装装料、储存与放行产生的单一废物流“废聚丙烯编织袋”。按实际质量或体积、状态和去向分别计量，不得与其他废物合并。

- 选定流：Waste polypropylene woven sack
- 流属性/单位：Mass / kg
- 数量规则：按产生事件或批次实测该单一废物流质量或体积，并记录水分或固体分数（如适用）及实际去向
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 放行净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_release_records`
- 来源：`fefac-pefcr-feed-data-2021`; `eu-pef-2021-2279`

###### 包装放行：废牛皮纸袋（`packaging_waste_kraft_paper`）

记录包装或散装装料、储存与放行产生的单一废物流“废牛皮纸袋”。按实际质量或体积、状态和去向分别计量，不得与其他废物合并。

- 选定流：Waste kraft paper sack
- 流属性/单位：Mass / kg
- 数量规则：按产生事件或批次实测该单一废物流质量或体积，并记录水分或固体分数（如适用）及实际去向
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 放行净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_release_records`
- 来源：`fefac-pefcr-feed-data-2021`; `eu-pef-2021-2279`

###### 包装放行：废低密度聚乙烯袋内衬（`packaging_waste_ldpe`）

记录包装或散装装料、储存与放行产生的单一废物流“废低密度聚乙烯袋内衬”。按实际质量或体积、状态和去向分别计量，不得与其他废物合并。

- 选定流：Waste low-density polyethylene sack liner
- 流属性/单位：Mass / kg
- 数量规则：按产生事件或批次实测该单一废物流质量或体积，并记录水分或固体分数（如适用）及实际去向
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 放行净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_release_records`
- 来源：`fefac-pefcr-feed-data-2021`; `eu-pef-2021-2279`

###### 包装放行：废聚乙烯拉伸膜（`packaging_waste_stretch_film`）

记录包装或散装装料、储存与放行产生的单一废物流“废聚乙烯拉伸膜”。按实际质量或体积、状态和去向分别计量，不得与其他废物合并。

- 选定流：Waste polyethylene stretch film
- 流属性/单位：Mass / kg
- 数量规则：按产生事件或批次实测该单一废物流质量或体积，并记录水分或固体分数（如适用）及实际去向
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 放行净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_release_records`
- 来源：`fefac-pefcr-feed-data-2021`; `eu-pef-2021-2279`

###### 包装放行：废木托盘（`packaging_waste_wood`）

记录包装或散装装料、储存与放行产生的单一废物流“废木托盘”。按实际质量或体积、状态和去向分别计量，不得与其他废物合并。

- 选定流：Waste wood pallet
- 流属性/单位：Mass / kg
- 数量规则：依据同一期间的实测活动数据和有记录的换算关系计算该单一交换，并保留全部输入参数
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 放行净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_release_records`
- 来源：`fefac-pefcr-feed-data-2021`; `eu-pef-2021-2279`

##### 基本流

###### 包装放行：向空气排放的粒径低于 2.5 µm 颗粒物（`packaging_pm25`）

记录包装或散装装料、储存与放行向空气释放的单一基本流“向空气排放的粒径低于 2.5 µm 颗粒物”。采用物种或粒径专属负荷，不得与其他污染物或粒径组分合并。

- 选定流：Particulate matter, diameter below 2.5 µm, to air
- 流属性/单位：Mass / kg
- 数量规则：根据该过程有组织排放与有记录的无组织排放实测数据计算该非重叠粒径组分质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 放行净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_release_records`
- 来源：`us-epa-ap42-alfalfa-1996`; `eu-pef-2021-2279`

###### 包装放行：向空气排放的粒径 2.5–10 µm 颗粒物（`packaging_pm_coarse`）

记录包装或散装装料、储存与放行向空气释放的单一基本流“向空气排放的粒径 2.5–10 µm 颗粒物”。采用物种或粒径专属负荷，不得与其他污染物或粒径组分合并。

- 选定流：Particulate matter, diameter 2.5–10 µm, to air
- 流属性/单位：Mass / kg
- 数量规则：根据该过程有组织排放与有记录的无组织排放实测数据计算该非重叠粒径组分质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 放行净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_release_records`
- 来源：`us-epa-ap42-alfalfa-1996`; `eu-pef-2021-2279`

### 过程：设备清洁与过滤器维护（`cleaning_and_maintenance`）

#### 输入

##### 产品流

###### 清洁维护：电网电力（`cleaning_electricity`）

记录设备清洁与过滤器维护实际使用的单一输入“电网电力”。仅在声明路线实际使用该流时启用，不得与其他物质、能源或载体合并。

- 选定流：Electricity, grid
- 流属性/单位：Energy / kWh
- 数量规则：使用该阶段分表记录，或依据场址电表和有记录的设备负荷时间进行分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：清洁所对应路线和期间每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_records`
- 来源：`eu-jrc-fdm-bref-2019`; `eu-fdm-bat-2019`; `eu-pef-2021-2279`

###### 清洁维护：压缩空气（`cleaning_compressed_air`）

记录设备清洁与过滤器维护实际使用的单一输入“压缩空气”。仅在声明路线实际使用该流时启用，不得与其他物质、能源或载体合并。

- 选定流：Compressed air
- 流属性/单位：Volume / Nm3
- 数量规则：使用标准状态体积计量，或依据记录的压缩机输出与该阶段需求计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：清洁所对应路线和期间每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_cleaning_records`
- 来源：`eu-fdm-bat-2019`; `eu-pef-2021-2279`

###### 清洁维护：工艺水（`cleaning_process_water`）

记录设备清洁与过滤器维护实际使用的单一输入“工艺水”。仅在声明路线实际使用该流时启用，不得与其他物质、能源或载体合并。

- 选定流：Process water
- 流属性/单位：Mass / kg
- 数量规则：使用校准水表或按事件和批次计量该单一液态水投入
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：清洁所对应路线和期间每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_records`
- 来源：`eu-jrc-fdm-bref-2019`; `eu-fdm-bat-2019`; `eu-pef-2021-2279`

##### 废物流

本过程不规定废物流输入。

##### 基本流

本过程不规定基本流输入。

#### 输出

##### 产品流

本过程不规定产品流输出。

##### 废物流

###### 清洁维护：干苜蓿清扫物（`cleaning_dry_alfalfa_sweepings`）

记录设备清洁与过滤器维护产生的单一废物流“干苜蓿清扫物”。按实际质量或体积、状态和去向分别计量，不得与其他废物合并。

- 选定流：Dry lucerne (alfalfa) sweepings
- 流属性/单位：Mass / kg
- 数量规则：按产生事件或批次实测该单一废物流质量或体积，并记录水分或固体分数（如适用）及实际去向
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：清洁所对应路线和期间每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_records`
- 来源：`eu-fdm-bat-2019`; `eu-pef-2021-2279`

###### 清洁维护：苜蓿设备清洗废水（`cleaning_wash_wastewater`）

记录设备清洁与过滤器维护产生的单一废物流“苜蓿设备清洗废水”。按实际质量或体积、状态和去向分别计量，不得与其他废物合并。

- 选定流：Lucerne (alfalfa) equipment-wash wastewater
- 流属性/单位：Volume / m3
- 数量规则：按清洁事件使用流量计或校准储罐记录废水体积，并记录去向
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：清洁所对应路线和期间每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_records`
- 来源：`eu-jrc-fdm-bref-2019`; `eu-fdm-bat-2019`; `eu-pef-2021-2279`

###### 清洁维护：废袋式除尘器滤布（`cleaning_used_filter_fabric`）

记录设备清洁与过滤器维护产生的单一废物流“废袋式除尘器滤布”。按实际质量或体积、状态和去向分别计量，不得与其他废物合并。

- 选定流：Used baghouse filter fabric
- 流属性/单位：Mass / kg
- 数量规则：按有记录的服役期和除尘设备，将实测拆除滤布质量归属于该路线
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：滤布服役期间每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_cleaning_records`
- 来源：`us-epa-ap42-alfalfa-1996`; `eu-fdm-bat-2019`; `eu-pef-2021-2279`

##### 基本流

本过程不规定基本流输出。

### 过程：场内工艺废水处理（`onsite_wastewater_treatment`）

#### 输入

##### 产品流

###### 废水处理：电网电力（`wwt_electricity`）

记录场内工艺废水处理实际使用的单一输入“电网电力”。仅在声明路线实际使用该流时启用，不得与其他物质、能源或载体合并。

- 选定流：Electricity, grid
- 流属性/单位：Energy / kWh
- 数量规则：使用该阶段分表记录，或依据场址电表和有记录的设备负荷时间进行分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每处理 1 m3 苜蓿工艺废水
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_treatment_records`
- 来源：`eu-jrc-fdm-bref-2019`; `eu-fdm-bat-2019`; `eu-pef-2021-2279`

##### 废物流

###### 废水处理：苜蓿设备清洗废水（`wwt_wash_wastewater`）

记录进入场内工艺废水处理的单一废物流“苜蓿设备清洗废水”，并以处理边界入口的实测量和同一期间身份为准。

- 选定流：Lucerne (alfalfa) equipment-wash wastewater
- 流属性/单位：Volume / m3
- 数量规则：按产生事件或批次实测该单一废物流质量或体积，并记录水分或固体分数（如适用）及实际去向
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每处理 1 m3 苜蓿工艺废水
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_treatment_records`
- 来源：`eu-jrc-fdm-bref-2019`; `eu-fdm-bat-2019`

##### 基本流

本过程不规定基本流输入。

#### 输出

##### 产品流

本过程不规定产品流输出。

##### 废物流

###### 废水处理：经处理苜蓿工艺出水（`wwt_treated_effluent`）

记录场内工艺废水处理产生的单一废物流“经处理苜蓿工艺出水”。按实际质量或体积、状态和去向分别计量，不得与其他废物合并。

- 选定流：Treated lucerne (alfalfa) process effluent
- 流属性/单位：Volume / m3
- 数量规则：以出水流量计体积与进水、回用水、蒸发、污泥含水及储量变化核对
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每处理 1 m3 苜蓿工艺废水
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_treatment_records`
- 来源：`eu-jrc-fdm-bref-2019`; `eu-fdm-bat-2019`

###### 废水处理：苜蓿废水处理筛渣（`wwt_screenings`）

记录场内工艺废水处理产生的单一废物流“苜蓿废水处理筛渣”。按实际质量或体积、状态和去向分别计量，不得与其他废物合并。

- 选定流：Lucerne (alfalfa) wastewater-treatment screenings
- 流属性/单位：Mass / kg
- 数量规则：按产生事件或批次实测该单一废物流质量或体积，并记录水分或固体分数（如适用）及实际去向
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每处理 1 m3 苜蓿工艺废水
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_treatment_records`
- 来源：`eu-fdm-bat-2019`; `eu-pef-2021-2279`

###### 废水处理：苜蓿废水处理污泥（`wwt_sludge`）

记录场内工艺废水处理产生的单一废物流“苜蓿废水处理污泥”。按实际质量或体积、状态和去向分别计量，不得与其他废物合并。

- 选定流：Lucerne (alfalfa) wastewater-treatment sludge
- 流属性/单位：Mass / kg
- 数量规则：实测湿污泥质量；需要干质量时乘以实测干固体分数
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每处理 1 m3 苜蓿工艺废水
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_treatment_records`
- 来源：`eu-fdm-bat-2019`; `eu-pef-2021-2279`

##### 基本流

###### 废水处理：向水体排放的化学需氧量（`wwt_cod_to_water`）

记录场内工艺废水处理向水体释放的单一基本流“向水体排放的化学需氧量”。采用物种或粒径专属负荷，不得与其他污染物或粒径组分合并。

- 选定流：Chemical oxygen demand, to water
- 流属性/单位：Mass / kg
- 数量规则：同一排放期间的配对流量加权浓度乘以出水体积，并记录单位换算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每处理 1 m3 苜蓿工艺废水
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_treatment_records`
- 来源：`eu-fdm-bat-2019`; `eu-pef-2021-2279`

###### 废水处理：向水体排放的五日生化需氧量（`wwt_bod5_to_water`）

记录场内工艺废水处理向水体释放的单一基本流“向水体排放的五日生化需氧量”。采用物种或粒径专属负荷，不得与其他污染物或粒径组分合并。

- 选定流：Biochemical oxygen demand, 5 days, to water
- 流属性/单位：Mass / kg
- 数量规则：同一排放期间的配对流量加权浓度乘以出水体积，并记录单位换算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每处理 1 m3 苜蓿工艺废水
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_treatment_records`
- 来源：`eu-fdm-bat-2019`; `eu-pef-2021-2279`

###### 废水处理：向水体排放的总悬浮固体（`wwt_tss_to_water`）

记录场内工艺废水处理向水体释放的单一基本流“向水体排放的总悬浮固体”。采用物种或粒径专属负荷，不得与其他污染物或粒径组分合并。

- 选定流：Total suspended solids, to water
- 流属性/单位：Mass / kg
- 数量规则：同一排放期间的配对流量加权浓度乘以出水体积，并记录单位换算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每处理 1 m3 苜蓿工艺废水
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_treatment_records`
- 来源：`eu-fdm-bat-2019`; `eu-pef-2021-2279`

###### 废水处理：向水体排放的总氮（`wwt_total_nitrogen_to_water`）

记录场内工艺废水处理向水体释放的单一基本流“向水体排放的总氮”。采用物种或粒径专属负荷，不得与其他污染物或粒径组分合并。

- 选定流：Total nitrogen, to water
- 流属性/单位：Mass / kg
- 数量规则：同一排放期间的配对流量加权浓度乘以出水体积，并记录单位换算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每处理 1 m3 苜蓿工艺废水
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_treatment_records`
- 来源：`eu-fdm-bat-2019`; `eu-pef-2021-2279`

###### 废水处理：向水体排放的总磷（`wwt_total_phosphorus_to_water`）

记录场内工艺废水处理向水体释放的单一基本流“向水体排放的总磷”。采用物种或粒径专属负荷，不得与其他污染物或粒径组分合并。

- 选定流：Total phosphorus, to water
- 流属性/单位：Mass / kg
- 数量规则：同一排放期间的配对流量加权浓度乘以出水体积，并记录单位换算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每处理 1 m3 苜蓿工艺废水
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_treatment_records`
- 来源：`eu-fdm-bat-2019`; `eu-pef-2021-2279`

###### 废水处理：向空气排放的生物源甲烷（`wwt_biogenic_methane_to_air`）

记录场内工艺废水处理向空气释放的单一基本流“向空气排放的生物源甲烷”。采用物种或粒径专属负荷，不得与其他污染物或粒径组分合并。

- 选定流：Methane, biogenic, to air
- 流属性/单位：Mass / kg
- 数量规则：采用未捕集甲烷实测负荷，或由实测可降解负荷、处理性能、捕集和氧化记录计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每处理 1 m3 苜蓿工艺废水
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_treatment_records`
- 来源：`eu-fdm-bat-2019`; `eu-pef-2021-2279`

###### 废水处理：向空气排放的一氧化二氮（`wwt_nitrous_oxide_to_air`）

记录场内工艺废水处理向空气释放的单一基本流“向空气排放的一氧化二氮”。采用物种或粒径专属负荷，不得与其他污染物或粒径组分合并。

- 选定流：Dinitrogen monoxide, to air
- 流属性/单位：Mass / kg
- 数量规则：采用实测排放负荷，或由实测氮通量和有记录的处理技术专属因子计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每处理 1 m3 苜蓿工艺废水
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_treatment_records`
- 来源：`eu-fdm-bat-2019`; `eu-pef-2021-2279`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_route_separation` | 不同来料状态与制造技术 | 优先细分。新鲜预萎、田间干燥和外购脱水来料、每种干燥器技术与燃料、粗粉与团粒形态、散装与包装放行路线应分别计量或计算；不得通过平均不同路线进行分配。 | `eu-pef-2021-2279`; `us-epa-ap42-alfalfa-1996` |
| `allocation_internal_recycle` | 回收干燥或粉碎粉尘、粗筛物及颗粒细粉 | 每种组分返回前分别计量。内部回流继承来源过程负荷，既不是共产品也不产生避免废物抵扣；防止在发送与接收过程重复计数。 | `us-epa-ap42-alfalfa-1996`; `fao-feed-milling` |
| `allocation_saleable_lucerne_fraction` | 单独出售的苜蓿筛分物、粗粉组分、粉尘组分或颗粒细粉产品 | 有记录时先细分过程；无法细分时采用反映因果生产关系且有记录的物理关系。只有不存在可辩护的物理关系时方可经济分配，并披露数量、价格、期间及敏感性。 | `eu-pef-2021-2279` |
| `allocation_energy_and_utilities` | 共用电力、蒸汽、热水、燃料、压缩空气及处理服务 | 优先采用阶段分表；否则采用有记录的设备时间、经实测负荷修正的额定功率、处理质量或废水体积。不得以收入分配共用公用工程。 | `fefac-pefcr-feed-data-2021`; `eu-pef-2021-2279` |
| `allocation_waste_and_disposal` | 拒收物、废弃粉尘、灰、包装废物、筛渣、污泥及废水 | 将产生量归属于导致该交换的过程和产品路线，透明建模处理或处置；除非声明另经审查的下游替代模型，不得在前景清单中创建避免产品抵扣。 | `eu-fdm-bat-2019`; `eu-pef-2021-2279` |
| `allocation_packaging_reuse` | 可重复使用木托盘 | 仅按声明所有权与返回体系中有记录的前景重复使用次数分摊托盘制造；不得假设重复使用次数。 | `fefac-pefcr-feed-data-2021`; `eu-pef-2021-2279` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_receiving_records` | `raw_material_receiving` | 按状态接收的苜蓿；接收公用工程；拒收物；分离土壤与石块；接收粉尘 | 秤、仪表、检验、水分、废物和排放记录 | lot_id; received_state; supplier; origin; gross_mass; tare_mass; accepted_mass; rejected_mass; moisture; electricity; diesel; separated_soil; separated_stones; dust_measurement | 校准地磅或料斗秤、水分方法、公用工程记录、废物容器称量及阶段排放实测或计算 | kg; % moisture; kWh; kg fuel; kg emission | 每批及每个接收作业班次 | 连续代表性生产期，通常至少 12 个月；季节生产覆盖全部生产季 | 一个已识别生产场址 | 按来料状态汇总接收与拒收质量及公用工程；仅向关联路线产出归一化 | 秤和仪表校准；批次票据；水分报告；燃料记录；废物联单；排放方法及计算工作簿 |
| `cp_drying_records` | `thermal_drying` | 干燥器公用工程、燃料、回收热、干碎料、回收粉尘、灰及各单项空气排放 | 阶段仪表、燃料库存、质量和水分平衡、控制装置记录及烟囱测量 | dryer_id; dryer_type; fuel_identity; fuel_quantity; fuel_quality; electricity; steam_state; hot_water_state; recovered_heat_states; inlet_mass_and_moisture; outlet_mass_and_moisture; dust_mass; ash_mass; stack_flow; pollutant_concentrations; operating_hours | 读取校准仪表和秤；保留燃料分析及排放测试；用声明方程计算热量和物种专属负荷 | kWh; MJ; kg; % moisture; Nm3; kg pollutant | 活动数据按批次或班次；排放按法规或技术适用频率 | 完整声明干燥季或代表性年度 | 一个场址的一套已识别干燥系统 | 仅汇总一种干燥器技术和燃料配置；先计算质量、热量和污染物总量再归一化 | 仪表和秤校准；供应商证书；水分测试；烟囱测试；控制装置日志；计算工作簿 |
| `cp_grinding_records` | `grinding_and_sieving` | 粉碎公用工程、粗粉、筛分物、回收和废弃粉尘及各颗粒物粒径组分 | 阶段仪表、秤、筛网、除尘器和排放测量记录 | mill_id; screen_specification; feed_mass; feed_moisture; electricity; compressed_air; meal_mass; screenings_mass; recovered_dust_mass; discarded_dust_mass; stack_flow; pm25; pm_coarse | 与磨机及筛网设置关联的分表和校准质量记录；按粒径实测排放或形成有记录的计算 | kWh; Nm3; kg; % moisture; kg pollutant | 每生产批次或班次 | 完整声明路线期间 | 一条已识别粉碎筛分线 | 归一化前核对投入、内部回流、粗粉、筛分物、废弃粉尘和释放 | 仪表和秤校准；筛网规格；过滤器和旋风器日志；排放报告；质量平衡工作簿 |
| `cp_pelleting_records` | `steam_conditioning_and_pelleting` | 粗粉、每种实际准确粘结剂、调质水、蒸汽、电力、热团粒、废料及颗粒物 | 配方、仪表、秤、制粒机运行和排放记录 | lot_id; meal_mass_and_moisture; binder_substance_and_mass_or_none; water_mass; steam_mass_pressure_temperature; electricity; hot_pellet_mass_and_moisture; reject_mass; stack_flow; pm25; pm_coarse | 将产品特定配方和制粒机设置关联到校准进料、水、蒸汽、电力、产出、废料和排放记录 | kg; % moisture; MJ; kWh; kg pollutant | 每个制粒批次或班次 | 完整声明团粒路线期间 | 一套已识别调质器和制粒机 | 每种准确粘结剂保持分开；核对粗粉、加水、蒸汽冷凝液、产品、废料、粉尘和库存变化 | 配方及法定身份；仪表和秤校准；制粒机日志；放行测试；排放报告 |
| `cp_cooling_records` | `pellet_cooling_and_screening` | 热团粒、冷却电力、合格团粒、回收和废弃细粉及颗粒物 | 阶段仪表、秤、筛网、冷却器和排放测量记录 | lot_id; cooler_id; screen_specification; hot_pellet_mass; electricity; accepted_pellet_mass; recovered_fines_mass; discarded_fines_mass; inlet_and_outlet_temperature; moisture; stack_flow; pm25; pm_coarse | 将校准质量和电力测量关联到冷却器及筛网设置，并按粒径实测或计算释放 | kg; kWh; °C; % moisture; kg pollutant | 每个团粒批次或班次 | 完整声明团粒路线期间 | 一条已识别冷却筛分线 | 归一化前核对热团粒、合格团粒、内部细粉、废弃细粉、粉尘和库存变化 | 仪表和秤校准；筛网规格；冷却器日志；水分测试；排放报告 |
| `cp_packaging_release_records` | `packaging_storage_and_release` | 粗粉或团粒、电力、每种包装组件、净参考产出、不合格产品、包装废物及装料粉尘 | 包装领用、秤、仓库、放行、废物和排放记录 | final_form; lot_id; product_input_mass; moisture; grade; packaging_component_identity_and_mass; pallet_tracking; electricity; net_released_mass; offspec_mass; each_packaging_waste_mass; stack_flow; pm25; pm_coarse | 校准产品秤、包装库存核对、托盘记录、质量放行、仓库仪表、废物称量及排放实测或计算 | kg; kWh; % moisture; kg pollutant | 每个放行批次；每月库存核对 | 完整声明放行期间 | 一个已识别场址和包装或散装线 | 粗粉与团粒路线及每种包装材料分别记录；以净放行质量为分母 | 秤和仪表校准；包装规格及发票；库存记录；质量证书；废物联单；排放报告 |
| `cp_cleaning_records` | `cleaning_and_maintenance` | 电力、压缩空气、湿式清洁水、每种实际准确化学品、清扫物、清洗废水和滤布 | 清洁事件、公用工程、化学品领用、废物、废水和维护记录 | event_id; equipment_train; dry_or_wet_method; electricity; compressed_air; water_mass; exact_chemical_identity_and_mass; sweepings_mass; wastewater_volume; used_filter_mass; destination | 将事件级日志关联到校准公用工程仪表、物料领用、废物称量、废水表或储罐及维护工单 | kWh; Nm3; kg; m3 | 每次清洁或维护事件 | 与关联生产路线相同期间 | 一个已识别场址和设备线 | 以设备时间或处理质量将每次事件归属于清洁路线，并保持每种化学品和废物分开 | 清洁日志；仪表校准；安全及产品规格；化学品领用；废物联单；维护工单 |
| `cp_wastewater_treatment_records` | `onsite_wastewater_treatment` | 废水、电力、每种实际准确药剂、出水、筛渣、污泥、五项水污染参数、甲烷和一氧化二氮 | 流量、实验室、处理运行、化学品、废物和气体记录 | influent_volume; effluent_volume; recycle_and_storage; electricity; exact_reagent_identity_and_mass; screenings_mass_and_solids; sludge_mass_and_solids; cod; bod5; tss; total_nitrogen; total_phosphorus; methane; nitrous_oxide; sampling_times | 校准流量计和电表、代表性配对样品、认可或有记录的分析方法、废物称量及气体实测或计算 | m3; kWh; kg; mg/L; kg pollutant | 流量连续或每日汇总；按适用许可或 BAT 频率采样 | 完整声明处理及排放期间 | 一条已识别场内处理线 | 使用流量加权污染物负荷；核对水量平衡，并按实际进水体积和污染物负荷分配共用处理 | 仪表校准；样品交接链；实验室报告；处理日志；药剂记录；废物联单；排放计算工作簿 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 全部前景交换 | 归一化量等于路线期间交换量除以同一路线和期间放行的净合格参考产品质量。 | 路线期间交换量；净放行质量 | 每 1 kg 参考产品的交换量 | `eu-pef-2021-2279` |
| `calc_net_received_material` | 接收苜蓿 | 合格接收质量等于车辆或容器毛质量减皮重，再减去单独称量的拒收物；按批次保留状态与水分。 | 毛质量；皮重；拒收质量；接收状态；水分 | 按准确状态计的合格苜蓿质量 | `eu-pef-2021-2279` |
| `calc_drying_water_balance` | 热干燥 | 除水量等于入口湿质量乘入口水分分数，减出口质量乘出口水分分数；回收与废弃固形物分别核对。 | 入口质量及水分；出口质量及水分；粉尘；灰；库存变化 | 除水量及干燥器物料平衡残差 | `us-epa-ap42-alfalfa-1996` |
| `calc_delivered_heat` | 蒸汽、热水及回收热 | 热量等于实测质量或体积流量乘以有记录的入口至出口比焓差；蒸汽、热水和回收热分别报告。 | 流量；压力；温度；回流状态；流体性质 | 一种具名热载体的 MJ | `eu-jrc-fdm-bref-2019`; `eu-pef-2021-2279` |
| `calc_shared_stage_electricity` | 无专用分表的阶段电力 | 阶段电力等于场址电表电量乘以路线设备实测负荷小时数占全部纳入设备负荷小时数的有记录比例，并披露不确定性。 | 场址电力；设备负荷；运行时间 | 分配至一个过程和路线的 kWh | `fefac-pefcr-feed-data-2021`; `eu-pef-2021-2279` |
| `calc_combustion_species` | 每种干燥器燃烧排放 | 物种质量等于实测燃料量乘以有记录的燃料和技术专属物种因子，仅按实测控制和氧化参数修正；代表性烟囱实测优先。 | 准确燃料；数量；质量；物种因子；控制；运行状态 | 向空气排放的一种具名化学物或颗粒物组分 kg | `eu-fdm-bat-2019`; `eu-pef-2021-2279` |
| `calc_particulate_load` | 每个过程的各颗粒物组分 | 污染物负荷等于流量加权浓度乘以同一基准状态下的干或湿废气体积；粒径组分不得重叠。 | 废气流量；浓度；持续时间；基准状态；粒径组分 | 向空气排放的一种颗粒物组分 kg | `us-epa-ap42-alfalfa-1996`; `eu-fdm-bat-2019` |
| `calc_packaging_mass` | 每种包装组件 | 组件质量等于核验单件质量乘以使用数量，并按期初库存、收货、期末库存及适用且有记录的托盘重复使用次数修正。 | 单件质量；数量；期初库存；收货；期末库存；重复使用次数 | 一种具名包装材料 kg | `fefac-pefcr-feed-data-2021`; `eu-pef-2021-2279` |
| `calc_effluent_pollutant_load` | COD、BOD5、TSS、总氮或总磷 | 污染物负荷等于配对的流量加权出水浓度乘以排放出水体积，并记录单位换算。 | 出水体积；一种污染物浓度；样品覆盖 | 向水体排放的一种具名水参数 kg | `eu-fdm-bat-2019`; `eu-pef-2021-2279` |
| `calc_route_mass_balance` | 每个过程及完整路线 | 残差等于实测投入减去实测产品、内部转移、废物、释放、实测库存变化及有记录的水分变化；应调查而非强制闭合物料残差。 | 全部实测质量项；水分；库存变化 | 披露的质量平衡残差及核对结果 | `eu-pef-2021-2279` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | 参考产品 | 确认最终形态、单一苜蓿身份、CPC 23320 范围、水分、声明等级、包装状态、场址和期间；审计轨迹保留对烘焙误注的拒绝。 | 产品规格、放行证书、分类检查及参考流核验记录 |
| `dq_route_identity` | 全部前景过程 | 记录原料状态、干燥器技术和热源、粉碎/筛网设置、制粒与调质配置、粘结剂身份或无、冷却器/筛网设置和包装配置，不得平均不同路线。 | 路线图、设备清单、批次谱系、配方记录和过程日志 |
| `dq_measurement` | 仪表、秤和实验室数据 | 使用适合被测量的校准仪器和有记录的方法；保留校准有效性、检出限、采样条件和缺失数据处理。 | 校准证书、实验室报告、采样计划和仪器日志 |
| `dq_temporal` | 前景活动数据 | 覆盖代表性生产期，通常至少连续 12 个月或季节年度的全部生产季；披露停机、异常运行和不完整覆盖。 | 带日期的生产、公用工程、维护、废物和放行记录 |
| `dq_completeness` | 清单 | 纳入全部已知产品、废物和基本交换；每种电力、热载体、燃料、化学品、包装组件、废物、水参数和空气排放各自成卡。 | 清单核对、供应商和公用工程记录、排放台账、废物联单及未决 UUID 登记 |
| `dq_mass_balance` | 物料过程 | 报告过程与路线质量平衡残差，并利用水分、粉尘回收、内部回流、拒收及储存记录调查实质差异。 | 签署的质量平衡工作簿及无法解释残差的纠正措施说明 |
| `dq_emissions` | 空气与水释放 | 排放测量或因子应匹配实际技术、燃料、控制装置、环境介质、运行状态和期间；不得报告重叠颗粒物组分或合并化学物种。 | 烟囱或废水报告、许可记录、因子来源、控制日志及计算工作簿 |
| `dq_verifiability` | 发布数据包 | 保存产品特定 BoM、公司特定制造活动数据、计算文件、次级数据集身份、分配决策、数据质量评估及审查者访问底层记录的条件。 | PEF 式数据清单、来源登记、模型归档和核查声明 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | 参考流 | 必须使用 UUID `f984b084-e66e-4d11-8365-354ae0ad5a74`、Product 流类型、精确 CPC 23320、Mass 属性 `93a60a56-a3c8-11da-a746-0800200b9a66`、单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` 和 kg；拒绝冲突的远程烘焙 `generalComment`。 | `un-cpc-3-2025` |
| `validate_reference_amount` | 参考产出 | 必须恰为 1 kg 销售状态净合格粗粉或团粒，并排除全部包装质量。 | `un-cpc-3-2025`; `eu-fdm-bat-2019` |
| `validate_route_lock` | 数据包身份 | 最终形态、接收苜蓿状态、干燥技术和热源或无、粉碎/筛分配置、制粒和调质路线或无、粘结剂身份或无、放行水分、包装、场址或期间缺失时失败；平均不同路线时失败。 | `us-epa-ap42-alfalfa-1996`; `eu-fdm-bat-2019`; `eu-pef-2021-2279` |
| `validate_process_coverage` | 过程图 | 必须纳入接收、粉碎/筛分、包装或散装放行及清洁；干燥、制粒、冷却/筛分和场内废水处理在其纳入条件适用时必须纳入。 | `us-epa-ap42-alfalfa-1996`; `fao-feed-milling`; `eu-fdm-bat-2019` |
| `validate_atomic_selected_flow` | 清单卡 | 每个 Selected flow 必须是一项准确交换；拒绝饲料、材料、能源、燃料、包装、化学品、添加剂、副产品、废物、污染物或排放的集合或选择器标签。 | `eu-pef-2021-2279` |
| `validate_unlisted_actual_flow` | 实际粘结剂、化学品、燃料、包装、废物和排放 | 若实际合法流未列出，必须新增具有自身 row_id、属性/单位、规则、协议、来源和未决 UUID 项的准确卡；任何通用占位符均失败。 | `eu-pef-2021-2279` |
| `validate_uuid_policy` | 天工引用 | 本候选仅允许已核验参考产品、Mass 属性和单位组 UUID；其他 UUID 单元格必须留空，直至准确 hybrid search 与公开 state100 直读共同核验同一语义流。 |  |
| `validate_uuid_closure` | manifest 审查元数据 | 除带 UUID 的参考产出外，每张 UUID 为空的清单卡必须按 row_id 恰有一条匹配未决项；拒绝缺失、重复或陈旧项。 |  |
| `validate_amount_provenance` | 非参考清单数量 | 必须使用与采集协议及适用计算规则关联的 `foreground_record` 或 `calculated_value`；拒绝虚构默认值、无依据区间和无记录估算。 | `fefac-pefcr-feed-data-2021`; `eu-pef-2021-2279` |
| `validate_material_balance` | 每条路线 | 必须核对投入、产出、水分、内部回流、废物、排放和库存变化项，并披露已调查的残差。 | `eu-pef-2021-2279` |
| `validate_emission_separation` | 直接排放 | 存在时，化石 CO2、生物源 CO2、化石甲烷、一氧化二氮、一氧化碳、一氧化氮、二氧化氮和二氧化硫分别建卡；颗粒物粒径卡不得重叠，COD、BOD5、TSS、总氮和总磷负荷分别建卡。 | `eu-fdm-bat-2019`; `eu-pef-2021-2279` |
| `validate_data_quality` | 数据包证据 | 必须提供校准、产品特定组成、场址活动数据、来源和因子身份、分配记录、路线代表性、质量评估及可供审查的证据。 | `eu-pef-2021-2279`; `fefac-pefcr-feed-data-2021` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 候选公司特定前景生产数据集，经方法和数据审查后可成为 `secondary_dataset` 或 `background_dataset` |
| downstream_use | 在生产场址门口对路线特定苜蓿粗粉或团粒供应进行建模 |
| allowed_use | 仅用于声明的原料状态、人工干燥技术及燃料或无干燥路线、粉碎/筛分配置、粗粉或团粒形态、调质与粘结剂状态、包装、地理、场址技术和生产期 |
| excluded_use | 混合饲料、宠物食品、其他牧草物种、未加工干草、叶蛋白浓缩物、烘焙产品、不同干燥器或燃料组合、粗粉/团粒合并平均、动物采食或消化、粪肥管理、配送或未经额外建模的包装寿命终止 |
| required_metadata | PCR id 与 candidate 状态；准确参考 UUID 及单位支持；CPC 23320；最终形态；原料状态；干燥技术和热源；粉碎和筛网设置；制粒与调质路线；准确粘结剂或无；水分和等级；散装或每种包装组件；场址和期间；过程纳入；上游数据集身份；分配；未决 UUID；排除项 |
| required_quality_disclosure | 一手数据覆盖；仪表和秤校准；采样与分析方法；路线和技术代表性；质量与水量平衡；内部回流；直接排放；废水；分配；缺失数据；不确定性；未决身份；来源版本；核查状态 |
| update_trigger | 接收苜蓿状态或供应商组合、干燥技术或燃料、粉碎/筛网规格、制粒/调质或粘结剂、冷却器/筛网、包装配置、产品水分或等级、排放控制、废水处理、分配、背景数据集、参考 UUID 状态或代表期发生变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-2025` | 官方指南（`official_guidance`） | United Nations Statistics Division, *Central Product Classification (CPC) Version 3.0, structure and explanatory notes*, 30 June 2025. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 精确 CPC 23320 身份，以及与 CPC 2331 饲料制品和第 234 部烘焙产品的区分 |
| `us-epa-ap42-alfalfa-1996` | 官方指南（`official_guidance`） | U.S. Environmental Protection Agency, *AP-42, Section 9.9.4: Alfalfa Dehydrating*, September 1996. https://www.epa.gov/sites/default/files/2020-10/documents/c9s09-4.pdf | 苜蓿来料状态、直接燃烧回转干燥、旋风回收、锤磨、蒸汽调质、制粒、冷却、筛分、储存和颗粒物源结构；不采用 AP-42 示例因子作为默认量 |
| `eu-jrc-fdm-bref-2019` | 官方指南（`official_guidance`） | European Commission Joint Research Centre, *Best Available Techniques Reference Document for the Food, Drink and Milk Industries*, JRC118627, EUR 29978 EN, 2019, DOI 10.2760/243911. https://publications.jrc.ec.europa.eu/repository/handle/JRC118627 | 食品饮料乳品及动物饲料过程范围、公司运营、公用工程、清洁、废水、废气、监测和环境管理结构；不复制行业值为默认量 |
| `eu-fdm-bat-2019` | 标准（`standard`） | Commission Implementing Decision (EU) 2019/2031 establishing BAT conclusions for the food, drink and milk industries. https://eur-lex.europa.eu/eli/dec_impl/2019/2031/oj | 青饲料预干燥与热回收、粉碎和颗粒冷却粉尘、能源、水、干式清洁、处理、COD、BOD、TSS、氮、磷和监测结构；BAT 水平不是 PCR 默认量 |
| `fao-feed-milling` | 手册（`handbook`） | Food and Agriculture Organization of the United Nations, *Feed Milling Processes*, Chapter 18, Section 4, pelleting, cooling, and screening. https://www.fao.org/4/x5738e/x5738e0j.htm | 液态水或蒸汽调质、模压制粒、冷却器运行、筛分及颗粒细粉回流；示例运行值不作为默认量 |
| `fefac-pefcr-feed-data-2021` | 官方指南（`official_guidance`） | European Feed Manufacturers’ Federation, *Key elements in data collection for PEFCR Feed*, 2021. https://fefac.eu/wp-content/uploads/2021/10/SR_Factsheet-key-elements-data-collection.pdf | 准确饲料原料物料清单，以及制造能源、水、包装、来源和下游边界的公司一手数据 |
| `eu-pef-2021-2279` | 官方指南（`official_guidance`） | Commission Recommendation (EU) 2021/2279 on Environmental Footprint methods, consolidated English text. https://eur-lex.europa.eu/eli/reco/2021/2279/2021-12-30/eng | 产品特定 BoM、公司特定制造数据、完整投入和产出、分配、参考流归一化、数据质量、透明度及核查 |
