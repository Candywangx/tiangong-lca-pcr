---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.degras-residues-resulting-from-the-treatment-of-fatty-substances-or-animal-or-vegetable-waxes
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 脱脂残渣；处理脂肪物质或动植物蜡产生的残渣

## 1. 范围与适用性

本 PCR 仅适用于 CPC 21932 脱脂残渣，以及处理脂肪物质、动物蜡或植物蜡产生的残渣。合规前景数据包必须锁定一种确切来源残渣身份、一条有记录的设施路线、一种最终物理与质量状态、一个地域和一个研究期；不得以宽泛 CPC 标题为由混合无关残渣来源或过程。

覆盖的起始身份包括清单中具体申报的流，例如植物油中和皂脚、含油废白土、植物油脱蜡滤饼、动物脂肪熔炼分离固体、绵羊皮干法脱脂回收油脂，以及动物蜡或植物蜡精制滤饼。数据集只能启用与其来源相符的确切卡片。若实际存在清单未列出的化学身份不同的交换，则必须先新增原子卡并完成身份审查，方可声称合规；不得以兜底集合流替代。

成品食用或技术脂肪与油、成品动物蜡或植物蜡、未经处理的脂肪原料、生物柴油、乳制品、无关污泥，以及由参考残渣进一步制成的下游产品均不在范围内。原脂肪或蜡的上游生产，以及产生申报起始残渣的上游操作，不属于本前景大门，除非明确扩展边界并单独报告。大门后的运输、进一步转化、使用、回收和最终处置不在边界内。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.degras-residues-resulting-from-the-treatment-of-fatty-substances-or-animal-or-vegetable-waxes` |
| classification_refs | CPC 3.0 `21932`，脱脂残渣；处理脂肪物质或动植物蜡产生的残渣 |
| covered_products | 来自一种具体申报脂肪物质、动物蜡或植物蜡来源且采用一条有记录路线的脱脂残渣与处理残渣 |
| excluded_products | 成品脂肪、油或蜡；未经处理的脂肪原料；乳制品；生物柴油；无关残渣；下游转化产品 |
| representative_product | 按来源身份、路线、组成或质量状态及法定产品或废物状态申报的确切放行残渣产品 |
| production_route | 接收与身份控制；申报的机械、水相、溶剂、吸附、过滤、浓缩、干燥或冷却操作；放行；清洗；条件性场内废水处理 |
| market_state | 以散装或具体申报包装形式放行的工厂大门净残渣；参考质量不含包装 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 净合格 CPC 21932 脱脂残渣或处理残渣，锁定一种确切上游残渣来源、一条实际处理路线和一种放行质量状态 |
| How much | 1 kg 产品净质量；不含包装 |
| How well | 申报来源材料、产生单元操作、路线、物理状态、水分或干物质基准、适用时的残留溶剂、产品规范、污染物控制、去向及法定产品或废物状态 |
| How long or cycle | 申报研究期内放行的一个已识别生产批次或生产期 |
| reference_flow_link | `packaging_storage_release` 的输出，并通过前景质量平衡核对 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | Degras; residues resulting from the treatment of fatty substances or animal or vegetable waxes `98984fb7-e8b6-4d33-b6c7-130f38acbf15` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 确切来源残渣身份；适用时的来源动物或植物材料；产生单元操作；选定处理路线；最终物理状态；水分或干物质基准；适用时的残留溶剂；产品规范；法定产品或废物状态；地域；研究期；包装配置；共产品分配；申报大门 |

构建前景数据包时，所有必需限定信息必须在数据集元数据、过程说明、参考流备注、产品说明或等效字段中声明。缺少限定信息时，参考流不完整。

身份审计说明：天工公开参考流通过了调度提供的 state-100 Product、确切 baseName、CPC 21932、Mass、Units of mass 与 kg 门禁。但其远程 `generalComment` 错误地以“22 Dairy products...”开头。该不一致字段被拒绝作为语义证据，不得向本 PCR 引入任何乳制品含义；该瑕疵作为 manifest 审查限制保留。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 将参考量固定为 1 kg 净合格放行 CPC 21932 产品；不含包装和共产品质量。 |
| `net_mass_basis` | 材料、产品、共产品与废物卡 | Mass | kg | 在实测净质量基准上分别记录每个具名交换；当水分或干物质基准影响解释时予以披露。 |
| `water_volume` | 每个用水投入 | Volume | m3 | 从适用计量表记录每个工艺水投入，不得将水与蒸汽、冷凝液或废水合并。 |
| `electricity_energy` | 每个电力投入 | Energy | kWh | 分阶段记录电力；共用电表分配必须以运行记录为依据。 |
| `thermal_carrier_energy` | 外购蒸汽、外购热水、天然气、柴油与液化石油气 | Energy | MJ | 各载能介质必须分开，并记录能量换算基准及燃料低位热值。 |
| `solvent_mass_balance` | 正己烷路线 | Mass | kg | 对正己烷的采购、期初与期末库存、回收、产品留存、废物及分别排至空气和水体的释放进行核对。 |
| `refrigerant_mass_balance` | R717、R744 与 R290 | Mass | kg | 对每种实际制冷剂分别闭合充注、采购、回收与库存质量平衡。 |
| `pollutant_load` | 每个基本流排放 | Mass | kg | 由匹配的实测流量与浓度、直接质量测量或完整记录的活动计算，分别得到每种物质或分析参数负荷。 |
| `no_default_conversion` | 所有清单数量 | 卡片申报属性 | 卡片申报单位 | 不得将 BREF 消耗范围、BAT-AEL 或作者估算作为默认清单数量或因子。 |

## 5. 系统边界

| rule_id | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `sb_declared_residue_gate` | 前景起始大门 | 从确切申报来源残渣首次转移至本前景回收或处理系统开始；识别上游产生操作，不得静默赋予零上游负担。 | `un-cpc-3-0-retained`; `eu-pef-2021-2279` |
| `sb_route_lock` | 过程纳入 | 仅纳入申报路线设施流程图中的操作，并在整个质量平衡中保持一种确切残渣来源身份。 | `eu-fdm-bat-2019-2031`; `eu-tanning-bat-2013-84`; `eu-sa-bat-2023-2749`; `eu-pef-2021-2279` |
| `sb_upstream_separation` | 上游系统 | 原脂肪物质或蜡的生产及产生来源残渣的操作不属于本前景大门，除非研究明确扩展边界并单独报告。 | `un-cpc-3-0-retained`; `eu-pef-2021-2279` |
| `sb_downstream_exclusion` | 下游系统 | 除非申报研究范围明确增加，否则排除工厂大门后的运输、进一步转化、使用、回收与最终处置。 | `eu-pef-2021-2279` |
| `sb_internal_recovery` | 内部溶剂、水、热或材料回收 | 将内部回收作为降低净外部投入的内部转移；除非独立输出越过前景大门，否则不得建立避免产品信用。 | `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279` |
| `sb_no_unlisted_selector` | 清单完整性 | 若实际交换不在卡片中，则新增并审查一个确切原子卡；不得使用通用材料、化学品、能源、燃料、蜡、残渣、废物、排放或其他残渣选择器。 | `eu-pef-2021-2279` |

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | exact_source_residue_lot |
| starting_condition_role | 可追溯的残渣来源进入申报处理路线的大门 |
| product_classification_scope | 仅 CPC 3.0 `21932` |
| recursive_input_rule | 同一前景系统内再用的 CPC 21932 投入是内部转移；从另一系统接收的 CPC 21932 投入需要单独记录的上游数据集，不得递归再生成 |
| upstream_dataset_requirement | 识别原脂肪或蜡来源、产生残渣的单元操作、数量、质量状态、分配或负担处理、供应商或内部来源及证据 |
| disclosure | 申报确切来源残渣身份、一条路线流程图、所有启用与不适用原子卡、水分或干物质基准、法定状态、共产品、废物、排放、地域、时期与大门 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `residue_receipt_mechanical_conditioning` | 残渣接收、身份控制与机械调理 | `required` |  | foreground | 按最终参考产品归一化的质量平衡 |
| `aqueous_splitting_washing` | 水相分解、中和与洗涤 | `conditional` | 仅当申报路线采用水相酸处理、碱处理、中和或洗涤步骤时纳入。 | foreground | 按最终参考产品归一化的路线特定质量平衡 |
| `solvent_extraction_recovery` | 正己烷提取与溶剂回收 | `conditional` | 仅当申报路线使用正己烷并识别回收及排放控制系统时纳入。 | foreground | 按最终参考产品归一化的正己烷质量平衡 |
| `adsorption_filtration_concentration_cooling` | 吸附、过滤、浓缩、干燥与冷却 | `conditional` | 仅在申报的设施流程图中存在相应操作时逐项纳入。 | foreground | 按最终参考产品归一化的阶段物料与公用工程平衡 |
| `onsite_fuel_combustion` | 工艺供热的场内燃料燃烧 | `conditional` | 仅对前景边界内实际燃烧的每种燃料纳入；外购蒸汽和热水仍作为各消耗阶段的独立投入。 | foreground_utility | 按最终参考产品归一化的燃料能量与直接排放平衡 |
| `packaging_storage_release` | 包装、储存与产品放行 | `required` |  | foreground | 工厂大门处 1 kg 净合格参考产品 |
| `cleaning_sanitation` | 设备清洗与消毒 | `required` |  | foreground_support | 分配至最终参考产品的清洗批次记录 |
| `onsite_wastewater_treatment` | 场内废水处理 | `conditional` | 当前景边界内处理工艺废水时纳入；否则在产生过程中记录转移出场的确切未处理废水流。 | foreground_support | 按最终参考产品归一化的处理水与残余物平衡 |

### 过程：残渣接收、身份控制与机械调理（`residue_receipt_mechanical_conditioning`）

#### 输入

##### 产品流

###### 植物油中和皂脚投入（`vegetable_oil_neutralisation_soapstock_input`）

本卡仅记录申报路线实际使用时进入残渣接收、身份控制与机械调理的植物油中和皂脚。数量取自批次特定接收记录与校准称量记录；不得在本卡合并不同残渣、材料、化学品、水或载能介质。

- 选定流：Vegetable oil neutralisation soapstock
- 流属性/单位：Mass / kg
- 数量规则：该确切申报来源残渣身份的前景实测接收质量；不采用 PCR 默认值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21932 参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receipt_materials`
- 来源：`ec-jrc-fdm-bref-jrc118627`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### 含植物油的废白土投入（`spent_bleaching_earth_containing_vegetable_oil_input`）

本卡仅记录申报路线实际使用时进入残渣接收、身份控制与机械调理的含植物油的废白土。数量取自批次特定接收记录与校准称量记录；不得在本卡合并不同残渣、材料、化学品、水或载能介质。

- 选定流：Spent bleaching earth containing vegetable oil
- 流属性/单位：Mass / kg
- 数量规则：该确切申报来源残渣身份的前景实测接收质量；不采用 PCR 默认值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21932 参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receipt_materials`
- 来源：`ec-jrc-fdm-bref-jrc118627`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### 植物油脱蜡滤饼投入（`vegetable_oil_dewaxing_filter_cake_input`）

本卡仅记录申报路线实际使用时进入残渣接收、身份控制与机械调理的植物油脱蜡滤饼。数量取自批次特定接收记录与校准称量记录；不得在本卡合并不同残渣、材料、化学品、水或载能介质。

- 选定流：Vegetable oil dewaxing filter cake
- 流属性/单位：Mass / kg
- 数量规则：该确切申报来源残渣身份的前景实测接收质量；不采用 PCR 默认值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21932 参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receipt_materials`
- 来源：`ec-jrc-fdm-bref-jrc118627`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### 动物脂肪熔炼分离固体投入（`animal_fat_melting_separator_solids_input`）

本卡仅记录申报路线实际使用时进入残渣接收、身份控制与机械调理的动物脂肪熔炼分离固体。数量取自批次特定接收记录与校准称量记录；不得在本卡合并不同残渣、材料、化学品、水或载能介质。

- 选定流：Animal fat melting separator solids
- 流属性/单位：Mass / kg
- 数量规则：该确切申报来源残渣身份的前景实测接收质量；不采用 PCR 默认值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21932 参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receipt_materials`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-sa-bat-2023-2749`; `eu-pef-2021-2279`

###### 绵羊皮干法脱脂回收油脂投入（`sheepskin_dry_degreasing_recovered_grease_input`）

本卡仅记录申报路线实际使用时进入残渣接收、身份控制与机械调理的绵羊皮干法脱脂回收油脂。数量取自批次特定接收记录与校准称量记录；不得在本卡合并不同残渣、材料、化学品、水或载能介质。

- 选定流：Sheepskin dry-degreasing recovered grease
- 流属性/单位：Mass / kg
- 数量规则：该确切申报来源残渣身份的前景实测接收质量；不采用 PCR 默认值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21932 参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receipt_materials`
- 来源：`ec-jrc-tan-bref-jrc83005`; `eu-tanning-bat-2013-84`; `eu-pef-2021-2279`

###### 动物蜡精制滤饼投入（`animal_wax_refining_filter_cake_input`）

本卡仅记录申报路线实际使用时进入残渣接收、身份控制与机械调理的动物蜡精制滤饼。数量取自批次特定接收记录与校准称量记录；不得在本卡合并不同残渣、材料、化学品、水或载能介质。

- 选定流：Animal wax refining filter cake
- 流属性/单位：Mass / kg
- 数量规则：该确切申报来源残渣身份的前景实测接收质量；不采用 PCR 默认值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21932 参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receipt_materials`
- 来源：`un-cpc-3-0-retained`; `eu-pef-2021-2279`

###### 植物蜡精制滤饼投入（`vegetable_wax_refining_filter_cake_input`）

本卡仅记录申报路线实际使用时进入残渣接收、身份控制与机械调理的植物蜡精制滤饼。数量取自批次特定接收记录与校准称量记录；不得在本卡合并不同残渣、材料、化学品、水或载能介质。

- 选定流：Vegetable wax refining filter cake
- 流属性/单位：Mass / kg
- 数量规则：该确切申报来源残渣身份的前景实测接收质量；不采用 PCR 默认值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21932 参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receipt_materials`
- 来源：`un-cpc-3-0-retained`; `eu-pef-2021-2279`

###### 工艺水投入（`receipt_process_water_input`）

本卡仅记录申报路线实际使用时进入残渣接收、身份控制与机械调理的工艺水。数量取自校准水表读数；不得在本卡合并不同残渣、材料、化学品、水或载能介质。

- 选定流：Process water
- 流属性/单位：Volume / m3
- 数量规则：该确切用水投入的计量体积；不采用 PCR 默认值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21932 参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receipt_utilities`
- 来源：`eu-fdm-bat-2019-2031`; `eu-sa-bat-2023-2749`; `eu-pef-2021-2279`

###### 电网电力投入（`receipt_grid_electricity_input`）

本卡仅记录申报路线实际使用时进入残渣接收、身份控制与机械调理的电网电力。数量取自阶段电表、分表日志或有记录的共用电表分配；不得在本卡合并不同残渣、材料、化学品、水或载能介质。

- 选定流：Electricity, grid
- 流属性/单位：Energy / kWh
- 数量规则：该阶段的计量用电；共用电表按有记录的运行资料分配；不采用 PCR 默认值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21932 参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receipt_utilities`
- 来源：`eu-fdm-bat-2019-2031`; `eu-sa-bat-2023-2749`; `eu-pef-2021-2279`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 不合格植物油中和皂脚废物输出（`rejected_vegetable_oil_neutralisation_soapstock_output`）

本卡仅记录产生时作为独立废物流离开残渣接收、身份控制与机械调理的不合格植物油中和皂脚。数量取自废物容器称量、转移联单或有记录的质量平衡；不得与另一废物流合并。

- 选定流：Rejected vegetable oil neutralisation soapstock
- 流属性/单位：Mass / kg
- 数量规则：该确切废物流的称量或质量平衡净质量；不采用 PCR 默认值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21932 参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receipt_wastes`
- 来源：`eu-fdm-bat-2019-2031`; `eu-tanning-bat-2013-84`; `eu-sa-bat-2023-2749`; `eu-pef-2021-2279`

###### 不合格含植物油废白土废物输出（`rejected_spent_bleaching_earth_containing_vegetable_oil_output`）

本卡仅记录产生时作为独立废物流离开残渣接收、身份控制与机械调理的不合格含植物油废白土。数量取自废物容器称量、转移联单或有记录的质量平衡；不得与另一废物流合并。

- 选定流：Rejected spent bleaching earth containing vegetable oil
- 流属性/单位：Mass / kg
- 数量规则：该确切废物流的称量或质量平衡净质量；不采用 PCR 默认值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21932 参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receipt_wastes`
- 来源：`eu-fdm-bat-2019-2031`; `eu-tanning-bat-2013-84`; `eu-sa-bat-2023-2749`; `eu-pef-2021-2279`

###### 不合格植物油脱蜡滤饼废物输出（`rejected_vegetable_oil_dewaxing_filter_cake_output`）

本卡仅记录产生时作为独立废物流离开残渣接收、身份控制与机械调理的不合格植物油脱蜡滤饼。数量取自废物容器称量、转移联单或有记录的质量平衡；不得与另一废物流合并。

- 选定流：Rejected vegetable oil dewaxing filter cake
- 流属性/单位：Mass / kg
- 数量规则：该确切废物流的称量或质量平衡净质量；不采用 PCR 默认值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21932 参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receipt_wastes`
- 来源：`eu-fdm-bat-2019-2031`; `eu-tanning-bat-2013-84`; `eu-sa-bat-2023-2749`; `eu-pef-2021-2279`

###### 不合格动物脂肪熔炼分离固体废物输出（`rejected_animal_fat_melting_separator_solids_output`）

本卡仅记录产生时作为独立废物流离开残渣接收、身份控制与机械调理的不合格动物脂肪熔炼分离固体。数量取自废物容器称量、转移联单或有记录的质量平衡；不得与另一废物流合并。

- 选定流：Rejected animal fat melting separator solids
- 流属性/单位：Mass / kg
- 数量规则：该确切废物流的称量或质量平衡净质量；不采用 PCR 默认值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21932 参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receipt_wastes`
- 来源：`eu-fdm-bat-2019-2031`; `eu-tanning-bat-2013-84`; `eu-sa-bat-2023-2749`; `eu-pef-2021-2279`

###### 不合格绵羊皮干法脱脂回收油脂废物输出（`rejected_sheepskin_dry_degreasing_recovered_grease_output`）

本卡仅记录产生时作为独立废物流离开残渣接收、身份控制与机械调理的不合格绵羊皮干法脱脂回收油脂。数量取自废物容器称量、转移联单或有记录的质量平衡；不得与另一废物流合并。

- 选定流：Rejected sheepskin dry-degreasing recovered grease
- 流属性/单位：Mass / kg
- 数量规则：该确切废物流的称量或质量平衡净质量；不采用 PCR 默认值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21932 参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receipt_wastes`
- 来源：`eu-fdm-bat-2019-2031`; `eu-tanning-bat-2013-84`; `eu-sa-bat-2023-2749`; `eu-pef-2021-2279`

###### 不合格动物蜡精制滤饼废物输出（`rejected_animal_wax_refining_filter_cake_output`）

本卡仅记录产生时作为独立废物流离开残渣接收、身份控制与机械调理的不合格动物蜡精制滤饼。数量取自废物容器称量、转移联单或有记录的质量平衡；不得与另一废物流合并。

- 选定流：Rejected animal wax refining filter cake
- 流属性/单位：Mass / kg
- 数量规则：该确切废物流的称量或质量平衡净质量；不采用 PCR 默认值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21932 参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receipt_wastes`
- 来源：`eu-fdm-bat-2019-2031`; `eu-tanning-bat-2013-84`; `eu-sa-bat-2023-2749`; `eu-pef-2021-2279`

###### 不合格植物蜡精制滤饼废物输出（`rejected_vegetable_wax_refining_filter_cake_output`）

本卡仅记录产生时作为独立废物流离开残渣接收、身份控制与机械调理的不合格植物蜡精制滤饼。数量取自废物容器称量、转移联单或有记录的质量平衡；不得与另一废物流合并。

- 选定流：Rejected vegetable wax refining filter cake
- 流属性/单位：Mass / kg
- 数量规则：该确切废物流的称量或质量平衡净质量；不采用 PCR 默认值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21932 参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receipt_wastes`
- 来源：`eu-fdm-bat-2019-2031`; `eu-tanning-bat-2013-84`; `eu-sa-bat-2023-2749`; `eu-pef-2021-2279`

###### 残渣调理筛出粗固体废物输出（`screened_coarse_solids_from_residue_conditioning_output`）

本卡仅记录产生时作为独立废物流离开残渣接收、身份控制与机械调理的残渣调理筛出粗固体。数量取自废物容器称量、转移联单或有记录的质量平衡；不得与另一废物流合并。

- 选定流：Screened coarse solids from residue conditioning
- 流属性/单位：Mass / kg
- 数量规则：该确切废物流的称量或质量平衡净质量；不采用 PCR 默认值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21932 参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receipt_wastes`
- 来源：`eu-fdm-bat-2019-2031`; `eu-tanning-bat-2013-84`; `eu-sa-bat-2023-2749`; `eu-pef-2021-2279`

###### 残渣调理沉降矿物固体废物输出（`settled_mineral_solids_from_residue_conditioning_output`）

本卡仅记录产生时作为独立废物流离开残渣接收、身份控制与机械调理的残渣调理沉降矿物固体。数量取自废物容器称量、转移联单或有记录的质量平衡；不得与另一废物流合并。

- 选定流：Settled mineral solids from residue conditioning
- 流属性/单位：Mass / kg
- 数量规则：该确切废物流的称量或质量平衡净质量；不采用 PCR 默认值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21932 参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receipt_wastes`
- 来源：`eu-fdm-bat-2019-2031`; `eu-tanning-bat-2013-84`; `eu-sa-bat-2023-2749`; `eu-pef-2021-2279`

###### 残渣调理离心固体废物输出（`centrifuge_solids_from_residue_conditioning_output`）

本卡仅记录产生时作为独立废物流离开残渣接收、身份控制与机械调理的残渣调理离心固体。数量取自废物容器称量、转移联单或有记录的质量平衡；不得与另一废物流合并。

- 选定流：Centrifuge solids from residue conditioning
- 流属性/单位：Mass / kg
- 数量规则：该确切废物流的称量或质量平衡净质量；不采用 PCR 默认值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21932 参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receipt_wastes`
- 来源：`eu-fdm-bat-2019-2031`; `eu-tanning-bat-2013-84`; `eu-sa-bat-2023-2749`; `eu-pef-2021-2279`

###### 残渣调理水相废物输出（`residue_conditioning_aqueous_phase_output`）

本卡仅记录产生时作为独立废物流离开残渣接收、身份控制与机械调理的残渣调理水相。数量取自废物容器称量、转移联单或有记录的质量平衡；不得与另一废物流合并。

- 选定流：Residue-conditioning aqueous phase
- 流属性/单位：Mass / kg
- 数量规则：该确切废物流的称量或质量平衡净质量；不采用 PCR 默认值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21932 参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receipt_wastes`
- 来源：`eu-fdm-bat-2019-2031`; `eu-tanning-bat-2013-84`; `eu-sa-bat-2023-2749`; `eu-pef-2021-2279`

##### 基本流


### 过程：水相分解、中和与洗涤（`aqueous_splitting_washing`）

#### 输入

##### 产品流

###### 工艺水投入（`aqueous_process_water_input`）

本卡仅记录申报路线实际使用时进入水相分解、中和与洗涤的工艺水。数量取自校准水表读数；不得在本卡合并不同残渣、材料、化学品、水或载能介质。

- 选定流：Process water
- 流属性/单位：Volume / m3
- 数量规则：该确切用水投入的计量体积；不采用 PCR 默认值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21932 参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_aqueous_utilities`
- 来源：`ec-jrc-fdm-bref-jrc118627`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### 硫酸投入（`aqueous_sulfuric_acid_input`）

本卡仅记录申报路线实际使用时进入水相分解、中和与洗涤的硫酸。数量取自称量、接收、库存或发票记录；不得在本卡合并不同残渣、材料、化学品、水或载能介质。

- 选定流：Sulfuric acid
- 流属性/单位：Mass / kg
- 数量规则：该确切流的前景实测或发票净质量；不采用 PCR 默认值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21932 参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_aqueous_materials`
- 来源：`ec-jrc-fdm-bref-jrc118627`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### 盐酸投入（`aqueous_hydrochloric_acid_input`）

本卡仅记录申报路线实际使用时进入水相分解、中和与洗涤的盐酸。数量取自称量、接收、库存或发票记录；不得在本卡合并不同残渣、材料、化学品、水或载能介质。

- 选定流：Hydrochloric acid
- 流属性/单位：Mass / kg
- 数量规则：该确切流的前景实测或发票净质量；不采用 PCR 默认值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21932 参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_aqueous_materials`
- 来源：`ec-jrc-fdm-bref-jrc118627`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### 氢氧化钠投入（`aqueous_sodium_hydroxide_input`）

本卡仅记录申报路线实际使用时进入水相分解、中和与洗涤的氢氧化钠。数量取自称量、接收、库存或发票记录；不得在本卡合并不同残渣、材料、化学品、水或载能介质。

- 选定流：Sodium hydroxide
- 流属性/单位：Mass / kg
- 数量规则：该确切流的前景实测或发票净质量；不采用 PCR 默认值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21932 参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_aqueous_materials`
- 来源：`ec-jrc-fdm-bref-jrc118627`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### 氢氧化钙投入（`aqueous_calcium_hydroxide_input`）

本卡仅记录申报路线实际使用时进入水相分解、中和与洗涤的氢氧化钙。数量取自称量、接收、库存或发票记录；不得在本卡合并不同残渣、材料、化学品、水或载能介质。

- 选定流：Calcium hydroxide
- 流属性/单位：Mass / kg
- 数量规则：该确切流的前景实测或发票净质量；不采用 PCR 默认值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21932 参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_aqueous_materials`
- 来源：`eu-tanning-bat-2013-84`; `eu-sa-bat-2023-2749`; `eu-pef-2021-2279`

###### 氧化镁投入（`aqueous_magnesium_oxide_input`）

本卡仅记录申报路线实际使用时进入水相分解、中和与洗涤的氧化镁。数量取自称量、接收、库存或发票记录；不得在本卡合并不同残渣、材料、化学品、水或载能介质。

- 选定流：Magnesium oxide
- 流属性/单位：Mass / kg
- 数量规则：该确切流的前景实测或发票净质量；不采用 PCR 默认值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21932 参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_aqueous_materials`
- 来源：`eu-tanning-bat-2013-84`; `eu-sa-bat-2023-2749`; `eu-pef-2021-2279`

###### 碳酸钠投入（`aqueous_sodium_carbonate_input`）

本卡仅记录申报路线实际使用时进入水相分解、中和与洗涤的碳酸钠。数量取自称量、接收、库存或发票记录；不得在本卡合并不同残渣、材料、化学品、水或载能介质。

- 选定流：Sodium carbonate
- 流属性/单位：Mass / kg
- 数量规则：该确切流的前景实测或发票净质量；不采用 PCR 默认值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21932 参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_aqueous_materials`
- 来源：`eu-tanning-bat-2013-84`; `eu-sa-bat-2023-2749`; `eu-pef-2021-2279`

###### 电网电力投入（`aqueous_grid_electricity_input`）

本卡仅记录申报路线实际使用时进入水相分解、中和与洗涤的电网电力。数量取自阶段电表、分表日志或有记录的共用电表分配；不得在本卡合并不同残渣、材料、化学品、水或载能介质。

- 选定流：Electricity, grid
- 流属性/单位：Energy / kWh
- 数量规则：该阶段的计量用电；共用电表按有记录的运行资料分配；不采用 PCR 默认值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21932 参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_aqueous_utilities`
- 来源：`ec-jrc-fdm-bref-jrc118627`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### 外购蒸汽投入（`aqueous_purchased_steam_input`）

本卡仅记录申报路线实际使用时进入水相分解、中和与洗涤的外购蒸汽。数量取自载能介质特定计量表与采购记录；不得在本卡合并不同残渣、材料、化学品、水或载能介质。

- 选定流：Purchased steam
- 流属性/单位：Energy / MJ
- 数量规则：该确切外购载能介质的计量或发票交付能量；不采用 PCR 默认值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21932 参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_aqueous_utilities`
- 来源：`ec-jrc-fdm-bref-jrc118627`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### 外购热水投入（`aqueous_purchased_hot_water_input`）

本卡仅记录申报路线实际使用时进入水相分解、中和与洗涤的外购热水。数量取自载能介质特定计量表与采购记录；不得在本卡合并不同残渣、材料、化学品、水或载能介质。

- 选定流：Purchased hot water
- 流属性/单位：Energy / MJ
- 数量规则：该确切外购载能介质的计量或发票交付能量；不采用 PCR 默认值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21932 参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_aqueous_utilities`
- 来源：`ec-jrc-fdm-bref-jrc118627`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 回收脂肪酸相产品输出（`recovered_fatty_acid_phase_output`）

本卡仅记录产生时作为独立产品或共产品离开水相分解、中和与洗涤的回收脂肪酸相。数量取自校准放行秤与批次核对记录；不得与参考产品或另一输出合并。

- 选定流：Recovered fatty acid phase
- 流属性/单位：Mass / kg
- 数量规则：该确切产品或共产品的称量净质量；不采用 PCR 默认值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21932 参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_aqueous_products`
- 来源：`ec-jrc-fdm-bref-jrc118627`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### 回收中性脂肪相产品输出（`recovered_neutral_fat_phase_output`）

本卡仅记录产生时作为独立产品或共产品离开水相分解、中和与洗涤的回收中性脂肪相。数量取自校准放行秤与批次核对记录；不得与参考产品或另一输出合并。

- 选定流：Recovered neutral fat phase
- 流属性/单位：Mass / kg
- 数量规则：该确切产品或共产品的称量净质量；不采用 PCR 默认值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21932 参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_aqueous_products`
- 来源：`ec-jrc-fdm-bref-jrc118627`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

##### 废物流

###### 酸性皂脚分解废水废物输出（`acidic_soapstock_splitting_wastewater_output`）

本卡仅记录产生时作为独立废物流离开水相分解、中和与洗涤的酸性皂脚分解废水。数量取自废物容器称量、转移联单或有记录的质量平衡；不得与另一废物流合并。

- 选定流：Acidic soapstock-splitting wastewater
- 流属性/单位：Mass / kg
- 数量规则：该确切废物流的称量或质量平衡净质量；不采用 PCR 默认值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21932 参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_aqueous_wastes`
- 来源：`eu-fdm-bat-2019-2031`; `eu-sa-bat-2023-2749`; `eu-pef-2021-2279`

###### 碱性残渣洗涤废水废物输出（`alkaline_residue_washing_wastewater_output`）

本卡仅记录产生时作为独立废物流离开水相分解、中和与洗涤的碱性残渣洗涤废水。数量取自废物容器称量、转移联单或有记录的质量平衡；不得与另一废物流合并。

- 选定流：Alkaline residue-washing wastewater
- 流属性/单位：Mass / kg
- 数量规则：该确切废物流的称量或质量平衡净质量；不采用 PCR 默认值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21932 参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_aqueous_wastes`
- 来源：`eu-fdm-bat-2019-2031`; `eu-sa-bat-2023-2749`; `eu-pef-2021-2279`

###### 残渣处理中和沉淀物废物输出（`neutralisation_precipitate_from_residue_treatment_output`）

本卡仅记录产生时作为独立废物流离开水相分解、中和与洗涤的残渣处理中和沉淀物。数量取自废物容器称量、转移联单或有记录的质量平衡；不得与另一废物流合并。

- 选定流：Neutralisation precipitate from residue treatment
- 流属性/单位：Mass / kg
- 数量规则：该确切废物流的称量或质量平衡净质量；不采用 PCR 默认值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21932 参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_aqueous_wastes`
- 来源：`eu-fdm-bat-2019-2031`; `eu-sa-bat-2023-2749`; `eu-pef-2021-2279`

##### 基本流


### 过程：正己烷提取与溶剂回收（`solvent_extraction_recovery`）

#### 输入

##### 产品流

###### 正己烷投入（`solvent_n_hexane_input`）

本卡仅记录申报路线实际使用时进入正己烷提取与溶剂回收的正己烷。数量取自称量、接收、库存或发票记录；不得在本卡合并不同残渣、材料、化学品、水或载能介质。

- 选定流：n-Hexane
- 流属性/单位：Mass / kg
- 数量规则：该确切流的前景实测或发票净质量；不采用 PCR 默认值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21932 参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_solvent_materials`
- 来源：`eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### 矿物油洗涤液投入（`solvent_mineral_oil_scrubber_liquid_input`）

本卡仅记录申报路线实际使用时进入正己烷提取与溶剂回收的矿物油洗涤液。数量取自称量、接收、库存或发票记录；不得在本卡合并不同残渣、材料、化学品、水或载能介质。

- 选定流：Mineral oil scrubber liquid
- 流属性/单位：Mass / kg
- 数量规则：该确切流的前景实测或发票净质量；不采用 PCR 默认值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21932 参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_solvent_materials`
- 来源：`eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### 颗粒活性炭投入（`solvent_granular_activated_carbon_input`）

本卡仅记录申报路线实际使用时进入正己烷提取与溶剂回收的颗粒活性炭。数量取自称量、接收、库存或发票记录；不得在本卡合并不同残渣、材料、化学品、水或载能介质。

- 选定流：Granular activated carbon
- 流属性/单位：Mass / kg
- 数量规则：该确切流的前景实测或发票净质量；不采用 PCR 默认值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21932 参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_solvent_materials`
- 来源：`eu-fdm-bat-2019-2031`; `eu-sa-bat-2023-2749`; `eu-pef-2021-2279`

###### 工艺水投入（`solvent_process_water_input`）

本卡仅记录申报路线实际使用时进入正己烷提取与溶剂回收的工艺水。数量取自校准水表读数；不得在本卡合并不同残渣、材料、化学品、水或载能介质。

- 选定流：Process water
- 流属性/单位：Volume / m3
- 数量规则：该确切用水投入的计量体积；不采用 PCR 默认值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21932 参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_solvent_utilities`
- 来源：`eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### 电网电力投入（`solvent_grid_electricity_input`）

本卡仅记录申报路线实际使用时进入正己烷提取与溶剂回收的电网电力。数量取自阶段电表、分表日志或有记录的共用电表分配；不得在本卡合并不同残渣、材料、化学品、水或载能介质。

- 选定流：Electricity, grid
- 流属性/单位：Energy / kWh
- 数量规则：该阶段的计量用电；共用电表按有记录的运行资料分配；不采用 PCR 默认值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21932 参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_solvent_utilities`
- 来源：`eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### 外购蒸汽投入（`solvent_purchased_steam_input`）

本卡仅记录申报路线实际使用时进入正己烷提取与溶剂回收的外购蒸汽。数量取自载能介质特定计量表与采购记录；不得在本卡合并不同残渣、材料、化学品、水或载能介质。

- 选定流：Purchased steam
- 流属性/单位：Energy / MJ
- 数量规则：该确切外购载能介质的计量或发票交付能量；不采用 PCR 默认值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21932 参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_solvent_utilities`
- 来源：`eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### 外购热水投入（`solvent_purchased_hot_water_input`）

本卡仅记录申报路线实际使用时进入正己烷提取与溶剂回收的外购热水。数量取自载能介质特定计量表与采购记录；不得在本卡合并不同残渣、材料、化学品、水或载能介质。

- 选定流：Purchased hot water
- 流属性/单位：Energy / MJ
- 数量规则：该确切外购载能介质的计量或发票交付能量；不采用 PCR 默认值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21932 参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_solvent_utilities`
- 来源：`eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 回收正己烷产品输出（`recovered_n_hexane_output`）

本卡仅记录产生时作为独立产品或共产品离开正己烷提取与溶剂回收的回收正己烷。数量取自校准放行秤与批次核对记录；不得与参考产品或另一输出合并。

- 选定流：Recovered n-hexane
- 流属性/单位：Mass / kg
- 数量规则：该确切产品或共产品的称量净质量；不采用 PCR 默认值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21932 参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_solvent_products`
- 来源：`eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### 溶剂提取脂肪相产品输出（`solvent_extracted_fatty_phase_output`）

本卡仅记录产生时作为独立产品或共产品离开正己烷提取与溶剂回收的溶剂提取脂肪相。数量取自校准放行秤与批次核对记录；不得与参考产品或另一输出合并。

- 选定流：Solvent-extracted fatty phase
- 流属性/单位：Mass / kg
- 数量规则：该确切产品或共产品的称量净质量；不采用 PCR 默认值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21932 参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_solvent_products`
- 来源：`eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

##### 废物流

###### 正己烷蒸馏水相废物输出（`aqueous_phase_from_n_hexane_distillation_output`）

本卡仅记录产生时作为独立废物流离开正己烷提取与溶剂回收的正己烷蒸馏水相。数量取自废物容器称量、转移联单或有记录的质量平衡；不得与另一废物流合并。

- 选定流：Aqueous phase from n-hexane distillation
- 流属性/单位：Mass / kg
- 数量规则：该确切废物流的称量或质量平衡净质量；不采用 PCR 默认值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21932 参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_solvent_wastes`
- 来源：`eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### 正己烷蒸馏釜底物废物输出（`n_hexane_distillation_bottoms_output`）

本卡仅记录产生时作为独立废物流离开正己烷提取与溶剂回收的正己烷蒸馏釜底物。数量取自废物容器称量、转移联单或有记录的质量平衡；不得与另一废物流合并。

- 选定流：n-Hexane distillation bottoms
- 流属性/单位：Mass / kg
- 数量规则：该确切废物流的称量或质量平衡净质量；不采用 PCR 默认值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21932 参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_solvent_wastes`
- 来源：`eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### 正己烷蒸气控制废颗粒活性炭废物输出（`spent_granular_activated_carbon_from_n_hexane_control_output`）

本卡仅记录产生时作为独立废物流离开正己烷提取与溶剂回收的正己烷蒸气控制废颗粒活性炭。数量取自废物容器称量、转移联单或有记录的质量平衡；不得与另一废物流合并。

- 选定流：Spent granular activated carbon from n-hexane vapor control
- 流属性/单位：Mass / kg
- 数量规则：该确切废物流的称量或质量平衡净质量；不采用 PCR 默认值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21932 参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_solvent_wastes`
- 来源：`eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

##### 基本流

###### 正己烷，排放至空气基本流排放（`n_hexane_to_air_output`）

本卡仅记录该排放存在时离开正己烷提取与溶剂回收的正己烷，排放至空气。数量取自正己烷采购、回收、库存、废物与监测记录；不得合并不同物质、参数或接收环境介质。

- 选定流：n-Hexane, to air
- 流属性/单位：Mass / kg
- 数量规则：由实测溶剂平衡或直接监测计算该确切正己烷释放量；不采用 PCR 默认损失率
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21932 参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_solvent_emission_balance`
- 来源：`eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### 正己烷，排放至水体基本流排放（`n_hexane_to_water_output`）

本卡仅记录该排放存在时离开正己烷提取与溶剂回收的正己烷，排放至水体。数量取自正己烷采购、回收、库存、废物与监测记录；不得合并不同物质、参数或接收环境介质。

- 选定流：n-Hexane, to water
- 流属性/单位：Mass / kg
- 数量规则：由实测溶剂平衡或直接监测计算该确切正己烷释放量；不采用 PCR 默认损失率
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21932 参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_solvent_emission_balance`
- 来源：`eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`


### 过程：吸附、过滤、浓缩、干燥与冷却（`adsorption_filtration_concentration_cooling`）

#### 输入

##### 产品流

###### 活性白土投入（`finishing_activated_bleaching_earth_input`）

本卡仅记录申报路线实际使用时进入吸附、过滤、浓缩、干燥与冷却的活性白土。数量取自称量、接收、库存或发票记录；不得在本卡合并不同残渣、材料、化学品、水或载能介质。

- 选定流：Activated bleaching earth
- 流属性/单位：Mass / kg
- 数量规则：该确切流的前景实测或发票净质量；不采用 PCR 默认值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21932 参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_materials`
- 来源：`ec-jrc-fdm-bref-jrc118627`; `eu-fdm-bat-2019-2031`; `ec-jrc-sa-bref-jrc135916`; `eu-sa-bat-2023-2749`; `eu-pef-2021-2279`

###### 粉末活性炭投入（`finishing_powdered_activated_carbon_input`）

本卡仅记录申报路线实际使用时进入吸附、过滤、浓缩、干燥与冷却的粉末活性炭。数量取自称量、接收、库存或发票记录；不得在本卡合并不同残渣、材料、化学品、水或载能介质。

- 选定流：Powdered activated carbon
- 流属性/单位：Mass / kg
- 数量规则：该确切流的前景实测或发票净质量；不采用 PCR 默认值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21932 参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_materials`
- 来源：`ec-jrc-fdm-bref-jrc118627`; `eu-fdm-bat-2019-2031`; `ec-jrc-sa-bref-jrc135916`; `eu-sa-bat-2023-2749`; `eu-pef-2021-2279`

###### 硅藻土助滤剂投入（`finishing_diatomaceous_earth_filter_aid_input`）

本卡仅记录申报路线实际使用时进入吸附、过滤、浓缩、干燥与冷却的硅藻土助滤剂。数量取自称量、接收、库存或发票记录；不得在本卡合并不同残渣、材料、化学品、水或载能介质。

- 选定流：Diatomaceous earth filter aid
- 流属性/单位：Mass / kg
- 数量规则：该确切流的前景实测或发票净质量；不采用 PCR 默认值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21932 参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_materials`
- 来源：`ec-jrc-fdm-bref-jrc118627`; `eu-fdm-bat-2019-2031`; `ec-jrc-sa-bref-jrc135916`; `eu-sa-bat-2023-2749`; `eu-pef-2021-2279`

###### 纤维素助滤剂投入（`finishing_cellulose_filter_aid_input`）

本卡仅记录申报路线实际使用时进入吸附、过滤、浓缩、干燥与冷却的纤维素助滤剂。数量取自称量、接收、库存或发票记录；不得在本卡合并不同残渣、材料、化学品、水或载能介质。

- 选定流：Cellulose filter aid
- 流属性/单位：Mass / kg
- 数量规则：该确切流的前景实测或发票净质量；不采用 PCR 默认值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21932 参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_materials`
- 来源：`ec-jrc-fdm-bref-jrc118627`; `eu-fdm-bat-2019-2031`; `ec-jrc-sa-bref-jrc135916`; `eu-sa-bat-2023-2749`; `eu-pef-2021-2279`

###### 聚丙烯滤布投入（`finishing_polypropylene_filter_cloth_input`）

本卡仅记录申报路线实际使用时进入吸附、过滤、浓缩、干燥与冷却的聚丙烯滤布。数量取自称量、接收、库存或发票记录；不得在本卡合并不同残渣、材料、化学品、水或载能介质。

- 选定流：Polypropylene filter cloth
- 流属性/单位：Mass / kg
- 数量规则：该确切流的前景实测或发票净质量；不采用 PCR 默认值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21932 参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_materials`
- 来源：`ec-jrc-fdm-bref-jrc118627`; `eu-fdm-bat-2019-2031`; `ec-jrc-sa-bref-jrc135916`; `eu-sa-bat-2023-2749`; `eu-pef-2021-2279`

###### 工艺水投入（`finishing_process_water_input`）

本卡仅记录申报路线实际使用时进入吸附、过滤、浓缩、干燥与冷却的工艺水。数量取自校准水表读数；不得在本卡合并不同残渣、材料、化学品、水或载能介质。

- 选定流：Process water
- 流属性/单位：Volume / m3
- 数量规则：该确切用水投入的计量体积；不采用 PCR 默认值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21932 参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_utilities`
- 来源：`eu-fdm-bat-2019-2031`; `eu-sa-bat-2023-2749`; `eu-pef-2021-2279`

###### 电网电力投入（`finishing_grid_electricity_input`）

本卡仅记录申报路线实际使用时进入吸附、过滤、浓缩、干燥与冷却的电网电力。数量取自阶段电表、分表日志或有记录的共用电表分配；不得在本卡合并不同残渣、材料、化学品、水或载能介质。

- 选定流：Electricity, grid
- 流属性/单位：Energy / kWh
- 数量规则：该阶段的计量用电；共用电表按有记录的运行资料分配；不采用 PCR 默认值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21932 参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_utilities`
- 来源：`eu-fdm-bat-2019-2031`; `eu-sa-bat-2023-2749`; `eu-pef-2021-2279`

###### 外购蒸汽投入（`finishing_purchased_steam_input`）

本卡仅记录申报路线实际使用时进入吸附、过滤、浓缩、干燥与冷却的外购蒸汽。数量取自载能介质特定计量表与采购记录；不得在本卡合并不同残渣、材料、化学品、水或载能介质。

- 选定流：Purchased steam
- 流属性/单位：Energy / MJ
- 数量规则：该确切外购载能介质的计量或发票交付能量；不采用 PCR 默认值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21932 参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_utilities`
- 来源：`eu-fdm-bat-2019-2031`; `eu-sa-bat-2023-2749`; `eu-pef-2021-2279`

###### 外购热水投入（`finishing_purchased_hot_water_input`）

本卡仅记录申报路线实际使用时进入吸附、过滤、浓缩、干燥与冷却的外购热水。数量取自载能介质特定计量表与采购记录；不得在本卡合并不同残渣、材料、化学品、水或载能介质。

- 选定流：Purchased hot water
- 流属性/单位：Energy / MJ
- 数量规则：该确切外购载能介质的计量或发票交付能量；不采用 PCR 默认值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21932 参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_utilities`
- 来源：`eu-fdm-bat-2019-2031`; `eu-sa-bat-2023-2749`; `eu-pef-2021-2279`

###### 氨制冷剂（R717）投入（`finishing_ammonia_refrigerant_r717_input`）

本卡仅记录申报路线实际使用时进入吸附、过滤、浓缩、干燥与冷却的氨制冷剂（R717）。数量取自称量、接收、库存或发票记录；不得在本卡合并不同残渣、材料、化学品、水或载能介质。

- 选定流：Ammonia refrigerant (R717)
- 流属性/单位：Mass / kg
- 数量规则：该确切流的前景实测或发票净质量；不采用 PCR 默认值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21932 参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_materials`
- 来源：`eu-sa-bat-2023-2749`; `eu-pef-2021-2279`

###### 二氧化碳制冷剂（R744）投入（`finishing_carbon_dioxide_refrigerant_r744_input`）

本卡仅记录申报路线实际使用时进入吸附、过滤、浓缩、干燥与冷却的二氧化碳制冷剂（R744）。数量取自称量、接收、库存或发票记录；不得在本卡合并不同残渣、材料、化学品、水或载能介质。

- 选定流：Carbon dioxide refrigerant (R744)
- 流属性/单位：Mass / kg
- 数量规则：该确切流的前景实测或发票净质量；不采用 PCR 默认值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21932 参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_materials`
- 来源：`eu-sa-bat-2023-2749`; `eu-pef-2021-2279`

###### 丙烷制冷剂（R290）投入（`finishing_propane_refrigerant_r290_input`）

本卡仅记录申报路线实际使用时进入吸附、过滤、浓缩、干燥与冷却的丙烷制冷剂（R290）。数量取自称量、接收、库存或发票记录；不得在本卡合并不同残渣、材料、化学品、水或载能介质。

- 选定流：Propane refrigerant (R290)
- 流属性/单位：Mass / kg
- 数量规则：该确切流的前景实测或发票净质量；不采用 PCR 默认值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21932 参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_materials`
- 来源：`eu-sa-bat-2023-2749`; `eu-pef-2021-2279`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 残渣精制废活性白土废物输出（`spent_activated_bleaching_earth_from_polishing_output`）

本卡仅记录产生时作为独立废物流离开吸附、过滤、浓缩、干燥与冷却的残渣精制废活性白土。数量取自废物容器称量、转移联单或有记录的质量平衡；不得与另一废物流合并。

- 选定流：Spent activated bleaching earth from residue polishing
- 流属性/单位：Mass / kg
- 数量规则：该确切废物流的称量或质量平衡净质量；不采用 PCR 默认值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21932 参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_wastes`
- 来源：`eu-fdm-bat-2019-2031`; `eu-sa-bat-2023-2749`; `eu-pef-2021-2279`

###### 残渣精制废粉末活性炭废物输出（`spent_powdered_activated_carbon_from_polishing_output`）

本卡仅记录产生时作为独立废物流离开吸附、过滤、浓缩、干燥与冷却的残渣精制废粉末活性炭。数量取自废物容器称量、转移联单或有记录的质量平衡；不得与另一废物流合并。

- 选定流：Spent powdered activated carbon from residue polishing
- 流属性/单位：Mass / kg
- 数量规则：该确切废物流的称量或质量平衡净质量；不采用 PCR 默认值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21932 参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_wastes`
- 来源：`eu-fdm-bat-2019-2031`; `eu-sa-bat-2023-2749`; `eu-pef-2021-2279`

###### 残渣过滤废硅藻土废物输出（`spent_diatomaceous_earth_from_filtration_output`）

本卡仅记录产生时作为独立废物流离开吸附、过滤、浓缩、干燥与冷却的残渣过滤废硅藻土。数量取自废物容器称量、转移联单或有记录的质量平衡；不得与另一废物流合并。

- 选定流：Spent diatomaceous earth from residue filtration
- 流属性/单位：Mass / kg
- 数量规则：该确切废物流的称量或质量平衡净质量；不采用 PCR 默认值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21932 参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_wastes`
- 来源：`eu-fdm-bat-2019-2031`; `eu-sa-bat-2023-2749`; `eu-pef-2021-2279`

###### 残渣过滤废纤维素助滤剂废物输出（`spent_cellulose_filter_aid_from_filtration_output`）

本卡仅记录产生时作为独立废物流离开吸附、过滤、浓缩、干燥与冷却的残渣过滤废纤维素助滤剂。数量取自废物容器称量、转移联单或有记录的质量平衡；不得与另一废物流合并。

- 选定流：Spent cellulose filter aid from residue filtration
- 流属性/单位：Mass / kg
- 数量规则：该确切废物流的称量或质量平衡净质量；不采用 PCR 默认值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21932 参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_wastes`
- 来源：`eu-fdm-bat-2019-2031`; `eu-sa-bat-2023-2749`; `eu-pef-2021-2279`

###### 残渣过滤废聚丙烯滤布废物输出（`spent_polypropylene_filter_cloth_from_filtration_output`）

本卡仅记录产生时作为独立废物流离开吸附、过滤、浓缩、干燥与冷却的残渣过滤废聚丙烯滤布。数量取自废物容器称量、转移联单或有记录的质量平衡；不得与另一废物流合并。

- 选定流：Spent polypropylene filter cloth from residue filtration
- 流属性/单位：Mass / kg
- 数量规则：该确切废物流的称量或质量平衡净质量；不采用 PCR 默认值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21932 参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_wastes`
- 来源：`eu-fdm-bat-2019-2031`; `eu-sa-bat-2023-2749`; `eu-pef-2021-2279`

###### 残渣浓缩蒸发器冷凝液废物输出（`evaporator_condensate_from_residue_concentration_output`）

本卡仅记录产生时作为独立废物流离开吸附、过滤、浓缩、干燥与冷却的残渣浓缩蒸发器冷凝液。数量取自废物容器称量、转移联单或有记录的质量平衡；不得与另一废物流合并。

- 选定流：Evaporator condensate from residue concentration
- 流属性/单位：Mass / kg
- 数量规则：该确切废物流的称量或质量平衡净质量；不采用 PCR 默认值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21932 参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_wastes`
- 来源：`eu-fdm-bat-2019-2031`; `eu-sa-bat-2023-2749`; `eu-pef-2021-2279`

###### 真空泵密封水排水废物输出（`vacuum_pump_seal_water_effluent_output`）

本卡仅记录产生时作为独立废物流离开吸附、过滤、浓缩、干燥与冷却的真空泵密封水排水。数量取自废物容器称量、转移联单或有记录的质量平衡；不得与另一废物流合并。

- 选定流：Vacuum-pump seal-water effluent
- 流属性/单位：Mass / kg
- 数量规则：该确切废物流的称量或质量平衡净质量；不采用 PCR 默认值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21932 参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_wastes`
- 来源：`eu-fdm-bat-2019-2031`; `eu-sa-bat-2023-2749`; `eu-pef-2021-2279`

##### 基本流

###### 氨（R717），排放至空气基本流排放（`ammonia_r717_to_air_output`）

本卡仅记录该排放存在时离开吸附、过滤、浓缩、干燥与冷却的氨（R717），排放至空气。数量取自制冷剂维护与库存质量平衡记录；不得合并不同物质、参数或接收环境介质。

- 选定流：Ammonia (R717), to air
- 流属性/单位：Mass / kg
- 数量规则：由该确切制冷剂经核实的充注、采购、回收与库存质量平衡计算释放量；不采用 PCR 默认损失率
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21932 参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_finishing_refrigerant_balance`
- 来源：`eu-sa-bat-2023-2749`; `eu-pef-2021-2279`

###### 二氧化碳（R744），排放至空气基本流排放（`carbon_dioxide_r744_to_air_output`）

本卡仅记录该排放存在时离开吸附、过滤、浓缩、干燥与冷却的二氧化碳（R744），排放至空气。数量取自制冷剂维护与库存质量平衡记录；不得合并不同物质、参数或接收环境介质。

- 选定流：Carbon dioxide (R744), to air
- 流属性/单位：Mass / kg
- 数量规则：由该确切制冷剂经核实的充注、采购、回收与库存质量平衡计算释放量；不采用 PCR 默认损失率
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21932 参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_finishing_refrigerant_balance`
- 来源：`eu-sa-bat-2023-2749`; `eu-pef-2021-2279`

###### 丙烷（R290），排放至空气基本流排放（`propane_r290_to_air_output`）

本卡仅记录该排放存在时离开吸附、过滤、浓缩、干燥与冷却的丙烷（R290），排放至空气。数量取自制冷剂维护与库存质量平衡记录；不得合并不同物质、参数或接收环境介质。

- 选定流：Propane (R290), to air
- 流属性/单位：Mass / kg
- 数量规则：由该确切制冷剂经核实的充注、采购、回收与库存质量平衡计算释放量；不采用 PCR 默认损失率
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21932 参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_finishing_refrigerant_balance`
- 来源：`eu-sa-bat-2023-2749`; `eu-pef-2021-2279`

###### 粒径不大于 2.5 µm 的颗粒物，排放至空气基本流排放（`particulate_matter_2_5um_to_air_output`）

本卡仅记录该排放存在时离开吸附、过滤、浓缩、干燥与冷却的粒径不大于 2.5 µm 的颗粒物，排放至空气。数量取自校准排放测量与适用计算规则；不得合并不同物质、参数或接收环境介质。

- 选定流：Particulate matter, ≤2.5 µm, to air
- 流属性/单位：Mass / kg
- 数量规则：由实测流量与浓度计算负荷，或记录直接校准质量测量；不采用 PCR 默认因子
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21932 参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_finishing_air_emissions`
- 来源：`eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### 粒径 2.5–10 µm 的颗粒物，排放至空气基本流排放（`particulate_matter_2_5_10um_to_air_output`）

本卡仅记录该排放存在时离开吸附、过滤、浓缩、干燥与冷却的粒径 2.5–10 µm 的颗粒物，排放至空气。数量取自校准排放测量与适用计算规则；不得合并不同物质、参数或接收环境介质。

- 选定流：Particulate matter, 2.5–10 µm, to air
- 流属性/单位：Mass / kg
- 数量规则：由实测流量与浓度计算负荷，或记录直接校准质量测量；不采用 PCR 默认因子
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21932 参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_finishing_air_emissions`
- 来源：`eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`


### 过程：工艺供热的场内燃料燃烧（`onsite_fuel_combustion`）

#### 输入

##### 产品流

###### 天然气投入（`onsite_natural_gas_input`）

本卡仅记录申报路线实际使用时进入工艺供热的场内燃料燃烧的天然气。数量取自燃料特定计量、发票与有记录的低位热值；不得在本卡合并不同残渣、材料、化学品、水或载能介质。

- 选定流：Natural gas
- 流属性/单位：Energy / MJ
- 数量规则：该确切燃料按低位热值计的计量或发票能量；不采用 PCR 默认值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21932 参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_thermal_utilities`
- 来源：`eu-fdm-bat-2019-2031`; `eu-sa-bat-2023-2749`; `eu-pef-2021-2279`

###### 柴油投入（`onsite_diesel_fuel_input`）

本卡仅记录申报路线实际使用时进入工艺供热的场内燃料燃烧的柴油。数量取自燃料特定计量、发票与有记录的低位热值；不得在本卡合并不同残渣、材料、化学品、水或载能介质。

- 选定流：Diesel fuel
- 流属性/单位：Energy / MJ
- 数量规则：该确切燃料按低位热值计的计量或发票能量；不采用 PCR 默认值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21932 参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_thermal_utilities`
- 来源：`eu-fdm-bat-2019-2031`; `eu-sa-bat-2023-2749`; `eu-pef-2021-2279`

###### 液化石油气投入（`onsite_liquefied_petroleum_gas_input`）

本卡仅记录申报路线实际使用时进入工艺供热的场内燃料燃烧的液化石油气。数量取自燃料特定计量、发票与有记录的低位热值；不得在本卡合并不同残渣、材料、化学品、水或载能介质。

- 选定流：Liquefied petroleum gas
- 流属性/单位：Energy / MJ
- 数量规则：该确切燃料按低位热值计的计量或发票能量；不采用 PCR 默认值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21932 参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_thermal_utilities`
- 来源：`eu-fdm-bat-2019-2031`; `eu-sa-bat-2023-2749`; `eu-pef-2021-2279`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

###### 化石二氧化碳，排放至空气基本流排放（`fossil_carbon_dioxide_to_air_output`）

本卡仅记录该排放存在时离开工艺供热的场内燃料燃烧的化石二氧化碳，排放至空气。数量取自燃料记录加有记录的因子，或校准烟囱测量；不得合并不同物质、参数或接收环境介质。

- 选定流：Carbon dioxide, fossil, to air
- 流属性/单位：Mass / kg
- 数量规则：由所列燃料的实测用量和有记录的设施特定或引用因子计算，或直接测量；不采用 PCR 默认因子
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21932 参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_thermal_air_emissions`
- 来源：`eu-fdm-bat-2019-2031`; `eu-sa-bat-2023-2749`; `eu-pef-2021-2279`

###### 一氧化碳，排放至空气基本流排放（`carbon_monoxide_to_air_output`）

本卡仅记录该排放存在时离开工艺供热的场内燃料燃烧的一氧化碳，排放至空气。数量取自燃料记录加有记录的因子，或校准烟囱测量；不得合并不同物质、参数或接收环境介质。

- 选定流：Carbon monoxide, to air
- 流属性/单位：Mass / kg
- 数量规则：由所列燃料的实测用量和有记录的设施特定或引用因子计算，或直接测量；不采用 PCR 默认因子
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21932 参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_thermal_air_emissions`
- 来源：`eu-fdm-bat-2019-2031`; `eu-sa-bat-2023-2749`; `eu-pef-2021-2279`

###### 二氧化氮，排放至空气基本流排放（`nitrogen_dioxide_to_air_output`）

本卡仅记录该排放存在时离开工艺供热的场内燃料燃烧的二氧化氮，排放至空气。数量取自燃料记录加有记录的因子，或校准烟囱测量；不得合并不同物质、参数或接收环境介质。

- 选定流：Nitrogen dioxide, to air
- 流属性/单位：Mass / kg
- 数量规则：由所列燃料的实测用量和有记录的设施特定或引用因子计算，或直接测量；不采用 PCR 默认因子
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21932 参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_thermal_air_emissions`
- 来源：`eu-fdm-bat-2019-2031`; `eu-sa-bat-2023-2749`; `eu-pef-2021-2279`

###### 二氧化硫，排放至空气基本流排放（`sulfur_dioxide_to_air_output`）

本卡仅记录该排放存在时离开工艺供热的场内燃料燃烧的二氧化硫，排放至空气。数量取自燃料记录加有记录的因子，或校准烟囱测量；不得合并不同物质、参数或接收环境介质。

- 选定流：Sulfur dioxide, to air
- 流属性/单位：Mass / kg
- 数量规则：由所列燃料的实测用量和有记录的设施特定或引用因子计算，或直接测量；不采用 PCR 默认因子
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21932 参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_thermal_air_emissions`
- 来源：`eu-fdm-bat-2019-2031`; `eu-sa-bat-2023-2749`; `eu-pef-2021-2279`

###### 粒径不大于 2.5 µm 的颗粒物，排放至空气基本流排放（`combustion_particulate_matter_2_5um_to_air_output`）

本卡仅记录该排放存在时离开工艺供热的场内燃料燃烧的粒径不大于 2.5 µm 的颗粒物，排放至空气。数量取自燃料记录加有记录的因子，或校准烟囱测量；不得合并不同物质、参数或接收环境介质。

- 选定流：Particulate matter, ≤2.5 µm, to air
- 流属性/单位：Mass / kg
- 数量规则：由所列燃料的实测用量和有记录的设施特定或引用因子计算，或直接测量；不采用 PCR 默认因子
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21932 参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_thermal_air_emissions`
- 来源：`eu-fdm-bat-2019-2031`; `eu-sa-bat-2023-2749`; `eu-pef-2021-2279`

###### 粒径 2.5–10 µm 的颗粒物，排放至空气基本流排放（`combustion_particulate_matter_2_5_10um_to_air_output`）

本卡仅记录该排放存在时离开工艺供热的场内燃料燃烧的粒径 2.5–10 µm 的颗粒物，排放至空气。数量取自燃料记录加有记录的因子，或校准烟囱测量；不得合并不同物质、参数或接收环境介质。

- 选定流：Particulate matter, 2.5–10 µm, to air
- 流属性/单位：Mass / kg
- 数量规则：由所列燃料的实测用量和有记录的设施特定或引用因子计算，或直接测量；不采用 PCR 默认因子
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21932 参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_thermal_air_emissions`
- 来源：`eu-fdm-bat-2019-2031`; `eu-sa-bat-2023-2749`; `eu-pef-2021-2279`


### 过程：包装、储存与产品放行（`packaging_storage_release`）

#### 输入

##### 产品流

###### 电网电力投入（`release_grid_electricity_input`）

本卡仅记录申报路线实际使用时进入包装、储存与产品放行的电网电力。数量取自阶段电表、分表日志或有记录的共用电表分配；不得在本卡合并不同残渣、材料、化学品、水或载能介质。

- 选定流：Electricity, grid
- 流属性/单位：Energy / kWh
- 数量规则：该阶段的计量用电；共用电表按有记录的运行资料分配；不采用 PCR 默认值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21932 参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_release_utilities`
- 来源：`eu-fdm-bat-2019-2031`; `eu-sa-bat-2023-2749`; `eu-pef-2021-2279`

###### 高密度聚乙烯桶投入（`high_density_polyethylene_drum_input`）

本卡仅记录申报路线实际使用时进入包装、储存与产品放行的高密度聚乙烯桶。数量取自称量、接收、库存或发票记录；不得在本卡合并不同残渣、材料、化学品、水或载能介质。

- 选定流：High-density polyethylene drum
- 流属性/单位：Mass / kg
- 数量规则：该确切流的前景实测或发票净质量；不采用 PCR 默认值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21932 参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_release_materials`
- 来源：`eu-pef-2021-2279`; `eu-fdm-bat-2019-2031`

###### 碳钢桶投入（`carbon_steel_drum_input`）

本卡仅记录申报路线实际使用时进入包装、储存与产品放行的碳钢桶。数量取自称量、接收、库存或发票记录；不得在本卡合并不同残渣、材料、化学品、水或载能介质。

- 选定流：Carbon steel drum
- 流属性/单位：Mass / kg
- 数量规则：该确切流的前景实测或发票净质量；不采用 PCR 默认值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21932 参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_release_materials`
- 来源：`eu-pef-2021-2279`; `eu-fdm-bat-2019-2031`

###### 高密度聚乙烯中型散装容器内瓶投入（`hdpe_intermediate_bulk_container_bottle_input`）

本卡仅记录申报路线实际使用时进入包装、储存与产品放行的高密度聚乙烯中型散装容器内瓶。数量取自称量、接收、库存或发票记录；不得在本卡合并不同残渣、材料、化学品、水或载能介质。

- 选定流：High-density polyethylene intermediate bulk-container bottle
- 流属性/单位：Mass / kg
- 数量规则：该确切流的前景实测或发票净质量；不采用 PCR 默认值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21932 参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_release_materials`
- 来源：`eu-pef-2021-2279`; `eu-fdm-bat-2019-2031`

###### 碳钢中型散装容器外框投入（`steel_intermediate_bulk_container_cage_input`）

本卡仅记录申报路线实际使用时进入包装、储存与产品放行的碳钢中型散装容器外框。数量取自称量、接收、库存或发票记录；不得在本卡合并不同残渣、材料、化学品、水或载能介质。

- 选定流：Carbon steel intermediate bulk-container cage
- 流属性/单位：Mass / kg
- 数量规则：该确切流的前景实测或发票净质量；不采用 PCR 默认值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21932 参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_release_materials`
- 来源：`eu-pef-2021-2279`; `eu-fdm-bat-2019-2031`

###### 聚丙烯柔性中型散装容器投入（`polypropylene_flexible_intermediate_bulk_container_input`）

本卡仅记录申报路线实际使用时进入包装、储存与产品放行的聚丙烯柔性中型散装容器。数量取自称量、接收、库存或发票记录；不得在本卡合并不同残渣、材料、化学品、水或载能介质。

- 选定流：Polypropylene flexible intermediate bulk container
- 流属性/单位：Mass / kg
- 数量规则：该确切流的前景实测或发票净质量；不采用 PCR 默认值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21932 参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_release_materials`
- 来源：`eu-pef-2021-2279`; `eu-fdm-bat-2019-2031`

###### 低密度聚乙烯内衬袋投入（`low_density_polyethylene_liner_input`）

本卡仅记录申报路线实际使用时进入包装、储存与产品放行的低密度聚乙烯内衬袋。数量取自称量、接收、库存或发票记录；不得在本卡合并不同残渣、材料、化学品、水或载能介质。

- 选定流：Low-density polyethylene liner
- 流属性/单位：Mass / kg
- 数量规则：该确切流的前景实测或发票净质量；不采用 PCR 默认值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21932 参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_release_materials`
- 来源：`eu-pef-2021-2279`; `eu-fdm-bat-2019-2031`

###### 牛皮纸袋投入（`kraft_paper_sack_input`）

本卡仅记录申报路线实际使用时进入包装、储存与产品放行的牛皮纸袋。数量取自称量、接收、库存或发票记录；不得在本卡合并不同残渣、材料、化学品、水或载能介质。

- 选定流：Kraft paper sack
- 流属性/单位：Mass / kg
- 数量规则：该确切流的前景实测或发票净质量；不采用 PCR 默认值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21932 参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_release_materials`
- 来源：`eu-pef-2021-2279`; `eu-fdm-bat-2019-2031`

###### 木托盘投入（`wood_pallet_input`）

本卡仅记录申报路线实际使用时进入包装、储存与产品放行的木托盘。数量取自称量、接收、库存或发票记录；不得在本卡合并不同残渣、材料、化学品、水或载能介质。

- 选定流：Wood pallet
- 流属性/单位：Mass / kg
- 数量规则：该确切流的前景实测或发票净质量；不采用 PCR 默认值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21932 参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_release_materials`
- 来源：`eu-pef-2021-2279`; `eu-fdm-bat-2019-2031`

###### 低密度聚乙烯缠绕膜投入（`low_density_polyethylene_stretch_film_input`）

本卡仅记录申报路线实际使用时进入包装、储存与产品放行的低密度聚乙烯缠绕膜。数量取自称量、接收、库存或发票记录；不得在本卡合并不同残渣、材料、化学品、水或载能介质。

- 选定流：Low-density polyethylene stretch film
- 流属性/单位：Mass / kg
- 数量规则：该确切流的前景实测或发票净质量；不采用 PCR 默认值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21932 参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_release_materials`
- 来源：`eu-pef-2021-2279`; `eu-fdm-bat-2019-2031`

###### 纸质压敏标签投入（`paper_pressure_sensitive_label_input`）

本卡仅记录申报路线实际使用时进入包装、储存与产品放行的纸质压敏标签。数量取自称量、接收、库存或发票记录；不得在本卡合并不同残渣、材料、化学品、水或载能介质。

- 选定流：Paper pressure-sensitive label
- 流属性/单位：Mass / kg
- 数量规则：该确切流的前景实测或发票净质量；不采用 PCR 默认值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21932 参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_release_materials`
- 来源：`eu-pef-2021-2279`; `eu-fdm-bat-2019-2031`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 净合格 CPC 21932 参考产品（`reference_cpc21932_product_output`）

本卡仅记录在申报工厂大门处离开包装、储存与产品放行的净合格 CPC 21932 参考产品。数量取自与放行秤记录核对的固定参考定义；不得计入包装质量或共产品质量。

- 选定流：Degras; residues resulting from the treatment of fatty substances or animal or vegetable waxes `98984fb7-e8b6-4d33-b6c7-130f38acbf15`
- 流属性/单位：Mass / kg
- 数量规则：放行时恰为 1 kg 净合格 CPC 21932 产品；包装不计入
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21932 参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：来源规则（`source_rule`）
- 采集协议：`cp_release_reference_product`
- 来源：`un-cpc-3-0-retained`; `eu-pef-2021-2279`

##### 废物流

###### 不合格 CPC 21932 脱脂残渣废物输出（`off_specification_cpc21932_degras_residue_output`）

本卡仅记录产生时作为独立废物流离开包装、储存与产品放行的不合格 CPC 21932 脱脂残渣。数量取自废物容器称量、转移联单或有记录的质量平衡；不得与另一废物流合并。

- 选定流：Off-specification CPC 21932 degras residue
- 流属性/单位：Mass / kg
- 数量规则：该确切废物流的称量或质量平衡净质量；不采用 PCR 默认值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21932 参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_release_wastes`
- 来源：`eu-pef-2021-2279`; `eu-fdm-bat-2019-2031`

###### 高密度聚乙烯桶废料废物输出（`high_density_polyethylene_drum_scrap_output`）

本卡仅记录产生时作为独立废物流离开包装、储存与产品放行的高密度聚乙烯桶废料。数量取自废物容器称量、转移联单或有记录的质量平衡；不得与另一废物流合并。

- 选定流：High-density polyethylene drum scrap
- 流属性/单位：Mass / kg
- 数量规则：该确切废物流的称量或质量平衡净质量；不采用 PCR 默认值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21932 参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_release_wastes`
- 来源：`eu-pef-2021-2279`; `eu-fdm-bat-2019-2031`

###### 碳钢桶废料废物输出（`carbon_steel_drum_scrap_output`）

本卡仅记录产生时作为独立废物流离开包装、储存与产品放行的碳钢桶废料。数量取自废物容器称量、转移联单或有记录的质量平衡；不得与另一废物流合并。

- 选定流：Carbon steel drum scrap
- 流属性/单位：Mass / kg
- 数量规则：该确切废物流的称量或质量平衡净质量；不采用 PCR 默认值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21932 参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_release_wastes`
- 来源：`eu-pef-2021-2279`; `eu-fdm-bat-2019-2031`

###### 高密度聚乙烯中型散装容器内瓶废料废物输出（`hdpe_intermediate_bulk_container_bottle_scrap_output`）

本卡仅记录产生时作为独立废物流离开包装、储存与产品放行的高密度聚乙烯中型散装容器内瓶废料。数量取自废物容器称量、转移联单或有记录的质量平衡；不得与另一废物流合并。

- 选定流：High-density polyethylene intermediate bulk-container bottle scrap
- 流属性/单位：Mass / kg
- 数量规则：该确切废物流的称量或质量平衡净质量；不采用 PCR 默认值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21932 参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_release_wastes`
- 来源：`eu-pef-2021-2279`; `eu-fdm-bat-2019-2031`

###### 碳钢中型散装容器外框废料废物输出（`steel_intermediate_bulk_container_cage_scrap_output`）

本卡仅记录产生时作为独立废物流离开包装、储存与产品放行的碳钢中型散装容器外框废料。数量取自废物容器称量、转移联单或有记录的质量平衡；不得与另一废物流合并。

- 选定流：Carbon steel intermediate bulk-container cage scrap
- 流属性/单位：Mass / kg
- 数量规则：该确切废物流的称量或质量平衡净质量；不采用 PCR 默认值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21932 参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_release_wastes`
- 来源：`eu-pef-2021-2279`; `eu-fdm-bat-2019-2031`

###### 聚丙烯柔性中型散装容器废料废物输出（`polypropylene_flexible_intermediate_bulk_container_scrap_output`）

本卡仅记录产生时作为独立废物流离开包装、储存与产品放行的聚丙烯柔性中型散装容器废料。数量取自废物容器称量、转移联单或有记录的质量平衡；不得与另一废物流合并。

- 选定流：Polypropylene flexible intermediate bulk-container scrap
- 流属性/单位：Mass / kg
- 数量规则：该确切废物流的称量或质量平衡净质量；不采用 PCR 默认值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21932 参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_release_wastes`
- 来源：`eu-pef-2021-2279`; `eu-fdm-bat-2019-2031`

###### 低密度聚乙烯内衬袋废料废物输出（`low_density_polyethylene_liner_scrap_output`）

本卡仅记录产生时作为独立废物流离开包装、储存与产品放行的低密度聚乙烯内衬袋废料。数量取自废物容器称量、转移联单或有记录的质量平衡；不得与另一废物流合并。

- 选定流：Low-density polyethylene liner scrap
- 流属性/单位：Mass / kg
- 数量规则：该确切废物流的称量或质量平衡净质量；不采用 PCR 默认值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21932 参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_release_wastes`
- 来源：`eu-pef-2021-2279`; `eu-fdm-bat-2019-2031`

###### 牛皮纸袋废料废物输出（`kraft_paper_sack_scrap_output`）

本卡仅记录产生时作为独立废物流离开包装、储存与产品放行的牛皮纸袋废料。数量取自废物容器称量、转移联单或有记录的质量平衡；不得与另一废物流合并。

- 选定流：Kraft paper sack scrap
- 流属性/单位：Mass / kg
- 数量规则：该确切废物流的称量或质量平衡净质量；不采用 PCR 默认值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21932 参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_release_wastes`
- 来源：`eu-pef-2021-2279`; `eu-fdm-bat-2019-2031`

###### 破损木托盘废物输出（`broken_wood_pallet_output`）

本卡仅记录产生时作为独立废物流离开包装、储存与产品放行的破损木托盘。数量取自废物容器称量、转移联单或有记录的质量平衡；不得与另一废物流合并。

- 选定流：Broken wood pallet
- 流属性/单位：Mass / kg
- 数量规则：该确切废物流的称量或质量平衡净质量；不采用 PCR 默认值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21932 参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_release_wastes`
- 来源：`eu-pef-2021-2279`; `eu-fdm-bat-2019-2031`

###### 低密度聚乙烯缠绕膜废料废物输出（`low_density_polyethylene_stretch_film_scrap_output`）

本卡仅记录产生时作为独立废物流离开包装、储存与产品放行的低密度聚乙烯缠绕膜废料。数量取自废物容器称量、转移联单或有记录的质量平衡；不得与另一废物流合并。

- 选定流：Low-density polyethylene stretch-film scrap
- 流属性/单位：Mass / kg
- 数量规则：该确切废物流的称量或质量平衡净质量；不采用 PCR 默认值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21932 参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_release_wastes`
- 来源：`eu-pef-2021-2279`; `eu-fdm-bat-2019-2031`

###### 纸标签底纸废料废物输出（`paper_label_backing_scrap_output`）

本卡仅记录产生时作为独立废物流离开包装、储存与产品放行的纸标签底纸废料。数量取自废物容器称量、转移联单或有记录的质量平衡；不得与另一废物流合并。

- 选定流：Paper label backing scrap
- 流属性/单位：Mass / kg
- 数量规则：该确切废物流的称量或质量平衡净质量；不采用 PCR 默认值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21932 参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_release_wastes`
- 来源：`eu-pef-2021-2279`; `eu-fdm-bat-2019-2031`

##### 基本流


### 过程：设备清洗与消毒（`cleaning_sanitation`）

#### 输入

##### 产品流

###### 工艺水投入（`sanitation_process_water_input`）

本卡仅记录申报路线实际使用时进入设备清洗与消毒的工艺水。数量取自校准水表读数；不得在本卡合并不同残渣、材料、化学品、水或载能介质。

- 选定流：Process water
- 流属性/单位：Volume / m3
- 数量规则：该确切用水投入的计量体积；不采用 PCR 默认值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21932 参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation_utilities`
- 来源：`eu-fdm-bat-2019-2031`; `eu-tanning-bat-2013-84`; `eu-sa-bat-2023-2749`; `eu-pef-2021-2279`

###### 氢氧化钠投入（`sanitation_sodium_hydroxide_input`）

本卡仅记录申报路线实际使用时进入设备清洗与消毒的氢氧化钠。数量取自称量、接收、库存或发票记录；不得在本卡合并不同残渣、材料、化学品、水或载能介质。

- 选定流：Sodium hydroxide
- 流属性/单位：Mass / kg
- 数量规则：该确切流的前景实测或发票净质量；不采用 PCR 默认值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21932 参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation_materials`
- 来源：`ec-jrc-fdm-bref-jrc118627`; `eu-fdm-bat-2019-2031`; `ec-jrc-tan-bref-jrc83005`; `eu-tanning-bat-2013-84`; `ec-jrc-sa-bref-jrc135916`; `eu-sa-bat-2023-2749`; `eu-pef-2021-2279`

###### 硝酸投入（`sanitation_nitric_acid_input`）

本卡仅记录申报路线实际使用时进入设备清洗与消毒的硝酸。数量取自称量、接收、库存或发票记录；不得在本卡合并不同残渣、材料、化学品、水或载能介质。

- 选定流：Nitric acid
- 流属性/单位：Mass / kg
- 数量规则：该确切流的前景实测或发票净质量；不采用 PCR 默认值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21932 参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation_materials`
- 来源：`ec-jrc-fdm-bref-jrc118627`; `eu-fdm-bat-2019-2031`; `ec-jrc-tan-bref-jrc83005`; `eu-tanning-bat-2013-84`; `ec-jrc-sa-bref-jrc135916`; `eu-sa-bat-2023-2749`; `eu-pef-2021-2279`

###### 磷酸投入（`sanitation_phosphoric_acid_input`）

本卡仅记录申报路线实际使用时进入设备清洗与消毒的磷酸。数量取自称量、接收、库存或发票记录；不得在本卡合并不同残渣、材料、化学品、水或载能介质。

- 选定流：Phosphoric acid
- 流属性/单位：Mass / kg
- 数量规则：该确切流的前景实测或发票净质量；不采用 PCR 默认值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21932 参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation_materials`
- 来源：`ec-jrc-fdm-bref-jrc118627`; `eu-fdm-bat-2019-2031`; `ec-jrc-tan-bref-jrc83005`; `eu-tanning-bat-2013-84`; `ec-jrc-sa-bref-jrc135916`; `eu-sa-bat-2023-2749`; `eu-pef-2021-2279`

###### 过氧乙酸投入（`sanitation_peracetic_acid_input`）

本卡仅记录申报路线实际使用时进入设备清洗与消毒的过氧乙酸。数量取自称量、接收、库存或发票记录；不得在本卡合并不同残渣、材料、化学品、水或载能介质。

- 选定流：Peracetic acid
- 流属性/单位：Mass / kg
- 数量规则：该确切流的前景实测或发票净质量；不采用 PCR 默认值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21932 参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation_materials`
- 来源：`ec-jrc-fdm-bref-jrc118627`; `eu-fdm-bat-2019-2031`; `ec-jrc-tan-bref-jrc83005`; `eu-tanning-bat-2013-84`; `ec-jrc-sa-bref-jrc135916`; `eu-sa-bat-2023-2749`; `eu-pef-2021-2279`

###### 过氧化氢投入（`sanitation_hydrogen_peroxide_input`）

本卡仅记录申报路线实际使用时进入设备清洗与消毒的过氧化氢。数量取自称量、接收、库存或发票记录；不得在本卡合并不同残渣、材料、化学品、水或载能介质。

- 选定流：Hydrogen peroxide
- 流属性/单位：Mass / kg
- 数量规则：该确切流的前景实测或发票净质量；不采用 PCR 默认值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21932 参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation_materials`
- 来源：`ec-jrc-fdm-bref-jrc118627`; `eu-fdm-bat-2019-2031`; `ec-jrc-tan-bref-jrc83005`; `eu-tanning-bat-2013-84`; `ec-jrc-sa-bref-jrc135916`; `eu-sa-bat-2023-2749`; `eu-pef-2021-2279`

###### 电网电力投入（`sanitation_grid_electricity_input`）

本卡仅记录申报路线实际使用时进入设备清洗与消毒的电网电力。数量取自阶段电表、分表日志或有记录的共用电表分配；不得在本卡合并不同残渣、材料、化学品、水或载能介质。

- 选定流：Electricity, grid
- 流属性/单位：Energy / kWh
- 数量规则：该阶段的计量用电；共用电表按有记录的运行资料分配；不采用 PCR 默认值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21932 参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation_utilities`
- 来源：`eu-fdm-bat-2019-2031`; `eu-tanning-bat-2013-84`; `eu-sa-bat-2023-2749`; `eu-pef-2021-2279`

###### 外购蒸汽投入（`sanitation_purchased_steam_input`）

本卡仅记录申报路线实际使用时进入设备清洗与消毒的外购蒸汽。数量取自载能介质特定计量表与采购记录；不得在本卡合并不同残渣、材料、化学品、水或载能介质。

- 选定流：Purchased steam
- 流属性/单位：Energy / MJ
- 数量规则：该确切外购载能介质的计量或发票交付能量；不采用 PCR 默认值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21932 参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation_utilities`
- 来源：`eu-fdm-bat-2019-2031`; `eu-tanning-bat-2013-84`; `eu-sa-bat-2023-2749`; `eu-pef-2021-2279`

###### 外购热水投入（`sanitation_purchased_hot_water_input`）

本卡仅记录申报路线实际使用时进入设备清洗与消毒的外购热水。数量取自载能介质特定计量表与采购记录；不得在本卡合并不同残渣、材料、化学品、水或载能介质。

- 选定流：Purchased hot water
- 流属性/单位：Energy / MJ
- 数量规则：该确切外购载能介质的计量或发票交付能量；不采用 PCR 默认值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21932 参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation_utilities`
- 来源：`eu-fdm-bat-2019-2031`; `eu-tanning-bat-2013-84`; `eu-sa-bat-2023-2749`; `eu-pef-2021-2279`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 碱性设备清洗废水废物输出（`alkaline_equipment_cleaning_wastewater_output`）

本卡仅记录产生时作为独立废物流离开设备清洗与消毒的碱性设备清洗废水。数量取自废物容器称量、转移联单或有记录的质量平衡；不得与另一废物流合并。

- 选定流：Alkaline equipment-cleaning wastewater
- 流属性/单位：Mass / kg
- 数量规则：该确切废物流的称量或质量平衡净质量；不采用 PCR 默认值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21932 参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation_wastes`
- 来源：`eu-fdm-bat-2019-2031`; `eu-tanning-bat-2013-84`; `eu-sa-bat-2023-2749`; `eu-pef-2021-2279`

###### 硝酸设备清洗废水废物输出（`nitric_acid_equipment_cleaning_wastewater_output`）

本卡仅记录产生时作为独立废物流离开设备清洗与消毒的硝酸设备清洗废水。数量取自废物容器称量、转移联单或有记录的质量平衡；不得与另一废物流合并。

- 选定流：Nitric-acid equipment-cleaning wastewater
- 流属性/单位：Mass / kg
- 数量规则：该确切废物流的称量或质量平衡净质量；不采用 PCR 默认值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21932 参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation_wastes`
- 来源：`eu-fdm-bat-2019-2031`; `eu-tanning-bat-2013-84`; `eu-sa-bat-2023-2749`; `eu-pef-2021-2279`

###### 磷酸设备清洗废水废物输出（`phosphoric_acid_equipment_cleaning_wastewater_output`）

本卡仅记录产生时作为独立废物流离开设备清洗与消毒的磷酸设备清洗废水。数量取自废物容器称量、转移联单或有记录的质量平衡；不得与另一废物流合并。

- 选定流：Phosphoric-acid equipment-cleaning wastewater
- 流属性/单位：Mass / kg
- 数量规则：该确切废物流的称量或质量平衡净质量；不采用 PCR 默认值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21932 参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation_wastes`
- 来源：`eu-fdm-bat-2019-2031`; `eu-tanning-bat-2013-84`; `eu-sa-bat-2023-2749`; `eu-pef-2021-2279`

###### 过氧乙酸设备消毒废水废物输出（`peracetic_acid_equipment_disinfection_wastewater_output`）

本卡仅记录产生时作为独立废物流离开设备清洗与消毒的过氧乙酸设备消毒废水。数量取自废物容器称量、转移联单或有记录的质量平衡；不得与另一废物流合并。

- 选定流：Peracetic-acid equipment-disinfection wastewater
- 流属性/单位：Mass / kg
- 数量规则：该确切废物流的称量或质量平衡净质量；不采用 PCR 默认值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21932 参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation_wastes`
- 来源：`eu-fdm-bat-2019-2031`; `eu-tanning-bat-2013-84`; `eu-sa-bat-2023-2749`; `eu-pef-2021-2279`

###### 设备最终漂洗废水废物输出（`final_equipment_rinse_wastewater_output`）

本卡仅记录产生时作为独立废物流离开设备清洗与消毒的设备最终漂洗废水。数量取自废物容器称量、转移联单或有记录的质量平衡；不得与另一废物流合并。

- 选定流：Final equipment-rinse wastewater
- 流属性/单位：Mass / kg
- 数量规则：该确切废物流的称量或质量平衡净质量；不采用 PCR 默认值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21932 参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation_wastes`
- 来源：`eu-fdm-bat-2019-2031`; `eu-tanning-bat-2013-84`; `eu-sa-bat-2023-2749`; `eu-pef-2021-2279`

##### 基本流


### 过程：场内废水处理（`onsite_wastewater_treatment`）

#### 输入

##### 产品流

###### 电网电力投入（`wwt_grid_electricity_input`）

本卡仅记录申报路线实际使用时进入场内废水处理的电网电力。数量取自阶段电表、分表日志或有记录的共用电表分配；不得在本卡合并不同残渣、材料、化学品、水或载能介质。

- 选定流：Electricity, grid
- 流属性/单位：Energy / kWh
- 数量规则：该阶段的计量用电；共用电表按有记录的运行资料分配；不采用 PCR 默认值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21932 参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wwt_utilities`
- 来源：`eu-fdm-bat-2019-2031`; `eu-tanning-bat-2013-84`; `eu-sa-bat-2023-2749`; `eu-pef-2021-2279`

###### 工艺水投入（`wwt_process_water_input`）

本卡仅记录申报路线实际使用时进入场内废水处理的工艺水。数量取自校准水表读数；不得在本卡合并不同残渣、材料、化学品、水或载能介质。

- 选定流：Process water
- 流属性/单位：Volume / m3
- 数量规则：该确切用水投入的计量体积；不采用 PCR 默认值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21932 参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wwt_utilities`
- 来源：`eu-fdm-bat-2019-2031`; `eu-tanning-bat-2013-84`; `eu-sa-bat-2023-2749`; `eu-pef-2021-2279`

###### 氯化铁投入（`wwt_ferric_chloride_input`）

本卡仅记录申报路线实际使用时进入场内废水处理的氯化铁。数量取自称量、接收、库存或发票记录；不得在本卡合并不同残渣、材料、化学品、水或载能介质。

- 选定流：Ferric chloride
- 流属性/单位：Mass / kg
- 数量规则：该确切流的前景实测或发票净质量；不采用 PCR 默认值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21932 参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wwt_materials`
- 来源：`eu-fdm-bat-2019-2031`; `eu-tanning-bat-2013-84`; `eu-sa-bat-2023-2749`; `eu-pef-2021-2279`

###### 硫酸铝投入（`wwt_aluminium_sulfate_input`）

本卡仅记录申报路线实际使用时进入场内废水处理的硫酸铝。数量取自称量、接收、库存或发票记录；不得在本卡合并不同残渣、材料、化学品、水或载能介质。

- 选定流：Aluminium sulfate
- 流属性/单位：Mass / kg
- 数量规则：该确切流的前景实测或发票净质量；不采用 PCR 默认值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21932 参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wwt_materials`
- 来源：`eu-fdm-bat-2019-2031`; `eu-tanning-bat-2013-84`; `eu-sa-bat-2023-2749`; `eu-pef-2021-2279`

###### 氢氧化钙投入（`wwt_calcium_hydroxide_input`）

本卡仅记录申报路线实际使用时进入场内废水处理的氢氧化钙。数量取自称量、接收、库存或发票记录；不得在本卡合并不同残渣、材料、化学品、水或载能介质。

- 选定流：Calcium hydroxide
- 流属性/单位：Mass / kg
- 数量规则：该确切流的前景实测或发票净质量；不采用 PCR 默认值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21932 参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wwt_materials`
- 来源：`eu-fdm-bat-2019-2031`; `eu-tanning-bat-2013-84`; `eu-sa-bat-2023-2749`; `eu-pef-2021-2279`

###### 氢氧化钠投入（`wwt_sodium_hydroxide_input`）

本卡仅记录申报路线实际使用时进入场内废水处理的氢氧化钠。数量取自称量、接收、库存或发票记录；不得在本卡合并不同残渣、材料、化学品、水或载能介质。

- 选定流：Sodium hydroxide
- 流属性/单位：Mass / kg
- 数量规则：该确切流的前景实测或发票净质量；不采用 PCR 默认值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21932 参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wwt_materials`
- 来源：`eu-fdm-bat-2019-2031`; `eu-tanning-bat-2013-84`; `eu-sa-bat-2023-2749`; `eu-pef-2021-2279`

###### 硫酸投入（`wwt_sulfuric_acid_input`）

本卡仅记录申报路线实际使用时进入场内废水处理的硫酸。数量取自称量、接收、库存或发票记录；不得在本卡合并不同残渣、材料、化学品、水或载能介质。

- 选定流：Sulfuric acid
- 流属性/单位：Mass / kg
- 数量规则：该确切流的前景实测或发票净质量；不采用 PCR 默认值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21932 参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wwt_materials`
- 来源：`eu-fdm-bat-2019-2031`; `eu-tanning-bat-2013-84`; `eu-sa-bat-2023-2749`; `eu-pef-2021-2279`

###### 碳酸钠投入（`wwt_sodium_carbonate_input`）

本卡仅记录申报路线实际使用时进入场内废水处理的碳酸钠。数量取自称量、接收、库存或发票记录；不得在本卡合并不同残渣、材料、化学品、水或载能介质。

- 选定流：Sodium carbonate
- 流属性/单位：Mass / kg
- 数量规则：该确切流的前景实测或发票净质量；不采用 PCR 默认值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21932 参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wwt_materials`
- 来源：`eu-fdm-bat-2019-2031`; `eu-tanning-bat-2013-84`; `eu-sa-bat-2023-2749`; `eu-pef-2021-2279`

###### 阴离子聚丙烯酰胺投入（`wwt_anionic_polyacrylamide_input`）

本卡仅记录申报路线实际使用时进入场内废水处理的阴离子聚丙烯酰胺。数量取自称量、接收、库存或发票记录；不得在本卡合并不同残渣、材料、化学品、水或载能介质。

- 选定流：Anionic polyacrylamide
- 流属性/单位：Mass / kg
- 数量规则：该确切流的前景实测或发票净质量；不采用 PCR 默认值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21932 参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wwt_materials`
- 来源：`eu-fdm-bat-2019-2031`; `eu-tanning-bat-2013-84`; `eu-sa-bat-2023-2749`; `eu-pef-2021-2279`

###### 颗粒活性炭投入（`wwt_granular_activated_carbon_input`）

本卡仅记录申报路线实际使用时进入场内废水处理的颗粒活性炭。数量取自称量、接收、库存或发票记录；不得在本卡合并不同残渣、材料、化学品、水或载能介质。

- 选定流：Granular activated carbon
- 流属性/单位：Mass / kg
- 数量规则：该确切流的前景实测或发票净质量；不采用 PCR 默认值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21932 参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wwt_materials`
- 来源：`eu-fdm-bat-2019-2031`; `eu-tanning-bat-2013-84`; `eu-sa-bat-2023-2749`; `eu-pef-2021-2279`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 废水处理筛渣废物输出（`wastewater_treatment_screen_rejects_output`）

本卡仅记录产生时作为独立废物流离开场内废水处理的废水处理筛渣。数量取自废物容器称量、转移联单或有记录的质量平衡；不得与另一废物流合并。

- 选定流：Wastewater-treatment screen rejects
- 流属性/单位：Mass / kg
- 数量规则：该确切废物流的称量或质量平衡净质量；不采用 PCR 默认值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21932 参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wwt_wastes`
- 来源：`eu-fdm-bat-2019-2031`; `eu-tanning-bat-2013-84`; `eu-sa-bat-2023-2749`; `eu-pef-2021-2279`

###### 溶气气浮浮渣废物输出（`dissolved_air_flotation_skimmings_output`）

本卡仅记录产生时作为独立废物流离开场内废水处理的溶气气浮浮渣。数量取自废物容器称量、转移联单或有记录的质量平衡；不得与另一废物流合并。

- 选定流：Dissolved-air-flotation skimmings
- 流属性/单位：Mass / kg
- 数量规则：该确切废物流的称量或质量平衡净质量；不采用 PCR 默认值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21932 参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wwt_wastes`
- 来源：`eu-fdm-bat-2019-2031`; `eu-tanning-bat-2013-84`; `eu-sa-bat-2023-2749`; `eu-pef-2021-2279`

###### 废水生物污泥废物输出（`wastewater_biological_sludge_output`）

本卡仅记录产生时作为独立废物流离开场内废水处理的废水生物污泥。数量取自废物容器称量、转移联单或有记录的质量平衡；不得与另一废物流合并。

- 选定流：Wastewater biological sludge
- 流属性/单位：Mass / kg
- 数量规则：该确切废物流的称量或质量平衡净质量；不采用 PCR 默认值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21932 参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wwt_wastes`
- 来源：`eu-fdm-bat-2019-2031`; `eu-tanning-bat-2013-84`; `eu-sa-bat-2023-2749`; `eu-pef-2021-2279`

###### 废水化学沉淀污泥废物输出（`wastewater_chemical_precipitation_sludge_output`）

本卡仅记录产生时作为独立废物流离开场内废水处理的废水化学沉淀污泥。数量取自废物容器称量、转移联单或有记录的质量平衡；不得与另一废物流合并。

- 选定流：Wastewater chemical-precipitation sludge
- 流属性/单位：Mass / kg
- 数量规则：该确切废物流的称量或质量平衡净质量；不采用 PCR 默认值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21932 参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wwt_wastes`
- 来源：`eu-fdm-bat-2019-2031`; `eu-tanning-bat-2013-84`; `eu-sa-bat-2023-2749`; `eu-pef-2021-2279`

###### 废水处理废颗粒活性炭废物输出（`spent_granular_activated_carbon_from_wwt_output`）

本卡仅记录产生时作为独立废物流离开场内废水处理的废水处理废颗粒活性炭。数量取自废物容器称量、转移联单或有记录的质量平衡；不得与另一废物流合并。

- 选定流：Spent granular activated carbon from wastewater treatment
- 流属性/单位：Mass / kg
- 数量规则：该确切废物流的称量或质量平衡净质量；不采用 PCR 默认值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21932 参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wwt_wastes`
- 来源：`eu-fdm-bat-2019-2031`; `eu-tanning-bat-2013-84`; `eu-sa-bat-2023-2749`; `eu-pef-2021-2279`

###### 处理后工艺废水废物输出（`treated_process_wastewater_output`）

本卡仅记录产生时作为独立废物流离开场内废水处理的处理后工艺废水。数量取自废物容器称量、转移联单或有记录的质量平衡；不得与另一废物流合并。

- 选定流：Treated process wastewater
- 流属性/单位：Mass / kg
- 数量规则：该确切废物流的称量或质量平衡净质量；不采用 PCR 默认值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21932 参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wwt_wastes`
- 来源：`eu-fdm-bat-2019-2031`; `eu-tanning-bat-2013-84`; `eu-sa-bat-2023-2749`; `eu-pef-2021-2279`

##### 基本流

###### 化学需氧量，排放至水体基本流排放（`chemical_oxygen_demand_to_water_output`）

本卡仅记录该排放存在时离开场内废水处理的化学需氧量，排放至水体。数量取自流量比例出水记录与认可实验室结果；不得合并不同物质、参数或接收环境介质。

- 选定流：Chemical oxygen demand, to water
- 流属性/单位：Mass / kg
- 数量规则：由匹配的处理出水流量与实验室浓度计算该参数负荷；不采用 PCR 默认浓度
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21932 参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_wwt_effluent_analysis`
- 来源：`eu-fdm-bat-2019-2031`; `eu-sa-bat-2023-2749`; `eu-pef-2021-2279`

###### 生化需氧量，排放至水体基本流排放（`biochemical_oxygen_demand_to_water_output`）

本卡仅记录该排放存在时离开场内废水处理的生化需氧量，排放至水体。数量取自流量比例出水记录与认可实验室结果；不得合并不同物质、参数或接收环境介质。

- 选定流：Biochemical oxygen demand, to water
- 流属性/单位：Mass / kg
- 数量规则：由匹配的处理出水流量与实验室浓度计算该参数负荷；不采用 PCR 默认浓度
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21932 参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_wwt_effluent_analysis`
- 来源：`eu-fdm-bat-2019-2031`; `eu-sa-bat-2023-2749`; `eu-pef-2021-2279`

###### 总有机碳，排放至水体基本流排放（`total_organic_carbon_to_water_output`）

本卡仅记录该排放存在时离开场内废水处理的总有机碳，排放至水体。数量取自流量比例出水记录与认可实验室结果；不得合并不同物质、参数或接收环境介质。

- 选定流：Total organic carbon, to water
- 流属性/单位：Mass / kg
- 数量规则：由匹配的处理出水流量与实验室浓度计算该参数负荷；不采用 PCR 默认浓度
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21932 参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_wwt_effluent_analysis`
- 来源：`eu-fdm-bat-2019-2031`; `eu-sa-bat-2023-2749`; `eu-pef-2021-2279`

###### 总氮，排放至水体基本流排放（`total_nitrogen_to_water_output`）

本卡仅记录该排放存在时离开场内废水处理的总氮，排放至水体。数量取自流量比例出水记录与认可实验室结果；不得合并不同物质、参数或接收环境介质。

- 选定流：Total nitrogen, to water
- 流属性/单位：Mass / kg
- 数量规则：由匹配的处理出水流量与实验室浓度计算该参数负荷；不采用 PCR 默认浓度
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21932 参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_wwt_effluent_analysis`
- 来源：`eu-fdm-bat-2019-2031`; `eu-sa-bat-2023-2749`; `eu-pef-2021-2279`

###### 总磷，排放至水体基本流排放（`total_phosphorus_to_water_output`）

本卡仅记录该排放存在时离开场内废水处理的总磷，排放至水体。数量取自流量比例出水记录与认可实验室结果；不得合并不同物质、参数或接收环境介质。

- 选定流：Total phosphorus, to water
- 流属性/单位：Mass / kg
- 数量规则：由匹配的处理出水流量与实验室浓度计算该参数负荷；不采用 PCR 默认浓度
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21932 参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_wwt_effluent_analysis`
- 来源：`eu-fdm-bat-2019-2031`; `eu-sa-bat-2023-2749`; `eu-pef-2021-2279`

###### 悬浮固体，排放至水体基本流排放（`suspended_solids_to_water_output`）

本卡仅记录该排放存在时离开场内废水处理的悬浮固体，排放至水体。数量取自流量比例出水记录与认可实验室结果；不得合并不同物质、参数或接收环境介质。

- 选定流：Suspended solids, to water
- 流属性/单位：Mass / kg
- 数量规则：由匹配的处理出水流量与实验室浓度计算该参数负荷；不采用 PCR 默认浓度
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21932 参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_wwt_effluent_analysis`
- 来源：`eu-fdm-bat-2019-2031`; `eu-sa-bat-2023-2749`; `eu-pef-2021-2279`

###### 氯化物，排放至水体基本流排放（`chloride_to_water_output`）

本卡仅记录该排放存在时离开场内废水处理的氯化物，排放至水体。数量取自流量比例出水记录与认可实验室结果；不得合并不同物质、参数或接收环境介质。

- 选定流：Chloride, to water
- 流属性/单位：Mass / kg
- 数量规则：由匹配的处理出水流量与实验室浓度计算该参数负荷；不采用 PCR 默认浓度
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21932 参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_wwt_effluent_analysis`
- 来源：`eu-fdm-bat-2019-2031`; `eu-sa-bat-2023-2749`; `eu-pef-2021-2279`

###### 硫酸盐，排放至水体基本流排放（`sulfate_to_water_output`）

本卡仅记录该排放存在时离开场内废水处理的硫酸盐，排放至水体。数量取自流量比例出水记录与认可实验室结果；不得合并不同物质、参数或接收环境介质。

- 选定流：Sulfate, to water
- 流属性/单位：Mass / kg
- 数量规则：由匹配的处理出水流量与实验室浓度计算该参数负荷；不采用 PCR 默认浓度
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21932 参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_wwt_effluent_analysis`
- 来源：`eu-fdm-bat-2019-2031`; `eu-sa-bat-2023-2749`; `eu-pef-2021-2279`

###### 正己烷，排放至水体基本流排放（`n_hexane_to_water_after_treatment_output`）

本卡仅记录该排放存在时离开场内废水处理的正己烷，排放至水体。数量取自流量比例出水记录与认可实验室结果；不得合并不同物质、参数或接收环境介质。

- 选定流：n-Hexane, to water
- 流属性/单位：Mass / kg
- 数量规则：由匹配的处理出水流量与实验室浓度计算该参数负荷；不采用 PCR 默认浓度
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21932 参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_wwt_effluent_analysis`
- 来源：`eu-fdm-bat-2019-2031`; `eu-sa-bat-2023-2749`; `eu-pef-2021-2279`

###### 氨，排放至空气基本流排放（`ammonia_to_air_from_wwt_output`）

本卡仅记录该排放存在时离开场内废水处理的氨，排放至空气。数量取自校准排放测量与适用计算规则；不得合并不同物质、参数或接收环境介质。

- 选定流：Ammonia, to air
- 流属性/单位：Mass / kg
- 数量规则：由实测流量与浓度计算负荷，或记录直接校准质量测量；不采用 PCR 默认因子
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21932 参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_wwt_air_emissions`
- 来源：`eu-sa-bat-2023-2749`; `eu-pef-2021-2279`

###### 硫化氢，排放至空气基本流排放（`hydrogen_sulfide_to_air_from_wwt_output`）

本卡仅记录该排放存在时离开场内废水处理的硫化氢，排放至空气。数量取自校准排放测量与适用计算规则；不得合并不同物质、参数或接收环境介质。

- 选定流：Hydrogen sulfide, to air
- 流属性/单位：Mass / kg
- 数量规则：由实测流量与浓度计算负荷，或记录直接校准质量测量；不采用 PCR 默认因子
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21932 参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_wwt_air_emissions`
- 来源：`eu-sa-bat-2023-2749`; `eu-pef-2021-2279`

###### 生物源甲烷，排放至空气基本流排放（`biogenic_methane_to_air_from_wwt_output`）

本卡仅记录该排放存在时离开场内废水处理的生物源甲烷，排放至空气。数量取自校准排放测量与适用计算规则；不得合并不同物质、参数或接收环境介质。

- 选定流：Methane, biogenic, to air
- 流属性/单位：Mass / kg
- 数量规则：由实测流量与浓度计算负荷，或记录直接校准质量测量；不采用 PCR 默认因子
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21932 参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_wwt_air_emissions`
- 来源：`eu-sa-bat-2023-2749`; `eu-pef-2021-2279`

###### 生物源二氧化碳，排放至空气基本流排放（`biogenic_carbon_dioxide_to_air_from_wwt_output`）

本卡仅记录该排放存在时离开场内废水处理的生物源二氧化碳，排放至空气。数量取自校准排放测量与适用计算规则；不得合并不同物质、参数或接收环境介质。

- 选定流：Carbon dioxide, biogenic, to air
- 流属性/单位：Mass / kg
- 数量规则：由实测流量与浓度计算负荷，或记录直接校准质量测量；不采用 PCR 默认因子
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21932 参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_wwt_air_emissions`
- 来源：`eu-sa-bat-2023-2749`; `eu-pef-2021-2279`


## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `alloc_subdivision_first` | 共用与多输出操作 | 优先采用过程细分或直接计量，使参考产品、回收脂肪相、回收溶剂与废物保持独立数量。 | `eu-pef-2021-2279` |
| `alloc_source_residue_burden` | 申报起始残渣 | 说明从来源系统继承的上游负担或截断处理及其依据规则；不得仅因其为残渣而假定无负担。 | `eu-pef-2021-2279` |
| `alloc_physical_causality` | 无法避免的共用投入或排放 | 无法细分时，采用反映实际过程驱动因素且有记录的物理因果关系，并报告分母与时期。 | `eu-pef-2021-2279` |
| `alloc_economic_sensitivity` | 无可辩护物理因果关系的多输出操作 | 必须经济分配时，采用同期场址特定价格，披露价格期与币种，并报告敏感性情景；不提供默认价格。 | `eu-pef-2021-2279` |
| `alloc_internal_recovery_no_credit` | 在前景系统内返回的回收正己烷、水、热或材料 | 从外部总需求中扣除经核实的内部回收，但不得赋予避免产品信用，也不得将同一回收重复计为共产品。 | `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279` |
| `alloc_waste_treatment` | 废物与废水输出 | 纳入前景收集与场内处理；对场外处理记录转移点与所用数据集，不得用废物抵减参考产品。 | `eu-fdm-bat-2019-2031`; `eu-tanning-bat-2013-84`; `eu-sa-bat-2023-2749`; `eu-pef-2021-2279` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_receipt_materials` | `residue_receipt_mechanical_conditioning` | 各关联原子材料投入 | 接收、库存或发票记录 | 流身份；过程；日期；数量；单位；批次或计量表 id | 分别称量或核对每种所列材料 | 卡片申报单位 | 每次事件或计量间隔 | 完整申报研究期 | 申报前景场址 | 分别汇总每个具名卡片并归一化至 1 kg 参考产品；不得合并身份 | 秤校准、发票、批次与库存核对 |
| `cp_receipt_utilities` | `residue_receipt_mechanical_conditioning` | 各关联原子公用工程投入 | 计量表或载能介质发票记录 | 载能介质身份；计量表 id；起始读数；终止读数；数量；单位；运行小时 | 读取载能介质特定计量表，或记录共用计量表分配 | 卡片申报单位 | 每次事件或计量间隔 | 完整申报研究期 | 申报前景场址 | 分别汇总每个具名卡片并归一化至 1 kg 参考产品；不得合并身份 | 计量表校准、发票与分配工作表 |
| `cp_receipt_wastes` | `residue_receipt_mechanical_conditioning` | 各关联原子废物输出 | 容器重量或转移联单 | 流身份；过程；日期；数量；单位；批次或计量表 id | 分别称量或质量平衡每种所列废物流 | 卡片申报单位 | 每次事件或计量间隔 | 完整申报研究期 | 申报前景场址 | 分别汇总每个具名卡片并归一化至 1 kg 参考产品；不得合并身份 | 秤校准、联单与去向记录 |
| `cp_aqueous_utilities` | `aqueous_splitting_washing` | 各关联原子公用工程投入 | 计量表或载能介质发票记录 | 载能介质身份；计量表 id；起始读数；终止读数；数量；单位；运行小时 | 读取载能介质特定计量表，或记录共用计量表分配 | 卡片申报单位 | 每次事件或计量间隔 | 完整申报研究期 | 申报前景场址 | 分别汇总每个具名卡片并归一化至 1 kg 参考产品；不得合并身份 | 计量表校准、发票与分配工作表 |
| `cp_aqueous_materials` | `aqueous_splitting_washing` | 各关联原子材料投入 | 接收、库存或发票记录 | 流身份；过程；日期；数量；单位；批次或计量表 id | 分别称量或核对每种所列材料 | 卡片申报单位 | 每次事件或计量间隔 | 完整申报研究期 | 申报前景场址 | 分别汇总每个具名卡片并归一化至 1 kg 参考产品；不得合并身份 | 秤校准、发票、批次与库存核对 |
| `cp_aqueous_products` | `aqueous_splitting_washing` | 各关联原子产品或共产品输出 | 批次放行与称量记录 | 流身份；过程；日期；数量；单位；批次或计量表 id | 分别称量每种所列输出 | 卡片申报单位 | 每次事件或计量间隔 | 完整申报研究期 | 申报前景场址 | 分别汇总每个具名卡片并归一化至 1 kg 参考产品；不得合并身份 | 秤校准与批次核对 |
| `cp_aqueous_wastes` | `aqueous_splitting_washing` | 各关联原子废物输出 | 容器重量或转移联单 | 流身份；过程；日期；数量；单位；批次或计量表 id | 分别称量或质量平衡每种所列废物流 | 卡片申报单位 | 每次事件或计量间隔 | 完整申报研究期 | 申报前景场址 | 分别汇总每个具名卡片并归一化至 1 kg 参考产品；不得合并身份 | 秤校准、联单与去向记录 |
| `cp_solvent_materials` | `solvent_extraction_recovery` | 各关联原子材料投入 | 接收、库存或发票记录 | 流身份；过程；日期；数量；单位；批次或计量表 id | 分别称量或核对每种所列材料 | 卡片申报单位 | 每次事件或计量间隔 | 完整申报研究期 | 申报前景场址 | 分别汇总每个具名卡片并归一化至 1 kg 参考产品；不得合并身份 | 秤校准、发票、批次与库存核对 |
| `cp_solvent_utilities` | `solvent_extraction_recovery` | 各关联原子公用工程投入 | 计量表或载能介质发票记录 | 载能介质身份；计量表 id；起始读数；终止读数；数量；单位；运行小时 | 读取载能介质特定计量表，或记录共用计量表分配 | 卡片申报单位 | 每次事件或计量间隔 | 完整申报研究期 | 申报前景场址 | 分别汇总每个具名卡片并归一化至 1 kg 参考产品；不得合并身份 | 计量表校准、发票与分配工作表 |
| `cp_solvent_products` | `solvent_extraction_recovery` | 各关联原子产品或共产品输出 | 批次放行与称量记录 | 流身份；过程；日期；数量；单位；批次或计量表 id | 分别称量每种所列输出 | 卡片申报单位 | 每次事件或计量间隔 | 完整申报研究期 | 申报前景场址 | 分别汇总每个具名卡片并归一化至 1 kg 参考产品；不得合并身份 | 秤校准与批次核对 |
| `cp_solvent_wastes` | `solvent_extraction_recovery` | 各关联原子废物输出 | 容器重量或转移联单 | 流身份；过程；日期；数量；单位；批次或计量表 id | 分别称量或质量平衡每种所列废物流 | 卡片申报单位 | 每次事件或计量间隔 | 完整申报研究期 | 申报前景场址 | 分别汇总每个具名卡片并归一化至 1 kg 参考产品；不得合并身份 | 秤校准、联单与去向记录 |
| `cp_solvent_emission_balance` | `solvent_extraction_recovery` | 正己烷向各接收环境介质的释放 | 溶剂库存与监测记录 | 采购；期初库存；回收；期末库存；产品留存；废物；实测释放 | 闭合正己烷平衡，并将空气与水体释放分开 | 卡片申报单位 | 每次事件或计量间隔 | 完整申报研究期 | 申报前景场址 | 分别汇总每个具名卡片并归一化至 1 kg 参考产品；不得合并身份 | 储罐校准、采购、回收、废物与监测记录 |
| `cp_finishing_materials` | `adsorption_filtration_concentration_cooling` | 各关联原子材料投入 | 接收、库存或发票记录 | 流身份；过程；日期；数量；单位；批次或计量表 id | 分别称量或核对每种所列材料 | 卡片申报单位 | 每次事件或计量间隔 | 完整申报研究期 | 申报前景场址 | 分别汇总每个具名卡片并归一化至 1 kg 参考产品；不得合并身份 | 秤校准、发票、批次与库存核对 |
| `cp_finishing_utilities` | `adsorption_filtration_concentration_cooling` | 各关联原子公用工程投入 | 计量表或载能介质发票记录 | 载能介质身份；计量表 id；起始读数；终止读数；数量；单位；运行小时 | 读取载能介质特定计量表，或记录共用计量表分配 | 卡片申报单位 | 每次事件或计量间隔 | 完整申报研究期 | 申报前景场址 | 分别汇总每个具名卡片并归一化至 1 kg 参考产品；不得合并身份 | 计量表校准、发票与分配工作表 |
| `cp_finishing_wastes` | `adsorption_filtration_concentration_cooling` | 各关联原子废物输出 | 容器重量或转移联单 | 流身份；过程；日期；数量；单位；批次或计量表 id | 分别称量或质量平衡每种所列废物流 | 卡片申报单位 | 每次事件或计量间隔 | 完整申报研究期 | 申报前景场址 | 分别汇总每个具名卡片并归一化至 1 kg 参考产品；不得合并身份 | 秤校准、联单与去向记录 |
| `cp_finishing_refrigerant_balance` | `adsorption_filtration_concentration_cooling` | 每种所列制冷剂释放 | 制冷剂维护与库存记录 | 制冷剂身份；期初库存；采购；充注；回收；期末库存 | 对每种制冷剂分别闭合质量平衡 | 卡片申报单位 | 每次事件或计量间隔 | 完整申报研究期 | 申报前景场址 | 分别汇总每个具名卡片并归一化至 1 kg 参考产品；不得合并身份 | 维护日志、钢瓶称量与库存核对 |
| `cp_finishing_air_emissions` | `adsorption_filtration_concentration_cooling` | 各关联原子空气排放 | 烟囱、排气口或活动计算记录 | 物质；来源；浓度；气体流量；持续时间；活动量；因子来源 | 直接测量，或用有记录的因子分别计算每种物质 | 卡片申报单位 | 每次事件或计量间隔 | 完整申报研究期 | 申报前景场址 | 分别汇总每个具名卡片并归一化至 1 kg 参考产品；不得合并身份 | 采样报告、仪器校准与因子溯源 |
| `cp_thermal_utilities` | `onsite_fuel_combustion` | 各关联原子公用工程投入 | 计量表或载能介质发票记录 | 载能介质身份；计量表 id；起始读数；终止读数；数量；单位；运行小时 | 读取载能介质特定计量表，或记录共用计量表分配 | 卡片申报单位 | 每次事件或计量间隔 | 完整申报研究期 | 申报前景场址 | 分别汇总每个具名卡片并归一化至 1 kg 参考产品；不得合并身份 | 计量表校准、发票与分配工作表 |
| `cp_thermal_air_emissions` | `onsite_fuel_combustion` | 各关联原子空气排放 | 烟囱、排气口或活动计算记录 | 物质；来源；浓度；气体流量；持续时间；活动量；因子来源 | 直接测量，或用有记录的因子分别计算每种物质 | 卡片申报单位 | 每次事件或计量间隔 | 完整申报研究期 | 申报前景场址 | 分别汇总每个具名卡片并归一化至 1 kg 参考产品；不得合并身份 | 采样报告、仪器校准与因子溯源 |
| `cp_release_utilities` | `packaging_storage_release` | 各关联原子公用工程投入 | 计量表或载能介质发票记录 | 载能介质身份；计量表 id；起始读数；终止读数；数量；单位；运行小时 | 读取载能介质特定计量表，或记录共用计量表分配 | 卡片申报单位 | 每次事件或计量间隔 | 完整申报研究期 | 申报前景场址 | 分别汇总每个具名卡片并归一化至 1 kg 参考产品；不得合并身份 | 计量表校准、发票与分配工作表 |
| `cp_release_materials` | `packaging_storage_release` | 各关联原子材料投入 | 接收、库存或发票记录 | 流身份；过程；日期；数量；单位；批次或计量表 id | 分别称量或核对每种所列材料 | 卡片申报单位 | 每次事件或计量间隔 | 完整申报研究期 | 申报前景场址 | 分别汇总每个具名卡片并归一化至 1 kg 参考产品；不得合并身份 | 秤校准、发票、批次与库存核对 |
| `cp_release_reference_product` | `packaging_storage_release` | 净合格参考产品输出 | 批次放行记录 | 批次 id；确切来源身份；路线；产品净质量；包装质量；放行状态 | 将固定 1 kg 参考量与校准放行秤记录核对 | 卡片申报单位 | 每次事件或计量间隔 | 完整申报研究期 | 申报前景场址 | 分别汇总每个具名卡片并归一化至 1 kg 参考产品；不得合并身份 | 秤校准、产品规范与放行授权 |
| `cp_release_wastes` | `packaging_storage_release` | 各关联原子废物输出 | 容器重量或转移联单 | 流身份；过程；日期；数量；单位；批次或计量表 id | 分别称量或质量平衡每种所列废物流 | 卡片申报单位 | 每次事件或计量间隔 | 完整申报研究期 | 申报前景场址 | 分别汇总每个具名卡片并归一化至 1 kg 参考产品；不得合并身份 | 秤校准、联单与去向记录 |
| `cp_sanitation_utilities` | `cleaning_sanitation` | 各关联原子公用工程投入 | 计量表或载能介质发票记录 | 载能介质身份；计量表 id；起始读数；终止读数；数量；单位；运行小时 | 读取载能介质特定计量表，或记录共用计量表分配 | 卡片申报单位 | 每次事件或计量间隔 | 完整申报研究期 | 申报前景场址 | 分别汇总每个具名卡片并归一化至 1 kg 参考产品；不得合并身份 | 计量表校准、发票与分配工作表 |
| `cp_sanitation_materials` | `cleaning_sanitation` | 各关联原子材料投入 | 接收、库存或发票记录 | 流身份；过程；日期；数量；单位；批次或计量表 id | 分别称量或核对每种所列材料 | 卡片申报单位 | 每次事件或计量间隔 | 完整申报研究期 | 申报前景场址 | 分别汇总每个具名卡片并归一化至 1 kg 参考产品；不得合并身份 | 秤校准、发票、批次与库存核对 |
| `cp_sanitation_wastes` | `cleaning_sanitation` | 各关联原子废物输出 | 容器重量或转移联单 | 流身份；过程；日期；数量；单位；批次或计量表 id | 分别称量或质量平衡每种所列废物流 | 卡片申报单位 | 每次事件或计量间隔 | 完整申报研究期 | 申报前景场址 | 分别汇总每个具名卡片并归一化至 1 kg 参考产品；不得合并身份 | 秤校准、联单与去向记录 |
| `cp_wwt_utilities` | `onsite_wastewater_treatment` | 各关联原子公用工程投入 | 计量表或载能介质发票记录 | 载能介质身份；计量表 id；起始读数；终止读数；数量；单位；运行小时 | 读取载能介质特定计量表，或记录共用计量表分配 | 卡片申报单位 | 每次事件或计量间隔 | 完整申报研究期 | 申报前景场址 | 分别汇总每个具名卡片并归一化至 1 kg 参考产品；不得合并身份 | 计量表校准、发票与分配工作表 |
| `cp_wwt_materials` | `onsite_wastewater_treatment` | 各关联原子材料投入 | 接收、库存或发票记录 | 流身份；过程；日期；数量；单位；批次或计量表 id | 分别称量或核对每种所列材料 | 卡片申报单位 | 每次事件或计量间隔 | 完整申报研究期 | 申报前景场址 | 分别汇总每个具名卡片并归一化至 1 kg 参考产品；不得合并身份 | 秤校准、发票、批次与库存核对 |
| `cp_wwt_wastes` | `onsite_wastewater_treatment` | 各关联原子废物输出 | 容器重量或转移联单 | 流身份；过程；日期；数量；单位；批次或计量表 id | 分别称量或质量平衡每种所列废物流 | 卡片申报单位 | 每次事件或计量间隔 | 完整申报研究期 | 申报前景场址 | 分别汇总每个具名卡片并归一化至 1 kg 参考产品；不得合并身份 | 秤校准、联单与去向记录 |
| `cp_wwt_effluent_analysis` | `onsite_wastewater_treatment` | 各关联处理出水参数 | 匹配的出水流量与实验室记录 | 参数；样品 id；浓度；单位；处理流量；采样时段 | 对每个参数将匹配流量乘以浓度 | 卡片申报单位 | 每次事件或计量间隔 | 完整申报研究期 | 申报前景场址 | 分别汇总每个具名卡片并归一化至 1 kg 参考产品；不得合并身份 | 流量计校准、样品交接链与认可实验室报告 |
| `cp_wwt_air_emissions` | `onsite_wastewater_treatment` | 各关联原子空气排放 | 烟囱、排气口或活动计算记录 | 物质；来源；浓度；气体流量；持续时间；活动量；因子来源 | 直接测量，或用有记录的因子分别计算每种物质 | 卡片申报单位 | 每次事件或计量间隔 | 完整申报研究期 | 申报前景场址 | 分别汇总每个具名卡片并归一化至 1 kg 参考产品；不得合并身份 | 采样报告、仪器校准与因子溯源 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 每个前景卡片 | 归一化卡片数量 = 申报研究期卡片数量 / 同期净合格参考产品 kg | 关联采集协议；`cp_release_reference_product` | 每 1 kg 参考产品的卡片申报单位 | `eu-pef-2021-2279` |
| `calc_shared_utility_allocation` | 服务多个过程的公用工程计量表 | 按有记录的运行时间、设备功率或热负荷，或另一实测因果驱动因素分配载能介质特定计量总量；保留未分配总量与核对 | 载能介质计量；运行记录；因果驱动因素 | 阶段特定载能介质数量 | `eu-fdm-bat-2019-2031`; `eu-sa-bat-2023-2749`; `eu-pef-2021-2279` |
| `calc_foreground_mass_balance` | 申报路线 | 质量平衡闭合 = 具名质量投入 - 具名产品 - 具名共产品 - 具名废物 - 具名排放 - 有记录的库存变化 | 一个批次或时期的全部关联质量记录 | 披露的闭合结果与未解释差异 | `eu-fdm-bat-2019-2031`; `eu-tanning-bat-2013-84`; `eu-sa-bat-2023-2749`; `eu-pef-2021-2279` |
| `calc_n_hexane_release` | 正己烷路线 | 未回收正己烷 = 采购 + 期初库存 - 期末库存 - 回收库存 - 产品留存 - 具名废物；将实测释放分别分配至空气与水体 | `cp_solvent_materials`; `cp_solvent_products`; `cp_solvent_wastes`; `cp_solvent_emission_balance` | 排至每种接收环境介质的正己烷 kg | `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279` |
| `calc_refrigerant_release` | 每种实际制冷剂 | 释放 = 期初库存 + 采购 + 追加充注 - 回收 - 期末库存 - 有记录的设备库存变化 | `cp_finishing_materials`; `cp_finishing_refrigerant_balance` | 排至空气的所列制冷剂 kg | `eu-sa-bat-2023-2749`; `eu-pef-2021-2279` |
| `calc_combustion_emission` | 每种具名燃烧排放 | 排放负荷 = 所列燃料实测活动量乘以有记录的设施特定或引用物质因子，或直接校准烟囱质量；燃料与物质保持分开 | `cp_thermal_utilities`; `cp_thermal_air_emissions`; 因子溯源 | 排至空气的一种具名物质 kg | `eu-fdm-bat-2019-2031`; `eu-sa-bat-2023-2749`; `eu-pef-2021-2279` |
| `calc_effluent_parameter_load` | 每个具名水排放参数 | 参数负荷 = 匹配的处理出水体积乘以实验室浓度，并显式换算单位 | `cp_wwt_effluent_analysis`; 处理流量记录 | 排至水体的一种具名参数 kg | `eu-fdm-bat-2019-2031`; `eu-sa-bat-2023-2749`; `eu-pef-2021-2279` |
| `calc_allocation_factor` | 无法避免的共用负担 | 分配因子 = 参考产品的申报因果数量或经济价值 / 同期全部共产品相应总量 | 产品与共产品数量；因果驱动因素或价格 | 披露的分配因子及适用时的敏感性 | `eu-pef-2021-2279` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_source_identity` | 起始残渣 | 识别一种确切残渣流、来源材料、产生操作、供应商或内部来源、批次与法定状态。 | 接收规范、供应商记录、内部转移记录与过程流程图 |
| `dq_route_traceability` | 所有过程 | 将每个启用卡映射到一条申报路线，并说明每个条件性过程与不适用卡。 | 带日期的设施流程图、批次记录与适用性矩阵 |
| `dq_temporal_match` | 所有采集记录 | 对投入、输出、库存与排放采用同一代表时期，或记录并核对任何不匹配。 | 记录覆盖表与核对 |
| `dq_meter_scale_quality` | 计量表与秤 | 保留校准状态、读数频率、缺失数据处理与共用计量表分配证据。 | 校准证书、日志与分配工作表 |
| `dq_laboratory_quality` | 废水与直接排放测量 | 保留方法、检出限、采样时间、样品交接链、实验室能力与匹配流量数据。 | 采样计划与实验室报告 |
| `dq_inventory_completeness` | 所有前景交换 | 核对具名材料、化学品、水、电力、蒸汽、热水、燃料、制冷剂、包装、产品、共产品、废物与排放，不得使用集合选择器卡。 | 卡片级完整性矩阵及质量、溶剂、制冷剂、水与能量平衡 |
| `dq_factor_provenance` | 计算排放 | 识别因子来源、物质、燃料或活动基准、地域、技术与单位换算；不允许 PCR 默认因子。 | 因子引用与计算工作表 |
| `dq_allocation_transparency` | 共用操作与共产品 | 保留未分配总量、分配方法、因子、时期，以及采用经济分配时的敏感性。 | 分配工作簿与源记录 |
| `dq_uuid_identity` | 天工流链接 | 仅在确切语义混合发现并直读公开 state-100 后接受 UUID；未解析原子名称保持空白并在 manifest 按卡片闭合。 | 天工身份审计记录或 manifest 未解析条目 |
| `dq_reference_metadata_defect` | 参考产品身份 | 将远程 generalComment 不一致保留为限制，并证明乳制品语义或证据没有进入范围、路线或清单。 | manifest 参考流审计与类别范围审查 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `v_cpc_scope_exact` | 产品身份 | 数据集必须是来自一种申报脂肪物质、动物蜡或植物蜡的 CPC 21932 脱脂残渣或处理残渣，不得表示成品脂肪、油、蜡、乳制品或无关残渣。 | `un-cpc-3-0-retained` |
| `v_reference_identity` | 参考流 | 产品流 UUID、Mass 属性 UUID、Units of mass UUID、kg 单位与确切 baseName 必须符合参考定义。 |  |
| `v_reference_general_comment_defect` | 参考流证据 | 必须披露不一致的远程 generalComment 并拒绝其作为语义证据；任何乳制品解释均不合规。 |  |
| `v_reference_quantity` | 参考量 | 归一化输出必须恰为 1 kg 产品净质量，并排除包装与共产品质量。 | `eu-pef-2021-2279` |
| `v_source_route_lock` | 前景数据包 | 数据集必须由恰好一种来源残渣身份与一条实际路线流程图控制；不得平均无关路线或来源。 | `eu-fdm-bat-2019-2031`; `eu-tanning-bat-2013-84`; `eu-sa-bat-2023-2749`; `eu-pef-2021-2279` |
| `v_atomic_selected_flow` | 清单卡 | 每个启用卡只能包含一个具体交换；集合选择器与未列出的兜底残渣均不合规。 | `eu-pef-2021-2279` |
| `v_conditional_applicability` | 条件性卡片与过程 | 每个条件性项目必须由设施路线支持，或以证据标为不适用；不得用零值掩盖缺失数据。 | `eu-pef-2021-2279` |
| `v_nonreference_uuid_gate` | 非参考流 UUID | 除非已记录确切混合发现与直读公开 state-100 语义核验，否则非参考 UUID 必须保持空白。 |  |
| `v_no_default_amount` | 清单数量与因子 | 每个非参考数量必须来自前景记录或由采集记录计算；不得将 BREF 数值、BAT-AEL 与作者估算作为默认值。 | `eu-fdm-bat-2019-2031`; `eu-sa-bat-2023-2749`; `eu-pef-2021-2279` |
| `v_carrier_separation` | 能源清单 | 电力、外购蒸汽、外购热水、天然气、柴油与液化石油气必须保持独立卡片与计算。 | `eu-fdm-bat-2019-2031`; `eu-sa-bat-2023-2749`; `eu-pef-2021-2279` |
| `v_solvent_balance` | 正己烷路线 | 正己烷平衡必须闭合采购、库存、回收、留存、废物以及分别排至空气与水体的释放。 | `eu-fdm-bat-2019-2031` |
| `v_refrigerant_balance` | 冷却系统 | 每种实际制冷剂必须有独立补充与释放卡，并闭合质量平衡。 | `eu-sa-bat-2023-2749` |
| `v_mass_balance` | 申报路线 | 数据包必须披露前景质量平衡闭合，并解释任何残余差异。 | `eu-fdm-bat-2019-2031`; `eu-tanning-bat-2013-84`; `eu-sa-bat-2023-2749`; `eu-pef-2021-2279` |
| `v_emission_media` | 基本流 | 每种物质或分析参数及其接收环境介质必须保持独立，并由匹配记录计算。 | `eu-fdm-bat-2019-2031`; `eu-sa-bat-2023-2749`; `eu-pef-2021-2279` |
| `v_allocation_disclosure` | 共用负担与共产品 | 数据包必须披露细分、分配方法、因子、分母、时期与必要敏感性，不得重复计入内部回收信用。 | `eu-pef-2021-2279` |
| `v_packaging_exclusion` | 参考质量与包装 | 每个包装组件与废料必须保持独立，且全部包装质量从 1 kg 产品质量中排除。 | `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279` |
| `v_completeness` | 前景 LCI | 完整性矩阵必须覆盖每种实际具名材料、化学品、水、公用工程、制冷剂、包装组件、产品、共产品、废物、废水流与排放。 | `eu-fdm-bat-2019-2031`; `eu-tanning-bat-2013-84`; `eu-sa-bat-2023-2749`; `eu-pef-2021-2279` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 一种确切 CPC 21932 来源残渣与路线的前景单元过程系统 |
| downstream_use | 过程数据集；生命周期模型投入；经核实的前景数据包 |
| allowed_use | 与申报来源残渣身份、产生操作、路线、技术、地域、时期、质量状态、法定状态、大门与分配相符的研究 |
| excluded_use | 混合残渣来源或路线的通用平均；乳制品；成品脂肪、油或蜡；未核实代理 UUID；使用 PCR 或 BAT 默认数量的数据集 |
| required_metadata | CPC 代码；参考 UUID；确切来源残渣身份；来源材料；产生操作；路线流程图；启用与不适用卡片；质量状态；法定状态；地域；时期；技术；包装；共产品；分配；大门 |
| required_quality_disclosure | 记录覆盖；计量表与秤质量；分析方法；质量、溶剂、制冷剂、水与能量平衡；因子溯源；分配；未解析 UUID 清单；参考 generalComment 瑕疵 |
| update_trigger | 来源残渣、产生操作、路线、技术、溶剂、制冷剂、包装、共产品状态、分配、地域、研究期、规范、法定状态或参考流元数据发生变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-retained` | `official_guidance` | United Nations Statistics Division, CPC Version 3.0 structure, official CSV source retained at classifications/systems/cpc/3.0/raw/CPC_Ver_3.0_Structure_30Jun2025.csv; official source URL https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv; retained SHA-256 5cd2c1c4890dd6be16af48e9bb940fed48efff9865f39ff15edaa921da25fb7c | CPC 21932 的确切范围与排除项 |
| `ec-jrc-fdm-bref-jrc118627` | `official_guidance` | European Commission Joint Research Centre, Best Available Techniques Reference Document for the Food, Drink and Milk Industries, JRC118627, DOI 10.2760/243911, https://publications.jrc.ec.europa.eu/repository/handle/JRC118627 | 植物油处理路线结构、资源清单、残余物、溶剂回收与废水背景 |
| `eu-fdm-bat-2019-2031` | `standard` | Commission Implementing Decision (EU) 2019/2031, https://eur-lex.europa.eu/eli/dec_impl/2019/2031/oj | 水、能源、原料、废水、废气、油脂精炼、正己烷、粉尘与监测结构；BAT 数值不作为 PCR 默认值 |
| `ec-jrc-tan-bref-jrc83005` | `official_guidance` | European Commission Joint Research Centre, Best Available Techniques Reference Document for the Tanning of Hides and Skins, JRC83005, DOI 10.2788/13548, https://publications.jrc.ec.europa.eu/repository/handle/JRC83005 | 绵羊皮脱脂路线、化学品清单、工艺残余物、水、能源、溶剂与回收背景 |
| `eu-tanning-bat-2013-84` | `standard` | Commission Implementing Decision 2013/84/EU, https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32013D0084 | 干法脱脂、投入产出记录、残余物分流、废水处理、溶剂与化学品的官方 BAT 结论 |
| `ec-jrc-sa-bref-jrc135916` | `official_guidance` | European Commission Joint Research Centre, Best Available Techniques Reference Document for Slaughterhouses, Animal By-products and/or Edible Co-products Industries, JRC135916, DOI 10.2760/18199, https://publications.jrc.ec.europa.eu/repository/handle/JRC135916 | 动物脂肪熔炼路线、资源消耗、工艺残余物、排放与废水结构 |
| `eu-sa-bat-2023-2749` | `standard` | Commission Implementing Decision (EU) 2023/2749, https://eur-lex.europa.eu/eli/dec_impl/2023/2749/oj | 脂肪熔炼、清单、制冷剂、水、能源、废物、空气排放与废水处理的官方 BAT 结论；BAT 数值不作为 PCR 默认值 |
| `eu-pef-2021-2279` | `official_guidance` | Commission Recommendation (EU) 2021/2279 on the use of Environmental Footprint methods, https://eur-lex.europa.eu/eli/reco/2021/2279/2021-12-30/eng | 产品特定物料清单、企业特定制造数据、完整 LCI、分配、数据质量、透明度与验证 |
