---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.meat-of-rabbits-and-hares-frozen
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 兔和野兔肉，冷冻

## 1. 范围与适用性

本 PCR 仅适用于联合国 CPC 3.0 子类 21134 下以冷冻市场状态放行的净合格兔肉或野兔肉。当工厂门口声明产品仍为兔或野兔肉并在放行前冻结时，可覆盖整只整理后胴体或肉块。

鲜或冷藏兔或野兔肉、食用内脏、作为产品销售的活体动物、其他物种肉，以及经加工、保藏、调味或复合的肉制品不属于本类别。兔和野兔记录在整个前景系统内应保持物种特定；只有在物种记录和质量平衡仍可追溯后，方可形成声明的合并参考输出。

前景系统始于屠宰设施门口的活体动物接收，止于可归属包装或散装发运操作及冻藏后的工厂门口放行。养殖、饲料生产、饲养和入厂运输属于上游数据集要求。工厂门口之后的配送、零售、消费者储存、解冻、烹饪、食用以及产品或包装寿命终止属于下游并予以排除。

数据集应报告实际冷冻放行规格、产品形态、时间温度记录、包装配置和储存时长。本 PCR 不提供默认温度、得率、公用工程用量、化学品剂量、排放因子、数量或范围。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.meat-of-rabbits-and-hares-frozen` |
| classification_refs | CPC 3.0 子类 21134，精确映射 |
| covered_products | 以整只整理后胴体或肉块形式冷冻放行的净合格兔肉或野兔肉 |
| excluded_products | 鲜或冷藏肉；食用内脏；活体动物；其他物种肉；经加工、保藏、调味或复合的肉制品 |
| representative_product | 已声明物种、形态、放行规格和净质量的工厂门口冷冻兔或野兔肉 |
| production_route | 活体动物接收；屠宰、放血、剥皮、去内脏和整理；条件性分割；预冷和冻结；包装或散装发运；冻藏和放行；卫生及条件性场内废水处理 |
| market_state | 工厂门口放行时为冷冻状态 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 工厂门口提供净合格冷冻兔或野兔肉 |
| How much | 1 kg 净产品质量，不含包装 |
| How well | 属于 CPC 21134 且符合声明放行规格，并记录物种、产品形态、冷冻状态和质量处置 |
| How long or cycle | 一次工厂门口放行；保留可归属冻藏时长和报告期 |
| reference_flow_link | `reference_product_output` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg 净合格冷冻肉，不含包装 |
| 参考产品流 | Meat of rabbits and hares, frozen `0204bc38-8047-4cbb-99cc-2cd7c41c626d` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 物种及声明的兔或野兔份额；产品形态；冷冻放行状态；净质量；包装配置或无包装散装发运；冻藏时长；设施地域；报告期；屠宰和冻结技术；制冷剂身份；场内废水处理状态；副产品去向；分配基础 |

构建前景数据包时，每项必需限定信息均应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中声明。缺失限定信息会使参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 将参考输出设为工厂门口恰好 1 kg 净合格放行冷冻肉；排除全部包装质量。 |
| `species_mass_separation` | 兔和野兔的动物、胴体、肉、副产品及废物记录 | Mass | kg | 在任何声明聚合之前，分别计量并保留兔和野兔在接收、屠宰、分割、冻结、拒收和放行各环节的数量。 |
| `net_product_mass` | 放行冷冻肉和包装 | Mass | kg | 扣除皮重后确定净肉质量；逐项记录每种包装组件，且不得计入 1 kg 参考质量。 |
| `live_animal_reconciliation` | 接收和暂养 | Mass | kg | 在同一批次或期间内，将接收活体质量与验收转移、暂养库存变化、到场死亡动物、粪便、垫料和有记录拒收量核对。 |
| `process_mass_balance` | 屠宰、整理、分割、冻结和包装 | Mass | kg | 使用实测投入、产品、副产品、废物、库存变化以及有记录的水分或滴水变化闭合各物种过程质量平衡，不得虚构平衡量。 |
| `water_volume` | 管网供水和直接取水 | Volume | m3 | 按过程分别计量管网水、地下水直接取用和地表水直接取用；不得将直接取水重复记作外购管网水。 |
| `electricity_energy` | 电网电力 | Energy | kWh | 逐过程分别记录实测中压电网电力，并在共用电表时保留计量覆盖范围和分配依据。 |
| `thermal_and_fuel_energy` | 外购蒸汽、外购热水、天然气、柴油和液化石油气 | Energy | MJ | 保持各载体分开；仅依据实测数量以及有记录的供应条件或供应商热值计算交付热能或燃料能量。 |
| `refrigerant_mass` | 制冷剂补充和制冷剂排放 | Mass | kg | 依据库存、维护、回收和泄漏记录，分别记录每种补充制冷剂产品和每种排放化学物质；保留用于物种计算的有记录混合物组成。 |
| `wastewater_measurement` | 废水流和直接水体排放 | Volume for wastewater; Mass for pollutant | m3; kg | 存在分流时分别计量普通负荷和高负荷废水；仅以直接排放体积和具有代表性的实测浓度按一致单位计算直接污染物负荷。 |
| `temporal_normalization` | 全部前景交换 | Recorded quantity | declared card unit | 采用一个一致报告期，核对期初期末库存，仅一次归属可归属数量，并以净合格放行质量归一化。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 一只活兔或活野兔跨越屠宰设施大门进入接收；声明物种、供应商、来源、批次、动物数量、活体质量、验收状态和到达时间 |
| starting_condition_role | 外购活体动物产品投入；其养殖、饲料、饲养和入厂运输负荷由独立上游数据集提供 |
| product_classification_scope | 仅限 CPC 3.0 子类 21134：兔和野兔肉，冷冻 |
| recursive_input_rule | 外购 CPC 21134 肉投入作为一项具有自身数据集的上游产品交换记录，不在接收过程中递归展开为前景屠宰或冻结 |
| upstream_dataset_requirement | 对活体动物生产、入厂运输、供水、电力、蒸汽、热水、燃料、制冷剂、化学品、包装、废水转移和废物处理采用具有代表性的上游数据集 |
| disclosure | 声明物种及份额、产品形态、放行规格、设施和期间、过程技术、制冷系统、实际制冷剂、包装、冻藏时长、场内处理状态、副产品和废物去向、分配、排除项和数据缺口 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_start` | 前景起始条件 | 当前景活兔或活野兔跨越屠宰设施大门进入接收时开始采集；养殖、饲料生产、饲养和入厂运输属于上游。 | `unsd-cpc-21134`, `eu-jrc-sa-bref` |
| `boundary_end` | 前景终止条件 | 在可归属包装或散装发运操作及冻藏之后，以工厂门口净合格冷冻肉放行为前景采集终点。 | `unsd-cpc-21134`, `eu-jrc-sa-bref` |
| `boundary_required_operations` | 必需前景操作 | 纳入接收、物种身份控制、屠宰、放血、剥皮、去内脏、胴体整理、预冷、冻结、放行、冻藏、清洗、消毒、废水收集和全部可归属公用工程。 | `eu-jrc-sa-bref`, `eu-pef-2021-2279` |
| `boundary_conditional_operations` | 分割、包装和场内废水处理 | 实际实施时纳入修整、去骨或分割；使用包装时逐项纳入包装组件；仅当前景设施运行场内废水处理时纳入该处理，同时始终记录实际废水转移或直接排放。 | `eu-jrc-sa-bref`, `eu-pef-2021-2279` |
| `boundary_upstream_datasets` | 上游产品投入 | 将活体动物生产、入厂运输、外购水、电力、蒸汽、热水、燃料、制冷剂、化学品和包装连接至与其供应商、地域、技术和期间相适应的独立上游数据集。 | `eu-pef-2021-2279` |
| `boundary_downstream_exclusion` | 下游生命周期阶段 | 从本前景系统排除工厂门口之后的出厂配送、零售、消费者储存、解冻、烹饪、食用以及产品或包装寿命终止。 | `unsd-cpc-21134`, `eu-pef-2021-2279` |
| `boundary_recursive_input` | 外购 CPC 21134 投入 | 若外购冷冻兔或野兔肉作为投入，则记录该单一产品投入并连接其有记录上游数据集；不得在接收过程中递归重建其屠宰和冻结清单。 | `eu-pef-2021-2279` |
| `boundary_completeness` | 前景生命周期清单 | 报告过程记录识别出的每项可归属原材料、能源、产品、副产品、废物以及直接空气或水体交换；将缺失记录作为数据缺口，不得视作零量或自动截断。 | `eu-jrc-sa-bref`, `eu-pef-2021-2279` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `live_animal_receipt` | 活体动物接收、身份控制与待宰暂养 | required | 始终纳入屠宰前的接收、物种身份控制、验收、称量和可归属暂养 | 确定验收兔和野兔投入 | 归一化后每 1 kg 净放行冷冻肉 |
| `slaughter_dressing` | 屠宰、放血、剥皮与去内脏 | required | 始终纳入实际实施的致昏或宰杀、放血、剥皮、去内脏、检验和胴体整理操作 | 产出整理后的兔或野兔胴体及分流副产品 | 归一化后每 1 kg 净放行冷冻肉 |
| `carcass_cutting` | 胴体修整、去骨与分割 | conditional | 当放行产品经过修整、去骨、分份或分割而非整只冷冻胴体时纳入 | 产出兔或野兔肉块以及分流骨、脂和修整肉 | 归一化后每 1 kg 净放行冷冻肉 |
| `chilling_freezing` | 预冷与冻结 | required | 始终纳入达到声明冷冻放行状态所需的产品冷却和实际冻结操作 | 产出最终包装前的冷冻兔或野兔肉 | 归一化后每 1 kg 净放行冷冻肉 |
| `packaging_frozen_storage` | 包装、冻藏与工厂门口放行 | required | 始终纳入放行和冻藏；仅在有记录的无包装散装发运时包装投入方可缺省 | 产出净合格 CPC 21134 参考产品 | 恰好 1 kg 净放行冷冻肉 |
| `sanitation_wastewater` | 清洗、消毒与废水管理 | required | 纳入所有可归属设备和区域清洗、消毒、废水收集，以及条件性场内处理 | 跨过程卫生与排水支持 | 经直接归属或分配后每 1 kg 净放行冷冻肉 |

### 过程：活体动物接收、身份控制与待宰暂养（`live_animal_receipt`）

#### 输入

##### 产品流

###### 活兔投入（`live_rabbit_input`）

屠宰设施接收的 Live rabbit 作为一项物种特定动物投入，保留来源、供应商、批次、活体质量和验收状态。

- 选定流：Live rabbit
- 流属性/单位：Mass / kg
- 数量规则：扣除到场死亡和拒收调整并完成库存核对后的实测验收活体质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口净合格放行冷冻兔或野兔肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_live_animal_receipt`
- 来源：`unsd-cpc-21134`, `eu-jrc-sa-bref`

###### 活野兔投入（`live_hare_input`）

屠宰设施接收的 Live hare 作为一项物种特定动物投入，保留来源、供应商、批次、活体质量和验收状态。

- 选定流：Live hare
- 流属性/单位：Mass / kg
- 数量规则：扣除到场死亡和拒收调整并完成库存核对后的实测验收活体质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口净合格放行冷冻兔或野兔肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_live_animal_receipt`
- 来源：`unsd-cpc-21134`, `eu-jrc-sa-bref`

###### 活体接收管网水（`receipt_mains_water`）

跨越设施边界供应给活体接收的 Potable mains water 与直接环境取水分别记录。

- 选定流：Potable mains water
- 流属性/单位：Volume / m3
- 数量规则：直接归属本过程的管网水实测体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格放行冷冻兔或野兔肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_records`
- 来源：`eu-jrc-sa-bref`

###### 活体接收电网电力（`receipt_grid_electricity`）

活体接收消耗的 Electricity, medium voltage, grid mix 作为一项能源交换记录，并与所有其他公用工程分开。

- 选定流：Electricity, medium voltage, grid mix
- 流属性/单位：Energy / kWh
- 数量规则：直接归属本过程的实测用电量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格放行冷冻兔或野兔肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utility_records`
- 来源：`eu-jrc-sa-bref`

###### 活体接收外购蒸汽（`receipt_purchased_steam`）

活体接收消耗的 Purchased steam 作为一项能源交换记录，并与所有其他公用工程分开。

- 选定流：Purchased steam
- 流属性/单位：Energy / MJ
- 数量规则：实测交付蒸汽能量，或由实测蒸汽质量和保留的供应条件计算的能量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格放行冷冻兔或野兔肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_utility_records`
- 来源：`eu-jrc-sa-bref`

###### 活体接收外购热水（`receipt_purchased_hot_water`）

活体接收消耗的 Purchased hot water 作为一项能源交换记录，并与所有其他公用工程分开。

- 选定流：Purchased hot water
- 流属性/单位：Energy / MJ
- 数量规则：实测交付热水能量，或由实测流量及保留的供回水温度计算的能量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格放行冷冻兔或野兔肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_utility_records`
- 来源：`eu-jrc-sa-bref`

###### 活体接收天然气（`receipt_natural_gas`）

活体接收消耗的 Natural gas 作为一项能源交换记录，并与所有其他公用工程分开。

- 选定流：Natural gas
- 流属性/单位：Energy / MJ
- 数量规则：实测能量，或使用有记录的供应商热值换算实测气量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格放行冷冻兔或野兔肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_utility_records`
- 来源：`eu-jrc-sa-bref`

###### 活体接收柴油（`receipt_diesel`）

活体接收消耗的 Diesel fuel 作为一项能源交换记录，并与所有其他公用工程分开。

- 选定流：Diesel fuel
- 流属性/单位：Energy / MJ
- 数量规则：使用有记录的供应商热值换算实测燃料量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格放行冷冻兔或野兔肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_utility_records`
- 来源：`eu-jrc-sa-bref`

###### 活体接收液化石油气（`receipt_lpg`）

活体接收消耗的 Liquefied petroleum gas 作为一项能源交换记录，并与所有其他公用工程分开。

- 选定流：Liquefied petroleum gas
- 流属性/单位：Energy / MJ
- 数量规则：使用有记录的供应商热值换算实测燃料量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格放行冷冻兔或野兔肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_utility_records`
- 来源：`eu-jrc-sa-bref`

##### 废物流

##### 基本流

###### 活体接收地下水直接取用（`receipt_groundwater_withdrawal`）

为活体接收直接取用的 Water, ground 作为一项基本流投入，不与管网水重复。

- 选定流：Water, ground
- 流属性/单位：Volume / m3
- 数量规则：归属本过程的实测直接取水体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格放行冷冻兔或野兔肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_records`
- 来源：`eu-jrc-sa-bref`

###### 活体接收地表水直接取用（`receipt_surface_water_withdrawal`）

为活体接收直接取用的 Water, surface 作为一项基本流投入，不与管网水重复。

- 选定流：Water, surface
- 流属性/单位：Volume / m3
- 数量规则：归属本过程的实测直接取水体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格放行冷冻兔或野兔肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_records`
- 来源：`eu-jrc-sa-bref`

#### 输出

##### 产品流

###### 验收活兔（`accepted_live_rabbit_output`）

转入屠宰的 Accepted live rabbit 保持接收过程的物种身份和已核对活体质量。

- 选定流：Accepted live rabbit
- 流属性/单位：Mass / kg
- 数量规则：与接收动物、暂养库存、死亡和拒收核对后的实测转移质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口净合格放行冷冻兔或野兔肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_live_animal_receipt`
- 来源：`eu-jrc-sa-bref`

###### 验收活野兔（`accepted_live_hare_output`）

转入屠宰的 Accepted live hare 保持接收过程的物种身份和已核对活体质量。

- 选定流：Accepted live hare
- 流属性/单位：Mass / kg
- 数量规则：与接收动物、暂养库存、死亡和拒收核对后的实测转移质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口净合格放行冷冻兔或野兔肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_live_animal_receipt`
- 来源：`eu-jrc-sa-bref`

##### 废物流

###### 到场死亡兔（`dead_on_arrival_rabbit_waste`）

离开接收或暂养过程的 Dead-on-arrival rabbit 作为一项废物交换记录，并保留处理去向。

- 选定流：Dead-on-arrival rabbit
- 流属性/单位：Mass / kg
- 数量规则：仅一次归属给有记录处理去向的实测废物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格放行冷冻兔或野兔肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 来源：`eu-jrc-sa-bref`

###### 到场死亡野兔（`dead_on_arrival_hare_waste`）

离开接收或暂养过程的 Dead-on-arrival hare 作为一项废物交换记录，并保留处理去向。

- 选定流：Dead-on-arrival hare
- 流属性/单位：Mass / kg
- 数量规则：仅一次归属给有记录处理去向的实测废物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格放行冷冻兔或野兔肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 来源：`eu-jrc-sa-bref`

###### 兔粪便（`rabbit_lairage_manure`）

离开接收或暂养过程的 Rabbit manure 作为一项废物交换记录，并保留处理去向。

- 选定流：Rabbit manure
- 流属性/单位：Mass / kg
- 数量规则：仅一次归属给有记录处理去向的实测废物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格放行冷冻兔或野兔肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 来源：`eu-jrc-sa-bref`

###### 野兔粪便（`hare_lairage_manure`）

离开接收或暂养过程的 Hare manure 作为一项废物交换记录，并保留处理去向。

- 选定流：Hare manure
- 流属性/单位：Mass / kg
- 数量规则：仅一次归属给有记录处理去向的实测废物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格放行冷冻兔或野兔肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 来源：`eu-jrc-sa-bref`

###### 受污秸秆垫料（`soiled_straw_bedding`）

离开接收或暂养过程的 Soiled straw bedding 作为一项废物交换记录，并保留处理去向。

- 选定流：Soiled straw bedding
- 流属性/单位：Mass / kg
- 数量规则：仅一次归属给有记录处理去向的实测废物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格放行冷冻兔或野兔肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 来源：`eu-jrc-sa-bref`

##### 基本流

###### 活体接收化石二氧化碳排入空气（`receipt_fossil_co2_air`）

服务于活体接收的现场燃烧产生的 Carbon dioxide, fossil, to air 作为一项基本流输出报告。

- 选定流：Carbon dioxide, fossil, to air
- 流属性/单位：Mass / kg
- 数量规则：直接实测质量，或由分别采集的燃料记录和保留的经核实因子计算的物质质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格放行冷冻兔或野兔肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_direct_air_emissions`
- 来源：`eu-jrc-sa-bref`

###### 活体接收甲烷排入空气（`receipt_methane_air`）

服务于活体接收的现场燃烧产生的 Methane to air 作为一项基本流输出报告。

- 选定流：Methane to air
- 流属性/单位：Mass / kg
- 数量规则：直接实测质量，或由分别采集的燃料记录和保留的经核实因子计算的物质质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格放行冷冻兔或野兔肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_direct_air_emissions`
- 来源：`eu-jrc-sa-bref`

###### 活体接收氧化亚氮排入空气（`receipt_nitrous_oxide_air`）

服务于活体接收的现场燃烧产生的 Dinitrogen monoxide to air 作为一项基本流输出报告。

- 选定流：Dinitrogen monoxide to air
- 流属性/单位：Mass / kg
- 数量规则：直接实测质量，或由分别采集的燃料记录和保留的经核实因子计算的物质质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格放行冷冻兔或野兔肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_direct_air_emissions`
- 来源：`eu-jrc-sa-bref`

###### 活体接收一氧化氮排入空气（`receipt_nitrogen_monoxide_air`）

服务于活体接收的现场燃烧产生的 Nitrogen monoxide to air 作为一项基本流输出报告。

- 选定流：Nitrogen monoxide to air
- 流属性/单位：Mass / kg
- 数量规则：直接实测质量，或由分别采集的燃料记录和保留的经核实因子计算的物质质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格放行冷冻兔或野兔肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_direct_air_emissions`
- 来源：`eu-jrc-sa-bref`

###### 活体接收二氧化氮排入空气（`receipt_nitrogen_dioxide_air`）

服务于活体接收的现场燃烧产生的 Nitrogen dioxide to air 作为一项基本流输出报告。

- 选定流：Nitrogen dioxide to air
- 流属性/单位：Mass / kg
- 数量规则：直接实测质量，或由分别采集的燃料记录和保留的经核实因子计算的物质质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格放行冷冻兔或野兔肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_direct_air_emissions`
- 来源：`eu-jrc-sa-bref`

###### 活体接收一氧化碳排入空气（`receipt_carbon_monoxide_air`）

服务于活体接收的现场燃烧产生的 Carbon monoxide to air 作为一项基本流输出报告。

- 选定流：Carbon monoxide to air
- 流属性/单位：Mass / kg
- 数量规则：直接实测质量，或由分别采集的燃料记录和保留的经核实因子计算的物质质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格放行冷冻兔或野兔肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_direct_air_emissions`
- 来源：`eu-jrc-sa-bref`

###### 活体接收二氧化硫排入空气（`receipt_sulfur_dioxide_air`）

服务于活体接收的现场燃烧产生的 Sulfur dioxide to air 作为一项基本流输出报告。

- 选定流：Sulfur dioxide to air
- 流属性/单位：Mass / kg
- 数量规则：直接实测质量，或由分别采集的燃料记录和保留的经核实因子计算的物质质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格放行冷冻兔或野兔肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_direct_air_emissions`
- 来源：`eu-jrc-sa-bref`

###### 活体接收小于 2.5 µm 颗粒物排入空气（`receipt_pm25_air`）

服务于活体接收的现场燃烧产生的 Particulate matter, <2.5 µm, to air 作为一项基本流输出报告。

- 选定流：Particulate matter, <2.5 µm, to air
- 流属性/单位：Mass / kg
- 数量规则：直接实测质量，或由分别采集的燃料记录和保留的经核实因子计算的物质质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格放行冷冻兔或野兔肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_direct_air_emissions`
- 来源：`eu-jrc-sa-bref`

###### 活体接收2.5–10 µm 颗粒物排入空气（`receipt_pm_coarse_air`）

服务于活体接收的现场燃烧产生的 Particulate matter, 2.5-10 µm, to air 作为一项基本流输出报告。

- 选定流：Particulate matter, 2.5-10 µm, to air
- 流属性/单位：Mass / kg
- 数量规则：直接实测质量，或由分别采集的燃料记录和保留的经核实因子计算的物质质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格放行冷冻兔或野兔肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_direct_air_emissions`
- 来源：`eu-jrc-sa-bref`

### 过程：屠宰、放血、剥皮与去内脏（`slaughter_dressing`）

#### 输入

##### 产品流

###### 验收活兔投入（`accepted_live_rabbit_input`）

进入屠宰的 Accepted live rabbit 与接收过程转出的物种特定内部产品相同。

- 选定流：Accepted live rabbit
- 流属性/单位：Mass / kg
- 数量规则：所代表批次或期间的实测转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口净合格放行冷冻兔或野兔肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_byproduct_balance`
- 来源：`eu-jrc-sa-bref`

###### 验收活野兔投入（`accepted_live_hare_input`）

进入屠宰的 Accepted live hare 与接收过程转出的物种特定内部产品相同。

- 选定流：Accepted live hare
- 流属性/单位：Mass / kg
- 数量规则：所代表批次或期间的实测转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口净合格放行冷冻兔或野兔肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_byproduct_balance`
- 来源：`eu-jrc-sa-bref`

###### 屠宰与整理管网水（`slaughter_mains_water`）

跨越设施边界供应给屠宰与整理的 Potable mains water 与直接环境取水分别记录。

- 选定流：Potable mains water
- 流属性/单位：Volume / m3
- 数量规则：直接归属本过程的管网水实测体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格放行冷冻兔或野兔肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_records`
- 来源：`eu-jrc-sa-bref`

###### 屠宰与整理电网电力（`slaughter_grid_electricity`）

屠宰与整理消耗的 Electricity, medium voltage, grid mix 作为一项能源交换记录，并与所有其他公用工程分开。

- 选定流：Electricity, medium voltage, grid mix
- 流属性/单位：Energy / kWh
- 数量规则：直接归属本过程的实测用电量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格放行冷冻兔或野兔肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utility_records`
- 来源：`eu-jrc-sa-bref`

###### 屠宰与整理外购蒸汽（`slaughter_purchased_steam`）

屠宰与整理消耗的 Purchased steam 作为一项能源交换记录，并与所有其他公用工程分开。

- 选定流：Purchased steam
- 流属性/单位：Energy / MJ
- 数量规则：实测交付蒸汽能量，或由实测蒸汽质量和保留的供应条件计算的能量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格放行冷冻兔或野兔肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_utility_records`
- 来源：`eu-jrc-sa-bref`

###### 屠宰与整理外购热水（`slaughter_purchased_hot_water`）

屠宰与整理消耗的 Purchased hot water 作为一项能源交换记录，并与所有其他公用工程分开。

- 选定流：Purchased hot water
- 流属性/单位：Energy / MJ
- 数量规则：实测交付热水能量，或由实测流量及保留的供回水温度计算的能量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格放行冷冻兔或野兔肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_utility_records`
- 来源：`eu-jrc-sa-bref`

###### 屠宰与整理天然气（`slaughter_natural_gas`）

屠宰与整理消耗的 Natural gas 作为一项能源交换记录，并与所有其他公用工程分开。

- 选定流：Natural gas
- 流属性/单位：Energy / MJ
- 数量规则：实测能量，或使用有记录的供应商热值换算实测气量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格放行冷冻兔或野兔肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_utility_records`
- 来源：`eu-jrc-sa-bref`

###### 屠宰与整理柴油（`slaughter_diesel`）

屠宰与整理消耗的 Diesel fuel 作为一项能源交换记录，并与所有其他公用工程分开。

- 选定流：Diesel fuel
- 流属性/单位：Energy / MJ
- 数量规则：使用有记录的供应商热值换算实测燃料量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格放行冷冻兔或野兔肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_utility_records`
- 来源：`eu-jrc-sa-bref`

###### 屠宰与整理液化石油气（`slaughter_lpg`）

屠宰与整理消耗的 Liquefied petroleum gas 作为一项能源交换记录，并与所有其他公用工程分开。

- 选定流：Liquefied petroleum gas
- 流属性/单位：Energy / MJ
- 数量规则：使用有记录的供应商热值换算实测燃料量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格放行冷冻兔或野兔肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_utility_records`
- 来源：`eu-jrc-sa-bref`

##### 废物流

##### 基本流

###### 屠宰与整理地下水直接取用（`slaughter_groundwater_withdrawal`）

为屠宰与整理直接取用的 Water, ground 作为一项基本流投入，不与管网水重复。

- 选定流：Water, ground
- 流属性/单位：Volume / m3
- 数量规则：归属本过程的实测直接取水体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格放行冷冻兔或野兔肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_records`
- 来源：`eu-jrc-sa-bref`

###### 屠宰与整理地表水直接取用（`slaughter_surface_water_withdrawal`）

为屠宰与整理直接取用的 Water, surface 作为一项基本流投入，不与管网水重复。

- 选定流：Water, surface
- 流属性/单位：Volume / m3
- 数量规则：归属本过程的实测直接取水体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格放行冷冻兔或野兔肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_records`
- 来源：`eu-jrc-sa-bref`

#### 输出

##### 产品流

###### 整理后兔胴体（`dressed_rabbit_carcass_output`）

离开屠宰与整理的 Dressed rabbit carcass 作为一项内部产品转入分割或直接转入预冷。

- 选定流：Dressed rabbit carcass
- 流属性/单位：Mass / kg
- 数量规则：与活体动物投入、副产品、内容物、拒收和留存库存核对后的实测检验合格胴体质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口净合格放行冷冻兔或野兔肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_slaughter_byproduct_balance`
- 来源：`eu-jrc-sa-bref`

###### 整理后野兔胴体（`dressed_hare_carcass_output`）

离开屠宰与整理的 Dressed hare carcass 作为一项内部产品转入分割或直接转入预冷。

- 选定流：Dressed hare carcass
- 流属性/单位：Mass / kg
- 数量规则：与活体动物投入、副产品、内容物、拒收和留存库存核对后的实测检验合格胴体质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口净合格放行冷冻兔或野兔肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_slaughter_byproduct_balance`
- 来源：`eu-jrc-sa-bref`

###### 兔血共产品（`rabbit_blood_coproduct`）

屠宰过程中分流的 兔血 在以有记录的法律和经济状态跨越过程边界时作为一项正产品输出记录。

- 选定流：Rabbit blood
- 流属性/单位：Mass / kg
- 数量规则：实测分流质量，并保留去向、适用时的组成和市场状态
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口净合格放行冷冻兔或野兔肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_byproduct_balance`
- 来源：`eu-jrc-sa-bref`, `eu-pef-2021-2279`

###### 兔皮共产品（`rabbit_skin_coproduct`）

屠宰过程中分流的 兔皮 在以有记录的法律和经济状态跨越过程边界时作为一项正产品输出记录。

- 选定流：Rabbit skin
- 流属性/单位：Mass / kg
- 数量规则：实测分流质量，并保留去向、适用时的组成和市场状态
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口净合格放行冷冻兔或野兔肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_byproduct_balance`
- 来源：`eu-jrc-sa-bref`, `eu-pef-2021-2279`

###### 兔肝共产品（`rabbit_liver_coproduct`）

屠宰过程中分流的 兔肝 在以有记录的法律和经济状态跨越过程边界时作为一项正产品输出记录。

- 选定流：Rabbit liver
- 流属性/单位：Mass / kg
- 数量规则：实测分流质量，并保留去向、适用时的组成和市场状态
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口净合格放行冷冻兔或野兔肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_byproduct_balance`
- 来源：`eu-jrc-sa-bref`, `eu-pef-2021-2279`

###### 兔心共产品（`rabbit_heart_coproduct`）

屠宰过程中分流的 兔心 在以有记录的法律和经济状态跨越过程边界时作为一项正产品输出记录。

- 选定流：Rabbit heart
- 流属性/单位：Mass / kg
- 数量规则：实测分流质量，并保留去向、适用时的组成和市场状态
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口净合格放行冷冻兔或野兔肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_byproduct_balance`
- 来源：`eu-jrc-sa-bref`, `eu-pef-2021-2279`

###### 兔肾共产品（`rabbit_kidney_coproduct`）

屠宰过程中分流的 兔肾 在以有记录的法律和经济状态跨越过程边界时作为一项正产品输出记录。

- 选定流：Rabbit kidney
- 流属性/单位：Mass / kg
- 数量规则：实测分流质量，并保留去向、适用时的组成和市场状态
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口净合格放行冷冻兔或野兔肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_byproduct_balance`
- 来源：`eu-jrc-sa-bref`, `eu-pef-2021-2279`

###### 兔肺共产品（`rabbit_lung_coproduct`）

屠宰过程中分流的 兔肺 在以有记录的法律和经济状态跨越过程边界时作为一项正产品输出记录。

- 选定流：Rabbit lung
- 流属性/单位：Mass / kg
- 数量规则：实测分流质量，并保留去向、适用时的组成和市场状态
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口净合格放行冷冻兔或野兔肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_byproduct_balance`
- 来源：`eu-jrc-sa-bref`, `eu-pef-2021-2279`

###### 兔腹脂共产品（`rabbit_abdominal_fat_coproduct`）

屠宰过程中分流的 兔腹脂 在以有记录的法律和经济状态跨越过程边界时作为一项正产品输出记录。

- 选定流：Rabbit abdominal fat
- 流属性/单位：Mass / kg
- 数量规则：实测分流质量，并保留去向、适用时的组成和市场状态
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口净合格放行冷冻兔或野兔肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_byproduct_balance`
- 来源：`eu-jrc-sa-bref`, `eu-pef-2021-2279`

###### 野兔血共产品（`hare_blood_coproduct`）

屠宰过程中分流的 野兔血 在以有记录的法律和经济状态跨越过程边界时作为一项正产品输出记录。

- 选定流：Hare blood
- 流属性/单位：Mass / kg
- 数量规则：实测分流质量，并保留去向、适用时的组成和市场状态
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口净合格放行冷冻兔或野兔肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_byproduct_balance`
- 来源：`eu-jrc-sa-bref`, `eu-pef-2021-2279`

###### 野兔皮共产品（`hare_skin_coproduct`）

屠宰过程中分流的 野兔皮 在以有记录的法律和经济状态跨越过程边界时作为一项正产品输出记录。

- 选定流：Hare skin
- 流属性/单位：Mass / kg
- 数量规则：实测分流质量，并保留去向、适用时的组成和市场状态
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口净合格放行冷冻兔或野兔肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_byproduct_balance`
- 来源：`eu-jrc-sa-bref`, `eu-pef-2021-2279`

###### 野兔肝共产品（`hare_liver_coproduct`）

屠宰过程中分流的 野兔肝 在以有记录的法律和经济状态跨越过程边界时作为一项正产品输出记录。

- 选定流：Hare liver
- 流属性/单位：Mass / kg
- 数量规则：实测分流质量，并保留去向、适用时的组成和市场状态
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口净合格放行冷冻兔或野兔肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_byproduct_balance`
- 来源：`eu-jrc-sa-bref`, `eu-pef-2021-2279`

###### 野兔心共产品（`hare_heart_coproduct`）

屠宰过程中分流的 野兔心 在以有记录的法律和经济状态跨越过程边界时作为一项正产品输出记录。

- 选定流：Hare heart
- 流属性/单位：Mass / kg
- 数量规则：实测分流质量，并保留去向、适用时的组成和市场状态
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口净合格放行冷冻兔或野兔肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_byproduct_balance`
- 来源：`eu-jrc-sa-bref`, `eu-pef-2021-2279`

###### 野兔肾共产品（`hare_kidney_coproduct`）

屠宰过程中分流的 野兔肾 在以有记录的法律和经济状态跨越过程边界时作为一项正产品输出记录。

- 选定流：Hare kidney
- 流属性/单位：Mass / kg
- 数量规则：实测分流质量，并保留去向、适用时的组成和市场状态
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口净合格放行冷冻兔或野兔肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_byproduct_balance`
- 来源：`eu-jrc-sa-bref`, `eu-pef-2021-2279`

###### 野兔肺共产品（`hare_lung_coproduct`）

屠宰过程中分流的 野兔肺 在以有记录的法律和经济状态跨越过程边界时作为一项正产品输出记录。

- 选定流：Hare lung
- 流属性/单位：Mass / kg
- 数量规则：实测分流质量，并保留去向、适用时的组成和市场状态
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口净合格放行冷冻兔或野兔肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_byproduct_balance`
- 来源：`eu-jrc-sa-bref`, `eu-pef-2021-2279`

###### 野兔腹脂共产品（`hare_abdominal_fat_coproduct`）

屠宰过程中分流的 野兔腹脂 在以有记录的法律和经济状态跨越过程边界时作为一项正产品输出记录。

- 选定流：Hare abdominal fat
- 流属性/单位：Mass / kg
- 数量规则：实测分流质量，并保留去向、适用时的组成和市场状态
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口净合格放行冷冻兔或野兔肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_byproduct_balance`
- 来源：`eu-jrc-sa-bref`, `eu-pef-2021-2279`

##### 废物流

###### 兔胃内容物（`rabbit_stomach_contents`）

离开屠宰过程的 Rabbit stomach contents 作为一项废物交换记录，不与血、皮、器官或胴体记录合并。

- 选定流：Rabbit stomach contents
- 流属性/单位：Mass / kg
- 数量规则：仅一次归属给有记录回收或处理去向的实测废物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格放行冷冻兔或野兔肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 来源：`eu-jrc-sa-bref`

###### 野兔胃内容物（`hare_stomach_contents`）

离开屠宰过程的 Hare stomach contents 作为一项废物交换记录，不与血、皮、器官或胴体记录合并。

- 选定流：Hare stomach contents
- 流属性/单位：Mass / kg
- 数量规则：仅一次归属给有记录回收或处理去向的实测废物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格放行冷冻兔或野兔肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 来源：`eu-jrc-sa-bref`

###### 兔肠内容物（`rabbit_intestinal_contents`）

离开屠宰过程的 Rabbit intestinal contents 作为一项废物交换记录，不与血、皮、器官或胴体记录合并。

- 选定流：Rabbit intestinal contents
- 流属性/单位：Mass / kg
- 数量规则：仅一次归属给有记录回收或处理去向的实测废物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格放行冷冻兔或野兔肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 来源：`eu-jrc-sa-bref`

###### 野兔肠内容物（`hare_intestinal_contents`）

离开屠宰过程的 Hare intestinal contents 作为一项废物交换记录，不与血、皮、器官或胴体记录合并。

- 选定流：Hare intestinal contents
- 流属性/单位：Mass / kg
- 数量规则：仅一次归属给有记录回收或处理去向的实测废物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格放行冷冻兔或野兔肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 来源：`eu-jrc-sa-bref`

###### 判废兔胴体（`condemned_rabbit_carcass`）

离开屠宰过程的 Condemned rabbit carcass 作为一项废物交换记录，不与血、皮、器官或胴体记录合并。

- 选定流：Condemned rabbit carcass
- 流属性/单位：Mass / kg
- 数量规则：仅一次归属给有记录回收或处理去向的实测废物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格放行冷冻兔或野兔肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 来源：`eu-jrc-sa-bref`

###### 判废野兔胴体（`condemned_hare_carcass`）

离开屠宰过程的 Condemned hare carcass 作为一项废物交换记录，不与血、皮、器官或胴体记录合并。

- 选定流：Condemned hare carcass
- 流属性/单位：Mass / kg
- 数量规则：仅一次归属给有记录回收或处理去向的实测废物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格放行冷冻兔或野兔肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 来源：`eu-jrc-sa-bref`

##### 基本流

###### 屠宰与整理化石二氧化碳排入空气（`slaughter_fossil_co2_air`）

服务于屠宰与整理的现场燃烧产生的 Carbon dioxide, fossil, to air 作为一项基本流输出报告。

- 选定流：Carbon dioxide, fossil, to air
- 流属性/单位：Mass / kg
- 数量规则：直接实测质量，或由分别采集的燃料记录和保留的经核实因子计算的物质质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格放行冷冻兔或野兔肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_direct_air_emissions`
- 来源：`eu-jrc-sa-bref`

###### 屠宰与整理甲烷排入空气（`slaughter_methane_air`）

服务于屠宰与整理的现场燃烧产生的 Methane to air 作为一项基本流输出报告。

- 选定流：Methane to air
- 流属性/单位：Mass / kg
- 数量规则：直接实测质量，或由分别采集的燃料记录和保留的经核实因子计算的物质质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格放行冷冻兔或野兔肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_direct_air_emissions`
- 来源：`eu-jrc-sa-bref`

###### 屠宰与整理氧化亚氮排入空气（`slaughter_nitrous_oxide_air`）

服务于屠宰与整理的现场燃烧产生的 Dinitrogen monoxide to air 作为一项基本流输出报告。

- 选定流：Dinitrogen monoxide to air
- 流属性/单位：Mass / kg
- 数量规则：直接实测质量，或由分别采集的燃料记录和保留的经核实因子计算的物质质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格放行冷冻兔或野兔肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_direct_air_emissions`
- 来源：`eu-jrc-sa-bref`

###### 屠宰与整理一氧化氮排入空气（`slaughter_nitrogen_monoxide_air`）

服务于屠宰与整理的现场燃烧产生的 Nitrogen monoxide to air 作为一项基本流输出报告。

- 选定流：Nitrogen monoxide to air
- 流属性/单位：Mass / kg
- 数量规则：直接实测质量，或由分别采集的燃料记录和保留的经核实因子计算的物质质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格放行冷冻兔或野兔肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_direct_air_emissions`
- 来源：`eu-jrc-sa-bref`

###### 屠宰与整理二氧化氮排入空气（`slaughter_nitrogen_dioxide_air`）

服务于屠宰与整理的现场燃烧产生的 Nitrogen dioxide to air 作为一项基本流输出报告。

- 选定流：Nitrogen dioxide to air
- 流属性/单位：Mass / kg
- 数量规则：直接实测质量，或由分别采集的燃料记录和保留的经核实因子计算的物质质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格放行冷冻兔或野兔肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_direct_air_emissions`
- 来源：`eu-jrc-sa-bref`

###### 屠宰与整理一氧化碳排入空气（`slaughter_carbon_monoxide_air`）

服务于屠宰与整理的现场燃烧产生的 Carbon monoxide to air 作为一项基本流输出报告。

- 选定流：Carbon monoxide to air
- 流属性/单位：Mass / kg
- 数量规则：直接实测质量，或由分别采集的燃料记录和保留的经核实因子计算的物质质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格放行冷冻兔或野兔肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_direct_air_emissions`
- 来源：`eu-jrc-sa-bref`

###### 屠宰与整理二氧化硫排入空气（`slaughter_sulfur_dioxide_air`）

服务于屠宰与整理的现场燃烧产生的 Sulfur dioxide to air 作为一项基本流输出报告。

- 选定流：Sulfur dioxide to air
- 流属性/单位：Mass / kg
- 数量规则：直接实测质量，或由分别采集的燃料记录和保留的经核实因子计算的物质质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格放行冷冻兔或野兔肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_direct_air_emissions`
- 来源：`eu-jrc-sa-bref`

###### 屠宰与整理小于 2.5 µm 颗粒物排入空气（`slaughter_pm25_air`）

服务于屠宰与整理的现场燃烧产生的 Particulate matter, <2.5 µm, to air 作为一项基本流输出报告。

- 选定流：Particulate matter, <2.5 µm, to air
- 流属性/单位：Mass / kg
- 数量规则：直接实测质量，或由分别采集的燃料记录和保留的经核实因子计算的物质质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格放行冷冻兔或野兔肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_direct_air_emissions`
- 来源：`eu-jrc-sa-bref`

###### 屠宰与整理2.5–10 µm 颗粒物排入空气（`slaughter_pm_coarse_air`）

服务于屠宰与整理的现场燃烧产生的 Particulate matter, 2.5-10 µm, to air 作为一项基本流输出报告。

- 选定流：Particulate matter, 2.5-10 µm, to air
- 流属性/单位：Mass / kg
- 数量规则：直接实测质量，或由分别采集的燃料记录和保留的经核实因子计算的物质质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格放行冷冻兔或野兔肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_direct_air_emissions`
- 来源：`eu-jrc-sa-bref`

### 过程：胴体修整、去骨与分割（`carcass_cutting`）

#### 输入

##### 产品流

###### 整理后兔胴体投入（`dressed_rabbit_carcass_input`）

进入分割的 Dressed rabbit carcass 与屠宰和整理过程产出的物种特定内部产品相同。

- 选定流：Dressed rabbit carcass
- 流属性/单位：Mass / kg
- 数量规则：进入修整、去骨或分割的实测胴体质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口净合格放行冷冻兔或野兔肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cutting_mass_balance`
- 来源：`eu-jrc-sa-bref`

###### 整理后野兔胴体投入（`dressed_hare_carcass_input`）

进入分割的 Dressed hare carcass 与屠宰和整理过程产出的物种特定内部产品相同。

- 选定流：Dressed hare carcass
- 流属性/单位：Mass / kg
- 数量规则：进入修整、去骨或分割的实测胴体质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口净合格放行冷冻兔或野兔肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cutting_mass_balance`
- 来源：`eu-jrc-sa-bref`

###### 胴体分割管网水（`cutting_mains_water`）

跨越设施边界供应给胴体分割的 Potable mains water 与直接环境取水分别记录。

- 选定流：Potable mains water
- 流属性/单位：Volume / m3
- 数量规则：直接归属本过程的管网水实测体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格放行冷冻兔或野兔肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_records`
- 来源：`eu-jrc-sa-bref`

###### 胴体分割电网电力（`cutting_grid_electricity`）

胴体分割消耗的 Electricity, medium voltage, grid mix 作为一项能源交换记录，并与所有其他公用工程分开。

- 选定流：Electricity, medium voltage, grid mix
- 流属性/单位：Energy / kWh
- 数量规则：直接归属本过程的实测用电量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格放行冷冻兔或野兔肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utility_records`
- 来源：`eu-jrc-sa-bref`

###### 胴体分割外购蒸汽（`cutting_purchased_steam`）

胴体分割消耗的 Purchased steam 作为一项能源交换记录，并与所有其他公用工程分开。

- 选定流：Purchased steam
- 流属性/单位：Energy / MJ
- 数量规则：实测交付蒸汽能量，或由实测蒸汽质量和保留的供应条件计算的能量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格放行冷冻兔或野兔肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_utility_records`
- 来源：`eu-jrc-sa-bref`

###### 胴体分割外购热水（`cutting_purchased_hot_water`）

胴体分割消耗的 Purchased hot water 作为一项能源交换记录，并与所有其他公用工程分开。

- 选定流：Purchased hot water
- 流属性/单位：Energy / MJ
- 数量规则：实测交付热水能量，或由实测流量及保留的供回水温度计算的能量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格放行冷冻兔或野兔肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_utility_records`
- 来源：`eu-jrc-sa-bref`

###### 胴体分割天然气（`cutting_natural_gas`）

胴体分割消耗的 Natural gas 作为一项能源交换记录，并与所有其他公用工程分开。

- 选定流：Natural gas
- 流属性/单位：Energy / MJ
- 数量规则：实测能量，或使用有记录的供应商热值换算实测气量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格放行冷冻兔或野兔肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_utility_records`
- 来源：`eu-jrc-sa-bref`

###### 胴体分割柴油（`cutting_diesel`）

胴体分割消耗的 Diesel fuel 作为一项能源交换记录，并与所有其他公用工程分开。

- 选定流：Diesel fuel
- 流属性/单位：Energy / MJ
- 数量规则：使用有记录的供应商热值换算实测燃料量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格放行冷冻兔或野兔肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_utility_records`
- 来源：`eu-jrc-sa-bref`

###### 胴体分割液化石油气（`cutting_lpg`）

胴体分割消耗的 Liquefied petroleum gas 作为一项能源交换记录，并与所有其他公用工程分开。

- 选定流：Liquefied petroleum gas
- 流属性/单位：Energy / MJ
- 数量规则：使用有记录的供应商热值换算实测燃料量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格放行冷冻兔或野兔肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_utility_records`
- 来源：`eu-jrc-sa-bref`

##### 废物流

##### 基本流

###### 胴体分割地下水直接取用（`cutting_groundwater_withdrawal`）

为胴体分割直接取用的 Water, ground 作为一项基本流投入，不与管网水重复。

- 选定流：Water, ground
- 流属性/单位：Volume / m3
- 数量规则：归属本过程的实测直接取水体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格放行冷冻兔或野兔肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_records`
- 来源：`eu-jrc-sa-bref`

###### 胴体分割地表水直接取用（`cutting_surface_water_withdrawal`）

为胴体分割直接取用的 Water, surface 作为一项基本流投入，不与管网水重复。

- 选定流：Water, surface
- 流属性/单位：Volume / m3
- 数量规则：归属本过程的实测直接取水体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格放行冷冻兔或野兔肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_records`
- 来源：`eu-jrc-sa-bref`

#### 输出

##### 产品流

###### 兔肉块（`rabbit_meat_cut_output`）

分割过程中分流的 兔肉块 作为一项物种特定产品输出记录。

- 选定流：Rabbit meat cut
- 流属性/单位：Mass / kg
- 数量规则：与胴体投入、留存库存和拒收核对后的实测分流质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口净合格放行冷冻兔或野兔肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_cutting_mass_balance`
- 来源：`eu-jrc-sa-bref`, `eu-pef-2021-2279`

###### 兔骨（`rabbit_bone_coproduct`）

分割过程中分流的 兔骨 作为一项物种特定产品输出记录。

- 选定流：Rabbit bone
- 流属性/单位：Mass / kg
- 数量规则：与胴体投入、留存库存和拒收核对后的实测分流质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口净合格放行冷冻兔或野兔肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_cutting_mass_balance`
- 来源：`eu-jrc-sa-bref`, `eu-pef-2021-2279`

###### 兔分割脂（`rabbit_cutting_fat_coproduct`）

分割过程中分流的 兔分割脂 作为一项物种特定产品输出记录。

- 选定流：Rabbit cutting fat
- 流属性/单位：Mass / kg
- 数量规则：与胴体投入、留存库存和拒收核对后的实测分流质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口净合格放行冷冻兔或野兔肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_cutting_mass_balance`
- 来源：`eu-jrc-sa-bref`, `eu-pef-2021-2279`

###### 兔修整肉（`rabbit_meat_trimming_coproduct`）

分割过程中分流的 兔修整肉 作为一项物种特定产品输出记录。

- 选定流：Rabbit meat trimming
- 流属性/单位：Mass / kg
- 数量规则：与胴体投入、留存库存和拒收核对后的实测分流质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口净合格放行冷冻兔或野兔肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_cutting_mass_balance`
- 来源：`eu-jrc-sa-bref`, `eu-pef-2021-2279`

###### 野兔肉块（`hare_meat_cut_output`）

分割过程中分流的 野兔肉块 作为一项物种特定产品输出记录。

- 选定流：Hare meat cut
- 流属性/单位：Mass / kg
- 数量规则：与胴体投入、留存库存和拒收核对后的实测分流质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口净合格放行冷冻兔或野兔肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_cutting_mass_balance`
- 来源：`eu-jrc-sa-bref`, `eu-pef-2021-2279`

###### 野兔骨（`hare_bone_coproduct`）

分割过程中分流的 野兔骨 作为一项物种特定产品输出记录。

- 选定流：Hare bone
- 流属性/单位：Mass / kg
- 数量规则：与胴体投入、留存库存和拒收核对后的实测分流质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口净合格放行冷冻兔或野兔肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_cutting_mass_balance`
- 来源：`eu-jrc-sa-bref`, `eu-pef-2021-2279`

###### 野兔分割脂（`hare_cutting_fat_coproduct`）

分割过程中分流的 野兔分割脂 作为一项物种特定产品输出记录。

- 选定流：Hare cutting fat
- 流属性/单位：Mass / kg
- 数量规则：与胴体投入、留存库存和拒收核对后的实测分流质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口净合格放行冷冻兔或野兔肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_cutting_mass_balance`
- 来源：`eu-jrc-sa-bref`, `eu-pef-2021-2279`

###### 野兔修整肉（`hare_meat_trimming_coproduct`）

分割过程中分流的 野兔修整肉 作为一项物种特定产品输出记录。

- 选定流：Hare meat trimming
- 流属性/单位：Mass / kg
- 数量规则：与胴体投入、留存库存和拒收核对后的实测分流质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口净合格放行冷冻兔或野兔肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_cutting_mass_balance`
- 来源：`eu-jrc-sa-bref`, `eu-pef-2021-2279`

##### 废物流

###### 拒收兔肉（`rejected_rabbit_meat_waste`）

分割过程中转出的 Rejected rabbit meat 作为一项物种特定废物交换记录。

- 选定流：Rejected rabbit meat
- 流属性/单位：Mass / kg
- 数量规则：仅一次归属给有记录回收或处理去向的实测拒收质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格放行冷冻兔或野兔肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 来源：`eu-jrc-sa-bref`

###### 拒收野兔肉（`rejected_hare_meat_waste`）

分割过程中转出的 Rejected hare meat 作为一项物种特定废物交换记录。

- 选定流：Rejected hare meat
- 流属性/单位：Mass / kg
- 数量规则：仅一次归属给有记录回收或处理去向的实测拒收质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格放行冷冻兔或野兔肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 来源：`eu-jrc-sa-bref`

##### 基本流

###### 胴体分割化石二氧化碳排入空气（`cutting_fossil_co2_air`）

服务于胴体分割的现场燃烧产生的 Carbon dioxide, fossil, to air 作为一项基本流输出报告。

- 选定流：Carbon dioxide, fossil, to air
- 流属性/单位：Mass / kg
- 数量规则：直接实测质量，或由分别采集的燃料记录和保留的经核实因子计算的物质质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格放行冷冻兔或野兔肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_direct_air_emissions`
- 来源：`eu-jrc-sa-bref`

###### 胴体分割甲烷排入空气（`cutting_methane_air`）

服务于胴体分割的现场燃烧产生的 Methane to air 作为一项基本流输出报告。

- 选定流：Methane to air
- 流属性/单位：Mass / kg
- 数量规则：直接实测质量，或由分别采集的燃料记录和保留的经核实因子计算的物质质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格放行冷冻兔或野兔肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_direct_air_emissions`
- 来源：`eu-jrc-sa-bref`

###### 胴体分割氧化亚氮排入空气（`cutting_nitrous_oxide_air`）

服务于胴体分割的现场燃烧产生的 Dinitrogen monoxide to air 作为一项基本流输出报告。

- 选定流：Dinitrogen monoxide to air
- 流属性/单位：Mass / kg
- 数量规则：直接实测质量，或由分别采集的燃料记录和保留的经核实因子计算的物质质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格放行冷冻兔或野兔肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_direct_air_emissions`
- 来源：`eu-jrc-sa-bref`

###### 胴体分割一氧化氮排入空气（`cutting_nitrogen_monoxide_air`）

服务于胴体分割的现场燃烧产生的 Nitrogen monoxide to air 作为一项基本流输出报告。

- 选定流：Nitrogen monoxide to air
- 流属性/单位：Mass / kg
- 数量规则：直接实测质量，或由分别采集的燃料记录和保留的经核实因子计算的物质质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格放行冷冻兔或野兔肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_direct_air_emissions`
- 来源：`eu-jrc-sa-bref`

###### 胴体分割二氧化氮排入空气（`cutting_nitrogen_dioxide_air`）

服务于胴体分割的现场燃烧产生的 Nitrogen dioxide to air 作为一项基本流输出报告。

- 选定流：Nitrogen dioxide to air
- 流属性/单位：Mass / kg
- 数量规则：直接实测质量，或由分别采集的燃料记录和保留的经核实因子计算的物质质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格放行冷冻兔或野兔肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_direct_air_emissions`
- 来源：`eu-jrc-sa-bref`

###### 胴体分割一氧化碳排入空气（`cutting_carbon_monoxide_air`）

服务于胴体分割的现场燃烧产生的 Carbon monoxide to air 作为一项基本流输出报告。

- 选定流：Carbon monoxide to air
- 流属性/单位：Mass / kg
- 数量规则：直接实测质量，或由分别采集的燃料记录和保留的经核实因子计算的物质质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格放行冷冻兔或野兔肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_direct_air_emissions`
- 来源：`eu-jrc-sa-bref`

###### 胴体分割二氧化硫排入空气（`cutting_sulfur_dioxide_air`）

服务于胴体分割的现场燃烧产生的 Sulfur dioxide to air 作为一项基本流输出报告。

- 选定流：Sulfur dioxide to air
- 流属性/单位：Mass / kg
- 数量规则：直接实测质量，或由分别采集的燃料记录和保留的经核实因子计算的物质质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格放行冷冻兔或野兔肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_direct_air_emissions`
- 来源：`eu-jrc-sa-bref`

###### 胴体分割小于 2.5 µm 颗粒物排入空气（`cutting_pm25_air`）

服务于胴体分割的现场燃烧产生的 Particulate matter, <2.5 µm, to air 作为一项基本流输出报告。

- 选定流：Particulate matter, <2.5 µm, to air
- 流属性/单位：Mass / kg
- 数量规则：直接实测质量，或由分别采集的燃料记录和保留的经核实因子计算的物质质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格放行冷冻兔或野兔肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_direct_air_emissions`
- 来源：`eu-jrc-sa-bref`

###### 胴体分割2.5–10 µm 颗粒物排入空气（`cutting_pm_coarse_air`）

服务于胴体分割的现场燃烧产生的 Particulate matter, 2.5-10 µm, to air 作为一项基本流输出报告。

- 选定流：Particulate matter, 2.5-10 µm, to air
- 流属性/单位：Mass / kg
- 数量规则：直接实测质量，或由分别采集的燃料记录和保留的经核实因子计算的物质质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格放行冷冻兔或野兔肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_direct_air_emissions`
- 来源：`eu-jrc-sa-bref`

### 过程：预冷与冻结（`chilling_freezing`）

#### 输入

##### 产品流

###### 兔肉块投入（`rabbit_meat_cut_input`）

进入预冷和冻结的 Rabbit meat cut 是来自分割或胴体整理的一项物种特定内部产品。

- 选定流：Rabbit meat cut
- 流属性/单位：Mass / kg
- 数量规则：进入冷加工过程的实测转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口净合格放行冷冻兔或野兔肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_freezing_transfer`
- 来源：`eu-jrc-sa-bref`

###### 野兔肉块投入（`hare_meat_cut_input`）

进入预冷和冻结的 Hare meat cut 是来自分割或胴体整理的一项物种特定内部产品。

- 选定流：Hare meat cut
- 流属性/单位：Mass / kg
- 数量规则：进入冷加工过程的实测转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口净合格放行冷冻兔或野兔肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_freezing_transfer`
- 来源：`eu-jrc-sa-bref`

###### 预冷与冻结管网水（`freezing_mains_water`）

跨越设施边界供应给预冷与冻结的 Potable mains water 与直接环境取水分别记录。

- 选定流：Potable mains water
- 流属性/单位：Volume / m3
- 数量规则：直接归属本过程的管网水实测体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格放行冷冻兔或野兔肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_records`
- 来源：`eu-jrc-sa-bref`

###### 预冷与冻结电网电力（`freezing_grid_electricity`）

预冷与冻结消耗的 Electricity, medium voltage, grid mix 作为一项能源交换记录，并与所有其他公用工程分开。

- 选定流：Electricity, medium voltage, grid mix
- 流属性/单位：Energy / kWh
- 数量规则：直接归属本过程的实测用电量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格放行冷冻兔或野兔肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utility_records`
- 来源：`eu-jrc-sa-bref`

###### 预冷与冻结外购蒸汽（`freezing_purchased_steam`）

预冷与冻结消耗的 Purchased steam 作为一项能源交换记录，并与所有其他公用工程分开。

- 选定流：Purchased steam
- 流属性/单位：Energy / MJ
- 数量规则：实测交付蒸汽能量，或由实测蒸汽质量和保留的供应条件计算的能量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格放行冷冻兔或野兔肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_utility_records`
- 来源：`eu-jrc-sa-bref`

###### 预冷与冻结外购热水（`freezing_purchased_hot_water`）

预冷与冻结消耗的 Purchased hot water 作为一项能源交换记录，并与所有其他公用工程分开。

- 选定流：Purchased hot water
- 流属性/单位：Energy / MJ
- 数量规则：实测交付热水能量，或由实测流量及保留的供回水温度计算的能量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格放行冷冻兔或野兔肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_utility_records`
- 来源：`eu-jrc-sa-bref`

###### 预冷与冻结天然气（`freezing_natural_gas`）

预冷与冻结消耗的 Natural gas 作为一项能源交换记录，并与所有其他公用工程分开。

- 选定流：Natural gas
- 流属性/单位：Energy / MJ
- 数量规则：实测能量，或使用有记录的供应商热值换算实测气量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格放行冷冻兔或野兔肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_utility_records`
- 来源：`eu-jrc-sa-bref`

###### 预冷与冻结柴油（`freezing_diesel`）

预冷与冻结消耗的 Diesel fuel 作为一项能源交换记录，并与所有其他公用工程分开。

- 选定流：Diesel fuel
- 流属性/单位：Energy / MJ
- 数量规则：使用有记录的供应商热值换算实测燃料量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格放行冷冻兔或野兔肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_utility_records`
- 来源：`eu-jrc-sa-bref`

###### 预冷与冻结液化石油气（`freezing_lpg`）

预冷与冻结消耗的 Liquefied petroleum gas 作为一项能源交换记录，并与所有其他公用工程分开。

- 选定流：Liquefied petroleum gas
- 流属性/单位：Energy / MJ
- 数量规则：使用有记录的供应商热值换算实测燃料量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格放行冷冻兔或野兔肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_utility_records`
- 来源：`eu-jrc-sa-bref`

###### 预冷与冻结R-717 制冷剂补充（`freezing_r717_makeup`）

向服务于预冷与冻结的制冷设备补充的 Ammonia refrigerant (R-717) 作为一项产品投入记录。

- 选定流：Ammonia refrigerant (R-717)
- 流属性/单位：Mass / kg
- 数量规则：由维修和库存记录实测的补充质量；系统总充注量不得作为补充量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 工厂门口净合格放行冷冻兔或野兔肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_refrigerant_records`
- 来源：`eu-jrc-sa-bref`

###### 预冷与冻结HFC-134a 制冷剂补充（`freezing_hfc134a_makeup`）

向服务于预冷与冻结的制冷设备补充的 1,1,1,2-Tetrafluoroethane refrigerant (HFC-134a) 作为一项产品投入记录。

- 选定流：1,1,1,2-Tetrafluoroethane refrigerant (HFC-134a)
- 流属性/单位：Mass / kg
- 数量规则：由维修和库存记录实测的补充质量；系统总充注量不得作为补充量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 工厂门口净合格放行冷冻兔或野兔肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_refrigerant_records`
- 来源：`eu-jrc-sa-bref`

###### 预冷与冻结R-404A 制冷剂补充（`freezing_r404a_makeup`）

向服务于预冷与冻结的制冷设备补充的 R-404A refrigerant 作为一项产品投入记录。

- 选定流：R-404A refrigerant
- 流属性/单位：Mass / kg
- 数量规则：由维修和库存记录实测的补充质量；系统总充注量不得作为补充量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 工厂门口净合格放行冷冻兔或野兔肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_refrigerant_records`
- 来源：`eu-jrc-sa-bref`

##### 废物流

##### 基本流

###### 预冷与冻结地下水直接取用（`freezing_groundwater_withdrawal`）

为预冷与冻结直接取用的 Water, ground 作为一项基本流投入，不与管网水重复。

- 选定流：Water, ground
- 流属性/单位：Volume / m3
- 数量规则：归属本过程的实测直接取水体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格放行冷冻兔或野兔肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_records`
- 来源：`eu-jrc-sa-bref`

###### 预冷与冻结地表水直接取用（`freezing_surface_water_withdrawal`）

为预冷与冻结直接取用的 Water, surface 作为一项基本流投入，不与管网水重复。

- 选定流：Water, surface
- 流属性/单位：Volume / m3
- 数量规则：归属本过程的实测直接取水体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格放行冷冻兔或野兔肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_records`
- 来源：`eu-jrc-sa-bref`

#### 输出

##### 产品流

###### 冷冻兔肉（`frozen_rabbit_meat_output`）

离开冻结操作的 Frozen rabbit meat 作为一项内部产品，保留物种、批次、质量和已记录冷冻状态证据。

- 选定流：Frozen rabbit meat
- 流属性/单位：Mass / kg
- 数量规则：与冷加工投入、库存变化和拒收核对后的实测冷冻输出质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口净合格放行冷冻兔或野兔肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_freezing_transfer`
- 来源：`unsd-cpc-21134`, `eu-jrc-sa-bref`

###### 冷冻野兔肉（`frozen_hare_meat_output`）

离开冻结操作的 Frozen hare meat 作为一项内部产品，保留物种、批次、质量和已记录冷冻状态证据。

- 选定流：Frozen hare meat
- 流属性/单位：Mass / kg
- 数量规则：与冷加工投入、库存变化和拒收核对后的实测冷冻输出质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口净合格放行冷冻兔或野兔肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_freezing_transfer`
- 来源：`unsd-cpc-21134`, `eu-jrc-sa-bref`

##### 废物流

###### 不合格冷冻兔肉（`off_spec_frozen_rabbit_meat`）

从冷加工过程转出的 Off-specification frozen rabbit meat 作为一项物种特定废物交换记录。

- 选定流：Off-specification frozen rabbit meat
- 流属性/单位：Mass / kg
- 数量规则：仅一次归属给有记录回收或处理去向的实测转出质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格放行冷冻兔或野兔肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 来源：`eu-jrc-sa-bref`

###### 不合格冷冻野兔肉（`off_spec_frozen_hare_meat`）

从冷加工过程转出的 Off-specification frozen hare meat 作为一项物种特定废物交换记录。

- 选定流：Off-specification frozen hare meat
- 流属性/单位：Mass / kg
- 数量规则：仅一次归属给有记录回收或处理去向的实测转出质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格放行冷冻兔或野兔肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 来源：`eu-jrc-sa-bref`

##### 基本流

###### 预冷与冻结化石二氧化碳排入空气（`freezing_fossil_co2_air`）

服务于预冷与冻结的现场燃烧产生的 Carbon dioxide, fossil, to air 作为一项基本流输出报告。

- 选定流：Carbon dioxide, fossil, to air
- 流属性/单位：Mass / kg
- 数量规则：直接实测质量，或由分别采集的燃料记录和保留的经核实因子计算的物质质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格放行冷冻兔或野兔肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_direct_air_emissions`
- 来源：`eu-jrc-sa-bref`

###### 预冷与冻结甲烷排入空气（`freezing_methane_air`）

服务于预冷与冻结的现场燃烧产生的 Methane to air 作为一项基本流输出报告。

- 选定流：Methane to air
- 流属性/单位：Mass / kg
- 数量规则：直接实测质量，或由分别采集的燃料记录和保留的经核实因子计算的物质质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格放行冷冻兔或野兔肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_direct_air_emissions`
- 来源：`eu-jrc-sa-bref`

###### 预冷与冻结氧化亚氮排入空气（`freezing_nitrous_oxide_air`）

服务于预冷与冻结的现场燃烧产生的 Dinitrogen monoxide to air 作为一项基本流输出报告。

- 选定流：Dinitrogen monoxide to air
- 流属性/单位：Mass / kg
- 数量规则：直接实测质量，或由分别采集的燃料记录和保留的经核实因子计算的物质质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格放行冷冻兔或野兔肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_direct_air_emissions`
- 来源：`eu-jrc-sa-bref`

###### 预冷与冻结一氧化氮排入空气（`freezing_nitrogen_monoxide_air`）

服务于预冷与冻结的现场燃烧产生的 Nitrogen monoxide to air 作为一项基本流输出报告。

- 选定流：Nitrogen monoxide to air
- 流属性/单位：Mass / kg
- 数量规则：直接实测质量，或由分别采集的燃料记录和保留的经核实因子计算的物质质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格放行冷冻兔或野兔肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_direct_air_emissions`
- 来源：`eu-jrc-sa-bref`

###### 预冷与冻结二氧化氮排入空气（`freezing_nitrogen_dioxide_air`）

服务于预冷与冻结的现场燃烧产生的 Nitrogen dioxide to air 作为一项基本流输出报告。

- 选定流：Nitrogen dioxide to air
- 流属性/单位：Mass / kg
- 数量规则：直接实测质量，或由分别采集的燃料记录和保留的经核实因子计算的物质质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格放行冷冻兔或野兔肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_direct_air_emissions`
- 来源：`eu-jrc-sa-bref`

###### 预冷与冻结一氧化碳排入空气（`freezing_carbon_monoxide_air`）

服务于预冷与冻结的现场燃烧产生的 Carbon monoxide to air 作为一项基本流输出报告。

- 选定流：Carbon monoxide to air
- 流属性/单位：Mass / kg
- 数量规则：直接实测质量，或由分别采集的燃料记录和保留的经核实因子计算的物质质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格放行冷冻兔或野兔肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_direct_air_emissions`
- 来源：`eu-jrc-sa-bref`

###### 预冷与冻结二氧化硫排入空气（`freezing_sulfur_dioxide_air`）

服务于预冷与冻结的现场燃烧产生的 Sulfur dioxide to air 作为一项基本流输出报告。

- 选定流：Sulfur dioxide to air
- 流属性/单位：Mass / kg
- 数量规则：直接实测质量，或由分别采集的燃料记录和保留的经核实因子计算的物质质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格放行冷冻兔或野兔肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_direct_air_emissions`
- 来源：`eu-jrc-sa-bref`

###### 预冷与冻结小于 2.5 µm 颗粒物排入空气（`freezing_pm25_air`）

服务于预冷与冻结的现场燃烧产生的 Particulate matter, <2.5 µm, to air 作为一项基本流输出报告。

- 选定流：Particulate matter, <2.5 µm, to air
- 流属性/单位：Mass / kg
- 数量规则：直接实测质量，或由分别采集的燃料记录和保留的经核实因子计算的物质质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格放行冷冻兔或野兔肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_direct_air_emissions`
- 来源：`eu-jrc-sa-bref`

###### 预冷与冻结2.5–10 µm 颗粒物排入空气（`freezing_pm_coarse_air`）

服务于预冷与冻结的现场燃烧产生的 Particulate matter, 2.5-10 µm, to air 作为一项基本流输出报告。

- 选定流：Particulate matter, 2.5-10 µm, to air
- 流属性/单位：Mass / kg
- 数量规则：直接实测质量，或由分别采集的燃料记录和保留的经核实因子计算的物质质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格放行冷冻兔或野兔肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_direct_air_emissions`
- 来源：`eu-jrc-sa-bref`

###### 预冷与冻结氨制冷剂排入空气（`freezing_ammonia_air`）

服务于预冷与冻结的制冷设备释放的 Ammonia to air 作为一项基本流输出报告。

- 选定流：Ammonia to air
- 流属性/单位：Mass / kg
- 数量规则：由期初充注量、实测补充量、期末充注量、实测回收量、事故记录及适用时经核实的混合物组成计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 工厂门口净合格放行冷冻兔或野兔肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_refrigerant_records`
- 来源：`eu-jrc-sa-bref`

###### 预冷与冻结HFC-134a 排入空气（`freezing_hfc134a_air`）

服务于预冷与冻结的制冷设备释放的 1,1,1,2-Tetrafluoroethane to air 作为一项基本流输出报告。

- 选定流：1,1,1,2-Tetrafluoroethane to air
- 流属性/单位：Mass / kg
- 数量规则：由期初充注量、实测补充量、期末充注量、实测回收量、事故记录及适用时经核实的混合物组成计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 工厂门口净合格放行冷冻兔或野兔肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_refrigerant_records`
- 来源：`eu-jrc-sa-bref`

###### 预冷与冻结HFC-125 排入空气（`freezing_hfc125_air`）

服务于预冷与冻结的制冷设备释放的 Pentafluoroethane to air 作为一项基本流输出报告。

- 选定流：Pentafluoroethane to air
- 流属性/单位：Mass / kg
- 数量规则：由期初充注量、实测补充量、期末充注量、实测回收量、事故记录及适用时经核实的混合物组成计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 工厂门口净合格放行冷冻兔或野兔肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_refrigerant_records`
- 来源：`eu-jrc-sa-bref`

###### 预冷与冻结HFC-143a 排入空气（`freezing_hfc143a_air`）

服务于预冷与冻结的制冷设备释放的 1,1,1-Trifluoroethane to air 作为一项基本流输出报告。

- 选定流：1,1,1-Trifluoroethane to air
- 流属性/单位：Mass / kg
- 数量规则：由期初充注量、实测补充量、期末充注量、实测回收量、事故记录及适用时经核实的混合物组成计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 工厂门口净合格放行冷冻兔或野兔肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_refrigerant_records`
- 来源：`eu-jrc-sa-bref`

### 过程：包装、冻藏与工厂门口放行（`packaging_frozen_storage`）

#### 输入

##### 产品流

###### 冷冻兔肉投入（`frozen_rabbit_meat_input`）

进入最终包装或散装发运的 Frozen rabbit meat 与冻结过程产出的物种特定内部产品相同。

- 选定流：Frozen rabbit meat
- 流属性/单位：Mass / kg
- 数量规则：进入包装和冻藏的实测转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口净合格放行冷冻兔或野兔肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_release`
- 来源：`eu-jrc-sa-bref`

###### 冷冻野兔肉投入（`frozen_hare_meat_input`）

进入最终包装或散装发运的 Frozen hare meat 与冻结过程产出的物种特定内部产品相同。

- 选定流：Frozen hare meat
- 流属性/单位：Mass / kg
- 数量规则：进入包装和冻藏的实测转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口净合格放行冷冻兔或野兔肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_release`
- 来源：`eu-jrc-sa-bref`

###### LDPE 薄膜（`ldpe_film_input`）

为放行包装跨越设施边界的 Low-density polyethylene film 作为一项包装组件投入记录。

- 选定流：Low-density polyethylene film
- 流属性/单位：Mass / kg
- 数量规则：扣除有记录退料后的实测组件领用质量，并与包装单元和对应废料流核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口净合格放行冷冻兔或野兔肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_release`
- 来源：`eu-jrc-sa-bref`, `eu-pef-2021-2279`

###### 聚酰胺阻隔膜（`polyamide_film_input`）

为放行包装跨越设施边界的 Polyamide barrier film 作为一项包装组件投入记录。

- 选定流：Polyamide barrier film
- 流属性/单位：Mass / kg
- 数量规则：扣除有记录退料后的实测组件领用质量，并与包装单元和对应废料流核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口净合格放行冷冻兔或野兔肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_release`
- 来源：`eu-jrc-sa-bref`, `eu-pef-2021-2279`

###### PET 托盘（`pet_tray_input`）

为放行包装跨越设施边界的 Polyethylene terephthalate tray 作为一项包装组件投入记录。

- 选定流：Polyethylene terephthalate tray
- 流属性/单位：Mass / kg
- 数量规则：扣除有记录退料后的实测组件领用质量，并与包装单元和对应废料流核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口净合格放行冷冻兔或野兔肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_release`
- 来源：`eu-jrc-sa-bref`, `eu-pef-2021-2279`

###### 聚丙烯托盘（`pp_tray_input`）

为放行包装跨越设施边界的 Polypropylene tray 作为一项包装组件投入记录。

- 选定流：Polypropylene tray
- 流属性/单位：Mass / kg
- 数量规则：扣除有记录退料后的实测组件领用质量，并与包装单元和对应废料流核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口净合格放行冷冻兔或野兔肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_release`
- 来源：`eu-jrc-sa-bref`, `eu-pef-2021-2279`

###### 发泡聚苯乙烯托盘（`eps_tray_input`）

为放行包装跨越设施边界的 Expanded polystyrene tray 作为一项包装组件投入记录。

- 选定流：Expanded polystyrene tray
- 流属性/单位：Mass / kg
- 数量规则：扣除有记录退料后的实测组件领用质量，并与包装单元和对应废料流核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口净合格放行冷冻兔或野兔肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_release`
- 来源：`eu-jrc-sa-bref`, `eu-pef-2021-2279`

###### 纸板盒（`paperboard_carton_input`）

为放行包装跨越设施边界的 Paperboard carton 作为一项包装组件投入记录。

- 选定流：Paperboard carton
- 流属性/单位：Mass / kg
- 数量规则：扣除有记录退料后的实测组件领用质量，并与包装单元和对应废料流核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口净合格放行冷冻兔或野兔肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_release`
- 来源：`eu-jrc-sa-bref`, `eu-pef-2021-2279`

###### 瓦楞纸箱（`corrugated_box_input`）

为放行包装跨越设施边界的 Corrugated board box 作为一项包装组件投入记录。

- 选定流：Corrugated board box
- 流属性/单位：Mass / kg
- 数量规则：扣除有记录退料后的实测组件领用质量，并与包装单元和对应废料流核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口净合格放行冷冻兔或野兔肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_release`
- 来源：`eu-jrc-sa-bref`, `eu-pef-2021-2279`

###### 铝箔（`aluminium_foil_input`）

为放行包装跨越设施边界的 Aluminium foil 作为一项包装组件投入记录。

- 选定流：Aluminium foil
- 流属性/单位：Mass / kg
- 数量规则：扣除有记录退料后的实测组件领用质量，并与包装单元和对应废料流核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口净合格放行冷冻兔或野兔肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_release`
- 来源：`eu-jrc-sa-bref`, `eu-pef-2021-2279`

###### 木托盘（`wooden_pallet_input`）

为放行包装跨越设施边界的 Wooden pallet 作为一项包装组件投入记录。

- 选定流：Wooden pallet
- 流属性/单位：Mass / kg
- 数量规则：扣除有记录退料后的实测组件领用质量，并与包装单元和对应废料流核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口净合格放行冷冻兔或野兔肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_release`
- 来源：`eu-jrc-sa-bref`, `eu-pef-2021-2279`

###### LDPE 缠绕膜（`ldpe_stretch_film_input`）

为放行包装跨越设施边界的 Low-density polyethylene stretch film 作为一项包装组件投入记录。

- 选定流：Low-density polyethylene stretch film
- 流属性/单位：Mass / kg
- 数量规则：扣除有记录退料后的实测组件领用质量，并与包装单元和对应废料流核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口净合格放行冷冻兔或野兔肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_release`
- 来源：`eu-jrc-sa-bref`, `eu-pef-2021-2279`

###### 包装与冻藏管网水（`packaging_storage_mains_water`）

跨越设施边界供应给包装与冻藏的 Potable mains water 与直接环境取水分别记录。

- 选定流：Potable mains water
- 流属性/单位：Volume / m3
- 数量规则：直接归属本过程的管网水实测体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格放行冷冻兔或野兔肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_records`
- 来源：`eu-jrc-sa-bref`

###### 包装与冻藏电网电力（`packaging_storage_grid_electricity`）

包装与冻藏消耗的 Electricity, medium voltage, grid mix 作为一项能源交换记录，并与所有其他公用工程分开。

- 选定流：Electricity, medium voltage, grid mix
- 流属性/单位：Energy / kWh
- 数量规则：直接归属本过程的实测用电量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格放行冷冻兔或野兔肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utility_records`
- 来源：`eu-jrc-sa-bref`

###### 包装与冻藏外购蒸汽（`packaging_storage_purchased_steam`）

包装与冻藏消耗的 Purchased steam 作为一项能源交换记录，并与所有其他公用工程分开。

- 选定流：Purchased steam
- 流属性/单位：Energy / MJ
- 数量规则：实测交付蒸汽能量，或由实测蒸汽质量和保留的供应条件计算的能量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格放行冷冻兔或野兔肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_utility_records`
- 来源：`eu-jrc-sa-bref`

###### 包装与冻藏外购热水（`packaging_storage_purchased_hot_water`）

包装与冻藏消耗的 Purchased hot water 作为一项能源交换记录，并与所有其他公用工程分开。

- 选定流：Purchased hot water
- 流属性/单位：Energy / MJ
- 数量规则：实测交付热水能量，或由实测流量及保留的供回水温度计算的能量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格放行冷冻兔或野兔肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_utility_records`
- 来源：`eu-jrc-sa-bref`

###### 包装与冻藏天然气（`packaging_storage_natural_gas`）

包装与冻藏消耗的 Natural gas 作为一项能源交换记录，并与所有其他公用工程分开。

- 选定流：Natural gas
- 流属性/单位：Energy / MJ
- 数量规则：实测能量，或使用有记录的供应商热值换算实测气量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格放行冷冻兔或野兔肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_utility_records`
- 来源：`eu-jrc-sa-bref`

###### 包装与冻藏柴油（`packaging_storage_diesel`）

包装与冻藏消耗的 Diesel fuel 作为一项能源交换记录，并与所有其他公用工程分开。

- 选定流：Diesel fuel
- 流属性/单位：Energy / MJ
- 数量规则：使用有记录的供应商热值换算实测燃料量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格放行冷冻兔或野兔肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_utility_records`
- 来源：`eu-jrc-sa-bref`

###### 包装与冻藏液化石油气（`packaging_storage_lpg`）

包装与冻藏消耗的 Liquefied petroleum gas 作为一项能源交换记录，并与所有其他公用工程分开。

- 选定流：Liquefied petroleum gas
- 流属性/单位：Energy / MJ
- 数量规则：使用有记录的供应商热值换算实测燃料量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格放行冷冻兔或野兔肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_utility_records`
- 来源：`eu-jrc-sa-bref`

###### 包装与冻藏R-717 制冷剂补充（`packaging_storage_r717_makeup`）

向服务于包装与冻藏的制冷设备补充的 Ammonia refrigerant (R-717) 作为一项产品投入记录。

- 选定流：Ammonia refrigerant (R-717)
- 流属性/单位：Mass / kg
- 数量规则：由维修和库存记录实测的补充质量；系统总充注量不得作为补充量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 工厂门口净合格放行冷冻兔或野兔肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_refrigerant_records`
- 来源：`eu-jrc-sa-bref`

###### 包装与冻藏HFC-134a 制冷剂补充（`packaging_storage_hfc134a_makeup`）

向服务于包装与冻藏的制冷设备补充的 1,1,1,2-Tetrafluoroethane refrigerant (HFC-134a) 作为一项产品投入记录。

- 选定流：1,1,1,2-Tetrafluoroethane refrigerant (HFC-134a)
- 流属性/单位：Mass / kg
- 数量规则：由维修和库存记录实测的补充质量；系统总充注量不得作为补充量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 工厂门口净合格放行冷冻兔或野兔肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_refrigerant_records`
- 来源：`eu-jrc-sa-bref`

###### 包装与冻藏R-404A 制冷剂补充（`packaging_storage_r404a_makeup`）

向服务于包装与冻藏的制冷设备补充的 R-404A refrigerant 作为一项产品投入记录。

- 选定流：R-404A refrigerant
- 流属性/单位：Mass / kg
- 数量规则：由维修和库存记录实测的补充质量；系统总充注量不得作为补充量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 工厂门口净合格放行冷冻兔或野兔肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_refrigerant_records`
- 来源：`eu-jrc-sa-bref`

##### 废物流

##### 基本流

###### 包装与冻藏地下水直接取用（`packaging_storage_groundwater_withdrawal`）

为包装与冻藏直接取用的 Water, ground 作为一项基本流投入，不与管网水重复。

- 选定流：Water, ground
- 流属性/单位：Volume / m3
- 数量规则：归属本过程的实测直接取水体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格放行冷冻兔或野兔肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_records`
- 来源：`eu-jrc-sa-bref`

###### 包装与冻藏地表水直接取用（`packaging_storage_surface_water_withdrawal`）

为包装与冻藏直接取用的 Water, surface 作为一项基本流投入，不与管网水重复。

- 选定流：Water, surface
- 流属性/单位：Volume / m3
- 数量规则：归属本过程的实测直接取水体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格放行冷冻兔或野兔肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_records`
- 来源：`eu-jrc-sa-bref`

#### 输出

##### 产品流

###### 放行冷冻兔或野兔肉（`reference_product_output`）

参考输出是工厂门口放行的准确 CPC 21134 冷冻兔或野兔肉产品；鲜或冷藏肉以及食用内脏不在范围内。

- 选定流：Meat of rabbits and hares, frozen `0204bc38-8047-4cbb-99cc-2cd7c41c626d`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：恰好 1 kg 净合格冷冻肉，不含包装质量
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口净合格放行冷冻兔或野兔肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）
- 采集协议：`cp_packaging_release`
- 来源：`unsd-cpc-21134`

##### 废物流

###### 拒收包装冷冻兔肉（`rejected_packaged_rabbit_meat`）

在包装或放行时拒收的 Rejected packaged frozen rabbit meat 与其包装废物分别记录。

- 选定流：Rejected packaged frozen rabbit meat
- 流属性/单位：Mass / kg
- 数量规则：不含已分别记录包装质量的实测拒收产品质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格放行冷冻兔或野兔肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 来源：`eu-jrc-sa-bref`

###### 拒收包装冷冻野兔肉（`rejected_packaged_hare_meat`）

在包装或放行时拒收的 Rejected packaged frozen hare meat 与其包装废物分别记录。

- 选定流：Rejected packaged frozen hare meat
- 流属性/单位：Mass / kg
- 数量规则：不含已分别记录包装质量的实测拒收产品质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格放行冷冻兔或野兔肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 来源：`eu-jrc-sa-bref`

###### LDPE 薄膜废物（`ldpe_film_waste`）

包装过程中产生的 Waste low-density polyethylene film 作为一项单一材料废物交换记录。

- 选定流：Waste low-density polyethylene film
- 流属性/单位：Mass / kg
- 数量规则：仅一次归属给有记录回收或处理去向的实测废料质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格放行冷冻兔或野兔肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 来源：`eu-jrc-sa-bref`, `eu-pef-2021-2279`

###### 聚酰胺阻隔膜废物（`polyamide_film_waste`）

包装过程中产生的 Waste polyamide barrier film 作为一项单一材料废物交换记录。

- 选定流：Waste polyamide barrier film
- 流属性/单位：Mass / kg
- 数量规则：仅一次归属给有记录回收或处理去向的实测废料质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格放行冷冻兔或野兔肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 来源：`eu-jrc-sa-bref`, `eu-pef-2021-2279`

###### PET 托盘废物（`pet_tray_waste`）

包装过程中产生的 Waste polyethylene terephthalate tray 作为一项单一材料废物交换记录。

- 选定流：Waste polyethylene terephthalate tray
- 流属性/单位：Mass / kg
- 数量规则：仅一次归属给有记录回收或处理去向的实测废料质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格放行冷冻兔或野兔肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 来源：`eu-jrc-sa-bref`, `eu-pef-2021-2279`

###### 聚丙烯托盘废物（`pp_tray_waste`）

包装过程中产生的 Waste polypropylene tray 作为一项单一材料废物交换记录。

- 选定流：Waste polypropylene tray
- 流属性/单位：Mass / kg
- 数量规则：仅一次归属给有记录回收或处理去向的实测废料质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格放行冷冻兔或野兔肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 来源：`eu-jrc-sa-bref`, `eu-pef-2021-2279`

###### 发泡聚苯乙烯托盘废物（`eps_tray_waste`）

包装过程中产生的 Waste expanded polystyrene tray 作为一项单一材料废物交换记录。

- 选定流：Waste expanded polystyrene tray
- 流属性/单位：Mass / kg
- 数量规则：仅一次归属给有记录回收或处理去向的实测废料质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格放行冷冻兔或野兔肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 来源：`eu-jrc-sa-bref`, `eu-pef-2021-2279`

###### 纸板盒废物（`paperboard_carton_waste`）

包装过程中产生的 Waste paperboard carton 作为一项单一材料废物交换记录。

- 选定流：Waste paperboard carton
- 流属性/单位：Mass / kg
- 数量规则：仅一次归属给有记录回收或处理去向的实测废料质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格放行冷冻兔或野兔肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 来源：`eu-jrc-sa-bref`, `eu-pef-2021-2279`

###### 瓦楞纸箱废物（`corrugated_box_waste`）

包装过程中产生的 Waste corrugated board box 作为一项单一材料废物交换记录。

- 选定流：Waste corrugated board box
- 流属性/单位：Mass / kg
- 数量规则：仅一次归属给有记录回收或处理去向的实测废料质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格放行冷冻兔或野兔肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 来源：`eu-jrc-sa-bref`, `eu-pef-2021-2279`

###### 铝箔废物（`aluminium_foil_waste`）

包装过程中产生的 Waste aluminium foil 作为一项单一材料废物交换记录。

- 选定流：Waste aluminium foil
- 流属性/单位：Mass / kg
- 数量规则：仅一次归属给有记录回收或处理去向的实测废料质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格放行冷冻兔或野兔肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 来源：`eu-jrc-sa-bref`, `eu-pef-2021-2279`

###### 木托盘废物（`wooden_pallet_waste`）

包装过程中产生的 Waste wooden pallet 作为一项单一材料废物交换记录。

- 选定流：Waste wooden pallet
- 流属性/单位：Mass / kg
- 数量规则：仅一次归属给有记录回收或处理去向的实测废料质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格放行冷冻兔或野兔肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 来源：`eu-jrc-sa-bref`, `eu-pef-2021-2279`

###### LDPE 缠绕膜废物（`ldpe_stretch_film_waste`）

包装过程中产生的 Waste low-density polyethylene stretch film 作为一项单一材料废物交换记录。

- 选定流：Waste low-density polyethylene stretch film
- 流属性/单位：Mass / kg
- 数量规则：仅一次归属给有记录回收或处理去向的实测废料质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格放行冷冻兔或野兔肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 来源：`eu-jrc-sa-bref`, `eu-pef-2021-2279`

##### 基本流

###### 包装与冻藏化石二氧化碳排入空气（`packaging_storage_fossil_co2_air`）

服务于包装与冻藏的现场燃烧产生的 Carbon dioxide, fossil, to air 作为一项基本流输出报告。

- 选定流：Carbon dioxide, fossil, to air
- 流属性/单位：Mass / kg
- 数量规则：直接实测质量，或由分别采集的燃料记录和保留的经核实因子计算的物质质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格放行冷冻兔或野兔肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_direct_air_emissions`
- 来源：`eu-jrc-sa-bref`

###### 包装与冻藏甲烷排入空气（`packaging_storage_methane_air`）

服务于包装与冻藏的现场燃烧产生的 Methane to air 作为一项基本流输出报告。

- 选定流：Methane to air
- 流属性/单位：Mass / kg
- 数量规则：直接实测质量，或由分别采集的燃料记录和保留的经核实因子计算的物质质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格放行冷冻兔或野兔肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_direct_air_emissions`
- 来源：`eu-jrc-sa-bref`

###### 包装与冻藏氧化亚氮排入空气（`packaging_storage_nitrous_oxide_air`）

服务于包装与冻藏的现场燃烧产生的 Dinitrogen monoxide to air 作为一项基本流输出报告。

- 选定流：Dinitrogen monoxide to air
- 流属性/单位：Mass / kg
- 数量规则：直接实测质量，或由分别采集的燃料记录和保留的经核实因子计算的物质质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格放行冷冻兔或野兔肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_direct_air_emissions`
- 来源：`eu-jrc-sa-bref`

###### 包装与冻藏一氧化氮排入空气（`packaging_storage_nitrogen_monoxide_air`）

服务于包装与冻藏的现场燃烧产生的 Nitrogen monoxide to air 作为一项基本流输出报告。

- 选定流：Nitrogen monoxide to air
- 流属性/单位：Mass / kg
- 数量规则：直接实测质量，或由分别采集的燃料记录和保留的经核实因子计算的物质质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格放行冷冻兔或野兔肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_direct_air_emissions`
- 来源：`eu-jrc-sa-bref`

###### 包装与冻藏二氧化氮排入空气（`packaging_storage_nitrogen_dioxide_air`）

服务于包装与冻藏的现场燃烧产生的 Nitrogen dioxide to air 作为一项基本流输出报告。

- 选定流：Nitrogen dioxide to air
- 流属性/单位：Mass / kg
- 数量规则：直接实测质量，或由分别采集的燃料记录和保留的经核实因子计算的物质质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格放行冷冻兔或野兔肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_direct_air_emissions`
- 来源：`eu-jrc-sa-bref`

###### 包装与冻藏一氧化碳排入空气（`packaging_storage_carbon_monoxide_air`）

服务于包装与冻藏的现场燃烧产生的 Carbon monoxide to air 作为一项基本流输出报告。

- 选定流：Carbon monoxide to air
- 流属性/单位：Mass / kg
- 数量规则：直接实测质量，或由分别采集的燃料记录和保留的经核实因子计算的物质质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格放行冷冻兔或野兔肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_direct_air_emissions`
- 来源：`eu-jrc-sa-bref`

###### 包装与冻藏二氧化硫排入空气（`packaging_storage_sulfur_dioxide_air`）

服务于包装与冻藏的现场燃烧产生的 Sulfur dioxide to air 作为一项基本流输出报告。

- 选定流：Sulfur dioxide to air
- 流属性/单位：Mass / kg
- 数量规则：直接实测质量，或由分别采集的燃料记录和保留的经核实因子计算的物质质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格放行冷冻兔或野兔肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_direct_air_emissions`
- 来源：`eu-jrc-sa-bref`

###### 包装与冻藏小于 2.5 µm 颗粒物排入空气（`packaging_storage_pm25_air`）

服务于包装与冻藏的现场燃烧产生的 Particulate matter, <2.5 µm, to air 作为一项基本流输出报告。

- 选定流：Particulate matter, <2.5 µm, to air
- 流属性/单位：Mass / kg
- 数量规则：直接实测质量，或由分别采集的燃料记录和保留的经核实因子计算的物质质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格放行冷冻兔或野兔肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_direct_air_emissions`
- 来源：`eu-jrc-sa-bref`

###### 包装与冻藏2.5–10 µm 颗粒物排入空气（`packaging_storage_pm_coarse_air`）

服务于包装与冻藏的现场燃烧产生的 Particulate matter, 2.5-10 µm, to air 作为一项基本流输出报告。

- 选定流：Particulate matter, 2.5-10 µm, to air
- 流属性/单位：Mass / kg
- 数量规则：直接实测质量，或由分别采集的燃料记录和保留的经核实因子计算的物质质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格放行冷冻兔或野兔肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_direct_air_emissions`
- 来源：`eu-jrc-sa-bref`

###### 包装与冻藏氨制冷剂排入空气（`packaging_storage_ammonia_air`）

服务于包装与冻藏的制冷设备释放的 Ammonia to air 作为一项基本流输出报告。

- 选定流：Ammonia to air
- 流属性/单位：Mass / kg
- 数量规则：由期初充注量、实测补充量、期末充注量、实测回收量、事故记录及适用时经核实的混合物组成计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 工厂门口净合格放行冷冻兔或野兔肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_refrigerant_records`
- 来源：`eu-jrc-sa-bref`

###### 包装与冻藏HFC-134a 排入空气（`packaging_storage_hfc134a_air`）

服务于包装与冻藏的制冷设备释放的 1,1,1,2-Tetrafluoroethane to air 作为一项基本流输出报告。

- 选定流：1,1,1,2-Tetrafluoroethane to air
- 流属性/单位：Mass / kg
- 数量规则：由期初充注量、实测补充量、期末充注量、实测回收量、事故记录及适用时经核实的混合物组成计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 工厂门口净合格放行冷冻兔或野兔肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_refrigerant_records`
- 来源：`eu-jrc-sa-bref`

###### 包装与冻藏HFC-125 排入空气（`packaging_storage_hfc125_air`）

服务于包装与冻藏的制冷设备释放的 Pentafluoroethane to air 作为一项基本流输出报告。

- 选定流：Pentafluoroethane to air
- 流属性/单位：Mass / kg
- 数量规则：由期初充注量、实测补充量、期末充注量、实测回收量、事故记录及适用时经核实的混合物组成计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 工厂门口净合格放行冷冻兔或野兔肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_refrigerant_records`
- 来源：`eu-jrc-sa-bref`

###### 包装与冻藏HFC-143a 排入空气（`packaging_storage_hfc143a_air`）

服务于包装与冻藏的制冷设备释放的 1,1,1-Trifluoroethane to air 作为一项基本流输出报告。

- 选定流：1,1,1-Trifluoroethane to air
- 流属性/单位：Mass / kg
- 数量规则：由期初充注量、实测补充量、期末充注量、实测回收量、事故记录及适用时经核实的混合物组成计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 工厂门口净合格放行冷冻兔或野兔肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_refrigerant_records`
- 来源：`eu-jrc-sa-bref`

### 过程：清洗、消毒与废水管理（`sanitation_wastewater`）

#### 输入

##### 产品流

###### 氢氧化钠投入（`sodium_hydroxide_input`）

用于清洗、消毒或条件性场内废水处理的 Sodium hydroxide 作为一项化学品投入记录。

- 选定流：Sodium hydroxide
- 流属性/单位：Mass / kg
- 数量规则：实测商品领用质量，并在计算需要时保留有效浓度和用途
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 工厂门口净合格放行冷冻兔或野兔肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_chemical_records`
- 来源：`eu-jrc-sa-bref`

###### 硝酸投入（`nitric_acid_input`）

用于清洗、消毒或条件性场内废水处理的 Nitric acid 作为一项化学品投入记录。

- 选定流：Nitric acid
- 流属性/单位：Mass / kg
- 数量规则：实测商品领用质量，并在计算需要时保留有效浓度和用途
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 工厂门口净合格放行冷冻兔或野兔肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_chemical_records`
- 来源：`eu-jrc-sa-bref`

###### 过乙酸投入（`peracetic_acid_input`）

用于清洗、消毒或条件性场内废水处理的 Peracetic acid 作为一项化学品投入记录。

- 选定流：Peracetic acid
- 流属性/单位：Mass / kg
- 数量规则：实测商品领用质量，并在计算需要时保留有效浓度和用途
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 工厂门口净合格放行冷冻兔或野兔肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_chemical_records`
- 来源：`eu-jrc-sa-bref`

###### 次氯酸钠投入（`sodium_hypochlorite_input`）

用于清洗、消毒或条件性场内废水处理的 Sodium hypochlorite 作为一项化学品投入记录。

- 选定流：Sodium hypochlorite
- 流属性/单位：Mass / kg
- 数量规则：实测商品领用质量，并在计算需要时保留有效浓度和用途
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 工厂门口净合格放行冷冻兔或野兔肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_chemical_records`
- 来源：`eu-jrc-sa-bref`

###### 过氧化氢投入（`hydrogen_peroxide_input`）

用于清洗、消毒或条件性场内废水处理的 Hydrogen peroxide 作为一项化学品投入记录。

- 选定流：Hydrogen peroxide
- 流属性/单位：Mass / kg
- 数量规则：实测商品领用质量，并在计算需要时保留有效浓度和用途
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 工厂门口净合格放行冷冻兔或野兔肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_chemical_records`
- 来源：`eu-jrc-sa-bref`

###### 氯化铁投入（`ferric_chloride_input`）

用于清洗、消毒或条件性场内废水处理的 Ferric chloride 作为一项化学品投入记录。

- 选定流：Ferric chloride
- 流属性/单位：Mass / kg
- 数量规则：实测商品领用质量，并在计算需要时保留有效浓度和用途
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 工厂门口净合格放行冷冻兔或野兔肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_chemical_records`
- 来源：`eu-jrc-sa-bref`

###### 氢氧化钙投入（`calcium_hydroxide_input`）

用于清洗、消毒或条件性场内废水处理的 Calcium hydroxide 作为一项化学品投入记录。

- 选定流：Calcium hydroxide
- 流属性/单位：Mass / kg
- 数量规则：实测商品领用质量，并在计算需要时保留有效浓度和用途
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 工厂门口净合格放行冷冻兔或野兔肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_chemical_records`
- 来源：`eu-jrc-sa-bref`

###### 聚丙烯酰胺絮凝剂投入（`polyacrylamide_input`）

用于清洗、消毒或条件性场内废水处理的 Polyacrylamide flocculant 作为一项化学品投入记录。

- 选定流：Polyacrylamide flocculant
- 流属性/单位：Mass / kg
- 数量规则：实测商品领用质量，并在计算需要时保留有效浓度和用途
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 工厂门口净合格放行冷冻兔或野兔肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_chemical_records`
- 来源：`eu-jrc-sa-bref`

###### 清洗与废水管理管网水（`sanitation_mains_water`）

跨越设施边界供应给清洗与废水管理的 Potable mains water 与直接环境取水分别记录。

- 选定流：Potable mains water
- 流属性/单位：Volume / m3
- 数量规则：直接归属本过程的管网水实测体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格放行冷冻兔或野兔肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_records`
- 来源：`eu-jrc-sa-bref`

###### 清洗与废水管理电网电力（`sanitation_grid_electricity`）

清洗与废水管理消耗的 Electricity, medium voltage, grid mix 作为一项能源交换记录，并与所有其他公用工程分开。

- 选定流：Electricity, medium voltage, grid mix
- 流属性/单位：Energy / kWh
- 数量规则：直接归属本过程的实测用电量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格放行冷冻兔或野兔肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utility_records`
- 来源：`eu-jrc-sa-bref`

###### 清洗与废水管理外购蒸汽（`sanitation_purchased_steam`）

清洗与废水管理消耗的 Purchased steam 作为一项能源交换记录，并与所有其他公用工程分开。

- 选定流：Purchased steam
- 流属性/单位：Energy / MJ
- 数量规则：实测交付蒸汽能量，或由实测蒸汽质量和保留的供应条件计算的能量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格放行冷冻兔或野兔肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_utility_records`
- 来源：`eu-jrc-sa-bref`

###### 清洗与废水管理外购热水（`sanitation_purchased_hot_water`）

清洗与废水管理消耗的 Purchased hot water 作为一项能源交换记录，并与所有其他公用工程分开。

- 选定流：Purchased hot water
- 流属性/单位：Energy / MJ
- 数量规则：实测交付热水能量，或由实测流量及保留的供回水温度计算的能量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格放行冷冻兔或野兔肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_utility_records`
- 来源：`eu-jrc-sa-bref`

###### 清洗与废水管理天然气（`sanitation_natural_gas`）

清洗与废水管理消耗的 Natural gas 作为一项能源交换记录，并与所有其他公用工程分开。

- 选定流：Natural gas
- 流属性/单位：Energy / MJ
- 数量规则：实测能量，或使用有记录的供应商热值换算实测气量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格放行冷冻兔或野兔肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_utility_records`
- 来源：`eu-jrc-sa-bref`

###### 清洗与废水管理柴油（`sanitation_diesel`）

清洗与废水管理消耗的 Diesel fuel 作为一项能源交换记录，并与所有其他公用工程分开。

- 选定流：Diesel fuel
- 流属性/单位：Energy / MJ
- 数量规则：使用有记录的供应商热值换算实测燃料量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格放行冷冻兔或野兔肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_utility_records`
- 来源：`eu-jrc-sa-bref`

###### 清洗与废水管理液化石油气（`sanitation_lpg`）

清洗与废水管理消耗的 Liquefied petroleum gas 作为一项能源交换记录，并与所有其他公用工程分开。

- 选定流：Liquefied petroleum gas
- 流属性/单位：Energy / MJ
- 数量规则：使用有记录的供应商热值换算实测燃料量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格放行冷冻兔或野兔肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_utility_records`
- 来源：`eu-jrc-sa-bref`

##### 废物流

##### 基本流

###### 清洗与废水管理地下水直接取用（`sanitation_groundwater_withdrawal`）

为清洗与废水管理直接取用的 Water, ground 作为一项基本流投入，不与管网水重复。

- 选定流：Water, ground
- 流属性/单位：Volume / m3
- 数量规则：归属本过程的实测直接取水体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格放行冷冻兔或野兔肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_records`
- 来源：`eu-jrc-sa-bref`

###### 清洗与废水管理地表水直接取用（`sanitation_surface_water_withdrawal`）

为清洗与废水管理直接取用的 Water, surface 作为一项基本流投入，不与管网水重复。

- 选定流：Water, surface
- 流属性/单位：Volume / m3
- 数量规则：归属本过程的实测直接取水体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格放行冷冻兔或野兔肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_records`
- 来源：`eu-jrc-sa-bref`

#### 输出

##### 产品流

##### 废物流

###### 普通负荷屠宰废水（`ordinary_strength_wastewater`）

离开清洗或废水管理的 Ordinary-strength slaughterhouse wastewater 作为一项废物交换记录，不与直接环境排放重复。

- 选定流：Ordinary-strength slaughterhouse wastewater
- 流属性/单位：Volume / m3
- 数量规则：仅一次转入有记录处理交换的实测废水体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格放行冷冻兔或野兔肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_records`
- 来源：`eu-jrc-sa-bref`

###### 高负荷屠宰废水（`high_strength_wastewater`）

离开清洗或废水管理的 High-strength slaughterhouse wastewater 作为一项废物交换记录，不与直接环境排放重复。

- 选定流：High-strength slaughterhouse wastewater
- 流属性/单位：Volume / m3
- 数量规则：仅一次转入有记录处理交换的实测废水体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格放行冷冻兔或野兔肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_records`
- 来源：`eu-jrc-sa-bref`

###### 废水处理污泥（`wastewater_treatment_sludge`）

离开清洗或废水管理的 Wastewater-treatment sludge 作为一项废物交换记录，不与直接环境排放重复。

- 选定流：Wastewater-treatment sludge
- 流属性/单位：Mass / kg
- 数量规则：仅一次归属给有记录回收或处理去向的实测废物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格放行冷冻兔或野兔肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_records`
- 来源：`eu-jrc-sa-bref`

###### 屠宰筛渣（`slaughterhouse_screen_residue`）

离开清洗或废水管理的 Slaughterhouse screen residue 作为一项废物交换记录，不与直接环境排放重复。

- 选定流：Slaughterhouse screen residue
- 流属性/单位：Mass / kg
- 数量规则：仅一次归属给有记录回收或处理去向的实测废物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格放行冷冻兔或野兔肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_records`
- 来源：`eu-jrc-sa-bref`

###### 隔油分离兔脂废物（`rabbit_grease_separation_waste`）

离开清洗或废水管理的 Waste rabbit fat from grease separation 作为一项废物交换记录，不与直接环境排放重复。

- 选定流：Waste rabbit fat from grease separation
- 流属性/单位：Mass / kg
- 数量规则：仅一次归属给有记录回收或处理去向的实测废物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格放行冷冻兔或野兔肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_records`
- 来源：`eu-jrc-sa-bref`

###### 隔油分离野兔脂废物（`hare_grease_separation_waste`）

离开清洗或废水管理的 Waste hare fat from grease separation 作为一项废物交换记录，不与直接环境排放重复。

- 选定流：Waste hare fat from grease separation
- 流属性/单位：Mass / kg
- 数量规则：仅一次归属给有记录回收或处理去向的实测废物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格放行冷冻兔或野兔肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_records`
- 来源：`eu-jrc-sa-bref`

##### 基本流

###### 清洗与废水管理化石二氧化碳排入空气（`sanitation_fossil_co2_air`）

服务于清洗与废水管理的现场燃烧产生的 Carbon dioxide, fossil, to air 作为一项基本流输出报告。

- 选定流：Carbon dioxide, fossil, to air
- 流属性/单位：Mass / kg
- 数量规则：直接实测质量，或由分别采集的燃料记录和保留的经核实因子计算的物质质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格放行冷冻兔或野兔肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_direct_air_emissions`
- 来源：`eu-jrc-sa-bref`

###### 清洗与废水管理甲烷排入空气（`sanitation_methane_air`）

服务于清洗与废水管理的现场燃烧产生的 Methane to air 作为一项基本流输出报告。

- 选定流：Methane to air
- 流属性/单位：Mass / kg
- 数量规则：直接实测质量，或由分别采集的燃料记录和保留的经核实因子计算的物质质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格放行冷冻兔或野兔肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_direct_air_emissions`
- 来源：`eu-jrc-sa-bref`

###### 清洗与废水管理氧化亚氮排入空气（`sanitation_nitrous_oxide_air`）

服务于清洗与废水管理的现场燃烧产生的 Dinitrogen monoxide to air 作为一项基本流输出报告。

- 选定流：Dinitrogen monoxide to air
- 流属性/单位：Mass / kg
- 数量规则：直接实测质量，或由分别采集的燃料记录和保留的经核实因子计算的物质质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格放行冷冻兔或野兔肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_direct_air_emissions`
- 来源：`eu-jrc-sa-bref`

###### 清洗与废水管理一氧化氮排入空气（`sanitation_nitrogen_monoxide_air`）

服务于清洗与废水管理的现场燃烧产生的 Nitrogen monoxide to air 作为一项基本流输出报告。

- 选定流：Nitrogen monoxide to air
- 流属性/单位：Mass / kg
- 数量规则：直接实测质量，或由分别采集的燃料记录和保留的经核实因子计算的物质质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格放行冷冻兔或野兔肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_direct_air_emissions`
- 来源：`eu-jrc-sa-bref`

###### 清洗与废水管理二氧化氮排入空气（`sanitation_nitrogen_dioxide_air`）

服务于清洗与废水管理的现场燃烧产生的 Nitrogen dioxide to air 作为一项基本流输出报告。

- 选定流：Nitrogen dioxide to air
- 流属性/单位：Mass / kg
- 数量规则：直接实测质量，或由分别采集的燃料记录和保留的经核实因子计算的物质质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格放行冷冻兔或野兔肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_direct_air_emissions`
- 来源：`eu-jrc-sa-bref`

###### 清洗与废水管理一氧化碳排入空气（`sanitation_carbon_monoxide_air`）

服务于清洗与废水管理的现场燃烧产生的 Carbon monoxide to air 作为一项基本流输出报告。

- 选定流：Carbon monoxide to air
- 流属性/单位：Mass / kg
- 数量规则：直接实测质量，或由分别采集的燃料记录和保留的经核实因子计算的物质质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格放行冷冻兔或野兔肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_direct_air_emissions`
- 来源：`eu-jrc-sa-bref`

###### 清洗与废水管理二氧化硫排入空气（`sanitation_sulfur_dioxide_air`）

服务于清洗与废水管理的现场燃烧产生的 Sulfur dioxide to air 作为一项基本流输出报告。

- 选定流：Sulfur dioxide to air
- 流属性/单位：Mass / kg
- 数量规则：直接实测质量，或由分别采集的燃料记录和保留的经核实因子计算的物质质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格放行冷冻兔或野兔肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_direct_air_emissions`
- 来源：`eu-jrc-sa-bref`

###### 清洗与废水管理小于 2.5 µm 颗粒物排入空气（`sanitation_pm25_air`）

服务于清洗与废水管理的现场燃烧产生的 Particulate matter, <2.5 µm, to air 作为一项基本流输出报告。

- 选定流：Particulate matter, <2.5 µm, to air
- 流属性/单位：Mass / kg
- 数量规则：直接实测质量，或由分别采集的燃料记录和保留的经核实因子计算的物质质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格放行冷冻兔或野兔肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_direct_air_emissions`
- 来源：`eu-jrc-sa-bref`

###### 清洗与废水管理2.5–10 µm 颗粒物排入空气（`sanitation_pm_coarse_air`）

服务于清洗与废水管理的现场燃烧产生的 Particulate matter, 2.5-10 µm, to air 作为一项基本流输出报告。

- 选定流：Particulate matter, 2.5-10 µm, to air
- 流属性/单位：Mass / kg
- 数量规则：直接实测质量，或由分别采集的燃料记录和保留的经核实因子计算的物质质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格放行冷冻兔或野兔肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_direct_air_emissions`
- 来源：`eu-jrc-sa-bref`

###### 化学需氧量排入水体（`direct_cod_water`）

仅当前景设施直接排放处理后废水时，才把 Chemical oxygen demand to water 作为一项基本流输出报告。

- 选定流：Chemical oxygen demand to water
- 流属性/单位：Mass / kg
- 数量规则：由实测直接排放体积和具有代表性的实测浓度按一致单位计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格放行冷冻兔或野兔肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_records`
- 来源：`eu-jrc-sa-bref`

###### 生化需氧量排入水体（`direct_bod5_water`）

仅当前景设施直接排放处理后废水时，才把 Biochemical oxygen demand to water 作为一项基本流输出报告。

- 选定流：Biochemical oxygen demand to water
- 流属性/单位：Mass / kg
- 数量规则：由实测直接排放体积和具有代表性的实测浓度按一致单位计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格放行冷冻兔或野兔肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_records`
- 来源：`eu-jrc-sa-bref`

###### 总悬浮固体排入水体（`direct_tss_water`）

仅当前景设施直接排放处理后废水时，才把 Total suspended solids to water 作为一项基本流输出报告。

- 选定流：Total suspended solids to water
- 流属性/单位：Mass / kg
- 数量规则：由实测直接排放体积和具有代表性的实测浓度按一致单位计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格放行冷冻兔或野兔肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_records`
- 来源：`eu-jrc-sa-bref`

###### 总氮排入水体（`direct_total_nitrogen_water`）

仅当前景设施直接排放处理后废水时，才把 Total nitrogen to water 作为一项基本流输出报告。

- 选定流：Total nitrogen to water
- 流属性/单位：Mass / kg
- 数量规则：由实测直接排放体积和具有代表性的实测浓度按一致单位计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格放行冷冻兔或野兔肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_records`
- 来源：`eu-jrc-sa-bref`

###### 总磷排入水体（`direct_total_phosphorus_water`）

仅当前景设施直接排放处理后废水时，才把 Total phosphorus to water 作为一项基本流输出报告。

- 选定流：Total phosphorus to water
- 流属性/单位：Mass / kg
- 数量规则：由实测直接排放体积和具有代表性的实测浓度按一致单位计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格放行冷冻兔或野兔肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_records`
- 来源：`eu-jrc-sa-bref`

###### 铵排入水体（`direct_ammonium_water`）

仅当前景设施直接排放处理后废水时，才把 Ammonium to water 作为一项基本流输出报告。

- 选定流：Ammonium to water
- 流属性/单位：Mass / kg
- 数量规则：由实测直接排放体积和具有代表性的实测浓度按一致单位计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格放行冷冻兔或野兔肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_records`
- 来源：`eu-jrc-sa-bref`

###### 硝酸盐排入水体（`direct_nitrate_water`）

仅当前景设施直接排放处理后废水时，才把 Nitrate to water 作为一项基本流输出报告。

- 选定流：Nitrate to water
- 流属性/单位：Mass / kg
- 数量规则：由实测直接排放体积和具有代表性的实测浓度按一致单位计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格放行冷冻兔或野兔肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_records`
- 来源：`eu-jrc-sa-bref`

###### 氯化物排入水体（`direct_chloride_water`）

仅当前景设施直接排放处理后废水时，才把 Chloride to water 作为一项基本流输出报告。

- 选定流：Chloride to water
- 流属性/单位：Mass / kg
- 数量规则：由实测直接排放体积和具有代表性的实测浓度按一致单位计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格放行冷冻兔或野兔肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_records`
- 来源：`eu-jrc-sa-bref`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_avoidance` | 多输出前景过程 | 首先通过过程细分、物种分账以及将公用工程、化学品、包装、废物和排放直接归属给成因操作来避免分配。 | `eu-pef-2021-2279` |
| `allocation_species` | 兔和野兔生产 | 存在物种特定实测记录时，不得将兔的负荷转移给野兔输出或将野兔的负荷转移给兔输出；披露物种间任何共享服务分配。 | `eu-pef-2021-2279` |
| `allocation_output_status` | 血、皮、器官、脂、骨和修整肉 | 依据每项分流输出的有记录质量、去向和合同处置确定其产品、副产品或废物状态；不得仅因其物理存在而推定为有用副产品。 | `eu-jrc-sa-bref`, `eu-pef-2021-2279` |
| `allocation_physical_relation` | 不可避免的副产品分配 | 当过程细分无法避免分配时，采用反映投入与输出变化方式的有记录基础物理关系；不得仅因质量数据可得而选择质量分配。 | `eu-pef-2021-2279` |
| `allocation_economic_relation` | 缺乏可辩护物理关系的副产品 | 仅在无法建立可辩护物理关系时采用经济关系，并保留价格来源、平均期间、币值基准、市场和敏感性披露。 | `eu-pef-2021-2279` |
| `allocation_waste_treatment` | 废物输出和处理 | 将收集、处置和处理负荷仅一次归属给每个有记录废物去向；除非选定研究方法明确要求且披露假设，否则不采用避免负荷抵扣。 | `eu-pef-2021-2279` |
| `allocation_shared_services` | 共享水、能源、制冷、卫生和废水服务 | 优先采用分表计量或运行日志；否则采用有记录的因果驱动量，例如运行时间、清洗面积、热负荷、废水体积，或仅在产品质量能代表消耗时采用产品质量。 | `eu-jrc-sa-bref`, `eu-pef-2021-2279` |
| `allocation_disclosure` | 报告数据集 | 报告分配层级、方程、驱动量、取值、副产品去向、未解决数据缺口和敏感性结果，确保任何实测投入或输出均不重复计数或遗漏。 | `eu-pef-2021-2279` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_live_animal_receipt` | `live_animal_receipt` | 活兔、活野兔、验收动物、到场损失和暂养平衡 | 供应商、接收、地磅、暂养和死亡记录 | 物种；供应商；来源；批次；到达时间；动物数量；毛重；皮重；验收质量；拒收质量；死亡量；期初期末暂养库存 | 使用经校准设备称量每批，并按物种核对验收和暂养记录 | kg; animal | 每个接收批次 | 覆盖完整报告期及期初期末暂养库存 | 所代表设施全部接收和暂养区域 | 按物种和批次求和，再仅一次归一化至净放行参考质量 | 校准记录、签收单、拒收记录、死亡日志和库存核对 |
| `cp_slaughter_byproduct_balance` | `slaughter_dressing` | 验收动物、整理后胴体、血、皮、器官、脂、胃内容物、肠内容物和判废胴体 | 批次生产、检验、称量和去向记录 | 物种；批次；验收活体质量；胴体质量；输出身份；输出质量；质量状态；去向；期初期末库存；滴水或水分变化 | 按物种称量分流输出，并在不虚构平衡项的情况下闭合一个批次或期间质量平衡 | kg | 每个屠宰批次或生产班次 | 完整报告期 | 范围内全部屠宰、放血、剥皮、去内脏、检验和整理线 | 汇总物种特定实测质量，归一化前保留每个有记录去向 | 衡器校准、批次单、兽医或质量处置、去向凭证和签认质量平衡 |
| `cp_cutting_mass_balance` | `carcass_cutting` | 胴体、肉块、骨、分割脂、修整肉和拒收肉 | 分割批次、称量、得率、拒收和库存记录 | 物种；批次；胴体投入；肉块输出；骨；脂；修整肉；拒收；期初期末库存；滴水 | 称量每个分流，并核对实测投入、输出、库存和有记录滴水 | kg | 每个分割批次或班次 | 完整报告期 | 范围内全部修整、去骨、分份和分割操作 | 归一化前按物种和输出身份汇总 | 经校准衡器记录、分割单、得率核对和处置记录 |
| `cp_freezing_transfer` | `chilling_freezing` | 进入冷却的肉、冷冻肉输出和不合格冷冻肉 | 冷加工批次、转移、温度、时间、质量和拒收记录 | 物种；批次；投入质量；输出质量；拒收质量；冷却起止；冻结起止；实测产品温度；期初期末库存 | 对每个所代表冷加工批次，将经校准质量记录与保留的时间温度记录关联 | kg; degree Celsius; hour | 每个冻结批次 | 覆盖完整报告期及冷库库存变化 | 范围内全部预冷和冻结设备 | 按物种汇总质量；保留实际时间温度描述，不设置类别默认值 | 经校准衡器和传感器、批次日志、报警日志和库存核对 |
| `cp_packaging_release` | `packaging_frozen_storage` | 冷冻肉转移、各包装组件、参考输出和包装后拒收 | 包装工单、材料领用、皮重、放行、发运和冻藏记录 | 物种；批次；产品形态；投入质量；包装组件身份；组件质量；包装件数；皮重；净放行质量；拒收质量；储存时间；放行状态 | 扣除皮重后计量净产品，分别记录每种组件，并核对包装和冷库库存 | kg; package; hour | 每个包装和放行批次 | 覆盖完整报告期及期初期末冷冻库存 | 范围内全部最终包装、散装发运、冻藏和放行点 | 分别汇总组件和产品质量；将参考输出归一化为恰好 1 kg 净肉 | 材料领用记录、包装规格、衡器校准、放行证明、发运记录和库存核对 |
| `cp_water_records` | `all_foreground_processes` | 各过程管网水、地下水直接取用和地表水直接取用 | 水表、账单、取水和分表记录 | 水源身份；仪表身份；期初期末读数；体积；过程覆盖；读数时间；分配驱动量；校准状态 | 读取每个水源总表和分表，防止供水与取水重复，并以有记录因果驱动量归属共享体积 | m3 | 至少每个报告间隔及过程归属变化时 | 覆盖期初期末读数的完整报告期 | 服务于前景边界的全部仪表和取水点 | 按水源和过程计算读数差，扣除有记录非生产用水后仅一次归一化 | 仪表校准、账单、许可、日志和分配工作底稿 |
| `cp_utility_records` | `all_foreground_processes` | 各过程电网电力、外购蒸汽、外购热水、天然气、柴油和液化石油气 | 仪表、账单、交付、储罐、锅炉和运行记录 | 载体身份；供应商；仪表或储罐身份；实测数量；单位；供应条件；热值；期初期末库存；过程覆盖；分配驱动量 | 分别采集各载体，核对采购和库存，仅使用保留的供应商数据或实测条件计算能量 | kWh for electricity; MJ for steam, hot water, and fuels | 按可得的每个计量间隔、交付或生产班次 | 覆盖期初期末库存的完整报告期 | 服务于各前景过程的全部公用工程点 | 按过程分别汇总各载体，共用仪表采用有记录因果分配 | 校准、账单、交付单、供应商热值、仪表日志和分配工作底稿 |
| `cp_refrigerant_records` | `cold_chain_processes` | R-717、HFC-134a 和 R-404A 补充，以及氨、HFC-134a、HFC-125 和 HFC-143a 排放 | 制冷剂采购、维护、充注、回收、泄漏和库存记录 | 设备；服务过程；制冷剂产品；化学组成；期初充注；补充；移除；回收质量；期末充注；泄漏事件；维护日期；技术人员 | 闭合设备级质量平衡，保留实际混合物组成，并将补充产品和排放物种分别归属给所服务冷过程 | kg | 每次维护或泄漏事件及报告期边界 | 覆盖期初期末充注的完整报告期 | 服务于预冷、冻结和冻藏的全部制冷设备 | 按制冷剂产品、排放化学物种、设备和过程汇总，不重复计算回收材料 | 采购账单、维护日志、泄漏测试、回收凭证、组成规格和签认平衡 |
| `cp_cleaning_chemical_records` | `sanitation_wastewater` | 每种清洗、消毒和废水处理化学品 | 化学品领用、采购、配制、浓度和使用记录 | 化学品身份；供应商；商品质量；有效浓度；批次；使用点；日期；期初期末库存；退回质量 | 分别记录每种商品化学品，并将领用质量与库存和退回量核对 | kg | 每次领用或配制批次 | 覆盖期初期末库存的完整报告期 | 全部清洗、消毒和条件性场内处理点 | 在过程归属和归一化前按单一化学品身份及使用点汇总 | 安全数据表、采购账单、领用日志、浓度记录和库存核对 |
| `cp_waste_records` | `all_foreground_processes` | 每种物种特定或材料特定废物流及去向 | 称量、拒收、容器、转移、回收和处理记录 | 行身份；物种或材料；批次；质量；容器皮重；质量状态；去向；承运方；处理路线；转移日期；文件编号 | 分别称量每个流，扣除皮重，并仅一次归属其有记录去向 | kg | 每次废物转移或生产批次 | 完整报告期 | 前景边界内全部废物产生和发运点 | 按行身份、物种或材料和去向汇总；防止转移与处理重复 | 经校准衡器、拒收记录、转移单、处理凭证和去向核对 |
| `cp_wastewater_records` | `sanitation_wastewater` | 普通负荷废水、高负荷废水、污泥、筛渣、分离脂和直接水体污染物 | 流量计、采样、实验室、污泥、筛分、油脂分离、污水转移和排放记录 | 流身份；去向；排放状态；体积；采样点；采样时间；采样方法；浓度；分析物；单位；污泥质量；残渣质量；分离脂物种身份 | 计量分流废水，采用具有代表性的实测浓度，称量固体，并区分污水管网转移与直接环境排放 | m3; kg; concentration unit retained | 流量连续或按每个排放间隔，浓度按有记录的代表性采样计划 | 覆盖旁路和异常事件的完整报告期 | 范围内全部废水收集、处理、污水管网转移和直接排放点 | 用单位一致的体积和浓度记录分别计算各污染物；仅对直接排放报告直接排放量 | 仪表校准、采样计划、样品交接、认可或有记录实验室结果、排放许可和质量核对 |
| `cp_direct_air_emissions` | `all_foreground_processes` | 各过程每种现场燃烧排入空气的物质 | 燃料、设备、烟道测试、连续监测、运行小时和经核实因子记录 | 服务过程；设备；燃料身份；燃料数量；运行时间；物质；实测浓度或经核实因子；烟气流量；测试期间；单位 | 代表性足够时采用直接测量；否则根据采集的燃料或活动数据和保留的经核实因子分别计算每种物质 | kg | 每个代表性测试或监测间隔及每个燃料报告间隔 | 覆盖异常运行的完整报告期 | 服务于前景过程的全部场内燃烧设备 | 按过程和设备分别汇总各化学物种；不得合并 NO 与 NO2，亦不得合并细颗粒物与粗颗粒物 | 校准、测试报告、监测日志、燃料记录、经核实因子来源和计算工作底稿 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 全部清单行 | undefined | 可归属交换；净合格放行质量 | 每 1 kg 参考产品交换量 | `eu-pef-2021-2279` |
| `calc_mass_reconciliation` | 接收、屠宰、分割、冻结和包装质量平衡 | undefined | 实测质量；期初期末库存；有记录滴水或水分变化 | 物种特定质量平衡差和核对状态 | `eu-jrc-sa-bref`, `eu-pef-2021-2279` |
| `calc_delivered_thermal_energy` | 外购蒸汽和外购热水 | undefined | 实测蒸汽质量或水流量；供应压力或温度；相关时的回水温度；有记录工程关系 | 单一载体交付能量，MJ | `eu-pef-2021-2279` |
| `calc_fuel_energy` | 天然气、柴油和液化石油气 | undefined | 实测燃料数量；供应商热值；单位换算 | 单一燃料能量，MJ | `eu-pef-2021-2279` |
| `calc_refrigerant_balance` | 制冷剂补充和化学物种特定空气排放 | undefined | 期初期末充注；补充；移除；回收；泄漏记录；实际组成 | 按制冷剂产品的补充质量和按化学物种的排放质量 | `eu-jrc-sa-bref`, `eu-pef-2021-2279` |
| `calc_wastewater_pollutant_load` | 直接水体排放 | undefined | 直接排放体积；实测浓度；单位换算；使用时的配对进水结果 | 直接排入水体的一种污染物质量 | `eu-jrc-sa-bref`, `eu-pef-2021-2279` |
| `calc_shared_service_assignment` | 共用仪表和支持服务 | undefined | 共享实测总量；分表记录或因果驱动量；过程覆盖 | 一个过程和一项原子交换的可归属数量 | `eu-pef-2021-2279` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_company_specific` | 前景制造清单 | 对所代表报告期采用企业特定设施、批次、仪表、账单、维护、实验室和生产记录。 | 含负责人、日期、来源系统和保留记录引用的记录清单 |
| `dq_temporal` | 全部前景数据 | 采用涵盖正常生产、停机、异常事件以及期初期末库存的一致报告期；披露替代数据或缺口。 | 报告日历、生产日志、停机日志和库存核对 |
| `dq_geographic` | 场址和上游连接 | 声明设施地域、水源、电力供应地域、燃料供应商、废物去向和直接排放受纳环境。 | 场址元数据、供应商记录、公用工程合同、许可和去向文件 |
| `dq_technology` | 屠宰、分割、冻结、制冷、卫生和废水处理 | 记录所代表的实际设备和操作，包括产品形态、冻结设备、制冷剂身份、清洗实践和场内处理状态。 | 过程图、设备清单、制冷剂清单、作业指导和处理说明 |
| `dq_completeness` | 生命周期清单 | 将原子卡清单与采购、生产、维护、实验室、废物和排放记录核对；将每个缺失卡记录列为明确数据缺口。 | 按 row_id 列明已纳入、不存在和未解决状态的完整性矩阵 |
| `dq_precision` | 实测和计算数量 | 保留仪器分辨率、校准、采样变异、换算因子、分配驱动量、未舍入计算和最终舍入规则。 | 校准证书、采样记录、计算工作底稿和不确定性说明 |
| `dq_consistency` | 物种、单位、流身份和去向 | 在整个数据集中对兔与野兔身份、毛重与净重、单位、副产品状态、废物去向以及直接排放与污水管网排放采用一致且有记录的约定。 | 数据字典、单位换算清单、流映射清单和审查签认 |
| `dq_transparency` | 方法和结果 | 披露边界选择、条件性操作、排除项、分配、上游数据集选择、计算、未解决 UUID、数据缺口和验证发现。 | 方法报告、manifest 审查元数据、来源清单、计算工作底稿和验证报告 |
| `dq_verification` | 完成的前景数据包 | 在生命周期状态提升前，对身份、范围、记录、平衡、计算、分配、来源使用和双语规则对齐开展独立审查。 | 注明日期的审查清单、审查人身份、发现、修正和闭合证据 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_identity` | PCR 和参考流身份 | 确认 canonical_pcr_id、CPC 3.0 代码 21134、精确产品标题、Product 流类型、参考 UUID、Mass 属性 UUID、Units of mass UUID 和 kg 单位；拒绝鲜或冷藏肉及食用内脏。 | `unsd-cpc-21134` |
| `validate_reference_amount` | 参考输出 | 要求工厂门口恰好 1 kg 净合格放行冷冻肉，并验证包装质量已排除。 | `unsd-cpc-21134`, `eu-pef-2021-2279` |
| `validate_scope` | 数据集范围 | 验证冷冻市场状态、声明的兔或野兔物种、产品形态、过程覆盖、设施门口、报告期，以及上游养殖和入厂运输与下游阶段排除项。 | `unsd-cpc-21134`, `eu-jrc-sa-bref`, `eu-pef-2021-2279` |
| `validate_process_map` | 前景过程 | 要求每个必需过程以及每个实际实施的条件性过程具有详细清单；记录未实施条件性过程缺省的原因。 | `eu-jrc-sa-bref`, `eu-pef-2021-2279` |
| `validate_atomic_inventory` | 全部清单卡 | 要求每个 row_id 仅有一项具体交换，并具有非空说明、属性和单位、数量规则、数值来源模式、适用范围、归一化基准、基准类型、证据类型、采集协议和有序来源 id；拒绝集合选择器。 | `eu-pef-2021-2279` |
| `validate_species_balance` | 兔和野兔质量记录 | 检查物种分开的接收、屠宰、分割、冻结、包装、副产品、拒收、废物和库存记录，并调查每个未解决质量平衡差。 | `eu-jrc-sa-bref`, `eu-pef-2021-2279` |
| `validate_utility_separation` | 水和能源 | 逐过程检查管网水、地下水、地表水、电网电力、外购蒸汽、外购热水、天然气、柴油和液化石油气，并验证载体未被合并或重复计算。 | `eu-jrc-sa-bref`, `eu-pef-2021-2279` |
| `validate_refrigerants` | 预冷、冻结和冻藏 | 核对设备级制冷剂记录，并验证补充产品与化学物种特定排放分别记录、实际混合物组成、回收以及无重复计算。 | `eu-jrc-sa-bref`, `eu-pef-2021-2279` |
| `validate_wastewater` | 废水和直接水体排放 | 区分普通负荷与高负荷废水、污水管网转移、场内处理和直接排放；验证体积浓度计算、固体记录和受纳隔室。 | `eu-jrc-sa-bref`, `eu-pef-2021-2279` |
| `validate_allocation` | 副产品、废物和共享服务 | 验证优先采用过程细分和直接归属、每项输出有记录的状态和去向、不可避免分配的因果基础、方程、核对和敏感性披露。 | `eu-pef-2021-2279` |
| `validate_evidence` | 来源和前景记录 | PCR 支撑仅接受三个已声明外部来源 id，数量要求企业特定记录，拒绝无依据默认值或范围，并在 manifest 审查元数据保留每个未解决非参考 UUID。 | `unsd-cpc-21134`, `eu-jrc-sa-bref`, `eu-pef-2021-2279` |
| `validate_data_quality` | 完成的前景数据包 | 审查时间、地域、技术、精度、完整性、一致性、透明度和验证证据，并在重要发现闭合前阻止生命周期状态提升。 | `eu-pef-2021-2279` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | CPC 21134 下每 1 kg 净合格冷冻兔或野兔肉的企业特定工厂门口前景数据包 |
| downstream_use | 投影至天工 flow、process、lifecyclemodel 和 dataset 实体，并与另行选择的上游和下游数据集共同用于完整生命周期模型 |
| allowed_use | 当物种、形态、设施、期间、技术、包装、储存、分配和数据质量与研究相匹配时，用于产品特定 LCA 和环境足迹建模 |
| excluded_use | 类别通用默认数量；鲜或冷藏肉；食用内脏；其他物种；未添加相应数据集的零售、烹饪、使用或寿命终止建模 |
| required_metadata | PCR id；CPC 代码；参考 UUID；物种及份额；产品形态；冷冻放行规格；净质量；设施和期间；过程图；制冷系统和制冷剂；包装；储存时长；废水和废物去向；分配；来源 id |
| required_quality_disclosure | 原始数据覆盖；仪表和衡器校准；质量平衡核对；采样代表性；计算因子；分配选择；不确定性；缺失记录；未解决非参考 UUID；审查人和验证状态 |
| update_trigger | 物种组合、产品形态、工艺路线、设施、冻结或制冷技术、制冷剂、包装、储存实践、废水处理、副产品去向、分配、报告期、来源方法或参考身份发生变化 |

## 11. 数据源

| 来源 id | 类型 | 引用 | 用途 |
| --- | --- | --- | --- |
| `unsd-cpc-21134` | 数据集（`dataset`） | 联合国统计司，CPC 3.0，保留的官方结构 CSV，子类 21134，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | 精确类别标题和冷冻市场状态范围；与鲜或冷藏肉及食用内脏的区分 |
| `eu-jrc-sa-bref` | 官方指南（`official_guidance`） | 欧盟委员会联合研究中心，SA BREF，JRC135916，DOI 10.2760/18199，https://doi.org/10.2760/18199 | 接收、屠宰、整理、分割、冷却、冻结、储存、卫生、公用工程、废水、分流动物输出、废物和直接排放的设施操作与清单覆盖 |
| `eu-pef-2021-2279` | 官方指南（`official_guidance`） | Commission Recommendation (EU) 2021/2279 环境足迹方法合并文本，https://eur-lex.europa.eu/eli/reco/2021/2279/2021-12-30/eng | 企业特定前景数据、完整生命周期清单、产品和过程特定性、分配、透明度、数据质量、计算文档和验证 |
