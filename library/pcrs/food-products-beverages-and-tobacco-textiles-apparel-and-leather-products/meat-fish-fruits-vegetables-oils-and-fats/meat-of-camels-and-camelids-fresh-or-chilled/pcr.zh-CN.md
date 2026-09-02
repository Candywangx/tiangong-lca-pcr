---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.meat-of-camels-and-camelids-fresh-or-chilled
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 骆驼和驼科动物肉，鲜或冷藏

## 1. 范围与适用性

本 PCR 适用于骆驼和其他驼科动物鲜或冷藏肉的工厂门口生产，从屠宰场接收活体动物开始，到验收合格的鲜或冷藏肉在冷藏状态及其已声明包装结束。不包括冷冻肉、作为参考产品的可食或不可食内脏、上游动物饲养和入厂运输，以及下游配送、零售、烹饪、消费和生命末期。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.meat-of-camels-and-camelids-fresh-or-chilled |
| classification_refs | CPC 3.0: 21117，精确分类引用 |
| covered_products | 以胴体、半胴体、四分体、带骨分割肉或去骨分割肉供应的鲜或冷藏骆驼及驼科动物肉，已声明市场状态保持鲜或冷藏。 |
| excluded_products | 冷冻驼科动物肉；以可食或不可食内脏为参考产品；非驼科动物肉；活体动物；上游饲养和运输；零售、食品制备、消费和生命末期。 |
| representative_product | 已声明物种、胴体或分割形式、带骨状态、温度状态、包装、屠宰场址和报告期的验收合格鲜或冷藏驼科动物肉。 |
| production_route | 活体接收和致昏 → 屠宰和胴体处理 → 胴体冷却 → 适用时分割剔骨 → 包装和最终冷藏；清洗消毒及废水处理支持实际路线。 |
| market_state | 鲜或冷藏、验收合格并在工厂门口放行；冷冻产品和内脏不属于参考产品范围。 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 工厂门口供应验收合格的骆驼或驼科动物鲜或冷藏肉。 |
| How much | 验收合格肉净质量 1 kg，不含单独列入清单的包装和非肉类共产品。 |
| How well | 符合已声明食品安全、检验、温度、物种、分割、带骨状态和包装规格，且未冷冻。 |
| How long or cycle | 一次工厂门口屠宰加工输出；不表示零售货架期、烹饪得率或消费。 |
| reference_flow_link | `reference_meat_output`，位于 `p5_packaging_storage` 过程。 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 骆驼和驼科动物肉，新鲜或冷藏 `43edde93-b716-4329-93a4-2eb708e1e7e3` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 驼科物种；实质相关时的性别或生产类别；胴体、半胴体、四分体或分割形式；带骨或去骨状态；鲜或冷藏状态；产品温度和验收点；屠宰和分割路线；可食产品范围；包装配置；屠宰场址；地域；技术；报告期 |

全部必需限定信息须在数据集元数据、过程说明、参考流备注、产品说明或等效字段中声明。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考肉 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 在已声明冷藏工厂门口点、加入单独报告包装前计量验收净肉质量；全部交换归一化至正好 1 kg 参考输出。 |
| `live_weight` | 活体投入 | Mass | kg 活重 | 在屠宰场接收时逐只或按批计量活重，并保留动物数量和秤证据。 |
| `carcass_mass` | 热胴体和冷藏胴体 | Mass | kg | 在已声明过程点记录热胴体质量和冷藏质量；没有明确水分及冷却损失核对时不得混用。 |
| `product_mass` | 肉、共产品、包装和固体废物 | Mass | kg | 使用经校准秤，并将参考肉、可食内脏、不可食共产品、废物和包装分开记录。 |
| `utility_measurement` | 电力、蒸汽、热水、燃料、制冷剂和工艺水 | 适用的能量、质量或体积 | kWh、MJ、kg 或 m3 | 优先过程分表；否则按第 7 节分配完整源总量并保留换算证据。 |
| `temperature_state` | 参考产品和中间胴体 | Temperature | 摄氏度 | 记录实测产品温度、监测位置、时间、验收准则及是否发生冷冻。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 在屠宰场门口接收的活骆驼或驼科动物，声明物种、数量、活重、状况、供应商和接收时间。 |
| starting_condition_role | 活体动物是第一项前景产品投入；动物饲养和入厂运输用可追溯上游数据集表示。 |
| product_classification_scope | 与 CPC 3.0 代码 21117 精确对应的已审查语义范围内鲜或冷藏骆驼及驼科动物肉。 |
| recursive_input_rule | 同类鲜或冷藏驼科动物肉进入继续分割或包装时，只记录一个供应商产品投入及其数据集，不递归重建上游屠宰过程。 |
| upstream_dataset_requirement | 对动物饲养、入厂运输、公用工程、燃料、化学品、制冷、包装及外部处理废物使用可追溯上游数据集。 |
| disclosure | 声明物种、起始状态、屠宰和产品路线、温度状态、分割/带骨状态、共产品去向、废物处理、清洗、废水边界、分配、排除项、上游数据集和缺口。 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_rule_1` | 前景屠宰场 | 纳入适用接收、致昏、屠宰、放血、胴体处理、去内脏、检验、冷却、分割、包装、清洗、制冷、废水、直接废物和排放作业。 | jrc-sa-bref-2024 |
| `boundary_rule_2` | 类别范围 | 要求骆驼或驼科动物肉处于鲜或冷藏状态；冷冻肉和内脏不属于参考产品范围。 | un-cpc-3-0 |
| `boundary_rule_3` | 上游边界 | 动物饲养和入厂运输在屠宰场前景之外，通过可追溯上游数据集连接。 | ec-pef-method-2021 |
| `boundary_rule_4` | 下游边界 | 排除配送、零售、烹饪、消费和生命末期，除非下游 lifecyclemodel 透明增加且避免重复。 | ec-pef-method-2021 |
| `boundary_rule_5` | 共产品和废物 | 血、皮、脂肪、每种可食器官、不可食内脏、骨、消化道内容物、判废材料、废水、污泥和包装废物须分别显示去向和状态。 | jrc-sa-bref-2024 |
| `boundary_rule_6` | 完整性 | 记录全部适用原材料、能源、产品、共产品、废物和排入空气/水的直接排放；UUID 未解决不构成遗漏理由。 | ec-pef-method-2021 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `p1_reception_stunning` | 活体接收和致昏 | required | 纳入待宰圈、动物识别、福利检查、宰前处置和实际致昏路线。 | 生成或支持验收输出并记录直接交换。 | kg 已致昏活体动物 |
| `p2_slaughter_dressing` | 屠宰和胴体处理 | required | 纳入放血、剥皮、去内脏、适用时胴体劈半、检验、修整及转入冷却。 | 生成或支持验收输出并记录直接交换。 | kg 热胴体 |
| `p3_carcass_chilling` | 胴体冷却和冷藏暂存 | required | 纳入初始冷却及分割前冷藏暂存；记录实际制冷系统。 | 生成或支持验收输出并记录直接交换。 | kg 冷藏胴体 |
| `p4_cutting_deboning` | 标准分割和剔骨 | conditional | 参考产品为四分体或分割肉时纳入；仅当报告场址对放行的整胴体或半胴体不进行分割或剔骨时方可不纳入。 | 生成或支持验收输出并记录直接交换。 | kg 未包装鲜或冷藏肉 |
| `p5_packaging_storage` | 包装和最终冷藏 | required | 纳入产品包装、最终冷藏、验收及不经冷冻的工厂门口放行。 | 生成或支持验收输出并记录直接交换。 | 1 kg 参考产品 |
| `p6_cleaning_sanitation` | 设备和设施清洗消毒 | required | 纳入实际服务于前景过程的原位或人工清洗消毒；每种化学品单列。 | 生成或支持验收输出并记录直接交换。 | 1 kg 参考产品 |
| `p7_wastewater_treatment` | 场内屠宰废水处理 | conditional | 场内处理废水时纳入；否则将每项废水流报告至实际场外处理去向。 | 生成或支持验收输出并记录直接交换。 | 1 kg 参考产品 |

### 过程：活体接收和致昏（`p1_reception_stunning`）

#### 输入

##### 产品流

###### 待屠宰活体驼科动物（`live_camelid_input`）

适用时，将该单一命名交换作为进入本过程的原子流记录；保留实测身份、路线条件和去向。

- 选定流：Live camelid for slaughter
- 流属性/单位：Mass / kg
- 数量规则：按动物、批次、秤重、领用或转移记录计量净质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 已致昏活体动物
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_p1_reception_records`
- 来源：`jrc-sa-bref-2024`

###### 工艺水（`reception_process_water_input`）

适用时，将该单一命名交换作为进入本过程的原子流记录；保留实测身份、路线条件和去向。

- 选定流：过程用水
- 流属性/单位：Volume / m3
- 数量规则：采用计量工艺水体积，或按有记录物理规则分配完整场址水量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 已致昏活体动物
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_p1_reception_records`
- 来源：`jrc-sa-bref-2024`

###### 中压电力（`reception_electricity_input`）

适用时，将该单一命名交换作为进入本过程的原子流记录；保留实测身份、路线条件和去向。

- 选定流：中压电力
- 流属性/单位：Energy / kWh
- 数量规则：采用分表用量，或按有记录物理动因分配完整仪表总量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 已致昏活体动物
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_p1_reception_records`
- 来源：`jrc-sa-bref-2024`

###### 低硫柴油（`reception_diesel_input`）

适用时，将该单一命名交换作为进入本过程的原子流记录；保留实测身份、路线条件和去向。

- 选定流：Low-sulphur diesel fuel
- 流属性/单位：Energy / MJ
- 数量规则：将实测燃料数量用有记录低位热值换算并归至本过程。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 已致昏活体动物
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_p1_reception_records`
- 来源：`jrc-sa-bref-2024`
##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 已致昏待屠宰驼科动物（`stunned_camelid_output`）

适用时，将该单一命名交换作为离开本过程的原子流记录；保留实测身份、路线条件和去向。

- 选定流：Stunned camelid for slaughter
- 流属性/单位：Mass / kg
- 数量规则：计量转入下一前景过程的合格质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 已致昏活体动物
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_p1_reception_records`
- 来源：`jrc-sa-bref-2024`
##### 废物流

###### 驼科动物粪便（`reception_manure_output`）

适用时，将该单一命名交换作为离开本过程的原子流记录；保留实测身份、路线条件和去向。

- 选定流：Camelid manure
- 流属性/单位：Mass / kg
- 数量规则：按命名材料和去向计量分开收集的废物转移质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 已致昏活体动物
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_p1_reception_records`
- 来源：`jrc-sa-bref-2024`

###### 废秸秆垫料（`reception_bedding_output`）

适用时，将该单一命名交换作为离开本过程的原子流记录；保留实测身份、路线条件和去向。

- 选定流：Waste straw bedding
- 流属性/单位：Mass / kg
- 数量规则：按命名材料和去向计量分开收集的废物转移质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 已致昏活体动物
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_p1_reception_records`
- 来源：`jrc-sa-bref-2024`

###### 到厂死亡驼科动物尸体（`reception_mortality_output`）

适用时，将该单一命名交换作为离开本过程的原子流记录；保留实测身份、路线条件和去向。

- 选定流：Dead-on-arrival camelid carcass
- 流属性/单位：Mass / kg
- 数量规则：按命名材料和去向计量分开收集的废物转移质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 已致昏活体动物
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_p1_reception_records`
- 来源：`jrc-sa-bref-2024`
##### 基本流

###### 排入空气的化石二氧化碳（`reception_co2_air`）

适用时，将该单一命名交换作为离开本过程的原子流记录；保留实测身份、路线条件和去向。

- 选定流：化石源二氧化碳，排入空气
- 流属性/单位：Mass / kg
- 数量规则：采用实测排放，或由监测活动数据及有记录因子或浓度计算负荷。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 已致昏活体动物
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_p1_reception_records`
- 来源：`jrc-sa-bref-2024`

###### 排入空气的氮氧化物（`reception_nox_air`）

适用时，将该单一命名交换作为离开本过程的原子流记录；保留实测身份、路线条件和去向。

- 选定流：氮氧化物，排入空气
- 流属性/单位：Mass / kg
- 数量规则：采用实测排放，或由监测活动数据及有记录因子或浓度计算负荷。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 已致昏活体动物
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_p1_reception_records`
- 来源：`jrc-sa-bref-2024`


### 过程：屠宰和胴体处理（`p2_slaughter_dressing`）

#### 输入

##### 产品流

###### 已致昏待屠宰驼科动物（`stunned_camelid_input`）

适用时，将该单一命名交换作为进入本过程的原子流记录；保留实测身份、路线条件和去向。

- 选定流：Stunned camelid for slaughter
- 流属性/单位：Mass / kg
- 数量规则：按动物、批次、秤重、领用或转移记录计量净质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 热胴体
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_p2_slaughter_records`
- 来源：`jrc-sa-bref-2024`

###### 工艺水（`slaughter_process_water_input`）

适用时，将该单一命名交换作为进入本过程的原子流记录；保留实测身份、路线条件和去向。

- 选定流：过程用水
- 流属性/单位：Volume / m3
- 数量规则：采用计量工艺水体积，或按有记录物理规则分配完整场址水量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 热胴体
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_p2_slaughter_records`
- 来源：`jrc-sa-bref-2024`

###### 热水（`slaughter_hot_water_input`）

适用时，将该单一命名交换作为进入本过程的原子流记录；保留实测身份、路线条件和去向。

- 选定流：热水
- 流属性/单位：Energy / MJ
- 数量规则：计量交付热水能量，或由实测体积和温差计算。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 热胴体
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_p2_slaughter_records`
- 来源：`jrc-sa-bref-2024`

###### 中压电力（`slaughter_electricity_input`）

适用时，将该单一命名交换作为进入本过程的原子流记录；保留实测身份、路线条件和去向。

- 选定流：中压电力
- 流属性/单位：Energy / kWh
- 数量规则：采用分表用量，或按有记录物理动因分配完整仪表总量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 热胴体
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_p2_slaughter_records`
- 来源：`jrc-sa-bref-2024`

###### 蒸汽（`slaughter_steam_input`）

适用时，将该单一命名交换作为进入本过程的原子流记录；保留实测身份、路线条件和去向。

- 选定流：蒸汽
- 流属性/单位：Energy / MJ
- 数量规则：计量交付蒸汽能量，或由实测质量和蒸汽状态计算。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 热胴体
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_p2_slaughter_records`
- 来源：`jrc-sa-bref-2024`

###### 天然气（`slaughter_natural_gas_input`）

适用时，将该单一命名交换作为进入本过程的原子流记录；保留实测身份、路线条件和去向。

- 选定流：天然气
- 流属性/单位：Energy / MJ
- 数量规则：将实测燃料数量用有记录低位热值换算并归至本过程。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 热胴体
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_p2_slaughter_records`
- 来源：`jrc-sa-bref-2024`

###### 液化石油气（`slaughter_lpg_input`）

适用时，将该单一命名交换作为进入本过程的原子流记录；保留实测身份、路线条件和去向。

- 选定流：液化石油气
- 流属性/单位：Energy / MJ
- 数量规则：将实测燃料数量用有记录低位热值换算并归至本过程。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 热胴体
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_p2_slaughter_records`
- 来源：`jrc-sa-bref-2024`
##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 驼科动物热胴体（`hot_dressed_carcass_output`）

适用时，将该单一命名交换作为离开本过程的原子流记录；保留实测身份、路线条件和去向。

- 选定流：Hot dressed camelid carcass
- 流属性/单位：Mass / kg
- 数量规则：计量转入下一前景过程的合格质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 热胴体
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_p2_slaughter_records`
- 来源：`jrc-sa-bref-2024`

###### 驼科动物血（`camel_blood_output`）

适用时，将该单一命名交换作为离开本过程的原子流记录；保留实测身份、路线条件和去向。

- 选定流：Camelid blood
- 流属性/单位：Mass / kg
- 数量规则：计量分开收集质量，并声明可食/不可食状态及销售、处理或处置去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 热胴体
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_p2_slaughter_records`
- 来源：`jrc-sa-bref-2024`

###### 驼科动物皮（`camel_hide_output`）

适用时，将该单一命名交换作为离开本过程的原子流记录；保留实测身份、路线条件和去向。

- 选定流：Camelid hide
- 流属性/单位：Mass / kg
- 数量规则：计量分开收集质量，并声明可食/不可食状态及销售、处理或处置去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 热胴体
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_p2_slaughter_records`
- 来源：`jrc-sa-bref-2024`

###### 驼科动物屠宰脂肪（`camel_fat_output`）

适用时，将该单一命名交换作为离开本过程的原子流记录；保留实测身份、路线条件和去向。

- 选定流：Camelid slaughter fat
- 流属性/单位：Mass / kg
- 数量规则：计量分开收集质量，并声明可食/不可食状态及销售、处理或处置去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 热胴体
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_p2_slaughter_records`
- 来源：`jrc-sa-bref-2024`

###### 可食驼科动物肝（`edible_liver_output`）

适用时，将该单一命名交换作为离开本过程的原子流记录；保留实测身份、路线条件和去向。

- 选定流：Edible camelid liver
- 流属性/单位：Mass / kg
- 数量规则：计量分开收集质量，并声明可食/不可食状态及销售、处理或处置去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 热胴体
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_p2_slaughter_records`
- 来源：`jrc-sa-bref-2024`

###### 可食驼科动物心（`edible_heart_output`）

适用时，将该单一命名交换作为离开本过程的原子流记录；保留实测身份、路线条件和去向。

- 选定流：Edible camelid heart
- 流属性/单位：Mass / kg
- 数量规则：计量分开收集质量，并声明可食/不可食状态及销售、处理或处置去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 热胴体
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_p2_slaughter_records`
- 来源：`jrc-sa-bref-2024`

###### 可食驼科动物肾（`edible_kidney_output`）

适用时，将该单一命名交换作为离开本过程的原子流记录；保留实测身份、路线条件和去向。

- 选定流：Edible camelid kidney
- 流属性/单位：Mass / kg
- 数量规则：计量分开收集质量，并声明可食/不可食状态及销售、处理或处置去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 热胴体
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_p2_slaughter_records`
- 来源：`jrc-sa-bref-2024`

###### 不可食驼科动物内脏（`inedible_viscera_output`）

适用时，将该单一命名交换作为离开本过程的原子流记录；保留实测身份、路线条件和去向。

- 选定流：Inedible camelid viscera
- 流属性/单位：Mass / kg
- 数量规则：计量分开收集质量，并声明可食/不可食状态及销售、处理或处置去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 热胴体
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_p2_slaughter_records`
- 来源：`jrc-sa-bref-2024`
##### 废物流

###### 驼科动物消化道内容物（`digestive_contents_output`）

适用时，将该单一命名交换作为离开本过程的原子流记录；保留实测身份、路线条件和去向。

- 选定流：Camelid digestive tract contents
- 流属性/单位：Mass / kg
- 数量规则：按命名材料和去向计量分开收集的废物转移质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 热胴体
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_p2_slaughter_records`
- 来源：`jrc-sa-bref-2024`

###### 判废驼科动物组织（`condemned_tissue_output`）

适用时，将该单一命名交换作为离开本过程的原子流记录；保留实测身份、路线条件和去向。

- 选定流：Condemned camelid tissue
- 流属性/单位：Mass / kg
- 数量规则：按命名材料和去向计量分开收集的废物转移质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 热胴体
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_p2_slaughter_records`
- 来源：`jrc-sa-bref-2024`

###### 驼科动物屠宰未处理废水（`slaughter_wastewater_output`）

适用时，将该单一命名交换作为离开本过程的原子流记录；保留实测身份、路线条件和去向。

- 选定流：Untreated wastewater from camelid slaughter
- 流属性/单位：Volume / m3
- 数量规则：计量该命名废水流在所述过程或处理边界的体积。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 热胴体
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_p2_slaughter_records`
- 来源：`jrc-sa-bref-2024`
##### 基本流

###### 排入空气的化石二氧化碳（`slaughter_co2_air`）

适用时，将该单一命名交换作为离开本过程的原子流记录；保留实测身份、路线条件和去向。

- 选定流：化石源二氧化碳，排入空气
- 流属性/单位：Mass / kg
- 数量规则：采用实测排放，或由监测活动数据及有记录因子或浓度计算负荷。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 热胴体
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_p2_slaughter_records`
- 来源：`jrc-sa-bref-2024`

###### 排入空气的氮氧化物（`slaughter_nox_air`）

适用时，将该单一命名交换作为离开本过程的原子流记录；保留实测身份、路线条件和去向。

- 选定流：氮氧化物，排入空气
- 流属性/单位：Mass / kg
- 数量规则：采用实测排放，或由监测活动数据及有记录因子或浓度计算负荷。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 热胴体
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_p2_slaughter_records`
- 来源：`jrc-sa-bref-2024`

###### 排入空气的非甲烷挥发性有机物（`slaughter_nmvoc_air`）

适用时，将该单一命名交换作为离开本过程的原子流记录；保留实测身份、路线条件和去向。

- 选定流：非甲烷挥发性有机物，排入空气
- 流属性/单位：Mass / kg
- 数量规则：采用实测排放，或由监测活动数据及有记录因子或浓度计算负荷。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 热胴体
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_p2_slaughter_records`
- 来源：`jrc-sa-bref-2024`


### 过程：胴体冷却和冷藏暂存（`p3_carcass_chilling`）

#### 输入

##### 产品流

###### 驼科动物热胴体（`hot_carcass_input`）

适用时，将该单一命名交换作为进入本过程的原子流记录；保留实测身份、路线条件和去向。

- 选定流：Hot dressed camelid carcass
- 流属性/单位：Mass / kg
- 数量规则：按动物、批次、秤重、领用或转移记录计量净质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 冷藏胴体
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_p3_chilling_records`
- 来源：`jrc-sa-bref-2024`

###### 中压电力（`chilling_electricity_input`）

适用时，将该单一命名交换作为进入本过程的原子流记录；保留实测身份、路线条件和去向。

- 选定流：中压电力
- 流属性/单位：Energy / kWh
- 数量规则：采用分表用量，或按有记录物理动因分配完整仪表总量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 冷藏胴体
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_p3_chilling_records`
- 来源：`jrc-sa-bref-2024`

###### 工艺水（`chilling_process_water_input`）

适用时，将该单一命名交换作为进入本过程的原子流记录；保留实测身份、路线条件和去向。

- 选定流：过程用水
- 流属性/单位：Volume / m3
- 数量规则：采用计量工艺水体积，或按有记录物理规则分配完整场址水量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 冷藏胴体
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_p3_chilling_records`
- 来源：`jrc-sa-bref-2024`

###### R-717 氨制冷剂（`chilling_r717_input`）

适用时，将该单一命名交换作为进入本过程的原子流记录；保留实测身份、路线条件和去向。

- 选定流：Refrigerant R-717 ammonia
- 流属性/单位：Mass / kg
- 数量规则：期初库存加购入减期末库存、回收量及有记录转移量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 冷藏胴体
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_p3_chilling_records`
- 来源：`jrc-sa-bref-2024`

###### R-404A 制冷剂（`chilling_r404a_input`）

适用时，将该单一命名交换作为进入本过程的原子流记录；保留实测身份、路线条件和去向。

- 选定流：Refrigerant R-404A
- 流属性/单位：Mass / kg
- 数量规则：期初库存加购入减期末库存、回收量及有记录转移量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 冷藏胴体
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_p3_chilling_records`
- 来源：`jrc-sa-bref-2024`
##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 冷藏驼科动物胴体（`chilled_carcass_output`）

适用时，将该单一命名交换作为离开本过程的原子流记录；保留实测身份、路线条件和去向。

- 选定流：Chilled dressed camelid carcass
- 流属性/单位：Mass / kg
- 数量规则：计量转入下一前景过程的合格质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 冷藏胴体
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_p3_chilling_records`
- 来源：`jrc-sa-bref-2024`
##### 废物流

###### 驼科动物胴体冷却废水（`chilling_wastewater_output`）

适用时，将该单一命名交换作为离开本过程的原子流记录；保留实测身份、路线条件和去向。

- 选定流：Wastewater from camelid carcass chilling
- 流属性/单位：Volume / m3
- 数量规则：计量该命名废水流在所述过程或处理边界的体积。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 冷藏胴体
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_p3_chilling_records`
- 来源：`jrc-sa-bref-2024`

###### 判废冷藏驼科动物胴体（`chilling_reject_output`）

适用时，将该单一命名交换作为离开本过程的原子流记录；保留实测身份、路线条件和去向。

- 选定流：Condemned chilled camelid carcass
- 流属性/单位：Mass / kg
- 数量规则：按命名材料和去向计量分开收集的废物转移质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 冷藏胴体
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_p3_chilling_records`
- 来源：`jrc-sa-bref-2024`
##### 基本流

###### 排入空气的氨（`chilling_ammonia_air`）

适用时，将该单一命名交换作为离开本过程的原子流记录；保留实测身份、路线条件和去向。

- 选定流：氨，排入空气
- 流属性/单位：Mass / kg
- 数量规则：采用实测排放，或由监测活动数据及有记录因子或浓度计算负荷。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 冷藏胴体
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_p3_chilling_records`
- 来源：`jrc-sa-bref-2024`

###### 排入空气的 R-404A（`chilling_r404a_air`）

适用时，将该单一命名交换作为离开本过程的原子流记录；保留实测身份、路线条件和去向。

- 选定流：Refrigerant R-404A to air
- 流属性/单位：Mass / kg
- 数量规则：采用实测排放，或由监测活动数据及有记录因子或浓度计算负荷。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 冷藏胴体
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_p3_chilling_records`
- 来源：`jrc-sa-bref-2024`


### 过程：标准分割和剔骨（`p4_cutting_deboning`）

#### 输入

##### 产品流

###### 冷藏驼科动物胴体（`chilled_carcass_input`）

适用时，将该单一命名交换作为进入本过程的原子流记录；保留实测身份、路线条件和去向。

- 选定流：Chilled dressed camelid carcass
- 流属性/单位：Mass / kg
- 数量规则：按动物、批次、秤重、领用或转移记录计量净质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 未包装鲜或冷藏肉
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_p4_cutting_records`
- 来源：`jrc-sa-bref-2024`

###### 中压电力（`cutting_electricity_input`）

适用时，将该单一命名交换作为进入本过程的原子流记录；保留实测身份、路线条件和去向。

- 选定流：中压电力
- 流属性/单位：Energy / kWh
- 数量规则：采用分表用量，或按有记录物理动因分配完整仪表总量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 未包装鲜或冷藏肉
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_p4_cutting_records`
- 来源：`jrc-sa-bref-2024`

###### 工艺水（`cutting_process_water_input`）

适用时，将该单一命名交换作为进入本过程的原子流记录；保留实测身份、路线条件和去向。

- 选定流：过程用水
- 流属性/单位：Volume / m3
- 数量规则：采用计量工艺水体积，或按有记录物理规则分配完整场址水量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 未包装鲜或冷藏肉
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_p4_cutting_records`
- 来源：`jrc-sa-bref-2024`
##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 未包装冷藏驼科动物分割肉（`fresh_chilled_cuts_output`）

适用时，将该单一命名交换作为离开本过程的原子流记录；保留实测身份、路线条件和去向。

- 选定流：Unpacked chilled camelid meat cuts
- 流属性/单位：Mass / kg
- 数量规则：计量转入下一前景过程的合格质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 未包装鲜或冷藏肉
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_p4_cutting_records`
- 来源：`jrc-sa-bref-2024`

###### 驼科动物骨（`camel_bones_output`）

适用时，将该单一命名交换作为离开本过程的原子流记录；保留实测身份、路线条件和去向。

- 选定流：Camelid bones
- 流属性/单位：Mass / kg
- 数量规则：计量分开收集质量，并声明可食/不可食状态及销售、处理或处置去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 未包装鲜或冷藏肉
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_p4_cutting_records`
- 来源：`jrc-sa-bref-2024`

###### 驼科动物脂肪修割料（`camel_fat_trimmings_output`）

适用时，将该单一命名交换作为离开本过程的原子流记录；保留实测身份、路线条件和去向。

- 选定流：Camelid fat trimmings
- 流属性/单位：Mass / kg
- 数量规则：计量分开收集质量，并声明可食/不可食状态及销售、处理或处置去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 未包装鲜或冷藏肉
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_p4_cutting_records`
- 来源：`jrc-sa-bref-2024`
##### 废物流

###### 判废驼科动物肉（`condemned_meat_output`）

适用时，将该单一命名交换作为离开本过程的原子流记录；保留实测身份、路线条件和去向。

- 选定流：Condemned camelid meat
- 流属性/单位：Mass / kg
- 数量规则：按命名材料和去向计量分开收集的废物转移质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 未包装鲜或冷藏肉
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_p4_cutting_records`
- 来源：`jrc-sa-bref-2024`

###### 驼科动物肉分割废水（`cutting_wastewater_output`）

适用时，将该单一命名交换作为离开本过程的原子流记录；保留实测身份、路线条件和去向。

- 选定流：Wastewater from camelid meat cutting
- 流属性/单位：Volume / m3
- 数量规则：计量该命名废水流在所述过程或处理边界的体积。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 未包装鲜或冷藏肉
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_p4_cutting_records`
- 来源：`jrc-sa-bref-2024`
##### 基本流

###### 排入空气的化石二氧化碳（`cutting_co2_air`）

适用时，将该单一命名交换作为离开本过程的原子流记录；保留实测身份、路线条件和去向。

- 选定流：化石源二氧化碳，排入空气
- 流属性/单位：Mass / kg
- 数量规则：采用实测排放，或由监测活动数据及有记录因子或浓度计算负荷。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 未包装鲜或冷藏肉
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_p4_cutting_records`
- 来源：`jrc-sa-bref-2024`

###### 排入空气的氮氧化物（`cutting_nox_air`）

适用时，将该单一命名交换作为离开本过程的原子流记录；保留实测身份、路线条件和去向。

- 选定流：氮氧化物，排入空气
- 流属性/单位：Mass / kg
- 数量规则：采用实测排放，或由监测活动数据及有记录因子或浓度计算负荷。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 未包装鲜或冷藏肉
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_p4_cutting_records`
- 来源：`jrc-sa-bref-2024`


### 过程：包装和最终冷藏（`p5_packaging_storage`）

#### 输入

##### 产品流

###### 冷藏驼科动物胴体（`packaging_chilled_carcass_input`）

验收合格整胴体或半胴体绕过分割并直接进入包装或最终冷藏时，记录该单一胴体路线投入。

- 选定流：Chilled dressed camelid carcass
- 流属性/单位：Mass / kg
- 数量规则：计量从胴体冷却转入的合格质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_p5_packaging_records`
- 来源：`jrc-sa-bref-2024`

###### 未包装冷藏驼科动物分割肉（`unpacked_meat_input`）

适用时，将该单一命名交换作为进入本过程的原子流记录；保留实测身份、路线条件和去向。

- 选定流：Unpacked chilled camelid meat cuts
- 流属性/单位：Mass / kg
- 数量规则：按动物、批次、秤重、领用或转移记录计量净质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_p5_packaging_records`
- 来源：`jrc-sa-bref-2024`

###### 中压电力（`packaging_electricity_input`）

适用时，将该单一命名交换作为进入本过程的原子流记录；保留实测身份、路线条件和去向。

- 选定流：中压电力
- 流属性/单位：Energy / kWh
- 数量规则：采用分表用量，或按有记录物理动因分配完整仪表总量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_p5_packaging_records`
- 来源：`jrc-sa-bref-2024`

###### R-717 氨制冷剂（`packaging_r717_input`）

适用时，将该单一命名交换作为进入本过程的原子流记录；保留实测身份、路线条件和去向。

- 选定流：Refrigerant R-717 ammonia
- 流属性/单位：Mass / kg
- 数量规则：期初库存加购入减期末库存、回收量及有记录转移量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_p5_packaging_records`
- 来源：`jrc-sa-bref-2024`

###### R-404A 制冷剂（`packaging_r404a_input`）

适用时，将该单一命名交换作为进入本过程的原子流记录；保留实测身份、路线条件和去向。

- 选定流：Refrigerant R-404A
- 流属性/单位：Mass / kg
- 数量规则：期初库存加购入减期末库存、回收量及有记录转移量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_p5_packaging_records`
- 来源：`jrc-sa-bref-2024`

###### 聚酰胺-聚乙烯肉类真空袋（`vacuum_bag_input`）

适用时，将该单一命名交换作为进入本过程的原子流记录；保留实测身份、路线条件和去向。

- 选定流：Polyamide-polyethylene vacuum meat bag
- 流属性/单位：Mass / kg
- 数量规则：由规格、采购记录和产品特定包装数量计算包装质量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_p5_packaging_records`
- 来源：`jrc-sa-bref-2024`

###### 低密度聚乙烯肉类收缩袋（`shrink_bag_input`）

适用时，将该单一命名交换作为进入本过程的原子流记录；保留实测身份、路线条件和去向。

- 选定流：Low-density polyethylene meat shrink bag
- 流属性/单位：Mass / kg
- 数量规则：由规格、采购记录和产品特定包装数量计算包装质量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_p5_packaging_records`
- 来源：`jrc-sa-bref-2024`

###### 瓦楞纸板肉类包装箱（`corrugated_carton_input`）

适用时，将该单一命名交换作为进入本过程的原子流记录；保留实测身份、路线条件和去向。

- 选定流：Corrugated paperboard meat carton
- 流属性/单位：Mass / kg
- 数量规则：由规格、采购记录和产品特定包装数量计算包装质量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_p5_packaging_records`
- 来源：`jrc-sa-bref-2024`

###### 高密度聚乙烯可重复使用肉箱（`hdpe_crate_input`）

适用时，将该单一命名交换作为进入本过程的原子流记录；保留实测身份、路线条件和去向。

- 选定流：High-density polyethylene reusable meat crate
- 流属性/单位：Mass / kg
- 数量规则：按有记录使用次数分配实测补充或损失质量；不得把循环箱周转量记为消耗。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_p5_packaging_records`
- 来源：`jrc-sa-bref-2024`

###### 线性低密度聚乙烯托盘缠绕膜（`pallet_stretch_film_input`）

适用时，将该单一命名交换作为进入本过程的原子流记录；保留实测身份、路线条件和去向。

- 选定流：Linear low-density polyethylene pallet stretch film
- 流属性/单位：Mass / kg
- 数量规则：由规格、采购记录和产品特定包装数量计算包装质量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_p5_packaging_records`
- 来源：`jrc-sa-bref-2024`
##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 鲜或冷藏驼科动物肉（`reference_meat_output`）

这是验收合格的工厂门口参考产品，不含冷冻肉、可食或不可食内脏，也不含单独列入清单的包装质量。

- 选定流：骆驼和驼科动物肉，新鲜或冷藏 `43edde93-b716-4329-93a4-2eb708e1e7e3`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg in Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：验收合格鲜或冷藏肉净质量正好 1 kg。
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：通用（`generic`）
- 归一化基准：1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）

##### 废物流

###### 拒收包装驼科动物肉（`packaging_reject_output`）

适用时，将该单一命名交换作为离开本过程的原子流记录；保留实测身份、路线条件和去向。

- 选定流：Rejected packaged camelid meat
- 流属性/单位：Mass / kg
- 数量规则：按命名材料和去向计量分开收集的废物转移质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_p5_packaging_records`
- 来源：`jrc-sa-bref-2024`

###### 废聚酰胺-聚乙烯薄膜（`waste_vacuum_bag_output`）

适用时，将该单一命名交换作为离开本过程的原子流记录；保留实测身份、路线条件和去向。

- 选定流：Waste polyamide-polyethylene film
- 流属性/单位：Mass / kg
- 数量规则：按命名材料和去向计量分开收集的废物转移质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_p5_packaging_records`
- 来源：`jrc-sa-bref-2024`

###### 废低密度聚乙烯薄膜（`waste_ldpe_film_output`）

适用时，将该单一命名交换作为离开本过程的原子流记录；保留实测身份、路线条件和去向。

- 选定流：废低密度聚乙烯薄膜
- 流属性/单位：Mass / kg
- 数量规则：按命名材料和去向计量分开收集的废物转移质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_p5_packaging_records`
- 来源：`jrc-sa-bref-2024`

###### 废瓦楞纸板（`waste_corrugated_carton_output`）

适用时，将该单一命名交换作为离开本过程的原子流记录；保留实测身份、路线条件和去向。

- 选定流：废瓦楞纸板
- 流属性/单位：Mass / kg
- 数量规则：按命名材料和去向计量分开收集的废物转移质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_p5_packaging_records`
- 来源：`jrc-sa-bref-2024`

###### 废线性低密度聚乙烯缠绕膜（`waste_stretch_film_output`）

适用时，将该单一命名交换作为离开本过程的原子流记录；保留实测身份、路线条件和去向。

- 选定流：Waste linear low-density polyethylene stretch film
- 流属性/单位：Mass / kg
- 数量规则：按命名材料和去向计量分开收集的废物转移质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_p5_packaging_records`
- 来源：`jrc-sa-bref-2024`
##### 基本流

###### 排入空气的氨（`packaging_ammonia_air`）

适用时，将该单一命名交换作为离开本过程的原子流记录；保留实测身份、路线条件和去向。

- 选定流：氨，排入空气
- 流属性/单位：Mass / kg
- 数量规则：采用实测排放，或由监测活动数据及有记录因子或浓度计算负荷。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_p5_packaging_records`
- 来源：`jrc-sa-bref-2024`

###### 排入空气的 R-404A（`packaging_r404a_air`）

适用时，将该单一命名交换作为离开本过程的原子流记录；保留实测身份、路线条件和去向。

- 选定流：Refrigerant R-404A to air
- 流属性/单位：Mass / kg
- 数量规则：采用实测排放，或由监测活动数据及有记录因子或浓度计算负荷。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_p5_packaging_records`
- 来源：`jrc-sa-bref-2024`


### 过程：设备和设施清洗消毒（`p6_cleaning_sanitation`）

#### 输入

##### 产品流

###### 工艺水（`sanitation_process_water_input`）

适用时，将该单一命名交换作为进入本过程的原子流记录；保留实测身份、路线条件和去向。

- 选定流：过程用水
- 流属性/单位：Volume / m3
- 数量规则：采用计量工艺水体积，或按有记录物理规则分配完整场址水量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_p6_sanitation_records`
- 来源：`jrc-sa-bref-2024`

###### 热水（`sanitation_hot_water_input`）

适用时，将该单一命名交换作为进入本过程的原子流记录；保留实测身份、路线条件和去向。

- 选定流：热水
- 流属性/单位：Energy / MJ
- 数量规则：计量交付热水能量，或由实测体积和温差计算。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_p6_sanitation_records`
- 来源：`jrc-sa-bref-2024`

###### 中压电力（`sanitation_electricity_input`）

适用时，将该单一命名交换作为进入本过程的原子流记录；保留实测身份、路线条件和去向。

- 选定流：中压电力
- 流属性/单位：Energy / kWh
- 数量规则：采用分表用量，或按有记录物理动因分配完整仪表总量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_p6_sanitation_records`
- 来源：`jrc-sa-bref-2024`

###### 蒸汽（`sanitation_steam_input`）

适用时，将该单一命名交换作为进入本过程的原子流记录；保留实测身份、路线条件和去向。

- 选定流：蒸汽
- 流属性/单位：Energy / MJ
- 数量规则：计量交付蒸汽能量，或由实测质量和蒸汽状态计算。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_p6_sanitation_records`
- 来源：`jrc-sa-bref-2024`

###### 天然气（`sanitation_natural_gas_input`）

适用时，将该单一命名交换作为进入本过程的原子流记录；保留实测身份、路线条件和去向。

- 选定流：天然气
- 流属性/单位：Energy / MJ
- 数量规则：将实测燃料数量用有记录低位热值换算并归至本过程。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_p6_sanitation_records`
- 来源：`jrc-sa-bref-2024`

###### 氢氧化钠清洗液（`sodium_hydroxide_input`）

适用时，将该单一命名交换作为进入本过程的原子流记录；保留实测身份、路线条件和去向。

- 选定流：氢氧化钠清洗液
- 流属性/单位：Mass / kg
- 数量规则：由化学品领用、浓度和溶液用量记录计算活性产品质量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_p6_sanitation_records`
- 来源：`jrc-sa-bref-2024`

###### 过氧乙酸消毒液（`peracetic_acid_input`）

适用时，将该单一命名交换作为进入本过程的原子流记录；保留实测身份、路线条件和去向。

- 选定流：Peracetic acid disinfectant solution
- 流属性/单位：Mass / kg
- 数量规则：由化学品领用、浓度和溶液用量记录计算活性产品质量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_p6_sanitation_records`
- 来源：`jrc-sa-bref-2024`

###### 次氯酸钠消毒液（`sodium_hypochlorite_input`）

适用时，将该单一命名交换作为进入本过程的原子流记录；保留实测身份、路线条件和去向。

- 选定流：Sodium hypochlorite disinfectant solution
- 流属性/单位：Mass / kg
- 数量规则：由化学品领用、浓度和溶液用量记录计算活性产品质量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_p6_sanitation_records`
- 来源：`jrc-sa-bref-2024`
##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 屠宰场清洗消毒未处理废水（`sanitation_wastewater_output`）

适用时，将该单一命名交换作为离开本过程的原子流记录；保留实测身份、路线条件和去向。

- 选定流：Untreated wastewater from slaughterhouse sanitation
- 流属性/单位：Volume / m3
- 数量规则：计量该命名废水流在所述过程或处理边界的体积。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_p6_sanitation_records`
- 来源：`jrc-sa-bref-2024`

###### 废高密度聚乙烯化学品容器（`empty_chemical_container_output`）

适用时，将该单一命名交换作为离开本过程的原子流记录；保留实测身份、路线条件和去向。

- 选定流：Waste high-density polyethylene chemical container
- 流属性/单位：Mass / kg
- 数量规则：按命名材料和去向计量分开收集的废物转移质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_p6_sanitation_records`
- 来源：`jrc-sa-bref-2024`
##### 基本流

###### 排入空气的非甲烷挥发性有机物（`sanitation_nmvoc_air`）

适用时，将该单一命名交换作为离开本过程的原子流记录；保留实测身份、路线条件和去向。

- 选定流：非甲烷挥发性有机物，排入空气
- 流属性/单位：Mass / kg
- 数量规则：采用实测排放，或由监测活动数据及有记录因子或浓度计算负荷。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_p6_sanitation_records`
- 来源：`jrc-sa-bref-2024`


### 过程：场内屠宰废水处理（`p7_wastewater_treatment`）

#### 输入

##### 产品流

###### 中压电力（`wastewater_electricity_input`）

适用时，将该单一命名交换作为进入本过程的原子流记录；保留实测身份、路线条件和去向。

- 选定流：中压电力
- 流属性/单位：Energy / kWh
- 数量规则：采用分表用量，或按有记录物理动因分配完整仪表总量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_p7_wastewater_records`
- 来源：`jrc-sa-bref-2024`

###### 氯化铁混凝剂（`ferric_chloride_input`）

适用时，将该单一命名交换作为进入本过程的原子流记录；保留实测身份、路线条件和去向。

- 选定流：Ferric chloride coagulant
- 流属性/单位：Mass / kg
- 数量规则：由化学品领用、浓度和溶液用量记录计算活性产品质量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_p7_wastewater_records`
- 来源：`jrc-sa-bref-2024`

###### 聚丙烯酰胺絮凝剂（`polyacrylamide_input`）

适用时，将该单一命名交换作为进入本过程的原子流记录；保留实测身份、路线条件和去向。

- 选定流：聚丙烯酰胺絮凝剂
- 流属性/单位：Mass / kg
- 数量规则：由化学品领用、浓度和溶液用量记录计算活性产品质量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_p7_wastewater_records`
- 来源：`jrc-sa-bref-2024`
##### 废物流

###### 驼科动物屠宰未处理废水（`slaughter_wastewater_input`）

适用时，将该单一命名交换作为进入本过程的原子流记录；保留实测身份、路线条件和去向。

- 选定流：Untreated wastewater from camelid slaughter
- 流属性/单位：Volume / m3
- 数量规则：计量该命名废水流在所述过程或处理边界的体积。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_p7_wastewater_records`
- 来源：`jrc-sa-bref-2024`

###### 驼科动物胴体冷却废水（`chilling_wastewater_input`）

适用时，将该单一命名交换作为进入本过程的原子流记录；保留实测身份、路线条件和去向。

- 选定流：Wastewater from camelid carcass chilling
- 流属性/单位：Volume / m3
- 数量规则：计量该命名废水流在所述过程或处理边界的体积。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_p7_wastewater_records`
- 来源：`jrc-sa-bref-2024`

###### 驼科动物肉分割废水（`cutting_wastewater_input`）

适用时，将该单一命名交换作为进入本过程的原子流记录；保留实测身份、路线条件和去向。

- 选定流：Wastewater from camelid meat cutting
- 流属性/单位：Volume / m3
- 数量规则：计量该命名废水流在所述过程或处理边界的体积。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_p7_wastewater_records`
- 来源：`jrc-sa-bref-2024`

###### 屠宰场清洗消毒未处理废水（`sanitation_wastewater_input`）

适用时，将该单一命名交换作为进入本过程的原子流记录；保留实测身份、路线条件和去向。

- 选定流：Untreated wastewater from slaughterhouse sanitation
- 流属性/单位：Volume / m3
- 数量规则：计量该命名废水流在所述过程或处理边界的体积。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_p7_wastewater_records`
- 来源：`jrc-sa-bref-2024`
##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 经处理屠宰场出水（`treated_effluent_output`）

适用时，将该单一命名交换作为离开本过程的原子流记录；保留实测身份、路线条件和去向。

- 选定流：Treated slaughterhouse effluent
- 流属性/单位：Volume / m3
- 数量规则：计量该命名废水流在所述过程或处理边界的体积。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_p7_wastewater_records`
- 来源：`jrc-sa-bref-2024`

###### 屠宰场废水筛渣（`wastewater_screenings_output`）

适用时，将该单一命名交换作为离开本过程的原子流记录；保留实测身份、路线条件和去向。

- 选定流：Slaughterhouse wastewater screenings
- 流属性/单位：Mass / kg
- 数量规则：按命名材料和去向计量分开收集的废物转移质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_p7_wastewater_records`
- 来源：`jrc-sa-bref-2024`

###### 屠宰场废水处理污泥（`wastewater_sludge_output`）

适用时，将该单一命名交换作为离开本过程的原子流记录；保留实测身份、路线条件和去向。

- 选定流：Slaughterhouse wastewater treatment sludge
- 流属性/单位：Mass / kg
- 数量规则：按命名材料和去向计量分开收集的废物转移质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_p7_wastewater_records`
- 来源：`jrc-sa-bref-2024`
##### 基本流

###### 排入水的化学需氧量（`effluent_cod_water`）

适用时，将该单一命名交换作为离开本过程的原子流记录；保留实测身份、路线条件和去向。

- 选定流：化学需氧量，排入水体
- 流属性/单位：Mass / kg
- 数量规则：采用实测排放，或由监测活动数据及有记录因子或浓度计算负荷。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_p7_wastewater_records`
- 来源：`jrc-sa-bref-2024`

###### 排入水的总氮（`effluent_total_n_water`）

适用时，将该单一命名交换作为离开本过程的原子流记录；保留实测身份、路线条件和去向。

- 选定流：总氮，排入水体
- 流属性/单位：Mass / kg
- 数量规则：采用实测排放，或由监测活动数据及有记录因子或浓度计算负荷。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_p7_wastewater_records`
- 来源：`jrc-sa-bref-2024`

###### 排入水的总磷（`effluent_total_p_water`）

适用时，将该单一命名交换作为离开本过程的原子流记录；保留实测身份、路线条件和去向。

- 选定流：总磷，排入水体
- 流属性/单位：Mass / kg
- 数量规则：采用实测排放，或由监测活动数据及有记录因子或浓度计算负荷。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_p7_wastewater_records`
- 来源：`jrc-sa-bref-2024`

###### 排入水的悬浮固体（`effluent_tss_water`）

适用时，将该单一命名交换作为离开本过程的原子流记录；保留实测身份、路线条件和去向。

- 选定流：悬浮固体，排入水体
- 流属性/单位：Mass / kg
- 数量规则：采用实测排放，或由监测活动数据及有记录因子或浓度计算负荷。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_p7_wastewater_records`
- 来源：`jrc-sa-bref-2024`


## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_rule_1` | 前景过程 | 在记录允许时，通过单独计量、批次追溯、过程拆分和直接质量归属避免分配。 | ec-pef-method-2021 |
| `allocation_rule_2` | 可食和不可食输出 | 分配前记录参考肉、每种可食器官、血、皮、脂肪、骨、内脏和判废材料的质量、法律/食品状态、去向和收入。 | jrc-sa-bref-2024; ec-pef-method-2021 |
| `allocation_rule_3` | 可物理归属负荷 | 有物理因果关系时直接归属，如将分割能耗归至实际分割路线、包装归至被包装肉。 | ec-pef-method-2021 |
| `allocation_rule_4` | 剩余多功能性 | 拆分和物理因果不能解决时，采用有同期市场价值支持且符合 PEF 的分配基准；披露价格、平均期、比例和敏感性。 | ec-pef-method-2021 |
| `allocation_rule_5` | 废物和回收 | 保留总投入、内部回收、外运共产品、废物和最终输出；下游模型未明确要求时不得给予避免负荷抵扣。 | ec-pef-method-2021 |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_p1_reception_records` | `p1_reception_stunning` | 活体、公用工程、粪便、垫料、死亡、排放 | 接收；秤；待宰圈；燃料和仪表日志 | 物种；批次；数量；活重；接收时间；水；电；柴油；粪便；垫料；死亡 | 将接收动物和接收记录匹配至致昏动物输出。 | kg; count; m3; kWh; MJ | 每次接收和班次 | 已声明有代表性时期 | 全部接收/致昏区 | 按物种/类别汇总并核对数量/质量。 | 经校准秤；追溯；仪表 |
| `cp_p2_slaughter_records` | `p2_slaughter_dressing` | 动物、公用工程、胴体、共产品、废物、废水、排放 | 屠宰批次；秤；检验；转移 | 批次；数量；活重；热胴体；各输出质量；去向；公用工程；废水；排放活动 | 将每批关联至胴体、各共产品、判废和公用工程记录。 | kg; count; m3; kWh; MJ | 每批和班次 | 已声明有代表性时期 | 全部屠宰/处理线 | 归一化前核对批次质量。 | 经校准秤/仪表；检验；凭证；平衡 |
| `cp_p3_chilling_records` | `p3_carcass_chilling` | 胴体、制冷、水、拒收、废水、排放 | 秤；温度；仪表；维护 | 批次；热质量；冷藏质量；时间；温度；电；水；制冷剂；拒收；废水 | 将质量和温度历史匹配至制冷记录。 | kg; Celsius; kWh; m3 | 每批及连续温度 | 已声明有代表性时期 | 全部冷藏间 | 归一化至合格冷藏质量。 | 秤；记录仪；仪表；维护记录 |
| `cp_p4_cutting_records` | `p4_cutting_deboning` | 胴体、公用工程、肉、骨、脂肪、拒收、废水 | 分割批次；分割表；秤；仪表 | 批次；投入；分割肉；骨；脂肪；判废；水；电；废水 | 按产品形式和带骨状态核对每批。 | kg; kWh; m3 | 每批和班次 | 已声明有代表性时期 | 全部分割间 | 批次平衡后汇总相容分割肉。 | 秤/仪表；分割表；检验 |
| `cp_p5_packaging_records` | `p5_packaging_storage` | 肉、制冷、包装、拒收、废物、参考输出 | 包装批次；秤；规格；冷库仪表 | 批次；形式；净质量；各包装质量；合格；拒收；电；制冷剂；温度 | 将包装批次和冷库记录匹配至合格净输出。 | kg; kWh; Celsius | 每批及连续温度 | 已声明有代表性时期 | 全部包装/冷库 | 归一化至正好 1 kg 净肉。 | 秤；规格；记录仪；维护记录 |
| `cp_p6_sanitation_records` | `p6_cleaning_sanitation` | 水、热、公用工程、化学品、废水 | 计划；化学品领用；仪表；浓度 | 区域；循环；水；热水；蒸汽；电；气；各溶液；浓度；废水 | 将清洗循环匹配至服务区域和批次。 | kg; m3; kWh; MJ | 每次清洗循环 | 已声明有代表性时期 | 全部服务区域 | 计算活性化学品并按已核清洗动因分配。 | 签字；SDS；浓度；仪表 |
| `cp_p7_wastewater_records` | `p7_wastewater_treatment` | 废水、化学品、电力、出水、筛渣、污泥、水排放 | 流量计；处理日志；领用；采样 | 来源；体积；电；化学品；出水；筛渣；污泥；COD；N；P；TSS | 保持来源流分开并核对处理输出和负荷。 | m3; kg; kWh | 连续流量及采样 | 已声明有代表性时期 | 场内处理 | 由匹配流量/浓度计算负荷。 | 校准；实验室 QA；样品链；平衡 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 全部交换 | 归一化交换 = 时期交换 × 归属比例 ÷ 合格参考肉净质量 | 交换；比例；质量 | 每 kg 交换 | ec-pef-method-2021 |
| `calc_slaughter_mass_balance` | 屠宰 | 活体投入 = 胴体 + 各共产品 + 各废物 + 过程质量变化 + 残差 | 投入/输出质量 | 平衡和残差 | jrc-sa-bref-2024 |
| `calc_chilling_loss` | 冷却 | 质量变化 = 匹配批次/时间的热胴体质量 − 冷藏胴体质量 | 热/冷质量 | kg 变化 | jrc-sa-bref-2024 |
| `calc_cutting_balance` | 分割 | 冷藏胴体 = 未包装肉 + 骨 + 脂肪 + 判废肉 + 残差 | 投入/输出质量 | 分割平衡 | jrc-sa-bref-2024 |
| `calc_shared_utilities` | 共享公用工程 | 分配量 = 完整总量 × 有记录分表、运行/负荷、面积或吞吐比例 | 总量；动因 | 各过程公用工程 | ec-pef-method-2021 |
| `calc_fuel_energy` | 单项燃料 | 能量 = 实测燃料 × 有记录低位热值 | 燃料；因子 | MJ | ec-pef-method-2021 |
| `calc_refrigerant_loss` | 单项制冷剂 | 损失 = 期初 + 购入 − 期末 − 回收 − 转移 | 库存/维护记录 | kg 损失 | ec-pef-method-2021 |
| `calc_active_chemical` | 单项化学品 | 活性质量 = 溶液质量 × 有记录活性浓度 | 溶液；浓度 | kg 活性物 | jrc-sa-bref-2024 |
| `calc_effluent_load` | 单项水排放 | 负荷 = 匹配出水体积 × 有代表性浓度并换算单位 | 体积；浓度 | 排入水的 kg | jrc-sa-bref-2024 |
| `calc_economic_allocation` | 剩余共产品分配 | 比例 = 命名输出收入 ÷ 全部被分配输出同期总收入 | 质量；价格；时期 | 负荷比例 | ec-pef-method-2021 |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | 动物和产品 | 保留物种、批次、屠宰身份、产品形式、温度、检验状态和已核参考 UUID；其他 UUID 缺口明确。 | 追溯；规格；manifest |
| `dq_mass_balance` | 屠宰和分割 | 核对活重、热/冷胴体、肉、各共产品、各废物、质量变化和残差。 | 秤；批次平衡 |
| `dq_temperature` | 冷藏产品 | 保留温度记录及参考肉未冷冻证据。 | 经校准记录仪；放行记录 |
| `dq_temporal` | 前景数据 | 使用一个已声明有代表性时期并披露异常作业和季节局限。 | 日志；登记 |
| `dq_measurement` | 计量/计算流 | 保留边界、校准、浓度、采样、换算、动因和局限。 | 仪表图；证书；实验室报告 |
| `dq_completeness` | LCI | 覆盖适用材料、能源、产品、共产品、废物及空气/水排放；说明排除。 | 清单；平衡 |
| `dq_destination` | 输出 | 对每项命名输出记录食品状态、处置、处理、销售、再利用或弃置。 | 检验；转移 |
| `dq_transparency` | 发布 | 披露边界、分配、价格、数据集、缺口、UUID 缺口、排除、不确定性和核证。 | 报告；评审 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validation_rule_1` | 参考身份 | 要求已核产品流、Mass 属性、Units of mass UUID 和 kg。 |  |
| `validation_rule_2` | 范围 | 要求鲜或冷藏骆驼/驼科动物肉；拒绝冷冻肉和以内脏为参考产品。 | un-cpc-3-0 |
| `validation_rule_3` | 参考数量 | 要求正好 1 kg 合格净肉，并分开包装和共产品。 | ec-pef-method-2021 |
| `validation_rule_4` | 过程覆盖 | 纳入实际接收、屠宰、处理、冷却、分割、包装、清洗、制冷、废水、废物和排放。 | jrc-sa-bref-2024 |
| `validation_rule_5` | 原子清单 | 拒绝集合标签以及合并的公用工程、燃料、制冷剂、化学品、包装、共产品、废物或排放。 |  |
| `validation_rule_6` | 平衡 | 要求相容的屠宰、冷却和分割平衡并披露残差。 | jrc-sa-bref-2024 |
| `validation_rule_7` | 分配 | 验证拆分、归属、基准、总量、比例、价格、时期和敏感性。 | ec-pef-method-2021 |
| `validation_rule_8` | 温度 | 要求测点、准则、监测、放行状态和产品未冷冻确认。 | un-cpc-3-0; jrc-sa-bref-2024 |
| `validation_rule_9` | 废水 | 要求各来源流、边界、体积、采样基准和各污染物负荷。 | jrc-sa-bref-2024 |
| `validation_rule_10` | 证据缺口 | 拒绝虚构数量和未确认 UUID；缺失值保留为采集要求。 | ec-pef-method-2021 |
| `validation_rule_11` | 重复计算 | 不得重复饲养、入厂运输、上游材料、外部废物处理或下游阶段。 | ec-pef-method-2021 |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 鲜或冷藏驼科动物肉的前景屠宰加工数据集。 |
| downstream_use | 通过全部门槛后可用作 `secondary_dataset` 或 `background_dataset`。 |
| allowed_use | 对已声明物种、形式、分割/带骨状态、温度、路线、场址、技术、时期和包装进行工厂门口建模。 |
| excluded_use | 冷冻肉；以内脏为参考；非驼科动物肉；饲养、货架期、烹饪、营养、消费或生命末期声明；未披露路线/分配。 |
| required_metadata | PCR id/版本；UUID；物种；动物类别；产品形式；分割/带骨状态；鲜/冷藏状态；温度；路线；检验；可食范围；包装；场址；地域；技术；时期；边界；分配；去向；数据集；评审。 |
| required_quality_disclosure | 初级覆盖；追溯；平衡；温度；计量；分配/价格；共产品状态；废水采样；缺口；UUID 缺口；排除；不确定性；核证。 |
| update_trigger | 范围、身份、物种、形式、温度、技术、制冷、清洗、包装、废水、分配、法规、方法或代表性变化。 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0` | `official_guidance` | 联合国统计司，产品总分类 3.0 版官方入口及仓库 raw 结构中 subclass 21117 标题。https://unstats.un.org/unsd/classifications/Econ/CPC（离线来源包核验于 2026-08-13）。 | 精确鲜或冷藏驼科动物肉范围，排除冷冻肉和内脏。 |
| `jrc-sa-bref-2024` | `official_guidance` | 欧盟委员会联合研究中心，《屠宰场、动物副产品和/或可食共产品工业最佳可行技术参考文件》，JRC135916，DOI:10.2760/18199。 | 接收、屠宰、分割、冷却、冷藏、清洗、公用工程、废水和命名共产品；未引入默认数量。 |
| `ec-pef-method-2021` | `official_guidance` | 欧盟委员会，委员会建议 (EU) 2021/2279，合并版产品环境足迹方法。https://eur-lex.europa.eu/eli/reco/2021/2279/2021-12-30/eng（离线核验官方正文）。 | 产品清单、公司数据、完整 LCI、分配、透明度、质量和校验。 |
