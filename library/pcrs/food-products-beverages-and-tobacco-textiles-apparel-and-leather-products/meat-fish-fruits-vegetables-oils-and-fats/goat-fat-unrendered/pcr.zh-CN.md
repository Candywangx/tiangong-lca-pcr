---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.goat-fat-unrendered
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 山羊脂肪，未熬制

## 1. 范围与适用性

本 PCR 适用于山羊屠宰和/或分割后分离的未熬制脂肪组织或未熬制脂肪原料。产品仍可识别为动物组织或脂肪原料，尚未经过为回收脂肪而进行的熬制、熔融、精炼、分提、氢化、酯交换或把它转化为已熬制脂肪/油的类似处理。

默认前景从分离或修整关口收到一批已完成宰后检验、带脂肪组织的山羊胴体部位或分割肉开始。前景包括分离与修整、视条件发生的冷却或冷冻、包装、冷藏与发运，以及仅截至声明合同交接点的运输。前景数据包也可以从已分离的未熬制山羊脂肪开始，但此时应链接符合要求的上游数据集，不得递归重复制备脂肪的同一分离阶段。

本 PCR 不适用于 CPC 21521–21529 的已熬制动物脂肪（包括牛脂或其他已熬制山羊脂肪）、精炼或化学改性脂肪、来自绵羊、牛、水牛、猪、禽、鱼或混合物种批次的脂肪，以及没有独立未熬制山羊脂肪参考流的整体屠宰场输出。即使未熬制脂肪预定送往熬制，熬制与精炼仍是默认前景之外的下游过程。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.goat-fat-unrendered |
| classification_refs | UNSD CPC 3.0：21515，Goat fat, unrendered |
| covered_products | 屠宰后从山羊分离或修整、未经熬制而出售或转移的含脂肪组织；在声明等级与处置用途时包括食用级或技术级原料；在声明实际状态时包括未冷却、冷藏或冷冻批次 |
| excluded_products | 已熬制、熔融、精炼、分提、氢化、酯交换或再酯化动物脂肪；牛脂；骨髓油、骨油或蹄油；混合物种脂肪；绵羊、牛、水牛、猪、禽、鱼或其他动物脂肪；未作为独立脂肪输出的整胴体或分割肉 |
| representative_product | 宰后检验和修整后分离的山羊脂肪组织净质量，在声明温度和交接关口作为未熬制原料转移 |
| production_route | 已完成宰后检验的山羊胴体部位或分割肉 → 分离/修整 → 视条件冷却或冷冻 → 视条件包装 → 储存/发运 → 声明交接；不含熬制或精炼 |
| market_state | 未熬制脂肪组织或脂肪原料；应声明实际解剖来源、附着非脂肪组织、等级、未冷却/冷藏/冷冻状态、包装、温度、储存时间与交接点 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供作为后续用途原料的未熬制山羊脂肪组织或未熬制脂肪原料 |
| How much | 1 kg 净质量，不含包装、托盘、容器、游离冰和其他皮重 |
| How well | 仅含山羊来源且未熬制、未精炼，并声明实际组织来源、附着非脂肪组织、等级、卫生处置与冷链状态 |
| How long or cycle | 一个生产与交接批次；声明交接前纳入的储存时间和配送环节 |
| reference_flow_link | 声明交接点 1 kg 符合要求的未熬制山羊脂肪净质量 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | Goat fat, unrendered `40180a73-975d-407f-aa3e-63588b6bf076` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 山羊物种身份；解剖组织来源；附着肌肉、结缔组织和骨的程度；食用级或技术级及处置用途；宰后检验状态；未熬制处理状态；未冷却/冷藏/冷冻状态；交接时产品温度；净重与皮重方法；包装形式；储存时间；发运起点与合同交接点；纳入的配送环节（如有） |

构建前景数据包时，`必需限定信息` 应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失限定信息会使参考流定义不完整。仅写“山羊脂肪”不足以界定本类别，因为组织组成、卫生处置和冷链状态会实质性改变数据生产边界。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品及全部按质量归一化的清单 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 参考流报告为 1 kg 未熬制山羊脂肪净质量。把来源质量记录换算为 kg 时不得改变所代表的物理状态。 |
| `net_product_mass` | 已包装、加冰、托盘化或容器化批次 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 使用核实后的净重，或总重减实测皮重确定产品质量。排除包装、容器、托盘、游离冰和运输设备。 |
| `treatment_state` | 产品身份 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 仅当记录的原料未经熬制、熔融回收、精炼、分提或化学改性时，质量记录才符合要求。不得把已熬制脂肪质量重新标作未熬制脂肪。 |
| `cold_chain_state` | 冷却、冷冻、储存、发运与配送 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 记录实测产品温度、状态（未冷却/冷藏/冷冻）、时间戳和储存或运输时长。本 PCR 不设统一温度阈值；以适用的食品安全规范和实际控制记录为准。 |
| `lot_mass_balance` | 分离/修整及后续处理 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 对同一批次和关口的投入质量、未熬制脂肪输出、其他共产品、废物、样品、滴液或水分损失及库存变化进行核对，并披露无法解释的不平衡。 |
| `transport_service` | 合同交接前纳入的配送 | Mass-distance | t·km | 用实测发运产品质量（吨）乘路线特定距离（千米）计算吨千米；另行记录冷藏运行及返程/调位假设。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 一批可追溯、已完成宰后检验且带脂肪的山羊胴体部位或分割肉进入分离/修整关口；或者已分离的未熬制山羊脂肪携带关联上游数据集进入后续前景步骤 |
| starting_condition_role | 未熬制山羊脂肪前景生产的上游产品投入 |
| product_classification_scope | 山羊脂肪，未熬制；CPC 3.0 代码 21515 仅为分类语境，解剖组织、等级和冷链状态仍是必需前景限定信息 |
| recursive_input_rule | 收到未熬制山羊脂肪用于继续冷却、包装、储存或配送时，将其作为技术圈产品投入记录一次并链接上游数据集；不得重复制备分离负荷，也不得将其视为无负荷投入 |
| upstream_dataset_requirement | 声明起始关口以前的山羊饲养、活体运输、屠宰、胴体处理、宰后检验及共享分割，需要具有物种、地域、技术、共产品处理与分配披露的可追溯上游数据集；不得无说明替换为绵羊或牛参数 |
| disclosure | 声明解剖来源与实际组织状态、附着肌肉/结缔组织/骨、食用级或技术级处置、检验状态、分离关口、冷却/冷冻历史、包装、储存、发运起点、合同交接点及运输是否在前景内 |

| rule_id | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `sb_unrendered_identity` | 产品及全部前景过程 | 仅纳入仍为未熬制状态的山羊脂肪组织或脂肪原料。熬制、熔融回收、精炼及已熬制脂肪生产在默认前景外，不得作为本参考流的生产步骤报告。 | `unsd-cpc-3-0-structure-2025`; `codex-cxs-211-1999` |
| `sb_actual_tissue_and_gate` | 起始条件与产品身份 | 识别实际解剖组织来源和附着非脂肪物质，并区分宰后检验/屠宰胴体处理边界与之后的分割或修整边界。只有通用山羊脂肪名称而无这些事实时，数据不完整。 | `codex-cxc-58-2005` |
| `sb_cold_chain_and_handover` | 冷却、冷冻、储存、发运与配送 | 纳入报告主体实际控制、直至声明交接点的冷链过程。记录温控与时长证据；除非明确声明纳入配送环节，否则在合同交接点终止。 | `codex-cxc-58-2005`; `eu-pef-2021-2279` |
| `sb_inventory_completeness` | 前景资源与排放清单 | 对每个纳入过程盘查实际产品投入/输出、水、能源、清洁材料、包装、废水、废物、直接排放、制冷剂损失和相关运输。FDM BAT 来源仅作为完整性与监测提示，不用于判定法律适用性、排放限值或绩效基准。 | `eu-fdm-bat-2019-2031` |
| `sb_exclusions_disclosed` | 数据集范围 | 记录并论证排除的生命周期阶段和过程，包括上游山羊生产、起始关口外的共享屠宰过程、下游熬制/精炼、交接后运输、使用和生命周期末端。 | `eu-pef-2021-2279` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `fat_separation_and_trimming` | 山羊脂肪分离与修整 | `required` | 始终需要；若前景从已分离的未熬制山羊脂肪开始并链接符合要求的上游数据集，则除外 | 建立独立未熬制脂肪输出和共产品分配关口 | 1 kg 未熬制山羊脂肪净输出 |
| `cold_conditioning` | 冷却或冷冻 | `conditional` | 声明产品为冷藏或冷冻，或交接前发生温控暂存时需要 | 建立实际冷链状态而不熬制组织 | 1 kg 经调温的未熬制山羊脂肪输出 |
| `packaging` | 产品包装 | `conditional` | 包装、内衬、容器、冰或可重复使用运输物品跨越或支持前景边界时需要 | 保护并识别批次，同时使产品质量与皮重分开 | 1 kg 已包装产品净重 |
| `cold_storage_and_dispatch` | 冷藏与发运 | `required` | 冷藏或冷冻市场状态需要；即时未冷却转移仍保留发运和交接记录并报告储存时长为零 | 保持批次身份并声明发运关口 | 1 kg 发运产品净重 |
| `outbound_transport_to_handover` | 至声明交接点的出站运输 | `conditional` | 仅在卖方控制配送或其他运输环节位于声明前景内时纳入 | 把产品运至合同交接点，不越过该边界 | t·km 与交接的 1 kg 产品净重 |

### 过程：山羊脂肪分离与修整（`fat_separation_and_trimming`）

#### 输入

##### 产品流

###### 已完成宰后检验、带脂肪的山羊胴体部位或分割肉（`goat_carcass_parts_input`）

记录进入分离关口的实际山羊单一物种组织，并链接上游屠宰/分割数据集。不得替换为绵羊、牛或混合物种投入。

- 选定流：带脂肪组织的山羊胴体部位或分割肉
- 流属性/单位：Mass / kg
- 数量规则：按可追溯批次实测净投入质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 未熬制山羊脂肪净输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_tissue_lot_and_mass`
- 来源：`codex-cxc-58-2005`

###### 分离与卫生处理用电（`separation_electricity`）

记录分割、修整、通风、清洁及本过程关口内其他作业的计量或分配电量。

- 选定流：分离与卫生作业供电
- 流属性/单位：Energy / kWh
- 数量规则：电表计量，或基于电表并对批次有文件化依据的分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 未熬制山羊脂肪净输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_resources_and_emissions`
- 来源：`eu-fdm-bat-2019-2031`

###### 水和清洁材料（`separation_water_cleaning_inputs`）

记录跨越过程边界的饮用/工艺水和清洁或卫生产品。当供应流不同时，在数据集中将水和各材料记录为独立交换。

- 选定流：分离区供应的水和清洁材料
- 流属性/单位：Mass or volume / 按实测记录为 kg 或 m3
- 数量规则：可归属于本过程的仪表、批次、领料或采购记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 未熬制山羊脂肪净输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_resources_and_emissions`
- 来源：`codex-cxc-58-2005`; `eu-fdm-bat-2019-2031`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 分离关口的未熬制山羊脂肪（`unrendered_goat_fat_separated`）

这是任何熬制之前的独立含脂肪组织输出。记录解剖来源、附着非脂肪组织、等级、检验处置和实测状态。

- 选定流：Goat fat, unrendered `40180a73-975d-407f-aa3e-63588b6bf076`
- 流属性/单位：Mass / kg
- 数量规则：离开分离/修整的批次核实净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每个分离批次并归一到 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fat_output_state`
- 来源：`unsd-cpc-3-0-structure-2025`; `codex-cxc-58-2005`

###### 其他可销售或可利用屠宰/分割输出（`other_coproducts`）

肉、食用内脏、骨、皮或其他输出与脂肪分离共享负荷时分别记录。根据实际处置判定其为共产品、残余物或废物。

- 选定流：同一山羊批次的场址特定共产品
- 流属性/单位：Mass / kg
- 数量规则：按输出类别实测质量并记录去向
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每个分离批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coproduct_waste_allocation`
- 来源：`eu-pef-2021-2279`

##### 废物流

###### 判废、弃置或非产品组织（`condemned_discarded_tissue`）

把拒收或送往废物管理的材料与可销售未熬制脂肪及其他共产品分开记录，并记录处置和原因。

- 选定流：判废或弃置的山羊组织
- 流属性/单位：Mass / kg
- 数量规则：按批次和去向实测废物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每个分离批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coproduct_waste_allocation`
- 来源：`codex-cxc-58-2005`; `eu-pef-2021-2279`

###### 分离与卫生处理废水（`separation_wastewater`）

记录废水量和适用场址计划要求的监测参数。本 PCR 不推定污染物浓度或法律限值。

- 选定流：分离与卫生处理废水
- 流属性/单位：Volume / m3
- 数量规则：计量、平衡或以其他有记录方式归属于该过程的排放
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 未熬制山羊脂肪净输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_resources_and_emissions`
- 来源：`eu-fdm-bat-2019-2031`

##### 基本流

### 过程：冷却或冷冻（`cold_conditioning`）

#### 输入

##### 产品流

###### 进入冷调节的未熬制山羊脂肪（`fat_to_cold_conditioning`）

保持相同批次身份，并记录调节前温度和状态。

- 选定流：Goat fat, unrendered `40180a73-975d-407f-aa3e-63588b6bf076`
- 流属性/单位：Mass / kg
- 数量规则：进入冷却或冷冻的实测净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 调节后输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cold_chain_energy_and_state`
- 来源：`codex-cxc-58-2005`

###### 制冷用电（`cold_conditioning_electricity`）

记录冷却、冷冻、风机、泵及过程关口内相关温控暂存的实际用电。

- 选定流：冷调节过程供电
- 流属性/单位：Energy / kWh
- 数量规则：计量电量，或对批次和运行期有文件化依据的电表分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 调节后未熬制山羊脂肪
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cold_chain_energy_and_state`
- 来源：`codex-cxc-58-2005`; `eu-fdm-bat-2019-2031`

###### 制冷剂补充（`refrigerant_makeup`）

记录可归属于报告期的制冷剂补充，并以设备或服务记录进行有依据的分配。

- 选定流：场址特定制冷剂补充
- 流属性/单位：Mass / kg
- 数量规则：根据服务或库存记录确定纳入设备的制冷剂补充
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每报告期输出并归一到 1 kg 调节后产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_refrigerant_records`
- 来源：`eu-fdm-bat-2019-2031`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 冷藏或冷冻未熬制山羊脂肪（`conditioned_unrendered_goat_fat`）

记录净质量、实测温度、状态、起止时间及滴液或库存变化。冷却或冷冻不会把组织转化为已熬制脂肪。

- 选定流：Goat fat, unrendered `40180a73-975d-407f-aa3e-63588b6bf076`
- 流属性/单位：Mass / kg
- 数量规则：核实的净输出质量，并有时间戳温度与状态记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每个调节批次并归一到 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cold_chain_energy_and_state`
- 来源：`codex-cxc-58-2005`

##### 废物流

###### 滴液、渗出液或冷调节损失（`cold_conditioning_loss`）

记录实际移除物或无法解释的质量损失；不得使用绵羊、牛或通用肉类默认值。

- 选定流：冷调节产生的滴液、渗出液或弃置物
- 流属性/单位：Mass / kg
- 数量规则：实测收集质量或质量平衡差，并披露方法
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每个调节批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_cold_chain_energy_and_state`
- 来源：

##### 基本流

###### 排放到空气的制冷剂（`refrigerant_emission_to_air`）

仅记录由核实的服务和库存记录计算所得的场址特定制冷剂损失；在产出数据集中识别实际物质。

- 选定流：场址特定制冷剂空气排放
- 流属性/单位：Mass / kg
- 数量规则：分配到纳入设备与报告期输出的制冷剂质量平衡
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每报告期输出并归一到 1 kg 调节后产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_refrigerant_records`
- 来源：`eu-fdm-bat-2019-2031`

### 过程：产品包装（`packaging`）

#### 输入

##### 产品流

###### 进入包装的未熬制山羊脂肪（`fat_to_packaging`）

在包装过程保持批次身份和实际冷链状态。

- 选定流：Goat fat, unrendered `40180a73-975d-407f-aa3e-63588b6bf076`
- 流属性/单位：Mass / kg
- 数量规则：进入包装的实测产品净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每个包装批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_and_tare`
- 来源：

###### 初级、次级与运输包装（`packaging_materials`）

按材料分别记录每种包装、内衬、吸收物、标签、容器、托盘或冰的质量和复用状态。包装不属于参考产品质量。

- 选定流：场址特定包装材料和可重复使用运输物品
- 流属性/单位：Mass or count / kg 或件（含质量换算）
- 数量规则：按材料和批次实测或采购记录；计件记录需要有文件化单件质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 已包装产品净质量
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_and_tare`
- 来源：`eu-pef-2021-2279`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 已包装未熬制山羊脂肪（`packaged_unrendered_goat_fat`）

把脂肪净质量与皮重分开报告，并保留未熬制身份和状态限定信息。

- 选定流：Goat fat, unrendered `40180a73-975d-407f-aa3e-63588b6bf076`
- 流属性/单位：Mass / kg
- 数量规则：包装总重减实测包装、容器、托盘和游离冰皮重
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每个包装批次并归一到 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_and_tare`
- 来源：

##### 废物流

###### 包装边角料与拒用包装（`packaging_waste`）

按材料和去向记录实际包装废物。

- 选定流：场址特定包装废物
- 流属性/单位：Mass / kg
- 数量规则：按材料实测或库存平衡得到的数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 已包装产品净质量
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_and_tare`
- 来源：`eu-fdm-bat-2019-2031`

##### 基本流

### 过程：冷藏与发运（`cold_storage_and_dispatch`）

#### 输入

##### 产品流

###### 进入储存或发运的未熬制山羊脂肪（`fat_to_storage_dispatch`）

记录接收净质量、状态、温度、时间和包装。即时转移应有零时长储存记录，不得假设冷藏负荷。

- 选定流：Goat fat, unrendered `40180a73-975d-407f-aa3e-63588b6bf076`
- 流属性/单位：Mass / kg
- 数量规则：进入发运关口的实测净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每个发运批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_storage_dispatch_handover`
- 来源：`codex-cxc-58-2005`

###### 储存与发运用电（`storage_dispatch_electricity`）

记录声明储存期内冷藏、风机、搬运与发运的实际能源。

- 选定流：储存与发运供电
- 流属性/单位：Energy / kWh
- 数量规则：电表计量，并按有文件化依据的时间、体积、质量或设备使用驱动量分配
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 发运产品净质量
- 基准类型：储存时间（`storage_duration`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_storage_dispatch_handover`
- 来源：`codex-cxc-58-2005`; `eu-fdm-bat-2019-2031`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 发运交接处的未熬制山羊脂肪（`reference_product_at_handover`）

合同交接点为发运关口时，本输出实现参考流。记录净质量、温度、状态、包装、发运时间和接收方或后续数据集链接。

- 选定流：Goat fat, unrendered `40180a73-975d-407f-aa3e-63588b6bf076`
- 流属性/单位：Mass / kg
- 数量规则：发运交接的核实净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_storage_dispatch_handover`
- 来源：`codex-cxc-58-2005`

##### 废物流

###### 储存拒收或腐败产品（`storage_rejects`）

把拒收质量、原因、温度历史和去向与可销售产品分开记录。

- 选定流：拒收或腐败的未熬制山羊脂肪
- 流属性/单位：Mass / kg
- 数量规则：按批次实测拒收净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每个发运批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_storage_dispatch_handover`
- 来源：`codex-cxc-58-2005`

##### 基本流

###### 排放到空气的冷藏制冷剂（`storage_refrigerant_emission_to_air`）

仅记录由纳入储存设备的核实服务和库存记录计算所得的场址特定制冷剂损失；在产出数据集中识别实际物质。

- 选定流：场址特定冷藏制冷剂空气排放
- 流属性/单位：Mass / kg
- 数量规则：分配到纳入冷藏设备与报告期输出的制冷剂质量平衡
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每报告期发运输出并归一到 1 kg 产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_storage_refrigerant_records`
- 来源：`eu-fdm-bat-2019-2031`

### 过程：至声明交接点的出站运输（`outbound_transport_to_handover`）

#### 输入

##### 产品流

###### 已发运未熬制山羊脂肪（`fat_to_outbound_transport`）

仅在运输位于前景内时纳入此投入，并保留批次、包装、温度和状态记录。

- 选定流：Goat fat, unrendered `40180a73-975d-407f-aa3e-63588b6bf076`
- 流属性/单位：Mass / kg
- 数量规则：核实的发运净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每个配送批次
- 基准类型：运输服务（`transport_service`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_transport_and_handover`
- 来源：`codex-cxc-58-2005`; `eu-pef-2021-2279`

###### 冷藏运输服务（`refrigerated_transport_service`）

采用实际路线、车辆或承运服务、载荷、制冷状态和纳入的返程/调位处理。若直接建模燃料，不得再纳入重叠的运输服务数据集。

- 选定流：路线特定冷藏运输服务
- 流属性/单位：Transport service / t·km
- 数量规则：发运净质量（吨）乘路线特定距离（千米）
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 送至声明交接点的产品净质量
- 基准类型：运输服务（`transport_service`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_transport_and_handover`
- 来源：`codex-cxc-58-2005`; `eu-pef-2021-2279`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 合同交接点交付的未熬制山羊脂肪（`delivered_reference_product`）

纳入配送时，本输出在目的地交接处实现参考流。不得把前景延伸到后续熬制、精炼、使用或生命周期末端。

- 选定流：Goat fat, unrendered `40180a73-975d-407f-aa3e-63588b6bf076`
- 流属性/单位：Mass / kg
- 数量规则：声明目的地交接处接受的核实净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_transport_and_handover`
- 来源：`codex-cxc-58-2005`

##### 废物流

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `alloc_define_outputs` | 屠宰、分割、分离与修整关口 | 将未熬制山羊脂肪、肉、食用内脏、骨、皮、其他可利用输出、判废材料及废物识别为具有质量和去向的独立输出。不得把实际组织状态或处置不同的输出合并为一个通用共产品。 | `eu-pef-2021-2279`; `codex-cxc-58-2005` |
| `alloc_direct_first` | 可直接归属的前景作业 | 在分配任何共享剩余负荷之前，先细分并把可分离的修整、冷却/冷冻、包装、储存和运输投入与排放直接归给导致它们的输出。 | `eu-pef-2021-2279` |
| `alloc_shared_residual` | 共享屠宰或分割负荷 | 无法细分时，记录所选分配关系、因子输入、价格或物理驱动量、地域、时间期及敏感性。声称符合 PEF 的研究应采用适用的 PEF 屠宰场规则；其他研究应论证其方法，不得把绵羊或牛因子无说明复制到通用山羊脂肪数据集。 | `eu-pef-2021-2279` |
| `alloc_waste_or_product` | 状态不确定的输出 | 只有法规/合同处置和去向支持时才将输出视为废物。可销售或可利用的未熬制脂肪输出不得仅因被称为副产品而无负荷。 | `eu-pef-2021-2279` |
| `alloc_no_rendering_merge` | 下游熬制或精炼 | 默认把下游熬制/精炼留在本产品系统外。更宽研究若纳入，应把未熬制山羊脂肪作为独立下游过程投入，并防止重复计算共享屠宰或分离负荷。 | `unsd-cpc-3-0-structure-2025`; `codex-cxs-211-1999`; `eu-pef-2021-2279` |
| `alloc_reconciliation` | 分配结果 | 将全部共产品和废物的已分配负荷与完整共享过程清单核对，并披露未分配剩余、零负荷输出以及对价格或物理驱动量变化的敏感性。 | `eu-pef-2021-2279` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_tissue_lot_and_mass` | `fat_separation_and_trimming` | 山羊胴体部位/分割肉投入和组织身份 | 批次接收、分割和检验记录 | lot_id; goat species confirmation; animal/lot origin; post-mortem inspection and disposition; anatomical source; attached muscle/connective tissue/bone; gross_mass; tare_mass; net_mass; timestamp | 把秤单与检验/分割记录关联到同一批次；可用时保留照片或编码组织说明 | kg | 每批次 | 覆盖完整报告期且不遗漏生产日 | 每个纳入屠宰或分割场址 | 按批次汇总核实净投入质量；聚合前保留场址和组织类别 | 秤校准、检验/处置记录、批次谱系、物种声明与完整性核对 |
| `cp_fat_output_state` | `fat_separation_and_trimming` | 未熬制脂肪输出质量与状态 | 批次输出和产品规格记录 | lot_id; output_mass; tare; anatomical_source; attached_nonfat_tissue; grade; unrendered_confirmation; product_temperature; state; timestamp | 核实净重并把产品状态观察关联至批次 | kg 与 °C | 每批次及交接 | 完整报告期 | 每个纳入生产场址 | 仅汇总符合要求的山羊单一物种未熬制脂肪；食用/技术等级和状态分开保留 | 秤校准、产品规格、带时间戳温度与批次追溯 |
| `cp_resources_and_emissions` | `fat_separation_and_trimming` | 水、能源、清洁材料、废水、废物和直接排放 | 仪表、批次、库存、服务和监测记录 | meter_id; start/end readings; material_id; quantity; process_area; wastewater_volume; monitored_parameter; waste_mass; destination; reporting_period | 优先分表计量；否则从场址总量按有文件化因果依据分配并保留原始总量 | 原始仪表或采购单位，并明确换算 | 连续或每批次/班次；按月汇总 | 至少一个有代表性的报告年或全部可用生产季日 | 每个纳入场址与公用系统 | 按过程和期间求和，仅对共享剩余用披露驱动量分配，并归一到符合要求输出 | 仪表校准、发票、库存核对、监测报告与生产日覆盖 |
| `cp_coproduct_waste_allocation` | `fat_separation_and_trimming` | 共产品/废物质量、处置与分配输入 | 输出、销售、转移、废物和价格记录 | lot_id; output_category; mass; disposition; destination; revenue_or_price; currency; price_period; direct_resource_link; waste_status_basis | 每个输出关联质量与处置；只有分配需要时采集同期价值 | kg 与声明货币/kg | 每批次；价格序列按所选分配期间 | 与共享过程清单相同期间 | 每个纳入场址和去向路线 | 先直接归属，仅分配共享剩余；把因子核对至可分配负荷 100% | 秤记录、合同/发票、废物转移记录、分配工作表和敏感性检查 |
| `cp_cold_chain_energy_and_state` | `cold_conditioning` | 冷却/冷冻能源、时间、温度与产品质量 | 仪表、批次、设备和温度记录 | lot_id; equipment_id; entry/exit_mass; entry/exit_temperature; state; start/end_time; electricity_reading; defrost_or_idle_allocation | 带时间戳产品/库温测量与分表计量，或有文件化设备分配 | kg、°C、h、kWh | 每批次；能源按仪表间隔 | 完整报告期，适用时包括启动、空载和化霜 | 每个纳入冷调节系统 | 按设备和批次汇总，核对质量变化，归一到调节后符合要求输出 | 校准温度设备、仪表校准、设备日志与报警/偏差记录 |
| `cp_refrigerant_records` | `cold_conditioning` | 制冷剂补充与排放 | 制冷剂库存和服务记录 | refrigerant_identity; equipment_id; opening_stock; purchases; additions; recoveries; closing_stock; service_date; leak_event | 对纳入设备做年度或服务期间质量平衡 | kg 制冷剂 | 每次服务/泄漏；年度核对 | 与产品输出相同报告期 | 每个纳入制冷系统 | 按物质计算损失，并用有文件化设备服务和输出驱动量分配 | 合格服务记录、采购/回收证据与库存核对 |
| `cp_packaging_and_tare` | `packaging` | 包装投入、复用、皮重与废物 | 物料表、计件、称重、库存和废物记录 | material_id; item_count; unit_mass; batch_mass; reuse_cycles; gross_pack_mass; tare_mass; free_ice_mass; waste_mass; destination | 称量代表性物品，把领用/退回库存与包装批次核对 | kg 与件 | 每种包装配置和批次 | 完整报告期 | 每个纳入包装场址 | 按材料求和；可复用物品按核实使用次数摊销；全部皮重留在产品净重之外 | 校准秤、供应商规格、库存核对、复用日志与废物转移记录 |
| `cp_storage_dispatch_handover` | `cold_storage_and_dispatch` | 储存能源、时长、发运质量、状态与拒收 | 仓储、仪表、库存和发运记录 | lot_id; receipt/dispatch_mass; receipt/dispatch_temperature; state; receipt/dispatch_time; storage_zone; electricity; rejects; reject_reason; handover_party | 批次关联仓储管理和仪表记录；即时转移保留零时长记录 | kg、°C、h、kWh | 每次入库和发运；能源按仪表间隔 | 完整报告期 | 每个纳入仓库和发运关口 | 按有文件化因果驱动量分配共享能源；保留批次时长与状态；核对期初/期末库存 | 仪表校准、仓储日志、发运接受、温度记录与库存核对 |
| `cp_storage_refrigerant_records` | `cold_storage_and_dispatch` | 冷藏制冷剂排放 | 制冷剂库存和服务记录 | refrigerant_identity; equipment_id; opening_stock; purchases; additions; recoveries; closing_stock; transfers; service_date; leak_event | 对纳入冷藏设备做报告期质量平衡 | kg 制冷剂 | 每次服务/泄漏；年度或生产期核对 | 与发运产品相同报告期 | 每个纳入冷藏制冷系统 | 按物质计算损失，仅用有文件化输出或设备使用驱动量分配到纳入储存设备 | 合格服务记录、采购/回收证据与库存核对 |
| `cp_transport_and_handover` | `outbound_transport_to_handover` | 纳入的配送服务与交接接受 | 发运、路线、承运、燃料/服务、温度和接受记录 | shipment_id; lot_id; net_mass; origin; destination; contractual_handover; route_distance; vehicle_type; payload; empty_return; refrigeration; departure/arrival_time; temperatures; accepted_mass | 把承运记录或车载/路线证据与发运和收货接受关联 | kg、km、t·km、°C、h | 每个纳入发运 | 完整报告期 | 每条纳入路线和承运方式 | 净吨数 × 路线千米计算 t·km；一致处理返程/调位和制冷；归一到接受质量 | 地磅/发运记录、路线证据、承运发票、温度日志与签收 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_net_mass` | 全部产品和材料批次 | net_mass_kg = gross_mass_kg − measured_tare_kg − free_ice_kg；不得扣除属于声明产品状态的附着山羊组织 | gross_mass_kg; measured_tare_kg; free_ice_kg; tissue_condition | net_mass_kg |  |
| `calc_reference_normalization` | 每项清单交换 | normalized_exchange = exchange_quantity / conforming_reference_output_kg；采用同一声明关口和期间的输出质量 | exchange_quantity; conforming_reference_output_kg | 每 1 kg 未熬制山羊脂肪的交换量 | `eu-pef-2021-2279` |
| `calc_lot_mass_balance` | 分离、调温、包装、储存和配送 | input_mass + opening_inventory = reference_product + other_coproducts + wastes + samples + closing_inventory + measured_or_disclosed_loss；报告剩余量及其占投入比例 | 投入/输出质量；期初/期末库存；样品；实测损失 | 批次质量平衡剩余和完整性标志 |  |
| `calc_refrigerant_loss` | 纳入制冷设备 | loss_by_substance = opening_stock + purchases − additions_to_other_systems − recovered − closing_stock，并按有文件记录的转移调整；仅分配至纳入设备和输出 | 库存、采购、补充、回收、转移和设备输出记录 | 每种物质每 1 kg 产品的制冷剂排放 kg |  |
| `calc_transport_service` | 纳入的出站配送 | transport_service_tkm = net_delivered_mass_kg / 1000 × route_distance_km；记录空返/调位和制冷处理 | net_delivered_mass_kg; route_distance_km; vehicle and return records | 每批交付及每 1 kg 接受产品的 t·km | `eu-pef-2021-2279` |
| `calc_shared_allocation` | 共享屠宰或分割剩余负荷 | 仅在直接归属后使用有文件化研究特定或适用 PEF 分配因子；因子输入应与山羊输出、时期、地域、组织/处置类别及系统关口相匹配，分配份额应与可分配总量核对 | shared residual inventory; output categories; mass/physical drivers or economic values; allocation factors | 各输出已分配负荷、核对结果与敏感性 | `eu-pef-2021-2279` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_species_and_tissue_identity` | 全部批次 | 证明仅含山羊，并声明实际解剖组织来源和附着肌肉/结缔组织/骨；混合或未知物种批次不符合要求。 | 供应商/批次声明、屠宰/分割记录、检验记录和组织说明 |
| `dq_unrendered_state` | 参考产品 | 证明声明交接前未发生熬制、熔融回收、精炼、分提或化学改性。 | 过程流程、设备/过程记录、产品规格与运营方声明 |
| `dq_lot_traceability` | 全部前景过程 | 从投入组织到分离、调温、包装、储存、发运和纳入配送保持一个批次谱系。 | 批次 ID、质量记录、时间戳、仓储/发运记录和接受记录 |
| `dq_cold_chain` | 冷藏或冷冻产品 | 在调温出口、储存、发运和纳入配送交接处保留实测温度/状态和时长记录；披露偏差及其处置。 | 校准温度日志、报警、偏差记录与接受准则 |
| `dq_mass_and_allocation` | 多输出关口 | 核对批次质量和共享负荷分配；披露剩余、输出状态、零负荷处理、因子期间与敏感性。 | 质量平衡表、分配工作表、销售/处置证据与审核检查 |
| `dq_resource_completeness` | 纳入前景 | 覆盖报告期全部生产日/批次，并把水、能源、清洁材料、包装、废水、废物、制冷剂和运输与场址总量核对，或说明排除。 | 仪表/发票/库存核对与覆盖矩阵 |
| `dq_representativeness` | 发布数据集 | 声明地域、技术、场址数、报告期、组织/等级组合、冷链状态、包装配置和纳入交接路线；不得声称超出这些事实的代表性。 | 数据集元数据与抽样/聚合记录 |
| `dq_no_cross_species_defaults` | 定量值与范围 | 不得把绵羊或牛的产率、组织组成、能源、水、损失或分配参数作为无说明的山羊默认值。任何代理均需明确来源、适用性论证、不确定性和替换触发条件。 | 来源审查、代理论证、敏感性分析与审查元数据 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `val_reference_identity` | 参考流 | 产品流 UUID 应为 `40180a73-975d-407f-aa3e-63588b6bf076`，参考属性 UUID 应为 `93a60a56-a3c8-11da-a746-0800200b9a66`，单位组 UUID 应为 `93a60a57-a4c8-11da-a746-0800200c9a66`，参考单位为 kg，参考数量为 1 kg 净产品。 |  |
| `val_product_scope` | 产品身份 | 当物种不是山羊或为混合/未知物种、未披露解剖组织及附着非脂肪物质，或交接前发生熬制/精炼时，拒绝数据包。 | `unsd-cpc-3-0-structure-2025`; `codex-cxs-211-1999` |
| `val_boundary_and_handover` | 系统边界 | 要求明确分离/起始关口、宰后检验/处置、纳入的冷却/冷冻、包装、储存、发运、合同交接，以及运输纳入/排除。 | `codex-cxc-58-2005`; `eu-pef-2021-2279` |
| `val_temperature_state` | 冷藏或冷冻批次 | 要求相关关口具有时间戳温度/状态和储存/运输时长记录。该校验按声明规范检查记录完整性，不虚构统一温度阈值。 | `codex-cxc-58-2005` |
| `val_mass_balance` | 每批次及报告期 | 要求核对产品、共产品、废物、样品、滴液/损失及库存变化；标记无法解释的剩余，不得强行计入参考产品。 |  |
| `val_allocation` | 共享多输出过程 | 要求先直接归属，再提供完整输出/处置记录、方法/因子/期间/地域披露、核对与敏感性。拒绝把绵羊或牛参数无说明用作通用山羊脂肪默认值。 | `eu-pef-2021-2279` |
| `val_inventory_completeness` | 前景清单 | 对水、能源、清洁材料、包装、废水、废物、制冷剂/直接排放、储存及纳入运输要求提供覆盖或明确排除。FDM BAT 数值或法律阈值不是本 PCR 符合性准则。 | `eu-fdm-bat-2019-2031` |
| `val_no_double_count` | 关联上游与下游数据集 | 已分离脂肪进入后续前景过程时，要求仅有一个上游分离数据集且不得重建其负荷；下游建模熬制时，要求单独的已熬制脂肪过程，不得并入本参考产品。 | `eu-pef-2021-2279`; `codex-cxs-211-1999` |
| `val_quantitative_evidence` | 默认值、范围与代理 | 每项非前景定量约束都应有适用来源，并声明组织/状态/技术/地域基础。本候选 PCR 不提供山羊特定默认范围；场址记录优先。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 独立中间产品“未熬制山羊脂肪”的前景生产数据集 |
| downstream_use | 可作为消耗未熬制山羊脂肪过程的 `secondary_dataset` 或 `background_dataset`，包括单独建模的熬制过程 |
| allowed_use | 用于与声明解剖来源、附着组织、等级、冷链状态、地域、技术、包装和交接关口相匹配的山羊单一物种未熬制脂肪组织 |
| excluded_use | 已熬制或精炼脂肪；牛脂；其他或混合动物物种；未说明脂肪组织；缺少宰后处置、冷链状态、共产品分配或交接边界的数据集；超出已证明代表性的比较声明 |
| required_metadata | PCR id；参考流 UUID/属性/单位组；CPC 语境；物种；解剖来源；附着组织；食用/技术等级；检验/处置；未熬制确认；场址/地域；技术；报告期；批次覆盖；冷却/冷冻状态；包装；储存；发运与交接；纳入运输；分配方法；上下游数据集链接 |
| required_quality_disclosure | 前景与次级数据比例；仪表与质量覆盖；排除项；质量平衡剩余；温度偏差；共产品/废物处置；分配因子与敏感性；代理与不确定性；缺少山羊特定定量默认值 |
| update_trigger | 新的经审查山羊脂肪特定证据；产品流/属性/单位身份改变；新的已熬制/未熬制分类指引；组织/等级范围改变；分离、冷链、包装、储存、运输或分配实践发生实质变化；可替换代理的改进前景记录 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-0-structure-2025` | 数据集（`dataset`） | United Nations Statistics Division，Central Product Classification Version 3.0，structure only，2025-06-30，官方 CSV：https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv（检索日期 2026-08-11） | CPC 21515 “Goat fat, unrendered”的官方身份，以及与 CPC 2152 已熬制动物脂肪类别的区分。限制：仅用于分类身份，不提供 LCA 过程数量、组织组成、温度、产率或分配因子。 |
| `codex-cxc-58-2005` | 标准（`standard`） | Codex Alimentarius，Code of Hygienic Practice for Meat，CXC 58-2005：https://www.fao.org/fao-who-codexalimentarius/sh-proxy/en/?lnk=1&url=https%3A%2F%2Fworkspace.fao.org%2Fsites%2Fcodex%2FStandards%2FCXC%2B58-2005%2FCXC_058e.pdf（检索日期 2026-08-11） | 屠宰/分割卫生与检验语境、有文件记录的过程控制、分隔/交叉污染控制、冷却/冷冻、储存及运输交接记录。限制：仅为食品卫生/过程控制背景，不是山羊脂肪 LCA 数据集，也不提供类别级清单默认值。 |
| `codex-cxs-211-1999` | 标准（`standard`） | Codex Alimentarius，Standard for Named Animal Fats，CXS 211-1999（修订至 2024）：https://www.fao.org/fao-who-codexalimentarius/sh-proxy/en/?lnk=1&url=https%3A%2F%2Fworkspace.fao.org%2Fsites%2Fcodex%2FStandards%2FCXS%2B211-1999%2FCXS_211e.pdf（检索日期 2026-08-11） | 证明其命名产品（如 rendered lard、premier jus、edible tallow）通过熬制定义，因此不属于本未熬制类别。限制：其组成、质量、添加剂和分析规定针对标准范围内的命名脂肪，不外推到未熬制山羊脂肪，也不作为 LCA 数值。 |
| `eu-pef-2021-2279` | 官方指南（`official_guidance`） | Commission Recommendation (EU) 2021/2279，Annex I Product Environmental Footprint Method：https://eur-lex.europa.eu/eli/reco/2021/2279/oj/eng（检索日期 2026-08-11） | 中间产品的申报单位/参考流逻辑、系统边界与排除披露、共产品/废物识别、剩余分配前的直接细分、运输数据和数据质量框架。限制：本 PCR 不复制绵羊/牛的组成或运行参数；只有研究声称相应 PEF 范围并满足其适用条件时，才应用 PEF 特定屠宰场分配。 |
| `eu-fdm-bat-2019-2031` | 官方指南（`official_guidance`） | Commission Implementing Decision (EU) 2019/2031，food, drink and milk industries BAT conclusions：https://eur-lex.europa.eu/eli/dec_impl/2019/2031/oj/eng（检索日期 2026-08-11） | 水、能源、原料、废水/废气流、废物和相关过程监测的清单完整性提示。限制：仅在适用时用于过程清单和监测完整性；不推广法律适用门槛、BAT-AEL 或绩效值，也不将其作为 PCR 默认值。 |
