---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.meat-of-sheep-frozen
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 绵羊肉，冷冻

## 1. 范围与适用性

本 PCR 适用于 CPC 3.0 子类 21135 下在加工设施门口以冷冻状态供应的净合格绵羊肉。涵盖的商业形态包括冷冻绵羊胴体、半胴体以及所声明的带骨或去骨分割品，前提是参考产品仍为未经调制的冷冻绵羊肉。

前景边界始于屠宰设施验收活羊，包含接收与待宰；屠宰、放血、剥皮与去内脏；胴体整理与分割；预冷与冻结；包装、场内冻藏与放行；清洗与消毒；以及在场内实施时的废水处理。绵羊养殖和入厂运输属于上游。设施门口后的零售和配送、解冻、烹饪或其他使用以及产品或包装寿命终止属于下游。

鲜或冷藏绵羊肉、山羊肉、其他物种肉、作为所声明参考产品的可食内脏、熟制、调味或其他调制肉以及包装质量均不属于参考产品。可食器官仅可作为单独计量的共产品跨越前景边界，绝不可作为 CPC 21135 参考输出。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.meat-of-sheep-frozen |
| classification_refs | CPC 3.0：21135，绵羊肉，冷冻 |
| covered_products | 冷冻绵羊胴体、半胴体及所声明肉类分割品；带骨或去骨；未经调制并以冷冻状态放行 |
| excluded_products | 鲜或冷藏绵羊肉；作为参考产品的可食内脏；山羊或其他物种肉；熟制、调味、腌制或其他调制肉；包装 |
| representative_product | 从场内冻藏放行的净合格冷冻绵羊肉 |
| production_route | 活羊接收；屠宰和胴体处理；分割；预冷和冻结；包装；冻藏；设施门口放行 |
| market_state | 冷冻，按声明采用包装或散装形态，在加工设施门口放行 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 在加工设施门口供应净合格且未经调制的冷冻绵羊肉 |
| How much | 1 kg 净冷冻绵羊肉，不含包装 |
| How well | 声明且符合绵羊物种、冷冻状态、产品形态、带骨状态、放行规格和冻藏条件 |
| How long or cycle | 一个生产批次直至从场内冻藏放行；披露实际冻藏时长 |
| reference_flow_link | `reference_product_output` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg 净合格冷冻绵羊肉，不含包装 |
| 参考产品流 | Meat of sheep, frozen `7a898ac1-b845-4943-bae3-94e7c24ae06d` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 绵羊物种身份；胴体或分割形态；带骨或去骨状态；放行时冷冻状态；加工场址和地域；参考期；冻藏时长和条件；包装形式且包装不计入净质量；共产品状态和分配方法 |

构建前景数据包时，每项必需限定信息均应在数据集元数据、过程说明、参考流备注、产品说明或等效字段中声明。限定信息缺失时，参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_product_mass` | 定量参考 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 报告恰好 1 kg 净合格冷冻绵羊肉；分母排除全部包装质量。 |
| `live_weight_measurement` | 活羊接收与转移 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg live weight | 使用校准的活重记录，并在接收、待宰和屠宰之间保留批次身份。 |
| `intermediate_product_mass` | 胴体、分割品和冷冻中间产品转移 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 使用每个转移点的净实测质量；没有有记录的换算时，不得用计数或标称包装质量代替。 |
| `co_product_and_waste_mass` | 血、皮、器官、脂肪、骨、内容物、污泥及固体废物 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 每种物理流分别记录，并声明其计量基准为湿质量、沥干质量或其他所声明状态。 |
| `refrigerant_mass_balance` | R-717 和 R-134a 系统 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 根据核对库存和维修记录，按每种制冷剂物质分别计算补充量和未回收排放。 |
| `energy_identity_and_conversion` | 电力、蒸汽、热水和燃料 | 声明的载体属性 | 卡片特定单位 | 每种载体保留卡片单位；披露换算使用的热值或焓约定，不得同时计算外购热及其上游制热燃料。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 在加工设施门口验收的活羊，具有实测活重、批次身份、来源和上游数据集引用 |
| starting_condition_role | 前景屠宰和冷冻肉加工始于设施接收；绵羊养殖和入厂运输属于上游 |
| product_classification_scope | 仅 CPC 3.0 子类 21135：绵羊肉，冷冻 |
| recursive_input_rule | 若冷冻绵羊肉作为返工重新进入所代表场址，仅记录一次精确内部或外部产品流，并披露其先前加工边界；不得递归复制相同前景链 |
| upstream_dataset_requirement | 为活羊供应和入厂运输关联相容的上游数据集，并披露地域、生产系统、分配和参考期 |
| disclosure | 声明场址、绵羊来源、产品形态、冻结技术、冻藏条件和时长、包装、废水去向、共产品状态、分配及全部排除生命周期阶段 |

| rule_id | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `boundary_foreground_start` | 设施门口接收 | 前景采集从验收活羊开始；将养殖和入厂运输纳入上游数据集，而不得在屠宰操作中重复建模。 | `un-cpc-3-0`; `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef` |
| `boundary_required_operations` | 屠宰与冷冻肉生产 | 纳入接收、屠宰、胴体整理、分割、预冷、冻结、包装、场内冻藏、清洗和放行；实施场内废水处理时予以纳入。 | `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef` |
| `boundary_downstream_exclusion` | 设施门口输出 | 排除设施门口后的配送、零售、解冻、烹饪或其他使用以及寿命终止，除非所声明研究明确扩展下游边界。 | `un-cpc-3-0`; `eu-recommendation-2021-2279-pef` |
| `boundary_product_scope` | 参考产品 | CPC 21135 范围外保留鲜或冷藏绵羊肉、作为参考产品的可食内脏、其他物种及调制肉。 | `un-cpc-3-0` |
| `boundary_complete_lci` | 纳入的前景过程 | 对每个纳入过程记录所有已知材料、能源和水投入以及每项产品、共产品、排放和废物输出。 | `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `live_sheep_receiving_and_lairage` | 活羊接收与待宰 | `required` | 始终纳入，从设施门口接收活羊至转入屠宰 | 前景接收、暂养及动物质量核对 | 转入屠宰的 kg 验收活羊 |
| `slaughter_bleeding_skinning_evisceration` | 屠宰、放血、剥皮与去内脏 | `required` | 所代表数据集包含绵羊屠宰时始终纳入 | 前景屠宰及胴体、血液、皮、器官和消化道内容物分离 | 转入胴体整理的 kg 绵羊净胴体 |
| `carcass_dressing_and_cutting` | 胴体整理与分割 | `required` | 始终纳入，直至生产出所声明的未冷冻胴体或分割形态 | 前景修整、胴体整理、去骨或分割 | 转入冻结的 kg 合格未冷冻绵羊肉 |
| `prechilling_and_freezing` | 预冷与冻结 | `required` | 始终纳入，直至所声明产品达到有记录的冷冻状态 | 前景冷却、冻结和冷冻中间产品放行 | 转入包装的 kg 合格冷冻绵羊肉 |
| `packaging_frozen_storage_and_release` | 包装、冻藏与放行 | `required` | 始终纳入，直至包装、场内冻藏及设施门口放行 | 前景包装、冻藏及定量参考放行 | 1 kg 净合格冷冻绵羊肉，不含包装 |
| `cleaning_and_disinfection` | 清洗与消毒 | `required` | 始终纳入服务于所代表生产过程的清洗与消毒 | 前景卫生服务及其废水和残渣产生 | 分配至 1 kg 净合格冷冻绵羊肉的清洗服务 |
| `onsite_wastewater_treatment` | 场内废水处理 | `conditional` | 当所代表设施在排放或转移前处理普通或高有机负荷废水时纳入 | 前景废水处理、污泥产生及直接水排放 | 场内处理的 m3 废水 |

### 过程：活羊接收与待宰（`live_sheep_receiving_and_lairage`）

#### 输入

##### 产品流

###### 设施门口接收活羊（`live_sheep_input`）

活羊在设施接收处跨越前景边界；养殖和入厂运输保留在关联上游数据集中。

- 选定流：Live sheep
- 流属性/单位：Mass / kg live weight
- 数量规则：所代表接收批次中验收活羊的实测活重
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 转入屠宰的验收活羊
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receiving_lairage_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 接收与待宰电网电力（`receiving_electricity`）

接收与待宰使用的电网电力与所有热能载体分别记录。

- 选定流：Electricity, grid
- 流属性/单位：Energy / kWh
- 数量规则：计量或按分表分配至接收与待宰的电网电力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 转入屠宰的验收活羊
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receiving_lairage_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 接收与待宰外购蒸汽（`receiving_purchased_steam`）

接收与待宰使用的外购蒸汽与热水和燃料分别记录。

- 选定流：Purchased steam
- 流属性/单位：Mass / kg
- 数量规则：使用时分配至接收与待宰的外购蒸汽实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 转入屠宰的验收活羊
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receiving_lairage_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 接收与待宰外购热水（`receiving_purchased_hot_water`）

接收与待宰使用的外购热水与蒸汽分别记录。

- 选定流：Purchased hot water
- 流属性/单位：Mass / kg
- 数量规则：使用时分配至接收与待宰的外购热水实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 转入屠宰的验收活羊
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receiving_lairage_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 接收与待宰天然气（`receiving_natural_gas`）

接收与待宰设备使用的天然气与柴油和 LPG 分别记录。

- 选定流：Natural gas
- 流属性/单位：Energy / MJ
- 数量规则：采用已记录热值约定，计量分配至接收与待宰的天然气能量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 转入屠宰的验收活羊
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receiving_lairage_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 接收与待宰柴油（`receiving_diesel`）

接收与待宰直接运行设备使用的柴油单独记录。

- 选定流：Diesel fuel
- 流属性/单位：Mass / kg
- 数量规则：使用时计量或库存核对并分配至接收与待宰的柴油质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 转入屠宰的验收活羊
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receiving_lairage_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 接收与待宰 LPG（`receiving_lpg`）

接收与待宰设备使用的 LPG 与天然气和柴油分别记录。

- 选定流：Liquefied petroleum gas
- 流属性/单位：Mass / kg
- 数量规则：使用时库存核对并分配至接收与待宰的 LPG 质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 转入屠宰的验收活羊
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receiving_lairage_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 接收与待宰工艺水（`receiving_process_water`）

接收与待宰使用的新鲜工艺水与内部回用水分别计量。

- 选定流：Process water
- 流属性/单位：Volume / m3
- 数量规则：分配至接收与待宰的新鲜工艺水实测取水量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 转入屠宰的验收活羊
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receiving_lairage_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 转入屠宰的验收活羊（`accepted_live_sheep_output`）

验收活羊经称重后作为一个内部产品流转入屠宰。

- 选定流：Accepted live sheep
- 流属性/单位：Mass / kg live weight
- 数量规则：从待宰转入屠宰的实测活重
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 转入屠宰的验收活羊
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receiving_lairage_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

##### 废物流

###### 到厂死亡绵羊废物（`dead_on_arrival_sheep_waste`）

到厂时确认死亡的绵羊与粪便和废水分别记录。

- 选定流：Dead-on-arrival sheep
- 流属性/单位：Mass / kg
- 数量规则：送往有记录废物去向的到厂死亡绵羊实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 转入屠宰的验收活羊
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receiving_lairage_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 待宰区绵羊粪便（`lairage_manure_waste`）

从绵羊待宰区清除的粪便作为具体固体废物计量。

- 选定流：Sheep manure from lairage
- 流属性/单位：Mass / kg
- 数量规则：送往有记录去向的待宰区粪便实测或称量质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 转入屠宰的验收活羊
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receiving_lairage_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 待宰区废水（`lairage_wastewater`）

待宰区冲洗废水与高有机负荷屠宰废水分别记录。

- 选定流：Lairage wastewater
- 流属性/单位：Volume / m3
- 数量规则：送往场内处理或场外去向的待宰区废水实测体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 转入屠宰的验收活羊
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receiving_lairage_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

##### 基本流

###### 接收与待宰化石二氧化碳排放（`receiving_carbon_dioxide_air`）

接收与待宰所用燃料产生的化石二氧化碳作为单独空气交换报告。

- 选定流：Carbon dioxide, fossil, to air
- 流属性/单位：Mass / kg
- 数量规则：根据接收与待宰各燃料实测量及其有记录的碳含量或排放因子计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 转入屠宰的验收活羊
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_receiving_lairage_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 接收与待宰氮氧化物排放（`receiving_nitrogen_oxides_air`）

接收与待宰燃料燃烧产生的氮氧化物与二氧化硫分别报告。

- 选定流：Nitrogen oxides to air
- 流属性/单位：Mass / kg NO2-equivalent
- 数量规则：根据阶段燃料用量、设备记录和有记录 NOx 因子测量或计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 转入屠宰的验收活羊
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_receiving_lairage_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 接收与待宰二氧化硫排放（`receiving_sulfur_dioxide_air`）

接收与待宰燃料燃烧产生的二氧化硫与氮氧化物分别报告。

- 选定流：Sulfur dioxide to air
- 流属性/单位：Mass / kg
- 数量规则：根据阶段燃料用量、硫含量和设备记录测量或计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 转入屠宰的验收活羊
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_receiving_lairage_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 接收与待宰细颗粒物排放（`receiving_pm25_air`）

接收与待宰燃料燃烧产生的细颗粒物作为粒径特定空气交换报告。

- 选定流：Particulate matter, <2.5 um, to air
- 流属性/单位：Mass / kg
- 数量规则：根据阶段燃料用量和设备特定记录测量或计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 转入屠宰的验收活羊
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_receiving_lairage_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

### 过程：屠宰、放血、剥皮与去内脏（`slaughter_bleeding_skinning_evisceration`）

#### 输入

##### 产品流

###### 验收活羊投入（`accepted_live_sheep_input`）

从待宰转入的验收活羊作为一个内部产品流进入屠宰过程。

- 选定流：Accepted live sheep
- 流属性/单位：Mass / kg live weight
- 数量规则：进入屠宰的实测活重
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 转入整理的绵羊净胴体
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 屠宰电网电力（`slaughter_electricity`）

屠宰使用的电网电力与所有热能载体分别记录。

- 选定流：Electricity, grid
- 流属性/单位：Energy / kWh
- 数量规则：计量或按分表分配至屠宰的电网电力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 转入整理的绵羊净胴体
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 屠宰外购蒸汽（`slaughter_purchased_steam`）

屠宰使用的外购蒸汽与热水和燃料分别记录。

- 选定流：Purchased steam
- 流属性/单位：Mass / kg
- 数量规则：使用时分配至屠宰的外购蒸汽实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 转入整理的绵羊净胴体
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 屠宰外购热水（`slaughter_purchased_hot_water`）

屠宰使用的外购热水与蒸汽分别记录。

- 选定流：Purchased hot water
- 流属性/单位：Mass / kg
- 数量规则：使用时分配至屠宰的外购热水实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 转入整理的绵羊净胴体
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 屠宰天然气（`slaughter_natural_gas`）

屠宰设备使用的天然气与柴油和 LPG 分别记录。

- 选定流：Natural gas
- 流属性/单位：Energy / MJ
- 数量规则：采用已记录热值约定，计量分配至屠宰的天然气能量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 转入整理的绵羊净胴体
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 屠宰柴油（`slaughter_diesel`）

屠宰直接运行设备使用的柴油单独记录。

- 选定流：Diesel fuel
- 流属性/单位：Mass / kg
- 数量规则：使用时计量或库存核对并分配至屠宰的柴油质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 转入整理的绵羊净胴体
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 屠宰 LPG（`slaughter_lpg`）

屠宰设备使用的 LPG 与天然气和柴油分别记录。

- 选定流：Liquefied petroleum gas
- 流属性/单位：Mass / kg
- 数量规则：使用时库存核对并分配至屠宰的 LPG 质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 转入整理的绵羊净胴体
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 屠宰工艺水（`slaughter_process_water`）

屠宰使用的新鲜工艺水与内部回用水分别计量。

- 选定流：Process water
- 流属性/单位：Volume / m3
- 数量规则：分配至屠宰的新鲜工艺水实测取水量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 转入整理的绵羊净胴体
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 绵羊净胴体（`dressed_sheep_carcass_output`）

转入胴体整理的绵羊净胴体与所有共产品和废物分别记录。

- 选定流：Dressed sheep carcass
- 流属性/单位：Mass / kg
- 数量规则：屠宰过程放行的净胴体实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 转入整理的绵羊净胴体
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 回收绵羊血共产品（`sheep_blood_coproduct`）

具有有记录产品状态和有益用途的绵羊血作为独立共产品计量。

- 选定流：Sheep blood
- 流属性/单位：Mass / kg
- 数量规则：转入产品去向的回收绵羊血实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 转入整理的绵羊净胴体
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 生绵羊皮共产品（`raw_sheepskin_coproduct`）

具有有记录产品状态的生绵羊皮与废弃皮废物分别称量。

- 选定流：Raw sheepskin
- 流属性/单位：Mass / kg
- 数量规则：转入产品去向的生绵羊皮实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 转入整理的绵羊净胴体
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 绵羊可食器官共产品（`sheep_edible_organs_coproduct`）

作为共产品放行的绵羊可食器官与参考肉和不可食器官分别记录。

- 选定流：Sheep edible organs
- 流属性/单位：Mass / kg
- 数量规则：转入产品去向的放行绵羊可食器官实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 转入整理的绵羊净胴体
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

##### 废物流

###### 废弃绵羊血废物（`sheep_blood_waste`）

无产品状态的绵羊血作为废物记录，不与回收血液合并。

- 选定流：Discarded sheep blood
- 流属性/单位：Mass / kg
- 数量规则：送往有记录废物去向的废弃绵羊血实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 转入整理的绵羊净胴体
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 拒收绵羊皮废物（`rejected_sheepskin_waste`）

无产品状态的拒收绵羊皮与可销售生皮分别计量。

- 选定流：Rejected sheepskin
- 流属性/单位：Mass / kg
- 数量规则：送往有记录废物去向的拒收绵羊皮实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 转入整理的绵羊净胴体
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 绵羊不可食器官废物（`sheep_inedible_organs_waste`）

绵羊不可食器官作为具体废物流称量。

- 选定流：Inedible sheep organs
- 流属性/单位：Mass / kg
- 数量规则：送往有记录废物去向的不可食器官实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 转入整理的绵羊净胴体
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 绵羊胃内容物废物（`sheep_stomach_contents_waste`）

清除的绵羊胃内容物与肠内容物和废水分别记录。

- 选定流：Sheep stomach contents
- 流属性/单位：Mass / kg
- 数量规则：送往有记录去向的胃内容物实测或容器称量质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 转入整理的绵羊净胴体
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 绵羊肠内容物废物（`sheep_intestinal_contents_waste`）

清除的绵羊肠内容物与胃内容物分别记录。

- 选定流：Sheep intestinal contents
- 流属性/单位：Mass / kg
- 数量规则：送往有记录去向的肠内容物实测或容器称量质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 转入整理的绵羊净胴体
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 判废绵羊胴体废物（`condemned_sheep_carcass_waste`）

判废绵羊胴体与正常胴体输出和器官废物分别称量。

- 选定流：Condemned sheep carcass
- 流属性/单位：Mass / kg
- 数量规则：送往有记录废物去向的判废胴体实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 转入整理的绵羊净胴体
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 高有机负荷屠宰废水（`slaughter_high_load_wastewater`）

含血液和组织的屠宰废水与普通废水分别记录。

- 选定流：High-organic-load slaughter wastewater
- 流属性/单位：Volume / m3
- 数量规则：转入处理或场外去向的高有机负荷废水实测体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 转入整理的绵羊净胴体
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

##### 基本流

###### 屠宰化石二氧化碳排放（`slaughter_carbon_dioxide_air`）

屠宰所用燃料产生的化石二氧化碳作为单独空气交换报告。

- 选定流：Carbon dioxide, fossil, to air
- 流属性/单位：Mass / kg
- 数量规则：根据屠宰各燃料实测量及其有记录的碳含量或排放因子计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 转入整理的绵羊净胴体
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_slaughter_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 屠宰氮氧化物排放（`slaughter_nitrogen_oxides_air`）

屠宰燃料燃烧产生的氮氧化物与二氧化硫分别报告。

- 选定流：Nitrogen oxides to air
- 流属性/单位：Mass / kg NO2-equivalent
- 数量规则：根据阶段燃料用量、设备记录和有记录 NOx 因子测量或计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 转入整理的绵羊净胴体
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_slaughter_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 屠宰二氧化硫排放（`slaughter_sulfur_dioxide_air`）

屠宰燃料燃烧产生的二氧化硫与氮氧化物分别报告。

- 选定流：Sulfur dioxide to air
- 流属性/单位：Mass / kg
- 数量规则：根据阶段燃料用量、硫含量和设备记录测量或计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 转入整理的绵羊净胴体
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_slaughter_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 屠宰细颗粒物排放（`slaughter_pm25_air`）

屠宰燃料燃烧产生的细颗粒物作为粒径特定空气交换报告。

- 选定流：Particulate matter, <2.5 um, to air
- 流属性/单位：Mass / kg
- 数量规则：根据阶段燃料用量和设备特定记录测量或计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 转入整理的绵羊净胴体
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_slaughter_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

### 过程：胴体整理与分割（`carcass_dressing_and_cutting`）

#### 输入

##### 产品流

###### 绵羊净胴体投入（`dressed_sheep_carcass_input`）

实测净胴体作为一个内部产品流进入整理与分割。

- 选定流：Dressed sheep carcass
- 流属性/单位：Mass / kg
- 数量规则：进入整理与分割的净胴体实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 转入冻结的合格未冷冻绵羊肉
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_dressing_cutting_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 胴体整理与分割电网电力（`dressing_electricity`）

胴体整理与分割使用的电网电力与所有热能载体分别记录。

- 选定流：Electricity, grid
- 流属性/单位：Energy / kWh
- 数量规则：计量或按分表分配至胴体整理与分割的电网电力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 转入冻结的合格未冷冻绵羊肉
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_dressing_cutting_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 胴体整理与分割外购蒸汽（`dressing_purchased_steam`）

胴体整理与分割使用的外购蒸汽与热水和燃料分别记录。

- 选定流：Purchased steam
- 流属性/单位：Mass / kg
- 数量规则：使用时分配至胴体整理与分割的外购蒸汽实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 转入冻结的合格未冷冻绵羊肉
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_dressing_cutting_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 胴体整理与分割外购热水（`dressing_purchased_hot_water`）

胴体整理与分割使用的外购热水与蒸汽分别记录。

- 选定流：Purchased hot water
- 流属性/单位：Mass / kg
- 数量规则：使用时分配至胴体整理与分割的外购热水实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 转入冻结的合格未冷冻绵羊肉
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_dressing_cutting_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 胴体整理与分割天然气（`dressing_natural_gas`）

胴体整理与分割设备使用的天然气与柴油和 LPG 分别记录。

- 选定流：Natural gas
- 流属性/单位：Energy / MJ
- 数量规则：采用已记录热值约定，计量分配至胴体整理与分割的天然气能量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 转入冻结的合格未冷冻绵羊肉
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_dressing_cutting_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 胴体整理与分割柴油（`dressing_diesel`）

胴体整理与分割直接运行设备使用的柴油单独记录。

- 选定流：Diesel fuel
- 流属性/单位：Mass / kg
- 数量规则：使用时计量或库存核对并分配至胴体整理与分割的柴油质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 转入冻结的合格未冷冻绵羊肉
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_dressing_cutting_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 胴体整理与分割 LPG（`dressing_lpg`）

胴体整理与分割设备使用的 LPG 与天然气和柴油分别记录。

- 选定流：Liquefied petroleum gas
- 流属性/单位：Mass / kg
- 数量规则：使用时库存核对并分配至胴体整理与分割的 LPG 质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 转入冻结的合格未冷冻绵羊肉
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_dressing_cutting_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 胴体整理与分割工艺水（`dressing_process_water`）

胴体整理与分割使用的新鲜工艺水与内部回用水分别计量。

- 选定流：Process water
- 流属性/单位：Volume / m3
- 数量规则：分配至胴体整理与分割的新鲜工艺水实测取水量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 转入冻结的合格未冷冻绵羊肉
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_dressing_cutting_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 未冷冻绵羊肉分割品（`unfrozen_sheep_meat_cuts_output`）

冻结前的合格绵羊肉按所声明胴体或分割形态计量。

- 选定流：Unfrozen sheep meat cuts
- 流属性/单位：Mass / kg
- 数量规则：转入预冷与冻结的净合格绵羊肉实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 转入冻结的合格未冷冻绵羊肉
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_dressing_cutting_records`
- 来源：`un-cpc-3-0`; `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 回收绵羊脂肪共产品（`recovered_sheep_fat_coproduct`）

具有有记录产品状态的分离绵羊脂肪作为独立共产品计量。

- 选定流：Recovered sheep fat
- 流属性/单位：Mass / kg
- 数量规则：转入产品去向的回收绵羊脂肪实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 转入冻结的合格未冷冻绵羊肉
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_dressing_cutting_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 回收绵羊骨共产品（`sheep_bones_coproduct`）

具有有记录产品状态的绵羊骨与废弃骨废物分别计量。

- 选定流：Recovered sheep bones
- 流属性/单位：Mass / kg
- 数量规则：转入产品去向的回收绵羊骨实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 转入冻结的合格未冷冻绵羊肉
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_dressing_cutting_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

##### 废物流

###### 废弃绵羊脂肪废物（`discarded_sheep_fat_waste`）

无产品状态的绵羊脂肪作为废物记录，不与回收脂肪合并。

- 选定流：Discarded sheep fat
- 流属性/单位：Mass / kg
- 数量规则：送往有记录废物去向的废弃绵羊脂肪实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 转入冻结的合格未冷冻绵羊肉
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_dressing_cutting_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 废弃绵羊骨废物（`sheep_bone_waste`）

无产品状态的绵羊骨与回收骨分别记录。

- 选定流：Discarded sheep bones
- 流属性/单位：Mass / kg
- 数量规则：送往有记录废物去向的废弃绵羊骨实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 转入冻结的合格未冷冻绵羊肉
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_dressing_cutting_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 不合格未冷冻绵羊肉废物（`offspec_unfrozen_sheep_meat_waste`）

冻结前拒收的未冷冻绵羊肉作为具体产品损失称量。

- 选定流：Off-spec unfrozen sheep meat
- 流属性/单位：Mass / kg
- 数量规则：送往有记录去向的不合格未冷冻绵羊肉实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 转入冻结的合格未冷冻绵羊肉
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_dressing_cutting_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 绵羊肉修整残渣（`cutting_tissue_residue_waste`）

整理和分割产生的非产品组织残渣与脂肪和骨分别计量。

- 选定流：Sheep meat trimming residue
- 流属性/单位：Mass / kg
- 数量规则：送往有记录废物去向的修整残渣实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 转入冻结的合格未冷冻绵羊肉
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_dressing_cutting_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 胴体分割废水（`cutting_wastewater`）

整理和分割废水与高有机负荷屠宰废水分别记录。

- 选定流：Carcass cutting wastewater
- 流属性/单位：Volume / m3
- 数量规则：转入处理或场外去向的整理分割废水实测体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 转入冻结的合格未冷冻绵羊肉
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_dressing_cutting_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

##### 基本流

###### 胴体整理与分割化石二氧化碳排放（`dressing_carbon_dioxide_air`）

胴体整理与分割所用燃料产生的化石二氧化碳作为单独空气交换报告。

- 选定流：Carbon dioxide, fossil, to air
- 流属性/单位：Mass / kg
- 数量规则：根据胴体整理与分割各燃料实测量及其有记录的碳含量或排放因子计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 转入冻结的合格未冷冻绵羊肉
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_dressing_cutting_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 胴体整理与分割氮氧化物排放（`dressing_nitrogen_oxides_air`）

胴体整理与分割燃料燃烧产生的氮氧化物与二氧化硫分别报告。

- 选定流：Nitrogen oxides to air
- 流属性/单位：Mass / kg NO2-equivalent
- 数量规则：根据阶段燃料用量、设备记录和有记录 NOx 因子测量或计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 转入冻结的合格未冷冻绵羊肉
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_dressing_cutting_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 胴体整理与分割二氧化硫排放（`dressing_sulfur_dioxide_air`）

胴体整理与分割燃料燃烧产生的二氧化硫与氮氧化物分别报告。

- 选定流：Sulfur dioxide to air
- 流属性/单位：Mass / kg
- 数量规则：根据阶段燃料用量、硫含量和设备记录测量或计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 转入冻结的合格未冷冻绵羊肉
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_dressing_cutting_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 胴体整理与分割细颗粒物排放（`dressing_pm25_air`）

胴体整理与分割燃料燃烧产生的细颗粒物作为粒径特定空气交换报告。

- 选定流：Particulate matter, <2.5 um, to air
- 流属性/单位：Mass / kg
- 数量规则：根据阶段燃料用量和设备特定记录测量或计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 转入冻结的合格未冷冻绵羊肉
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_dressing_cutting_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

### 过程：预冷与冻结（`prechilling_and_freezing`）

#### 输入

##### 产品流

###### 未冷冻绵羊肉投入（`unfrozen_sheep_meat_input`）

合格绵羊肉以所声明胴体或分割形态进入预冷与冻结。

- 选定流：Unfrozen sheep meat cuts
- 流属性/单位：Mass / kg
- 数量规则：进入预冷与冻结的合格绵羊肉实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 转入包装的合格冷冻绵羊肉
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_freezing_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 预冷与冻结电网电力（`freezing_electricity`）

预冷与冻结使用的电网电力与所有热能载体分别记录。

- 选定流：Electricity, grid
- 流属性/单位：Energy / kWh
- 数量规则：计量或按分表分配至预冷与冻结的电网电力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 转入包装的合格冷冻绵羊肉
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_freezing_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 预冷与冻结外购蒸汽（`freezing_purchased_steam`）

预冷与冻结使用的外购蒸汽与热水和燃料分别记录。

- 选定流：Purchased steam
- 流属性/单位：Mass / kg
- 数量规则：使用时分配至预冷与冻结的外购蒸汽实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 转入包装的合格冷冻绵羊肉
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_freezing_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 预冷与冻结外购热水（`freezing_purchased_hot_water`）

预冷与冻结使用的外购热水与蒸汽分别记录。

- 选定流：Purchased hot water
- 流属性/单位：Mass / kg
- 数量规则：使用时分配至预冷与冻结的外购热水实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 转入包装的合格冷冻绵羊肉
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_freezing_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 预冷与冻结天然气（`freezing_natural_gas`）

预冷与冻结设备使用的天然气与柴油和 LPG 分别记录。

- 选定流：Natural gas
- 流属性/单位：Energy / MJ
- 数量规则：采用已记录热值约定，计量分配至预冷与冻结的天然气能量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 转入包装的合格冷冻绵羊肉
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_freezing_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 预冷与冻结柴油（`freezing_diesel`）

预冷与冻结直接运行设备使用的柴油单独记录。

- 选定流：Diesel fuel
- 流属性/单位：Mass / kg
- 数量规则：使用时计量或库存核对并分配至预冷与冻结的柴油质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 转入包装的合格冷冻绵羊肉
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_freezing_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 预冷与冻结 LPG（`freezing_lpg`）

预冷与冻结设备使用的 LPG 与天然气和柴油分别记录。

- 选定流：Liquefied petroleum gas
- 流属性/单位：Mass / kg
- 数量规则：使用时库存核对并分配至预冷与冻结的 LPG 质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 转入包装的合格冷冻绵羊肉
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_freezing_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 预冷与冻结工艺水（`freezing_process_water`）

预冷与冻结使用的新鲜工艺水与内部回用水分别计量。

- 选定流：Process water
- 流属性/单位：Volume / m3
- 数量规则：分配至预冷与冻结的新鲜工艺水实测取水量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 转入包装的合格冷冻绵羊肉
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_freezing_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 预冷与冻结 R-717 制冷剂补充（`freezing_r717_makeup`）

预冷与冻结的氨制冷剂补充与 R-134a 分别平衡。

- 选定流：Ammonia refrigerant (R-717)
- 流属性/单位：Mass / kg
- 数量规则：根据库存和维修记录计算并分配至预冷与冻结的 R-717 净补充量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 转入包装的合格冷冻绵羊肉
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_freezing_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 预冷与冻结 R-134a 制冷剂补充（`freezing_r134a_makeup`）

预冷与冻结的 R-134a 制冷剂补充与 R-717 分别平衡。

- 选定流：1,1,1,2-Tetrafluoroethane refrigerant (R-134a)
- 流属性/单位：Mass / kg
- 数量规则：根据库存和维修记录计算并分配至预冷与冻结的 R-134a 净补充量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 转入包装的合格冷冻绵羊肉
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_freezing_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 冷冻绵羊肉中间产品（`frozen_sheep_meat_intermediate_output`）

转入包装的冷冻绵羊肉在所声明冻结操作后计量。

- 选定流：Frozen sheep meat intermediate
- 流属性/单位：Mass / kg
- 数量规则：转入包装的净合格冷冻绵羊肉实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 转入包装的合格冷冻绵羊肉
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_freezing_records`
- 来源：`un-cpc-3-0`; `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

##### 废物流

###### 冻结系统除霜废水（`freezing_defrost_wastewater`）

冻结阶段除霜废水与清洗和屠宰废水分别记录。

- 选定流：Freezing-system defrost wastewater
- 流属性/单位：Volume / m3
- 数量规则：转入处理或场外去向的除霜废水实测体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 转入包装的合格冷冻绵羊肉
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_freezing_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 不合格冷冻绵羊肉废物（`offspec_frozen_meat_waste`）

包装前拒收的冷冻绵羊肉作为具体产品损失称量。

- 选定流：Off-spec frozen sheep meat
- 流属性/单位：Mass / kg
- 数量规则：送往有记录去向的不合格冷冻绵羊肉实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 转入包装的合格冷冻绵羊肉
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_freezing_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

##### 基本流

###### 预冷与冻结 R-717 排放（`freezing_r717_air`）

预冷与冻结制冷系统未回收的 R-717 损失作为氨向空气排放报告。

- 选定流：Ammonia to air
- 流属性/单位：Mass / kg
- 数量规则：根据制冷剂质量平衡计算并分配至预冷与冻结的未回收 R-717 损失
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 转入包装的合格冷冻绵羊肉
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_freezing_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 预冷与冻结 R-134a 排放（`freezing_r134a_air`）

预冷与冻结制冷系统未回收的 R-134a 损失作为单独空气交换报告。

- 选定流：1,1,1,2-Tetrafluoroethane to air
- 流属性/单位：Mass / kg
- 数量规则：根据制冷剂质量平衡计算并分配至预冷与冻结的未回收 R-134a 损失
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 转入包装的合格冷冻绵羊肉
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_freezing_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 预冷与冻结化石二氧化碳排放（`freezing_carbon_dioxide_air`）

预冷与冻结所用燃料产生的化石二氧化碳作为单独空气交换报告。

- 选定流：Carbon dioxide, fossil, to air
- 流属性/单位：Mass / kg
- 数量规则：根据预冷与冻结各燃料实测量及其有记录的碳含量或排放因子计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 转入包装的合格冷冻绵羊肉
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_freezing_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 预冷与冻结氮氧化物排放（`freezing_nitrogen_oxides_air`）

预冷与冻结燃料燃烧产生的氮氧化物与二氧化硫分别报告。

- 选定流：Nitrogen oxides to air
- 流属性/单位：Mass / kg NO2-equivalent
- 数量规则：根据阶段燃料用量、设备记录和有记录 NOx 因子测量或计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 转入包装的合格冷冻绵羊肉
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_freezing_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 预冷与冻结二氧化硫排放（`freezing_sulfur_dioxide_air`）

预冷与冻结燃料燃烧产生的二氧化硫与氮氧化物分别报告。

- 选定流：Sulfur dioxide to air
- 流属性/单位：Mass / kg
- 数量规则：根据阶段燃料用量、硫含量和设备记录测量或计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 转入包装的合格冷冻绵羊肉
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_freezing_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 预冷与冻结细颗粒物排放（`freezing_pm25_air`）

预冷与冻结燃料燃烧产生的细颗粒物作为粒径特定空气交换报告。

- 选定流：Particulate matter, <2.5 um, to air
- 流属性/单位：Mass / kg
- 数量规则：根据阶段燃料用量和设备特定记录测量或计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 转入包装的合格冷冻绵羊肉
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_freezing_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

### 过程：包装、冻藏与放行（`packaging_frozen_storage_and_release`）

#### 输入

##### 产品流

###### 冷冻绵羊肉中间产品投入（`frozen_sheep_meat_intermediate_input`）

合格冷冻绵羊肉作为一个内部产品流进入包装与冻藏。

- 选定流：Frozen sheep meat intermediate
- 流属性/单位：Mass / kg
- 数量规则：进入包装的冷冻绵羊肉实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 放行的净合格冷冻绵羊肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_storage_release_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 包装与冻藏电网电力（`packaging_storage_electricity`）

包装与冻藏使用的电网电力与所有热能载体分别记录。

- 选定流：Electricity, grid
- 流属性/单位：Energy / kWh
- 数量规则：计量或按分表分配至包装与冻藏的电网电力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 放行的净合格冷冻绵羊肉
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_storage_release_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 包装与冻藏外购蒸汽（`packaging_storage_purchased_steam`）

包装与冻藏使用的外购蒸汽与热水和燃料分别记录。

- 选定流：Purchased steam
- 流属性/单位：Mass / kg
- 数量规则：使用时分配至包装与冻藏的外购蒸汽实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 放行的净合格冷冻绵羊肉
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_storage_release_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 包装与冻藏外购热水（`packaging_storage_purchased_hot_water`）

包装与冻藏使用的外购热水与蒸汽分别记录。

- 选定流：Purchased hot water
- 流属性/单位：Mass / kg
- 数量规则：使用时分配至包装与冻藏的外购热水实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 放行的净合格冷冻绵羊肉
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_storage_release_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 包装与冻藏天然气（`packaging_storage_natural_gas`）

包装与冻藏设备使用的天然气与柴油和 LPG 分别记录。

- 选定流：Natural gas
- 流属性/单位：Energy / MJ
- 数量规则：采用已记录热值约定，计量分配至包装与冻藏的天然气能量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 放行的净合格冷冻绵羊肉
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_storage_release_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 包装与冻藏柴油（`packaging_storage_diesel`）

包装与冻藏直接运行设备使用的柴油单独记录。

- 选定流：Diesel fuel
- 流属性/单位：Mass / kg
- 数量规则：使用时计量或库存核对并分配至包装与冻藏的柴油质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 放行的净合格冷冻绵羊肉
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_storage_release_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 包装与冻藏 LPG（`packaging_storage_lpg`）

包装与冻藏设备使用的 LPG 与天然气和柴油分别记录。

- 选定流：Liquefied petroleum gas
- 流属性/单位：Mass / kg
- 数量规则：使用时库存核对并分配至包装与冻藏的 LPG 质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 放行的净合格冷冻绵羊肉
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_storage_release_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 包装与冻藏工艺水（`packaging_storage_process_water`）

包装与冻藏使用的新鲜工艺水与内部回用水分别计量。

- 选定流：Process water
- 流属性/单位：Volume / m3
- 数量规则：分配至包装与冻藏的新鲜工艺水实测取水量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 放行的净合格冷冻绵羊肉
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_storage_release_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 包装与冻藏 R-717 制冷剂补充（`packaging_storage_r717_makeup`）

包装与冻藏的氨制冷剂补充与 R-134a 分别平衡。

- 选定流：Ammonia refrigerant (R-717)
- 流属性/单位：Mass / kg
- 数量规则：根据库存和维修记录计算并分配至包装与冻藏的 R-717 净补充量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 放行的净合格冷冻绵羊肉
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_storage_release_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 包装与冻藏 R-134a 制冷剂补充（`packaging_storage_r134a_makeup`）

包装与冻藏的 R-134a 制冷剂补充与 R-717 分别平衡。

- 选定流：1,1,1,2-Tetrafluoroethane refrigerant (R-134a)
- 流属性/单位：Mass / kg
- 数量规则：根据库存和维修记录计算并分配至包装与冻藏的 R-134a 净补充量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 放行的净合格冷冻绵羊肉
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_storage_release_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 低密度聚乙烯包装膜（`packaging_ldpe_packaging_film`）

所声明包装使用的低密度聚乙烯膜单独记录。

- 选定流：Low-density polyethylene packaging film
- 流属性/单位：Mass / kg
- 数量规则：分配至放行产品的 low-density polyethylene packaging film 实测净消耗量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 放行的净合格冷冻绵羊肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_storage_release_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 聚酰胺/聚乙烯真空袋（`packaging_pa_pe_vacuum_bag`）

多层 PA/PE 真空袋作为一个特定包装产品记录，不与 LDPE 膜合并。

- 选定流：Polyamide/polyethylene multilayer vacuum bag
- 流属性/单位：Mass / kg
- 数量规则：分配至放行产品的 polyamide/polyethylene multilayer vacuum bag 实测净消耗量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 放行的净合格冷冻绵羊肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_storage_release_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 瓦楞纸板箱（`packaging_corrugated_carton`）

冷冻肉运输使用的瓦楞纸板箱与聚合物包装分别记录。

- 选定流：Corrugated paperboard carton
- 流属性/单位：Mass / kg
- 数量规则：分配至放行产品的 corrugated paperboard carton 实测净消耗量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 放行的净合格冷冻绵羊肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_storage_release_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 高密度聚乙烯可重复使用周转箱（`packaging_hdpe_reusable_crate`）

可重复使用 HDPE 周转箱的净消耗量采用有记录的退回和重复使用周期。

- 选定流：High-density polyethylene reusable crate
- 流属性/单位：Mass / kg
- 数量规则：分配至放行产品的 high-density polyethylene reusable crate 实测净消耗量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 放行的净合格冷冻绵羊肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_storage_release_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 木托盘（`packaging_wooden_pallet`）

木托盘净消耗量与纸箱和聚合物包装分别记录。

- 选定流：Wooden pallet
- 流属性/单位：Mass / kg
- 数量规则：分配至放行产品的 wooden pallet 实测净消耗量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 放行的净合格冷冻绵羊肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_storage_release_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 参考冷冻绵羊肉输出（`reference_product_output`）

本卡是定量参考：设施门口放行的净合格冷冻绵羊肉，不含包装质量。

- 选定流：Meat of sheep, frozen `7a898ac1-b845-4943-bae3-94e7c24ae06d`
- 流属性/单位：Mass / kg
- 数量规则：恰好 1 kg 放行的净合格冷冻绵羊肉；不含包装质量
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每个所声明参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）
- 采集协议：`cp_packaging_storage_release_records`
- 来源：`un-cpc-3-0`

##### 废物流

###### 不合格已包装冷冻绵羊肉废物（`offspec_packaged_frozen_sheep_meat_waste`）

放行前拒收的已包装冷冻绵羊肉作为具体产品损失称量。

- 选定流：Off-spec packaged frozen sheep meat
- 流属性/单位：Mass / kg
- 数量规则：送往有记录去向的不合格已包装冷冻绵羊肉实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 放行的净合格冷冻绵羊肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_storage_release_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 废弃低密度聚乙烯包装膜（`waste_ldpe_packaging_film`）

废弃 low-density polyethylene packaging film 作为独立包装废物流记录。

- 选定流：Waste low-density polyethylene packaging film
- 流属性/单位：Mass / kg
- 数量规则：送往有记录去向的废弃 low-density polyethylene packaging film 实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 放行的净合格冷冻绵羊肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_storage_release_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 废弃聚酰胺/聚乙烯真空袋（`waste_pa_pe_vacuum_bag`）

废弃 polyamide/polyethylene multilayer vacuum bag 作为独立包装废物流记录。

- 选定流：Waste polyamide/polyethylene multilayer vacuum bag
- 流属性/单位：Mass / kg
- 数量规则：送往有记录去向的废弃 polyamide/polyethylene multilayer vacuum bag 实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 放行的净合格冷冻绵羊肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_storage_release_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 废弃瓦楞纸板箱（`waste_corrugated_carton`）

废弃 corrugated paperboard carton 作为独立包装废物流记录。

- 选定流：Waste corrugated paperboard carton
- 流属性/单位：Mass / kg
- 数量规则：送往有记录去向的废弃 corrugated paperboard carton 实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 放行的净合格冷冻绵羊肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_storage_release_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 废弃高密度聚乙烯可重复使用周转箱（`waste_hdpe_reusable_crate`）

废弃 high-density polyethylene reusable crate 作为独立包装废物流记录。

- 选定流：Waste high-density polyethylene reusable crate
- 流属性/单位：Mass / kg
- 数量规则：送往有记录去向的废弃 high-density polyethylene reusable crate 实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 放行的净合格冷冻绵羊肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_storage_release_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 废弃木托盘（`waste_wooden_pallet`）

废弃 wooden pallet 作为独立包装废物流记录。

- 选定流：Waste wooden pallet
- 流属性/单位：Mass / kg
- 数量规则：送往有记录去向的废弃 wooden pallet 实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 放行的净合格冷冻绵羊肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_storage_release_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 包装区冲洗废水（`packaging_area_wash_wastewater`）

包装区冲洗废水与冷库除霜废水分别记录。

- 选定流：Packaging-area wash wastewater
- 流属性/单位：Volume / m3
- 数量规则：转入处理或场外去向的包装区冲洗废水实测体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 放行的净合格冷冻绵羊肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_storage_release_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 冷库除霜废水（`frozen_store_defrost_wastewater`）

场内冻藏产生的除霜废水与包装区冲洗废水分别记录。

- 选定流：Frozen-store defrost wastewater
- 流属性/单位：Volume / m3
- 数量规则：转入处理或场外去向的冷库除霜废水实测体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 放行的净合格冷冻绵羊肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_storage_release_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

##### 基本流

###### 包装与冻藏 R-717 排放（`packaging_storage_r717_air`）

包装与冻藏制冷系统未回收的 R-717 损失作为氨向空气排放报告。

- 选定流：Ammonia to air
- 流属性/单位：Mass / kg
- 数量规则：根据制冷剂质量平衡计算并分配至包装与冻藏的未回收 R-717 损失
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 放行的净合格冷冻绵羊肉
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_storage_release_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 包装与冻藏 R-134a 排放（`packaging_storage_r134a_air`）

包装与冻藏制冷系统未回收的 R-134a 损失作为单独空气交换报告。

- 选定流：1,1,1,2-Tetrafluoroethane to air
- 流属性/单位：Mass / kg
- 数量规则：根据制冷剂质量平衡计算并分配至包装与冻藏的未回收 R-134a 损失
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 放行的净合格冷冻绵羊肉
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_storage_release_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 包装与冻藏化石二氧化碳排放（`packaging_storage_carbon_dioxide_air`）

包装与冻藏所用燃料产生的化石二氧化碳作为单独空气交换报告。

- 选定流：Carbon dioxide, fossil, to air
- 流属性/单位：Mass / kg
- 数量规则：根据包装与冻藏各燃料实测量及其有记录的碳含量或排放因子计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 放行的净合格冷冻绵羊肉
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_storage_release_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 包装与冻藏氮氧化物排放（`packaging_storage_nitrogen_oxides_air`）

包装与冻藏燃料燃烧产生的氮氧化物与二氧化硫分别报告。

- 选定流：Nitrogen oxides to air
- 流属性/单位：Mass / kg NO2-equivalent
- 数量规则：根据阶段燃料用量、设备记录和有记录 NOx 因子测量或计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 放行的净合格冷冻绵羊肉
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_storage_release_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 包装与冻藏二氧化硫排放（`packaging_storage_sulfur_dioxide_air`）

包装与冻藏燃料燃烧产生的二氧化硫与氮氧化物分别报告。

- 选定流：Sulfur dioxide to air
- 流属性/单位：Mass / kg
- 数量规则：根据阶段燃料用量、硫含量和设备记录测量或计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 放行的净合格冷冻绵羊肉
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_storage_release_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 包装与冻藏细颗粒物排放（`packaging_storage_pm25_air`）

包装与冻藏燃料燃烧产生的细颗粒物作为粒径特定空气交换报告。

- 选定流：Particulate matter, <2.5 um, to air
- 流属性/单位：Mass / kg
- 数量规则：根据阶段燃料用量和设备特定记录测量或计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 放行的净合格冷冻绵羊肉
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_storage_release_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

### 过程：清洗与消毒（`cleaning_and_disinfection`）

#### 输入

##### 产品流

###### 清洗与消毒电网电力（`cleaning_electricity`）

清洗与消毒使用的电网电力与所有热能载体分别记录。

- 选定流：Electricity, grid
- 流属性/单位：Energy / kWh
- 数量规则：计量或按分表分配至清洗与消毒的电网电力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 放行的净合格冷冻绵羊肉
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_disinfection_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 清洗与消毒外购蒸汽（`cleaning_purchased_steam`）

清洗与消毒使用的外购蒸汽与热水和燃料分别记录。

- 选定流：Purchased steam
- 流属性/单位：Mass / kg
- 数量规则：使用时分配至清洗与消毒的外购蒸汽实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 放行的净合格冷冻绵羊肉
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_disinfection_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 清洗与消毒外购热水（`cleaning_purchased_hot_water`）

清洗与消毒使用的外购热水与蒸汽分别记录。

- 选定流：Purchased hot water
- 流属性/单位：Mass / kg
- 数量规则：使用时分配至清洗与消毒的外购热水实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 放行的净合格冷冻绵羊肉
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_disinfection_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 清洗与消毒天然气（`cleaning_natural_gas`）

清洗与消毒设备使用的天然气与柴油和 LPG 分别记录。

- 选定流：Natural gas
- 流属性/单位：Energy / MJ
- 数量规则：采用已记录热值约定，计量分配至清洗与消毒的天然气能量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 放行的净合格冷冻绵羊肉
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_disinfection_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 清洗与消毒柴油（`cleaning_diesel`）

清洗与消毒直接运行设备使用的柴油单独记录。

- 选定流：Diesel fuel
- 流属性/单位：Mass / kg
- 数量规则：使用时计量或库存核对并分配至清洗与消毒的柴油质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 放行的净合格冷冻绵羊肉
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_disinfection_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 清洗与消毒 LPG（`cleaning_lpg`）

清洗与消毒设备使用的 LPG 与天然气和柴油分别记录。

- 选定流：Liquefied petroleum gas
- 流属性/单位：Mass / kg
- 数量规则：使用时库存核对并分配至清洗与消毒的 LPG 质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 放行的净合格冷冻绵羊肉
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_disinfection_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 清洗与消毒工艺水（`cleaning_process_water`）

清洗与消毒使用的新鲜工艺水与内部回用水分别计量。

- 选定流：Process water
- 流属性/单位：Volume / m3
- 数量规则：分配至清洗与消毒的新鲜工艺水实测取水量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 放行的净合格冷冻绵羊肉
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_disinfection_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 氢氧化钠清洗液（`cleaning_sodium_hydroxide`）

氢氧化钠清洗液与其他每种清洗剂和消毒剂分别记录。

- 选定流：Sodium hydroxide cleaning solution
- 流属性/单位：Mass / kg formulated product
- 数量规则：领用的 sodium hydroxide cleaning solution 实测质量减去有记录的未用退回量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 放行的净合格冷冻绵羊肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_disinfection_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 硝酸清洗液（`cleaning_nitric_acid`）

硝酸清洗液与其他每种清洗剂和消毒剂分别记录。

- 选定流：Nitric acid cleaning solution
- 流属性/单位：Mass / kg formulated product
- 数量规则：领用的 nitric acid cleaning solution 实测质量减去有记录的未用退回量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 放行的净合格冷冻绵羊肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_disinfection_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 次氯酸钠消毒剂（`cleaning_sodium_hypochlorite`）

次氯酸钠消毒剂与其他每种清洗剂和消毒剂分别记录。

- 选定流：Sodium hypochlorite disinfectant
- 流属性/单位：Mass / kg formulated product
- 数量规则：领用的 sodium hypochlorite disinfectant 实测质量减去有记录的未用退回量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 放行的净合格冷冻绵羊肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_disinfection_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 过氧乙酸消毒剂（`cleaning_peracetic_acid`）

过氧乙酸消毒剂与其他每种清洗剂和消毒剂分别记录。

- 选定流：Peracetic acid disinfectant
- 流属性/单位：Mass / kg formulated product
- 数量规则：领用的 peracetic acid disinfectant 实测质量减去有记录的未用退回量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 放行的净合格冷冻绵羊肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_disinfection_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 卫生清洗废水（`cleaning_disinfection_wastewater`）

清洗与消毒产生的废水与生产阶段废水分别计量。

- 选定流：Sanitation wastewater
- 流属性/单位：Volume / m3
- 数量规则：转入处理或场外去向的卫生清洗废水实测体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 放行的净合格冷冻绵羊肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_disinfection_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 清洗固体残渣（`cleaning_solid_residue_waste`）

清洗期间收集的固体残渣与废水处理污泥分别称量。

- 选定流：Cleaning solid residue
- 流属性/单位：Mass / kg
- 数量规则：送往有记录废物去向的清洗残渣实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 放行的净合格冷冻绵羊肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_disinfection_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

##### 基本流

###### 清洗与消毒化石二氧化碳排放（`cleaning_carbon_dioxide_air`）

清洗与消毒所用燃料产生的化石二氧化碳作为单独空气交换报告。

- 选定流：Carbon dioxide, fossil, to air
- 流属性/单位：Mass / kg
- 数量规则：根据清洗与消毒各燃料实测量及其有记录的碳含量或排放因子计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 放行的净合格冷冻绵羊肉
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_cleaning_disinfection_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 清洗与消毒氮氧化物排放（`cleaning_nitrogen_oxides_air`）

清洗与消毒燃料燃烧产生的氮氧化物与二氧化硫分别报告。

- 选定流：Nitrogen oxides to air
- 流属性/单位：Mass / kg NO2-equivalent
- 数量规则：根据阶段燃料用量、设备记录和有记录 NOx 因子测量或计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 放行的净合格冷冻绵羊肉
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_cleaning_disinfection_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 清洗与消毒二氧化硫排放（`cleaning_sulfur_dioxide_air`）

清洗与消毒燃料燃烧产生的二氧化硫与氮氧化物分别报告。

- 选定流：Sulfur dioxide to air
- 流属性/单位：Mass / kg
- 数量规则：根据阶段燃料用量、硫含量和设备记录测量或计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 放行的净合格冷冻绵羊肉
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_cleaning_disinfection_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 清洗与消毒细颗粒物排放（`cleaning_pm25_air`）

清洗与消毒燃料燃烧产生的细颗粒物作为粒径特定空气交换报告。

- 选定流：Particulate matter, <2.5 um, to air
- 流属性/单位：Mass / kg
- 数量规则：根据阶段燃料用量和设备特定记录测量或计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 放行的净合格冷冻绵羊肉
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_cleaning_disinfection_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

### 过程：场内废水处理（`onsite_wastewater_treatment`）

#### 输入

##### 产品流

###### 场内废水处理电网电力（`wastewater_treatment_electricity`）

场内废水处理使用的电网电力与所有热能载体分别记录。

- 选定流：Electricity, grid
- 流属性/单位：Energy / kWh
- 数量规则：计量或按分表分配至场内废水处理的电网电力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 m3 场内处理废水
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_onsite_wastewater_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 场内废水处理外购蒸汽（`wastewater_treatment_purchased_steam`）

场内废水处理使用的外购蒸汽与热水和燃料分别记录。

- 选定流：Purchased steam
- 流属性/单位：Mass / kg
- 数量规则：使用时分配至场内废水处理的外购蒸汽实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 m3 场内处理废水
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_onsite_wastewater_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 场内废水处理外购热水（`wastewater_treatment_purchased_hot_water`）

场内废水处理使用的外购热水与蒸汽分别记录。

- 选定流：Purchased hot water
- 流属性/单位：Mass / kg
- 数量规则：使用时分配至场内废水处理的外购热水实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 m3 场内处理废水
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_onsite_wastewater_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 场内废水处理天然气（`wastewater_treatment_natural_gas`）

场内废水处理设备使用的天然气与柴油和 LPG 分别记录。

- 选定流：Natural gas
- 流属性/单位：Energy / MJ
- 数量规则：采用已记录热值约定，计量分配至场内废水处理的天然气能量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 m3 场内处理废水
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_onsite_wastewater_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 场内废水处理柴油（`wastewater_treatment_diesel`）

场内废水处理直接运行设备使用的柴油单独记录。

- 选定流：Diesel fuel
- 流属性/单位：Mass / kg
- 数量规则：使用时计量或库存核对并分配至场内废水处理的柴油质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 m3 场内处理废水
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_onsite_wastewater_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 场内废水处理 LPG（`wastewater_treatment_lpg`）

场内废水处理设备使用的 LPG 与天然气和柴油分别记录。

- 选定流：Liquefied petroleum gas
- 流属性/单位：Mass / kg
- 数量规则：使用时库存核对并分配至场内废水处理的 LPG 质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 m3 场内处理废水
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_onsite_wastewater_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 场内废水处理工艺水（`wastewater_treatment_process_water`）

场内废水处理使用的新鲜工艺水与内部回用水分别计量。

- 选定流：Process water
- 流属性/单位：Volume / m3
- 数量规则：分配至场内废水处理的新鲜工艺水实测取水量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 m3 场内处理废水
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_onsite_wastewater_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 三氯化铁处理液（`wastewater_treatment_ferric_chloride`）

场内处理使用的三氯化铁溶液与聚合物絮凝剂分别记录。

- 选定流：Ferric chloride solution
- 流属性/单位：Mass / kg formulated product
- 数量规则：场内处理领用的三氯化铁溶液实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 m3 场内处理废水
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_onsite_wastewater_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 聚丙烯酰胺絮凝剂（`wastewater_treatment_polyacrylamide`）

场内处理使用的聚丙烯酰胺絮凝剂作为一个特定化学品投入记录。

- 选定流：Polyacrylamide flocculant
- 流属性/单位：Mass / kg formulated product
- 数量规则：场内处理领用的聚丙烯酰胺絮凝剂实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 m3 场内处理废水
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_onsite_wastewater_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

##### 废物流

###### 普通屠宰场废水投入（`ordinary_wastewater_input`）

进入场内处理的普通废水与高有机负荷废水分别计量。

- 选定流：Ordinary slaughterhouse wastewater
- 流属性/单位：Volume / m3
- 数量规则：进入场内处理的普通废水实测体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 m3 场内处理废水
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_onsite_wastewater_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 高有机负荷废水投入（`high_load_wastewater_input`）

进入场内处理的高有机负荷废水与普通废水分别计量。

- 选定流：High-organic-load slaughterhouse wastewater
- 流属性/单位：Volume / m3
- 数量规则：进入场内处理的高有机负荷废水实测体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 m3 场内处理废水
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_onsite_wastewater_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 处理后屠宰场废水（`treated_slaughterhouse_wastewater`）

场内处理设施流出的处理后废水在排放或场外转移前记录。

- 选定流：Treated slaughterhouse wastewater
- 流属性/单位：Volume / m3
- 数量规则：场内处理设施流出的处理后废水实测体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 m3 场内处理废水
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_onsite_wastewater_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 废水处理污泥（`wastewater_treatment_sludge`）

从场内废水处理中清除的污泥作为独立废物流称量。

- 选定流：Slaughterhouse wastewater-treatment sludge
- 流属性/单位：Mass / kg wet sludge
- 数量规则：送往有记录去向的湿污泥实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 m3 场内处理废水
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_onsite_wastewater_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 废水处理筛渣（`wastewater_treatment_screenings`）

场内废水处理清除的筛渣与污泥分别称量。

- 选定流：Slaughterhouse wastewater screenings
- 流属性/单位：Mass / kg
- 数量规则：送往有记录废物去向的筛渣实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 m3 场内处理废水
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_onsite_wastewater_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

##### 基本流

###### 向水体排放化学需氧量（`wastewater_treatment_chemical_oxygen_demand_water`）

场内处理排放的 Chemical oxygen demand to water 作为独立水体交换报告。

- 选定流：Chemical oxygen demand to water
- 流属性/单位：Mass / kg
- 数量规则：实测排放体积乘以匹配的 COD 浓度
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 m3 场内处理废水
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_onsite_wastewater_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 向水体排放总氮（`wastewater_treatment_total_nitrogen_water`）

场内处理排放的 Total nitrogen to water 作为独立水体交换报告。

- 选定流：Total nitrogen to water
- 流属性/单位：Mass / kg
- 数量规则：实测排放体积乘以匹配的总氮浓度
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 m3 场内处理废水
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_onsite_wastewater_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 向水体排放总磷（`wastewater_treatment_total_phosphorus_water`）

场内处理排放的 Total phosphorus to water 作为独立水体交换报告。

- 选定流：Total phosphorus to water
- 流属性/单位：Mass / kg
- 数量规则：实测排放体积乘以匹配的总磷浓度
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 m3 场内处理废水
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_onsite_wastewater_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 向水体排放总悬浮固体（`wastewater_treatment_total_suspended_solids_water`）

场内处理排放的 Total suspended solids to water 作为独立水体交换报告。

- 选定流：Total suspended solids to water
- 流属性/单位：Mass / kg
- 数量规则：实测排放体积乘以匹配的总悬浮固体浓度
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 m3 场内处理废水
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_onsite_wastewater_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 场内废水处理化石二氧化碳排放（`wastewater_treatment_carbon_dioxide_air`）

场内废水处理所用燃料产生的化石二氧化碳作为单独空气交换报告。

- 选定流：Carbon dioxide, fossil, to air
- 流属性/单位：Mass / kg
- 数量规则：根据场内废水处理各燃料实测量及其有记录的碳含量或排放因子计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 m3 场内处理废水
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_onsite_wastewater_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 场内废水处理氮氧化物排放（`wastewater_treatment_nitrogen_oxides_air`）

场内废水处理燃料燃烧产生的氮氧化物与二氧化硫分别报告。

- 选定流：Nitrogen oxides to air
- 流属性/单位：Mass / kg NO2-equivalent
- 数量规则：根据阶段燃料用量、设备记录和有记录 NOx 因子测量或计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 m3 场内处理废水
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_onsite_wastewater_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 场内废水处理二氧化硫排放（`wastewater_treatment_sulfur_dioxide_air`）

场内废水处理燃料燃烧产生的二氧化硫与氮氧化物分别报告。

- 选定流：Sulfur dioxide to air
- 流属性/单位：Mass / kg
- 数量规则：根据阶段燃料用量、硫含量和设备记录测量或计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 m3 场内处理废水
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_onsite_wastewater_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### 场内废水处理细颗粒物排放（`wastewater_treatment_pm25_air`）

场内废水处理燃料燃烧产生的细颗粒物作为粒径特定空气交换报告。

- 选定流：Particulate matter, <2.5 um, to air
- 流属性/单位：Mass / kg
- 数量规则：根据阶段燃料用量和设备特定记录测量或计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 m3 场内处理废水
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_onsite_wastewater_records`
- 来源：`ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `allocation_avoid_by_subdivision` | 多输出屠宰与分割 | 首先使用仪表、批次记录和转移测量细分接收、屠宰、整理、冻结、包装、卫生清洗及废水处理，使可直接归属负荷无需分配。 | `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef` |
| `allocation_product_status` | 血、绵羊皮、可食器官、脂肪和骨 | 只有具有有记录产品状态和有益去向时才作为共产品；否则将其处理负荷保留为废物。 | `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef` |
| `allocation_residual_shared_burdens` | 可销售肉和共产品 | 细分后仅按适用研究方法分配剩余共享负荷；记录物理或经济关系、因子、参考期和受影响过程。 | `eu-recommendation-2021-2279-pef` |
| `allocation_waste_no_credit` | 判废胴体、消化道内容物、拒收物料、废水、污泥和包装废物 | 不得仅因废物流具有偶发收入而赋予避免产品抵扣；披露下游处理及任何另行论证的回收模型。 | `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef` |
| `allocation_consistency_and_sensitivity` | 前景和上游数据集 | 保留所披露上游分配，在参考期采用一致前景方法，并在分配选择实质改变参考产品结果时检验重大替代方案。 | `eu-recommendation-2021-2279-pef` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_receiving_lairage_records` | `live_sheep_receiving_and_lairage` | 活羊；阶段公用工程；验收羊；到厂死亡羊；粪便；待宰区废水；直接空气排放 | 地磅或牲畜秤、接收日志、仪表、账单、库存记录及废物转移记录 | 时间戳；批次；供应商和来源；活重；验收状态；按精确载体记录的仪表或库存数量；水；输出质量或体积；去向；排放测量或因子 | 记录每次接收和每项精确交换，然后将验收活重与屠宰转移量核对 | 按卡片规定采用 kg、kWh、MJ 或 m3 | 每次接收和每个仪表期间 | 至少一个有代表性的连续 12 个月，或已披露较短季节期间的全部生产周期 | 每个纳入接收与待宰区 | 仅在同一场址和期间内聚合相同交换；拒收批次和去向分别保留 | 秤和仪表校准；供应商记录；账单；库存核对；签署废物转移记录 |
| `cp_slaughter_records` | `slaughter_bleeding_skinning_evisceration` | 验收羊；阶段公用工程；胴体；血；绵羊皮；器官；消化道内容物；判废胴体；高负荷废水；直接空气排放 | 屠宰批次记录、校准秤、仪表、收集容器记录、实验室结果和废物转移记录 | 批次；投入活重；胴体质量；精确共产品或废物身份；质量；废水体积；去向；仪表或库存数量；排放基准 | 记录每个屠宰批次，并分别称量或计量每项具名输出和公用工程 | 按卡片规定采用 kg、kWh、MJ 或 m3 | 每个批次或生产班次 | 与参考产品输出相同期间 | 每条纳入屠宰线 | 按批次和报告期核对活重、胴体、共产品、废物和量化损失 | 秤和仪表校准；签署批次记录；检验或放行记录；去向证据；质量平衡工作表 |
| `cp_dressing_cutting_records` | `carcass_dressing_and_cutting` | 胴体；阶段公用工程；肉分割品；脂肪；骨；修整料；不合格肉；废水；直接空气排放 | 分割批次记录、校准秤、仪表、产品放行和废物记录 | 批次；胴体投入；净肉输出；精确共产品或废物身份；质量；废水体积；去向；仪表或库存数量；排放基准 | 记录每个整理或分割批次，并保留带骨或去骨产品身份 | 按卡片规定采用 kg、kWh、MJ 或 m3 | 每个批次或班次 | 与参考产品输出相同期间 | 每条纳入整理和分割线 | 核对投入胴体质量与肉、共产品、废物及库存变化，不合并流身份 | 秤和仪表校准；分割规格；放行记录；废物记录；核对工作表 |
| `cp_freezing_records` | `prechilling_and_freezing` | 未冷冻肉；阶段公用工程；R-717；R-134a；冷冻中间产品；除霜废水；不合格肉；直接排放 | 批次或连续线记录、能源表、制冷剂维修与库存记录、温度日志和秤 | 批次；投入和输出质量；开始和结束时间；所声明冷冻状态证据；电力及每种热能载体；制冷剂库存、采购、补充、回收和期末库存；废水；拒收 | 记录每个冻结批次或生产周期，并核对产品、能源、制冷剂和废水记录 | kg、kWh、MJ、m3 及有记录温度单位 | 每个批次或生产周期；制冷剂按每次维修事件 | 与参考产品输出相同期间 | 每个纳入预冷与冻结系统 | 每种能源载体和制冷剂分别记录；按物质计算制冷剂净损失；仅聚合相同合格产品形态 | 秤、仪表和温度传感器校准；维修证书；库存核对；批次放行 |
| `cp_packaging_storage_release_records` | `packaging_frozen_storage_and_release` | 冷冻肉；每种精确包装产品；阶段公用工程；R-717；R-134a；参考产品；产品损失；每种包装废物；废水；直接排放 | 包装秤、包装领用记录、仓库移动、制冷剂记录、仪表和放行记录 | 批次；冷冻投入；包装净输出；精确包装身份和质量；退回和重复使用；废物质量；储存时长和条件；制冷剂字段；仪表数量；放行状态 | 记录每个批次至放行仓库数量，并从净产品质量中排除包装 | kg、kWh、MJ、m3 及有记录储存条件单位 | 每个批次及连续储存仪表 | 与参考产品输出相同期间 | 每条纳入包装线和场内冷库 | 净产品不含包装；每项产品、包装材料、废物和制冷剂身份分别保留 | 秤和仪表校准；包装规格；仓库核对；放行记录；制冷剂维修证据 |
| `cp_cleaning_disinfection_records` | `cleaning_and_disinfection` | 阶段公用工程；氢氧化钠；硝酸；次氯酸钠；过氧乙酸；卫生清洗废水；固体残渣；直接空气排放 | 卫生清洗计划、化学品领用记录、水和能源仪表、废水记录及残渣转移记录 | 服务过程；时间；精确化学品；配制产品质量和浓度；未用退回；水；能源载体；废水体积；残渣质量；去向；排放基准 | 记录每次卫生清洗事件，共享服务仅按有记录因果驱动分配 | 按卡片规定采用 kg、kWh、MJ 或 m3 | 每次卫生清洗事件和仪表期间 | 与参考产品输出相同期间 | 服务于纳入过程的全部卫生清洗 | 每种化学品和能源载体分别记录；不得重复计算内部回用水 | 化学品证书及领用核对；仪表校准；卫生验证；废水和废物记录 |
| `cp_onsite_wastewater_records` | `onsite_wastewater_treatment` | 普通废水；高负荷废水；每种精确处理化学品；阶段公用工程；处理后废水；污泥；筛渣；空气和水体排放 | 进出水流量计、混合样、实验室报告、化学品领用、能源表、污泥秤及转移记录 | 日期和时间；进水类别和体积；化学品身份和数量；能源载体；出水体积；COD；总氮；总磷；悬浮固体；污泥和筛渣质量；去向；空气排放基准 | 将流量加权样品与排放体积匹配，并保持普通和高负荷进水分开 | kg、kWh、MJ、m3 及浓度单位 | 连续体积计量，并披露采样频率 | 与参考产品输出相同期间 | 每条纳入场内处理线和排放点 | 根据匹配体积和浓度分别计算每项水体污染物；分别核对污泥和筛渣 | 流量计和实验室 QA；采样计划；化学品领用；污泥秤；排放和转移记录 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 全部纳入清单 | 归一化数量 = 报告期交换数量 / 放行的净合格冷冻绵羊肉质量；分母排除包装 | 期间交换数量；放行净参考产品质量 | 每 1 kg 参考产品的数量 | `eu-recommendation-2021-2279-pef` |
| `calc_process_mass_balance` | 每个前景过程 | 期初库存 + 外部和内部投入 = 期末库存 + 产品 + 共产品 + 废物 + 内部转移 + 量化损失；报告残差且不得强制闭合 | 库存、投入、输出、转移和拒收记录 | 过程质量平衡残差 | `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef` |
| `calc_live_to_carcass_reconciliation` | 接收和屠宰 | 将验收活重与净胴体、血、皮、器官、消化道内容物、判废物料和有记录残差核对 | 活重、胴体和分离流记录 | 屠宰质量平衡残差 | `ec-jrc-sa-bref-2024` |
| `calc_stage_utility_allocation` | 共享公用工程 | 优先分配直接计量数量；仅采用有记录因果驱动，如运行时间、吞吐量或实测负荷，分配已核对共享剩余量 | 分表、场址总量、外输、运行驱动和过程输出 | 按过程记录的载体数量 | `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef` |
| `calc_combustion_emissions` | 天然气、柴油和 LPG 使用 | 根据实测燃料数量和有记录场址测量或排放因子计算每项具名空气排放；保留因子基准和燃料约定 | 燃料数量；实测浓度或因子；运行记录 | 每项具名空气排放的 kg | `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef` |
| `calc_refrigerant_loss` | R-717 和 R-134a 系统 | 未回收损失 = 期初库存 + 采购 + 补充转入 - 回收量 - 期末库存 - 有记录转出；按物质分别计算 | 制冷剂库存和维修记录 | 按物质记录的 kg 补充和 kg 未回收排放 | `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef` |
| `calc_wastewater_load` | 场内处理排放 | 污染物负荷 = 匹配的处理后废水体积 × 实测浓度；分别计算 COD、总氮、总磷和悬浮固体 | 排放体积；匹配浓度；采样期间 | 每项具名水体排放的 kg | `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef` |
| `calc_coproduct_allocation` | 剩余共享负荷 | 输出 i 的分配负荷 = 剩余共享负荷 × 输出 i 的已披露分配因子；所分配输出的因子之和应为一 | 剩余负荷；产品数量；物理关系或经济价值；参考期 | 分配后的剩余负荷和敏感性结果 | `eu-recommendation-2021-2279-pef` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | 参考产品和中间肉产品 | 证明绵羊物种、冷冻状态、产品形态、带骨状态、批次身份和合格性；不得将 CPC 21135 UUID 用于可食内脏或调制肉。 | 产品规格；批次记录；放行记录；所选 Tiangong UUID |
| `dq_temporal_representativeness` | 全部前景记录 | 全年运行采用一个有代表性的连续 12 个月；较短季节期间采用全部生产周期，并登记缺口和替代。 | 仪表和批次覆盖；生产日历；缺口登记 |
| `dq_geographic_and_technical_scope` | 场址和上游数据集 | 匹配实际屠宰地域、绵羊供应、过程技术、冻结系统和废水路线；披露每项代理和重大不匹配。 | 场址元数据；供应商来源；设备记录；数据集地域和技术 |
| `dq_inventory_completeness` | 全部纳入过程 | 覆盖所有已知能源、水、材料和化学品投入以及每项产品、共产品、废物和直接排放输出；对遗漏记录具体不适用或截断理由。 | 完整 LCI 清单；账单；库存记录；仪表；批次和废物记录 |
| `dq_mass_balance` | 绵羊、胴体、肉和分离流 | 核对活重和每个过程质量平衡，披露测量不确定度并调查重大残差，而不是插入未测损失。 | 签署平衡工作表；校准秤；残差调查 |
| `dq_cold_chain_and_release` | 预冷、冻结和冻藏 | 保留与批次关联的冷冻状态、储存条件、时长和放行状态证据，不得虚构默认温度或停留时间。 | 温度日志；传感器校准；仓库移动；放行记录 |
| `dq_emissions_and_wastewater` | 空气和水体排放 | 将每项计算排放关联至实测活动数据、有记录测量或因子、适用隔室和参考期。 | 测量报告；因子来源；燃料记录；实验室 QA；计算工作表 |
| `dq_coproduct_and_waste_status` | 血、皮、器官、脂肪、骨和拒收物料 | 作为共产品前，记录每项流的去向以及法律或商业产品状态；否则保留废物转移证据。 | 销售或转移记录；产品规格；废物清单；分配工作表 |
| `dq_data_provenance_and_review` | 前景数据包 | 保留企业特定来源记录、转换、分配、数据质量评级、审核发现和局限，使清单可复现。 | 数据沿袭登记；计算工作簿；审核记录；局限披露 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `validation_reference_identity` | 参考流 | 所选流 UUID 应为 `7a898ac1-b845-4943-bae3-94e7c24ae06d`，即精确 CPC 21135、采用 Mass 和 kg 的 Product 流；不得用于鲜或冷藏绵羊肉、可食内脏、其他物种或调制肉。 | `un-cpc-3-0` |
| `validation_reference_amount` | 定量参考 | 参考输出应恰好为 1 kg 净合格冷冻绵羊肉，采用 Mass `93a60a56-a3c8-11da-a746-0800200b9a66` 和单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` 的 kg；排除包装质量。 | `un-cpc-3-0` |
| `validation_process_selection` | 过程图 | 纳入全部六个必需过程；当所代表设施处理废水时纳入 `onsite_wastewater_treatment`。 | `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef` |
| `validation_atomic_inventory` | 前景清单 | 每张卡应仅含一项精确交换和一个属性/单位对。拒绝在一个选定流中使用集合标签、选择器、组合能源载体、多种化学品、多种包装材料、多种废物或多种排放。 | `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef` |
| `validation_inventory_coverage` | 前景清单 | 核验实际存在的活羊、阶段水和每种能源载体、每种制冷剂补充和排放、每种清洗剂和消毒剂、每种包装产品及包装废物、每项产品或共产品、每项废物流以及每项直接空气或水体排放均有独立卡片。 | `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef` |
| `validation_mass_balance` | 前景过程 | 报告过程及报告期质量平衡残差和测量不确定度，并调查重大残差；不得虚构闭合。 | `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef` |
| `validation_frozen_state` | 参考产品 | 证明所声明冷冻状态，并保留与批次关联的预冷、冻结、冻藏时长、条件和放行证据；不得推断默认温度或时长。 | `un-cpc-3-0`; `ec-jrc-sa-bref-2024` |
| `validation_no_utility_double_counting` | 公用工程 | 核验外购蒸汽与燃料、外购热水与其上游供热、新鲜水与回用水以及共享公用工程分配均只计算一次。 | `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef` |
| `validation_refrigerants` | 制冷 | 分别核对每种制冷剂物质；制冷剂补充产品流与相应未回收空气排放不得合并或重复。 | `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef` |
| `validation_wastewater` | 废水与场内处理 | 保持普通废水和高有机负荷废水相互独立，核对进水、出水和污泥，并根据匹配流量和浓度记录计算每项水体排放。 | `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef` |
| `validation_allocation` | 共产品和共享操作 | 分配前细分直接归属负荷；剩余分配因子之和应为一，并披露方法、期间、产品状态和重大敏感性结果。 | `eu-recommendation-2021-2279-pef` |
| `validation_collection_links` | 采集和计算行 | 每个采集或计算行应引用已实施采集协议；每项计算应识别其规则或可复现工作表。 | `eu-recommendation-2021-2279-pef` |
| `validation_data_quality_and_transparency` | 发布数据包 | 披露企业特定数据覆盖、来源、转换、代理、缺口、截断、不确定度、分配、数据质量和审核发现。 | `eu-recommendation-2021-2279-pef` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 冷冻绵羊肉场址特定前景数据包，可发布为单元过程或经审核的门到门数据集 |
| downstream_use | `secondary_dataset`; `background_dataset` |
| allowed_use | 归因型产品 LCA、供应链建模、设施改进、热点分析，以及在地域、技术、分配和冷冻状态规格相容时对相同冷冻绵羊肉形态进行比较 |
| excluded_use | 用于鲜或冷藏肉、可食内脏、山羊或其他物种、调制肉、食品安全认证、营养声明，或未经代表性审查用于所代表地域、期间和技术之外 |
| required_metadata | PCR id 和生命周期状态；CPC 21135 产品身份和 Tiangong UUID；绵羊来源；设施和地域；胴体或分割形态；带骨状态；冻结和储存技术；冻藏时长和条件；参考期；系统边界；上游数据集；包装；废水路线；共产品状态；分配；数据所有者和审核状态 |
| required_quality_disclosure | 一手数据覆盖；秤、仪表、传感器和实验室方法；活重及过程质量平衡残差；未解析流 UUID；代理数据集；时间、地域和技术局限；截断；分配敏感性；不确定度；数据质量评级和审核发现 |
| update_trigger | 产品形态、绵羊供应、屠宰或冻结技术、能源系统、制冷剂、包装、废水路线、共产品状态或分配改变；出现新的已核验 Tiangong 身份；获得更具代表性前景数据；纠正质量平衡或来源修订 |

## 11. 数据源

| Source id | 类型 | 参考文献 | 用途 |
| --- | --- | --- | --- |
| `un-cpc-3-0` | 官方指南（`official_guidance`） | 联合国统计司，《中央产品分类》第 3.0 版结构及解释性说明，2025 年 6 月 30 日；仓库保留原始结构文件 `CPC_Ver_3.0_Structure_30Jun2025.csv`。https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf。访问日期：2026-08-13。 | CPC 21135 冷冻绵羊肉精确范围，以及与鲜或冷藏肉和可食内脏类别的区分 |
| `ec-jrc-sa-bref-2024` | 官方指南（`official_guidance`） | Karlis, P., Presicce, F., Giner Santonja, G., Brinkmann, T. and Roudier, S. Best Available Techniques (BAT) Reference Document for the Slaughterhouses, Animal By-products and/or Edible Co-products Industries. European Commission Joint Research Centre, EUR 31752 EN, JRC135916, 2024. https://doi.org/10.2760/18199；https://publications.jrc.ec.europa.eu/repository/handle/JRC135916。访问日期：2026-08-13。 | 屠宰场过程分解、公用工程、清洗、制冷、废水、共产品、废物、排放和前景质量记录 |
| `eu-recommendation-2021-2279-pef` | 官方指南（`official_guidance`） | 欧盟委员会，Commission Recommendation (EU) 2021/2279 of 15 December 2021 on the use of the Environmental Footprint methods to measure and communicate the life cycle environmental performance of products and organisations，2021 年 12 月 30 日合并文本。https://eur-lex.europa.eu/eli/reco/2021/2279/2021-12-30/eng。访问日期：2026-08-13。 | 产品特定物料清单、企业特定数据、完整 LCI、分配、归一化、透明度、数据质量和验证 |
