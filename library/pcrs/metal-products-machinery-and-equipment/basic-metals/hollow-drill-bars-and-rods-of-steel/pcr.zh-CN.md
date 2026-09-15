---
pcr_id: pcr.metal-products-machinery-and-equipment.basic-metals.hollow-drill-bars-and-rods-of-steel
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 钢制空心钻钢

## 1. 范围与适用性

本 PCR 适用于以直条轧制产品状态供应、适合凿岩或类似钻进用途的钢制空心钻钢的从门到门生产。产品可采用合金钢或非合金钢，横截面可为圆形、六角形或其他已声明形状。前景边界始于已声明的实心钢坯料和外购公用工程进入空心钻钢制造厂，止于 1 kg 经检验合格、未包装的空心钻钢在工厂门口交付。

进行分类控制时，声称符合第 72 章空心钻钢定义的产品必须适合钻进，其横截面最大外部尺寸应大于 15 mm 且不大于 52 mm，最大内部尺寸不得大于最大外部尺寸的一半。超出该几何边界的产品不得默认纳入。

不包括：不符合上述空心钻钢定义的无缝或焊接钢管及空心型材；油气井套管、油管和钻杆；成套钻具、钻头、连接套、钎尾及锚杆系统；实心钻杆；上游炼钢；下游使用、维护及报废；以及声明工厂门之后的运输或包装。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.basic-metals.hollow-drill-bars-and-rods-of-steel |
| classification_refs | CPC 3.0：41273，精确分类语境 |
| covered_products | 采用已声明横截面、尺寸、钢种、热处理状态、长度和表面状态的合金钢或非合金钢直条空心钻钢 |
| excluded_products | 第 72 章空心钻钢定义之外的钢管及空心型材；油气井钻杆、套管或油管；实心钻杆；成套钻具和锚固系统 |
| representative_product | 符合采购方声明的尺寸和冶金技术要求、未包装的钢制空心钻钢 |
| production_route | 接收钢坯料；适用时再加热；按声明的热加工、挤压、轧制或拉拔路线进行空心成形；适用时热处理；矫直、切断、表面精整、检验和放行 |
| market_state | 制造厂门口交付的未包装轧制定尺或切尺直条；声明几何形状、钢种、热处理、长度、表面状态和检验等级 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供适合声明钻进用途的合格钢制空心钻钢 |
| How much | 制造厂门口 1 kg 未包装合格产品净质量 |
| How well | 满足声明的钢种、横截面、内外尺寸、热处理状态、直线度、长度、表面状态和检验要求 |
| How long or cycle | 一个生产批次直至工厂门口放行；不包括使用寿命期服务 |
| reference_flow_link | 过程 `hollow_drill_steel_manufacturing` 中的 `reference_hollow_drill_steel` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 钢制空心钻杆和钻杆 `f809f600-17ff-48b3-85da-01f93dbede3c` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 钢种及合金状态；半成品坯料形态；成形路线；横截面形状；最大外部尺寸；最大内部尺寸；成品长度；热处理状态；表面状态或涂层；检验或合格规范；工厂地理位置；生产期；不含包装的边界 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | 参考产品和所有质量归一化交换 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 以合格空心钻钢的实测净质量归一化，不包括包装、可拆除垫料、氧化铁皮、切头切尾和不合格品。 |
| `geometry_declaration` | 参考产品识别 | Length | mm | 记录横截面形状及最大内外尺寸。声称符合第 72 章空心钻钢定义时，应校验外部尺寸 > 15 mm 且 <= 52 mm，内部尺寸 <= 外部尺寸的一半。 |
| `energy_conversion` | 外购电力 | Energy | MJ | 原始数据保留电表计量单位；仅以乘以 3.6 将 kWh 换算为 MJ；披露电压等级、供应地理范围以及电网或合同电力识别信息。 |
| `gas_reference_conditions` | 天然气和工业氧气 | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | 记录计量基准温度、压力、气体纯度或组成，以及体积是标准、正常还是实际工况；未经换算不得比较或汇总不同基准条件下的体积。 |
| `wastewater_mass_conversion` | 送处理废水 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 废水以体积计量时，仅使用同一水流和同一期间的实测体积及已记录的实测或有技术依据的密度计算质量。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 外购实心合金钢或非合金钢初级/半成品坯料进入首个受控制造边界，声明钢种、形态、质量、供应商和上游数据集 |
| starting_condition_role | 从门到门空心钻钢制造的外部产品输入；上游炼钢由关联的供应商或二手数据集表示，不在本前景过程中重建 |
| product_classification_scope | 符合已声明 CPC 41273 产品边界的钢制空心钻钢；采用第 72 章分类声明时应用其几何定义 |
| recursive_input_rule | 若外购输入已属于本类别的空心钻钢，则以同一参考产品流记录，在该交换处终止类别递归，并披露其数量、状态、供应商和上游数据集 |
| upstream_dataset_requirement | 钢坯料、电力、天然气、工业氧气、工艺用水以及外部废物处理或回收均应采用地理、技术、时间及产品状态具有代表性的数据集 |
| disclosure | 声明工厂地理位置和期间；合金状态及钢种；坯料形态；成形及加热路线；热处理；横截面及尺寸；成材率和不合格品去向；水循环边界；电力识别；燃料和氧气基准条件；治理系统；废水去向；以及包装或运输是否排除 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_gate_to_gate` | 全部前景建模 | 纳入从接收已声明钢坯料，经加热、空心成形、适用时热处理、矫直、切断、精整、检验，直至合格未包装产品放行的全部受控作业。 | `eu-ferrous-metals-bat-2022` |
| `boundary_utility_and_emissions` | 能源、水、残余物、废水及直接排放 | 纳入外购能源和水、直接燃料和氧气用量、金属废钢、氧化铁皮、跨边界废水，以及归属于所纳入作业的实测或计算直接大气排放。 | `eu-ferrous-metals-bat-2022` |
| `boundary_exclusions` | 上游和下游阶段 | 上游炼钢及外购供应品由关联数据集表示；排除下游配送、声明产品之外的包装、使用、维护和报废。 | `un-cpc-3-0-structure-2025`; `eu-cn-2020-1577-ch72-note-1p` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `hollow_drill_steel_manufacturing` | 空心钻钢成形与精整 | required | 始终纳入实际采用的受控从门到门作业；只有在有证据时才将条件性不存在的原子交换标为不适用 | 从已声明钢坯料到放行空心钻钢的前景制造 | 工厂门口 1 kg 合格未包装产品净质量 |

### 过程：空心钻钢成形与精整（`hollow_drill_steel_manufacturing`）

#### 输入

##### 产品流

###### 合金钢坯料（`alloy_steel_feedstock`）

仅在合金钢路线记录。该交换为进入受控过程的已声明合金钢初级或半成品形态的实测质量。

- 选定流：合金钢 `4f2d85d4-e6ed-4f74-8063-492513b93cde`
- 流属性/单位：Mass / kg
- 数量规则：合计投入该生产批次的合格合金钢坯料质量，再除以合格空心钻钢净质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_material_mass_balance`
- 来源：`eu-ferrous-metals-bat-2022`

###### 非合金钢坯料（`non_alloy_steel_feedstock`）

仅在非合金钢路线记录。该卡表示一种具体实心坯料交换，必须声明其钢种和半成品形态；其精确 Tiangong UUID 尚未解决。

- 选定流：非合金钢半成品坯料
- 流属性/单位：Mass / kg
- 数量规则：合计投入该生产批次的合格非合金钢坯料质量，再除以合格空心钻钢净质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_material_mass_balance`
- 来源：`eu-ferrous-metals-bat-2022`

###### 外购电力（`purchased_electricity`）

记录为传动、成形、热处理、精整、水系统和污染治理跨越工厂边界的外购交流电。发布前应在前景数据集中选定精确电压、地理范围和供应技术。

- 选定流：外购交流电
- 流属性/单位：Energy / MJ
- 数量规则：合计分配至所纳入作业的电表读数，按需换算为 MJ，再除以合格空心钻钢净质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_energy_and_gas_balance`
- 来源：`eu-ferrous-metals-bat-2022`

###### 原料加热用天然气（`natural_gas_for_heating`）

仅在外购气态天然气用于所纳入的再加热、中间加热或热处理设备时记录。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Volume / m3
- 数量规则：合计归属于该批次的校正计量体积，再除以合格空心钻钢净质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_energy_and_gas_balance`
- 来源：`eu-ferrous-metals-bat-2022`

###### 富氧燃烧用工业氧气（`industrial_oxygen_for_oxyfuel`）

仅在所纳入炉窑采用富氧或纯氧燃烧时记录外购工业氧气。

- 选定流：工业氧气 `bd4b0f96-2090-4806-a648-335ab20ff401`
- 流属性/单位：Volume / m3
- 数量规则：合计归属于该批次的校正外购氧气计量体积，再除以合格空心钻钢净质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_energy_and_gas_balance`
- 来源：`eu-ferrous-metals-bat-2022`

###### 工艺用水（`process_water`）

记录为除鳞、冷却、淬火、精整或污染治理跨越产品边界的补充工艺用水。内部循环水不得重复计量。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：合计进入所纳入系统的补充工艺用水质量，排除内部循环量，再除以合格空心钻钢净质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_water_balance`
- 来源：`eu-ferrous-metals-bat-2022`

##### 废物流

本 PCR 不规定废物输入。若场址使用某种回收废物作为材料输入，应新增一个单独识别的交换，不得与钢坯料合并。

##### 基本流

本 PCR 不规定基本流输入。以外购产品供应的水和氧气记录在上方，而不作为资源开采量记录。

#### 输出

##### 产品流

###### 参考空心钻钢（`reference_hollow_drill_steel`）

该合格未包装输出承载参考流。不合格件保留在废钢行中，不计入参考产品质量。

- 选定流：钢制空心钻杆和钻杆 `f809f600-17ff-48b3-85da-01f93dbede3c`
- 流属性/单位：Mass / kg
- 数量规则：实测批次质量核对后，将归一化合格产品输出设为 1 kg
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 kg 参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_material_mass_balance`
- 来源：`un-cpc-3-0-structure-2025`; `eu-cn-2020-1577-ch72-note-1p`

##### 废物流

###### 工业后钢废料（`post_industrial_steel_scrap`）

记录离开前景过程送往回收或处置的切头切尾、裁切料和不合格钢件。声明合金状态、污染情况和去向。

- 选定流：工业后钢废料 `c143745d-be4f-4d8f-b403-2dcbfe685349`
- 流属性/单位：Mass / kg
- 数量规则：合计外运工业后钢废料实测质量，再除以合格空心钻钢净质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_material_mass_balance`
- 来源：`eu-ferrous-metals-bat-2022`

###### 氧化铁皮（`mill_scale`）

将再加热、除鳞、热成形、冷却水处理或精整中收集的氧化铁皮作为独立废物交换记录。声明含水率、含油量及回收去向。

- 选定流：氧化铁皮 `aad763e2-78ab-4fcb-8a3b-8d8525c9e6ca`
- 流属性/单位：Mass / kg
- 数量规则：合计以接收状态离开前景边界的氧化铁皮实测质量，再除以合格空心钻钢净质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_material_mass_balance`
- 来源：`eu-ferrous-metals-bat-2022`

###### 送处理废水（`wastewater_to_treatment`）

记录扣除内部循环量和蒸发量后，跨越前景边界送往场内或场外处理的钢加工废水。声明组成、处理状态和去向。

- 选定流：废水 `d2d44ce1-c0f4-461d-9413-f4b33e0d200f`
- 流属性/单位：Mass / kg
- 数量规则：由实测排放质量或同期间体积和已记录密度计算质量，再除以合格空心钻钢净质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_water_balance`
- 来源：`eu-ferrous-metals-bat-2022`

##### 基本流

###### 直接化石源二氧化碳（`direct_fossil_carbon_dioxide`）

仅记录所纳入燃料燃烧或工艺碳在前景场址直接排放的化石源二氧化碳。此处不得加入上游电力排放。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：合计烟囱实测质量，或根据核对后的化石燃料碳和氧化记录计算，再除以合格空心钻钢净质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_direct_air_emissions`
- 来源：`eu-ferrous-metals-bat-2022`

###### 直接氮氧化物（`direct_nitrogen_oxides`）

将所纳入燃烧产生的一氧化氮和二氧化氮合并为以 NO2 计的 NOx 质量。不得以一氧化二氮替代；精确 Tiangong UUID 尚未解决。

- 选定流：排入空气的氮氧化物（以 NO2 计）
- 流属性/单位：Mass / kg
- 数量规则：合计符合要求的烟气监测结果或经验证的设备特定计算结果，以 NO2 计，再除以合格空心钻钢净质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_direct_air_emissions`
- 来源：`eu-ferrous-metals-bat-2022`

###### 直接颗粒物（`direct_particulate_matter`）

当粒径未单独计量时，记录所纳入加热、除鳞、磨削、轧制、精整或治理设施排入空气的总颗粒物。

- 选定流：颗粒物，粒径未特指 `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- 流属性/单位：Mass / kg
- 数量规则：合计治理后所纳入排放源的实测颗粒物质量，再除以合格空心钻钢净质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_direct_air_emissions`
- 来源：`eu-ferrous-metals-bat-2022`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide_first` | 共用计量、炉窑、精整线、水系统和治理设施 | 优先按批次、产线、设备或计量期细分。只分配无法直接归属的剩余共用量。 | `eu-ferrous-metals-bat-2022` |
| `allocation_residual_mass` | 剩余共用制造投入及排放 | 仅当相同设备和运行制度服务于实质等同的钢产品时，才按合格产品净质量分配剩余共用量；否则采用炉时、计量能源或加工坯料质量等有记录的因果驱动因素。 | `eu-ferrous-metals-bat-2022` |
| `allocation_scrap_no_credit` | 工业后钢废料和氧化铁皮 | 在前景清单中报告残余物总输出质量及去向，不计入避免负荷抵扣。任何回收抵扣或负荷应在下游系统模型中一致应用并单独披露。 | `eu-ferrous-metals-bat-2022` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_mass_balance` | `hollow_drill_steel_manufacturing` | 钢坯料、合格产品、钢废料和氧化铁皮 | 地磅单、批次秤记录、生产和质量记录、残余物外运记录 | 批次号；钢种；坯料形态；投入质量；合格产品质量；不合格质量；废钢质量；氧化铁皮质量；含水/含油基准；去向 | 采用校准质量计量，并与批次或同质生产期核对 | kg | 每批或每班，按月汇总 | 至少连续 12 个有代表性的月份；不足 12 个月的生产活动覆盖整个生产期 | 声明工厂内全部纳入的成形和精整作业 | 核对投入、合格输出、残余物、库存变化和已记录损失；按合格产品质量归一化 | 校准证书；批次追溯；质量平衡核对；去向记录；缺口说明 |
| `cp_energy_and_gas_balance` | `hollow_drill_steel_manufacturing` | 外购电力、天然气和工业氧气 | 计量表、发票、炉窑日志、生产计划 | 表计编号；期初/期末读数；单位；基准条件；燃料组成；氧气纯度；设备；运行小时；批次或生产期 | 优先采用校准直接计量；仅以有记录的因果驱动因素分配发票量 | kWh、MJ 或计量的 m3 | 连续或每班，按月汇总 | 至少连续 12 个有代表性的月份；不足 12 个月的生产活动覆盖整个生产期 | 所有纳入的生产及环境控制设备 | 扣除输出和排除用途；按第 4 节换算单位；按第 7 节分配剩余共用量；按合格产品质量归一化 | 表计校准；发票核对；能源平衡；炉窑和生产日志 |
| `cp_water_balance` | `hollow_drill_steel_manufacturing` | 补充工艺用水和废水 | 供排水表、储罐记录、实验室报告、水循环图 | 进水体积/质量；循环体积；排水体积/质量；密度；蒸发估计；水流识别；处理状态；去向 | 分别计量补充水和排水并建立水量平衡 | kg 或实测 m3 | 连续或每日，按月汇总 | 至少连续 12 个有代表性的月份；不足 12 个月的生产活动覆盖整个生产期 | 所有纳入的除鳞、冷却、淬火、精整和治理水路 | 排除内部循环量；核对进水、排水、蒸发、夹带及库存变化；将跨边界质量按合格产品质量归一化 | 表计校准；年度水量平衡；水流图；密度依据；处理和化验记录 |
| `cp_direct_air_emissions` | `hollow_drill_steel_manufacturing` | 直接化石源 CO2、NOx 和颗粒物 | 烟气监测、燃料分析、计量数据、检测报告、治理日志 | 排放源编号；污染物；浓度；流量；时长；氧基准；燃料碳；氧化依据；治理状态；运行状态；产品质量 | 有条件时采用符合要求的直接测量；否则使用核对记录进行透明的设备特定计算 | kg 污染物及辅助计量单位 | 有在线监测时连续采集，否则每个合规检测期采集；汇总至生产期 | 与生产数据相同的代表性期间，并记录异常运行 | 每个纳入的炉窑及相关机械加工或治理排放点 | 按需将浓度和烟气流量换算为质量；仅由化石碳计算 CO2；合计纳入排放源并按合格产品质量归一化 | 监测标准及校准；实验室报告；计算工作簿；排放源清单；异常运行记录 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 每个清单行 | 归一化数量 = 同期间交换量 / 合格参考产品净质量 | 交换量；合格空心钻钢质量 | 每 1 kg 参考产品的数量 |  |
| `calc_material_reconciliation` | 坯料、产品、废钢和氧化铁皮 | 将实测投入与合格产品、残余物、库存变化和单独记录的损失核对；调查差额，不得强行闭合 | 投入质量；产品质量；残余物质量；库存变化；已记录损失 | 经核对的物料平衡及数据缺口发现 | `eu-ferrous-metals-bat-2022` |
| `calc_energy_conversion` | 外购电力 | MJ = 实测 kWh × 3.6；保留原始表计值和换算过程 | kWh | MJ |  |
| `calc_wastewater_mass` | 废水 | 废水质量 = 实测体积 × 同一水流密度；组成或温度不适用时不得采用通用密度 | 体积；密度；温度；水流编号 | kg 废水 | `eu-ferrous-metals-bat-2022` |
| `calc_nox_as_no2` | 直接氮氧化物 | 按监测方法汇总 NO 和 NO2，并将总 NOx 以 NO2 计；不得以 N2O 替代 | NO；NO2；烟气流量；运行时间 | kg NOx（以 NO2 计） | `eu-ferrous-metals-bat-2022` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | 参考产品 | 批次记录必须识别钢种、合金状态、横截面、内外尺寸、长度、热处理、表面状态、合格规范和合格质量。 | 材质证明书；尺寸检验；热处理和放行记录 |
| `dq_time_alignment` | 所有交换 | 投入、输出、废物和排放数据必须覆盖同一代表性生产期；披露停产、异常运行和排除的生产活动。 | 带时间戳的表计和生产记录；覆盖期核对 |
| `dq_meter_and_balance` | 材料、能源、气体和水 | 保留校准状态，并至少每年将表计或发票与声明场址和过程边界核对。 | 校准证书；发票；年度物料、能源和水量平衡 |
| `dq_uuid_qualifiers` | 带 UUID 的流 | 数据集发布前，应验证每个 Tiangong 身份仍与流类型、分类、流属性、单位组、产品状态和必需前景限定信息相符。 | state-100 身份审查记录和数据集元数据 |
| `dq_unresolved_identity` | 非合金钢、电力和 NOx 行 | 不得发布代理 UUID。应解决精确身份，或在数据包中保留明确的未解决发现。 | 候选审核和审查处置 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | 参考流 | 确认参考 UUID、Mass 流属性、kg 单位、合格净质量及全部必需产品限定信息；排除实心杆、钢管、油气钻杆和成套钻具。 | `un-cpc-3-0-structure-2025`; `eu-cn-2020-1577-ch72-note-1p` |
| `validate_geometry` | 声称符合第 72 章空心钻钢定义的产品 | 校验产品适合钻进，最大外部尺寸 > 15 mm 且 <= 52 mm，最大内部尺寸 <= 最大外部尺寸的一半。 | `eu-cn-2020-1577-ch72-note-1p` |
| `validate_atomic_inventory` | 过程清单 | 确认每一行仅表示一个产品、废物或基本流交换；条件路线不得使用合并的公用工程、燃料、材料、废物或排放标签。 |  |
| `validate_mass_and_water_balance` | 前景记录 | 确认同期间物料和水量平衡，调查未解释差额，从跨边界总量中排除内部循环水，并将不合格钢排除在合格产品质量之外。 | `eu-ferrous-metals-bat-2022` |
| `validate_direct_emissions` | 化石源 CO2、NOx 和颗粒物 | 验证排放源覆盖、测量或计算方法、治理状态、接收环境、仅化石源 CO2 核算以及 NOx 以 NO2 计；不得以 N2O 替代 NOx。 | `eu-ferrous-metals-bat-2022` |
| `validate_range_status` | 每个重要流 | 将缺失外部范围作为明确的证据需求；不得把 BAT-AEL、单一观测值或同一出版物的多个情景转化为产品归一化经验范围。 | `eu-ferrous-metals-bat-2022` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 前景生产数据集；经审查后可作为 `secondary_dataset` 或 `background_dataset` 使用 |
| downstream_use | 用于制造厂门口已声明空心钻钢的产品系统建模；在地理范围、期间、钢种、路线和产品状态匹配时汇总到 process 或 lifecyclemodel 数据集中 |
| allowed_use | 功能单位和系统边界可采用 1 kg 未包装合格空心钻钢，且必需限定信息匹配或经过透明调整的研究 |
| excluded_use | 未经额外建模，不得直接替代油气钻杆、钢管、实心钻杆、成套钻具、自钻式锚杆系统、上游炼钢、产品使用或报废 |
| required_metadata | PCR id 和版本；参考 UUID；CPC 语境；工厂地理位置和期间；钢种及合金状态；坯料形态及上游数据集；横截面和尺寸；成形及加热路线；热处理；表面及检验状态；分配；水循环边界；电力、燃料和氧气限定信息；残余物去向；治理和排放方法；未解决身份 |
| required_quality_disclosure | 时间和场址覆盖；表计和秤校准；物料、能源和水量核对；直接数据与计算数据占比；数据缺口和替代；异常运行；质量分配；UUID 审核状态；经验范围缺失情况 |
| update_trigger | 新钢种、横截面系列、坯料形态、成形或热处理路线、工厂或电网地理位置、燃料或氧气技术、水循环边界、治理系统、残余物去向、分配方法、精确 UUID 解决或有证据支持的范围综合 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | 官方指南（`official_guidance`） | 联合国统计司，《CPC 第 3.0 版结构》，2025-06-30，官方 CSV：https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv（检索日期：2026-09-04） | CPC 41273 正式产品身份，以及与 CPC 4128 钢管、空心型材和油气钻杆的区分 |
| `eu-cn-2020-1577-ch72-note-1p` | 标准（`standard`） | 欧盟委员会实施条例 (EU) 2020/1577，合并品目表第 72 章注释 1(p)，Official Journal L 361，2020-10-30：https://eur-lex.europa.eu/eli/reg_impl/2020/1577/oj/eng/pdf（检索日期：2026-09-04） | 空心钻钢法定几何定义，以及不符合定义时归入品目 7304 的排除规则 |
| `eu-ferrous-metals-bat-2022` | 官方指南（`official_guidance`） | 欧盟委员会实施决定 (EU) 2022/2110，黑色金属加工行业最佳可行技术结论：https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32022D2110（检索日期：2026-09-04） | 热加工过程分解；坯料加热；富氧燃烧；水、能源、材料、废水、残余物、粉尘和 NOx 监测；氧化铁皮和废钢管理 |
| `china-2024-serbia-tariff-72288000` | 官方指南（`official_guidance`） | 中华人民共和国财政部，《2024年对塞尔维亚实施的协定税率表》，税则号列 72288000：https://gss.mof.gov.cn/gzdt/zhengcefabu/202406/P020240625320768010766.pdf（检索日期：2026-09-04） | 核实清单标题和类别译文所用专业中文术语“空心钻钢” |
