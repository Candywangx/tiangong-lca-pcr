---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.cattle-fat-unrendered
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 未熬制牛脂肪

## 1. 范围与适用性

本 PCR 覆盖牛在屠宰、胴体整理、去骨或分割后分离，并在未经过熬制过程时交接的脂肪组织或含脂肪原料。物料可拟用于食用、经规定处理后食用、饲料或宠物食品，或其他已声明的非食品用途，但实际资格与处置必须来自有能力人员或主管机关的记录。产品名称本身不构成可食用声明。

默认前景从一个已识别的牛脂肪组织流自经检验胴体或分割物流中分离时开始。其包括特定物流的修整和分选，以及在声明交接点之前实施的冷藏或冻结、包装、场内储存和配送。共享的牛养殖和屠宰场负荷通过关联上游数据集及已声明的共产品方法进入，不得暗中转移给修整作业。

默认排除熬制、低温熬制、融化取脂、提取、分提、精炼、漂白、脱臭、氢化或配方加工。Premier jus、食用牛脂、greaves fat、骨髓油、骨油、蹄油及其馏分等已熬制牛脂产品不属于本类别。CXS 211-1999 描述的是通过熬制取得的命名脂肪，因此在本 PCR 中仅用于边界对照和可能的下游用途背景；其中的组成和质量数值不是未熬制产品的规格或 LCA 默认值。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.cattle-fat-unrendered |
| classification_refs | UNSD CPC 3.0 子类 21512，Cattle fat, unrendered，精确范围参照 |
| covered_products | 牛来源未熬制脂肪；来自屠宰、胴体整理、去骨、分割或修整的独立脂肪组织流；未经熬制或精炼的冷藏或冷冻物料仍在范围内 |
| excluded_products | 非牛动物脂肪；未单独计量牛输出的混合物种脂肪；CPC 21523 的已熬制牛脂和 tallow；greaves fat；CPC 21529 的骨髓油、骨油、蹄油及其馏分；配方或精炼脂肪产品；无法证明牛来源或处置资格的物料 |
| representative_product | 在交接点计量的 1 kg 净重未熬制牛脂肪组织或修整物流，并声明解剖或过程来源、资格、温度状态、包装状态和交接点 |
| production_route | 在牛胴体整理或分割期间或之后分离；特定物流修整与分选；可选冷藏或冻结；可选包装与储存；在熬制或精炼之前交接 |
| market_state | 散装或包装的未熬制牛脂肪组织或脂肪原料；仅在允许时为常温，否则为冷藏或冷冻；明确声明食用资格、须规定处理状态、饲料或宠物食品资格或非食品处置 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 声明交接点的未熬制牛脂肪组织或脂肪原料 |
| How much | 1 kg 净重，不含包装和运输设备 |
| How well | 声明牛来源、组织或修整物流、未熬制状态、资格或处置、物理状态、温度状态和污染控制状态 |
| How long or cycle | 交接时的一个生产或交付批次；不计入储存寿命或下游熬制服务 |
| reference_flow_link | 由声明交接条件下恰好 1 kg 参考产品流实现功能单位 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | Cattle fat, unrendered `f41d4291-946e-4a03-91f4-f55731e84062` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 物种及已知时的牛类别；屠宰或分割场所及批次；解剖或过程组织流；可食用、经规定处理后可食用、饲料或宠物食品、其他非食品、判废或待处置判定；处置证据；未熬制声明；所含肌肉、血液、结缔组织、骨、皮及水分状态；修整与分选规格；常温、冷藏或冷冻状态及交接温度；包装与皮重基准；交接地点；预期下一用途；时间周期与地域 |

构建前景数据包时，`必需限定信息` 中每一项都必须在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中声明。不同的牛组织流、资格类别或温度状态不得在没有单独质量和明确聚合目的的情况下合并为一个默认产品。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 报告交接时未熬制牛脂肪的接收状态净重。用实测或经核验的皮重扣除包装、托盘、料箱、未随产品销售的冰以及运输设备。 |
| `as_received_state` | 所有质量流 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 按实际湿态或冻结状态记录质量。除非在参考数量之外另行报告已识别的分析结果和计算，否则不得换算为干脂、脂质含量或熬制脂肪当量。 |
| `stream_separation` | 牛脂肪输入和输出 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 分别称量或计算每个牛组织流和每种资格类别。不得用猪、禽、水牛、羊、山羊、混合物种、熬制脂肪或精炼脂肪数据推断牛脂肪数值。 |
| `mass_balance_basis` | 分离、调温和包装过程 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 以输入含脂肪物料、参考产品、单独指定的共产品、废物、库存，以及冰、水或其他添加或移除物料的实测变化闭合质量平衡。报告无法解释的差额，不得强制闭合。 |
| `temperature_not_conversion` | 冷藏或冷冻产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 冷藏或冻结改变的是必需限定信息，而不是参考单位。分别记录交接温度以及任何残留表面冰或添加水。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 已识别的牛胴体、食用部位或分割物流已经完成适用的屠宰或宰后处置步骤，且分离出的未熬制含脂肪物流仍保留批次与资格关联 |
| starting_condition_role | 从牛养殖和屠宰或分割的上游共产品交接，进入前景脂肪分离、修整、调温和发运 |
| product_classification_scope | 与 CPC 3.0 子类 21512 精确对应的仅牛来源未熬制脂肪；熬制和提取的牛脂不在范围内 |
| recursive_input_rule | 若同一未熬制牛脂肪产品类别进入前景过程，分别记录其质量、物流限定信息、来源数据集和先前边界；不得在接收过程中递归重建牛养殖或屠宰负荷 |
| upstream_dataset_requirement | 生产从摇篮到交接点的结果时，关联具有代表性的牛养殖和屠宰或分割数据集。保留所用分配方法、共产品集合、价格或物理驱动因素、地域、时期及上游交接的资格类别 |
| disclosure | 声明确切起止门、牛和组织身份、处置、纳入的调温和包装、储存时长、运输交接、排除的熬制或精炼、分配方法、已知截断和任何未解决的产品流 UUID |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_unrendered_identity` | 产品范围和终点门 | 参考产品必须保持未熬制状态。默认前景在任何熬制、为取脂而融化、提取、分提或精炼操作之前终止，不得把已熬制输出重新标记为本产品。 | `unsd-cpc-3-0-2025`; `codex-cxs-211-1999` |
| `boundary_cattle_disposition` | 起点门和产品资格 | 保留牛批次关联及相关部位的主管处置结果。分别管理可安全适宜食用、须规定处理、可作非食品、判废和待判定的物料。 | `codex-cxc-58-2005` |
| `boundary_conditioning_handoff` | 修整、冷却、包装、储存和配送 | 仅纳入声明交接点之前实施的修整、分选、冷藏或冻结、包装、储存和配送活动。适用时记录温度控制和冷链中断。 | `codex-cxc-58-2005` |
| `boundary_shared_slaughter` | 牛养殖和屠宰负荷 | 将未熬制牛脂肪物流视为与屠宰或分割相关的输出。可直接归属的回收负荷属于脂肪前景；共享的养殖和屠宰负荷必须使用明确的上游数据集和共产品处理。 | `eu-pef-2021-2279` |
| `boundary_inventory_completeness` | 每个纳入的前景过程 | 在最合适的过程层级清查所有已知物料、能源、水、产品、共产品、废物、废水、废气和直接基本流。FDM BAT 仅用作完整性和监测清单，不构成法律适用性声明，也不提供通用绩效值。 | `eu-pef-2021-2279`; `eu-fdm-bat-2019-2031` |
| `boundary_transport_gate` | 运输 | 对发运场门交接点之后的运输予以排除。仅当声明的参考交接点位于配送之后时，纳入特定路线运输，并声明距离、方式、载荷、空返处理、制冷及责任转移。 | `eu-pef-2021-2279` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `fat_separation_trimming` | 牛脂肪分离、物流分选与修整 | required | 为确立 CPC 21512 输出及其与屠宰或分割物流的关系而始终必需 | 前景生产与共产品交接 | 1 kg 净重未熬制牛脂肪输出 |
| `temperature_conditioning` | 冷藏或冻结及调温储存 | conditional | 在参考交接点之前发生主动冷却、冻结、冻藏或温控暂存时纳入 | 调温与储存 | 1 kg 调温后的未熬制牛脂肪输出 |
| `packing_dispatch` | 包装、发运储存与场门交接 | required | 包装投入是条件性的，但始终记录发运条件和皮重确定 | 包装与交接 | 1 kg 净重未熬制牛脂肪交接 |
| `delivery_handoff` | 配送至客户或下游设施 | conditional | 仅当参考交接发生在运输后而非生产场址发运门时纳入 | 配送 | 1 tkm 运输服务和 1 kg 已交付参考产品 |
| `rendering_refining` | 熬制或精炼 | excluded_by_default | 仅可作为本 PCR 参考交接点之后的独立下游系统出现 | 下游转化 | 不属于参考产品前景 |

### 过程：牛脂肪分离、物流分选与修整（`fat_separation_trimming`）

#### 输入

##### 产品流

###### 已识别的牛含脂肪组织流（`cattle_fat_bearing_input`）

记录进入前景回收的实际屠宰、胴体整理、去骨、分割或修整物流。保留牛批次、解剖或过程来源、处置、物理状态和全部非脂肪组织规格，不假定标准组成。

- 选定流：已识别的牛含脂肪组织流；Tiangong 流 UUID 未解决
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按分别限定的物流实测净输入质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净重未熬制牛脂肪输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_lot_identity_mass`
- 来源：`unsd-cpc-3-0-2025`; `codex-cxc-58-2005`

###### 分离与修整用购入电力（`separation_electricity`）

记录修整、分选、输送、局部冷暂存和可直接归属的卫生设备所用计量电力。仅有共享电表时，保留分摊驱动因素和不确定性。

- 选定流：Electricity supply；Tiangong 流 UUID 未解决
- 流属性/单位：Energy / kWh
- 数量规则：可归属于本过程的计量或经发票核对电力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净重未熬制牛脂肪输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utilities_emissions`
- 来源：`eu-fdm-bat-2019-2031`

###### 过程与卫生用水（`separation_water`）

记录因产品接触处理或可归属卫生作业而跨越过程边界的水。不得假定存在清洗；区分供应水和直接取水，并另行记录废水。

- 选定流：Process water；Tiangong 流 UUID 未解决
- 流属性/单位：Volume / m3
- 数量规则：发生用水时计量、分表计量或有文件依据的分摊用水量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净重未熬制牛脂肪输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utilities_emissions`
- 来源：`eu-fdm-bat-2019-2031`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 未熬制牛脂肪输出（`unrendered_cattle_fat_output`）

这是按物流分离与修整后、任何熬制或精炼前的净重参考产品。输出资格和预期下一用途独立于流名称声明。

- 选定流：Cattle fat, unrendered `f41d4291-946e-4a03-91f4-f55731e84062`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：作为定量参考，恰好 1 kg 净输出
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份参照（`identity_reference`）
- 来源：`unsd-cpc-3-0-2025`

###### 单独指定的有价值修整输出（`other_valuable_outputs`）

仅在肉修整物、结缔组织、含骨物料、皮革物料或其他有价值物流实际作为单独指定产品离开时记录。不得合并食用资格和非食品物流。

- 选定流：场址特定共产品流；Tiangong 流 UUID 未解决
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按输出身份和处置实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净重未熬制牛脂肪输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_mass_balance_disposition`
- 来源：`codex-cxc-58-2005`; `eu-pef-2021-2279`

##### 废物流

###### 剔除或判废物料（`rejected_condemned_material`）

按判定、法定或运营去向及质量分别记录每种剔除、判废或其他非产品物流。零量必须是观测结果，不得作为默认值。

- 选定流：场址特定剔除或判废动物物料；Tiangong 流 UUID 未解决
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按处置和处理去向实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净重未熬制牛脂肪输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_mass_balance_disposition`
- 来源：`codex-cxc-58-2005`

###### 处理和卫生作业废水（`separation_wastewater`）

用水产生废水流时记录废水体积及已知相关特征。废水处理作为独立下游服务提供时留在前景之外。

- 选定流：Wastewater；Tiangong 流 UUID 未解决
- 流属性/单位：Volume / m3
- 数量规则：计量体积、由有文件依据的水平衡估算体积或处理记录体积
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净重未熬制牛脂肪输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_utilities_emissions`
- 来源：`eu-fdm-bat-2019-2031`

##### 基本流

###### 分离和卫生作业直接排放（`separation_direct_releases`）

仅记录从纳入前景直接跨越至空气、水或土壤的排放。不得重复记录购入能源、供水或废水处理数据集中已有的排放。

- 选定流：场址特定直接基本流；Tiangong 流 UUID 未解决
- 流属性/单位：特定流属性和单位
- 数量规则：实测排放，或由采集活动数据及已引用适用因子计算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净重未熬制牛脂肪输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utilities_emissions`
- 来源：`eu-pef-2021-2279`; `eu-fdm-bat-2019-2031`

### 过程：冷藏或冻结及调温储存（`temperature_conditioning`）

#### 输入

##### 产品流

###### 未调温的未熬制牛脂肪（`unconditioned_fat_input`）

记录同类别输入及其前序数据集和限定信息；该递归输入不产生第二次牛养殖或屠宰负荷。

- 选定流：Cattle fat, unrendered `f41d4291-946e-4a03-91f4-f55731e84062`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：进入调温过程的实测净重
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 调温后的未熬制牛脂肪输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_temperature_conditioning`
- 来源：`codex-cxc-58-2005`

###### 冷却或冻结能源（`conditioning_energy`）

按能源载体分别记录电力、燃料或购入冷量。共享制冷采用反映调温载荷和储存负荷的有文件依据驱动因素分配。

- 选定流：场址特定电力、燃料或冷量服务；Tiangong 流 UUID 未解决
- 流属性/单位：Energy / 按记录使用 kWh 或 MJ
- 数量规则：计量值，或由采集的设备和运行记录计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 调温后的未熬制牛脂肪输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_temperature_conditioning`
- 来源：`codex-cxc-58-2005`; `eu-fdm-bat-2019-2031`

###### 制冷剂补充（`refrigerant_makeup`）

仅当边界内设备发生可归属泄漏时纳入制冷剂补充。

- 选定流：场址特定制冷剂；Tiangong 流 UUID 未解决
- 流属性/单位：Mass / kg
- 数量规则：维修记录中的补充质量分配至纳入设备和时期
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 调温后的未熬制牛脂肪输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_temperature_conditioning`
- 来源：`eu-pef-2021-2279`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 调温后的未熬制牛脂肪（`conditioned_fat_output`）

记录净输出质量、实际温度、冷藏或冷冻状态、储存时间以及任何可测的水或冰变化，不换算为熬制脂肪当量。

- 选定流：Cattle fat, unrendered `f41d4291-946e-4a03-91f4-f55731e84062`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测调温后净输出质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 调温后的未熬制牛脂肪输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_temperature_conditioning`
- 来源：`codex-cxc-58-2005`

##### 废物流

##### 基本流

###### 制冷剂向空气释放（`refrigerant_release_air`）

记录纳入设备向空气释放的制冷剂种类和计算或实测损失；没有损失计算时不得把补充流再次记录为基本流排放。

- 选定流：Refrigerant emission to air；Tiangong 基本流 UUID 未解决
- 流属性/单位：Mass / kg
- 数量规则：可归属制冷剂补充量，经库存变化和有记录的回收量调整
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 调温后的未熬制牛脂肪输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_temperature_conditioning`
- 来源：`eu-pef-2021-2279`

### 过程：包装、发运储存与场门交接（`packing_dispatch`）

#### 输入

##### 产品流

###### 进入发运的未熬制牛脂肪（`dispatch_fat_input`）

记录来自前序过程的散装、冷藏或冷冻合格输入质量，不改变产品身份。

- 选定流：Cattle fat, unrendered `f41d4291-946e-4a03-91f4-f55731e84062`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：进入包装与发运的实测净重
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 交接净产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_handoff`
- 来源：`codex-cxc-58-2005`

###### 初级和次级包装（`packaging_inputs`）

分别记录每种包装材料、可复用容器循环、衬袋、标签、托盘以及随货冰或冷媒。包装不属于参考净重。

- 选定流：场址特定包装材料或可复用运输物品；Tiangong 流 UUID 未解决
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg，或以实测质量换算的件数
- 数量规则：购入或领用质量，或件数乘以核验单件质量并除以有记录的复用循环数
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 交接净产品
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_handoff`
- 来源：`eu-pef-2021-2279`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 发运交接点参考产品（`reference_product_handoff`）

在控制权转移时记录未熬制牛脂肪净重和全部必需限定信息。采用交付后交接时，本输出成为 `delivery_handoff` 的输入。

- 选定流：Cattle fat, unrendered `f41d4291-946e-4a03-91f4-f55731e84062`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：声明发运条件下恰好 1 kg 净参考产品
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份参照（`identity_reference`）
- 来源：`unsd-cpc-3-0-2025`; `codex-cxc-58-2005`

##### 废物流

###### 包装与发运废弃物（`packing_rejects`）

分别记录受损包装、产品损失和拒收批次及其去向和资格；不得从购入包装或产品输出中暗中扣减。

- 选定流：场址特定包装或产品废物；Tiangong 流 UUID 未解决
- 流属性/单位：Mass / kg
- 数量规则：按材料和去向实测废物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 交接净产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_handoff`
- 来源：`eu-pef-2021-2279`; `eu-fdm-bat-2019-2031`

##### 基本流

### 过程：配送至客户或下游设施（`delivery_handoff`）

#### 输入

##### 产品流

###### 已发运的未熬制牛脂肪（`delivered_fat_input`）

把发运输出作为同类别输入，并保留其完整限定信息和包装基准。

- 选定流：Cattle fat, unrendered `f41d4291-946e-4a03-91f4-f55731e84062`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测发运净重
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 已交付参考产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_transport_handoff`
- 来源：`codex-cxc-58-2005`

###### 运输与冷藏运输服务（`transport_service`）

交付在交接之前时，记录实际运输方式、路线距离、载荷率、空返处理和制冷能源。场门发运参考流不得添加本行。

- 选定流：路线特定货运服务；Tiangong 流 UUID 未解决
- 流属性/单位：Transport service / tkm
- 数量规则：发运净吨数乘以实际单程路线公里数，适用时另行建模空返和制冷
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 已交付参考产品
- 基准类型：运输服务（`transport_service`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_transport_handoff`
- 来源：`eu-pef-2021-2279`; `codex-cxc-58-2005`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 交付点参考产品（`delivered_reference_product`）

记录交付净重、收货温度、包装状态、损失以及责任转移的时间和地点。

- 选定流：Cattle fat, unrendered `f41d4291-946e-4a03-91f4-f55731e84062`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：恰好 1 kg 净重已交付参考产品
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份参照（`identity_reference`）
- 来源：`unsd-cpc-3-0-2025`

##### 废物流

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_separate_direct_loads` | 脂肪分离、调温、包装和配送 | 首先细分并把直接计量的投入、排放、废物和服务归给引起这些负荷的过程及输出。不得把脂肪专属修整或冷却负荷分配给无关胴体输出。 | `eu-pef-2021-2279` |
| `allocation_shared_hierarchy` | 规定的 PEF 屠宰场规则之外的多功能过程 | 无法直接细分时先研究系统扩展；否则使用相关且可量化的物理关系。仅在说明前述步骤不可行并证明所选驱动因素能代表共享过程后，才使用经济分配等其他关系。 | `eu-pef-2021-2279` |
| `allocation_cattle_slaughter_pef` | 纳入牛屠宰的 PEF 合规从摇篮到交接点研究 | 对上游负荷和离开屠宰场的输出应用 Recommendation (EU) 2021/2279 第 4.5.1.6 节牛屠宰场方法。保留其输出类别和适用性；不得把其中的欧洲平均质量分数、价格、经济份额或分配比解释为通用牛脂组成、产率或市场价值。 | `eu-pef-2021-2279` |
| `allocation_non_pef_slaughter` | 不声明 PEF 合规的研究 | 报告共享屠宰边界、完整共产品集合、直接负荷细分、所选分配或系统扩展方法、数据时期、地域、质量、价格或物理驱动因素及敏感性结果。不得把 PEF 默认因子暗中复制到不同市场或时期。 | `eu-pef-2021-2279` |
| `allocation_disposition_separation` | 食用、须规定处理、饲料、非食品、判废和待判定物流 | 分别保留质量和去向。不得为改变分配负荷而把判废或废物流与有价值共产品合并；食用声明必须遵循所记录的判定。 | `codex-cxc-58-2005`; `eu-pef-2021-2279` |
| `allocation_mass_balance` | 每个分配模型 | 分配改变负荷份额，不改变物理质量。保留分配前过程质量平衡，并要求分配份额与所声明共享负荷核对且无重复计算。 | `eu-pef-2021-2279` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_lot_identity_mass` | `fat_separation_trimming` | 进入的牛含脂肪物流和参考输出 | 批次接收、生产、称量和处置记录 | 牛批次；场所；日期时间；组织或过程物流；解剖描述；资格类别及判定证据；毛重；皮重；净重；温度；物理状态；所含非脂肪组织；预期下一用途 | 校准秤记录关联屠宰或分割批次及主管处置记录 | kg 和 °C | 每批次 | 数据集时期所代表的全部批次 | 范围内每个场所和生产线 | 仅在相同产品分层内汇总净重；报告任何跨层聚合 | 秤校准；批次追溯；检验或处置记录；操作员签字 |
| `cp_mass_balance_disposition` | `fat_separation_trimming` | 产品、共产品、废物、库存变化和无法解释差额 | 批次质量平衡与去向记录 | 输入质量；参考产品质量；各共产品质量；各废物质量；留存库存；添加或移除的水或冰；去向；资格；计量时间 | 核对后的校准秤记录和库存变化 | kg | 每批次，并按每个报告时期核对 | 完整数据集时期 | 场址聚合前的每条生产线 | 先按物流和资格计算；保留分层后再聚合 | 秤校准；核对报告；去向凭证；异常记录 |
| `cp_utilities_emissions` | `fat_separation_trimming` | 电力、燃料、水、清洁投入、废水、废物和直接排放 | 仪表、发票、物料领用、监测和处理记录 | 仪表起止；发票数量；设备或区域；运行时间；分摊驱动因素；水源；废水体积；实测参数；废物质量；排放值；计算时的因子和来源 | 优先直接计量；否则用发票核对和有文件依据的过程分摊 | 特定流单位 | 仪表周期或每生产阶段；至少每个数据集报告时期 | 已声明的代表性运行时期 | 每个纳入场址；重要时到过程层级 | 核对设施总量后归一化；保留共享分摊和不确定性 | 仪表校准；发票；实验室报告；因子引用；质量和水平衡 |
| `cp_temperature_conditioning` | `temperature_conditioning` | 产品质量与温度、冷却能源、储存负荷、制冷剂 | 调温批次、仪表、记录仪和维护记录 | 输入和输出质量；时间戳；产品温度；储存时间；电力或燃料；设备；制冷剂补充；回收制冷剂；库存变化；分摊驱动因素 | 校准秤和温度记录仪；分表或设备记录；维护记录 | kg；°C；h；kWh 或 MJ；kg 制冷剂 | 每批质量和温度；按仪表周期记录能源；每次维修记录制冷剂 | 所代表的完整调温和储存时期 | 范围内每套冷却或冻结系统 | 按有记录的质量-时间或其他合理物理驱动因素分摊共享负荷；冷藏和冷冻分层 | 记录仪校准；仪表数据；维护与回收记录；冷链偏差记录 |
| `cp_packaging_handoff` | `packing_dispatch` | 包装、净重、皮重、发运和废弃物 | 包装领用、称量、发运和拒收记录 | 包装材料；件数；单件质量；复用循环；毛重；皮重；净重；发运温度；储存时间；废弃质量及去向；交接时间地点 | 领用记录和包装规格与校准毛重及皮重核对 | kg；件；°C；h | 每种包装规格和批次；每次交接 | 所代表的全部发运批次 | 每个包装和发运场址 | 按材料计算每净 kg 包装；不把皮重计入产品质量 | 供应商规格；称量核验；复用记录；发运和拒收记录 |
| `cp_transport_handoff` | `delivery_handoff` | 货运服务、制冷、损失和收货状态 | 运输、承运、能源、温度和收货记录 | 起点；终点；实际距离；方式；车辆；净载荷；容量；载荷率；空返；制冷能源或燃料；发运和收货时间温度；交付质量；损失；交接点 | 承运文件、路线记录、燃料或电力记录及收货证明 | km；kg 或 t；tkm；kWh 或燃料单位；°C | 每票运输或代表性路线分层 | 已交付交接数据集所代表的全部配送 | 每条路线和运输方式 | 按票计算 tkm；按交付质量加权聚合路线与方式 | 提单；路线证据；燃料或能源记录；温度记录；交付证明 |
| `cp_shared_slaughter_allocation` | `fat_separation_trimming` | 上游牛和屠宰共产品分配 | 屠宰阶段输出、直接负荷、价格和方法记录 | 牛活重基准；上游数据集；各屠宰输出类别；质量；处置；可直接归属负荷；共享负荷；使用时的共同生产阶段价格；物理驱动因素；分配因子；方法；地域；时期 | 核对屠宰输出台账和直接过程记录；应用已声明层级或适用 PEF 规则 | kg；货币/kg；无量纲因子；特定流单位 | 每个代表性生产阶段和每个重要价格时期 | 与上游屠宰数据集相同的时期或说明对齐理由 | 所代表的每个屠宰场所和输出点 | 在共同共产品点计算因子；因子覆盖声明的共产品集合并与共享负荷核对 | 输出台账；价格证据；方法版本；计算工作簿；敏感性结果 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_net_reference_mass` | 所有参考输出 | 产品净重 = 装载毛重 - 经核验的包装与设备皮重 - 未作为产品销售的单独计量冰或冷媒质量 | 毛重；皮重；排除的冰或冷媒质量 | kg 净重未熬制牛脂肪 |  |
| `calc_normalized_inventory` | 每个清单行 | 归一化数量 = 可归属流数量 / 同一交接点参考产品净 kg | 可归属流数量；净输出质量 | 流单位/kg 参考产品 | `eu-pef-2021-2279` |
| `calc_mass_balance` | 每个前景过程 | 无法解释差额 = 质量输入总量 + 期初库存 - 质量输出总量 - 期末库存；添加或移除的水、冰和包装作为显式流 | 特定物流输入、输出、废物、库存、水、冰和包装质量 | kg 及实测总输入百分比，未经强制调整地报告 | `eu-fdm-bat-2019-2031` |
| `calc_transport_service` | `delivery_handoff` | tkm = 发运净吨数 × 实际单程路线 km；空返和制冷为独立模型参数 | 发运净重；距离；方式；空返；制冷记录 | tkm 及独立制冷清单 | `eu-pef-2021-2279` |
| `calc_shared_allocation` | 共享的牛养殖或屠宰负荷 | 优先直接细分。需要共享因子时，根据有文件依据的方法及共同阶段数据计算；PEF 合规牛屠宰模型使用第 4.5.1.6 节，不将其数值换算为产品产率声明 | 共享负荷；完整共产品集合；直接负荷；方法；物理或经济驱动因素；PEF 适用性 | 按输出分配的负荷以及核对和敏感性记录 | `eu-pef-2021-2279` |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `dq_identity` | 参考产品和所有同类别输入 | 证明牛来源、未熬制状态、物流身份、批次、资格或处置、温度状态、包装基准、交接、地域和时期。缺失物流或处置限定信息的数据集不完整。 | 批次追溯、产品规格、检验或处置记录，以及有帮助时的照片或过程声明 |
| `dq_no_cross_stream_default` | 产率、损失、公用工程、包装、运输和分配值 | 不得通过合并不同动物物种、解剖物流、组织状态、资格类别、冷藏与冷冻路线或熬制与未熬制产品建立单一默认值。应分层或报告尚未解决的代表性限制。 | 保留的分层、聚合理由、敏感性或独立数据集 |
| `dq_completeness` | 纳入的前景过程 | 核对所有已知产品、共产品、物料、水、能源、废物、废水、废气和直接基本流。识别排除项，并避免与上游供应或下游处理数据集重复计算。 | 过程流程图、质量和水平衡、仪表及废物记录、截断清单 |
| `dq_representativeness` | 前景和关联上游数据 | 声明技术、地域、时间和产品物流代表性及精度。对齐牛养殖、屠宰、分离、调温和发运时期，或说明不匹配。 | 数据集元数据、DQR 或等效评估、数据源日期、不确定性披露 |
| `dq_reasoned_estimates` | 缺少产品特定证据的候选阶段数值 | 仅当公式、输入假设、组织物流、资格类别、路线、地域和不确定性明确时，临时情景值才可标记为 `reasoned_estimate`。它不是允许范围或类别默认值，不得支持比较声明，并须在获得首批代表性场址、批次、仪表、供应商、路线或价格记录时替换。本 PCR 不规定数值型推理估算范围。 | 估算工作表、假设责任人和日期、替换触发条件，以及替换前保持开启的校验发现 |
| `dq_source_limits` | 外部标准和指南的使用 | CPC 用于类别身份；CXC 58-2005 用于肉品卫生过程和处置背景；CXS 211-1999 仅用于区分已熬制命名脂肪；PEF 用于 LCA 边界和多功能性；FDM BAT 仅用于清单与监测完整性。不得把来源特定法律门槛或已熬制脂肪组成值提升为通用 PCR 默认值。 | 来源用途矩阵和审阅检查 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validation_reference_identity` | 参考流 | 要求产品流 UUID `f41d4291-946e-4a03-91f4-f55731e84062`、Mass UUID `93a60a56-a3c8-11da-a746-0800200b9a66`、Units of mass UUID `93a60a57-a4c8-11da-a746-0800200c9a66`、单位 kg，以及恰好 1 kg 净参考数量。 |  |
| `validation_unrendered_boundary` | 产品和过程清单 | 若在参考交接前纳入熬制、为取脂融化、提取、精炼或已熬制脂肪输出，或将其作为 CPC 21512，则失败。 | `unsd-cpc-3-0-2025`; `codex-cxs-211-1999` |
| `validation_cattle_and_stream` | 身份和清单 | 要求仅牛来源，并分别报告组织或修整物流、资格、物理状态和温度状态。由其他物种、已熬制脂肪或实质不同组织流合并形成的通用默认值失败。 | `unsd-cpc-3-0-2025`; `codex-cxc-58-2005` |
| `validation_disposition` | 食用和非食品声明 | 要求可安全适宜、须规定处理、非食品、判废或待判定证据。仅由流名称或 CXS 211-1999 已熬制脂肪描述推断食用资格时失败。 | `codex-cxc-58-2005`; `codex-cxs-211-1999` |
| `validation_mass_balance` | 每个纳入前景过程 | 要求实测输入、产品、共产品、废物、库存、水或冰变化和无法解释差额。将重大不平衡作为发现报告；不得通过分配纠正。 | `eu-fdm-bat-2019-2031` |
| `validation_conditionals` | 调温、包装、储存和配送 | 纳入任一条件过程时，要求其采集协议字段和清单。排除时，要求支持排除的明确交接和路线声明。 | `codex-cxc-58-2005`; `eu-pef-2021-2279` |
| `validation_allocation` | 共享的牛养殖和屠宰负荷 | 要求直接负荷细分、完整共产品集合、方法层级、因子、共同阶段数据、核对、时期、地域和敏感性。声明 PEF 时，另行核验第 4.5.1.6 节适用性和方法。 | `eu-pef-2021-2279` |
| `validation_inventory_completeness` | 前景数据包 | 要求已知输入和输出，包括资源使用、产品、共产品、排放和废物，以及已披露排除项。FDM BAT 数值不得用作通用牛脂肪绩效门槛。 | `eu-pef-2021-2279`; `eu-fdm-bat-2019-2031` |
| `validation_estimate_replacement` | 推理估算 | 标记每个 `reasoned_estimate` 及其假设和替换触发条件。若重大估算缺少代表性前景或经审阅外部证据，则最终比较或已审阅背景数据集的校验结论为不确定。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 未熬制牛脂肪及其过程级投影的前景产品数据包；经证据和分配审阅后可成为 secondary_dataset 或 background_dataset |
| downstream_use | 在明确限定的熬制前交接点构建特定牛脂肪物流的 LCA process 或 lifecyclemodel |
| allowed_use | 特定物流的牛脂肪生产、供应链建模、下游熬制投入，以及资格证据支持时的食用或饲料路径建模和特定路线冷藏或冷冻配送情景 |
| excluded_use | 已熬制 tallow 或命名动物脂肪组成建模；跨物种默认值；缺少已声明分配模型的整头动物或屠宰场平均；营养或法定食品合规声明；基于未解决重大估算的比较声明 |
| required_metadata | 规范 PCR id；CPC 参照；全部参考流限定信息；牛和批次来源；组织物流；处置；起止门；纳入过程；上游数据集；共产品方法；时间；地域；技术；净重与皮重基准；储存与运输交接；数据责任人；来源和估算状态 |
| required_quality_disclosure | 数据完整性；质量平衡结果；直接与共享负荷；分配因子及敏感性；技术、地域、时间和物流代表性；UUID 缺口；截断；条件过程排除；未解决估算及替换触发条件 |
| update_trigger | Tiangong 身份新增或更正；CPC 范围变化；相关 Codex 或 PEF 规则修订；新产品物流证据；资格制度变化；调温、包装、交接或分配方法变化；代表性前景数据替换估算；重大质量平衡或校验发现 |

## 11. 数据源

| 来源 id | 类型 | 参考文献 | 用途 |
| --- | --- | --- | --- |
| `unsd-cpc-3-0-2025` | standard | 联合国统计司，Central Product Classification (CPC) Version 3.0 Explanatory Notes，子类 21512，2025-06-30。https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf（检索于 2026-08-11） | 精确的牛来源和未熬制类别身份；排除 tallow、greaves fat 以及骨髓油、骨油或蹄油。该来源不提供产品组成、产率、公用工程、排放或分配值。 |
| `codex-cxc-58-2005` | standard | Codex Alimentarius，Code of Hygienic Practice for Meat，CXC 58-2005。https://workspace.fao.org/sites/codex/Standards/CXC%2058-2005/CXC_058e.pdf（检索于 2026-08-11） | 胴体整理和分离背景；食用与非食用部位；宰后判定；处理、冷藏、冻结、包装、储存、运输和温控记录。它是卫生与过程控制指南，不是 LCA 因子来源或通用法定温度门槛。 |
| `codex-cxs-211-1999` | standard | Codex Alimentarius，Standard for Named Animal Fats，CXS 211-1999，修订至 2024 年。https://workspace.fao.org/sites/codex/Standards/CXS%20211-1999/CXS_211e.pdf（检索于 2026-08-11） | 边界对照：premier jus 和 edible tallow 由熬制牛组织取得。该标准适用于以食用状态呈现的命名动物脂肪；其中已熬制脂肪定义、组成范围和质量因子不是未熬制脂肪类别规格或 LCA 默认值。 |
| `eu-pef-2021-2279` | official_guidance | 欧盟委员会，Recommendation (EU) 2021/2279 on Environmental Footprint methods，附件 I 第 4.5 和 4.5.1 节，包括牛屠宰场分配。http://data.europa.eu/eli/reco/2021/2279/2021-12-30（检索于 2026-08-11） | 功能单位关联、生命周期清单完整性、直接负荷细分、多功能性层级、牛屠宰场共产品方法、数据质量、运输和披露。PEF 牛默认因子代表规定的 PEF 情境，本 PCR 不将其用作通用组成、产率、价格或分配默认值。 |
| `eu-fdm-bat-2019-2031` | official_guidance | 欧盟委员会，Implementing Decision (EU) 2019/2031，食品、饮料和乳品行业 BAT 结论，特别是 BAT 2 清单与监测条款。https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX:32019D2031（检索于 2026-08-11） | 适用于纳入食品加工操作时的过程级水、能源、原料、废水、废气、残余物和监测记录清单。不用于断言法律适用性，也不把 BAT-AEL 或绩效水平迁移到本 PCR。 |
