---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.meat-of-geese-fresh-or-chilled
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 鲜或冷藏鹅肉

## 1. 范围与适用性

本 PCR 覆盖在屠宰与加工设施工厂门以鲜或冷藏状态交付鹅肉的生产。前景边界始于声明设施门点接收合格活鹅，包含接收、致昏、屠宰、放血、浸烫、脱羽、去内脏、胴体整理、适用的分割与去骨、冷却、冷藏、包装、清洗、废水管理，以及存在时的场内公用工程生产。

鹅养殖、饲料生产、孵化和入厂运输作为链接上游过程，不属于前景操作。工厂门后的配送、零售、烹调、消费和寿命终止不在本前景边界内。冷冻鹅肉、鹅肥肝或鹅肝酱，以及以内脏为参考产品的系统均被排除。若参考产品系统产生内脏、羽毛、血、脂、皮、骨、头和掌，这些物流仍须作为可见共产品或废物记录。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.meat-of-geese-fresh-or-chilled` |
| classification_refs | CPC 3.0：21123 Meat of geese, fresh or chilled |
| covered_products | 在生产设施工厂门以鲜或冷藏状态交付的整鹅胴体、分割件、肉块或去骨鹅肉 |
| excluded_products | 冷冻鹅肉；鹅肥肝或鹅肝酱；以肝、心、肌胃、肠或其他内脏为参考产品；活鹅 |
| representative_product | 合格鲜或冷藏鹅肉净产品，并声明整胴体或分割形态 |
| production_route | 活鹅接收；致昏与屠宰；放血；浸烫与脱羽；去内脏与整理；适用的分割与去骨；冷却；冷藏；包装与交付 |
| market_state | 工厂门食品级鲜或冷藏鹅肉，并声明温度状态、胴体或分割形态、带骨状态、带皮状态和包装状态 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 在生产设施工厂门提供食品级鲜或冷藏鹅肉 |
| How much | 1 kg 合格鹅肉净质量，不含包装、吸水垫、包装内气体和托盘质量 |
| How well | 声明等级；整胴体或分割件；带骨或去骨；带皮或去皮；鲜或冷藏温度状态；包装形式 |
| How long or cycle | 一个放行生产批次，或截至工厂门交付的声明报告期生产组合 |
| reference_flow_link | `packaging_dispatch` 中的 `reference_fresh_chilled_goose_meat` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 鹅肉，新鲜或冷藏 `a2ca6142-7a35-485f-85fd-3f19301fa6c5` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 鹅种或声明生产群体；鲜或冷藏状态；产品温度基准；整胴体、分割或去骨形态；带骨状态；带皮状态；产品净质量；包装形式；工厂与地域；报告期；分配方法；共产品状态与去向 |

构建前景数据包时，每项必需限定信息均须在数据集元数据、过程说明、参考流备注、产品说明或等效字段中声明。缺失限定信息会使参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 将定量参考固定为 1 kg 合格鲜或冷藏鹅肉净质量。 |
| `net_product_mass` | 产品放行 | Mass | kg | 从参考产品质量中排除包装、吸水垫、包装内气体、托盘、游离滴水和单独声明的共产品。 |
| `live_mass_basis` | 活鹅 | Mass | kg | 在计算得率前声明称量点、禁食或暂存条件、拒收批次和到厂死亡质量。 |
| `temperature_state` | 参考产品 | Temperature | 声明单位 | 证明参考产品保持鲜或冷藏状态，且未进入冷冻产品状态。 |
| `energy_basis` | 电力、蒸汽、热水和燃料 | Energy | kWh 或 MJ | 保留实测能源载体和换算基准；进入清单前不得合并不同公用工程。 |
| `chemical_mass_basis` | 清洗与处理化学品 | Mass | kg | 当前景记录为配制溶液时，按纯物质当量分别报告每种具名化学品。 |
| `packaging_mass_basis` | 包装 | Mass | kg | 每种包装材料须单独报告，其质量不得计入 1 kg 参考产品。 |

## 5. 系统边界

| rule_id | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `sb_factory_gate_scope` | 前景系统 | 纳入截至工厂门交付所需的屠宰、整理、冷却、储存、清洗、包装和直接控制的环境管理操作。 | `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021` |
| `sb_company_specific_inventory` | 物料清单与制造 | 针对所代表工厂、技术和报告期采集产品特定材料及公司特定制造数据。 | `eu-pef-method-2021` |
| `sb_atomic_exchanges` | 过程清单 | 将每项公用工程、燃料、制冷剂、化学品、包装材料、共产品、废物和基本排放记录为一个具体交换。 | `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021` |
| `sb_internal_transfers` | 中间产品、水与能源 | 在每个链接过程边界各记录一次内部转移，并防止等量外部投入、处置或抵扣被重复计入。 | `eu-pef-method-2021` |
| `sb_upstream_downstream` | 链接生命周期阶段 | 将活鹅生产、饲料、购入材料、购入能源和入厂运输链接至上游；本前景数据包排除门后配送、使用和寿命终止。 | `eu-pef-method-2021` |
| `sb_conditional_technology` | 致昏、分割、制冷、包装、处理和能源路线 | 仅使用所代表技术实际采用的卡；记录不适用性，并为实际使用的其他具体材料或制冷剂另建原子卡。 | `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021` |
| `sb_direct_releases` | 空气与水 | 纳入燃烧、制冷、废水处理和包装气体损失的实测或计算直接排放，不得用聚合排放选择器替代。 | `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021` |

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 活鹅在屠宰设施门点验收，并记录批次身份、来源、活质量、到达时间、检验结果和死亡状态 |
| starting_condition_role | 前景制造门点；鹅养殖、饲料生产、孵化和入厂运输仍为链接上游过程 |
| product_classification_scope | CPC 3.0 代码 21123 识别鲜或冷藏交付的鹅肉，不包括冷冻肉、鹅肝酱或以内脏为参考产品的系统 |
| recursive_input_rule | 进入本系统的购入鲜或冷藏鹅肉作为可见产品投入记录其来源数据集和数量，不在前景系统内递归再生 |
| upstream_dataset_requirement | 将活鹅、购入电力、水、蒸汽、燃料、制冷剂、化学品、包装和废物处理服务链接至代表性上游数据集 |
| disclosure | 声明设施、地域、报告期、屠宰与致昏技术、产品形态、温度状态、制冷系统与制冷剂、包装、处理路线、共产品去向和分配 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `live_goose_reception` | 活鹅接收、检验、称量与暂存 | `required` | 始终纳入，自声明的屠宰设施门点开始 | `foreground_process` | `accepted_live_geese` |
| `slaughter_dressing` | 致昏、屠宰、放血、浸烫、脱羽与去内脏 | `required` | 始终纳入；致昏气体卡仅适用于实际技术 | `foreground_process` | `dressed_goose_carcasses` |
| `meat_cutting_finishing` | 胴体整理、分割、去骨与修整 | `required` | 最终整理始终纳入；分割与去骨行按声明产品形态适用 | `foreground_process` | `prepared_fresh_goose_meat` |
| `chilling_cold_storage` | 胴体冷却与冷藏 | `required` | 始终纳入；每张制冷剂卡仅适用于已安装制冷系统 | `foreground_process` | `chilled_goose_meat` |
| `packaging_dispatch` | 包装、贴标、码垛与工厂门交付 | `required` | 交付准备始终纳入；各包装卡仅适用于声明的包装形式 | `foreground_process` | `reference_fresh_chilled_goose_meat` |
| `sanitation_wastewater_management` | 清洗、消毒与废水管理 | `required` | 清洗始终纳入；场内处理输出仅在设施边界内实施处理时适用 | `foreground_process` | `treated_process_water` |
| `onsite_energy_generation` | 场内燃料燃烧与公用工程生产 | `conditional` | 在设施边界内燃烧燃料或生产公用工程时纳入 | `foreground_process` | `onsite_steam_output` |

### 过程：活鹅接收、检验、称量与暂存（`live_goose_reception`）

#### 输入

##### 产品流

###### 活鹅（`live_geese_received`）

活鹅作为一个单独定量的产品交换进入活鹅接收、检验、称量与暂存边界。分别记录接收与拒收批次，并保留来源、到达时间和活质量基准。

- 选定流：Live geese
- 流属性/单位：Mass / kg
- 数量规则：使用经校准地磅或批次秤记录该具体禽只流，并同批次接收和处置记录核对。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门合格鲜或冷藏鹅肉净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_live_bird_mass`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 设施供电电力（`reception_electricity`）

设施供电电力作为一个单独定量的产品交换进入活鹅接收、检验、称量与暂存边界。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：厂区供电
- 流属性/单位：Energy / kWh
- 数量规则：使用专用计量表，或从经核对的设施能源平衡中按有记录的因果关系分配该具体公用工程量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门合格鲜或冷藏鹅肉净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 工艺用水（`reception_process_water`）

工艺用水作为一个单独定量的产品交换进入活鹅接收、检验、称量与暂存边界。本外部补充水投入不含循环水。

- 选定流：过程用水
- 流属性/单位：Volume / m3
- 数量规则：使用专用水表或有记录的过程水平衡计量该具体水流。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门合格鲜或冷藏鹅肉净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_balance`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

##### 废物流

通常不预期该类型的直接交换；任何例外均须另建原子卡。

##### 基本流

通常不预期该类型的直接交换；任何例外均须另建原子卡。

#### 输出

##### 产品流

###### 验收活鹅（`accepted_live_geese`）

验收活鹅作为一个单独定量的产品交换离开活鹅接收、检验、称量与暂存边界。仅转移获准屠宰的鹅；拒收禽只不得计入该中间流。

- 选定流：Accepted live geese
- 流属性/单位：Mass / kg
- 数量规则：使用经校准地磅或批次秤记录该具体禽只流，并同批次接收和处置记录核对。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门合格鲜或冷藏鹅肉净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_live_bird_mass`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

##### 废物流

###### 到厂死亡鹅（`dead_on_arrival_geese_waste`）

到厂死亡鹅作为一个单独定量的废物交换离开活鹅接收、检验、称量与暂存边界。该死亡流须同屠宰开始后产生的判废胴体分开。

- 选定流：Dead-on-arrival geese
- 流属性/单位：Mass / kg
- 数量规则：使用该具体物流的容器称量、交运、处理和去向记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门合格鲜或冷藏鹅肉净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_byproduct_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 接收环节鹅粪（`reception_goose_manure_waste`）

接收环节鹅粪作为一个单独定量的废物交换离开活鹅接收、检验、称量与暂存边界。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Goose manure from reception
- 流属性/单位：Mass / kg
- 数量规则：使用该具体物流的容器称量、交运、处理和去向记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门合格鲜或冷藏鹅肉净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_byproduct_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 活鹅接收废水（`reception_wastewater`）

活鹅接收废水作为一个单独定量的废物交换离开活鹅接收、检验、称量与暂存边界。计量向清洗与废水过程的转移，内部循环不得重复计入。

- 选定流：Live-goose reception wastewater
- 流属性/单位：Volume / m3
- 数量规则：使用该具体物流相匹配的流量计、转移、处理和去向记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门合格鲜或冷藏鹅肉净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

##### 基本流

通常不预期该类型的直接交换；任何例外均须另建原子卡。

### 过程：致昏、屠宰、放血、浸烫、脱羽与去内脏（`slaughter_dressing`）

#### 输入

##### 产品流

###### 验收活鹅（`slaughter_live_geese_input`）

验收活鹅作为一个单独定量的产品交换进入致昏、屠宰、放血、浸烫、脱羽与去内脏边界。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Accepted live geese
- 流属性/单位：Mass / kg
- 数量规则：使用经校准秤，或通过有记录的过程物料平衡计算该具体物料量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门合格鲜或冷藏鹅肉净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_mass_balance`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 设施供电电力（`slaughter_electricity`）

设施供电电力作为一个单独定量的产品交换进入致昏、屠宰、放血、浸烫、脱羽与去内脏边界。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：厂区供电
- 流属性/单位：Energy / kWh
- 数量规则：使用专用计量表，或从经核对的设施能源平衡中按有记录的因果关系分配该具体公用工程量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门合格鲜或冷藏鹅肉净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 工艺用水（`slaughter_process_water`）

工艺用水作为一个单独定量的产品交换进入致昏、屠宰、放血、浸烫、脱羽与去内脏边界。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：过程用水
- 流属性/单位：Volume / m3
- 数量规则：使用专用水表或有记录的过程水平衡计量该具体水流。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门合格鲜或冷藏鹅肉净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_balance`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 蒸汽（`scalding_steam`）

蒸汽作为一个单独定量的产品交换进入致昏、屠宰、放血、浸烫、脱羽与去内脏边界。仅记录输送至本过程的蒸汽；不得同热水或燃料合并。

- 选定流：蒸汽
- 流属性/单位：Energy / MJ
- 数量规则：使用专用计量表，或从经核对的设施能源平衡中按有记录的因果关系分配该具体公用工程量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 工厂门合格鲜或冷藏鹅肉净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 热水（`scalding_hot_water`）

热水作为一个单独定量的产品交换进入致昏、屠宰、放血、浸烫、脱羽与去内脏边界。仅记录本过程所用热水中的计量热能。

- 选定流：热水
- 流属性/单位：Energy / MJ
- 数量规则：使用专用计量表，或从经核对的设施能源平衡中按有记录的因果关系分配该具体公用工程量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 工厂门合格鲜或冷藏鹅肉净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 食品级二氧化碳（`stunning_carbon_dioxide`）

食品级二氧化碳作为一个单独定量的产品交换进入致昏、屠宰、放血、浸烫、脱羽与去内脏边界。仅用于二氧化碳致昏系统；其他系统须记录不适用。

- 选定流：Carbon dioxide, food grade
- 流属性/单位：Mass / kg
- 数量规则：使用该具体材料的采购、期初库存、领用、退回和期末库存记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 工厂门合格鲜或冷藏鹅肉净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_inventory`
- 来源：`eu-pef-method-2021`

###### 食品级氮气（`stunning_nitrogen`）

食品级氮气作为一个单独定量的产品交换进入致昏、屠宰、放血、浸烫、脱羽与去内脏边界。仅在已安装致昏系统实际消耗氮气时使用。

- 选定流：Nitrogen, food grade
- 流属性/单位：Mass / kg
- 数量规则：使用该具体材料的采购、期初库存、领用、退回和期末库存记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 工厂门合格鲜或冷藏鹅肉净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_inventory`
- 来源：`eu-pef-method-2021`

##### 废物流

通常不预期该类型的直接交换；任何例外均须另建原子卡。

##### 基本流

通常不预期该类型的直接交换；任何例外均须另建原子卡。

#### 输出

##### 产品流

###### 鹅胴体（`dressed_goose_carcasses`）

鹅胴体作为一个单独定量的产品交换离开致昏、屠宰、放血、浸烫、脱羽与去内脏边界。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Dressed goose carcasses
- 流属性/单位：Mass / kg
- 数量规则：使用经校准秤，或通过有记录的过程物料平衡计算该具体物料量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门合格鲜或冷藏鹅肉净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_process_mass_balance`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 回收鹅羽毛（`recovered_goose_feathers`）

回收鹅羽毛作为一个单独定量的产品交换离开致昏、屠宰、放血、浸烫、脱羽与去内脏边界。仅当羽毛以产品身份离开过程时使用该共产品行。

- 选定流：Recovered goose feathers
- 流属性/单位：Mass / kg
- 数量规则：使用该具体物流的容器称量、交运、处理和去向记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门合格鲜或冷藏鹅肉净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_byproduct_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 回收鹅血（`recovered_goose_blood`）

回收鹅血作为一个单独定量的产品交换离开致昏、屠宰、放血、浸烫、脱羽与去内脏边界。仅当鹅血被单独收集并具有声明用途时使用该共产品行。

- 选定流：Recovered goose blood
- 流属性/单位：Mass / kg
- 数量规则：使用该具体物流的容器称量、交运、处理和去向记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门合格鲜或冷藏鹅肉净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_byproduct_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 鹅肝（`recovered_goose_liver`）

鹅肝作为一个单独定量的产品交换离开致昏、屠宰、放血、浸烫、脱羽与去内脏边界。该流为单独定量的内脏共产品，绝非本 PCR 参考产品。

- 选定流：Goose liver
- 流属性/单位：Mass / kg
- 数量规则：使用该具体物流的容器称量、交运、处理和去向记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门合格鲜或冷藏鹅肉净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_byproduct_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 鹅心（`recovered_goose_heart`）

鹅心作为一个单独定量的产品交换离开致昏、屠宰、放血、浸烫、脱羽与去内脏边界。该流为单独定量的内脏共产品，绝非本 PCR 参考产品。

- 选定流：Goose heart
- 流属性/单位：Mass / kg
- 数量规则：使用该具体物流的容器称量、交运、处理和去向记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门合格鲜或冷藏鹅肉净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_byproduct_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 鹅肌胃（`recovered_goose_gizzard`）

鹅肌胃作为一个单独定量的产品交换离开致昏、屠宰、放血、浸烫、脱羽与去内脏边界。去内容物后的肌胃须同胃内容物分开记录。

- 选定流：Goose gizzard
- 流属性/单位：Mass / kg
- 数量规则：使用该具体物流的容器称量、交运、处理和去向记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门合格鲜或冷藏鹅肉净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_byproduct_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 回收鹅肠（`recovered_goose_intestines`）

回收鹅肠作为一个单独定量的产品交换离开致昏、屠宰、放血、浸烫、脱羽与去内脏边界。仅记录清理后以产品身份转移的鹅肠。

- 选定流：Recovered goose intestines
- 流属性/单位：Mass / kg
- 数量规则：使用该具体物流的容器称量、交运、处理和去向记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门合格鲜或冷藏鹅肉净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_byproduct_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 回收鹅脂（`recovered_goose_fat`）

回收鹅脂作为一个单独定量的产品交换离开致昏、屠宰、放血、浸烫、脱羽与去内脏边界。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Recovered goose fat
- 流属性/单位：Mass / kg
- 数量规则：使用该具体物流的容器称量、交运、处理和去向记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门合格鲜或冷藏鹅肉净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_byproduct_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 回收鹅头（`recovered_goose_heads`）

回收鹅头作为一个单独定量的产品交换离开致昏、屠宰、放血、浸烫、脱羽与去内脏边界。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Recovered goose heads
- 流属性/单位：Mass / kg
- 数量规则：使用该具体物流的容器称量、交运、处理和去向记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门合格鲜或冷藏鹅肉净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_byproduct_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 回收鹅掌（`recovered_goose_feet`）

回收鹅掌作为一个单独定量的产品交换离开致昏、屠宰、放血、浸烫、脱羽与去内脏边界。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Recovered goose feet
- 流属性/单位：Mass / kg
- 数量规则：使用该具体物流的容器称量、交运、处理和去向记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门合格鲜或冷藏鹅肉净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_byproduct_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

##### 废物流

###### 废弃鹅羽毛（`discarded_goose_feathers`）

废弃鹅羽毛作为一个单独定量的废物交换离开致昏、屠宰、放血、浸烫、脱羽与去内脏边界。仅记录以废物身份转移的羽毛；不得同回收羽毛行重复。

- 选定流：Discarded goose feathers
- 流属性/单位：Mass / kg
- 数量规则：使用该具体物流的容器称量、交运、处理和去向记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门合格鲜或冷藏鹅肉净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_byproduct_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 废弃鹅血（`discarded_goose_blood`）

废弃鹅血作为一个单独定量的废物交换离开致昏、屠宰、放血、浸烫、脱羽与去内脏边界。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Discarded goose blood
- 流属性/单位：Mass / kg
- 数量规则：使用该具体物流的容器称量、交运、处理和去向记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门合格鲜或冷藏鹅肉净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_byproduct_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 废弃鹅肝（`discarded_goose_liver`）

废弃鹅肝作为一个单独定量的废物交换离开致昏、屠宰、放血、浸烫、脱羽与去内脏边界。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Discarded goose liver
- 流属性/单位：Mass / kg
- 数量规则：使用该具体物流的容器称量、交运、处理和去向记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门合格鲜或冷藏鹅肉净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_byproduct_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 废弃鹅心（`discarded_goose_heart`）

废弃鹅心作为一个单独定量的废物交换离开致昏、屠宰、放血、浸烫、脱羽与去内脏边界。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Discarded goose heart
- 流属性/单位：Mass / kg
- 数量规则：使用该具体物流的容器称量、交运、处理和去向记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门合格鲜或冷藏鹅肉净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_byproduct_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 废弃鹅肌胃（`discarded_goose_gizzard`）

废弃鹅肌胃作为一个单独定量的废物交换离开致昏、屠宰、放血、浸烫、脱羽与去内脏边界。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Discarded goose gizzard
- 流属性/单位：Mass / kg
- 数量规则：使用该具体物流的容器称量、交运、处理和去向记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门合格鲜或冷藏鹅肉净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_byproduct_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 废弃鹅肠（`discarded_goose_intestines`）

废弃鹅肠作为一个单独定量的废物交换离开致昏、屠宰、放血、浸烫、脱羽与去内脏边界。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Discarded goose intestines
- 流属性/单位：Mass / kg
- 数量规则：使用该具体物流的容器称量、交运、处理和去向记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门合格鲜或冷藏鹅肉净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_byproduct_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 废弃鹅脂（`discarded_goose_fat`）

废弃鹅脂作为一个单独定量的废物交换离开致昏、屠宰、放血、浸烫、脱羽与去内脏边界。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Discarded goose fat
- 流属性/单位：Mass / kg
- 数量规则：使用该具体物流的容器称量、交运、处理和去向记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门合格鲜或冷藏鹅肉净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_byproduct_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 废弃鹅头（`discarded_goose_heads`）

废弃鹅头作为一个单独定量的废物交换离开致昏、屠宰、放血、浸烫、脱羽与去内脏边界。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Discarded goose heads
- 流属性/单位：Mass / kg
- 数量规则：使用该具体物流的容器称量、交运、处理和去向记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门合格鲜或冷藏鹅肉净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_byproduct_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 废弃鹅掌（`discarded_goose_feet`）

废弃鹅掌作为一个单独定量的废物交换离开致昏、屠宰、放血、浸烫、脱羽与去内脏边界。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Discarded goose feet
- 流属性/单位：Mass / kg
- 数量规则：使用该具体物流的容器称量、交运、处理和去向记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门合格鲜或冷藏鹅肉净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_byproduct_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 废鹅肺（`goose_lungs_waste`）

废鹅肺作为一个单独定量的废物交换离开致昏、屠宰、放血、浸烫、脱羽与去内脏边界。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Goose lungs waste
- 流属性/单位：Mass / kg
- 数量规则：使用该具体物流的容器称量、交运、处理和去向记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门合格鲜或冷藏鹅肉净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_byproduct_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 废鹅肾（`goose_kidneys_waste`）

废鹅肾作为一个单独定量的废物交换离开致昏、屠宰、放血、浸烫、脱羽与去内脏边界。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Goose kidneys waste
- 流属性/单位：Mass / kg
- 数量规则：使用该具体物流的容器称量、交运、处理和去向记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门合格鲜或冷藏鹅肉净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_byproduct_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 废鹅脾（`goose_spleen_waste`）

废鹅脾作为一个单独定量的废物交换离开致昏、屠宰、放血、浸烫、脱羽与去内脏边界。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Goose spleen waste
- 流属性/单位：Mass / kg
- 数量规则：使用该具体物流的容器称量、交运、处理和去向记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门合格鲜或冷藏鹅肉净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_byproduct_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 鹅胃内容物（`goose_gizzard_contents_waste`）

鹅胃内容物作为一个单独定量的废物交换离开致昏、屠宰、放血、浸烫、脱羽与去内脏边界。胃内容物须同肌胃组织及肠内容物分开。

- 选定流：Goose gizzard contents
- 流属性/单位：Mass / kg
- 数量规则：使用该具体物流的容器称量、交运、处理和去向记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门合格鲜或冷藏鹅肉净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_byproduct_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 鹅肠内容物（`goose_intestinal_contents_waste`）

鹅肠内容物作为一个单独定量的废物交换离开致昏、屠宰、放血、浸烫、脱羽与去内脏边界。肠内容物须同鹅肠及胃内容物分开。

- 选定流：Goose intestinal contents
- 流属性/单位：Mass / kg
- 数量规则：使用该具体物流的容器称量、交运、处理和去向记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门合格鲜或冷藏鹅肉净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_byproduct_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 判废鹅胴体（`condemned_goose_carcass_waste`）

判废鹅胴体作为一个单独定量的废物交换离开致昏、屠宰、放血、浸烫、脱羽与去内脏边界。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Condemned goose carcass
- 流属性/单位：Mass / kg
- 数量规则：使用该具体物流的容器称量、交运、处理和去向记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门合格鲜或冷藏鹅肉净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_byproduct_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 鹅屠宰废水（`slaughter_wastewater`）

鹅屠宰废水作为一个单独定量的废物交换离开致昏、屠宰、放血、浸烫、脱羽与去内脏边界。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Goose-slaughter wastewater
- 流属性/单位：Volume / m3
- 数量规则：使用该具体物流相匹配的流量计、转移、处理和去向记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门合格鲜或冷藏鹅肉净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

##### 基本流

通常不预期该类型的直接交换；任何例外均须另建原子卡。

### 过程：胴体整理、分割、去骨与修整（`meat_cutting_finishing`）

#### 输入

##### 产品流

###### 鹅胴体（`cutting_carcass_input`）

鹅胴体作为一个单独定量的产品交换进入胴体整理、分割、去骨与修整边界。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Dressed goose carcasses
- 流属性/单位：Mass / kg
- 数量规则：使用经校准秤，或通过有记录的过程物料平衡计算该具体物料量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门合格鲜或冷藏鹅肉净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_mass_balance`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 设施供电电力（`cutting_electricity`）

设施供电电力作为一个单独定量的产品交换进入胴体整理、分割、去骨与修整边界。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：厂区供电
- 流属性/单位：Energy / kWh
- 数量规则：使用专用计量表，或从经核对的设施能源平衡中按有记录的因果关系分配该具体公用工程量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门合格鲜或冷藏鹅肉净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 工艺用水（`cutting_process_water`）

工艺用水作为一个单独定量的产品交换进入胴体整理、分割、去骨与修整边界。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：过程用水
- 流属性/单位：Volume / m3
- 数量规则：使用专用水表或有记录的过程水平衡计量该具体水流。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门合格鲜或冷藏鹅肉净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_balance`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 热水（`cutting_hot_water`）

热水作为一个单独定量的产品交换进入胴体整理、分割、去骨与修整边界。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：热水
- 流属性/单位：Energy / MJ
- 数量规则：使用专用计量表，或从经核对的设施能源平衡中按有记录的因果关系分配该具体公用工程量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 工厂门合格鲜或冷藏鹅肉净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

##### 废物流

通常不预期该类型的直接交换；任何例外均须另建原子卡。

##### 基本流

通常不预期该类型的直接交换；任何例外均须另建原子卡。

#### 输出

##### 产品流

###### 整理鲜鹅肉（`prepared_fresh_goose_meat`）

整理鲜鹅肉作为一个单独定量的产品交换离开胴体整理、分割、去骨与修整边界。声明整胴体或分割形态、带骨状态和带皮状态，不得混合不相似产品。

- 选定流：Prepared fresh goose meat
- 流属性/单位：Mass / kg
- 数量规则：使用经校准秤，或通过有记录的过程物料平衡计算该具体物料量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门合格鲜或冷藏鹅肉净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_process_mass_balance`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 回收鹅骨（`recovered_goose_bones`）

回收鹅骨作为一个单独定量的产品交换离开胴体整理、分割、去骨与修整边界。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Recovered goose bones
- 流属性/单位：Mass / kg
- 数量规则：使用该具体物流的容器称量、交运、处理和去向记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门合格鲜或冷藏鹅肉净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_byproduct_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 回收鹅脂修整料（`recovered_goose_fat_trim`）

回收鹅脂修整料作为一个单独定量的产品交换离开胴体整理、分割、去骨与修整边界。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Recovered goose fat trim
- 流属性/单位：Mass / kg
- 数量规则：使用该具体物流的容器称量、交运、处理和去向记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门合格鲜或冷藏鹅肉净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_byproduct_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 回收鹅皮（`recovered_goose_skin`）

回收鹅皮作为一个单独定量的产品交换离开胴体整理、分割、去骨与修整边界。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Recovered goose skin
- 流属性/单位：Mass / kg
- 数量规则：使用该具体物流的容器称量、交运、处理和去向记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门合格鲜或冷藏鹅肉净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_byproduct_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

##### 废物流

###### 废弃鹅骨（`discarded_goose_bones`）

废弃鹅骨作为一个单独定量的废物交换离开胴体整理、分割、去骨与修整边界。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Discarded goose bones
- 流属性/单位：Mass / kg
- 数量规则：使用该具体物流的容器称量、交运、处理和去向记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门合格鲜或冷藏鹅肉净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_byproduct_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 废弃鹅脂修整料（`discarded_goose_fat_trim`）

废弃鹅脂修整料作为一个单独定量的废物交换离开胴体整理、分割、去骨与修整边界。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Discarded goose fat trim
- 流属性/单位：Mass / kg
- 数量规则：使用该具体物流的容器称量、交运、处理和去向记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门合格鲜或冷藏鹅肉净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_byproduct_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 废弃鹅皮（`discarded_goose_skin`）

废弃鹅皮作为一个单独定量的废物交换离开胴体整理、分割、去骨与修整边界。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Discarded goose skin
- 流属性/单位：Mass / kg
- 数量规则：使用该具体物流的容器称量、交运、处理和去向记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门合格鲜或冷藏鹅肉净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_byproduct_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 不合格鹅肉（`offspec_goose_meat_waste`）

不合格鹅肉作为一个单独定量的废物交换离开胴体整理、分割、去骨与修整边界。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Off-specification goose meat
- 流属性/单位：Mass / kg
- 数量规则：使用该具体物流的容器称量、交运、处理和去向记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门合格鲜或冷藏鹅肉净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_byproduct_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 鹅肉分割废水（`cutting_wastewater`）

鹅肉分割废水作为一个单独定量的废物交换离开胴体整理、分割、去骨与修整边界。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Goose-meat cutting wastewater
- 流属性/单位：Volume / m3
- 数量规则：使用该具体物流相匹配的流量计、转移、处理和去向记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门合格鲜或冷藏鹅肉净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 鹅肉分割地面固形物（`cutting_floor_solids_waste`）

鹅肉分割地面固形物作为一个单独定量的废物交换离开胴体整理、分割、去骨与修整边界。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Goose-meat cutting floor solids
- 流属性/单位：Mass / kg
- 数量规则：使用该具体物流的容器称量、交运、处理和去向记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门合格鲜或冷藏鹅肉净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_byproduct_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

##### 基本流

通常不预期该类型的直接交换；任何例外均须另建原子卡。

### 过程：胴体冷却与冷藏（`chilling_cold_storage`）

#### 输入

##### 产品流

###### 整理鲜鹅肉（`chilling_meat_input`）

整理鲜鹅肉作为一个单独定量的产品交换进入胴体冷却与冷藏边界。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Prepared fresh goose meat
- 流属性/单位：Mass / kg
- 数量规则：使用经校准秤，或通过有记录的过程物料平衡计算该具体物料量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门合格鲜或冷藏鹅肉净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_mass_balance`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 设施供电电力（`chilling_electricity`）

设施供电电力作为一个单独定量的产品交换进入胴体冷却与冷藏边界。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：厂区供电
- 流属性/单位：Energy / kWh
- 数量规则：使用专用计量表，或从经核对的设施能源平衡中按有记录的因果关系分配该具体公用工程量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门合格鲜或冷藏鹅肉净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 冷却水（`chilling_cooling_water`）

冷却水作为一个单独定量的产品交换进入胴体冷却与冷藏边界。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Cooling water
- 流属性/单位：Volume / m3
- 数量规则：使用专用水表或有记录的过程水平衡计量该具体水流。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 工厂门合格鲜或冷藏鹅肉净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_balance`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### R717 氨制冷剂（`refrigerant_ammonia_r717`）

R717 氨制冷剂作为一个单独定量的产品交换进入胴体冷却与冷藏边界。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：氨制冷剂R717
- 流属性/单位：Mass / kg
- 数量规则：根据该具体制冷剂的期初库存、采购、设备充注、回收、退回和期末库存计算。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 工厂门合格鲜或冷藏鹅肉净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_refrigerant_balance`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### R744 二氧化碳制冷剂（`refrigerant_carbon_dioxide_r744`）

R744 二氧化碳制冷剂作为一个单独定量的产品交换进入胴体冷却与冷藏边界。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Carbon dioxide refrigerant R744
- 流属性/单位：Mass / kg
- 数量规则：根据该具体制冷剂的期初库存、采购、设备充注、回收、退回和期末库存计算。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 工厂门合格鲜或冷藏鹅肉净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_refrigerant_balance`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### R134a 1,1,1,2-四氟乙烷制冷剂（`refrigerant_hfc134a`）

R134a 1,1,1,2-四氟乙烷制冷剂作为一个单独定量的产品交换进入胴体冷却与冷藏边界。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：1,1,1,2-Tetrafluoroethane refrigerant R134a
- 流属性/单位：Mass / kg
- 数量规则：根据该具体制冷剂的期初库存、采购、设备充注、回收、退回和期末库存计算。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 工厂门合格鲜或冷藏鹅肉净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_refrigerant_balance`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### R404A 制冷剂（`refrigerant_r404a`）

R404A 制冷剂作为一个单独定量的产品交换进入胴体冷却与冷藏边界。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：制冷剂R404A
- 流属性/单位：Mass / kg
- 数量规则：根据该具体制冷剂的期初库存、采购、设备充注、回收、退回和期末库存计算。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 工厂门合格鲜或冷藏鹅肉净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_refrigerant_balance`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### R507A 制冷剂（`refrigerant_r507a`）

R507A 制冷剂作为一个单独定量的产品交换进入胴体冷却与冷藏边界。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Refrigerant R507A
- 流属性/单位：Mass / kg
- 数量规则：根据该具体制冷剂的期初库存、采购、设备充注、回收、退回和期末库存计算。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 工厂门合格鲜或冷藏鹅肉净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_refrigerant_balance`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### R290 丙烷制冷剂（`refrigerant_propane_r290`）

R290 丙烷制冷剂作为一个单独定量的产品交换进入胴体冷却与冷藏边界。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Propane refrigerant R290
- 流属性/单位：Mass / kg
- 数量规则：根据该具体制冷剂的期初库存、采购、设备充注、回收、退回和期末库存计算。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 工厂门合格鲜或冷藏鹅肉净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_refrigerant_balance`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### R22 二氟一氯甲烷制冷剂（`refrigerant_hcfc22`）

R22 二氟一氯甲烷制冷剂作为一个单独定量的产品交换进入胴体冷却与冷藏边界。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Chlorodifluoromethane refrigerant R22
- 流属性/单位：Mass / kg
- 数量规则：根据该具体制冷剂的期初库存、采购、设备充注、回收、退回和期末库存计算。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 工厂门合格鲜或冷藏鹅肉净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_refrigerant_balance`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 丙二醇传热液（`secondary_coolant_propylene_glycol`）

丙二醇传热液作为一个单独定量的产品交换进入胴体冷却与冷藏边界。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Propylene glycol heat-transfer fluid
- 流属性/单位：Mass / kg
- 数量规则：使用该具体材料的采购、期初库存、领用、退回和期末库存记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 工厂门合格鲜或冷藏鹅肉净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_inventory`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

##### 废物流

通常不预期该类型的直接交换；任何例外均须另建原子卡。

##### 基本流

通常不预期该类型的直接交换；任何例外均须另建原子卡。

#### 输出

##### 产品流

###### 冷藏鹅肉（`chilled_goose_meat`）

冷藏鹅肉作为一个单独定量的产品交换离开胴体冷却与冷藏边界。仅放行始终保持鲜或冷藏状态、从未进入冷冻状态的鹅肉。

- 选定流：Chilled goose meat
- 流属性/单位：Mass / kg
- 数量规则：使用完成质量、产品状态和温度检查后的放行批次净质量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门合格鲜或冷藏鹅肉净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_product_release`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

##### 废物流

###### 变质冷藏鹅肉（`spoiled_chilled_goose_meat_waste`）

变质冷藏鹅肉作为一个单独定量的废物交换离开胴体冷却与冷藏边界。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Spoiled chilled goose meat
- 流属性/单位：Mass / kg
- 数量规则：使用该具体物流的容器称量、交运、处理和去向记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门合格鲜或冷藏鹅肉净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_byproduct_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 冷库冷凝废水（`cold_room_condensate_wastewater`）

冷库冷凝废水作为一个单独定量的废物交换离开胴体冷却与冷藏边界。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Cold-room condensate wastewater
- 流属性/单位：Volume / m3
- 数量规则：使用该具体物流相匹配的流量计、转移、处理和去向记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门合格鲜或冷藏鹅肉净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

##### 基本流

###### 氨，排放至空气（`refrigerant_ammonia_air`）

氨，排放至空气作为一个单独定量的基本流从胴体冷却与冷藏边界排放至环境。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：氨，排入空气
- 流属性/单位：Mass / kg
- 数量规则：使用直接监测，或根据采集的活动、组成、检修和损失记录计算该具体排放。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 工厂门合格鲜或冷藏鹅肉净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_air_emissions`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 化石二氧化碳，排放至空气（`refrigerant_carbon_dioxide_air`）

化石二氧化碳，排放至空气作为一个单独定量的基本流从胴体冷却与冷藏边界排放至环境。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：化石源二氧化碳，排入空气
- 流属性/单位：Mass / kg
- 数量规则：使用直接监测，或根据采集的活动、组成、检修和损失记录计算该具体排放。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 工厂门合格鲜或冷藏鹅肉净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_air_emissions`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 1,1,1,2-四氟乙烷，排放至空气（`refrigerant_hfc134a_air`）

1,1,1,2-四氟乙烷，排放至空气作为一个单独定量的基本流从胴体冷却与冷藏边界排放至环境。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：1,1,1,2-四氟乙烷，排入空气
- 流属性/单位：Mass / kg
- 数量规则：使用直接监测，或根据采集的活动、组成、检修和损失记录计算该具体排放。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 工厂门合格鲜或冷藏鹅肉净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_air_emissions`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 五氟乙烷，排放至空气（`refrigerant_hfc125_air`）

五氟乙烷，排放至空气作为一个单独定量的基本流从胴体冷却与冷藏边界排放至环境。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Pentafluoroethane, to air
- 流属性/单位：Mass / kg
- 数量规则：使用直接监测，或根据采集的活动、组成、检修和损失记录计算该具体排放。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 工厂门合格鲜或冷藏鹅肉净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_air_emissions`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 1,1,1-三氟乙烷，排放至空气（`refrigerant_hfc143a_air`）

1,1,1-三氟乙烷，排放至空气作为一个单独定量的基本流从胴体冷却与冷藏边界排放至环境。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：1,1,1-Trifluoroethane, to air
- 流属性/单位：Mass / kg
- 数量规则：使用直接监测，或根据采集的活动、组成、检修和损失记录计算该具体排放。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 工厂门合格鲜或冷藏鹅肉净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_air_emissions`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 丙烷，排放至空气（`refrigerant_propane_air`）

丙烷，排放至空气作为一个单独定量的基本流从胴体冷却与冷藏边界排放至环境。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Propane, to air
- 流属性/单位：Mass / kg
- 数量规则：使用直接监测，或根据采集的活动、组成、检修和损失记录计算该具体排放。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 工厂门合格鲜或冷藏鹅肉净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_air_emissions`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 二氟一氯甲烷，排放至空气（`refrigerant_hcfc22_air`）

二氟一氯甲烷，排放至空气作为一个单独定量的基本流从胴体冷却与冷藏边界排放至环境。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Chlorodifluoromethane, to air
- 流属性/单位：Mass / kg
- 数量规则：使用直接监测，或根据采集的活动、组成、检修和损失记录计算该具体排放。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 工厂门合格鲜或冷藏鹅肉净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_air_emissions`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

### 过程：包装、贴标、码垛与工厂门交付（`packaging_dispatch`）

#### 输入

##### 产品流

###### 冷藏鹅肉（`packaging_meat_input`）

冷藏鹅肉作为一个单独定量的产品交换进入包装、贴标、码垛与工厂门交付边界。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Chilled goose meat
- 流属性/单位：Mass / kg
- 数量规则：使用完成质量、产品状态和温度检查后的放行批次净质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门合格鲜或冷藏鹅肉净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_product_release`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 设施供电电力（`packaging_electricity`）

设施供电电力作为一个单独定量的产品交换进入包装、贴标、码垛与工厂门交付边界。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：厂区供电
- 流属性/单位：Energy / kWh
- 数量规则：使用专用计量表，或从经核对的设施能源平衡中按有记录的因果关系分配该具体公用工程量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门合格鲜或冷藏鹅肉净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 瓦楞纸板箱（`packaging_corrugated_box`）

瓦楞纸板箱作为一个单独定量的产品交换进入包装、贴标、码垛与工厂门交付边界。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Corrugated paperboard box
- 流属性/单位：Mass / kg
- 数量规则：用领用件数乘以核实的单件质量，并按退回、期末库存和单独记录的边角料调整该具体材料。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门合格鲜或冷藏鹅肉净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_inventory`
- 来源：`eu-pef-method-2021`

###### 高密度聚乙烯周转箱（`packaging_hdpe_crate`）

高密度聚乙烯周转箱作为一个单独定量的产品交换进入包装、贴标、码垛与工厂门交付边界。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：High-density polyethylene crate
- 流属性/单位：Mass / kg
- 数量规则：用领用件数乘以核实的单件质量，并按退回、期末库存和单独记录的边角料调整该具体材料。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门合格鲜或冷藏鹅肉净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_inventory`
- 来源：`eu-pef-method-2021`

###### 聚对苯二甲酸乙二醇酯托盘（`packaging_pet_tray`）

聚对苯二甲酸乙二醇酯托盘作为一个单独定量的产品交换进入包装、贴标、码垛与工厂门交付边界。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Polyethylene terephthalate tray
- 流属性/单位：Mass / kg
- 数量规则：用领用件数乘以核实的单件质量，并按退回、期末库存和单独记录的边角料调整该具体材料。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门合格鲜或冷藏鹅肉净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_inventory`
- 来源：`eu-pef-method-2021`

###### 发泡聚苯乙烯托盘（`packaging_eps_tray`）

发泡聚苯乙烯托盘作为一个单独定量的产品交换进入包装、贴标、码垛与工厂门交付边界。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Expanded polystyrene tray
- 流属性/单位：Mass / kg
- 数量规则：用领用件数乘以核实的单件质量，并按退回、期末库存和单独记录的边角料调整该具体材料。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门合格鲜或冷藏鹅肉净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_inventory`
- 来源：`eu-pef-method-2021`

###### 低密度聚乙烯包装膜（`packaging_ldpe_film`）

低密度聚乙烯包装膜作为一个单独定量的产品交换进入包装、贴标、码垛与工厂门交付边界。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：低密度聚乙烯包装膜
- 流属性/单位：Mass / kg
- 数量规则：用领用件数乘以核实的单件质量，并按退回、期末库存和单独记录的边角料调整该具体材料。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门合格鲜或冷藏鹅肉净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_inventory`
- 来源：`eu-pef-method-2021`

###### 聚酰胺包装膜（`packaging_polyamide_film`）

聚酰胺包装膜作为一个单独定量的产品交换进入包装、贴标、码垛与工厂门交付边界。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Polyamide packaging film
- 流属性/单位：Mass / kg
- 数量规则：用领用件数乘以核实的单件质量，并按退回、期末库存和单独记录的边角料调整该具体材料。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门合格鲜或冷藏鹅肉净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_inventory`
- 来源：`eu-pef-method-2021`

###### 聚丙烯包装带（`packaging_pp_strap`）

聚丙烯包装带作为一个单独定量的产品交换进入包装、贴标、码垛与工厂门交付边界。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Polypropylene packaging strap
- 流属性/单位：Mass / kg
- 数量规则：用领用件数乘以核实的单件质量，并按退回、期末库存和单独记录的边角料调整该具体材料。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门合格鲜或冷藏鹅肉净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_inventory`
- 来源：`eu-pef-method-2021`

###### 纤维素吸水垫（`packaging_cellulose_pad`）

纤维素吸水垫作为一个单独定量的产品交换进入包装、贴标、码垛与工厂门交付边界。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Cellulose absorbent pad
- 流属性/单位：Mass / kg
- 数量规则：用领用件数乘以核实的单件质量，并按退回、期末库存和单独记录的边角料调整该具体材料。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门合格鲜或冷藏鹅肉净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_inventory`
- 来源：`eu-pef-method-2021`

###### 纸标签（`packaging_paper_label`）

纸标签作为一个单独定量的产品交换进入包装、贴标、码垛与工厂门交付边界。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：纸质标签
- 流属性/单位：Mass / kg
- 数量规则：用领用件数乘以核实的单件质量，并按退回、期末库存和单独记录的边角料调整该具体材料。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门合格鲜或冷藏鹅肉净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_inventory`
- 来源：`eu-pef-method-2021`

###### 涂硅离型纸（`packaging_release_paper`）

涂硅离型纸作为一个单独定量的产品交换进入包装、贴标、码垛与工厂门交付边界。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Silicone-coated release paper
- 流属性/单位：Mass / kg
- 数量规则：用领用件数乘以核实的单件质量，并按退回、期末库存和单独记录的边角料调整该具体材料。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门合格鲜或冷藏鹅肉净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_inventory`
- 来源：`eu-pef-method-2021`

###### 木托盘（`packaging_wood_pallet`）

木托盘作为一个单独定量的产品交换进入包装、贴标、码垛与工厂门交付边界。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：木托盘
- 流属性/单位：Mass / kg
- 数量规则：用领用件数乘以核实的单件质量，并按退回、期末库存和单独记录的边角料调整该具体材料。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门合格鲜或冷藏鹅肉净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_inventory`
- 来源：`eu-pef-method-2021`

###### 铝封口夹（`packaging_aluminium_clip`）

铝封口夹作为一个单独定量的产品交换进入包装、贴标、码垛与工厂门交付边界。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Aluminium closure clip
- 流属性/单位：Mass / kg
- 数量规则：用领用件数乘以核实的单件质量，并按退回、期末库存和单独记录的边角料调整该具体材料。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门合格鲜或冷藏鹅肉净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_inventory`
- 来源：`eu-pef-method-2021`

###### 食品级二氧化碳（`packaging_carbon_dioxide`）

食品级二氧化碳作为一个单独定量的产品交换进入包装、贴标、码垛与工厂门交付边界。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Carbon dioxide, food grade
- 流属性/单位：Mass / kg
- 数量规则：使用该具体材料的采购、期初库存、领用、退回和期末库存记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门合格鲜或冷藏鹅肉净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_inventory`
- 来源：`eu-pef-method-2021`

###### 食品级氮气（`packaging_nitrogen`）

食品级氮气作为一个单独定量的产品交换进入包装、贴标、码垛与工厂门交付边界。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Nitrogen, food grade
- 流属性/单位：Mass / kg
- 数量规则：使用该具体材料的采购、期初库存、领用、退回和期末库存记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门合格鲜或冷藏鹅肉净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_inventory`
- 来源：`eu-pef-method-2021`

###### 食品级氧气（`packaging_oxygen`）

食品级氧气作为一个单独定量的产品交换进入包装、贴标、码垛与工厂门交付边界。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Oxygen, food grade
- 流属性/单位：Mass / kg
- 数量规则：使用该具体材料的采购、期初库存、领用、退回和期末库存记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门合格鲜或冷藏鹅肉净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_inventory`
- 来源：`eu-pef-method-2021`

##### 废物流

通常不预期该类型的直接交换；任何例外均须另建原子卡。

##### 基本流

通常不预期该类型的直接交换；任何例外均须另建原子卡。

#### 输出

##### 产品流

###### 鲜或冷藏鹅肉（`reference_fresh_chilled_goose_meat`）

鲜或冷藏鹅肉作为一个单独定量的产品交换离开包装、贴标、码垛与工厂门交付边界。这是唯一带 UUID 的清单行，也是唯一的定量参考。

- 选定流：鹅肉，新鲜或冷藏 `a2ca6142-7a35-485f-85fd-3f19301fa6c5`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：固定为 1 kg 合格鲜或冷藏鹅肉净质量；不含包装、吸水垫、包装内气体和托盘质量。
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门合格鲜或冷藏鹅肉净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）
- 采集协议：`cp_product_release`
- 来源：

##### 废物流

###### 不合格包装鹅肉（`offspec_packaged_goose_meat_waste`）

不合格包装鹅肉作为一个单独定量的废物交换离开包装、贴标、码垛与工厂门交付边界。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Off-specification packaged goose meat
- 流属性/单位：Mass / kg
- 数量规则：使用该具体物流的容器称量、交运、处理和去向记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门合格鲜或冷藏鹅肉净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_byproduct_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 废瓦楞纸板箱（`waste_corrugated_box`）

废瓦楞纸板箱作为一个单独定量的废物交换离开包装、贴标、码垛与工厂门交付边界。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Waste corrugated paperboard box
- 流属性/单位：Mass / kg
- 数量规则：用领用件数乘以核实的单件质量，并按退回、期末库存和单独记录的边角料调整该具体材料。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门合格鲜或冷藏鹅肉净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_inventory`
- 来源：`eu-pef-method-2021`

###### 废高密度聚乙烯周转箱（`waste_hdpe_crate`）

废高密度聚乙烯周转箱作为一个单独定量的废物交换离开包装、贴标、码垛与工厂门交付边界。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Waste high-density polyethylene crate
- 流属性/单位：Mass / kg
- 数量规则：用领用件数乘以核实的单件质量，并按退回、期末库存和单独记录的边角料调整该具体材料。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门合格鲜或冷藏鹅肉净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_inventory`
- 来源：`eu-pef-method-2021`

###### 废聚对苯二甲酸乙二醇酯托盘（`waste_pet_tray`）

废聚对苯二甲酸乙二醇酯托盘作为一个单独定量的废物交换离开包装、贴标、码垛与工厂门交付边界。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Waste polyethylene terephthalate tray
- 流属性/单位：Mass / kg
- 数量规则：用领用件数乘以核实的单件质量，并按退回、期末库存和单独记录的边角料调整该具体材料。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门合格鲜或冷藏鹅肉净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_inventory`
- 来源：`eu-pef-method-2021`

###### 废发泡聚苯乙烯托盘（`waste_eps_tray`）

废发泡聚苯乙烯托盘作为一个单独定量的废物交换离开包装、贴标、码垛与工厂门交付边界。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Waste expanded polystyrene tray
- 流属性/单位：Mass / kg
- 数量规则：用领用件数乘以核实的单件质量，并按退回、期末库存和单独记录的边角料调整该具体材料。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门合格鲜或冷藏鹅肉净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_inventory`
- 来源：`eu-pef-method-2021`

###### 废低密度聚乙烯包装膜（`waste_ldpe_film`）

废低密度聚乙烯包装膜作为一个单独定量的废物交换离开包装、贴标、码垛与工厂门交付边界。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：废低密度聚乙烯包装膜
- 流属性/单位：Mass / kg
- 数量规则：用领用件数乘以核实的单件质量，并按退回、期末库存和单独记录的边角料调整该具体材料。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门合格鲜或冷藏鹅肉净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_inventory`
- 来源：`eu-pef-method-2021`

###### 废聚酰胺包装膜（`waste_polyamide_film`）

废聚酰胺包装膜作为一个单独定量的废物交换离开包装、贴标、码垛与工厂门交付边界。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Waste polyamide packaging film
- 流属性/单位：Mass / kg
- 数量规则：用领用件数乘以核实的单件质量，并按退回、期末库存和单独记录的边角料调整该具体材料。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门合格鲜或冷藏鹅肉净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_inventory`
- 来源：`eu-pef-method-2021`

###### 废聚丙烯包装带（`waste_pp_strap`）

废聚丙烯包装带作为一个单独定量的废物交换离开包装、贴标、码垛与工厂门交付边界。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Waste polypropylene packaging strap
- 流属性/单位：Mass / kg
- 数量规则：用领用件数乘以核实的单件质量，并按退回、期末库存和单独记录的边角料调整该具体材料。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门合格鲜或冷藏鹅肉净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_inventory`
- 来源：`eu-pef-method-2021`

###### 废纤维素吸水垫（`waste_cellulose_pad`）

废纤维素吸水垫作为一个单独定量的废物交换离开包装、贴标、码垛与工厂门交付边界。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Waste cellulose absorbent pad
- 流属性/单位：Mass / kg
- 数量规则：用领用件数乘以核实的单件质量，并按退回、期末库存和单独记录的边角料调整该具体材料。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门合格鲜或冷藏鹅肉净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_inventory`
- 来源：`eu-pef-method-2021`

###### 废纸标签（`waste_paper_label`）

废纸标签作为一个单独定量的废物交换离开包装、贴标、码垛与工厂门交付边界。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：废纸质标签
- 流属性/单位：Mass / kg
- 数量规则：用领用件数乘以核实的单件质量，并按退回、期末库存和单独记录的边角料调整该具体材料。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门合格鲜或冷藏鹅肉净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_inventory`
- 来源：`eu-pef-method-2021`

###### 废涂硅离型纸（`waste_release_paper`）

废涂硅离型纸作为一个单独定量的废物交换离开包装、贴标、码垛与工厂门交付边界。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Waste silicone-coated release paper
- 流属性/单位：Mass / kg
- 数量规则：用领用件数乘以核实的单件质量，并按退回、期末库存和单独记录的边角料调整该具体材料。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门合格鲜或冷藏鹅肉净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_inventory`
- 来源：`eu-pef-method-2021`

###### 废木托盘（`waste_wood_pallet`）

废木托盘作为一个单独定量的废物交换离开包装、贴标、码垛与工厂门交付边界。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Waste wood pallet
- 流属性/单位：Mass / kg
- 数量规则：用领用件数乘以核实的单件质量，并按退回、期末库存和单独记录的边角料调整该具体材料。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门合格鲜或冷藏鹅肉净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_inventory`
- 来源：`eu-pef-method-2021`

###### 废铝封口夹（`waste_aluminium_clip`）

废铝封口夹作为一个单独定量的废物交换离开包装、贴标、码垛与工厂门交付边界。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Waste aluminium closure clip
- 流属性/单位：Mass / kg
- 数量规则：用领用件数乘以核实的单件质量，并按退回、期末库存和单独记录的边角料调整该具体材料。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门合格鲜或冷藏鹅肉净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_inventory`
- 来源：`eu-pef-method-2021`

##### 基本流

###### 化石二氧化碳，排放至空气（`packaging_carbon_dioxide_air`）

化石二氧化碳，排放至空气作为一个单独定量的基本流从包装、贴标、码垛与工厂门交付边界排放至环境。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：化石源二氧化碳，排入空气
- 流属性/单位：Mass / kg
- 数量规则：使用直接监测，或根据采集的活动、组成、检修和损失记录计算该具体排放。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门合格鲜或冷藏鹅肉净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_air_emissions`
- 来源：`eu-pef-method-2021`

###### 氮气，排放至空气（`packaging_nitrogen_air`）

氮气，排放至空气作为一个单独定量的基本流从包装、贴标、码垛与工厂门交付边界排放至环境。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Nitrogen, to air
- 流属性/单位：Mass / kg
- 数量规则：使用直接监测，或根据采集的活动、组成、检修和损失记录计算该具体排放。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门合格鲜或冷藏鹅肉净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_air_emissions`
- 来源：`eu-pef-method-2021`

###### 氧气，排放至空气（`packaging_oxygen_air`）

氧气，排放至空气作为一个单独定量的基本流从包装、贴标、码垛与工厂门交付边界排放至环境。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Oxygen, to air
- 流属性/单位：Mass / kg
- 数量规则：使用直接监测，或根据采集的活动、组成、检修和损失记录计算该具体排放。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门合格鲜或冷藏鹅肉净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_air_emissions`
- 来源：`eu-pef-method-2021`

### 过程：清洗、消毒与废水管理（`sanitation_wastewater_management`）

#### 输入

##### 产品流

###### 工艺用水（`sanitation_process_water`）

工艺用水作为一个单独定量的产品交换进入清洗、消毒与废水管理边界。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：过程用水
- 流属性/单位：Volume / m3
- 数量规则：使用专用水表或有记录的过程水平衡计量该具体水流。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门合格鲜或冷藏鹅肉净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_balance`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 设施供电电力（`sanitation_electricity`）

设施供电电力作为一个单独定量的产品交换进入清洗、消毒与废水管理边界。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：厂区供电
- 流属性/单位：Energy / kWh
- 数量规则：使用专用计量表，或从经核对的设施能源平衡中按有记录的因果关系分配该具体公用工程量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门合格鲜或冷藏鹅肉净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 热水（`sanitation_hot_water`）

热水作为一个单独定量的产品交换进入清洗、消毒与废水管理边界。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：热水
- 流属性/单位：Energy / MJ
- 数量规则：使用专用计量表，或从经核对的设施能源平衡中按有记录的因果关系分配该具体公用工程量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 工厂门合格鲜或冷藏鹅肉净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 蒸汽（`sanitation_steam`）

蒸汽作为一个单独定量的产品交换进入清洗、消毒与废水管理边界。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：蒸汽
- 流属性/单位：Energy / MJ
- 数量规则：使用专用计量表，或从经核对的设施能源平衡中按有记录的因果关系分配该具体公用工程量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 工厂门合格鲜或冷藏鹅肉净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 氢氧化钠（`sanitation_sodium_hydroxide`）

氢氧化钠作为一个单独定量的产品交换进入清洗、消毒与废水管理边界。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：氢氧化钠
- 流属性/单位：Mass / kg
- 数量规则：使用采购、领用、溶液浓度和库存记录，计算该具体化学品的纯物质当量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门合格鲜或冷藏鹅肉净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chemical_inventory`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 硝酸（`sanitation_nitric_acid`）

硝酸作为一个单独定量的产品交换进入清洗、消毒与废水管理边界。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：硝酸
- 流属性/单位：Mass / kg
- 数量规则：使用采购、领用、溶液浓度和库存记录，计算该具体化学品的纯物质当量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门合格鲜或冷藏鹅肉净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chemical_inventory`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 次氯酸钠（`sanitation_sodium_hypochlorite`）

次氯酸钠作为一个单独定量的产品交换进入清洗、消毒与废水管理边界。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：次氯酸钠
- 流属性/单位：Mass / kg
- 数量规则：使用采购、领用、溶液浓度和库存记录，计算该具体化学品的纯物质当量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门合格鲜或冷藏鹅肉净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chemical_inventory`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 过氧乙酸（`sanitation_peracetic_acid`）

过氧乙酸作为一个单独定量的产品交换进入清洗、消毒与废水管理边界。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：过氧乙酸
- 流属性/单位：Mass / kg
- 数量规则：使用采购、领用、溶液浓度和库存记录，计算该具体化学品的纯物质当量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门合格鲜或冷藏鹅肉净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chemical_inventory`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 过氧化氢（`sanitation_hydrogen_peroxide`）

过氧化氢作为一个单独定量的产品交换进入清洗、消毒与废水管理边界。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：过氧化氢
- 流属性/单位：Mass / kg
- 数量规则：使用采购、领用、溶液浓度和库存记录，计算该具体化学品的纯物质当量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门合格鲜或冷藏鹅肉净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chemical_inventory`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 苯扎氯铵（`sanitation_benzalkonium_chloride`）

苯扎氯铵作为一个单独定量的产品交换进入清洗、消毒与废水管理边界。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：苯扎氯铵
- 流属性/单位：Mass / kg
- 数量规则：使用采购、领用、溶液浓度和库存记录，计算该具体化学品的纯物质当量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门合格鲜或冷藏鹅肉净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chemical_inventory`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 碳酸钠（`sanitation_sodium_carbonate`）

碳酸钠作为一个单独定量的产品交换进入清洗、消毒与废水管理边界。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：碳酸钠
- 流属性/单位：Mass / kg
- 数量规则：使用采购、领用、溶液浓度和库存记录，计算该具体化学品的纯物质当量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门合格鲜或冷藏鹅肉净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chemical_inventory`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 氯化铁（`wastewater_ferric_chloride`）

氯化铁作为一个单独定量的产品交换进入清洗、消毒与废水管理边界。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：氯化铁
- 流属性/单位：Mass / kg
- 数量规则：使用采购、领用、溶液浓度和库存记录，计算该具体化学品的纯物质当量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 工厂门合格鲜或冷藏鹅肉净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chemical_inventory`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 氢氧化钙（`wastewater_calcium_hydroxide`）

氢氧化钙作为一个单独定量的产品交换进入清洗、消毒与废水管理边界。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：氢氧化钙
- 流属性/单位：Mass / kg
- 数量规则：使用采购、领用、溶液浓度和库存记录，计算该具体化学品的纯物质当量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 工厂门合格鲜或冷藏鹅肉净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chemical_inventory`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 阴离子聚丙烯酰胺（`wastewater_anionic_polyacrylamide`）

阴离子聚丙烯酰胺作为一个单独定量的产品交换进入清洗、消毒与废水管理边界。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：阴离子聚丙烯酰胺
- 流属性/单位：Mass / kg
- 数量规则：使用采购、领用、溶液浓度和库存记录，计算该具体化学品的纯物质当量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 工厂门合格鲜或冷藏鹅肉净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chemical_inventory`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

##### 废物流

###### 活鹅接收废水（`treatment_reception_wastewater`）

活鹅接收废水作为一个单独定量、待处理的废物交换进入清洗、消毒与废水管理边界。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Live-goose reception wastewater
- 流属性/单位：Volume / m3
- 数量规则：使用该具体物流相匹配的流量计、转移、处理和去向记录。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门合格鲜或冷藏鹅肉净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 鹅屠宰废水（`treatment_slaughter_wastewater`）

鹅屠宰废水作为一个单独定量、待处理的废物交换进入清洗、消毒与废水管理边界。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Goose-slaughter wastewater
- 流属性/单位：Volume / m3
- 数量规则：使用该具体物流相匹配的流量计、转移、处理和去向记录。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门合格鲜或冷藏鹅肉净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 鹅肉分割废水（`treatment_cutting_wastewater`）

鹅肉分割废水作为一个单独定量、待处理的废物交换进入清洗、消毒与废水管理边界。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Goose-meat cutting wastewater
- 流属性/单位：Volume / m3
- 数量规则：使用该具体物流相匹配的流量计、转移、处理和去向记录。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门合格鲜或冷藏鹅肉净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 冷库冷凝废水（`treatment_cold_room_condensate`）

冷库冷凝废水作为一个单独定量、待处理的废物交换进入清洗、消毒与废水管理边界。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Cold-room condensate wastewater
- 流属性/单位：Volume / m3
- 数量规则：使用该具体物流相匹配的流量计、转移、处理和去向记录。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门合格鲜或冷藏鹅肉净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

##### 基本流

通常不预期该类型的直接交换；任何例外均须另建原子卡。

#### 输出

##### 产品流

###### 处理后工艺水（`treated_process_water`）

处理后工艺水作为一个单独定量的产品交换离开清洗、消毒与废水管理边界。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Treated process water
- 流属性/单位：Volume / m3
- 数量规则：使用该具体物流相匹配的流量计、转移、处理和去向记录。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 工厂门合格鲜或冷藏鹅肉净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 回收沼气（`recovered_biogas`）

回收沼气作为一个单独定量的产品交换离开清洗、消毒与废水管理边界。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Recovered biogas
- 流属性/单位：Energy / MJ
- 数量规则：使用该具体物流相匹配的流量计、转移、处理和去向记录。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 工厂门合格鲜或冷藏鹅肉净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

##### 废物流

###### 鹅肉加工废水（`offsite_treatment_wastewater`）

鹅肉加工废水作为一个单独定量的废物交换离开清洗、消毒与废水管理边界。仅记录净转交外部处理运营方的废水。

- 选定流：Goose-meat processing wastewater
- 流属性/单位：Volume / m3
- 数量规则：使用该具体物流相匹配的流量计、转移、处理和去向记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门合格鲜或冷藏鹅肉净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 废水处理污泥（`wastewater_treatment_sludge`）

废水处理污泥作为一个单独定量的废物交换离开清洗、消毒与废水管理边界。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：废水处理污泥
- 流属性/单位：Mass / kg
- 数量规则：使用该具体物流的容器称量、交运、处理和去向记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 工厂门合格鲜或冷藏鹅肉净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_byproduct_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 废水筛除固形物（`wastewater_screened_solids`）

废水筛除固形物作为一个单独定量的废物交换离开清洗、消毒与废水管理边界。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Wastewater-screened solids
- 流属性/单位：Mass / kg
- 数量规则：使用该具体物流的容器称量、交运、处理和去向记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 工厂门合格鲜或冷藏鹅肉净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_byproduct_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 溶气气浮油脂污泥（`wastewater_daf_grease_sludge`）

溶气气浮油脂污泥作为一个单独定量的废物交换离开清洗、消毒与废水管理边界。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Dissolved-air-flotation grease sludge
- 流属性/单位：Mass / kg
- 数量规则：使用该具体物流的容器称量、交运、处理和去向记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 工厂门合格鲜或冷藏鹅肉净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_byproduct_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

##### 基本流

###### 五日生化需氧量，排放至水体（`effluent_bod5_water`）

五日生化需氧量，排放至水体作为一个单独定量的基本流从清洗、消毒与废水管理边界排放至环境。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Biochemical oxygen demand BOD5, to water
- 流属性/单位：Mass / kg
- 数量规则：使用相匹配的排水体积和实验室浓度记录，计算该具体参数的排放负荷。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 工厂门合格鲜或冷藏鹅肉净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 化学需氧量，排放至水体（`effluent_cod_water`）

化学需氧量，排放至水体作为一个单独定量的基本流从清洗、消毒与废水管理边界排放至环境。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：化学需氧量，排入水体
- 流属性/单位：Mass / kg
- 数量规则：使用相匹配的排水体积和实验室浓度记录，计算该具体参数的排放负荷。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 工厂门合格鲜或冷藏鹅肉净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 悬浮固体，排放至水体（`effluent_suspended_solids_water`）

悬浮固体，排放至水体作为一个单独定量的基本流从清洗、消毒与废水管理边界排放至环境。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Suspended solids, to water
- 流属性/单位：Mass / kg
- 数量规则：使用相匹配的排水体积和实验室浓度记录，计算该具体参数的排放负荷。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 工厂门合格鲜或冷藏鹅肉净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 总氮，排放至水体（`effluent_total_nitrogen_water`）

总氮，排放至水体作为一个单独定量的基本流从清洗、消毒与废水管理边界排放至环境。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Nitrogen total, to water
- 流属性/单位：Mass / kg
- 数量规则：使用相匹配的排水体积和实验室浓度记录，计算该具体参数的排放负荷。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 工厂门合格鲜或冷藏鹅肉净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 总磷，排放至水体（`effluent_total_phosphorus_water`）

总磷，排放至水体作为一个单独定量的基本流从清洗、消毒与废水管理边界排放至环境。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Phosphorus total, to water
- 流属性/单位：Mass / kg
- 数量规则：使用相匹配的排水体积和实验室浓度记录，计算该具体参数的排放负荷。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 工厂门合格鲜或冷藏鹅肉净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 氯化物，排放至水体（`effluent_chloride_water`）

氯化物，排放至水体作为一个单独定量的基本流从清洗、消毒与废水管理边界排放至环境。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Chloride, to water
- 流属性/单位：Mass / kg
- 数量规则：使用相匹配的排水体积和实验室浓度记录，计算该具体参数的排放负荷。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 工厂门合格鲜或冷藏鹅肉净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 甲烷，排放至空气（`wastewater_methane_air`）

甲烷，排放至空气作为一个单独定量的基本流从清洗、消毒与废水管理边界排放至环境。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Methane, to air
- 流属性/单位：Mass / kg
- 数量规则：使用直接监测，或根据采集的活动、组成、检修和损失记录计算该具体排放。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 工厂门合格鲜或冷藏鹅肉净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_air_emissions`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 氨，排放至空气（`wastewater_ammonia_air`）

氨，排放至空气作为一个单独定量的基本流从清洗、消毒与废水管理边界排放至环境。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：氨，排入空气
- 流属性/单位：Mass / kg
- 数量规则：使用直接监测，或根据采集的活动、组成、检修和损失记录计算该具体排放。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 工厂门合格鲜或冷藏鹅肉净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_air_emissions`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

### 过程：场内燃料燃烧与公用工程生产（`onsite_energy_generation`）

#### 输入

##### 产品流

###### 工艺用水（`boiler_process_water`）

工艺用水作为一个单独定量的产品交换进入场内燃料燃烧与公用工程生产边界。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：过程用水
- 流属性/单位：Volume / m3
- 数量规则：使用专用水表或有记录的过程水平衡计量该具体水流。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 工厂门合格鲜或冷藏鹅肉净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_balance`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 设施供电电力（`onsite_auxiliary_electricity`）

设施供电电力作为一个单独定量的产品交换进入场内燃料燃烧与公用工程生产边界。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：厂区供电
- 流属性/单位：Energy / kWh
- 数量规则：使用专用计量表，或从经核对的设施能源平衡中按有记录的因果关系分配该具体公用工程量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 工厂门合格鲜或冷藏鹅肉净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 天然气（`onsite_natural_gas`）

天然气作为一个单独定量的产品交换进入场内燃料燃烧与公用工程生产边界。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：天然气
- 流属性/单位：Energy / MJ
- 数量规则：使用经校准燃料表，或该具体燃料的采购、储罐、领用和期末库存记录，并声明能量基准。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 工厂门合格鲜或冷藏鹅肉净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fuel_inventory`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 柴油（`onsite_diesel`）

柴油作为一个单独定量的产品交换进入场内燃料燃烧与公用工程生产边界。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：柴油燃料
- 流属性/单位：Energy / MJ
- 数量规则：使用经校准燃料表，或该具体燃料的采购、储罐、领用和期末库存记录，并声明能量基准。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 工厂门合格鲜或冷藏鹅肉净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fuel_inventory`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 液化石油气（`onsite_lpg`）

液化石油气作为一个单独定量的产品交换进入场内燃料燃烧与公用工程生产边界。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：液化石油气
- 流属性/单位：Energy / MJ
- 数量规则：使用经校准燃料表，或该具体燃料的采购、储罐、领用和期末库存记录，并声明能量基准。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 工厂门合格鲜或冷藏鹅肉净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fuel_inventory`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 回收沼气（`onsite_recovered_biogas`）

回收沼气作为一个单独定量的产品交换进入场内燃料燃烧与公用工程生产边界。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Recovered biogas
- 流属性/单位：Energy / MJ
- 数量规则：使用经校准燃料表，或该具体燃料的采购、储罐、领用和期末库存记录，并声明能量基准。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 工厂门合格鲜或冷藏鹅肉净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_fuel_inventory`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 氢氧化钠（`boiler_sodium_hydroxide`）

氢氧化钠作为一个单独定量的产品交换进入场内燃料燃烧与公用工程生产边界。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：氢氧化钠
- 流属性/单位：Mass / kg
- 数量规则：使用采购、领用、溶液浓度和库存记录，计算该具体化学品的纯物质当量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 工厂门合格鲜或冷藏鹅肉净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chemical_inventory`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 磷酸三钠（`boiler_trisodium_phosphate`）

磷酸三钠作为一个单独定量的产品交换进入场内燃料燃烧与公用工程生产边界。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Trisodium phosphate
- 流属性/单位：Mass / kg
- 数量规则：使用采购、领用、溶液浓度和库存记录，计算该具体化学品的纯物质当量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 工厂门合格鲜或冷藏鹅肉净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chemical_inventory`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

##### 废物流

通常不预期该类型的直接交换；任何例外均须另建原子卡。

##### 基本流

通常不预期该类型的直接交换；任何例外均须另建原子卡。

#### 输出

##### 产品流

###### 蒸汽（`onsite_steam_output`）

蒸汽作为一个单独定量的产品交换离开场内燃料燃烧与公用工程生产边界。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：蒸汽
- 流属性/单位：Energy / MJ
- 数量规则：使用专用计量表，或从经核对的设施能源平衡中按有记录的因果关系分配该具体公用工程量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 工厂门合格鲜或冷藏鹅肉净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_energy_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 热水（`onsite_hot_water_output`）

热水作为一个单独定量的产品交换离开场内燃料燃烧与公用工程生产边界。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：热水
- 流属性/单位：Energy / MJ
- 数量规则：使用专用计量表，或从经核对的设施能源平衡中按有记录的因果关系分配该具体公用工程量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 工厂门合格鲜或冷藏鹅肉净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_energy_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 电力（`onsite_electricity_output`）

电力作为一个单独定量的产品交换离开场内燃料燃烧与公用工程生产边界。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：电力
- 流属性/单位：Energy / kWh
- 数量规则：使用专用计量表，或从经核对的设施能源平衡中按有记录的因果关系分配该具体公用工程量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 工厂门合格鲜或冷藏鹅肉净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_energy_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

##### 废物流

###### 锅炉排污废水（`boiler_blowdown_wastewater`）

锅炉排污废水作为一个单独定量的废物交换离开场内燃料燃烧与公用工程生产边界。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：锅炉排污废水
- 流属性/单位：Volume / m3
- 数量规则：使用该具体物流相匹配的流量计、转移、处理和去向记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 工厂门合格鲜或冷藏鹅肉净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 废润滑油（`spent_lubricating_oil_waste`）

废润滑油作为一个单独定量的废物交换离开场内燃料燃烧与公用工程生产边界。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Spent lubricating oil
- 流属性/单位：Mass / kg
- 数量规则：使用该具体物流的容器称量、交运、处理和去向记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 工厂门合格鲜或冷藏鹅肉净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_byproduct_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

##### 基本流

###### 化石二氧化碳，排放至空气（`onsite_carbon_dioxide_fossil_air`）

化石二氧化碳，排放至空气作为一个单独定量的基本流从场内燃料燃烧与公用工程生产边界排放至环境。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：化石源二氧化碳，排入空气
- 流属性/单位：Mass / kg
- 数量规则：使用直接监测，或根据采集的活动、组成、检修和损失记录计算该具体排放。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 工厂门合格鲜或冷藏鹅肉净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_air_emissions`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 生物源二氧化碳，排放至空气（`onsite_carbon_dioxide_biogenic_air`）

生物源二氧化碳，排放至空气作为一个单独定量的基本流从场内燃料燃烧与公用工程生产边界排放至环境。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：生物源二氧化碳，排入空气
- 流属性/单位：Mass / kg
- 数量规则：使用直接监测，或根据采集的活动、组成、检修和损失记录计算该具体排放。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 工厂门合格鲜或冷藏鹅肉净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_air_emissions`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 以二氧化氮计的氮氧化物，排放至空气（`onsite_nitrogen_oxides_air`）

以二氧化氮计的氮氧化物，排放至空气作为一个单独定量的基本流从场内燃料燃烧与公用工程生产边界排放至环境。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Nitrogen oxides expressed as nitrogen dioxide, to air
- 流属性/单位：Mass / kg
- 数量规则：使用直接监测，或根据采集的活动、组成、检修和损失记录计算该具体排放。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 工厂门合格鲜或冷藏鹅肉净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_air_emissions`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 以二氧化硫计的硫氧化物，排放至空气（`onsite_sulfur_oxides_air`）

以二氧化硫计的硫氧化物，排放至空气作为一个单独定量的基本流从场内燃料燃烧与公用工程生产边界排放至环境。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Sulfur oxides expressed as sulfur dioxide, to air
- 流属性/单位：Mass / kg
- 数量规则：使用直接监测，或根据采集的活动、组成、检修和损失记录计算该具体排放。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 工厂门合格鲜或冷藏鹅肉净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_air_emissions`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 一氧化碳，排放至空气（`onsite_carbon_monoxide_air`）

一氧化碳，排放至空气作为一个单独定量的基本流从场内燃料燃烧与公用工程生产边界排放至环境。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：一氧化碳，排入空气
- 流属性/单位：Mass / kg
- 数量规则：使用直接监测，或根据采集的活动、组成、检修和损失记录计算该具体排放。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 工厂门合格鲜或冷藏鹅肉净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_air_emissions`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### PM10 颗粒物，排放至空气（`onsite_pm10_air`）

PM10 颗粒物，排放至空气作为一个单独定量的基本流从场内燃料燃烧与公用工程生产边界排放至环境。其身份、数量、来源或去向须同所有替代交换分开记录。

- 选定流：Particulate matter PM10, to air
- 流属性/单位：Mass / kg
- 数量规则：使用直接监测，或根据采集的活动、组成、检修和损失记录计算该具体排放。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 工厂门合格鲜或冷藏鹅肉净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_air_emissions`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`


## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `alloc_subdivision_first` | 屠宰、整理与分割 | 只要存在独立操作和记录，分配前应优先采用过程细分与直接计量。 | `eu-pef-method-2021` |
| `alloc_co_product_status` | 羽毛、血、器官、脂、皮、骨、头与掌 | 在实际交接点确定产品或废物状态，仅使用相应产品行或废物行；同一物理质量绝不得同时计入两者。 | `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021` |
| `alloc_physical_relation` | 不可避免的联合共产品 | 无法细分时，仅在能够反映投入与排放随共产品生产变化关系的情况下采用有证据的物理因果关系。 | `eu-pef-method-2021` |
| `alloc_economic_fallback` | 其余联合共产品 | 若不存在可辩护的物理关系，采用同适用研究方案及报告期一致且有记录的经济分配；不得虚构默认因子。 | `eu-pef-method-2021` |
| `alloc_waste_no_credit` | 废物流 | 将处理负荷分配到声明交接点；除非适用下游模型明确要求并记录该情景，否则不授予替代产品抵扣。 | `eu-pef-method-2021` |
| `alloc_internal_recovery` | 处理水、沼气、蒸汽、热水与电力 | 将内部回收视为链接转移；同一回收量不得重复分配或抵扣。 | `eu-pef-method-2021` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_live_bird_mass` | `live_goose_reception` | 活鹅接收与处置 | 地磅与批次记录 | lot_id; supplier; origin; arrival_time; gross_mass; tare_mass; accepted_mass; rejected_mass; dead_on_arrival_mass | 经校准地磅或批次秤，并同接收记录核对 | kg | 每批 | 完整报告期 | 全部代表性接收批次 | 按批求和，核对验收与拒收处置 | 校准记录；签收单；处置日志 |
| `cp_process_mass_balance` | 全部屠宰与肉加工过程 | 胴体、肉、器官与中间流 | 生产与称量记录 | batch_id; input_mass; output_mass; product_state; trim_mass; bone_mass; organ_mass; inventory_change | 经校准秤与生产线记录 | kg | 每批或每班 | 完整报告期 | 全部代表性生产线 | 归一化前核对投入、产出、库存变化和有记录损失 | 校准；批次单；平衡异常日志 |
| `cp_energy_records` | 全部过程 | 电力、蒸汽与热水 | 计量表与公用工程记录 | meter_id; timestamp; opening_reading; closing_reading; energy_carrier; generated_amount; transferred_amount | 专用计量表，或从核对后场址总表按有记录因果关系分配 | kWh; MJ | 连续或每账单期 | 完整报告期 | 全部代表性设备与公用工程 | 分别汇总具体载体，并核对进口、生产和内部转移 | 仪表校准；账单；核对记录 |
| `cp_fuel_inventory` | `onsite_energy_generation` | 单一燃料 | 燃料计量、账单与储罐记录 | fuel_identity; quantity; unit; energy_basis; opening_stock; purchases; issues; closing_stock | 对每种燃料进行计量或库存核对 | MJ | 每次交付及报告期 | 完整报告期 | 全部场内燃烧单元 | 按燃料和声明能量基准分别计算消耗 | 账单；储罐校准；燃料规格 |
| `cp_water_balance` | 全部过程 | 工艺水、冷却水与公用工程用水 | 水表记录 | meter_id; source; destination; opening_reading; closing_reading; recirculation; discharge | 专用水表与有记录水平衡 | m3 | 连续或每日 | 完整报告期 | 全部代表性水回路 | 分开外部补充、内部回用与排水 | 仪表校准；平衡核对 |
| `cp_material_inventory` | 适用过程 | 具名加工材料与气体 | 采购与库存记录 | material_identity; concentration; opening_stock; purchases; issues; returns; closing_stock | 材料特定库存核对 | kg | 每次领用及报告期 | 完整报告期 | 全部代表性材料 | 每种具体材料分别计算 | 账单；规格；库存记录 |
| `cp_chemical_inventory` | 清洗与公用工程 | 具名化学品 | 化学品领用与浓度记录 | chemical_identity; formulation; active_fraction; opening_stock; purchases; issues; closing_stock | 物料平衡并换算为纯物质当量 | kg | 每次领用及报告期 | 完整报告期 | 全部代表性化学品仓储与加药点 | 不得跨化学品身份聚合 | 安全数据表；浓度检测；库存核对 |
| `cp_refrigerant_balance` | `chilling_cold_storage` | 每种制冷剂与逸散组分 | 设备与检修记录 | equipment_id; refrigerant_identity; blend_composition; opening_stock; purchases; charge; recovery; returns; closing_stock; service_loss | 年度或报告期制冷剂质量平衡 | kg | 每次检修及报告期 | 完整报告期 | 每个代表性制冷回路 | 分别计算每种制冷剂投入和每种逸散组分 | 检修账单；钢瓶称量；组成规格 |
| `cp_packaging_inventory` | `packaging_dispatch` | 每种包装材料与边角料 | 物料清单、领用与废料记录 | material_identity; units_issued; unit_mass; returns; scrap_mass; reusable_cycles | 件数乘以核实单件质量并核对库存 | kg | 每生产批次及报告期 | 完整报告期 | 每条代表性包装线 | 每种材料分别计算，并从产品净质量排除包装 | 供应商规格；称量检查；领用记录 |
| `cp_product_release` | 冷却与交付 | 合格参考产品 | 批次放行记录 | lot_id; net_mass; product_form; bone_status; skin_status; temperature_state; packaging_format; release_decision | 经校准成品秤与质量放行审查 | kg | 每批 | 完整报告期 | 全部参考产品批次 | 仅汇总放行净产品；排除不合格及非产品质量 | 校准；温度日志；放行证明 |
| `cp_waste_byproduct_records` | 全部过程 | 单一共产品与废物 | 称量交运与处理记录 | stream_identity; container_tare; gross_mass; net_mass; product_or_waste_status; destination; date | 经校准秤或有记录容器质量 | kg | 每次转移 | 完整报告期 | 每项声明物流与去向 | 每种物理流和状态分开 | 过磅单；联单；去向证据 |
| `cp_wastewater_records` | `sanitation_wastewater_management` | 废水、处理输出与水排放 | 流量计与实验室记录 | stream_identity; volume; sample_time; concentration; parameter; treatment_route; sludge_mass; destination | 匹配流量测量与代表性采样 | m3; kg | 连续流量与基于风险的采样 | 完整报告期 | 每个排口与处理路线 | 以匹配体积乘浓度计算负荷；核对污泥与外送 | 仪表校准；实验室报告；许可记录 |
| `cp_air_emissions` | 制冷、包装、废水与能源 | 直接空气排放 | 监测、质量平衡与检修记录 | emission_identity; source; activity; concentration; flow_rate; duration; composition; calculated_loss | 直接监测，或根据采集的排放源记录计算 | kg | 按适用情况连续、生产周期或检修事件 | 完整报告期 | 每个直接排放源 | 分别计算并报告每项基本流 | 监测报告；检修记录；计算表 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 全部清单行 | 用一种原子交换的报告期数量除以放行参考产品净质量。 | 交换数量；放行产品净质量 | 每 1 kg 参考产品的数量 | `eu-pef-method-2021` |
| `calc_live_goose_balance` | 接收至整理 | 核对验收活质量与鹅胴体、单独计量共产品、废物、废水携带物质及库存变化；调查未解释不平衡。 | 验收活质量；全部实测产出；库存变化 | 经核对屠宰质量平衡 | `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021` |
| `calc_internal_transfer` | 中间流、水与公用工程 | 对同一身份与报告期匹配发送过程产出和接收过程投入，并删除任何重复外部交换。 | 链接产出；链接投入；库存变化 | 经核对内部转移 | `eu-pef-method-2021` |
| `calc_refrigerant_loss` | 制冷 | 根据库存、采购、充注、回收与退回记录计算每种制冷剂损失；混合制冷剂按有记录组成计算每种逸散组分。 | 制冷剂平衡；混合物组成 | 制冷剂投入与组分特定空气排放 | `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021` |
| `calc_packaging_mass` | 包装 | 用领用件数乘核实单件质量，按退回和库存变化调整，并保持每种材料与废料流分开。 | 件数；单件质量；退回；库存；废料 | 材料特定包装投入与废物 | `eu-pef-method-2021` |
| `calc_wastewater_load` | 水排放 | 将匹配排放体积乘以每个参数的代表性浓度，并记录单位换算。 | 排水体积；参数浓度 | 参数特定质量排放 | `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021` |
| `calc_combustion_emissions` | 场内燃烧 | 使用直接监测，或使用同每种燃料清单及实测运行期关联的有记录计算；保留各污染物身份。 | 燃料清单；监测；运行时间；组成 | 污染物特定空气排放 | `ec-jrc-sa-bref-jrc135916` |
| `calc_allocation` | 联合共产品 | 仅在过程细分与直接计量后应用声明分配层级，并披露数据、公式和报告期基准。 | 联合过程清单；共产品数量；物理或经济基准 | 按产品分配的清单 | `eu-pef-method-2021` |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `dq_identity` | 全部交换 | 保留确切流身份、方向、类型、单位和过程；未解析非参考 UUID 保持空白并在 manifest 登记。 | 清单审计与 UUID 审查 |
| `dq_primary_data` | 前景制造 | 使用所代表工厂、技术和报告期的公司特定记录。 | 计量表、秤、账单、日志与实验室报告 |
| `dq_completeness` | 清单 | 覆盖原材料、能源、产品、共产品、废物及空气和水排放；对每张条件卡记录不适用性。 | 完整性矩阵与过程走查 |
| `dq_temporal` | 报告期 | 覆盖代表性运行期，并披露停机、异常事件、库存变化和季节影响。 | 报告期核对 |
| `dq_mass_balance` | 屠宰与分割 | 核对活质量、胴体、肉、共产品、废物和库存变化，不得把不平衡隐藏在组合残余流中。 | 批次与期间质量平衡 |
| `dq_refrigeration` | 冷却与储存 | 保留设备特定制冷剂身份、混合物组成、检修记录和组分损失计算。 | 制冷检修档案 |
| `dq_packaging` | 包装 | 保留产品特定包装物料清单与材料特定废料记录。 | 物料清单与领用记录 |
| `dq_wastewater` | 水管理 | 将代表性浓度样品同实测体积匹配，并披露处理或外送交接。 | 实验室、计量与联单记录 |
| `dq_transparency` | 发布数据集 | 披露排除项、分配、数据缺口、代理、未解析身份和计算方法。 | 数据质量报告 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `val_reference_identity` | 参考流 | 使用 Meat of geese, fresh or chilled `a2ca6142-7a35-485f-85fd-3f19301fa6c5`、Mass `93a60a56-a3c8-11da-a746-0800200b9a66`、Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` 和 kg。 |  |
| `val_product_scope` | 参考产品 | 若参考产品为冷冻鹅肉、鹅肝酱、鹅肝、鹅心、鹅肌胃、鹅肠或其他内脏产品，则拒绝该数据集。 | `un-cpc-3-0-2025` |
| `val_atomic_inventory` | 全部清单行 | 每卡必须含一个具体交换和一个非空说明段；拒绝集合标签以及材料、公用工程、废物或排放选择器。 | `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021` |
| `val_uuid_closure` | 身份 | 仅允许双核确认 UUID；每个空白非参考 UUID 必须在 manifest 以相同 row_id 登记。 |  |
| `val_no_inferred_quantities` | 数量 | 仅允许前景记录、计算值或固定参考数量；拒绝 AI 生成或仅凭推断的范围。 | `eu-pef-method-2021` |
| `val_mass_balance` | 接收至分割 | 对同一期间核对投入质量与产品、共产品、废物、排放负荷及库存变化。 | `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021` |
| `val_energy_water_balance` | 公用工程 | 核对进口、生产和内部转移的电力、蒸汽、热水、燃料和水，避免重复计算。 | `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021` |
| `val_refrigerant_balance` | 制冷 | 要求每种已安装制冷剂和每种逸散组分均单独识别，并同检修记录核对。 | `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021` |
| `val_packaging` | 包装产品 | 匹配每项包装投入、废料流和声明包装形式，同时从参考产品质量排除包装质量。 | `eu-pef-method-2021` |
| `val_wastewater` | 废水 | 将实测废水体积同处理、交接和参数特定排放负荷相匹配。 | `ec-jrc-sa-bref-jrc135916` |
| `val_co_product_status` | 屠宰副产品 | 要求每项羽毛、血、器官、脂、皮、骨、头和掌物流只有一种产品或废物状态及一个去向；拒绝产品与废物重复计量。 | `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021` |
| `val_allocation` | 共产品 | 要求声明的过程细分与分配层级、输入数据、公式和报告期基准。 | `eu-pef-method-2021` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 工厂门鲜或冷藏鹅肉生产前景数据集 |
| downstream_use | `secondary_dataset`；`background_dataset`；产品足迹与生命周期模型构建 |
| allowed_use | 同声明产品状态、工厂、技术、地域、报告期、包装和分配相匹配的鹅肉系统 |
| excluded_use | 冷冻鹅肉；鹅肝酱；以内脏为参考产品；活鹅生产；门后配送、使用或寿命终止 |
| required_metadata | PCR id；CPC 引用；UUID 链；产品形态；带骨与带皮状态；鲜或冷藏状态；净质量；工厂；期间；屠宰路线；制冷；包装；共产品；处理；分配 |
| required_quality_disclosure | 一手数据覆盖；仪表与秤质量；质量、能源、水和制冷剂平衡；采样；不适用性；代理；未解析 UUID；分配；不确定性 |
| update_trigger | 产品状态、屠宰技术、制冷、燃料、化学品、包装、处理、共产品去向、分配、工厂、地域、期间、证据或 UUID 发生变化 |

## 11. 数据源

| 来源 id | 类型 | 引用 | 用途 |
| --- | --- | --- | --- |
| `un-cpc-3-0-2025` | 数据集（`dataset`） | 联合国统计司，《产品总分类》第 3.0 版官方分类条目及仓库保留原始文件 `classifications/systems/cpc/3.0/raw/CPC_Ver_3.0_Structure_30Jun2025.csv`。https://unstats.un.org/unsd/classifications/Econ/CPC | CPC 21123 精确类别标题与产品范围区分 |
| `ec-jrc-sa-bref-jrc135916` | 官方指南（`official_guidance`） | 欧盟委员会联合研究中心，Best Available Techniques Reference Document for the Slaughterhouses, Animal By-products and/or Edible Co-products Industries，JRC135916。https://doi.org/10.2760/18199 | 屠宰场过程分解、能源与水、副产品、清洗、制冷、废物、废水和直接排放 |
| `eu-pef-method-2021` | 官方指南（`official_guidance`） | Commission Recommendation (EU) 2021/2279，合并版产品环境足迹方法。https://eur-lex.europa.eu/eli/reco/2021/2279/2021-12-30/eng | 产品特定物料清单、公司特定制造数据、LCI 完整性、分配、计算、数据质量和透明度 |
