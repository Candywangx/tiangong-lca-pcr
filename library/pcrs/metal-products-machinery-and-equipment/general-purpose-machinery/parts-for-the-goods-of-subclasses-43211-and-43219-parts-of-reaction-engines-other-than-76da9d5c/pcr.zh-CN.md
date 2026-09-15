---
pcr_id: pcr.metal-products-machinery-and-equipment.general-purpose-machinery.parts-for-the-goods-of-subclasses-43211-and-43219-parts-of-reaction-engines-other-than-76da9d5c
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 液压或气压动力发动机及马达的零件，以及涡轮喷气发动机以外的反作用式发动机的零件

## 1. 范围与适用性

本 PCR 适用于下列新制造、单独供应零件的从摇篮到工厂大门前景数据生产：线性作用液压或气压动力发动机及马达的零件、其他液压或气压动力发动机及马达的零件，以及涡轮喷气发动机以外的反作用式发动机的零件。该复合边界遵循 CPC 3.0 正式产品身份；每个数据包均须声明实际零件系列、零件号或图样版本、材料、坯料状态、制造路线和表面状态。

边界包括报告场址的机加工，以及直接控制的热处理、水基清洗、表面处理、装配和检验。边界不包括完整发动机或马达；涡轮喷气发动机、涡轮螺桨发动机及其零件；无关的泵、压缩机、阀门及零件；修理、大修和再制造；资本设备；产品使用、维护和报废；以及工厂大门以外的配送。外购坯料、化学品、燃料、电力和水的上游生产应通过链接的上游数据集表示，不得在前景清单内重复计算。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.general-purpose-machinery.parts-for-the-goods-of-subclasses-43211-and-43219-parts-of-reaction-engines-other-than-76da9d5c |
| classification_refs | CPC 3.0：43251，子类43211和43219所列货物的零件；涡轮喷气发动机以外的反作用式发动机的零件（精确分类语境；目前未映射） |
| covered_products | 单独供应的线性作用液压或气压缸成品零件；单独供应的其他液压或气压动力发动机及马达成品零件；单独供应的涡轮喷气发动机以外反作用式发动机成品零件 |
| excluded_products | 完整发动机或马达；涡轮喷气发动机和涡轮螺桨发动机的零件；泵、压缩机、阀门或无关机械零件；修理、大修或再制造零件；工装；生产设备；不构成可销售零件组成部分的包装 |
| representative_product | 作为新备件或原始设备组件供应，检验合格并完成机加工和表面处理的承载或承压发动机或马达零件 |
| production_route | 接收已声明材料的锻造或铸造坯料；精密机加工；按路线实施热处理以及水基清洗或表面处理；最终检验与放行 |
| market_state | 报告场址工厂大门处新制造、已完成、已检验的零件；仅当防护涂层属于已声明可销售状态时纳入 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 一件单独供应的零件，满足已识别液压或气压发动机或马达、或非涡轮喷气反作用式发动机所声明的图样、材料、尺寸、表面状态和验收要求 |
| How much | 合格成品零件净质量 1 kg |
| How well | 由报告场址依据已声明图样版本和适用检验或试验计划放行；不合格件和可拆除包装不计入合格产出质量 |
| How long or cycle | 一个生产批次直至工厂大门放行；服役寿命和使用循环不属于本从摇篮到工厂大门 PCR 的范围 |
| reference_flow_link | 参考流为 `out_finished_part` 所表示的合格成品零件实测净质量 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | CPC 43251 发动机或马达成品零件 |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 零件系列及所配套的主机；零件号和图样版本；材料规范和合金牌号；来料坯料形式；制造和热处理路线；表面处理和防护状态；检验或试验验收依据；生产场址和地理范围；生产期间；新制造工厂大门状态 |

构建前景数据包时，`必需限定信息` 中的每一项都应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失任一必需限定信息的数据集，其参考流定义均不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 合格成品零件及所有按质量归一化的清单 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 对不含可拆除包装的合格成品零件称重，并将所有清单数量归一化至该产出 1 kg。保留实测批次总量和归一化计算。 |
| `material_mass_balance` | 坯料投入、合格产出、金属废料和库存变化 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 各已声明材料流应始终采用同一种干基或接收态质量基准。在核对批次质量平衡前，单独记录保留的在制品和库存变化。 |
| `electricity_energy` | 外购电力 | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 保留电表计量的电能数量。原始电表以 kWh 报告时，按 1 kWh = 3.6 MJ 换算，并保留原始电表值。 |
| `gas_volume` | 气态天然气 | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | 按供应商声明的基准温度和压力报告气体；披露这些基准条件及从电表工况进行的任何换算。 |

## 5. 系统边界

| rule_id | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `boundary_foreground_operations` | 报告场址制造 | 纳入直接控制的接收、机加工、按路线实施的热处理、水基清洗或表面处理、装配、检验、批次内返工，以及直至各交换离开前景边界的废物处理。 | `eu-jrc-sf-bref-2024`; `eu-jrc-stm-bref-2006`; `us-epa-aerospace-neshap-2015` |
| `boundary_upstream_links` | 外购投入 | 将每项外购坯料、电力、燃料、水和化学品作为可见产品投入，并链接至披露地理、技术、产品状态和交付边界的上游数据集。 |  |
| `boundary_route_conditions` | 条件过程 | 仅在直接燃烧热处理发生时纳入天然气；仅在已声明水基碱性清洗路线使用或产生对应原子交换时，纳入工艺用水、氢氧化钠、清洗废水和废碱液。 | `eu-jrc-sf-bref-2024`; `eu-jrc-stm-bref-2006` |
| `boundary_exclusions` | 范围外生命周期阶段 | 排除资本设备、工装生产、建筑基础设施、员工出行、使用、维护、修理、大修、再制造、报废和报告场址大门以外的配送；研究目标明确扩展边界并单独报告该扩展时除外。 |  |

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 以已声明供应状态在报告场址边界接收的材料特定锻造或铸造坯料、外购耗材和外购公用工程 |
| starting_condition_role | 起始条件将上游坯料和公用工程生产与直接控制的零件制造前景分开 |
| product_classification_scope | CPC 43251 复合身份内单独供应的新零件；分类语境不会把完整发动机、涡轮喷气或涡轮螺桨发动机零件、或无关机械零件纳入本 PCR |
| recursive_input_rule | 若某项投入本身是本 PCR 类别内的成品零件，则将其作为可见外购产品投入记录一次并链接其自身上游数据集；不得在接收过程内递归复制其制造清单 |
| upstream_dataset_requirement | 每项外购坯料、材料、化学品、燃料、电力和水投入均应链接至与已声明材料或产品状态、地理、技术和交付边界相匹配的上游数据集 |
| disclosure | 披露零件系列、图样版本、合金和材料规范、坯料形式、热处理和表面处理路线、内部返工、外协过程、场址、生产期间和所有边界偏离 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `integrated_part_manufacturing` | 零件一体化机加工、按路线实施的精整、检验与放行 | required | 适用于每个前景数据包；仅在相应材料或操作适用时记录条件流卡 | 从接收坯料到合格成品零件的前景制造 | 工厂大门处合格成品零件 1 kg |

### 过程：零件一体化机加工、按路线实施的精整、检验与放行（`integrated_part_manufacturing`）

#### 输入

##### 产品流

###### 低合金钢锻造坯料（`in_alloy_steel_forging`）

当已声明零件由低合金钢锻件坯料制造时，记录单独采购的锻造坯料。

- 选定流：低合金钢锻件
- 流属性/单位：Mass / kg
- 数量规则：计量发放至合格生产批次的接收态质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂大门处合格成品零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_batch_mass_balance`
- 来源：

###### 铝合金铸造坯料（`in_aluminium_alloy_casting`）

当已声明零件由铝合金铸件制造时，记录单独采购的铸造坯料。

- 选定流：铝合金铸造坯料
- 流属性/单位：Mass / kg
- 数量规则：计量发放至合格生产批次的接收态质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂大门处合格成品零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_batch_mass_balance`
- 来源：

###### 镍合金锻造坯料（`in_nickel_alloy_forging`）

当已声明反作用式发动机零件由镍合金锻件坯料制造时，记录单独采购的锻造坯料。

- 选定流：镍合金锻件
- 流属性/单位：Mass / kg
- 数量规则：计量发放至合格生产批次的接收态质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂大门处合格成品零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_batch_mass_balance`
- 来源：

###### 外购电能（`in_electricity`）

记录机加工设备及可归属辅助设备、热处理或表面处理设备、检验和直接控制废物处理所使用的计量电力。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：计量可归属于生产批次的电力，包括对共用电表进行有依据的分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂大门处合格成品零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utility_and_consumable_records`
- 来源：

###### 机加工用切削液（`in_cutting_fluid`）

扣除单独记录的未开封退料后，记录进入机加工的新鲜切削液产品净投入；声明配方、稀释状态和循环使用状态。

- 选定流：切削液 `576d250f-4f36-4385-939d-0f03b8f95a10`
- 流属性/单位：Mass / kg
- 数量规则：计量发放至生产批次的新鲜切削液净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 工厂大门处合格成品零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utility_and_consumable_records`
- 来源：

###### 直接燃烧热处理用天然气（`in_natural_gas`）

仅在前景边界内燃烧气态天然气用于加热或热处理时记录该流。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Volume / m3
- 数量规则：在已声明基准条件下，由供应商电表或经校准分表计量并归属于生产批次的气体体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂大门处合格成品零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utility_and_consumable_records`
- 来源：

###### 水基清洗和漂洗用工艺用水（`in_process_water`）

仅在工艺用水跨越前景边界用于水基清洗、漂洗、浴液补充或直接相关清洗操作时记录。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：计量供应水的质量，或将计量体积按已记录密度和电表条件换算为质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂大门处合格成品零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_bath_records`
- 来源：`eu-jrc-stm-bref-2006`

###### 碱性清洗用氢氧化钠（`in_sodium_hydroxide`）

仅在已声明清洗路线使用氢氧化钠时记录；保留产品供应状态和浓度，不得默认按纯干化学品处理。

- 选定流：氢氧化钠 `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- 流属性/单位：Mass / kg
- 数量规则：计量加入清洗浴的氢氧化钠产品质量，并披露供应浓度
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 工厂大门处合格成品零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_bath_records`
- 来源：`eu-jrc-stm-bref-2006`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 合格发动机或马达成品零件（`out_finished_part`）

仅记录依据已声明图样和验收计划放行的零件；不合格件、在制品和可拆除包装不计入合格产出质量。

- 选定流：CPC 43251 发动机或马达成品零件
- 流属性/单位：Mass / kg
- 数量规则：计量生产批次放行的合格成品零件净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：工厂大门处合格成品零件 1 kg
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_batch_mass_balance`
- 来源：`un-cpc-3-0-structure-2025`

##### 废物流

###### 低合金钢机加工废料（`out_low_alloy_steel_scrap`）

低合金钢路线适用时，记录分类收集并作为废料运出的低合金钢切屑、边角料和不合格金属。

- 选定流：低合金钢废料 `afedcccd-b9f3-4941-8ba4-d3135b8abb67`
- 流属性/单位：Mass / kg
- 数量规则：计量运出质量，并计入可归属于生产批次且有依据的期末库存变化
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂大门处合格成品零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_dispatch_records`
- 来源：

###### 铝机加工废料（`out_aluminium_scrap`）

铝路线适用时，记录分类收集并作为废料运出的铝切屑、边角料和不合格金属。

- 选定流：铝废料 `96c5f842-ea53-419b-b1cd-c02c479efb45`
- 流属性/单位：Mass / kg
- 数量规则：计量运出质量，并计入可归属于生产批次且有依据的期末库存变化
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂大门处合格成品零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_dispatch_records`
- 来源：

###### 镍合金机加工废料（`out_nickel_alloy_scrap`）

镍合金路线适用时，记录分类收集并作为废料运出的镍合金切屑、边角料和不合格金属。

- 选定流：镍合金机加工废料
- 流属性/单位：Mass / kg
- 数量规则：计量运出质量，并计入可归属于生产批次且有依据的期末库存变化
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂大门处合格成品零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_dispatch_records`
- 来源：

###### 机加工废切削油（`out_waste_cutting_oil`）

仅在油基切削液路线适用且该物料离开前景边界进行回收或处理时，记录废切削油。

- 选定流：废切削油 `80d926e3-0f76-4a19-9b1e-ffec9deb1216`
- 流属性/单位：Mass / kg
- 数量规则：计量转移至封闭废物贮存或场外回收、处理单位的质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 工厂大门处合格成品零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_dispatch_records`
- 来源：`us-epa-aerospace-neshap-2015`

###### 水基清洗废水（`out_cleaning_wastewater`）

将作为废水离开过程的清洗漂洗水与浓缩废浴液分开记录。

- 选定流：清洗废水 `f0402393-e82c-47e8-9cd8-a486c97f3e89`
- 流属性/单位：Mass / kg
- 数量规则：计量进入处理或下水道的废水质量，或将计量体积按已记录密度换算为质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 工厂大门处合格成品零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_bath_records`
- 来源：`eu-jrc-stm-bref-2006`

###### 更换清洗浴产生的废碱液（`out_waste_alkaline_liquor`）

部分或全部更换碱性清洗浴且浓缩废清洗液离开前景过程进行处理时，应将其单独记录。

- 选定流：废碱液 `ce738ef0-a711-4650-a38b-34479efd7559`
- 流属性/单位：Mass / kg
- 数量规则：计量从清洗浴移除并转移至处理的废液质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 工厂大门处合格成品零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_bath_records`
- 来源：`eu-jrc-stm-bref-2006`

##### 基本流

###### 天然气燃烧产生的直接化石源二氧化碳（`out_fossil_co2`）

仅记录可归属于天然气燃烧的前景直接化石源二氧化碳；不得将上游电力或燃料供应排放计入本基本流。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：依据可归属天然气用量、已记录燃料碳含量、氧化率以及碳至二氧化碳的质量换算进行计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂大门处合格成品零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_utility_and_consumable_records`
- 来源：

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `allocation_subdivide_first` | 混合零件系列、合金、路线或生产批次 | 在分配共用负荷前，按零件系列、合金、路线、机加工单元或批次划分生产，并优先采用直接电表、领料记录和时间记录。 |  |
| `allocation_shared_operations` | 无法分开的共用电力、燃料、耗材或废物 | 无法划分或直接计量时，按实测因果驱动量分配共用交换，优先次序为：按额定负荷修正的设备或炉子运行时间、表面处理的处理面积、合格产品质量。记录驱动量和计算。 |  |
| `allocation_scrap_and_recycling` | 金属废料和回收切削油 | 在前景边界处报告废物流，不计避免负荷收益。下游研究如建模再生或回收收益，应在本前景过程外处理并披露方法。 |  |
| `allocation_rework` | 工厂大门放行前的内部返工 | 将返工投入和废物计入原生产批次。同一物理零件不得重复形成合格产品产出。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_batch_mass_balance` | `integrated_part_manufacturing` | 坯料投入、合格产出、在制品和库存变化 | 地磅、台秤、领料、工艺路线和放行记录 | 材料身份；合金；坯料质量；成品质量；不合格品质量；期初和期末库存；批次号；时间戳 | 经校准称量与生产记录核对 | kg | 每个生产批次 | 完整覆盖已声明报告期 | 所有范围内单元及外协步骤均与报告批次核对 | 按材料和批次汇总已接受记录，核对库存变化后除以合格成品质量 | 校准状态；批次可追溯性；放行记录；核对签署 |
| `cp_utility_and_consumable_records` | `integrated_part_manufacturing` | 电力、天然气、切削液和直接化石源二氧化碳 | 分表、供应商电表、领退料记录和燃料质量记录 | 电表起止值；电表单位；分配驱动量；切削液领用和退回；气体基准条件；碳含量；氧化率；时间戳 | 经校准电表读数与受控库房记录核对 | MJ; m3; kg | 每批次或每班次，最多按月汇总 | 完整覆盖已声明报告期 | 每个范围内设备单元、炉子和可归属辅助设备 | 扣除经核实的退料及期初期末库存，仅按已声明因果驱动量分配共用电表，再进行归一化 | 电表校准；供应商声明；领料凭证；分配工作表 |
| `cp_cleaning_bath_records` | `integrated_part_manufacturing` | 工艺用水、氢氧化钠、清洗废水和废碱液 | 水表、批次配槽单、浴液分析、排放计量和废物转移记录 | 用水量；化学品质量和浓度；浴液体积；换槽；废水量；密度；去向；批次号；时间戳 | 电表读数、受控化学品领用、浴液日志和废物转移计量 | kg; m3 | 每次补充、排放或换槽 | 完整覆盖已声明报告期 | 所有范围内水基清洗线 | 区分漂洗废水与废浴液，核对补充和排放后进行归一化 | 电表校准；化学品证书；浴液日志；转移联单 |
| `cp_waste_dispatch_records` | `integrated_part_manufacturing` | 分类金属废料和废切削油 | 容器称重、库存记录和转移联单 | 废物身份；材料牌号；毛重和皮重；库存变化；污染；去向；批次分配；时间戳 | 经校准称量和联单核对 | kg | 每个容器或每次运出 | 完整覆盖已声明报告期 | 所有范围内废物贮存和运出点 | 扣除皮重、计入已记录库存变化，仅按实测内容或可追溯批次记录分配混合批次容器 | 秤具校准；照片或成分记录；已签署转移联单 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 每个清单行 | 归一化数量 = 已接受批次数量 / 该批次放行的合格成品零件净质量 | 已接受交换数量；合格成品零件质量 | 每 1 kg 合格成品零件的交换数量 |  |
| `calc_material_reconciliation` | 每条已声明合金路线 | 坯料投入 + 期初在制品 - 期末在制品 = 合格成品零件 + 分类废料 + 其他已记录材料产出 + 已解释质量差额 | 坯料、产品、废料、其他材料产出和库存变化质量 | 批次质量平衡残差及核对状态 |  |
| `calc_fossil_co2` | 直接天然气燃烧 | 直接化石源 CO2 质量 = 可归属燃料碳质量 × 氧化率 × 44/12；燃料碳质量根据实测气量和已记录供应商组分或碳因子推导 | 天然气数量；基准条件；供应商碳含量或因子；氧化率 | 直接化石源二氧化碳 kg |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity_traceability` | 参考产品和材料投入 | 将每个报告批次追溯至零件系列、零件号或图号、版本、合金规范、坯料形式、路线和验收记录。 | 工艺路线和放行记录；材料证书；供应商记录 |
| `dq_temporal_completeness` | 所有前景交换 | 覆盖完整已声明报告期，并核算影响范围内生产的停机、开机、返工和库存变化。 | 电表完整性检查；生产日历；库存核对 |
| `dq_measurement_quality` | 电表和秤具 | 使用经校准或核验的设备，并保留单位、基准条件、校准状态和任何换算因子。 | 校准证书；电表规范；换算工作表 |
| `dq_route_specificity` | 条件清单行 | 对已声明路线逐一标明每个条件行适用或不适用，并保留判定证据。 | 工艺路线；作业指导书；浴液或炉子日志 |
| `dq_outsourced_operations` | 外协热处理或表面处理 | 保持外协产品流可见，记录其负荷是否已包含在供应商数据集中，并防止与场内行重复计算。 | 采购订单；供应商过程声明；边界核对 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `validation_identity` | 产品类别和参考流 | 数据包未识别零件系列、图样版本、材料规范、坯料形式、制造路线、表面状态、场址、期间和工厂大门状态时，判定为不合格。 | `un-cpc-3-0-structure-2025` |
| `validation_reference_mass` | 归一化 | 确认所有报告数量均归一化至合格成品零件净质量 1 kg，且可拆除包装、不合格件和在制品未计入参考产出。 |  |
| `validation_atomic_routes` | 条件清单 | 确认每项适用材料、公用工程、化学品、废物和基本交换均作为独立原子行报告；不得以合并的公用工程、材料、废物或排放类别替代具体行。 |  |
| `validation_mass_balance` | 材料流 | 将每项材料特定坯料投入与合格产品、材料特定废料、其他材料产出和库存变化进行核对；调查并披露无法解释的残差。 |  |
| `validation_energy_and_emissions` | 天然气和直接化石源二氧化碳 | 报告天然气时，必须提供其基准条件，并提供对应的直接化石源二氧化碳计算；若燃烧发生在前景边界外，则须明确记录理由。 |  |
| `validation_cleaning_streams` | 水基清洗 | 碱性清洗适用时，应区分工艺用水、氢氧化钠产品、清洗废水和废碱液，并防止漂洗水与换槽废液重复计算。 | `eu-jrc-stm-bref-2006` |
| `validation_evidence_gaps` | 候选方法使用 | 将缺失精确 UUID 和缺失独立范围证据视为已披露的候选方法限制；不得静默替换代理流或虚构数值范围。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 已声明发动机或马达成品零件的前景生产数据包 |
| downstream_use | 确认范围兼容后，用作机械、航空航天、液压、气压和反作用式发动机产品系统的从摇篮到工厂大门二手或背景数据集 |
| allowed_use | 产品身份、材料、路线、地理、技术、期间和工厂大门状态均与使用模型匹配的零件特定从摇篮到工厂大门建模 |
| excluded_use | 直接表示完整发动机或马达、涡轮喷气或涡轮螺桨发动机零件、修理或大修、无零件限定信息的通用金属产品、使用阶段性能、维护、报废或外部推断基准范围 |
| required_metadata | 规范 PCR id；零件系列；零件号和图样版本；配套主机；材料和合金；坯料状态；机加工、热处理、清洗和表面处理路线；场址和地理；生产期间；基准条件；分配驱动量；外协过程边界；UUID 缺口 |
| required_quality_disclosure | 电表和秤具覆盖；校准；批次和材料可追溯性；质量平衡残差；条件行适用性；返工；库存变化；废物去向；供应商数据代表性；未解决 UUID 和范围证据需求 |
| update_trigger | 零件系列、设计版本、材料或坯料状态、制造路线、热处理或表面处理、场址、能源供应、分配驱动量、外协边界发生变化，或新证据足以解决 UUID 或范围缺口 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | 正式指南（`official_guidance`） | 联合国统计司，《CPC 3.0 版结构》，2025-06-30，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv（检索日期 2026-09-05） | 仅用于 CPC 43251 正式产品身份和层级；不作为定量方法依据 |
| `eu-jrc-sf-bref-2024` | 正式指南（`official_guidance`） | 欧盟委员会联合研究中心，《锻造与铸造行业最佳可行技术参考文件》，2024，https://bureau-industrial-transformation.jrc.ec.europa.eu/reference/smitheries-and-foundries-industry（检索日期 2026-09-05） | 锻造或铸造坯料、加热、机加工、精整和热处理的过程分解 |
| `eu-jrc-stm-bref-2006` | 正式指南（`official_guidance`） | 欧盟委员会联合研究中心，《金属和塑料表面处理最佳可行技术参考文件》，2006-08 通过，https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/stm_bref_0806.pdf（检索日期 2026-09-05） | 条件水基清洗和表面处理边界；区分工艺用水、碱性化学品、漂洗废水和废碱液 |
| `us-epa-aerospace-neshap-2015` | 标准（`standard`） | 美国环境保护署，《航空航天制造和返修设施国家有害空气污染物排放标准最终规则》，Federal Register 80 FR 76152，2015-12-07，https://www.govinfo.gov/content/pkg/FR-2015-12-07/pdf/2015-30356.pdf（检索日期 2026-09-05） | 反作用式发动机零件路线中清洗、涂装、化学铣削、喷砂及废溶剂或涂装废物受控管理的相关性 |
