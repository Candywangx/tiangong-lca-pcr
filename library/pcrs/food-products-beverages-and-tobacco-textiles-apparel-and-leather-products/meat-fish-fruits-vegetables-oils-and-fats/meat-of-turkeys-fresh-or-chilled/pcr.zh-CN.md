---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.meat-of-turkeys-fresh-or-chilled
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 火鸡肉，鲜或冷藏

## 1. 范围与适用性

本 PCR 覆盖 CPC 3.0 子类 21124 中净合格、处于鲜或冷藏状态的火鸡肉。当整只已整理胴体、火鸡分割肉或分装肉保持鲜或冷藏销售状态时，均属于本 PCR 范围。必须声明产品形态、带骨状态、带皮状态、保鲜状态、发运温度和包装形式。

冷冻火鸡肉不在范围内。即使在前景系统内作为共产品产出，单独销售的火鸡肝、火鸡心、火鸡胗或其他可食火鸡杂碎也不属于参考产品。活火鸡、动物副产品、废物和中间胴体均不得作为替代参考产品。

前景边界从屠宰场接收点的活火鸡开始，到在制造设施门口放行散装或包装的净合格鲜或冷藏火鸡肉结束。火鸡养殖和运至屠宰场的运输属于上游链接系统；分销、零售冷藏、使用和寿命终止属于下游链接系统。场内废水处理与分割为条件适用过程；每种已安装或实际使用的路线均以独立原子交换表示。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.meat-of-turkeys-fresh-or-chilled |
| classification_refs | CPC 3.0：21124，Meat of turkeys, fresh or chilled |
| covered_products | 在设施门口以鲜或冷藏状态放行的整只已整理火鸡胴体、火鸡分割肉或分装肉；不计包装质量 |
| excluded_products | 冷冻火鸡肉；作为参考产品的可食火鸡杂碎；其他禽种肉；活火鸡；不符合声明鲜或冷藏状态的产品 |
| representative_product | 净合格鲜或冷藏火鸡肉，以已核验的天工 CPC 21124 产品流表示 |
| production_route | 活禽接收与暂养；屠宰、放血、去羽与去内脏；胴体整理；冷却与冷藏；条件性分割；包装或散装放行；清洗消毒；条件性场内废水处理 |
| market_state | 制造设施门口的散装或包装鲜或冷藏火鸡肉，并声明产品形态、发运温度、带骨状态、带皮状态和包装形式 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 制造设施门口处于鲜或冷藏状态的净合格火鸡肉 |
| How much | 1 kg 净产品质量，不含包装 |
| How well | 符合声明的产品规范，保持鲜或冷藏且未进入冷冻状态，并排除可食火鸡杂碎 |
| How long or cycle | 一个声明的屠宰与生产批次或生产周期；不指定服务期限 |
| reference_flow_link | 经冷却、条件性分割以及包装或散装放行后，在设施门口交付的净合格鲜或冷藏火鸡肉质量 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg 净合格产品，不含包装质量 |
| 参考产品流 | Meat of turkeys, fresh or chilled `653bdb6e-5456-4a7d-88d3-8493b1f27bc7` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 整只胴体或具名分割件；带骨或去骨状态；带皮或去皮状态；鲜或冷藏状态；发运温度；保鲜方法；包装或散装形式；净产品质量；屠宰、冷却、分割和包装路线；设施地理位置；生产批次或周期；产品未冷冻的证据；排除可食杂碎的证据 |

构建前景数据包时，必须在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中声明 `必需限定信息` 的每一项。缺失限定信息将使参考流定义不完整。上述已核验 UUID 均不带数据集版本。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | 参考产品与归一化清单 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 在设施门口记录恰好 1 kg 净合格鲜或冷藏火鸡肉。排除全部初级、次级和运输包装质量。 |
| `live_weight_basis` | 活火鸡接收与屠宰得率核对 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 分别记录校准的进厂活重以及胴体、肉、共产品、废物和废水质量；没有批次特定的实测换算时，不得以禽只数量替代质量。 |
| `volume_to_mass_conversion` | 按体积记录的水、液体化学品、废水和液体共产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 仅可采用适用于同一具名物流和代表期的密度与温度将体积换算为质量；保留原始体积和换算输入。 |
| `packaging_count_to_mass` | 按件数记录的包装组件 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 采用同一包装规格和批次的实测单件质量将件数换算为质量；每种包装材料保持独立。 |
| `temperature_state_evidence` | 参考产品销售状态 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 保留产品温度和储存记录，证明声明的鲜或冷藏状态以及未发生冷冻；温度记录不改变参考质量单位。 |
| `energy_carrier_preservation` | 电力、蒸汽、热水、天然气、柴油和 LPG | Energy | kWh 或 MJ | 在分配和换算中保留每种载体的计量单位和身份。不得把多个载体数量合并为一个清单交换。 |

## 5. 系统边界

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_gate_to_gate` | 屠宰场前景系统 | 纳入活火鸡接收与暂养、屠宰、放血、去羽、去内脏、胴体整理、冷却冷藏、条件性分割、包装或散装放行、清洗消毒以及条件性场内废水处理。 | `ec-jrc-sa-bref-jrc135916`；`eu-pef-2021-2279` |
| `boundary_upstream_links` | 养殖与进厂运输 | 将火鸡养殖和运至屠宰场的运输作为上游链接系统；不得在屠宰场前景清单内重复。 | `eu-pef-2021-2279` |
| `boundary_downstream_links` | 分销、零售、使用与寿命终止 | 研究范围需要时，将出厂后的分销、零售冷藏、制备、使用和寿命终止作为下游链接系统。 | `eu-pef-2021-2279` |
| `boundary_product_scope` | 产品身份 | 仅将 CPC 21124 鲜或冷藏火鸡肉作为参考产品。拒绝以冷冻火鸡肉或可食火鸡杂碎替代参考产品。 | `unsd-cpc-3-21124` |
| `boundary_conditional_routes` | 分割、包装技术、致昏、制冷和场内处理 | 仅纳入已安装或实际使用的技术。对每张不适用原子卡保留证据；不得以集合式选定流替代各项备选技术。 | `ec-jrc-sa-bref-jrc135916`；`eu-pef-2021-2279` |
| `boundary_complete_lci` | 全部前景过程 | 分别记录每种已知材料、能源载体、制冷剂、化学品、包装组件、产品、共产品、废物、废水流和基本排放。 | `ec-jrc-sa-bref-jrc135916`；`eu-pef-2021-2279` |
| `boundary_no_bref_defaults` | 定量清单 | 使用场址和批次前景记录。不得把 SA BREF 中的 BAT 相关水平、示例值或性能值复制为默认清单数量或范围。 | `ec-jrc-sa-bref-jrc135916`；`eu-pef-2021-2279` |

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 在屠宰场接收点交付的活火鸡，并声明供应方、禽群、交付批次、进厂活重、状态和接收时间 |
| starting_condition_role | 门到门前景起始条件；火鸡养殖和进厂运输仍为链接上游系统 |
| product_classification_scope | 仅 CPC 3.0 子类 21124：鲜或冷藏状态的火鸡肉；冷冻火鸡肉和可食火鸡杂碎不属于参考产品范围 |
| recursive_input_rule | 已归类为鲜或冷藏火鸡肉的外购投入，应作为带上游数据集的技术圈投入记录，不得在当前前景边界内概念性重复生产 |
| upstream_dataset_requirement | 为活火鸡、水、能源载体、化学品、包装组件、处理服务和其他外购产品选择在时间、地理、技术与物理状态上具有代表性的数据集 |
| disclosure | 声明产品形态和状态、屠宰与冷却技术、分割路线、包装、制冷回路、燃料系统、共产品状态、废物去向、废水路线、分配、数据期、排除过程和未解决 UUID 身份 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `turkey_receipt_and_lairage` | 火鸡接收与暂养 | `required` | 始终 | 接收活火鸡、记录进厂活重并将验收合格禽只转入屠宰 | 每 1 kg 参考产品对应的验收活火鸡质量（kg） |
| `slaughter_bleeding_defeathering_evisceration` | 屠宰、放血、去羽与去内脏 | `required` | 始终；致昏技术取决于场址 | 致昏、屠宰、放血、浸烫、去羽、去内脏，并分流各项具名动物副产品与废物 | 转入胴体整理的去内脏火鸡胴体质量（kg） |
| `carcass_dressing` | 火鸡胴体整理 | `required` | 始终 | 对去内脏胴体进行修整与检验后送入冷却 | 转入冷却的已整理火鸡胴体质量（kg） |
| `chilling_and_cold_storage` | 火鸡胴体冷却与冷藏 | `required` | 始终；水、冰和制冷剂卡仅适用于已安装系统 | 在不冻结的条件下冷却胴体并维持声明的鲜或冷藏状态 | 放行至分割或包装的冷藏整只火鸡胴体质量（kg） |
| `cutting_and_portioning` | 火鸡分割与分装 | `conditional` | 参考产品为分割件、分装件、去骨肉或回收肉边料时纳入 | 将冷藏胴体分割为逐项识别的肉产品，并分流各项具名副产品与废物 | 转入包装的合格火鸡分割肉质量（kg） |
| `packaging_and_release` | 包装与设施门口放行 | `required` | 始终；各包装件和气调卡仅在实际使用时适用 | 包装或散装放行产品、核对包装用量，并在设施门口交付参考产品 | 1 kg 净合格鲜或冷藏火鸡肉，不含包装质量 |
| `cleaning_and_disinfection` | 清洗与消毒 | `required` | 始终；各化学品和燃料卡仅在使用该物质时适用 | 清洗消毒加工设备，并分别收集每股卫生废水 | 每 1 kg 参考产品对应的可归属卫生记录 |
| `onsite_wastewater_treatment` | 场内废水处理 | `conditional` | 仅当一股或多股具名废水在场内处理时纳入 | 处理逐股记录的废水投入，并量化每项处理残余物与排放 | 每 1 kg 参考产品对应的已处理废水 |

### 过程：火鸡接收与暂养（`turkey_receipt_and_lairage`）

#### 输入

##### 产品流

###### 活火鸡投入（`live_turkeys_input`）

本产品投入卡仅记录“火鸡接收与暂养”边界上的 Live turkeys for slaughter。其数量依据该具名交换的前景规则取得。

- 选定流：Live turkeys for slaughter
- 流属性/单位：Mass / kg
- 数量规则：依据代表批次或生产周期的校准秤、储罐、领用、转序、发运、实验室或废物记录计量该具名交换的质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 设施门口净合格鲜或冷藏火鸡肉，不含包装质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_live_turkey_receipt`
- 来源：`unsd-cpc-3-21124`；`ec-jrc-sa-bref-jrc135916`

###### 暂养饮水（`lairage_drinking_water_input`）

本产品投入卡仅记录“火鸡接收与暂养”边界上的 Potable water for turkey lairage drinking。其数量依据该具名交换的前景规则取得。

- 选定流：Potable water for turkey lairage drinking
- 流属性/单位：Mass / kg
- 数量规则：计量代表批次或生产周期的质量，或依据同一水流的密度和温度记录将体积换算为质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 设施门口净合格鲜或冷藏火鸡肉，不含包装质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_live_turkey_receipt`
- 来源：`ec-jrc-sa-bref-jrc135916`；`eu-pef-2021-2279`

###### 暂养电力（`receipt_lairage_electricity_input`）

本产品投入卡仅记录“火鸡接收与暂养”边界上的 Grid electricity for turkey lairage。其数量依据该具名交换的前景规则取得。

- 选定流：Grid electricity for turkey lairage
- 流属性/单位：Energy / kWh
- 数量规则：计量代表期内该具名能源载体的数量，采用有记录的因果驱动因素分配，且不得合并载体
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 设施门口净合格鲜或冷藏火鸡肉，不含包装质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_live_turkey_receipt`
- 来源：`ec-jrc-sa-bref-jrc135916`；`eu-pef-2021-2279`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 验收活火鸡（`accepted_live_turkeys_output`）

本产品产出卡仅记录“火鸡接收与暂养”边界上的 Accepted live turkeys transferred to slaughter。其数量依据该具名交换的前景规则取得。

- 选定流：Accepted live turkeys transferred to slaughter
- 流属性/单位：Mass / kg
- 数量规则：依据校准秤、容器、转序记录或批次物料平衡计量或核算该具名产出的质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 设施门口净合格鲜或冷藏火鸡肉，不含包装质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_live_turkey_receipt`
- 来源：`unsd-cpc-3-21124`；`ec-jrc-sa-bref-jrc135916`

##### 废物流

###### 到厂死亡火鸡（`dead_on_arrival_turkeys_waste_output`）

本废物产出卡仅记录“火鸡接收与暂养”边界上的 Dead-on-arrival turkey carcasses。其数量依据该具名交换的前景规则取得。

- 选定流：Dead-on-arrival turkey carcasses
- 流属性/单位：Mass / kg
- 数量规则：计量或通过物料平衡核算该具名废物的数量，并保留处理去向和批次身份
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 设施门口净合格鲜或冷藏火鸡肉，不含包装质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_live_turkey_receipt`
- 来源：`ec-jrc-sa-bref-jrc135916`；`eu-pef-2021-2279`

###### 暂养火鸡粪便（`lairage_manure_waste_output`）

本废物产出卡仅记录“火鸡接收与暂养”边界上的 Turkey manure from lairage。其数量依据该具名交换的前景规则取得。

- 选定流：Turkey manure from lairage
- 流属性/单位：Mass / kg
- 数量规则：计量或通过物料平衡核算该具名废物的数量，并保留处理去向和批次身份
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 设施门口净合格鲜或冷藏火鸡肉，不含包装质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_live_turkey_receipt`
- 来源：`ec-jrc-sa-bref-jrc135916`；`eu-pef-2021-2279`

###### 暂养区冲洗废水（`lairage_wash_wastewater_output`）

本废物产出卡仅记录“火鸡接收与暂养”边界上的 Lairage wash wastewater from turkey receipt。其数量依据该具名交换的前景规则取得。

- 选定流：Lairage wash wastewater from turkey receipt
- 流属性/单位：Mass / kg
- 数量规则：计量或通过物料平衡核算该具名废物的数量，并保留处理去向和批次身份
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 设施门口净合格鲜或冷藏火鸡肉，不含包装质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_live_turkey_receipt`
- 来源：`ec-jrc-sa-bref-jrc135916`；`eu-pef-2021-2279`

##### 基本流

### 过程：屠宰、放血、去羽与去内脏（`slaughter_bleeding_defeathering_evisceration`）

#### 输入

##### 产品流

###### 验收活火鸡投入（`accepted_live_turkeys_slaughter_input`）

本产品投入卡仅记录“屠宰、放血、去羽与去内脏”边界上的 Accepted live turkeys transferred to slaughter。其数量依据该具名交换的前景规则取得。

- 选定流：Accepted live turkeys transferred to slaughter
- 流属性/单位：Mass / kg
- 数量规则：依据代表批次或生产周期的校准秤、储罐、领用、转序、发运、实验室或废物记录计量该具名交换的质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 设施门口净合格鲜或冷藏火鸡肉，不含包装质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_operations`
- 来源：`unsd-cpc-3-21124`；`ec-jrc-sa-bref-jrc135916`

###### 屠宰工艺水（`slaughter_process_water_input`）

本产品投入卡仅记录“屠宰、放血、去羽与去内脏”边界上的 Potable process water for turkey slaughter。其数量依据该具名交换的前景规则取得。

- 选定流：Potable process water for turkey slaughter
- 流属性/单位：Mass / kg
- 数量规则：计量代表批次或生产周期的质量，或依据同一水流的密度和温度记录将体积换算为质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 设施门口净合格鲜或冷藏火鸡肉，不含包装质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_operations`
- 来源：`ec-jrc-sa-bref-jrc135916`；`eu-pef-2021-2279`

###### 屠宰电力（`slaughter_electricity_input`）

本产品投入卡仅记录“屠宰、放血、去羽与去内脏”边界上的 Grid electricity for turkey slaughter。其数量依据该具名交换的前景规则取得。

- 选定流：Grid electricity for turkey slaughter
- 流属性/单位：Energy / kWh
- 数量规则：计量代表期内该具名能源载体的数量，采用有记录的因果驱动因素分配，且不得合并载体
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 设施门口净合格鲜或冷藏火鸡肉，不含包装质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_operations`
- 来源：`ec-jrc-sa-bref-jrc135916`；`eu-pef-2021-2279`

###### 外购浸烫蒸汽（`slaughter_purchased_steam_input`）

本产品投入卡仅记录“屠宰、放血、去羽与去内脏”边界上的 Purchased steam for turkey scalding。其数量依据该具名交换的前景规则取得。

- 选定流：Purchased steam for turkey scalding
- 流属性/单位：Energy / MJ
- 数量规则：计量代表期内该具名能源载体的数量，采用有记录的因果驱动因素分配，且不得合并载体
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 设施门口净合格鲜或冷藏火鸡肉，不含包装质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_operations`
- 来源：`ec-jrc-sa-bref-jrc135916`；`eu-pef-2021-2279`

###### 外购屠宰热水（`slaughter_purchased_hot_water_input`）

本产品投入卡仅记录“屠宰、放血、去羽与去内脏”边界上的 Purchased hot water for turkey slaughter。其数量依据该具名交换的前景规则取得。

- 选定流：Purchased hot water for turkey slaughter
- 流属性/单位：Energy / MJ
- 数量规则：计量代表期内该具名能源载体的数量，采用有记录的因果驱动因素分配，且不得合并载体
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 设施门口净合格鲜或冷藏火鸡肉，不含包装质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_operations`
- 来源：`ec-jrc-sa-bref-jrc135916`；`eu-pef-2021-2279`

###### 屠宰天然气（`slaughter_natural_gas_input`）

本产品投入卡仅记录“屠宰、放血、去羽与去内脏”边界上的 Natural gas combusted for turkey slaughter。其数量依据该具名交换的前景规则取得。

- 选定流：Natural gas combusted for turkey slaughter
- 流属性/单位：Energy / MJ
- 数量规则：计量代表期内该具名能源载体的数量，采用有记录的因果驱动因素分配，且不得合并载体
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 设施门口净合格鲜或冷藏火鸡肉，不含包装质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_operations`
- 来源：`ec-jrc-sa-bref-jrc135916`；`eu-pef-2021-2279`

###### 屠宰柴油（`slaughter_diesel_input`）

本产品投入卡仅记录“屠宰、放血、去羽与去内脏”边界上的 Diesel combusted for turkey slaughter。其数量依据该具名交换的前景规则取得。

- 选定流：Diesel combusted for turkey slaughter
- 流属性/单位：Energy / MJ
- 数量规则：计量代表期内该具名能源载体的数量，采用有记录的因果驱动因素分配，且不得合并载体
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 设施门口净合格鲜或冷藏火鸡肉，不含包装质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_operations`
- 来源：`ec-jrc-sa-bref-jrc135916`；`eu-pef-2021-2279`

###### 屠宰液化石油气（`slaughter_lpg_input`）

本产品投入卡仅记录“屠宰、放血、去羽与去内脏”边界上的 Liquefied petroleum gas combusted for turkey slaughter。其数量依据该具名交换的前景规则取得。

- 选定流：Liquefied petroleum gas combusted for turkey slaughter
- 流属性/单位：Energy / MJ
- 数量规则：计量代表期内该具名能源载体的数量，采用有记录的因果驱动因素分配，且不得合并载体
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 设施门口净合格鲜或冷藏火鸡肉，不含包装质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_operations`
- 来源：`ec-jrc-sa-bref-jrc135916`；`eu-pef-2021-2279`

###### 致昏二氧化碳（`slaughter_stunning_co2_input`）

本产品投入卡仅记录“屠宰、放血、去羽与去内脏”边界上的 Carbon dioxide gas for turkey stunning。其数量依据该具名交换的前景规则取得。

- 选定流：Carbon dioxide gas for turkey stunning
- 流属性/单位：Mass / kg
- 数量规则：计量该具名物质的领用或投加质量，并修正退料及有记录的回用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 设施门口净合格鲜或冷藏火鸡肉，不含包装质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_operations`
- 来源：`ec-jrc-sa-bref-jrc135916`；`eu-pef-2021-2279`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 去内脏火鸡胴体（`eviscerated_turkey_carcass_output`）

本产品产出卡仅记录“屠宰、放血、去羽与去内脏”边界上的 Eviscerated turkey carcasses transferred to dressing。其数量依据该具名交换的前景规则取得。

- 选定流：Eviscerated turkey carcasses transferred to dressing
- 流属性/单位：Mass / kg
- 数量规则：依据校准秤、容器、转序记录或批次物料平衡计量或核算该具名产出的质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 设施门口净合格鲜或冷藏火鸡肉，不含包装质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_operations`
- 来源：`ec-jrc-sa-bref-jrc135916`；`eu-pef-2021-2279`

###### 回收火鸡血（`recovered_turkey_blood_output`）

本产品产出卡仅记录“屠宰、放血、去羽与去内脏”边界上的 Turkey blood for animal-by-product processing。其数量依据该具名交换的前景规则取得。

- 选定流：Turkey blood for animal-by-product processing
- 流属性/单位：Mass / kg
- 数量规则：依据校准秤、容器、转序记录或批次物料平衡计量或核算该具名产出的质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 设施门口净合格鲜或冷藏火鸡肉，不含包装质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_operations`
- 来源：`ec-jrc-sa-bref-jrc135916`；`eu-pef-2021-2279`

###### 回收火鸡羽毛（`recovered_turkey_feathers_output`）

本产品产出卡仅记录“屠宰、放血、去羽与去内脏”边界上的 Turkey feathers for animal-by-product processing。其数量依据该具名交换的前景规则取得。

- 选定流：Turkey feathers for animal-by-product processing
- 流属性/单位：Mass / kg
- 数量规则：依据校准秤、容器、转序记录或批次物料平衡计量或核算该具名产出的质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 设施门口净合格鲜或冷藏火鸡肉，不含包装质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_operations`
- 来源：`ec-jrc-sa-bref-jrc135916`；`eu-pef-2021-2279`

###### 回收火鸡头（`recovered_turkey_heads_output`）

本产品产出卡仅记录“屠宰、放血、去羽与去内脏”边界上的 Turkey heads for animal-by-product processing。其数量依据该具名交换的前景规则取得。

- 选定流：Turkey heads for animal-by-product processing
- 流属性/单位：Mass / kg
- 数量规则：依据校准秤、容器、转序记录或批次物料平衡计量或核算该具名产出的质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 设施门口净合格鲜或冷藏火鸡肉，不含包装质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_operations`
- 来源：`ec-jrc-sa-bref-jrc135916`；`eu-pef-2021-2279`

###### 回收火鸡脚（`recovered_turkey_feet_output`）

本产品产出卡仅记录“屠宰、放血、去羽与去内脏”边界上的 Turkey feet for animal-by-product processing。其数量依据该具名交换的前景规则取得。

- 选定流：Turkey feet for animal-by-product processing
- 流属性/单位：Mass / kg
- 数量规则：依据校准秤、容器、转序记录或批次物料平衡计量或核算该具名产出的质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 设施门口净合格鲜或冷藏火鸡肉，不含包装质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_operations`
- 来源：`ec-jrc-sa-bref-jrc135916`；`eu-pef-2021-2279`

###### 回收火鸡肝（`recovered_turkey_livers_output`）

本产品产出卡仅记录“屠宰、放血、去羽与去内脏”边界上的 Turkey livers for food co-product handling。其数量依据该具名交换的前景规则取得。

- 选定流：Turkey livers for food co-product handling
- 流属性/单位：Mass / kg
- 数量规则：依据校准秤、容器、转序记录或批次物料平衡计量或核算该具名产出的质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 设施门口净合格鲜或冷藏火鸡肉，不含包装质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_operations`
- 来源：`ec-jrc-sa-bref-jrc135916`；`eu-pef-2021-2279`

###### 回收火鸡心（`recovered_turkey_hearts_output`）

本产品产出卡仅记录“屠宰、放血、去羽与去内脏”边界上的 Turkey hearts for food co-product handling。其数量依据该具名交换的前景规则取得。

- 选定流：Turkey hearts for food co-product handling
- 流属性/单位：Mass / kg
- 数量规则：依据校准秤、容器、转序记录或批次物料平衡计量或核算该具名产出的质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 设施门口净合格鲜或冷藏火鸡肉，不含包装质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_operations`
- 来源：`ec-jrc-sa-bref-jrc135916`；`eu-pef-2021-2279`

###### 回收火鸡胗（`recovered_turkey_gizzards_output`）

本产品产出卡仅记录“屠宰、放血、去羽与去内脏”边界上的 Turkey gizzards for food co-product handling。其数量依据该具名交换的前景规则取得。

- 选定流：Turkey gizzards for food co-product handling
- 流属性/单位：Mass / kg
- 数量规则：依据校准秤、容器、转序记录或批次物料平衡计量或核算该具名产出的质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 设施门口净合格鲜或冷藏火鸡肉，不含包装质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_operations`
- 来源：`ec-jrc-sa-bref-jrc135916`；`eu-pef-2021-2279`

##### 废物流

###### 火鸡肺废物（`turkey_lungs_waste_output`）

本废物产出卡仅记录“屠宰、放血、去羽与去内脏”边界上的 Turkey lungs sent to animal-by-product treatment。其数量依据该具名交换的前景规则取得。

- 选定流：Turkey lungs sent to animal-by-product treatment
- 流属性/单位：Mass / kg
- 数量规则：计量或通过物料平衡核算该具名废物的数量，并保留处理去向和批次身份
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 设施门口净合格鲜或冷藏火鸡肉，不含包装质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_operations`
- 来源：`ec-jrc-sa-bref-jrc135916`；`eu-pef-2021-2279`

###### 火鸡脾废物（`turkey_spleens_waste_output`）

本废物产出卡仅记录“屠宰、放血、去羽与去内脏”边界上的 Turkey spleens sent to animal-by-product treatment。其数量依据该具名交换的前景规则取得。

- 选定流：Turkey spleens sent to animal-by-product treatment
- 流属性/单位：Mass / kg
- 数量规则：计量或通过物料平衡核算该具名废物的数量，并保留处理去向和批次身份
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 设施门口净合格鲜或冷藏火鸡肉，不含包装质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_operations`
- 来源：`ec-jrc-sa-bref-jrc135916`；`eu-pef-2021-2279`

###### 火鸡肠废物（`turkey_intestines_waste_output`）

本废物产出卡仅记录“屠宰、放血、去羽与去内脏”边界上的 Turkey intestines sent to animal-by-product treatment。其数量依据该具名交换的前景规则取得。

- 选定流：Turkey intestines sent to animal-by-product treatment
- 流属性/单位：Mass / kg
- 数量规则：计量或通过物料平衡核算该具名废物的数量，并保留处理去向和批次身份
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 设施门口净合格鲜或冷藏火鸡肉，不含包装质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_operations`
- 来源：`ec-jrc-sa-bref-jrc135916`；`eu-pef-2021-2279`

###### 火鸡胃内容物（`turkey_stomach_contents_waste_output`）

本废物产出卡仅记录“屠宰、放血、去羽与去内脏”边界上的 Turkey stomach contents from evisceration。其数量依据该具名交换的前景规则取得。

- 选定流：Turkey stomach contents from evisceration
- 流属性/单位：Mass / kg
- 数量规则：计量或通过物料平衡核算该具名废物的数量，并保留处理去向和批次身份
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 设施门口净合格鲜或冷藏火鸡肉，不含包装质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_operations`
- 来源：`ec-jrc-sa-bref-jrc135916`；`eu-pef-2021-2279`

###### 火鸡肠内容物（`turkey_intestinal_contents_waste_output`）

本废物产出卡仅记录“屠宰、放血、去羽与去内脏”边界上的 Turkey intestinal contents from evisceration。其数量依据该具名交换的前景规则取得。

- 选定流：Turkey intestinal contents from evisceration
- 流属性/单位：Mass / kg
- 数量规则：计量或通过物料平衡核算该具名废物的数量，并保留处理去向和批次身份
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 设施门口净合格鲜或冷藏火鸡肉，不含包装质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_operations`
- 来源：`ec-jrc-sa-bref-jrc135916`；`eu-pef-2021-2279`

###### 屠宰检验判废胴体（`condemned_turkey_carcass_slaughter_waste_output`）

本废物产出卡仅记录“屠宰、放血、去羽与去内脏”边界上的 Condemned turkey carcasses from slaughter inspection。其数量依据该具名交换的前景规则取得。

- 选定流：Condemned turkey carcasses from slaughter inspection
- 流属性/单位：Mass / kg
- 数量规则：计量或通过物料平衡核算该具名废物的数量，并保留处理去向和批次身份
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 设施门口净合格鲜或冷藏火鸡肉，不含包装质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_operations`
- 来源：`ec-jrc-sa-bref-jrc135916`；`eu-pef-2021-2279`

###### 屠宰高有机负荷废水（`slaughter_high_load_wastewater_output`）

本废物产出卡仅记录“屠宰、放血、去羽与去内脏”边界上的 High-organic-load wastewater from turkey slaughter。其数量依据该具名交换的前景规则取得。

- 选定流：High-organic-load wastewater from turkey slaughter
- 流属性/单位：Mass / kg
- 数量规则：计量或通过物料平衡核算该具名废物的数量，并保留处理去向和批次身份
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 设施门口净合格鲜或冷藏火鸡肉，不含包装质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_operations`
- 来源：`ec-jrc-sa-bref-jrc135916`；`eu-pef-2021-2279`

##### 基本流

###### 屠宰燃烧化石二氧化碳（`slaughter_fossil_co2_output`）

本基本产出卡仅记录“屠宰、放血、去羽与去内脏”边界上的 Carbon dioxide, fossil, to air from turkey slaughter combustion。其数量依据该具名交换的前景规则取得。

- 选定流：Carbon dioxide, fossil, to air from turkey slaughter combustion
- 流属性/单位：Mass / kg
- 数量规则：依据采集的燃料、气体或过程记录以及有记录的适用因子或质量平衡，单独计算该具名基本物质；不得把 BREF 性能值作为清单因子
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 设施门口净合格鲜或冷藏火鸡肉，不含包装质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_slaughter_operations`
- 来源：`ec-jrc-sa-bref-jrc135916`；`eu-pef-2021-2279`

###### 屠宰燃烧氮氧化物（`slaughter_nox_output`）

本基本产出卡仅记录“屠宰、放血、去羽与去内脏”边界上的 Nitrogen oxides, to air from turkey slaughter combustion。其数量依据该具名交换的前景规则取得。

- 选定流：Nitrogen oxides, to air from turkey slaughter combustion
- 流属性/单位：Mass / kg
- 数量规则：依据采集的燃料、气体或过程记录以及有记录的适用因子或质量平衡，单独计算该具名基本物质；不得把 BREF 性能值作为清单因子
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 设施门口净合格鲜或冷藏火鸡肉，不含包装质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_slaughter_operations`
- 来源：`ec-jrc-sa-bref-jrc135916`；`eu-pef-2021-2279`

###### 屠宰燃烧二氧化硫（`slaughter_so2_output`）

本基本产出卡仅记录“屠宰、放血、去羽与去内脏”边界上的 Sulfur dioxide, to air from turkey slaughter combustion。其数量依据该具名交换的前景规则取得。

- 选定流：Sulfur dioxide, to air from turkey slaughter combustion
- 流属性/单位：Mass / kg
- 数量规则：依据采集的燃料、气体或过程记录以及有记录的适用因子或质量平衡，单独计算该具名基本物质；不得把 BREF 性能值作为清单因子
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 设施门口净合格鲜或冷藏火鸡肉，不含包装质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_slaughter_operations`
- 来源：`ec-jrc-sa-bref-jrc135916`；`eu-pef-2021-2279`

###### 屠宰燃烧 PM2.5（`slaughter_pm25_output`）

本基本产出卡仅记录“屠宰、放血、去羽与去内脏”边界上的 Particulate matter, PM2.5, to air from turkey slaughter combustion。其数量依据该具名交换的前景规则取得。

- 选定流：Particulate matter, PM2.5, to air from turkey slaughter combustion
- 流属性/单位：Mass / kg
- 数量规则：依据采集的燃料、气体或过程记录以及有记录的适用因子或质量平衡，单独计算该具名基本物质；不得把 BREF 性能值作为清单因子
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 设施门口净合格鲜或冷藏火鸡肉，不含包装质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_slaughter_operations`
- 来源：`ec-jrc-sa-bref-jrc135916`；`eu-pef-2021-2279`

###### 屠宰燃烧 PM10（`slaughter_pm10_output`）

本基本产出卡仅记录“屠宰、放血、去羽与去内脏”边界上的 Particulate matter, PM10, to air from turkey slaughter combustion。其数量依据该具名交换的前景规则取得。

- 选定流：Particulate matter, PM10, to air from turkey slaughter combustion
- 流属性/单位：Mass / kg
- 数量规则：依据采集的燃料、气体或过程记录以及有记录的适用因子或质量平衡，单独计算该具名基本物质；不得把 BREF 性能值作为清单因子
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 设施门口净合格鲜或冷藏火鸡肉，不含包装质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_slaughter_operations`
- 来源：`ec-jrc-sa-bref-jrc135916`；`eu-pef-2021-2279`

###### 致昏化石二氧化碳（`slaughter_stunning_fossil_co2_output`）

本基本产出卡仅记录“屠宰、放血、去羽与去内脏”边界上的 Carbon dioxide, fossil, to air from turkey stunning。其数量依据该具名交换的前景规则取得。

- 选定流：Carbon dioxide, fossil, to air from turkey stunning
- 流属性/单位：Mass / kg
- 数量规则：依据采集的燃料、气体或过程记录以及有记录的适用因子或质量平衡，单独计算该具名基本物质；不得把 BREF 性能值作为清单因子
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 设施门口净合格鲜或冷藏火鸡肉，不含包装质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_slaughter_operations`
- 来源：`ec-jrc-sa-bref-jrc135916`；`eu-pef-2021-2279`

###### 致昏生物源二氧化碳（`slaughter_stunning_biogenic_co2_output`）

本基本产出卡仅记录“屠宰、放血、去羽与去内脏”边界上的 Carbon dioxide, biogenic, to air from turkey stunning。其数量依据该具名交换的前景规则取得。

- 选定流：Carbon dioxide, biogenic, to air from turkey stunning
- 流属性/单位：Mass / kg
- 数量规则：依据采集的燃料、气体或过程记录以及有记录的适用因子或质量平衡，单独计算该具名基本物质；不得把 BREF 性能值作为清单因子
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 设施门口净合格鲜或冷藏火鸡肉，不含包装质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_slaughter_operations`
- 来源：`ec-jrc-sa-bref-jrc135916`；`eu-pef-2021-2279`

### 过程：火鸡胴体整理（`carcass_dressing`）

#### 输入

##### 产品流

###### 去内脏胴体投入（`eviscerated_turkey_carcass_dressing_input`）

本产品投入卡仅记录“火鸡胴体整理”边界上的 Eviscerated turkey carcasses transferred to dressing。其数量依据该具名交换的前景规则取得。

- 选定流：Eviscerated turkey carcasses transferred to dressing
- 流属性/单位：Mass / kg
- 数量规则：依据代表批次或生产周期的校准秤、储罐、领用、转序、发运、实验室或废物记录计量该具名交换的质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 设施门口净合格鲜或冷藏火鸡肉，不含包装质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_carcass_dressing`
- 来源：`ec-jrc-sa-bref-jrc135916`；`eu-pef-2021-2279`

###### 胴体整理工艺水（`dressing_process_water_input`）

本产品投入卡仅记录“火鸡胴体整理”边界上的 Potable process water for turkey carcass dressing。其数量依据该具名交换的前景规则取得。

- 选定流：Potable process water for turkey carcass dressing
- 流属性/单位：Mass / kg
- 数量规则：计量代表批次或生产周期的质量，或依据同一水流的密度和温度记录将体积换算为质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 设施门口净合格鲜或冷藏火鸡肉，不含包装质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_carcass_dressing`
- 来源：`ec-jrc-sa-bref-jrc135916`；`eu-pef-2021-2279`

###### 胴体整理电力（`dressing_electricity_input`）

本产品投入卡仅记录“火鸡胴体整理”边界上的 Grid electricity for turkey carcass dressing。其数量依据该具名交换的前景规则取得。

- 选定流：Grid electricity for turkey carcass dressing
- 流属性/单位：Energy / kWh
- 数量规则：计量代表期内该具名能源载体的数量，采用有记录的因果驱动因素分配，且不得合并载体
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 设施门口净合格鲜或冷藏火鸡肉，不含包装质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_carcass_dressing`
- 来源：`ec-jrc-sa-bref-jrc135916`；`eu-pef-2021-2279`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 已整理火鸡胴体（`dressed_turkey_carcass_output`）

本产品产出卡仅记录“火鸡胴体整理”边界上的 Dressed turkey carcasses before chilling。其数量依据该具名交换的前景规则取得。

- 选定流：Dressed turkey carcasses before chilling
- 流属性/单位：Mass / kg
- 数量规则：依据校准秤、容器、转序记录或批次物料平衡计量或核算该具名产出的质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 设施门口净合格鲜或冷藏火鸡肉，不含包装质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_carcass_dressing`
- 来源：`ec-jrc-sa-bref-jrc135916`；`eu-pef-2021-2279`

###### 回收火鸡颈（`recovered_turkey_necks_output`）

本产品产出卡仅记录“火鸡胴体整理”边界上的 Turkey necks for food co-product handling。其数量依据该具名交换的前景规则取得。

- 选定流：Turkey necks for food co-product handling
- 流属性/单位：Mass / kg
- 数量规则：依据校准秤、容器、转序记录或批次物料平衡计量或核算该具名产出的质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 设施门口净合格鲜或冷藏火鸡肉，不含包装质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_carcass_dressing`
- 来源：`ec-jrc-sa-bref-jrc135916`；`eu-pef-2021-2279`

###### 胴体整理回收火鸡脂（`recovered_turkey_fat_dressing_output`）

本产品产出卡仅记录“火鸡胴体整理”边界上的 Separated turkey fat from carcass dressing。其数量依据该具名交换的前景规则取得。

- 选定流：Separated turkey fat from carcass dressing
- 流属性/单位：Mass / kg
- 数量规则：依据校准秤、容器、转序记录或批次物料平衡计量或核算该具名产出的质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 设施门口净合格鲜或冷藏火鸡肉，不含包装质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_carcass_dressing`
- 来源：`ec-jrc-sa-bref-jrc135916`；`eu-pef-2021-2279`

###### 胴体整理回收火鸡皮（`recovered_turkey_skin_dressing_output`）

本产品产出卡仅记录“火鸡胴体整理”边界上的 Removed turkey skin from carcass dressing。其数量依据该具名交换的前景规则取得。

- 选定流：Removed turkey skin from carcass dressing
- 流属性/单位：Mass / kg
- 数量规则：依据校准秤、容器、转序记录或批次物料平衡计量或核算该具名产出的质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 设施门口净合格鲜或冷藏火鸡肉，不含包装质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_carcass_dressing`
- 来源：`ec-jrc-sa-bref-jrc135916`；`eu-pef-2021-2279`

##### 废物流

###### 胴体整理判废火鸡物料（`condemned_turkey_dressing_waste_output`）

本废物产出卡仅记录“火鸡胴体整理”边界上的 Condemned turkey meat from carcass dressing。其数量依据该具名交换的前景规则取得。

- 选定流：Condemned turkey meat from carcass dressing
- 流属性/单位：Mass / kg
- 数量规则：计量或通过物料平衡核算该具名废物的数量，并保留处理去向和批次身份
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 设施门口净合格鲜或冷藏火鸡肉，不含包装质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_carcass_dressing`
- 来源：`ec-jrc-sa-bref-jrc135916`；`eu-pef-2021-2279`

###### 胴体整理冲洗废水（`dressing_wash_wastewater_output`）

本废物产出卡仅记录“火鸡胴体整理”边界上的 Carcass dressing wash wastewater。其数量依据该具名交换的前景规则取得。

- 选定流：Carcass dressing wash wastewater
- 流属性/单位：Mass / kg
- 数量规则：计量或通过物料平衡核算该具名废物的数量，并保留处理去向和批次身份
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 设施门口净合格鲜或冷藏火鸡肉，不含包装质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_carcass_dressing`
- 来源：`ec-jrc-sa-bref-jrc135916`；`eu-pef-2021-2279`

##### 基本流

### 过程：火鸡胴体冷却与冷藏（`chilling_and_cold_storage`）

#### 输入

##### 产品流

###### 已整理胴体冷却投入（`dressed_turkey_carcass_chilling_input`）

本产品投入卡仅记录“火鸡胴体冷却与冷藏”边界上的 Dressed turkey carcasses before chilling。其数量依据该具名交换的前景规则取得。

- 选定流：Dressed turkey carcasses before chilling
- 流属性/单位：Mass / kg
- 数量规则：依据代表批次或生产周期的校准秤、储罐、领用、转序、发运、实验室或废物记录计量该具名交换的质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 设施门口净合格鲜或冷藏火鸡肉，不含包装质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chilling_refrigeration`
- 来源：`ec-jrc-sa-bref-jrc135916`；`eu-pef-2021-2279`

###### 胴体冷却用水（`chilling_process_water_input`）

本产品投入卡仅记录“火鸡胴体冷却与冷藏”边界上的 Potable water for turkey carcass chilling。其数量依据该具名交换的前景规则取得。

- 选定流：Potable water for turkey carcass chilling
- 流属性/单位：Mass / kg
- 数量规则：计量代表批次或生产周期的质量，或依据同一水流的密度和温度记录将体积换算为质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 设施门口净合格鲜或冷藏火鸡肉，不含包装质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chilling_refrigeration`
- 来源：`ec-jrc-sa-bref-jrc135916`；`eu-pef-2021-2279`

###### 胴体冷却用冰（`chilling_ice_input`）

本产品投入卡仅记录“火鸡胴体冷却与冷藏”边界上的 Ice for turkey carcass chilling。其数量依据该具名交换的前景规则取得。

- 选定流：Ice for turkey carcass chilling
- 流属性/单位：Mass / kg
- 数量规则：依据代表批次或生产周期的校准秤、储罐、领用、转序、发运、实验室或废物记录计量该具名交换的质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 设施门口净合格鲜或冷藏火鸡肉，不含包装质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chilling_refrigeration`
- 来源：`ec-jrc-sa-bref-jrc135916`；`eu-pef-2021-2279`

###### 冷却冷藏电力（`chilling_electricity_input`）

本产品投入卡仅记录“火鸡胴体冷却与冷藏”边界上的 Grid electricity for turkey chilling cold storage。其数量依据该具名交换的前景规则取得。

- 选定流：Grid electricity for turkey chilling cold storage
- 流属性/单位：Energy / kWh
- 数量规则：计量代表期内该具名能源载体的数量，采用有记录的因果驱动因素分配，且不得合并载体
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 设施门口净合格鲜或冷藏火鸡肉，不含包装质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chilling_refrigeration`
- 来源：`ec-jrc-sa-bref-jrc135916`；`eu-pef-2021-2279`

###### R-717 制冷剂补充（`chilling_r717_makeup_input`）

本产品投入卡仅记录“火鸡胴体冷却与冷藏”边界上的 Ammonia refrigerant R-717 make-up。其数量依据该具名交换的前景规则取得。

- 选定流：Ammonia refrigerant R-717 make-up
- 流属性/单位：Mass / kg
- 数量规则：计量该具名物质的领用或投加质量，并修正退料及有记录的回用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 设施门口净合格鲜或冷藏火鸡肉，不含包装质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chilling_refrigeration`
- 来源：`ec-jrc-sa-bref-jrc135916`；`eu-pef-2021-2279`

###### R-134a 制冷剂补充（`chilling_r134a_makeup_input`）

本产品投入卡仅记录“火鸡胴体冷却与冷藏”边界上的 Tetrafluoroethane refrigerant R-134a make-up。其数量依据该具名交换的前景规则取得。

- 选定流：Tetrafluoroethane refrigerant R-134a make-up
- 流属性/单位：Mass / kg
- 数量规则：计量该具名物质的领用或投加质量，并修正退料及有记录的回用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 设施门口净合格鲜或冷藏火鸡肉，不含包装质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chilling_refrigeration`
- 来源：`ec-jrc-sa-bref-jrc135916`；`eu-pef-2021-2279`

###### R-744 制冷剂补充（`chilling_r744_makeup_input`）

本产品投入卡仅记录“火鸡胴体冷却与冷藏”边界上的 Carbon dioxide refrigerant R-744 make-up。其数量依据该具名交换的前景规则取得。

- 选定流：Carbon dioxide refrigerant R-744 make-up
- 流属性/单位：Mass / kg
- 数量规则：计量该具名物质的领用或投加质量，并修正退料及有记录的回用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 设施门口净合格鲜或冷藏火鸡肉，不含包装质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chilling_refrigeration`
- 来源：`ec-jrc-sa-bref-jrc135916`；`eu-pef-2021-2279`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 冷藏整只火鸡胴体（`chilled_whole_turkey_carcass_output`）

本产品产出卡仅记录“火鸡胴体冷却与冷藏”边界上的 Chilled whole turkey carcasses。其数量依据该具名交换的前景规则取得。

- 选定流：Chilled whole turkey carcasses
- 流属性/单位：Mass / kg
- 数量规则：依据校准秤、容器、转序记录或批次物料平衡计量或核算该具名产出的质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 设施门口净合格鲜或冷藏火鸡肉，不含包装质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chilling_refrigeration`
- 来源：`ec-jrc-sa-bref-jrc135916`；`eu-pef-2021-2279`

##### 废物流

###### 胴体冷却溢流废水（`chilling_overflow_wastewater_output`）

本废物产出卡仅记录“火鸡胴体冷却与冷藏”边界上的 Turkey carcass chilling overflow wastewater。其数量依据该具名交换的前景规则取得。

- 选定流：Turkey carcass chilling overflow wastewater
- 流属性/单位：Mass / kg
- 数量规则：计量或通过物料平衡核算该具名废物的数量，并保留处理去向和批次身份
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 设施门口净合格鲜或冷藏火鸡肉，不含包装质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chilling_refrigeration`
- 来源：`ec-jrc-sa-bref-jrc135916`；`eu-pef-2021-2279`

###### 废制冷压缩机油（`refrigeration_compressor_oil_waste_output`）

本废物产出卡仅记录“火鸡胴体冷却与冷藏”边界上的 Waste refrigeration compressor oil from turkey chilling。其数量依据该具名交换的前景规则取得。

- 选定流：Waste refrigeration compressor oil from turkey chilling
- 流属性/单位：Mass / kg
- 数量规则：计量或通过物料平衡核算该具名废物的数量，并保留处理去向和批次身份
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 设施门口净合格鲜或冷藏火鸡肉，不含包装质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chilling_refrigeration`
- 来源：`ec-jrc-sa-bref-jrc135916`；`eu-pef-2021-2279`

##### 基本流

###### R-717 空气排放（`chilling_r717_to_air_output`）

本基本产出卡仅记录“火鸡胴体冷却与冷藏”边界上的 Ammonia R-717, to air from turkey chilling。其数量依据该具名交换的前景规则取得。

- 选定流：Ammonia R-717, to air from turkey chilling
- 流属性/单位：Mass / kg
- 数量规则：按每条制冷回路，以期初充注量加补充量减回收量、期末充注量和有记录的转移量，计算该制冷剂身份的排放
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 设施门口净合格鲜或冷藏火鸡肉，不含包装质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_chilling_refrigeration`
- 来源：`ec-jrc-sa-bref-jrc135916`；`eu-pef-2021-2279`

###### R-134a 空气排放（`chilling_r134a_to_air_output`）

本基本产出卡仅记录“火鸡胴体冷却与冷藏”边界上的 Tetrafluoroethane R-134a, to air from turkey chilling。其数量依据该具名交换的前景规则取得。

- 选定流：Tetrafluoroethane R-134a, to air from turkey chilling
- 流属性/单位：Mass / kg
- 数量规则：按每条制冷回路，以期初充注量加补充量减回收量、期末充注量和有记录的转移量，计算该制冷剂身份的排放
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 设施门口净合格鲜或冷藏火鸡肉，不含包装质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_chilling_refrigeration`
- 来源：`ec-jrc-sa-bref-jrc135916`；`eu-pef-2021-2279`

###### R-744 化石二氧化碳排放（`chilling_r744_fossil_co2_to_air_output`）

本基本产出卡仅记录“火鸡胴体冷却与冷藏”边界上的 Carbon dioxide, fossil, to air from R-744 turkey refrigeration。其数量依据该具名交换的前景规则取得。

- 选定流：Carbon dioxide, fossil, to air from R-744 turkey refrigeration
- 流属性/单位：Mass / kg
- 数量规则：按每条制冷回路，以期初充注量加补充量减回收量、期末充注量和有记录的转移量，计算该制冷剂身份的排放
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 设施门口净合格鲜或冷藏火鸡肉，不含包装质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_chilling_refrigeration`
- 来源：`ec-jrc-sa-bref-jrc135916`；`eu-pef-2021-2279`

###### R-744 生物源二氧化碳排放（`chilling_r744_biogenic_co2_to_air_output`）

本基本产出卡仅记录“火鸡胴体冷却与冷藏”边界上的 Carbon dioxide, biogenic, to air from R-744 turkey refrigeration。其数量依据该具名交换的前景规则取得。

- 选定流：Carbon dioxide, biogenic, to air from R-744 turkey refrigeration
- 流属性/单位：Mass / kg
- 数量规则：按每条制冷回路，以期初充注量加补充量减回收量、期末充注量和有记录的转移量，计算该制冷剂身份的排放
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 设施门口净合格鲜或冷藏火鸡肉，不含包装质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_chilling_refrigeration`
- 来源：`ec-jrc-sa-bref-jrc135916`；`eu-pef-2021-2279`

### 过程：火鸡分割与分装（`cutting_and_portioning`）

#### 输入

##### 产品流

###### 冷藏整只胴体分割投入（`chilled_whole_turkey_cutting_input`）

本产品投入卡仅记录“火鸡分割与分装”边界上的 Chilled whole turkey carcasses。其数量依据该具名交换的前景规则取得。

- 选定流：Chilled whole turkey carcasses
- 流属性/单位：Mass / kg
- 数量规则：依据代表批次或生产周期的校准秤、储罐、领用、转序、发运、实验室或废物记录计量该具名交换的质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 设施门口净合格鲜或冷藏火鸡肉，不含包装质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cutting_portioning`
- 来源：`ec-jrc-sa-bref-jrc135916`；`eu-pef-2021-2279`

###### 火鸡分割工艺水（`cutting_process_water_input`）

本产品投入卡仅记录“火鸡分割与分装”边界上的 Potable process water for turkey cutting。其数量依据该具名交换的前景规则取得。

- 选定流：Potable process water for turkey cutting
- 流属性/单位：Mass / kg
- 数量规则：计量代表批次或生产周期的质量，或依据同一水流的密度和温度记录将体积换算为质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 设施门口净合格鲜或冷藏火鸡肉，不含包装质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cutting_portioning`
- 来源：`ec-jrc-sa-bref-jrc135916`；`eu-pef-2021-2279`

###### 火鸡分割电力（`cutting_electricity_input`）

本产品投入卡仅记录“火鸡分割与分装”边界上的 Grid electricity for turkey cutting。其数量依据该具名交换的前景规则取得。

- 选定流：Grid electricity for turkey cutting
- 流属性/单位：Energy / kWh
- 数量规则：计量代表期内该具名能源载体的数量，采用有记录的因果驱动因素分配，且不得合并载体
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 设施门口净合格鲜或冷藏火鸡肉，不含包装质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cutting_portioning`
- 来源：`ec-jrc-sa-bref-jrc135916`；`eu-pef-2021-2279`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 冷藏火鸡胸肉（`chilled_turkey_breast_output`）

本产品产出卡仅记录“火鸡分割与分装”边界上的 Chilled turkey breast meat。其数量依据该具名交换的前景规则取得。

- 选定流：Chilled turkey breast meat
- 流属性/单位：Mass / kg
- 数量规则：依据校准秤、容器、转序记录或批次物料平衡计量或核算该具名产出的质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 设施门口净合格鲜或冷藏火鸡肉，不含包装质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cutting_portioning`
- 来源：`ec-jrc-sa-bref-jrc135916`；`eu-pef-2021-2279`

###### 冷藏火鸡大腿肉（`chilled_turkey_thigh_output`）

本产品产出卡仅记录“火鸡分割与分装”边界上的 Chilled turkey thigh meat。其数量依据该具名交换的前景规则取得。

- 选定流：Chilled turkey thigh meat
- 流属性/单位：Mass / kg
- 数量规则：依据校准秤、容器、转序记录或批次物料平衡计量或核算该具名产出的质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 设施门口净合格鲜或冷藏火鸡肉，不含包装质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cutting_portioning`
- 来源：`ec-jrc-sa-bref-jrc135916`；`eu-pef-2021-2279`

###### 冷藏火鸡小腿肉（`chilled_turkey_drumstick_output`）

本产品产出卡仅记录“火鸡分割与分装”边界上的 Chilled turkey drumstick meat。其数量依据该具名交换的前景规则取得。

- 选定流：Chilled turkey drumstick meat
- 流属性/单位：Mass / kg
- 数量规则：依据校准秤、容器、转序记录或批次物料平衡计量或核算该具名产出的质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 设施门口净合格鲜或冷藏火鸡肉，不含包装质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cutting_portioning`
- 来源：`ec-jrc-sa-bref-jrc135916`；`eu-pef-2021-2279`

###### 冷藏火鸡翅肉（`chilled_turkey_wing_output`）

本产品产出卡仅记录“火鸡分割与分装”边界上的 Chilled turkey wing meat。其数量依据该具名交换的前景规则取得。

- 选定流：Chilled turkey wing meat
- 流属性/单位：Mass / kg
- 数量规则：依据校准秤、容器、转序记录或批次物料平衡计量或核算该具名产出的质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 设施门口净合格鲜或冷藏火鸡肉，不含包装质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cutting_portioning`
- 来源：`ec-jrc-sa-bref-jrc135916`；`eu-pef-2021-2279`

###### 食用冷藏火鸡肉边料（`chilled_turkey_meat_trimmings_output`）

本产品产出卡仅记录“火鸡分割与分装”边界上的 Chilled turkey meat trimmings for food use。其数量依据该具名交换的前景规则取得。

- 选定流：Chilled turkey meat trimmings for food use
- 流属性/单位：Mass / kg
- 数量规则：依据校准秤、容器、转序记录或批次物料平衡计量或核算该具名产出的质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 设施门口净合格鲜或冷藏火鸡肉，不含包装质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cutting_portioning`
- 来源：`ec-jrc-sa-bref-jrc135916`；`eu-pef-2021-2279`

###### 分割回收火鸡脂（`recovered_turkey_fat_cutting_output`）

本产品产出卡仅记录“火鸡分割与分装”边界上的 Separated turkey fat from cutting。其数量依据该具名交换的前景规则取得。

- 选定流：Separated turkey fat from cutting
- 流属性/单位：Mass / kg
- 数量规则：依据校准秤、容器、转序记录或批次物料平衡计量或核算该具名产出的质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 设施门口净合格鲜或冷藏火鸡肉，不含包装质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cutting_portioning`
- 来源：`ec-jrc-sa-bref-jrc135916`；`eu-pef-2021-2279`

###### 回收火鸡骨（`recovered_turkey_bones_output`）

本产品产出卡仅记录“火鸡分割与分装”边界上的 Turkey bones for animal-by-product processing。其数量依据该具名交换的前景规则取得。

- 选定流：Turkey bones for animal-by-product processing
- 流属性/单位：Mass / kg
- 数量规则：依据校准秤、容器、转序记录或批次物料平衡计量或核算该具名产出的质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 设施门口净合格鲜或冷藏火鸡肉，不含包装质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cutting_portioning`
- 来源：`ec-jrc-sa-bref-jrc135916`；`eu-pef-2021-2279`

###### 分割回收火鸡皮（`recovered_turkey_skin_cutting_output`）

本产品产出卡仅记录“火鸡分割与分装”边界上的 Turkey skin for animal-by-product processing。其数量依据该具名交换的前景规则取得。

- 选定流：Turkey skin for animal-by-product processing
- 流属性/单位：Mass / kg
- 数量规则：依据校准秤、容器、转序记录或批次物料平衡计量或核算该具名产出的质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 设施门口净合格鲜或冷藏火鸡肉，不含包装质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cutting_portioning`
- 来源：`ec-jrc-sa-bref-jrc135916`；`eu-pef-2021-2279`

##### 废物流

###### 分割判废火鸡肉（`condemned_turkey_meat_cutting_waste_output`）

本废物产出卡仅记录“火鸡分割与分装”边界上的 Condemned turkey meat from cutting。其数量依据该具名交换的前景规则取得。

- 选定流：Condemned turkey meat from cutting
- 流属性/单位：Mass / kg
- 数量规则：计量或通过物料平衡核算该具名废物的数量，并保留处理去向和批次身份
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 设施门口净合格鲜或冷藏火鸡肉，不含包装质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cutting_portioning`
- 来源：`ec-jrc-sa-bref-jrc135916`；`eu-pef-2021-2279`

###### 火鸡分割冲洗废水（`cutting_wash_wastewater_output`）

本废物产出卡仅记录“火鸡分割与分装”边界上的 Turkey cutting wash wastewater。其数量依据该具名交换的前景规则取得。

- 选定流：Turkey cutting wash wastewater
- 流属性/单位：Mass / kg
- 数量规则：计量或通过物料平衡核算该具名废物的数量，并保留处理去向和批次身份
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 设施门口净合格鲜或冷藏火鸡肉，不含包装质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cutting_portioning`
- 来源：`ec-jrc-sa-bref-jrc135916`；`eu-pef-2021-2279`

##### 基本流

### 过程：包装与设施门口放行（`packaging_and_release`）

#### 输入

##### 产品流

###### 冷藏整只胴体包装投入（`chilled_whole_turkey_packaging_input`）

本产品投入卡仅记录“包装与设施门口放行”边界上的 Chilled whole turkey carcasses。其数量依据该具名交换的前景规则取得。

- 选定流：Chilled whole turkey carcasses
- 流属性/单位：Mass / kg
- 数量规则：依据代表批次或生产周期的校准秤、储罐、领用、转序、发运、实验室或废物记录计量该具名交换的质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 设施门口净合格鲜或冷藏火鸡肉，不含包装质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_release`
- 来源：`ec-jrc-sa-bref-jrc135916`；`eu-pef-2021-2279`

###### 冷藏火鸡胸肉包装投入（`chilled_turkey_breast_packaging_input`）

本产品投入卡仅记录“包装与设施门口放行”边界上的 Chilled turkey breast meat。其数量依据该具名交换的前景规则取得。

- 选定流：Chilled turkey breast meat
- 流属性/单位：Mass / kg
- 数量规则：依据代表批次或生产周期的校准秤、储罐、领用、转序、发运、实验室或废物记录计量该具名交换的质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 设施门口净合格鲜或冷藏火鸡肉，不含包装质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_release`
- 来源：`ec-jrc-sa-bref-jrc135916`；`eu-pef-2021-2279`

###### 冷藏火鸡大腿肉包装投入（`chilled_turkey_thigh_packaging_input`）

本产品投入卡仅记录“包装与设施门口放行”边界上的 Chilled turkey thigh meat。其数量依据该具名交换的前景规则取得。

- 选定流：Chilled turkey thigh meat
- 流属性/单位：Mass / kg
- 数量规则：依据代表批次或生产周期的校准秤、储罐、领用、转序、发运、实验室或废物记录计量该具名交换的质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 设施门口净合格鲜或冷藏火鸡肉，不含包装质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_release`
- 来源：`ec-jrc-sa-bref-jrc135916`；`eu-pef-2021-2279`

###### 冷藏火鸡小腿肉包装投入（`chilled_turkey_drumstick_packaging_input`）

本产品投入卡仅记录“包装与设施门口放行”边界上的 Chilled turkey drumstick meat。其数量依据该具名交换的前景规则取得。

- 选定流：Chilled turkey drumstick meat
- 流属性/单位：Mass / kg
- 数量规则：依据代表批次或生产周期的校准秤、储罐、领用、转序、发运、实验室或废物记录计量该具名交换的质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 设施门口净合格鲜或冷藏火鸡肉，不含包装质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_release`
- 来源：`ec-jrc-sa-bref-jrc135916`；`eu-pef-2021-2279`

###### 冷藏火鸡翅肉包装投入（`chilled_turkey_wing_packaging_input`）

本产品投入卡仅记录“包装与设施门口放行”边界上的 Chilled turkey wing meat。其数量依据该具名交换的前景规则取得。

- 选定流：Chilled turkey wing meat
- 流属性/单位：Mass / kg
- 数量规则：依据代表批次或生产周期的校准秤、储罐、领用、转序、发运、实验室或废物记录计量该具名交换的质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 设施门口净合格鲜或冷藏火鸡肉，不含包装质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_release`
- 来源：`ec-jrc-sa-bref-jrc135916`；`eu-pef-2021-2279`

###### 冷藏食用火鸡肉边料包装投入（`chilled_turkey_trimmings_packaging_input`）

本产品投入卡仅记录“包装与设施门口放行”边界上的 Chilled turkey meat trimmings for food use。其数量依据该具名交换的前景规则取得。

- 选定流：Chilled turkey meat trimmings for food use
- 流属性/单位：Mass / kg
- 数量规则：依据代表批次或生产周期的校准秤、储罐、领用、转序、发运、实验室或废物记录计量该具名交换的质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 设施门口净合格鲜或冷藏火鸡肉，不含包装质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_release`
- 来源：`ec-jrc-sa-bref-jrc135916`；`eu-pef-2021-2279`

###### 火鸡肉包装电力（`packaging_electricity_input`）

本产品投入卡仅记录“包装与设施门口放行”边界上的 Grid electricity for turkey meat packaging。其数量依据该具名交换的前景规则取得。

- 选定流：Grid electricity for turkey meat packaging
- 流属性/单位：Energy / kWh
- 数量规则：计量代表期内该具名能源载体的数量，采用有记录的因果驱动因素分配，且不得合并载体
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 设施门口净合格鲜或冷藏火鸡肉，不含包装质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_release`
- 来源：`ec-jrc-sa-bref-jrc135916`；`eu-pef-2021-2279`

###### 线性低密度聚乙烯收缩膜（`packaging_lldpe_shrink_film_input`）

本产品投入卡仅记录“包装与设施门口放行”边界上的 Linear low-density polyethylene shrink film。其数量依据该具名交换的前景规则取得。

- 选定流：Linear low-density polyethylene shrink film
- 流属性/单位：Mass / kg
- 数量规则：依据代表批次或生产周期的校准秤、储罐、领用、转序、发运、实验室或废物记录计量该具名交换的质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 设施门口净合格鲜或冷藏火鸡肉，不含包装质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_release`
- 来源：`ec-jrc-sa-bref-jrc135916`；`eu-pef-2021-2279`

###### 聚酰胺膜（`packaging_polyamide_film_input`）

本产品投入卡仅记录“包装与设施门口放行”边界上的 Polyamide film for turkey meat packaging。其数量依据该具名交换的前景规则取得。

- 选定流：Polyamide film for turkey meat packaging
- 流属性/单位：Mass / kg
- 数量规则：依据代表批次或生产周期的校准秤、储罐、领用、转序、发运、实验室或废物记录计量该具名交换的质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 设施门口净合格鲜或冷藏火鸡肉，不含包装质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_release`
- 来源：`ec-jrc-sa-bref-jrc135916`；`eu-pef-2021-2279`

###### 聚对苯二甲酸乙二醇酯托盘（`packaging_pet_tray_input`）

本产品投入卡仅记录“包装与设施门口放行”边界上的 Polyethylene terephthalate tray for turkey meat packaging。其数量依据该具名交换的前景规则取得。

- 选定流：Polyethylene terephthalate tray for turkey meat packaging
- 流属性/单位：Mass / kg
- 数量规则：依据代表批次或生产周期的校准秤、储罐、领用、转序、发运、实验室或废物记录计量该具名交换的质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 设施门口净合格鲜或冷藏火鸡肉，不含包装质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_release`
- 来源：`ec-jrc-sa-bref-jrc135916`；`eu-pef-2021-2279`

###### 发泡聚苯乙烯托盘（`packaging_eps_tray_input`）

本产品投入卡仅记录“包装与设施门口放行”边界上的 Expanded polystyrene tray for turkey meat packaging。其数量依据该具名交换的前景规则取得。

- 选定流：Expanded polystyrene tray for turkey meat packaging
- 流属性/单位：Mass / kg
- 数量规则：依据代表批次或生产周期的校准秤、储罐、领用、转序、发运、实验室或废物记录计量该具名交换的质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 设施门口净合格鲜或冷藏火鸡肉，不含包装质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_release`
- 来源：`ec-jrc-sa-bref-jrc135916`；`eu-pef-2021-2279`

###### 纤维素吸液垫（`packaging_cellulose_absorbent_pad_input`）

本产品投入卡仅记录“包装与设施门口放行”边界上的 Cellulose absorbent pad for turkey meat packaging。其数量依据该具名交换的前景规则取得。

- 选定流：Cellulose absorbent pad for turkey meat packaging
- 流属性/单位：Mass / kg
- 数量规则：依据代表批次或生产周期的校准秤、储罐、领用、转序、发运、实验室或废物记录计量该具名交换的质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 设施门口净合格鲜或冷藏火鸡肉，不含包装质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_release`
- 来源：`ec-jrc-sa-bref-jrc135916`；`eu-pef-2021-2279`

###### 纸标签（`packaging_paper_label_input`）

本产品投入卡仅记录“包装与设施门口放行”边界上的 Paper label for turkey meat packaging。其数量依据该具名交换的前景规则取得。

- 选定流：Paper label for turkey meat packaging
- 流属性/单位：Mass / kg
- 数量规则：依据代表批次或生产周期的校准秤、储罐、领用、转序、发运、实验室或废物记录计量该具名交换的质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 设施门口净合格鲜或冷藏火鸡肉，不含包装质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_release`
- 来源：`ec-jrc-sa-bref-jrc135916`；`eu-pef-2021-2279`

###### 瓦楞纸板运输箱（`packaging_corrugated_case_input`）

本产品投入卡仅记录“包装与设施门口放行”边界上的 Corrugated paperboard case for turkey meat transport。其数量依据该具名交换的前景规则取得。

- 选定流：Corrugated paperboard case for turkey meat transport
- 流属性/单位：Mass / kg
- 数量规则：依据代表批次或生产周期的校准秤、储罐、领用、转序、发运、实验室或废物记录计量该具名交换的质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 设施门口净合格鲜或冷藏火鸡肉，不含包装质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_release`
- 来源：`ec-jrc-sa-bref-jrc135916`；`eu-pef-2021-2279`

###### 聚丙烯打包带（`packaging_pp_strapping_input`）

本产品投入卡仅记录“包装与设施门口放行”边界上的 Polypropylene strapping for turkey meat transport。其数量依据该具名交换的前景规则取得。

- 选定流：Polypropylene strapping for turkey meat transport
- 流属性/单位：Mass / kg
- 数量规则：依据代表批次或生产周期的校准秤、储罐、领用、转序、发运、实验室或废物记录计量该具名交换的质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 设施门口净合格鲜或冷藏火鸡肉，不含包装质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_release`
- 来源：`ec-jrc-sa-bref-jrc135916`；`eu-pef-2021-2279`

###### 高密度聚乙烯运输箱（`packaging_hdpe_crate_input`）

本产品投入卡仅记录“包装与设施门口放行”边界上的 High-density polyethylene crate for turkey meat transport。其数量依据该具名交换的前景规则取得。

- 选定流：High-density polyethylene crate for turkey meat transport
- 流属性/单位：Mass / kg
- 数量规则：依据代表批次或生产周期的校准秤、储罐、领用、转序、发运、实验室或废物记录计量该具名交换的质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 设施门口净合格鲜或冷藏火鸡肉，不含包装质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_release`
- 来源：`ec-jrc-sa-bref-jrc135916`；`eu-pef-2021-2279`

###### 木托盘（`packaging_wooden_pallet_input`）

本产品投入卡仅记录“包装与设施门口放行”边界上的 Wooden pallet for turkey meat transport。其数量依据该具名交换的前景规则取得。

- 选定流：Wooden pallet for turkey meat transport
- 流属性/单位：Mass / kg
- 数量规则：依据代表批次或生产周期的校准秤、储罐、领用、转序、发运、实验室或废物记录计量该具名交换的质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 设施门口净合格鲜或冷藏火鸡肉，不含包装质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_release`
- 来源：`ec-jrc-sa-bref-jrc135916`；`eu-pef-2021-2279`

###### 包装气调二氧化碳（`packaging_co2_gas_input`）

本产品投入卡仅记录“包装与设施门口放行”边界上的 Carbon dioxide gas for turkey meat atmosphere packaging。其数量依据该具名交换的前景规则取得。

- 选定流：Carbon dioxide gas for turkey meat atmosphere packaging
- 流属性/单位：Mass / kg
- 数量规则：计量该具名物质的领用或投加质量，并修正退料及有记录的回用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 设施门口净合格鲜或冷藏火鸡肉，不含包装质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_release`
- 来源：`ec-jrc-sa-bref-jrc135916`；`eu-pef-2021-2279`

###### 包装气调氮气（`packaging_nitrogen_gas_input`）

本产品投入卡仅记录“包装与设施门口放行”边界上的 Nitrogen gas for turkey meat atmosphere packaging。其数量依据该具名交换的前景规则取得。

- 选定流：Nitrogen gas for turkey meat atmosphere packaging
- 流属性/单位：Mass / kg
- 数量规则：计量该具名物质的领用或投加质量，并修正退料及有记录的回用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 设施门口净合格鲜或冷藏火鸡肉，不含包装质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_release`
- 来源：`ec-jrc-sa-bref-jrc135916`；`eu-pef-2021-2279`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 参考火鸡肉（`reference_product_output`）

该已核验产品产出是定量参考：设施门口鲜或冷藏状态的净合格火鸡肉 1 kg。冷冻火鸡肉、可食火鸡杂碎和包装质量均不计入。

- 选定流：Meat of turkeys, fresh or chilled `653bdb6e-5456-4a7d-88d3-8493b1f27bc7`
- 流属性/单位：Mass / kg
- 数量规则：设施门口净合格产品恰为 1 kg；不计包装质量
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 设施门口净合格鲜或冷藏火鸡肉，不含包装质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：来源规则（`source_rule`）
- 来源：`unsd-cpc-3-21124`；`eu-pef-2021-2279`

##### 废物流

###### 包装不合格火鸡肉（`offspec_packaged_turkey_meat_waste_output`）

本废物产出卡仅记录“包装与设施门口放行”边界上的 Off-spec packaged turkey meat sent to waste treatment。其数量依据该具名交换的前景规则取得。

- 选定流：Off-spec packaged turkey meat sent to waste treatment
- 流属性/单位：Mass / kg
- 数量规则：计量或通过物料平衡核算该具名废物的数量，并保留处理去向和批次身份
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 设施门口净合格鲜或冷藏火鸡肉，不含包装质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_release`
- 来源：`ec-jrc-sa-bref-jrc135916`；`eu-pef-2021-2279`

###### 废线性低密度聚乙烯收缩膜（`waste_packaging_lldpe_shrink_film_output`）

本废物产出卡仅记录“包装与设施门口放行”边界上的 Waste linear low-density polyethylene shrink film。其数量依据该具名交换的前景规则取得。

- 选定流：Waste linear low-density polyethylene shrink film
- 流属性/单位：Mass / kg
- 数量规则：计量或通过物料平衡核算该具名废物的数量，并保留处理去向和批次身份
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 设施门口净合格鲜或冷藏火鸡肉，不含包装质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_release`
- 来源：`ec-jrc-sa-bref-jrc135916`；`eu-pef-2021-2279`

###### 废聚酰胺膜（`waste_packaging_polyamide_film_output`）

本废物产出卡仅记录“包装与设施门口放行”边界上的 Waste polyamide film for turkey meat packaging。其数量依据该具名交换的前景规则取得。

- 选定流：Waste polyamide film for turkey meat packaging
- 流属性/单位：Mass / kg
- 数量规则：计量或通过物料平衡核算该具名废物的数量，并保留处理去向和批次身份
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 设施门口净合格鲜或冷藏火鸡肉，不含包装质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_release`
- 来源：`ec-jrc-sa-bref-jrc135916`；`eu-pef-2021-2279`

###### 废聚对苯二甲酸乙二醇酯托盘（`waste_packaging_pet_tray_output`）

本废物产出卡仅记录“包装与设施门口放行”边界上的 Waste polyethylene terephthalate tray for turkey meat packaging。其数量依据该具名交换的前景规则取得。

- 选定流：Waste polyethylene terephthalate tray for turkey meat packaging
- 流属性/单位：Mass / kg
- 数量规则：计量或通过物料平衡核算该具名废物的数量，并保留处理去向和批次身份
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 设施门口净合格鲜或冷藏火鸡肉，不含包装质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_release`
- 来源：`ec-jrc-sa-bref-jrc135916`；`eu-pef-2021-2279`

###### 废发泡聚苯乙烯托盘（`waste_packaging_eps_tray_output`）

本废物产出卡仅记录“包装与设施门口放行”边界上的 Waste expanded polystyrene tray for turkey meat packaging。其数量依据该具名交换的前景规则取得。

- 选定流：Waste expanded polystyrene tray for turkey meat packaging
- 流属性/单位：Mass / kg
- 数量规则：计量或通过物料平衡核算该具名废物的数量，并保留处理去向和批次身份
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 设施门口净合格鲜或冷藏火鸡肉，不含包装质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_release`
- 来源：`ec-jrc-sa-bref-jrc135916`；`eu-pef-2021-2279`

###### 废纤维素吸液垫（`waste_packaging_cellulose_absorbent_pad_output`）

本废物产出卡仅记录“包装与设施门口放行”边界上的 Waste cellulose absorbent pad for turkey meat packaging。其数量依据该具名交换的前景规则取得。

- 选定流：Waste cellulose absorbent pad for turkey meat packaging
- 流属性/单位：Mass / kg
- 数量规则：计量或通过物料平衡核算该具名废物的数量，并保留处理去向和批次身份
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 设施门口净合格鲜或冷藏火鸡肉，不含包装质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_release`
- 来源：`ec-jrc-sa-bref-jrc135916`；`eu-pef-2021-2279`

###### 废纸标签（`waste_packaging_paper_label_output`）

本废物产出卡仅记录“包装与设施门口放行”边界上的 Waste paper label for turkey meat packaging。其数量依据该具名交换的前景规则取得。

- 选定流：Waste paper label for turkey meat packaging
- 流属性/单位：Mass / kg
- 数量规则：计量或通过物料平衡核算该具名废物的数量，并保留处理去向和批次身份
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 设施门口净合格鲜或冷藏火鸡肉，不含包装质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_release`
- 来源：`ec-jrc-sa-bref-jrc135916`；`eu-pef-2021-2279`

###### 废瓦楞纸板运输箱（`waste_packaging_corrugated_case_output`）

本废物产出卡仅记录“包装与设施门口放行”边界上的 Waste corrugated paperboard case for turkey meat transport。其数量依据该具名交换的前景规则取得。

- 选定流：Waste corrugated paperboard case for turkey meat transport
- 流属性/单位：Mass / kg
- 数量规则：计量或通过物料平衡核算该具名废物的数量，并保留处理去向和批次身份
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 设施门口净合格鲜或冷藏火鸡肉，不含包装质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_release`
- 来源：`ec-jrc-sa-bref-jrc135916`；`eu-pef-2021-2279`

###### 废聚丙烯打包带（`waste_packaging_pp_strapping_output`）

本废物产出卡仅记录“包装与设施门口放行”边界上的 Waste polypropylene strapping for turkey meat transport。其数量依据该具名交换的前景规则取得。

- 选定流：Waste polypropylene strapping for turkey meat transport
- 流属性/单位：Mass / kg
- 数量规则：计量或通过物料平衡核算该具名废物的数量，并保留处理去向和批次身份
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 设施门口净合格鲜或冷藏火鸡肉，不含包装质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_release`
- 来源：`ec-jrc-sa-bref-jrc135916`；`eu-pef-2021-2279`

###### 废高密度聚乙烯运输箱（`waste_packaging_hdpe_crate_output`）

本废物产出卡仅记录“包装与设施门口放行”边界上的 Waste high-density polyethylene crate for turkey meat transport。其数量依据该具名交换的前景规则取得。

- 选定流：Waste high-density polyethylene crate for turkey meat transport
- 流属性/单位：Mass / kg
- 数量规则：计量或通过物料平衡核算该具名废物的数量，并保留处理去向和批次身份
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 设施门口净合格鲜或冷藏火鸡肉，不含包装质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_release`
- 来源：`ec-jrc-sa-bref-jrc135916`；`eu-pef-2021-2279`

###### 废木托盘（`waste_packaging_wooden_pallet_output`）

本废物产出卡仅记录“包装与设施门口放行”边界上的 Waste wooden pallet for turkey meat transport。其数量依据该具名交换的前景规则取得。

- 选定流：Waste wooden pallet for turkey meat transport
- 流属性/单位：Mass / kg
- 数量规则：计量或通过物料平衡核算该具名废物的数量，并保留处理去向和批次身份
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 设施门口净合格鲜或冷藏火鸡肉，不含包装质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_release`
- 来源：`ec-jrc-sa-bref-jrc135916`；`eu-pef-2021-2279`

##### 基本流

###### 包装吹扫化石二氧化碳（`packaging_fossil_co2_to_air_output`）

本基本产出卡仅记录“包装与设施门口放行”边界上的 Carbon dioxide, fossil, to air from turkey packaging gas purge。其数量依据该具名交换的前景规则取得。

- 选定流：Carbon dioxide, fossil, to air from turkey packaging gas purge
- 流属性/单位：Mass / kg
- 数量规则：依据采集的燃料、气体或过程记录以及有记录的适用因子或质量平衡，单独计算该具名基本物质；不得把 BREF 性能值作为清单因子
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 设施门口净合格鲜或冷藏火鸡肉，不含包装质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_release`
- 来源：`ec-jrc-sa-bref-jrc135916`；`eu-pef-2021-2279`

###### 包装吹扫氮气排放（`packaging_nitrogen_to_air_output`）

本基本产出卡仅记录“包装与设施门口放行”边界上的 Nitrogen, to air from turkey packaging gas purge。其数量依据该具名交换的前景规则取得。

- 选定流：Nitrogen, to air from turkey packaging gas purge
- 流属性/单位：Mass / kg
- 数量规则：依据采集的燃料、气体或过程记录以及有记录的适用因子或质量平衡，单独计算该具名基本物质；不得把 BREF 性能值作为清单因子
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 设施门口净合格鲜或冷藏火鸡肉，不含包装质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_release`
- 来源：`ec-jrc-sa-bref-jrc135916`；`eu-pef-2021-2279`

### 过程：清洗与消毒（`cleaning_and_disinfection`）

#### 输入

##### 产品流

###### 卫生工艺水（`sanitation_process_water_input`）

本产品投入卡仅记录“清洗与消毒”边界上的 Potable process water for turkey plant sanitation。其数量依据该具名交换的前景规则取得。

- 选定流：Potable process water for turkey plant sanitation
- 流属性/单位：Mass / kg
- 数量规则：计量代表批次或生产周期的质量，或依据同一水流的密度和温度记录将体积换算为质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 设施门口净合格鲜或冷藏火鸡肉，不含包装质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_disinfection`
- 来源：`ec-jrc-sa-bref-jrc135916`；`eu-pef-2021-2279`

###### 卫生电力（`sanitation_electricity_input`）

本产品投入卡仅记录“清洗与消毒”边界上的 Grid electricity for turkey plant sanitation。其数量依据该具名交换的前景规则取得。

- 选定流：Grid electricity for turkey plant sanitation
- 流属性/单位：Energy / kWh
- 数量规则：计量代表期内该具名能源载体的数量，采用有记录的因果驱动因素分配，且不得合并载体
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 设施门口净合格鲜或冷藏火鸡肉，不含包装质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_disinfection`
- 来源：`ec-jrc-sa-bref-jrc135916`；`eu-pef-2021-2279`

###### 卫生外购蒸汽（`sanitation_purchased_steam_input`）

本产品投入卡仅记录“清洗与消毒”边界上的 Purchased steam for turkey plant sanitation。其数量依据该具名交换的前景规则取得。

- 选定流：Purchased steam for turkey plant sanitation
- 流属性/单位：Energy / MJ
- 数量规则：计量代表期内该具名能源载体的数量，采用有记录的因果驱动因素分配，且不得合并载体
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 设施门口净合格鲜或冷藏火鸡肉，不含包装质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_disinfection`
- 来源：`ec-jrc-sa-bref-jrc135916`；`eu-pef-2021-2279`

###### 卫生外购热水（`sanitation_purchased_hot_water_input`）

本产品投入卡仅记录“清洗与消毒”边界上的 Purchased hot water for turkey plant sanitation。其数量依据该具名交换的前景规则取得。

- 选定流：Purchased hot water for turkey plant sanitation
- 流属性/单位：Energy / MJ
- 数量规则：计量代表期内该具名能源载体的数量，采用有记录的因果驱动因素分配，且不得合并载体
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 设施门口净合格鲜或冷藏火鸡肉，不含包装质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_disinfection`
- 来源：`ec-jrc-sa-bref-jrc135916`；`eu-pef-2021-2279`

###### 卫生天然气（`sanitation_natural_gas_input`）

本产品投入卡仅记录“清洗与消毒”边界上的 Natural gas combusted for turkey plant sanitation。其数量依据该具名交换的前景规则取得。

- 选定流：Natural gas combusted for turkey plant sanitation
- 流属性/单位：Energy / MJ
- 数量规则：计量代表期内该具名能源载体的数量，采用有记录的因果驱动因素分配，且不得合并载体
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 设施门口净合格鲜或冷藏火鸡肉，不含包装质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_disinfection`
- 来源：`ec-jrc-sa-bref-jrc135916`；`eu-pef-2021-2279`

###### 卫生柴油（`sanitation_diesel_input`）

本产品投入卡仅记录“清洗与消毒”边界上的 Diesel combusted for turkey plant sanitation。其数量依据该具名交换的前景规则取得。

- 选定流：Diesel combusted for turkey plant sanitation
- 流属性/单位：Energy / MJ
- 数量规则：计量代表期内该具名能源载体的数量，采用有记录的因果驱动因素分配，且不得合并载体
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 设施门口净合格鲜或冷藏火鸡肉，不含包装质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_disinfection`
- 来源：`ec-jrc-sa-bref-jrc135916`；`eu-pef-2021-2279`

###### 卫生液化石油气（`sanitation_lpg_input`）

本产品投入卡仅记录“清洗与消毒”边界上的 Liquefied petroleum gas combusted for turkey plant sanitation。其数量依据该具名交换的前景规则取得。

- 选定流：Liquefied petroleum gas combusted for turkey plant sanitation
- 流属性/单位：Energy / MJ
- 数量规则：计量代表期内该具名能源载体的数量，采用有记录的因果驱动因素分配，且不得合并载体
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 设施门口净合格鲜或冷藏火鸡肉，不含包装质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_disinfection`
- 来源：`ec-jrc-sa-bref-jrc135916`；`eu-pef-2021-2279`

###### 氢氧化钠溶液（`sanitation_sodium_hydroxide_input`）

本产品投入卡仅记录“清洗与消毒”边界上的 Sodium hydroxide solution for turkey plant cleaning。其数量依据该具名交换的前景规则取得。

- 选定流：Sodium hydroxide solution for turkey plant cleaning
- 流属性/单位：Mass / kg
- 数量规则：计量该具名物质的领用或投加质量，并修正退料及有记录的回用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 设施门口净合格鲜或冷藏火鸡肉，不含包装质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_disinfection`
- 来源：`ec-jrc-sa-bref-jrc135916`；`eu-pef-2021-2279`

###### 硝酸溶液（`sanitation_nitric_acid_input`）

本产品投入卡仅记录“清洗与消毒”边界上的 Nitric acid solution for turkey plant cleaning。其数量依据该具名交换的前景规则取得。

- 选定流：Nitric acid solution for turkey plant cleaning
- 流属性/单位：Mass / kg
- 数量规则：计量该具名物质的领用或投加质量，并修正退料及有记录的回用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 设施门口净合格鲜或冷藏火鸡肉，不含包装质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_disinfection`
- 来源：`ec-jrc-sa-bref-jrc135916`；`eu-pef-2021-2279`

###### 磷酸溶液（`sanitation_phosphoric_acid_input`）

本产品投入卡仅记录“清洗与消毒”边界上的 Phosphoric acid solution for turkey plant cleaning。其数量依据该具名交换的前景规则取得。

- 选定流：Phosphoric acid solution for turkey plant cleaning
- 流属性/单位：Mass / kg
- 数量规则：计量该具名物质的领用或投加质量，并修正退料及有记录的回用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 设施门口净合格鲜或冷藏火鸡肉，不含包装质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_disinfection`
- 来源：`ec-jrc-sa-bref-jrc135916`；`eu-pef-2021-2279`

###### 过乙酸溶液（`sanitation_peracetic_acid_input`）

本产品投入卡仅记录“清洗与消毒”边界上的 Peracetic acid solution for turkey plant disinfection。其数量依据该具名交换的前景规则取得。

- 选定流：Peracetic acid solution for turkey plant disinfection
- 流属性/单位：Mass / kg
- 数量规则：计量该具名物质的领用或投加质量，并修正退料及有记录的回用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 设施门口净合格鲜或冷藏火鸡肉，不含包装质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_disinfection`
- 来源：`ec-jrc-sa-bref-jrc135916`；`eu-pef-2021-2279`

###### 次氯酸钠溶液（`sanitation_sodium_hypochlorite_input`）

本产品投入卡仅记录“清洗与消毒”边界上的 Sodium hypochlorite solution for turkey plant disinfection。其数量依据该具名交换的前景规则取得。

- 选定流：Sodium hypochlorite solution for turkey plant disinfection
- 流属性/单位：Mass / kg
- 数量规则：计量该具名物质的领用或投加质量，并修正退料及有记录的回用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 设施门口净合格鲜或冷藏火鸡肉，不含包装质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_disinfection`
- 来源：`ec-jrc-sa-bref-jrc135916`；`eu-pef-2021-2279`

###### 苯扎氯铵溶液（`sanitation_benzalkonium_chloride_input`）

本产品投入卡仅记录“清洗与消毒”边界上的 Benzalkonium chloride solution for turkey plant disinfection。其数量依据该具名交换的前景规则取得。

- 选定流：Benzalkonium chloride solution for turkey plant disinfection
- 流属性/单位：Mass / kg
- 数量规则：计量该具名物质的领用或投加质量，并修正退料及有记录的回用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 设施门口净合格鲜或冷藏火鸡肉，不含包装质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_disinfection`
- 来源：`ec-jrc-sa-bref-jrc135916`；`eu-pef-2021-2279`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 碱性清洗废水（`alkaline_cleaning_wastewater_output`）

本废物产出卡仅记录“清洗与消毒”边界上的 Alkaline cleaning wastewater from turkey equipment。其数量依据该具名交换的前景规则取得。

- 选定流：Alkaline cleaning wastewater from turkey equipment
- 流属性/单位：Mass / kg
- 数量规则：计量或通过物料平衡核算该具名废物的数量，并保留处理去向和批次身份
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 设施门口净合格鲜或冷藏火鸡肉，不含包装质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_disinfection`
- 来源：`ec-jrc-sa-bref-jrc135916`；`eu-pef-2021-2279`

###### 硝酸清洗废水（`nitric_acid_cleaning_wastewater_output`）

本废物产出卡仅记录“清洗与消毒”边界上的 Nitric acid cleaning wastewater from turkey equipment。其数量依据该具名交换的前景规则取得。

- 选定流：Nitric acid cleaning wastewater from turkey equipment
- 流属性/单位：Mass / kg
- 数量规则：计量或通过物料平衡核算该具名废物的数量，并保留处理去向和批次身份
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 设施门口净合格鲜或冷藏火鸡肉，不含包装质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_disinfection`
- 来源：`ec-jrc-sa-bref-jrc135916`；`eu-pef-2021-2279`

###### 磷酸清洗废水（`phosphoric_acid_cleaning_wastewater_output`）

本废物产出卡仅记录“清洗与消毒”边界上的 Phosphoric acid cleaning wastewater from turkey equipment。其数量依据该具名交换的前景规则取得。

- 选定流：Phosphoric acid cleaning wastewater from turkey equipment
- 流属性/单位：Mass / kg
- 数量规则：计量或通过物料平衡核算该具名废物的数量，并保留处理去向和批次身份
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 设施门口净合格鲜或冷藏火鸡肉，不含包装质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_disinfection`
- 来源：`ec-jrc-sa-bref-jrc135916`；`eu-pef-2021-2279`

###### 过乙酸卫生废水（`peracetic_acid_sanitation_wastewater_output`）

本废物产出卡仅记录“清洗与消毒”边界上的 Peracetic acid sanitation wastewater from turkey equipment。其数量依据该具名交换的前景规则取得。

- 选定流：Peracetic acid sanitation wastewater from turkey equipment
- 流属性/单位：Mass / kg
- 数量规则：计量或通过物料平衡核算该具名废物的数量，并保留处理去向和批次身份
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 设施门口净合格鲜或冷藏火鸡肉，不含包装质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_disinfection`
- 来源：`ec-jrc-sa-bref-jrc135916`；`eu-pef-2021-2279`

###### 次氯酸钠卫生废水（`sodium_hypochlorite_sanitation_wastewater_output`）

本废物产出卡仅记录“清洗与消毒”边界上的 Sodium hypochlorite sanitation wastewater from turkey equipment。其数量依据该具名交换的前景规则取得。

- 选定流：Sodium hypochlorite sanitation wastewater from turkey equipment
- 流属性/单位：Mass / kg
- 数量规则：计量或通过物料平衡核算该具名废物的数量，并保留处理去向和批次身份
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 设施门口净合格鲜或冷藏火鸡肉，不含包装质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_disinfection`
- 来源：`ec-jrc-sa-bref-jrc135916`；`eu-pef-2021-2279`

###### 苯扎氯铵卫生废水（`benzalkonium_sanitation_wastewater_output`）

本废物产出卡仅记录“清洗与消毒”边界上的 Benzalkonium chloride sanitation wastewater from turkey equipment。其数量依据该具名交换的前景规则取得。

- 选定流：Benzalkonium chloride sanitation wastewater from turkey equipment
- 流属性/单位：Mass / kg
- 数量规则：计量或通过物料平衡核算该具名废物的数量，并保留处理去向和批次身份
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 设施门口净合格鲜或冷藏火鸡肉，不含包装质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_disinfection`
- 来源：`ec-jrc-sa-bref-jrc135916`；`eu-pef-2021-2279`

###### 最终漂洗废水（`final_rinse_wastewater_output`）

本废物产出卡仅记录“清洗与消毒”边界上的 Final rinse wastewater from turkey equipment。其数量依据该具名交换的前景规则取得。

- 选定流：Final rinse wastewater from turkey equipment
- 流属性/单位：Mass / kg
- 数量规则：计量或通过物料平衡核算该具名废物的数量，并保留处理去向和批次身份
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 设施门口净合格鲜或冷藏火鸡肉，不含包装质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_disinfection`
- 来源：`ec-jrc-sa-bref-jrc135916`；`eu-pef-2021-2279`

###### 卫生地面清扫物（`sanitation_floor_sweepings_waste_output`）

本废物产出卡仅记录“清洗与消毒”边界上的 Sanitation floor sweepings from turkey processing。其数量依据该具名交换的前景规则取得。

- 选定流：Sanitation floor sweepings from turkey processing
- 流属性/单位：Mass / kg
- 数量规则：计量或通过物料平衡核算该具名废物的数量，并保留处理去向和批次身份
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 设施门口净合格鲜或冷藏火鸡肉，不含包装质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_disinfection`
- 来源：`ec-jrc-sa-bref-jrc135916`；`eu-pef-2021-2279`

##### 基本流

###### 卫生燃烧化石二氧化碳（`sanitation_fossil_co2_output`）

本基本产出卡仅记录“清洗与消毒”边界上的 Carbon dioxide, fossil, to air from turkey sanitation combustion。其数量依据该具名交换的前景规则取得。

- 选定流：Carbon dioxide, fossil, to air from turkey sanitation combustion
- 流属性/单位：Mass / kg
- 数量规则：依据采集的燃料、气体或过程记录以及有记录的适用因子或质量平衡，单独计算该具名基本物质；不得把 BREF 性能值作为清单因子
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 设施门口净合格鲜或冷藏火鸡肉，不含包装质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_cleaning_disinfection`
- 来源：`ec-jrc-sa-bref-jrc135916`；`eu-pef-2021-2279`

###### 卫生燃烧氮氧化物（`sanitation_nox_output`）

本基本产出卡仅记录“清洗与消毒”边界上的 Nitrogen oxides, to air from turkey sanitation combustion。其数量依据该具名交换的前景规则取得。

- 选定流：Nitrogen oxides, to air from turkey sanitation combustion
- 流属性/单位：Mass / kg
- 数量规则：依据采集的燃料、气体或过程记录以及有记录的适用因子或质量平衡，单独计算该具名基本物质；不得把 BREF 性能值作为清单因子
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 设施门口净合格鲜或冷藏火鸡肉，不含包装质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_cleaning_disinfection`
- 来源：`ec-jrc-sa-bref-jrc135916`；`eu-pef-2021-2279`

###### 卫生燃烧二氧化硫（`sanitation_so2_output`）

本基本产出卡仅记录“清洗与消毒”边界上的 Sulfur dioxide, to air from turkey sanitation combustion。其数量依据该具名交换的前景规则取得。

- 选定流：Sulfur dioxide, to air from turkey sanitation combustion
- 流属性/单位：Mass / kg
- 数量规则：依据采集的燃料、气体或过程记录以及有记录的适用因子或质量平衡，单独计算该具名基本物质；不得把 BREF 性能值作为清单因子
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 设施门口净合格鲜或冷藏火鸡肉，不含包装质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_cleaning_disinfection`
- 来源：`ec-jrc-sa-bref-jrc135916`；`eu-pef-2021-2279`

###### 卫生燃烧 PM2.5（`sanitation_pm25_output`）

本基本产出卡仅记录“清洗与消毒”边界上的 Particulate matter, PM2.5, to air from turkey sanitation combustion。其数量依据该具名交换的前景规则取得。

- 选定流：Particulate matter, PM2.5, to air from turkey sanitation combustion
- 流属性/单位：Mass / kg
- 数量规则：依据采集的燃料、气体或过程记录以及有记录的适用因子或质量平衡，单独计算该具名基本物质；不得把 BREF 性能值作为清单因子
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 设施门口净合格鲜或冷藏火鸡肉，不含包装质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_cleaning_disinfection`
- 来源：`ec-jrc-sa-bref-jrc135916`；`eu-pef-2021-2279`

###### 卫生燃烧 PM10（`sanitation_pm10_output`）

本基本产出卡仅记录“清洗与消毒”边界上的 Particulate matter, PM10, to air from turkey sanitation combustion。其数量依据该具名交换的前景规则取得。

- 选定流：Particulate matter, PM10, to air from turkey sanitation combustion
- 流属性/单位：Mass / kg
- 数量规则：依据采集的燃料、气体或过程记录以及有记录的适用因子或质量平衡，单独计算该具名基本物质；不得把 BREF 性能值作为清单因子
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 设施门口净合格鲜或冷藏火鸡肉，不含包装质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_cleaning_disinfection`
- 来源：`ec-jrc-sa-bref-jrc135916`；`eu-pef-2021-2279`

### 过程：场内废水处理（`onsite_wastewater_treatment`）

#### 输入

##### 产品流

###### 废水处理电力（`wastewater_treatment_electricity_input`）

本产品投入卡仅记录“场内废水处理”边界上的 Grid electricity for turkey wastewater treatment。其数量依据该具名交换的前景规则取得。

- 选定流：Grid electricity for turkey wastewater treatment
- 流属性/单位：Energy / kWh
- 数量规则：计量代表期内该具名能源载体的数量，采用有记录的因果驱动因素分配，且不得合并载体
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 设施门口净合格鲜或冷藏火鸡肉，不含包装质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_treatment`
- 来源：`ec-jrc-sa-bref-jrc135916`；`eu-pef-2021-2279`

###### 三氯化铁（`wastewater_ferric_chloride_input`）

本产品投入卡仅记录“场内废水处理”边界上的 Ferric chloride for turkey wastewater treatment。其数量依据该具名交换的前景规则取得。

- 选定流：Ferric chloride for turkey wastewater treatment
- 流属性/单位：Mass / kg
- 数量规则：计量该具名物质的领用或投加质量，并修正退料及有记录的回用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 设施门口净合格鲜或冷藏火鸡肉，不含包装质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_treatment`
- 来源：`ec-jrc-sa-bref-jrc135916`；`eu-pef-2021-2279`

###### 聚丙烯酰胺（`wastewater_polyacrylamide_input`）

本产品投入卡仅记录“场内废水处理”边界上的 Polyacrylamide for turkey wastewater treatment。其数量依据该具名交换的前景规则取得。

- 选定流：Polyacrylamide for turkey wastewater treatment
- 流属性/单位：Mass / kg
- 数量规则：计量该具名物质的领用或投加质量，并修正退料及有记录的回用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 设施门口净合格鲜或冷藏火鸡肉，不含包装质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_treatment`
- 来源：`ec-jrc-sa-bref-jrc135916`；`eu-pef-2021-2279`

###### 废水调节氢氧化钠（`wastewater_sodium_hydroxide_input`）

本产品投入卡仅记录“场内废水处理”边界上的 Sodium hydroxide for turkey wastewater pH control。其数量依据该具名交换的前景规则取得。

- 选定流：Sodium hydroxide for turkey wastewater pH control
- 流属性/单位：Mass / kg
- 数量规则：计量该具名物质的领用或投加质量，并修正退料及有记录的回用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 设施门口净合格鲜或冷藏火鸡肉，不含包装质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_treatment`
- 来源：`ec-jrc-sa-bref-jrc135916`；`eu-pef-2021-2279`

###### 废水调节硫酸（`wastewater_sulfuric_acid_input`）

本产品投入卡仅记录“场内废水处理”边界上的 Sulfuric acid for turkey wastewater pH control。其数量依据该具名交换的前景规则取得。

- 选定流：Sulfuric acid for turkey wastewater pH control
- 流属性/单位：Mass / kg
- 数量规则：计量该具名物质的领用或投加质量，并修正退料及有记录的回用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 设施门口净合格鲜或冷藏火鸡肉，不含包装质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_treatment`
- 来源：`ec-jrc-sa-bref-jrc135916`；`eu-pef-2021-2279`

###### 聚合物配制水（`wastewater_polymer_makeup_water_input`）

本产品投入卡仅记录“场内废水处理”边界上的 Potable water for turkey wastewater polymer preparation。其数量依据该具名交换的前景规则取得。

- 选定流：Potable water for turkey wastewater polymer preparation
- 流属性/单位：Mass / kg
- 数量规则：计量代表批次或生产周期的质量，或依据同一水流的密度和温度记录将体积换算为质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 设施门口净合格鲜或冷藏火鸡肉，不含包装质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_treatment`
- 来源：`ec-jrc-sa-bref-jrc135916`；`eu-pef-2021-2279`

##### 废物流

###### 暂养冲洗废水投入（`lairage_wash_wastewater_treatment_input`）

本废物投入卡仅记录“场内废水处理”边界上的 Lairage wash wastewater from turkey receipt。其数量依据该具名交换的前景规则取得。

- 选定流：Lairage wash wastewater from turkey receipt
- 流属性/单位：Mass / kg
- 数量规则：依据代表批次或生产周期的校准秤、储罐、领用、转序、发运、实验室或废物记录计量该具名交换的质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 设施门口净合格鲜或冷藏火鸡肉，不含包装质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_treatment`
- 来源：`ec-jrc-sa-bref-jrc135916`；`eu-pef-2021-2279`

###### 屠宰高负荷废水投入（`slaughter_high_load_wastewater_treatment_input`）

本废物投入卡仅记录“场内废水处理”边界上的 High-organic-load wastewater from turkey slaughter。其数量依据该具名交换的前景规则取得。

- 选定流：High-organic-load wastewater from turkey slaughter
- 流属性/单位：Mass / kg
- 数量规则：依据代表批次或生产周期的校准秤、储罐、领用、转序、发运、实验室或废物记录计量该具名交换的质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 设施门口净合格鲜或冷藏火鸡肉，不含包装质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_treatment`
- 来源：`ec-jrc-sa-bref-jrc135916`；`eu-pef-2021-2279`

###### 胴体整理废水投入（`dressing_wash_wastewater_treatment_input`）

本废物投入卡仅记录“场内废水处理”边界上的 Carcass dressing wash wastewater。其数量依据该具名交换的前景规则取得。

- 选定流：Carcass dressing wash wastewater
- 流属性/单位：Mass / kg
- 数量规则：依据代表批次或生产周期的校准秤、储罐、领用、转序、发运、实验室或废物记录计量该具名交换的质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 设施门口净合格鲜或冷藏火鸡肉，不含包装质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_treatment`
- 来源：`ec-jrc-sa-bref-jrc135916`；`eu-pef-2021-2279`

###### 胴体冷却废水投入（`chilling_overflow_wastewater_treatment_input`）

本废物投入卡仅记录“场内废水处理”边界上的 Turkey carcass chilling overflow wastewater。其数量依据该具名交换的前景规则取得。

- 选定流：Turkey carcass chilling overflow wastewater
- 流属性/单位：Mass / kg
- 数量规则：依据代表批次或生产周期的校准秤、储罐、领用、转序、发运、实验室或废物记录计量该具名交换的质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 设施门口净合格鲜或冷藏火鸡肉，不含包装质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_treatment`
- 来源：`ec-jrc-sa-bref-jrc135916`；`eu-pef-2021-2279`

###### 分割冲洗废水投入（`cutting_wash_wastewater_treatment_input`）

本废物投入卡仅记录“场内废水处理”边界上的 Turkey cutting wash wastewater。其数量依据该具名交换的前景规则取得。

- 选定流：Turkey cutting wash wastewater
- 流属性/单位：Mass / kg
- 数量规则：依据代表批次或生产周期的校准秤、储罐、领用、转序、发运、实验室或废物记录计量该具名交换的质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 设施门口净合格鲜或冷藏火鸡肉，不含包装质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_treatment`
- 来源：`ec-jrc-sa-bref-jrc135916`；`eu-pef-2021-2279`

###### 碱性清洗废水投入（`alkaline_cleaning_wastewater_treatment_input`）

本废物投入卡仅记录“场内废水处理”边界上的 Alkaline cleaning wastewater from turkey equipment。其数量依据该具名交换的前景规则取得。

- 选定流：Alkaline cleaning wastewater from turkey equipment
- 流属性/单位：Mass / kg
- 数量规则：依据代表批次或生产周期的校准秤、储罐、领用、转序、发运、实验室或废物记录计量该具名交换的质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 设施门口净合格鲜或冷藏火鸡肉，不含包装质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_treatment`
- 来源：`ec-jrc-sa-bref-jrc135916`；`eu-pef-2021-2279`

###### 硝酸清洗废水投入（`nitric_acid_cleaning_wastewater_treatment_input`）

本废物投入卡仅记录“场内废水处理”边界上的 Nitric acid cleaning wastewater from turkey equipment。其数量依据该具名交换的前景规则取得。

- 选定流：Nitric acid cleaning wastewater from turkey equipment
- 流属性/单位：Mass / kg
- 数量规则：依据代表批次或生产周期的校准秤、储罐、领用、转序、发运、实验室或废物记录计量该具名交换的质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 设施门口净合格鲜或冷藏火鸡肉，不含包装质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_treatment`
- 来源：`ec-jrc-sa-bref-jrc135916`；`eu-pef-2021-2279`

###### 磷酸清洗废水投入（`phosphoric_acid_cleaning_wastewater_treatment_input`）

本废物投入卡仅记录“场内废水处理”边界上的 Phosphoric acid cleaning wastewater from turkey equipment。其数量依据该具名交换的前景规则取得。

- 选定流：Phosphoric acid cleaning wastewater from turkey equipment
- 流属性/单位：Mass / kg
- 数量规则：依据代表批次或生产周期的校准秤、储罐、领用、转序、发运、实验室或废物记录计量该具名交换的质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 设施门口净合格鲜或冷藏火鸡肉，不含包装质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_treatment`
- 来源：`ec-jrc-sa-bref-jrc135916`；`eu-pef-2021-2279`

###### 过乙酸卫生废水投入（`peracetic_acid_sanitation_wastewater_treatment_input`）

本废物投入卡仅记录“场内废水处理”边界上的 Peracetic acid sanitation wastewater from turkey equipment。其数量依据该具名交换的前景规则取得。

- 选定流：Peracetic acid sanitation wastewater from turkey equipment
- 流属性/单位：Mass / kg
- 数量规则：依据代表批次或生产周期的校准秤、储罐、领用、转序、发运、实验室或废物记录计量该具名交换的质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 设施门口净合格鲜或冷藏火鸡肉，不含包装质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_treatment`
- 来源：`ec-jrc-sa-bref-jrc135916`；`eu-pef-2021-2279`

###### 次氯酸钠卫生废水投入（`sodium_hypochlorite_sanitation_wastewater_treatment_input`）

本废物投入卡仅记录“场内废水处理”边界上的 Sodium hypochlorite sanitation wastewater from turkey equipment。其数量依据该具名交换的前景规则取得。

- 选定流：Sodium hypochlorite sanitation wastewater from turkey equipment
- 流属性/单位：Mass / kg
- 数量规则：依据代表批次或生产周期的校准秤、储罐、领用、转序、发运、实验室或废物记录计量该具名交换的质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 设施门口净合格鲜或冷藏火鸡肉，不含包装质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_treatment`
- 来源：`ec-jrc-sa-bref-jrc135916`；`eu-pef-2021-2279`

###### 苯扎氯铵卫生废水投入（`benzalkonium_sanitation_wastewater_treatment_input`）

本废物投入卡仅记录“场内废水处理”边界上的 Benzalkonium chloride sanitation wastewater from turkey equipment。其数量依据该具名交换的前景规则取得。

- 选定流：Benzalkonium chloride sanitation wastewater from turkey equipment
- 流属性/单位：Mass / kg
- 数量规则：依据代表批次或生产周期的校准秤、储罐、领用、转序、发运、实验室或废物记录计量该具名交换的质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 设施门口净合格鲜或冷藏火鸡肉，不含包装质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_treatment`
- 来源：`ec-jrc-sa-bref-jrc135916`；`eu-pef-2021-2279`

###### 最终漂洗废水投入（`final_rinse_wastewater_treatment_input`）

本废物投入卡仅记录“场内废水处理”边界上的 Final rinse wastewater from turkey equipment。其数量依据该具名交换的前景规则取得。

- 选定流：Final rinse wastewater from turkey equipment
- 流属性/单位：Mass / kg
- 数量规则：依据代表批次或生产周期的校准秤、储罐、领用、转序、发运、实验室或废物记录计量该具名交换的质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 设施门口净合格鲜或冷藏火鸡肉，不含包装质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_treatment`
- 来源：`ec-jrc-sa-bref-jrc135916`；`eu-pef-2021-2279`

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 废水处理筛渣（`wastewater_screenings_output`）

本废物产出卡仅记录“场内废水处理”边界上的 Screenings from turkey wastewater treatment。其数量依据该具名交换的前景规则取得。

- 选定流：Screenings from turkey wastewater treatment
- 流属性/单位：Mass / kg
- 数量规则：计量或通过物料平衡核算该具名废物的数量，并保留处理去向和批次身份
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 设施门口净合格鲜或冷藏火鸡肉，不含包装质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_treatment`
- 来源：`ec-jrc-sa-bref-jrc135916`；`eu-pef-2021-2279`

###### 溶气气浮污泥（`wastewater_daf_sludge_output`）

本废物产出卡仅记录“场内废水处理”边界上的 Dissolved-air-flotation sludge from turkey wastewater treatment。其数量依据该具名交换的前景规则取得。

- 选定流：Dissolved-air-flotation sludge from turkey wastewater treatment
- 流属性/单位：Mass / kg
- 数量规则：计量或通过物料平衡核算该具名废物的数量，并保留处理去向和批次身份
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 设施门口净合格鲜或冷藏火鸡肉，不含包装质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_treatment`
- 来源：`ec-jrc-sa-bref-jrc135916`；`eu-pef-2021-2279`

###### 生物污泥（`wastewater_biological_sludge_output`）

本废物产出卡仅记录“场内废水处理”边界上的 Biological sludge from turkey wastewater treatment。其数量依据该具名交换的前景规则取得。

- 选定流：Biological sludge from turkey wastewater treatment
- 流属性/单位：Mass / kg
- 数量规则：计量或通过物料平衡核算该具名废物的数量，并保留处理去向和批次身份
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 设施门口净合格鲜或冷藏火鸡肉，不含包装质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_treatment`
- 来源：`ec-jrc-sa-bref-jrc135916`；`eu-pef-2021-2279`

###### 废水处理回收油脂（`wastewater_grease_output`）

本废物产出卡仅记录“场内废水处理”边界上的 Recovered grease from turkey wastewater treatment。其数量依据该具名交换的前景规则取得。

- 选定流：Recovered grease from turkey wastewater treatment
- 流属性/单位：Mass / kg
- 数量规则：计量或通过物料平衡核算该具名废物的数量，并保留处理去向和批次身份
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 设施门口净合格鲜或冷藏火鸡肉，不含包装质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_treatment`
- 来源：`ec-jrc-sa-bref-jrc135916`；`eu-pef-2021-2279`

##### 基本流

###### 处理后水排放（`treated_effluent_water_output`）

本基本产出卡仅记录“场内废水处理”边界上的 Water, to surface water from turkey wastewater treatment。其数量依据该具名交换的前景规则取得。

- 选定流：Water, to surface water from turkey wastewater treatment
- 流属性/单位：Mass / kg
- 数量规则：依据校准秤、容器、转序记录或批次物料平衡计量或核算该具名产出的质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 设施门口净合格鲜或冷藏火鸡肉，不含包装质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_treatment`
- 来源：`ec-jrc-sa-bref-jrc135916`；`eu-pef-2021-2279`

###### BOD5 水排放（`treated_effluent_bod5_output`）

本基本产出卡仅记录“场内废水处理”边界上的 Biochemical oxygen demand BOD5, to surface water。其数量依据该具名交换的前景规则取得。

- 选定流：Biochemical oxygen demand BOD5, to surface water
- 流属性/单位：Mass / kg
- 数量规则：依据同一采样期匹配的处理后水量和该具名污染物实验室浓度计算，并显式换算单位
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 设施门口净合格鲜或冷藏火鸡肉，不含包装质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_treatment`
- 来源：`ec-jrc-sa-bref-jrc135916`；`eu-pef-2021-2279`

###### COD 水排放（`treated_effluent_cod_output`）

本基本产出卡仅记录“场内废水处理”边界上的 Chemical oxygen demand COD, to surface water。其数量依据该具名交换的前景规则取得。

- 选定流：Chemical oxygen demand COD, to surface water
- 流属性/单位：Mass / kg
- 数量规则：依据同一采样期匹配的处理后水量和该具名污染物实验室浓度计算，并显式换算单位
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 设施门口净合格鲜或冷藏火鸡肉，不含包装质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_treatment`
- 来源：`ec-jrc-sa-bref-jrc135916`；`eu-pef-2021-2279`

###### 总悬浮固体水排放（`treated_effluent_tss_output`）

本基本产出卡仅记录“场内废水处理”边界上的 Total suspended solids, to surface water。其数量依据该具名交换的前景规则取得。

- 选定流：Total suspended solids, to surface water
- 流属性/单位：Mass / kg
- 数量规则：依据同一采样期匹配的处理后水量和该具名污染物实验室浓度计算，并显式换算单位
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 设施门口净合格鲜或冷藏火鸡肉，不含包装质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_treatment`
- 来源：`ec-jrc-sa-bref-jrc135916`；`eu-pef-2021-2279`

###### 总氮水排放（`treated_effluent_total_nitrogen_output`）

本基本产出卡仅记录“场内废水处理”边界上的 Nitrogen, total, to surface water。其数量依据该具名交换的前景规则取得。

- 选定流：Nitrogen, total, to surface water
- 流属性/单位：Mass / kg
- 数量规则：依据同一采样期匹配的处理后水量和该具名污染物实验室浓度计算，并显式换算单位
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 设施门口净合格鲜或冷藏火鸡肉，不含包装质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_treatment`
- 来源：`ec-jrc-sa-bref-jrc135916`；`eu-pef-2021-2279`

###### 总磷水排放（`treated_effluent_total_phosphorus_output`）

本基本产出卡仅记录“场内废水处理”边界上的 Phosphorus, total, to surface water。其数量依据该具名交换的前景规则取得。

- 选定流：Phosphorus, total, to surface water
- 流属性/单位：Mass / kg
- 数量规则：依据同一采样期匹配的处理后水量和该具名污染物实验室浓度计算，并显式换算单位
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 设施门口净合格鲜或冷藏火鸡肉，不含包装质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_treatment`
- 来源：`ec-jrc-sa-bref-jrc135916`；`eu-pef-2021-2279`

###### 氯化物水排放（`treated_effluent_chloride_output`）

本基本产出卡仅记录“场内废水处理”边界上的 Chloride, to surface water。其数量依据该具名交换的前景规则取得。

- 选定流：Chloride, to surface water
- 流属性/单位：Mass / kg
- 数量规则：依据同一采样期匹配的处理后水量和该具名污染物实验室浓度计算，并显式换算单位
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 设施门口净合格鲜或冷藏火鸡肉，不含包装质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_treatment`
- 来源：`ec-jrc-sa-bref-jrc135916`；`eu-pef-2021-2279`

###### 铵水排放（`treated_effluent_ammonium_output`）

本基本产出卡仅记录“场内废水处理”边界上的 Ammonium, to surface water。其数量依据该具名交换的前景规则取得。

- 选定流：Ammonium, to surface water
- 流属性/单位：Mass / kg
- 数量规则：依据同一采样期匹配的处理后水量和该具名污染物实验室浓度计算，并显式换算单位
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 设施门口净合格鲜或冷藏火鸡肉，不含包装质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_treatment`
- 来源：`ec-jrc-sa-bref-jrc135916`；`eu-pef-2021-2279`

###### 废水处理生物源甲烷（`wastewater_methane_to_air_output`）

本基本产出卡仅记录“场内废水处理”边界上的 Methane, biogenic, to air from turkey wastewater treatment。其数量依据该具名交换的前景规则取得。

- 选定流：Methane, biogenic, to air from turkey wastewater treatment
- 流属性/单位：Mass / kg
- 数量规则：依据采集的燃料、气体或过程记录以及有记录的适用因子或质量平衡，单独计算该具名基本物质；不得把 BREF 性能值作为清单因子
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 设施门口净合格鲜或冷藏火鸡肉，不含包装质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_treatment`
- 来源：`ec-jrc-sa-bref-jrc135916`；`eu-pef-2021-2279`

###### 废水处理生物源二氧化碳（`wastewater_biogenic_co2_to_air_output`）

本基本产出卡仅记录“场内废水处理”边界上的 Carbon dioxide, biogenic, to air from turkey wastewater treatment。其数量依据该具名交换的前景规则取得。

- 选定流：Carbon dioxide, biogenic, to air from turkey wastewater treatment
- 流属性/单位：Mass / kg
- 数量规则：依据采集的燃料、气体或过程记录以及有记录的适用因子或质量平衡，单独计算该具名基本物质；不得把 BREF 性能值作为清单因子
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 设施门口净合格鲜或冷藏火鸡肉，不含包装质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_treatment`
- 来源：`ec-jrc-sa-bref-jrc135916`；`eu-pef-2021-2279`

###### 废水处理氧化亚氮（`wastewater_nitrous_oxide_to_air_output`）

本基本产出卡仅记录“场内废水处理”边界上的 Dinitrogen monoxide, to air from turkey wastewater treatment。其数量依据该具名交换的前景规则取得。

- 选定流：Dinitrogen monoxide, to air from turkey wastewater treatment
- 流属性/单位：Mass / kg
- 数量规则：依据采集的燃料、气体或过程记录以及有记录的适用因子或质量平衡，单独计算该具名基本物质；不得把 BREF 性能值作为清单因子
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 设施门口净合格鲜或冷藏火鸡肉，不含包装质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_treatment`
- 来源：`ec-jrc-sa-bref-jrc135916`；`eu-pef-2021-2279`


## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_by_subdivision` | 可分别计量的操作与产出 | 在记录支持时，通过过程细分，并把直接计量的材料、公用工程、化学品、制冷和处理记录分配给导致其发生的操作与产品，以避免分配。 | `eu-pef-2021-2279` |
| `allocation_named_co_products` | 血、羽毛、头、脚、肝、心、胗、颈、脂、皮、骨和肉边料 | 分配前记录每项具名产出的质量、组成、法律或商业状态和去向。无法细分时，采用反映因果关系且有记录的物理关系；其他关系必须提供理由、敏感性分析并进入人工复核。 | `eu-pef-2021-2279`；`ec-jrc-sa-bref-jrc135916` |
| `allocation_waste_status` | 判废物料与动物副产品 | 不得为了改变负担而把回收共产品改称废物，或把废物改称共产品。处理负担及任何下游抵扣应遵循声明的法律状态和去向。 | `eu-pef-2021-2279`；`ec-jrc-sa-bref-jrc135916` |
| `allocation_shared_utilities` | 共用电力、蒸汽、热水、燃料、制冷、清洗和冷藏 | 采用同期分表计量，或运行时间、设备需求、吞吐量、制冷负荷、卫生周期等有记录的因果驱动因素分配共用服务。仅在证明产品质量具有充分因果性时才可按产品质量分配。 | `eu-pef-2021-2279`；`ec-jrc-sa-bref-jrc135916` |
| `allocation_wastewater_treatment` | 共用场内废水处理 | 可得时，以每股代表废水的实测体积和污染负荷分配处理投入、残余物和排放；披露所选驱动因素及敏感性。 | `eu-pef-2021-2279`；`ec-jrc-sa-bref-jrc135916` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_live_turkey_receipt` | `turkey_receipt_and_lairage` | 活火鸡、水、电力、验收禽只、死亡、粪便和暂养废水 | 地磅、禽群、仪表、死亡、粪便、清洗与转序记录 | 供应方；禽群 id；交付 id；接收时间；活重；作为背景保留的禽只数；验收质量；到厂死亡质量；水；电力；粪便；废水；去向；校准 id | 把每次交付和禽群记录与校准进厂质量及代表屠宰批次关联 | kg；kWh | 每次交付和每个屠宰批次 | 完整代表屠宰期 | 服务于产品的每个接收点和暂养区 | 仅汇总兼容禽群并保持每项具名交换独立；批次核对后归一化 | 地磅校准、交付单、禽群记录、死亡记录、仪表记录、废物联单和签字核对 |
| `cp_slaughter_operations` | `slaughter_bleeding_defeathering_evisceration` | 验收禽只、工艺投入、胴体、每项共产品、每项废物、废水和空气排放 | 屠宰线、秤、仪表、燃料、气体、检验、容器、废水和烟气记录 | 验收活重；水；电力；蒸汽；热水；每种燃料；致昏气体；去内脏胴体；每项具名共产品；每项具名废物；废水；燃料因子；烟气结果；运行时间；去向 | 在同一批次或周期边界上采集原子化产线记录，并核对活禽物料平衡 | kg；kWh；MJ | 每个屠宰批次或周期，并与公用工程期间核对 | 完整代表屠宰期 | 每条屠宰线、公用工程系统和排放点 | 仅汇总相同交换；以有记录的因果驱动因素分配共用公用工程，并保留逐燃料计算 | 校准、批次单、检验记录、仪表、发票、气体记录、烟气记录、因子来源、废物联单和物料平衡批准 |
| `cp_carcass_dressing` | `carcass_dressing` | 去内脏胴体、水、电力、已整理胴体、颈、脂、皮、判废肉和废水 | 产线秤、水表、电表、检验、转序、废物和排放记录 | 去内脏质量；水；电力；已整理质量；颈；脂；皮；判废肉；废水；期初滞留；期末滞留；校准 id | 对同一整理批次的每项具名交换进行计量和核对 | kg；kWh | 每个批次或周期 | 完整代表生产期 | 每条胴体整理线 | 仅汇总相同产品形态，并把核对后总量归一化至参考产品 | 秤和仪表校准、检验日志、转序记录、废物联单、排放记录和核对 |
| `cp_chilling_refrigeration` | `chilling_and_cold_storage` | 胴体、水、冰、电力、每种制冷剂、废水、压缩机油和冷藏产出 | 冷却器、冷库、水、冰、电力、温度、制冷剂服务、油和排放记录 | 胴体质量；水；冰；电力；产品温度；储存时间；制冷剂身份；期初充注；补充；回收；期末充注；转移；废水；压缩机油；校准 id | 为代表批次和期间匹配产品、水、能源、温度与回路级制冷剂记录 | kg；kWh | 每个批次及每次制冷剂服务事件；每月核对公用工程 | 完整代表冷却与储存期 | 每台冷却器、冷库和制冷回路 | 保持每种制冷剂身份独立；仅汇总兼容产品状态并归一化至参考产品 | 仪表与传感器校准、温度日志、服务记录、采购记录、回收记录、油品联单和制冷剂平衡 |
| `cp_cutting_portioning` | `cutting_and_portioning` | 冷藏胴体、水、电力、每种肉分割件、每项共产品、判废肉和废水 | 分割线、秤、仪表、规格、检验、转序、废物和排放记录 | 冷藏胴体投入；水；电力；胸肉；大腿肉；小腿肉；翅肉；边料；脂；骨；皮；判废肉；废水；期初滞留；期末滞留 | 对同一分割批次的每种具名分割件和残余流进行核对 | kg；kWh | 每个分割批次或周期 | 完整代表分割期 | 每条分割线和产品规格 | 不得汇总不同分割件、带骨状态或带皮状态；仅归一化兼容的已核对批次 | 秤和仪表校准、分割规格、批次单、检验记录、转序记录、废物联单和核对 |
| `cp_packaging_release` | `packaging_and_release` | 每种产品形态、电力、每个包装组件、每种包装气体、参考产品、包装废物和气体吹扫 | 包装 BOM、领用、退料、灌装、气体、仪表、秤、废物和发运记录 | 产品形态；散装投入；电力；组件身份；组件数量；组件质量；领用；退回；未用；气体身份；气体用量；吹扫；净放行产品；不合格产品；包装废物；批次 id | 对同一批次的产品、每个包装组件、包装气体和净发运质量进行核对 | kg；kWh；换算前保留件数 | 每个包装批次或散装发运 | 完整代表放行期 | 每条包装线和散装放行点 | 以实测组件质量换算件数；保持每种材料和气体独立；参考质量不含包装 | 批准 BOM、秤和仪表校准、领退料记录、气体记录、废物联单和发运记录 |
| `cp_cleaning_disinfection` | `cleaning_and_disinfection` | 水、电力、蒸汽、热水、每种燃料、每种化学品、每股卫生废水、地面清扫物和燃烧排放 | 清洗控制器、水、能源、燃料、投加、化学品领用、废水、清扫物和烟气记录 | 周期 id；设备回路；水；电力；蒸汽；热水；每种燃料；化学品身份；浓度；剂量；回用；废水身份；废水质量；清扫物；燃料因子；烟气结果；去向 | 采集周期级原子投入和产出，仅分配可归属于代表设备和期间的周期 | kg；kWh；MJ | 每个卫生周期或排放事件，并与公用工程期间核对 | 与代表屠宰生产相同的期间 | 每条卫生回路、公用工程系统和排放点 | 保持载体、燃料、化学品、废水和排放独立；仅归一化可归属周期 | 控制器导出、仪表校准、燃料发票、投加记录、化学品台账、排放日志、烟气记录、废物联单和分配工作表 |
| `cp_wastewater_treatment` | `onsite_wastewater_treatment` | 每股废水投入、处理投入、残余物、处理后水、水污染物和处理空气排放 | 进水、投加、能源、流量、实验室、污泥、油脂、烟气或气体和排放记录 | 废水身份；进水体积；电力；水；每种化学品；剂量；处理后流量；BOD5；COD；TSS；总氮；总磷；氯化物；铵；筛渣；DAF 污泥；生物污泥；油脂；甲烷；生物源二氧化碳；氧化亚氮；采样时间 | 把每项流量和实验室结果与同一处理和采样期匹配，并显式换算单位 | kg；kWh；换算前保留浓度单位 | 每个处理批次、排放、采样或监测事件 | 完整代表处理期 | 每套场内处理系统和排放点 | 保持每股进水、化学品、残余物、污染物和空气排放独立；按实测体积和负荷分配 | 流量计校准、投加记录、实验室报告、样品流转记录、污泥联单、气体记录、排放许可记录和分配工作表 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 全部前景行 | 归一化数量 = 已核对交换量 / 设施门口放行的净合格鲜或冷藏火鸡肉 kg 数 | 已核对原子交换；不含包装的净参考产品质量 | 每 1 kg 参考产品的数量 | `eu-pef-2021-2279` |
| `calc_live_bird_mass_balance` | 接收与屠宰 | 残差 = 验收活重 - 去内脏胴体 - 每项具名共产品 - 每项具名废物 - 经库存或滞留修正的实测过程损失；调查残差，不得把它归入虚构流 | 验收活重；胴体；血；羽毛；器官；内容物；判废胴体；滞留 | 已核对活禽平衡及披露的残差 | `ec-jrc-sa-bref-jrc135916`；`eu-pef-2021-2279` |
| `calc_cutting_mass_balance` | 整理、冷却、分割与包装 | 残差 = 进入胴体或肉质量 - 每项具名产品 - 每项具名共产品 - 每项具名废物 - 期末滞留 + 期初滞留；调查物料残差 | 投入质量；产出；废物；期初滞留；期末滞留 | 已核对过程平衡 | `ec-jrc-sa-bref-jrc135916`；`eu-pef-2021-2279` |
| `calc_utility_allocation` | 共用电力、蒸汽、热水、天然气、柴油与 LPG | 已分配载体 = 一种载体的实测总量 × 有记录的因果驱动份额；各载体分别计算 | 一种载体总量；运行时间；设备需求；吞吐量；卫生周期；制冷负荷 | 一种载体的已分配 kWh 或 MJ | `eu-pef-2021-2279`；`ec-jrc-sa-bref-jrc135916` |
| `calc_combustion_emission` | 每项直接燃烧污染物 | 污染物质量 = 对各燃料求和（采集燃料量 × 适用于同一燃料、污染物、技术和期间的有记录因子）；在汇总同一基本流前保留逐燃料计算 | 燃料量；污染物特定因子；技术；有效期 | 一项具名空气污染物的 kg 数 | `ec-jrc-sa-bref-jrc135916`；`eu-pef-2021-2279` |
| `calc_refrigerant_balance` | 每条制冷回路与每种制冷剂 | 排放质量 = 期初充注 + 补充 - 回收 - 期末充注 - 有记录的转移；每种制冷剂及相关碳来源分别计算 | 制冷剂身份；相关时的碳来源；期初充注；补充；回收；期末充注；转移 | 排入空气的一种具名制冷剂 kg 数 | `ec-jrc-sa-bref-jrc135916`；`eu-pef-2021-2279` |
| `calc_packaging_mass` | 每个包装组件 | 组件质量 = 领用件数 × 实测单件质量 - 退回未用组件质量；保留规格和换算证据 | 组件身份；领用件数；实测组件质量；退回 | 使用或废弃的一种包装组件 kg 数 | `eu-pef-2021-2279` |
| `calc_wastewater_pollutant_load` | 每项处理后废水污染物 | 污染物质量 = 同一采样期匹配的处理后废水体积 × 实验室浓度，并显式换算单位 | 处理后流量；一项污染物浓度；采样期；换算因子 | 排入地表水的一项污染物 kg 数 | `ec-jrc-sa-bref-jrc135916`；`eu-pef-2021-2279` |
| `calc_wastewater_air_emission` | 每项废水处理空气排放 | 依据匹配的处理活动、监测气体数据或有记录的适用因子，分别计量或计算一种气体；保留因子身份和期间 | 处理活动；气体测量值或因子；因子来源；有效期 | 排入空气的一种气体 kg 数 | `ec-jrc-sa-bref-jrc135916`；`eu-pef-2021-2279` |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `dq_product_identity` | 参考产品 | 证明准确的 CPC 21124 鲜或冷藏火鸡肉身份。冷冻火鸡肉和可食火鸡杂碎不得使用参考 UUID。 | 产品规格、标签、发运记录、温度记录、CPC 来源和分类复核 |
| `dq_temporal_alignment` | 全部前景记录 | 使用一个已披露的代表期，并把材料、能源、制冷剂、包装、卫生和废水记录与代表生产对齐。 | 批次谱系、生产日历、仪表期间、实验室期间和排除日志 |
| `dq_measurement` | 实测与计算数量 | 识别仪器、校准、单位、换算、因子和计算谱系；保留未取整原始值。 | 校准证据、控制器导出、批次单、因子参考、实验室报告和计算工作簿 |
| `dq_atomic_flow_identity` | 每张清单卡 | 每张卡仅识别一种材料、载体、燃料、制冷剂、化学品、包装组件、产品、共产品、废物、废水或基本排放。实际存在但未列出的交换应新增具体卡，不得使用集合或选择器。 | 原子清单复核、过程图、材料台账、公用工程图、制冷剂台账、化学品台账、包装 BOM、废物台账和排放台账 |
| `dq_mass_balance` | 活禽、胴体、分割与包装过程 | 在共同批次边界上核对具名投入和产出，并调查残差，不得创建未经核验的平衡流。 | 签字批次平衡、滞留记录、产品记录、共产品记录和废物联单 |
| `dq_temperature_state` | 冷却、冷藏与参考产品 | 证明代表产品始终处于声明的鲜或冷藏状态且未成为冷冻产品。 | 校准温度日志、储存记录、偏差和放行批准 |
| `dq_co_product_waste_status` | 动物部位与回收物料 | 分配前保留每项具名产出的质量、组成、去向、法律状态以及经济或功能角色。 | 检验记录、销售或转序记录、废物分类、处理联单和分配复核 |
| `dq_refrigerant_identity` | 制冷回路 | 记录实际制冷剂化学身份以及相关时的碳来源。对尚未表示的实际制冷剂新增独立补充卡和排放卡。 | 设备台账、服务记录、制冷剂钢瓶身份、回收记录和回路平衡 |
| `dq_effluent_quality` | 场内废水处理 | 将流量和污染物测量与同一期间和排放点匹配；保留检出限、采样方法和单位换算。 | 样品流转记录、实验室认可或 QA 记录、流量校准、排放日志和计算 |
| `dq_uuid_resolution` | 天工身份 | 仅存储经 hybrid search 与直接读取共同确认的准确公开 state100 UUID。所有未核验 UUID 留空，并保留一条行级 manifest 审查。 | 已填 UUID 的双重核验证据及空 UUID 的 manifest 闭合 |
| `dq_no_unsubstantiated_values` | 定量清单 | 使用前景记录或透明计算。除非精确引用的规则支持该用途，不得把 SA BREF 或 PEF 文档作为默认数量、因子或范围来源。 | 原始记录、计算谱系、因子来源、来源复核及无无依据范围 |
| `dq_representativeness` | 链接的上游与处理数据集 | 评估地理、技术、时间、产品状态和材料身份；披露代理及其预期影响。 | 数据集元数据、选择理由、数据质量评估和敏感性结果 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_scope_identity` | 产品分类 | 当参考产品不是准确的 CPC 21124 鲜或冷藏火鸡肉、属于冷冻火鸡肉、属于可食火鸡杂碎或属于其他物种肉时，判定不符合。 | `unsd-cpc-3-21124` |
| `validate_reference_uuid` | 参考产品 | 要求产品流 `653bdb6e-5456-4a7d-88d3-8493b1f27bc7`、Mass `93a60a56-a3c8-11da-a746-0800200b9a66`、Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` 和 kg。 | `unsd-cpc-3-21124` |
| `validate_reference_net_mass` | 参考数量 | 要求恰好 1 kg 净合格产品，并从参考质量中排除每个包装组件。 | `eu-pef-2021-2279` |
| `validate_required_qualifiers` | 参考流元数据 | 缺失产品形态、带骨状态、带皮状态、保鲜状态、发运温度、包装形式、生产路线、批次或未冷冻证据时，完整性失败。 | `unsd-cpc-3-21124`；`eu-pef-2021-2279` |
| `validate_process_boundary` | 前景过程图 | 要求全部适用的接收、屠宰、整理、冷却、分割、包装、卫生和废水操作，并解释每个标记为不适用的条件过程。 | `ec-jrc-sa-bref-jrc135916`；`eu-pef-2021-2279` |
| `validate_atomic_inventory` | 每张清单卡 | 拒绝作为集合、选择器、备选项、占位符或组合交换的选定流。每种实际载体、材料、制冷剂、化学品、包装组件、产品、共产品、废物、废水和基本排放均须独立成卡。 | `ec-jrc-sa-bref-jrc135916`；`eu-pef-2021-2279` |
| `validate_uuid_review_closure` | 清单身份 | 每个空 UUID 必须恰有一条 manifest 未解决审查，已核验参考行不得有未解决审查。未获 hybrid 和公开 state100 直接读取精确确认的 UUID 均不得填写。 | `eu-pef-2021-2279` |
| `validate_mass_balance` | 接收、屠宰、整理、冷却、分割和包装 | 要求在共同期间核对物料平衡并调查残差；不得把残差强行归入虚构产品流或废物流。 | `ec-jrc-sa-bref-jrc135916`；`eu-pef-2021-2279` |
| `validate_co_product_allocation` | 多产出操作 | 可行时要求直接归属或细分；否则要求有记录的因果分配方法、全部投入产出、理由和敏感性。 | `eu-pef-2021-2279` |
| `validate_temperature_state` | 冷藏产品 | 缺少产品温度证据，或以鲜或冷藏参考流表示冷冻火鸡肉时，拒绝数据集。 | `unsd-cpc-3-21124`；`ec-jrc-sa-bref-jrc135916` |
| `validate_wastewater_emissions` | 场内废水处理 | 每项报告的污染物和处理空气排放均须有匹配的流量与监测记录；禁止把 BAT 相关水平作为实测设施排放。 | `ec-jrc-sa-bref-jrc135916`；`eu-pef-2021-2279` |
| `validate_no_unsupported_estimate` | 清单数量与范围 | 拒绝任何作者推导的临时估算或无依据的数值范围；所有非参考数量均须来自前景记录或基于这些记录的计算。 | `eu-pef-2021-2279` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 一个声明的 CPC 21124 鲜或冷藏火鸡肉产品与路线的门到门屠宰场前景生产数据集 |
| downstream_use | 当范围、地理、技术、时间和产品状态兼容时，可在 process 或 lifecyclemodel 中作为 `secondary_dataset` 或 `background_dataset` |
| allowed_use | 对设施门口整只胴体或具名火鸡肉分割件进行产品特定建模，并具有声明的鲜或冷藏状态和完整原子前景记录 |
| excluded_use | 冷冻火鸡肉；以可食火鸡杂碎作为参考产品；其他物种肉；把包装质量计入参考数量；无依据默认值或范围；集合式或选择器式交换；无依据比较声明 |
| required_metadata | 规范 PCR id；CPC 坐标；准确参考 UUID；必需限定信息；设施地理位置；供应方与禽群背景；过程图；屠宰、冷却、分割、包装、卫生和废水路线；生产期；净产品质量；共产品状态；分配；上游数据集；处理去向；数据质量评估 |
| required_quality_disclosure | 数据覆盖与缺口；测量和校准证据；活禽与产品物料平衡；温度证据；公用工程、燃料、制冷剂、化学品、包装、废物、废水和排放记录；代理；分配敏感性；条件操作决定；未解决 UUID 审查 |
| update_trigger | 产品分类、形态、保鲜状态、屠宰或致昏技术、冷却或制冷系统、分割路线、包装、燃料系统、卫生化学品、废水路线、共产品状态、分配或来源方法发生实质变化；未解决流获得准确公开 state100 身份 |

## 11. 数据源

| 来源 id | 类型 | 参考文献 | 用途 |
| --- | --- | --- | --- |
| `unsd-cpc-3-21124` | 官方指南（`official_guidance`） | 联合国统计司，Central Product Classification Version 3.0，子类 21124，“Meat of turkeys, fresh or chilled”，2025 年 6 月 30 日官方结构 CSV，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv；仓库保留文件 `classifications/systems/cpc/3.0/raw/CPC_Ver_3.0_Structure_30Jun2025.csv`，SHA-256 为 `5cd2c1c4890dd6be16af48e9bb940fed48efff9865f39ff15edaa921da25fb7c` | 准确 CPC 21124 身份及鲜或冷藏边界；冷冻火鸡肉和可食火鸡杂碎不属于本参考类别 |
| `ec-jrc-sa-bref-jrc135916` | 官方指南（`official_guidance`） | European Commission Joint Research Centre，Best Available Techniques Reference Document for the Slaughterhouses, Animal By-products and/or Edible Co-products Industries，报告 JRC135916，DOI 10.2760/18199，https://doi.org/10.2760/18199 | 接收、屠宰、放血、去羽、去内脏、整理、冷却、分割、清洗、公用工程、废水、具名动物副产品、废物和排放的过程分解；不复制任何性能值作为默认清单数量 |
| `eu-pef-2021-2279` | 官方指南（`official_guidance`） | Commission Recommendation (EU) 2021/2279 of 15 December 2021 on the use of the Environmental Footprint methods，http://data.europa.eu/eli/reco/2021/2279/oj | 参考流、企业特定前景数据、完整 LCI、分配、透明度、数据质量和校验规则 |
