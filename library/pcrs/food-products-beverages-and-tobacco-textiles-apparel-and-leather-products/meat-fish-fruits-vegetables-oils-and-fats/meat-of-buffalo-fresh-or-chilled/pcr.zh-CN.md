---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.meat-of-buffalo-fresh-or-chilled
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 水牛肉，鲜或冷藏

## 1. 范围与适用性

本 PCR 适用于 CPC 3.0 子类 21112 所涵盖鲜或冷藏水牛肉的屠宰场门生产。范围包括活水牛接收、屠宰与胴体处理、取内脏与标准分割、适用时剔骨、冷却与冷藏暂存、可归入上述操作的清洗消毒、条件性现场废水处理、最终检验以及条件性销售包装。

前景边界始于屠宰场门口验收的活水牛。水牛养殖和进厂运输由上游数据集表示，不作为前景操作。零售、食品制备、消费和寿命终止位于前景边界外。

冻水牛肉、食用杂碎、非食用杂碎、皮、血、脂肪、骨和废物不属于参考产品，产生时分别记录。每张清单卡表示一个原子交换；条件性技术或材料仅在设施记录支持时记录。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.meat-of-buffalo-fresh-or-chilled |
| classification_refs | CPC 3.0: 21112, exact |
| covered_products | CPC 21112 范围内以胴体、半胴体、四分体、带骨分割品或去骨分割品形式放行的鲜或冷藏水牛肉 |
| excluded_products | 冻水牛肉；食用与非食用杂碎；牛或其他物种的肉；养殖；运输；零售；制备；消费；寿命终止 |
| representative_product | 按水牛物种、分割部位、带骨状态、脂肪修整、净质量、鲜或冷藏状态、放行温度、包装纳入情况、设施、生产期间和批次识别的所声明水牛肉分割品或胴体形式 |
| production_route | 活体动物接收；屠宰与胴体处理；取内脏、标准分割与条件性剔骨；冷却与冷藏暂存；最终检验与条件性包装；条件性现场废水处理 |
| market_state | 屠宰场或肉类加工设施门口的净合格水牛肉，鲜或冷藏且未冷冻 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供以所声明胴体或分割品形式验收合格的水牛肉 |
| How much | 1 kg 净合格产品 |
| How well | 声明水牛物种、分割部位、带骨状态、脂肪修整、鲜或冷藏状态、放行温度和包装纳入情况，并符合生产者放行规格 |
| How long or cycle | 设施门口放行的一个生产批次；无使用阶段服务期限 |
| reference_flow_link | `accepted_reference_product_output`，位于 `final_inspection_and_sale_packaging` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg 净合格鲜或冷藏水牛肉 |
| 参考产品流 | Meat of buffalo, fresh or chilled `e96ba1cf-ce0b-4a35-ac5b-8cabebb56116` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 水牛物种；胴体或分割品；带骨或去骨；脂肪修整规格；鲜或冷藏状态；放行温度；净质量基础；包装纳入情况；设施与国家；生产期间；批次；分配方法；共产品与废物去向 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | 合格参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 参考数量恰为 1 kg 净合格水牛肉；排除包装、食用杂碎、冻肉、不合格品、游离液体和运输容器。 |
| `live_and_product_mass` | 活体动物、胴体、肉、共产品与废物 | Mass | kg | 采用校准净质量，并保留质量核对所需的毛重、皮重、库存、水分和处置记录。 |
| `electricity_energy` | 各阶段电力行 | Energy | kWh | 保持阶段特定计量；仅按有记录因子换算，且不得将电力与蒸汽或燃料合并。 |
| `thermal_and_fuel_energy` | 外购蒸汽与天然气 | Energy | MJ | 保留用于计算 MJ 的计量物理量及热值或焓值基础。 |
| `liquid_and_refrigerant_mass` | 水、废水、柴油、液化石油气、化学品、氨与排放 | Mass | kg | 采用计量质量或有记录的密度/浓度换算；适用时保留溶液浓度和环境介质。 |
| `temperature_state` | 鲜或冷藏肉 | Temperature | °C | 保留进料和放行实测温度以及所声明鲜或冷藏状态；本规则不设无证据的默认温度限值。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 在屠宰场门口验收的活水牛，记录物种、来源、供应方、接收时间、动物数量、活体净质量和验收状态 |
| starting_condition_role | 前景投入，其养殖和进厂运输负荷由单独识别的上游数据集提供 |
| product_classification_scope | 仅 CPC 3.0 子类 21112：鲜或冷藏水牛肉 |
| recursive_input_rule | 进入范围内包装或加工操作的任何外购鲜或冷藏水牛肉保持为单独计量的产品投入，并披露供应商、分割品、状态、质量和上游数据集；不得与设施自身输出静默合并 |
| upstream_dataset_requirement | 识别活水牛养殖和进厂运输数据集，以及水、电力、蒸汽、热水、燃料、化学品、制冷剂和包装的生产数据集；保持地理、技术、期间和分配相容性 |
| disclosure | 声明设施、过程配置、所纳入操作、水牛物种、产品形式、鲜或冷藏状态、放行温度、生产期间、包装纳入情况、废水路线、制冷剂、燃料、共产品状态、废物去向、分配和所有代理 |

### 边界规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_live_animal_gate` | foreground_start | 前景边界始于屠宰场门口验收的活水牛，以及跨越所纳入过程边界的材料、公用工程、化学品、制冷剂和包装。 | `ec-jrc-sa-bref-jrc135916`, `eu-recommendation-2021-2279` |
| `boundary_upstream_exclusions` | farming_and_transport | 水牛养殖和进厂运输位于前景边界外，须使用单独识别的上游数据集；零售、制备、消费和寿命终止属于下游排除项。 | `ec-jrc-sa-bref-jrc135916`, `eu-recommendation-2021-2279` |
| `boundary_product_state` | cpc_21112_scope | 仅将在鲜或冷藏状态放行的水牛肉作为参考产品；冻肉以及食用或非食用杂碎不计入其质量，产生时须单独记录。 | `unsd-cpc-3-0-21112`, `ec-jrc-sa-bref-jrc135916` |
| `boundary_conditional_operations` | conditional_technology | 外购蒸汽、热水、各燃料、R717 氨、处理化学品、现场废水处理和包装，仅在所声明设施实际使用时纳入。 | `ec-jrc-sa-bref-jrc135916`, `eu-recommendation-2021-2279` |
| `boundary_direct_releases` | air_and_water_emissions | 直接空气或水排放仅依据监测或经核实的前景平衡记录；不得仅因存在某项投入而推断排放。 | `ec-jrc-sa-bref-jrc135916`, `eu-recommendation-2021-2279` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `animal_receiving_slaughter_and_dressing` | 动物接收、屠宰与胴体处理 | `required` | 对于以前景设施接收活水牛为起点的屠宰场数据集为必需。 | 前景屠宰与初步胴体处理 | 每 1 kg 转出的合格水牛胴体 |
| `evisceration_cutting_and_deboning` | 取内脏、标准分割与剔骨 | `required` | 将水牛胴体转化为所声明肉类分割品时为必需。 | 前景肉类分割准备与共产品分离 | 每 1 kg 冷却前合格水牛肉 |
| `chilling_and_cold_storage` | 肉品冷却与冷藏 | `required` | 使合格水牛肉达到所声明鲜或冷藏市场状态时为必需。 | 前景温度调节与冷藏暂存 | 每 1 kg 转出的合格冷藏水牛肉 |
| `wastewater_treatment` | 屠宰场废水处理 | `conditional` | 当屠宰、分割或除霜废水在前景设施内处理时纳入；否则记录转往实际外部处理数据集。 | 过程特定废水的前景处理 | 每 1 kg 经处理屠宰场废水 |
| `final_inspection_and_sale_packaging` | 最终检验与销售包装 | `required` | 最终检验为必需；各包装投入按所声明销售形式条件性适用。 | 前景放行、参考产品归一化与销售包装 | 每 1 kg 净合格参考产品 |

### 过程：动物接收、屠宰与胴体处理（`animal_receiving_slaughter_and_dressing`）

#### 输入

##### 产品流

###### 接收的活水牛（`live_buffalo_input`）

当始终记录跨越屠宰场大门的活体动物；养殖和运输保持为上游过程。，将 Live buffalo 作为一个独立交换记录。数量规则为：由校准地磅或动物接收记录取得的接收活体净质量。

- 选定流: Live buffalo
- 流属性/单位: Mass / kg
- 数量规则: 由校准地磅或动物接收记录取得的接收活体净质量
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 产品特定（`product_specific`）
- 归一化基准: 每 1 kg 转出的合格水牛胴体
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_live_animal_receipts`
- 来源: `ec-jrc-sa-bref-jrc135916`, `eu-recommendation-2021-2279`

###### 屠宰与胴体处理工艺水（`process_water_slaughter_input`）

当仅记录跨越本过程边界的水。，将 Process water 作为一个独立交换记录。数量规则为：计量并归入待宰、屠宰、剥皮、胴体冲洗和设备漂洗的用水。

- 选定流: Process water
- 流属性/单位: Mass / kg
- 数量规则: 计量并归入待宰、屠宰、剥皮、胴体冲洗和设备漂洗的用水
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 转出的合格水牛胴体
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_slaughter_utility_records`
- 来源: `ec-jrc-sa-bref-jrc135916`, `eu-recommendation-2021-2279`

###### 屠宰与胴体处理用电（`electricity_slaughter_input`）

当记录保定、击晕、吊挂、输送、泵送和通风所用电力。，将 Electricity 作为一个独立交换记录。数量规则为：屠宰区域分表计量电量，或依据有记录的电表进行计算分配。

- 选定流: Electricity
- 流属性/单位: Energy / kWh
- 数量规则: 屠宰区域分表计量电量，或依据有记录的电表进行计算分配
- 数值来源模式: 计算值（`calculated_value`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 转出的合格水牛胴体
- 基准类型: 过程输出（`process_output`）
- 证据类型: 由采集计算（`calculated_from_collection`）
- 采集协议: `cp_slaughter_utility_records`
- 来源: `ec-jrc-sa-bref-jrc135916`, `eu-recommendation-2021-2279`

###### 屠宰与胴体处理外购蒸汽（`purchased_steam_slaughter_input`）

当外购蒸汽跨边界供给工艺热时条件性记录。，将 Purchased steam 作为一个独立交换记录。数量规则为：按供应商计量蒸汽量并用有记录的压力、凝结水状态和焓值换算。

- 选定流: Purchased steam
- 流属性/单位: Energy / MJ
- 数量规则: 按供应商计量蒸汽量并用有记录的压力、凝结水状态和焓值换算
- 数值来源模式: 计算值（`calculated_value`）
- 适用范围: 技术特定（`technology_specific`）
- 归一化基准: 每 1 kg 转出的合格水牛胴体
- 基准类型: 过程输出（`process_output`）
- 证据类型: 由采集计算（`calculated_from_collection`）
- 采集协议: `cp_slaughter_utility_records`
- 来源: `ec-jrc-sa-bref-jrc135916`, `eu-recommendation-2021-2279`

###### 屠宰与胴体处理外购热水（`purchased_hot_water_slaughter_input`）

当热水为外购且跨越过程边界时条件性记录。，将 Hot water 作为一个独立交换记录。数量规则为：计量外购热水质量并保留供回水温度。

- 选定流: Hot water
- 流属性/单位: Mass / kg
- 数量规则: 计量外购热水质量并保留供回水温度
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 技术特定（`technology_specific`）
- 归一化基准: 每 1 kg 转出的合格水牛胴体
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_slaughter_utility_records`
- 来源: `ec-jrc-sa-bref-jrc135916`, `eu-recommendation-2021-2279`

###### 屠宰现场供热用天然气（`natural_gas_slaughter_input`）

当现场燃烧天然气为范围内过程供热时条件性记录。，将 Natural gas 作为一个独立交换记录。数量规则为：计量并归入屠宰区域锅炉或加热器的天然气能量。

- 选定流: Natural gas
- 流属性/单位: Energy / MJ
- 数量规则: 计量并归入屠宰区域锅炉或加热器的天然气能量
- 数值来源模式: 计算值（`calculated_value`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 转出的合格水牛胴体
- 基准类型: 过程输出（`process_output`）
- 证据类型: 由采集计算（`calculated_from_collection`）
- 采集协议: `cp_slaughter_fuel_records`
- 来源: `ec-jrc-sa-bref-jrc135916`, `eu-recommendation-2021-2279`

###### 屠宰备用发电机柴油（`diesel_backup_generator_input`）

当柴油发电机实际向屠宰过程供电时条件性记录。，将 Diesel fuel 作为一个独立交换记录。数量规则为：按油罐领用与退回平衡及服务于范围内屠宰负荷的运行小时分配。

- 选定流: Diesel fuel
- 流属性/单位: Mass / kg
- 数量规则: 按油罐领用与退回平衡及服务于范围内屠宰负荷的运行小时分配
- 数值来源模式: 计算值（`calculated_value`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 转出的合格水牛胴体
- 基准类型: 过程输出（`process_output`）
- 证据类型: 由采集计算（`calculated_from_collection`）
- 采集协议: `cp_slaughter_fuel_records`
- 来源: `ec-jrc-sa-bref-jrc135916`, `eu-recommendation-2021-2279`

###### 屠宰搬运用液化石油气（`lpg_forklift_input`）

当使用液化石油气的设备搬运胴体或屠宰物料时条件性记录。，将 Liquefied petroleum gas 作为一个独立交换记录。数量规则为：按钢瓶或储罐领用平衡分配至范围内搬运设备。

- 选定流: Liquefied petroleum gas
- 流属性/单位: Mass / kg
- 数量规则: 按钢瓶或储罐领用平衡分配至范围内搬运设备
- 数值来源模式: 计算值（`calculated_value`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 转出的合格水牛胴体
- 基准类型: 过程输出（`process_output`）
- 证据类型: 由采集计算（`calculated_from_collection`）
- 采集协议: `cp_slaughter_fuel_records`
- 来源: `ec-jrc-sa-bref-jrc135916`, `eu-recommendation-2021-2279`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 转出的水牛胴体（`dressed_buffalo_carcass_output`）

当将合格水牛胴体作为单一中间产品转移记录。，将 Dressed buffalo carcass 作为一个独立交换记录。数量规则为：计量转入取内脏与分割环节的合格胴体质量。

- 选定流: Dressed buffalo carcass
- 流属性/单位: Mass / kg
- 数量规则: 计量转入取内脏与分割环节的合格胴体质量
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 产品特定（`product_specific`）
- 归一化基准: 每 1 kg 转出的合格水牛胴体
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_slaughter_output_mass_balance`
- 来源: `ec-jrc-sa-bref-jrc135916`, `eu-recommendation-2021-2279`

###### 回收水牛血（`buffalo_blood_output`）

当仅在水牛血作为单独管理的共产品收集时记录；否则按实际废物去向分类。，将 Buffalo blood 作为一个独立交换记录。数量规则为：分别收集并计量、用于已声明食用或技术用途的质量。

- 选定流: Buffalo blood
- 流属性/单位: Mass / kg
- 数量规则: 分别收集并计量、用于已声明食用或技术用途的质量
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 产品特定（`product_specific`）
- 归一化基准: 每 1 kg 转出的合格水牛胴体
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_slaughter_output_mass_balance`
- 来源: `ec-jrc-sa-bref-jrc135916`, `eu-recommendation-2021-2279`

###### 回收水牛皮（`buffalo_hide_output`）

当将胴体处理后转出的水牛皮作为一个单独管理的共产品记录。，将 Buffalo hide 作为一个独立交换记录。数量规则为：计量转出供进一步加工的水牛皮质量。

- 选定流: Buffalo hide
- 流属性/单位: Mass / kg
- 数量规则: 计量转出供进一步加工的水牛皮质量
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 产品特定（`product_specific`）
- 归一化基准: 每 1 kg 转出的合格水牛胴体
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_slaughter_output_mass_balance`
- 来源: `ec-jrc-sa-bref-jrc135916`, `eu-recommendation-2021-2279`

##### 废物流

###### 水牛胃肠内容物废物（`buffalo_gut_contents_waste_output`）

当将胃肠内容物与组织残余物和废水分开记录。，将 Buffalo gut contents waste 作为一个独立交换记录。数量规则为：计量容器质量或按质量差计算并送往有记录处理去向的质量。

- 选定流: Buffalo gut contents waste
- 流属性/单位: Mass / kg
- 数量规则: 计量容器质量或按质量差计算并送往有记录处理去向的质量
- 数值来源模式: 计算值（`calculated_value`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 转出的合格水牛胴体
- 基准类型: 过程输出（`process_output`）
- 证据类型: 由采集计算（`calculated_from_collection`）
- 采集协议: `cp_slaughter_waste_records`
- 来源: `ec-jrc-sa-bref-jrc135916`, `eu-recommendation-2021-2279`

###### 非食用水牛屠宰组织废物（`non_edible_slaughter_tissue_waste_output`）

当将非食用组织与血、皮、胃肠内容物和分割废物分开记录。，将 Non-edible buffalo slaughter tissue waste 作为一个独立交换记录。数量规则为：计量单独收集并送往有记录去向的组织质量。

- 选定流: Non-edible buffalo slaughter tissue waste
- 流属性/单位: Mass / kg
- 数量规则: 计量单独收集并送往有记录去向的组织质量
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 转出的合格水牛胴体
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_slaughter_waste_records`
- 来源: `ec-jrc-sa-bref-jrc135916`, `eu-recommendation-2021-2279`

###### 屠宰与胴体处理废水（`slaughter_wastewater_output`）

当将该废水转移与分割废水和冷却除霜废水分开记录。，将 Slaughterhouse wastewater 作为一个独立交换记录。数量规则为：计量从屠宰与胴体处理转入废水处理的废水质量。

- 选定流: Slaughterhouse wastewater
- 流属性/单位: Mass / kg
- 数量规则: 计量从屠宰与胴体处理转入废水处理的废水质量
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 转出的合格水牛胴体
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_slaughter_waste_records`
- 来源: `ec-jrc-sa-bref-jrc135916`, `eu-recommendation-2021-2279`

##### 基本流

###### 屠宰区域燃烧化石二氧化碳（`carbon_dioxide_fossil_slaughter_output`）

当仅记录现场天然气、柴油或液化石油气燃烧直接排放的化石二氧化碳。，将 Carbon dioxide, fossil 作为一个独立交换记录。数量规则为：按燃料特定碳平衡或监测质量归入范围内燃烧。

- 选定流: Carbon dioxide, fossil
- 流属性/单位: Mass / kg
- 数量规则: 按燃料特定碳平衡或监测质量归入范围内燃烧
- 数值来源模式: 计算值（`calculated_value`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 转出的合格水牛胴体
- 基准类型: 过程输出（`process_output`）
- 证据类型: 由采集计算（`calculated_from_collection`）
- 采集协议: `cp_combustion_emissions`
- 来源: `ec-jrc-sa-bref-jrc135916`, `eu-recommendation-2021-2279`

###### 屠宰区域燃烧氮氧化物（`nitrogen_oxides_slaughter_output`）

当将直接排入空气的氮氧化物作为与二氧化碳不同的单一排放记录。，将 Nitrogen oxides 作为一个独立交换记录。数量规则为：烟气监测，或按燃料和设备特定计算归入范围内燃烧。

- 选定流: Nitrogen oxides
- 流属性/单位: Mass / kg
- 数量规则: 烟气监测，或按燃料和设备特定计算归入范围内燃烧
- 数值来源模式: 计算值（`calculated_value`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 转出的合格水牛胴体
- 基准类型: 过程输出（`process_output`）
- 证据类型: 由采集计算（`calculated_from_collection`）
- 采集协议: `cp_combustion_emissions`
- 来源: `ec-jrc-sa-bref-jrc135916`, `eu-recommendation-2021-2279`

### 过程：取内脏、标准分割与剔骨（`evisceration_cutting_and_deboning`）

#### 输入

##### 产品流

###### 进入分割的水牛胴体（`dressed_buffalo_carcass_input`）

当将进入取内脏和分割的胴体作为一个中间投入记录。，将 Dressed buffalo carcass 作为一个独立交换记录。数量规则为：计量从胴体处理环节接收的胴体转移质量。

- 选定流: Dressed buffalo carcass
- 流属性/单位: Mass / kg
- 数量规则: 计量从胴体处理环节接收的胴体转移质量
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 产品特定（`product_specific`）
- 归一化基准: 每 1 kg 冷却前合格水牛肉
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_cutting_input_records`
- 来源: `ec-jrc-sa-bref-jrc135916`, `eu-recommendation-2021-2279`

###### 分割与剔骨工艺水（`process_water_cutting_input`）

当将本分割过程供水与屠宰用水和集中清洁用水分开记录。，将 Process water 作为一个独立交换记录。数量规则为：计量并归入胴体冲洗、分割、剔骨和设备漂洗的用水。

- 选定流: Process water
- 流属性/单位: Mass / kg
- 数量规则: 计量并归入胴体冲洗、分割、剔骨和设备漂洗的用水
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 冷却前合格水牛肉
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_cutting_utility_records`
- 来源: `ec-jrc-sa-bref-jrc135916`, `eu-recommendation-2021-2279`

###### 分割与剔骨用电（`electricity_cutting_input`）

当记录锯切、刀具、输送、抽风和房间服务所用电力。，将 Electricity 作为一个独立交换记录。数量规则为：分表计量电量，或依据有记录的分割间设备负荷计算分配。

- 选定流: Electricity
- 流属性/单位: Energy / kWh
- 数量规则: 分表计量电量，或依据有记录的分割间设备负荷计算分配
- 数值来源模式: 计算值（`calculated_value`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 冷却前合格水牛肉
- 基准类型: 过程输出（`process_output`）
- 证据类型: 由采集计算（`calculated_from_collection`）
- 采集协议: `cp_cutting_utility_records`
- 来源: `ec-jrc-sa-bref-jrc135916`, `eu-recommendation-2021-2279`

###### 分割卫生用外购热水（`purchased_hot_water_cutting_input`）

当外购热水跨越分割过程边界时条件性记录。，将 Hot water 作为一个独立交换记录。数量规则为：计量分割过程中使用的热水质量并保留温度。

- 选定流: Hot water
- 流属性/单位: Mass / kg
- 数量规则: 计量分割过程中使用的热水质量并保留温度
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 技术特定（`technology_specific`）
- 归一化基准: 每 1 kg 冷却前合格水牛肉
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_cutting_utility_records`
- 来源: `ec-jrc-sa-bref-jrc135916`, `eu-recommendation-2021-2279`

###### 分割设备氢氧化钠清洗剂（`sodium_hydroxide_cleaner_cutting_input`）

当本过程使用氢氧化钠清洗剂时条件性记录。，将 Sodium hydroxide solution 作为一个独立交换记录。数量规则为：按化学品领用量扣除退回库存并按溶液浓度校正。

- 选定流: Sodium hydroxide solution
- 流属性/单位: Mass / kg
- 数量规则: 按化学品领用量扣除退回库存并按溶液浓度校正
- 数值来源模式: 计算值（`calculated_value`）
- 适用范围: 技术特定（`technology_specific`）
- 归一化基准: 每 1 kg 冷却前合格水牛肉
- 基准类型: 过程输出（`process_output`）
- 证据类型: 由采集计算（`calculated_from_collection`）
- 采集协议: `cp_cutting_chemical_records`
- 来源: `ec-jrc-sa-bref-jrc135916`, `eu-recommendation-2021-2279`

###### 分割设备过氧乙酸消毒剂（`peracetic_acid_disinfectant_cutting_input`）

当过氧乙酸为有记录的消毒剂时条件性记录。，将 Peracetic acid solution 作为一个独立交换记录。数量规则为：按化学品领用量扣除退回库存并按有效成分浓度校正。

- 选定流: Peracetic acid solution
- 流属性/单位: Mass / kg
- 数量规则: 按化学品领用量扣除退回库存并按有效成分浓度校正
- 数值来源模式: 计算值（`calculated_value`）
- 适用范围: 技术特定（`technology_specific`）
- 归一化基准: 每 1 kg 冷却前合格水牛肉
- 基准类型: 过程输出（`process_output`）
- 证据类型: 由采集计算（`calculated_from_collection`）
- 采集协议: `cp_cutting_chemical_records`
- 来源: `ec-jrc-sa-bref-jrc135916`, `eu-recommendation-2021-2279`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 冷却前鲜水牛肉（`fresh_buffalo_meat_before_chilling_output`）

当将冷却前所声明带骨或去骨肉分割品作为一个中间输出记录。，将 Fresh buffalo meat before chilling 作为一个独立交换记录。数量规则为：计量转入冷却环节的合格肉质量。

- 选定流: Fresh buffalo meat before chilling
- 流属性/单位: Mass / kg
- 数量规则: 计量转入冷却环节的合格肉质量
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 产品特定（`product_specific`）
- 归一化基准: 每 1 kg 冷却前合格水牛肉
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_cutting_output_mass_balance`
- 来源: `ec-jrc-sa-bref-jrc135916`, `eu-recommendation-2021-2279`

###### 食用水牛肝（`edible_buffalo_liver_output`）

当将食用水牛肝作为独立共产品记录，且不得计入 CPC 21112 参考肉产品。，将 Buffalo liver, edible 作为一个独立交换记录。数量规则为：计量单独验收供食用的水牛肝质量。

- 选定流: Buffalo liver, edible
- 流属性/单位: Mass / kg
- 数量规则: 计量单独验收供食用的水牛肝质量
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 产品特定（`product_specific`）
- 归一化基准: 每 1 kg 冷却前合格水牛肉
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_cutting_output_mass_balance`
- 来源: `ec-jrc-sa-bref-jrc135916`, `eu-recommendation-2021-2279`

###### 食用水牛心（`edible_buffalo_heart_output`）

当将食用水牛心作为独立共产品记录，并从参考肉质量中排除。，将 Buffalo heart, edible 作为一个独立交换记录。数量规则为：计量单独验收供食用的水牛心质量。

- 选定流: Buffalo heart, edible
- 流属性/单位: Mass / kg
- 数量规则: 计量单独验收供食用的水牛心质量
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 产品特定（`product_specific`）
- 归一化基准: 每 1 kg 冷却前合格水牛肉
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_cutting_output_mass_balance`
- 来源: `ec-jrc-sa-bref-jrc135916`, `eu-recommendation-2021-2279`

###### 分离水牛脂肪（`buffalo_fat_output`）

当分离脂肪具有有记录的后续用途时作为一个共产品记录。，将 Buffalo fat 作为一个独立交换记录。数量规则为：计量单独收集并转供食用或技术加工的脂肪质量。

- 选定流: Buffalo fat
- 流属性/单位: Mass / kg
- 数量规则: 计量单独收集并转供食用或技术加工的脂肪质量
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 产品特定（`product_specific`）
- 归一化基准: 每 1 kg 冷却前合格水牛肉
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_cutting_output_mass_balance`
- 来源: `ec-jrc-sa-bref-jrc135916`, `eu-recommendation-2021-2279`

###### 分离水牛骨（`buffalo_bones_output`）

当有记录的后续利用去向时，将骨作为一个单独管理的共产品记录。，将 Buffalo bones 作为一个独立交换记录。数量规则为：计量单独收集并转供进一步加工的骨质量。

- 选定流: Buffalo bones
- 流属性/单位: Mass / kg
- 数量规则: 计量单独收集并转供进一步加工的骨质量
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 产品特定（`product_specific`）
- 归一化基准: 每 1 kg 冷却前合格水牛肉
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_cutting_output_mass_balance`
- 来源: `ec-jrc-sa-bref-jrc135916`, `eu-recommendation-2021-2279`

##### 废物流

###### 非食用水牛分割组织废物（`non_edible_buffalo_tissue_cutting_waste_output`）

当将该分割残余物与食用脏器、脂肪、骨和不合格肉分开记录。，将 Non-edible buffalo cutting tissue waste 作为一个独立交换记录。数量规则为：计量送往有记录处理去向的组织残余物质量。

- 选定流: Non-edible buffalo cutting tissue waste
- 流属性/单位: Mass / kg
- 数量规则: 计量送往有记录处理去向的组织残余物质量
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 冷却前合格水牛肉
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_cutting_waste_records`
- 来源: `ec-jrc-sa-bref-jrc135916`, `eu-recommendation-2021-2279`

###### 分割与剔骨废水（`cutting_wastewater_output`）

当将分割废水与屠宰废水和冷却除霜废水分开记录。，将 Meat cutting wastewater 作为一个独立交换记录。数量规则为：计量从分割与剔骨转入处理环节的废水质量。

- 选定流: Meat cutting wastewater
- 流属性/单位: Mass / kg
- 数量规则: 计量从分割与剔骨转入处理环节的废水质量
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 冷却前合格水牛肉
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_cutting_waste_records`
- 来源: `ec-jrc-sa-bref-jrc135916`, `eu-recommendation-2021-2279`

###### 分割环节不合格水牛肉（`rejected_buffalo_meat_cutting_waste_output`）

当将不合格肉与常规修整物和非食用组织分开记录。，将 Rejected buffalo meat waste 作为一个独立交换记录。数量规则为：按处置代码计量的不合格肉质量。

- 选定流: Rejected buffalo meat waste
- 流属性/单位: Mass / kg
- 数量规则: 按处置代码计量的不合格肉质量
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 冷却前合格水牛肉
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_cutting_waste_records`
- 来源: `ec-jrc-sa-bref-jrc135916`, `eu-recommendation-2021-2279`

##### 基本流

### 过程：肉品冷却与冷藏（`chilling_and_cold_storage`）

#### 输入

##### 产品流

###### 进入冷却的鲜水牛肉（`fresh_buffalo_meat_before_chilling_input`）

当将进入冷却的肉转移作为一个产品投入记录。，将 Fresh buffalo meat before chilling 作为一个独立交换记录。数量规则为：计量进入冷却系统的合格转移质量。

- 选定流: Fresh buffalo meat before chilling
- 流属性/单位: Mass / kg
- 数量规则: 计量进入冷却系统的合格转移质量
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 产品特定（`product_specific`）
- 归一化基准: 每 1 kg 转出的合格冷藏水牛肉
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_chilling_product_records`
- 来源: `ec-jrc-sa-bref-jrc135916`, `eu-recommendation-2021-2279`

###### 冷却与冷藏用电（`electricity_chilling_input`）

当将制冷用电与屠宰、分割、废水和包装用电分开记录。，将 Electricity 作为一个独立交换记录。数量规则为：分表计量电量，或依据压缩机、风机、泵和冷库负荷计算分配。

- 选定流: Electricity
- 流属性/单位: Energy / kWh
- 数量规则: 分表计量电量，或依据压缩机、风机、泵和冷库负荷计算分配
- 数值来源模式: 计算值（`calculated_value`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 转出的合格冷藏水牛肉
- 基准类型: 过程输出（`process_output`）
- 证据类型: 由采集计算（`calculated_from_collection`）
- 采集协议: `cp_chilling_utility_records`
- 来源: `ec-jrc-sa-bref-jrc135916`, `eu-recommendation-2021-2279`

###### 氨制冷剂补充（`ammonia_refrigerant_replenishment_input`）

当仅当范围内制冷系统使用 R717 氨并发生补充时条件性记录。，将 Ammonia 作为一个独立交换记录。数量规则为：计量并归入制冷系统和报告期的检修补充量。

- 选定流: Ammonia
- 流属性/单位: Mass / kg
- 数量规则: 计量并归入制冷系统和报告期的检修补充量
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 技术特定（`technology_specific`）
- 归一化基准: 每 1 kg 转出的合格冷藏水牛肉
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_refrigerant_records`
- 来源: `ec-jrc-sa-bref-jrc135916`, `eu-recommendation-2021-2279`

###### 冷却与除霜工艺水（`process_water_chilling_input`）

当仅记录供给冷却与冷藏设备的水。，将 Process water 作为一个独立交换记录。数量规则为：计量并归入范围内冷却、适用时表面处理和除霜的用水。

- 选定流: Process water
- 流属性/单位: Mass / kg
- 数量规则: 计量并归入范围内冷却、适用时表面处理和除霜的用水
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 转出的合格冷藏水牛肉
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_chilling_utility_records`
- 来源: `ec-jrc-sa-bref-jrc135916`, `eu-recommendation-2021-2279`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 转出的合格冷藏水牛肉（`chilled_buffalo_meat_output`）

当仅记录处于所声明鲜或冷藏状态的合格水牛肉；排除冻肉。，将 Chilled buffalo meat 作为一个独立交换记录。数量规则为：计量从冷却环节放行至最终检验或包装的合格肉净质量。

- 选定流: Chilled buffalo meat
- 流属性/单位: Mass / kg
- 数量规则: 计量从冷却环节放行至最终检验或包装的合格肉净质量
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 产品特定（`product_specific`）
- 归一化基准: 每 1 kg 转出的合格冷藏水牛肉
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_chilling_product_records`
- 来源: `ec-jrc-sa-bref-jrc135916`, `eu-recommendation-2021-2279`

##### 废物流

###### 冷却设备除霜废水（`chiller_defrost_wastewater_output`）

当将除霜废水与屠宰废水和分割废水分开记录。，将 Chiller defrost wastewater 作为一个独立交换记录。数量规则为：计量转入处理环节的除霜废水质量。

- 选定流: Chiller defrost wastewater
- 流属性/单位: Mass / kg
- 数量规则: 计量转入处理环节的除霜废水质量
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 转出的合格冷藏水牛肉
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_chilling_waste_records`
- 来源: `ec-jrc-sa-bref-jrc135916`, `eu-recommendation-2021-2279`

###### 冷藏环节腐败水牛肉（`spoiled_buffalo_meat_cold_storage_waste_output`）

当将冷藏腐败品与分割不合格品和包装不合格品分开记录。，将 Spoiled buffalo meat waste 作为一个独立交换记录。数量规则为：按处置记录计量的腐败或温度偏离肉质量。

- 选定流: Spoiled buffalo meat waste
- 流属性/单位: Mass / kg
- 数量规则: 按处置记录计量的腐败或温度偏离肉质量
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 转出的合格冷藏水牛肉
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_chilling_waste_records`
- 来源: `ec-jrc-sa-bref-jrc135916`, `eu-recommendation-2021-2279`

##### 基本流

###### 排入空气的氨制冷剂（`ammonia_refrigerant_to_air_output`）

当仅在监测或经核实平衡证明发生损失时记录直接氨排放；不得仅由投入存在推断排放。，将 Ammonia 作为一个独立交换记录。数量规则为：泄漏监测，或经核实的制冷剂库存平衡归入报告期。

- 选定流: Ammonia
- 流属性/单位: Mass / kg
- 数量规则: 泄漏监测，或经核实的制冷剂库存平衡归入报告期
- 数值来源模式: 计算值（`calculated_value`）
- 适用范围: 技术特定（`technology_specific`）
- 归一化基准: 每 1 kg 转出的合格冷藏水牛肉
- 基准类型: 过程输出（`process_output`）
- 证据类型: 由采集计算（`calculated_from_collection`）
- 采集协议: `cp_refrigerant_records`
- 来源: `ec-jrc-sa-bref-jrc135916`, `eu-recommendation-2021-2279`

### 过程：屠宰场废水处理（`wastewater_treatment`）

#### 输入

##### 产品流

###### 废水处理用电（`electricity_wastewater_treatment_input`）

当将废水处理用电与生产阶段用电分开记录。，将 Electricity 作为一个独立交换记录。数量规则为：分表计量电量，或依据泵送、曝气、搅拌和脱水负荷计算分配。

- 选定流: Electricity
- 流属性/单位: Energy / kWh
- 数量规则: 分表计量电量，或依据泵送、曝气、搅拌和脱水负荷计算分配
- 数值来源模式: 计算值（`calculated_value`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 经处理屠宰场废水
- 基准类型: 过程输出（`process_output`）
- 证据类型: 由采集计算（`calculated_from_collection`）
- 采集协议: `cp_wastewater_treatment_input_records`
- 来源: `ec-jrc-sa-bref-jrc135916`, `eu-recommendation-2021-2279`

###### 废水处理用氯化铁（`ferric_chloride_wastewater_input`）

当实际投加氯化铁用于混凝或除磷时条件性记录。，将 Ferric chloride solution 作为一个独立交换记录。数量规则为：按化学品领用量扣除退回库存并按有效成分浓度校正。

- 选定流: Ferric chloride solution
- 流属性/单位: Mass / kg
- 数量规则: 按化学品领用量扣除退回库存并按有效成分浓度校正
- 数值来源模式: 计算值（`calculated_value`）
- 适用范围: 技术特定（`technology_specific`）
- 归一化基准: 每 1 kg 经处理屠宰场废水
- 基准类型: 过程输出（`process_output`）
- 证据类型: 由采集计算（`calculated_from_collection`）
- 采集协议: `cp_wastewater_treatment_input_records`
- 来源: `ec-jrc-sa-bref-jrc135916`, `eu-recommendation-2021-2279`

###### 废水 pH 控制用氢氧化钠（`sodium_hydroxide_wastewater_input`）

当实际投加氢氧化钠控制 pH 时条件性记录。，将 Sodium hydroxide solution 作为一个独立交换记录。数量规则为：按化学品领用量扣除退回库存并按溶液浓度校正。

- 选定流: Sodium hydroxide solution
- 流属性/单位: Mass / kg
- 数量规则: 按化学品领用量扣除退回库存并按溶液浓度校正
- 数值来源模式: 计算值（`calculated_value`）
- 适用范围: 技术特定（`technology_specific`）
- 归一化基准: 每 1 kg 经处理屠宰场废水
- 基准类型: 过程输出（`process_output`）
- 证据类型: 由采集计算（`calculated_from_collection`）
- 采集协议: `cp_wastewater_treatment_input_records`
- 来源: `ec-jrc-sa-bref-jrc135916`, `eu-recommendation-2021-2279`

##### 废物流

###### 进入处理的屠宰与胴体处理废水（`slaughter_wastewater_treatment_input`）

当单独记录来自屠宰与胴体处理的废物转移。，将 Slaughterhouse wastewater 作为一个独立交换记录。数量规则为：计量进入现场处理的屠宰废水质量。

- 选定流: Slaughterhouse wastewater
- 流属性/单位: Mass / kg
- 数量规则: 计量进入现场处理的屠宰废水质量
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 经处理屠宰场废水
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_wastewater_influent_records`
- 来源: `ec-jrc-sa-bref-jrc135916`, `eu-recommendation-2021-2279`

###### 进入处理的分割与剔骨废水（`cutting_wastewater_treatment_input`）

当单独记录来自分割与剔骨的废物转移。，将 Meat cutting wastewater 作为一个独立交换记录。数量规则为：计量进入现场处理的分割废水质量。

- 选定流: Meat cutting wastewater
- 流属性/单位: Mass / kg
- 数量规则: 计量进入现场处理的分割废水质量
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 经处理屠宰场废水
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_wastewater_influent_records`
- 来源: `ec-jrc-sa-bref-jrc135916`, `eu-recommendation-2021-2279`

###### 进入处理的冷却设备除霜废水（`chiller_defrost_wastewater_treatment_input`）

当将除霜废物转移与屠宰废水和分割废水分开记录。，将 Chiller defrost wastewater 作为一个独立交换记录。数量规则为：计量进入现场处理的冷却设备除霜废水质量。

- 选定流: Chiller defrost wastewater
- 流属性/单位: Mass / kg
- 数量规则: 计量进入现场处理的冷却设备除霜废水质量
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 经处理屠宰场废水
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_wastewater_influent_records`
- 来源: `ec-jrc-sa-bref-jrc135916`, `eu-recommendation-2021-2279`

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 屠宰场废水处理污泥（`wastewater_treatment_sludge_output`）

当将污泥与筛渣和液体出水分开记录。，将 Slaughterhouse wastewater-treatment sludge 作为一个独立交换记录。数量规则为：计量脱水污泥质量并保留干物质含量和去向。

- 选定流: Slaughterhouse wastewater-treatment sludge
- 流属性/单位: Mass / kg
- 数量规则: 计量脱水污泥质量并保留干物质含量和去向
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 经处理屠宰场废水
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_wastewater_treatment_output_records`
- 来源: `ec-jrc-sa-bref-jrc135916`, `eu-recommendation-2021-2279`

###### 屠宰场废水筛渣（`wastewater_screenings_output`）

当将筛渣作为与污泥不同的一种固体废物记录。，将 Slaughterhouse wastewater screenings 作为一个独立交换记录。数量规则为：计量送往有记录处理去向的筛渣质量。

- 选定流: Slaughterhouse wastewater screenings
- 流属性/单位: Mass / kg
- 数量规则: 计量送往有记录处理去向的筛渣质量
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 经处理屠宰场废水
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_wastewater_treatment_output_records`
- 来源: `ec-jrc-sa-bref-jrc135916`, `eu-recommendation-2021-2279`

##### 基本流

###### 排入水体的化学需氧量（`chemical_oxygen_demand_to_water_output`）

当处理出水直接排放时，将排入水体的 COD 作为一个监测排放记录。，将 Chemical oxygen demand 作为一个独立交换记录。数量规则为：同一期间出水浓度乘以合规排放水量。

- 选定流: Chemical oxygen demand
- 流属性/单位: Mass / kg
- 数量规则: 同一期间出水浓度乘以合规排放水量
- 数值来源模式: 计算值（`calculated_value`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 经处理屠宰场废水
- 基准类型: 过程输出（`process_output`）
- 证据类型: 由采集计算（`calculated_from_collection`）
- 采集协议: `cp_effluent_monitoring`
- 来源: `ec-jrc-sa-bref-jrc135916`, `eu-recommendation-2021-2279`

###### 排入水体的总氮（`total_nitrogen_to_water_output`）

当将排入水体的总氮与 COD 和磷分开记录。，将 Nitrogen, total 作为一个独立交换记录。数量规则为：同一期间出水总氮浓度乘以合规排放水量。

- 选定流: Nitrogen, total
- 流属性/单位: Mass / kg
- 数量规则: 同一期间出水总氮浓度乘以合规排放水量
- 数值来源模式: 计算值（`calculated_value`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 经处理屠宰场废水
- 基准类型: 过程输出（`process_output`）
- 证据类型: 由采集计算（`calculated_from_collection`）
- 采集协议: `cp_effluent_monitoring`
- 来源: `ec-jrc-sa-bref-jrc135916`, `eu-recommendation-2021-2279`

###### 排入水体的总磷（`total_phosphorus_to_water_output`）

当将排入水体的总磷与 COD 和氮分开记录。，将 Phosphorus, total 作为一个独立交换记录。数量规则为：同一期间出水总磷浓度乘以合规排放水量。

- 选定流: Phosphorus, total
- 流属性/单位: Mass / kg
- 数量规则: 同一期间出水总磷浓度乘以合规排放水量
- 数值来源模式: 计算值（`calculated_value`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 经处理屠宰场废水
- 基准类型: 过程输出（`process_output`）
- 证据类型: 由采集计算（`calculated_from_collection`）
- 采集协议: `cp_effluent_monitoring`
- 来源: `ec-jrc-sa-bref-jrc135916`, `eu-recommendation-2021-2279`

### 过程：最终检验与销售包装（`final_inspection_and_sale_packaging`）

#### 输入

##### 产品流

###### 进入最终检验的冷藏水牛肉（`chilled_buffalo_meat_packaging_input`）

当将进入最终检验的冷藏肉作为一个产品投入记录。，将 Chilled buffalo meat 作为一个独立交换记录。数量规则为：计量进入最终检验的合格转移质量。

- 选定流: Chilled buffalo meat
- 流属性/单位: Mass / kg
- 数量规则: 计量进入最终检验的合格转移质量
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 产品特定（`product_specific`）
- 归一化基准: 每 1 kg 净合格参考产品
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_final_product_records`
- 来源: `ec-jrc-sa-bref-jrc135916`, `eu-recommendation-2021-2279`

###### 最终检验与包装用电（`electricity_packaging_input`）

当将该用电与冷却及其他生产阶段用电分开记录。，将 Electricity 作为一个独立交换记录。数量规则为：分表计量电量，或依据检验、封装、贴标和装箱设备计算分配。

- 选定流: Electricity
- 流属性/单位: Energy / kWh
- 数量规则: 分表计量电量，或依据检验、封装、贴标和装箱设备计算分配
- 数值来源模式: 计算值（`calculated_value`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 净合格参考产品
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 由采集计算（`calculated_from_collection`）
- 采集协议: `cp_packaging_input_records`
- 来源: `ec-jrc-sa-bref-jrc135916`, `eu-recommendation-2021-2279`

###### 聚乙烯食品接触薄膜（`polyethylene_film_packaging_input`）

当所声明销售形式含聚乙烯薄膜时条件性记录。，将 Polyethylene packaging film 作为一个独立交换记录。数量规则为：发放至合格销售包装的薄膜净质量。

- 选定流: Polyethylene packaging film
- 流属性/单位: Mass / kg
- 数量规则: 发放至合格销售包装的薄膜净质量
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 产品特定（`product_specific`）
- 归一化基准: 每 1 kg 净合格参考产品
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_packaging_input_records`
- 来源: `ec-jrc-sa-bref-jrc135916`, `eu-recommendation-2021-2279`

###### 瓦楞纤维板肉箱（`corrugated_carton_packaging_input`）

当所声明销售形式含瓦楞纸箱时条件性记录。，将 Corrugated fibreboard carton 作为一个独立交换记录。数量规则为：发放至合格销售包装的纸箱净质量。

- 选定流: Corrugated fibreboard carton
- 流属性/单位: Mass / kg
- 数量规则: 发放至合格销售包装的纸箱净质量
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 产品特定（`product_specific`）
- 归一化基准: 每 1 kg 净合格参考产品
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_packaging_input_records`
- 来源: `ec-jrc-sa-bref-jrc135916`, `eu-recommendation-2021-2279`

###### 纸质产品标签（`paper_label_packaging_input`）

当所声明销售包装附有纸标签时条件性记录。，将 Paper product label 作为一个独立交换记录。数量规则为：发放至合格销售包装的纸标签净质量。

- 选定流: Paper product label
- 流属性/单位: Mass / kg
- 数量规则: 发放至合格销售包装的纸标签净质量
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 产品特定（`product_specific`）
- 归一化基准: 每 1 kg 净合格参考产品
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_packaging_input_records`
- 来源: `ec-jrc-sa-bref-jrc135916`, `eu-recommendation-2021-2279`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 合格鲜或冷藏水牛肉参考产品（`accepted_reference_product_output`）

当仅记录在设施门口放行的 CPC 21112 产品；排除冻肉、食用杂碎、包装质量和不合格产品。，将 Meat of buffalo, fresh or chilled 作为一个独立交换记录。数量规则为：固定参考数量：1 kg 净合格鲜或冷藏水牛肉。

- 选定流: Meat of buffalo, fresh or chilled `e96ba1cf-ce0b-4a35-ac5b-8cabebb56116`
- 流属性/单位: Mass / kg
- 数量规则: 固定参考数量：1 kg 净合格鲜或冷藏水牛肉
- 数值来源模式: 固定值（`fixed_value`）
- 适用范围: 不适用（`not_applicable`）
- 归一化基准: 每 1 kg 净合格参考产品
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 身份引用（`identity_reference`）
- 采集协议:
- 来源: `unsd-cpc-3-0-21112`

##### 废物流

###### 聚乙烯包装薄膜边角废物（`polyethylene_film_scrap_output`）

当将包装薄膜边角废物与纸箱和标签废物分开记录。，将 Polyethylene packaging-film scrap 作为一个独立交换记录。数量规则为：按有记录的回收或处置去向计量薄膜边角废物质量。

- 选定流: Polyethylene packaging-film scrap
- 流属性/单位: Mass / kg
- 数量规则: 按有记录的回收或处置去向计量薄膜边角废物质量
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 净合格参考产品
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_packaging_waste_records`
- 来源: `ec-jrc-sa-bref-jrc135916`, `eu-recommendation-2021-2279`

###### 瓦楞纤维板纸箱废物（`corrugated_carton_scrap_output`）

当将纸箱废物与薄膜和标签废物分开记录。，将 Corrugated fibreboard carton scrap 作为一个独立交换记录。数量规则为：按有记录的回收或处置去向计量纸箱废物质量。

- 选定流: Corrugated fibreboard carton scrap
- 流属性/单位: Mass / kg
- 数量规则: 按有记录的回收或处置去向计量纸箱废物质量
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 净合格参考产品
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_packaging_waste_records`
- 来源: `ec-jrc-sa-bref-jrc135916`, `eu-recommendation-2021-2279`

###### 纸质产品标签废物（`paper_label_scrap_output`）

当将标签废物与薄膜和纸箱废物分开记录。，将 Paper product-label scrap 作为一个独立交换记录。数量规则为：按有记录的回收或处置去向计量标签废物质量。

- 选定流: Paper product-label scrap
- 流属性/单位: Mass / kg
- 数量规则: 按有记录的回收或处置去向计量标签废物质量
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 净合格参考产品
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_packaging_waste_records`
- 来源: `ec-jrc-sa-bref-jrc135916`, `eu-recommendation-2021-2279`

###### 最终检验不合格水牛肉（`rejected_packaged_buffalo_meat_waste_output`）

当将最终检验不合格品与分割不合格品和冷藏腐败品分开记录。，将 Rejected buffalo meat waste 作为一个独立交换记录。数量规则为：按最终检验处置代码计量的不合格肉质量。

- 选定流: Rejected buffalo meat waste
- 流属性/单位: Mass / kg
- 数量规则: 按最终检验处置代码计量的不合格肉质量
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 净合格参考产品
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_packaging_waste_records`
- 来源: `ec-jrc-sa-bref-jrc135916`, `eu-recommendation-2021-2279`

##### 基本流

## 7. 分配与共产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision` | separately_metered_processes | 首先在屠宰、分割、冷却、废水处理和包装的投入产出可单独计量时通过过程细分避免分配。 | `eu-recommendation-2021-2279` |
| `allocation_mass_balance` | all_material_outputs | 分配负荷前，须将活体质量和各过程转移量与参考肉、血、皮、肝、心、脂肪、骨、废物、库存变化、水分变化及计量损失进行核对。 | `ec-jrc-sa-bref-jrc135916`, `eu-recommendation-2021-2279` |
| `allocation_co_products` | blood_hide_organs_fat_bones | 当过程细分不能隔离负荷时，采用并披露产品特定物理因果关系；不存在可辩护物理关系时，使用同期间价格的有记录经济分配，并披露敏感性。 | `eu-recommendation-2021-2279` |
| `allocation_waste_status` | waste_and_recovered_outputs | 依据各输出的实际法律和运行去向将其分类为产品、废物或排放；收入或避免处理本身不得成为静默改变流类型的依据。 | `ec-jrc-sa-bref-jrc135916`, `eu-recommendation-2021-2279` |
| `allocation_shared_utilities` | shared_meters | 共享公用工程须按有记录的因果驱动因素分配，例如设备分表、运行时间与额定负荷、处理体积或冷藏质量时间，并披露未分配余量。 | `ec-jrc-sa-bref-jrc135916`, `eu-recommendation-2021-2279` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_live_animal_receipts` | `animal_receiving_slaughter_and_dressing` | 活水牛 | weighbridge ticket and animal receipt | batch id; species; animal count; origin; supplier; arrival time; gross, tare, and net mass; calibration id | Reconcile calibrated scale tickets to animal-receipt and acceptance records | kg | each received lot | complete reporting period | receiving area | Sum accepted net live mass by lot; retain rejected or dead-on-arrival animals separately | scale calibration; signed receipt; animal identity and health acceptance | undefined |
| `cp_slaughter_utility_records` | `animal_receiving_slaughter_and_dressing` | 水、电力、蒸汽与热水 | meters, supplier invoices, and operating logs | meter id; opening and closing readings; timestamps; pressure; temperatures; condensate state; production hours | Use dedicated meters where available; otherwise calculate from documented shared-meter drivers | kg; kWh; MJ | daily or batch | representative full production period | slaughter and dressing area | Subtract non-production use and normalize to accepted carcass transfer mass | meter calibration; invoices; boundary diagram; allocation calculation | undefined |
| `cp_slaughter_fuel_records` | `animal_receiving_slaughter_and_dressing` | 天然气、柴油与液化石油气 | fuel meters, tank balance, cylinder issues, and equipment logs | fuel identity; opening stock; receipts; issues; returns; closing stock; heating value; equipment hours | Reconcile fuel inventory and assign only consumption serving in-scope equipment | kg; MJ | daily or delivery cycle | complete reporting period | on-site slaughter heat and handling equipment | Calculate net consumption and normalize to accepted carcass transfer mass | fuel invoice; tank reconciliation; equipment log; heating-value record | undefined |
| `cp_slaughter_output_mass_balance` | `animal_receiving_slaughter_and_dressing` | 胴体、血与皮 | calibrated scales and transfer records | batch id; output identity; gross; tare; net mass; acceptance status; destination; timestamp | Weigh each separately managed output and reconcile with received live mass | kg | each batch | complete reporting period | slaughter and dressing line | Sum accepted output by identity; retain stock and moisture changes separately | scale calibration; transfer ticket; destination record; mass-balance review | undefined |
| `cp_slaughter_waste_records` | `animal_receiving_slaughter_and_dressing` | 胃肠内容物、组织废物与屠宰废水 | waste scales, containers, flow meters, and consignment records | waste identity; gross; tare; net mass; meter reading; moisture; destination; treatment code | Measure each waste stream separately and reconcile internal wastewater transfer | kg | each batch or removal | complete reporting period | slaughter and dressing line | Sum by row identity and destination; do not combine solid waste with wastewater | scale or meter calibration; consignment record; treatment acceptance | undefined |
| `cp_combustion_emissions` | `animal_receiving_slaughter_and_dressing` | 化石二氧化碳与氮氧化物 | fuel balance, stack monitoring, and equipment factors | fuel consumed; carbon content; heating value; monitored concentration; gas flow; operating hours | Use matched-period monitoring or fuel- and equipment-specific calculations | kg | reporting period | same period as fuel records | on-site combustion equipment | Attribute direct emissions using documented equipment service and normalize to process output | monitoring QA; fuel certificate; calculation workbook; equipment log | undefined |
| `cp_cutting_input_records` | `evisceration_cutting_and_deboning` | 水牛胴体 | transfer scale record | batch id; gross; tare; net mass; temperature; acceptance status; transfer time | Reconcile received carcass transfer to the upstream accepted output | kg | each batch | complete reporting period | cutting and deboning line | Sum accepted incoming carcass mass by batch | scale calibration; matched transfer record; temperature record | undefined |
| `cp_cutting_utility_records` | `evisceration_cutting_and_deboning` | 水、电力与热水 | meters and operating logs | meter id; readings; timestamps; temperatures; equipment hours; production batch | Use dedicated meters or documented equipment-load allocation | kg; kWh | daily or batch | representative full production period | cutting and deboning rooms | Subtract idle and unrelated use; normalize to accepted meat before chilling | meter calibration; load study; boundary diagram; production log | undefined |
| `cp_cutting_chemical_records` | `evisceration_cutting_and_deboning` | 氢氧化钠与过氧乙酸 | chemical issue, return, and concentration records | chemical identity; formulation; active concentration; opening stock; issues; returns; closing stock; batch | Reconcile each chemical separately and calculate solution or active mass consistently | kg | daily or sanitation cycle | complete reporting period | cutting equipment sanitation attributable to the process | Calculate net issued mass by chemical and normalize to accepted meat before chilling | supplier specification; stock ledger; dosing record; concentration check | undefined |
| `cp_cutting_output_mass_balance` | `evisceration_cutting_and_deboning` | 肉、肝、心、脂肪与骨 | calibrated scales and transfer records | batch id; output identity; net mass; edible status; destination; timestamp | Weigh each accepted output separately and reconcile with incoming carcass mass | kg | each batch | complete reporting period | cutting and deboning line | Sum by output identity; retain stock, moisture, and rework separately | scale calibration; disposition record; mass-balance review | undefined |
| `cp_cutting_waste_records` | `evisceration_cutting_and_deboning` | 组织废物、分割废水与不合格肉 | waste scales, flow meters, and disposition records | row identity; mass or meter reading; rejection reason; contamination; destination; timestamp | Measure each waste separately and link it to its treatment or disposition | kg | each batch or removal | complete reporting period | cutting and deboning line | Sum by row identity and destination; reconcile with process mass balance | scale or meter calibration; waste consignment; rejection log | undefined |
| `cp_chilling_product_records` | `chilling_and_cold_storage` | 鲜肉投入与冷藏肉输出 | transfer scales, temperature logs, and release records | batch id; cut; bone state; net mass; entry and release temperatures; timestamps; acceptance | Match incoming and released mass to continuous temperature records | kg | each batch | complete reporting period | chilling and cold rooms | Account for stock change, drip loss, rejected mass, and transfer timing | scale calibration; temperature calibration; release authorization; stock record | undefined |
| `cp_chilling_utility_records` | `chilling_and_cold_storage` | 电力与水 | submeters, equipment logs, and water meters | meter id; readings; timestamps; compressor and fan hours; room temperatures; water use | Use dedicated refrigeration meters or documented load allocation | kWh; kg | daily | representative seasonal production period | chilling and cold-storage system | Allocate by measured equipment load and refrigerated mass-time; normalize to released chilled meat | meter calibration; load study; temperature log; allocation workbook | undefined |
| `cp_refrigerant_records` | `chilling_and_cold_storage` | R717 氨投入与空气排放 | refrigerant inventory and maintenance records | refrigerant identity; opening charge; additions; recoveries; closing charge; service event; leak test | Reconcile system-specific inventory; calculate release only from verified loss or monitoring | kg | each service event and annual balance | complete reporting period | in-scope refrigeration system | Assign verified recharge and loss to released chilled meat; disclose balance residual | maintenance certificate; cylinder weights; leak test; inventory reconciliation | undefined |
| `cp_chilling_waste_records` | `chilling_and_cold_storage` | 除霜废水与腐败肉 | water meter, waste scale, and disposition records | row identity; mass; timestamp; rejection cause; destination; batch | Measure each waste separately and link it to treatment | kg | each defrost event or batch | complete reporting period | chilling and cold-storage area | Sum by row identity; normalize to released chilled meat | meter or scale calibration; disposition record; temperature-deviation report | undefined |
| `cp_wastewater_influent_records` | `wastewater_treatment` | 过程特定废水投入 | source flow meters and transfer logs | source process; meter id; volume or mass; temperature; sampling time; solids or fat indicator | Measure each source stream separately before mixing | kg | daily | complete reporting period | on-site wastewater-treatment inlet | Sum by source process; retain unmetered inflow and stormwater separately | meter calibration; source map; sampling record | undefined |
| `cp_wastewater_treatment_input_records` | `wastewater_treatment` | 电力与处理化学品 | submeters, stock ledgers, and dosing logs | meter readings; chemical identity; concentration; issues; returns; closing stock; dosing time | Measure electricity and reconcile each chemical separately | kWh; kg | daily | complete reporting period | on-site wastewater-treatment plant | Normalize inputs to treated wastewater mass; disclose bypasses | meter calibration; supplier specification; dosing record; stock reconciliation | undefined |
| `cp_wastewater_treatment_output_records` | `wastewater_treatment` | 污泥与筛渣 | scales and waste consignment records | waste identity; gross; tare; net mass; dry matter; destination; removal time | Weigh sludge and screenings separately and retain destination evidence | kg | each removal | complete reporting period | on-site wastewater-treatment plant | Sum by waste identity and destination; normalize to treated wastewater mass | scale calibration; laboratory dry matter; consignment record | undefined |
| `cp_effluent_monitoring` | `wastewater_treatment` | 排入水体的 COD、总氮与总磷 | compliant sampling and discharge-flow records | parameter; method; sample time; concentration; discharge volume; discharge point; QA result | Multiply matched-period compliant concentration by discharge volume for each parameter | kg | permit or monitoring frequency | complete reporting period | declared direct discharge point | Calculate each pollutant separately; treat non-detects and missing samples transparently | laboratory accreditation; chain of custody; flow-meter calibration; permit report | undefined |
| `cp_final_product_records` | `final_inspection_and_sale_packaging` | 冷藏肉投入与合格参考输出 | transfer scales, inspection, release, and product specifications | batch id; species; cut; bone state; fat trim; net mass; temperature; acceptance; packaging inclusion | Weigh net product and verify CPC 21112 state before release | kg | each batch | complete reporting period | final inspection and dispatch gate | Exclude packaging, offal, frozen meat, and rejects; normalize accepted output to exactly 1 kg | scale calibration; product specification; release authorization; batch traceability | undefined |
| `cp_packaging_input_records` | `final_inspection_and_sale_packaging` | 电力与各包装部件 | submeter, packaging issue, return, and specification records | meter readings; packaging identity; grade; opening stock; issues; returns; closing stock; batch | Reconcile electricity and each packaging material separately | kWh; kg | daily or batch | complete reporting period | final inspection and packing area | Calculate net input by row identity and normalize to 1 kg net accepted product | meter calibration; packaging specification; stock ledger; batch packing record | undefined |
| `cp_packaging_waste_records` | `final_inspection_and_sale_packaging` | 包装废物与不合格肉 | waste scales and disposition records | row identity; gross; tare; net mass; rejection reason; contamination; destination; batch | Weigh each scrap or reject separately and retain treatment destination | kg | each batch or removal | complete reporting period | final inspection and packing area | Sum by row identity and destination; normalize to 1 kg net accepted product | scale calibration; rejection log; waste consignment | undefined |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_net_material_issue` | materials_chemicals_packaging | 净投入 = 期初库存 + 收货 - 退回 - 期末库存 - 有记录的边界外转移 | 库存台账；收货；退回；期末库存；边界转移 | 逐行前景净投入 | `eu-recommendation-2021-2279` |
| `calc_reference_normalization` | all_process_inventory | 归一化数量 = 归入该行的数量 / 净合格参考产品质量 | 归入该行的数量；净合格 CPC 21112 质量 | 每 1 kg 净合格参考产品的数量 | `eu-recommendation-2021-2279` |
| `calc_process_normalization` | intermediate_process_inventory | 过程归一化数量 = 归入该行的数量 / 合格定量参考输出 | 归入该行的数量；合格过程输出 | 每所声明过程输出的数量 | `ec-jrc-sa-bref-jrc135916`, `eu-recommendation-2021-2279` |
| `calc_mass_balance` | slaughter_cutting_chilling | 质量平衡残差 = 投入 + 期初库存 - 产品 - 共产品 - 废物 - 期末库存 - 有记录的水分变化 | 全部计量投入、转移、输出、废物、库存和水分记录 | 过程残差与核对状态 | `ec-jrc-sa-bref-jrc135916`, `eu-recommendation-2021-2279` |
| `calc_shared_utility` | shared_utility_meters | 分配公用工程 = 共享表净用量 × 有记录的因果驱动份额 | 仪表读数；设备负荷或运行时间；产量或质量时间 | 逐行分配的公用工程量 | `ec-jrc-sa-bref-jrc135916`, `eu-recommendation-2021-2279` |
| `calc_effluent_emission` | direct_water_emissions | 排放质量 = 同期间合规浓度 × 直接排放体积，并进行单位换算 | 实验室浓度；排放流量；时间覆盖；单位换算 | 排入水体的一种污染物质量 kg | `ec-jrc-sa-bref-jrc135916`, `eu-recommendation-2021-2279` |
| `calc_refrigerant_loss` | ammonia_refrigerant | 经核实损失 = 期初充注 + 补充 - 回收 - 期末充注 - 有记录转移；更优时采用监测 | 系统库存；检修补充；回收；充注记录；泄漏监测 | 排入空气的氨 kg；无经核实损失时为零 | `ec-jrc-sa-bref-jrc135916`, `eu-recommendation-2021-2279` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | reference product | 保留水牛物种、分割部位、带骨状态、脂肪修整、鲜或冷藏状态、净质量、放行温度、设施、期间和批次关联。 | 产品规格；放行记录；追溯记录；校准秤与温度计 |
| `dq_primary_data` | foreground processes | 材料、公用工程、化学品、制冷剂、产品、共产品、废物和直接排放各行使用公司特定记录；披露所有代理和未计量份额。 | 仪表与秤记录；库存台账；供应商发票；监测报告；代理清单 |
| `dq_temporal_completeness` | reporting period | 覆盖具有代表性的完整生产期间，包括季节性制冷负荷、停机、不合格批次、维护和库存变化。 | 生产日历；停机日志；维护日志；库存核对 |
| `dq_mass_balance` | material flows | 核对各过程和全设施，不得把残差隐藏在组合共产品或废物行中。 | 签署的质量平衡工作表；秤校准；库存与水分记录 |
| `dq_measurement_quality` | meters_and_laboratories | 适用时保留校准状态、测量方法、检出限、采样代表性和实验室认可。 | 校准证书；采样计划；实验室 QA；样品监管链 |
| `dq_allocation_transparency` | shared_processes_and_co_products | 披露过程细分尝试、分配驱动因素、数量、使用时的价格、期间匹配、分配份额和敏感性结果。 | 分配工作表；仪表图；生产与价格记录；敏感性计算 |
| `dq_uuid_gaps` | unresolved_tiangong_flows | 非参考 UUID 在完成双核前保持空白，并保留逐行未决流元数据。 | manifest unresolved_flow_references；审查解决记录 |

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | reference_flow | 须使用已核实的产品流 UUID、Mass 属性、Units of mass 单位组和 kg，且仅有一个 1 kg 净合格 CPC 21112 参考输出；拒绝将冻肉、食用杂碎、包装质量和不合格肉计入参考数量。 | `unsd-cpc-3-0-21112` |
| `validate_scope_and_traceability` | buffalo_product | 须记录水牛物种、设施、生产期间、分割部位、带骨状态、脂肪修整、鲜或冷藏状态、放行温度和批次关联。 | `unsd-cpc-3-0-21112`, `ec-jrc-sa-bref-jrc135916` |
| `validate_atomic_flows` | process_inventory | 拒绝集合标签和组合交换；活体动物投入、各水流、各阶段电力、蒸汽、热水、各燃料、制冷剂、各化学品、各包装材料、各共产品、各废物和各排放必须保持分离。 | `ec-jrc-sa-bref-jrc135916`, `eu-recommendation-2021-2279` |
| `validate_mass_balance` | slaughter_and_cutting | 须逐步核对接收活体质量、胴体转移、肉、各共产品、各废物、库存变化、水分变化和不合格产品。 | `ec-jrc-sa-bref-jrc135916`, `eu-recommendation-2021-2279` |
| `validate_conditional_inputs` | conditional_routes | 记录外购蒸汽、外购热水、天然气、柴油、液化石油气、R717 氨、氯化铁、氢氧化钠、过氧乙酸或销售包装前，须有实际使用证据。 | `ec-jrc-sa-bref-jrc135916`, `eu-recommendation-2021-2279` |
| `validate_wastewater_and_releases` | wastewater | 须记录过程特定废水转移、匹配期间的处理记录，以及各项水排放的监测浓度和排放体积。 | `ec-jrc-sa-bref-jrc135916`, `eu-recommendation-2021-2279` |
| `validate_uuid_resolution` | tiangong_references | 任何非参考 UUID 若未同时经过身份确认和公开 state-100 直读即拒绝；未解决身份保持空白，并保留逐行 manifest 元数据。 |  |
| `validate_translation_alignment` | bilingual_pcr | 英文和中文的 process_id、row_id、Selected flow、受控词、source-id、边界规则、分配规则和校验规则序列必须完全一致。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | CPC 21112 鲜或冷藏水牛肉的产品特定前景屠宰、分割、冷却与放行数据集 |
| downstream_use | `secondary_dataset`；仅当物种、产品形式、地理、设施技术、期间、分配、冷藏状态和未决流限制与下游研究相匹配时用作 `background_dataset` |
| allowed_use | 屠宰场门 LCI、供应商特定数据交换、产品足迹建模，以及保留所有限定信息的下游过程或生命周期模型投影 |
| excluded_use | 水牛养殖或运输；冻水牛肉；将食用或非食用杂碎作为参考产品；零售、制备、消费或寿命终止声明；不同分割品或分配方法之间的无限定比较；自动补全未决 UUID 或数量 |
| required_metadata | PCR id 与版本；水牛物种；设施与国家；生产期间；批次；胴体或分割品；带骨与脂肪修整状态；鲜或冷藏状态；放行温度；净质量；过程配置；仪表与秤；清洁化学品；制冷剂；燃料；包装；废水路线；共产品与废物去向；分配；来源与代理清单 |
| required_quality_disclosure | 公司特定数据覆盖；时间、地理和技术代表性；仪表、秤、温度计与实验室 QA；质量平衡残差；分配份额与敏感性；未计量流；条件性操作；直接排放依据；上游替代；未解决 Tiangong 身份；数据缺口与不确定性 |
| update_trigger | CPC 范围、参考流身份、水牛物种、产品分割或状态、设施、屠宰或分割技术、制冷系统、燃料、化学品、包装、废水处理、共产品去向、分配或重要前景证据发生变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-0-21112` | 官方指南（`official_guidance`） | 联合国统计司，《Central Product Classification Version 3.0》，子类 21112，官方结构条目及 CPC_Ver_3.0_Structure_30Jun2025.csv。https://unstats.un.org/unsd/classifications/Econ | 鲜或冷藏水牛肉精确范围，以及从参考产品中排除冻肉和食用杂碎 |
| `ec-jrc-sa-bref-jrc135916` | 官方指南（`official_guidance`） | 欧盟委员会联合研究中心，《Best Available Techniques Reference Document for the Slaughterhouses, Animal By-products and/or Edible Co-products Industries》，JRC135916，DOI 10.2760/18199。https://publications.jrc.ec.europa.eu/repository/handle/JRC135916 | 动物接收、屠宰、胴体处理、标准分割、冷却、清洁、公用工程、废水、排放、血、皮、脂肪、骨、脏器、废物、监测和过程数据结构 |
| `eu-recommendation-2021-2279` | 官方指南（`official_guidance`） | 欧盟委员会 Recommendation (EU) 2021/2279，Environmental Footprint 方法合并文本。https://eur-lex.europa.eu/eli/reco/2021/2279/2021-12-30/eng | 产品特定公司数据、完整 LCI、分配、完整性、透明度、数据质量、计算和验证规则 |
