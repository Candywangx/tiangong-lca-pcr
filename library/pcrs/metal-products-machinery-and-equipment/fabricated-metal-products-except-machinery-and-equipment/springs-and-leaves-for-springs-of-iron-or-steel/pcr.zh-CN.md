---
pcr_id: pcr.metal-products-machinery-and-equipment.fabricated-metal-products-except-machinery-and-equipment.springs-and-leaves-for-springs-of-iron-or-steel
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 钢铁制弹簧及弹簧片

## 1. 范围与适用性

本 PCR 适用于以铁或钢制弹簧为主要产品属性的成品弹簧、弹簧片及弹簧组件的工厂门生产。涵盖热成形或冷成形片簧及簧片、螺旋压缩弹簧、拉伸弹簧、扭转弹簧、平面涡卷弹簧、碟形弹簧及其他钢铁制弹簧。前景边界始于外购钢丝、钢带或钢棒，终于按适用路线完成成形、热处理、表面精整和检验后的合格产品。

本 PCR 不涵盖铜及其他有色金属弹簧、聚合物或弹性体弹簧、钟表弹簧、弹簧垫圈及锁紧垫圈、减振器，以及主要产品属性并非弹簧的组件。炼钢、拉丝、钢带或钢棒生产、外购化学品和能源生产、资本品、独立包装、出厂运输、安装、使用、维护和报废阶段不属于前景边界。若数据包包含一体化上游工序，或产品以单独包装状态交付，必须披露与本边界的差异。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.fabricated-metal-products-except-machinery-and-equipment.springs-and-leaves-for-springs-of-iron-or-steel |
| classification_refs | CPC 3.0：42945，exact |
| covered_products | 成品铁或钢制片簧及簧片、螺旋弹簧、压缩弹簧、拉伸弹簧、扭转弹簧、平面涡卷弹簧、碟形弹簧，以及以弹簧为主要产品属性出售的弹簧组件 |
| excluded_products | 有色金属、聚合物或弹性体弹簧；钟表弹簧；弹簧或锁紧垫圈；减振器；非弹簧组件 |
| representative_product | 符合声明图纸和验收规范的成品并经检验的铁或钢制弹簧或弹簧片 |
| production_route | 外购弹簧钢丝、钢带或钢棒；切断与成形；按路线适用的热处理；按实际执行的磨削、去毛刺、清洗、钝化、喷丸或防腐处理；最终检验 |
| market_state | 工厂门处合格弹簧成品，不含独立包装；保留在产品上的涂层或防锈剂计入并予以声明 |

CPC 产品属性和层级依据 `un-cpc-3-0-structure-2025` 核实。产品形态划分和质量计量依据 `eu-prodcom-2006-springs`；外购原料起始边界依据 `us-census-naics-2022-spring-manufacturing`。

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 在工厂门提供具有声明弹性功能、几何形状和验收等级的合格铁或钢制弹簧产品 |
| How much | 1 kg 合格成品弹簧或弹簧片净质量，不含独立包装 |
| How well | 符合声明的钢种、尺寸公差、载荷—变形或扭矩—转角要求、表面状态、热处理状态和检验验收准则 |
| How long or cycle | 一个生产和交付批次；使用寿命和疲劳循环性能作为产品限定信息声明，但不换算为使用阶段功能时间 |
| reference_flow_link | `finishing_inspection` 输出的 1 kg 合格参考产品 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 铁或钢制弹簧和弹簧片 `650cda2f-7baa-413f-ac22-ff0da54ea8ba` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 弹簧形态与用途；图纸或零件标识；铁或钢牌号；钢丝、钢带或钢棒原料形态；热成形或冷成形路线；热处理和淬火路线；表面处理和涂层状态；载荷—变形或扭矩—转角等级；规定时的疲劳或使用循环要求；净质量基准；地域；基准年；包装排除或纳入声明 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `mu_reference_mass` | 参考产品及所有质量归一化清单行 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 以最终检验后的 1 kg 合格弹簧产品净质量归一化。不计独立包装质量；计入属于出售产品的涂层、防锈剂和永久装配弹簧元件。 |
| `mu_feedstock_mass` | 外购钢丝、钢带和钢棒 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 按原料形态和钢牌号记录实际接收质量。不得合并钢丝、钢带和钢棒，也不得用名义设计质量代替接收质量。 |
| `mu_electricity_conversion` | 电力清单行 | Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` | MJ | 保留以 kWh 计的电表数据，按 1 kWh = 3.6 MJ 换算后归一化；披露电网、供电电压、损耗和电表边界。 |
| `mu_gas_volume` | 热处理用天然气 | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | 记录计量体积及其温度、压力和干湿基准条件。不得在无明确换算时混用标准立方米和工况立方米。 |
| `mu_mass_balance` | 各前景过程及整个产品系统 | Mass | kg | 核对钢材投入、内部中间品转移、合格产品、边角料、废品、产品保留涂层及报告期库存。残差超过场址记录的测量不确定度时必须解释。 |

## 5. 系统边界

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `sb_factory_gate` | 前景产品系统 | 纳入外购钢丝、钢带或钢棒的接收与搬运、切断与成形、按路线适用的热处理和淬火、实际执行的磨削、去毛刺、清洗、钝化、喷丸、防腐处理和检验，以及场内废物处理至移交出厂。 | `us-census-naics-2022-spring-manufacturing`; `us-epa-james-spring-wire`; `eu-rfcs-lighttech-2020` |
| `sb_upstream_separation` | 外购产品和能源 | 炼钢、拉丝、钢带或钢棒生产、外购化学品生产和能源供应采用独立上游数据集表示。不得把上游负荷重复作为直接前景基本流。 | `us-census-naics-2022-spring-manufacturing` |
| `sb_conditional_routes` | 热处理和表面精整 | 仅纳入声明产品实际采用的加热、淬火、清洗、喷丸、钝化、电镀、涂装或防锈工序。各项材料投入和废物产出应拆分为独立交换；没有按产量加权的原始记录时不得平均互斥路线。 | `us-epa-james-spring-wire`; `eu-rfcs-lighttech-2020` |
| `sb_exclusions` | 产品系统排除项 | 除非研究明确扩展边界并单独报告，否则排除资本品、员工通勤、研发、独立包装、出厂运输、安装、使用、维护和报废阶段。 |  |
| `sb_direct_emissions` | 前景基本流 | 仅报告从设施直接进入环境的排放。电力、天然气、钢材、水或化学品所含的上游排放留在其供应数据集中。 |  |

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 外购钢丝、钢带或钢棒进入设施门界时，声明供应商、牌号、尺寸、质量、热处理状态、涂层状态、采用时的再生含量声明及上游数据集引用 |
| starting_condition_role | 弹簧前景成形的上游产品投入 |
| product_classification_scope | 主要产品属性属于 CPC 3.0 代码 42945 的铁或钢制弹簧、弹簧片和弹簧组件 |
| recursive_input_rule | 若外购本类别成品弹簧并装入弹簧组件，则将其作为单独定量且有独立数据集的上游产品投入记录一次；不得再次展开或重复其弹簧制造前景链 |
| upstream_dataset_requirement | 有条件时采用供应商和牌号特定数据集；否则采用与确切钢丝、钢带或钢棒形态相匹配且技术和地域具有代表性的数据集，并披露代理 |
| disclosure | 声明弹簧形态、钢牌号、原料形态、成形温度、热处理和淬火路线、精整和涂层工序、场内或外协操作、产品净质量、废品、包装处理、设施地域、基准年及一体化上游生产 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `forming` | 原料准备与弹簧成形 | required | 外购钢丝、钢带或钢棒路线始终纳入；若成形外协则予以声明 | 前景切断、弯曲、卷绕、盘绕、压制或簧片成形 | 转移的成形弹簧坯质量 |
| `heat_treatment` | 热处理与淬火 | conditional | 声明产品采用加热、去应力、淬硬、回火、等温淬火或淬火时纳入 | 前景热状态调控 | 转移的热处理弹簧坯质量 |
| `finishing_inspection` | 表面精整与最终检验 | required | 最终检验始终纳入；仅在实际执行时纳入磨削、去毛刺、清洗、钝化、喷丸或防腐处理 | 前景精整与合格品放行 | 合格参考产品质量 |

### 过程：原料准备与弹簧成形（`forming`）

#### 输入

##### 产品流

###### 外购铁或非合金钢丝（`steel_wire`）

仅在线材成形弹簧路线且外购钢丝符合所选流分类中的铁或非合金钢范围时记录该投入。前景记录应标明钢牌号、直径、供应商、涂层和来料热状态。

- 选定流：钢丝 `62bb3717-f62c-43e0-baca-46a1e6f847c4`
- 流属性/单位：Mass / kg
- 数量规则：按声明产品批次计量消耗的接收钢丝质量，并校正期初和期末库存
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_receipts`
- 来源：`us-census-naics-2022-spring-manufacturing`

###### 外购低合金钢丝（`low_alloy_steel_wire`）

仅在线材成形弹簧路线且外购钢丝为低合金钢时记录该投入。声明确切合金牌号、弹簧钢丝规范、直径、供应商、涂层、来料热状态和上游拉丝边界。

- 选定流：低合金钢丝 `461d98b3-a825-41bb-9b16-056331873326`
- 流属性/单位：Mass / kg
- 数量规则：按声明产品批次计量消耗的接收低合金钢丝质量，并校正期初和期末库存
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_receipts`
- 来源：`us-census-naics-2022-spring-manufacturing`

###### 外购弹簧钢带（`steel_strip`）

仅对由钢带制造的片簧、平面弹簧、碟形弹簧或涡卷弹簧记录该投入。确认精确公开弹簧钢带流之前 UUID 保持为空。

- 选定流：弹簧钢带
- 流属性/单位：Mass / kg
- 数量规则：按声明产品批次计量消耗的接收弹簧钢带质量，并校正期初和期末库存
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_receipts`
- 来源：`us-census-naics-2022-spring-manufacturing`; `eu-prodcom-2006-springs`

###### 外购弹簧钢棒（`steel_rod`）

仅对热卷或其他由棒材成形的弹簧记录该投入。前景记录应标明弹簧钢牌号、直径、供应商和来料热状态。

- 选定流：弹簧钢棒
- 流属性/单位：Mass / kg
- 数量规则：按声明产品批次计量消耗的接收弹簧钢棒质量，并校正期初和期末库存
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_receipts`
- 来源：`us-census-naics-2022-spring-manufacturing`; `eu-prodcom-2006-springs`

###### 成形用电（`forming_electricity`）

记录分配给声明产品批次的切断、盘绕、卷绕、压制、搬运和成形辅助设备计量用电。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：计量电量由 kWh 换算为 MJ，并按合格产品产出归一化
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集后计算（`calculated_from_collection`）
- 采集协议：`cp_forming_energy`
- 来源：

###### 矿物油基成形润滑剂（`forming_lubricant`）

仅记录切断和成形中消耗、随零件带出或损失的润滑剂；循环库存应校正期初和期末存量。

- 选定流：矿物油基金属成形润滑剂
- 流属性/单位：Mass / kg
- 数量规则：采购量加期初库存，减期末库存、回收润滑剂和有记录的转移量，并分配至声明产品批次
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集后计算（`calculated_from_collection`）
- 采集协议：`cp_forming_consumables`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 转移至下一工序的成形钢制弹簧坯（`formed_blank_output`）

该内部中间品保留所声明的合金、几何形状和成形后状态。在按路线进行热处理或精整之前计量。

- 选定流：成形钢制弹簧坯
- 流属性/单位：Mass / kg
- 数量规则：从成形工序转移至热处理或直接转移至精整的计量质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_forming_outputs`
- 来源：`us-census-naics-2022-spring-manufacturing`

##### 废物流

###### 钢制边角料和成形废品（`steel_offcuts`）

记录从成形工序送往回收、处理或处置的分类钢制边角料和废坯；不得用其质量冲减钢材投入。

- 选定流：钢废料，边角料 `57ac39af-dc0e-4c66-b357-56a68b7d892b`
- 流属性/单位：Mass / kg
- 数量规则：离开成形工序的边角料和废坯计量质量，扣除同一报告期内有记录的内部回炉或返工返回量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_forming_outputs`
- 来源：

##### 基本流

### 过程：热处理与淬火（`heat_treatment`）

#### 输入

##### 产品流

###### 进入热处理的成形钢制弹簧坯（`formed_blank_heat_input`）

库存校正后，该内部投入等于同一报告期从 `formed_blank_output` 分流进入热处理的部分。

- 选定流：成形钢制弹簧坯
- 流属性/单位：Mass / kg
- 数量规则：进入声明热处理路线的计量质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_heat_records`
- 来源：`us-epa-james-spring-wire`

###### 热处理用电（`heat_treatment_electricity`）

纳入相关操作时，记录电炉、感应系统、循环、淬火搬运及温控设备用电。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：计量电量由 kWh 换算为 MJ，并分配至已处理产品批次
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集后计算（`calculated_from_collection`）
- 采集协议：`cp_heat_records`
- 来源：

###### 热处理用天然气（`natural_gas_heat_treatment`）

仅对燃气炉或直接燃烧热工操作记录天然气。声明计量基准条件，并排除无关产品或建筑物用气。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Volume / m3
- 数量规则：在声明基准条件下，分配至所声明热处理批次的计量天然气体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_heat_records`
- 来源：

###### 淬火油（`quenching_oil`）

仅在采用油淬路线时记录新油或补充淬火油。声明所用配方，并对散装油罐补加量校正期初、期末库存及回收油。

- 选定流：淬火油 `02f62137-e204-46e6-8e72-e88b450fbdc4`
- 流属性/单位：Mass / kg
- 数量规则：油淬生产期间采购量加期初库存，减期末库存、回收油和有记录的转移量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集后计算（`calculated_from_collection`）
- 采集协议：`cp_heat_records`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 转移至精整的热处理钢制弹簧坯（`heat_treated_blank_output`）

该内部中间品保留所声明的合金、几何形状、炉型路线、温度—时间过程、淬火介质和处理后状态。

- 选定流：热处理钢制弹簧坯
- 流属性/单位：Mass / kg
- 数量规则：剔除热处理废品后，从热处理放行至精整的计量质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_heat_outputs`
- 来源：`us-epa-james-spring-wire`

##### 废物流

###### 废淬火油（`spent_quenching_oil`）

记录退出使用并送往再生、能源回收、处理或处置的淬火油，不得用其冲减补充油。

- 选定流：废淬火油 `0f997fd8-26b1-432f-a8b8-e2703616b018`
- 流属性/单位：Mass / kg
- 数量规则：退出使用的淬火油称量或有凭证的转移质量，并分配至已处理产品批次
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_heat_outputs`
- 来源：

##### 基本流

###### 燃气热处理直接排放的化石源二氧化碳（`fossil_co2_heat_treatment`）

仅记录场内天然气燃烧直接排放的化石源二氧化碳。不得在此加入电力、天然气供应或钢材生产的上游排放。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：直接测量排放质量，或使用有记录的场址批准因子和氧化基准由计量天然气计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集后计算（`calculated_from_collection`）
- 采集协议：`cp_combustion_emissions`
- 来源：

### 过程：表面精整与最终检验（`finishing_inspection`）

#### 输入

##### 产品流

###### 未经成形后热处理而进入精整的成形坯（`formed_blank_finishing_input`）

仅在声明路线将成形坯直接送往精整时记录该内部投入。库存校正后应与相应成形产出核对一致。

- 选定流：成形钢制弹簧坯
- 流属性/单位：Mass / kg
- 数量规则：不采用成形后热处理时，进入精整的成形坯计量质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_records`
- 来源：

###### 进入精整的热处理坯（`heat_treated_blank_finishing_input`）

仅对声明的热处理路线记录该内部投入。库存校正后应与 `heat_treated_blank_output` 核对一致。

- 选定流：热处理钢制弹簧坯
- 流属性/单位：Mass / kg
- 数量规则：进入精整的热处理弹簧坯计量质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_records`
- 来源：

###### 精整用电（`finishing_electricity`）

记录声明批次实际采用的磨削、去毛刺、喷丸、清洗、干燥、涂装、搬运和检验设备用电。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：计量电量由 kWh 换算为 MJ，并分配至声明精整批次
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集后计算（`calculated_from_collection`）
- 采集协议：`cp_finishing_records`
- 来源：`us-epa-james-spring-wire`

###### 清洗和精整用工艺用水（`process_water_finishing`）

记录用于清洗、漂洗、钝化补水或抑尘并跨越精整边界的工艺用水。闭路循环水不得重复计量；仅记录净补水。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：分配至声明精整批次的计量或水箱平衡净工艺补水量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集后计算（`calculated_from_collection`）
- 采集协议：`cp_finishing_records`
- 来源：`us-epa-james-spring-wire`

###### 碱性清洗用氢氧化钠（`sodium_hydroxide_finishing`）

仅在声明的清洗或表面处理化学体系使用氢氧化钠时记录。按溶液质量和浓度报告氢氧化钠干基当量。

- 选定流：氢氧化钠 `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- 流属性/单位：Mass / kg
- 数量规则：溶液质量乘以经核实的氢氧化钠质量分数，并校正库存和回收量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集后计算（`calculated_from_collection`）
- 采集协议：`cp_finishing_records`
- 来源：`us-epa-james-spring-wire`

###### 喷丸用钢丸（`steel_shot`）

仅对声明的喷丸路线记录钢丸补加量。对补加量校正设备期初和期末库存以及回收复用钢丸。

- 选定流：钢丸
- 流属性/单位：Mass / kg
- 数量规则：声明喷丸生产期间采购量加期初库存，减期末库存、回收复用钢丸和有记录的转移量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集后计算（`calculated_from_collection`）
- 采集协议：`cp_finishing_records`
- 来源：`eu-rfcs-lighttech-2020`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 合格弹簧成品（`reference_product`）

仅记录通过声明尺寸、机械性能、表面状态和批次验收要求的弹簧产品。该质量不含独立包装。

- 选定流：铁或钢制弹簧和弹簧片 `650cda2f-7baa-413f-ac22-ff0da54ea8ba`
- 流属性/单位：Mass / kg
- 数量规则：最终检验放行的合格成品净质量计量值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_outputs`
- 来源：`un-cpc-3-0-structure-2025`; `eu-prodcom-2006-springs`

##### 废物流

###### 废钢丸（`spent_steel_shot`）

记录退出使用并送往回收、处理或处置的钢丸；排除返回设备继续使用的可复用钢丸。

- 选定流：弹簧喷丸产生的废钢丸
- 流属性/单位：Mass / kg
- 数量规则：从声明喷丸路线移出的废钢丸称量或有凭证的转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_outputs`
- 来源：`eu-rfcs-lighttech-2020`

###### 金属精整废水（`metal_finishing_wastewater`）

记录从弹簧清洗、漂洗、钝化或表面处理送往场内或场外处理的废水。不得与未受污染的冷却水或生活污水合并。

- 选定流：弹簧清洗和表面处理产生的金属精整废水
- 流属性/单位：Mass / kg
- 数量规则：计量排放质量，或用实测密度将体积换算为质量，并扣除单独计量的未污染水
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集后计算（`calculated_from_collection`）
- 采集协议：`cp_finishing_outputs`
- 来源：`us-epa-james-spring-wire`

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `al_subdivide` | 共用成形、热处理和精整设备 | 应先按产品批次、设备时间、炉次、仪表、槽体平衡或生产活动细分，再使用分配。 |  |
| `al_mass_energy_drivers` | 仍需分配的共用投入和产出 | 钢材和质量相关耗材按实测产品质量及过程收率分配；电力和燃料按分表用量、设备时间乘以实测负荷或炉次能源分配。存在因果物理依据时不得采用收入分配。 |  |
| `al_scrap` | 钢制边角料和废品 | 将废钢质量和去向作为独立产出记录。除非研究另行声明后果型或替代模型，否则不得在前景清单内扣除原生钢避免负荷或给予回收信用。 |  |
| `al_co_products` | 同一生产活动的多种可售弹簧产品 | 仅在产出不能细分时将不同规格的弹簧视为共产品。默认采用有记录的质量分配；若质量不能代表共用过程则采用其他因果物理关系，并报告方法和敏感性。 |  |
| `al_no_double_count` | 内部中间品和返工 | 成形坯和热处理坯内部转移不产生新的上游负荷。同一报告期内返回的返工只计一次，并通过库存和废品记录核对。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_receipts` | `forming` | 钢丝、钢带和钢棒投入 | 采购收货单、地磅记录、库存台账、材质证明 | 供应商；钢牌号；形态；直径或厚度；涂层；热处理状态；接收质量；期初库存；期末库存；批次标识 | 将有证明的收货与实物库存核对至产品批次消耗 | kg | 每次收货及每月库存结账 | 至少一个有代表性的连续 12 个月；较短活动则覆盖整个活动期 | 生产声明产品的全部设施 | 按形态和牌号汇总消耗质量，再按合格产品质量归一化 | 经校准秤记录、材质证明、库存核对、供应商发票 |
| `cp_forming_energy` | `forming` | 成形用电 | 分表或设备能源日志 | 仪表标识；期初和期末 kWh；设备标识；运行时间；产品批次；生产质量 | 读取专用电表；共用时按实测负荷—时间分配至批次 | kWh 和 MJ | 每班或每批；每月核对 | 与产品产出相同期间 | 成形设备及直接辅助设备 | kWh 换算为 MJ；汇总分配能源；除以合格产品质量 | 电表校准、负荷测试、生产日志、分配工作表 |
| `cp_forming_consumables` | `forming` | 成形润滑剂 | 采购、领用、回收和库存记录 | 产品名称；组成或安全数据表；采购质量；期初库存；期末库存；回收质量；批次标识 | 槽体或容器质量平衡 | kg | 每次领用；每月库存结账 | 与产品产出相同期间 | 仅成形操作 | 采购加期初库存，减期末库存、回收和转移；除以合格产品质量 | 库存核对、秤校准、采购和回收记录 |
| `cp_forming_outputs` | `forming` | 成形坯和钢制边角料 | 转移称量、废品日志、废钢单据 | 批次标识；坯料质量；边角料质量；废品质量；返工返回；在制品期初和期末库存 | 称量转移件和废料容器并核对在制品 | kg | 每批；每月核对 | 与产品产出相同期间 | 成形输出边界 | 库存变化后汇总净转移和废物；按合格产品质量归一化 | 秤校准、转移日志、废钢单据、废品处置记录 |
| `cp_heat_records` | `heat_treatment` | 热处理投入 | 批次卡、炉体电表、燃气表、油品库存记录 | 批次标识；坯料质量；炉型路线；温度—时间程序；kWh；天然气 m3 和基准条件；油品补加；油品库存；淬火介质 | 采集炉次和专用仪表记录并平衡淬火油 | kg、kWh、MJ、m3 | 每炉；每月公用工程核对 | 纳入的完整热处理活动期 | 纳入的炉体和淬火系统 | 将炉次特定投入分配至处理质量；按合格产品质量归一化 | 经校准仪表、炉温曲线、批次追溯、槽体平衡 |
| `cp_heat_outputs` | `heat_treatment` | 热处理坯和废淬火油 | 放行称量、废品日志、危险废物转移联单 | 批次标识；放行质量；废品质量；废油质量；去向；库存变化 | 称量放行中间品和外运油品容器 | kg | 每批或每次废物外运 | 与热处理投入相同期间 | 纳入的热处理和淬火系统 | 汇总放行质量和退出使用油品；按合格产品质量归一化 | 秤校准、批次放行、废物联单、库存核对 |
| `cp_combustion_emissions` | `heat_treatment` | 直接化石源二氧化碳 | 烟道测试、连续监测、燃气表、批准计算表 | 实测 CO2 质量或浓度与流量；天然气体积；基准条件；排放因子；氧化因子；运行时间 | 优先直接测量；否则用计量天然气和有记录的场址批准因子计算 | kg | 连续、测试活动或每报告期 | 与天然气消耗相同期间 | 仅直接炉体排放点 | 汇总直接化石源 CO2 并除以合格产品质量 | 监测器校准、烟道测试报告、仪表记录、因子批准与计算轨迹 |
| `cp_finishing_records` | `finishing_inspection` | 精整投入 | 转移称量、分表、水表、化学品领用、钢丸库存 | 按路线的来料坯质量；kWh；水质量或体积及密度；氢氧化钠溶液质量和浓度；钢丸补加、回收和库存；批次标识 | 核对路线特定仪表、批次表、化学品领用和库存 | kg、kWh、MJ | 每批或每班；每月核对 | 与产品产出相同期间 | 声明批次使用的精整和检验设备 | 计算净补加量和路线特定用量；按合格产品质量归一化 | 仪表和秤校准、浓度证明、库存核对、路线日志 |
| `cp_finishing_outputs` | `finishing_inspection` | 合格产品、废钢丸和废水 | 最终称量、检验放行、废物转移、排放仪表 | 合格质量；废品质量；检验结果；废钢丸质量；废水体积或质量；密度；去向；批次标识 | 称量合格产品和废物；计量废水；保留检验处置记录 | kg 和 m3 | 每批及每次废物转移；每月核对 | 与精整投入相同期间 | 最终检验和精整废物边界 | 分别汇总合格质量和各项废物；按合格产品质量归一化 | 经校准秤和仪表、检验证书、废物联单、实验室或密度记录 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize` | 全部清单行 | 归一化数量 = 报告期分配至声明批次的流量 / 报告期合格产品净质量 | 分配流量；合格参考产品质量 | 每 1 kg 合格产品的数量 |  |
| `calc_electricity` | 电力清单行 | MJ = 计量 kWh × 3.6；归一化 MJ = MJ / 合格产品 kg | kWh；合格产品 kg | MJ/kg 参考产品 |  |
| `calc_sodium_hydroxide` | 氢氧化钠 | 干基 NaOH 质量 = 溶液质量 × 经核实的 NaOH 质量分数 | 溶液质量；浓度证明或实验室结果 | kg NaOH/kg 参考产品 |  |
| `calc_water_mass` | 工艺用水和废水 | 质量 = 实测体积 × 报告期代表性实测密度；当溶解或悬浮固体影响显著时不得假定密度 | 体积；密度；合格产品 kg | kg/kg 参考产品 |  |
| `calc_internal_balance` | 内部中间品 | 期初在制品 + 过程产出 - 期末在制品 = 下游转移 + 废品 + 有记录的返工返回 | 转移称量；在制品库存；废品；返工 | 核对后的中间品质量 |  |
| `calc_total_mass_balance` | 全部前景系统 | 钢材投入 + 产品保留的非钢材料投入 = 合格产品 + 外运废物 + 库存增加 + 实测直接质量排放 + 残差 | 全部质量清单行；库存变化 | 质量平衡残差及百分比 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | 参考产品和钢材原料 | 保持从材质证明到合格产品的批次追溯，并声明牌号、形态、图纸、热处理和表面状态。 | 材质证明、工艺流转卡、检验放行、产品规范 |
| `dq_measurement` | 质量、电力、燃气、水和化学品记录 | 使用经校准仪表或有记录的库存平衡；记录校准状态、单位、基准条件、适用时的检出限及不确定度。 | 校准证书、仪表日志、槽体或库存核对 |
| `dq_temporal` | 前景数据集 | 至少覆盖一个有代表性的连续 12 个月；活动生产或新投产可缩短，但须说明停产、异常批次和较短期间。 | 生产日历、月度汇总、代表性评审 |
| `dq_completeness` | 前景清单 | 核对外购钢材、内部转移、合格产出、废品、废物、直接排放、公用工程和库存变化；记录排除流及筛选依据。 | 质量和能源平衡、废物台账、许可排放清单、排除记录 |
| `dq_route` | 条件性热处理和精整 | 识别每条实际路线及其产量份额。没有按产量加权的原始记录时，不得平均互斥炉型、淬火、喷丸、清洗或涂层路线。 | 工艺流转卡、炉体配方、槽液日志、产量份额 |
| `dq_geography_technology` | 上游数据集 | 匹配钢材形态和牌号、能源地域、供应商技术及基准年；披露全部代理及预期偏差方向。 | 供应商数据集元数据、代理评估、地域和技术声明 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `val_reference_flow` | 参考产品 | 确认参考产出采用 UUID `650cda2f-7baa-413f-ac22-ff0da54ea8ba`、Mass、kg，并且恰为不含独立包装的 1 kg 合格产品净质量。 | `un-cpc-3-0-structure-2025`; `eu-prodcom-2006-springs` |
| `val_product_scope` | 产品属性 | 确认产品主要属性为铁或钢制弹簧、弹簧片或弹簧组件，并且本 PCR 不代表已排除的垫圈、减振器、钟表弹簧、有色金属弹簧及非弹簧组件。 | `un-cpc-3-0-structure-2025`; `eu-prodcom-2006-springs` |
| `val_feedstock_route` | 成形投入 | 仅实际消耗的钢丝、钢带和钢棒形态可以具有非零数量，并分别声明牌号、尺寸、供应商和来料状态。 | `us-census-naics-2022-spring-manufacturing` |
| `val_internal_transfers` | 内部中间品 | 在校正在制品库存变化、废品和返工后，核对成形坯和热处理坯的产出与下游投入；内部转移不得新增负荷。 |  |
| `val_conditional_processes` | 热处理和精整 | 核实每项实际采用的炉体、淬火、磨削、清洗、钝化、喷丸或防腐路线均记录其原子化投入和产出，并明确记录未采用路线。 | `us-epa-james-spring-wire`; `eu-rfcs-lighttech-2020` |
| `val_energy_emissions` | 能源和直接排放 | 核对电力和燃气仪表至纳入设备，并确认直接化石源 CO2 不含供应链上游排放。计算排放必须保留因子、氧化基准和计算轨迹。 |  |
| `val_mass_balance` | 前景产品系统 | 满足场址记录的质量平衡容差；否则以测量不确定度、库存变化、未计量的产品保留涂层或纠正措施解释残差。 |  |
| `val_data_period` | 数据集质量 | 确认投入、产出、废物、能源和排放记录覆盖同一代表性期间和设施范围。 |  |
| `val_uuid_status` | 带 UUID 的流 | 确认所有保存的流、流属性及单位组 UUID 仍为 state code 100 的公开记录，并与所记录的英文和中文 baseName、流类型、分类、属性及单位组一致。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 用于评审并可进一步发布为 secondary_dataset 或 background_dataset 的前景弹簧制造数据集 |
| downstream_use | 产品碳足迹、过程 LCA、供应链比较，以及消耗铁或钢制弹簧或弹簧片产品的 lifecyclemodel 构建 |
| allowed_use | 用于声明的弹簧形态、钢牌号、成形路线、热处理、精整状态、设施地域、技术和基准期；超出时须完成代表性评估 |
| excluded_use | 不得作为有色金属或聚合物弹簧、弹簧垫圈、减振器、钟表弹簧、未建模的一体化钢铁生产、下游使用或寿命，以及未经调整的重大不同热处理或表面处理路线的代理 |
| required_metadata | PCR id 和版本状态；产品及流 UUID；弹簧形态和用途；图纸或零件族；钢牌号和原料形态；成形与热处理路线；淬火介质；精整和涂层；净质量和包装处理；设施地域；基准年和期间；产量；分配；上游数据集选择；截断；未解决 UUID 披露 |
| required_quality_disclosure | 原始数据占比；仪表和秤校准；材料与内部转移质量平衡结果；时间、地域和技术代表性；路线产量份额；数据缺口和代理；不确定度；排除流；直接排放方法；废物去向；评审状态 |
| update_trigger | 产品范围、钢牌号族、原料形态、成形技术、炉体或淬火路线、精整或涂层路线、设施能源供应、分配、废物处理、基准期或重要数据源发生变化时更新；未解决流 UUID 或范围证据需求解决时也应更新 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | official_guidance | 联合国统计司，《CPC Version 3.0 Structure》，2025-06-30，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv（检索日期 2026-09-05） | CPC 42945 的精确产品属性和层级 |
| `us-census-naics-2022-spring-manufacturing` | official_guidance | 美国人口普查局，《2022 NAICS Manual》，Spring and Wire Product Manufacturing 与 Spring Manufacturing，第 234 页，https://www.census.gov/naics/reference_files_tools/2022_NAICS_Manual.pdf（检索日期 2026-09-05） | 外购钢丝、钢带或钢棒起始边界及成形过程分解 |
| `us-epa-james-spring-wire` | official_guidance | 美国环境保护署，James Spring and Wire Company 设施说明，https://19january2021snapshot.epa.gov/hwcorrectiveactionsites/hazardous-waste-cleanup-james-spring-and-wire-company-incorporated-frazer_.html（检索日期 2026-09-05） | 磨削、清洗、钝化、热处理、表面处理、装配、包装和设施废物流证据 |
| `eu-prodcom-2006-springs` | official_guidance | Commission Regulation (EC) No 317/2006，PRODCOM 2005 清单，Official Journal L 60，第 168—169 页，https://eur-lex.europa.eu/LexUriServ/LexUriServ.do?uri=OJ:L:2006:060:0001:0282:EN:PDF（检索日期 2026-09-05） | 所涵盖的热成形和冷成形片簧、螺旋弹簧、平面涡卷弹簧、碟形弹簧及其他钢制弹簧形态；kg 报告单位 |
| `eu-rfcs-lighttech-2020` | official_guidance | 欧盟委员会，《Synopsis of RFCS Projects 2017-2020》，LIGHTTECH 项目 799787，第 127 页，https://research-and-innovation.ec.europa.eu/system/files/2020-12/synopsis_of_rfcs_projects_2017-2020.pdf（检索日期 2026-09-05） | 应力喷丸作为高强度钢板弹簧的路线特定工序 |
| `china-mof-2026-research-import-list` | official_guidance | 中华人民共和国财政部，2026 年免税科研货物清单，第 16 页，税目 7320，https://m.mof.gov.cn/zcfb/202601/P020260114634207037460.pdf（检索日期 2026-09-05） | 经核实的专业中文产品名称 |
